import { Object3D, Scene, WebGLRenderer } from 'three';
import { LightmapBakeResult } from './bake/result';
import type { BakeHooks, LightmapBakerOptions } from './bake/types';
import { type LightmapRendererAdapter } from './rendererAdapter';
export { LightmapBakeResult } from './bake/result';
export type { BakePhase, BakeFrameInfo, BakeHooks, BakeStats, LightmapBakerOptions, TimeoutProtectionOptions, LightOptions, PackedLight, GIOptions, AOOptions, BakeGroupView, } from './bake/types';
export type { LightmapContextLossTarget, LightmapRendererAdapter, LightmapRendererAdapterOptions, } from './rendererAdapter';
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
 *  3. `bounces` [1,4] controls GI path depth. Clamped on construction. Russian Roulette
 *     terminates low-throughput paths after bounce 2 for performance.
 *  4. `result.export(path, ...)` triggers a browser download. The `path` argument is
 *     interpreted as a filename hint (last path segment); browsers can't write to
 *     directories. With per-mesh grouping each group is exported as a separate file.
 */
export declare class LightmapBaker {
    private _rendererAdapter;
    private opts;
    constructor(renderer: WebGLRenderer, opts?: LightmapBakerOptions);
    constructor(rendererAdapter: LightmapRendererAdapter, opts?: LightmapBakerOptions);
    constructor(opts?: LightmapBakerInitOptions);
    get renderer(): WebGLRenderer | null;
    get rendererAdapter(): LightmapRendererAdapter | null;
    setRenderer(renderer: WebGLRenderer): this;
    setRendererAdapter(rendererAdapter: LightmapRendererAdapter): this;
    /**
     * Bake the scene. Returns a `LightmapBakeResult` that owns the GPU
     * resources - call `result.dispose()` when done.
     *
     * This method owns three concerns the pipeline can't:
     *   1. Mesh collection + EXT validation (must fail fast before pipeline setup).
     *   2. GPU-capabilities-driven timeout-protection resolution (caller's
     *      `opts.timeoutProtection` overrides device-detected defaults).
     *   3. Context-loss guard install + teardown (must release the listener even
     *      if the pipeline throws - `try/finally` is the only safe shape).
     *
     * Everything else (partition → unwrap → BVH → lights → groups → drain →
     * stats → result) lives in `bake/pipeline.ts::runBakePipeline`.
     */
    bake(scene: Scene | Object3D, hooks?: BakeHooks): Promise<LightmapBakeResult>;
}
//# sourceMappingURL=LightmapBaker.d.ts.map