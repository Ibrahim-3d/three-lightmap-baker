/**
 * PTController — scene-agnostic path-traced viewport controller.
 *
 * Per-frame it syncs all THREE.js lights (PointLight, DirectionalLight,
 * SpotLight) from the live scene into PT uniforms so changes to light
 * intensity/color/position are immediately reflected in the path tracer.
 */

import {
  Color,
  DataTexture,
  DirectionalLight,
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

import { PTRenderer } from '../../pathtracer/PTRenderer';
import { ptSettings } from '../state/signals';
import { buildBVHScene, disposeBVHSceneData, type BVHSceneData } from '../../pathtracer/BVHSceneBuilder';
import bvhFrag from '../../pathtracer/shaders/bvh-scene.frag.glsl?raw';

// ── Constants ─────────────────────────────────────────────────────────────────

const MAX_ALBEDO_TEXTURES = 8;
const MAX_PT_LIGHTS       = 4;

// ── Helpers ───────────────────────────────────────────────────────────────────

function makeWhiteTex(): DataTexture {
  const t = new DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1, RGBAFormat, UnsignedByteType);
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

/** Zero-filled Float32Array uniform arrays for up to MAX_PT_LIGHTS lights. */
function makeLightUniforms() {
  return {
    uNumPTLights:     { value: 0 },
    uPTLightPos:      { value: new Array<Vector3>(MAX_PT_LIGHTS).fill(null!).map(() => new Vector3()) },
    uPTLightDir:      { value: new Array<Vector3>(MAX_PT_LIGHTS).fill(null!).map(() => new Vector3(0, -1, 0)) },
    uPTLightColor:    { value: new Array<Color>(MAX_PT_LIGHTS).fill(null!).map(() => new Color(0, 0, 0)) },
    uPTLightType:     { value: new Float32Array(MAX_PT_LIGHTS) },
    uPTLightDist:     { value: new Float32Array(MAX_PT_LIGHTS) },
    uPTLightSpotCos:  { value: new Float32Array(MAX_PT_LIGHTS) },
  };
}

// ── PTController ──────────────────────────────────────────────────────────────

export interface PTControllerDeps {
  renderer: WebGLRenderer;
  camera:   PerspectiveCamera;
  controls: OrbitControls;
  getScene: () => Scene;
}

export class PTController {
  private pt:        PTRenderer | null = null;
  private sceneData: BVHSceneData | null = null;
  private whiteTex:  DataTexture | null = null;

  private active = false;
  private rafId  = 0;
  private lastMs = 0;

  // Reusable scratch vectors for light sync (avoid GC pressure in render loop)
  private readonly _lightPos = new Vector3();
  private readonly _lightTgt = new Vector3();
  private readonly _lightDir = new Vector3();

  constructor(private readonly deps: PTControllerDeps) {}

  // ── Lifecycle ─────────────────────────────────────────────────────────────

  async init(): Promise<void> {
    this.whiteTex = makeWhiteTex();

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
        ...makeLightUniforms(),
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

  dispose(): void {
    this.deactivate();
    this.deps.controls.removeEventListener('change', this._onCameraChange);
    this.pt?.dispose();
    this.pt = null;
    disposeBVHSceneData(this.sceneData);
    this.sceneData = null;
    this.whiteTex?.dispose();
    this.whiteTex = null;
  }

  // ── Private ───────────────────────────────────────────────────────────────

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

  private _onCameraChange = (): void => {
    this.pt?.notifyCameraMoving();
  };

  /**
   * Apply ptSettings signal values to PT uniforms each frame.
   * Called per-frame so any UI change is reflected immediately without
   * manual wiring — changing sky intensity in WorldPage affects PT live.
   */
  private _prevSkyIntensity = -1;
  private _syncSettings(): void {
    if (!this.pt) return;
    const u  = this.pt.uniforms;
    const s  = ptSettings.value;

    // Sky intensity — sync to PT uniform
    if (u['uSkyLightIntensity'] && s.skyIntensity !== this._prevSkyIntensity) {
      u['uSkyLightIntensity'].value = s.skyIntensity;
      this._prevSkyIntensity = s.skyIntensity;
      this.pt.resetAccumulation();
    }

    // DOF settings — aperture and focus distance
    if (u['uApertureSize'])  u['uApertureSize'].value  = s.aperture;
    if (u['uFocusDistance']) u['uFocusDistance'].value = s.focusDist;
  }

  /**
   * Extract THREE.js lights from the live scene each frame and upload to PT
   * uniforms. Handles PointLight, DirectionalLight, SpotLight.
   * Any change to light intensity/color/position is automatically reflected
   * in the path tracer on the next frame — no manual wiring needed.
   */
  private _syncLights(): void {
    if (!this.pt) return;
    const u = this.pt.uniforms;
    if (!u['uNumPTLights']) return;

    const scene   = this.deps.getScene();
    const posArr  = u['uPTLightPos']!.value  as Vector3[];
    const dirArr  = u['uPTLightDir']!.value  as Vector3[];
    const colArr  = u['uPTLightColor']!.value as Color[];
    const typeArr = u['uPTLightType']!.value  as Float32Array;
    const distArr = u['uPTLightDist']!.value  as Float32Array;
    const cosArr  = u['uPTLightSpotCos']!.value as Float32Array;

    let count = 0;
    const lScale = ptSettings.value.lightScale;

    scene.traverse((obj) => {
      if (count >= MAX_PT_LIGHTS) return;

      if (obj instanceof DirectionalLight) {
        // Direction = from light toward scene = normalize(target - lightPos)
        obj.getWorldPosition(this._lightPos);
        obj.target.getWorldPosition(this._lightTgt);
        this._lightDir.subVectors(this._lightTgt, this._lightPos).normalize();

        posArr[count]!.copy(this._lightPos);
        dirArr[count]!.copy(this._lightDir);
        colArr[count]!.setRGB(
          obj.color.r * obj.intensity * lScale,
          obj.color.g * obj.intensity * lScale,
          obj.color.b * obj.intensity * lScale,
        );
        typeArr[count] = 0;
        distArr[count] = 0;
        cosArr[count]  = 0;
        count++;

      } else if (obj instanceof SpotLight) {
        obj.getWorldPosition(this._lightPos);
        obj.target.getWorldPosition(this._lightTgt);
        this._lightDir.subVectors(this._lightTgt, this._lightPos).normalize();

        posArr[count]!.copy(this._lightPos);
        dirArr[count]!.copy(this._lightDir);
        colArr[count]!.setRGB(
          obj.color.r * obj.intensity * lScale,
          obj.color.g * obj.intensity * lScale,
          obj.color.b * obj.intensity * lScale,
        );
        typeArr[count] = 2;
        distArr[count] = obj.distance || 0;
        cosArr[count]  = Math.cos(obj.angle);
        count++;

      } else if (obj instanceof PointLight) {
        obj.getWorldPosition(this._lightPos);

        posArr[count]!.copy(this._lightPos);
        dirArr[count]!.set(0, -1, 0); // unused for point lights
        colArr[count]!.setRGB(
          obj.color.r * obj.intensity * lScale,
          obj.color.g * obj.intensity * lScale,
          obj.color.b * obj.intensity * lScale,
        );
        typeArr[count] = 1;
        distArr[count] = obj.distance || 0;
        cosArr[count]  = 0;
        count++;

      } else if (obj instanceof RectAreaLight) {
        // Approximate RectAreaLight as a point at its center.
        // Multiply by area so bigger panels emit proportionally more energy.
        const area = Math.max(obj.width * obj.height, 0.01);
        obj.getWorldPosition(this._lightPos);
        posArr[count]!.copy(this._lightPos);
        dirArr[count]!.set(0, -1, 0);
        colArr[count]!.setRGB(
          obj.color.r * obj.intensity * area * 0.25 * lScale,
          obj.color.g * obj.intensity * area * 0.25 * lScale,
          obj.color.b * obj.intensity * area * 0.25 * lScale,
        );
        typeArr[count] = 1;
        distArr[count] = 0;
        cosArr[count]  = 0;
        count++;
      }
    });

    u['uNumPTLights'].value = count;
  }
}
