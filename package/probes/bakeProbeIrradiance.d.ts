import { type WebGLRenderer } from 'three';
import { ProbeVolume } from './ProbeVolume';
import type { ProbeBakeHooks, ProbeBakeOptions, ProbeBakeSource, ProbeBakeStats } from './types';
/**
 * Approximate diffuse probe irradiance from the baked surface atlases.
 *
 * World-position/normal atlas texels are paired with the final baked radiance,
 * shifted slightly into the visible hemisphere, and distributed into the eight
 * surrounding probes. Empty interior probes are then filled by neighbour
 * diffusion. This is intentionally an MVP bridge from baked surfaces to dynamic
 * objects; it does not claim directional SH reconstruction.
 */
export declare function bakeProbeIrradianceFromLightmaps(renderer: WebGLRenderer, source: ProbeBakeSource, volume: ProbeVolume, options?: ProbeBakeOptions, hooks?: ProbeBakeHooks): Promise<ProbeBakeStats>;
//# sourceMappingURL=bakeProbeIrradiance.d.ts.map