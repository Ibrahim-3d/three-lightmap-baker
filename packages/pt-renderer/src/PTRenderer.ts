/**
 * PTRenderer — erichlof-style real-time path tracer for the Atelier viewport.
 *
 * 3-pass ping-pong (identical to erichlof's InitCommon.js):
 *   Pass 1: PT shader  → pathTracingRT   (1 sample, reads prev frame)
 *   Pass 2: copy       → screenCopyRT    (ping-pong buffer)
 *   Pass 3: output     → screen          (edge-aware denoiser + tone mapping)
 */

import {
  DataTexture,
  FloatType,
  Matrix4,
  Mesh,
  NearestFilter,
  NoColorSpace,
  OrthographicCamera,
  PlaneGeometry,
  type PerspectiveCamera,
  RGBAFormat,
  RedFormat,
  Scene,
  ShaderMaterial,
  UnsignedByteType,
  Vector2,
  WebGLRenderer,
  WebGLRenderTarget,
} from 'three';

import { registerChunks } from './chunks';
import { resolveIncludes } from './preprocess';

import vertSrc from './shaders/vertex.glsl?raw';
import screenCopySrc from './shaders/screen-copy.frag.glsl?raw';
import screenOutSrc from './shaders/screen-output.frag.glsl?raw';

// ── Types ────────────────────────────────────────────────────────────────────

/** Scene-specific uniforms merged into the PT pass material. */
export type PTSceneUniforms = Record<string, { value: unknown }>;

export interface PTRendererOptions {
  /** Fragment shader source (may contain #include directives). */
  fragmentShader: string;
  /** Scene-specific uniforms merged into PT pass (DataTextures, Colors, etc.). */
  sceneUniforms?: PTSceneUniforms;
  /**
   * When true sampleCounter stays at 1.0 every frame — always live.
   * Set false for static scenes so progressive accumulation kicks in.
   */
  sceneIsDynamic?: boolean;
  /** Resolution scale factor. Default 1.0. Use 0.5 on mobile. */
  renderScale?: number;
}

// Shared fullscreen plane for all three passes
const _planeGeo = new PlaneGeometry(2, 2);
const _makeMesh = (mat: ShaderMaterial) => new Mesh(_planeGeo, mat);

// ── PTRenderer ───────────────────────────────────────────────────────────────

export class PTRenderer {
  // Three scenes — one per pass
  private ptScene = new Scene();
  private copyScene = new Scene();
  private outputScene = new Scene();
  private orthoCamera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

  // Render targets (ping-pong)
  private ptRT!: WebGLRenderTarget;
  private copyRT!: WebGLRenderTarget;

  // Materials per pass
  private ptMat!: ShaderMaterial;
  private copyMat!: ShaderMaterial;
  private outputMat!: ShaderMaterial;

  // Accumulation state (mirrors erichlof's InitCommon.js)
  private sampleCounter = 1;
  private frameCounter = 1;
  private elapsedTime = 0;
  private _cameraIsMoving = false;
  private _cameraRecentlyMoving = false;

  sceneIsDynamic: boolean;
  renderScale: number;

  private _w = 0;
  private _h = 0;
  private _ready = false;
  private _disposed = false;

  constructor(private readonly opts: PTRendererOptions) {
    registerChunks();
    this.sceneIsDynamic = opts.sceneIsDynamic ?? false;
    this.renderScale = opts.renderScale ?? 1.0;
  }

  // ── Async init (loads blue-noise texture, builds materials) ──────────────

