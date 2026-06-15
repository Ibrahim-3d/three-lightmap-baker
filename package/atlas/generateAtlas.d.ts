import { Mesh } from 'three';
export type GenerateAtlasOptions = {
    /** Actual lightmap side length. Used by xatlas when texel density is active. */
    resolution?: number;
    /** Target texels per world unit. When omitted, legacy fill-the-atlas packing is used. */
    texelsPerUnit?: number;
    /** Per-mesh density multiplier keyed by mesh uuid. */
    perMeshScale?: Record<string, number>;
};
export declare const loadXAtlasThree: () => Promise<void>;
/**
 * Pack the given meshes into ONE shared [0,1]² UV atlas. Each mesh's `uv2`
 * attribute is rewritten in place to point at its assigned region within the
 * atlas - downstream `renderAtlas` rasterizes all of them into one G-buffer.
 *
 * The xatlas-three `UVUnwrapper` is module-scoped - calls to this function
 * MUST be serial (await between calls). For multi-atlas pipelines, see
 * `generateAtlases` below.
 */
export declare const generateAtlas: (meshs: Mesh[], options?: GenerateAtlasOptions) => Promise<void>;
/**
 * Run one xatlas pack per bin - meshes within a bin share a [0,1]² atlas;
 * meshes in different bins occupy different atlases (and therefore different
 * lightmap render targets downstream).
 *
 * Calls `generateAtlas` once per bin SERIALLY. Concurrent calls would corrupt
 * the module-scoped `UVUnwrapper`. After this returns, every input mesh has a
 * fresh `uv2` attribute mapped into its bin's atlas - there is no per-mesh
 * offset/scale to track on the CPU side; xatlas remaps directly.
 *
 * Empty bins are skipped (no-op). Bin order is preserved; the consumer is
 * responsible for calling `renderAtlas` on the same per-bin mesh lists in
 * the same order so atlas-index mappings stay aligned.
 */
export declare const generateAtlases: (meshesByBin: Mesh[][], options?: GenerateAtlasOptions) => Promise<void>;
//# sourceMappingURL=generateAtlas.d.ts.map