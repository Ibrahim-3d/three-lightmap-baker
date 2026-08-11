import {
  BoxGeometry,
  BufferAttribute,
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
  type BufferGeometry,
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

type MaterialGIDiagnostics = {
  extFloatBlend: boolean;
  extColorBufferFloat: boolean;
  extFloatLinear: boolean;
  framebufferComplete: boolean;
  glErrorAfterRender: number;
  packedMapSample: [number, number, number, number];
  materialAlbedoSample: [number, number, number, number];
};

/** Deterministic browser-only validation used by the focused material GI smoke. */
export function validateTexturedBounce(renderer: WebGLRenderer): {
  indirect: [number, number, number];
  expectedAlbedo: [number, number, number];
  sourceAlbedo: [number, number, number];
  diagnostics: MaterialGIDiagnostics;
} {
  return validateTexturedCase(renderer, {
    map: dataTexture([0.4, 0.2, 0.1, 1]),
    uv0: [0.5, 0.5],
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
      uv0: [0.25, 0.5],
      uv1: [0.75, 0.5],
      expectedAlbedo: [0.4, 0.1, 0.05],
    }),
    uv1: validateTexturedCase(renderer, {
      map: uv1Map,
      mapChannel: 1,
      uv0: [0.25, 0.5],
      uv1: [0.75, 0.5],
      expectedAlbedo: [0.025, 0.7, 0.2],
    }),
    srgb: validateTexturedCase(renderer, {
      map: srgbMap,
      uv0: [0.5, 0.5],
      expectedAlbedo: [srgbColor.r * 0.5, srgbColor.g, srgbColor.b],
    }),
  };
}

type TexturedCase = {
  map: DataTexture;
  mapChannel?: 0 | 1;
  uv0: readonly [number, number];
  uv1?: readonly [number, number];
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
  diagnostics: MaterialGIDiagnostics;
} {
  // Use a thin 3D slab rather than a mathematically zero-thickness plane. The
  // latter produces degenerate BVH bounds and is not a portable GPU traversal
  // fixture on software/headless WebGL implementations.
  const geometry = makeSlabGeometry(options.uv0, options.uv1);

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

  // One point light sits on each side of the slab. Whichever face orientation
  // the BVH reports, exactly one light has a positive cosine and an unobstructed
  // segment from the offset hit origin.
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

  const gl = renderer.getContext();
  const previousTarget = renderer.getRenderTarget();
  while (gl.getError() !== gl.NO_ERROR) {
    // Drain setup errors so the post-render value identifies the lightmapper draw.
  }
  renderer.setRenderTarget(lightmapper.renderTarget);
  const framebufferComplete = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
  renderer.setRenderTarget(previousTarget);

  try {
    lightmapper.render();
    gl.finish();
    const glErrorAfterRender = gl.getError();
    const pixels = readTexture(renderer, lightmapper.textures.indirect, 1);
    const sourcePixels = readTexture(renderer, atlas.surfaceAlbedoTexture, 8);
    const sourceAlbedo = averageOccupied(sourcePixels);
    const packedMapPixels = readTexture(renderer, materialTextures.albedoMapAtlas, 1);
    const materialAlbedoPixels = readTexture(
      renderer,
      materialTextures.albedoTexture,
      materialTextures.side,
    );
    const diagnostics: MaterialGIDiagnostics = {
      extFloatBlend: !!gl.getExtension('EXT_float_blend'),
      extColorBufferFloat: !!gl.getExtension('EXT_color_buffer_float'),
      extFloatLinear: !!gl.getExtension('OES_texture_float_linear'),
      framebufferComplete,
      glErrorAfterRender,
      packedMapSample: firstPixel(packedMapPixels),
      materialAlbedoSample: firstPixel(materialAlbedoPixels),
    };
    return {
      indirect: [pixels[0] ?? 0, pixels[1] ?? 0, pixels[2] ?? 0],
      expectedAlbedo: options.expectedAlbedo,
      sourceAlbedo,
      extractedUvs: [...surfaces.uvs],
      compactBaseColorAtlas: materialTextures.albedoMapAtlas.type !== FloatType,
      compactSurfaceAlbedo: atlas.surfaceAlbedoTexture.type !== FloatType,
      diagnostics,
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

function makeSlabGeometry(
  uv0: readonly [number, number],
  uv1?: readonly [number, number],
): BufferGeometry {
  const geometry = new BoxGeometry(200, 0.1, 200);
  geometry.translate(0, 1, 0);
  const position = geometry.getAttribute('position');
  const lightmapUvs = geometry.getAttribute('uv').clone();
  geometry.setAttribute('uv', constantUvAttribute(position.count, uv0));
  if (uv1) geometry.setAttribute('uv1', constantUvAttribute(position.count, uv1));
  geometry.setAttribute('uv2', lightmapUvs);
  return geometry;
}

function constantUvAttribute(count: number, uv: readonly [number, number]): BufferAttribute {
  const data = new Float32Array(count * 2);
  for (let i = 0; i < count; i++) {
    data[i * 2] = uv[0];
    data[i * 2 + 1] = uv[1];
  }
  return new BufferAttribute(data, 2);
}

function dataTexture(rgba: readonly number[], width = 1, height = 1): DataTexture {
  const texture = new DataTexture(new Float32Array(rgba), width, height, RGBAFormat, FloatType);
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

function firstPixel(pixels: Float32Array): [number, number, number, number] {
  return [pixels[0] ?? 0, pixels[1] ?? 0, pixels[2] ?? 0, pixels[3] ?? 0];
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
