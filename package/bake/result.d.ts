import { Mesh, Texture, WebGLRenderer } from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import { type PostProcessOptions } from '../lightmap';
import { type ExportFormat } from '../utils/exportLightmap';
import type { BakeHooks, BakeStats, BakeGroupView } from './types';
import type { GroupInternals } from './internals';
/** Result of a successful bake. Owns the GPU resources - call `dispose()` to release. */
export declare class LightmapBakeResult {
    private readonly renderer;
    private readonly meshLightmaps;
    private readonly meshResolutions;
    readonly stats: BakeStats;
    private readonly internals;
    private persistentMaterialMount;
    constructor(renderer: WebGLRenderer, meshLightmaps: Map<Mesh, Texture>, meshResolutions: Map<Mesh, number>, stats: BakeStats, internals: {
        groups: GroupInternals[];
        bvh: MeshBVH;
        refinementOptions: PostProcessOptions;
        denoise: boolean;
        matTexDispose: () => void;
    });
    /**
     * Returns the per-mesh lightmap textures. Meshes in the same resolution group
     * share a texture. Excluded meshes are not present in the map.
     */
    get lightmaps(): Map<Mesh, Texture>;
    /**
     * Live BVH used by every group's mappers - covers the FULL bake set
     * (including excluded meshes, since they cast shadows / contribute GI).
     * Read-only handle; lifetime is owned by the result. Useful for advanced
     * callers that want to reuse the BVH for their own ray queries.
     */
    get bvh(): MeshBVH;
    /**
     * Public per-group view - every texture produced by every group's bake.
     * Use this for advanced layer mounting (debug visualizations of Direct,
     * Indirect, AO, Position, Normal channels), multi-atlas viewers, or
     * manual refinement re-runs against the live composite.
     *
     * Texture refs are STABLE - store the ref, not a copy. Three.js will see
     * updates automatically on accumulation, AO re-bake, or manual refinement.
     *
     * Cost: O(groups) - each call rebuilds the wrapper array.
     */
    get groups(): ReadonlyArray<BakeGroupView>;
    /**
     * Find the group containing a given mesh. Used by per-mesh layer mounting
     * (e.g. mounting the right group's composite on a mesh's `material.lightMap`
     * when meshes from different groups share the scene). Returns `null` if
     * the mesh was excluded or not part of the bake.
     */
    getGroupForMesh(mesh: Mesh): BakeGroupView | null;
    /** Mounts each mesh's atlas texture as `mat.lightMap` (channel = 2). */
    apply(): void;
    /**
     * Trigger browser downloads of all group atlases. `pathOrName` is used as a
     * basename hint; each group appends `_groupN` when there are multiple groups.
     */
    export(pathOrName?: string, opts?: {
        format?: ExportFormat;
    }): Promise<void>;
    dispose(): void;
    /**
     * View-time AO tweak - applies new intensity / exponent / enabled to every
     * group's composite. Sub-millisecond per group; no re-bake. Returns
     * immediately. Use this for `aoIntensity`, `aoExponent`, and `aoEnabled`.
     */
    refreshAO(opts: {
        intensity?: number;
        exponent?: number;
        enabled?: boolean;
    }): void;
    /**
     * Re-bake AO only - re-runs every group's AO mapper with the supplied
     * options, refreshes its composite to read the new AO texture, and re-runs
     * refinement. Bounce textures (direct/indirect) are NOT touched. Cost ≈
     * (AO ray cost / total bake ray cost) × original bake time, typically
     * 5–15% of a full bake.
     *
     * Use for `aoSamples` / `ambientDistance` slider changes.
     * Use `refreshAO()` instead for `aoIntensity` / `aoExponent` / `aoEnabled`.
     */
    rebakeAO(opts: {
        samples: number;
        distance: number;
        targetSamples: number;
    }, hooks?: BakeHooks): Promise<void>;
}
//# sourceMappingURL=result.d.ts.map