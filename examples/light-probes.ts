import type { Mesh, Object3D, Scene, WebGLRenderer } from 'three';
import type { LightProbeGrid } from 'three/addons/lighting/LightProbeGrid.js';
import { LightProbeGridHelper } from 'three/addons/helpers/LightProbeGridHelper.js';
import {
  bindProbeLighting,
  bakeProbeIrradianceFromLightmaps,
  createProbeDebugView,
  generateProbeGrid,
  captureNativeLightProbeGrid,
  type LightmapBakeResult,
  type ProbeDebugView,
  type ProbeLightingBinding,
  type ProbeVolume,
} from 'lightmap-baker';

export type NativeLightProbeDemo = {
  grid: LightProbeGrid;
  helper: LightProbeGridHelper;
  dispose(): void;
};

/**
 * Preferred runtime: capture completed static lightmaps into Three.js' native
 * GPU L2 SH grid. Live lights and the moving object are excluded so the grid
 * represents the baked static scene rather than adding a second direct-light bake.
 */
export function attachNativeLightProbeDemo(
  renderer: WebGLRenderer,
  scene: Scene,
  dynamicMesh: Mesh,
): NativeLightProbeDemo {
  const hidden = new Map<Object3D, boolean>();
  scene.traverse((object) => {
    if ((object as Object3D & { isLight?: boolean }).isLight || object === dynamicMesh) {
      hidden.set(object, object.visible);
      object.visible = false;
    }
  });

  let result: ReturnType<typeof captureNativeLightProbeGrid>;
  try {
    result = captureNativeLightProbeGrid(renderer, scene, scene, {
      spacing: 1.25,
      padding: 0.1,
      maxProbes: 1024,
      cubemapSize: 8,
      bounces: 0,
    });
  } finally {
    for (const [object, visible] of hidden) object.visible = visible;
  }

  const helper = new LightProbeGridHelper(result.grid, 0.08);
  scene.add(helper);
  return {
    grid: result.grid,
    helper,
    dispose: () => {
      scene.remove(helper);
      helper.dispose();
      scene.remove(result.grid);
      result.grid.dispose();
    },
  };
}

export type LightProbeDemo = {
  volume: ProbeVolume;
  debugView: ProbeDebugView;
  binding: ProbeLightingBinding;
  update(): void;
  dispose(): void;
};

/**
 * Legacy fallback: generate the original RGB probe volume and bind it to one
 * dynamic MeshStandardMaterial object.
 */
export async function attachLightProbeDemo(
  renderer: WebGLRenderer,
  scene: Scene,
  bakeResult: LightmapBakeResult,
  dynamicMesh: Mesh,
): Promise<LightProbeDemo> {
  const volume = generateProbeGrid(scene, {
    spacing: 0.75,
    padding: 0.1,
    maxProbes: 2048,
  });

  const stats = await bakeProbeIrradianceFromLightmaps(renderer, bakeResult, volume, {
    sampleStride: 3,
    fillIterations: 5,
    intensity: 1,
    rowsPerYield: 24,
  });
  console.info('[baker:probes] generated', stats);

  const debugView = createProbeDebugView(volume, {
    opacity: 0.85,
  });
  scene.add(debugView);

  const binding = bindProbeLighting(dynamicMesh, volume, {
    intensity: 1,
    multiplyByAlbedo: true,
  });

  return {
    volume,
    debugView,
    binding,
    update: () => binding.update(),
    dispose: () => {
      binding.dispose();
      scene.remove(debugView);
      debugView.dispose();
    },
  };
}
