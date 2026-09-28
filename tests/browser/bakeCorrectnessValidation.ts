import {
  BoxGeometry,
  PlaneGeometry,
  Color,
  DataTexture,
  FloatType,
  RGBAFormat,
  NearestFilter,
  Mesh,
  MeshStandardMaterial,
  Vector3,
  WebGLRenderer,
  WebGLRenderTarget,
  OrthographicCamera,
  ShaderMaterial,
  Scene,
  DirectionalLight,
} from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import {
  LightmapBaker,
  generateLightmapper,
  runComposite,
  mergeGeometry,
  extractPerTriangleMaterials,
  buildMaterialTextures,
  type PackedLight,
} from 'baker-classic';
import { runPostProcess } from '../../packages/baker-classic/src/lightmap/Refinement';
import { createDownscale } from '../../packages/baker-classic/src/lightmap/Downscale';
function texture(data: number[], width = 1, height = 1): DataTexture {
  const t = new DataTexture(new Float32Array(data), width, height, RGBAFormat, FloatType);
  t.minFilter = t.magFilter = NearestFilter;
  t.needsUpdate = true;
  return t;
}
function read(renderer: WebGLRenderer, source: any, width = 1, height = 1): number[] {
  const target = new WebGLRenderTarget(width, height, { type: FloatType });
  const material = new ShaderMaterial({
    uniforms: { map: { value: source } },
    vertexShader: 'varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position,1.0);}',
    fragmentShader:
      'uniform sampler2D map; varying vec2 vUv; void main(){gl_FragColor=texture2D(map,vUv);}',
  });
  const quad = new Mesh(new PlaneGeometry(2, 2), material);
  const previous = renderer.getRenderTarget();
  try {
    renderer.setRenderTarget(target);
    renderer.render(quad, new OrthographicCamera());
    const data = new Float32Array(width * height * 4);
    renderer.readRenderTargetPixels(target, 0, 0, width, height, data);
    return Array.from(data);
  } finally {
    renderer.setRenderTarget(previous);
    target.dispose();
    material.dispose();
    quad.geometry.dispose();
  }
}
export function validateTransport() {
  const renderer = new WebGLRenderer();
  const position = texture([0, 0, 0, 1]),
    normal = texture([0, 1, 0, 1]);
  const sample = (lights: PackedLight[], sky = 0, bounces = 0, ceiling = false): number[] => {
    const mesh = new Mesh(
      ceiling ? new PlaneGeometry(200, 200) : new BoxGeometry(),
      new MeshStandardMaterial({ color: new Color(0.5, 0.5, 0.5) }),
    );
    if (ceiling) {
      mesh.rotation.x = Math.PI / 2;
      mesh.position.y = 1;
    } else mesh.position.set(100, 100, 100);
    mesh.updateMatrixWorld(true);
    const merged = mergeGeometry([mesh]);
    const bvh = new MeshBVH(merged);
    const mt = buildMaterialTextures(renderer, extractPerTriangleMaterials(merged, [mesh]));
    const mapper = generateLightmapper(renderer, position, normal, bvh, {
      resolution: 1,
      casts: 16,
      filterMode: NearestFilter,
      lights,
      skyColor: new Color(1, 1, 1),
      skyIntensity: sky,
      directLightEnabled: true,
      indirectLightEnabled: true,
      albedoTexture: mt.albedoTexture,
      emissiveTexture: mt.emissiveTexture,
      uv01Texture: mt.uv01Texture,
      uv2MapTexture: mt.uv2MapTexture,
      mapRectTexture: mt.mapRectTexture,
      mapTransform0Texture: mt.mapTransform0Texture,
      mapTransform1Texture: mt.mapTransform1Texture,
      albedoMapAtlas: mt.albedoMapAtlas,
      materialTextureSize: mt.side,
      targetSamples: 4,
      bounces,
    });
    try {
      for (let i = 0; i < 4; i++) mapper.render();
      const direct = new Float32Array(4),
        indirect = new Float32Array(4);
      renderer.readRenderTargetPixels(mapper.renderTarget, 0, 0, 1, 1, direct, 0, 0);
      renderer.readRenderTargetPixels(mapper.renderTarget, 0, 0, 1, 1, indirect, 0, 1);
      return [direct[0]!, indirect[0]!];
    } finally {
      mapper.dispose();
      mt.dispose();
      merged.dispose();
      mesh.geometry.dispose();
      mesh.material.dispose();
    }
  };
  const point = (height: number, range = 0): PackedLight => ({
    type: 'point',
    position: new Vector3(0, height, 0),
    direction: new Vector3(0, -1, 0),
    color: new Color(1, 1, 1),
    params: [0, 0, range, 2],
  });
  const directional: PackedLight = {
    type: 'directional',
    position: new Vector3(),
    direction: new Vector3(0, -1, 0),
    color: new Color(1, 1, 1),
    params: [0, 0, 0, 0],
  };
  const area = (width: number, back = false): PackedLight => ({
    type: 'area',
    position: new Vector3(0, 10, 0),
    direction: new Vector3(0, back ? 1 : -1, 0),
    color: new Color(1, 1, 1),
    params: [width, 1, 0, 0],
    tangent: new Vector3(1, 0, 0),
    bitangent: new Vector3(0, 0, 1),
  });
  try {
    return {
      bouncedSky: sample([], 1, 1, true)[1],
      blockedSky: sample([], 1, 0, true)[1],
      deeperSky: sample([], 1, 4, true)[1],
      near: sample([point(2)])[0],
      far: sample([point(4)])[0],
      cutoff: sample([point(4, 3)])[0],
      many: sample(Array.from({ length: 17 }, () => directional))[0],
      sky: sample([], 1, 0)[1],
      area: sample([area(1)])[0],
      doubleArea: sample([area(2)])[0],
      backArea: sample([area(1, true)])[0],
    };
  } finally {
    position.dispose();
    normal.dispose();
    renderer.dispose();
  }
}

