import {
  Box3,
  Mesh,
  MeshStandardMaterial,
  NoToneMapping,
  type Object3D,
  type Scene,
  type Texture,
  type WebGLRenderer,
} from 'three';
import type { LightmapBakeResult } from '../bake/result';
import {
  captureNativeLightProbeGrid,
  captureNativeLightProbeGridFromJSON,
  type NativeLightProbeGridJSON,
  type NativeLightProbeGridOptions,
  type NativeLightProbeGridRestoreOptions,
  type NativeLightProbeGridResult,
} from './NativeLightProbeGrid';

type CaptureMaterial = MeshStandardMaterial & { _originalMap?: Texture | null };

export type LightmappedProbeGridOptions = NativeLightProbeGridOptions & {
  /** Multiplier applied to the baked lightmap while capturing. Default 1. */
  lightMapIntensity?: number;
  /**
   * Optional editor integration hook for recovering a temporarily replaced
   * base-color map. Normal package consumers should leave this unset.
   */
  resolveBaseColorMap?: (mesh: Mesh, material: MeshStandardMaterial) => Texture | null | undefined;
};

export type LightmappedProbeGridRestoreOptions = NativeLightProbeGridRestoreOptions & {
  lightMapIntensity?: number;
  resolveBaseColorMap?: LightmappedProbeGridOptions['resolveBaseColorMap'];
};

/**
 * Capture native Three.js probes from only the completed static bake surfaces.
 *
 * This owns the complete capture policy: final result lightmaps are mounted,
 * live lights and non-static renderables are hidden, environment/background
 * lighting and display transforms are disabled, and every mutation is restored
 * even when native capture throws.
 */
export function captureLightmappedProbeGrid(
  renderer: WebGLRenderer,
  scene: Scene,
  result: LightmapBakeResult | null,
  options: LightmappedProbeGridOptions = {},
): NativeLightProbeGridResult {
  const staticLightmaps = resolveStaticLightmaps(scene, result);
  if (!staticLightmaps.size) {
    throw new Error('[baker:probes] lightmap bake result has no completed static meshes');
  }
  const bounds = options.bounds?.clone() ?? boundsFromMeshes(staticLightmaps.keys());
  return withCaptureState(renderer, scene, staticLightmaps, options, () =>
    captureNativeLightProbeGrid(renderer, scene, bounds, {
      ...options,
      bounds,
    }),
  );
}

/** Recapture a persisted native descriptor using the same baked-scene policy. */
export function captureLightmappedProbeGridFromJSON(
  renderer: WebGLRenderer,
  scene: Scene,
  result: LightmapBakeResult | null,
  descriptor: NativeLightProbeGridJSON,
  options: LightmappedProbeGridRestoreOptions = {},
): NativeLightProbeGridResult {
  const staticLightmaps = resolveStaticLightmaps(scene, result);
  if (!staticLightmaps.size) {
    throw new Error('[baker:probes] saved native probes require restored baked lightmaps');
  }
  return withCaptureState(renderer, scene, staticLightmaps, options, () =>
    captureNativeLightProbeGridFromJSON(renderer, scene, descriptor, options),
  );
}

function withCaptureState<T>(
  renderer: WebGLRenderer,
  scene: Scene,
  staticLightmaps: Map<Mesh, Texture>,
  options: LightmappedProbeGridRestoreOptions,
  capture: () => T,
): T {
  const visibility = new Map<Object3D, boolean>();
  const materialStates: Array<{
    material: CaptureMaterial;
    map: Texture | null;
    lightMap: Texture | null;
    lightMapIntensity: number;
  }> = [];
  const lightMapChannels = new Map<Texture, number>();
  const staticMeshes = new Set(staticLightmaps.keys());
  const intensity = finiteNonNegative(options.lightMapIntensity ?? 1, 'lightMapIntensity');

  scene.traverse((object) => {
    const renderable = object as Object3D & {
      isLight?: boolean;
      isMesh?: boolean;
      isLine?: boolean;
      isPoints?: boolean;
      isSprite?: boolean;
    };
    const shouldHide =
      renderable.isLight === true ||
      ((renderable.isMesh || renderable.isLine || renderable.isPoints || renderable.isSprite) &&
        !staticMeshes.has(object as Mesh));
    if (shouldHide && object.visible) {
      visibility.set(object, true);
      object.visible = false;
    }
  });

  for (const [mesh, lightMap] of staticLightmaps) {
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const candidate of materials) {
      if (!isStandardMaterial(candidate)) continue;
      const material = candidate as CaptureMaterial;
      materialStates.push({
        material,
        map: material.map,
        lightMap: material.lightMap,
        lightMapIntensity: material.lightMapIntensity,
      });
      const resolvedMap = options.resolveBaseColorMap?.(mesh, material);
      if (resolvedMap !== undefined) material.map = resolvedMap;
      if (!lightMapChannels.has(lightMap)) lightMapChannels.set(lightMap, lightMap.channel);
      material.lightMap = lightMap;
      lightMap.channel = 2;
      material.lightMapIntensity = intensity;
      material.needsUpdate = true;
    }
  }

  const background = scene.background;
  const environment = scene.environment;
  const toneMapping = renderer.toneMapping;
  const exposure = renderer.toneMappingExposure;
  scene.background = null;
  scene.environment = null;
  renderer.toneMapping = NoToneMapping;
  renderer.toneMappingExposure = 1;
  scene.updateMatrixWorld(true);

  try {
    return capture();
  } finally {
    scene.background = background;
    scene.environment = environment;
    renderer.toneMapping = toneMapping;
    renderer.toneMappingExposure = exposure;
    for (const state of materialStates) {
      state.material.map = state.map;
      state.material.lightMap = state.lightMap;
      state.material.lightMapIntensity = state.lightMapIntensity;
      state.material.needsUpdate = true;
    }
    for (const [texture, channel] of lightMapChannels) texture.channel = channel;
    for (const [object, wasVisible] of visibility) object.visible = wasVisible;
  }
}

function boundsFromMeshes(meshes: Iterable<Mesh>): Box3 {
  const bounds = new Box3();
  for (const mesh of meshes) bounds.expandByObject(mesh, true);
  if (bounds.isEmpty()) throw new Error('[baker:probes] completed bake has no bounded meshes');
  return bounds;
}

function resolveStaticLightmaps(
  scene: Scene,
  result: LightmapBakeResult | null,
): Map<Mesh, Texture> {
  if (result) return result.lightmaps;
  const staticLightmaps = new Map<Mesh, Texture>();
  scene.traverse((object) => {
    const mesh = object as Mesh;
    if (!mesh.isMesh || !mesh.visible || object.userData?.lightmapIgnore) return;
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const baked = materials.find(
      (material): material is MeshStandardMaterial =>
        isStandardMaterial(material) &&
        material.lightMap !== null &&
        material.lightMapIntensity > 0,
    );
    if (baked?.lightMap) staticLightmaps.set(mesh, baked.lightMap);
  });
  return staticLightmaps;
}

function isStandardMaterial(value: unknown): value is MeshStandardMaterial {
  return (
    typeof value === 'object' &&
    value !== null &&
    (value as { isMeshStandardMaterial?: boolean }).isMeshStandardMaterial === true
  );
}

function finiteNonNegative(value: number, name: string): number {
  if (!Number.isFinite(value) || value < 0) {
    throw new Error(`[baker:probes] ${name} must be finite and non-negative`);
  }
  return value;
}
