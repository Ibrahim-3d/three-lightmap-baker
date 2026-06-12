import { BufferAttribute, Mesh } from 'three';
import { UVUnwrapper } from 'xatlas-three';

const DEBUG = import.meta.env.DEV;

const unwrapper = new UVUnwrapper({ BufferAttribute: BufferAttribute });

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
export const generateAtlas = async (meshs: Mesh[]): Promise<void> => {
  const geometry = meshs.map((mesh) => mesh.geometry);

  // Crucial: xatlas defaults are padding=0 and resolution=2048. With renderAtlas's
  // +/-2-pixel dilation halo and a 1024 lightmap (so each lightmap-texel covers
  // ~2x2 atlas-texels), zero padding causes the halo of one chart to land inside
  // the *true footprint* of the neighbouring chart - every chart-adjacent texel
  // reads position/normal data from the wrong surface. Symptom: "green bleed on
  // the LEFT side of the cube while the green wall is on the RIGHT" - charts that
  // happen to be neighbours in atlas space, not in world space.
  //
  // 4096 atlas resolution + 16-px padding gives >=4 lightmap-pixels of gutter on
  // every chart boundary, more than the +/-2-px dilation halo can reach.
  unwrapper.packOptions.padding = 16;
  unwrapper.packOptions.resolution = 4096;

  // Write the shared UVs to the uv2 attribute
  await unwrapper.packAtlas(geometry, 'uv2', 'uv');
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
export const generateAtlases = async (meshesByBin: Mesh[][]): Promise<void> => {
  for (let i = 0; i < meshesByBin.length; i++) {
    const bin = meshesByBin[i];
    if (!bin || bin.length === 0) continue;
    if (DEBUG)
      console.info(`[baker] xatlas bin ${i + 1}/${meshesByBin.length}: ${bin.length} meshes`);
    await generateAtlas(bin);
  }
};
