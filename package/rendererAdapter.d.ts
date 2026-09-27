import type { WebGLRenderer } from 'three';
export type LightmapRendererBackend = 'webgl' | 'webgpu';
export type LightmapContextLossTarget = Pick<EventTarget, 'addEventListener' | 'removeEventListener'>;
export type LightmapRendererHardwareInfo = {
    vendor: string;
    renderer: string;
    maxTextureSize: number;
};
export type LightmapRendererAdapter = {
    /**
     * Backend selected by this adapter.
     *
     * Optional for backwards compatibility with adapters created before the
     * backend field existed; missing means `webgl`.
     */
    backend?: LightmapRendererBackend;
    /**
     * Three.js renderer used by the current shipping bake pipeline.
     *
     * W1 keeps execution WebGL-only while moving WebGL-specific lifecycle and
     * capability logic behind this adapter. A later WebGPU implementation can
     * expand the renderer side without changing the public LightmapBaker flow.
     */
    renderer: WebGLRenderer;
    /**
     * Event target used for context-loss monitoring. Defaults to
     * `renderer.domElement` for normal browser canvases. Offscreen/test adapters
     * may provide another target when no DOM canvas is available.
     */
    contextLossTarget?: LightmapContextLossTarget;
    /** Optional label for diagnostics and capability matrices. */
    label?: string;
};
export type LightmapRendererAdapterOptions = Omit<LightmapRendererAdapter, 'renderer' | 'backend'>;
export declare function createRendererAdapter(renderer: WebGLRenderer, options?: LightmapRendererAdapterOptions): LightmapRendererAdapter;
export declare function getRendererBackend(adapter: LightmapRendererAdapter): LightmapRendererBackend;
/**
 * Returns a user-facing reason when the adapter cannot run the shipping bake
 * pipeline. Keeping this check here prevents backend-specific validation from
 * leaking into LightmapBaker orchestration.
 */
export declare function getRendererBakeSupportIssue(adapter: LightmapRendererAdapter): string | null;
/** Read hardware identity/limits without exposing raw WebGL context calls to callers. */
export declare function getRendererHardwareInfo(adapter: LightmapRendererAdapter): LightmapRendererHardwareInfo;
/** True when the active backend can no longer accept bake work. */
export declare function isRendererAdapterLost(adapter: LightmapRendererAdapter): boolean;
/**
 * Install backend-specific loss monitoring and return an idempotent cleanup
 * function. The callback deliberately receives no WebGL event so orchestration
 * remains backend-neutral.
 */
export declare function installRendererLossGuard(adapter: LightmapRendererAdapter, onLost: () => void): () => void;
/**
 * Wait until work already submitted to the active backend is complete.
 *
 * WebGL uses `gl.finish()` because the shipping pipeline relies on the explicit
 * drain to avoid pushing a large queued workload into the first post-bake draw.
 * WebGPU will use its own queue-completion primitive when that backend lands.
 */
export declare function drainRendererAdapter(adapter: LightmapRendererAdapter): Promise<void>;
export declare function rendererLossMessage(adapter: LightmapRendererAdapter): string;
export declare function isLightmapRendererAdapter(value: unknown): value is LightmapRendererAdapter;
//# sourceMappingURL=rendererAdapter.d.ts.map