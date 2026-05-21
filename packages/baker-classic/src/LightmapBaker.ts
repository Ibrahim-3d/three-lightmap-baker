import { Object3D, Scene, Vector3, WebGLRenderer } from 'three';
import { BakeError, type BakeErrorPhase } from './errors';
import { detectGPUCapabilities } from './gpu/Capabilities';
import {
  DEFAULT_REFINEMENT,
  resolveTimeoutProtection,
  validateOptions,
} from './bake/validation';
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
      return await runBakePipeline({
        renderer: this.renderer,
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
