import { Matrix4, ShaderMaterial, Texture } from 'three';
import { MeshBVH } from 'three-mesh-bvh';
export type AOMaterialOptions = {
    bvh: MeshBVH;
    invModelMatrix: Matrix4;
    positions: Texture;
    normals: Texture;
    /** Hemisphere ray count per frame for AO. Independent of the bounce-pass casts. */
    aoSamples: number;
    /**
     * Maximum distance an AO ray's first hit counts as an occluder. Hits beyond
     * this are treated as "no occluder" (visibility=1). World units.
     */
    ambientDistance: number;
    opacity: number;
    sampleIndex: number;
};
/**
 * Standalone AO bake material. Stores RAW normalized visibility per texel -
 * `mean over rays of t`, where `t = clamp(dist/ambientDistance, 0, 1)` on hit
 * within range, else 1.0. The `aoIntensity` / `aoExponent` remap is applied
 * at composite time, so tweaking those sliders does not require a re-bake.
 *
 * Same RNG, hemisphere sampler, ray bias, and BVH usage as LightmapperMaterial.
 */
export declare class AOMaterial extends ShaderMaterial {
    customProgramCacheKey(): string;
    constructor(options: AOMaterialOptions);
}
//# sourceMappingURL=AOMaterial.d.ts.map