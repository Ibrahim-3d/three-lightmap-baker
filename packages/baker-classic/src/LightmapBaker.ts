import { Object3D, Scene, Vector3, WebGLRenderer } from 'three';
import { BakeError, type BakeErrorPhase } from './errors';
import { detectGPUCapabilities } from './gpu/Capabilities';
import { DEFAULT_REFINEMENT, resolveTimeoutProtection, validateOptions } from './bake/validation';
import { LightmapBakeResult } from './bake/result';
import { collectBakeMeshes, runBakePipeline } from './bake/pipeline';
import type { BakeHooks, LightmapBakerOptions, ResolvedBakerOptions } from './bake/types';
import type { ContextLossState } from './bake/internals';

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

export type LightmapBakerInitOptions = LightmapBakerOptions & {
  /**
   * Optional renderer for clean constructor usage:
   * `new LightmapBaker({ renderer, ...opts })`.
   *
   * You can also pass it as the first constructor argument:
   * `new LightmapBaker(renderer, opts)`.
   */
  renderer?: WebGLRenderer;
};

/**
 * One-call lightmap baker — wraps the lib primitives behind the Task 06 spec API.
 *
 * Spec deviations (intentional, documented in JSDoc per call site):
 *
 *  1. A WebGLRenderer is required before `bake()`, either via:
 *       - `new LightmapBaker(renderer, opts)`
 *       - `new LightmapBaker({ renderer, ...opts })`
 *       - `baker.setRenderer(renderer)`
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
  private _renderer: WebGLRenderer | null = null;
  private opts: ResolvedBakerOptions;

  constructor(renderer: WebGLRenderer, opts?: LightmapBakerOptions);
  constructor(opts?: LightmapBakerInitOptions);
  constructor(
    rendererOrOptions: WebGLRenderer | LightmapBakerInitOptions = {},
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

    const rawOptions: LightmapBakerInitOptions = usesRendererArg(rendererOrOptions)
      ? { ...maybeOptions, renderer: rendererOrOptions }
      : rendererOrOptions;

    validateOptions(rawOptions);
    this._renderer = rawOptions.renderer ?? null;

    this.opts = {
      samples: rawOptions.samples ?? 96,
      castsPerFrame: rawOptions.castsPerFrame ?? 5,
      bounces: Math.min(4, Math.max(1, rawOptions.bounces ?? 1)),
      resolution: rawOptions.resolution ?? 1024,
      superSample: rawOptions.superSample ?? 1,
      denoise: rawOptions.denoise ?? true,
      filtering: rawOptions.filtering ?? 'linear',
      texelsPerMeter: rawOptions.texelsPerMeter ?? 0,
      perMesh: rawOptions.perMesh ?? {},
      light: {
        position: rawOptions.light?.position ?? new Vector3(0, 10, 0),
        color: rawOptions.light?.color ?? 0xffffff,
        intensity: rawOptions.light?.intensity ?? 2.0,
        size: rawOptions.light?.size ?? 1.0,
        enabled: rawOptions.light?.enabled ?? true,
      },
      gi: {
        enabled: rawOptions.gi?.enabled ?? true,
        intensity: rawOptions.gi?.intensity ?? 1.0,
        skyColor: rawOptions.gi?.skyColor ?? 0xffffff,
        skyIntensity: rawOptions.gi?.skyIntensity ?? 0.0,
      },
      ao: {
        enabled: rawOptions.ao?.enabled ?? true,
        distance: rawOptions.ao?.distance ?? 0.5,
        intensity: rawOptions.ao?.intensity ?? 1.0,
        exponent: rawOptions.ao?.exponent ?? 1.5,
        samples: rawOptions.ao?.samples ?? rawOptions.castsPerFrame ?? 5,
      },
      refinementOptions: {
        ...DEFAULT_REFINEMENT,
        ...(rawOptions.refinementOptions ?? {}),
        denoiseEnabled: rawOptions.denoise ?? DEFAULT_REFINEMENT.denoiseEnabled,
      },
      timeoutProtection: rawOptions.timeoutProtection,
    };
  }

  get renderer(): WebGLRenderer | null {
    return this._renderer;
  }

  setRenderer(renderer: WebGLRenderer): this {
    this._renderer = renderer;
    return this;
  }

  /**
   * Bake the scene. Returns a `LightmapBakeResult` that owns the GPU
   * resources — call `result.dispose()` when done.
   *
   * This method owns three concerns the pipeline can't:
   *   1. Mesh collection + EXT validation (must fail fast before pipeline setup).
   *   2. GPU-capabilities-driven timeout-protection resolution (caller's
   *      `opts.timeoutProtection` overrides device-detected defaults).
   *   3. Context-loss guard install + teardown (must release the listener even
   *      if the pipeline throws — `try/finally` is the only safe shape).
   *
   * Everything else (partition → unwrap → BVH → lights → groups → drain →
   * stats → result) lives in `bake/pipeline.ts::runBakePipeline`.
   */
  async bake(scene: Scene | Object3D, hooks: BakeHooks = {}): Promise<LightmapBakeResult> {
    const renderer = this._renderer;
    if (!renderer)
      throw new BakeError(
        'renderer is required: use `new LightmapBaker(renderer, opts)`, `new LightmapBaker({ renderer, ...opts })`, or `baker.setRenderer(renderer)`',
        'validation',
      );

    const t0 = performance.now();

    const allMeshes = collectBakeMeshes(scene);
    if (!allMeshes.length)
      throw new BakeError(
        'no bake-eligible meshes in scene (need Mesh + MeshStandardMaterial-like)',
        'validation',
      );

    const gl = renderer.getContext();
    if (!gl.getExtension('EXT_color_buffer_float'))
      throw new BakeError(
        'EXT_color_buffer_float WebGL2 extension is unavailable; FloatType RTs cannot be allocated',
        'validation',
      );

    const caps = detectGPUCapabilities(renderer);
    const tp = resolveTimeoutProtection(this.opts.timeoutProtection, caps);

    // Context-loss guard: shared mutable flag flipped by the canvas listener.
    // Each tick of the mapper loop checks it before scheduling new work.
    const ctxState: ContextLossState = { lost: false };
    const canvas = renderer.domElement;
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
      return await runBakePipeline({
        renderer,
        opts: this.opts,
        scene,
        allMeshes,
        hooks,
        t0,
        tp,
        ctxState,
        checkAbort,
      });
    } finally {
      releaseContextGuard();
    }
  }
}
