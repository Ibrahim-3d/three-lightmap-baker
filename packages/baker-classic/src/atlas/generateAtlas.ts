import { BufferAttribute, Mesh, Vector3 } from 'three';
import { UVUnwrapper } from 'xatlas-three';
import { computeMeshSurfaceArea } from '../utils/Packing';

const DEBUG = import.meta.env.DEV;

const unwrapper = new UVUnwrapper({ BufferAttribute: BufferAttribute });
const worldScale = new Vector3();
const UV_EPSILON = 1e-4;
const MAX_DENSITY_PACK_ATTEMPTS = 6;

export type GenerateAtlasOptions = {
  /** Actual lightmap side length. Used by xatlas when texel density is active. */
  resolution?: number;
  /** Target texels per world unit. When omitted, legacy fill-the-atlas packing is used. */
  texelsPerUnit?: number;
  /** Per-mesh density multiplier keyed by mesh uuid. */
  perMeshScale?: Record<string, number>;
};

enum ProgressCategory {
  AddMesh,
  ComputeCharts,
  PackCharts,
  BuildOutputMeshes,
}

function getUv2Bounds(meshs: Mesh[]): { min: number; max: number; valid: boolean } {
  let min = Infinity;
  let max = -Infinity;

  for (const mesh of meshs) {
    const uv2 = mesh.geometry.getAttribute('uv2');
    if (!uv2) return { min: 0, max: 0, valid: false };
    for (let i = 0; i < uv2.count; i++) {
      const u = uv2.getX(i);
      const v = uv2.getY(i);
      if (!Number.isFinite(u) || !Number.isFinite(v)) {
        return { min: 0, max: 0, valid: false };
      }
      min = Math.min(min, u, v);
      max = Math.max(max, u, v);
    }
  }

  return {
    min,
    max,
    valid:
      Number.isFinite(min) && Number.isFinite(max) && min >= -UV_EPSILON && max <= 1 + UV_EPSILON,
  };
}

export const loadXAtlasThree = async (): Promise<void> => {
  // Only emit one line per category (at 100%). Pre-throttle was per-percent
  // → ~400 lines drowned diagnostic output.
  const lastSeen: Partial<Record<number, number>> = {};
  const onProgress = (mode: number, progress: number): void => {
    if (!DEBUG) return;
    if (progress < 100) {
      lastSeen[mode] = progress;
      return;
    }
    if (lastSeen[mode] === 100) return;
    lastSeen[mode] = 100;
    console.info(`[baker] xatlas ${ProgressCategory[mode]} done`);
  };
  await unwrapper.loadLibrary(
    onProgress,
    'https://cdn.jsdelivr.net/npm/xatlasjs@0.2.0/dist/xatlas.wasm',
    'https://cdn.jsdelivr.net/npm/xatlasjs@0.2.0/dist/xatlas.js',
  );

  if (DEBUG) console.info('[baker] xatlas loaded');
};

/**
 * Pack the given meshes into ONE shared [0,1]² UV atlas. Each mesh's `uv2`
 * attribute is rewritten in place to point at its assigned region within the
 * atlas - downstream `renderAtlas` rasterizes all of them into one G-buffer.
 *
 * The xatlas-three `UVUnwrapper` is module-scoped - calls to this function
 * MUST be serial (await between calls). For multi-atlas pipelines, see
 * `generateAtlases` below.
 */
export const generateAtlas = async (
  meshs: Mesh[],
  options: GenerateAtlasOptions = {},
): Promise<void> => {
  const geometry = meshs.map((mesh) => mesh.geometry);
  const densityMode = options.texelsPerUnit !== undefined && options.texelsPerUnit > 0;
  const packResolution = densityMode ? (options.resolution ?? 1024) : 4096;
  let texelsPerUnit = options.texelsPerUnit ?? 0;

  if (densityMode) {
    const atlasTexels = packResolution * packResolution;
    let demand = 0;
    for (const mesh of meshs) {
      const scale = options.perMeshScale?.[mesh.uuid] ?? 1.0;
      demand +=
        (computeMeshSurfaceArea(mesh) * texelsPerUnit * texelsPerUnit * scale * scale) /
        atlasTexels;
    }
    const fillRatio = 0.95;
    if (demand > fillRatio) {
      texelsPerUnit *= Math.sqrt(fillRatio / demand);
    }
  }

  // Crucial: xatlas defaults are padding=0. renderAtlas adds a +/-2 pixel
  // G-buffer halo, so keep roughly four lightmap pixels between charts.
  unwrapper.packOptions.padding = Math.max(4, Math.ceil(packResolution / 256));
  unwrapper.packOptions.resolution = packResolution;
  unwrapper.packOptions.texelsPerUnit = densityMode ? texelsPerUnit : undefined;

  const previousWorldScales = densityMode
    ? meshs.map((mesh) => mesh.geometry.userData.worldScale as unknown)
    : [];

  try {
    if (densityMode) {
      for (const mesh of meshs) {
        const scale = options.perMeshScale?.[mesh.uuid] ?? 1.0;
        mesh.getWorldScale(worldScale);
        mesh.geometry.userData.worldScale = [
          worldScale.x * scale,
          worldScale.y * scale,
          worldScale.z * scale,
        ];
      }
    }

    // Write the shared UVs to the uv2 attribute. In density mode xatlas can
    // still decide one logical pack needs multiple internal atlases because
    // chart shapes and padding are less efficient than the area estimate. Our
    // downstream renderer expects each bake group to be one 0-1 atlas target,
    // so retry with a lower resolved density until xatlas agrees.
    const maxAttempts = densityMode ? MAX_DENSITY_PACK_ATTEMPTS : 1;
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      unwrapper.packOptions.texelsPerUnit = densityMode ? texelsPerUnit : undefined;
      const atlas = await unwrapper.packAtlas(geometry, 'uv2', 'uv');
      const uvBounds = getUv2Bounds(meshs);
      if (!densityMode || (atlas.atlasCount <= 1 && uvBounds.valid)) break;

      const canRetry = attempt + 1 < maxAttempts;
      const reason =
        atlas.atlasCount > 1
          ? `${atlas.atlasCount} internal atlases`
          : `uv2 bounds ${uvBounds.min.toFixed(3)}..${uvBounds.max.toFixed(3)}`;
      if (canRetry) {
        texelsPerUnit *= 0.85;
        console.warn(
          `[baker] xatlas produced ${reason} for one ${packResolution}x${packResolution} bake group; retrying at ${texelsPerUnit.toFixed(2)} texels/m`,
        );
      } else {
        console.warn(
          `[baker] xatlas still produced ${reason}; this bake group may show unmapped black areas`,
        );
      }
    }
  } finally {
    if (densityMode) {
      for (let i = 0; i < meshs.length; i++) {
        const mesh = meshs[i];
        if (!mesh) continue;
        const prev = previousWorldScales[i];
        if (prev === undefined) delete mesh.geometry.userData.worldScale;
        else mesh.geometry.userData.worldScale = prev;
      }
    }
  }
};

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
export const generateAtlases = async (
  meshesByBin: Mesh[][],
  options: GenerateAtlasOptions = {},
): Promise<void> => {
  for (let i = 0; i < meshesByBin.length; i++) {
    const bin = meshesByBin[i];
    if (!bin || bin.length === 0) continue;
    if (DEBUG)
      console.info(`[baker] xatlas bin ${i + 1}/${meshesByBin.length}: ${bin.length} meshes`);
    await generateAtlas(bin, options);
  }
};
