import {
  ACESFilmicToneMapping,
  AxesHelper,
  Box3,
  BoxGeometry,
  CineonToneMapping,
  Color,
  DoubleSide,
  EquirectangularReflectionMapping,
  Euler,
  FogExp2,
  GridHelper,
  type Light,
  LineBasicMaterial,
  LinearToneMapping,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  NoToneMapping,
  Object3D,
  PerspectiveCamera,
  Plane,
  PlaneGeometry,
  PMREMGenerator,
  Raycaster,
  RectAreaLight,
  ReinhardToneMapping,
  Scene,
  SphereGeometry,
  SRGBColorSpace,
  type Texture,
  TorusKnotGeometry,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader';
import { VignetteShader } from 'three/examples/jsm/shaders/VignetteShader';
import { Diagnostics } from 'baker-classic';
import {
  createAsset,
  type AssetSpec,
  eslEnvEnabled,
  postFXSettings,
  ptSettings,
  sceneRegistry,
  wrapAsBakerLight,
} from 'shared';
import { makeGammaPass } from './postfx/GammaPass';
import { makeHueSatPass } from './postfx/HueSatPass';
import { makeLensDistortionPass } from './postfx/LensDistortionPass';
import type { SceneObj } from './types';

// Classic Cornell box dims: 10×10×10 unit room centered at (0, 5, 0)
export const ROOM = 10;
const HALF = ROOM / 2;

const TONE_MAP_LOOKUP = {
  none: NoToneMapping,
  linear: LinearToneMapping,
  reinhard: ReinhardToneMapping,
  cineon: CineonToneMapping,
  aces: ACESFilmicToneMapping,
  // AgX not exported by THREE 0.161; fall back to ACES so the option still works.
  agx: ACESFilmicToneMapping,
} as const;

export type ScenePreset = 'classic' | 'advanced';

/** Snapshot of an Object3D's local transform for undo/redo. */
export type TransformSnap = { pos: Vector3; rot: Euler; scale: Vector3 };

/** Callbacks fired by SceneController so the orchestrator and BakeController stay in sync. */
export type SceneControllerHooks = {
  /** Fired after every scene rebuild / GLB import. Orchestrator rebuilds per-mesh UI here. */
  onSceneChanged: (meshes: SceneObj[]) => void;
  /** Called after every scene rebuild - must pin the dummy lightmap onto every mesh
   *  to prevent post-bake shader recompile (Session 12 mitigation). */
  installDummyLightmaps: (meshes: SceneObj[]) => void;
  /** Notify the orchestrator when bake-owned GPU resources must be torn down
   *  (e.g. before swapping geometry on GLB import). */
  disposeBake: () => void;
  /** Fired when the scene mutates in a way that invalidates the current bake
   *  (e.g. a mesh has been translated/rotated/scaled by the gizmo). */
  onStaleChange?: () => void;
  /** Fired when the user clicks on an object in the viewport. Null = empty space. */
  onViewportPick?: (id: string | null) => void;
  /** Fired at gizmo drag-end with before/after snapshots. Push to undo history. */
  onTransformChange?: (obj: Object3D, before: TransformSnap, after: TransformSnap) => void;
};

/**
 * Built-in id for the moveable scene light.
 *
 * @deprecated The scene's default area light is now a regular asset-library
 * light group (with `userData.bakerLightType = 'area'`) and is keyed by its
 * own uuid like every other light. This constant is kept for type-only
 * backward compatibility while consumers migrate; new code should look up the
 * light by traversing scene children for `userData.bakerLightType` instead.
 */
export const LIGHT_DUMMY_ID = 'light:dummy';

/**
 * Owns the THREE side of the demo: scene graph, camera, renderer, orbit/transform
 * controls, the visual+bake light dummy, scene-build factories (Cornell), and GLB
 * import. Knows nothing about the LightmapBaker call site - that lives in
 * BakeController. Knows nothing about Tweakpane / DOM - that stays in the
 * orchestrator until T-D2 (Preact).
 */
export class SceneController {
  renderer: WebGLRenderer;
  camera: PerspectiveCamera;
  scene: Scene;
  controls: OrbitControls;

  /** Visual-only area light (formerly a PointLight). The baker reads
   *  `lightDummy.position` only; this RectAreaLight provides the viewport
   *  preview shading and the visible footprint marker. */
  visualLight: RectAreaLight;
  lightDummy: Object3D;
  lightTransformController: TransformControls;
  lightMarker: Mesh;

  /** Editor-only ground grid (40m × 40m, 1m cells, faint major every 10). */
  gridHelper: GridHelper;
  /** Editor-only world-origin RGB axes (X=red, Y=green, Z=blue). */
  axesHelper: AxesHelper;

  cornellRoot: Object3D | null = null;
  meshes: SceneObj[] = [];

  diag: Diagnostics;

  // ── Post-FX composer (lazy; built on first enabled-render) ──────────────────
  private composer: EffectComposer | null = null;
  private renderPass: RenderPass | null = null;
  private ssaoPass: SSAOPass | null = null;
  private bloomPass: UnrealBloomPass | null = null;
  private bloom2Pass: UnrealBloomPass | null = null;
  private fxaaPass: ShaderPass | null = null;
  private vignettePass: ShaderPass | null = null;
  private hueSatPass: ShaderPass | null = null;
  private gammaPass: ShaderPass | null = null;
  private lensDistortionPass: ShaderPass | null = null;
  private fogObject: FogExp2 | null = null;

  private _preDragSnap: TransformSnap | null = null;

  constructor(private hooks: SceneControllerHooks) {
    this.scene = new Scene();
    this.scene.background = new Color(0x0a0a0a);

    this.camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 5, 18);
    this.camera.lookAt(0, 5, 0);

    // preserveDrawingBuffer=true when running under Playwright (`?test=1`) so
    // `sampleCanvasPixel` readback works regardless of browser composite timing.
    const isTest =
      typeof window !== 'undefined' &&
      new URLSearchParams(window.location.search).get('test') === '1';
    this.renderer = new WebGLRenderer({
      antialias: true,
      powerPreference: 'low-power',
      failIfMajorPerformanceCaveat: false,
      preserveDrawingBuffer: isTest,
    });
    this.renderer.outputColorSpace = SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(this.renderer.domElement);

    this.diag = new Diagnostics(this.renderer);
    this.diag.banner();
    this.diag.snap('after renderer construction');

    this.renderer.domElement.addEventListener('webglcontextlost', (e) => {
      console.error('[baker:debug] CONTEXT LOST', {
        meshes: this.meshes.length,
        firstMeshLM: (this.meshes[0]?.material as MeshStandardMaterial | undefined)?.lightMap?.uuid,
      });
      this.diag.contextLossInfo();
      e.preventDefault();
    });
    this.renderer.domElement.addEventListener('webglcontextrestored', () => {
      console.error(
        '[baker:debug] CONTEXT RESTORED - RT data lost, lightmap textures are now empty',
        { meshes: this.meshes.length },
      );
    });

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 5, 0);
    this.controls.update();

    // Editor helpers - ground grid + world axes at origin. Tagged
    // `lightmapIgnore` so the baker's BVH/material walks skip them; also
    // drawn with depthWrite off so they don't z-fight the Cornell floor.
    this.gridHelper = new GridHelper(40, 40, 0x555555, 0x2a2a2a);
    this.gridHelper.position.y = 0.001;
    this.gridHelper.userData.lightmapIgnore = true;
    const gridMat = this.gridHelper.material as LineBasicMaterial | LineBasicMaterial[];
    if (Array.isArray(gridMat)) {
      for (const m of gridMat) {
        m.transparent = true;
        m.opacity = 0.5;
        m.depthWrite = false;
      }
    } else {
      gridMat.transparent = true;
      gridMat.opacity = 0.5;
      gridMat.depthWrite = false;
    }
    this.scene.add(this.gridHelper);

    this.axesHelper = new AxesHelper(2);
    this.axesHelper.position.y = 0.002;
    this.axesHelper.userData.lightmapIgnore = true;
    const axesMat = this.axesHelper.material as LineBasicMaterial;
    axesMat.depthTest = false;
    axesMat.transparent = true;
    this.axesHelper.renderOrder = 999;
    this.scene.add(this.axesHelper);

    // RectAreaLight needs its uniforms LUT initialised once before any scene
    // using it is rendered. Safe to call multiple times - LUT is cached.
    RectAreaLightUniformsLib.init();

    // Default scene area light. Wrapped as a regular baker-style light group
    // (`userData.bakerLightType = 'area'`) so it's selectable, deletable, and
    // editable in real time through the same SceneLightPage path as any
    // dragged-in asset-library light. Hidden automatically when a preset
    // brings its own lights (see `loadPresetById`).
    this.lightDummy = new Object3D();
    this.lightDummy.name = 'Default Area Light';
    this.lightDummy.userData.bakerLightType = 'area';
    this.lightDummy.position.set(0, ROOM - 0.001, 0);
    this.scene.add(this.lightDummy);

    // Bake-marker disc - still used by `modes.ts` to flash a white pulse
    // during bake. Tagged `lightmapIgnore` so it doesn't bake into the atlas.
    this.lightMarker = new Mesh(
      new PlaneGeometry(2.5, 2.5),
      new MeshBasicMaterial({ color: 0xffffff, side: DoubleSide }),
    );
    this.lightMarker.rotation.x = Math.PI / 2;
    this.lightMarker.userData.lightmapIgnore = true;
    this.lightMarker.userData.lightGizmo = true;
    this.lightDummy.add(this.lightMarker);

    // Area light: emits along its local -Z. Rotate so -Z faces world -Y
    // (downward - i.e. ceiling-mounted by default). This is now the real
    // bake-side light (no `lightmapIgnore`); `collectLightsFromScene` packs it
    // alongside any asset-library lights so the editor and the bake agree.
    this.visualLight = new RectAreaLight(0xffffff, 5, 2.5, 2.5);
    this.visualLight.rotation.x = -Math.PI / 2;
    this.lightDummy.add(this.visualLight);

    // Thin rectangle outline that traces the emitter - gives the "real area
    // light" look in solid view. RectAreaLightHelper attaches itself to the
    // light and updates its own matrixWorld each frame.
    const areaHelper = new RectAreaLightHelper(this.visualLight);
    areaHelper.userData.lightmapIgnore = true;
    areaHelper.traverse((c) => {
      c.userData.lightmapIgnore = true;
    });
    this.visualLight.add(areaHelper);
    // Expose the helper through the same `lightHelper` userData convention
    // asset-library light groups use, so any framework code that calls
    // `helper.update()` on lights generically works for the default light too.
    this.lightDummy.userData.lightHelper = areaHelper;

    this.lightTransformController = new TransformControls(this.camera, this.renderer.domElement);
    this.lightTransformController.addEventListener('dragging-changed', (event) => {
      this.controls.enabled = !event.value;
      if (event.value) {
        // Capture pre-drag snapshot for undo/redo.
        const target = this.lightTransformController.object;
        if (target) {
          this._preDragSnap = {
            pos: target.position.clone(),
            rot: target.rotation.clone(),
            scale: target.scale.clone(),
          };
        }
      } else {
        const target = this.lightTransformController.object;
        if (target && this._preDragSnap) {
          const before = this._preDragSnap;
          this._preDragSnap = null;
          const after: TransformSnap = {
            pos: target.position.clone(),
            rot: target.rotation.clone(),
            scale: target.scale.clone(),
          };
          // Only mark stale for non-light-dummy drags (light position is queried at bake time).
          if (target !== this.lightDummy) this.hooks.onStaleChange?.();
          this.hooks.onTransformChange?.(target, before, after);
        }
      }
    });
    // Gizmo starts detached. Selection drives attachment via attachGizmoTo.
    this.scene.add(this.lightTransformController);
    this.lightTransformController.visible = false;
    this.lightTransformController.enabled = false;

    // Viewport click → raycast pick → notify orchestrator. We track pointerdown
    // coords and only fire a pick on pointerup at (roughly) the same coords, so
    // OrbitControls drags do not steal selection.
    let downX = 0;
    let downY = 0;
    this.renderer.domElement.addEventListener('pointerdown', (e) => {
      downX = e.clientX;
      downY = e.clientY;
    });
    this.renderer.domElement.addEventListener('pointerup', (e) => {
      if (e.button !== 0) return; // left-click only
      if (this.lightTransformController.dragging) return;
      if (Math.abs(e.clientX - downX) > 3 || Math.abs(e.clientY - downY) > 3) return;
      const id = this.pickAt(e.clientX, e.clientY);
      this.hooks.onViewportPick?.(id);
    });
  }

  // ──────────────────────────────────────────────────────────────────────────
  //  Selection + gizmo + tree
  // ──────────────────────────────────────────────────────────────────────────
  private raycaster = new Raycaster();
  private pointer = new Vector2();

  /** Cast a ray from screen-space (client coords) to find the nearest pickable
   *  hit. Tests bake meshes AND asset-library light visuals (bulb + helper
   *  subtree) so lights can be clicked from the viewport like in Blender.
   *  Returns the bake-mesh uuid or the light-group uuid. */
  pickAt(clientX: number, clientY: number): string | null {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    // Generous threshold so thin line helpers (Spot cone, Sun plane, Area rect)
    // are easy to hit. Default is 1; bump to make them grab-friendly.
    if (this.raycaster.params.Line) this.raycaster.params.Line.threshold = 0.2;
    const lightGroups = this.scene.children.filter((c) => c.userData?.bakerLightType);
    const targets: Object3D[] = [...this.meshes, ...lightGroups];
    const hits = this.raycaster.intersectObjects(targets, true);
    if (!hits.length) return null;
    // Walk parents up the closest hit until we find either a bake mesh or the
    // light group that owns the helper/bulb that was clicked.
    const meshIds = new Set(this.meshes.map((m) => m.uuid));
    let obj: Object3D | null = hits[0]!.object;
    while (obj) {
      if (obj.userData?.bakerLightType) return obj.uuid;
      if (meshIds.has(obj.uuid)) return obj.uuid;
      obj = obj.parent;
    }
    return null;
  }

  /** Resolve a tree-node id back to its Object3D. */
  lookupObject(id: string | null): Object3D | null {
    if (!id) return null;
    const mesh = this.meshes.find((m) => m.uuid === id);
    if (mesh) return mesh;
    // All lights (default area + asset-library) live as direct scene children
    // with `userData.bakerLightType` set.
    return this.scene.children.find((o) => o.uuid === id && o.userData?.bakerLightType) ?? null;
  }

  /** Attach the gizmo to a tree node (or the light dummy when null/light id).
   *  When `obj` is null the gizmo detaches entirely. */
  attachGizmoTo(obj: Object3D | null): void {
    if (obj) {
      this.lightTransformController.attach(obj);
      this.lightTransformController.visible = true;
    } else {
      this.lightTransformController.detach();
      this.lightTransformController.visible = false;
    }
  }

  setGizmoMode(mode: 'translate' | 'rotate' | 'scale'): void {
    this.lightTransformController.setMode(mode);
  }

  /** Build a flat tree snapshot for the Outliner. Rebuilt by the orchestrator
   *  on every scene mutation (rebuild / GLB import). */
  buildSceneTree(): { id: string; name: string; kind: 'mesh' | 'light'; visible: boolean }[] {
    const tree: { id: string; name: string; kind: 'mesh' | 'light'; visible: boolean }[] = [];
    for (const m of this.meshes) {
      tree.push({
        id: m.uuid,
        name: m.name || `Mesh (${m.geometry.type.replace('Geometry', '')})`,
        kind: 'mesh',
        visible: m.visible,
      });
    }
    // All lights (default area + asset-library Point / Spot / Sun / Area) -
    // top-level scene children carrying `userData.bakerLightType`.
    for (const child of this.scene.children) {
      if (!child.userData?.bakerLightType) continue;
      tree.push({
        id: child.uuid,
        name: child.name || 'Light',
        kind: 'light',
        visible: child.visible,
      });
    }
    return tree;
  }

  setVisible(id: string, visible: boolean): void {
    const obj = this.lookupObject(id);
    if (obj) obj.visible = visible;
  }

  /** Wraps a MeshStandardMaterial so render-mode logic can find `_originalMap`. */
  private mat(color: number, roughness = 0.95, metalness = 0.0): MeshStandardMaterial {
    const m = new MeshStandardMaterial({ color, roughness, metalness });
    (m as unknown as { _originalMap: Texture | null })._originalMap = null;
    return m;
  }

  private addMesh(mesh: Mesh): SceneObj {
    const m = mesh as SceneObj;
    this.meshes.push(m);
    this.cornellRoot!.add(m);
    return m;
  }

  private buildWalls(): void {
    const T = 0.2; // wall thickness
    const white = this.mat(0xf0f0f0);
    const red = this.mat(0xd62728);
    const green = this.mat(0x2ca02c);

    const floor = new Mesh(new BoxGeometry(ROOM, T, ROOM), white);
    floor.name = 'Floor';
    floor.position.set(0, -T / 2, 0);
    this.addMesh(floor);

    const ceil = new Mesh(new BoxGeometry(ROOM, T, ROOM), white.clone());
    ceil.name = 'Ceiling';
    (ceil.material as unknown as { _originalMap: Texture | null })._originalMap = null;
    ceil.position.set(0, ROOM + T / 2, 0);
    this.addMesh(ceil);

    const back = new Mesh(new BoxGeometry(ROOM, ROOM, T), white.clone());
    back.name = 'Back Wall';
    (back.material as unknown as { _originalMap: Texture | null })._originalMap = null;
    back.position.set(0, HALF, -HALF - T / 2);
    this.addMesh(back);

    const left = new Mesh(new BoxGeometry(T, ROOM, ROOM), red);
    left.name = 'Left Wall (Red)';
    left.position.set(-HALF - T / 2, HALF, 0);
    this.addMesh(left);

    const right = new Mesh(new BoxGeometry(T, ROOM, ROOM), green);
    right.name = 'Right Wall (Green)';
    right.position.set(HALF + T / 2, HALF, 0);
    this.addMesh(right);
  }

  private buildClassicBlocks(): void {
    const white = this.mat(0xe8e8e8);

    const tall = new Mesh(new BoxGeometry(3, 6, 3), white);
    tall.name = 'Tall Block';
    tall.position.set(-1.8, 3, -1.5);
    tall.rotation.y = 0.29;
    this.addMesh(tall);

    const short = new Mesh(new BoxGeometry(3, 3, 3), white.clone());
    short.name = 'Short Block';
    (short.material as unknown as { _originalMap: Texture | null })._originalMap = null;
    short.position.set(1.8, 1.5, 1.5);
    short.rotation.y = -0.29;
    this.addMesh(short);
  }

  private buildAdvancedExtras(): void {
    const sphere = new Mesh(new SphereGeometry(1.0, 48, 32), this.mat(0xf5f5f5, 0.4, 0.0));
    sphere.name = 'Sphere';
    sphere.position.set(2.4, 1.0, 3.0);
    this.addMesh(sphere);

    const knot = new Mesh(
      new TorusKnotGeometry(0.55, 0.18, 160, 24),
      this.mat(0xffd166, 0.55, 0.0),
    );
    knot.name = 'Torus Knot';
    knot.position.set(0.0, 1.0, 2.8);
    knot.rotation.x = Math.PI / 2;
    this.addMesh(knot);

    const accent = new Mesh(new BoxGeometry(1.2, 1.2, 1.2), this.mat(0xc77a3a, 0.8, 0.0));
    accent.name = 'Accent Block';
    accent.position.set(-3.5, 0.6, 2.8);
    accent.rotation.y = 0.45;
    this.addMesh(accent);
  }

  /**
   * Dispose every geometry+material under `cornellRoot`, detach the root from
   * the scene, and clear `meshes`. Single cleanup path used by `rebuildScene`,
   * `importGLB`, and `loadPresetById` - keeps GPU resource lifetime tied to
   * the active scene root and avoids leaks across preset swaps.
   */
  private disposeCornellRoot(): void {
    if (!this.cornellRoot) return;
    this.cornellRoot.traverse((obj) => {
      const mesh = obj as Mesh;
      if (!mesh.isMesh) return;
      mesh.geometry?.dispose();
      const mat = mesh.material as MeshStandardMaterial | MeshStandardMaterial[] | undefined;
      if (Array.isArray(mat)) mat.forEach((mm) => mm.dispose());
      else mat?.dispose();
    });
    this.scene.remove(this.cornellRoot);
    this.cornellRoot = null;
    this.meshes = [];
  }

  /**
   * Rebuild Cornell scene from a preset. Tears down bake-owned GPU resources
   * via the hook so BakeController stays internally consistent.
   */
  rebuildScene(preset: ScenePreset): void {
    this.hooks.disposeBake();
    this.disposeCornellRoot();
    this.cornellRoot = new Object3D();
    this.scene.add(this.cornellRoot);

    this.buildWalls();
    this.buildClassicBlocks();
    if (preset === 'advanced') this.buildAdvancedExtras();

    // Pin USE_LIGHTMAP shader variant on every mesh before first render.
    this.hooks.installDummyLightmaps(this.meshes);
    this.hooks.onSceneChanged(this.meshes);
  }

  /**
   * Import a GLB/GLTF and replace the active scene. Bake-eligible meshes (those
   * carrying a `lightMap` field on their material) are kept; geometry is indexed
   * if needed (xatlas + extractPerTriangleMaterials require it).
   */
  async importGLB(file: File): Promise<void> {
    const buffer = await file.arrayBuffer();
    await this.importGLBBuffer(buffer);
  }

  async importGLBBuffer(buffer: ArrayBuffer): Promise<void> {
    const loader = new GLTFLoader();
    let gltf: GLTF;
    try {
      gltf = await new Promise<GLTF>((resolve, reject) => {
        loader.parse(buffer, '', resolve, reject);
      });
    } catch (err) {
      console.error('[baker] GLB parse failed:', err);
      return;
    }

    this.hooks.disposeBake();

    this.disposeCornellRoot();
    this.cornellRoot = new Object3D();
    this.scene.add(this.cornellRoot);
    this.cornellRoot.add(gltf.scene);

    gltf.scene.traverse((obj: Object3D) => {
      const mesh = obj as Mesh;
      if (!mesh.isMesh) return;
      const mat = mesh.material;
      if (Array.isArray(mat) || !mat || !('lightMap' in mat)) return;
      if (!mesh.geometry.index) mesh.geometry = mergeVertices(mesh.geometry);
      this.meshes.push(mesh as SceneObj);
    });

    if (!this.meshes.length) {
      console.warn('[baker] imported GLB has no bake-eligible meshes (need MeshStandard*)');
      this.hooks.onSceneChanged(this.meshes);
      return;
    }

    this.cornellRoot.updateMatrixWorld(true);
    this.fitCameraAndLightToScene();

    this.stampOriginalMap(this.meshes);
    this.hooks.installDummyLightmaps(this.meshes);
    this.hooks.onSceneChanged(this.meshes);
  }

  /**
   * Position camera + light from the world-space bbox of `this.meshes`. Sets
   * OrbitControls target to the scene center, places the light above the bbox
   * top, pulls the camera back proportional to the longest axis.
   */
  fitCameraAndLightToScene(): void {
    const box = new Box3();
    for (const m of this.meshes) box.expandByObject(m);
    if (box.isEmpty()) return;

    const size = box.getSize(new Vector3());
    const center = box.getCenter(new Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;

    this.lightDummy.position.set(center.x, box.max.y + maxDim * 0.1, center.z);
    this.camera.position.set(center.x, center.y, center.z + maxDim * 2.5);
    this.controls.target.copy(center);
    this.controls.update();
  }

  updateSize(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(window.devicePixelRatio);

    if (this.composer) {
      this.composer.setSize(w, h);
      this.bloomPass?.setSize(w, h);
      this.bloom2Pass?.setSize(w, h);
      this.ssaoPass?.setSize(w, h);
      if (this.fxaaPass) {
        const dpr = this.renderer.getPixelRatio();
        const res = this.fxaaPass.material.uniforms.resolution;
        if (res) res.value.set(1 / (w * dpr), 1 / (h * dpr));
      }
    }
  }

  /**
   * Lazy-build the EffectComposer chain: RenderPass → SSAO → Bloom → FXAA.
   * Built only on first \`renderFrame\` call with postFX.master = true so the
   * default (composer-less) bake-QA path pays zero memory/perf cost.
   */
  private ensureComposer(): EffectComposer {
    if (this.composer) return this.composer;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const composer = new EffectComposer(this.renderer);
    composer.setSize(w, h);

    this.renderPass = new RenderPass(this.scene, this.camera);
    composer.addPass(this.renderPass);

    this.ssaoPass = new SSAOPass(this.scene, this.camera, w, h);
    this.ssaoPass.kernelRadius = 0.2;
    this.ssaoPass.minDistance = 0.005;
    this.ssaoPass.maxDistance = 0.1;
    composer.addPass(this.ssaoPass);

    this.bloomPass = new UnrealBloomPass(new Vector2(w, h), 0.35, 0.4, 0.85);
    composer.addPass(this.bloomPass);

    // ESL-style secondary bloom: bigger kernel, lower threshold → soft global
    // glow that stacks on top of the primary bloom.
    this.bloom2Pass = new UnrealBloomPass(new Vector2(w, h), 0.25, 0.85, 0.3);
    composer.addPass(this.bloom2Pass);

    this.hueSatPass = makeHueSatPass();
    composer.addPass(this.hueSatPass);

    // Vignette runs after bloom so the corner darkening isn't blown out by
    // bloom-bright pixels. `offset` is fixed at the shader default (1.0) and
    // `darkness` is driven by `vignetteStrength` in syncPostFX.
    this.vignettePass = new ShaderPass(VignetteShader);
    composer.addPass(this.vignettePass);

    this.gammaPass = makeGammaPass();
    composer.addPass(this.gammaPass);

    this.lensDistortionPass = makeLensDistortionPass();
    composer.addPass(this.lensDistortionPass);

    this.fxaaPass = new ShaderPass(FXAAShader);
    const dpr = this.renderer.getPixelRatio();
    const res = this.fxaaPass.material.uniforms.resolution;
    if (res) res.value.set(1 / (w * dpr), 1 / (h * dpr));
    composer.addPass(this.fxaaPass);

    this.composer = composer;
    return composer;
  }

  /**
   * Pull current postFXSettings into renderer + composer passes. Called every
   * frame; cheap (just a handful of uniform writes).
   */
  private syncPostFX(): void {
    const s = postFXSettings.value;
    // Tone mapping + exposure are RENDERER-level - not post-fx passes. They
    // configure the scene's color pipeline whether or not the composer chain
    // is active. Gating them behind `master` broke the dropdown/slider for
    // users in bake-QA mode.
    this.renderer.toneMapping = TONE_MAP_LOOKUP[s.toneMapping] ?? NoToneMapping;
    this.renderer.toneMappingExposure = s.exposure;

    // ESL env enable runs whether or not the composer exists - it touches
    // scene-level state, not composer passes.
    this.syncEslEnv();

    // Fog is renderer-global. Toggling it forces a one-frame material recompile
    // (USE_FOG define add/remove) which can flash black; that's inherent.
    if (s.master && s.fogEnabled) {
      if (!this.fogObject) this.fogObject = new FogExp2(s.fogColor, s.fogDensity);
      this.fogObject.color.setHex(s.fogColor);
      this.fogObject.density = s.fogDensity;
      this.scene.fog = this.fogObject;
    } else {
      // Always clear when not active - covers the toggle-off case even when
      // a non-ESL preset never set our fogObject.
      this.scene.fog = null;
    }

    if (!this.composer) return;
    if (this.ssaoPass) {
      this.ssaoPass.enabled = s.master && s.ssaoEnabled;
      this.ssaoPass.kernelRadius = s.ssaoRadius;
      this.ssaoPass.minDistance = 0.005;
      this.ssaoPass.maxDistance = 0.1 + s.ssaoIntensity * 0.05;
    }
    if (this.bloomPass) {
      this.bloomPass.enabled = s.master && s.bloomEnabled;
      this.bloomPass.strength = s.bloomStrength;
      this.bloomPass.radius = s.bloomRadius;
      this.bloomPass.threshold = s.bloomThreshold;
    }
    if (this.bloom2Pass) {
      this.bloom2Pass.enabled = s.master && s.bloom2Enabled;
      this.bloom2Pass.strength = s.bloom2Strength;
      this.bloom2Pass.radius = s.bloom2Radius;
      this.bloom2Pass.threshold = s.bloom2Threshold;
    }
    if (this.hueSatPass) {
      this.hueSatPass.enabled = s.master && s.hueSatEnabled;
      const u = this.hueSatPass.material.uniforms;
      if (u.hue) u.hue.value = s.hue;
      if (u.saturation) u.saturation.value = s.saturation;
    }
    if (this.vignettePass) {
      this.vignettePass.enabled = s.master && s.vignetteEnabled;
      const darkness = this.vignettePass.material.uniforms.darkness;
      if (darkness) darkness.value = s.vignetteStrength;
    }
    if (this.gammaPass) {
      this.gammaPass.enabled = s.master && Math.abs(s.gamma - 1) > 1e-3;
      const u = this.gammaPass.material.uniforms;
      if (u.gamma) u.gamma.value = s.gamma;
    }
    if (this.lensDistortionPass) {
      this.lensDistortionPass.enabled = s.master && s.lensDistortionEnabled;
      const u = this.lensDistortionPass.material.uniforms;
      if (u.baseIor) u.baseIor.value = s.baseIor;
      if (u.bandOffset) u.bandOffset.value = s.bandOffset;
      if (u.jitterIntensity) u.jitterIntensity.value = s.jitterIntensity;
    }
  }

  /** Push `eslEnvEnabled` signal into actual three.js state. Cheap (one walk +
   *  scalar set) - runs each frame inside syncPostFX. */
  private syncEslEnv(): void {
    const on = eslEnvEnabled.value;
    (this.scene as unknown as { environmentIntensity: number }).environmentIntensity = on ? 1 : 0;
    if (!this.cornellRoot) return;
    this.cornellRoot.traverse((obj) => {
      const m = obj as Mesh;
      if (!m.isMesh) return;
      const mat = m.material as MeshStandardMaterial;
      if (!mat || Array.isArray(mat)) return;
      const target = on ? 1 : 0;
      if (mat.envMapIntensity !== target) mat.envMapIntensity = target;
    });
  }

  /**
   * Single render entry point. Composer when master toggle is on, plain
   * renderer otherwise. AtlasViewer and other scissor overlays still
   * render *after* this returns, against the default framebuffer.
   */
  renderFrame(): void {
    this.syncPostFX();
    const s = postFXSettings.value;
    if (s.master) {
      this.ensureComposer().render();
    } else {
      // Defensive: SSAOPass + other composer passes set scene.overrideMaterial
      // or rebind render targets during their pre-passes. If a pass throws or
      // gets disabled mid-flight, those leak - direct render then shows black.
      // Reset known side-effects before falling back to a plain renderer pass.
      this.scene.overrideMaterial = null;
      this.renderer.setRenderTarget(null);
      this.renderer.render(this.scene, this.camera);
    }
  }

  // ──────────────────────────────────────────────────────────────────────────
  //  Camera views (Blender-style numpad shortcuts).
  // ──────────────────────────────────────────────────────────────────────────

  /** Compute scene bbox center + a safe-distance offset. Falls back to origin
   *  when the scene has no bake-eligible meshes (e.g. fresh empty scene). */
  private sceneBoundsOrFallback(): { center: Vector3; size: number } {
    const box = new Box3();
    for (const m of this.meshes) box.expandByObject(m);
    if (box.isEmpty()) return { center: new Vector3(0, 5, 0), size: 10 };
    const center = box.getCenter(new Vector3());
    const size = box.getSize(new Vector3());
    return { center, size: Math.max(size.x, size.y, size.z) || 10 };
  }

  /** Snap camera to one of the canonical viewpoints - Front (1), Right (3),
   *  Top (7), Persp (0). Distance keyed to scene size so it works across
   *  scales (Cornell vs imported levels). */
  setView(view: 'front' | 'right' | 'top' | 'persp' | 'back' | 'left' | 'bottom'): void {
    const { center, size } = this.sceneBoundsOrFallback();
    const d = size * 1.8;
    const pos = new Vector3();
    switch (view) {
      case 'front':
        pos.set(center.x, center.y, center.z + d);
        break;
      case 'back':
        pos.set(center.x, center.y, center.z - d);
        break;
      case 'right':
        pos.set(center.x + d, center.y, center.z);
        break;
      case 'left':
        pos.set(center.x - d, center.y, center.z);
        break;
      case 'top':
        pos.set(center.x, center.y + d, center.z + 0.001); // tiny z offset avoids gimbal lock
        break;
      case 'bottom':
        pos.set(center.x, center.y - d, center.z + 0.001);
        break;
      case 'persp':
      default:
        pos.set(center.x + d * 0.7, center.y + d * 0.5, center.z + d * 0.8);
        break;
    }
    this.camera.position.copy(pos);
    this.controls.target.copy(center);
    this.controls.update();
  }

  /** Frame an object: drop the orbit target on its bounding-box center and
   *  pull the camera back along the current view direction so the box fits in
   *  view. Mirrors the "F" / "frame selected" hotkey common to Maya, Blender,
   *  Unreal, and Unity editors. */
  frameObject(obj: Object3D): void {
    const box = new Box3().setFromObject(obj);
    if (box.isEmpty()) return;
    const center = box.getCenter(new Vector3());
    const size = box.getSize(new Vector3()).length();
    const dist = Math.max(size * 1.4, 1);
    const dir = new Vector3();
    this.camera.getWorldDirection(dir).negate(); // away from look-at
    this.controls.target.copy(center);
    this.camera.position.copy(center).addScaledVector(dir, dist);
    this.controls.update();
  }

  /** Update the perspective camera FOV (in degrees) and refresh projection. */
  setCameraFov(deg: number): void {
    this.camera.fov = Math.max(1, Math.min(170, deg));
    this.camera.updateProjectionMatrix();
  }

  /** Update gizmo visibility/enabled state (called from RAF). */
  syncGizmo(show: boolean): void {
    this.lightTransformController.visible = show;
    this.lightTransformController.enabled = show;
  }

  /** Sync visual light to UI color/intensity. Called from bake start. */
  syncVisualLight(colorHex: string, intensity: number): void {
    const lightColorLinear = new Color(colorHex).convertSRGBToLinear();
    this.visualLight.color.copy(lightColorLinear);
    this.visualLight.intensity = 30 * intensity;
  }

  // ──────────────────────────────────────────────────────────────────────────
  //  T-D7 - Asset Library: drag-drop add, delete, ground-plane pick
  // ──────────────────────────────────────────────────────────────────────────

  private groundPlane = new Plane(new Vector3(0, 1, 0), 0);

  /** Raycast a screen-space point against the y=0 ground plane. Returns origin
   *  fallback if the ray misses (camera looking up). */
  pickGroundPoint(clientX: number, clientY: number): Vector3 {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hit = new Vector3();
    const ok = this.raycaster.ray.intersectPlane(this.groundPlane, hit);
    if (!ok) return new Vector3(0, 0, 0);
    return hit;
  }

  /**
   * Add an asset (primitive mesh or light) to the scene at `worldPos`.
   * Meshes are parented to `cornellRoot` so they participate in the next bake.
   * Lights are parented to `this.scene` directly and do NOT get a dummy lightmap.
   * Returns the new node's uuid; fires `onSceneChanged` + `onStaleChange`.
   */
  addAsset(spec: AssetSpec, worldPos: Vector3): string {
    const node = createAsset(spec);
    if (!node) {
      console.warn('[baker] addAsset: unknown or disabled asset spec', spec);
      return '';
    }
    node.userData.assetSpec = { ...spec };
    node.position.copy(worldPos);

    if (spec.kind === 'primitive') {
      if (!this.cornellRoot) {
        this.cornellRoot = new Object3D();
        this.scene.add(this.cornellRoot);
      }
      const mesh = node as Mesh;
      // Lift primitive so its bottom rests on ground (best-effort for unit shapes).
      if (spec.id !== 'plane') node.position.y = Math.max(node.position.y, 0.5);
      this.cornellRoot.add(mesh);
      this.meshes.push(mesh as SceneObj);
      this.hooks.installDummyLightmaps([mesh as SceneObj]);
    } else {
      // Asset-library lights are Group objects bundling Light + Target + Helper.
      // Parented directly to the scene so they survive cornellRoot tear-downs
      // on preset swaps and dispose with the scene.
      this.scene.add(node);
      // Lift to the scene's vertical mid-line so lights don't sit on the floor
      // and scale with the environment (a 100m scene needs more headroom than
      // a 1m one). Falls back to 2 when the scene is empty.
      const { center, size } = this.sceneBoundsOrFallback();
      const lift = Math.max(center.y, size * 0.2);
      node.position.y = Math.max(node.position.y, lift);
    }

    this.hooks.onSceneChanged(this.meshes);
    this.hooks.onStaleChange?.();
    return node.uuid;
  }

  /**
   * Update every asset-library light helper. Three's helpers cache the
   * light's matrixWorld + target.matrixWorld and need an explicit .update()
   * call after any transform change. Cheap; safe to call every RAF.
   */
  updateLightHelpers(): void {
    for (const child of this.scene.children) {
      if (!child.userData?.bakerLightType) continue;
      const helper = child.userData?.lightHelper as { update?: () => void } | undefined;
      helper?.update?.();
    }
  }

  /**
   * Remove a node (mesh or scene-added light) by uuid. No-ops for the built-in
   * light dummy. Disposes GPU resources - for an undoable removal, use
   * `detachNode` + `attachNode` instead, and only `disposeDetachedNode` once
   * the command falls off the history.
   */
  removeNode(id: string): void {
    const detached = this.detachNode(id);
    if (detached) this.disposeDetachedNode(detached.node);
  }

  /**
   * Like `removeNode` but DOES NOT dispose. Returns the orphaned node plus
   * the parent it was unparented from so an undo command can re-attach it.
   * No-ops (returns null) for the built-in light dummy and unknown ids.
   */
  detachNode(id: string): { node: Object3D; parent: Object3D } | null {
    if (!id) return null;

    const meshIdx = this.meshes.findIndex((m) => m.uuid === id);
    if (meshIdx !== -1) {
      const mesh = this.meshes[meshIdx]!;
      const parent = mesh.parent;
      if (!parent) return null;
      parent.remove(mesh);
      this.meshes.splice(meshIdx, 1);
      this.hooks.onSceneChanged(this.meshes);
      this.hooks.onStaleChange?.();
      return { node: mesh, parent };
    }

    // Any direct scene child carrying `bakerLightType` is fair game to delete
    // - including the default area light. The user can drag a fresh one in
    // from the asset library if they want it back.
    const target = this.scene.children.find((o) => o.uuid === id);
    if (target?.userData?.bakerLightType) {
      this.scene.remove(target);
      // If we just removed what the gizmo was attached to, detach so the
      // transform widget doesn't dangle on a freed object.
      if (this.lightTransformController.object === target) {
        this.lightTransformController.detach();
        this.lightTransformController.visible = false;
        this.lightTransformController.enabled = false;
      }
      this.hooks.onSceneChanged(this.meshes);
      this.hooks.onStaleChange?.();
      return { node: target, parent: this.scene };
    }
    return null;
  }

  /**
   * Re-insert a previously detached node into a known parent. For meshes the
   * parent must be `cornellRoot`; for asset-library lights it must be `scene`.
   * Used by undo of a removal and by undo of an add.
   */
  attachNode(node: Object3D, parent: Object3D): void {
    parent.add(node);
    const mesh = node as Mesh;
    if (mesh.isMesh && !mesh.userData?.bakerLightType) {
      // Push back into the bake set if it isn't already there.
      if (!this.meshes.find((m) => m.uuid === mesh.uuid)) {
        this.meshes.push(mesh as SceneObj);
        this.hooks.installDummyLightmaps([mesh as SceneObj]);
      }
    }
    this.hooks.onSceneChanged(this.meshes);
    this.hooks.onStaleChange?.();
  }

  /** Permanently dispose geometry + materials of a detached node subtree. */
  disposeDetachedNode(node: Object3D): void {
    node.traverse((obj) => {
      const mesh = obj as Mesh;
      if (!mesh.isMesh) return;
      mesh.geometry?.dispose();
      const mat = mesh.material as MeshStandardMaterial | MeshStandardMaterial[] | undefined;
      if (Array.isArray(mat)) mat.forEach((mm) => mm.dispose());
      else mat?.dispose();
    });
  }

  /** Parent reference for newly added primitives - used by AddCommand for
   *  redo (so it can re-attach to the same cornellRoot it was added to). */
  getCornellRoot(): Object3D | null {
    return this.cornellRoot;
  }

  /**
   * Load a registered scene preset by id. Tears down bake-owned GPU resources
   * and the previous cornellRoot (disposing every geometry/material under it),
   * then builds the new scene into a fresh `cornellRoot` and walks bake-eligible
   * meshes into `this.meshes`. Skips `userData.lightmapIgnore` and the
   * lightDummy's visual-marker descendants.
   *
   * Appended for T-D10/T-D11 (preset registry).
   */
  async loadPresetById(presetId: string): Promise<void> {
    const preset = sceneRegistry.get(presetId);
    if (!preset) {
      console.warn(`[scene-loader] unknown preset id: ${presetId}`);
      return;
    }
    this.hooks.disposeBake();
    this.disposeCornellRoot();
    this.cornellRoot = new Object3D();
    this.cornellRoot.name = `preset:${presetId}`;
    this.scene.add(this.cornellRoot);

    const result = await preset.build(this.cornellRoot);

    // Hoist any raw THREE.Light objects the preset added directly under
    // `cornellRoot` into proper baker-style scene-children (uuid-keyed groups
    // with `userData.bakerLightType`). This makes them selectable / editable
    // through the same path as asset-library lights. Done before the mesh
    // walk so the wrappers don't accidentally show up as "meshes".
    this.hoistRawLights(this.cornellRoot);

    // Walk newly-added meshes (scoped to cornellRoot - preset content all lives
    // there by contract). Skip lightmap-ignored meshes (mirror/glass/emissive
    // markers); the lightDummy is parented to `scene`, not cornellRoot, so its
    // visual-marker disc cannot be picked up here.
    this.cornellRoot.traverse((obj) => {
      const m = obj as Mesh;
      if (!m.isMesh) return;
      if (m.userData.lightmapIgnore === true) return;
      this.meshes.push(m as SceneObj);
    });

    // Hide the default area light when the preset brought its own lighting -
    // avoids "stuffing an area light into every demo" (e.g. the three.js
    // point-lights port should bake from the point lights only).
    // `disableFallbackLight` lets presets force it hidden even when no lights
    // exist (ESL demos: user wants fully-dark scene when they delete all).
    const presetHasLights = this.scene.children.some(
      (c) => c !== this.lightDummy && c.userData?.bakerLightType,
    );
    this.lightDummy.visible = !presetHasLights && !result.disableFallbackLight;

    // Apply hints.
    if (result.background !== undefined) this.scene.background = new Color(result.background);
    if (result.camera) {
      this.camera.position.set(...result.camera.position);
      this.controls.target.set(...result.camera.target);
      this.controls.update();
    }
    if (result.lightDummy) this.lightDummy.position.set(...result.lightDummy.position);

    if (result.envmapUrl) await this.loadPresetEnvmap(result.envmapUrl);
    else this.clearPresetEnvmap();

    if (result.skyIntensity !== undefined) {
      ptSettings.value = { ...ptSettings.value, skyIntensity: result.skyIntensity };
    }

    // Auto-apply preset's ESL post-fx config if the preset stashed one.
    this.applyEslPostFX(this.cornellRoot);

    // GLB-loaded materials don't carry the `_originalMap` shadow field that
    // render-mode path expects (only primitives built via `this.mat()` get it).
    // Without it, the first `applyRenderMode` wipes `mat.map = null` and the
    // scene goes full white. Stamp it here so render-mode preserves albedo.
    this.stampOriginalMap(this.meshes);

    this.hooks.installDummyLightmaps(this.meshes);
    this.hooks.onSceneChanged(this.meshes);
  }

  /** Stamp `_originalMap = mat.map` on every mesh material that doesn't have
   *  the shadow field yet. Idempotent - re-callable across preset swaps. */
  private stampOriginalMap(meshes: ReadonlyArray<Mesh>): void {
    for (const m of meshes) {
      const mat = m.material as
        | (MeshStandardMaterial & { _originalMap?: Texture | null })
        | undefined;
      if (!mat || Array.isArray(mat)) continue;
      if ('_originalMap' in mat) continue;
      (mat as unknown as { _originalMap: Texture | null })._originalMap = mat.map ?? null;
    }
  }

  private presetEnvmap: Texture | null = null;
  private presetPmrem: PMREMGenerator | null = null;

  /** Load an equirectangular HDR file, PMREM-process it, assign to
   *  `scene.environment`. Disposes the prior preset envmap. */
  private async loadPresetEnvmap(url: string): Promise<void> {
    this.clearPresetEnvmap();
    if (!this.presetPmrem) this.presetPmrem = new PMREMGenerator(this.renderer);
    this.presetPmrem.compileEquirectangularShader();
    const loader = new RGBELoader();
    const tex = await new Promise<Texture>((resolve, reject) => {
      loader.load(url, resolve, undefined, reject);
    });
    tex.mapping = EquirectangularReflectionMapping;
    const env = this.presetPmrem.fromEquirectangular(tex).texture;
    tex.dispose();
    this.scene.environment = env;
    // Default OFF: ESL HDRs are tuned for ESL's shader patch (envPower etc.)
    // and blow out our vanilla PBR path. WorldPage exposes a slider to bring
    // it up. Keep the env probe loaded so reflections work the moment user
    // dials intensity > 0.
    (this.scene as unknown as { environmentIntensity: number }).environmentIntensity = 0;
    this.presetEnvmap = env;
  }

  /**
   * Read `userData.eslPostFX` from a preset root (or any descendant) and push
   * the matching fields into the `postFXSettings` signal. Idempotent - safe to
   * call repeatedly. Does nothing when no ESL config is present (other presets
   * keep their own post-fx state).
   */
  private applyEslPostFX(root: Object3D | null): void {
    if (!root) return;
    let cfg: Record<string, unknown> | undefined;
    root.traverse((obj) => {
      if (cfg) return;
      const c = obj.userData?.eslPostFX as Record<string, unknown> | undefined;
      if (c) cfg = c;
    });
    if (!cfg) return;
    const bloom1 = cfg.bloom1 as
      | { intensity: number; threshold: number; smoothing: number; kernelSize?: number }
      | undefined;
    const bloom2 = cfg.bloom2 as
      | { intensity: number; threshold: number; smoothing: number; kernelSize?: number }
      | undefined;
    const lens = cfg.lensDistortion as
      | { baseIor: number; bandOffset: number; jitter: number }
      | undefined;
    const fogColor = (cfg.fogColor as number) ?? 0x707656;
    const fogDensity = (cfg.fogDensity as number) ?? 0;
    // ESL's intensities are tuned for `postprocessing` lib's BloomEffect; our
    // UnrealBloomPass scales differently. Halve them as a first-cut.
    const eslBloomScale = 0.5;
    // ESL `kernelSize` is a 0..5 enum (TINY..HUGE) in postprocessing lib.
    // Map onto UnrealBloomPass radius (0..1): kernel 0..5 → ~0.2..0.85.
    const kernelToRadius = (k: number | undefined): number | undefined =>
      k === undefined ? undefined : 0.2 + Math.min(5, Math.max(0, k)) * 0.13;
    const cur = postFXSettings.value;
    const next = {
      ...cur,
      master: true,
      // Keep user's tonemap unless they're on `none` - then default to ACES.
      toneMapping: cur.toneMapping === 'none' ? ('aces' as const) : cur.toneMapping,
      exposure: (cfg.toneMappingExposure as number) ?? cur.exposure,
      bloomEnabled: !!bloom1,
      bloomStrength: bloom1 ? bloom1.intensity * eslBloomScale : cur.bloomStrength,
      bloomThreshold: bloom1?.threshold ?? cur.bloomThreshold,
      bloomRadius: kernelToRadius(bloom1?.kernelSize) ?? cur.bloomRadius,
      bloom2Enabled: !!bloom2,
      bloom2Strength: bloom2 ? bloom2.intensity * eslBloomScale : cur.bloom2Strength,
      bloom2Threshold: bloom2?.threshold ?? cur.bloom2Threshold,
      bloom2Radius: kernelToRadius(bloom2?.kernelSize) ?? cur.bloom2Radius,
      fogEnabled: fogDensity > 0,
      fogColor,
      fogDensity,
      hueSatEnabled: ((cfg.hue as number) ?? 0) !== 0 || ((cfg.saturation as number) ?? 0) !== 0,
      hue: (cfg.hue as number) ?? 0,
      saturation: (cfg.saturation as number) ?? 0,
      gamma: (cfg.gamma as number) ?? 1,
      lensDistortionEnabled: !!lens,
      baseIor: lens?.baseIor ?? cur.baseIor,
      bandOffset: lens?.bandOffset ?? cur.bandOffset,
      jitterIntensity: lens?.jitter ?? cur.jitterIntensity,
      lutFile: (cfg.lut as string) ?? '',
      // ESL doesn't ship SSAO; their post-stack is bloom + LUT + lens. SSAO
      // tuned for Cornell-scale scenes blackens huge interiors like the gym.
      ssaoEnabled: false,
    };
    postFXSettings.value = next;
  }

  private clearPresetEnvmap(): void {
    if (this.presetEnvmap) {
      this.scene.environment = null;
      this.presetEnvmap.dispose();
      this.presetEnvmap = null;
    }
  }

  /**
   * Walk a freshly-built preset root, find raw THREE.Light nodes that aren't
   * already inside a baker-style group, and wrap each in one. The wrapper is
   * promoted to a direct scene child so it appears in the Outliner and is
   * pickable / deletable like asset-library lights.
   */
  private hoistRawLights(root: Object3D): void {
    const orphans: { light: Light; ancestor: Object3D | null }[] = [];
    root.traverse((obj) => {
      if (!(obj as Light).isLight) return;
      // Skip if already inside a baker group.
      let p: Object3D | null = obj.parent;
      while (p) {
        if (p.userData?.bakerLightType) return;
        p = p.parent;
      }
      orphans.push({ light: obj as Light, ancestor: obj.parent });
    });
    for (const { light } of orphans) {
      const group = wrapAsBakerLight(light);
      this.scene.add(group);
    }
  }
}
