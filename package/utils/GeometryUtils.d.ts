import { BufferGeometry, Mesh } from 'three';
/**
 * Merge meshes into a single BufferGeometry suitable for MeshBVH.
 *
 * Side-effect: tags every vertex with a `meshIndex` attribute (its position in
 * the input `meshes` array). MeshBVH reorders the merged `index` buffer
 * in-place during construction (sortUtils.template.js partition swaps
 * triangles to build a spatially-sorted tree), so a triangle's position in
 * the post-BVH index buffer no longer matches its position in the original
 * mesh-by-mesh concatenation. Vertices are NOT reordered though, so reading
 * `meshIndex` from any of the triangle's vertices recovers the original mesh
 * identity. Used by extractPerTriangleMaterials to build a material lookup
 * keyed by post-BVH triangle index - matching what the GPU shader's
 * `faceIndices.w` returns at hit time.
 *
 * Normalizes inputs: forces indexed geometry (mergeVertices) and strips
 * non-essential attributes so mixed scenes (GLB imports + procedural meshes
 * + helpers) don't cause `mergeGeometries` to reject the batch.
 */
export declare const mergeGeometry: (meshes: Mesh[]) => BufferGeometry;
/**
 * Per-triangle material data, in the same order as mergeGeometry concatenates
 * its inputs. Index N in these arrays refers to the same triangle the BVH
 * reports as faceIndex N at hit time.
 *
 * Both arrays are flat RGB triplets - length === totalTriangles * 3.
 */
export interface PerTriangleMaterials {
    albedo: Float32Array;
    emissive: Float32Array;
    totalTriangles: number;
    perMeshTriangleCounts: number[];
}
/**
 * Build per-triangle material arrays keyed by the triangle's index in the
 * post-BVH-construction merged index buffer (which is what the GPU shader
 * receives in `faceIndices.w` at hit time).
 *
 * MUST be called AFTER `new MeshBVH(merged)` - the BVH reorders `merged.index`
 * in place, so calling this before BVH construction produces an off-by-mesh
 * lookup table that returns the wrong colour for almost every hit.
 *
 * Recovery of mesh identity is via the per-vertex `meshIndex` attribute that
 * `mergeGeometry` writes. Vertices are not reordered, only the index buffer,
 * so reading `meshIndex` of any vertex of a triangle recovers the original
 * mesh.
 */
export declare const extractPerTriangleMaterials: (merged: BufferGeometry, meshes: Mesh[]) => PerTriangleMaterials;
//# sourceMappingURL=GeometryUtils.d.ts.map