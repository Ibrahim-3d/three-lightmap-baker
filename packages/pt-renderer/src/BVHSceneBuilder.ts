/**
 * BVHSceneBuilder — converts a live THREE.Scene into DataTextures for GPU path tracing.
 *
 * Mirrors Eric Loftis's prepareGeometryForPT() from GLTF_Model_Viewer.js.
 *
 * Triangle data layout (32 floats = 8 RGBA texels per triangle):
 *   slot 0: vp0.xyz | vp1.x
 *   slot 1: vp1.yz  | vp2.xy
 *   slot 2: vp2.z   | vn0.xyz
 *   slot 3: vn1.xyz | vn2.x
 *   slot 4: vn2.yz  | vt0.xy
 *   slot 5: vt1.xy  | vt2.xy
 *   slot 6: matType | color.rgb
 *   slot 7: albedoTexID | opacity | roughness | metalness
 *
 * AABB layout before BVH build (9 floats per triangle):
 *   [0..2] min.xyz  [3..5] max.xyz  [6..8] centroid.xyz
 * After buildBVH() the array is reused for BVH nodes (8 floats per node).
 *
 * Both DataTextures are 2048×2048 RGBA Float32 — matches the GLSL INV_TEXTURE_WIDTH constant.
 */

import {
  ClampToEdgeWrapping,
  DataTexture,
  FloatType,
  Material,
  Mesh,
  MeshStandardMaterial,
  NearestFilter,
  NoColorSpace,
  RGBAFormat,
  Scene,
  type Texture,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { buildBVH } from './BVHBuilder';

// Material type constants — match GLSL #defines in pathtracing_uniforms_and_defines
const MAT_LIGHT = 0; // emissive area light
const MAT_REFR = 2; // glass / dielectric refractive
const MAT_PBR = 10; // unified PBR (all metals + dielectrics)

const TEX_SIZE = 2048;
const MAX_TRIANGLES = (TEX_SIZE * TEX_SIZE) / 8; // 524,288 — 8 texels per tri

/**
 * Max unique albedo textures the renderer can bind simultaneously.
 * WebGL2 caps texture units at 16; the PT shader reserves 6 for core samplers
 * (tTriangleTexture, tAABBTexture, tLightTexture, tHDRTexture, tBlueNoiseTexture,
 * tPreviousTexture), leaving 10 for albedo maps. Builder + consumer must agree.
 */
export const MAX_ALBEDO_TEXTURES = 10;

/**
 * Enable verbose per-mesh / per-material console diagnostics during scene build.
 * Off by default — set to true (or wire to a build flag / URL param) when
 * investigating geometry / material packing bugs.
 */
const DEBUG_BUILD_LOG = false;

// ── Result type ──────────────────────────────────────────────────────────────

export interface BVHSceneData {
  triangleTexture: DataTexture;
  aabbTexture: DataTexture;
  albedoTextures: Texture[]; // unique diffuse maps from scene materials, capped at MAX_ALBEDO_TEXTURES
  triangleCount: number;
}

// ── Main build function ──────────────────────────────────────────────────────

/**
 * Collect all Mesh objects from scene, bake world transforms, merge geometry,
 * build BVH, create GPU DataTextures.
 *
 * Heavy CPU work (~50–200 ms for typical demo scenes). Call off the hot path
 * (scene load / preset switch), not per-frame.
 */
export function buildBVHScene(scene: Scene): BVHSceneData {
  // ── 1. Collect meshes ────────────────────────────────────────────────────

  const meshes: Mesh[] = [];
  scene.traverse((obj) => {
    if (!(obj instanceof Mesh) || !obj.geometry || !obj.visible) return;
    // PT renderer needs ALL MeshStandardMaterial geometry for correct ray tracing —
    // emissive surfaces are light sources, glass/mirrors affect reflections.
    // lightmapIgnore is a classic-baker flag ("don't bake onto this"); the PT
    // renderer must still see the mesh. Non-standard materials (gizmos, helpers)
    // are filtered by the hasStandardMat check below.
    const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
    const hasStandardMat = mats.some((m) => m instanceof MeshStandardMaterial);
    if (!hasStandardMat) return;
    meshes.push(obj);
  });

  if (meshes.length === 0) return _emptyScene();

  // ── 2. Collect unique albedo textures (capped at MAX_ALBEDO_TEXTURES) ────

  const albedoTextures: Texture[] = [];
  for (const mesh of meshes) {
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const mat of mats) {
      if (mat instanceof MeshStandardMaterial && mat.map) {
        if (!albedoTextures.includes(mat.map) && albedoTextures.length < MAX_ALBEDO_TEXTURES)
          albedoTextures.push(mat.map);
      }
    }
  }

  // ── 3. Build per-mesh material descriptors + triangle material markers ───

  const materialDescs: MatDesc[] = [];
  const triangleMaterialMarkers: number[] = []; // cumulative tri count per material change
  let runningTriCount = 0;

  const geoList = [];
  for (const mesh of meshes) {
    // Clone geometry and bake world transform into positions/normals
    const geo = mesh.geometry.clone();
    geo.applyMatrix4(mesh.matrixWorld);

    const nonIndexed = geo.index ? geo.toNonIndexed() : geo;
    if (!nonIndexed.attributes['position']) {
      geo.dispose();
      continue;
    }

    if (!nonIndexed.attributes['normal']) nonIndexed.computeVertexNormals();

    // Strip all attributes except position/normal/uv — avoids uv1/tangent/color
    // mismatch errors when mergeGeometries processes heterogeneous geometries.
    const keep = new Set(['position', 'normal', 'uv']);
    for (const name of Object.keys(nonIndexed.attributes)) {
      if (!keep.has(name)) nonIndexed.deleteAttribute(name);
    }

    const triCount = nonIndexed.attributes['position']!.count / 3;

    // Material lookup — Three.js convention:
    //   • mesh.material as ARRAY → groups index into the array by group.materialIndex
    //   • mesh.material as SINGLE → that material is used for ALL groups regardless of
    //     group.materialIndex (BoxGeometry assigns 0..5 to its 6 face groups, but a single
    //     material always wins). Falling back to mats[materialIndex] for a single material
    //     mesh yielded undefined for indices ≥ 1 → 5 of 6 faces silently became default-white.
    const isArrayMat = Array.isArray(mesh.material);
    const mats: Material[] = isArrayMat
      ? (mesh.material as Material[])
      : [mesh.material as Material];
    const pickMat = (groupMatIdx: number | undefined): Material | undefined => {
      if (!isArrayMat) return mats[0];
      return mats[groupMatIdx ?? 0] ?? mats[0];
    };

    if (nonIndexed.groups.length > 0) {
      for (const group of nonIndexed.groups) {
        const groupTriCount = group.count / 3;
        const mat = pickMat(group.materialIndex);
        materialDescs.push(
          _matDesc(mat instanceof MeshStandardMaterial ? mat : null, albedoTextures),
        );
        runningTriCount += groupTriCount;
        triangleMaterialMarkers.push(runningTriCount);
      }
    } else {
      const mat = pickMat(0);
      materialDescs.push(
        _matDesc(mat instanceof MeshStandardMaterial ? mat : null, albedoTextures),
      );
      runningTriCount += triCount;
      triangleMaterialMarkers.push(runningTriCount);
    }

    // ── DEBUG: per-mesh diagnostics (guarded by DEBUG_BUILD_LOG) ─────────
    if (DEBUG_BUILD_LOG) {
      const nrm = nonIndexed.attributes['normal']!;
      const pos = nonIndexed.attributes['position']!;
      const p0 = [pos.getX(0), pos.getY(0), pos.getZ(0)].map((v) => v.toFixed(2));
      const n0 = [nrm.getX(0), nrm.getY(0), nrm.getZ(0)].map((v) => v.toFixed(3));
      const midVtx = Math.min(Math.floor(pos.count / 2), pos.count - 1);
      const nM = [nrm.getX(midVtx), nrm.getY(midVtx), nrm.getZ(midVtx)].map((v) => v.toFixed(3));
      console.debug(
        `[PTSceneBuilder] mesh="${mesh.name}" tris=${triCount} ` +
          `pos0=(${p0.join(',')}) nrm0=(${n0.join(',')}) nrmMid=(${nM.join(',')}) ` +
          `groups=${nonIndexed.groups.length} runTri=${runningTriCount}`,
      );
    }

    geoList.push(nonIndexed);
    // Only dispose the clone when toNonIndexed created a separate geometry
    if (nonIndexed !== geo) geo.dispose();
  }

  if (geoList.length === 0) return _emptyScene();

  // ── 4. Merge all geometries ──────────────────────────────────────────────

  const merged = mergeGeometries(geoList, false);
  for (const g of geoList) g.dispose();

  if (!merged) return _emptyScene();

  const posAttr = merged.attributes['position']!;
  const nrmAttr = merged.attributes['normal'];
  const uvAttr = merged.attributes['uv'];
  const totalTris = posAttr.count / 3;

  if (totalTris > MAX_TRIANGLES) {
    console.warn(
      `[PTSceneBuilder] Scene has ${totalTris} triangles — exceeds 2048² limit of ${MAX_TRIANGLES}. Extra triangles will be ignored.`,
    );
  }

  const N = Math.min(totalTris, MAX_TRIANGLES);

  // ── 5. Pack triangle_array and aabb_array ────────────────────────────────

  const triangle_array = new Float32Array(TEX_SIZE * TEX_SIZE * 4); // 32 floats/tri
  const aabb_array = new Float32Array(TEX_SIZE * TEX_SIZE * 4); // 9 floats/tri (input)

  let materialNumber = 0;

  for (let i = 0; i < N; i++) {
    // Vertex positions (9 components)
    const vp0x = posAttr.getX(i * 3 + 0),
      vp0y = posAttr.getY(i * 3 + 0),
      vp0z = posAttr.getZ(i * 3 + 0);
    const vp1x = posAttr.getX(i * 3 + 1),
      vp1y = posAttr.getY(i * 3 + 1),
      vp1z = posAttr.getZ(i * 3 + 1);
    const vp2x = posAttr.getX(i * 3 + 2),
      vp2y = posAttr.getY(i * 3 + 2),
      vp2z = posAttr.getZ(i * 3 + 2);

    // Vertex normals (9 components, normalized)
    let vn0x = 0,
      vn0y = 1,
      vn0z = 0;
    let vn1x = 0,
      vn1y = 1,
      vn1z = 0;
    let vn2x = 0,
      vn2y = 1,
      vn2z = 0;
    if (nrmAttr) {
      vn0x = nrmAttr.getX(i * 3 + 0);
      vn0y = nrmAttr.getY(i * 3 + 0);
      vn0z = nrmAttr.getZ(i * 3 + 0);
      vn1x = nrmAttr.getX(i * 3 + 1);
      vn1y = nrmAttr.getY(i * 3 + 1);
      vn1z = nrmAttr.getZ(i * 3 + 1);
      vn2x = nrmAttr.getX(i * 3 + 2);
      vn2y = nrmAttr.getY(i * 3 + 2);
      vn2z = nrmAttr.getZ(i * 3 + 2);
    }

    // UV coordinates (6 components, default -1 = no UVs)
    let vt0x = -1,
      vt0y = -1,
      vt1x = -1,
      vt1y = -1,
      vt2x = -1,
      vt2y = -1;
    if (uvAttr) {
      vt0x = uvAttr.getX(i * 3 + 0);
      vt0y = uvAttr.getY(i * 3 + 0);
      vt1x = uvAttr.getX(i * 3 + 1);
      vt1y = uvAttr.getY(i * 3 + 1);
      vt2x = uvAttr.getX(i * 3 + 2);
      vt2y = uvAttr.getY(i * 3 + 2);
    }

    // Material assignment
    while (
      materialNumber < triangleMaterialMarkers.length - 1 &&
      i >= triangleMaterialMarkers[materialNumber]!
    )
      materialNumber++;
    const md = materialDescs[materialNumber] ?? {
      type: MAT_PBR,
      r: 0.8,
      g: 0.8,
      b: 0.8,
      opacity: 1,
      texID: -1,
      roughness: 0.8,
      metalness: 0.0,
      uvTransform: null,
    };

    // Apply texture UV transform (repeat/offset/rotation encoded in texture.matrix).
    // THREE.js applies this in its own shaders but our BVH packs raw UVs → must bake it in.
    if (uvAttr && md.uvTransform) {
      const [m00, m10, m01, m11, m02, m12] = md.uvTransform;
      // Transform: u' = m00*u + m01*v + m02,  v' = m10*u + m11*v + m12
      const u0 = vt0x,
        v0 = vt0y;
      const u1 = vt1x,
        v1 = vt1y;
      const u2 = vt2x,
        v2 = vt2y;
      vt0x = m00 * u0 + m01 * v0 + m02;
      vt0y = m10 * u0 + m11 * v0 + m12;
      vt1x = m00 * u1 + m01 * v1 + m02;
      vt1y = m10 * u1 + m11 * v1 + m12;
      vt2x = m00 * u2 + m01 * v2 + m02;
      vt2y = m10 * u2 + m11 * v2 + m12;
    }

    // Pack into triangle_array (32 floats at stride 32*i)
    const base = 32 * i;
    triangle_array[base + 0] = vp0x;
    triangle_array[base + 1] = vp0y;
    triangle_array[base + 2] = vp0z;
    triangle_array[base + 3] = vp1x;
    triangle_array[base + 4] = vp1y;
    triangle_array[base + 5] = vp1z;
    triangle_array[base + 6] = vp2x;
    triangle_array[base + 7] = vp2y;
    triangle_array[base + 8] = vp2z;
    triangle_array[base + 9] = vn0x;
    triangle_array[base + 10] = vn0y;
    triangle_array[base + 11] = vn0z;
    triangle_array[base + 12] = vn1x;
    triangle_array[base + 13] = vn1y;
    triangle_array[base + 14] = vn1z;
    triangle_array[base + 15] = vn2x;
    triangle_array[base + 16] = vn2y;
    triangle_array[base + 17] = vn2z;
    triangle_array[base + 18] = vt0x;
    triangle_array[base + 19] = vt0y;
    triangle_array[base + 20] = vt1x;
    triangle_array[base + 21] = vt1y;
    triangle_array[base + 22] = vt2x;
    triangle_array[base + 23] = vt2y;
    triangle_array[base + 24] = md.type;
    triangle_array[base + 25] = md.r;
    triangle_array[base + 26] = md.g;
    triangle_array[base + 27] = md.b;
    triangle_array[base + 28] = md.texID;
    triangle_array[base + 29] = md.opacity;
    triangle_array[base + 30] = md.roughness;
    triangle_array[base + 31] = md.metalness;

    // Build per-triangle AABB (9 floats at stride 9*i)
    const minX = Math.min(vp0x, vp1x, vp2x);
    const minY = Math.min(vp0y, vp1y, vp2y);
    const minZ = Math.min(vp0z, vp1z, vp2z);
    const maxX = Math.max(vp0x, vp1x, vp2x);
    const maxY = Math.max(vp0y, vp1y, vp2y);
    const maxZ = Math.max(vp0z, vp1z, vp2z);

    const ab = 9 * i;
    aabb_array[ab + 0] = minX;
    aabb_array[ab + 1] = minY;
    aabb_array[ab + 2] = minZ;
    aabb_array[ab + 3] = maxX;
    aabb_array[ab + 4] = maxY;
    aabb_array[ab + 5] = maxZ;
    aabb_array[ab + 6] = (vp0x + vp1x + vp2x) * 0.333333333; // centroid
    aabb_array[ab + 7] = (vp0y + vp1y + vp2y) * 0.333333333;
    aabb_array[ab + 8] = (vp0z + vp1z + vp2z) * 0.333333333;
  }

  // ── DEBUG: dump material descriptors (guarded by DEBUG_BUILD_LOG) ───────
  if (DEBUG_BUILD_LOG) {
    for (let m = 0; m < materialDescs.length; m++) {
      const md = materialDescs[m]!;
      const marker = triangleMaterialMarkers[m] ?? '?';
      console.debug(
        `[PTSceneBuilder] mat[${m}] type=${md.type} ` +
          `rgb=(${md.r.toFixed(3)},${md.g.toFixed(3)},${md.b.toFixed(3)}) ` +
          `rough=${md.roughness.toFixed(2)} metal=${md.metalness.toFixed(2)} ` +
          `tex=${md.texID} cumTri=${marker}`,
      );
    }
  }

  merged.dispose();

  // ── 6. Build BVH (modifies aabb_array in place) ──────────────────────────

  console.time('[PTSceneBuilder] BVH build');
  buildBVH(aabb_array, N, 64);
  console.timeEnd('[PTSceneBuilder] BVH build');

  // ── 7. Create DataTextures ────────────────────────────────────────────────

  const triangleTexture = new DataTexture(
    triangle_array,
    TEX_SIZE,
    TEX_SIZE,
    RGBAFormat,
    FloatType,
  );
  triangleTexture.wrapS = triangleTexture.wrapT = ClampToEdgeWrapping;
  triangleTexture.magFilter = triangleTexture.minFilter = NearestFilter;
  triangleTexture.colorSpace = NoColorSpace;
  triangleTexture.flipY = false;
  triangleTexture.generateMipmaps = false;
  triangleTexture.needsUpdate = true;

  const aabbTexture = new DataTexture(aabb_array, TEX_SIZE, TEX_SIZE, RGBAFormat, FloatType);
  aabbTexture.wrapS = aabbTexture.wrapT = ClampToEdgeWrapping;
  aabbTexture.magFilter = aabbTexture.minFilter = NearestFilter;
  aabbTexture.colorSpace = NoColorSpace;
  aabbTexture.flipY = false;
  aabbTexture.generateMipmaps = false;
  aabbTexture.needsUpdate = true;

  console.log(`[PTSceneBuilder] ${N} triangles, ${albedoTextures.length} textures`);

  return { triangleTexture, aabbTexture, albedoTextures, triangleCount: N };
}

