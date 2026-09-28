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
/**
 * Classify a WebGL renderer string into a coarse GPU tier.
 *
 * False-positive discrete classifications are worse than false-positive
 * integrated classifications, so ambiguous strings fall back to unknown.
 */
export declare function classifyRenderer(renderer: string): GPUTier;
/**
 * Detect GPU capabilities for the given renderer. Always returns a valid
 * structure and never throws. If debug renderer info is unavailable, returns
 * tier 'unknown' with conservative defaults.
 */
export declare function detectGPUCapabilities(renderer: WebGLRenderer): GPUCapabilities;
//# sourceMappingURL=Capabilities.d.ts.map