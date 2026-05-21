import {
  Color,
  LinearFilter,
  Mesh,
  NearestFilter,
  Object3D,
  Scene,
  Texture,
  Vector3,
  WebGLRenderer,
} from 'three';
import { PackedLight, collectLightsFromScene } from './lightmap/Lights';
import { MeshBVH } from 'three-mesh-bvh';
import { generateAtlas } from './atlas/generateAtlas';
import { renderAtlas } from './atlas/renderAtlas';
import { generateLightmapper, Lightmapper, RaycastOptions } from './lightmap/Lightmapper';
import { generateAOMapper, AOMapper, AORaycastOptions } from './lightmap/AOMapper';
import { runComposite, CompositeResult } from './lightmap/Composite';
import { runPostProcess, PostProcessOptions, PostProcessResult } from './lightmap/Refinement';
import { createDownscale } from './lightmap/Downscale';
import { mergeGeometry, extractPerTriangleMaterials } from './utils/GeometryUtils';
import { buildMaterialTextures } from './utils/MaterialTextures';
import { partitionByResolution, partitionByDensity, PerMeshOverride } from './utils/Partition';
import { BakeError, BakeErrorPhase } from './errors';
import { detectGPUCapabilities } from './gpu/Capabilities';
import {
  DEFAULT_REFINEMENT,
  resolveTimeoutProtection,
  toLinearColor,
  validateOptions,
} from './bake/validation';
import { LightmapBakeResult } from './bake/result';
import type {
  BakeHooks,
  BakeStats,
  LightmapBakerOptions,
  LightOptions,
  GIOptions,
  AOOptions,
  TimeoutProtectionOptions,
} from './bake/types';
import type { GroupInternals, ContextLossState } from './bake/internals';

// LightmapBakeResult lives in `./bake/result` to keep this file under the
// 300-LOC modularity cap. Re-exported here so the public barrel can pull it
// off `./LightmapBaker` unchanged.
export { LightmapBakeResult } from './bake/result';

// Public type surface — re-exported through `./index.ts`. Definitions live
// in `./bake/types` to keep this file under the 300-LOC modularity cap.
export type {
  BakePhase,
  BakeFrameInfo,
  BakeHooks,
  BakeStats,
  LightmapBakerOptions,
  TimeoutProtectionOptions,
  LightOptions,
  PackedLight,
  GIOptions,
  AOOptions,
  BakeGroupView,
} from './bake/types';

/**
 * One-call lightmap baker — wraps the lib primitives behind the Task 06 spec API.
 *
 * Spec deviations (intentional, documented in JSDoc per call site):
 *
 *  1. Constructor takes a `WebGLRenderer`. The spec omits this; in practice the baker
 *     can't run without a GL context, and creating a headless one would mean the user's
 *     scene textures wouldn't be in our context. Caller passes their renderer.
 *  2. `result.lightmaps` returns a `Map<Mesh, Texture>` where each mesh maps to its
 *     group's atlas texture. With `perMesh` grouping, meshes in different resolution
 *     groups get different textures. Without `perMesh`, all entries share one texture.
 *  3. `bounces` [1,4] controls GI path depth. Clamped on construction. Russian Roulette
 *     terminates low-throughput paths after bounce 2 for performance.
 *  4. `result.export(path, ...)` triggers a browser download. The `path` argument is
 *     interpreted as a filename hint (last path segment); browsers can't write to
 *     directories. With per-mesh grouping each group is exported as a separate file.
 */

export class LightmapBaker {
  private opts: ResolvedBakerOptions;

