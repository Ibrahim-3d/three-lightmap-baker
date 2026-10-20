/**
 * Hue / Saturation post-pass. RGB → HSV → shift hue (radians) + scale
 * saturation → HSV → RGB. Cheap full-screen shader. Used to match ESL's
 * postprocessing.HueSaturationEffect.
 */
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

const HueSatShader = {
  uniforms: {
    tDiffuse: { value: null },
    hue: { value: 0 },
    saturation: { value: 0 },
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
    uniform float hue;
    uniform float saturation;
    varying vec2 vUv;

    vec3 rgb2hsv(vec3 c) {
      vec4 K = vec4(0.0, -1.0/3.0, 2.0/3.0, -1.0);
      vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
      vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
    }
    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    void main() {
      vec4 src = texture2D(tDiffuse, vUv);
      vec3 hsv = rgb2hsv(src.rgb);
      hsv.x = fract(hsv.x + hue * 0.5);
      hsv.y = clamp(hsv.y * (1.0 + saturation), 0.0, 1.0);
      gl_FragColor = vec4(hsv2rgb(hsv), src.a);
    }
  `,
};

export function makeHueSatPass(): ShaderPass {
  return new ShaderPass(HueSatShader);
}
