import type { WebGLRenderer } from 'three';

export type LightmapRendererBackend = 'webgl' | 'webgpu';

export type LightmapContextLossTarget = Pick<
  EventTarget,
  'addEventListener' | 'removeEventListener'
>;

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

export type LightmapRendererAdapterOptions = Omit<
  LightmapRendererAdapter,
  'renderer' | 'backend'
>;

export function createRendererAdapter(
  renderer: WebGLRenderer,
  options: LightmapRendererAdapterOptions = {},
): LightmapRendererAdapter {
  return {
    backend: 'webgl',
    renderer,
    contextLossTarget: options.contextLossTarget ?? renderer.domElement,
    label: options.label,
  };
}

export function getRendererBackend(
  adapter: LightmapRendererAdapter,
): LightmapRendererBackend {
  return adapter.backend ?? 'webgl';
}

/**
 * Returns a user-facing reason when the adapter cannot run the shipping bake
 * pipeline. Keeping this check here prevents backend-specific validation from
 * leaking into LightmapBaker orchestration.
 */
export function getRendererBakeSupportIssue(
  adapter: LightmapRendererAdapter,
): string | null {
  const backend = getRendererBackend(adapter);
  if (backend !== 'webgl') {
    return `${backend} baking is not implemented yet; use the WebGL backend`;
  }

  const gl = adapter.renderer.getContext();
  if (!gl.getExtension('EXT_color_buffer_float')) {
    return 'EXT_color_buffer_float WebGL2 extension is unavailable; FloatType RTs cannot be allocated';
  }

  return null;
}

/** Read hardware identity/limits without exposing raw WebGL context calls to callers. */
export function getRendererHardwareInfo(
  adapter: LightmapRendererAdapter,
): LightmapRendererHardwareInfo {
  if (getRendererBackend(adapter) !== 'webgl') {
    return {
      vendor: '',
      renderer: '',
      maxTextureSize: adapter.renderer.capabilities.maxTextureSize,
    };
  }

  const gl = adapter.renderer.getContext();
  const ext = gl.getExtension('WEBGL_debug_renderer_info');
  return {
    vendor: ext ? String(gl.getParameter(ext.UNMASKED_VENDOR_WEBGL) ?? '') : '',
    renderer: ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) ?? '') : '',
    maxTextureSize: adapter.renderer.capabilities.maxTextureSize,
  };
}

/** True when the active backend can no longer accept bake work. */
export function isRendererAdapterLost(adapter: LightmapRendererAdapter): boolean {
  if (getRendererBackend(adapter) !== 'webgl') return false;
  return adapter.renderer.getContext().isContextLost();
}

/**
 * Install backend-specific loss monitoring and return an idempotent cleanup
 * function. The callback deliberately receives no WebGL event so orchestration
 * remains backend-neutral.
 */
export function installRendererLossGuard(
  adapter: LightmapRendererAdapter,
  onLost: () => void,
): () => void {
  if (getRendererBackend(adapter) !== 'webgl') return () => {};

  const target = adapter.contextLossTarget ?? adapter.renderer.domElement;
  const listener = (event: Event): void => {
    event.preventDefault();
    onLost();
  };
  target.addEventListener('webglcontextlost', listener as EventListener, false);

  let released = false;
  return () => {
    if (released) return;
    released = true;
    target.removeEventListener('webglcontextlost', listener as EventListener, false);
  };
}

/**
 * Wait until work already submitted to the active backend is complete.
 *
 * WebGL uses `gl.finish()` because the shipping pipeline relies on the explicit
 * drain to avoid pushing a large queued workload into the first post-bake draw.
 * WebGPU will use its own queue-completion primitive when that backend lands.
 */
export async function drainRendererAdapter(adapter: LightmapRendererAdapter): Promise<void> {
  if (getRendererBackend(adapter) !== 'webgl') {
    throw new Error(`${getRendererBackend(adapter)} queue drain is not implemented yet`);
  }
  adapter.renderer.getContext().finish();
}

export function rendererLossMessage(adapter: LightmapRendererAdapter): string {
  return getRendererBackend(adapter) === 'webgpu'
    ? 'webgpu device lost'
    : 'webgl context lost';
}

export function isLightmapRendererAdapter(value: unknown): value is LightmapRendererAdapter {
  return (
    !!value &&
    typeof value === 'object' &&
    'renderer' in value &&
    (value as { renderer?: unknown }).renderer !== null &&
    typeof (value as { renderer?: { isWebGLRenderer?: boolean } }).renderer?.isWebGLRenderer ===
      'boolean'
  );
}
