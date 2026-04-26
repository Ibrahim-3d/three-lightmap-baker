import {
  BufferAttribute,
  BufferGeometry,
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { BakeError } from '../errors';

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
 * keyed by post-BVH triangle index — matching what the GPU shader's
 * `faceIndices.w` returns at hit time.
 */
export const mergeGeometry = (meshes: Mesh[]): BufferGeometry => {
  const prepped = meshes.map((mesh, meshIdx) => {
    const g = mesh.geometry.clone();
    g.deleteAttribute('color');
    g.applyMatrix4(mesh.matrixWorld);

    const posAttr = g.attributes.position;
    if (!posAttr)
      throw new BakeError('mesh geometry has no position attribute', 'geometry', mesh.name);
    const vCount = posAttr.count;
    const meshIdxArr = new Float32Array(vCount);
    meshIdxArr.fill(meshIdx);
    g.setAttribute('meshIndex', new BufferAttribute(meshIdxArr, 1));

    return g;
  });
  return mergeGeometries(prepped);
};

/**
 * Per-triangle material data, in the same order as mergeGeometry concatenates
 * its inputs. Index N in these arrays refers to the same triangle the BVH
 * reports as faceIndex N at hit time.
 *
 * Both arrays are flat RGB triplets — length === totalTriangles * 3.
 */
export interface PerTriangleMaterials {
  albedo: Float32Array;
  emissive: Float32Array;
  totalTriangles: number;
  perMeshTriangleCounts: number[];
}

const triangleCount = (mesh: Mesh): number => {
  const g = mesh.geometry;
  if (g.index) return g.index.count / 3;
  const pos = g.attributes.position;
  if (!pos) throw new BakeError('mesh geometry missing position attribute', 'geometry', mesh.name);
  return pos.count / 3;
};

type MatColors = { aR: number; aG: number; aB: number; eR: number; eG: number; eB: number };

const WHITE_FALLBACK: MatColors = { aR: 1, aG: 1, aB: 1, eR: 0, eG: 0, eB: 0 };

const readMaterialColors = (material: Material | Material[]): MatColors => {
  // Material arrays (faces with different materials per group). For now we
  // take the first entry and warn — proper per-face lookup needs the
  // geometry's `groups` mapping. None of Cornell's meshes use this path.
  if (Array.isArray(material)) {
    console.warn(
      '[baker] material array detected; using slot 0 only — per-face material groups not yet supported',
    );
    const slot0 = material[0];
    return slot0 ? readMaterialColors(slot0) : WHITE_FALLBACK;
  }

  const m = material as MeshStandardMaterial & MeshBasicMaterial;

  // MeshStandardMaterial / MeshPhysicalMaterial — has both .color and .emissive
  if ('emissive' in m && m.emissive) {
    const intensity = (m as MeshStandardMaterial).emissiveIntensity ?? 1.0;
    return {
      aR: m.color.r,
      aG: m.color.g,
      aB: m.color.b,
      eR: m.emissive.r * intensity,
      eG: m.emissive.g * intensity,
      eB: m.emissive.b * intensity,
    };
  }

  // MeshBasicMaterial — has .color only, no emissive concept
  if ('color' in m && m.color) {
    return { aR: m.color.r, aG: m.color.g, aB: m.color.b, eR: 0, eG: 0, eB: 0 };
  }

  // ShaderMaterial / RawShaderMaterial / unknown — can't extract a single albedo
  console.warn(
    '[baker] material has no .color (likely ShaderMaterial); defaulting to white albedo',
  );
  return WHITE_FALLBACK;
};

/**
 * Build per-triangle material arrays keyed by the triangle's index in the
 * post-BVH-construction merged index buffer (which is what the GPU shader
 * receives in `faceIndices.w` at hit time).
 *
 * MUST be called AFTER `new MeshBVH(merged)` — the BVH reorders `merged.index`
 * in place, so calling this before BVH construction produces an off-by-mesh
 * lookup table that returns the wrong colour for almost every hit.
 *
 * Recovery of mesh identity is via the per-vertex `meshIndex` attribute that
 * `mergeGeometry` writes. Vertices are not reordered, only the index buffer,
 * so reading `meshIndex` of any vertex of a triangle recovers the original
 * mesh.
 */
export const extractPerTriangleMaterials = (
  merged: BufferGeometry,
  meshes: Mesh[],
): PerTriangleMaterials => {
  const indexAttr = merged.index;
  if (!indexAttr) {
    throw new BakeError(
      'mergeGeometry must produce an indexed geometry; got non-indexed',
      'geometry',
    );
  }
  const meshIdxAttr = merged.attributes.meshIndex as BufferAttribute | undefined;
  if (!meshIdxAttr) {
    throw new BakeError(
      "merged geometry is missing 'meshIndex' attribute — did mergeGeometry skip the per-vertex tag?",
      'geometry',
    );
  }

  const perMeshTriangleCounts = meshes.map(triangleCount); // for diagnostic logging only
  const totalTriangles = indexAttr.count / 3;

  const albedo = new Float32Array(totalTriangles * 3);
  const emissive = new Float32Array(totalTriangles * 3);

  const meshColors: MatColors[] = meshes.map((m) => readMaterialColors(m.material));

  const indexArr = indexAttr.array as Uint16Array | Uint32Array;
  const meshIdxArr = meshIdxAttr.array as Float32Array;

  for (let tri = 0; tri < totalTriangles; tri++) {
    // Read the first vertex of the triangle in the (BVH-reordered) index buffer
    // and look up its mesh tag. All three vertices of a triangle share the same
    // meshIndex by construction (every vertex in a per-mesh chunk got tagged
    // uniformly), so any of them works.
    // SAFETY: tri < totalTriangles = indexAttr.count/3, so tri*3 < indexArr.length;
    // v0 is a vertex index < meshIdxArr.length by mergeGeometry's invariant.
    const v0 = indexArr[tri * 3] ?? 0;
    const meshIdx = (meshIdxArr[v0] ?? 0) | 0;
    const c = meshColors[meshIdx] ?? WHITE_FALLBACK;
    const o = tri * 3;
    albedo[o] = c.aR;
    albedo[o + 1] = c.aG;
    albedo[o + 2] = c.aB;
    emissive[o] = c.eR;
    emissive[o + 1] = c.eG;
    emissive[o + 2] = c.eB;
  }

  return { albedo, emissive, totalTriangles, perMeshTriangleCounts };
};
