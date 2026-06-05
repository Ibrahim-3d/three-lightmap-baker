import {
  HalfFloatType,
  LinearFilter,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Texture,
  WebGLRenderer,
  WebGLRenderTarget,
} from 'three';
import { CompositeMaterial } from './CompositeMaterial';

export type CompositeOverrides = Partial<{
  directIntensity: number;
  giIntensity: number;
  aoEnabled: boolean;
  aoIntensity: number;
  aoExponent: number;
  /** Swap the AO source texture (e.g. after an AO-only re-bake). */
  aoTex: Texture;
}>;

export type CompositeResult = {
  /** Combined (direct*directIntensity + indirect*giIntensity)*remappedAO - linear float RT texture. */
  texture: Texture;
  /** Re-render the composite, optionally overriding any uniform / swapping aoTex. */
  refresh: (overrides?: CompositeOverrides) => void;
  dispose: () => void;
};

/**
 * Allocate a composite RT and render
 *   (direct*directIntensity + indirect*giIntensity) * remappedAO
 * into it. AO comes from a separate texture (AOMapper output) so the AO pass
 * can re-bake independently of the bounce pass.
 *
 * Call `refresh()` each frame (or on slider change) to keep it current.
 * Pass `{ aoTex: newTex }` to swap the AO source after an AO-only re-bake.
 *
 * Ownership: all GPU resources are inside the returned CompositeResult; caller
 * disposes via CompositeResult.dispose(). Pattern matches PostProcess.ts.
 */
export const runComposite = (
  renderer: WebGLRenderer,
  lightmapTextures: { direct: Texture; indirect: Texture; ao: Texture },
  resolution: number,
  opts: {
    directIntensity: number;
    giIntensity: number;
    aoEnabled: boolean;
    aoIntensity: number;
    aoExponent: number;
  },
): CompositeResult => {
  // HalfFloat (not Float) - composite RT is sampled by MeshStandardMaterial as
  // mat.lightMap during normal scene render. FloatType requires
  // OES_texture_float_linear which is absent on many iGPUs → fallback path
  // triggers driver TDR / context loss on first post-bake frame.
  // HalfFloat + LinearFilter is universally supported in WebGL2 and holds
  // ~65k dynamic range - plenty for HDR composite output.
  // No mipmaps: composite refresh runs per-RAF during bake; chain regen on
  // 1024² is wasted GPU.
  const rt = new WebGLRenderTarget(resolution, resolution, {
    type: HalfFloatType,
    minFilter: LinearFilter,
    magFilter: LinearFilter,
    generateMipmaps: false,
  });

  const mat = new CompositeMaterial({
    directTex: lightmapTextures.direct,
    indirectTex: lightmapTextures.indirect,
    aoTex: lightmapTextures.ao,
    directIntensity: opts.directIntensity,
    giIntensity: opts.giIntensity,
    aoEnabled: opts.aoEnabled,
    aoIntensity: opts.aoIntensity,
    aoExponent: opts.aoExponent,
  });

  const quad = new Mesh(new PlaneGeometry(2, 2), mat);
  const cam = new OrthographicCamera();

  // SAFETY: uniforms are constructed in CompositeMaterial; presence is invariant.
  const u = mat.uniforms;

  const refresh = (overrides?: CompositeOverrides): void => {
    if (overrides?.directIntensity !== undefined && u.directIntensity)
      u.directIntensity.value = overrides.directIntensity;
    if (overrides?.giIntensity !== undefined && u.giIntensity)
      u.giIntensity.value = overrides.giIntensity;
    if (overrides?.aoEnabled !== undefined && u.aoEnabled) u.aoEnabled.value = overrides.aoEnabled;
    if (overrides?.aoIntensity !== undefined && u.aoIntensity)
      u.aoIntensity.value = overrides.aoIntensity;
    if (overrides?.aoExponent !== undefined && u.aoExponent)
      u.aoExponent.value = overrides.aoExponent;
    if (overrides?.aoTex !== undefined && u.aoTex) u.aoTex.value = overrides.aoTex;

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
