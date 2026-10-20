/**
 * BVHSceneBuilder - converts a live THREE.Scene into DataTextures for GPU path tracing.
 *
 * Mirrors Eric Loftis's prepareGeometryForPT() from GLTF_Model_Viewer.js, but with
 * a custom many-texture albedo pipeline (sampler2DArray) suitable for interior-
 * design / PBR scenes with hundreds of unique maps.
 *
 * Triangle data layout (32 floats = 8 RGBA texels per triangle):
 *   slot 0: vp0.xyz | vp1.x
 *   slot 1: vp1.yz  | vp2.xy
 *   slot 2: vp2.z   | vn0.xyz
 *   slot 3: vn1.xyz | vn2.x
 *   slot 4: vn2.yz  | vt0.xy
 *   slot 5: vt1.xy  | vt2.xy
 *   slot 6: matType | color.rgb
 *   slot 7: albedoLayer | opacity | roughness | metalness
 *     • albedoLayer  ≥ 0  → index into tAlbedoArray (layer 0 = white fallback)
 *     • albedoLayer  < 0  → no texture sampling, use color only
 *
 * AABB layout before BVH build (9 floats per triangle):
 *   [0..2] min.xyz  [3..5] max.xyz  [6..8] centroid.xyz
 * After buildBVH() the array is reused for BVH nodes (8 floats per node).
 *
 * Triangle / AABB textures are 2048×2048 RGBA Float32.
 * Albedo array texture is ALBEDO_LAYER_SIZE² × N RGBA8 sRGB (one layer per unique map).
 */

