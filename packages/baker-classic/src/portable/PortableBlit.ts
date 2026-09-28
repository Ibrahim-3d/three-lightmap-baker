import {
  HalfFloatType,
  LinearFilter,
  NodeMaterial,
  QuadMesh,
  RenderTarget,
  type Texture,
  type WebGPURenderer,
} from 'three/webgpu';
import { texture } from 'three/tsl';

export type PortableBlitOptions = {
  type?: number;
  minFilter?: number;
  magFilter?: number;
};

export type PortableBlitResult = {
  texture: Texture;
  target: RenderTarget;
  refresh: () => void;
  setSource: (source: Texture) => void;
  dispose: () => void;
};

/**
 * Minimal backend-portable fullscreen texture copy for the WebGPURenderer family.
 *
 * WebGPURenderer can target WebGPU or its WebGL2 fallback. The pass uses TSL
 * instead of ShaderMaterial/GLSL so the shader source is backend-independent.
 */
export function createPortableBlit(
  renderer: WebGPURenderer,
  source: Texture,
  width: number,
  height: number,
  options: PortableBlitOptions = {},
): PortableBlitResult {
  const target = new RenderTarget(width, height, {
    type: options.type ?? HalfFloatType,
    minFilter: options.minFilter ?? LinearFilter,
    magFilter: options.magFilter ?? LinearFilter,
    generateMipmaps: false,
    depthBuffer: false,
    stencilBuffer: false,
  });

  const material = new NodeMaterial();
  material.depthTest = false;
  material.depthWrite = false;
  material.fragmentNode = texture(source);

  const quad = new QuadMesh(material);

  const refresh = (): void => {
    const previousTarget = renderer.getRenderTarget();
    const previousAutoClear = renderer.autoClear;
    try {
      renderer.autoClear = true;
      renderer.setRenderTarget(target);
      quad.render(renderer);
    } finally {
      renderer.setRenderTarget(previousTarget);
      renderer.autoClear = previousAutoClear;
    }
  };

  const setSource = (next: Texture): void => {
    material.fragmentNode = texture(next);
    material.needsUpdate = true;
  };

  try {
    refresh();
  } catch (error) {
    target.dispose();
    material.dispose();
    throw error;
  }

  return {
    texture: target.texture,
    target,
    refresh,
    setSource,
    dispose: () => {
      target.dispose();
      material.dispose();
    },
  };
}
