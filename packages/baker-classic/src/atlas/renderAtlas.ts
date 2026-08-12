import {
  Color,
  DataTexture,
  DoubleSide,
  FloatType,
  GLSL3,
  HalfFloatType,
  Mesh,
  Matrix3,
  NearestFilter,
  NoBlending,
  OrthographicCamera,
  RGBAFormat,
  Scene,
  ShaderMaterial,
  Texture,
  Uniform,
  UnsignedByteType,
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
  /** Compact linear source diffuse reflectance: material.color multiplied by material.map once. */
  surfaceAlbedoTexture: Texture;
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
    uniform float meshId;
    in vec4 vPosition;
    out vec4 fragColor;
    void main() {
        // Alpha 0 is atlas background. Positive integer alpha stores the
        // one-based group-local mesh ID for probe surface-albedo lookup.
        fragColor = vec4(vPosition.xyz, meshId);
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
    meshId: new Uniform(1),
  },
});

const normalVertexShader = /* glsl */ `
    in vec2 uv2;
    uniform vec2 offset;
    out vec4 vNormal;
    void main() {
        // Use world-space normal matrix (inverse-transpose of modelMatrix) 
        // to correctly handle non-uniform scaling.
        mat3 worldNormalMatrix = transpose(inverse(mat3(modelMatrix)));
        vec3 worldNormal = normalize(worldNormalMatrix * normal);
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

const whiteMap = new DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1, RGBAFormat);
whiteMap.needsUpdate = true;
const whiteColor = new Color(1, 1, 1);

const surfaceAlbedoMaterial = new ShaderMaterial({
  glslVersion: GLSL3,
  vertexShader: /* glsl */ `
    in vec2 uv2;
    in vec2 uv1;
    uniform vec2 offset;
    uniform float baseColorUvChannel;
    uniform mat3 baseColorMapTransform;
    out vec2 vBaseColorUv;
    void main() {
      vec2 sourceUv = baseColorUvChannel > 0.5 ? uv1 : uv;
      vBaseColorUv = (baseColorMapTransform * vec3(sourceUv, 1.0)).xy;
      gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform vec3 baseColor;
    uniform sampler2D baseColorMap;
    in vec2 vBaseColorUv;
    out vec4 fragColor;
    void main() {
      fragColor = vec4(baseColor * texture(baseColorMap, vBaseColorUv).rgb, 1.0);
    }
  `,
  side: DoubleSide,
  fog: false,
  uniforms: {
    offset: new Uniform(new Vector2(0, 0)),
    baseColor: new Uniform(new Color(1, 1, 1)),
    baseColorMap: new Uniform(whiteMap),
    baseColorUvChannel: new Uniform(0),
    baseColorMapTransform: new Uniform(new Matrix3()),
  },
});

const scene = new Scene();
const atlasCamera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

// The raw composite is sampled directly by the viewport while refinement is
// optional. Keep a two-pixel G-buffer halo so bilinear sampling at UV chart
// borders does not reach the cleared atlas background.
const dilationOffsets = [
  { x: -2, y: -2 },
  { x: -1, y: -2 },
  { x: 0, y: -2 },
  { x: 1, y: -2 },
  { x: 2, y: -2 },
  { x: -2, y: -1 },
  { x: -1, y: -1 },
  { x: 0, y: -1 },
  { x: 1, y: -1 },
  { x: 2, y: -1 },
  { x: -2, y: 0 },
  { x: -1, y: 0 },
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: -2, y: 1 },
  { x: -1, y: 1 },
  { x: 0, y: 1 },
  { x: 1, y: 1 },
  { x: 2, y: 1 },
  { x: -2, y: 2 },
  { x: -1, y: 2 },
  { x: 0, y: 2 },
  { x: 1, y: 2 },
  { x: 2, y: 2 },

  { x: 0, y: 0 },
];

function makeAtlasMesh(mesh: Mesh, meshIndex: number): Mesh {
  const clone = new Mesh(mesh.geometry, mesh.material);
  clone.matrixAutoUpdate = false;
  clone.matrixWorldAutoUpdate = false;
  clone.matrix.copy(mesh.matrixWorld);
  clone.matrixWorld.copy(mesh.matrixWorld);
  clone.normalMatrix.getNormalMatrix(mesh.matrixWorld);
  clone.frustumCulled = false;
  clone.onBeforeRender = (_renderer, _scene, _camera, _geometry, _material, group): void => {
    const materialIndex =
      (group as unknown as { materialIndex?: number } | null)?.materialIndex ?? 0;
    const meshId = worldPositionMaterial.uniforms.meshId;
    if (meshId) meshId.value = meshIndex + 1;
    const candidate = Array.isArray(mesh.material)
      ? (mesh.material[materialIndex] ?? mesh.material[0])
      : mesh.material;
    const surface = candidate as { color?: Color; map?: Texture | null } | undefined;
    const baseColor = surfaceAlbedoMaterial.uniforms.baseColor;
    const baseColorMap = surfaceAlbedoMaterial.uniforms.baseColorMap;
    const baseColorUvChannel = surfaceAlbedoMaterial.uniforms.baseColorUvChannel;
    const baseColorMapTransform = surfaceAlbedoMaterial.uniforms.baseColorMapTransform;
    if (!baseColor || !baseColorMap || !baseColorUvChannel || !baseColorMapTransform) {
      throw new Error('[baker] surface-albedo material uniforms are incomplete');
    }
    baseColor.value.copy(surface?.color ?? whiteColor);
    const requestedMap = surface?.map ?? null;
    const mapChannel = requestedMap?.channel === 1 ? 1 : 0;
    const sourceUvName = mapChannel === 1 ? 'uv1' : 'uv';
    const map = requestedMap && mesh.geometry.hasAttribute(sourceUvName) ? requestedMap : whiteMap;
    if (map.matrixAutoUpdate) map.updateMatrix();
    baseColorMap.value = map;
    baseColorUvChannel.value = mapChannel;
    baseColorMapTransform.value.copy(map.matrix);
  };
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
  // Legacy RGB probes need source albedo, but it is bounded reflectance data.
  // RGBA8 keeps that compatibility buffer at one quarter of RGBA32F's cost.
  const surfaceAlbedoRT = new WebGLRenderTarget(resolution, resolution, {
    ...rtOptions,
    type: UnsignedByteType,
  });
  surfaceAlbedoRT.texture.name = 'Baker compact surface albedo';

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
      renderer.setRenderTarget(surfaceAlbedoRT);
      renderer.clear();
    }

    scene.clear();
    for (let index = 0; index < meshes.length; index++) {
      const mesh = meshes[index];
      if (mesh) scene.add(makeAtlasMesh(mesh, index));
    }

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
    draw(surfaceAlbedoMaterial, surfaceAlbedoRT);
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
    surfaceAlbedoTexture: surfaceAlbedoRT.texture,
    dispose: () => {
      posRT.dispose();
      normRT.dispose();
      surfaceAlbedoRT.dispose();
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
  surfaceAlbedoRT: WebGLRenderTarget,
  offset: Vector2,
): void {
  const prevRT = renderer.getRenderTarget();
  const prevAutoClear = renderer.autoClear;

  try {
    renderer.autoClear = false;

    scene.clear();
    scene.add(makeAtlasMesh(mesh, 0));

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
    draw(surfaceAlbedoMaterial, surfaceAlbedoRT);
  } finally {
    renderer.setRenderTarget(prevRT);
    renderer.autoClear = prevAutoClear;
    scene.overrideMaterial = null;
    scene.clear();
  }
}
