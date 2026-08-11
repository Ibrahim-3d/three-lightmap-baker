import {
  BufferAttribute,
  BufferGeometry,
  Color,
  DataTexture,
  DoubleSide,
  FloatType,
  GLSL3,
  Mesh,
  MeshStandardMaterial,
  NearestFilter,
  RGBAFormat,
  ShaderMaterial,
  OrthographicCamera,
  PlaneGeometry,
  WebGLRenderTarget,
  Vector3,
  type Texture,
  type WebGLRenderer,
} from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import {
  buildMaterialTextures,
  extractPerTriangleMaterials,
  generateLightmapper,
  mergeGeometry,
  renderAtlas,
  type PackedLight,
} from 'baker-classic';

/** Deterministic browser-only validation used by the focused material GI smoke. */
export function validateTexturedBounce(renderer: WebGLRenderer): {
  indirect: [number, number, number];
  expectedAlbedo: [number, number, number];
  sourceAlbedo: [number, number, number];
} {
  const geometry = new BufferGeometry();
  geometry.setAttribute(
    'position',
    new BufferAttribute(
      new Float32Array([
        -100, 1, -100, 100, 1, -100, -100, 1, 100, 100, 1, -100, 100, 1, 100, -100, 1, 100,
      ]),
      3,
    ),
  );
  geometry.setAttribute(
    'normal',
    new BufferAttribute(new Float32Array(Array.from({ length: 6 }, () => [0, -1, 0]).flat()), 3),
  );
  geometry.setAttribute(
    'uv',
    new BufferAttribute(new Float32Array([0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1]), 2),
  );
  geometry.setAttribute('uv2', geometry.getAttribute('uv').clone());

  const map = dataTexture([0.4, 0.2, 0.1, 1]);
  const material = new MeshStandardMaterial({
    color: new Color(0.5, 1, 1),
    map,
    side: DoubleSide,
  });
  const mesh = new Mesh(geometry, material);
  mesh.updateMatrixWorld(true);
  const merged = mergeGeometry([mesh]);
  const bvh = new MeshBVH(merged);
  const surfaces = extractPerTriangleMaterials(merged, [mesh]);
  const materialTextures = buildMaterialTextures(renderer, surfaces);
  const atlas = renderAtlas(renderer, [mesh], 8);
  const positions = dataTexture([0, 0, 0, 1]);
  const normals = dataTexture([0, 1, 0, 1]);
  const lights: PackedLight[] = [
    {
      type: 'point',
      position: new Vector3(0, 0, 0),
      direction: new Vector3(0, -1, 0),
      color: new Color(1, 1, 1),
      params: [0, 0, 0, 0],
    },
  ];
  const lightmapper = generateLightmapper(renderer, positions, normals, bvh, {
    resolution: 1,
    casts: 64,
    lights,
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
    const sourcePixels = readTexture(renderer, atlas.surfaceAlbedoTexture, 8);
    const sourceAlbedo = averageOccupied(sourcePixels);
    return {
      indirect: [pixels[0] ?? 0, pixels[1] ?? 0, pixels[2] ?? 0],
      expectedAlbedo: [0.2, 0.2, 0.1],
      sourceAlbedo,
    };
  } finally {
    lightmapper.dispose();
    materialTextures.dispose();
    atlas.dispose();
    positions.dispose();
    normals.dispose();
    map.dispose();
    material.dispose();
    geometry.dispose();
    merged.dispose();
  }
}

function dataTexture(rgba: readonly [number, number, number, number]): DataTexture {
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

function averageOccupied(pixels: Float32Array): [number, number, number] {
  let red = 0;
  let green = 0;
  let blue = 0;
  let count = 0;
  for (let offset = 0; offset < pixels.length; offset += 4) {
    if ((pixels[offset + 3] ?? 0) < 0.5) continue;
    red += pixels[offset] ?? 0;
    green += pixels[offset + 1] ?? 0;
    blue += pixels[offset + 2] ?? 0;
    count++;
  }
  if (!count) throw new Error('surface albedo atlas contained no occupied texels');
  return [red / count, green / count, blue / count];
}
