import {
  ClampToEdgeWrapping,
  Color,
  DataTexture,
  FloatType,
  LinearFilter,
  Mesh,
  NearestFilter,
  OrthographicCamera,
  PlaneGeometry,
  RGBAFormat,
  ShaderMaterial,
  Texture,
  UnsignedByteType,
  Vector4,
  WebGLRenderer,
  WebGLRenderTarget,
} from 'three';
import type { PerTriangleMaterials } from './GeometryUtils';

const MAX_MAP_TILE_SIZE = 512;
const MAP_GUTTER = 1;

/** GPU surface records, all keyed by the post-BVH triangle ID. */
export interface MaterialTextures {
  albedoTexture: DataTexture;
  emissiveTexture: DataTexture;
  uv01Texture: DataTexture;
  uv2MapTexture: DataTexture;
  mapRectTexture: DataTexture;
  mapTransform0Texture: DataTexture;
  mapTransform1Texture: DataTexture;
  albedoMapAtlas: Texture;
  side: number;
  dispose(): void;
}

function makeTexture(data: Float32Array, side: number): DataTexture {
  const texture = new DataTexture(data, side, side, RGBAFormat, FloatType);
  texture.minFilter = NearestFilter;
  texture.magFilter = NearestFilter;
  texture.wrapS = ClampToEdgeWrapping;
  texture.wrapT = ClampToEdgeWrapping;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;
  return texture;
}

function makeCompactWhiteTexture(): DataTexture {
  const texture = new DataTexture(
    new Uint8Array([255, 255, 255, 255]),
    1,
    1,
    RGBAFormat,
    UnsignedByteType,
  );
  texture.minFilter = NearestFilter;
  texture.magFilter = NearestFilter;
  texture.needsUpdate = true;
  return texture;
}

export function buildMaterialTextures(
  renderer: WebGLRenderer,
  perTriangle: PerTriangleMaterials,
): MaterialTextures {
  const count = perTriangle.totalTriangles;
  const side = Math.max(1, Math.ceil(Math.sqrt(count)));
  const texelCount = side * side;
  const albedo = new Float32Array(texelCount * 4);
  const emissive = new Float32Array(texelCount * 4);
  const uv01 = new Float32Array(texelCount * 4);
  const uv2Map = new Float32Array(texelCount * 4);
  const mapRect = new Float32Array(texelCount * 4);
  const mapTransform0 = new Float32Array(texelCount * 4);
  const mapTransform1 = new Float32Array(texelCount * 4);
  const atlas = buildAlbedoMapAtlas(renderer, perTriangle.maps);

  for (let triangle = 0; triangle < count; triangle++) {
    const rgb = triangle * 3;
    const uv = triangle * 6;
    const wrap = triangle * 2;
    const dst = triangle * 4;
    albedo.set(
      [
        perTriangle.albedo[rgb] ?? 0,
        perTriangle.albedo[rgb + 1] ?? 0,
        perTriangle.albedo[rgb + 2] ?? 0,
        1,
      ],
      dst,
    );
    emissive.set(
      [
        perTriangle.emissive[rgb] ?? 0,
        perTriangle.emissive[rgb + 1] ?? 0,
        perTriangle.emissive[rgb + 2] ?? 0,
        1,
      ],
      dst,
    );
    uv01.set(
      [
        perTriangle.uvs[uv] ?? 0,
        perTriangle.uvs[uv + 1] ?? 0,
        perTriangle.uvs[uv + 2] ?? 0,
        perTriangle.uvs[uv + 3] ?? 0,
      ],
      dst,
    );
    const map = perTriangle.maps[triangle] ?? null;
    const rect = map ? atlas.rects.get(map) : undefined;
    uv2Map.set([perTriangle.uvs[uv + 4] ?? 0, perTriangle.uvs[uv + 5] ?? 0, rect ? 1 : 0, 0], dst);
    if (rect) mapRect.set(rect, dst);
    mapTransform0.set(
      [
        perTriangle.mapTransforms[uv] ?? 1,
        perTriangle.mapTransforms[uv + 1] ?? 0,
        perTriangle.mapTransforms[uv + 2] ?? 0,
        perTriangle.mapTransforms[uv + 3] ?? 1,
      ],
      dst,
    );
    mapTransform1.set(
      [
        perTriangle.mapTransforms[uv + 4] ?? 0,
        perTriangle.mapTransforms[uv + 5] ?? 0,
        perTriangle.wrapModes[wrap] ?? ClampToEdgeWrapping,
        perTriangle.wrapModes[wrap + 1] ?? ClampToEdgeWrapping,
      ],
      dst,
    );
  }

  const owned = [
    makeTexture(albedo, side),
    makeTexture(emissive, side),
    makeTexture(uv01, side),
    makeTexture(uv2Map, side),
    makeTexture(mapRect, side),
    makeTexture(mapTransform0, side),
    makeTexture(mapTransform1, side),
  ] as const;
  return {
    albedoTexture: owned[0],
    emissiveTexture: owned[1],
    uv01Texture: owned[2],
    uv2MapTexture: owned[3],
    mapRectTexture: owned[4],
    mapTransform0Texture: owned[5],
    mapTransform1Texture: owned[6],
    albedoMapAtlas: atlas.texture,
    side,
    dispose: () => {
      for (const texture of owned) texture.dispose();
      atlas.dispose();
    },
  };
}

