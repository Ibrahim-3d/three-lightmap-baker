import type { WebGLRenderer } from 'three';

export type LightmapContextLossTarget = Pick<
  EventTarget,
  'addEventListener' | 'removeEventListener'
>;

export type LightmapRendererAdapter = {
  /**
   * Three.js renderer used by the current WebGL bake pipeline.
   *
   * The adapter exists so browser, offscreen-browser, test harness, and future
   * headless runtimes can own renderer/context setup without changing the bake
   * API again.
   */
  renderer: WebGLRenderer;
  /**
   * Event target used for context-loss monitoring. Defaults to
   * `renderer.domElement` for normal browser canvases. Offscreen/test adapters
   * may provide another target when no DOM canvas is available.
   */
  contextLossTarget?: LightmapContextLossTarget;
  /** Optional label for diagnostics and future capability matrices. */
  label?: string;
};

export type LightmapRendererAdapterOptions = Omit<LightmapRendererAdapter, 'renderer'>;

export function assertSupportedLightmapRenderer(renderer: unknown): void {
  if (
    renderer &&
    typeof renderer === 'object' &&
    (renderer as { isWebGPURenderer?: boolean }).isWebGPURenderer === true
  ) {
    throw new TypeError(
      'lightmap-baker v1.1 requires THREE.WebGLRenderer. THREE.WebGPURenderer is not supported, including its WebGL fallback mode.',
    );
  }
}

export function createRendererAdapter(
  renderer: WebGLRenderer,
  options: LightmapRendererAdapterOptions = {},
): LightmapRendererAdapter {
  assertSupportedLightmapRenderer(renderer);
  return {
    renderer,
    contextLossTarget: options.contextLossTarget ?? renderer.domElement,
    label: options.label,
  };
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
