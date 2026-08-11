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
  SRGBColorSpace,
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
  return validateTexturedCase(renderer, {
    map: dataTexture([0.4, 0.2, 0.1, 1]),
    uv0: [0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1],
    expectedAlbedo: [0.2, 0.2, 0.1],
  });
}

export function validateBaseColorUvAndSrgb(renderer: WebGLRenderer): {
  uv0: ReturnType<typeof validateTexturedCase>;
  uv1: ReturnType<typeof validateTexturedCase>;
  srgb: ReturnType<typeof validateTexturedCase>;
} {
  const uv0Map = dataTexture([0.8, 0.1, 0.05, 1, 0.05, 0.7, 0.2, 1], 2, 1);
  const uv1Map = uv0Map.clone();
  uv1Map.needsUpdate = true;
  const srgbMap = new DataTexture(new Uint8Array([128, 64, 32, 255]), 1, 1, RGBAFormat);
  srgbMap.colorSpace = SRGBColorSpace;
  srgbMap.minFilter = NearestFilter;
  srgbMap.magFilter = NearestFilter;
  srgbMap.needsUpdate = true;
  const srgbColor = new Color().setRGB(128 / 255, 64 / 255, 32 / 255, SRGBColorSpace);

  return {
    uv0: validateTexturedCase(renderer, {
      map: uv0Map,
      uv0: constantUvs(0.25, 0.5),
      uv1: constantUvs(0.75, 0.5),
      expectedAlbedo: [0.4, 0.1, 0.05],
    }),
    uv1: validateTexturedCase(renderer, {
      map: uv1Map,
      mapChannel: 1,
      uv0: constantUvs(0.25, 0.5),
      uv1: constantUvs(0.75, 0.5),
      expectedAlbedo: [0.025, 0.7, 0.2],
    }),
    srgb: validateTexturedCase(renderer, {
      map: srgbMap,
      uv0: constantUvs(0.5, 0.5),
      expectedAlbedo: [srgbColor.r * 0.5, srgbColor.g, srgbColor.b],
    }),
  };
}

type TexturedCase = {
  map: DataTexture;
  mapChannel?: 0 | 1;
  uv0: number[];
  uv1?: number[];
  expectedAlbedo: [number, number, number];
};

function validateTexturedCase(
  renderer: WebGLRenderer,
  options: TexturedCase,
): {
  indirect: [number, number, number];
  expectedAlbedo: [number, number, number];
  sourceAlbedo: [number, number, number];
  extractedUvs: number[];
  compactBaseColorAtlas: boolean;
  compactSurfaceAlbedo: boolean;
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
  geometry.setAttribute('uv', new BufferAttribute(new Float32Array(options.uv0), 2));
  if (options.uv1) {
    geometry.setAttribute('uv1', new BufferAttribute(new Float32Array(options.uv1), 2));
  }
  geometry.setAttribute(
    'uv2',
    new BufferAttribute(new Float32Array([0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1]), 2),
  );

  const map = options.map;
  map.channel = options.mapChannel ?? 0;
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

  // Keep point-light NEE under test while making this texture-transport smoke
  // independent of which side normal the BVH reports for the double-sided hit.
  // One point light sits on each side of the plane; exactly one should have a
  // positive cosine for the hit normal, so valid secondary transport is non-zero.
  const lights: PackedLight[] = [
    {
      type: 'point',
      position: new Vector3(0, 0, 0),
      direction: new Vector3(0, -1, 0),
      color: new Color(1, 1, 1),
      params: [0, 0, 0, 0],
    },
    {
      type: 'point',
      position: new Vector3(0, 2, 0),
      direction: new Vector3(0, 1, 0),
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
      expectedAlbedo: options.expectedAlbedo,
      sourceAlbedo,
      extractedUvs: [...surfaces.uvs],
      compactBaseColorAtlas: materialTextures.albedoMapAtlas.type !== FloatType,
      compactSurfaceAlbedo: atlas.surfaceAlbedoTexture.type !== FloatType,
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

function dataTexture(rgba: readonly number[], width = 1, height = 1): DataTexture {
  const texture = new DataTexture(new Float32Array(rgba), width, height, RGBAFormat, FloatType);
  texture.minFilter = NearestFilter;
  texture.magFilter = NearestFilter;
  texture.needsUpdate = true;
  return texture;
}

function constantUvs(u: number, v: number): number[] {
  return Array.from({ length: 6 }, () => [u, v]).flat();
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
