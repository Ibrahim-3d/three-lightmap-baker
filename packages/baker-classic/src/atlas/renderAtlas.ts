import {
  Color,
  DoubleSide,
  FloatType,
  GLSL3,
  Mesh,
  NearestFilter,
  Object3D,
  OrthographicCamera,
  ShaderMaterial,
  Uniform,
  Vector2,
  WebGLRenderer,
  WebGLRenderTarget,
  Texture,
} from 'three';

/*
 * Atlas G-buffer shaders — GLSL3.
 *
 * Vertex shader rasterizes geometry in UV2 space (gl_Position = uv2*2 - 1).
 * Fragment shader writes either the world-space position (with a=1 chart-mask)
 * or the world-space normal into a FloatType RT — these textures form the
 * lookup table the bake fragment shader reads to seed each ray.
 */

const worldPositionVertexShader = /* glsl */ `
    uniform vec2 offset;
    in vec2 uv2;
    out vec4 vWorldPosition;

    void main() {
        vWorldPosition = modelMatrix * vec4(position, 1.0);
        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
`;

const worldPositionFragmentShader = /* glsl */ `
    in vec4 vWorldPosition;
    out vec4 fragColor;

    void main() {
        fragColor = vWorldPosition;
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
    out vec4 vNormal;
    in vec2 uv2;
    uniform vec2 offset;

    void main() {
        // Inverse-transpose of the upper-left 3x3 of the model matrix preserves
        // normal direction under non-uniform scale. mat3(modelMatrix) alone
        // skews normals on stretched axes — visible as wrong shading falloff
        // on imported GLB content. inverse()/transpose() are GLSL3 built-ins.
        mat3 worldNormalMatrix = transpose(inverse(mat3(modelMatrix)));
        vec3 worldNormal = worldNormalMatrix * normal;
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
        // Guard against zero-length normals (degenerate geometry) — produces (0,0,0,0)
        // so the bake shader can detect the miss instead of generating NaN.
        float len = length(vNormal.xyz);
        fragColor = len > 1e-6 ? vec4(vNormal.xyz / len, vNormal.w) : vec4(0.0);
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

const offsets = [
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

export type AtlasResult = {
  positionTexture: Texture;
  normalTexture: Texture;
  /** Releases the two RTs that back positionTexture/normalTexture. */
  dispose: () => void;
};

export const renderAtlas = (
  renderer: WebGLRenderer,
  meshs: Mesh[],
  resolution: number,
  dialate: boolean = true,
): AtlasResult => {
  // Save renderer state up-front; restore in `finally` so a throw mid-render does not
  // leave autoClear / clearColor / renderTarget in a corrupted state for the caller.
  const prevAutoClear = renderer.autoClear;
  const prevRT = renderer.getRenderTarget();
  const prevClearColor = new Color();
  renderer.getClearColor(prevClearColor);
  const prevClearAlpha = renderer.getClearAlpha();

  const rts: WebGLRenderTarget[] = [];

  const renderWithShader = (material: ShaderMaterial): Texture => {
    const target = new WebGLRenderTarget(resolution, resolution, {
      type: FloatType,
      magFilter: NearestFilter,
      minFilter: NearestFilter,
    });
    rts.push(target);

    // Camera is local — no GPU resources, no dispose needed.
    const orthographicCamera = new OrthographicCamera(-100, 100, -100, 100, -100, 200);
    orthographicCamera.updateMatrix();

    const lightMapMeshes = new Object3D();
    lightMapMeshes.matrixWorldAutoUpdate = false;

    for (const mesh of meshs) {
      const lightMapMesh = mesh.clone();
      lightMapMesh.material = material;
      lightMapMeshes.add(lightMapMesh);
    }

    renderer.autoClear = false;
    renderer.setRenderTarget(target);
    renderer.setClearColor(0x000000, 0);
    renderer.clear();

    // SAFETY: `offset` uniform is created on the materials at construction.
    const offsetU = material.uniforms.offset as { value: { x: number; y: number } } | undefined;
    if (!offsetU) throw new Error('[baker] atlas material missing `offset` uniform');

    if (dialate) {
      for (const offset of offsets) {
        offsetU.value.x = offset.x * (1 / resolution);
        offsetU.value.y = offset.y * (1 / resolution);
        renderer.render(lightMapMeshes, orthographicCamera);
      }
    }

    offsetU.value.x = 0;
    offsetU.value.y = 0;
    renderer.render(lightMapMeshes, orthographicCamera);

    return target.texture;
  };

  try {
    const positionTexture = renderWithShader(worldPositionMaterial);
    const normalTexture = renderWithShader(normalMaterial);

    return {
      positionTexture,
      normalTexture,
      dispose: () => {
        for (const rt of rts) rt.dispose();
        rts.length = 0;
      },
    };
  } finally {
    renderer.setRenderTarget(prevRT);
    renderer.autoClear = prevAutoClear;
    renderer.setClearColor(prevClearColor, prevClearAlpha);
  }
};
