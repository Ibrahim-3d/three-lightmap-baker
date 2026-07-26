import type { Box3, Object3D, WebGLRenderer } from 'three';
import { bakeProbeIrradianceFromLightmaps } from './bakeProbeIrradiance';
import { generateProbeGrid } from './generateProbeGrid';
import type {
  GenerateProbeVolumeOptions,
  ProbeBakeHooks,
  ProbeBakeSource,
  ProbeBakeStats,
} from './types';
import type { ProbeVolume } from './ProbeVolume';

export type GeneratedProbeVolume = {
  volume: ProbeVolume;
  stats: ProbeBakeStats;
};

/** Generate, bake, and return a probe volume in one call. */
export async function generateProbeVolume(
  renderer: WebGLRenderer,
  sourceObject: Object3D | Box3,
  bakeSource: ProbeBakeSource,
  options: GenerateProbeVolumeOptions = {},
  hooks: ProbeBakeHooks = {},
): Promise<GeneratedProbeVolume> {
  const { bake, ...gridOptions } = options;
  const volume = generateProbeGrid(sourceObject, gridOptions);
  const stats = await bakeProbeIrradianceFromLightmaps(
    renderer,
    bakeSource,
    volume,
    bake,
    hooks,
  );
  return { volume, stats };
}
