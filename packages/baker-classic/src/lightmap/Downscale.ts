/**
 * Lightmap downscale pass (Task 10 — supersample workflow).
 *
 * Bake at `internalResolution = targetResolution * superSample`, then run this
 * pass once per group to produce the target-resolution texture bound to
 * `mesh.lightMap`. Hardware bilinear (source's LinearFilter) handles the
 * anti-aliasing during the sample — no custom filter math needed.
 *
 * Target RT is HalfFloatType to match the composite delivery format and avoid
 * the OES_texture_float_linear fallback path on iGPUs (see D-015).
 */

import {
  GLSL3,
  HalfFloatType,
  LinearFilter,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  ShaderMaterial,
  Texture,
  WebGLRenderer,
  WebGLRenderTarget,
} from 'three';

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

class PassthroughMaterial extends ShaderMaterial {
  constructor(source: Texture) {
    super({
      glslVersion: GLSL3,
      uniforms: { tSource: { value: source } },
      vertexShader: `
        out vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        in vec2 vUv;
        uniform sampler2D tSource;
        out vec4 fragColor;
        void main() {
          fragColor = texture(tSource, vUv);
        }
      `,
    });
  }

  // Shared program cache key — passthrough GLSL is invariant across instances.
  override customProgramCacheKey(): string {
    return 'DownscaleMaterial|glsl3|single-out';
  }
}

const fsCam = new OrthographicCamera();

export function createDownscale(
  renderer: WebGLRenderer,
  source: Texture,
  targetResolution: number,
): DownscaleResult {
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
    const u = mat.uniforms.tSource;
    if (!u) throw new Error('[baker] DownscaleMaterial missing tSource uniform');
    u.value = s;
  };

  // Initial blit so target has valid contents on return.
  refresh();

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