export function disposeBVHSceneData(d: BVHSceneData | null): void {
  if (!d) return;
  d.triangleTexture.dispose();
  d.aabbTexture.dispose();
  // albedoTextures are owned by the scene materials — don't dispose them here
}

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Extract the 2×3 UV transform matrix from a texture (offset/repeat/rotation). Returns null if identity. */
function _getUVTransform(tex: Texture | null): MatDesc['uvTransform'] {
  if (!tex) return null;
  if (tex.matrixAutoUpdate) tex.updateMatrix();
  const m = tex.matrix.elements as number[]; // column-major Matrix3
  const [m00 = 1, m10 = 0, , m01 = 0, m11 = 1, , m02 = 0, m12 = 0] = m;
  if (
    Math.abs(m00 - 1) < 1e-5 &&
    Math.abs(m10) < 1e-5 &&
    Math.abs(m01) < 1e-5 &&
    Math.abs(m11 - 1) < 1e-5 &&
    Math.abs(m02) < 1e-5 &&
    Math.abs(m12) < 1e-5
  )
    return null;
  return [m00, m10, m01, m11, m02, m12] as const;
}

function _emptyScene(): BVHSceneData {
  const empty = new DataTexture(
    new Float32Array(TEX_SIZE * TEX_SIZE * 4),
    TEX_SIZE,
    TEX_SIZE,
    RGBAFormat,
    FloatType,
  );
  empty.colorSpace = NoColorSpace;
  empty.flipY = false;
  empty.generateMipmaps = false;
  return {
    triangleTexture: empty,
    aabbTexture: empty.clone(),
    albedoTextures: [],
    triangleCount: 0,
  };
}

