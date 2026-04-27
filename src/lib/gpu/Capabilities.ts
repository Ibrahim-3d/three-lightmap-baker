import { WebGLRenderer } from 'three';

/**
 * GPU capability detection — used by the timeout-protection layer to pick
 * conservative defaults on iGPUs / unknown hardware while letting discrete
 * GPUs run at near-native speed.
 *
 * Classification is heuristic: WEBGL_debug_renderer_info is masked on some
 * browsers (Firefox strict privacy, Brave, certain mobile browsers), in which
 * case we fall back to `'unknown'` and pick conservative defaults.
 */

export type GPUTier = 'discrete' | 'integrated' | 'unknown';

export type GPUCapabilities = {
  tier: GPUTier;
  /** Raw vendor string (or '' if WEBGL_debug_renderer_info is masked). */
  vendor: string;
  /** Raw renderer string (or '' if masked). */
  renderer: string;
  /**
   * Recommended initial side length in texels for one ray-tracing draw call.
   * If `>= bake resolution`, the bake runs in a single draw per sample
   * (legacy behaviour). If `<`, the bake is split into scissored tiles, each
   * a separate `gl.draw()` — TDR-safe but with `(res / tileSize)²` more draw
   * calls per sample.
   */
  initialTileSize: number;
  /** Soft upper bound on per-tile wall time. Above this we shrink `tileSize`. */
  maxBatchMs: number;
  /** Per-frame work budget (ms). Orchestrator yields once exceeded. */
  maxFrameMs: number;
};

const DEFAULTS: Record<GPUTier, Pick<GPUCapabilities, 'initialTileSize' | 'maxBatchMs'>> = {
  // Discrete: no tiling at typical resolutions (1024² → 1 tile).
  discrete: { initialTileSize: 1024, maxBatchMs: 500 },
  // Integrated: 4×4 tiles at 1024² so each draw is ≪ TDR watchdog.
  integrated: { initialTileSize: 256, maxBatchMs: 250 },
  // Unknown: be conservative.
  unknown: { initialTileSize: 256, maxBatchMs: 250 },
};

/**
 * Classify a renderer string into a {@link GPUTier}.
 *
 * Examples seen in the wild (post-WEBGL_debug_renderer_info unmask):
 *   - "ANGLE (NVIDIA, NVIDIA GeForce RTX 3060 ..., D3D11)"  → discrete
 *   - "ANGLE (Intel, Intel(R) Iris(R) Xe Graphics ..., D3D11)" → integrated
 *   - "ANGLE (AMD, AMD Radeon RX 6800 XT ..., D3D11)"      → discrete
 *   - "ANGLE (AMD, AMD Radeon(TM) Vega 8 Graphics ..., D3D11)" → integrated
 *   - "Apple M2 Pro" / "Apple M3 Max"                       → discrete (unified mem, but fast)
 *   - "Mali-G78" / "Adreno 740"                             → integrated (mobile)
 *
 * NOTE: Heuristics are intentionally conservative — when uncertain, return
 * `'unknown'` so the safe defaults apply.
 *
 * @example
 *   classifyRenderer('ANGLE (NVIDIA, NVIDIA GeForce RTX 3060 ..., D3D11)') // 'discrete'
 *   classifyRenderer('ANGLE (Intel, Intel(R) UHD Graphics 620, D3D11)')   // 'integrated'
 *   classifyRenderer('')                                                   // 'unknown'
 */
export function classifyRenderer(renderer: string): GPUTier {
  // TODO(user): Implement the classifier. ~5–10 lines.
  //
  // Trade-offs to weigh:
  //   - False-positive 'discrete' on iGPU → user hits TDR → very bad UX.
  //   - False-positive 'integrated' on dGPU → bake is slower but correct.
  //   So when in doubt, prefer 'integrated' / 'unknown' over 'discrete'.
  //
  // Suggested approach: lowercase the string once, then check substrings in
  // priority order:
  //   1. integrated keywords FIRST (some strings contain both, e.g. "Iris" + "Intel")
  //      - 'intel hd', 'intel uhd', 'iris', 'vega', 'mali', 'adreno', 'powervr'
  //   2. discrete keywords
  //      - 'geforce', 'rtx', 'gtx', 'quadro', 'radeon rx', 'radeon pro',
  //        'apple m'  (Apple Silicon — unified memory but desktop-class throughput)
  //   3. else 'unknown'
  //
  // Replace the body below with your implementation.
  const r = renderer.toLowerCase();

  const integratedKeywords = ['intel hd', 'intel uhd', 'iris', 'vega', 'mali', 'adreno', 'powervr'];
  if (integratedKeywords.some((k) => r.includes(k))) return 'integrated';

  const discreteKeywords = [
    'geforce',
    'rtx',
    'gtx',
    'quadro',
    'radeon rx',
    'radeon pro',
    'apple m',
  ];
  if (discreteKeywords.some((k) => r.includes(k))) return 'discrete';

  return 'unknown';
}

/**
 * Detect GPU capabilities for the given renderer. Called once at bake start.
 *
 * Always returns a valid struct — never throws. If `WEBGL_debug_renderer_info`
 * is unavailable, returns `tier='unknown'` with conservative defaults and
 * empty vendor/renderer strings.
 */
export function detectGPUCapabilities(renderer: WebGLRenderer): GPUCapabilities {
  const gl = renderer.getContext();
  const ext = gl.getExtension('WEBGL_debug_renderer_info');
  const vendor = ext ? String(gl.getParameter(ext.UNMASKED_VENDOR_WEBGL) ?? '') : '';
  const rendererStr = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) ?? '') : '';

  const tier: GPUTier = classifyRenderer(rendererStr);
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
