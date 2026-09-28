import { HalfFloatType, LinearFilter, type Texture, type WebGPURenderer } from 'three/webgpu';
import { createPortableBlit, type PortableBlitResult } from './PortableBlit';

export type PortableDownscaleResult = Omit<PortableBlitResult, 'target'>;

/**
 * Experimental W2 downscale pass for the WebGPURenderer family.
 *
 * The exact filtering behavior intentionally mirrors the shipping WebGL
 * downscale pass: the source texture is sampled with its configured filtering
 * into a HalfFloat target at the requested final resolution.
 */
export function createPortableDownscale(
  renderer: WebGPURenderer,
  source: Texture,
  targetResolution: number,
): PortableDownscaleResult {
  const blit = createPortableBlit(renderer, source, targetResolution, targetResolution, {
    type: HalfFloatType,
    minFilter: LinearFilter,
    magFilter: LinearFilter,
  });

  return {
    texture: blit.texture,
    refresh: blit.refresh,
    setSource: blit.setSource,
    dispose: blit.dispose,
  };
}
