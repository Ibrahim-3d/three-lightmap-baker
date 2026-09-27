import { BakeError } from '../errors';
import { abortError } from '../bake/animationTask';
import { BufferAttribute, type BufferGeometry, Mesh, Vector3 } from 'three';
import { AtlasWorker } from './AtlasWorker';
import { unwrapGeometry } from './unwrap';
import type { PackOptions } from 'xatlas-three';
import xatlasScriptUrl from 'xatlasjs/dist/xatlas.js?url';
import xatlasWasmUrl from 'xatlasjs/dist/xatlas.wasm?url';
import { computeMeshSurfaceArea } from '../utils/Packing';

const DEBUG = import.meta.env?.DEV === true;

const worldScale = new Vector3();
const UV_EPSILON = 1.0e-4;
const MAX_PACK_ATTEMPTS = 6;
let libraryOptions: LoadXAtlasThreeOptions = {};

export type GenerateAtlasOptions = {
  padding?: number;
  signal?: AbortSignal;
  /** Actual lightmap side length used to resolve packing and padding. */
  resolution?: number;
  /** Target texels per world unit. When omitted, legacy fill-the-atlas packing is used. */
  texelsPerUnit?: number;
  /** Per-mesh density multiplier keyed by mesh uuid. */
  perMeshScale?: Record<string, number>;
};

export type LoadXAtlasThreeOptions = {
  signal?: AbortSignal;
  /** Override the packaged xatlas WASM URL, for example when hosting assets on a dedicated CDN. */
  wasmUrl?: string;
  /** Override the packaged xatlas loader URL, for example when applying a custom CSP. */
  scriptUrl?: string;
};

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

type GeometrySnapshot = {
  attributes: Record<string, BufferAttribute>;
  index: BufferAttribute | null;
  xAtlasSubMeshes: unknown;
  hadXAtlasSubMeshes: boolean;
};

function snapshotGeometry(geometry: BufferGeometry): GeometrySnapshot {
  const attributes: Record<string, BufferAttribute> = {};
  for (const [name, attribute] of Object.entries(geometry.attributes)) {
    attributes[name] = attribute.clone() as BufferAttribute;
  }
  return {
    attributes,
    index: geometry.index ? (geometry.index.clone() as BufferAttribute) : null,
    xAtlasSubMeshes: geometry.userData.xAtlasSubMeshes
      ? structuredClone(geometry.userData.xAtlasSubMeshes)
      : undefined,
    hadXAtlasSubMeshes: Object.prototype.hasOwnProperty.call(geometry.userData, 'xAtlasSubMeshes'),
  };
}

function restoreGeometry(geometry: BufferGeometry, snapshot: GeometrySnapshot): void {
  for (const name of Object.keys(geometry.attributes)) {
    geometry.deleteAttribute(name);
  }
  for (const [name, attribute] of Object.entries(snapshot.attributes)) {
    geometry.setAttribute(name, attribute.clone() as BufferAttribute);
  }
  geometry.setIndex(snapshot.index ? (snapshot.index.clone() as BufferAttribute) : null);

  if (snapshot.hadXAtlasSubMeshes) {
    geometry.userData.xAtlasSubMeshes = snapshot.xAtlasSubMeshes
      ? structuredClone(snapshot.xAtlasSubMeshes)
      : snapshot.xAtlasSubMeshes;
  } else {
    delete geometry.userData.xAtlasSubMeshes;
  }
}

function resolveLibraryUrl(url: string): string {
  if (typeof document === 'undefined') return url;
  return new URL(url, document.baseURI).href;
}

async function createWorker(
  options: LoadXAtlasThreeOptions,
  signal?: AbortSignal,
): Promise<AtlasWorker> {
  const controller = new AbortController();
  const onAbort = (): void => controller.abort();
  signal?.addEventListener('abort', onAbort, { once: true });
  if (signal?.aborted) controller.abort();
  const timeout = setTimeout(() => controller.abort(), 30000);
  let worker: AtlasWorker | undefined;
  try {
    const response = await fetch(resolveLibraryUrl(options.scriptUrl ?? xatlasScriptUrl), {
      signal: controller.signal,
    });
    if (!response.ok) throw new BakeError(`xatlas loader HTTP ${response.status}`, 'unwrap');
    const script = await response.text();
    if (signal?.aborted) throw abortError();
    worker = new AtlasWorker(script, signal);
    await worker.initialize(resolveLibraryUrl(options.wasmUrl ?? xatlasWasmUrl));
    return worker;
  } catch (error) {
    worker?.dispose();
    throw error;
  } finally {
    clearTimeout(timeout);
    signal?.removeEventListener('abort', onAbort);
  }
}

/** Validate/preload the selected assets. Every pack owns a fresh, terminable worker. */
export const loadXAtlasThree = async (options: LoadXAtlasThreeOptions = {}): Promise<void> => {
  const worker = await createWorker(options, options.signal);
  worker.dispose();
  libraryOptions = { wasmUrl: options.wasmUrl, scriptUrl: options.scriptUrl };
};

