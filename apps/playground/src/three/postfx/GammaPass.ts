/**
 * Gamma adjust post-pass. Applies pow(rgb, 1/gamma). Used after tonemap so
 * artists can crush blacks / lift midtones independent of the tonemap curve.
 */
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

const GammaShader = {
  uniforms: {
    tDiffuse: { value: null },
    gamma: { value: 1.0 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float gamma;
    varying vec2 vUv;
    void main() {
      vec4 src = texture2D(tDiffuse, vUv);
      gl_FragColor = vec4(pow(max(src.rgb, vec3(0.0)), vec3(1.0 / max(gamma, 0.001))), src.a);
    }
  `,
};

export function makeGammaPass(): ShaderPass {
  return new ShaderPass(GammaShader);
}
