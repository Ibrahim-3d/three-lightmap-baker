import { ShaderMaterial, Texture } from 'three';
export type DenoiseMaterialOptions = {
    map: Texture;
    sigma?: number;
    threshold?: number;
    kSigma?: number;
};
/**
 * Bilateral denoiser (BrutPitt's smartDeNoise). GLSL 1.0 ES - kept on this version
 * deliberately because the algorithm uses `texture2D` and reads-on-loop that have
 * no measurable benefit from GLSL3 conversion, and Phase 7 fork preserves it.
 *
 * SAFETY: this material is the ONE exception to the project's GLSL3 rule; the rest
 * of the pipeline writes/reads via this shader using a standard Texture handoff.
 */
export declare class DenoiseMaterial extends ShaderMaterial {
    customProgramCacheKey(): string;
    constructor(options: DenoiseMaterialOptions);
}
//# sourceMappingURL=DenoiseMaterial.d.ts.map