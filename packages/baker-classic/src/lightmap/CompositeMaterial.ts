import { GLSL3, ShaderMaterial, Texture } from 'three';

export type CompositeMaterialOptions = {
  directTex: Texture;
  indirectTex: Texture;
  /** AO texture from AOMapper. Stores raw normalized visibility t ∈ [0,1]. */
  aoTex: Texture;
  directIntensity: number;
  giIntensity: number;
  aoEnabled: boolean;
  /** Darkness multiplier on AO. 1.0 = physical (default). Range 0..3. */
  aoIntensity: number;
  /**
   * Falloff curve exponent applied to stored visibility t.
   * 1.0 = linear. Higher = sharper contact darkening. Range 0.5..4.0.
   */
  aoExponent: number;
};

/**
 * Full-screen GLSL3 quad shader that sums Direct*directIntensity + Indirect*giIntensity, multiplied by AO.
 * Writes to an internal float RT - NO tonemapping, stays linear.
 * Phase A.3: giIntensity and directIntensity are applied here at view time.
 */
export class CompositeMaterial extends ShaderMaterial {
  // All inputs are uniforms; GLSL source is identical across instances. Renderer owns WebGLProgram.
  override customProgramCacheKey(): string {
    return 'CompositeMaterial|glsl3|single-out';
  }

  constructor(opts: CompositeMaterialOptions) {
    super({
      glslVersion: GLSL3,
      transparent: false,
      depthWrite: false,
      depthTest: false,

      uniforms: {
        directTex: { value: opts.directTex },
        indirectTex: { value: opts.indirectTex },
        aoTex: { value: opts.aoTex },
        directIntensity: { value: opts.directIntensity },
        giIntensity: { value: opts.giIntensity },
        aoEnabled: { value: opts.aoEnabled },
        aoIntensity: { value: opts.aoIntensity },
        aoExponent: { value: opts.aoExponent },
      },

      vertexShader: /* glsl */ `
                out vec2 vUv;
                void main() {
                    gl_Position = vec4(position, 1.0);
                    vUv = uv;
                }
            `,

      fragmentShader: /* glsl */ `
                precision highp float;
                precision highp sampler2D;

                uniform sampler2D directTex;
                uniform sampler2D indirectTex;
                uniform sampler2D aoTex;
                uniform float directIntensity;
                uniform float giIntensity;
                uniform bool  aoEnabled;
                uniform float aoIntensity;
                uniform float aoExponent;

                in vec2 vUv;
                out vec4 outColor;

                void main() {
                    vec3 d = texture(directTex,   vUv).rgb * directIntensity;
                    vec3 i = texture(indirectTex, vUv).rgb * giIntensity;

                    // AO remap (view-time): aoTex stores raw normalized visibility
                    // t ∈ [0,1]. Apply exponent + intensity here so tweaking those
                    // sliders does not require re-baking AO.
                    // At intensity=1, exponent=1 the formula collapses to identity.
                    vec3 a = vec3(1.0);
                    if (aoEnabled) {
                        vec3 t = clamp(texture(aoTex, vUv).rgb, vec3(0.0), vec3(1.0));
                        vec3 occ = vec3(1.0) - pow(t, vec3(aoExponent));
                        a = vec3(1.0) - clamp(occ * aoIntensity, vec3(0.0), vec3(1.0));
                    }

                    vec3 lit = (d + i) * a;

                    // Subtle contrast boost / gamma correction
                    // This prevents the "washed out" look of pure linear float textures.
                    // Guard against negative inputs that would make pow() return NaN.
                    lit = pow(max(lit, vec3(0.0)), vec3(1.0 / 1.1));

                    outColor = vec4(lit, 1.0);
                }
            `,
    });
  }
}
