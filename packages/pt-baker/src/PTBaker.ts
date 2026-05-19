/**
 * PTBaker — UV-space path-traced lightmap baker.
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

// ── Types ─────────────────────────────────────────────────────────────────────

export interface PTBakeOptions {
  /** Lightmap resolution in texels. Default 1024. */
  size?: number;
  /** Total samples to accumulate. More → less noise. Default 128. */
  samples?: number;
  /** Ambient sky intensity (0–4). Default 1. */
  skyIntensity?: number;
  /** Light DataTexture from PTController (packed with current scene lights). */
  lightTex?: DataTexture;
  /** Num lights currently packed in lightTex. Default 0. */
  numLights?: number;
  /** Called each sample with progress 0..1. */
  onProgress?: (pct: number) => void;
  /** Yield interval in samples (yield to browser each N samples). Default 4. */
  yieldEvery?: number;
}

export interface PTBakeResult {
  /** Accumulated radiance / sampleCount — ready to use as lightMap. */
  texture: WebGLRenderTarget;
  /** Number of samples accumulated. */
  samples: number;
  /** Dispose all GPU resources owned by this result. */
  dispose(): void;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

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

/** Divide pass: normalizes the accumulated buffer by sampleCount. */
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

// ── PTBaker ───────────────────────────────────────────────────────────────────

export class PTBaker {
  private ownedLightTex: DataTexture | null = null;

  /**
   * Bake a lightmap for the given meshes.
   *
   * Meshes must have UV2 coordinates (xatlas or manual).  Scene lights should
   * already be packed into `options.lightTex` by the caller (typically from an
   * active PTController).
   */
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

    // Bake material — one instance, shared across all meshes in the scene.
    // The albedo array texture (with layer-0 white fallback) lives inside
    // sceneData; PTBakeMaterial wires it up automatically.
    const mat = new PTBakeMaterial(sceneData, lightTex);
    mat.uniforms['uNumPTLights']!.value = numLights;
    mat.uniforms['uSkyLightIntensity']!.value = options.skyIntensity ?? 1.0;

    // Divide material — renders accumulated RT → normalised output.
    const divideMat = new ShaderMaterial({
      vertexShader: _divideVert,
      fragmentShader: _divideFrag,
      uniforms: {
        tAccum: { value: null },
        uSampleCount: { value: samples },
      },
      glslVersion: '300 es' as unknown as undefined,
    });

    // UV-space pass: render every mesh into the ping-pong RT.
    // We swap the mesh's material for PTBakeMaterial, render to RT, restore.
    const originalMaterials = new Map<Mesh, Mesh['material']>();
    for (const m of meshes) {
      originalMaterials.set(m, m.material);
    }

    const orthoCam = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const passScene = new Scene();
    const fullscreenQuad = new Mesh(new PlaneGeometry(2, 2), divideMat);
    passScene.add(fullscreenQuad);

    let currentSrc = rtA;
    let currentDst = rtB;

    try {
      for (let i = 0; i < samples; i++) {
        // Update per-sample uniforms
        mat.uniforms['uSampleCounter']!.value = i + 1;
        mat.uniforms['uFrameCounter']!.value = i + 1;
        mat.uniforms['uRandomVec2']!.value = { x: Math.random(), y: Math.random() };
        mat.setPreviousTexture(currentSrc);

        // Apply bake material to every mesh
        for (const m of meshes) {
          m.material = mat;
        }

        // Render into destination RT
        renderer.setRenderTarget(currentDst);
        renderer.clear();
        // Each mesh renders in its own UV2 space; the bake vertex shader sets
        // gl_Position from uv2 directly, so any camera will do.
        for (const m of meshes) {
          const tmpScene = new Scene();
          tmpScene.add(m);
          renderer.render(tmpScene, orthoCam);
          // Restore parent
          if ((m as Object3D).parent === tmpScene) tmpScene.remove(m);
        }

        // Swap ping-pong
        [currentSrc, currentDst] = [currentDst, currentSrc];

        options.onProgress?.((i + 1) / samples);

        if ((i + 1) % yieldEvery === 0) await yield_();
      }

      // Restore original materials
      for (const m of meshes) {
        const orig = originalMaterials.get(m);
        if (orig) m.material = orig;
      }

      // Divide pass: accumulated radiance / sample count → rtOut
      divideMat.uniforms['tAccum']!.value = currentSrc.texture;
      divideMat.uniforms['uSampleCount']!.value = samples;
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

/**
 * Convenience: build BVH + bake in one call.
 * Caller is responsible for disposing the returned result and the BVHSceneData.
 */
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
