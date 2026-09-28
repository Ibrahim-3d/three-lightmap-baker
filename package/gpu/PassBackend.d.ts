import type { Texture, WebGLRenderer } from 'three';
import { type CompositeOverrides, type CompositeResult } from '../lightmap/Composite';
import { type DownscaleResult } from '../lightmap/Downscale';
import { type PostProcessOptions, type PostProcessResult } from '../lightmap/Refinement';
import { type ExportFormat } from '../utils/exportLightmap';
import { type LightmapRendererAdapter, type LightmapRendererBackend } from '../rendererAdapter';
export type LightmapCompositeInputs = {
    direct: Texture;
    indirect: Texture;
    ao: Texture;
};
export type LightmapCompositeOptions = {
    directIntensity: number;
    giIntensity: number;
    aoEnabled: boolean;
    aoIntensity: number;
    aoExponent: number;
};
export type LightmapPassBackend = {
    backend: LightmapRendererBackend;
    createComposite(inputs: LightmapCompositeInputs, resolution: number, options: LightmapCompositeOptions): CompositeResult;
    createDownscale(source: Texture, targetResolution: number): DownscaleResult;
    runPostProcess(source: Texture, positions: Texture, resolution: number, options: PostProcessOptions, onProgress?: (percent: number) => void, controls?: {
        signal?: AbortSignal;
        normals?: Texture;
    }): Promise<PostProcessResult>;
    exportLightmap(source: Texture, resolution: number, filename: string, format: ExportFormat): Promise<void>;
};
/**
 * Current shipping implementation.
 *
 * W2 introduces this seam without changing any WebGL shader, render-target
 * format, filtering rule or readback behavior. A WebGPU implementation can be
 * added later without making the high-level bake pipeline know which concrete
 * pass implementation it is using.
 */
export declare function createWebGLPassBackend(renderer: WebGLRenderer): LightmapPassBackend;
/**
 * Resolve the utility-pass implementation for the active renderer backend.
 *
 * The async shape is intentional: the future WebGPU branch can dynamically
 * import its TSL/WebGPU implementation only when selected, so WebGL users do
 * not pay the WebGPU bundle cost. WebGPU is rejected until that module exists.
 */
export declare function resolveLightmapPassBackend(adapter: LightmapRendererAdapter): Promise<LightmapPassBackend>;
export type { CompositeOverrides, CompositeResult, DownscaleResult, ExportFormat, PostProcessOptions, PostProcessResult, };
//# sourceMappingURL=PassBackend.d.ts.map