type AtlasBuild = {
  texture: Texture;
  rects: Map<Texture, readonly [number, number, number, number]>;
  dispose(): void;
};

function buildAlbedoMapAtlas(
  renderer: WebGLRenderer,
  maps: ReadonlyArray<Texture | null>,
): AtlasBuild {
  const uniqueMaps = [...new Set(maps.filter((map): map is Texture => map !== null))];
  if (!uniqueMaps.length) {
    const texture = makeCompactWhiteTexture();
    return { texture, rects: new Map(), dispose: () => texture.dispose() };
  }

  const grid = Math.ceil(Math.sqrt(uniqueMaps.length));
  const maxTextureSize = renderer.capabilities.maxTextureSize;
  const largestSource = uniqueMaps.reduce((largest, map) => {
    const image = map.image as { width?: number; height?: number } | undefined;
    return Math.max(largest, image?.width ?? 0, image?.height ?? 0);
  }, 0);
  const maximumCell = Math.floor(maxTextureSize / grid) - MAP_GUTTER * 2;
  const cellSize = Math.min(MAX_MAP_TILE_SIZE, Math.max(16, largestSource || 256), maximumCell);
  if (cellSize < 2) {
    throw new Error(
      `[baker] ${uniqueMaps.length} base-color maps exceed the GPU atlas limit (${maxTextureSize}px)`,
    );
  }
  const stride = cellSize + MAP_GUTTER * 2;
  const atlasSize = stride * grid;
  const target = new WebGLRenderTarget(atlasSize, atlasSize, {
    format: RGBAFormat,
    type: UnsignedByteType,
    minFilter: LinearFilter,
    magFilter: LinearFilter,
    generateMipmaps: false,
    depthBuffer: false,
    stencilBuffer: false,
  });
  target.texture.name = 'Baker base-color map atlas';

  const material = new ShaderMaterial({
    uniforms: { sourceMap: { value: uniqueMaps[0] } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position,1.0); }',
    fragmentShader:
      'precision highp float; uniform sampler2D sourceMap; varying vec2 vUv; void main(){ gl_FragColor=texture2D(sourceMap,vUv); }',
    depthTest: false,
    depthWrite: false,
  });
  const quad = new Mesh(new PlaneGeometry(2, 2), material);
  const camera = new OrthographicCamera();
  const previousTarget = renderer.getRenderTarget();
  const previousViewport = renderer.getViewport(new Vector4());
  const previousScissor = renderer.getScissor(new Vector4());
  const previousScissorTest = renderer.getScissorTest();
  const previousAutoClear = renderer.autoClear;
  const previousClearColor = renderer.getClearColor(new Color()).clone();
  const previousClearAlpha = renderer.getClearAlpha();
  const rects = new Map<Texture, readonly [number, number, number, number]>();

  try {
    renderer.autoClear = false;
    renderer.setRenderTarget(target);
    renderer.setClearColor(0xffffff, 1);
    renderer.setScissorTest(false);
    renderer.clear();
    for (let index = 0; index < uniqueMaps.length; index++) {
      const map = uniqueMaps[index]!;
      const column = index % grid;
      const row = Math.floor(index / grid);
      const x = column * stride + MAP_GUTTER;
      const y = row * stride + MAP_GUTTER;
      material.uniforms.sourceMap!.value = map;
      renderer.setViewport(x, y, cellSize, cellSize);
      renderer.setScissor(x, y, cellSize, cellSize);
      renderer.setScissorTest(true);
      renderer.render(quad, camera);
      rects.set(map, [
        (x + 0.5) / atlasSize,
        (y + 0.5) / atlasSize,
        (cellSize - 1) / atlasSize,
        (cellSize - 1) / atlasSize,
      ]);
    }
  } finally {
    renderer.setRenderTarget(previousTarget);
    renderer.setViewport(previousViewport);
    renderer.setScissor(previousScissor);
    renderer.setScissorTest(previousScissorTest);
    renderer.autoClear = previousAutoClear;
    renderer.setClearColor(previousClearColor, previousClearAlpha);
    quad.geometry.dispose();
    material.dispose();
  }

  return { texture: target.texture, rects, dispose: () => target.dispose() };
}
