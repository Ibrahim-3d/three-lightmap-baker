/**
 * PTController — scene-agnostic path-traced viewport controller.
 *
 * Syncs THREE.js lights into a DataTexture each frame so changes to
 * intensity/color/position are immediately reflected. Supports up to 16
 * lights (raised from 4 via DataTexture; uniform arrays capped at MAX=4).
 */

import {
  DataTexture,
  DirectionalLight,
  FloatType,
  NearestFilter,
  NoColorSpace,
  PointLight,
  RGBAFormat,
  RectAreaLight,
  SpotLight,
  UnsignedByteType,
  Vector3,
  type PerspectiveCamera,
  type Scene,
  type Texture,
  type WebGLRenderer,
} from 'three';
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { PTRenderer } from 'pt-renderer';
import { ptSettings, hdriTexture } from 'shared';
import { buildBVHScene, disposeBVHSceneData, type BVHSceneData } from 'pt-renderer';
import bvhFrag from 'pt-renderer/shaders/bvh-scene.frag.glsl?raw';

// ── Constants ─────────────────────────────────────────────────────────────────

/** Max albedo textures — extended to 16 to match the updated shader. */
const MAX_ALBEDO_TEXTURES = 16;

/**
 * Max lights supported by the DataTexture layout.
 * Each light occupies 4 RGBA texels → 64-texel wide 1D texture = 16 lights.
 *
 * Texel layout for light i at offset i*4:
 *   texel i*4+0 : pos.xyz,   type  (0=dir, 1=point, 2=spot, 3=rectarea)
 *   texel i*4+1 : color.rgb, dist
 *   texel i*4+2 : dir.xyz,   spotCos
 *   texel i*4+3 : width,     height, 0, 0
 */
const MAX_PT_LIGHTS   = 16;
const TEXELS_PER_LIGHT = 4;
const LIGHT_TEX_WIDTH  = MAX_PT_LIGHTS * TEXELS_PER_LIGHT; // 64

// ── Helpers ───────────────────────────────────────────────────────────────────

function makeWhiteTex(): DataTexture {
  const t = new DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1, RGBAFormat, UnsignedByteType);
  t.colorSpace = NoColorSpace;
  t.minFilter = t.magFilter = NearestFilter;
  t.generateMipmaps = false;
  t.needsUpdate = true;
  return t;
}

/** Create the empty 64×1 RGBA32F light DataTexture. */
function makeLightTexture(): DataTexture {
  const data = new Float32Array(LIGHT_TEX_WIDTH * 4); // 256 floats
  const t = new DataTexture(data, LIGHT_TEX_WIDTH, 1, RGBAFormat, FloatType);
  t.colorSpace = NoColorSpace;
  t.minFilter = t.magFilter = NearestFilter;
  t.generateMipmaps = false;
  t.needsUpdate = true;
  return t;
}

function albedoUniforms(textures: Texture[], fallback: DataTexture): Record<string, { value: Texture }> {
  const out: Record<string, { value: Texture }> = {};
  for (let i = 0; i < MAX_ALBEDO_TEXTURES; i++)
    out[`tAlbedoTex${i}`] = { value: textures[i] ?? fallback };
  return out;
}

// ── PTController ──────────────────────────────────────────────────────────────

export interface PTControllerDeps {
  renderer: WebGLRenderer;
  camera:   PerspectiveCamera;
  controls: OrbitControls;
  getScene: () => Scene;
}

export class PTController {
  private pt:          PTRenderer | null = null;
  private sceneData:   BVHSceneData | null = null;
  private whiteTex:    DataTexture | null = null;
  private lightTex:    DataTexture | null = null;
  private _lightData:  Float32Array = new Float32Array(0);

  private active = false;
  private rafId  = 0;
  private lastMs = 0;

  // Reusable scratch vectors — avoids GC pressure in render loop.
  private readonly _lightPos = new Vector3();
  private readonly _lightTgt = new Vector3();
  private readonly _lightDir = new Vector3();

  constructor(private readonly deps: PTControllerDeps) {}

  // ── Lifecycle ──────────────────────────────────────────────────────────────