interface MatDesc {
  type: number;
  r: number;
  g: number;
  b: number;
  opacity: number;
  texID: number;
  roughness: number;
  metalness: number;
  /** Packed UV matrix: [m00,m10,m01,m11,m02,m12] or null for identity. Encodes texture.offset/repeat/rotation. */
  uvTransform: readonly [number, number, number, number, number, number] | null;
}

function _matDesc(mat: MeshStandardMaterial | null, albedoTextures: Texture[]): MatDesc {
  if (!mat)
    return {
      type: MAT_PBR,
      r: 0.8,
      g: 0.8,
      b: 0.8,
      opacity: 1,
      texID: -1,
      roughness: 0.8,
      metalness: 0.0,
      uvTransform: null,
    };

  // Emissive area light — color = emissive * intensity
  if (mat.emissiveIntensity > 0 && mat.emissive.r + mat.emissive.g + mat.emissive.b > 0.001) {
    const e = mat.emissive;
    const ei = mat.emissiveIntensity;
    return {
      type: MAT_LIGHT,
      r: e.r * ei,
      g: e.g * ei,
      b: e.b * ei,
      opacity: 1,
      texID: -1,
      roughness: 0,
      metalness: 0,
      uvTransform: null,
    };
  }

  // Glass / dielectric refraction — three paths:
  // 1. Explicit transparent + low opacity (standard THREE.js transparent)
  // 2. MeshPhysicalMaterial.transmission > 0 (KHR_materials_transmission GLTF extension)
  // 3. Explicit transmissive check via duck typing (avoids importing MeshPhysicalMaterial)
  const physMat = mat as MeshStandardMaterial & { transmission?: number; ior?: number };
  const hasTransmission = typeof physMat.transmission === 'number' && physMat.transmission > 0.1;
  const isGlass = (mat.transparent && mat.opacity < 0.99) || hasTransmission;

  // Capture texture UV transform (offset/repeat/rotation) — applied to UVs during packing.
  // THREE.js stores this as texture.matrix (Matrix3). We pack as [m00,m10,m01,m11,m02,m12].
  const uvTransform = _getUVTransform(mat.map);

  if (isGlass) {
    const texID = mat.map ? albedoTextures.indexOf(mat.map) : -1;
    return {
      type: MAT_REFR,
      r: mat.color.r,
      g: mat.color.g,
      b: mat.color.b,
      opacity: mat.opacity,
      texID,
      roughness: 0,
      metalness: 0,
      uvTransform,
    };
  }

  // Unified PBR — roughness + metalness drive specular/diffuse in the shader
  const texID = mat.map ? albedoTextures.indexOf(mat.map) : -1;
  return {
    type: MAT_PBR,
    r: mat.color.r,
    g: mat.color.g,
    b: mat.color.b,
    opacity: mat.opacity,
    texID,
    roughness: mat.roughness ?? 1.0,
    metalness: mat.metalness ?? 0.0,
    uvTransform,
  };
}
