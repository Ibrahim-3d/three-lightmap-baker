/**
 * PTRenderer - erichlof-style real-time path tracer for the viewport.
 *
 * 3-pass ping-pong (identical to erichlof's InitCommon.js):
 *   Pass 1: PT shader  → pathTracingRT   (1 sample, reads prev frame)
 *   Pass 2: copy       → screenCopyRT    (ping-pong buffer)
 *   Pass 3: output     → screen          (edge-aware denoiser + tone mapping)
 */

import {
  DataTexture,
  FloatType,
  GLSL3,
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

export type PTSceneUniforms = Record<string, { value: unknown }>;

export interface PTRendererOptions {
  fragmentShader: string;
  sceneUniforms?: PTSceneUniforms;
  sceneIsDynamic?: boolean;
  renderScale?: number;
  debugVis?: number;
}

const _planeGeo = new PlaneGeometry(2, 2);
const _makeMesh = (mat: ShaderMaterial): Mesh => new Mesh(_planeGeo, mat);

function requireUniform(material: ShaderMaterial, key: string): { value: unknown } {
  const uniform = material.uniforms[key];
  if (!uniform) throw new Error(`[pt-renderer] missing ${key} uniform`);
  return uniform;
}

export class PTRenderer {
  private ptScene = new Scene();
  private copyScene = new Scene();
  private outputScene = new Scene();
  private orthoCamera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

  private ptRT!: WebGLRenderTarget;
  private copyRT!: WebGLRenderTarget;

  private ptMat!: ShaderMaterial;
  private copyMat!: ShaderMaterial;
  private outputMat!: ShaderMaterial;

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

  async init(renderer: WebGLRenderer): Promise<void> {
    const noiseSize = 128;
    const noiseData = new Uint8Array(noiseSize * noiseSize);
    for (let i = 0; i < noiseData.length; i++) noiseData[i] = Math.floor(Math.random() * 256);
    const noiseTex = new DataTexture(noiseData, noiseSize, noiseSize, RedFormat, UnsignedByteType);
    noiseTex.minFilter = noiseTex.magFilter = NearestFilter;
    noiseTex.generateMipmaps = false;
    noiseTex.needsUpdate = true;

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

    const shared = {
      tPreviousTexture: { value: this.copyRT.texture },
      tBlueNoiseTexture: { value: noiseTex },
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
    const glslOpts = { glslVersion: GLSL3, depthTest: false, depthWrite: false };

    const resolvedFrag = resolveIncludes(this.opts.fragmentShader);
    console.info('[PTRenderer] resolved fragment shader length:', resolvedFrag.length);
    this.ptMat = new ShaderMaterial({
      uniforms: ptUniforms,
      defines: {
        NUM_ALBEDO_TEXTURES: 0,
        DEBUG_VIS: this.opts.debugVis ?? 0,
      },
      vertexShader: vertSrc,
      fragmentShader: resolvedFrag,
      ...glslOpts,
    });
    this.ptScene.add(_makeMesh(this.ptMat));

    this.copyMat = new ShaderMaterial({
      uniforms: { tPathTracedImageTexture: { value: this.ptRT.texture } },
      vertexShader: vertSrc,
      fragmentShader: screenCopySrc,
      ...glslOpts,
    });
    this.copyScene.add(_makeMesh(this.copyMat));

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
      ...glslOpts,
    });
    this.outputScene.add(_makeMesh(this.outputMat));

    this._ready = true;
  }

  notifyCameraMoving(): void {
    this._cameraIsMoving = true;
  }

  resetAccumulation(): void {
    this.sampleCounter = 1;
    this.frameCounter = 1;
    this._cameraRecentlyMoving = true;
  }

  setDefine(key: string, value: number | boolean | string): void {
    if (!this.ptMat) return;
    this.ptMat.defines[key] = value;
    this.ptMat.needsUpdate = true;
  }

  render(renderer: WebGLRenderer, camera: PerspectiveCamera, deltaMs: number): void {
    if (!this._ready || this._disposed) return;
    this.elapsedTime += deltaMs * 0.001;

    this._syncResize(renderer);
    this._updateSampleCounter();
    this._updateUniforms(camera);

    const prevAutoClear = renderer.autoClear;
    renderer.autoClear = false;

    try {
      renderer.setRenderTarget(this.ptRT);
      renderer.render(this.ptScene, camera);

      renderer.setRenderTarget(this.copyRT);
      renderer.render(this.copyScene, this.orthoCamera);

      renderer.setRenderTarget(null);
      renderer.render(this.outputScene, this.orthoCamera);
    } finally {
      renderer.autoClear = prevAutoClear;
    }
    this._cameraIsMoving = false;
  }

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

  private _syncResize(renderer: WebGLRenderer): void {
    const w = Math.floor(renderer.domElement.width * this.renderScale);
    const h = Math.floor(renderer.domElement.height * this.renderScale);
    if (w === this._w && h === this._h) return;
    this._w = w;
    this._h = h;
    this.ptRT.setSize(w, h);
    this.copyRT.setSize(w, h);
    (requireUniform(this.ptMat, 'uResolution').value as Vector2).set(w, h);
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
        requireUniform(this.ptMat, 'uPreviousSampleCount').value = this.sampleCounter;
        this.frameCounter = 1;
        this._cameraRecentlyMoving = true;
      }
      this.sampleCounter = 1;
    }
  }

  private _updateUniforms(camera: PerspectiveCamera): void {
    camera.updateMatrixWorld();
    const u = this.ptMat;

    (requireUniform(u, 'uCameraMatrix').value as Matrix4).copy(camera.matrixWorld);
    const fovRad = camera.fov * 0.5 * (Math.PI / 180);
    const vLen = Math.tan(fovRad);
    requireUniform(u, 'uVLen').value = vLen;
    requireUniform(u, 'uULen').value = vLen * camera.aspect;
    requireUniform(u, 'uTime').value = this.elapsedTime;
    requireUniform(u, 'uSampleCounter').value = this.sampleCounter;
    requireUniform(u, 'uFrameCounter').value = this.frameCounter;
    requireUniform(u, 'uCameraIsMoving').value = this._cameraIsMoving;
    requireUniform(u, 'uSceneIsDynamic').value = this.sceneIsDynamic;
    (requireUniform(u, 'uRandomVec2').value as Vector2).set(Math.random(), Math.random());

    const ou = this.outputMat;
    requireUniform(ou, 'uSampleCounter').value = this.sampleCounter;
    requireUniform(ou, 'uOneOverSampleCounter').value = 1.0 / this.sampleCounter;
    requireUniform(ou, 'uCameraIsMoving').value = this._cameraIsMoving;
    requireUniform(ou, 'uSceneIsDynamic').value = this.sceneIsDynamic;
  }
}
