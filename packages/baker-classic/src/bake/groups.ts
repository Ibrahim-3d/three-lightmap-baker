import { Color, LinearFilter, Mesh, NearestFilter, Texture, WebGLRenderer } from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import {
  generateAOMapper,
  generateLightmapper,
  runComposite,
  runPostProcess,
  type AORaycastOptions,
  type CompositeResult,
  type Lightmapper,
  type AOMapper,
  type PackedLight,
  type PostProcessResult,
  type RaycastOptions,
} from '../lightmap';
import { renderAtlas } from '../atlas/renderAtlas';
import { createDownscale } from '../lightmap/Downscale';
import { BakeError, type BakeErrorPhase } from '../errors';
import type {
  BakeFrameInfo,
  BakeHooks,
  ResolvedBakerOptions,
  TimeoutProtectionOptions,
} from './types';
import type { ContextLossState, GroupInternals } from './internals';

// Per-group bake driver + the tile-timeout-protected mapper loop. Pulled out
// of `LightmapBaker.bakeInternal` (which previously spanned 240 LOC and 5+
// concerns) so the orchestrator can stay under the modularity caps.
//
// The classic baker runs ONE atlas/group at a time. Each group owns its own
// lightmapper, AO mapper, composite, refinement, downscale, and atlas G-buffers
// — everything that survives into `LightmapBakeResult.internals.groups`. This
// file owns those allocations for the lifetime of `runGroupBake` and hands
// them back to the caller.

const MIN_TILE_SIZE = 64;

/**
 * Bag of inputs that every group bake needs — pre-resolved by the orchestrator
 * once and shared across all groups in a single bake. Avoids 10-positional-arg
 * function signatures.
 */
export type GroupBakeContext = {
  renderer: WebGLRenderer;
  opts: ResolvedBakerOptions;
  bvh: MeshBVH;
  sceneLights: PackedLight[];
  skyColor: Color;
  matTex: { albedoTexture: Texture; emissiveTexture: Texture; side: number };
  tp: Required<TimeoutProtectionOptions>;
  ctxState: ContextLossState;
};

export type GroupBakeOutput = {
  group: GroupInternals;
  /** Texture that should be bound to `mesh.lightMap` for every mesh in the group. */
  finalTex: Texture;
};

export function buildRaycastOpts(
  opts: ResolvedBakerOptions,
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
export function buildAORaycastOpts(
  opts: ResolvedBakerOptions,
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
 * Run the bounce + AO mapper loop for ONE group: allocate atlas + mappers +
 * composite, drive them through `runMappersWithTimeoutProtection` until target
 * samples reached, run refinement + optional downscale, and return the result
 * record. Caller manages BVH lifetime and group sequencing.
 */
export async function runGroupBake(
  ctx: GroupBakeContext,
  groupIndex: number,
  totalGroups: number,
  groupMeshes: Mesh[],
  resolution: number,
  internalResolution: number,
  hooks: BakeHooks,
  checkAbort: (phase: BakeErrorPhase) => void,
): Promise<GroupBakeOutput> {
  const { renderer, opts, bvh, sceneLights, skyColor, matTex, tp, ctxState } = ctx;

  hooks.onProgress?.('bake', groupIndex / totalGroups);
  checkAbort('bake');

  const atlas = renderAtlas(renderer, groupMeshes, internalResolution, true);

  const raycastOpts = buildRaycastOpts(opts, internalResolution, sceneLights, skyColor, matTex, tp);
  const aoOpts = buildAORaycastOpts(opts, internalResolution, tp);

  const lightmapper = generateLightmapper(
    renderer,
    atlas.positionTexture,
    atlas.normalTexture,
    bvh,
    raycastOpts,
  );
  const aoMapper = generateAOMapper(
    renderer,
    atlas.positionTexture,
    atlas.normalTexture,
    bvh,
    aoOpts,
  );

  // Composite is created BEFORE the mappers loop so its texture exists during
  // accumulation — callers can mount `composite.texture` on materials
  // immediately and watch it fade in via per-RAF refreshes inside the tile
  // loop. Drives the `onFrame` hook contract.
  const composite = runComposite(
    renderer,
    {
      direct: lightmapper.textures.direct,
      indirect: lightmapper.textures.indirect,
      ao: aoMapper.texture,
    },
    internalResolution,
    {
      directIntensity: 1.0,
      giIntensity: opts.gi.intensity,
      aoEnabled: opts.ao.enabled,
      aoIntensity: opts.ao.intensity,
      aoExponent: opts.ao.exponent,
    },
  );

  await runMappersWithTimeoutProtection(
    lightmapper,
    aoMapper,
    composite,
    opts.samples,
    hooks,
    ctxState,
    tp,
    groupIndex,
    totalGroups,
    (p) => hooks.onProgress?.('bake', (groupIndex + p) / totalGroups),
  );

  let refinement: PostProcessResult | null = null;
  if (opts.denoise || opts.refinementOptions.dilationIterations > 0) {
    refinement = await runPostProcess(
      renderer,
      composite.texture,
      atlas.positionTexture,
      internalResolution,
      opts.refinementOptions,
    );
  }

  // Final texture chosen by user options (refinement output, or raw composite).
  // Still at INTERNAL resolution at this point. If superSample > 1, run a
  // bilinear passthrough into a target-res RT — the result is what `mesh.lightMap`
  // binds to. Hardware bilinear (source LinearFilter) does the anti-aliasing.
  const finalInternalTex = refinement?.texture ?? composite.texture;
  const downscale =
    opts.superSample > 1 ? createDownscale(renderer, finalInternalTex, resolution) : null;
  const finalTex = downscale?.texture ?? finalInternalTex;

  return {
    group: {
      lightmapper,
      aoMapper,
      composite,
      refinement,
      atlasDispose: atlas.dispose,
      resolution,
      internalResolution,
      downscale,
      meshes: groupMeshes,
      positionTex: atlas.positionTexture,
      normalTex: atlas.normalTexture,
    },
    finalTex,
  };
}

/**
 * Decide whether to shrink the tile size based on recent RAF intervals.
 *
 * Called once per RAF tick. Returns the next tile size. Constraints:
 *   - Never grow above currentTileSize (we don't have RAF data on the
 *     unloaded GPU; growing risks oscillation and TDR).
 *   - Floor at MIN_TILE_SIZE (64). Below that, scissor overhead dominates.
 *   - Be conservative — false positives just slow the bake; false negatives
 *     can TDR the user's machine.
 *
 * Heuristic: if 3 of the last 4 RAFs exceeded `tp.maxFrameMs * 1.5`, halve
 * the tile size. Halving (not subtracting) because tile work scales with
 * side² — halving the side quarters the per-tile cost.
 */
function adaptiveTileSize(
  intervals: number[],
  currentTileSize: number,
  tp: Required<TimeoutProtectionOptions>,
): number {
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
          intervals.length = 0;
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
      const frame: BakeFrameInfo = {
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
      };
      hooks.onFrame?.(frame);

      if (done) {
        resolve();
        return;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}