  async init(renderer: WebGLRenderer): Promise<void> {
    // Generate 128x128 blue-noise approximation on the CPU — no file loading,
    // no URL resolution, works everywhere. Uniform random is slightly noisier
    // per-frame than true blue noise but visually identical after ~10 samples.
    const noiseSize = 128;
    const noiseData = new Uint8Array(noiseSize * noiseSize);
    for (let i = 0; i < noiseData.length; i++) noiseData[i] = Math.floor(Math.random() * 256);
    const blueNoise = new DataTexture(noiseData, noiseSize, noiseSize, RedFormat, UnsignedByteType);
    blueNoise.minFilter = blueNoise.magFilter = NearestFilter;
    blueNoise.generateMipmaps = false;
    blueNoise.needsUpdate = true;

    const w = Math.floor(renderer.domElement.width * this.renderScale);
    const h = Math.floor(renderer.domElement.height * this.renderScale);
    this._w = w;
    this._h = h;

    const rtOpts = {
      minFilter: NearestFilter,
      magFilter: NearestFilter,
      format: RGBAFormat,
      type: FloatType,
      colorSpace: NoColorSpace,
      depthBuffer: false,
      stencilBuffer: false,
    };
    this.ptRT = new WebGLRenderTarget(w, h, rtOpts);
    this.copyRT = new WebGLRenderTarget(w, h, rtOpts);

    // ── Shared PT uniforms ─────────────────────────────────────────────────
    const shared = {
      tPreviousTexture: { value: this.copyRT.texture },
      tBlueNoiseTexture: { value: blueNoise },
      uCameraMatrix: { value: new Matrix4() },
      uResolution: { value: new Vector2(w, h) },
      uRandomVec2: { value: new Vector2() },
      uEPS_intersect: { value: 0.01 },
      uTime: { value: 0 },
      uSampleCounter: { value: 1 },
      uFrameCounter: { value: 1 },
      uULen: { value: 1 },
      uVLen: { value: 1 },
      uApertureSize: { value: 0 },
      uFocusDistance: { value: 100 },
      uCameraIsMoving: { value: false },
      uPreviousSampleCount: { value: 1 },
      uSceneIsDynamic: { value: this.sceneIsDynamic },
      uUseOrthographicCamera: { value: false },
    };

    const ptUniforms = { ...shared, ...(this.opts.sceneUniforms ?? {}) };

    // ── Pass 1: path tracing ───────────────────────────────────────────────
    this.ptMat = new ShaderMaterial({
      uniforms: ptUniforms,
      defines: { NUM_ALBEDO_TEXTURES: 0 },
      vertexShader: vertSrc,
      fragmentShader: resolveIncludes(this.opts.fragmentShader),
      depthTest: false,
      depthWrite: false,
    });
    this.ptScene.add(_makeMesh(this.ptMat));

    // ── Pass 2: copy (ping-pong) ───────────────────────────────────────────
    this.copyMat = new ShaderMaterial({
      uniforms: { tPathTracedImageTexture: { value: this.ptRT.texture } },
      vertexShader: vertSrc,
      fragmentShader: screenCopySrc,
      depthTest: false,
      depthWrite: false,
    });
    this.copyScene.add(_makeMesh(this.copyMat));

    // ── Pass 3: output (edge-aware denoiser + tone mapping) ────────────────
    this.outputMat = new ShaderMaterial({
      uniforms: {
        tPathTracedImageTexture: { value: this.ptRT.texture },
        uSampleCounter: { value: 1 },
        uOneOverSampleCounter: { value: 1 },
        uPixelEdgeSharpness: { value: 1.0 },
        uEdgeSharpenSpeed: { value: 0.05 },
        uCameraIsMoving: { value: false },
        uSceneIsDynamic: { value: this.sceneIsDynamic },
        uUseToneMapping: { value: true },
      },
      vertexShader: vertSrc,
      fragmentShader: screenOutSrc,
      depthTest: false,
      depthWrite: false,
    });
    this.outputScene.add(_makeMesh(this.outputMat));

    this._ready = true;
  }

  // ── Public API ────────────────────────────────────────────────────────────

  notifyCameraMoving(): void {
    this._cameraIsMoving = true;
  }

  resetAccumulation(): void {
    this.sampleCounter = 1;
    this.frameCounter = 1;
    this._cameraRecentlyMoving = true;
  }

