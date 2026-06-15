import { Mesh } from 'three';
/**
 * Mesh partitioning for the public LightmapBaker.bake() pipeline.
 *
 * Two orthogonal strategies:
 *
 *  1. Resolution mode - meshes share atlases keyed by `resolution`.
 *     A mesh with `perMesh[uuid].resolution = 2048` lands in its own 2048²
 *     atlas group; meshes without an override go into the `globalRes` group.
 *
 *  2. Density mode - meshes are bin-packed by world-space surface area.
 *     Triggered when the bake call passes `texelsPerMeter`. All packed
 *     atlases share `atlasResolution`; per-mesh `density` weights atlas
 *     demand. Meshes that can't fit one atlas at target density auto-spawn
 *     additional atlases via `binPackMeshes`.
 *
 * Excluded meshes are never assigned to a group, but the caller still
 * builds the BVH from ALL meshes (excluded ones cast shadows + contribute
 * GI without receiving a lightmap).
 */
export type PerMeshOverride = {
    resolution?: number;
    density?: number;
    exclude?: boolean;
};
export type Partition = {
    /** Meshes skipped entirely - no UV unwrap, no lightmap. */
    excluded: Mesh[];
    /** Group key → meshes. Key semantics depend on mode (resolution vs atlasIdx). */
    groups: Map<number, Mesh[]>;
    /** All packed groups share this lightmap side length. */
    resolution: number;
};
/**
 * Resolution-keyed partition. Group keys are the resolution in texels.
 * Always returns at least one group (containing all non-excluded meshes
 * at `globalRes`) when no `perMesh.resolution` overrides apply.
 */
export declare function partitionByResolution(meshes: Mesh[], perMesh: Record<string, PerMeshOverride>, globalRes: number): Partition;
/**
 * Density-keyed partition via bin-packing. Group keys are atlas indices
 * (0, 1, 2, …) - all atlases share `atlasResolution`. The number of groups
 * is determined by the packer based on world-space surface area + density.
 *
 * Per-mesh `resolution` overrides are IGNORED in this mode (they're
 * mutually exclusive with density-aware sizing). The caller is expected
 * to surface a DEV warning when both are set.
 */
export declare function partitionByDensity(meshes: Mesh[], perMesh: Record<string, PerMeshOverride>, atlasResolution: number, texelsPerMeter: number): Partition;
//# sourceMappingURL=Partition.d.ts.map