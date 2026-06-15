import { Vector3, BufferAttribute, ShaderMaterial, GLSL3, DoubleSide, Uniform, Vector2, Scene, OrthographicCamera, RGBAFormat, FloatType, HalfFloatType, NearestFilter, NoBlending, WebGLRenderTarget, Color, Mesh, PointLight, DirectionalLight, SpotLight, RectAreaLight, DataTexture, ClampToEdgeWrapping, Matrix4, WebGLMultipleRenderTargets, LinearFilter, PlaneGeometry, BufferGeometry, DataUtils, Vector4 } from "three";
import { UVUnwrapper } from "xatlas-three";
import { MeshBVHUniformStruct, shaderStructs, shaderIntersectFunction, MeshBVH } from "three-mesh-bvh";
const v0 = new Vector3();
const v1 = new Vector3();
const v2 = new Vector3();
const e1 = new Vector3();
const e2 = new Vector3();
const cr = new Vector3();
const DEFAULT_DENSITY_FILL_RATIO = 0.95;
function computeMeshSurfaceArea(mesh) {
  const g = mesh.geometry;
  const posAttr = g.attributes.position;
  if (!posAttr)
    return 0;
  const m = mesh.matrixWorld;
  let area = 0;
  const triArea = (ai, bi, ci) => {
    v0.fromBufferAttribute(posAttr, ai).applyMatrix4(m);
    v1.fromBufferAttribute(posAttr, bi).applyMatrix4(m);
    v2.fromBufferAttribute(posAttr, ci).applyMatrix4(m);
    e1.subVectors(v1, v0);
    e2.subVectors(v2, v0);
    cr.crossVectors(e1, e2);
    return cr.length() * 0.5;
  };
  if (g.index) {
    const idx = g.index.array;
    for (let i = 0; i < idx.length; i += 3) {
      area += triArea(idx[i], idx[i + 1], idx[i + 2]);
    }
  } else {
    for (let i = 0; i < posAttr.count; i += 3) {
      area += triArea(i, i + 1, i + 2);
    }
  }
  return area;
}
function resolveDensityTexelsPerMeter(meshes, opts) {
  var _a2, _b2, _c;
  if (!Number.isFinite(opts.densityMultiplier) || opts.densityMultiplier <= 0 || !Number.isFinite(opts.atlasResolution) || opts.atlasResolution <= 0) {
    return 0;
  }
  let weightedSurfaceArea = 0;
  for (const mesh of meshes) {
    const scale = (_b2 = (_a2 = opts.perMeshScale) == null ? void 0 : _a2[mesh.uuid]) != null ? _b2 : 1;
    weightedSurfaceArea += computeMeshSurfaceArea(mesh) * scale * scale;
  }
  if (!Number.isFinite(weightedSurfaceArea) || weightedSurfaceArea <= 0)
    return 0;
  const fillRatio = (_c = opts.fillRatio) != null ? _c : DEFAULT_DENSITY_FILL_RATIO;
  const atlasTexels = opts.atlasResolution * opts.atlasResolution;
  const baseline = Math.sqrt(atlasTexels * fillRatio / weightedSurfaceArea);
  return baseline * opts.densityMultiplier;
}
function binPackMeshes(meshes, opts) {
  var _a2;
  const fillRatio = (_a2 = opts.fillRatio) != null ? _a2 : DEFAULT_DENSITY_FILL_RATIO;
  const atlasTexels = opts.atlasResolution * opts.atlasResolution;
  const tpm2 = opts.texelsPerMeter * opts.texelsPerMeter;
  const items = meshes.map((mesh, inputIdx) => {
    var _a3, _b2;
    const surfaceArea = computeMeshSurfaceArea(mesh);
    const scale = (_b2 = (_a3 = opts.perMeshScale) == null ? void 0 : _a3[mesh.uuid]) != null ? _b2 : 1;
    const texelsNeeded = surfaceArea * tpm2 * scale * scale;
    const uvFraction = atlasTexels > 0 ? texelsNeeded / atlasTexels : 0;
    return { mesh, inputIdx, surfaceArea, uvFraction };
  });
  const sorted = [...items].sort((a, b) => b.uvFraction - a.uvFraction);
  const binFills = [];
  const out = new Array(meshes.length);
  for (const item of sorted) {
    let frac = item.uvFraction;
    if (frac > fillRatio) {
      const tag = item.mesh.name || `Mesh ${item.inputIdx + 1} (${item.mesh.geometry.type.replace("Geometry", "")})`;
      console.warn(
        `[baker] mesh "${tag}" wants ${(frac * 100).toFixed(0)}% of one ${opts.atlasResolution}\xB2 atlas at ${opts.texelsPerMeter} texels/m - clamping to ${(fillRatio * 100).toFixed(0)}% (effective density reduced)`
      );
      frac = fillRatio;
    }
    let placedBin = -1;
    for (let i = 0; i < binFills.length; i++) {
      if (binFills[i] + frac <= fillRatio) {
        binFills[i] = binFills[i] + frac;
        placedBin = i;
        break;
      }
    }
    if (placedBin < 0) {
      placedBin = binFills.length;
      binFills.push(frac);
    }
    out[item.inputIdx] = {
      atlasIdx: placedBin,
      mesh: item.mesh,
      uvFraction: frac,
      surfaceArea: item.surfaceArea
    };
  }
  return out;
}
const unwrapper = new UVUnwrapper({ BufferAttribute });
const worldScale = new Vector3();
const UV_EPSILON = 1e-4;
const MAX_DENSITY_PACK_ATTEMPTS = 6;
function getUv2Bounds(meshs) {
  let min = Infinity;
  let max = -Infinity;
  for (const mesh of meshs) {
    const uv2 = mesh.geometry.getAttribute("uv2");
    if (!uv2)
      return { min: 0, max: 0, valid: false };
    for (let i = 0; i < uv2.count; i++) {
      const u = uv2.getX(i);
      const v = uv2.getY(i);
      if (!Number.isFinite(u) || !Number.isFinite(v)) {
        return { min: 0, max: 0, valid: false };
      }
      min = Math.min(min, u, v);
      max = Math.max(max, u, v);
    }
  }
  return {
    min,
    max,
    valid: Number.isFinite(min) && Number.isFinite(max) && min >= -UV_EPSILON && max <= 1 + UV_EPSILON
  };
}
function snapshotGeometry(geometry) {
  const attributes = {};
  for (const [name, attribute] of Object.entries(geometry.attributes)) {
    attributes[name] = attribute.clone();
  }
  return {
    attributes,
    index: geometry.index ? geometry.index.clone() : null,
    xAtlasSubMeshes: geometry.userData.xAtlasSubMeshes ? structuredClone(geometry.userData.xAtlasSubMeshes) : void 0,
    hadXAtlasSubMeshes: Object.prototype.hasOwnProperty.call(geometry.userData, "xAtlasSubMeshes")
  };
}
function restoreGeometry(geometry, snapshot) {
  for (const name of Object.keys(geometry.attributes)) {
    geometry.deleteAttribute(name);
  }
  for (const [name, attribute] of Object.entries(snapshot.attributes)) {
    geometry.setAttribute(name, attribute.clone());
  }
  geometry.setIndex(snapshot.index ? snapshot.index.clone() : null);
  if (snapshot.hadXAtlasSubMeshes) {
    geometry.userData.xAtlasSubMeshes = snapshot.xAtlasSubMeshes ? structuredClone(snapshot.xAtlasSubMeshes) : snapshot.xAtlasSubMeshes;
  } else {
    delete geometry.userData.xAtlasSubMeshes;
  }
}
function setPackTexelsPerUnit(enabled, texelsPerUnit) {
  if (enabled) {
    unwrapper.packOptions.texelsPerUnit = texelsPerUnit;
  } else {
    delete unwrapper.packOptions.texelsPerUnit;
  }
}
const loadXAtlasThree = async () => {
  const onProgress = (mode, progress) => {
    return;
  };
  await unwrapper.loadLibrary(
    onProgress,
    "https://cdn.jsdelivr.net/npm/xatlasjs@0.2.0/dist/xatlas.wasm",
    "https://cdn.jsdelivr.net/npm/xatlasjs@0.2.0/dist/xatlas.js"
  );
};
const generateAtlas = async (meshs, options = {}) => {
  var _a2, _b2, _c, _d, _e, _f;
  const geometry = meshs.map((mesh) => mesh.geometry);
  const densityMode = options.texelsPerUnit !== void 0 && options.texelsPerUnit > 0;
  const packResolution = densityMode ? (_a2 = options.resolution) != null ? _a2 : 1024 : 4096;
  let texelsPerUnit = (_b2 = options.texelsPerUnit) != null ? _b2 : 0;
  if (densityMode) {
    const atlasTexels = packResolution * packResolution;
    let demand = 0;
    for (const mesh of meshs) {
      const scale = (_d = (_c = options.perMeshScale) == null ? void 0 : _c[mesh.uuid]) != null ? _d : 1;
      demand += computeMeshSurfaceArea(mesh) * texelsPerUnit * texelsPerUnit * scale * scale / atlasTexels;
    }
    const fillRatio = 0.95;
    if (demand > fillRatio) {
      texelsPerUnit *= Math.sqrt(fillRatio / demand);
    }
  }
  unwrapper.packOptions.padding = Math.max(4, Math.ceil(packResolution / 256));
  unwrapper.packOptions.resolution = packResolution;
  setPackTexelsPerUnit(densityMode, texelsPerUnit);
  const previousWorldScales = densityMode ? meshs.map((mesh) => mesh.geometry.userData.worldScale) : [];
  try {
    if (densityMode) {
      for (const mesh of meshs) {
        const scale = (_f = (_e = options.perMeshScale) == null ? void 0 : _e[mesh.uuid]) != null ? _f : 1;
        mesh.getWorldScale(worldScale);
        mesh.geometry.userData.worldScale = [
          worldScale.x * scale,
          worldScale.y * scale,
          worldScale.z * scale
        ];
      }
    }
    const maxAttempts = densityMode ? MAX_DENSITY_PACK_ATTEMPTS : 1;
    const snapshots = densityMode ? geometry.map(snapshotGeometry) : [];
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      if (attempt > 0) {
        for (let i = 0; i < geometry.length; i++) {
          const snapshot = snapshots[i];
          if (snapshot)
            restoreGeometry(geometry[i], snapshot);
        }
      }
      setPackTexelsPerUnit(densityMode, texelsPerUnit);
      const atlas = await unwrapper.packAtlas(geometry, "uv2", "uv");
      const uvBounds = getUv2Bounds(meshs);
      if (!densityMode || atlas.atlasCount <= 1 && uvBounds.valid)
        break;
      const canRetry = attempt + 1 < maxAttempts;
      const reason = atlas.atlasCount > 1 ? `${atlas.atlasCount} internal atlases` : `uv2 bounds ${uvBounds.min.toFixed(3)}..${uvBounds.max.toFixed(3)}`;
      if (canRetry) {
        texelsPerUnit *= 0.85;
        console.warn(
          `[baker] xatlas produced ${reason} for one ${packResolution}x${packResolution} bake group; retrying at ${texelsPerUnit.toFixed(2)} texels/m`
        );
      } else {
        console.warn(
          `[baker] xatlas still produced ${reason}; this bake group may show unmapped black areas`
        );
      }
    }
  } finally {
    if (densityMode) {
      for (let i = 0; i < meshs.length; i++) {
        const mesh = meshs[i];
        if (!mesh)
          continue;
        const prev = previousWorldScales[i];
        if (prev === void 0)
          delete mesh.geometry.userData.worldScale;
        else
          mesh.geometry.userData.worldScale = prev;
      }
    }
  }
};
const generateAtlases = async (meshesByBin, options = {}) => {
  for (let i = 0; i < meshesByBin.length; i++) {
    const bin = meshesByBin[i];
    if (!bin || bin.length === 0)
      continue;
    await generateAtlas(bin, options);
  }
};
const worldPositionVertexShader = `
    in vec2 uv2;
    uniform vec2 offset;
    out vec4 vPosition;
    void main() {
        vPosition = modelMatrix * vec4(position, 1.0);
        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
`;
const worldPositionFragmentShader = `
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
    offset: new Uniform(new Vector2(0, 0))
  }
});
const normalVertexShader = `
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
const normalFragmentShader = `
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
    offset: new Uniform(new Vector2(0, 0))
  }
});
const scene = new Scene();
const atlasCamera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
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
  { x: 0, y: 0 }
];
function makeAtlasMesh(mesh) {
  const clone = new Mesh(mesh.geometry, mesh.material);
  clone.matrixAutoUpdate = false;
  clone.matrixWorldAutoUpdate = false;
  clone.matrix.copy(mesh.matrixWorld);
  clone.matrixWorld.copy(mesh.matrixWorld);
  clone.normalMatrix.getNormalMatrix(mesh.matrixWorld);
  clone.frustumCulled = false;
  return clone;
}
function setAtlasOffset(material, x, y) {
  var _a2;
  const offset = (_a2 = material.uniforms.offset) == null ? void 0 : _a2.value;
  if (!offset)
    throw new Error("[baker] atlas material missing offset uniform");
  offset.set(x, y);
}
function renderAtlas(renderer, meshes, resolution, clear = true) {
  const rtOptions = {
    format: RGBAFormat,
    type: renderer.capabilities.isWebGL2 ? FloatType : HalfFloatType,
    minFilter: NearestFilter,
    magFilter: NearestFilter,
    generateMipmaps: false,
    depthBuffer: false,
    stencilBuffer: false,
    blending: NoBlending
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
    renderer.setClearColor(0, 0);
    if (clear) {
      renderer.setRenderTarget(posRT);
      renderer.clear();
      renderer.setRenderTarget(normRT);
      renderer.clear();
    }
    scene.clear();
    for (const m of meshes)
      scene.add(makeAtlasMesh(m));
    const draw = (material, target) => {
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
    }
  };
}
class LightmapperMaterial extends ShaderMaterial {
  constructor(options) {
    const bvhUniformStruct = new MeshBVHUniformStruct();
    bvhUniformStruct.updateFrom(options.bvh);
    const castCount = Math.max(1, Math.min(256, options.casts | 0));
    super({
      transparent: true,
      glslVersion: GLSL3,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        bvh: { value: bvhUniformStruct },
        positions: { value: options.positions },
        normals: { value: options.normals },
        albedoTex: { value: options.albedoTex },
        emissiveTex: { value: options.emissiveTex },
        materialTextureSize: { value: options.materialTextureSize },
        invModelMatrix: { value: options.invModelMatrix },
        bounces: { value: options.bounces },
        lightsTex: { value: options.lightsTex },
        lightCount: { value: options.lightCount },
        skyColor: { value: options.skyColor },
        skyIntensity: { value: options.skyIntensity },
        opacity: { value: 1 },
        sampleIndex: { value: 0 },
        directLightEnabled: { value: options.directLightEnabled },
        indirectLightEnabled: { value: options.indirectLightEnabled }
      },
      vertexShader: `
                out vec2 vUv;
                void main() {
                    gl_Position = vec4( position, 1.0 );
                    vUv = uv;
                }
            `,
      fragmentShader: `
                /*
                 * Lightmap Bake - Fragment Shader (GLSL3).
                 *
                 * Inputs:
                 *   positions / normals  : G-buffer textures keyed by lightmap UV
                 *   bvh                  : MeshBVH uniform struct of the merged scene
                 *   albedoTex/emissiveTex: per-triangle material lookup (W\xD7W float)
                 *   lightsTex            : 4-wide \xD7 lightCount-tall RGBA float texture
                 *                         texel(0,i)=pos+type, (1,i)=dir+p0,
                 *                         (2,i)=color+p1, (3,i)=p2,p3,0,0
                 *
                 * Outputs (MRT):
                 *   directOut   : raw direct irradiance (no surface albedo applied)
                 *   indirectOut : N-bounce GI + sky on miss
                 *
                 * AO has been split into a separate pass - see AOMaterial.ts.
                 *
                 * directOut convention: stores "incoming light per unit albedo".
                 * Material color is applied at composite/view time. This matches
                 * the pre-7C energy balance for the single-light case.
                 *
                 * Progressive accumulation: opacity = 1/(n+1), done by the caller.
                 */
                precision highp float;
                precision highp sampler2D;
                precision highp isampler2D;
                precision highp usampler2D;
                ${shaderStructs}
                ${shaderIntersectFunction}

                uniform mat4 invModelMatrix;
                uniform sampler2D positions;
                uniform sampler2D normals;

                // Per-triangle material lookup (Task 03). Indexed by faceIndices.w.
                uniform sampler2D albedoTex;
                uniform sampler2D emissiveTex;
                uniform float materialTextureSize;

                #define MAX_BOUNCES 4
                // Static upper cap on lights checked per shadow loop iteration.
                // Runtime count is controlled by the lightCount uniform.
                #define MAX_LIGHTS 16
                // Cast count is compile-time on purpose. A uniform-bound cast
                // loop produced NaNs on ANGLE when it wrapped texture/BVH calls.
                #define CASTS ${castCount}

                uniform int bounces;

                // Multi-light texture: 4 texels wide \xD7 lightCount tall, RGBA float.
                uniform sampler2D lightsTex;
                uniform int lightCount;

                uniform vec3 skyColor;
                uniform float skyIntensity;
                uniform int sampleIndex;

                uniform bool directLightEnabled;
                uniform bool indirectLightEnabled;
                uniform float opacity;

                uniform BVH bvh;
                in vec2 vUv;

                layout(location = 0) out vec4 directOut;
                layout(location = 1) out vec4 indirectOut;

                // \u2500\u2500 RNG \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                uvec4 s0;
                void rng_initialize(vec2 p, int frame) {
                    s0 = uvec4( uint(p.x), uint(p.y), uint( frame ), uint( p.x ) + uint( p.y ) );
                }
                void pcg4d( inout uvec4 v ) {
                    v = v * 1664525u + 1013904223u;
                    v.x += v.y * v.w; v.y += v.z * v.x;
                    v.z += v.x * v.y; v.w += v.y * v.z;
                    v = v ^ ( v >> 16u );
                    v.x += v.y*v.w; v.y += v.z*v.x;
                    v.z += v.x*v.y; v.w += v.y*v.z;
                }
                float rand()  { pcg4d(s0); return float(s0.x) / float(0xffffffffu); }
                vec2  rand2() { pcg4d(s0); return vec2(s0.xy) / float(0xffffffffu); }
                vec3  rand3() { pcg4d(s0); return vec3(s0.xyz) / float(0xffffffffu); }
                vec4  rand4() { pcg4d(s0); return vec4(s0) / float(0xffffffffu); }

                // \u2500\u2500 Geometry helpers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                vec3 randomSpherePoint(vec3 r) {
                    float ang1 = (r.x + 1.0) * 3.1415;
                    float u = r.y; float u2 = u * u;
                    float s = sqrt(max(0.0, 1.0 - u2));
                    return vec3(s * cos(ang1), s * sin(ang1), u);
                }

                vec3 safeNormalize(vec3 v, vec3 fallback) {
                    float len2 = dot(v, v);
                    return len2 > 1.0e-12 ? v * inversesqrt(len2) : fallback;
                }

                vec3 getHemisphereSample( vec3 n, vec2 uv ) {
                    float s = n.z == 0.0 ? 1.0 : sign(n.z);
                    float a = -1.0 / (s + n.z);
                    float b = n.x * n.y * a;
                    vec3 b1 = vec3(1.0 + s * n.x * n.x * a, s * b, -s * n.x);
                    vec3 b2 = vec3(b, s + n.y * n.y * a, -n.y);
                    float r = sqrt(uv.x);
                    float theta = 2.0 * 3.1415 * uv.y;
                    return r * cos(theta) * b1 + r * sin(theta) * b2 + sqrt(1.0 - uv.x) * n;
                }

                // \u2500\u2500 Material lookup \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                vec3 readTriangleMaterial(sampler2D tex, uint triIdx) {
                    uint W = uint(materialTextureSize);
                    vec2 uv = (vec2(triIdx % W, triIdx / W) + 0.5) / materialTextureSize;
                    return texture(tex, uv).rgb;
                }

                // \u2500\u2500 Light texture access \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                /**
                 * Read texel (slot, lightIdx) from the 4-wide light texture.
                 * slot \u2208 {0,1,2,3}. Guard: only call when lightCount > 0.
                 */
                vec4 readLight(int lightIdx, int slot) {
                    vec2 uv = (vec2(float(slot), float(lightIdx)) + 0.5)
                              / vec2(4.0, float(lightCount));
                    return texture(lightsTex, uv);
                }

                // \u2500\u2500 Light sampling \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                struct LightSample {
                    vec3  L;         // unit direction from hit toward light
                    float distance;  // distance to light (1e6 for directional)
                    vec3  emission;  // color * falloff (0 = skip shadow ray)
                };

                /**
                 * Sample light li at hitPos / hitNormal using 2D random input rnd.
                 * Directional jitter uses tan(angularSize) approximation - valid for
                 * small angles (sun disc \u2272 5\xB0). Larger values over-bias the direction.
                 */
                LightSample sampleLight(int li, vec3 hitPos, vec3 hitNormal, vec2 rnd) {
                    vec4 t0 = readLight(li, 0);
                    vec4 t1 = readLight(li, 1);
                    vec4 t2 = readLight(li, 2);
                    vec4 t3 = readLight(li, 3);
                    int  ltype  = int(t0.w + 0.5);
                    vec3 lpos   = t0.xyz;
                    vec3 ldir   = safeNormalize(t1.xyz, vec3(0.0, -1.0, 0.0));
                    vec3 lcolor = t2.xyz;
                    float p0 = t1.w, p1 = t2.w; // p2=t3.x, p3=t3.y available if needed

                    LightSample s;
                    s.emission = vec3(0.0);
                    s.distance = 1e6;

                    if (ltype == 0) {
                        // Point - sphere jitter for soft shadows (radius = p0).
                        vec3 jitter = (p0 > 0.0) ? randomSpherePoint(vec3(rnd, rand())) * p0
                                                  : vec3(0.0);
                        vec3 d = (lpos + jitter) - hitPos;
                        s.distance = max(length(d), 1.0e-5);
                        s.L        = d / s.distance;
                        s.emission = lcolor;
                    }
                    else if (ltype == 1) {
                        // Directional - effectively infinite distance.
                        vec3 baseL = -ldir;
                        vec3 jitter = (p0 > 0.0)
                            ? randomSpherePoint(vec3(rnd, rand())) * tan(p0)
                            : vec3(0.0);
                        s.L        = safeNormalize(baseL + jitter, baseL);
                        s.distance = 1e6;
                        s.emission = lcolor;
                    }
                    else if (ltype == 2) {
                        // Spot - point source with angular cone falloff.
                        // p0 = innerAngleCos, p1 = outerAngleCos.
                        vec3 d = lpos - hitPos;
                        s.distance = max(length(d), 1.0e-5);
                        s.L = d / s.distance;
                        float cosAngle = dot(-s.L, ldir);
                        float falloff  = clamp((cosAngle - p1) / max(p0 - p1, 1.0e-5), 0.0, 1.0);
                        s.emission = lcolor * falloff;
                    }
                    else {
                        // Area - rectangle centered at lpos, normal = ldir, width=p0, height=p1.
                        vec3 up = abs(ldir.y) < 0.999 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
                        vec3 tu = safeNormalize(cross(up, ldir), vec3(1.0, 0.0, 0.0));
                        vec3 tv = cross(ldir, tu);
                        vec2 luv = rnd - 0.5;
                        vec3 sample_pos = lpos + tu * (luv.x * p0) + tv * (luv.y * p1);
                        vec3 d = sample_pos - hitPos;
                        s.distance = max(length(d), 1.0e-5);
                        s.L = d / s.distance;
                        // One-sided emission: only emits in -ldir hemisphere.
                        s.emission = lcolor * max(0.0, dot(-s.L, ldir));
                    }
                    return s;
                }

                // \u2500\u2500 NEE (Next Event Estimation) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                /**
                 * Sum NEE contributions from ALL lights at a hit point.
                 * One shadow ray per light. hitAlbedo: pass vec3(1.0) for the
                 * direct channel (raw irradiance); pass surface albedo for GI bounces.
                 * NaN guard: bvhIntersectFirstHit out-param sd initialised to 0.
                 */
                vec3 sampleAllLightsNEE(vec3 hitPos, vec3 hitNormal, vec3 hitAlbedo) {
                    if (lightCount <= 0) return vec3(0.0);
                    vec3 sum = vec3(0.0);
                    vec3 bary = vec3(0.0); float sideVal = 1.0;
                    for (int li = 0; li < MAX_LIGHTS; li++) {
                        if (li >= lightCount) break;
                        LightSample ls = sampleLight(li, hitPos, hitNormal, rand4().xy);
                        if (dot(ls.emission, ls.emission) <= 1.0e-12) continue;
                        float cosL = max(0.0, dot(hitNormal, ls.L));
                        if (cosL <= 0.0) continue;
                        vec3 shadowOrigin = hitPos + hitNormal * 0.001;
                        uvec4 sfi = uvec4(0u); vec3 sfn = vec3(0.0,0.0,1.0); float sd = 0.0;
                        bool occ = bvhIntersectFirstHit(bvh, shadowOrigin, ls.L, sfi, sfn, bary, sideVal, sd);
                        if (occ && sd < ls.distance - 0.001) continue;
                        // 1/PI dropped - matches pre-7C energy balance convention.
                        sum += hitAlbedo * cosL * ls.emission;
                    }
                    return sum;
                }

                // \u2500\u2500 Path tracer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                /**
                 * N-bounce path tracer. Called once per hemisphere cast.
                 * faceNormal from three-mesh-bvh is already side-flipped.
                 * DO NOT re-flip - re-flipping pushes shadow origins into surfaces.
                 */
                vec3 tracePath(
                    vec3 ro, vec3 rd,
                    bool hit, uvec4 fi, vec3 fn, float fd
                ) {
                    vec3 throughput = vec3(1.0);
                    vec3 radiance   = vec3(0.0);
                    vec3 bary = vec3(0.0);
                    float sideVal = 1.0;

                    for (int b = 0; b < MAX_BOUNCES; b++) {
                        if (b >= bounces) break;
                        if (!hit) {
                            if (b == 0) radiance += throughput * skyColor * skyIntensity;
                            break;
                        }

                        vec3 hitAlbedo   = readTriangleMaterial(albedoTex,   fi.w);
                        vec3 hitEmissive = readTriangleMaterial(emissiveTex, fi.w);
                        vec3 hitPos      = ro + rd * fd;
                        vec3 hitNormal   = fn;
                        vec3 hitOrigin   = hitPos + hitNormal * 0.001;

                        // (a) Emissive surface contribution.
                        radiance += throughput * hitEmissive;

                        // (b) NEE - all lights, with surface albedo (GI bounce).
                        radiance += throughput * sampleAllLightsNEE(hitOrigin, hitNormal, hitAlbedo);

                        // (c) Throughput update - cosine/PDF cancel.
                        throughput *= hitAlbedo;

                        // (d) Russian Roulette from bounce 2 onward.
                        if (b >= 2) {
                            float p = clamp(max(throughput.r, max(throughput.g, throughput.b)), 0.0, 1.0);
                            if (rand() > p) break;
                            throughput /= max(p, 1.0e-4);
                        }

                        // (e) Next bounce - cosine-weighted hemisphere.
                        ro  = hitOrigin;
                        rd  = getHemisphereSample(hitNormal, rand4().xy);
                        fd  = 0.0;
                        hit = bvhIntersectFirstHit(bvh, ro, rd, fi, fn, bary, sideVal, fd);
                    }
                    return radiance;
                }

                // \u2500\u2500 Main \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                void main() {
                    vec4 position = texture(positions, vUv);
                    vec4 normal   = texture(normals,   vUv);

                    // Empty G-buffer pixels have no surface. Do not trace rays
                    // from origin with a zero normal into the accumulation RTs.
                    if (position.a <= 0.0 || dot(normal.xyz, normal.xyz) <= 1.0e-10) {
                        directOut = vec4(0.0);
                        indirectOut = vec4(0.0);
                        return;
                    }

                    rng_initialize(gl_FragCoord.xy, sampleIndex);

                    vec3 rayOrigin    = position.rgb;
                    vec3 rayDirection = normal.rgb;
                    rayOrigin += rayDirection * 0.001;

                    uvec4 faceIndices = uvec4(0u);
                    vec3  faceNormal  = vec3(0.0, 0.0, 1.0);
                    vec3  barycoord   = vec3(0.0);
                    float side        = 1.0;
                    float dist        = 0.0;

                    vec3  totalIndirectLight = vec3(0.0);
                    vec3  totalDirectLight   = vec3(0.0);
                    float castDivisor        = float(CASTS);

                    // Indirect bounce loop. AO has been moved to its own pass
                    // (AOMaterial / AOMapper) so AO sliders can be tweaked
                    // without a bounce re-bake.
                    if (indirectLightEnabled) {
                        for (int i = 0; i < CASTS; i++) {
                            vec3 newDir = getHemisphereSample(normal.xyz, rand4().xy);
                            if (dot(rayDirection, newDir) > 0.0) {
                                bool hit = bvhIntersectFirstHit(bvh, rayOrigin, newDir,
                                    faceIndices, faceNormal, barycoord, side, dist);
                                totalIndirectLight += tracePath(rayOrigin, newDir, hit,
                                                                faceIndices, faceNormal, dist);
                            }
                        }
                    }

                    if (directLightEnabled) {
                        // Direct lighting: NEE over all lights at the primary surface.
                        // hitAlbedo=vec3(1.0) keeps directOut as raw irradiance so the
                        // material color is applied at composite time (bake convention).
                        for (int i = 0; i < CASTS; i++) {
                            totalDirectLight += sampleAllLightsNEE(rayOrigin, normal.xyz, vec3(1.0));
                        }
                    }

                    vec4 avgDirect   = vec4(totalDirectLight   / castDivisor, 1.0);
                    vec4 avgIndirect = vec4(totalIndirectLight / castDivisor, 1.0);

                    directOut   = directLightEnabled   ? vec4(avgDirect.rgb,   opacity) : vec4(0.0, 0.0, 0.0, opacity);
                    indirectOut = indirectLightEnabled ? vec4(avgIndirect.rgb, opacity) : vec4(0.0, 0.0, 0.0, opacity);
                }
            `
    });
    this.programKey = "LightmapperMaterial|glsl3|mrt2";
    this.programKey = `LightmapperMaterial|glsl3|mrt2|casts=${castCount}`;
  }
  customProgramCacheKey() {
    return this.programKey;
  }
}
const TYPE_INT = { point: 0, directional: 1, spot: 2, area: 3 };
const LIGHT_TEX_WIDTH = 4;
function collectLightsFromScene(scene2) {
  const out = [];
  scene2.traverse((obj) => {
    var _a2;
    if (!obj.visible)
      return;
    if ((_a2 = obj.userData) == null ? void 0 : _a2.lightmapIgnore)
      return;
    if (obj instanceof PointLight) {
      out.push({
        type: "point",
        position: obj.getWorldPosition(new Vector3()),
        direction: new Vector3(0, -1, 0),
        color: obj.color.clone().multiplyScalar(obj.intensity),
        params: [0, 0, 0, 0]
      });
    } else if (obj instanceof DirectionalLight) {
      const dir = new Vector3(0, 0, -1).transformDirection(obj.matrixWorld).normalize();
      out.push({
        type: "directional",
        position: obj.getWorldPosition(new Vector3()),
        direction: dir,
        color: obj.color.clone().multiplyScalar(obj.intensity),
        params: [0, 0, 0, 0]
      });
    } else if (obj instanceof SpotLight) {
      const dir = new Vector3(0, 0, -1).transformDirection(obj.matrixWorld).normalize();
      out.push({
        type: "spot",
        position: obj.getWorldPosition(new Vector3()),
        direction: dir,
        color: obj.color.clone().multiplyScalar(obj.intensity),
        params: [Math.cos(obj.angle * (1 - obj.penumbra)), Math.cos(obj.angle), 0, 0]
      });
    } else if (obj instanceof RectAreaLight) {
      const dir = new Vector3(0, 0, -1).transformDirection(obj.matrixWorld).normalize();
      out.push({
        type: "area",
        position: obj.getWorldPosition(new Vector3()),
        direction: dir,
        color: obj.color.clone().multiplyScalar(obj.intensity),
        params: [obj.width, obj.height, 0, 0]
      });
    }
  });
  return out;
}
function buildLightTexture(lights) {
  const capacity = Math.max(1, lights.length);
  const data = new Float32Array(LIGHT_TEX_WIDTH * capacity * 4);
  for (let i = 0; i < lights.length; i++) {
    const l = lights[i];
    const base = i * LIGHT_TEX_WIDTH * 4;
    data[base + 0] = l.position.x;
    data[base + 1] = l.position.y;
    data[base + 2] = l.position.z;
    data[base + 3] = TYPE_INT[l.type];
    data[base + 4] = l.direction.x;
    data[base + 5] = l.direction.y;
    data[base + 6] = l.direction.z;
    data[base + 7] = l.params[0];
    data[base + 8] = l.color.r;
    data[base + 9] = l.color.g;
    data[base + 10] = l.color.b;
    data[base + 11] = l.params[1];
    data[base + 12] = l.params[2];
    data[base + 13] = l.params[3];
    data[base + 14] = 0;
    data[base + 15] = 0;
  }
  const tex = new DataTexture(data, LIGHT_TEX_WIDTH, capacity, RGBAFormat, FloatType);
  tex.minFilter = NearestFilter;
  tex.magFilter = NearestFilter;
  tex.generateMipmaps = false;
  tex.wrapS = ClampToEdgeWrapping;
  tex.wrapT = ClampToEdgeWrapping;
  tex.needsUpdate = true;
  return { texture: tex, count: lights.length, capacity };
}
function disposeLightTexture(tex) {
  tex.dispose();
}
const generateLightmapper = (renderer, positions, normals, bvh, options) => {
  var _a2, _b2;
  const lightBuild = buildLightTexture(options.lights);
  const lightTexture = lightBuild.texture;
  const raycastMaterial = new LightmapperMaterial({
    bvh,
    invModelMatrix: new Matrix4().identity(),
    positions,
    normals,
    albedoTex: options.albedoTexture,
    emissiveTex: options.emissiveTexture,
    materialTextureSize: options.materialTextureSize,
    casts: options.casts,
    bounces: (_a2 = options.bounces) != null ? _a2 : 1,
    lightsTex: lightTexture,
    lightCount: lightBuild.count,
    skyColor: options.skyColor,
    skyIntensity: options.skyIntensity,
    opacity: 1,
    sampleIndex: 0,
    directLightEnabled: options.directLightEnabled,
    indirectLightEnabled: options.indirectLightEnabled
  });
  const renderTarget = new WebGLMultipleRenderTargets(options.resolution, options.resolution, 2, {
    type: FloatType,
    minFilter: LinearFilter,
    magFilter: LinearFilter,
    generateMipmaps: false
  });
  const prevRT = renderer.getRenderTarget();
  const prevClearColor = new Color();
  renderer.getClearColor(prevClearColor);
  const prevClearAlpha = renderer.getClearAlpha();
  renderer.setRenderTarget(renderTarget);
  renderer.setClearColor(0, 0);
  renderer.clear();
  renderer.setRenderTarget(prevRT);
  renderer.setClearColor(prevClearColor, prevClearAlpha);
  const raycastMesh = new Mesh(new PlaneGeometry(2, 2), raycastMaterial);
  const orthographicCamera = new OrthographicCamera();
  let totalSamples = 0;
  const target = options.targetSamples | 0;
  const resolution = options.resolution;
  let tileSize = Math.max(1, Math.min(resolution, (_b2 = options.tileSize) != null ? _b2 : resolution));
  let pendingTileSize = null;
  let nextTileIndex = 0;
  const computeTileGrid = (s) => {
    const tx = Math.ceil(resolution / s);
    return { tilesX: tx, tilesY: tx, count: tx * tx };
  };
  let grid = computeTileGrid(tileSize);
  const sampleIndexU = raycastMaterial.uniforms.sampleIndex;
  const opacityU = raycastMaterial.uniforms.opacity;
  if (!sampleIndexU || !opacityU)
    throw new Error("[baker] LightmapperMaterial missing required uniforms");
  const renderOneTile = () => {
    const t0 = performance.now();
    const autoClear = renderer.autoClear;
    const rtBefore = renderer.getRenderTarget();
    const scissorWasEnabled = renderer.getScissorTest();
    try {
      renderer.autoClear = false;
      renderer.setRenderTarget(renderTarget);
      sampleIndexU.value = totalSamples;
      opacityU.value = 1 / (totalSamples + 1);
      if (tileSize >= resolution) {
        renderer.setScissorTest(false);
        renderer.render(raycastMesh, orthographicCamera);
      } else {
        const tx = nextTileIndex % grid.tilesX;
        const ty = nextTileIndex / grid.tilesX | 0;
        const x = tx * tileSize;
        const y = ty * tileSize;
        const w = Math.min(tileSize, resolution - x);
        const h = Math.min(tileSize, resolution - y);
        renderer.setScissor(x, y, w, h);
        renderer.setScissorTest(true);
        renderer.render(raycastMesh, orthographicCamera);
      }
    } finally {
      renderer.setScissorTest(scissorWasEnabled);
      renderer.setRenderTarget(rtBefore);
      renderer.autoClear = autoClear;
    }
    nextTileIndex++;
    let sampleCompleted = false;
    if (nextTileIndex >= grid.count) {
      nextTileIndex = 0;
      totalSamples++;
      sampleCompleted = true;
      if (pendingTileSize !== null) {
        tileSize = pendingTileSize;
        grid = computeTileGrid(tileSize);
        pendingTileSize = null;
      }
    }
    return { ms: performance.now() - t0, sampleCompleted };
  };
  const render = () => {
    if (target > 0 && totalSamples >= target)
      return { samples: totalSamples, done: true, sampleComplete: true, lastDrawMs: 0 };
    let lastMs = 0;
    while (true) {
      const r = renderOneTile();
      lastMs = r.ms;
      if (r.sampleCompleted)
        break;
    }
    return {
      samples: totalSamples,
      done: target > 0 && totalSamples >= target,
      sampleComplete: true,
      lastDrawMs: lastMs
    };
  };
  const renderTiled = (budgetMs) => {
    if (target > 0 && totalSamples >= target)
      return { samples: totalSamples, done: true, sampleComplete: true, lastDrawMs: 0 };
    const deadline = performance.now() + Math.max(0, budgetMs);
    let lastMs = 0;
    let sampleComplete = false;
    do {
      const r = renderOneTile();
      lastMs = r.ms;
      if (r.sampleCompleted) {
        sampleComplete = true;
        if (target > 0 && totalSamples >= target)
          break;
      }
    } while (performance.now() < deadline);
    return {
      samples: totalSamples,
      done: target > 0 && totalSamples >= target,
      sampleComplete,
      lastDrawMs: lastMs
    };
  };
  const setTileSize = (n) => {
    const clamped = Math.max(1, Math.min(resolution, n | 0));
    if (clamped === tileSize && pendingTileSize === null)
      return;
    if (nextTileIndex === 0) {
      tileSize = clamped;
      grid = computeTileGrid(tileSize);
      pendingTileSize = null;
    } else {
      pendingTileSize = clamped;
    }
  };
  const reset = () => {
    totalSamples = 0;
    nextTileIndex = 0;
  };
  const dispose = () => {
    disposeLightTexture(lightTexture);
    renderTarget.dispose();
    raycastMaterial.dispose();
    raycastMesh.geometry.dispose();
  };
  const [direct, indirect] = renderTarget.texture;
  if (!direct || !indirect)
    throw new Error("[baker] WebGLMultipleRenderTargets did not allocate 2 textures");
  const textures = { direct, indirect };
  return {
    renderTarget,
    textures,
    render,
    renderTiled,
    setTileSize,
    reset,
    dispose
  };
};
class AOMaterial extends ShaderMaterial {
  customProgramCacheKey() {
    return "AOMaterial|glsl3|single-out";
  }
  constructor(options) {
    const bvhUniformStruct = new MeshBVHUniformStruct();
    bvhUniformStruct.updateFrom(options.bvh);
    super({
      transparent: true,
      glslVersion: GLSL3,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        bvh: { value: bvhUniformStruct },
        positions: { value: options.positions },
        normals: { value: options.normals },
        invModelMatrix: { value: options.invModelMatrix },
        aoSamples: { value: options.aoSamples },
        ambientDistance: { value: options.ambientDistance },
        opacity: { value: options.opacity },
        sampleIndex: { value: options.sampleIndex }
      },
      vertexShader: `
                out vec2 vUv;
                void main() {
                    gl_Position = vec4( position, 1.0 );
                    vUv = uv;
                }
            `,
      fragmentShader: `
                /*
                 * Standalone AO bake (GLSL3, single output).
                 *
                 * Stored value: mean of  t = clamp(dist / ambientDistance, 0, 1)
                 * over aoSamples cosine-weighted hemisphere rays. 1.0 on miss
                 * (or hit beyond ambientDistance). 0.0 on hard contact.
                 *
                 * Composite shader applies the intensity/exponent remap. At
                 * intensity=1, exponent=1 the remap is identity so default
                 * output matches pre-separation behavior exactly.
                 */
                precision highp float;
                precision highp sampler2D;
                precision highp isampler2D;
                precision highp usampler2D;
                ${shaderStructs}
                ${shaderIntersectFunction}

                uniform mat4 invModelMatrix;
                uniform sampler2D positions;
                uniform sampler2D normals;
                uniform int aoSamples;
                uniform float ambientDistance;
                uniform int sampleIndex;
                uniform float opacity;
                uniform BVH bvh;
                in vec2 vUv;

                out vec4 aoOut;

                // \u2500\u2500 RNG (matches LightmapperMaterial) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                uvec4 s0;
                void rng_initialize(vec2 p, int frame) {
                    s0 = uvec4( uint(p.x), uint(p.y), uint( frame ), uint( p.x ) + uint( p.y ) );
                }
                void pcg4d( inout uvec4 v ) {
                    v = v * 1664525u + 1013904223u;
                    v.x += v.y * v.w; v.y += v.z * v.x;
                    v.z += v.x * v.y; v.w += v.y * v.z;
                    v = v ^ ( v >> 16u );
                    v.x += v.y*v.w; v.y += v.z*v.x;
                    v.z += v.x*v.y; v.w += v.y*v.z;
                }
                vec4 rand4() { pcg4d(s0); return vec4(s0) / float(0xffffffffu); }

                vec3 getHemisphereSample( vec3 n, vec2 uv ) {
                    float s = n.z == 0.0 ? 1.0 : sign(n.z);
                    float a = -1.0 / (s + n.z);
                    float b = n.x * n.y * a;
                    vec3 b1 = vec3(1.0 + s * n.x * n.x * a, s * b, -s * n.x);
                    vec3 b2 = vec3(b, s + n.y * n.y * a, -n.y);
                    float r = sqrt(uv.x);
                    float theta = 2.0 * 3.1415 * uv.y;
                    return r * cos(theta) * b1 + r * sin(theta) * b2 + sqrt(1.0 - uv.x) * n;
                }

                void main() {
                    vec4 position = texture(positions, vUv);
                    vec4 normal   = texture(normals,   vUv);

                    // Outside-chart pixels are neutral AO. Writing black here
                    // makes chart-cut filtering darken visible mesh surfaces.
                    if (position.a <= 0.0 || dot(normal.xyz, normal.xyz) <= 1.0e-10) {
                        aoOut = vec4(vec3(1.0), opacity);
                        return;
                    }

                    rng_initialize(gl_FragCoord.xy, sampleIndex);

                    vec3 rayOrigin    = position.rgb;
                    vec3 rayDirection = normal.rgb;
                    rayOrigin += rayDirection * 0.001;

                    uvec4 faceIndices = uvec4(0u);
                    vec3  faceNormal  = vec3(0.0, 0.0, 1.0);
                    vec3  barycoord   = vec3(0.0);
                    float side        = 1.0;
                    float dist        = 0.0;

                    float totalT = 0.0;
                    for (int i = 0; i < aoSamples; i++) {
                        vec3 newDir = getHemisphereSample(normal.xyz, rand4().xy);
                        if (dot(rayDirection, newDir) > 0.0) {
                            bool hit = bvhIntersectFirstHit(bvh, rayOrigin, newDir,
                                faceIndices, faceNormal, barycoord, side, dist);
                            float t = (hit && dist < ambientDistance)
                                ? clamp(dist / ambientDistance, 0.0, 1.0)
                                : 1.0;
                            totalT += t;
                        }
                    }

                    float divisor = max(float(aoSamples), 1.0);
                    float avg = aoSamples > 0 ? totalT / divisor : 1.0;
                    aoOut = vec4(vec3(avg), opacity);
                }
            `
    });
  }
}
const generateAOMapper = (renderer, positions, normals, bvh, options) => {
  var _a2;
  const material = new AOMaterial({
    bvh,
    invModelMatrix: new Matrix4().identity(),
    positions,
    normals,
    aoSamples: options.aoSamples,
    ambientDistance: options.ambientDistance,
    opacity: 1,
    sampleIndex: 0
  });
  const renderTarget = new WebGLRenderTarget(options.resolution, options.resolution, {
    type: FloatType,
    minFilter: LinearFilter,
    magFilter: LinearFilter,
    generateMipmaps: false
  });
  const prevRT = renderer.getRenderTarget();
  const prevClearColor = new Color();
  renderer.getClearColor(prevClearColor);
  const prevClearAlpha = renderer.getClearAlpha();
  renderer.setRenderTarget(renderTarget);
  renderer.setClearColor(0, 0);
  renderer.clear();
  renderer.setRenderTarget(prevRT);
  renderer.setClearColor(prevClearColor, prevClearAlpha);
  const quad = new Mesh(new PlaneGeometry(2, 2), material);
  const cam = new OrthographicCamera();
  let totalSamples = 0;
  const target = options.targetSamples | 0;
  const resolution = options.resolution;
  let tileSize = Math.max(1, Math.min(resolution, (_a2 = options.tileSize) != null ? _a2 : resolution));
  let pendingTileSize = null;
  let nextTileIndex = 0;
  const computeTileGrid = (s) => {
    const tx = Math.ceil(resolution / s);
    return { tilesX: tx, tilesY: tx, count: tx * tx };
  };
  let grid = computeTileGrid(tileSize);
  const sampleIndexU = material.uniforms.sampleIndex;
  const opacityU = material.uniforms.opacity;
  if (!sampleIndexU || !opacityU)
    throw new Error("[baker] AOMaterial missing required uniforms");
  const renderOneTile = () => {
    const t0 = performance.now();
    const autoClear = renderer.autoClear;
    const rtBefore = renderer.getRenderTarget();
    const scissorWasEnabled = renderer.getScissorTest();
    try {
      renderer.autoClear = false;
      renderer.setRenderTarget(renderTarget);
      sampleIndexU.value = totalSamples;
      opacityU.value = 1 / (totalSamples + 1);
      if (tileSize >= resolution) {
        renderer.setScissorTest(false);
        renderer.render(quad, cam);
      } else {
        const tx = nextTileIndex % grid.tilesX;
        const ty = nextTileIndex / grid.tilesX | 0;
        const x = tx * tileSize;
        const y = ty * tileSize;
        const w = Math.min(tileSize, resolution - x);
        const h = Math.min(tileSize, resolution - y);
        renderer.setScissor(x, y, w, h);
        renderer.setScissorTest(true);
        renderer.render(quad, cam);
      }
    } finally {
      renderer.setScissorTest(scissorWasEnabled);
      renderer.setRenderTarget(rtBefore);
      renderer.autoClear = autoClear;
    }
    nextTileIndex++;
    let sampleCompleted = false;
    if (nextTileIndex >= grid.count) {
      nextTileIndex = 0;
      totalSamples++;
      sampleCompleted = true;
      if (pendingTileSize !== null) {
        tileSize = pendingTileSize;
        grid = computeTileGrid(tileSize);
        pendingTileSize = null;
      }
    }
    return { ms: performance.now() - t0, sampleCompleted };
  };
  const render = () => {
    if (target > 0 && totalSamples >= target)
      return { samples: totalSamples, done: true, sampleComplete: true, lastDrawMs: 0 };
    let lastMs = 0;
    while (true) {
      const r = renderOneTile();
      lastMs = r.ms;
      if (r.sampleCompleted)
        break;
    }
    return {
      samples: totalSamples,
      done: target > 0 && totalSamples >= target,
      sampleComplete: true,
      lastDrawMs: lastMs
    };
  };
  const renderTiled = (budgetMs) => {
    if (target > 0 && totalSamples >= target)
      return { samples: totalSamples, done: true, sampleComplete: true, lastDrawMs: 0 };
    const deadline = performance.now() + Math.max(0, budgetMs);
    let lastMs = 0;
    let sampleComplete = false;
    do {
      const r = renderOneTile();
      lastMs = r.ms;
      if (r.sampleCompleted) {
        sampleComplete = true;
        if (target > 0 && totalSamples >= target)
          break;
      }
    } while (performance.now() < deadline);
    return {
      samples: totalSamples,
      done: target > 0 && totalSamples >= target,
      sampleComplete,
      lastDrawMs: lastMs
    };
  };
  const setTileSize = (n) => {
    const clamped = Math.max(1, Math.min(resolution, n | 0));
    if (clamped === tileSize && pendingTileSize === null)
      return;
    if (nextTileIndex === 0) {
      tileSize = clamped;
      grid = computeTileGrid(tileSize);
      pendingTileSize = null;
    } else {
      pendingTileSize = clamped;
    }
  };
  const reset = () => {
    totalSamples = 0;
    nextTileIndex = 0;
  };
  const dispose = () => {
    renderTarget.dispose();
    material.dispose();
    quad.geometry.dispose();
  };
  return {
    texture: renderTarget.texture,
    render,
    renderTiled,
    setTileSize,
    reset,
    dispose
  };
};
class CompositeMaterial extends ShaderMaterial {
  customProgramCacheKey() {
    return "CompositeMaterial|glsl3|single-out";
  }
  constructor(opts) {
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
        aoExponent: { value: opts.aoExponent }
      },
      vertexShader: `
                out vec2 vUv;
                void main() {
                    gl_Position = vec4(position, 1.0);
                    vUv = uv;
                }
            `,
      fragmentShader: `
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
                    vec4 directSample = texture(directTex,   vUv);
                    vec4 indirectSample = texture(indirectTex, vUv);
                    vec3 d = directSample.rgb * directIntensity;
                    vec3 i = indirectSample.rgb * giIntensity;
                    float lightmapMask = max(directSample.a, indirectSample.a);

                    // AO remap (view-time): aoTex stores raw normalized visibility
                    // t \u2208 [0,1]. Apply exponent + intensity here so tweaking those
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

                    outColor = vec4(lit, lightmapMask);
                }
            `
    });
  }
}
const runComposite = (renderer, lightmapTextures, resolution, opts) => {
  const rt = new WebGLRenderTarget(resolution, resolution, {
    type: HalfFloatType,
    minFilter: LinearFilter,
    magFilter: LinearFilter,
    generateMipmaps: false
  });
  const mat = new CompositeMaterial({
    directTex: lightmapTextures.direct,
    indirectTex: lightmapTextures.indirect,
    aoTex: lightmapTextures.ao,
    directIntensity: opts.directIntensity,
    giIntensity: opts.giIntensity,
    aoEnabled: opts.aoEnabled,
    aoIntensity: opts.aoIntensity,
    aoExponent: opts.aoExponent
  });
  const quad = new Mesh(new PlaneGeometry(2, 2), mat);
  const cam = new OrthographicCamera();
  const u = mat.uniforms;
  const refresh = (overrides) => {
    if ((overrides == null ? void 0 : overrides.directIntensity) !== void 0 && u.directIntensity)
      u.directIntensity.value = overrides.directIntensity;
    if ((overrides == null ? void 0 : overrides.giIntensity) !== void 0 && u.giIntensity)
      u.giIntensity.value = overrides.giIntensity;
    if ((overrides == null ? void 0 : overrides.aoEnabled) !== void 0 && u.aoEnabled)
      u.aoEnabled.value = overrides.aoEnabled;
    if ((overrides == null ? void 0 : overrides.aoIntensity) !== void 0 && u.aoIntensity)
      u.aoIntensity.value = overrides.aoIntensity;
    if ((overrides == null ? void 0 : overrides.aoExponent) !== void 0 && u.aoExponent)
      u.aoExponent.value = overrides.aoExponent;
    if ((overrides == null ? void 0 : overrides.aoTex) !== void 0 && u.aoTex)
      u.aoTex.value = overrides.aoTex;
    const prev = renderer.getRenderTarget();
    const autoClear = renderer.autoClear;
    try {
      renderer.autoClear = true;
      renderer.setRenderTarget(rt);
      renderer.render(quad, cam);
    } finally {
      renderer.setRenderTarget(prev);
      renderer.autoClear = autoClear;
    }
  };
  refresh();
  return {
    texture: rt.texture,
    refresh,
    dispose: () => {
      rt.dispose();
      mat.dispose();
      quad.geometry.dispose();
    }
  };
};
class DilationMaterial extends ShaderMaterial {
  customProgramCacheKey() {
    return "DilationMaterial|glsl3|single-out";
  }
  constructor(opts = {}) {
    var _a2, _b2, _c;
    super({
      glslVersion: GLSL3,
      blending: NoBlending,
      transparent: false,
      depthWrite: false,
      depthTest: false,
      uniforms: {
        map: { value: (_a2 = opts.map) != null ? _a2 : null },
        positions: { value: (_b2 = opts.positions) != null ? _b2 : null },
        resolution: { value: (_c = opts.resolution) != null ? _c : 1024 },
        useSourceAlpha: { value: false }
      },
      vertexShader: `
                out vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4(position, 1.0);
                }
            `,
      fragmentShader: `
                #define DILATION_EMPTY_EPS 1.0e-6

                uniform sampler2D map;
                uniform sampler2D positions;
                uniform float resolution;
                uniform bool useSourceAlpha;
                in vec2 vUv;
                out vec4 fragColor;

                void main() {
                    vec4 here = texture(map, vUv);
                    float chart = texture(positions, vUv).a;

                    // Inside a chart - pass through.
                    if (chart > DILATION_EMPTY_EPS) {
                        fragColor = vec4(here.rgb, 1.0);
                        return;
                    }

                    // Outside chart: average non-empty 3x3 neighbours.
                    float texel = 1.0 / max(resolution, 1.0);
                    vec3 sum = vec3(0.0);
                    float n = 0.0;
                    for (int dy = -1; dy <= 1; dy++) {
                        for (int dx = -1; dx <= 1; dx++) {
                            if (dx == 0 && dy == 0) continue;
                            vec2 uv2 = vUv + vec2(float(dx), float(dy)) * texel;
                            vec4 s = texture(map, uv2);
                            float chartNeighbour = texture(positions, uv2).a;
                            // First pass ignores source alpha because legacy/raw inputs may
                            // be opaque in empty atlas space. Later passes use the alpha mask
                            // written by this shader so black valid texels keep propagating.
                            float priorFill = useSourceAlpha
                                ? step(DILATION_EMPTY_EPS, s.a)
                                : 0.0;
                            float brightFill = step(
                                DILATION_EMPTY_EPS,
                                dot(max(s.rgb, vec3(0.0)), vec3(1.0))
                            );
                            float w = max(
                                step(DILATION_EMPTY_EPS, chartNeighbour),
                                max(priorFill, brightFill)
                            );
                            sum += s.rgb * w;
                            n   += w;
                        }
                    }
                    fragColor = n > 0.0
                        ? vec4(sum / n, 1.0)
                        : vec4(0.0);
                }
            `
    });
  }
}
class DenoiseMaterial extends ShaderMaterial {
  customProgramCacheKey() {
    return "DenoiseMaterial|glsl1|single-out";
  }
  constructor(options) {
    var _a2, _b2, _c;
    super({
      blending: NoBlending,
      transparent: false,
      depthWrite: false,
      depthTest: false,
      defines: {
        USE_SLIDER: 0
      },
      uniforms: {
        sigma: { value: (_a2 = options.sigma) != null ? _a2 : 5 },
        threshold: { value: (_b2 = options.threshold) != null ? _b2 : 0.03 },
        kSigma: { value: (_c = options.kSigma) != null ? _c : 1 },
        map: { value: options.map }
      },
      vertexShader: `
				varying vec2 vUv;
				void main() {
					vUv = uv;
					// NDC pass-through - matches DilationMaterial/CompositeMaterial.
					// Using projectionMatrix * modelViewMatrix with the default
					// OrthographicCamera (near=0.1) clips the z=0 quad and produces
					// no output, silently bypassing denoise.
					gl_Position = vec4( position, 1.0 );
				}
			`,
      fragmentShader: `
				//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				//  Copyright (c) 2018-2019 Michele Morrone
				//  https://github.com/BrutPitt/glslSmartDeNoise/  (BSD 2-Clause)
				//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				uniform sampler2D map;
				uniform float sigma;
				uniform float threshold;
				uniform float kSigma;
				varying vec2 vUv;
				#define INV_SQRT_OF_2PI 0.39894228040143267793994605993439
				#define INV_PI 0.31830988618379067153776752674503
				vec4 smartDeNoise( sampler2D tex, vec2 uv, float sigma, float kSigma, float threshold ) {
					float radius = round( kSigma * sigma );
					float radQ = radius * radius;
					float invSigmaQx2 = 0.5 / ( sigma * sigma );
					float invSigmaQx2PI = INV_PI * invSigmaQx2;
					float invThresholdSqx2 = 0.5 / ( threshold * threshold );
					float invThresholdSqrt2PI = INV_SQRT_OF_2PI / threshold;
					vec4 centrPx = texture2D( tex, uv );
					centrPx.rgb *= centrPx.a;
					float zBuff = 0.0;
					vec4 aBuff = vec4( 0.0 );
					vec2 size = vec2( textureSize( tex, 0 ) );
					vec2 d;
					for ( d.x = - radius; d.x <= radius; d.x ++ ) {
						float pt = sqrt( max( 0.0, radQ - d.x * d.x ) );
						for ( d.y = - pt; d.y <= pt; d.y ++ ) {
							float blurFactor = exp( - dot( d, d ) * invSigmaQx2 ) * invSigmaQx2PI;
							vec4 walkPx = texture2D( tex, uv + d / size );
							walkPx.rgb *= walkPx.a;
							vec4 dC = walkPx - centrPx;
							float deltaFactor = exp( - dot( dC.rgba, dC.rgba ) * invThresholdSqx2 ) * invThresholdSqrt2PI * blurFactor;
							zBuff += deltaFactor;
							aBuff += deltaFactor * walkPx;
						}
					}
					return aBuff / max( zBuff, 1.0e-5 );
				}
				void main() {
					// Internal RT pass: stay in linear space. Downstream MeshStandardMaterial.lightMap
					// expects linear; tonemapping/encoding fragments would double-encode.
					gl_FragColor = smartDeNoise( map, vec2( vUv.x, vUv.y ), sigma, kSigma, threshold );
				}
			`
    });
  }
}
const fsQuad = new Mesh(new PlaneGeometry(2, 2));
const fsCam$1 = new OrthographicCamera();
const runPostProcess = async (renderer, src, positions, resolution, opts, onProgress) => {
  var _a2, _b2, _c;
  const makeRT = () => new WebGLRenderTarget(resolution, resolution, {
    type: FloatType,
    minFilter: LinearFilter,
    magFilter: LinearFilter,
    generateMipmaps: false
  });
  const rtA = makeRT();
  const rtB = makeRT();
  const draw = (mat, target) => {
    const prevRT = renderer.getRenderTarget();
    try {
      fsQuad.material = mat;
      renderer.setRenderTarget(target);
      renderer.render(fsQuad, fsCam$1);
    } finally {
      renderer.setRenderTarget(prevRT);
    }
  };
  const dilate = new DilationMaterial({ positions, resolution });
  let read = rtA;
  let write = rtB;
  let input = src;
  const totalPasses = Math.max(0, opts.dilationIterations) + (opts.denoiseEnabled ? 1 : 0);
  let completedPasses = 0;
  const dilateMapU = dilate.uniforms.map;
  if (!dilateMapU)
    throw new Error("[baker] DilationMaterial missing `map` uniform");
  const dilateUseSourceAlphaU = dilate.uniforms.useSourceAlpha;
  if (!dilateUseSourceAlphaU)
    throw new Error("[baker] DilationMaterial missing `useSourceAlpha` uniform");
  for (let i = 0; i < Math.max(0, opts.dilationIterations); i++) {
    dilateMapU.value = input;
    dilateUseSourceAlphaU.value = i > 0;
    draw(dilate, write);
    input = write.texture;
    const tmp = read;
    read = write;
    write = tmp;
    completedPasses++;
    onProgress == null ? void 0 : onProgress(completedPasses / totalPasses);
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
  if (opts.denoiseEnabled) {
    const denoise = new DenoiseMaterial({
      map: input,
      sigma: opts.denoiseSigma,
      threshold: opts.denoiseThreshold,
      kSigma: opts.denoiseKSigma
    });
    draw(denoise, write);
    input = write.texture;
    denoise.dispose();
    const tmp = read;
    read = write;
    write = tmp;
    completedPasses++;
    onProgress == null ? void 0 : onProgress(completedPasses / totalPasses);
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
  dilate.dispose();
  const ranAny = opts.dilationIterations > 0 || opts.denoiseEnabled;
  const result = ranAny ? read.texture : src;
  if (ranAny) {
    const x = Math.max(0, Math.floor(resolution / 2) - 2);
    const buf = new Float32Array(4 * 4 * 4);
    renderer.readRenderTargetPixels(read, x, x, 4, 4, buf);
    let r = 0, g = 0, b = 0;
    for (let i = 0; i < 16; i++) {
      r += (_a2 = buf[i * 4]) != null ? _a2 : 0;
      g += (_b2 = buf[i * 4 + 1]) != null ? _b2 : 0;
      b += (_c = buf[i * 4 + 2]) != null ? _c : 0;
    }
  }
  return {
    texture: result,
    dispose: () => {
      rtA.dispose();
      rtB.dispose();
    }
  };
};
function mergeGeometries(geometries, useGroups = false) {
  const isIndexed = geometries[0].index !== null;
  const attributesUsed = new Set(Object.keys(geometries[0].attributes));
  const morphAttributesUsed = new Set(Object.keys(geometries[0].morphAttributes));
  const attributes = {};
  const morphAttributes = {};
  const morphTargetsRelative = geometries[0].morphTargetsRelative;
  const mergedGeometry = new BufferGeometry();
  let offset = 0;
  for (let i = 0; i < geometries.length; ++i) {
    const geometry = geometries[i];
    let attributesCount = 0;
    if (isIndexed !== (geometry.index !== null)) {
      console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");
      return null;
    }
    for (const name in geometry.attributes) {
      if (!attributesUsed.has(name)) {
        console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + '. All geometries must have compatible attributes; make sure "' + name + '" attribute exists among all geometries, or in none of them.');
        return null;
      }
      if (attributes[name] === void 0)
        attributes[name] = [];
      attributes[name].push(geometry.attributes[name]);
      attributesCount++;
    }
    if (attributesCount !== attributesUsed.size) {
      console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ". Make sure all geometries have the same number of attributes.");
      return null;
    }
    if (morphTargetsRelative !== geometry.morphTargetsRelative) {
      console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ". .morphTargetsRelative must be consistent throughout all geometries.");
      return null;
    }
    for (const name in geometry.morphAttributes) {
      if (!morphAttributesUsed.has(name)) {
        console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ".  .morphAttributes must be consistent throughout all geometries.");
        return null;
      }
      if (morphAttributes[name] === void 0)
        morphAttributes[name] = [];
      morphAttributes[name].push(geometry.morphAttributes[name]);
    }
    if (useGroups) {
      let count;
      if (isIndexed) {
        count = geometry.index.count;
      } else if (geometry.attributes.position !== void 0) {
        count = geometry.attributes.position.count;
      } else {
        console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ". The geometry must have either an index or a position attribute");
        return null;
      }
      mergedGeometry.addGroup(offset, count, i);
      offset += count;
    }
  }
  if (isIndexed) {
    let indexOffset = 0;
    const mergedIndex = [];
    for (let i = 0; i < geometries.length; ++i) {
      const index = geometries[i].index;
      for (let j = 0; j < index.count; ++j) {
        mergedIndex.push(index.getX(j) + indexOffset);
      }
      indexOffset += geometries[i].attributes.position.count;
    }
    mergedGeometry.setIndex(mergedIndex);
  }
  for (const name in attributes) {
    const mergedAttribute = mergeAttributes(attributes[name]);
    if (!mergedAttribute) {
      console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + name + " attribute.");
      return null;
    }
    mergedGeometry.setAttribute(name, mergedAttribute);
  }
  for (const name in morphAttributes) {
    const numMorphTargets = morphAttributes[name][0].length;
    if (numMorphTargets === 0)
      break;
    mergedGeometry.morphAttributes = mergedGeometry.morphAttributes || {};
    mergedGeometry.morphAttributes[name] = [];
    for (let i = 0; i < numMorphTargets; ++i) {
      const morphAttributesToMerge = [];
      for (let j = 0; j < morphAttributes[name].length; ++j) {
        morphAttributesToMerge.push(morphAttributes[name][j][i]);
      }
      const mergedMorphAttribute = mergeAttributes(morphAttributesToMerge);
      if (!mergedMorphAttribute) {
        console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + name + " morphAttribute.");
        return null;
      }
      mergedGeometry.morphAttributes[name].push(mergedMorphAttribute);
    }
  }
  return mergedGeometry;
}
function mergeAttributes(attributes) {
  let TypedArray;
  let itemSize;
  let normalized;
  let gpuType = -1;
  let arrayLength = 0;
  for (let i = 0; i < attributes.length; ++i) {
    const attribute = attributes[i];
    if (TypedArray === void 0)
      TypedArray = attribute.array.constructor;
    if (TypedArray !== attribute.array.constructor) {
      console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.");
      return null;
    }
    if (itemSize === void 0)
      itemSize = attribute.itemSize;
    if (itemSize !== attribute.itemSize) {
      console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.");
      return null;
    }
    if (normalized === void 0)
      normalized = attribute.normalized;
    if (normalized !== attribute.normalized) {
      console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.");
      return null;
    }
    if (gpuType === -1)
      gpuType = attribute.gpuType;
    if (gpuType !== attribute.gpuType) {
      console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.");
      return null;
    }
    arrayLength += attribute.count * itemSize;
  }
  const array = new TypedArray(arrayLength);
  const result = new BufferAttribute(array, itemSize, normalized);
  let offset = 0;
  for (let i = 0; i < attributes.length; ++i) {
    const attribute = attributes[i];
    if (attribute.isInterleavedBufferAttribute) {
      const tupleOffset = offset / itemSize;
      for (let j = 0, l = attribute.count; j < l; j++) {
        for (let c = 0; c < itemSize; c++) {
          const value = attribute.getComponent(j, c);
          result.setComponent(j + tupleOffset, c, value);
        }
      }
    } else {
      array.set(attribute.array, offset);
    }
    offset += attribute.count * itemSize;
  }
  if (gpuType !== void 0) {
    result.gpuType = gpuType;
  }
  return result;
}
function mergeVertices(geometry, tolerance = 1e-4) {
  tolerance = Math.max(tolerance, Number.EPSILON);
  const hashToIndex = {};
  const indices = geometry.getIndex();
  const positions = geometry.getAttribute("position");
  const vertexCount = indices ? indices.count : positions.count;
  let nextIndex = 0;
  const attributeNames = Object.keys(geometry.attributes);
  const tmpAttributes = {};
  const tmpMorphAttributes = {};
  const newIndices = [];
  const getters = ["getX", "getY", "getZ", "getW"];
  const setters = ["setX", "setY", "setZ", "setW"];
  for (let i = 0, l = attributeNames.length; i < l; i++) {
    const name = attributeNames[i];
    const attr = geometry.attributes[name];
    tmpAttributes[name] = new BufferAttribute(
      new attr.array.constructor(attr.count * attr.itemSize),
      attr.itemSize,
      attr.normalized
    );
    const morphAttr = geometry.morphAttributes[name];
    if (morphAttr) {
      tmpMorphAttributes[name] = new BufferAttribute(
        new morphAttr.array.constructor(morphAttr.count * morphAttr.itemSize),
        morphAttr.itemSize,
        morphAttr.normalized
      );
    }
  }
  const halfTolerance = tolerance * 0.5;
  const exponent = Math.log10(1 / tolerance);
  const hashMultiplier = Math.pow(10, exponent);
  const hashAdditive = halfTolerance * hashMultiplier;
  for (let i = 0; i < vertexCount; i++) {
    const index = indices ? indices.getX(i) : i;
    let hash = "";
    for (let j = 0, l = attributeNames.length; j < l; j++) {
      const name = attributeNames[j];
      const attribute = geometry.getAttribute(name);
      const itemSize = attribute.itemSize;
      for (let k = 0; k < itemSize; k++) {
        hash += `${~~(attribute[getters[k]](index) * hashMultiplier + hashAdditive)},`;
      }
    }
    if (hash in hashToIndex) {
      newIndices.push(hashToIndex[hash]);
    } else {
      for (let j = 0, l = attributeNames.length; j < l; j++) {
        const name = attributeNames[j];
        const attribute = geometry.getAttribute(name);
        const morphAttr = geometry.morphAttributes[name];
        const itemSize = attribute.itemSize;
        const newarray = tmpAttributes[name];
        const newMorphArrays = tmpMorphAttributes[name];
        for (let k = 0; k < itemSize; k++) {
          const getterFunc = getters[k];
          const setterFunc = setters[k];
          newarray[setterFunc](nextIndex, attribute[getterFunc](index));
          if (morphAttr) {
            for (let m = 0, ml = morphAttr.length; m < ml; m++) {
              newMorphArrays[m][setterFunc](nextIndex, morphAttr[m][getterFunc](index));
            }
          }
        }
      }
      hashToIndex[hash] = nextIndex;
      newIndices.push(nextIndex);
      nextIndex++;
    }
  }
  const result = geometry.clone();
  for (const name in geometry.attributes) {
    const tmpAttribute = tmpAttributes[name];
    result.setAttribute(name, new BufferAttribute(
      tmpAttribute.array.slice(0, nextIndex * tmpAttribute.itemSize),
      tmpAttribute.itemSize,
      tmpAttribute.normalized
    ));
    if (!(name in tmpMorphAttributes))
      continue;
    for (let j = 0; j < tmpMorphAttributes[name].length; j++) {
      const tmpMorphAttribute = tmpMorphAttributes[name][j];
      result.morphAttributes[name][j] = new BufferAttribute(
        tmpMorphAttribute.array.slice(0, nextIndex * tmpMorphAttribute.itemSize),
        tmpMorphAttribute.itemSize,
        tmpMorphAttribute.normalized
      );
    }
  }
  result.setIndex(newIndices);
  return result;
}
class BakeError extends Error {
  constructor(message, phase, meshName) {
    super(`[baker:${phase}] ${message}${meshName ? ` (mesh: ${meshName})` : ""}`);
    this.name = "BakeError";
    this.phase = phase;
    this.meshName = meshName;
  }
}
const KEPT_ATTRIBUTES = /* @__PURE__ */ new Set(["position", "normal", "uv", "uv2", "meshIndex"]);
const mergeGeometry = (meshes) => {
  const prepped = meshes.map((mesh, meshIdx) => {
    let g = mesh.geometry.clone();
    for (const name of Object.keys(g.attributes)) {
      if (!KEPT_ATTRIBUTES.has(name))
        g.deleteAttribute(name);
    }
    g.applyMatrix4(mesh.matrixWorld);
    if (!g.index)
      g = mergeVertices(g);
    const posAttr = g.attributes.position;
    if (!posAttr)
      throw new BakeError("mesh geometry has no position attribute", "geometry", mesh.name);
    const vCount = posAttr.count;
    const meshIdxArr = new Float32Array(vCount);
    meshIdxArr.fill(meshIdx);
    g.setAttribute("meshIndex", new BufferAttribute(meshIdxArr, 1));
    return g;
  });
  const merged = mergeGeometries(prepped);
  if (!merged) {
    const names = meshes.map((m, i) => m.name || `<unnamed#${i}>`).join(", ");
    throw new BakeError(
      `mergeGeometries returned null - incompatible attribute sets across meshes [${names}]`,
      "geometry"
    );
  }
  return merged;
};
const triangleCount = (mesh) => {
  const g = mesh.geometry;
  if (g.index)
    return g.index.count / 3;
  const pos = g.attributes.position;
  if (!pos)
    throw new BakeError("mesh geometry missing position attribute", "geometry", mesh.name);
  return pos.count / 3;
};
const WHITE_FALLBACK = { aR: 1, aG: 1, aB: 1, eR: 0, eG: 0, eB: 0 };
const readMaterialColors = (material) => {
  var _a2;
  if (Array.isArray(material)) {
    console.warn(
      "[baker] material array detected; using slot 0 only - per-face material groups not yet supported"
    );
    const slot0 = material[0];
    return slot0 ? readMaterialColors(slot0) : WHITE_FALLBACK;
  }
  const m = material;
  if ("emissive" in m && m.emissive) {
    const intensity = (_a2 = m.emissiveIntensity) != null ? _a2 : 1;
    return {
      aR: m.color.r,
      aG: m.color.g,
      aB: m.color.b,
      eR: m.emissive.r * intensity,
      eG: m.emissive.g * intensity,
      eB: m.emissive.b * intensity
    };
  }
  if ("color" in m && m.color) {
    return { aR: m.color.r, aG: m.color.g, aB: m.color.b, eR: 0, eG: 0, eB: 0 };
  }
  console.warn(
    "[baker] material has no .color (likely ShaderMaterial); defaulting to white albedo"
  );
  return WHITE_FALLBACK;
};
const extractPerTriangleMaterials = (merged, meshes) => {
  var _a2, _b2, _c;
  const indexAttr = merged.index;
  if (!indexAttr) {
    throw new BakeError(
      "mergeGeometry must produce an indexed geometry; got non-indexed",
      "geometry"
    );
  }
  const meshIdxAttr = merged.attributes.meshIndex;
  if (!meshIdxAttr) {
    throw new BakeError(
      "merged geometry is missing 'meshIndex' attribute - did mergeGeometry skip the per-vertex tag?",
      "geometry"
    );
  }
  const perMeshTriangleCounts = meshes.map(triangleCount);
  const totalTriangles = indexAttr.count / 3;
  const albedo = new Float32Array(totalTriangles * 3);
  const emissive = new Float32Array(totalTriangles * 3);
  const meshColors = meshes.map((m) => readMaterialColors(m.material));
  const indexArr = indexAttr.array;
  const meshIdxArr = meshIdxAttr.array;
  for (let tri = 0; tri < totalTriangles; tri++) {
    const v02 = (_a2 = indexArr[tri * 3]) != null ? _a2 : 0;
    const meshIdx = ((_b2 = meshIdxArr[v02]) != null ? _b2 : 0) | 0;
    const c = (_c = meshColors[meshIdx]) != null ? _c : WHITE_FALLBACK;
    const o = tri * 3;
    albedo[o] = c.aR;
    albedo[o + 1] = c.aG;
    albedo[o + 2] = c.aB;
    emissive[o] = c.eR;
    emissive[o + 1] = c.eG;
    emissive[o + 2] = c.eB;
  }
  return { albedo, emissive, totalTriangles, perMeshTriangleCounts };
};
const makeTexture = (data, side) => {
  const tex = new DataTexture(data, side, side, RGBAFormat, FloatType);
  tex.minFilter = NearestFilter;
  tex.magFilter = NearestFilter;
  tex.wrapS = ClampToEdgeWrapping;
  tex.wrapT = ClampToEdgeWrapping;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
};
const buildMaterialTextures = (perTri) => {
  var _a2, _b2, _c, _d, _e, _f;
  const N = perTri.totalTriangles;
  const side = Math.max(1, Math.ceil(Math.sqrt(N)));
  const texelCount = side * side;
  const albedoData = new Float32Array(texelCount * 4);
  const emissiveData = new Float32Array(texelCount * 4);
  for (let i = 0; i < N; i++) {
    const src = i * 3;
    const dst = i * 4;
    albedoData[dst] = (_a2 = perTri.albedo[src]) != null ? _a2 : 0;
    albedoData[dst + 1] = (_b2 = perTri.albedo[src + 1]) != null ? _b2 : 0;
    albedoData[dst + 2] = (_c = perTri.albedo[src + 2]) != null ? _c : 0;
    albedoData[dst + 3] = 1;
    emissiveData[dst] = (_d = perTri.emissive[src]) != null ? _d : 0;
    emissiveData[dst + 1] = (_e = perTri.emissive[src + 1]) != null ? _e : 0;
    emissiveData[dst + 2] = (_f = perTri.emissive[src + 2]) != null ? _f : 0;
    emissiveData[dst + 3] = 1;
  }
  return {
    albedoTexture: makeTexture(albedoData, side),
    emissiveTexture: makeTexture(emissiveData, side),
    side
  };
};
/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/
var durl = function(c) {
  return URL.createObjectURL(new Blob([c], { type: "text/javascript" }));
};
try {
  URL.revokeObjectURL(durl(""));
} catch (e) {
  durl = function(c) {
    return "data:application/javascript;charset=UTF-8," + encodeURI(c);
  };
}
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i = 0; i < 31; ++i) {
    b[i] = start += 1 << eb[i - 1];
  }
  var r = new u32(b[30]);
  for (var i = 1; i < 30; ++i) {
    for (var j = b[i]; j < b[i + 1]; ++j) {
      r[j] = j - b[i] << 5 | i;
    }
  }
  return [b, r];
};
var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), revfd = _b[1];
var rev = new u16(32768);
for (var i = 0; i < 32768; ++i) {
  var x = (i & 43690) >>> 1 | (i & 21845) << 1;
  x = (x & 52428) >>> 2 | (x & 13107) << 2;
  x = (x & 61680) >>> 4 | (x & 3855) << 4;
  rev[i] = ((x & 65280) >>> 8 | (x & 255) << 8) >>> 1;
}
var hMap = function(cd, mb, r) {
  var s = cd.length;
  var i = 0;
  var l = new u16(mb);
  for (; i < s; ++i)
    ++l[cd[i] - 1];
  var le = new u16(mb);
  for (i = 0; i < mb; ++i) {
    le[i] = le[i - 1] + l[i - 1] << 1;
  }
  var co;
  if (r) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        var sv = i << 4 | cd[i];
        var r_1 = mb - cd[i];
        var v = le[cd[i] - 1]++ << r_1;
        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
          co[rev[v] >>> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        co[i] = rev[le[cd[i] - 1]++] >>> 15 - cd[i];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (var i = 0; i < 144; ++i)
  flt[i] = 8;
for (var i = 144; i < 256; ++i)
  flt[i] = 9;
for (var i = 256; i < 280; ++i)
  flt[i] = 7;
for (var i = 280; i < 288; ++i)
  flt[i] = 8;
var fdt = new u8(32);
for (var i = 0; i < 32; ++i)
  fdt[i] = 5;
var flm = /* @__PURE__ */ hMap(flt, 9, 0);
var fdm = /* @__PURE__ */ hMap(fdt, 5, 0);
var shft = function(p) {
  return (p / 8 | 0) + (p & 7 && 1);
};
var slc = function(v, s, e) {
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
  n.set(v.subarray(s, e));
  return n;
};
var wbits = function(d, p, v) {
  v <<= p & 7;
  var o = p / 8 | 0;
  d[o] |= v;
  d[o + 1] |= v >>> 8;
};
var wbits16 = function(d, p, v) {
  v <<= p & 7;
  var o = p / 8 | 0;
  d[o] |= v;
  d[o + 1] |= v >>> 8;
  d[o + 2] |= v >>> 16;
};
var hTree = function(d, mb) {
  var t = [];
  for (var i = 0; i < d.length; ++i) {
    if (d[i])
      t.push({ s: i, f: d[i] });
  }
  var s = t.length;
  var t2 = t.slice();
  if (!s)
    return [et, 0];
  if (s == 1) {
    var v = new u8(t[0].s + 1);
    v[t[0].s] = 1;
    return [v, 1];
  }
  t.sort(function(a, b) {
    return a.f - b.f;
  });
  t.push({ s: -1, f: 25001 });
  var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
  t[0] = { s: -1, f: l.f + r.f, l, r };
  while (i1 != s - 1) {
    l = t[t[i0].f < t[i2].f ? i0++ : i2++];
    r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
    t[i1++] = { s: -1, f: l.f + r.f, l, r };
  }
  var maxSym = t2[0].s;
  for (var i = 1; i < s; ++i) {
    if (t2[i].s > maxSym)
      maxSym = t2[i].s;
  }
  var tr = new u16(maxSym + 1);
  var mbt = ln(t[i1 - 1], tr, 0);
  if (mbt > mb) {
    var i = 0, dt = 0;
    var lft = mbt - mb, cst = 1 << lft;
    t2.sort(function(a, b) {
      return tr[b.s] - tr[a.s] || a.f - b.f;
    });
    for (; i < s; ++i) {
      var i2_1 = t2[i].s;
      if (tr[i2_1] > mb) {
        dt += cst - (1 << mbt - tr[i2_1]);
        tr[i2_1] = mb;
      } else
        break;
    }
    dt >>>= lft;
    while (dt > 0) {
      var i2_2 = t2[i].s;
      if (tr[i2_2] < mb)
        dt -= 1 << mb - tr[i2_2]++ - 1;
      else
        ++i;
    }
    for (; i >= 0 && dt; --i) {
      var i2_3 = t2[i].s;
      if (tr[i2_3] == mb) {
        --tr[i2_3];
        ++dt;
      }
    }
    mbt = mb;
  }
  return [new u8(tr), mbt];
};
var ln = function(n, l, d) {
  return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
};
var lc = function(c) {
  var s = c.length;
  while (s && !c[--s])
    ;
  var cl = new u16(++s);
  var cli = 0, cln = c[0], cls = 1;
  var w = function(v) {
    cl[cli++] = v;
  };
  for (var i = 1; i <= s; ++i) {
    if (c[i] == cln && i != s)
      ++cls;
    else {
      if (!cln && cls > 2) {
        for (; cls > 138; cls -= 138)
          w(32754);
        if (cls > 2) {
          w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
          cls = 0;
        }
      } else if (cls > 3) {
        w(cln), --cls;
        for (; cls > 6; cls -= 6)
          w(8304);
        if (cls > 2)
          w(cls - 3 << 5 | 8208), cls = 0;
      }
      while (cls--)
        w(cln);
      cls = 1;
      cln = c[i];
    }
  }
  return [cl.subarray(0, cli), s];
};
var clen = function(cf, cl) {
  var l = 0;
  for (var i = 0; i < cl.length; ++i)
    l += cf[i] * cl[i];
  return l;
};
var wfblk = function(out, pos, dat) {
  var s = dat.length;
  var o = shft(pos + 2);
  out[o] = s & 255;
  out[o + 1] = s >>> 8;
  out[o + 2] = out[o] ^ 255;
  out[o + 3] = out[o + 1] ^ 255;
  for (var i = 0; i < s; ++i)
    out[o + i + 4] = dat[i];
  return (o + 4 + s) * 8;
};
var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
  wbits(out, p++, final);
  ++lf[256];
  var _a2 = hTree(lf, 15), dlt = _a2[0], mlb = _a2[1];
  var _b2 = hTree(df, 15), ddt = _b2[0], mdb = _b2[1];
  var _c = lc(dlt), lclt = _c[0], nlc = _c[1];
  var _d = lc(ddt), lcdt = _d[0], ndc = _d[1];
  var lcfreq = new u16(19);
  for (var i = 0; i < lclt.length; ++i)
    lcfreq[lclt[i] & 31]++;
  for (var i = 0; i < lcdt.length; ++i)
    lcfreq[lcdt[i] & 31]++;
  var _e = hTree(lcfreq, 7), lct = _e[0], mlcb = _e[1];
  var nlcc = 19;
  for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
    ;
  var flen = bl + 5 << 3;
  var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
  var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
  if (flen <= ftlen && flen <= dtlen)
    return wfblk(out, p, dat.subarray(bs, bs + bl));
  var lm, ll, dm, dl;
  wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
  if (dtlen < ftlen) {
    lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
    var llm = hMap(lct, mlcb, 0);
    wbits(out, p, nlc - 257);
    wbits(out, p + 5, ndc - 1);
    wbits(out, p + 10, nlcc - 4);
    p += 14;
    for (var i = 0; i < nlcc; ++i)
      wbits(out, p + 3 * i, lct[clim[i]]);
    p += 3 * nlcc;
    var lcts = [lclt, lcdt];
    for (var it = 0; it < 2; ++it) {
      var clct = lcts[it];
      for (var i = 0; i < clct.length; ++i) {
        var len = clct[i] & 31;
        wbits(out, p, llm[len]), p += lct[len];
        if (len > 15)
          wbits(out, p, clct[i] >>> 5 & 127), p += clct[i] >>> 12;
      }
    }
  } else {
    lm = flm, ll = flt, dm = fdm, dl = fdt;
  }
  for (var i = 0; i < li; ++i) {
    if (syms[i] > 255) {
      var len = syms[i] >>> 18 & 31;
      wbits16(out, p, lm[len + 257]), p += ll[len + 257];
      if (len > 7)
        wbits(out, p, syms[i] >>> 23 & 31), p += fleb[len];
      var dst = syms[i] & 31;
      wbits16(out, p, dm[dst]), p += dl[dst];
      if (dst > 3)
        wbits16(out, p, syms[i] >>> 5 & 8191), p += fdeb[dst];
    } else {
      wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];
    }
  }
  wbits16(out, p, lm[256]);
  return p + ll[256];
};
var deo = /* @__PURE__ */ new u32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
var et = /* @__PURE__ */ new u8(0);
var dflt = function(dat, lvl, plvl, pre, post, lst) {
  var s = dat.length;
  var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7e3)) + post);
  var w = o.subarray(pre, o.length - post);
  var pos = 0;
  if (!lvl || s < 8) {
    for (var i = 0; i <= s; i += 65535) {
      var e = i + 65535;
      if (e < s) {
        pos = wfblk(w, pos, dat.subarray(i, e));
      } else {
        w[i] = lst;
        pos = wfblk(w, pos, dat.subarray(i, s));
      }
    }
  } else {
    var opt = deo[lvl - 1];
    var n = opt >>> 13, c = opt & 8191;
    var msk_1 = (1 << plvl) - 1;
    var prev = new u16(32768), head = new u16(msk_1 + 1);
    var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
    var hsh = function(i2) {
      return (dat[i2] ^ dat[i2 + 1] << bs1_1 ^ dat[i2 + 2] << bs2_1) & msk_1;
    };
    var syms = new u32(25e3);
    var lf = new u16(288), df = new u16(32);
    var lc_1 = 0, eb = 0, i = 0, li = 0, wi = 0, bs = 0;
    for (; i < s; ++i) {
      var hv = hsh(i);
      var imod = i & 32767, pimod = head[hv];
      prev[imod] = pimod;
      head[hv] = imod;
      if (wi <= i) {
        var rem = s - i;
        if ((lc_1 > 7e3 || li > 24576) && rem > 423) {
          pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
          li = lc_1 = eb = 0, bs = i;
          for (var j = 0; j < 286; ++j)
            lf[j] = 0;
          for (var j = 0; j < 30; ++j)
            df[j] = 0;
        }
        var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
        if (rem > 2 && hv == hsh(i - dif)) {
          var maxn = Math.min(n, rem) - 1;
          var maxd = Math.min(32767, i);
          var ml = Math.min(258, rem);
          while (dif <= maxd && --ch_1 && imod != pimod) {
            if (dat[i + l] == dat[i + l - dif]) {
              var nl = 0;
              for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                ;
              if (nl > l) {
                l = nl, d = dif;
                if (nl > maxn)
                  break;
                var mmd = Math.min(dif, nl - 2);
                var md = 0;
                for (var j = 0; j < mmd; ++j) {
                  var ti = i - dif + j + 32768 & 32767;
                  var pti = prev[ti];
                  var cd = ti - pti + 32768 & 32767;
                  if (cd > md)
                    md = cd, pimod = ti;
                }
              }
            }
            imod = pimod, pimod = prev[imod];
            dif += imod - pimod + 32768 & 32767;
          }
        }
        if (d) {
          syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
          var lin = revfl[l] & 31, din = revfd[d] & 31;
          eb += fleb[lin] + fdeb[din];
          ++lf[257 + lin];
          ++df[din];
          wi = i + l;
          ++lc_1;
        } else {
          syms[li++] = dat[i];
          ++lf[dat[i]];
        }
      }
    }
    pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
    if (!lst && pos & 7)
      pos = wfblk(w, pos + 1, et);
  }
  return slc(o, 0, pre + shft(pos) + post);
};
var adler = function() {
  var a = 1, b = 0;
  return {
    p: function(d) {
      var n = a, m = b;
      var l = d.length;
      for (var i = 0; i != l; ) {
        var e = Math.min(i + 2655, l);
        for (; i < e; ++i)
          m += n += d[i];
        n = (n & 65535) + 15 * (n >> 16), m = (m & 65535) + 15 * (m >> 16);
      }
      a = n, b = m;
    },
    d: function() {
      a %= 65521, b %= 65521;
      return (a & 255) << 24 | a >>> 8 << 16 | (b & 255) << 8 | b >>> 8;
    }
  };
};
var dopt = function(dat, opt, pre, post, st) {
  return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 12 + opt.mem, pre, post, !st);
};
var wbytes = function(d, b, v) {
  for (; v; ++b)
    d[b] = v, v >>>= 8;
};
var zlh = function(c, o) {
  var lv = o.level, fl2 = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
  c[0] = 120, c[1] = fl2 << 6 | (fl2 ? 32 - 2 * fl2 : 1);
};
function zlibSync(data, opts) {
  if (!opts)
    opts = {};
  var a = adler();
  a.p(data);
  var d = dopt(data, opts, 2, 4);
  return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
}
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e) {
}
const textEncoder = new TextEncoder();
const ZIP_COMPRESSION = 3;
class EXRExporter {
  parse(arg1, arg2, arg3) {
    if (!arg1 || !(arg1.isWebGLRenderer || arg1.isDataTexture)) {
      throw Error("EXRExporter.parse: Unsupported first parameter, expected instance of WebGLRenderer or DataTexture.");
    } else if (arg1.isWebGLRenderer) {
      const renderer = arg1, renderTarget = arg2, options = arg3;
      supportedRTT(renderTarget);
      const info = buildInfoRTT(renderTarget, options), dataBuffer = getPixelData(renderer, renderTarget, info), rawContentBuffer = reorganizeDataBuffer(dataBuffer, info), chunks = compressData(rawContentBuffer, info);
      return fillData(chunks, info);
    } else if (arg1.isDataTexture) {
      const texture = arg1, options = arg2;
      supportedDT(texture);
      const info = buildInfoDT(texture, options), dataBuffer = texture.image.data, rawContentBuffer = reorganizeDataBuffer(dataBuffer, info), chunks = compressData(rawContentBuffer, info);
      return fillData(chunks, info);
    }
  }
}
function supportedRTT(renderTarget) {
  if (!renderTarget || !renderTarget.isWebGLRenderTarget) {
    throw Error("EXRExporter.parse: Unsupported second parameter, expected instance of WebGLRenderTarget.");
  }
  if (renderTarget.isWebGLCubeRenderTarget || renderTarget.isWebGL3DRenderTarget || renderTarget.isWebGLArrayRenderTarget) {
    throw Error("EXRExporter.parse: Unsupported render target type, expected instance of WebGLRenderTarget.");
  }
  if (renderTarget.texture.type !== FloatType && renderTarget.texture.type !== HalfFloatType) {
    throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture type.");
  }
  if (renderTarget.texture.format !== RGBAFormat) {
    throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture format, expected RGBAFormat.");
  }
}
function supportedDT(texture) {
  if (texture.type !== FloatType && texture.type !== HalfFloatType) {
    throw Error("EXRExporter.parse: Unsupported DataTexture texture type.");
  }
  if (texture.format !== RGBAFormat) {
    throw Error("EXRExporter.parse: Unsupported DataTexture texture format, expected RGBAFormat.");
  }
  if (!texture.image.data) {
    throw Error("EXRExporter.parse: Invalid DataTexture image data.");
  }
  if (texture.type === FloatType && texture.image.data.constructor.name !== "Float32Array") {
    throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Float32Array'.");
  }
  if (texture.type === HalfFloatType && texture.image.data.constructor.name !== "Uint16Array") {
    throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Uint16Array'.");
  }
}
function buildInfoRTT(renderTarget, options = {}) {
  const compressionSizes = {
    0: 1,
    2: 1,
    3: 16
  };
  const WIDTH = renderTarget.width, HEIGHT = renderTarget.height, TYPE = renderTarget.texture.type, FORMAT = renderTarget.texture.format, COMPRESSION = options.compression !== void 0 ? options.compression : ZIP_COMPRESSION, EXPORTER_TYPE = options.type !== void 0 ? options.type : HalfFloatType, OUT_TYPE = EXPORTER_TYPE === FloatType ? 2 : 1, COMPRESSION_SIZE = compressionSizes[COMPRESSION], NUM_CHANNELS = 4;
  return {
    width: WIDTH,
    height: HEIGHT,
    type: TYPE,
    format: FORMAT,
    compression: COMPRESSION,
    blockLines: COMPRESSION_SIZE,
    dataType: OUT_TYPE,
    dataSize: 2 * OUT_TYPE,
    numBlocks: Math.ceil(HEIGHT / COMPRESSION_SIZE),
    numInputChannels: 4,
    numOutputChannels: NUM_CHANNELS
  };
}
function buildInfoDT(texture, options = {}) {
  const compressionSizes = {
    0: 1,
    2: 1,
    3: 16
  };
  const WIDTH = texture.image.width, HEIGHT = texture.image.height, TYPE = texture.type, FORMAT = texture.format, COMPRESSION = options.compression !== void 0 ? options.compression : ZIP_COMPRESSION, EXPORTER_TYPE = options.type !== void 0 ? options.type : HalfFloatType, OUT_TYPE = EXPORTER_TYPE === FloatType ? 2 : 1, COMPRESSION_SIZE = compressionSizes[COMPRESSION], NUM_CHANNELS = 4;
  return {
    width: WIDTH,
    height: HEIGHT,
    type: TYPE,
    format: FORMAT,
    compression: COMPRESSION,
    blockLines: COMPRESSION_SIZE,
    dataType: OUT_TYPE,
    dataSize: 2 * OUT_TYPE,
    numBlocks: Math.ceil(HEIGHT / COMPRESSION_SIZE),
    numInputChannels: 4,
    numOutputChannels: NUM_CHANNELS
  };
}
function getPixelData(renderer, rtt, info) {
  let dataBuffer;
  if (info.type === FloatType) {
    dataBuffer = new Float32Array(info.width * info.height * info.numInputChannels);
  } else {
    dataBuffer = new Uint16Array(info.width * info.height * info.numInputChannels);
  }
  renderer.readRenderTargetPixels(rtt, 0, 0, info.width, info.height, dataBuffer);
  return dataBuffer;
}
function reorganizeDataBuffer(inBuffer, info) {
  const w = info.width, h = info.height, dec = { r: 0, g: 0, b: 0, a: 0 }, offset = { value: 0 }, cOffset = info.numOutputChannels == 4 ? 1 : 0, getValue = info.type == FloatType ? getFloat32 : getFloat16, setValue = info.dataType == 1 ? setFloat16 : setFloat32, outBuffer = new Uint8Array(info.width * info.height * info.numOutputChannels * info.dataSize), dv = new DataView(outBuffer.buffer);
  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      const i = y * w * 4 + x * 4;
      const r = getValue(inBuffer, i);
      const g = getValue(inBuffer, i + 1);
      const b = getValue(inBuffer, i + 2);
      const a = getValue(inBuffer, i + 3);
      const line = (h - y - 1) * w * (3 + cOffset) * info.dataSize;
      decodeLinear(dec, r, g, b, a);
      offset.value = line + x * info.dataSize;
      setValue(dv, dec.a, offset);
      offset.value = line + cOffset * w * info.dataSize + x * info.dataSize;
      setValue(dv, dec.b, offset);
      offset.value = line + (1 + cOffset) * w * info.dataSize + x * info.dataSize;
      setValue(dv, dec.g, offset);
      offset.value = line + (2 + cOffset) * w * info.dataSize + x * info.dataSize;
      setValue(dv, dec.r, offset);
    }
  }
  return outBuffer;
}
function compressData(inBuffer, info) {
  let compress, tmpBuffer, sum = 0;
  const chunks = { data: new Array(), totalSize: 0 }, size = info.width * info.numOutputChannels * info.blockLines * info.dataSize;
  switch (info.compression) {
    case 0:
      compress = compressNONE;
      break;
    case 2:
    case 3:
      compress = compressZIP;
      break;
  }
  if (info.compression !== 0) {
    tmpBuffer = new Uint8Array(size);
  }
  for (let i = 0; i < info.numBlocks; ++i) {
    const arr = inBuffer.subarray(size * i, size * (i + 1));
    const block = compress(arr, tmpBuffer);
    sum += block.length;
    chunks.data.push({ dataChunk: block, size: block.length });
  }
  chunks.totalSize = sum;
  return chunks;
}
function compressNONE(data) {
  return data;
}
function compressZIP(data, tmpBuffer) {
  let t1 = 0, t2 = Math.floor((data.length + 1) / 2), s = 0;
  const stop = data.length - 1;
  while (true) {
    if (s > stop)
      break;
    tmpBuffer[t1++] = data[s++];
    if (s > stop)
      break;
    tmpBuffer[t2++] = data[s++];
  }
  let p = tmpBuffer[0];
  for (let t = 1; t < tmpBuffer.length; t++) {
    const d = tmpBuffer[t] - p + (128 + 256);
    p = tmpBuffer[t];
    tmpBuffer[t] = d;
  }
  const deflate = zlibSync(tmpBuffer);
  return deflate;
}
function fillHeader(outBuffer, chunks, info) {
  const offset = { value: 0 };
  const dv = new DataView(outBuffer.buffer);
  setUint32(dv, 20000630, offset);
  setUint32(dv, 2, offset);
  setString(dv, "compression", offset);
  setString(dv, "compression", offset);
  setUint32(dv, 1, offset);
  setUint8(dv, info.compression, offset);
  setString(dv, "screenWindowCenter", offset);
  setString(dv, "v2f", offset);
  setUint32(dv, 8, offset);
  setUint32(dv, 0, offset);
  setUint32(dv, 0, offset);
  setString(dv, "screenWindowWidth", offset);
  setString(dv, "float", offset);
  setUint32(dv, 4, offset);
  setFloat32(dv, 1, offset);
  setString(dv, "pixelAspectRatio", offset);
  setString(dv, "float", offset);
  setUint32(dv, 4, offset);
  setFloat32(dv, 1, offset);
  setString(dv, "lineOrder", offset);
  setString(dv, "lineOrder", offset);
  setUint32(dv, 1, offset);
  setUint8(dv, 0, offset);
  setString(dv, "dataWindow", offset);
  setString(dv, "box2i", offset);
  setUint32(dv, 16, offset);
  setUint32(dv, 0, offset);
  setUint32(dv, 0, offset);
  setUint32(dv, info.width - 1, offset);
  setUint32(dv, info.height - 1, offset);
  setString(dv, "displayWindow", offset);
  setString(dv, "box2i", offset);
  setUint32(dv, 16, offset);
  setUint32(dv, 0, offset);
  setUint32(dv, 0, offset);
  setUint32(dv, info.width - 1, offset);
  setUint32(dv, info.height - 1, offset);
  setString(dv, "channels", offset);
  setString(dv, "chlist", offset);
  setUint32(dv, info.numOutputChannels * 18 + 1, offset);
  setString(dv, "A", offset);
  setUint32(dv, info.dataType, offset);
  offset.value += 4;
  setUint32(dv, 1, offset);
  setUint32(dv, 1, offset);
  setString(dv, "B", offset);
  setUint32(dv, info.dataType, offset);
  offset.value += 4;
  setUint32(dv, 1, offset);
  setUint32(dv, 1, offset);
  setString(dv, "G", offset);
  setUint32(dv, info.dataType, offset);
  offset.value += 4;
  setUint32(dv, 1, offset);
  setUint32(dv, 1, offset);
  setString(dv, "R", offset);
  setUint32(dv, info.dataType, offset);
  offset.value += 4;
  setUint32(dv, 1, offset);
  setUint32(dv, 1, offset);
  setUint8(dv, 0, offset);
  setUint8(dv, 0, offset);
  let sum = offset.value + info.numBlocks * 8;
  for (let i = 0; i < chunks.data.length; ++i) {
    setUint64(dv, sum, offset);
    sum += chunks.data[i].size + 8;
  }
}
function fillData(chunks, info) {
  const TableSize = info.numBlocks * 8, HeaderSize = 259 + 18 * info.numOutputChannels, offset = { value: HeaderSize + TableSize }, outBuffer = new Uint8Array(HeaderSize + TableSize + chunks.totalSize + info.numBlocks * 8), dv = new DataView(outBuffer.buffer);
  fillHeader(outBuffer, chunks, info);
  for (let i = 0; i < chunks.data.length; ++i) {
    const data = chunks.data[i].dataChunk;
    const size = chunks.data[i].size;
    setUint32(dv, i * info.blockLines, offset);
    setUint32(dv, size, offset);
    outBuffer.set(data, offset.value);
    offset.value += size;
  }
  return outBuffer;
}
function decodeLinear(dec, r, g, b, a) {
  dec.r = r;
  dec.g = g;
  dec.b = b;
  dec.a = a;
}
function setUint8(dv, value, offset) {
  dv.setUint8(offset.value, value);
  offset.value += 1;
}
function setUint32(dv, value, offset) {
  dv.setUint32(offset.value, value, true);
  offset.value += 4;
}
function setFloat16(dv, value, offset) {
  dv.setUint16(offset.value, DataUtils.toHalfFloat(value), true);
  offset.value += 2;
}
function setFloat32(dv, value, offset) {
  dv.setFloat32(offset.value, value, true);
  offset.value += 4;
}
function setUint64(dv, value, offset) {
  dv.setBigUint64(offset.value, BigInt(value), true);
  offset.value += 8;
}
function setString(dv, string, offset) {
  const tmp = textEncoder.encode(string + "\0");
  for (let i = 0; i < tmp.length; ++i) {
    setUint8(dv, tmp[i], offset);
  }
}
function decodeFloat16(binary) {
  const exponent = (binary & 31744) >> 10, fraction = binary & 1023;
  return (binary >> 15 ? -1 : 1) * (exponent ? exponent === 31 ? fraction ? NaN : Infinity : Math.pow(2, exponent - 15) * (1 + fraction / 1024) : 6103515625e-14 * (fraction / 1024));
}
function getFloat16(arr, i) {
  return decodeFloat16(arr[i]);
}
function getFloat32(arr, i) {
  return arr[i];
}
const _quad = new Mesh(new PlaneGeometry(2, 2));
const _cam = new OrthographicCamera();
const _passMat = new ShaderMaterial({
  glslVersion: GLSL3,
  blending: NoBlending,
  transparent: false,
  depthWrite: false,
  depthTest: false,
  uniforms: { map: { value: null } },
  vertexShader: `
        out vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
        }
    `,
  fragmentShader: `
        uniform sampler2D map;
        in vec2 vUv;
        out vec4 fragColor;
        void main() {
            fragColor = texture(map, vUv);
        }
    `
});
function renderToRT(renderer, source, resolution) {
  const rt = new WebGLRenderTarget(resolution, resolution, {
    type: FloatType,
    minFilter: LinearFilter,
    magFilter: LinearFilter
  });
  const mapU = _passMat.uniforms.map;
  if (!mapU)
    throw new Error("[baker] export passthrough material missing `map` uniform");
  mapU.value = source;
  _quad.material = _passMat;
  const prevRT = renderer.getRenderTarget();
  const prevAutoClear = renderer.autoClear;
  try {
    renderer.autoClear = true;
    renderer.setRenderTarget(rt);
    renderer.render(_quad, _cam);
  } finally {
    renderer.setRenderTarget(prevRT);
    renderer.autoClear = prevAutoClear;
  }
  return rt;
}
function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 0);
}
const ensureExt = (name, ext) => name.toLowerCase().endsWith(`.${ext}`) ? name : `${name}.${ext}`;
async function exportPNG(renderer, source, resolution, filename) {
  var _a2, _b2, _c;
  const rt = renderToRT(renderer, source, resolution);
  const float = new Float32Array(resolution * resolution * 4);
  renderer.readRenderTargetPixels(rt, 0, 0, resolution, resolution, float);
  rt.dispose();
  const u82 = new Uint8ClampedArray(resolution * resolution * 4);
  for (let y = 0; y < resolution; y++) {
    const srcRow = (resolution - 1 - y) * resolution * 4;
    const dstRow = y * resolution * 4;
    for (let x = 0; x < resolution; x++) {
      const si = srcRow + x * 4;
      const di = dstRow + x * 4;
      const r = Math.max((_a2 = float[si]) != null ? _a2 : 0, 0);
      const g = Math.max((_b2 = float[si + 1]) != null ? _b2 : 0, 0);
      const b = Math.max((_c = float[si + 2]) != null ? _c : 0, 0);
      u82[di] = Math.pow(r / (1 + r), 1 / 2.2) * 255;
      u82[di + 1] = Math.pow(g / (1 + g), 1 / 2.2) * 255;
      u82[di + 2] = Math.pow(b / (1 + b), 1 / 2.2) * 255;
      u82[di + 3] = 255;
    }
  }
  const canvas = document.createElement("canvas");
  canvas.width = resolution;
  canvas.height = resolution;
  const ctx = canvas.getContext("2d");
  if (!ctx)
    throw new Error("exportPNG: 2D context unavailable");
  ctx.putImageData(new ImageData(u82, resolution, resolution), 0, 0);
  await new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("exportPNG: toBlob returned null"));
        return;
      }
      triggerDownload(blob, ensureExt(filename, "png"));
      resolve();
    }, "image/png");
  });
}
function exportEXR(renderer, source, resolution, filename) {
  const rt = renderToRT(renderer, source, resolution);
  const buffer = new EXRExporter().parse(renderer, rt);
  rt.dispose();
  triggerDownload(new Blob([buffer], { type: "image/x-exr" }), ensureExt(filename, "exr"));
}
function exportRaw(renderer, source, resolution, filename) {
  const rt = renderToRT(renderer, source, resolution);
  const float = new Float32Array(resolution * resolution * 4);
  renderer.readRenderTargetPixels(rt, 0, 0, resolution, resolution, float);
  rt.dispose();
  triggerDownload(
    new Blob([float.buffer], { type: "application/octet-stream" }),
    ensureExt(filename, "bin")
  );
}
async function exportLightmap(renderer, source, resolution, filename, format) {
  switch (format) {
    case "png":
      await exportPNG(renderer, source, resolution, filename);
      return;
    case "exr":
      exportEXR(renderer, source, resolution, filename);
      return;
    case "bin":
      exportRaw(renderer, source, resolution, filename);
      return;
  }
}
const HEADER_HEIGHT = 22;
class AtlasViewer {
  constructor(opts = {}) {
    var _a2, _b2, _c, _d;
    this.visible = true;
    this.collapsed = false;
    this.headerEl = null;
    this.layerLabel = "";
    this.textures = null;
    this.prevScissor = new Vector4();
    this.prevViewport = new Vector4();
    this.size = (_a2 = opts.size) != null ? _a2 : 256;
    this.margin = (_b2 = opts.margin) != null ? _b2 : 20;
    this.corner = (_c = opts.corner) != null ? _c : "br";
    this.mat = new ShaderMaterial({
      glslVersion: GLSL3,
      blending: NoBlending,
      transparent: false,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        map: { value: null },
        sRGB: { value: (_d = opts.sRGB) != null ? _d : true },
        border: { value: 6e-3 }
      },
      vertexShader: `
                out vec2 vUv;
                void main() {
                    vUv = uv;
                    // NDC pass-through - bypass camera matrices to dodge the
                    // default-near-plane clipping that bit DenoiseMaterial.
                    gl_Position = vec4(position, 1.0);
                }
            `,
      fragmentShader: `
                uniform sampler2D map;
                uniform bool sRGB;
                uniform float border;
                in vec2 vUv;
                out vec4 fragColor;
                void main() {
                    // Thin light frame so the panel reads against any 3D background.
                    if (vUv.x < border || vUv.x > 1.0 - border ||
                        vUv.y < border || vUv.y > 1.0 - border) {
                        fragColor = vec4(0.85, 0.85, 0.85, 1.0);
                        return;
                    }
                    vec4 t = texture(map, vUv);
                    vec3 c = max(t.rgb, vec3(0.0));
                    if (sRGB) c = pow(c, vec3(1.0 / 2.2));
                    fragColor = vec4(c, 1.0);
                }
            `
    });
    this.scene = new Scene();
    this.cam = new OrthographicCamera();
    this.quad = new Mesh(new PlaneGeometry(2, 2), this.mat);
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);
  }
  setTexture(tex) {
    if (this.mat.uniforms.map)
      this.mat.uniforms.map.value = tex;
    this.textures = null;
  }
  setTextures(texs) {
    this.textures = texs && texs.length > 0 ? texs : null;
  }
  setSRGB(v) {
    if (this.mat.uniforms.sRGB)
      this.mat.uniforms.sRGB.value = v;
  }
  setSize(px) {
    this.size = px;
  }
  setMargin(px) {
    this.margin = px;
  }
  setCorner(c) {
    this.corner = c;
  }
  setCollapsed(v) {
    this.collapsed = v;
    this.refreshHeaderText();
  }
  setLayerLabel(label) {
    this.layerLabel = label;
    this.refreshHeaderText();
  }
  attachHeader(parent = document.body) {
    if (this.headerEl)
      return;
    const el = document.createElement("div");
    Object.assign(el.style, {
      position: "absolute",
      boxSizing: "border-box",
      fontFamily: "monospace",
      fontSize: "11px",
      color: "#ddd",
      backgroundColor: "rgba(0,0,0,0.78)",
      padding: "4px 8px",
      cursor: "pointer",
      userSelect: "none",
      border: "1px solid #444",
      borderRadius: "3px",
      zIndex: "50",
      display: "none",
      lineHeight: `${HEADER_HEIGHT - 10}px`
    });
    el.addEventListener("click", () => this.setCollapsed(!this.collapsed));
    parent.appendChild(el);
    this.headerEl = el;
    this.refreshHeaderText();
  }
  detachHeader() {
    var _a2;
    (_a2 = this.headerEl) == null ? void 0 : _a2.remove();
    this.headerEl = null;
  }
  refreshHeaderText() {
    if (!this.headerEl)
      return;
    const arrow = this.collapsed ? "\u25B8" : "\u25BE";
    const label = this.layerLabel ? ` \xB7 ${this.layerLabel}` : "";
    this.headerEl.innerText = `${arrow} Atlas Viewer${label}`;
  }
  positionHeader(canvasRect) {
    if (!this.headerEl)
      return;
    if (!this.visible) {
      this.headerEl.style.display = "none";
      return;
    }
    this.headerEl.style.display = "block";
    this.headerEl.style.width = `${this.size}px`;
    let left = 0, topBody = 0;
    switch (this.corner) {
      case "tl":
        left = this.margin;
        topBody = this.margin + HEADER_HEIGHT;
        break;
      case "tr":
        left = canvasRect.width - this.size - this.margin;
        topBody = this.margin + HEADER_HEIGHT;
        break;
      case "bl":
        left = this.margin;
        topBody = canvasRect.height - this.margin - this.size;
        break;
      case "br":
        left = canvasRect.width - this.size - this.margin;
        topBody = canvasRect.height - this.margin - this.size;
        break;
    }
    const headerTop = topBody - HEADER_HEIGHT;
    this.headerEl.style.left = `${canvasRect.left + left}px`;
    this.headerEl.style.top = `${canvasRect.top + headerTop}px`;
  }
  render(renderer) {
    var _a2, _b2;
    if (!this.visible) {
      this.positionHeader(renderer.domElement.getBoundingClientRect());
      return;
    }
    this.positionHeader(renderer.domElement.getBoundingClientRect());
    if (this.collapsed)
      return;
    const multi = this.textures;
    const single = (_a2 = this.mat.uniforms.map) == null ? void 0 : _a2.value;
    if (!multi && !single)
      return;
    const dpr = renderer.getPixelRatio();
    const w = renderer.domElement.width;
    const h = renderer.domElement.height;
    const sz = Math.max(1, Math.floor(this.size * dpr));
    const m = Math.max(0, Math.floor(this.margin * dpr));
    let panelX = 0, panelY = 0;
    switch (this.corner) {
      case "tl":
        panelX = m;
        panelY = h - sz - m - Math.floor(HEADER_HEIGHT * dpr);
        break;
      case "tr":
        panelX = w - sz - m;
        panelY = h - sz - m - Math.floor(HEADER_HEIGHT * dpr);
        break;
      case "bl":
        panelX = m;
        panelY = m;
        break;
      case "br":
        panelX = w - sz - m;
        panelY = m;
        break;
    }
    const prevAutoClear = renderer.autoClear;
    const prevScissorTest = renderer.getScissorTest();
    renderer.getScissor(this.prevScissor);
    renderer.getViewport(this.prevViewport);
    try {
      renderer.setScissorTest(true);
      renderer.autoClear = false;
      if (multi) {
        const n = multi.length;
        const cols = Math.ceil(Math.sqrt(n));
        const rows = Math.ceil(n / cols);
        const cell = Math.max(1, Math.floor(sz / Math.max(cols, rows)));
        for (let i = 0; i < n; i++) {
          const c = i % cols;
          const r = Math.floor(i / cols);
          const cx = panelX + c * cell;
          const cy = panelY + sz - (r + 1) * cell;
          if (this.mat.uniforms.map)
            this.mat.uniforms.map.value = (_b2 = multi[i]) != null ? _b2 : null;
          renderer.setScissor(cx, cy, cell, cell);
          renderer.setViewport(cx, cy, cell, cell);
          renderer.render(this.scene, this.cam);
        }
      } else if (single) {
        renderer.setScissor(panelX, panelY, sz, sz);
        renderer.setViewport(panelX, panelY, sz, sz);
        renderer.render(this.scene, this.cam);
      }
    } finally {
      renderer.setScissor(
        this.prevScissor.x,
        this.prevScissor.y,
        this.prevScissor.z,
        this.prevScissor.w
      );
      renderer.setViewport(
        this.prevViewport.x,
        this.prevViewport.y,
        this.prevViewport.z,
        this.prevViewport.w
      );
      renderer.setScissorTest(prevScissorTest);
      renderer.autoClear = prevAutoClear;
    }
  }
  dispose() {
    this.detachHeader();
    this.mat.dispose();
    this.quad.geometry.dispose();
  }
}
class TexelDensityMaterial extends ShaderMaterial {
  constructor(opts) {
    super({
      glslVersion: GLSL3,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
      side: 0,
      uniforms: {
        uTexelsPerMeter: { value: opts.texelsPerMeter },
        uLightmapSize: { value: opts.lightmapSize }
      },
      vertexShader: `
                in vec2 uv2;
                out vec2 vUv2;
                out vec3 vWorldPos;

                void main() {
                    vUv2 = uv2;
                    vec4 wp = modelMatrix * vec4(position, 1.0);
                    vWorldPos = wp.xyz;
                    gl_Position = projectionMatrix * viewMatrix * wp;
                }
            `,
      fragmentShader: `
                precision highp float;

                uniform float uTexelsPerMeter;
                uniform float uLightmapSize;

                in vec2 vUv2;
                in vec3 vWorldPos;
                out vec4 fragColor;

                void main() {
                    // dUV/dx in UV2 space, then \xD7 lightmapSize \u2192 texels covered per pixel-step in screen-x.
                    // dWorld/dx \u2192 world-units per pixel-step in screen-x.
                    // texelsPerWorld = (texels per pixel) / (world per pixel) = (dUV * res) / dWorld.
                    vec2 dUVdx = dFdx(vUv2) * uLightmapSize;
                    vec2 dUVdy = dFdy(vUv2) * uLightmapSize;
                    vec3 dWdx = dFdx(vWorldPos);
                    vec3 dWdy = dFdy(vWorldPos);

                    // Checker in WORLD space - one square = CHECKER_TEXELS target
                    // texels wide. Decoupled from the actual texel size so the
                    // pattern stays readable as density slides up. Triplanar
                    // XOR sum covers all axes - squares stay UNIFORMLY square
                    // across the scene if density is on-target.
                    const float CHECKER_TEXELS = 4.0;
                    float worldPerSquare = CHECKER_TEXELS / max(uTexelsPerMeter, 1.0e-6);

                    // Detect missing uv2 attribute (pre-bake state). xatlas
                    // writes uv2 only after the bake completes; before that,
                    // the attribute is absent \u2192 vUv2 reads as zero across the
                    // primitive \u2192 derivatives are zero. Without this guard the
                    // density viz is stuck on red and looks like an undersample
                    // bug rather than "atlas not built yet".
                    float uvLen = length(dUVdx) + length(dUVdy);
                    if (uvLen < 1.0e-6) {
                        // Magenta checker = "bake first to see real density".
                        vec3 wc = floor(vWorldPos / worldPerSquare);
                        float k = mod(wc.x + wc.y + wc.z, 2.0);
                        fragColor = vec4(vec3(1.0, 0.0, 1.0) * (k > 0.5 ? 1.0 : 0.55), 1.0);
                        return;
                    }

                    float texelsPerWorldX = length(dUVdx) / max(length(dWdx), 1.0e-6);
                    float texelsPerWorldY = length(dUVdy) / max(length(dWdy), 1.0e-6);
                    // Geometric mean is robust to anisotropic stretching.
                    float texelDensity = sqrt(texelsPerWorldX * texelsPerWorldY);

                    float ratio = texelDensity / max(uTexelsPerMeter, 1.0e-6);

                    // Color band selection.
                    vec3 c;
                    if      (ratio < 0.5) c = vec3(1.0, 0.0, 0.0);
                    else if (ratio < 0.8) c = vec3(1.0, 1.0, 0.0);
                    else if (ratio < 1.2) c = vec3(0.0, 1.0, 0.0);
                    else if (ratio < 1.5) c = vec3(0.0, 1.0, 1.0);
                    else                  c = vec3(0.0, 0.0, 1.0);

                    vec3 wcell = floor(vWorldPos / worldPerSquare);
                    float check = mod(wcell.x + wcell.y + wcell.z, 2.0);
                    float bright = check > 0.5 ? 1.0 : 0.6;

                    fragColor = vec4(c * bright, 1.0);
                }
            `
    });
  }
  setTexelsPerMeter(v) {
    const u = this.uniforms.uTexelsPerMeter;
    if (u)
      u.value = v;
  }
  setLightmapSize(v) {
    const u = this.uniforms.uLightmapSize;
    if (u)
      u.value = v;
  }
}
const DEFAULTS = {
  discrete: { initialTileSize: 1024, maxBatchMs: 500 },
  integrated: { initialTileSize: 256, maxBatchMs: 250 },
  unknown: { initialTileSize: 256, maxBatchMs: 250 }
};
function classifyRenderer(renderer) {
  const r = renderer.toLowerCase();
  const integratedKeywords = ["intel hd", "intel uhd", "iris", "vega", "mali", "adreno", "powervr"];
  if (integratedKeywords.some((keyword) => r.includes(keyword)))
    return "integrated";
  const discreteKeywords = [
    "geforce",
    "rtx",
    "gtx",
    "quadro",
    "radeon rx",
    "radeon pro",
    "apple m"
  ];
  if (discreteKeywords.some((keyword) => r.includes(keyword)))
    return "discrete";
  return "unknown";
}
function detectGPUCapabilities(renderer) {
  var _a2, _b2;
  const gl = renderer.getContext();
  const ext = gl.getExtension("WEBGL_debug_renderer_info");
  const vendor = ext ? String((_a2 = gl.getParameter(ext.UNMASKED_VENDOR_WEBGL)) != null ? _a2 : "") : "";
  const rendererStr = ext ? String((_b2 = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) != null ? _b2 : "") : "";
  const tier = classifyRenderer(rendererStr);
  const def = DEFAULTS[tier];
  return {
    tier,
    vendor,
    renderer: rendererStr,
    initialTileSize: def.initialTileSize,
    maxBatchMs: def.maxBatchMs,
    maxFrameMs: 16
  };
}
const toLinearColor = (c, fallback) => new Color(c != null ? c : fallback).convertSRGBToLinear();
const isPowerOfTwo = (n) => n > 0 && (n & n - 1) === 0;
const DEFAULT_REFINEMENT = {
  dilationIterations: 4,
  denoiseEnabled: true,
  denoiseSigma: 2.5,
  denoiseThreshold: 0.18,
  denoiseKSigma: 1
};
function validateOptions(opts) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h;
  const samples = (_a2 = opts.samples) != null ? _a2 : 96;
  if (!Number.isFinite(samples) || samples < 1 || samples > 4096)
    throw new BakeError(`samples must be 1-4096, got ${samples}`, "validation");
  const casts = (_b2 = opts.castsPerFrame) != null ? _b2 : 5;
  if (!Number.isFinite(casts) || casts < 1 || casts > 256)
    throw new BakeError(`castsPerFrame must be 1-256, got ${casts}`, "validation");
  const aoOptions = typeof opts.ao === "boolean" ? void 0 : opts.ao;
  const giOptions = typeof opts.gi === "boolean" ? void 0 : opts.gi;
  const aoSamples = aoOptions == null ? void 0 : aoOptions.samples;
  if (aoSamples !== void 0 && (!Number.isFinite(aoSamples) || aoSamples < 0 || aoSamples > 64))
    throw new BakeError(`ao.samples must be 0-64, got ${aoSamples}`, "validation");
  const bounces = (_c = opts.bounces) != null ? _c : 1;
  if (!Number.isInteger(bounces) || bounces < 0 || bounces > 8)
    throw new BakeError(`bounces must be integer 0-8, got ${bounces}`, "validation");
  const resolution = (_d = opts.resolution) != null ? _d : 1024;
  if (!Number.isFinite(resolution) || resolution < 16 || resolution > 4096)
    throw new BakeError(`resolution must be 16-4096, got ${resolution}`, "validation");
  if (!isPowerOfTwo(resolution))
    throw new BakeError(`resolution must be a power of two, got ${resolution}`, "validation");
  const superSample = (_e = opts.superSample) != null ? _e : 1;
  if (!Number.isInteger(superSample) || superSample < 1 || superSample > 4)
    throw new BakeError(`superSample must be integer 1-4, got ${superSample}`, "validation");
  if (resolution * superSample > 4096)
    throw new BakeError(
      `resolution \xD7 superSample must be \u2264 4096, got ${resolution * superSample}`,
      "validation"
    );
  if (((_f = opts.light) == null ? void 0 : _f.intensity) !== void 0 && opts.light.intensity < 0)
    throw new BakeError(`light.intensity must be >= 0, got ${opts.light.intensity}`, "validation");
  if (((_g = opts.light) == null ? void 0 : _g.size) !== void 0 && opts.light.size < 0)
    throw new BakeError(`light.size must be >= 0, got ${opts.light.size}`, "validation");
  if ((giOptions == null ? void 0 : giOptions.intensity) !== void 0 && giOptions.intensity < 0)
    throw new BakeError(`gi.intensity must be >= 0, got ${giOptions.intensity}`, "validation");
  if ((giOptions == null ? void 0 : giOptions.skyIntensity) !== void 0 && giOptions.skyIntensity < 0)
    throw new BakeError(
      `gi.skyIntensity must be >= 0, got ${giOptions.skyIntensity}`,
      "validation"
    );
  if ((aoOptions == null ? void 0 : aoOptions.distance) !== void 0 && aoOptions.distance < 0)
    throw new BakeError(`ao.distance must be >= 0, got ${aoOptions.distance}`, "validation");
  if (opts.texelsPerMeter !== void 0) {
    const tpm = opts.texelsPerMeter;
    if (!Number.isFinite(tpm) || tpm <= 0 || tpm > 64)
      throw new BakeError(
        `texelsPerMeter density multiplier must be in (0, 64], got ${tpm}`,
        "validation"
      );
  }
  for (const [uuid, override] of Object.entries((_h = opts.perMesh) != null ? _h : {})) {
    const r = override.resolution;
    if (r !== void 0) {
      if (!Number.isFinite(r) || r < 128 || r > 4096)
        throw new BakeError(`perMesh[${uuid}].resolution must be 128-4096, got ${r}`, "validation");
      if (!isPowerOfTwo(r))
        throw new BakeError(
          `perMesh[${uuid}].resolution must be a power of two, got ${r}`,
          "validation"
        );
    }
    const d = override.density;
    if (d !== void 0 && (!Number.isFinite(d) || d < 0.1 || d > 10))
      throw new BakeError(`perMesh[${uuid}].density must be in [0.1, 10], got ${d}`, "validation");
  }
  if (opts.texelsPerMeter !== void 0 && false) {
    const overrides = Object.entries((_i = opts.perMesh) != null ? _i : {}).filter(
      ([, o]) => o.resolution !== void 0
    );
    if (overrides.length > 0) {
      console.warn(
        `[baker] texelsPerMeter is set; perMesh[].resolution overrides on ${overrides.length} mesh(es) will be ignored - density mode uses one shared resolution.`
      );
    }
  }
  const tp = opts.timeoutProtection;
  if ((tp == null ? void 0 : tp.initialTileSize) !== void 0) {
    const t = tp.initialTileSize;
    if (!Number.isFinite(t) || t < 16 || t > 4096)
      throw new BakeError(
        `timeoutProtection.initialTileSize must be 16-4096, got ${t}`,
        "validation"
      );
  }
  if ((tp == null ? void 0 : tp.maxBatchMs) !== void 0 && (!Number.isFinite(tp.maxBatchMs) || tp.maxBatchMs <= 0))
    throw new BakeError(
      `timeoutProtection.maxBatchMs must be > 0, got ${tp.maxBatchMs}`,
      "validation"
    );
  if ((tp == null ? void 0 : tp.maxFrameMs) !== void 0 && (!Number.isFinite(tp.maxFrameMs) || tp.maxFrameMs <= 0))
    throw new BakeError(
      `timeoutProtection.maxFrameMs must be > 0, got ${tp.maxFrameMs}`,
      "validation"
    );
}
function resolveTimeoutProtection(user, caps) {
  var _a2, _b2, _c, _d, _e;
  const safe = (_a2 = user == null ? void 0 : user.safeMode) != null ? _a2 : false;
  return {
    safeMode: safe,
    initialTileSize: (_b2 = user == null ? void 0 : user.initialTileSize) != null ? _b2 : safe ? 64 : caps.initialTileSize,
    maxBatchMs: (_c = user == null ? void 0 : user.maxBatchMs) != null ? _c : safe ? 100 : caps.maxBatchMs,
    maxFrameMs: (_d = user == null ? void 0 : user.maxFrameMs) != null ? _d : caps.maxFrameMs,
    autoAdapt: (_e = user == null ? void 0 : user.autoAdapt) != null ? _e : true
  };
}
class PassthroughMaterial extends ShaderMaterial {
  constructor(source) {
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
      `
    });
  }
  customProgramCacheKey() {
    return "DownscaleMaterial|glsl3|single-out";
  }
}
const fsCam = new OrthographicCamera();
function createDownscale(renderer, source, targetResolution) {
  const target = new WebGLRenderTarget(targetResolution, targetResolution, {
    type: HalfFloatType,
    minFilter: LinearFilter,
    magFilter: LinearFilter,
    generateMipmaps: false
  });
  const mat = new PassthroughMaterial(source);
  const quad = new Mesh(new PlaneGeometry(2, 2), mat);
  const refresh = () => {
    const prevRT = renderer.getRenderTarget();
    try {
      renderer.setRenderTarget(target);
      renderer.render(quad, fsCam);
    } finally {
      renderer.setRenderTarget(prevRT);
    }
  };
  const setSource = (s) => {
    const u = mat.uniforms.tSource;
    if (!u)
      throw new Error("[baker] DownscaleMaterial missing tSource uniform");
    u.value = s;
  };
  refresh();
  return {
    texture: target.texture,
    refresh,
    setSource,
    dispose: () => {
      target.dispose();
      mat.dispose();
      quad.geometry.dispose();
    }
  };
}
function partitionByResolution(meshes, perMesh, globalRes) {
  var _a2, _b2;
  const excluded = [];
  const groups = /* @__PURE__ */ new Map();
  for (const m of meshes) {
    const override = (_a2 = perMesh[m.uuid]) != null ? _a2 : {};
    if (override.exclude === true) {
      excluded.push(m);
      continue;
    }
    const res = (_b2 = override.resolution) != null ? _b2 : globalRes;
    if (!groups.has(res))
      groups.set(res, []);
    groups.get(res).push(m);
  }
  if (groups.size === 0 && excluded.length < meshes.length) {
    groups.set(
      globalRes,
      meshes.filter((m) => {
        var _a3;
        return !((_a3 = perMesh[m.uuid]) == null ? void 0 : _a3.exclude);
      })
    );
  }
  return { excluded, groups, resolution: globalRes };
}
function partitionByDensity(meshes, perMesh, atlasResolution, texelsPerMeter) {
  var _a2, _b2;
  const excluded = [];
  const eligible = [];
  for (const m of meshes) {
    if (((_a2 = perMesh[m.uuid]) == null ? void 0 : _a2.exclude) === true)
      excluded.push(m);
    else
      eligible.push(m);
  }
  const perMeshScale = {};
  for (const m of eligible) {
    const d = (_b2 = perMesh[m.uuid]) == null ? void 0 : _b2.density;
    if (d !== void 0 && d !== 1)
      perMeshScale[m.uuid] = d;
  }
  const groups = /* @__PURE__ */ new Map();
  if (eligible.length === 0) {
    return { excluded, groups, resolution: atlasResolution };
  }
  const assignments = binPackMeshes(eligible, {
    atlasResolution,
    texelsPerMeter,
    perMeshScale
  });
  for (let i = 0; i < eligible.length; i++) {
    const a = assignments[i];
    if (!groups.has(a.atlasIdx))
      groups.set(a.atlasIdx, []);
    groups.get(a.atlasIdx).push(a.mesh);
  }
  return { excluded, groups, resolution: atlasResolution };
}
class LightmapBakeResult {
  constructor(renderer, meshLightmaps, meshResolutions, stats, internals) {
    this.renderer = renderer;
    this.meshLightmaps = meshLightmaps;
    this.meshResolutions = meshResolutions;
    this.stats = stats;
    this.internals = internals;
  }
  get lightmaps() {
    return new Map(this.meshLightmaps);
  }
  get bvh() {
    return this.internals.bvh;
  }
  get groups() {
    return this.internals.groups.map((g) => {
      var _a2, _b2;
      return {
        meshes: g.meshes,
        resolution: g.resolution,
        internalResolution: g.internalResolution,
        lightmapper: g.lightmapper,
        aoMapper: g.aoMapper,
        textures: {
          direct: g.lightmapper.textures.direct,
          indirect: g.lightmapper.textures.indirect,
          ao: g.aoMapper.texture,
          composite: g.composite.texture,
          refinement: (_b2 = (_a2 = g.refinement) == null ? void 0 : _a2.texture) != null ? _b2 : null,
          position: g.positionTex,
          normal: g.normalTex
        }
      };
    });
  }
  getGroupForMesh(mesh) {
    var _a2, _b2;
    for (const g of this.internals.groups) {
      if (g.meshes.includes(mesh)) {
        return {
          meshes: g.meshes,
          resolution: g.resolution,
          internalResolution: g.internalResolution,
          lightmapper: g.lightmapper,
          aoMapper: g.aoMapper,
          textures: {
            direct: g.lightmapper.textures.direct,
            indirect: g.lightmapper.textures.indirect,
            ao: g.aoMapper.texture,
            composite: g.composite.texture,
            refinement: (_b2 = (_a2 = g.refinement) == null ? void 0 : _a2.texture) != null ? _b2 : null,
            position: g.positionTex,
            normal: g.normalTex
          }
        };
      }
    }
    return null;
  }
  apply() {
    for (const [mesh, tex] of this.meshLightmaps) {
      const mat = mesh.material;
      if (!mat)
        continue;
      mat.lightMap = tex;
      tex.channel = 2;
      mat.lightMapIntensity = 1;
      mat.needsUpdate = true;
    }
  }
  async export(pathOrName = "lightmap", opts = {}) {
    var _a2, _b2, _c, _d, _e;
    const fmt = (_a2 = opts.format) != null ? _a2 : "png";
    const base = pathOrName.replace(/[\/\\]+$/, "").split(/[\/\\]/).pop() || "lightmap";
    const groups = this.internals.groups;
    for (let i = 0; i < groups.length; i++) {
      const g = groups[i];
      const finalTex = (_e = (_d = (_b2 = g.downscale) == null ? void 0 : _b2.texture) != null ? _d : (_c = g.refinement) == null ? void 0 : _c.texture) != null ? _e : g.composite.texture;
      const name = groups.length > 1 ? `${base}_group${i}` : base;
      await exportLightmap(this.renderer, finalTex, g.resolution, name, fmt);
    }
  }
  dispose() {
    var _a2, _b2;
    for (const g of this.internals.groups) {
      (_a2 = g.downscale) == null ? void 0 : _a2.dispose();
      (_b2 = g.refinement) == null ? void 0 : _b2.dispose();
      g.composite.dispose();
      g.aoMapper.dispose();
      g.lightmapper.dispose();
      g.atlasDispose();
    }
    this.internals.matTexDispose();
  }
  refreshAO(opts) {
    for (const g of this.internals.groups) {
      g.composite.refresh({
        aoIntensity: opts.intensity,
        aoExponent: opts.exponent,
        aoEnabled: opts.enabled
      });
    }
  }
  async rebakeAO(opts, hooks = {}) {
    const groups = this.internals.groups;
    for (let gi = 0; gi < groups.length; gi++) {
      const g = groups[gi];
      const aoOpts = {
        resolution: g.internalResolution,
        aoSamples: opts.samples,
        ambientDistance: opts.distance,
        targetSamples: opts.targetSamples
      };
      await rebakeAOForGroup(
        this.renderer,
        this.internals.bvh,
        g,
        aoOpts,
        hooks,
        gi,
        groups.length,
        (p) => {
          var _a2;
          return (_a2 = hooks.onProgress) == null ? void 0 : _a2.call(hooks, "bake", (gi + p) / groups.length);
        }
      );
      if (g.refinement) {
        g.refinement.dispose();
        g.refinement = await runPostProcess(
          this.renderer,
          g.composite.texture,
          g.positionTex,
          g.internalResolution,
          this.internals.refinementOptions
        );
        if (g.downscale) {
          g.downscale.setSource(g.refinement.texture);
          g.downscale.refresh();
        } else {
          const finalTex = g.refinement.texture;
          for (const [mesh, res] of this.meshResolutions) {
            if (res === g.resolution)
              this.meshLightmaps.set(mesh, finalTex);
          }
        }
      } else if (g.downscale) {
        g.downscale.refresh();
      }
    }
  }
}
function rebakeAOForGroup(renderer, bvh, group, aoOpts, hooks, groupIndex, totalGroups, onProgress) {
  const newAO = generateAOMapper(renderer, group.positionTex, group.normalTex, bvh, aoOpts);
  group.aoMapper.dispose();
  group.aoMapper = newAO;
  group.composite.refresh({ aoTex: newAO.texture });
  return new Promise((resolve, reject) => {
    const tick = () => {
      var _a2, _b2;
      if ((_a2 = hooks.signal) == null ? void 0 : _a2.aborted) {
        const err = new BakeError("aborted by signal", "bake");
        err.name = "AbortError";
        reject(err);
        return;
      }
      const r = newAO.render();
      onProgress(aoOpts.targetSamples > 0 ? r.samples / aoOpts.targetSamples : 1);
      group.composite.refresh();
      (_b2 = hooks.onFrame) == null ? void 0 : _b2.call(hooks, {
        groupIndex,
        totalGroups,
        bounceSamples: 0,
        aoSamples: r.samples,
        targetSamples: aoOpts.targetSamples,
        done: r.done,
        compositeTexture: group.composite.texture,
        directTexture: group.lightmapper.textures.direct,
        indirectTexture: group.lightmapper.textures.indirect,
        aoTexture: newAO.texture
      });
      if (r.done) {
        resolve();
        return;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}
const MIN_TILE_SIZE = 64;
function buildRaycastOpts(opts, resolution, lights, skyColor, matTex, tp) {
  return {
    resolution,
    casts: opts.castsPerFrame,
    filterMode: opts.filtering === "linear" ? LinearFilter : NearestFilter,
    lights,
    skyColor,
    skyIntensity: opts.gi.skyIntensity,
    directLightEnabled: opts.light.enabled,
    indirectLightEnabled: opts.gi.enabled,
    albedoTexture: matTex.albedoTexture,
    emissiveTexture: matTex.emissiveTexture,
    materialTextureSize: matTex.side,
    targetSamples: opts.samples,
    bounces: opts.bounces,
    tileSize: tp.initialTileSize
  };
}
function buildAORaycastOpts(opts, resolution, tp) {
  return {
    resolution,
    aoSamples: opts.ao.samples,
    ambientDistance: opts.ao.distance,
    targetSamples: opts.samples,
    tileSize: tp.initialTileSize
  };
}
async function runGroupBake(ctx, groupIndex, totalGroups, groupMeshes, resolution, internalResolution, hooks, checkAbort) {
  var _a2, _b2, _c;
  const { renderer, opts, bvh, sceneLights, skyColor, matTex, tp, ctxState } = ctx;
  (_a2 = hooks.onProgress) == null ? void 0 : _a2.call(hooks, "bake", groupIndex / totalGroups);
  checkAbort("bake");
  let atlas = null;
  let lightmapper = null;
  let aoMapper = null;
  let composite = null;
  let refinement = null;
  let downscale = null;
  let returned = false;
  try {
    atlas = renderAtlas(renderer, groupMeshes, internalResolution, true);
    const raycastOpts = buildRaycastOpts(
      opts,
      internalResolution,
      sceneLights,
      skyColor,
      matTex,
      tp
    );
    const aoOpts = buildAORaycastOpts(opts, internalResolution, tp);
    lightmapper = generateLightmapper(
      renderer,
      atlas.positionTexture,
      atlas.normalTexture,
      bvh,
      raycastOpts
    );
    aoMapper = generateAOMapper(renderer, atlas.positionTexture, atlas.normalTexture, bvh, aoOpts);
    composite = runComposite(
      renderer,
      {
        direct: lightmapper.textures.direct,
        indirect: lightmapper.textures.indirect,
        ao: aoMapper.texture
      },
      internalResolution,
      {
        directIntensity: 1,
        giIntensity: opts.gi.intensity,
        aoEnabled: opts.ao.enabled,
        aoIntensity: opts.ao.intensity,
        aoExponent: opts.ao.exponent
      }
    );
    await runMappersWithTimeoutProtection(
      lightmapper,
      aoMapper,
      composite,
      opts.samples,
      hooks,
      ctxState,
      tp,
      groupIndex,
      totalGroups,
      (p) => {
        var _a3;
        return (_a3 = hooks.onProgress) == null ? void 0 : _a3.call(hooks, "bake", (groupIndex + p) / totalGroups);
      }
    );
    if (opts.denoise || opts.refinementOptions.dilationIterations > 0) {
      refinement = await runPostProcess(
        renderer,
        composite.texture,
        atlas.positionTexture,
        internalResolution,
        opts.refinementOptions
      );
    }
    const finalInternalTex = (_b2 = refinement == null ? void 0 : refinement.texture) != null ? _b2 : composite.texture;
    downscale = opts.superSample > 1 ? createDownscale(renderer, finalInternalTex, resolution) : null;
    const finalTex = (_c = downscale == null ? void 0 : downscale.texture) != null ? _c : finalInternalTex;
    const completedAtlas = atlas;
    if (!completedAtlas)
      throw new BakeError("atlas render did not complete", "bake");
    returned = true;
    return {
      group: {
        lightmapper,
        aoMapper,
        composite,
        refinement,
        atlasDispose: () => completedAtlas.dispose(),
        resolution,
        internalResolution,
        downscale,
        meshes: groupMeshes,
        positionTex: completedAtlas.positionTexture,
        normalTex: completedAtlas.normalTexture
      },
      finalTex
    };
  } finally {
    if (!returned) {
      downscale == null ? void 0 : downscale.dispose();
      refinement == null ? void 0 : refinement.dispose();
      composite == null ? void 0 : composite.dispose();
      aoMapper == null ? void 0 : aoMapper.dispose();
      lightmapper == null ? void 0 : lightmapper.dispose();
      atlas == null ? void 0 : atlas.dispose();
    }
  }
}
function adaptiveTileSize(intervals, currentTileSize, tp) {
  if (intervals.length < 4)
    return currentTileSize;
  const lookback = intervals.slice(-4);
  const overBudget = lookback.filter((i) => i > tp.maxFrameMs * 1.5).length;
  if (overBudget >= 3)
    return Math.max(MIN_TILE_SIZE, currentTileSize >> 1);
  return currentTileSize;
}
function runMappersWithTimeoutProtection(lightmapper, aoMapper, composite, targetSamples, hooks, ctxState, tp, groupIndex, totalGroups, onProgress) {
  return new Promise((resolve, reject) => {
    const intervals = [];
    let lastRaf = performance.now();
    let tileSize = tp.initialTileSize;
    const tick = () => {
      var _a2, _b2;
      if ((_a2 = hooks.signal) == null ? void 0 : _a2.aborted) {
        const err = new BakeError("aborted by signal", "bake");
        err.name = "AbortError";
        reject(err);
        return;
      }
      if (ctxState.lost) {
        reject(new BakeError("webgl context lost during bake", "context-loss"));
        return;
      }
      const now = performance.now();
      intervals.push(now - lastRaf);
      if (intervals.length > 8)
        intervals.shift();
      lastRaf = now;
      if (tp.autoAdapt) {
        const next = adaptiveTileSize(intervals, tileSize, tp);
        if (next !== tileSize) {
          console.warn(`[baker] adaptive throttle: tileSize ${tileSize} \u2192 ${next}`);
          tileSize = next;
          lightmapper.setTileSize(tileSize);
          aoMapper.setTileSize(tileSize);
          intervals.length = 0;
        }
      }
      const lr = lightmapper.renderTiled(tp.maxFrameMs);
      const ar = aoMapper.renderTiled(tp.maxFrameMs);
      const minSamples = Math.min(lr.samples, ar.samples);
      onProgress(targetSamples > 0 ? minSamples / targetSamples : 1);
      const done = lr.done && ar.done;
      if (lr.sampleComplete || ar.sampleComplete)
        composite.refresh();
      const frame = {
        groupIndex,
        totalGroups,
        bounceSamples: lr.samples,
        aoSamples: ar.samples,
        targetSamples,
        done,
        compositeTexture: composite.texture,
        directTexture: lightmapper.textures.direct,
        indirectTexture: lightmapper.textures.indirect,
        aoTexture: aoMapper.texture
      };
      (_b2 = hooks.onFrame) == null ? void 0 : _b2.call(hooks, frame);
      if (done) {
        resolve();
        return;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}
function collectBakeMeshes(scene2) {
  const out = [];
  scene2.traverse((obj) => {
    var _a2;
    if (!obj.isMesh)
      return;
    if (!obj.visible)
      return;
    if ((_a2 = obj.userData) == null ? void 0 : _a2.lightmapIgnore)
      return;
    const mesh = obj;
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    if (mats.some((m) => m && m.isMeshStandardMaterial))
      out.push(mesh);
  });
  return out;
}
async function runBakePipeline(args) {
  var _a2, _b2, _c, _d, _e, _f;
  const { renderer, opts, scene: scene2, allMeshes, hooks, t0, tp, ctxState, checkAbort } = args;
  const densityMultiplier = opts.texelsPerMeter;
  const perMeshScale = {};
  for (const [uuid, override] of Object.entries(opts.perMesh)) {
    if (override.density !== void 0)
      perMeshScale[uuid] = override.density;
  }
  const densityTexelsPerMeter = densityMultiplier > 0 ? resolveDensityTexelsPerMeter(
    allMeshes.filter((mesh) => {
      var _a3;
      return ((_a3 = opts.perMesh[mesh.uuid]) == null ? void 0 : _a3.exclude) !== true;
    }),
    {
      atlasResolution: opts.resolution,
      densityMultiplier,
      perMeshScale
    }
  ) : 0;
  const partition = densityTexelsPerMeter > 0 ? partitionByDensity(allMeshes, opts.perMesh, opts.resolution, densityTexelsPerMeter) : partitionByResolution(allMeshes, opts.perMesh, opts.resolution);
  const { excluded, groups } = partition;
  const groupResolution = (key) => densityTexelsPerMeter > 0 ? partition.resolution : key;
  const tUV0 = performance.now();
  (_a2 = hooks.onProgress) == null ? void 0 : _a2.call(hooks, "uv-unwrap", 0);
  const meshesByGroup = [...groups.values()];
  if (densityTexelsPerMeter > 0) {
    await generateAtlases(meshesByGroup, {
      resolution: opts.resolution,
      texelsPerUnit: densityTexelsPerMeter,
      perMeshScale
    });
  } else {
    await generateAtlas(meshesByGroup.flat());
  }
  (_b2 = hooks.onProgress) == null ? void 0 : _b2.call(hooks, "uv-unwrap", 1);
  checkAbort("unwrap");
  const tUV1 = performance.now();
  const tG0 = performance.now();
  (_c = hooks.onProgress) == null ? void 0 : _c.call(hooks, "geometry", 0);
  const merged = mergeGeometry(allMeshes);
  const bvh = new MeshBVH(merged);
  (_d = hooks.onProgress) == null ? void 0 : _d.call(hooks, "geometry", 0.5);
  const perTri = extractPerTriangleMaterials(merged, allMeshes);
  const matTex = buildMaterialTextures(perTri);
  (_e = hooks.onProgress) == null ? void 0 : _e.call(hooks, "geometry", 1);
  checkAbort("geometry");
  const tG1 = performance.now();
  const skyColor = toLinearColor(opts.gi.skyColor, 16777215);
  const sceneLights = collectLightsFromScene(scene2);
  const tB0 = performance.now();
  const groupKeys = [...groups.keys()];
  const groupResults = [];
  const meshLightmaps = /* @__PURE__ */ new Map();
  const meshResolutions = /* @__PURE__ */ new Map();
  const ctx = {
    renderer,
    opts,
    bvh,
    sceneLights,
    skyColor,
    matTex,
    tp,
    ctxState
  };
  for (let gi = 0; gi < groupKeys.length; gi++) {
    const key = groupKeys[gi];
    const res = groupResolution(key);
    const internalRes = res * opts.superSample;
    const groupMeshes = groups.get(key);
    const { group, finalTex } = await runGroupBake(
      ctx,
      gi,
      groupKeys.length,
      groupMeshes,
      res,
      internalRes,
      hooks,
      checkAbort
    );
    groupResults.push(group);
    for (const m of groupMeshes) {
      meshLightmaps.set(m, finalTex);
      meshResolutions.set(m, res);
    }
  }
  const tB1 = performance.now();
  const tR0 = performance.now();
  (_f = hooks.onProgress) == null ? void 0 : _f.call(hooks, "refine", 1);
  const tR1 = performance.now();
  performance.now();
  renderer.getContext().finish();
  performance.now();
  const totalTexels = groupKeys.reduce((s, k) => {
    const r = groupResolution(k);
    return s + r * r;
  }, 0);
  const stats = {
    meshCount: meshesByGroup.flat().length,
    texelCount: totalTexels,
    raysTraced: opts.samples * opts.castsPerFrame * totalTexels,
    duration: {
      uvUnwrap: tUV1 - tUV0,
      geometry: tG1 - tG0,
      bake: tB1 - tB0,
      refine: tR1 - tR0,
      total: performance.now() - t0
    }
  };
  return new LightmapBakeResult(renderer, meshLightmaps, meshResolutions, stats, {
    groups: groupResults,
    bvh,
    refinementOptions: opts.refinementOptions,
    denoise: opts.denoise,
    matTexDispose: () => {
      matTex.albedoTexture.dispose();
      matTex.emissiveTexture.dispose();
    }
  });
}
function createRendererAdapter(renderer, options = {}) {
  var _a2;
  return {
    renderer,
    contextLossTarget: (_a2 = options.contextLossTarget) != null ? _a2 : renderer.domElement,
    label: options.label
  };
}
function isLightmapRendererAdapter(value) {
  var _a2;
  return !!value && typeof value === "object" && "renderer" in value && value.renderer !== null && typeof ((_a2 = value.renderer) == null ? void 0 : _a2.isWebGLRenderer) === "boolean";
}
function resolveGIOptions(gi) {
  var _a2, _b2, _c, _d;
  if (typeof gi === "boolean") {
    return {
      enabled: gi,
      intensity: 1,
      skyColor: 16777215,
      skyIntensity: 0
    };
  }
  return {
    enabled: (_a2 = gi == null ? void 0 : gi.enabled) != null ? _a2 : true,
    intensity: (_b2 = gi == null ? void 0 : gi.intensity) != null ? _b2 : 1,
    skyColor: (_c = gi == null ? void 0 : gi.skyColor) != null ? _c : 16777215,
    skyIntensity: (_d = gi == null ? void 0 : gi.skyIntensity) != null ? _d : 0
  };
}
function resolveAOOptions(ao, castsPerFrame) {
  var _a2, _b2, _c, _d, _e, _f;
  if (typeof ao === "boolean") {
    return {
      enabled: ao,
      distance: 0.5,
      intensity: 1,
      exponent: 1.5,
      samples: castsPerFrame != null ? castsPerFrame : 5
    };
  }
  return {
    enabled: (_a2 = ao == null ? void 0 : ao.enabled) != null ? _a2 : true,
    distance: (_b2 = ao == null ? void 0 : ao.distance) != null ? _b2 : 0.5,
    intensity: (_c = ao == null ? void 0 : ao.intensity) != null ? _c : 1,
    exponent: (_d = ao == null ? void 0 : ao.exponent) != null ? _d : 1.5,
    samples: (_f = (_e = ao == null ? void 0 : ao.samples) != null ? _e : castsPerFrame) != null ? _f : 5
  };
}
class LightmapBaker {
  constructor(rendererOrOptions = {}, maybeOptions = {}) {
    var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w;
    this._rendererAdapter = null;
    const usesRendererArg = (v) => !!v && typeof v === "object" && ("isWebGLRenderer" in v && v.isWebGLRenderer === true || "getContext" in v && "domElement" in v);
    const rawOptions = isLightmapRendererAdapter(rendererOrOptions) ? { ...maybeOptions, rendererAdapter: rendererOrOptions } : usesRendererArg(rendererOrOptions) ? { ...maybeOptions, renderer: rendererOrOptions } : { ...rendererOrOptions, ...maybeOptions };
    validateOptions(rawOptions);
    this._rendererAdapter = (_a2 = rawOptions.rendererAdapter) != null ? _a2 : rawOptions.renderer ? createRendererAdapter(rawOptions.renderer) : null;
    this.opts = {
      samples: (_b2 = rawOptions.samples) != null ? _b2 : 96,
      castsPerFrame: (_c = rawOptions.castsPerFrame) != null ? _c : 5,
      bounces: Math.min(4, Math.max(1, (_d = rawOptions.bounces) != null ? _d : 1)),
      resolution: (_e = rawOptions.resolution) != null ? _e : 1024,
      superSample: (_f = rawOptions.superSample) != null ? _f : 1,
      denoise: (_g = rawOptions.denoise) != null ? _g : true,
      filtering: (_h = rawOptions.filtering) != null ? _h : "linear",
      texelsPerMeter: (_i = rawOptions.texelsPerMeter) != null ? _i : 0,
      perMesh: (_j = rawOptions.perMesh) != null ? _j : {},
      light: {
        position: Array.isArray((_k = rawOptions.light) == null ? void 0 : _k.position) ? new Vector3(...rawOptions.light.position) : (_m = (_l = rawOptions.light) == null ? void 0 : _l.position) != null ? _m : new Vector3(0, 10, 0),
        color: (_o = (_n = rawOptions.light) == null ? void 0 : _n.color) != null ? _o : 16777215,
        intensity: (_q = (_p = rawOptions.light) == null ? void 0 : _p.intensity) != null ? _q : 2,
        size: (_s = (_r = rawOptions.light) == null ? void 0 : _r.size) != null ? _s : 1,
        enabled: (_u = (_t = rawOptions.light) == null ? void 0 : _t.enabled) != null ? _u : true
      },
      gi: resolveGIOptions(rawOptions.gi),
      ao: resolveAOOptions(rawOptions.ao, rawOptions.castsPerFrame),
      refinementOptions: {
        ...DEFAULT_REFINEMENT,
        ...(_v = rawOptions.refinementOptions) != null ? _v : {},
        denoiseEnabled: (_w = rawOptions.denoise) != null ? _w : DEFAULT_REFINEMENT.denoiseEnabled
      },
      timeoutProtection: rawOptions.timeoutProtection
    };
  }
  get renderer() {
    var _a2, _b2;
    return (_b2 = (_a2 = this._rendererAdapter) == null ? void 0 : _a2.renderer) != null ? _b2 : null;
  }
  get rendererAdapter() {
    return this._rendererAdapter;
  }
  setRenderer(renderer) {
    this._rendererAdapter = createRendererAdapter(renderer);
    return this;
  }
  setRendererAdapter(rendererAdapter) {
    this._rendererAdapter = rendererAdapter;
    return this;
  }
  async bake(scene2, hooks = {}) {
    var _a2, _b2;
    const rendererAdapter = this._rendererAdapter;
    const renderer = (_a2 = rendererAdapter == null ? void 0 : rendererAdapter.renderer) != null ? _a2 : null;
    if (!renderer)
      throw new BakeError(
        "renderer is required: use `new LightmapBaker(renderer, opts)`, `new LightmapBaker({ renderer, ...opts })`, `new LightmapBaker({ rendererAdapter, ...opts })`, `baker.setRenderer(renderer)`, or `baker.setRendererAdapter(adapter)`",
        "validation"
      );
    const t0 = performance.now();
    const allMeshes = collectBakeMeshes(scene2);
    if (!allMeshes.length)
      throw new BakeError(
        "no bake-eligible meshes in scene (need Mesh + MeshStandardMaterial-like)",
        "validation"
      );
    const gl = renderer.getContext();
    if (!gl.getExtension("EXT_color_buffer_float"))
      throw new BakeError(
        "EXT_color_buffer_float WebGL2 extension is unavailable; FloatType RTs cannot be allocated",
        "validation"
      );
    const caps = detectGPUCapabilities(renderer);
    const tp = resolveTimeoutProtection(this.opts.timeoutProtection, caps);
    const ctxState = { lost: false };
    const contextLossTarget = (_b2 = rendererAdapter == null ? void 0 : rendererAdapter.contextLossTarget) != null ? _b2 : renderer.domElement;
    const onLost = (e) => {
      e.preventDefault();
      ctxState.lost = true;
      console.error("[baker] webglcontextlost during bake - cancelling");
    };
    contextLossTarget.addEventListener("webglcontextlost", onLost, false);
    const releaseContextGuard = () => {
      contextLossTarget.removeEventListener("webglcontextlost", onLost, false);
    };
    scene2.updateMatrixWorld(true);
    const checkAbort = (phase) => {
      var _a3;
      if ((_a3 = hooks.signal) == null ? void 0 : _a3.aborted) {
        const err = new BakeError("aborted by signal", phase);
        err.name = "AbortError";
        throw err;
      }
      if (ctxState.lost)
        throw new BakeError("webgl context lost", "context-loss");
    };
    try {
      return await runBakePipeline({
        renderer,
        opts: this.opts,
        scene: scene2,
        allMeshes,
        hooks,
        t0,
        tp,
        ctxState,
        checkAbort
      });
    } finally {
      releaseContextGuard();
    }
  }
}
function currentGlobals() {
  return globalThis;
}
function hasNodeProcess(globals) {
  var _a2, _b2;
  return typeof ((_b2 = (_a2 = globals.process) == null ? void 0 : _a2.versions) == null ? void 0 : _b2.node) === "string";
}
function hasBrowserWindow(globals) {
  return typeof globals.window !== "undefined" && typeof globals.document !== "undefined";
}
function detectRuntime(globals) {
  if (hasBrowserWindow(globals))
    return "browser";
  if (typeof globals.OffscreenCanvas === "function")
    return "offscreen-browser";
  if (hasNodeProcess(globals))
    return "node";
  return "unknown";
}
function hasWebGL2Constructor(globals) {
  var _a2, _b2;
  if (typeof globals.WebGL2RenderingContext !== "function")
    return "unavailable";
  if (typeof ((_a2 = globals.document) == null ? void 0 : _a2.createElement) !== "function")
    return "available";
  try {
    const canvas = globals.document.createElement("canvas");
    return ((_b2 = canvas.getContext) == null ? void 0 : _b2.call(canvas, "webgl2")) ? "available" : "unavailable";
  } catch {
    return "unavailable";
  }
}
function probeOffscreenWebGL2(globals) {
  var _a2;
  if (typeof globals.OffscreenCanvas !== "function")
    return "unavailable";
  try {
    const canvas = new globals.OffscreenCanvas(1, 1);
    return ((_a2 = canvas.getContext) == null ? void 0 : _a2.call(canvas, "webgl2")) ? "available" : "unavailable";
  } catch {
    return "unavailable";
  }
}
function getLightmapRuntimeCapabilities(globals = currentGlobals()) {
  const runtime = detectRuntime(globals);
  const offscreenCanvas = typeof globals.OffscreenCanvas === "function" ? "available" : "unavailable";
  const raf = typeof globals.requestAnimationFrame === "function" ? "available" : "unavailable";
  const webgl2 = runtime === "offscreen-browser" ? probeOffscreenWebGL2(globals) : hasWebGL2Constructor(globals);
  const canBake = (runtime === "browser" || runtime === "offscreen-browser") && webgl2 !== "unavailable" && raf === "available";
  return {
    runtime,
    canBake,
    rendererStrategy: canBake ? "webgl-browser" : "node-headless-unavailable",
    features: {
      webgl2,
      "float-color-buffer": webgl2 === "unavailable" ? "unavailable" : "unknown",
      "offscreen-canvas": offscreenCanvas,
      raf,
      "texture-download-export": runtime === "browser" ? "available" : "unavailable",
      "filesystem-export": "unavailable",
      "node-headless-bake": "unavailable"
    },
    limitations: runtime === "node" ? [
      "True Node.js headless baking is not implemented yet.",
      "The current bake pipeline still requires a browser WebGL2 renderer and RAF-driven progressive passes."
    ] : []
  };
}
const GL_ERR = {
  0: "NO_ERROR",
  1280: "INVALID_ENUM",
  1281: "INVALID_VALUE",
  1282: "INVALID_OPERATION",
  1283: "STACK_OVERFLOW",
  1284: "STACK_UNDERFLOW",
  1285: "OUT_OF_MEMORY",
  1286: "INVALID_FRAMEBUFFER_OPERATION",
  37442: "CONTEXT_LOST_WEBGL"
};
class Diagnostics {
  constructor(renderer) {
    this.renderer = renderer;
    this.start = performance.now();
    this.snapshots = [];
    this.lastCalls = 0;
    this.lastTriangles = 0;
  }
  banner() {
    var _a2, _b2;
    const gl = this.renderer.getContext();
    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    const vendor = debugInfo ? String((_a2 = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)) != null ? _a2 : "") : "<masked>";
    const rendererStr = debugInfo ? String((_b2 = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)) != null ? _b2 : "") : "<masked>";
    const attrs = gl.getContextAttributes();
    const limits = {
      MAX_TEXTURE_SIZE: gl.getParameter(gl.MAX_TEXTURE_SIZE),
      MAX_RENDERBUFFER_SIZE: gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),
      MAX_DRAW_BUFFERS: gl.getParameter(gl.MAX_DRAW_BUFFERS),
      MAX_COLOR_ATTACHMENTS: gl.getParameter(gl.MAX_COLOR_ATTACHMENTS),
      MAX_TEXTURE_IMAGE_UNITS: gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),
      MAX_FRAGMENT_UNIFORM_VECTORS: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),
      MAX_VARYING_VECTORS: gl.getParameter(gl.MAX_VARYING_VECTORS),
      MAX_VIEWPORT_DIMS: gl.getParameter(gl.MAX_VIEWPORT_DIMS)
    };
    const exts = [
      "EXT_color_buffer_float",
      "EXT_color_buffer_half_float",
      "OES_texture_float_linear",
      "OES_texture_half_float_linear",
      "WEBGL_lose_context",
      "EXT_disjoint_timer_query_webgl2",
      "WEBGL_debug_renderer_info"
    ];
    const extReport = {};
    for (const e of exts)
      extReport[e] = !!gl.getExtension(e);
    const memInfo = performance.memory;
    console.group("[diag] === GPU BANNER ===");
    console.log("vendor:", vendor);
    console.log("renderer:", rendererStr);
    console.log("webgl version:", gl.getParameter(gl.VERSION));
    console.log("GLSL:", gl.getParameter(gl.SHADING_LANGUAGE_VERSION));
    console.log("context attrs:", attrs);
    console.log("limits:", limits);
    console.log("extensions:", extReport);
    if (memInfo) {
      console.log(
        "JS heap (MB):",
        `used=${(memInfo.usedJSHeapSize / 1048576).toFixed(1)}`,
        `total=${(memInfo.totalJSHeapSize / 1048576).toFixed(1)}`,
        `limit=${(memInfo.jsHeapSizeLimit / 1048576).toFixed(1)}`
      );
    }
    console.groupEnd();
  }
  snap(label) {
    var _a2, _b2, _c;
    const gl = this.renderer.getContext();
    let glErrCode = 0;
    let lastErr = 0;
    do {
      lastErr = gl.getError();
      if (lastErr !== 0)
        glErrCode = lastErr;
    } while (lastErr !== 0);
    const info = this.renderer.info;
    const programs = (_b2 = (_a2 = info.programs) == null ? void 0 : _a2.length) != null ? _b2 : 0;
    const dCalls = info.render.calls - this.lastCalls;
    const dTris = info.render.triangles - this.lastTriangles;
    this.lastCalls = info.render.calls;
    this.lastTriangles = info.render.triangles;
    const snap = {
      label,
      t: performance.now() - this.start,
      glError: (_c = GL_ERR[glErrCode]) != null ? _c : `0x${glErrCode.toString(16)}`,
      threejs: {
        geometries: info.memory.geometries,
        textures: info.memory.textures,
        programs,
        calls: info.render.calls,
        triangles: info.render.triangles
      }
    };
    this.snapshots.push(snap);
    console.log(
      `[diag] ${snap.t.toFixed(1).padStart(8)}ms ${label}`,
      `gl=${snap.glError}`,
      `geo=${snap.threejs.geometries} tex=${snap.threejs.textures} prog=${snap.threejs.programs}`,
      `\u0394calls=${dCalls} \u0394tris=${dTris}`
    );
    return snap;
  }
  measure(label, fn) {
    var _a2;
    const gl = this.renderer.getContext();
    while (gl.getError() !== 0) {
    }
    const t0 = performance.now();
    const r = fn();
    gl.finish();
    const dt = performance.now() - t0;
    let err = 0;
    let lastErr = 0;
    do {
      lastErr = gl.getError();
      if (lastErr !== 0)
        err = lastErr;
    } while (lastErr !== 0);
    console.log(
      `[diag] MEASURE ${label}: ${dt.toFixed(1)}ms gl=${(_a2 = GL_ERR[err]) != null ? _a2 : `0x${err.toString(16)}`}`
    );
    return r;
  }
  contextLossInfo() {
    var _a2, _b2;
    const gl = this.renderer.getContext();
    const ext = gl.getExtension("WEBGL_lose_context");
    console.group("[diag] === CONTEXT LOSS DUMP ===");
    console.log("isContextLost:", (_a2 = gl.isContextLost) == null ? void 0 : _a2.call(gl));
    console.log("snapshot history (last 10):", this.snapshots.slice(-10));
    console.log("threejs info at loss:", {
      geometries: this.renderer.info.memory.geometries,
      textures: this.renderer.info.memory.textures,
      programs: (_b2 = this.renderer.info.programs) == null ? void 0 : _b2.length,
      autoReset: this.renderer.info.autoReset
    });
    if (ext)
      console.log("lose_context ext present");
    console.groupEnd();
  }
  dump() {
    return this.snapshots.slice();
  }
}
export { AtlasViewer, BakeError, Diagnostics, LightmapBakeResult, LightmapBaker, TexelDensityMaterial, binPackMeshes, buildLightTexture, buildMaterialTextures, classifyRenderer, collectLightsFromScene, computeMeshSurfaceArea, createRendererAdapter, detectGPUCapabilities, disposeLightTexture, exportEXR, exportLightmap, exportPNG, exportRaw, extractPerTriangleMaterials, generateAOMapper, generateAtlas, generateAtlases, generateLightmapper, getLightmapRuntimeCapabilities, isLightmapRendererAdapter, loadXAtlasThree, mergeGeometry, renderAtlas, resolveDensityTexelsPerMeter, runComposite, runPostProcess as runRefinement };
