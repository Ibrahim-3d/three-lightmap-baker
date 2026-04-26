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
  const onProgress = (mode: number, progress: number): void => {
    if (DEBUG) console.info(`[baker] xatlas ${ProgressCategory[mode]} ${progress}%`);
  };
  await unwrapper.loadLibrary(
    onProgress,
    'https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.wasm',
    'https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.js',
  );

  if (DEBUG) console.info('[baker] xatlas loaded');
};

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