  async init(): Promise<void> {
    this.whiteTex = makeWhiteTex();
    this.lightTex = makeLightTexture();
    this._lightData = this.lightTex.image.data as unknown as Float32Array;

    this.pt = new PTRenderer({
      fragmentShader: bvhFrag,
      sceneIsDynamic: false,
      renderScale:    1.0,
      sceneUniforms: {
        tTriangleTexture:   { value: null },
        tAABBTexture:       { value: null },
        uHasSkyTexture:     { value: false },
        tHDRTexture:        { value: null },
        uSkyLightIntensity: { value: 1.0 },
        tLightTexture:      { value: this.lightTex },
        uNumPTLights:       { value: 0 },
        ...albedoUniforms([], this.whiteTex),
      },
    });
    await this.pt.init(this.deps.renderer);
    this.deps.controls.addEventListener('change', this._onCameraChange);
  }

  async setScene(scene: Scene, _camera: PerspectiveCamera): Promise<void> {
    if (!this.pt) return;
    scene.updateMatrixWorld(true);

    console.time('[PTController] setScene');
    const newData = buildBVHScene(scene);
    console.timeEnd('[PTController] setScene');

    disposeBVHSceneData(this.sceneData);
    this.sceneData = newData;

    const u = this.pt.uniforms;
    if (!u['tTriangleTexture'] || !u['tAABBTexture']) {
      console.warn('[PTController] setScene before init() — skipping');
      return;
    }
    u['tTriangleTexture'].value = newData.triangleTexture;
    u['tAABBTexture'].value     = newData.aabbTexture;

    const fallback = this.whiteTex!;
    for (let i = 0; i < MAX_ALBEDO_TEXTURES; i++) {
      const slot = u[`tAlbedoTex${i}`];
      if (slot) slot.value = newData.albedoTextures[i] ?? fallback;
    }
    this.pt.resetAccumulation();
  }

  activate(): void {
    if (this.active || !this.pt) return;
    this.active = true;
    this.lastMs = performance.now();
    this._loop();
  }

  deactivate(): void {
    this.active = false;
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = 0;
  }

  get isActive(): boolean { return this.active; }

  /** Expose light DataTexture + count for pt-baker to share. */
  get lightTextureState(): { tex: DataTexture; count: number } | null {
    if (!this.lightTex) return null;
    const count = (this.pt?.uniforms['uNumPTLights']?.value as number) ?? 0;
    return { tex: this.lightTex, count };
  }

  dispose(): void {
    this.deactivate();
    this.deps.controls.removeEventListener('change', this._onCameraChange);
    this.pt?.dispose();
    this.pt = null;
    disposeBVHSceneData(this.sceneData);
    this.sceneData = null;
    this.whiteTex?.dispose();
    this.whiteTex = null;
    this.lightTex?.dispose();
    this.lightTex = null;
  }

  // ── Private ────────────────────────────────────────────────────────────────

  private _loop = (): void => {
    if (!this.active) return;
    this.rafId = requestAnimationFrame(this._loop);
    const now   = performance.now();
    const delta = now - this.lastMs;
    this.lastMs = now;
    this._syncLights();
    this._syncSettings();
    this.pt!.render(this.deps.renderer, this.deps.camera, delta);
  };

  private _onCameraChange = (): void => { this.pt?.notifyCameraMoving(); };

  private _prevSkyIntensity = -1;
  private _syncSettings(): void {
    if (!this.pt) return;
    const u = this.pt.uniforms;
    const s = ptSettings.value;
    if (u['uSkyLightIntensity'] && s.skyIntensity !== this._prevSkyIntensity) {
      u['uSkyLightIntensity'].value = s.skyIntensity;
      this._prevSkyIntensity = s.skyIntensity;
      this.pt.resetAccumulation();
    }
    if (u['uApertureSize'])  u['uApertureSize'].value  = s.aperture;
    if (u['uFocusDistance']) u['uFocusDistance'].value = s.focusDist;
  }

