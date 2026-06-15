import { Texture, WebGLRenderer } from 'three';
import { MeshBVH } from 'three-mesh-bvh';
export type AORaycastOptions = {
    resolution: number;
    /** Hemisphere ray count per frame for AO. Independent of bounce-pass `casts`. */
    aoSamples: number;
    /** AO max distance (also the falloff divisor used at composite time). World units. */
    ambientDistance: number;
    /** Stop accumulating once this many frames have rendered. 0 = unlimited. */
    targetSamples: number;
    /**
     * Per-draw-call ceiling in texels. See `Lightmapper.RaycastOptions.tileSize`
     * for semantics. Default = `resolution` (no tiling, identical to pre-Task-08
     * behaviour).
     */
    tileSize?: number;
};
export type AOMapperRender = {
    samples: number;
    done: boolean;
    sampleComplete: boolean;
    lastDrawMs: number;
};
export type AOMapper = {
    /** Single-channel float RT; stored value is normalized visibility `t` in [0,1]. */
    texture: Texture;
    /** Advance by exactly one full sample (loops tiles internally if tiled). */
    render: () => AOMapperRender;
    /** Advance by as many tiles as fit in `budgetMs`. */
    renderTiled: (budgetMs: number) => AOMapperRender;
    /** Update per-draw tile side; applied at next sample boundary. */
    setTileSize: (tileSize: number) => void;
    reset: () => void;
    dispose: () => void;
};
/**
 * Standalone AO bake pass. Owns its own RT, material, fullscreen quad, and
 * accumulator. Mirror of `generateLightmapper` for the AO channel only.
 *
 * Caller orchestrates `render()` each frame alongside the bounce mapper's
 * render(). When AO sliders change, dispose this and create a fresh one with
 * new opts - the bounce mapper stays alive untouched.
 */
export declare const generateAOMapper: (renderer: WebGLRenderer, positions: Texture, normals: Texture, bvh: MeshBVH, options: AORaycastOptions) => AOMapper;
//# sourceMappingURL=AOMapper.d.ts.map