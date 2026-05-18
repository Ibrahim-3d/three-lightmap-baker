import {
  Box3,
  BoxGeometry,
  Color,
  DoubleSide,
  type Light,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  PerspectiveCamera,
  Plane,
  PlaneGeometry,
  PointLight,
  Raycaster,
  Scene,
  SphereGeometry,
  SRGBColorSpace,
  type Texture,
  TorusKnotGeometry,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Diagnostics } from '../../lib';
import { createAsset, type AssetSpec } from '../assets/primitives';
import { sceneRegistry } from '../scenes/registry';
import type { SceneObj } from './types';

// Classic Cornell box dims: 10×10×10 unit room centered at (0, 5, 0)
export const ROOM = 10;
const HALF = ROOM / 2;

export type ScenePreset = 'classic' | 'advanced';

/** Callbacks fired by SceneController so the orchestrator and BakeController stay in sync. */
export type SceneControllerHooks = {
  /** Fired after every scene rebuild / GLB import. Orchestrator rebuilds per-mesh UI here. */
  onSceneChanged: (meshes: SceneObj[]) => void;
  /** Called after every scene rebuild — must pin the dummy lightmap onto every mesh
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
};

/** Built-in id for the moveable scene light. Lights become uuid-keyed in T-D7. */
export const LIGHT_DUMMY_ID = 'light:dummy';

/**
 * Owns the THREE side of the demo: scene graph, camera, renderer, orbit/transform
 * controls, the visual+bake light dummy, scene-build factories (Cornell), and GLB
 * import. Knows nothing about the LightmapBaker call site — that lives in
 * BakeController. Knows nothing about Tweakpane / DOM — that stays in the
 * orchestrator until T-D2 (Preact).
 */
export class SceneController {
  renderer: WebGLRenderer;
  camera: PerspectiveCamera;
  scene: Scene;
  controls: OrbitControls;

  /** Visual-only point light. The baker reads `lightDummy.position` only. */
  visualLight: PointLight;
  lightDummy: Object3D;
  lightTransformController: TransformControls;
  lightMarker: Mesh;

  cornellRoot: Object3D | null = null;
  meshes: SceneObj[] = [];

  diag: Diagnostics;

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
        '[baker:debug] CONTEXT RESTORED — RT data lost, lightmap textures are now empty',
        { meshes: this.meshes.length },
      );
    });

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 5, 0);
    this.controls.update();

    // Light dummy — baker reads .position to fire direct-light rays toward it.
    this.lightDummy = new Object3D();
    this.lightDummy.position.set(0, ROOM - 0.001, 0);
    this.scene.add(this.lightDummy);

    // Visual-only: small emissive disc + point light so "Albedo/Standard" looks right.
    this.lightMarker = new Mesh(
      new PlaneGeometry(2.5, 2.5),
      new MeshBasicMaterial({ color: 0xffffff, side: DoubleSide }),
    );
    this.lightMarker.rotation.x = Math.PI / 2;
    this.lightDummy.add(this.lightMarker);

    this.visualLight = new PointLight(0xffffff, 80, 0, 2);
    // Display-only — `collectLightsFromScene` skips lights tagged this way, so
    // this PointLight is not treated as a bake input.
    this.visualLight.userData.lightmapIgnore = true;
    this.lightDummy.add(this.visualLight);

    this.lightTransformController = new TransformControls(this.camera, this.renderer.domElement);
    this.lightTransformController.addEventListener('dragging-changed', (event) => {
      this.controls.enabled = !event.value;
      // Mark stale when a drag of a non-light object ends (lightDummy moves are
      // visual-only; only their position matters for bake, which is queried on
      // bake start, not from gizmo events).
      if (!event.value) {
        const target = this.lightTransformController.object;
        if (target && target !== this.lightDummy) {
          this.hooks.onStaleChange?.();
        }
      }
    });
    this.lightTransformController.attach(this.lightDummy);
    this.scene.add(this.lightTransformController);

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

  /** Cast a ray from screen-space (client coords) to find the nearest mesh hit.
   *  Returns the mesh uuid, or null if no mesh was hit. */
  pickAt(clientX: number, clientY: number): string | null {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects(this.meshes, false);
    return hits.length > 0 ? hits[0]!.object.uuid : null;
  }

  /** Resolve a tree-node id back to its Object3D. */
  lookupObject(id: string | null): Object3D | null {
    if (!id) return null;
    if (id === LIGHT_DUMMY_ID) return this.lightDummy;
    return this.meshes.find((m) => m.uuid === id) ?? null;
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
    const tree: { id: string; name: string; kind: 'mesh' | 'light'; visible: boolean }[] = [
      { id: LIGHT_DUMMY_ID, name: 'Scene Light', kind: 'light', visible: this.lightDummy.visible },
    ];
    for (const m of this.meshes) {
      tree.push({
        id: m.uuid,
        name: m.name || `Mesh (${m.geometry.type.replace('Geometry', '')})`,
        kind: 'mesh',
        visible: m.visible,
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
   * `importGLB`, and `loadPresetById` — keeps GPU resource lifetime tied to
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
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(window.devicePixelRatio);
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
  //  T-D7 — Asset Library: drag-drop add, delete, ground-plane pick
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
      // Light path — parent directly to scene; no dummy lightmap install.
      this.scene.add(node as Light);
    }

    this.hooks.onSceneChanged(this.meshes);
    this.hooks.onStaleChange?.();
    return node.uuid;
  }

  /**
   * Remove a node (mesh or scene-added light) by uuid. No-ops for the built-in
   * light dummy (id === LIGHT_DUMMY_ID). Fires both hooks on success.
   */
  removeNode(id: string): void {
    if (!id || id === LIGHT_DUMMY_ID) return;

    const meshIdx = this.meshes.findIndex((m) => m.uuid === id);
    if (meshIdx !== -1) {
      const mesh = this.meshes[meshIdx]!;
      mesh.parent?.remove(mesh);
      mesh.geometry?.dispose();
      const mat = mesh.material as MeshStandardMaterial | MeshStandardMaterial[] | undefined;
      if (Array.isArray(mat)) mat.forEach((mm) => mm.dispose());
      else mat?.dispose();
      this.meshes.splice(meshIdx, 1);
      this.hooks.onSceneChanged(this.meshes);
      this.hooks.onStaleChange?.();
      return;
    }

    // Light path — walk scene.children for an Object3D matching uuid.
    const target = this.scene.children.find((o) => o.uuid === id);
    if (target && target !== this.lightDummy) {
      this.scene.remove(target);
      this.hooks.onSceneChanged(this.meshes);
      this.hooks.onStaleChange?.();
    }
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

    // Walk newly-added meshes (scoped to cornellRoot — preset content all lives
    // there by contract). Skip lightmap-ignored meshes (mirror/glass/emissive
    // markers); the lightDummy is parented to `scene`, not cornellRoot, so its
    // visual-marker disc cannot be picked up here.
    this.cornellRoot.traverse((obj) => {
      const m = obj as Mesh;
      if (!m.isMesh) return;
      if (m.userData.lightmapIgnore === true) return;
      this.meshes.push(m as SceneObj);
    });

    // Apply hints.
    if (result.background !== undefined) this.scene.background = new Color(result.background);
    if (result.camera) {
      this.camera.position.set(...result.camera.position);
      this.controls.target.set(...result.camera.target);
      this.controls.update();
    }
    if (result.lightDummy) this.lightDummy.position.set(...result.lightDummy.position);

    this.hooks.installDummyLightmaps(this.meshes);
    this.hooks.onSceneChanged(this.meshes);
  }
}
