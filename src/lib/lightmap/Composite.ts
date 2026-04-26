import {
  FloatType,
  LinearFilter,
  LinearMipMapLinearFilter,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Texture,
  WebGLRenderer,
  WebGLRenderTarget,
} from 'three';
import { CompositeMaterial } from './CompositeMaterial';

export type CompositeResult = {
  /** Combined (direct*directIntensity + indirect*giIntensity)*ao — linear float RT texture. */
  texture: Texture;
  /** Re-render the composite, optionally overriding intensities / aoEnabled. */
  refresh: (
    uniforms?: Partial<{ directIntensity: number; giIntensity: number; aoEnabled: boolean }>,
  ) => void;
  dispose: () => void;
};

/**
 * Allocate a composite RT and render direct*directIntensity + indirect*giIntensity
 * multiplied by AO into it. Call `refresh()` each frame (or on slider change) to keep it current.
 *
 * Ownership: all GPU resources are inside the returned CompositeResult; caller
 * disposes via CompositeResult.dispose(). Pattern matches PostProcess.ts.
 */
export const runComposite = (
  renderer: WebGLRenderer,
  lightmapTextures: { direct: Texture; indirect: Texture; ao: Texture },
  resolution: number,
  opts: { directIntensity: number; giIntensity: number; aoEnabled: boolean },
): CompositeResult => {
  const rt = new WebGLRenderTarget(resolution, resolution, {
    type: FloatType,
    minFilter: LinearMipMapLinearFilter,
    magFilter: LinearFilter,
    generateMipmaps: true,
  });

  const mat = new CompositeMaterial({
    directTex: lightmapTextures.direct,
    indirectTex: lightmapTextures.indirect,
    aoTex: lightmapTextures.ao,
    directIntensity: opts.directIntensity,
    giIntensity: opts.giIntensity,
    aoEnabled: opts.aoEnabled,
  });

  const quad = new Mesh(new PlaneGeometry(2, 2), mat);
  const cam = new OrthographicCamera();

  // SAFETY: uniforms are constructed in CompositeMaterial; presence is invariant.
  const u = mat.uniforms;

  const refresh = (
    overrides?: Partial<{ directIntensity: number; giIntensity: number; aoEnabled: boolean }>,
  ): void => {
    if (overrides?.directIntensity !== undefined && u.directIntensity)
      u.directIntensity.value = overrides.directIntensity;
    if (overrides?.giIntensity !== undefined && u.giIntensity)
      u.giIntensity.value = overrides.giIntensity;
    if (overrides?.aoEnabled !== undefined && u.aoEnabled) u.aoEnabled.value = overrides.aoEnabled;

    const prev = renderer.getRenderTarget();
    const autoClear = renderer.autoClear;

    try {
      renderer.autoClear = true; // Composite is a single-pass full-screen quad, so autoClear=true is fine/expected.
      renderer.setRenderTarget(rt);
      renderer.render(quad, cam);
    } finally {
      renderer.setRenderTarget(prev);
      renderer.autoClear = autoClear;
    }
  };

  // Initial render
  refresh();

  return {
    texture: rt.texture,
    refresh,
    dispose: () => {
      rt.dispose();
      mat.dispose();
      quad.geometry.dispose();
    },
  };
};
