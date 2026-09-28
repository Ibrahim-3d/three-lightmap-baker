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

import {
  HalfFloatType,
  LinearFilter,
  Mesh,
  NoBlending,
  OrthographicCamera,
  PlaneGeometry,
  Texture,
  WebGLRenderer,
  WebGLRenderTarget,
} from 'three';
import { NodeMaterial } from 'three/webgpu';
import { positionGeometry, texture, vec4 } from 'three/tsl';
import { ensureWebGLNodeMaterialSupport } from '../gpu/NodePassSupport';

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

/** Backend-portable passthrough node used for supersample resolution reduction. */
class PassthroughMaterial extends NodeMaterial {
  readonly sourceNode;

  constructor(source: Texture) {
    super();
    this.blending = NoBlending;
    this.depthTest = false;
    this.depthWrite = false;
    this.fog = false;
    this.toneMapped = false;

    this.sourceNode = texture(source);
    this.vertexNode = vec4(positionGeometry.xy, 0, 1);
    this.fragmentNode = this.sourceNode;
  }

  setSource(source: Texture): void {
    this.sourceNode.value = source;
  }
}

const fsCam = new OrthographicCamera();

export function createDownscale(
  renderer: WebGLRenderer,
  source: Texture,
  targetResolution: number,
): DownscaleResult {
  ensureWebGLNodeMaterialSupport(renderer);

  const target = new WebGLRenderTarget(targetResolution, targetResolution, {
    type: HalfFloatType,
    minFilter: LinearFilter,
    magFilter: LinearFilter,
    generateMipmaps: false,
  });

  const mat = new PassthroughMaterial(source);
  const quad = new Mesh(new PlaneGeometry(2, 2), mat);

  const refresh = (): void => {
    const prevRT = renderer.getRenderTarget();
    try {
      renderer.setRenderTarget(target);
      renderer.render(quad, fsCam);
    } finally {
      renderer.setRenderTarget(prevRT);
    }
  };

  const setSource = (s: Texture): void => {
    mat.setSource(s);
  };

  // Initial blit so target has valid contents on return.
  try {
    refresh();
  } catch (error) {
    target.dispose();
    mat.dispose();
    quad.geometry.dispose();
    throw error;
  }

  return {
    texture: target.texture,
    refresh,
    setSource,
    dispose: () => {
      target.dispose();
      mat.dispose();
      quad.geometry.dispose();
    },
  };
}
