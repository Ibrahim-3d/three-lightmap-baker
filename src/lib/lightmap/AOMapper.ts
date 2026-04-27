import {
  Color,
  FloatType,
  LinearFilter,
  Matrix4,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Texture,
  WebGLRenderTarget,
  WebGLRenderer,
} from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import { AOMaterial } from './AOMaterial';

export type AORaycastOptions = {
  resolution: number;
  /** Hemisphere ray count per frame for AO. Independent of bounce-pass `casts`. */
  aoSamples: number;
  /** AO max distance (also the falloff divisor used at composite time). World units. */
  ambientDistance: number;
  /** Stop accumulating once this many frames have rendered. 0 = unlimited. */
  targetSamples: number;
};

export type AOMapperRender = { samples: number; done: boolean };

export type AOMapper = {
  /** Single-channel float RT; stored value is normalized visibility `t` in [0,1]. */
  texture: Texture;
  render: () => AOMapperRender;
  reset: () => void;
  dispose: () => void;
};

/**
 * Standalone AO bake pass. Owns its own RT, material, fullscreen quad, and
 * accumulator. Mirror of `generateLightmapper` for the AO channel only.
 *
 * Caller orchestrates `render()` each frame alongside the bounce mapper's
 * render(). When AO sliders change, dispose this and create a fresh one with
 * new opts — the bounce mapper stays alive untouched.
 */
export const generateAOMapper = (
  renderer: WebGLRenderer,
  positions: Texture,
  normals: Texture,
  bvh: MeshBVH,
  options: AORaycastOptions,
): AOMapper => {
  const material = new AOMaterial({
    bvh,
    invModelMatrix: new Matrix4().identity(),
    positions,
    normals,
    aoSamples: options.aoSamples,
    ambientDistance: options.ambientDistance,
    opacity: 1,
    sampleIndex: 0,
  });

  const renderTarget = new WebGLRenderTarget(options.resolution, options.resolution, {
    type: FloatType,
    minFilter: LinearFilter,
    magFilter: LinearFilter,
    generateMipmaps: false,
  });

  // Save renderer state so the initial RT clear doesn't permanently mutate it.
  const prevRT = renderer.getRenderTarget();
  const prevClearColor = new Color();
  renderer.getClearColor(prevClearColor);
  const prevClearAlpha = renderer.getClearAlpha();

  renderer.setRenderTarget(renderTarget);
  renderer.setClearColor(0x000000, 0);
  renderer.clear();
  renderer.setRenderTarget(prevRT);
  renderer.setClearColor(prevClearColor, prevClearAlpha);

  const quad = new Mesh(new PlaneGeometry(2, 2), material);
  const cam = new OrthographicCamera();

  let totalSamples = 0;
  const target = options.targetSamples | 0;

  const sampleIndexU = material.uniforms.sampleIndex;
  const opacityU = material.uniforms.opacity;
  if (!sampleIndexU || !opacityU) throw new Error('[baker] AOMaterial missing required uniforms');

  const render = (): AOMapperRender => {
    if (target > 0 && totalSamples >= target) return { samples: totalSamples, done: true };

    const autoClear = renderer.autoClear;
    const rtBefore = renderer.getRenderTarget();
    try {
      renderer.autoClear = false;
      renderer.setRenderTarget(renderTarget);
      sampleIndexU.value = totalSamples;
      opacityU.value = 1 / (totalSamples + 1);
      renderer.render(quad, cam);
    } finally {
      renderer.setRenderTarget(rtBefore);
      renderer.autoClear = autoClear;
    }

    totalSamples++;
    return { samples: totalSamples, done: target > 0 && totalSamples >= target };
  };

  const reset = (): void => {
    totalSamples = 0;
  };

  const dispose = (): void => {
    renderTarget.dispose();
    material.dispose();
    quad.geometry.dispose();
  };

  return {
    texture: renderTarget.texture,
    render,
    reset,
    dispose,
  };
};
