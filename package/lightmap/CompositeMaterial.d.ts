import { ShaderMaterial, Texture } from 'three';
export type CompositeMaterialOptions = {
    directTex: Texture;
    indirectTex: Texture;
    /** AO texture from AOMapper. Stores raw normalized visibility t ∈ [0,1]. */
    aoTex: Texture;
    directIntensity: number;
    giIntensity: number;
    aoEnabled: boolean;
    /** Darkness multiplier on AO. 1.0 = physical (default). Range 0..3. */
    aoIntensity: number;
    /**
     * Falloff curve exponent applied to stored visibility t.
     * 1.0 = linear. Higher = sharper contact darkening. Range 0.5..4.0.
     */
    aoExponent: number;
};
/**
 * Full-screen GLSL3 quad shader that sums Direct*directIntensity + Indirect*giIntensity, multiplied by AO.
 * Writes to an internal float RT - NO tonemapping, stays linear.
 * Phase A.3: giIntensity and directIntensity are applied here at view time.
 */
export declare class CompositeMaterial extends ShaderMaterial {
    customProgramCacheKey(): string;
    constructor(opts: CompositeMaterialOptions);
}
//# sourceMappingURL=CompositeMaterial.d.ts.map