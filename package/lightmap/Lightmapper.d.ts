import { Color, Texture, TextureFilter, WebGLRenderTarget, WebGLRenderer } from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import { PackedLight } from './Lights';
export type RaycastOptions = {
    resolution: number;
    casts: number;
    /** Array of lights to bake. Pass [] for emissive-only scenes. */
    lights: PackedLight[];
    /** Linear-space environment color used on hemisphere-miss. */
    skyColor: Color;
    /** 0 = closed-scene physical bake; >0 brightens corners and dim regions uniformly. */
    skyIntensity: number;
    filterMode: TextureFilter;
    directLightEnabled: boolean;
    indirectLightEnabled: boolean;
    /** Per-triangle albedo lookup, indexed by global triangle index. Task 03. */
    albedoTexture: Texture;
    /** Per-triangle emissive lookup, same indexing as albedoTexture. Task 03. */
    emissiveTexture: Texture;
    uv01Texture: Texture;
    uv2MapTexture: Texture;
    mapRectTexture: Texture;
    mapTransform0Texture: Texture;
    mapTransform1Texture: Texture;
    albedoMapAtlas: Texture;
    /** Side length of the material textures (both are W×W). */
    materialTextureSize: number;
    /** Stop accumulating once this many frames have been rendered (frames × casts = samples/texel). 0 = unlimited. */
    targetSamples: number;
    /** Number of indirect light bounces. Clamped [1,4]. Default 1. */
    bounces: number;
    /**
     * Per-draw-call ceiling in texels. When `< resolution`, the bake is split
     * into scissored tiles - `(resolution / tileSize)²` draws per sample. TDR
     * protection on iGPUs / large resolutions. Default = `resolution` (one
     * draw per sample, identical to pre-Task-08 behaviour).
     */
    tileSize?: number;
};
export type LightmapperRender = {
    samples: number;
    done: boolean;
    /** True when `render()` returned at a sample boundary; false mid-sample. */
    sampleComplete: boolean;
    /** Wall-clock ms spent on the last draw call. JS-side; doesn't account for GPU async. */
    lastDrawMs: number;
};
export type Lightmapper = {
    renderTarget: WebGLRenderTarget;
    /**
     * Direct/indirect output textures. AO has been split into a separate pass -
     * see `AOMapper.ts`. Composite consumes (direct, indirect, ao-from-AOMapper).
     */
    textures: {
        direct: Texture;
        indirect: Texture;
    };
    /**
     * Advance the bake by exactly one full sample. When tiled, internally loops
     * tiles to completion. Backward-compatible with pre-Task-08 callers (demo).
     */
    render: () => LightmapperRender;
    /**
     * Advance the bake by as many tiles as fit in `budgetMs` of wall time. May
     * complete a sample mid-loop, may return mid-sample. Used by the public
     * `LightmapBaker.bake()` orchestrator for adaptive frame pacing.
     */
    renderTiled: (budgetMs: number) => LightmapperRender;
    /**
     * Update the per-draw tile side. Applied at the next sample boundary so
     * the in-flight sample isn't drawn with mismatched tile coverage. Pass
     * `>= resolution` to disable tiling.
     */
    setTileSize: (tileSize: number) => void;
    /** Reset accumulator (re-bake without rebuilding BVH/textures - currently unused, future-proof). */
    reset: () => void;
    /** Free GPU resources (RT, material, fullscreen quad geometry). Call before re-baking. */
    dispose: () => void;
};
export declare const generateLightmapper: (renderer: WebGLRenderer, positions: Texture, normals: Texture, bvh: MeshBVH, options: RaycastOptions) => Lightmapper;
//# sourceMappingURL=Lightmapper.d.ts.map