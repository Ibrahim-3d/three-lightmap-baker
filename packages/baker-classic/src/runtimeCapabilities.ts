export type LightmapRuntimeKind = 'browser' | 'offscreen-browser' | 'node' | 'unknown';

export type LightmapRuntimeFeature =
  | 'webgl2'
  | 'float-color-buffer'
  | 'offscreen-canvas'
  | 'raf'
  | 'texture-download-export'
  | 'filesystem-export'
  | 'node-headless-bake';

export type LightmapRuntimeFeatureStatus = 'available' | 'unavailable' | 'unknown';

export type LightmapRuntimeCapabilities = {
  runtime: LightmapRuntimeKind;
  canBake: boolean;
  rendererStrategy: 'webgl-browser' | 'node-headless-unavailable';
  features: Record<LightmapRuntimeFeature, LightmapRuntimeFeatureStatus>;
  limitations: string[];
};

type RuntimeProbeGlobals = {
  window?: unknown;
  document?: { createElement?: (tagName: string) => unknown };
  OffscreenCanvas?: new (
    width: number,
    height: number,
  ) => {
    getContext?: (contextId: string) => unknown;
  };
  WebGL2RenderingContext?: unknown;
  requestAnimationFrame?: unknown;
  process?: { versions?: { node?: string } };
};

function currentGlobals(): RuntimeProbeGlobals {
  return globalThis as RuntimeProbeGlobals;
}

function hasNodeProcess(globals: RuntimeProbeGlobals): boolean {
  return typeof globals.process?.versions?.node === 'string';
}

function hasBrowserWindow(globals: RuntimeProbeGlobals): boolean {
  return typeof globals.window !== 'undefined' && typeof globals.document !== 'undefined';
}

function detectRuntime(globals: RuntimeProbeGlobals): LightmapRuntimeKind {
  if (hasBrowserWindow(globals)) return 'browser';
  if (typeof globals.OffscreenCanvas === 'function') return 'offscreen-browser';
  if (hasNodeProcess(globals)) return 'node';
  return 'unknown';
}

function hasWebGL2Constructor(globals: RuntimeProbeGlobals): LightmapRuntimeFeatureStatus {
  return typeof globals.WebGL2RenderingContext === 'function' ? 'available' : 'unavailable';
}

function probeOffscreenWebGL2(globals: RuntimeProbeGlobals): LightmapRuntimeFeatureStatus {
  if (typeof globals.OffscreenCanvas !== 'function') return 'unavailable';

  try {
    const canvas = new globals.OffscreenCanvas(1, 1);
    return canvas.getContext?.('webgl2') ? 'available' : 'unavailable';
  } catch {
    return 'unavailable';
  }
}

export function getLightmapRuntimeCapabilities(
  globals: RuntimeProbeGlobals = currentGlobals(),
): LightmapRuntimeCapabilities {
  const runtime = detectRuntime(globals);
  const offscreenCanvas =
    typeof globals.OffscreenCanvas === 'function' ? 'available' : 'unavailable';
  const raf = typeof globals.requestAnimationFrame === 'function' ? 'available' : 'unavailable';
  const webgl2 =
    runtime === 'offscreen-browser' ? probeOffscreenWebGL2(globals) : hasWebGL2Constructor(globals);
  const canBake =
    (runtime === 'browser' || runtime === 'offscreen-browser') &&
    webgl2 !== 'unavailable' &&
    raf === 'available';

  return {
    runtime,
    canBake,
    rendererStrategy: canBake ? 'webgl-browser' : 'node-headless-unavailable',
    features: {
      webgl2,
      'float-color-buffer': webgl2 === 'unavailable' ? 'unavailable' : 'unknown',
      'offscreen-canvas': offscreenCanvas,
      raf,
      'texture-download-export': runtime === 'browser' ? 'available' : 'unavailable',
      'filesystem-export': 'unavailable',
      'node-headless-bake': 'unavailable',
    },
    limitations:
      runtime === 'node'
        ? [
            'True Node.js headless baking is not implemented yet.',
            'The current bake pipeline still requires a browser WebGL2 renderer and RAF-driven progressive passes.',
          ]
        : [],
  };
}
