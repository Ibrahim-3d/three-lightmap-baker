import { GLSL3, ShaderMaterial, Texture } from 'three';

export type CompositeMaterialOptions = {
  directTex: Texture;
  indirectTex: Texture;
  aoTex: Texture;
  directIntensity: number;
  giIntensity: number;
  aoEnabled: boolean;
};

/**
 * Full-screen GLSL3 quad shader that sums Direct*directIntensity + Indirect*giIntensity, multiplied by AO.
 * Writes to an internal float RT — NO tonemapping, stays linear.
 * Phase A.3: giIntensity and directIntensity are applied here at view time.
 */
export class CompositeMaterial extends ShaderMaterial {
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

                in vec2 vUv;
                out vec4 outColor;

                void main() {
                    vec3 d = texture(directTex,   vUv).rgb * directIntensity;
                    vec3 i = texture(indirectTex, vUv).rgb * giIntensity;
                    vec3 a = aoEnabled ? texture(aoTex, vUv).rgb : vec3(1.0);
                    
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