export function validatePortableNodePasses() {
  const renderer = new WebGLRenderer();
  const direct = texture([1, 0.5, 0.25, 1]);
  const indirect = texture([0.5, 0.25, 0.125, 1]);
  const ao = texture([0.5, 0.5, 0.5, 1]);
  const sourceA = texture([0.25, 0.5, 0.75, 1]);
  const sourceB = texture([0.75, 0.25, 0.5, 1]);

  const composite = runComposite(
    renderer,
    { direct, indirect, ao },
    1,
    {
      directIntensity: 1,
      giIntensity: 2,
      aoEnabled: true,
      aoIntensity: 1,
      aoExponent: 1,
    },
  );
  const downscale = createDownscale(renderer, sourceA, 1);

  try {
    const initialComposite = read(renderer, composite.texture);
    const initialOptions = composite.getOptions();

    composite.refresh({ directIntensity: 0.5, giIntensity: 0, aoEnabled: false });
    const refreshedComposite = read(renderer, composite.texture);
    const refreshedOptions = composite.getOptions();

    const downscaleA = read(renderer, downscale.texture);
    downscale.setSource(sourceB);
    downscale.refresh();
    const downscaleB = read(renderer, downscale.texture);

    return {
      initialComposite,
      initialOptions,
      refreshedComposite,
      refreshedOptions,
      downscaleA,
      downscaleB,
    };
  } finally {
    composite.dispose();
    downscale.dispose();
    direct.dispose();
    indirect.dispose();
    ao.dispose();
    sourceA.dispose();
    sourceB.dispose();
    renderer.dispose();
  }
}

export async function validateFiltering() {
  const renderer = new WebGLRenderer();
  const source = texture(Array(3).fill([1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0]).flat(), 3, 3),
    owners = texture(Array(3).fill([0, 1, 0, 1, 0, 1, 0, 2, 0, 0, 0, 0]).flat(), 3, 3);
  try {
    const result = await runPostProcess(
      renderer,
      source,
      owners,
      3,
      {
        dilationIterations: 1,
        denoiseEnabled: true,
        denoiseSigma: 2,
        denoiseKSigma: 1,
        denoiseThreshold: 10,
      },
      undefined,
      { normals: owners },
    );
    try {
      return read(renderer, result.texture, 3);
    } finally {
      result.dispose();
    }
  } finally {
    source.dispose();
    owners.dispose();
    renderer.dispose();
  }
}
export async function validateLifecycle() {
  const renderer = new WebGLRenderer();
  const scene = new Scene();
  const a = new Mesh(new BoxGeometry(), new MeshStandardMaterial()),
    b = new Mesh(new BoxGeometry(), new MeshStandardMaterial());
  b.position.x = 3;
  scene.add(a, b, new DirectionalLight());
  const ga = a.geometry,
    gb = b.geometry;
  const baker = new LightmapBaker(renderer, {
    resolution: 64,
    samples: 1,
    castsPerFrame: 1,
    ao: false,
    denoise: false,
    refinementOptions: { dilationIterations: 0 },
    perMesh: { [b.uuid]: { resolution: 128 } },
  });
  let failed = false,
    cancelled = false,
    aoCancelled = false;
  try {
    const result = await baker.bake(scene);
    result.apply();
    const maps = result.lightmaps;
    const ac = new AbortController();
    try {
      await result.rebakeAO(
        { samples: 1, distance: 1, targetSamples: 2 },
        { signal: ac.signal, onFrame: () => ac.abort() },
      );
    } catch {
      aoCancelled = true;
    }
    const aoPreserved = [...maps].every(([mesh, map]) => result.lightmaps.get(mesh) === map);
    result.dispose();
    result.dispose();
    const restored = a.geometry === ga && b.geometry === gb;
    const before = renderer.info.memory.textures;
    try {
      await baker.bake(scene, {
        onFrame: (f) => {
          if (f.groupIndex === 1) throw new Error('injected failure');
        },
      });
    } catch {
      failed = true;
    }
    const after = renderer.info.memory.textures;
    const controller = new AbortController();
    try {
      await baker.bake(scene, { signal: controller.signal, onFrame: () => controller.abort() });
    } catch {
      cancelled = true;
    }
    return {
      failed,
      cancelled,
      aoCancelled,
      aoPreserved,
      restored,
      finalRestored: a.geometry === ga && b.geometry === gb,
      before,
      after,
    };
  } finally {
    ga.dispose();
    gb.dispose();
    a.material.dispose();
    b.material.dispose();
    renderer.dispose();
  }
}

export async function validateSupersampling() {
  const renderer = new WebGLRenderer();
  const mesh = new Mesh(new BoxGeometry(), new MeshStandardMaterial());
  const original = mesh.geometry;
  const scene = new Scene();
  scene.add(mesh, new DirectionalLight());
  try {
    const baker = new LightmapBaker(renderer, {
      resolution: 64,
      superSample: 2,
      samples: 1,
      castsPerFrame: 1,
      ao: false,
      denoise: true,
      refinementOptions: { dilationIterations: 2 },
    });
    const result = await baker.bake(scene);
    try {
      const map = result.lightmaps.get(mesh)!;
      const pixels = read(renderer, map, 64, 64);
      return {
        width: map.image.width,
        height: map.image.height,
        finite: pixels.every(Number.isFinite),
        lit: pixels.some((v, i) => i % 4 !== 3 && v > 0.01),
      };
    } finally {
      result.dispose();
    }
  } finally {
    original.dispose();
    mesh.material.dispose();
    renderer.dispose();
  }
}