  /**
   * Set a GLSL preprocessor #define on the PT pass material.
   * Triggers shader recompile (acceptable on scene load, not per-frame).
   */
  setDefine(key: string, value: number | boolean | string): void {
    if (!this.ptMat) return;
    this.ptMat.defines[key] = value;
    this.ptMat.needsUpdate = true;
  }

  /**
   * Render one PT frame (3 passes). Call inside rAF instead of renderer.render().
   * @param deltaMs  milliseconds since last frame
   */
  render(renderer: WebGLRenderer, camera: PerspectiveCamera, deltaMs: number): void {
    if (!this._ready || this._disposed) return;
    this.elapsedTime += deltaMs * 0.001;

    this._syncResize(renderer);
    this._updateSampleCounter();
    this._updateUniforms(camera);

    renderer.autoClear = false;
    renderer.setRenderTarget(this.ptRT);
    renderer.render(this.ptScene, camera);

    renderer.setRenderTarget(this.copyRT);
    renderer.render(this.copyScene, this.orthoCamera);

    renderer.setRenderTarget(null);
    renderer.render(this.outputScene, this.orthoCamera);

    renderer.autoClear = true;
    this._cameraIsMoving = false;
  }

  /** Direct access to the PT pass uniforms. */
  get uniforms(): ShaderMaterial['uniforms'] {
    return this.ptMat?.uniforms ?? {};
  }

  dispose(): void {
    if (this._disposed) return;
    this._disposed = true;
    this.ptRT?.dispose();
    this.copyRT?.dispose();
    this.ptMat?.dispose();
    this.copyMat?.dispose();
    this.outputMat?.dispose();
  }

  // ── Private ───────────────────────────────────────────────────────────────

  private _syncResize(renderer: WebGLRenderer): void {
    const w = Math.floor(renderer.domElement.width * this.renderScale);
    const h = Math.floor(renderer.domElement.height * this.renderScale);
    if (w === this._w && h === this._h) return;
    this._w = w;
    this._h = h;
    this.ptRT.setSize(w, h);
    this.copyRT.setSize(w, h);
    (this.ptMat.uniforms['uResolution']!.value as Vector2).set(w, h);
    this.resetAccumulation();
  }

  private _updateSampleCounter(): void {
    if (!this._cameraIsMoving) {
      this.sampleCounter = this.sceneIsDynamic ? 1 : this.sampleCounter + 1;
      this.frameCounter += 1;
      this._cameraRecentlyMoving = false;
    } else {
      this.frameCounter += 1;
      if (!this._cameraRecentlyMoving) {
        this.ptMat.uniforms['uPreviousSampleCount']!.value = this.sampleCounter;
        this.frameCounter = 1;
        this._cameraRecentlyMoving = true;
      }
      this.sampleCounter = 1;
    }
  }

  private _updateUniforms(camera: PerspectiveCamera): void {
    camera.updateMatrixWorld();
    const u = this.ptMat.uniforms;

    (u['uCameraMatrix']!.value as Matrix4).copy(camera.matrixWorld);
    const fovRad = camera.fov * 0.5 * (Math.PI / 180);
    const vLen = Math.tan(fovRad);
    u['uVLen']!.value = vLen;
    u['uULen']!.value = vLen * camera.aspect;
    u['uTime']!.value = this.elapsedTime;
    u['uSampleCounter']!.value = this.sampleCounter;
    u['uFrameCounter']!.value = this.frameCounter;
    u['uCameraIsMoving']!.value = this._cameraIsMoving;
    u['uSceneIsDynamic']!.value = this.sceneIsDynamic;
    (u['uRandomVec2']!.value as Vector2).set(Math.random(), Math.random());

    const ou = this.outputMat.uniforms;
    ou['uSampleCounter']!.value = this.sampleCounter;
    ou['uOneOverSampleCounter']!.value = 1.0 / this.sampleCounter;
    ou['uCameraIsMoving']!.value = this._cameraIsMoving;
    ou['uSceneIsDynamic']!.value = this.sceneIsDynamic;
  }
}
