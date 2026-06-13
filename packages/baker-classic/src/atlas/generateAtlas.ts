import { BufferAttribute, Mesh, Vector3 } from 'three';
import { UVUnwrapper } from 'xatlas-three';
import { computeMeshSurfaceArea } from '../utils/Packing';

const DEBUG = import.meta.env.DEV;

const unwrapper = new UVUnwrapper({ BufferAttribute: BufferAttribute });
const worldScale = new Vector3();

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

    // Write the shared UVs to the uv2 attribute.
    await unwrapper.packAtlas(geometry, 'uv2', 'uv');
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
