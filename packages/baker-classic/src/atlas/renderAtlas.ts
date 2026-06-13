import {
  DoubleSide,
  GLSL3,
  LinearFilter,
  Mesh,
  NoBlending,
  RGBAFormat,
  Scene,
  ShaderMaterial,
  Uniform,
  Vector2,
  WebGLRenderer,
  WebGLRenderTarget,
} from 'three';
import type { AtlasPartitionGroup } from '../utils/Partition';

/**
 * Render world-space G-buffer atlases for a partition group.
 *
 * Each mesh in the group is drawn into the `position` and `normal` atlases
 * using its Lightmap UV (uv2).
 */
export type AtlasRenderResult = {
  positionTexture: WebGLRenderTarget;
  normalTexture: WebGLRenderTarget;
  dispose: () => void;
};

const worldPositionVertexShader = /* glsl */ `
    uniform vec2 offset;
    out vec4 vPosition;
    void main() {
        vPosition = modelMatrix * vec4(position, 1.0);
        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
`;

const worldPositionFragmentShader = /* glsl */ `
    in vec4 vPosition;
    out vec4 fragColor;
    void main() {
        // Position w=1.0 marks "inside a chart". 0.0 background from clearColor.
        fragColor = vec4(vPosition.xyz, 1.0);
    }
`;

const worldPositionMaterial = new ShaderMaterial({
  glslVersion: GLSL3,
  vertexShader: worldPositionVertexShader,
  fragmentShader: worldPositionFragmentShader,
  side: DoubleSide,
  fog: false,
  uniforms: {
    offset: new Uniform(new Vector2(0, 0)),
  },
});

const normalVertexShader = /* glsl */ `
    uniform vec2 offset;
    out vec4 vNormal;
    void main() {
        // worldNormal calculated manually to avoid needing `normalMatrix` update
        // for every mesh in the atlas scene.
        vec3 worldNormal = normalize(mat3(modelMatrix) * normal);
        // Alpha = 0.0 to match the prior modelMatrix * vec4(normal, 0.0) output.
        // The fragment shader emits length-checked xyz and forwards w as the
        // chart-mask convention; keeping it 0 matches the previous wire format.
        vNormal = vec4(worldNormal, 0.0);
        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
`;

const normalFragmentShader = /* glsl */ `
    in vec4 vNormal;
    out vec4 fragColor;

    void main() {
        // Guard against zero-length normals (degenerate geometry) - produces (0,0,0,0)
        // so the bake shader can detect the miss instead of generating NaN.
        float len = length(vNormal.xyz);
        fragColor = len > 1.0e-6 ? vec4(vNormal.xyz / len, vNormal.w) : vec4(0.0);
    }
`;

const normalMaterial = new ShaderMaterial({
  glslVersion: GLSL3,
  vertexShader: normalVertexShader,
  fragmentShader: normalFragmentShader,
  side: DoubleSide,
  fog: false,
  uniforms: {
    offset: new Uniform(new Vector2(0, 0)),
  },
});

const scene = new Scene();

/**
 * Perform the atlas draw. Side effects: mutates `mesh.lightMap` and
 * `mesh.material.onBeforeCompile`.
 */
export function renderAtlas(
  renderer: WebGLRenderer,
  meshes: Mesh[],
  resolution: number,
  clear = true,
): AtlasRenderResult {
  const rtOptions = {
    format: RGBAFormat,
    type: renderer.capabilities.isWebGL2 ? 1016 : 1011, // FloatType or HalfFloatType
    minFilter: LinearFilter,
    magFilter: LinearFilter,
    generateMipmaps: false,
    depthBuffer: false,
    stencilBuffer: false,
    blending: NoBlending,
  };

  const posRT = new WebGLRenderTarget(resolution, resolution, rtOptions);
  const normRT = new WebGLRenderTarget(resolution, resolution, rtOptions);

  const prevRT = renderer.getRenderTarget();
  const prevAutoClear = renderer.autoClear;
  renderer.autoClear = false;

  if (clear) {
    renderer.setRenderTarget(posRT);
    renderer.clear();
    renderer.setRenderTarget(normRT);
    renderer.clear();
  }

  scene.clear();
  for (const m of meshes) {
    scene.add(m);
  }

  // Draw positions.
  scene.overrideMaterial = worldPositionMaterial;
  renderer.setRenderTarget(posRT);
  renderer.render(scene, renderer.getContext() ? (null as any) : (null as any));

  // Draw normals.
  scene.overrideMaterial = normalMaterial;
  renderer.setRenderTarget(normRT);
  renderer.render(scene, renderer.getContext() ? (null as any) : (null as any));

  renderer.setRenderTarget(prevRT);
  renderer.autoClear = prevAutoClear;
  scene.overrideMaterial = null;
  scene.clear();

  return {
    positionTexture: posRT,
    normalTexture: normRT,
    dispose: () => {
      posRT.dispose();
      normRT.dispose();
    },
  };
}

/**
 * Internal-only variant for density-mode packing: renders a single mesh's
 * chart into a sub-region of an existing atlas.
 */
export function renderMeshToAtlas(
  renderer: WebGLRenderer,
  mesh: Mesh,
  posRT: WebGLRenderTarget,
  normRT: WebGLRenderTarget,
  offset: Vector2,
): void {
  const prevRT = renderer.getRenderTarget();
  const prevAutoClear = renderer.autoClear;
  renderer.autoClear = false;

  scene.clear();
  scene.add(mesh);

  // Draw position.
  worldPositionMaterial.uniforms.offset.value.copy(offset);
  scene.overrideMaterial = worldPositionMaterial;
  renderer.setRenderTarget(posRT);
  renderer.render(scene, renderer.getContext() ? (null as any) : (null as any));

  // Draw normal.
  normalMaterial.uniforms.offset.value.copy(offset);
  scene.overrideMaterial = normalMaterial;
  renderer.setRenderTarget(normRT);
  renderer.render(scene, renderer.getContext() ? (null as any) : (null as any));

  renderer.setRenderTarget(prevRT);
  renderer.autoClear = prevAutoClear;
  scene.overrideMaterial = null;
  scene.clear();
}