import {
  ClampToEdgeWrapping,
  DataArrayTexture,
  DataTexture,
  FloatType,
  LinearFilter,
  LinearMipmapLinearFilter,
  Material,
  Mesh,
  MeshStandardMaterial,
  NearestFilter,
  NoColorSpace,
  RGBAFormat,
  RepeatWrapping,
  SRGBColorSpace,
  Scene,
  UnsignedByteType,
  type Texture,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { buildBVH } from './BVHBuilder';

const MAT_LIGHT = 0;
const MAT_REFR = 2;
const MAT_PBR = 10;

const TEX_SIZE = 2048;
const MAX_TRIANGLES = (TEX_SIZE * TEX_SIZE) / 8;

export const ALBEDO_LAYER_SIZE = 1024;
export const MAX_ALBEDO_LAYERS = 64;
const DEBUG_BUILD_LOG = false;

export interface BVHSceneData {
  triangleTexture: DataTexture;
  aabbTexture: DataTexture;
  albedoArray: DataArrayTexture;
  albedoLayerCount: number;
  triangleCount: number;
}

export function buildBVHScene(scene: Scene): BVHSceneData {
  const meshes: Mesh[] = [];
  scene.traverse((obj) => {
    if (!(obj instanceof Mesh) || !obj.geometry || !obj.visible) return;
    const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
    const hasStandardMat = mats.some((m) => m instanceof MeshStandardMaterial);
    if (!hasStandardMat) return;
    meshes.push(obj);
  });

  if (meshes.length === 0) return _emptyScene();

  const sourceTextures: Texture[] = [];
  for (const mesh of meshes) {
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const mat of mats) {
      if (mat instanceof MeshStandardMaterial && mat.map) {
        if (!sourceTextures.includes(mat.map) && sourceTextures.length < MAX_ALBEDO_LAYERS - 1) {
          sourceTextures.push(mat.map);
        }
      }
    }
  }

  const materialDescs: MatDesc[] = [];
  const triangleMaterialMarkers: number[] = [];
  let runningTriCount = 0;

  const geoList = [];
  for (const mesh of meshes) {
    const geo = mesh.geometry.clone();
    geo.applyMatrix4(mesh.matrixWorld);

    const nonIndexed = geo.index ? geo.toNonIndexed() : geo;
    const position = nonIndexed.attributes['position'];
    if (!position) {
      geo.dispose();
      continue;
    }

    if (!nonIndexed.attributes['normal']) nonIndexed.computeVertexNormals();
    const normal = nonIndexed.attributes['normal'];
    if (!normal) {
      if (nonIndexed !== geo) nonIndexed.dispose();
      geo.dispose();
      continue;
    }

    const keep = new Set(['position', 'normal', 'uv']);
    for (const name of Object.keys(nonIndexed.attributes)) {
      if (!keep.has(name)) nonIndexed.deleteAttribute(name);
    }

    const triCount = position.count / 3;

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
          _matDesc(mat instanceof MeshStandardMaterial ? mat : null, sourceTextures),
        );
        runningTriCount += groupTriCount;
        triangleMaterialMarkers.push(runningTriCount);
      }
    } else {
      const mat = pickMat(0);
      materialDescs.push(
        _matDesc(mat instanceof MeshStandardMaterial ? mat : null, sourceTextures),
      );
      runningTriCount += triCount;
      triangleMaterialMarkers.push(runningTriCount);
    }

    if (DEBUG_BUILD_LOG) {
      const p0 = [position.getX(0), position.getY(0), position.getZ(0)].map((v) => v.toFixed(2));
      const n0 = [normal.getX(0), normal.getY(0), normal.getZ(0)].map((v) => v.toFixed(3));
      const midVtx = Math.min(Math.floor(position.count / 2), position.count - 1);
      const nM = [normal.getX(midVtx), normal.getY(midVtx), normal.getZ(midVtx)].map((v) =>
        v.toFixed(3),
      );
      console.info(
        `[PTSceneBuilder] mesh="${mesh.name}" tris=${triCount} ` +
          `pos0=(${p0.join(',')}) nrm0=(${n0.join(',')}) nrmMid=(${nM.join(',')}) ` +
          `groups=${nonIndexed.groups.length} runTri=${runningTriCount}`,
      );
    }

    geoList.push(nonIndexed);
    if (nonIndexed !== geo) geo.dispose();
  }

  if (geoList.length === 0) return _emptyScene();

  const merged = mergeGeometries(geoList, false);
  for (const g of geoList) g.dispose();

  if (!merged) return _emptyScene();

  const posAttr = merged.attributes['position'];
  if (!posAttr) {
    merged.dispose();
    return _emptyScene();
  }
  const nrmAttr = merged.attributes['normal'];
  const uvAttr = merged.attributes['uv'];
  const totalTris = posAttr.count / 3;

  if (totalTris > MAX_TRIANGLES) {
    console.warn(
      `[PTSceneBuilder] Scene has ${totalTris} triangles - exceeds 2048² limit of ${MAX_TRIANGLES}. Extra triangles will be ignored.`,
    );
  }

  const N = Math.min(totalTris, MAX_TRIANGLES);
  const triangle_array = new Float32Array(TEX_SIZE * TEX_SIZE * 4);
  const aabb_array = new Float32Array(TEX_SIZE * TEX_SIZE * 4);
  let materialNumber = 0;

  for (let i = 0; i < N; i++) {
    const vp0x = posAttr.getX(i * 3 + 0),
      vp0y = posAttr.getY(i * 3 + 0),
      vp0z = posAttr.getZ(i * 3 + 0);
    const vp1x = posAttr.getX(i * 3 + 1),
      vp1y = posAttr.getY(i * 3 + 1),
      vp1z = posAttr.getZ(i * 3 + 1);
    const vp2x = posAttr.getX(i * 3 + 2),
      vp2y = posAttr.getY(i * 3 + 2),
      vp2z = posAttr.getZ(i * 3 + 2);

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

    while (
      materialNumber < triangleMaterialMarkers.length - 1 &&
      i >= (triangleMaterialMarkers[materialNumber] ?? Infinity)
    ) {
      materialNumber++;
    }
    const md = materialDescs[materialNumber] ?? {
      type: MAT_PBR,
      r: 0.8,
      g: 0.8,
      b: 0.8,
      opacity: 1,
      albedoLayer: -1,
      roughness: 0.8,
      metalness: 0.0,
      uvTransform: null,
    };

    if (uvAttr && md.uvTransform) {
      const [m00, m10, m01, m11, m02, m12] = md.uvTransform;
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
    triangle_array[base + 28] = md.albedoLayer;
    triangle_array[base + 29] = md.opacity;
    triangle_array[base + 30] = md.roughness;
    triangle_array[base + 31] = md.metalness;

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
    aabb_array[ab + 6] = (vp0x + vp1x + vp2x) * 0.333333333;
    aabb_array[ab + 7] = (vp0y + vp1y + vp2y) * 0.333333333;
    aabb_array[ab + 8] = (vp0z + vp1z + vp2z) * 0.333333333;
  }

  if (DEBUG_BUILD_LOG) {
    for (let m = 0; m < materialDescs.length; m++) {
      const md = materialDescs[m];
      if (!md) continue;
      const marker = triangleMaterialMarkers[m] ?? '?';
      console.info(
        `[PTSceneBuilder] mat[${m}] type=${md.type} ` +
          `rgb=(${md.r.toFixed(3)},${md.g.toFixed(3)},${md.b.toFixed(3)}) ` +
          `rough=${md.roughness.toFixed(2)} metal=${md.metalness.toFixed(2)} ` +
          `layer=${md.albedoLayer} cumTri=${marker}`,
      );
    }
  }

  merged.dispose();

  const bvhStarted = performance.now();
  buildBVH(aabb_array, N, 64);
  console.info(`[PTSceneBuilder] BVH build: ${(performance.now() - bvhStarted).toFixed(1)}ms`);

  const albedoStarted = performance.now();
  const { albedoArray, albedoLayerCount } = _buildAlbedoArray(sourceTextures);
  console.info(
    `[PTSceneBuilder] albedo array build: ${(performance.now() - albedoStarted).toFixed(1)}ms`,
  );

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

  console.info(
    `[PTSceneBuilder] ${N} triangles, ${albedoLayerCount} albedo layers (${sourceTextures.length} source maps)`,
  );

  return { triangleTexture, aabbTexture, albedoArray, albedoLayerCount, triangleCount: N };
}

