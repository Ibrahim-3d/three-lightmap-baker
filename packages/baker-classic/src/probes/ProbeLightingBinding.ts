import { Color, type Mesh, type MeshStandardMaterial, Vector3 } from 'three';
import { ProbeVolume } from './ProbeVolume';

export type ProbeLightingBindingOptions = {
  intensity?: number;
  multiplyByAlbedo?: boolean;
  maxIrradiance?: number;
  sampleOffset?: Vector3;
};

type MaterialState = {
  material: MeshStandardMaterial;
  emissive: Color;
  emissiveIntensity: number;
};

/**
 * Lightweight runtime bridge for the MVP probe system.
 *
 * The binding samples the volume at the mesh world position and folds the
 * diffuse probe contribution into MeshStandardMaterial.emissive. This keeps
 * the integration renderer-native and updateable per frame without replacing
 * the material shader. Call `dispose()` to restore original emissive settings.
 */
export class ProbeLightingBinding {
  private readonly states: MaterialState[];
  private readonly worldPosition = new Vector3();
  private readonly sampled = new Color();
  private readonly contribution = new Color();
  private readonly combined = new Color();
  private readonly intensity: number;
  private readonly multiplyByAlbedo: boolean;
  private readonly maxIrradiance: number;
  private readonly sampleOffset: Vector3;

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
      .map((material) => ({
        material,
        emissive: material.emissive.clone(),
        emissiveIntensity: material.emissiveIntensity,
      }));
    if (!this.states.length) {
      throw new Error('[baker:probes] probe lighting requires MeshStandardMaterial');
    }
  }

  update(): void {
    this.mesh.updateWorldMatrix(true, false);
    this.mesh.getWorldPosition(this.worldPosition).add(this.sampleOffset);
    this.volume.sample(this.worldPosition, this.sampled);

    for (const state of this.states) {
      this.contribution.copy(this.sampled);
      if (this.multiplyByAlbedo) this.contribution.multiply(state.material.color);
      this.contribution.setRGB(
        Math.min(this.maxIrradiance, Math.max(0, this.contribution.r)),
        Math.min(this.maxIrradiance, Math.max(0, this.contribution.g)),
        Math.min(this.maxIrradiance, Math.max(0, this.contribution.b)),
      );
      this.contribution.multiplyScalar(this.intensity);
      this.combined.copy(state.emissive).multiplyScalar(state.emissiveIntensity);
      this.combined.add(this.contribution);
      state.material.emissive.copy(this.combined);
      state.material.emissiveIntensity = 1;
    }
  }

  getLastIrradiance(target: Color = new Color()): Color {
    return target.copy(this.sampled);
  }

  dispose(): void {
    for (const state of this.states) {
      state.material.emissive.copy(state.emissive);
      state.material.emissiveIntensity = state.emissiveIntensity;
    }
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
