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