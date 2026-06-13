import {
  Color,
  DoubleSide,
  FloatType,
  GLSL3,
  HalfFloatType,
  Mesh,
  NearestFilter,
  NoBlending,
  OrthographicCamera,
  RGBAFormat,
  Scene,
  ShaderMaterial,
  Texture,
  Uniform,
  Vector2,
  WebGLRenderer,
  WebGLRenderTarget,
} from 'three';

/**
 * Render world-space G-buffer atlases for a partition group.
 *
 * Each mesh in the group is drawn into the `position` and `normal` atlases
 * using its Lightmap UV (uv2).
 */
export type AtlasRenderResult = {
  positionTexture: Texture;
  normalTexture: Texture;
  dispose: () => void;
};

const worldPositionVertexShader = /* glsl */ `
    in vec2 uv2;
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
    in vec2 uv2;
    uniform vec2 offset;
    out vec4 vNormal;
    void main() {
        // worldNormal calculated manually to avoid requiring normalMatrix updates
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
const atlasCamera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

const dilationOffsets = [
  { x: -2, y: -2 },
  { x: 2, y: -2 },
  { x: -2, y: 2 },
  { x: 2, y: 2 },

  { x: -1, y: -2 },
  { x: 1, y: -2 },
  { x: -2, y: -1 },
  { x: 2, y: -1 },
  { x: -2, y: 1 },
  { x: 2, y: 1 },
  { x: -1, y: 2 },
  { x: 1, y: 2 },

  { x: -2, y: 0 },
  { x: 2, y: 0 },
  { x: 0, y: -2 },
  { x: 0, y: 2 },

  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: -1, y: 0 },
  { x: 1, y: 0 },
  { x: -1, y: 1 },
  { x: 1, y: 1 },
  { x: 0, y: -1 },
  { x: 0, y: 1 },

  { x: 0, y: 0 },
];

function makeAtlasMesh(mesh: Mesh): Mesh {
  const clone = new Mesh(mesh.geometry, mesh.material);
  clone.matrixAutoUpdate = false;
  clone.matrixWorldAutoUpdate = false;
  clone.matrix.copy(mesh.matrixWorld);
  clone.matrixWorld.copy(mesh.matrixWorld);
  clone.frustumCulled = false;
  return clone;
}

function setAtlasOffset(material: ShaderMaterial, x: number, y: number): void {
  const offset = material.uniforms.offset?.value as Vector2 | undefined;
  if (!offset) throw new Error('[baker] atlas material missing offset uniform');
  offset.set(x, y);
}

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
    type: renderer.capabilities.isWebGL2 ? FloatType : HalfFloatType,
    minFilter: NearestFilter,
    magFilter: NearestFilter,
    generateMipmaps: false,
    depthBuffer: false,
    stencilBuffer: false,
    blending: NoBlending,
  };

  const posRT = new WebGLRenderTarget(resolution, resolution, rtOptions);
  const normRT = new WebGLRenderTarget(resolution, resolution, rtOptions);

  const prevRT = renderer.getRenderTarget();
  const prevAutoClear = renderer.autoClear;
  const prevClearColor = new Color();
  renderer.getClearColor(prevClearColor);
  const prevClearAlpha = renderer.getClearAlpha();

  try {
    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 0);

    if (clear) {
      renderer.setRenderTarget(posRT);
      renderer.clear();
      renderer.setRenderTarget(normRT);
      renderer.clear();
    }

    scene.clear();
    for (const m of meshes) scene.add(makeAtlasMesh(m));

    const draw = (material: ShaderMaterial, target: WebGLRenderTarget): void => {
      scene.overrideMaterial = material;
      renderer.setRenderTarget(target);
      for (const offset of dilationOffsets) {
        setAtlasOffset(material, offset.x / resolution, offset.y / resolution);
        renderer.render(scene, atlasCamera);
      }
      setAtlasOffset(material, 0, 0);
    };

    draw(worldPositionMaterial, posRT);
    draw(normalMaterial, normRT);
  } finally {
    renderer.setRenderTarget(prevRT);
    renderer.autoClear = prevAutoClear;
    renderer.setClearColor(prevClearColor, prevClearAlpha);
    scene.overrideMaterial = null;
    scene.clear();
  }

  return {
    positionTexture: posRT.texture,
    normalTexture: normRT.texture,
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

  try {
    renderer.autoClear = false;

    scene.clear();
    scene.add(makeAtlasMesh(mesh));

    const draw = (material: ShaderMaterial, target: WebGLRenderTarget): void => {
      scene.overrideMaterial = material;
      renderer.setRenderTarget(target);
      for (const halo of dilationOffsets) {
        setAtlasOffset(material, offset.x + halo.x / posRT.width, offset.y + halo.y / posRT.height);
        renderer.render(scene, atlasCamera);
      }
      setAtlasOffset(material, 0, 0);
    };

    draw(worldPositionMaterial, posRT);
    draw(normalMaterial, normRT);
  } finally {
    renderer.setRenderTarget(prevRT);
    renderer.autoClear = prevAutoClear;
    scene.overrideMaterial = null;
    scene.clear();
  }
}