export function disposeBVHSceneData(d: BVHSceneData | null): void {
  if (!d) return;
  d.triangleTexture.dispose();
  d.aabbTexture.dispose();
  d.albedoArray.dispose();
}

function _allocLayerBuffer(
  perLayerBytes: number,
  requestedLayers: number,
): { data: Uint8Array; actualLayers: number } {
  let layers = requestedLayers;
  while (layers >= 1) {
    try {
      const bytes = perLayerBytes * layers;
      const data = new Uint8Array(bytes);
      return { data, actualLayers: layers };
    } catch (err) {
      console.warn(
        `[PTSceneBuilder] albedo array alloc failed at ${layers} layers ` +
          `(${((perLayerBytes * layers) / (1024 * 1024)).toFixed(1)} MiB) - retrying with half`,
        err,
      );
      layers = Math.floor(layers / 2);
    }
  }
  return { data: new Uint8Array(perLayerBytes), actualLayers: 1 };
}

function _buildAlbedoArray(sources: Texture[]): {
  albedoArray: DataArrayTexture;
  albedoLayerCount: number;
} {
  const W = ALBEDO_LAYER_SIZE;
  const H = ALBEDO_LAYER_SIZE;
  const perLayerBytes = W * H * 4;
  const requestedLayers = Math.min(sources.length + 1, MAX_ALBEDO_LAYERS);
  const estMiB = ((perLayerBytes * requestedLayers) / (1024 * 1024)).toFixed(1);
  console.info(
    `[PTSceneBuilder] allocating albedo array: ${requestedLayers} layers × ${W}² × RGBA8 ≈ ${estMiB} MiB`,
  );

  const { data, actualLayers } = _allocLayerBuffer(perLayerBytes, requestedLayers);
  if (actualLayers < requestedLayers) {
    console.warn(
      `[PTSceneBuilder] reduced albedo array from ${requestedLayers} → ${actualLayers} layers due to memory pressure; ` +
        `some textures will be dropped (use white fallback).`,
    );
  }

  for (let i = 0; i < perLayerBytes; i++) data[i] = 255;

  const canvas = typeof document !== 'undefined' ? document.createElement('canvas') : null;
  if (canvas) {
    canvas.width = W;
    canvas.height = H;
  }
  const ctx = canvas?.getContext('2d', { willReadFrequently: true }) ?? null;

  for (let i = 0; i < actualLayers - 1; i++) {
    const src = sources[i];
    const layerOffset = (i + 1) * perLayerBytes;
    if (!src || !src.image || !ctx) {
      for (let p = 0; p < perLayerBytes; p++) data[layerOffset + p] = 255;
      if (!ctx) {
        console.warn('[PTSceneBuilder] no 2d canvas context - albedo array filled with white');
      }
      continue;
    }
    try {
      ctx.clearRect(0, 0, W, H);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ctx.drawImage(src.image as any, 0, 0, W, H);
      const imgData = ctx.getImageData(0, 0, W, H);
      data.set(imgData.data, layerOffset);
    } catch (err) {
      console.warn(
        `[PTSceneBuilder] failed to rasterize albedo texture into layer ${i + 1} - using white fallback`,
        err,
      );
      for (let p = 0; p < perLayerBytes; p++) data[layerOffset + p] = 255;
    }
  }

  const tex = new DataArrayTexture(data, W, H, actualLayers);
  tex.format = RGBAFormat;
  tex.type = UnsignedByteType;
  tex.colorSpace = SRGBColorSpace;
  tex.minFilter = LinearMipmapLinearFilter;
  tex.magFilter = LinearFilter;
  tex.wrapS = RepeatWrapping;
  tex.wrapT = RepeatWrapping;
  tex.generateMipmaps = true;
  tex.flipY = false;
  tex.needsUpdate = true;

  return { albedoArray: tex, albedoLayerCount: actualLayers };
}

