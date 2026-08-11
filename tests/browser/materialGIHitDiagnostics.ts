import {
  BoxGeometry,
  Color,
  DataTexture,
  DoubleSide,
  FloatType,
  GLSL3,
  Mesh,
  MeshStandardMaterial,
  NearestFilter,
  OrthographicCamera,
  PlaneGeometry,
  RGBAFormat,
  ShaderMaterial,
  WebGLRenderTarget,
  type Texture,
  type WebGLRenderer,
} from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import {
  buildMaterialTextures,
  extractPerTriangleMaterials,
  generateLightmapper,
  mergeGeometry,
} from 'baker-classic';

/**
 * Diagnostic only: if this is non-zero, the GPU BVH secondary hit and
 * per-triangle emissive lookup are healthy and the remaining zero-GI issue is
 * isolated to secondary NEE/light visibility rather than ray intersection.
 */
export function validateSecondaryEmissiveHit(renderer: WebGLRenderer): [number, number, number] {
  const geometry = new BoxGeometry(200, 0.1, 200);
  geometry.translate(0, 1, 0);
  geometry.setAttribute('uv2', geometry.getAttribute('uv').clone());

  const material = new MeshStandardMaterial({
    color: 0xffffff,
    emissive: new Color(1, 0.5, 0.25),
    emissiveIntensity: 1,
    side: DoubleSide,
  });
  const mesh = new Mesh(geometry, material);
  mesh.updateMatrixWorld(true);
  const merged = mergeGeometry([mesh]);
  const bvh = new MeshBVH(merged);
  const surfaces = extractPerTriangleMaterials(merged, [mesh]);
  const materialTextures = buildMaterialTextures(renderer, surfaces);
  const positions = floatTexture([0, 0, 0, 1]);
  const normals = floatTexture([0, 1, 0, 1]);
  const lightmapper = generateLightmapper(renderer, positions, normals, bvh, {
    resolution: 1,
    casts: 64,
    lights: [],
    skyColor: new Color(),
    skyIntensity: 0,
    filterMode: NearestFilter,
    directLightEnabled: false,
    indirectLightEnabled: true,
    albedoTexture: materialTextures.albedoTexture,
    emissiveTexture: materialTextures.emissiveTexture,
    uv01Texture: materialTextures.uv01Texture,
    uv2MapTexture: materialTextures.uv2MapTexture,
    mapRectTexture: materialTextures.mapRectTexture,
    mapTransform0Texture: materialTextures.mapTransform0Texture,
    mapTransform1Texture: materialTextures.mapTransform1Texture,
    albedoMapAtlas: materialTextures.albedoMapAtlas,
    materialTextureSize: materialTextures.side,
    targetSamples: 1,
    bounces: 1,
  });

  try {
    lightmapper.render();
    renderer.getContext().finish();
    const pixels = readTexture(renderer, lightmapper.textures.indirect, 1);
    return [pixels[0] ?? 0, pixels[1] ?? 0, pixels[2] ?? 0];
  } finally {
    lightmapper.dispose();
    materialTextures.dispose();
    positions.dispose();
    normals.dispose();
    material.dispose();
    geometry.dispose();
    merged.dispose();
  }
}

function floatTexture(rgba: readonly number[]): DataTexture {
  const texture = new DataTexture(new Float32Array(rgba), 1, 1, RGBAFormat, FloatType);
  texture.minFilter = NearestFilter;
  texture.magFilter = NearestFilter;
  texture.needsUpdate = true;
  return texture;
}

function readTexture(renderer: WebGLRenderer, source: Texture, resolution: number): Float32Array {
  const target = new WebGLRenderTarget(resolution, resolution, {
    type: FloatType,
    depthBuffer: false,
  });
  const material = new ShaderMaterial({
    glslVersion: GLSL3,
    uniforms: { source: { value: source } },
    vertexShader: 'out vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position,1.0);}',
    fragmentShader:
      'precision highp float; uniform sampler2D source; in vec2 vUv; out vec4 outColor; void main(){outColor=texture(source,vUv);}',
  });
  const quad = new Mesh(new PlaneGeometry(2, 2), material);
  const previousTarget = renderer.getRenderTarget();
  const pixels = new Float32Array(resolution * resolution * 4);
  try {
    renderer.setRenderTarget(target);
    renderer.render(quad, new OrthographicCamera());
    renderer.readRenderTargetPixels(target, 0, 0, resolution, resolution, pixels);
    return pixels;
  } finally {
    renderer.setRenderTarget(previousTarget);
    target.dispose();
    material.dispose();
    quad.geometry.dispose();
  }
}
