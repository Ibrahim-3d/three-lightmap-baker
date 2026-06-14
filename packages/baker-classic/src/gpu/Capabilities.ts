import type { WebGLRenderer } from 'three';

/**
 * GPU capability detection used by timeout protection to pick conservative
 * defaults on integrated or unknown hardware while letting discrete GPUs run
 * at near-native speed.
 *
 * Classification is heuristic because WEBGL_debug_renderer_info can be masked
 * by privacy settings. Unknown renderers use conservative defaults.
 */

export type GPUTier = 'discrete' | 'integrated' | 'unknown';

export type GPUCapabilities = {
  tier: GPUTier;
  /** Raw vendor string, or empty when WEBGL_debug_renderer_info is masked. */
  vendor: string;
  /** Raw renderer string, or empty when masked. */
  renderer: string;
  /**
   * Recommended initial side length in texels for one ray-tracing draw call.
   * If this is smaller than the bake resolution, the bake is split into
   * scissored tiles to reduce driver-watchdog risk.
   */
  initialTileSize: number;
  /** Soft upper bound on per-tile wall time. Above this we shrink tile size. */
  maxBatchMs: number;
  /** Per-frame work budget in milliseconds. The orchestrator yields past it. */
  maxFrameMs: number;
};

const DEFAULTS: Record<GPUTier, Pick<GPUCapabilities, 'initialTileSize' | 'maxBatchMs'>> = {
  discrete: { initialTileSize: 1024, maxBatchMs: 500 },
  integrated: { initialTileSize: 256, maxBatchMs: 250 },
  unknown: { initialTileSize: 256, maxBatchMs: 250 },
};

/**
 * Classify a WebGL renderer string into a coarse GPU tier.
 *
 * False-positive discrete classifications are worse than false-positive
 * integrated classifications, so ambiguous strings fall back to unknown.
 */
export function classifyRenderer(renderer: string): GPUTier {
  const r = renderer.toLowerCase();

  const integratedKeywords = ['intel hd', 'intel uhd', 'iris', 'vega', 'mali', 'adreno', 'powervr'];
  if (integratedKeywords.some((keyword) => r.includes(keyword))) return 'integrated';

  const discreteKeywords = [
    'geforce',
    'rtx',
    'gtx',
    'quadro',
    'radeon rx',
    'radeon pro',
    'apple m',
  ];
  if (discreteKeywords.some((keyword) => r.includes(keyword))) return 'discrete';

  return 'unknown';
}

/**
 * Detect GPU capabilities for the given renderer. Always returns a valid
 * structure and never throws. If debug renderer info is unavailable, returns
 * tier 'unknown' with conservative defaults.
 */
export function detectGPUCapabilities(renderer: WebGLRenderer): GPUCapabilities {
  const gl = renderer.getContext();
  const ext = gl.getExtension('WEBGL_debug_renderer_info');
  const vendor = ext ? String(gl.getParameter(ext.UNMASKED_VENDOR_WEBGL) ?? '') : '';
  const rendererStr = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) ?? '') : '';

  const tier = classifyRenderer(rendererStr);
  const def = DEFAULTS[tier];

  if (import.meta.env.DEV) {
    if (tier === 'unknown') {
      console.warn(
        `[baker] GPU tier unknown (renderer="${rendererStr}"); using conservative defaults`,
      );
    } else {
      console.info(`[baker] GPU detected: ${tier} (${rendererStr})`);
    }
  }

  return {
    tier,
    vendor,
    renderer: rendererStr,
    initialTileSize: def.initialTileSize,
    maxBatchMs: def.maxBatchMs,
    maxFrameMs: 16,
  };
}