/**
 * Pack the given meshes into ONE shared [0,1]² UV atlas. Each mesh's `uv2`
 * attribute is rewritten in place to point at its assigned region within the
 * atlas - downstream `renderAtlas` rasterizes all of them into one G-buffer.
 *
 * Each call owns its worker and rejects overlapping geometry mutations.
 * For multi-atlas pipelines, see
 * `generateAtlases` below.
 */
const packAtlas = async (meshs: Mesh[], options: GenerateAtlasOptions = {}): Promise<void> => {
  if (options.signal?.aborted) throw abortError();

  const geometry = meshs.map((mesh) => mesh.geometry);
  const densityMode = options.texelsPerUnit !== undefined && options.texelsPerUnit > 0;
  const packResolution = options.resolution ?? 1024;
  let texelsPerUnit = options.texelsPerUnit ?? 0;
  const requiredPadding = Math.max(6, options.padding ?? 6);
  if (
    !Number.isInteger(packResolution) ||
    packResolution < 2 ||
    !Number.isFinite(requiredPadding) ||
    requiredPadding < 0 ||
    !Number.isFinite(texelsPerUnit) ||
    texelsPerUnit < 0 ||
    packResolution <= requiredPadding * 2
  )
    throw new BakeError(
      'Invalid atlas resolution, density or padding; increase resolution',
      'unwrap',
    );

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
  const packOptions: PackOptions & { padding: number } = {
    padding: Math.ceil(requiredPadding),
    resolution: packResolution,
  };

  const previousWorldScales = densityMode
    ? meshs.map((mesh) => mesh.geometry.userData.worldScale as unknown)
    : [];

  const snapshots = geometry.map(snapshotGeometry);
  let worker: AtlasWorker | undefined;
  try {
    worker = await createWorker(libraryOptions, options.signal);
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
    const maxAttempts = MAX_PACK_ATTEMPTS;
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      if (attempt > 0) {
        for (let i = 0; i < geometry.length; i++) {
          const snapshot = snapshots[i];
          const targetGeometry = geometry[i];
          if (snapshot && targetGeometry) restoreGeometry(targetGeometry, snapshot);
        }
      }
      packOptions.texelsPerUnit = densityMode ? texelsPerUnit : 0;
      packOptions.maxChartSize = Math.max(1, packResolution - 2 * packOptions.padding - 2);
      if (options.signal?.aborted) throw abortError();
      const atlas = await unwrapGeometry(worker, geometry, packOptions);
      if (options.signal?.aborted) throw abortError();
      const uvBounds = getUv2Bounds(meshs);
      const dimension = Math.max(atlas.width, atlas.height);
      const validDimensions = Number.isFinite(dimension) && atlas.width > 0 && atlas.height > 0;
      const effectivePadding = validDimensions
        ? (packOptions.padding * packResolution) / dimension
        : 0;
      if (atlas.atlasCount === 1 && uvBounds.valid && effectivePadding >= requiredPadding) break;

      const canRetry = attempt + 1 < maxAttempts;
      const reason =
        atlas.atlasCount > 1
          ? `${atlas.atlasCount} internal atlases`
          : !uvBounds.valid
            ? `uv2 bounds ${uvBounds.min.toFixed(3)}..${uvBounds.max.toFixed(3)}`
            : `padding ${effectivePadding.toFixed(2)}px below ${requiredPadding}px at output resolution`;
      if (canRetry) {
        if (densityMode) texelsPerUnit *= 0.7;
        if (validDimensions && effectivePadding < requiredPadding) {
          const nextPadding = Math.ceil((requiredPadding * dimension) / packResolution) + 1;
          if (nextPadding * 2 >= packResolution)
            throw new BakeError(
              'Atlas padding cannot fit at this resolution; increase resolution or split the group',
              'unwrap',
            );
          packOptions.padding = nextPadding;
        }
        console.warn(
          `[baker] xatlas produced ${reason} for one ${packResolution}x${packResolution} bake group; retrying packing`,
        );
      } else {
        throw new BakeError(
          `Atlas packing failed: ${reason}. Increase resolution or split the group.`,
          'unwrap',
        );
      }
    }
  } catch (error) {
    geometry.forEach((g, i) => {
      const snapshot = snapshots[i];
      if (snapshot) restoreGeometry(g, snapshot);
    });
    throw error;
  } finally {
    worker?.dispose();
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
 * Calls `generateAtlas` once per bin serially to keep geometry mutations ordered.
 * After this returns, every input mesh has a
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

let packing = false;
export const generateAtlas = async (
  meshes: Mesh[],
  options: GenerateAtlasOptions = {},
): Promise<void> => {
  if (packing) throw new BakeError('xatlas is busy; await the previous operation', 'unwrap');
  if (!meshes.length) return;
  if (new Set(meshes.map((m) => m.geometry)).size !== meshes.length)
    throw new BakeError('Atlas meshes require unique geometries', 'unwrap');
  packing = true;
  try {
    await packAtlas(meshes, options);
  } finally {
    packing = false;
  }
};
