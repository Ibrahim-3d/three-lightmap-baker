/**
 * Lightmap downscale pass (Task 10 - supersample workflow).
 *
 * Bake at `internalResolution = targetResolution * superSample`, then run this
 * pass once per group to produce the target-resolution texture bound to
 * `mesh.lightMap`. Hardware bilinear (source's LinearFilter) handles the
 * anti-aliasing during the sample - no custom filter math needed.
 *
 * Target RT is HalfFloatType to match the composite delivery format and avoid
 * the OES_texture_float_linear fallback path on iGPUs (see D-015).
 */
import { Texture, WebGLRenderer } from 'three';
export type DownscaleResult = {
    /** Stable target-resolution texture ref. Bind to `mesh.lightMap`. */
    texture: Texture;
    /** Re-blit using the current source. Call after the source RT contents change. */
    refresh: () => void;
    /** Swap the source texture. Caller must call `refresh()` afterward. */
    setSource: (source: Texture) => void;
    /** Free GPU resources (target RT, material, fullscreen quad geometry). */
    dispose: () => void;
};
export declare function createDownscale(renderer: WebGLRenderer, source: Texture, targetResolution: number): DownscaleResult;
//# sourceMappingURL=Downscale.d.ts.map