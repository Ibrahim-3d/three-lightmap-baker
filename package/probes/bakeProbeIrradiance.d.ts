import { type Mesh, type WebGLRenderer } from 'three';
import { ProbeVolume } from './ProbeVolume';
import type { ProbeBakeHooks, ProbeBakeOptions, ProbeBakeSource, ProbeBakeStats } from './types';
type RGB = readonly [number, number, number];
/**
 * Approximate diffuse probe irradiance from the baked surface atlases.
 *
 * World-position/normal atlas texels are paired with the final albedo-free
 * incoming-light field and the source surface's material albedo. Multiplication
 * reconstructs the source's reflected diffuse contribution in the baker's
 * normalized energy convention (the baker deliberately omits a separate source
 * 1/PI here). Samples are shifted into the visible hemisphere and distributed
 * into surrounding probes. Empty probes are then filled by neighbour diffusion.
 */
export declare function bakeProbeIrradianceFromLightmaps(renderer: WebGLRenderer, source: ProbeBakeSource, volume: ProbeVolume, options?: ProbeBakeOptions, hooks?: ProbeBakeHooks): Promise<ProbeBakeStats>;
/**
 * Read material slot zero's solid base color. Kept as a small compatibility
 * utility; probe baking itself consumes the GPU-rasterized textured albedo atlas.
 */
export declare function readProbeSurfaceAlbedo(mesh: Mesh): [number, number, number] | null;
/**
 * Apply source diffuse reflectance once in the baker's normalized light units.
 * The target object's Lambertian BRDF is a separate runtime operation.
 */
export declare function projectProbeSourceDiffuse(incoming: RGB, albedo: RGB): [number, number, number];
export {};
//# sourceMappingURL=bakeProbeIrradiance.d.ts.map