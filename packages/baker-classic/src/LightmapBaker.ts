import { preflightBakeScene } from './bake/preflight';
import { prepareBakeScene } from './bake/prepareScene';
import { Object3D, Scene, Vector3, WebGLRenderer } from 'three';
import { BakeError, type BakeErrorPhase } from './errors';
import { detectGPUCapabilities } from './gpu/Capabilities';
import { DEFAULT_REFINEMENT, resolveTimeoutProtection, validateOptions } from './bake/validation';
import { LightmapBakeResult } from './bake/result';
import { runBakePipeline } from './bake/pipeline';
import type { BakeHooks, LightmapBakerOptions, ResolvedBakerOptions } from './bake/types';
import type { ContextLossState } from './bake/internals';
import {
  createRendererAdapter,
  getRendererBakeSupportIssue,
  installRendererLossGuard,
  isLightmapRendererAdapter,
  isRendererAdapterLost,
  rendererLossMessage,
  type LightmapRendererAdapter,
} from './rendererAdapter';

// LightmapBakeResult lives in `./bake/result` to keep this file under the
// 300-LOC modularity cap. Re-exported here so the public barrel can pull it
// off `./LightmapBaker` unchanged.
export { LightmapBakeResult } from './bake/result';

// Public type surface - re-exported through `./index.ts`. Definitions live
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
export type {
  LightmapContextLossTarget,
  LightmapRendererAdapter,
  LightmapRendererAdapterOptions,
  LightmapRendererBackend,
} from './rendererAdapter';

export type LightmapBakerInitOptions = LightmapBakerOptions & {
  /**
   * Optional renderer for clean constructor usage:
   * `new LightmapBaker({ renderer, ...opts })`.
   *
   * You can also pass it as the first constructor argument:
   * `new LightmapBaker(renderer, opts)`.
   */
  renderer?: WebGLRenderer;
  /**
   * Optional renderer adapter for offscreen-browser/test harness ownership of
   * renderer setup and context-loss wiring.
   */
  rendererAdapter?: LightmapRendererAdapter;
};

function resolveGIOptions(gi: LightmapBakerInitOptions['gi']): ResolvedBakerOptions['gi'] {
  if (typeof gi === 'boolean') {
    return {
      enabled: gi,
      intensity: 1.0,
      skyColor: 0xffffff,
      skyIntensity: 0.0,
    };
  }

  return {
    enabled: gi?.enabled ?? true,
    intensity: gi?.intensity ?? 1.0,
    skyColor: gi?.skyColor ?? 0xffffff,
    skyIntensity: gi?.skyIntensity ?? 0.0,
  };
}

function resolveAOOptions(
  ao: LightmapBakerInitOptions['ao'],
  castsPerFrame: number | undefined,
): ResolvedBakerOptions['ao'] {
  if (typeof ao === 'boolean') {
    return {
      enabled: ao,
      distance: 0.5,
      intensity: 1.0,
      exponent: 1.5,
      samples: castsPerFrame ?? 5,
    };
  }

  return {
    enabled: ao?.enabled ?? true,
    distance: ao?.distance ?? 0.5,
    intensity: ao?.intensity ?? 1.0,
    exponent: ao?.exponent ?? 1.5,
    samples: ao?.samples ?? castsPerFrame ?? 5,
  };
}

/**
 * One-call lightmap baker - wraps the lib primitives behind the Task 06 spec API.
 *
 * Spec deviations (intentional, documented in JSDoc per call site):
 *
 *  1. A WebGLRenderer is required before `bake()`, either via:
 *       - `new LightmapBaker(renderer, opts)`
 *       - `new LightmapBaker({ renderer, ...opts })`
 *       - `new LightmapBaker({ rendererAdapter, ...opts })`
 *       - `baker.setRenderer(renderer)`
 *       - `baker.setRendererAdapter(adapter)`
 *  2. `result.lightmaps` returns a `Map<Mesh, Texture>` where each mesh maps to its
 *     group's atlas texture. With `perMesh` grouping, meshes in different resolution
 *     groups get different textures. Without `perMesh`, all entries share one texture.
 *  3. `bounces` [0,4] controls GI surface path depth. Zero still samples sky. Russian Roulette
 *     terminates low-throughput paths after bounce 2 for performance.
 *  4. `result.export(path, ...)` triggers a browser download. The `path` argument is
 *     interpreted as a filename hint (last path segment); browsers can't write to
 *     directories. With per-mesh grouping each group is exported as a separate file.
 */
