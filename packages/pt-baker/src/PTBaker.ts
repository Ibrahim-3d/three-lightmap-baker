/**
 * PTBaker - UV-space path-traced lightmap baker.
 *
 * Pipeline:
 *   1. Build BVH scene data from the live THREE.js scene (uses pt-renderer).
 *   2. For each target sample:
 *      - Render every mesh in UV2 space with PTBakeMaterial.
 *      - Accumulate into a ping-pong WebGLRenderTarget pair.
 *   3. After all samples: divide by sampleCount → output WebGLRenderTarget.
 *   4. (Optional) Caller applies classic baker's dilation/denoise on the result.
 *
 * This baker shares the same BVH, light DataTexture, and albedo array with
 * the real-time PTRenderer so preview and baked output are physically consistent.
 */

import {
  DataTexture,
  FloatType,
  Mesh,
  NearestFilter,
  NoColorSpace,
  OrthographicCamera,
  PlaneGeometry,
  RGBAFormat,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
  WebGLRenderTarget,
  type Object3D,
} from 'three';
import { buildBVHScene, disposeBVHSceneData, type BVHSceneData } from 'pt-renderer';
import { PTBakeMaterial } from './PTBakeMaterial';

export interface PTBakeOptions {
  size?: number;
  samples?: number;
  skyIntensity?: number;
  lightTex?: DataTexture;
  numLights?: number;
  onProgress?: (pct: number) => void;
  yieldEvery?: number;
}

export interface PTBakeResult {
  texture: WebGLRenderTarget;
  samples: number;
  dispose(): void;
}

function makeEmptyLightTex(): DataTexture {
  const data = new Float32Array(64 * 4);
  const t = new DataTexture(data, 64, 1, RGBAFormat, FloatType);
  t.colorSpace = NoColorSpace;
  t.minFilter = t.magFilter = NearestFilter;
  t.generateMipmaps = false;
  t.needsUpdate = true;
  return t;
}

function makeRT(size: number): WebGLRenderTarget {
  const rt = new WebGLRenderTarget(size, size, {
    type: FloatType,
    format: RGBAFormat,
    minFilter: NearestFilter,
    magFilter: NearestFilter,
    generateMipmaps: false,
    depthBuffer: false,
  });
  rt.texture.colorSpace = NoColorSpace;
  rt.texture.flipY = false;
  return rt;
}

const _divideVert = `
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`;
const _divideFrag = `
precision highp float;
uniform sampler2D tAccum;
uniform float uSampleCount;
out vec4 pc_fragColor;
void main() {
  vec3 radiance = texelFetch(tAccum, ivec2(gl_FragCoord.xy), 0).rgb;
  pc_fragColor = vec4(radiance / uSampleCount, 1.0);
}
`;

function yield_(): Promise<void> {
  return new Promise((r) => setTimeout(r, 0));
}

function uniform(material: ShaderMaterial, name: string): { value: unknown } {
  const entry = material.uniforms[name];
  if (!entry) throw new Error(`[pt-baker] missing ${name} uniform`);
  return entry;
}

export class PTBaker {
  private ownedLightTex: DataTexture | null = null;

  async bake(
    renderer: WebGLRenderer,
    meshes: Mesh[],
    sceneData: BVHSceneData,
    options: PTBakeOptions = {},
  ): Promise<PTBakeResult> {
    const size = options.size ?? 1024;
    const samples = options.samples ?? 128;
    const yieldEvery = options.yieldEvery ?? 4;
    const numLights = options.numLights ?? 0;
    const lightTex = options.lightTex ?? (this.ownedLightTex ??= makeEmptyLightTex());

    const rtA = makeRT(size);
    const rtB = makeRT(size);
    const rtOut = makeRT(size);

    const mat = new PTBakeMaterial(sceneData, lightTex);
    uniform(mat, 'uNumPTLights').value = numLights;
    uniform(mat, 'uSkyLightIntensity').value = options.skyIntensity ?? 1.0;

    const divideMat = new ShaderMaterial({
      vertexShader: _divideVert,
      fragmentShader: _divideFrag,
      uniforms: {
        tAccum: { value: null },
        uSampleCount: { value: samples },
      },
      glslVersion: '300 es' as unknown as undefined,
    });

    const originalMaterials = new Map<Mesh, Mesh['material']>();
    for (const m of meshes) originalMaterials.set(m, m.material);

    const orthoCam = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const passScene = new Scene();
    const fullscreenQuad = new Mesh(new PlaneGeometry(2, 2), divideMat);
    passScene.add(fullscreenQuad);

    let currentSrc = rtA;
    let currentDst = rtB;

    try {
      for (let i = 0; i < samples; i++) {
        uniform(mat, 'uSampleCounter').value = i + 1;
        uniform(mat, 'uFrameCounter').value = i + 1;
        uniform(mat, 'uRandomVec2').value = { x: Math.random(), y: Math.random() };
        mat.setPreviousTexture(currentSrc);

        for (const m of meshes) m.material = mat;

        renderer.setRenderTarget(currentDst);
        renderer.clear();
        for (const m of meshes) {
          const tmpScene = new Scene();
          tmpScene.add(m);
          renderer.render(tmpScene, orthoCam);
          if ((m as Object3D).parent === tmpScene) tmpScene.remove(m);
        }

        [currentSrc, currentDst] = [currentDst, currentSrc];
        options.onProgress?.((i + 1) / samples);
        if ((i + 1) % yieldEvery === 0) await yield_();
      }

      for (const m of meshes) {
        const orig = originalMaterials.get(m);
        if (orig) m.material = orig;
      }

      uniform(divideMat, 'tAccum').value = currentSrc.texture;
      uniform(divideMat, 'uSampleCount').value = samples;
      renderer.setRenderTarget(rtOut);
      renderer.clear();
      renderer.render(passScene, orthoCam);
    } finally {
      renderer.setRenderTarget(null);
    }

    return {
      texture: rtOut,
      samples,
      dispose: () => {
        mat.dispose();
        divideMat.dispose();
        rtA.dispose();
        rtB.dispose();
        rtOut.dispose();
        this.ownedLightTex?.dispose();
      },
    };
  }

  dispose(): void {
    this.ownedLightTex?.dispose();
  }
}

export async function bakePTLightmap(
  renderer: WebGLRenderer,
  scene: Scene,
  meshes: Mesh[],
  options: PTBakeOptions = {},
): Promise<{ result: PTBakeResult; sceneData: BVHSceneData }> {
  const sceneData = buildBVHScene(scene);
  const baker = new PTBaker();
  const result = await baker.bake(renderer, meshes, sceneData, options);
  return {
    result: {
      ...result,
      dispose: () => {
        result.dispose();
        baker.dispose();
        disposeBVHSceneData(sceneData);
      },
    },
    sceneData,
  };
}