  constructor(
    public readonly renderer: WebGLRenderer,
    opts: LightmapBakerOptions = {},
  ) {
    validateOptions(opts);

    this.opts = {
      samples: opts.samples ?? 96,
      castsPerFrame: opts.castsPerFrame ?? 5,
      bounces: Math.min(4, Math.max(1, opts.bounces ?? 1)),
      resolution: opts.resolution ?? 1024,
      superSample: opts.superSample ?? 1,
      denoise: opts.denoise ?? true,
      filtering: opts.filtering ?? 'linear',
      texelsPerMeter: opts.texelsPerMeter ?? 0,
      perMesh: opts.perMesh ?? {},
      light: {
        position: opts.light?.position ?? new Vector3(0, 10, 0),
        color: opts.light?.color ?? 0xffffff,
        intensity: opts.light?.intensity ?? 2.0,
        size: opts.light?.size ?? 1.0,
        enabled: opts.light?.enabled ?? true,
      },
      gi: {
        enabled: opts.gi?.enabled ?? true,
        intensity: opts.gi?.intensity ?? 1.0,
        skyColor: opts.gi?.skyColor ?? 0xffffff,
        skyIntensity: opts.gi?.skyIntensity ?? 0.0,
      },
      ao: {
        enabled: opts.ao?.enabled ?? true,
        distance: opts.ao?.distance ?? 0.5,
        intensity: opts.ao?.intensity ?? 1.0,
        exponent: opts.ao?.exponent ?? 1.5,
        samples: opts.ao?.samples ?? opts.castsPerFrame ?? 5,
      },
      refinementOptions: {
        ...DEFAULT_REFINEMENT,
        ...(opts.refinementOptions ?? {}),
        denoiseEnabled: opts.denoise ?? DEFAULT_REFINEMENT.denoiseEnabled,
      },
      timeoutProtection: opts.timeoutProtection,
    };
  }

  async bake(scene: Scene | Object3D, hooks: BakeHooks = {}): Promise<LightmapBakeResult> {
    const t0 = performance.now();

    const allMeshes = collectBakeMeshes(scene);
    if (!allMeshes.length)
      throw new BakeError(
        'no bake-eligible meshes in scene (need Mesh + MeshStandardMaterial-like)',
        'validation',
      );

    const gl = this.renderer.getContext();
    if (!gl.getExtension('EXT_color_buffer_float'))
      throw new BakeError(
        'EXT_color_buffer_float WebGL2 extension is unavailable; FloatType RTs cannot be allocated',
        'validation',
      );

    // Detect GPU + resolve timeout-protection settings.
    const caps = detectGPUCapabilities(this.renderer);
    const tp = resolveTimeoutProtection(this.opts.timeoutProtection, caps);

    // Context-loss guard: shared mutable flag flipped by the canvas listener.
    // Each tick of the mapper loop checks it before scheduling new work.
    const ctxState: ContextLossState = { lost: false };
    const canvas = this.renderer.domElement;
    const onLost = (e: Event): void => {
      e.preventDefault(); // Tells the browser we'll attempt recovery (we don't, but it's harmless).
      ctxState.lost = true;
      console.error('[baker] webglcontextlost during bake — cancelling');
    };
    canvas.addEventListener('webglcontextlost', onLost as EventListener, false);
    const releaseContextGuard = (): void => {
      canvas.removeEventListener('webglcontextlost', onLost as EventListener, false);
    };

    scene.updateMatrixWorld(true);

    const checkAbort = (phase: BakeErrorPhase): void => {
      if (hooks.signal?.aborted) throw new BakeError('aborted by signal', phase);
      if (ctxState.lost) throw new BakeError('webgl context lost', 'context-loss');
    };

    try {
      return await this.bakeInternal(allMeshes, scene, hooks, t0, tp, ctxState, checkAbort);
    } finally {
      releaseContextGuard();
    }
  }

