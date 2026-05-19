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
 * This baker shares the same BVH, light DataTexture, and albedo textures with
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
  UnsignedByteType,
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

function makeWhiteTex(): DataTexture {
  const t = new DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1, RGBAFormat, UnsignedByteType);
  t.colorSpace = NoColorSpace;
  t.minFilter = t.magFilter = NearestFilter;
  t.generateMipmaps = false;
  t.needsUpdate = true;
  return t;
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
  private whiteTex: DataTexture;
  private ownedLightTex: DataTexture | null = null;

  constructor() {
    this.whiteTex = makeWhiteTex();
  }

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
    const size       = options.size        ?? 1024;
    const samples    = options.samples     ?? 128;
    const yieldEvery = options.yieldEvery  ?? 4;
    const onProgress = options.onProgress;

    const lightTex = options.lightTex ?? (this.ownedLightTex = makeEmptyLightTex());
    const numLights = options.numLights ?? 0;

    // Two ping-pong accum RTs + a final output RT.
    const rtA    = makeRT(size);
    const rtB    = makeRT(size);
    const rtOut  = makeRT(size);

    // Bake material — one instance, shared across all meshes in the scene.
    const mat = new PTBakeMaterial(sceneData, lightTex, this.whiteTex);
    mat.uniforms['uNumPTLights']!.value    = numLights;
    mat.uniforms['uSkyLightIntensity']!.value = options.skyIntensity ?? 1.0;

    // Divide material — renders accumulated RT → normalised output.
    const divideMat = new ShaderMaterial({
      vertexShader:   _divideVert,
      fragmentShader: _divideFrag,
      uniforms: {
        tAccum:        { value: null },
        uSampleCount:  { value: 1 },
      },
      glslVersion: /* GLSL3 */ '300 es' as never,
      depthTest:  false,
      depthWrite: false,
    });

    const divQuad = new Mesh(new PlaneGeometry(2, 2), divideMat);
    const divCam  = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const divScene = new Scene();
    divScene.add(divQuad);

    // Save + restore renderer state.
    const prevRT    = renderer.getRenderTarget();
    const prevAuto = renderer.autoClear;
    renderer.autoClear = false;

    try {
      // Clear accum buffers.
      renderer.setRenderTarget(rtA); renderer.clear();
      renderer.setRenderTarget(rtB); renderer.clear();

      let writeRT = rtA, readRT = rtB;

      for (let s = 0; s < samples; s++) {
        // Update per-sample uniforms.
        mat.uniforms['uSampleCounter']!.value = s + 1;
        mat.uniforms['uFrameCounter']!.value  = s + 1;
        mat.uniforms['uRandomVec2']!.value    = { x: Math.random(), y: Math.random() };
        mat.setPreviousTexture(readRT);

        renderer.setRenderTarget(writeRT);
        renderer.clear();

        // Render each mesh in UV2 space.
        for (const mesh of meshes) {
          const origMat = mesh.material;
          mesh.material = mat;
          // Patch modelMatrix uniform — ShaderMaterial doesn't auto-update it
          // for scene-less renders; THREE.js does update it if the mesh is in
          // a scene, so we add it temporarily.
          const tmpScene = new Scene();
          tmpScene.add(mesh);
          tmpScene.updateMatrixWorld(true);
          renderer.render(tmpScene, divCam);
          tmpScene.remove(mesh);
          mesh.material = origMat;
        }

        // Swap ping-pong.
        [writeRT, readRT] = [readRT, writeRT];

        if (s % yieldEvery === 0) {
          onProgress?.((s + 1) / samples);
          await yield_();
        }
      }

      // Final divide pass: readRT has the accumulated sum.
      divideMat.uniforms['tAccum']!.value       = readRT.texture;
      divideMat.uniforms['uSampleCount']!.value = samples;
      renderer.setRenderTarget(rtOut);
      renderer.clear();
      renderer.render(divScene, divCam);

    } finally {
      renderer.setRenderTarget(prevRT);
      renderer.autoClear = prevAuto;

      // Dispose intermediates but NOT rtOut (returned to caller).
      rtA.dispose();
      rtB.dispose();
      mat.dispose();
      divideMat.dispose();
      divQuad.geometry.dispose();
    }

    onProgress?.(1.0);

    return {
      texture: rtOut,
      samples,
      dispose: () => {
        rtOut.dispose();
        this.ownedLightTex?.dispose();
      },
    };
  }

  dispose(): void {
    this.whiteTex.dispose();
    this.ownedLightTex?.dispose();
  }
}

/**
 * Convenience: build BVH + bake in one call.
 * Caller is responsible for disposing the returned result and the BVHSceneData.
 */
export async function bakeWithPT(
  renderer: WebGLRenderer,
  scene: Object3D,
  meshes: Mesh[],
  options: PTBakeOptions = {},
): Promise<{ result: PTBakeResult; sceneData: BVHSceneData }> {
  const sceneData = buildBVHScene(scene as Scene);
  const baker     = new PTBaker();
  const result    = await baker.bake(renderer, meshes, sceneData, options);
  baker.dispose();
  return { result, sceneData };
}

export { disposeBVHSceneData };
