import { ShaderMaterial } from 'three';
/**
 * TexelDensityMaterial - Unity/Unreal-style "Lightmap Density" debug visualization.
 *
 * Each mesh wears a checker pattern in UV2 space; checker color encodes how this
 * mesh's actual texel density compares to a target density (texels per world meter).
 *
 *   Red    = density too low  (< 0.5× target - undersampled, will look blocky)
 *   Yellow = slightly low     (0.5..0.8×)
 *   Green  = ideal            (0.8..1.2×)
 *   Cyan   = slightly high    (1.2..1.5×)
 *   Blue   = too high         (> 1.5× - wasted lightmap area on this mesh)
 *
 * Computed via dFdx/dFdy of UV2 vs the lightmap resolution to derive
 * texels-per-world-unit, then divided by the user's target.
 *
 * Derived from the user-supplied spec in Task 07E. Material is shared
 * across meshes - uniforms are global. Per-mesh density (Task 07F) will
 * clone this material per-mesh once meshes hold their own resolution.
 */
export type TexelDensityMaterialOptions = {
    /** Target density in texels per world meter. Typical interior value: 10. */
    texelsPerMeter: number;
    /** Lightmap side length in pixels. Used to convert UV-derivatives → texels. */
    lightmapSize: number;
};
export declare class TexelDensityMaterial extends ShaderMaterial {
    constructor(opts: TexelDensityMaterialOptions);
    setTexelsPerMeter(v: number): void;
    setLightmapSize(v: number): void;
}
//# sourceMappingURL=TexelDensityMaterial.d.ts.map