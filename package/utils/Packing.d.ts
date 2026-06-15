import { Mesh } from 'three';
export declare const DEFAULT_DENSITY_FILL_RATIO = 0.95;
/**
 * Sum of triangle areas in WORLD space. Walks the geometry's index buffer
 * (or vertex buffer if non-indexed) and applies `mesh.matrixWorld` to each
 * vertex before computing the triangle's cross-product / 2 area.
 *
 * Caller must have flushed `scene.updateMatrixWorld(true)` first - this
 * function reads `matrixWorld` directly without re-computing.
 *
 * Returns 0 for meshes with no position attribute (treated as no-op).
 */
export declare function computeMeshSurfaceArea(mesh: Mesh): number;
export interface BinPackOptions {
    /** Atlas side length in texels (e.g. 1024). All atlases share this size. */
    atlasResolution: number;
    /**
     * Target texel density - texels per world unit (typically meters).
     * Higher = more lightmap detail per mesh, more atlases required.
     */
    texelsPerMeter: number;
    /**
     * Per-mesh density multiplier keyed by `mesh.uuid`. 2.0 = double density,
     * 0.5 = half. Used by an "Important This Mesh" UI knob. Missing entries
     * default to 1.0.
     */
    perMeshScale?: Record<string, number>;
    /**
     * Per-bin fill safety margin. Default 0.95. xatlas chart packing rarely
     * achieves 100% efficiency; leaving a 5% headroom prevents the last mesh
     * placed in a bin from causing chart overflow that triggers a re-pack.
     */
    fillRatio?: number;
}
export interface DensityTexelsPerMeterOptions {
    /** Atlas side length in texels (e.g. 1024). */
    atlasResolution: number;
    /**
     * User-facing scene density multiplier. `1` fills one atlas, `2` asks for
     * roughly 4x the atlas area, and so on.
     */
    densityMultiplier: number;
    /** Per-mesh density multiplier keyed by `mesh.uuid`. */
    perMeshScale?: Record<string, number>;
    /** Target baseline fill for multiplier 1. Default 0.95. */
    fillRatio?: number;
}
export interface BinAssignment {
    /** 0-indexed atlas this mesh is assigned to. */
    atlasIdx: number;
    mesh: Mesh;
    /** Fraction of one atlas this mesh occupies (0..1) at its requested density. */
    uvFraction: number;
    /** World-space surface area (units²). Cached for downstream debug logging. */
    surfaceArea: number;
}
/**
 * Convert the user-facing density multiplier into the actual texels-per-world
 * unit value used by xatlas and the bin-packer.
 *
 * Multiplier 1 is calibrated from the current scene: sum all eligible mesh
 * surface area, include per-mesh density weights, and solve for the texel
 * density that uses `fillRatio` of a single atlas.
 */
export declare function resolveDensityTexelsPerMeter(meshes: ReadonlyArray<Mesh>, opts: DensityTexelsPerMeterOptions): number;
/**
 * Greedy first-fit-decreasing bin-pack. One "bin" = one atlas of side
 * `atlasResolution`. Each mesh's UV demand is proportional to its world-space
 * surface area times `texelsPerMeter²`.
 *
 * Algorithm:
 *  1. Compute per-mesh `uvFraction = surfaceArea * texelsPerMeter² / atlasTexels`.
 *  2. Sort meshes largest-first.
 *  3. For each mesh, place it in the first existing bin whose
 *     `currentFill + uvFraction <= fillRatio`. If none fits, open a new bin.
 *
 * If a single mesh's `uvFraction` exceeds `fillRatio` (one mesh demands more
 * than one atlas can hold at the target density), it's clamped to `fillRatio`
 * and gets its own atlas - its effective density falls below the user's target,
 * which the texel-density debug visualization will surface as a red band.
 *
 * Returns one `BinAssignment` per input mesh, in input order (not sort order).
 */
export declare function binPackMeshes(meshes: Mesh[], opts: BinPackOptions): BinAssignment[];
//# sourceMappingURL=Packing.d.ts.map