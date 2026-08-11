import { Mesh, Texture, Vector2, WebGLRenderer, WebGLRenderTarget } from 'three';
/**
 * Render world-space G-buffer atlases for a partition group.
 *
 * Each mesh in the group is drawn into the `position` and `normal` atlases
 * using its Lightmap UV (uv2).
 */
export type AtlasRenderResult = {
    positionTexture: Texture;
    normalTexture: Texture;
    /** Compact linear source diffuse reflectance: material.color multiplied by material.map once. */
    surfaceAlbedoTexture: Texture;
    dispose: () => void;
};
/**
 * Perform the atlas draw. Side effects: mutates `mesh.lightMap` and
 * `mesh.material.onBeforeCompile`.
 */
export declare function renderAtlas(renderer: WebGLRenderer, meshes: Mesh[], resolution: number, clear?: boolean): AtlasRenderResult;
/**
 * Internal-only variant for density-mode packing: renders a single mesh's
 * chart into a sub-region of an existing atlas.
 */
export declare function renderMeshToAtlas(renderer: WebGLRenderer, mesh: Mesh, posRT: WebGLRenderTarget, normRT: WebGLRenderTarget, surfaceAlbedoRT: WebGLRenderTarget, offset: Vector2): void;
//# sourceMappingURL=renderAtlas.d.ts.map