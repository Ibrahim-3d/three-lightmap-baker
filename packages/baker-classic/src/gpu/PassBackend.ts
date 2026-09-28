import type { Texture, WebGLRenderer } from 'three';
import {
  createDownscale as createWebGLDownscale,
  runComposite as runWebGLComposite,
  runPostProcess as runWebGLPostProcess,
  type CompositeOverrides,
  type CompositeResult,
  type DownscaleResult,
  type PostProcessOptions,
  type PostProcessResult,
} from '../lightmap';
import {
  exportLightmap as exportWebGLLightmap,
  type ExportFormat,
} from '../utils/exportLightmap';
import {
  getRendererBackend,
  type LightmapRendererAdapter,
  type LightmapRendererBackend,
} from '../rendererAdapter';

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
  createComposite(
    inputs: LightmapCompositeInputs,
    resolution: number,
    options: LightmapCompositeOptions,
  ): CompositeResult;
  createDownscale(source: Texture, targetResolution: number): DownscaleResult;
  runPostProcess(
    source: Texture,
    positions: Texture,
    resolution: number,
    options: PostProcessOptions,
    onProgress?: (percent: number) => void,
    controls?: { signal?: AbortSignal; normals?: Texture },
  ): Promise<PostProcessResult>;
  exportLightmap(
    source: Texture,
    resolution: number,
    filename: string,
    format: ExportFormat,
  ): Promise<void>;
};

/**
 * Current shipping implementation.
 *
 * W2 introduces this seam without changing any WebGL shader, render-target
 * format, filtering rule or readback behavior. A WebGPU implementation can be
 * added later without making the high-level bake pipeline know which concrete
 * pass implementation it is using.
 */
export function createWebGLPassBackend(renderer: WebGLRenderer): LightmapPassBackend {
  return {
    backend: 'webgl',
    createComposite: (inputs, resolution, options) =>
      runWebGLComposite(renderer, inputs, resolution, options),
    createDownscale: (source, targetResolution) =>
      createWebGLDownscale(renderer, source, targetResolution),
    runPostProcess: (source, positions, resolution, options, onProgress, controls) =>
      runWebGLPostProcess(
        renderer,
        source,
        positions,
        resolution,
        options,
        onProgress,
        controls,
      ),
    exportLightmap: (source, resolution, filename, format) =>
      exportWebGLLightmap(renderer, source, resolution, filename, format),
  };
}

/**
 * Resolve the utility-pass implementation for the active renderer backend.
 *
 * WebGPU is intentionally rejected here until its pass implementation exists.
 * The higher-level baker already blocks unsupported WebGPU baking, but keeping
 * the guard at this seam prevents accidental partial-backend execution later.
 */
export function resolveLightmapPassBackend(
  adapter: LightmapRendererAdapter,
): LightmapPassBackend {
  const backend = getRendererBackend(adapter);
  if (backend === 'webgl') return createWebGLPassBackend(adapter.renderer);

  throw new Error(`${backend} utility-pass backend is not implemented yet`);
}

// Re-export result/input types used by callers that need to describe backend
// operations without importing the concrete WebGL modules.
export type {
  CompositeOverrides,
  CompositeResult,
  DownscaleResult,
  ExportFormat,
  PostProcessOptions,
  PostProcessResult,
};