let activeBake = false;

export class LightmapBaker {
  private _rendererAdapter: LightmapRendererAdapter | null = null;
  private opts: ResolvedBakerOptions;

  constructor(renderer: WebGLRenderer, opts?: LightmapBakerOptions);
  constructor(rendererAdapter: LightmapRendererAdapter, opts?: LightmapBakerOptions);
  constructor(opts?: LightmapBakerInitOptions);
  constructor(
    rendererOrOptions: WebGLRenderer | LightmapRendererAdapter | LightmapBakerInitOptions = {},
    maybeOptions: LightmapBakerOptions = {},
  ) {
    // We intentionally rely on `isWebGLRenderer === true` (Three.js runtime tag)
    // and a minimal shape check as a fallback for compatibility across renderer
    // wrappers that preserve the same API surface.
    const usesRendererArg = (v: unknown): v is WebGLRenderer =>
      !!v &&
      typeof v === 'object' &&
      (('isWebGLRenderer' in v && (v as { isWebGLRenderer?: boolean }).isWebGLRenderer === true) ||
        ('getContext' in v && 'domElement' in v));

    const rawOptions: LightmapBakerInitOptions = isLightmapRendererAdapter(rendererOrOptions)
      ? { ...maybeOptions, rendererAdapter: rendererOrOptions }
      : usesRendererArg(rendererOrOptions)
        ? { ...maybeOptions, renderer: rendererOrOptions }
        : { ...rendererOrOptions, ...maybeOptions };

    validateOptions(rawOptions);
    this._rendererAdapter =
      rawOptions.rendererAdapter ??
      (rawOptions.renderer ? createRendererAdapter(rawOptions.renderer) : null);

    const lightPosition = rawOptions.light?.position;
    this.opts = {
      samples: rawOptions.samples ?? 96,
      castsPerFrame: rawOptions.castsPerFrame ?? 5,
      bounces: rawOptions.bounces ?? 1,
      resolution: rawOptions.resolution ?? 1024,
      superSample: rawOptions.superSample ?? 1,
      denoise: rawOptions.denoise ?? true,
      filtering: rawOptions.filtering ?? 'linear',
      texelsPerMeter: rawOptions.texelsPerMeter ?? 0,
      perMesh: rawOptions.perMesh ?? {},
      light: {
        position: Array.isArray(lightPosition)
          ? new Vector3(...(lightPosition as unknown as [number, number, number]))
          : (lightPosition ?? new Vector3(0, 10, 0)),
        color: rawOptions.light?.color ?? 0xffffff,
        intensity: rawOptions.light?.intensity ?? 2.0,
        size: rawOptions.light?.size ?? 1.0,
        enabled: rawOptions.light?.enabled ?? true,
      },
      gi: resolveGIOptions(rawOptions.gi),
      ao: resolveAOOptions(rawOptions.ao, rawOptions.castsPerFrame),
      refinementOptions: {
        ...DEFAULT_REFINEMENT,
        ...(rawOptions.refinementOptions ?? {}),
        denoiseEnabled: rawOptions.denoise ?? DEFAULT_REFINEMENT.denoiseEnabled,
      },
      timeoutProtection: rawOptions.timeoutProtection,
    };
  }

  get renderer(): WebGLRenderer | null {
    return this._rendererAdapter?.renderer ?? null;
  }

  get rendererAdapter(): LightmapRendererAdapter | null {
    return this._rendererAdapter;
  }

  setRenderer(renderer: WebGLRenderer): this {
    this._rendererAdapter = createRendererAdapter(renderer);
    return this;
  }

  setRendererAdapter(rendererAdapter: LightmapRendererAdapter): this {
    this._rendererAdapter = rendererAdapter;
    return this;
  }

