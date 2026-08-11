import {
  BufferAttribute,
  BufferGeometry,
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Texture,
} from 'three';
import { mergeGeometries, mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { BakeError } from '../errors';

const KEPT_ATTRIBUTES = new Set(['position', 'normal', 'uv', 'uv2']);
const MESH_INDEX_ATTRIBUTE = 'meshIndex';
const MATERIAL_INDEX_ATTRIBUTE = 'sourceMaterialIndex';
const HAS_UV_ATTRIBUTE = 'sourceHasUv';

/**
 * Merge meshes into one indexed geometry suitable for MeshBVH.
 *
 * Every input is temporarily de-indexed so material-group identity can be
 * tagged per triangle, then re-indexed with those tags participating in vertex
 * equality. MeshBVH may reorder only the final index buffer; mesh/material tags
 * and source UVs remain attached to vertices and therefore survive that reorder.
 */
export const mergeGeometry = (meshes: Mesh[]): BufferGeometry => {
  const prepped = meshes.map((mesh, meshIdx) => {
    let geometry = mesh.geometry.clone();
    for (const name of Object.keys(geometry.attributes)) {
      if (!KEPT_ATTRIBUTES.has(name)) geometry.deleteAttribute(name);
    }
    geometry.applyMatrix4(mesh.matrixWorld);
    if (geometry.index) geometry = geometry.toNonIndexed();

    const positions = geometry.getAttribute('position');
    if (!positions) {
      throw new BakeError('mesh geometry has no position attribute', 'geometry', mesh.name);
    }
    if (positions.count % 3 !== 0) {
      throw new BakeError('mesh geometry vertex count is not triangular', 'geometry', mesh.name);
    }

    const hadUv = geometry.hasAttribute('uv');
    if (!hadUv)
      geometry.setAttribute('uv', new BufferAttribute(new Float32Array(positions.count * 2), 2));

    const meshIndices = new Float32Array(positions.count);
    meshIndices.fill(meshIdx);
    const materialIndices = new Float32Array(positions.count);
    const hasUvs = new Float32Array(positions.count);
    hasUvs.fill(hadUv ? 1 : 0);
    for (let triangle = 0; triangle < positions.count / 3; triangle++) {
      const slot = materialSlotForTriangle(mesh, triangle);
      materialIndices.fill(slot, triangle * 3, triangle * 3 + 3);
    }
    geometry.setAttribute(MESH_INDEX_ATTRIBUTE, new BufferAttribute(meshIndices, 1));
    geometry.setAttribute(MATERIAL_INDEX_ATTRIBUTE, new BufferAttribute(materialIndices, 1));
    geometry.setAttribute(HAS_UV_ATTRIBUTE, new BufferAttribute(hasUvs, 1));

    return mergeVertices(geometry);
  });

  const merged = mergeGeometries(prepped);
  if (!merged) {
    const names = meshes.map((mesh, index) => mesh.name || `<unnamed#${index}>`).join(', ');
    throw new BakeError(
      `mergeGeometries returned null - incompatible attribute sets across meshes [${names}]`,
      'geometry',
    );
  }
  return merged;
};

export interface PerTriangleMaterials {
  /** Base material.color, RGB triplets keyed by post-BVH triangle ID. */
  albedo: Float32Array;
  emissive: Float32Array;
  /** Source UV0 for all three vertices: u0,v0,u1,v1,u2,v2. */
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

type MaterialSurface = {
  albedo: readonly [number, number, number];
  emissive: readonly [number, number, number];
  map: Texture | null;
  transform: readonly [number, number, number, number, number, number];
  wrapS: number;
  wrapT: number;
};

const WHITE_FALLBACK: MaterialSurface = {
  albedo: [1, 1, 1],
  emissive: [0, 0, 0],
  map: null,
  transform: [1, 0, 0, 1, 0, 0],
  wrapS: 1001,
  wrapT: 1001,
};

/** Resolve the material array slot assigned to an original source triangle. */
export function materialSlotForTriangle(mesh: Mesh, triangle: number): number {
  if (!Array.isArray(mesh.material)) return 0;
  const offset = triangle * 3;
  for (const group of mesh.geometry.groups) {
    const end = group.start + group.count;
    if (offset >= group.start && offset < end) return Math.max(0, (group.materialIndex ?? 0) | 0);
  }
  return 0;
}

function triangleCount(mesh: Mesh): number {
  const geometry = mesh.geometry;
  if (geometry.index) return geometry.index.count / 3;
  const positions = geometry.getAttribute('position');
  if (!positions) {
    throw new BakeError('mesh geometry missing position attribute', 'geometry', mesh.name);
  }
  return positions.count / 3;
}

function materialAtSlot(mesh: Mesh, slot: number): Material | undefined {
  if (!Array.isArray(mesh.material)) return mesh.material;
  return mesh.material[slot] ?? mesh.material[0];
}

function readMaterialSurface(material: Material | undefined, hasUv: boolean): MaterialSurface {
  if (!material) return WHITE_FALLBACK;
  const candidate = material as MeshStandardMaterial & MeshBasicMaterial;
  if (!('color' in candidate) || !candidate.color) return WHITE_FALLBACK;

  const emissive =
    'emissive' in candidate && candidate.emissive
      ? candidate.emissive.clone().multiplyScalar(candidate.emissiveIntensity ?? 1)
      : null;
  const map = hasUv && 'map' in candidate ? (candidate.map ?? null) : null;
  if (map?.matrixAutoUpdate) map.updateMatrix();
  const elements = map?.matrix.elements;
  return {
    albedo: [candidate.color.r, candidate.color.g, candidate.color.b],
    emissive: emissive ? [emissive.r, emissive.g, emissive.b] : [0, 0, 0],
    map,
    transform: elements
      ? [elements[0]!, elements[1]!, elements[3]!, elements[4]!, elements[6]!, elements[7]!]
      : [1, 0, 0, 1, 0, 0],
    wrapS: map?.wrapS ?? 1001,
    wrapT: map?.wrapT ?? 1001,
  };
}

/**
 * Extract material and UV records keyed by the post-BVH triangle ordering.
 * MUST be called after `new MeshBVH(merged)` mutates `merged.index`.
 */
export const extractPerTriangleMaterials = (
  merged: BufferGeometry,
  meshes: Mesh[],
): PerTriangleMaterials => {
  const index = merged.index;
  if (!index) {
    throw new BakeError('mergeGeometry must produce an indexed geometry', 'geometry');
  }
  const meshIndex = merged.getAttribute(MESH_INDEX_ATTRIBUTE) as BufferAttribute | undefined;
  const materialIndex = merged.getAttribute(MATERIAL_INDEX_ATTRIBUTE) as
    | BufferAttribute
    | undefined;
  const hasUv = merged.getAttribute(HAS_UV_ATTRIBUTE) as BufferAttribute | undefined;
  const uv = merged.getAttribute('uv') as BufferAttribute | undefined;
  if (!meshIndex || !materialIndex || !hasUv || !uv) {
    throw new BakeError('merged geometry is missing source surface attributes', 'geometry');
  }

  const totalTriangles = index.count / 3;
  const albedo = new Float32Array(totalTriangles * 3);
  const emissive = new Float32Array(totalTriangles * 3);
  const uvs = new Float32Array(totalTriangles * 6);
  const mapTransforms = new Float32Array(totalTriangles * 6);
  const wrapModes = new Float32Array(totalTriangles * 2);
  const maps = new Array<Texture | null>(totalTriangles).fill(null);
  const meshIndices = new Uint32Array(totalTriangles);
  const materialSlots = new Uint32Array(totalTriangles);

  for (let triangle = 0; triangle < totalTriangles; triangle++) {
    const vertices = [
      index.getX(triangle * 3),
      index.getX(triangle * 3 + 1),
      index.getX(triangle * 3 + 2),
    ];
    const first = vertices[0] ?? 0;
    const sourceMeshIndex = Math.max(0, meshIndex.getX(first) | 0);
    const slot = Math.max(0, materialIndex.getX(first) | 0);
    const sourceMesh = meshes[sourceMeshIndex];
    const surface = sourceMesh
      ? readMaterialSurface(materialAtSlot(sourceMesh, slot), hasUv.getX(first) > 0.5)
      : WHITE_FALLBACK;
    meshIndices[triangle] = sourceMeshIndex;
    materialSlots[triangle] = slot;
    maps[triangle] = surface.map;
    albedo.set(surface.albedo, triangle * 3);
    emissive.set(surface.emissive, triangle * 3);
    mapTransforms.set(surface.transform, triangle * 6);
    wrapModes.set([surface.wrapS, surface.wrapT], triangle * 2);
    for (let corner = 0; corner < 3; corner++) {
      const vertex = vertices[corner] ?? first;
      uvs[triangle * 6 + corner * 2] = uv.getX(vertex);
      uvs[triangle * 6 + corner * 2 + 1] = uv.getY(vertex);
    }
  }

  return {
    albedo,
    emissive,
    uvs,
    mapTransforms,
    wrapModes,
    maps,
    meshIndices,
    materialSlots,
    totalTriangles,
    perMeshTriangleCounts: meshes.map(triangleCount),
  };
};
