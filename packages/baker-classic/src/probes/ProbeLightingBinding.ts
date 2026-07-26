import { Color, type Mesh, type MeshStandardMaterial, Vector3 } from 'three';
import { ProbeVolume } from './ProbeVolume';

export type ProbeLightingBindingOptions = {
  /** Overall probe-light multiplier. Default 1. */
  intensity?: number;
  /** Multiply irradiance by the material base color in the PBR shader. Default true. */
  multiplyByAlbedo?: boolean;
  /** Clamp each irradiance channel before applying intensity. Default 4. */
  maxIrradiance?: number;
  /** World-space offset from the mesh origin used to sample the volume. */
  sampleOffset?: Vector3;
};

type ProbeUniform = { value: Color };

type MaterialState = {
  material: MeshStandardMaterial;
  uniform: ProbeUniform;
  originalOnBeforeCompile: MeshStandardMaterial['onBeforeCompile'];
  originalCustomProgramCacheKey: MeshStandardMaterial['customProgramCacheKey'];
};

/**
 * Runtime PBR integration for baked probe irradiance.
 *
 * The binding keeps the original MeshStandardMaterial and injects one uniform
 * contribution into `reflectedLight.indirectDiffuse`. Unlike the original MVP,
 * this does not write to `material.emissive`: probe light therefore remains
 * diffuse lighting and continues through the standard Three.js material,
 * tone-mapping, fog, direct-light, shadow, roughness, and metalness pipeline.
 *
 * Call `update()` after moving the mesh (normally once per frame). Call
 * `dispose()` before discarding the binding so the original shader hooks are
 * restored.
 */
export class ProbeLightingBinding {
  private readonly states: MaterialState[];
  private readonly worldPosition = new Vector3();
  private readonly sampled = new Color();
  private readonly contribution = new Color();
  private readonly intensity: number;
  private readonly multiplyByAlbedo: boolean;
  private readonly maxIrradiance: number;
  private readonly sampleOffset: Vector3;
  private disposed = false;

  constructor(
    readonly mesh: Mesh,
    readonly volume: ProbeVolume,
    options: ProbeLightingBindingOptions = {},
  ) {
    this.intensity = finiteNonNegative(options.intensity ?? 1, 'intensity');
    this.multiplyByAlbedo = options.multiplyByAlbedo ?? true;
    this.maxIrradiance = finiteNonNegative(options.maxIrradiance ?? 4, 'maxIrradiance');
    this.sampleOffset = options.sampleOffset?.clone() ?? new Vector3();

    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    this.states = materials
      .filter((material): material is MeshStandardMaterial => {
        return 'isMeshStandardMaterial' in material && material.isMeshStandardMaterial === true;
      })
      .map((material) => this.installMaterialHook(material));

    if (!this.states.length) {
      throw new Error('[baker:probes] probe lighting requires MeshStandardMaterial');
    }

    this.update();
  }

  update(): void {
    if (this.disposed) return;
    this.mesh.updateWorldMatrix(true, false);
    this.mesh.getWorldPosition(this.worldPosition).add(this.sampleOffset);
    this.volume.sample(this.worldPosition, this.sampled);

    this.contribution.copy(this.sampled);
    this.contribution.setRGB(
      Math.min(this.maxIrradiance, Math.max(0, this.contribution.r)),
      Math.min(this.maxIrradiance, Math.max(0, this.contribution.g)),
      Math.min(this.maxIrradiance, Math.max(0, this.contribution.b)),
    );
    this.contribution.multiplyScalar(this.intensity);

    for (const state of this.states) state.uniform.value.copy(this.contribution);
  }

  getLastIrradiance(target: Color = new Color()): Color {
    return target.copy(this.sampled);
  }

  dispose(): void {
    if (this.disposed) return;
    this.disposed = true;
    for (const state of this.states) {
      state.material.onBeforeCompile = state.originalOnBeforeCompile;
      state.material.customProgramCacheKey = state.originalCustomProgramCacheKey;
      state.material.needsUpdate = true;
    }
  }

  private installMaterialHook(material: MeshStandardMaterial): MaterialState {
    const uniform: ProbeUniform = { value: new Color() };
    const originalOnBeforeCompile = material.onBeforeCompile;
    const originalCustomProgramCacheKey = material.customProgramCacheKey;
    const multiplyExpression = this.multiplyByAlbedo
      ? 'bakerProbeIrradiance * diffuseColor.rgb * RECIPROCAL_PI'
      : 'bakerProbeIrradiance';

    material.onBeforeCompile = function probeOnBeforeCompile(shader, renderer): void {
      originalOnBeforeCompile.call(this, shader, renderer);
      shader.uniforms.bakerProbeIrradiance = uniform;
      shader.fragmentShader = `uniform vec3 bakerProbeIrradiance;\n${shader.fragmentShader}`;

      const marker = '#include <lights_fragment_begin>';
      if (!shader.fragmentShader.includes(marker)) {
        throw new Error('[baker:probes] MeshStandardMaterial lights fragment hook was not found');
      }
      shader.fragmentShader = shader.fragmentShader.replace(
        marker,
        `${marker}\nreflectedLight.indirectDiffuse += ${multiplyExpression};`,
      );
    };

    material.customProgramCacheKey = function probeProgramCacheKey(): string {
      return `${originalCustomProgramCacheKey.call(this)}|baker-probe-pbr-v1|${
        this === material && multiplyExpression.includes('diffuseColor') ? 'albedo' : 'raw'
      }`;
    };
    material.needsUpdate = true;

    return {
      material,
      uniform,
      originalOnBeforeCompile,
      originalCustomProgramCacheKey,
    };
  }
}

export function bindProbeLighting(
  mesh: Mesh,
  volume: ProbeVolume,
  options: ProbeLightingBindingOptions = {},
): ProbeLightingBinding {
  return new ProbeLightingBinding(mesh, volume, options);
}

function finiteNonNegative(value: number, name: string): number {
  if (!Number.isFinite(value) || value < 0) {
    throw new Error(`[baker:probes] ${name} must be finite and >= 0`);
  }
  return value;
}