  /**
   * Bake the scene. Returns a `LightmapBakeResult` that owns the GPU
   * resources - call `result.dispose()` when done.
   *
   * This method owns three concerns the pipeline can't:
   *   1. Scene preflight plus renderer-backend validation before pipeline setup.
   *   2. GPU-capabilities-driven timeout-protection resolution (caller's
   *      `opts.timeoutProtection` overrides device-detected defaults).
   *   3. Backend loss-guard install + teardown (must release the listener even
   *      if the pipeline throws - `try/finally` is the only safe shape).
   *
   * Everything else (partition → unwrap → BVH → lights → groups → drain →
   * stats → result) lives in `bake/pipeline.ts::runBakePipeline`.
   */
  async bake(scene: Scene | Object3D, hooks: BakeHooks = {}): Promise<LightmapBakeResult> {
    const rendererAdapter = this._rendererAdapter;
    const renderer = rendererAdapter?.renderer ?? null;
    if (!rendererAdapter || !renderer)
      throw new BakeError(
        'renderer is required: use `new LightmapBaker(renderer, opts)`, `new LightmapBaker({ renderer, ...opts })`, `new LightmapBaker({ rendererAdapter, ...opts })`, `baker.setRenderer(renderer)`, or `baker.setRendererAdapter(adapter)`',
        'validation',
      );

    const t0 = performance.now();

    if (activeBake)
      throw new BakeError(
        'Another bake is active; await it before starting a new bake',
        'validation',
      );
    if (hooks.signal?.aborted)
      throw hooks.signal.reason ?? new DOMException('Aborted', 'AbortError');
    const issues = preflightBakeScene(scene);
    const errors = issues.filter((i) => i.severity === 'error');
    if (errors.length)
      throw new BakeError(errors.map((i) => `${i.object}: ${i.message}`).join('\n'), 'validation');
    for (const issue of issues)
      if (issue.severity === 'warning') console.warn(`[baker] ${issue.object}: ${issue.message}`);
    const rendererIssue = getRendererBakeSupportIssue(rendererAdapter);
    if (rendererIssue) throw new BakeError(rendererIssue, 'validation');

    const caps = detectGPUCapabilities(rendererAdapter);
    const tp = resolveTimeoutProtection(this.opts.timeoutProtection, caps);

    const prepared = prepareBakeScene(scene, this.opts.perMesh);
    const allMeshes = prepared.meshes;
    if (!allMeshes.length) {
      prepared.restore();
      throw new BakeError('No bake-eligible meshes', 'validation');
    }
    activeBake = true;
    const controller = new AbortController();
    const userSignal = hooks.signal;
    const onAbort = (): void => controller.abort(userSignal?.reason);
    hooks = { ...hooks, signal: controller.signal };
    // Backend-loss guard: shared mutable flag flipped by the adapter.
    // Each tick of the mapper loop checks it before scheduling new work.
    const lossMessage = rendererLossMessage(rendererAdapter);
    const ctxState: ContextLossState = { lost: false, message: lossMessage };
    const onLost = (): void => {
      ctxState.lost = true;
      controller.abort(new BakeError(lossMessage, 'context-loss'));
      console.error(`[baker] ${lossMessage} during bake - cancelling`);
    };
    let releaseContextGuard = (): void => {};

    const checkAbort = (phase: BakeErrorPhase): void => {
      if (ctxState.lost || isRendererAdapterLost(rendererAdapter))
        throw new BakeError(lossMessage, 'context-loss');
      if (hooks.signal?.aborted) {
        const err = new BakeError('aborted by signal', phase);
        err.name = 'AbortError';
        throw err;
      }
    };
    try {
      userSignal?.addEventListener('abort', onAbort, { once: true });
      releaseContextGuard = installRendererLossGuard(rendererAdapter, onLost);
      scene.updateMatrixWorld(true);
      return await runBakePipeline({
        renderer,
        rendererAdapter,
        opts: { ...this.opts, perMesh: prepared.perMesh },
        sceneDispose: prepared.restore,
        scene,
        allMeshes,
        hooks,
        t0,
        tp,
        ctxState,
        checkAbort,
      });
    } catch (error) {
      prepared.restore();
      throw error;
    } finally {
      activeBake = false;
      userSignal?.removeEventListener('abort', onAbort);
      releaseContextGuard();
    }
  }
}
