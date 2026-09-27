import { Mesh } from 'three';
export type GenerateAtlasOptions = {
    padding?: number;
    signal?: AbortSignal;
    /** Actual lightmap side length used to resolve packing and padding. */
    resolution?: number;
    /** Target texels per world unit. When omitted, legacy fill-the-atlas packing is used. */
    texelsPerUnit?: number;
    /** Per-mesh density multiplier keyed by mesh uuid. */
    perMeshScale?: Record<string, number>;
};
export type LoadXAtlasThreeOptions = {
    signal?: AbortSignal;
    /** Override the packaged xatlas WASM URL, for example when hosting assets on a dedicated CDN. */
    wasmUrl?: string;
    /** Override the packaged xatlas loader URL, for example when applying a custom CSP. */
    scriptUrl?: string;
};
/** Validate/preload the selected assets. Every pack owns a fresh, terminable worker. */
export declare const loadXAtlasThree: (options?: LoadXAtlasThreeOptions) => Promise<void>;
/**
 * Run one xatlas pack per bin - meshes within a bin share a [0,1]² atlas;
 * meshes in different bins occupy different atlases (and therefore different
 * lightmap render targets downstream).
 *
 * Calls `generateAtlas` once per bin serially to keep geometry mutations ordered.
 * After this returns, every input mesh has a
 * fresh `uv2` attribute mapped into its bin's atlas - there is no per-mesh
 * offset/scale to track on the CPU side; xatlas remaps directly.
 *
 * Empty bins are skipped (no-op). Bin order is preserved; the consumer is
 * responsible for calling `renderAtlas` on the same per-bin mesh lists in
 * the same order so atlas-index mappings stay aligned.
 */
export declare const generateAtlases: (meshesByBin: Mesh[][], options?: GenerateAtlasOptions) => Promise<void>;
export declare const generateAtlas: (meshes: Mesh[], options?: GenerateAtlasOptions) => Promise<void>;
//# sourceMappingURL=generateAtlas.d.ts.map