  /**
   * Pack scene lights into the 64×1 RGBA32F DataTexture.
   * 4 texels per light (see TEXELS_PER_LIGHT comment above).
   * Marks texture.needsUpdate = true when count > 0.
   */
  private _syncLights(): void {
    if (!this.pt || !this.lightTex) return;
    const u = this.pt.uniforms;

    const texData = this._lightData;
    texData.fill(0);

    let count    = 0;
    const lScale = ptSettings.value.lightScale;
    const scene  = this.deps.getScene();

    scene.traverse((obj) => {
      if (count >= MAX_PT_LIGHTS) return;
      const base = count * TEXELS_PER_LIGHT * 4; // float offset

      if (obj instanceof DirectionalLight) {
        if (obj.userData.lightmapIgnore) return;
        obj.getWorldPosition(this._lightPos);
        obj.target.getWorldPosition(this._lightTgt);
        this._lightDir.subVectors(this._lightTgt, this._lightPos).normalize();
        // texel 0: pos.xyz, type=0
        texData[base + 0] = this._lightPos.x;
        texData[base + 1] = this._lightPos.y;
        texData[base + 2] = this._lightPos.z;
        texData[base + 3] = 0;
        // texel 1: color.rgb × scale, dist=0
        texData[base + 4] = obj.color.r * obj.intensity * lScale;
        texData[base + 5] = obj.color.g * obj.intensity * lScale;
        texData[base + 6] = obj.color.b * obj.intensity * lScale;
        texData[base + 7] = 0;
        // texel 2: dir.xyz, spotCos=0
        texData[base + 8]  = this._lightDir.x;
        texData[base + 9]  = this._lightDir.y;
        texData[base + 10] = this._lightDir.z;
        texData[base + 11] = 0;
        count++;

      } else if (obj instanceof SpotLight) {
        if (obj.userData.lightmapIgnore) return;
        obj.getWorldPosition(this._lightPos);
        obj.target.getWorldPosition(this._lightTgt);
        this._lightDir.subVectors(this._lightTgt, this._lightPos).normalize();
        texData[base + 0] = this._lightPos.x;
        texData[base + 1] = this._lightPos.y;
        texData[base + 2] = this._lightPos.z;
        texData[base + 3] = 2;
        texData[base + 4] = obj.color.r * obj.intensity * lScale;
        texData[base + 5] = obj.color.g * obj.intensity * lScale;
        texData[base + 6] = obj.color.b * obj.intensity * lScale;
        texData[base + 7] = obj.distance || 0;
        texData[base + 8]  = this._lightDir.x;
        texData[base + 9]  = this._lightDir.y;
        texData[base + 10] = this._lightDir.z;
        texData[base + 11] = Math.cos(obj.angle);
        count++;

      } else if (obj instanceof PointLight) {
        if (obj.userData.lightmapIgnore) return;
        obj.getWorldPosition(this._lightPos);
        texData[base + 0] = this._lightPos.x;
        texData[base + 1] = this._lightPos.y;
        texData[base + 2] = this._lightPos.z;
        texData[base + 3] = 1;
        texData[base + 4] = obj.color.r * obj.intensity * lScale;
        texData[base + 5] = obj.color.g * obj.intensity * lScale;
        texData[base + 6] = obj.color.b * obj.intensity * lScale;
        texData[base + 7] = obj.distance || 0;
        texData[base + 8]  = 0;
        texData[base + 9]  = -1;
        texData[base + 10] = 0;
        texData[base + 11] = 0;
        count++;

      } else if (obj instanceof RectAreaLight) {
        // Type 3 — true area light. Shader picks random point on face.
        obj.getWorldPosition(this._lightPos);
        // Face normal direction: RectAreaLight faces -Z in local space.
        this._lightDir.set(0, 0, -1).applyQuaternion(obj.quaternion).normalize();
        texData[base + 0] = this._lightPos.x;
        texData[base + 1] = this._lightPos.y;
        texData[base + 2] = this._lightPos.z;
        texData[base + 3] = 3;
        texData[base + 4] = obj.color.r * obj.intensity * lScale;
        texData[base + 5] = obj.color.g * obj.intensity * lScale;
        texData[base + 6] = obj.color.b * obj.intensity * lScale;
        texData[base + 7] = 0; // dist (unused for area)
        texData[base + 8]  = this._lightDir.x;
        texData[base + 9]  = this._lightDir.y;
        texData[base + 10] = this._lightDir.z;
        texData[base + 11] = 0; // spotCos (unused)
        // texel 3: width, height
        texData[base + 12] = obj.width;
        texData[base + 13] = obj.height;
        count++;
      }
    });

    if (u['uNumPTLights']) u['uNumPTLights'].value = count;
    if (count > 0 || this._prevLightCount !== count) {
      this.lightTex.needsUpdate = true;
    }
    this._prevLightCount = count;
  }

  private _prevLightCount = 0;
}