  private async bakeInternal(
    allMeshes: Mesh[],
    scene: Scene | Object3D,
    hooks: BakeHooks,
    t0: number,
    tp: Required<TimeoutProtectionOptions>,
    ctxState: ContextLossState,
    checkAbort: (phase: BakeErrorPhase) => void,
  ): Promise<LightmapBakeResult> {
    // Partition meshes — density mode if `texelsPerMeter` is set (groups keyed
    // by atlas index, all sharing `resolution`), else resolution mode (groups
    // keyed by resolution, one mesh per `perMesh.resolution` override). The
    // two strategies are orthogonal; validateOptions surfaces a DEV warning
    // when the caller mixes them.
    const tpm = this.opts.texelsPerMeter;
    const partition =
      tpm > 0
        ? partitionByDensity(allMeshes, this.opts.perMesh, this.opts.resolution, tpm)
        : partitionByResolution(allMeshes, this.opts.perMesh, this.opts.resolution);
    const { excluded, groups } = partition;
    // In density mode, group keys are atlas indices and ALL groups bake at
    // `partition.resolution`. In resolution mode, the group key IS the per-group
    // resolution. The downstream loop uses `groupResolution(key)` to abstract this.
    const groupResolution = (key: number): number => (tpm > 0 ? partition.resolution : key);

    // --- 1. UV unwrap (only non-excluded meshes need UV2) ---
    const tUV0 = performance.now();
    hooks.onProgress?.('uv-unwrap', 0);
    // Unwrap all groups at once so xatlas sees the full non-excluded set.
    const bakeMeshes = [...groups.values()].flat();
    await generateAtlas(bakeMeshes);
    hooks.onProgress?.('uv-unwrap', 1);
    checkAbort('unwrap');
    const tUV1 = performance.now();

    // --- 2. Geometry: BVH + per-tri materials (SHARED — includes excluded meshes) ---
    const tG0 = performance.now();
    hooks.onProgress?.('geometry', 0);

    // BVH is built from ALL meshes (including excluded) so they cast shadows / contribute GI.
    const merged = mergeGeometry(allMeshes);
    const bvh = new MeshBVH(merged); // mutates merged.index in place
    hooks.onProgress?.('geometry', 0.5);

    const perTri = extractPerTriangleMaterials(merged, allMeshes);
    const matTex = buildMaterialTextures(perTri);
    hooks.onProgress?.('geometry', 1);
    checkAbort('geometry');
    const tG1 = performance.now();

    // --- 3. Build shared light list ---
    // Every light — including the scene's default area light — now lives in
    // the scene as a real THREE.Light, so `collectLightsFromScene` is the
    // single source of truth. If the user deleted every light, the bake will
    // be lit by sky GI alone.
    const skyColor = toLinearColor(this.opts.gi.skyColor, 0xffffff);
    const sceneLights: PackedLight[] = collectLightsFromScene(scene);

    // --- 4. Per-group bake ---
    const tB0 = performance.now();
    const groupKeys = [...groups.keys()];
    const groupResults: GroupInternals[] = [];
    const meshLightmaps = new Map<Mesh, Texture>();
    const meshResolutions = new Map<Mesh, number>();

    // Track excluded meshes: they get no lightmap entry.
    // (They're kept separate so callers know to handle them differently.)
    void excluded; // intentionally unused beyond BVH; suppress lint

    const ctx: GroupBakeContext = {
      renderer: this.renderer,
      opts: this.opts,
      bvh,
      sceneLights,
      skyColor,
      matTex,
      tp,
      ctxState,
    };
    for (let gi = 0; gi < groupKeys.length; gi++) {
      const key = groupKeys[gi]!;
      const res = groupResolution(key);
      const internalRes = res * this.opts.superSample;
      const groupMeshes = groups.get(key)!;

      const { group, finalTex } = await runGroupBake(
        ctx,
        gi,
        groupKeys.length,
        groupMeshes,
        res,
        internalRes,
        hooks,
        checkAbort,
      );
      groupResults.push(group);

      for (const m of groupMeshes) {
        meshLightmaps.set(m, finalTex);
        meshResolutions.set(m, res);
      }
    }
    const tB1 = performance.now();

    const tR0 = performance.now();
    hooks.onProgress?.('refine', 1);
    const tR1 = performance.now();

    // GPU command-queue drain. The bake submits work asynchronously; by the
    // time JS reaches here, the GPU is typically seconds behind processing
    // queued tile/composite draws. If we return without draining, the FIRST
    // post-bake `renderer.render(scene)` triggers an implicit drain — and on
    // some drivers (NVIDIA D3D11 reproduced) that drain piles up enough
    // pressure to TDR / drop the WebGL context. Force the drain HERE, where
    // we can isolate it from scene rendering and any caller observation.
    // Cost: blocks JS for the queue length (~3s observed at 1024² Production).
    // That cost was happening anyway — this just makes it explicit.
    const tDrain0 = performance.now();
    this.renderer.getContext().finish();
    const tDrain1 = performance.now();
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.info(`[baker] GPU queue drain: ${(tDrain1 - tDrain0).toFixed(1)}ms`);
    }

    // Sum texels across all groups. In density mode every group bakes at
    // `partition.resolution`; in resolution mode the key IS the resolution.
    const totalTexels = groupKeys.reduce((s: number, k: number) => {
      const r = groupResolution(k);
      return s + r * r;
    }, 0);
    const stats: BakeStats = {
      meshCount: bakeMeshes.length,
      texelCount: totalTexels,
      raysTraced: this.opts.samples * this.opts.castsPerFrame * totalTexels,
      duration: {
        uvUnwrap: tUV1 - tUV0,
        geometry: tG1 - tG0,
        bake: tB1 - tB0,
        refine: tR1 - tR0,
        total: performance.now() - t0,
      },
    };

