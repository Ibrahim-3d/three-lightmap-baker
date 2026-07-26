import {
  FloatType,
  GLSL3,
  Mesh,
  NearestFilter,
  NoBlending,
  OrthographicCamera,
  PlaneGeometry,
  ShaderMaterial,
  type Texture,
  type WebGLRenderer,
  WebGLRenderTarget,
} from 'three';

const vertexShader = /* glsl */ `
  out vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform sampler2D sourceTexture;
  in vec2 vUv;
  out vec4 fragColor;
  void main() {
    fragColor = texture(sourceTexture, vUv);
  }
`;

/** Materialize an arbitrary float texture into a readable render target. */
export function readFloatTexture(
  renderer: WebGLRenderer,
  source: Texture,
  resolution: number,
): Float32Array {
  if (!Number.isInteger(resolution) || resolution < 1) {
    throw new Error('[baker:probes] texture readback resolution must be a positive integer');
  }

  const target = new WebGLRenderTarget(resolution, resolution, {
    type: FloatType,
    minFilter: NearestFilter,
    magFilter: NearestFilter,
    depthBuffer: false,
    stencilBuffer: false,
    generateMipmaps: false,
  });
  const material = new ShaderMaterial({
    glslVersion: GLSL3,
    vertexShader,
    fragmentShader,
    uniforms: { sourceTexture: { value: source } },
    blending: NoBlending,
    depthTest: false,
    depthWrite: false,
    transparent: false,
  });
  const geometry = new PlaneGeometry(2, 2);
  const quad = new Mesh(geometry, material);
  const camera = new OrthographicCamera();
  const pixels = new Float32Array(resolution * resolution * 4);
  const previousTarget = renderer.getRenderTarget();
  const previousAutoClear = renderer.autoClear;

  try {
    renderer.autoClear = true;
    renderer.setRenderTarget(target);
    renderer.render(quad, camera);
    renderer.readRenderTargetPixels(target, 0, 0, resolution, resolution, pixels);
  } finally {
    renderer.setRenderTarget(previousTarget);
    renderer.autoClear = previousAutoClear;
    target.dispose();
    material.dispose();
    geometry.dispose();
  }

  return pixels;
}
