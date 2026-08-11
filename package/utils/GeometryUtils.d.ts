import { BufferGeometry, Mesh, Texture } from 'three';
/**
 * Merge meshes into one indexed geometry suitable for MeshBVH.
 *
 * Every input is temporarily de-indexed so material-group identity can be
 * tagged per triangle, then re-indexed with those tags participating in vertex
 * equality. MeshBVH may reorder only the final index buffer; mesh/material tags
 * and source UVs remain attached to vertices and therefore survive that reorder.
 */
export declare const mergeGeometry: (meshes: Mesh[]) => BufferGeometry;
export interface PerTriangleMaterials {
    /** Base material.color, RGB triplets keyed by post-BVH triangle ID. */
    albedo: Float32Array;
    emissive: Float32Array;
    /** Source UV channel selected by material.map.channel for all three vertices. */
    uvs: Float32Array;
    /** Texture.matrix coefficients a,b,c,d,e,f for each triangle. */
    mapTransforms: Float32Array;
    /** Three.js wrapping constants: wrapS, wrapT for each triangle. */
    wrapModes: Float32Array;
    /** Base-color texture per triangle; null means solid material.color. */
    maps: Array<Texture | null>;
    meshIndices: Uint32Array;
    materialSlots: Uint32Array;
    totalTriangles: number;
    perMeshTriangleCounts: number[];
}
/** Resolve the material array slot assigned to an original source triangle. */
export declare function materialSlotForTriangle(mesh: Mesh, triangle: number): number;
/**
 * Extract material and UV records keyed by the post-BVH triangle ordering.
 * MUST be called after `new MeshBVH(merged)` mutates `merged.index`.
 */
export declare const extractPerTriangleMaterials: (merged: BufferGeometry, meshes: Mesh[]) => PerTriangleMaterials;
//# sourceMappingURL=GeometryUtils.d.ts.map