    return new LightmapBakeResult(this.renderer, meshLightmaps, meshResolutions, stats, {
      groups: groupResults,
      bvh,
      refinementOptions: this.opts.refinementOptions,
      denoise: this.opts.denoise,
      matTexDispose: () => {
        matTex.albedoTexture.dispose();
        matTex.emissiveTexture.dispose();
      },
    });
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Walks the scene; returns Meshes with a `MeshStandardMaterial`-like material
 * (Standard or Physical). Excludes:
 *  - Helpers/gizmos (TransformControls etc. use `MeshBasicMaterial` — `lightMap`
 *    alone is too loose since Basic also exposes that property)
 *  - Anything marked `userData.lightmapIgnore = true` (explicit opt-out)
 *  - Invisible objects (`visible === false`)
 */
function collectBakeMeshes(scene: Scene | Object3D): Mesh[] {
  const out: Mesh[] = [];
  scene.traverse((obj) => {
    if (!(obj as Mesh).isMesh) return;
    if (!obj.visible) return;
    if (obj.userData?.lightmapIgnore) return;
    const mesh = obj as Mesh;
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    if (mats.some((m) => m && (m as { isMeshStandardMaterial?: boolean }).isMeshStandardMaterial))
      out.push(mesh);
  });
  return out;
}

function buildRaycastOpts(
  opts: LightmapBaker['opts'],
  resolution: number,
  lights: PackedLight[],
  skyColor: Color,
  matTex: { albedoTexture: Texture; emissiveTexture: Texture; side: number },
  tp: Required<TimeoutProtectionOptions>,
): RaycastOptions {
  return {
    resolution,
    casts: opts.castsPerFrame,
    filterMode: opts.filtering === 'linear' ? LinearFilter : NearestFilter,
    lights,
    skyColor,
    skyIntensity: opts.gi.skyIntensity,
    directLightEnabled: opts.light.enabled,
    indirectLightEnabled: opts.gi.enabled,
    albedoTexture: matTex.albedoTexture,
    emissiveTexture: matTex.emissiveTexture,
    materialTextureSize: matTex.side,
    targetSamples: opts.samples,
    bounces: opts.bounces,
    tileSize: tp.initialTileSize,
  };
}

/** Build the AOMapper options for a group at the given resolution. */
function buildAORaycastOpts(
  opts: LightmapBaker['opts'],
  resolution: number,
  tp: Required<TimeoutProtectionOptions>,
): AORaycastOptions {
  return {
    resolution,
    aoSamples: opts.ao.samples,
    ambientDistance: opts.ao.distance,
    targetSamples: opts.samples,
    tileSize: tp.initialTileSize,
  };
}

/**
 * Decide whether to shrink the tile size based on recent RAF intervals.
 *
 * Called once per RAF tick. Receives:
 *   - `intervals`: ring buffer of the last few RAF deltas (ms, newest last)
 *   - `currentTileSize`: tile size in effect right now
 *   - `tp.maxFrameMs`: the per-frame budget the orchestrator targets
 *   - `tp.maxBatchMs`: the per-tile soft ceiling
 *
 * Returns the next tile size. Return `currentTileSize` to leave it alone, or
 * a smaller power-of-two-ish value to trigger an adaptive shrink. The mapper
 * will commit it at the next sample boundary.
 *
 * Constraints:
 *   - Never grow above `currentTileSize` (we don't have RAF data on the
 *     unloaded GPU; growing risks oscillation and TDR).
 *   - Floor at `MIN_TILE_SIZE` (64). Below that, scissor overhead dominates.
 *   - Be conservative — false positives just slow the bake; false negatives
 *     can TDR the user's machine.
 *
 * @example
 *   adaptiveTileSize([18, 19, 17, 20], 256, tp) // → 256 (steady)
 *   adaptiveTileSize([45, 38, 50, 42], 256, tp) // → 128 (3+ stretched RAFs)
 */
const MIN_TILE_SIZE = 64;
function adaptiveTileSize(
  intervals: number[],
  currentTileSize: number,
  tp: Required<TimeoutProtectionOptions>,
): number {
  // TODO(user): Implement the adaptive throttling policy. ~5–10 lines.
  //
  // The signal: if recent RAF intervals are much longer than `tp.maxFrameMs`,
  // the GPU is the bottleneck — shrink the tile so each draw is smaller.
  //
  // Suggested heuristic (feel free to tune):
  //   - If we don't have at least 4 samples yet, return currentTileSize.
  //   - Count how many of the last 4 intervals exceeded `tp.maxFrameMs * 1.5`.
  //   - If 3 or more did, halve currentTileSize (Math.max(MIN_TILE_SIZE, ...)).
  //   - Otherwise return currentTileSize.
  //
  // Why "3 of last 4" not "1 of last 4": single-RAF spikes happen for
  // unrelated reasons (GC, OS scheduler, browser layout). We only want to
  // react to sustained pressure.
  //
  // Why halve, not subtract: tile work scales with side² — halving the side
  // quarters the per-tile cost. Linear shrinking would barely help on the
  // first iteration.
  //
  // Why floor at MIN_TILE_SIZE: each tile incurs ~10–100µs of CPU/driver
  // overhead per draw. At 64x64 on a 1024² lightmap that's already 256 draws
  // per sample — going smaller hurts more than it helps.
  if (intervals.length < 4) return currentTileSize;
  const lookback = intervals.slice(-4);
  const overBudget = lookback.filter((i) => i > tp.maxFrameMs * 1.5).length;
  if (overBudget >= 3) return Math.max(MIN_TILE_SIZE, currentTileSize >> 1);
  return currentTileSize;
}

/**
 * Drive bounce + AO mappers with timeout protection: each RAF runs
 * `renderTiled(maxFrameMs)` on both, optionally shrinks tile size when RAFs
 * stretch under load, and rejects with a `'context-loss'` BakeError if the
 * canvas reports webglcontextlost mid-bake.
 */
function runMappersWithTimeoutProtection(
  lightmapper: Lightmapper,
  aoMapper: AOMapper,
  composite: CompositeResult,
  targetSamples: number,
  hooks: BakeHooks,
  ctxState: ContextLossState,
  tp: Required<TimeoutProtectionOptions>,
  groupIndex: number,
  totalGroups: number,
  onProgress: (p: number) => void,
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const intervals: number[] = [];
    let lastRaf = performance.now();
    let tileSize = tp.initialTileSize;

    const tick = (): void => {
      if (hooks.signal?.aborted) {
        reject(new BakeError('aborted by signal', 'bake'));
        return;
      }
      if (ctxState.lost) {
        reject(new BakeError('webgl context lost during bake', 'context-loss'));
        return;
      }

      const now = performance.now();
      intervals.push(now - lastRaf);
      if (intervals.length > 8) intervals.shift();
      lastRaf = now;

      if (tp.autoAdapt) {
        const next = adaptiveTileSize(intervals, tileSize, tp);
        if (next !== tileSize) {
          console.warn(`[baker] adaptive throttle: tileSize ${tileSize} → ${next}`);
          tileSize = next;
          lightmapper.setTileSize(tileSize);
          aoMapper.setTileSize(tileSize);
          intervals.length = 0; // reset history after a change
        }
      }

      const lr = lightmapper.renderTiled(tp.maxFrameMs);
      const ar = aoMapper.renderTiled(tp.maxFrameMs);
      const minSamples = Math.min(lr.samples, ar.samples);
      onProgress(targetSamples > 0 ? minSamples / targetSamples : 1);

      // Refresh composite so the live preview reflects this frame's accumulator
      // state, then fire onFrame with the live texture refs. The composite must
      // refresh BEFORE onFrame so callers see the up-to-date pixels.
      // Gate refresh on sample-boundary: accumulators only change when a full
      // sample completes, so mid-sample RAFs would blit identical pixels.
      const done = lr.done && ar.done;
      if (lr.sampleComplete || ar.sampleComplete) composite.refresh();
      hooks.onFrame?.({
        groupIndex,
        totalGroups,
        bounceSamples: lr.samples,
        aoSamples: ar.samples,
        targetSamples,
        done,
        compositeTexture: composite.texture,
        directTexture: lightmapper.textures.direct,
        indirectTexture: lightmapper.textures.indirect,
        aoTexture: aoMapper.texture,
      });

      if (done) {
        resolve();
        return;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}