function _getUVTransform(tex: Texture | null): MatDesc['uvTransform'] {
  if (!tex) return null;
  if (tex.matrixAutoUpdate) tex.updateMatrix();
  const m = tex.matrix.elements as number[];
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
  const W = ALBEDO_LAYER_SIZE;
  const fallback = new Uint8Array(W * W * 4);
  for (let i = 0; i < fallback.length; i++) fallback[i] = 255;
  const albedoArray = new DataArrayTexture(fallback, W, W, 1);
  albedoArray.format = RGBAFormat;
  albedoArray.type = UnsignedByteType;
  albedoArray.colorSpace = SRGBColorSpace;
  albedoArray.minFilter = LinearFilter;
  albedoArray.magFilter = LinearFilter;
  albedoArray.wrapS = RepeatWrapping;
  albedoArray.wrapT = RepeatWrapping;
  albedoArray.generateMipmaps = false;
  albedoArray.needsUpdate = true;
  return {
    triangleTexture: empty,
    aabbTexture: empty.clone(),
    albedoArray,
    albedoLayerCount: 1,
    triangleCount: 0,
  };
}

interface MatDesc {
  type: number;
  r: number;
  g: number;
  b: number;
  opacity: number;
  albedoLayer: number;
  roughness: number;
  metalness: number;
  uvTransform: readonly [number, number, number, number, number, number] | null;
}

function _matDesc(mat: MeshStandardMaterial | null, sourceTextures: Texture[]): MatDesc {
  if (!mat)
    return {
      type: MAT_PBR,
      r: 0.8,
      g: 0.8,
      b: 0.8,
      opacity: 1,
      albedoLayer: -1,
      roughness: 0.8,
      metalness: 0.0,
      uvTransform: null,
    };

  if (mat.emissiveIntensity > 0 && mat.emissive.r + mat.emissive.g + mat.emissive.b > 0.001) {
    const e = mat.emissive;
    const ei = mat.emissiveIntensity;
    return {
      type: MAT_LIGHT,
      r: e.r * ei,
      g: e.g * ei,
      b: e.b * ei,
      opacity: 1,
      albedoLayer: -1,
      roughness: 0,
      metalness: 0,
      uvTransform: null,
    };
  }

  const physMat = mat as MeshStandardMaterial & { transmission?: number; ior?: number };
  const hasTransmission = typeof physMat.transmission === 'number' && physMat.transmission > 0.1;
  const isGlass = (mat.transparent && mat.opacity < 0.99) || hasTransmission;
  const uvTransform = _getUVTransform(mat.map);
  const layerIdx = mat.map ? sourceTextures.indexOf(mat.map) : -1;
  const albedoLayer = layerIdx >= 0 ? layerIdx + 1 : -1;

  if (isGlass) {
    return {
      type: MAT_REFR,
      r: mat.color.r,
      g: mat.color.g,
      b: mat.color.b,
      opacity: mat.opacity,
      albedoLayer,
      roughness: 0,
      metalness: 0,
      uvTransform,
    };
  }

  return {
    type: MAT_PBR,
    r: mat.color.r,
    g: mat.color.g,
    b: mat.color.b,
    opacity: mat.opacity,
    albedoLayer,
    roughness: mat.roughness ?? 1.0,
    metalness: mat.metalness ?? 0.0,
    uvTransform,
  };
}
