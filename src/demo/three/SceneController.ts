import {
  Box3,
  BoxGeometry,
  Color,
  DoubleSide,
  Euler,
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
  SpotLight,
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

export const ROOM = 10;
const HALF = ROOM / 2;

export type ScenePreset = 'classic' | 'advanced';

/** Snapshot of an Object3D's local transform for undo/redo. */
export type TransformSnap = { pos: Vector3; rot: Euler; scale: Vector3 };

export type SceneControllerHooks = {
  onSceneChanged: (meshes: SceneObj[]) => void;
  installDummyLightmaps: (meshes: SceneObj[]) => void;
  disposeBake: () => void;
  onStaleChange?: () => void;
  onViewportPick?: (id: string | null) => void;
  /** Fired at gizmo drag-end with before/after snapshots. Push to undo history. */
  onTransformChange?: (obj: Object3D, before: TransformSnap, after: TransformSnap) => void;
};

export const LIGHT_DUMMY_ID = 'light:dummy';

export class SceneController {
  renderer: WebGLRenderer;
  camera: PerspectiveCamera;
  scene: Scene;
  controls: OrbitControls;

  visualLight: PointLight;
  lightDummy: Object3D;
  lightTransformController: TransformControls;
  lightMarker: Mesh;

  cornellRoot: Object3D | null = null;
  meshes: SceneObj[] = [];
  lights: Light[] = [];
  lightMarkerMap: Map<string, string> = new Map();

  diag: Diagnostics;
  private _preDragSnap: TransformSnap | null = null;

  constructor(private hooks: SceneControllerHooks) {
    this.scene = new Scene();
    this.scene.background = new Color(0x0a0a0a);

    this.camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 5, 18);
    this.camera.lookAt(0, 5, 0);

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
      console.error('[baker:debug] CONTEXT RESTORED — RT data lost, lightmap textures are now empty', {
        meshes: this.meshes.length,
      });
    });

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 5, 0);
    this.controls.update();

    this.lightDummy = new Object3D();
    this.lightDummy.position.set(0, ROOM - 0.001, 0);
    this.scene.add(this.lightDummy);

    this.lightMarker = new Mesh(
      new PlaneGeometry(2.5, 2.5),
      new MeshBasicMaterial({ color: 0xffffff, side: DoubleSide }),
    );
    this.lightMarker.rotation.x = Math.PI / 2;
    this.lightDummy.add(this.lightMarker);
    this.lightMarkerMap.set(this.lightMarker.uuid, LIGHT_DUMMY_ID);

    this.visualLight = new PointLight(0xffffff, 80, 0, 2);
    this.visualLight.userData.lightmapIgnore = true;
    this.lightDummy.add(this.visualLight);

    this.lightTransformController = new TransformControls(this.camera, this.renderer.domElement);
    this.lightTransformController.addEventListener('dragging-changed', (event) => {
      this.controls.enabled = !event.value;
      if (event.value) {
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
          if (target !== this.lightDummy) this.hooks.onStaleChange?.();
          this.hooks.onTransformChange?.(target, before, after);
        }
      }
    });
    this.lightTransformController.attach(this.lightDummy);
    this.scene.add(this.lightTransformController);

    let downX = 0;
    let downY = 0;
    this.renderer.domElement.addEventListener('pointerdown', (e) => {
      downX = e.clientX;
      downY = e.clientY;
    });
    this.renderer.domElement.addEventListener('pointerup', (e) => {
      if (e.button !== 0) return;
      if (this.lightTransformController.dragging) return;
      if (Math.abs(e.clientX - downX) > 3 || Math.abs(e.clientY - downY) > 3) return;
      const id = this.pickAt(e.clientX, e.clientY);
      this.hooks.onViewportPick?.(id);
    });
  }

  // ── Selection + gizmo + tree ──────────────────────────────────────────────
  private raycaster = new Raycaster();
  private pointer = new Vector2();

  pickAt(clientX: number, clientY: number): string | null {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);

    const markerMeshes: Mesh[] = [this.lightMarker];
    for (const light of this.lights) {
      for (const child of light.children) {
        if (child.userData.isLightMarker) markerMeshes.push(child as Mesh);
      }
    }

    const hits = this.raycaster.intersectObjects([...this.meshes, ...markerMeshes], false);
    if (hits.length === 0) return null;
    const hitUUID = hits[0]!.object.uuid;
    return this.lightMarkerMap.get(hitUUID) ?? hitUUID;
  }

  lookupObject(id: string | null): Object3D | null {
    if (!id) return null;
    if (id === LIGHT_DUMMY_ID) return this.lightDummy;
    const mesh = this.meshes.find((m) => m.uuid === id);
    if (mesh) return mesh;
    return this.lights.find((l) => l.uuid === id) ?? null;
  }

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

  buildSceneTree(): { id: string; name: string; kind: 'mesh' | 'light'; visible: boolean }[] {
    const tree: { id: string; name: string; kind: 'mesh' | 'light'; visible: boolean }[] = [
      { id: LIGHT_DUMMY_ID, name: 'Scene Light', kind: 'light', visible: this.lightDummy.visible },
    ];
    for (const l of this.lights) {
      tree.push({ id: l.uuid, name: l.name || l.type, kind: 'light', visible: l.visible });
    }
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

  // ── Camera framing ────────────────────────────────────────────────────────

  /**
   * Frame the camera on a specific node. Preserves current viewing direction;
   * adjusts orbit target + camera distance to fit the object's bounding box.
   */
  frameObject(id: string): void {
    const obj = this.lookupObject(id);
    if (!obj) return;

    const box = new Box3();
    if ((obj as Mesh).isMesh) {
      box.expandByObject(obj);
    } else {
      // Light — no geometry; frame a unit sphere around its world position.
      const wp = obj.getWorldPosition(new Vector3());
      box.setFromCenterAndSize(wp, new Vector3(1, 1, 1));
    }
    if (box.isEmpty()) {
      const wp = obj.getWorldPosition(new Vector3());
      box.setFromCenterAndSize(wp, new Vector3(1, 1, 1));
    }

    const center = box.getCenter(new Vector3());
    const size = box.getSize(new Vector3());
    const radius = Math.max(size.x, size.y, size.z) * 1.2 || 2;

    // Keep current viewing direction; slide camera along it.
    const dir = new Vector3()
      .subVectors(this.camera.position, this.controls.target)
      .normalize();

    this.controls.target.copy(center);
    this.camera.position.copy(center).addScaledVector(dir, radius * 2.5);
    this.controls.update();
  }

  // ── Undo-aware node extraction ────────────────────────────────────────────

  /**
   * Remove a node from the scene + tracking arrays WITHOUT disposing its GPU
   * resources. Returns the node and its kind so the caller can re-insert it
   * via `reinsertNode` (undo). History commands hold the ref; disposal happens
   * naturally when the command is evicted from the stack.
   *
   * No-ops silently for LIGHT_DUMMY_ID or unknown ids.
   */
  extractNode(id: string): { node: Object3D; kind: 'mesh' | 'light' } | null {
    if (!id || id === LIGHT_DUMMY_ID) return null;

    const meshIdx = this.meshes.findIndex((m) => m.uuid === id);
    if (meshIdx !== -1) {
      const mesh = this.meshes[meshIdx]!;
      mesh.parent?.remove(mesh);
      this.meshes.splice(meshIdx, 1);
      this.hooks.onSceneChanged(this.meshes);
      this.hooks.onStaleChange?.();
      return { node: mesh, kind: 'mesh' };
    }

    const lightIdx = this.lights.findIndex((l) => l.uuid === id);
    if (lightIdx !== -1) {
      const light = this.lights[lightIdx]!;
      this.scene.remove(light);
      this.lights.splice(lightIdx, 1);
      // Keep lightMarkerMap entries — still valid on reinsertion.
      this.hooks.onSceneChanged(this.meshes);
      this.hooks.onStaleChange?.();
      return { node: light, kind: 'light' };
    }

    return null;
  }

  /**
   * Re-insert a node previously removed by `extractNode`. Mirrors addAsset
   * pathing: meshes → cornellRoot, lights → scene + this.lights.
   */
  reinsertNode(node: Object3D, kind: 'mesh' | 'light'): void {
    if (kind === 'mesh') {
      if (!this.cornellRoot) {
        this.cornellRoot = new Object3D();
        this.scene.add(this.cornellRoot);
      }
      this.cornellRoot.add(node);
      this.meshes.push(node as SceneObj);
      this.hooks.installDummyLightmaps([node as SceneObj]);
    } else {
      this.scene.add(node);
      this.lights.push(node as Light);
    }
    this.hooks.onSceneChanged(this.meshes);
    this.hooks.onStaleChange?.();
  }

  // ── Material helpers ──────────────────────────────────────────────────────
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
    const T = 0.2;
    const white = this.mat(0xf0f0f0);
    const red = this.mat(0xd62728);
    const green = this.mat(0x2ca02c);

    const floor = new Mesh(new BoxGeometry(ROOM, T, ROOM), white);
    floor.name = 'Floor'; floor.position.set(0, -T / 2, 0);
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
    left.name = 'Left Wall (Red)'; left.position.set(-HALF - T / 2, HALF, 0);
    this.addMesh(left);

    const right = new Mesh(new BoxGeometry(T, ROOM, ROOM), green);
    right.name = 'Right Wall (Green)'; right.position.set(HALF + T / 2, HALF, 0);
    this.addMesh(right);
  }

  private buildClassicBlocks(): void {
    const white = this.mat(0xe8e8e8);

    const tall = new Mesh(new BoxGeometry(3, 6, 3), white);
    tall.name = 'Tall Block'; tall.position.set(-1.8, 3, -1.5); tall.rotation.y = 0.29;
    this.addMesh(tall);

    const short = new Mesh(new BoxGeometry(3, 3, 3), white.clone());
    short.name = 'Short Block';
    (short.material as unknown as { _originalMap: Texture | null })._originalMap = null;
    short.position.set(1.8, 1.5, 1.5); short.rotation.y = -0.29;
    this.addMesh(short);
  }

  private buildAdvancedExtras(): void {
    const sphere = new Mesh(new SphereGeometry(1.0, 48, 32), this.mat(0xf5f5f5, 0.4, 0.0));
    sphere.name = 'Sphere'; sphere.position.set(2.4, 1.0, 3.0);
    this.addMesh(sphere);

    const knot = new Mesh(
      new TorusKnotGeometry(0.55, 0.18, 160, 24),
      this.mat(0xffd166, 0.55, 0.0),
    );
    knot.name = 'Torus Knot'; knot.position.set(0.0, 1.0, 2.8); knot.rotation.x = Math.PI / 2;
    this.addMesh(knot);

    const accent = new Mesh(new BoxGeometry(1.2, 1.2, 1.2), this.mat(0xc77a3a, 0.8, 0.0));
    accent.name = 'Accent Block'; accent.position.set(-3.5, 0.6, 2.8); accent.rotation.y = 0.45;
    this.addMesh(accent);
  }

  rebuildScene(preset: ScenePreset): void {
    this.hooks.disposeBake();
    if (this.cornellRoot) this.scene.remove(this.cornellRoot);
    this.cornellRoot = new Object3D();
    this.scene.add(this.cornellRoot);
    this.meshes = [];
    this._clearUserLights();

    this.buildWalls();
    this.buildClassicBlocks();
    if (preset === 'advanced') this.buildAdvancedExtras();

    this.hooks.installDummyLightmaps(this.meshes);
    this.hooks.onSceneChanged(this.meshes);
  }

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
    if (this.cornellRoot) this.scene.remove(this.cornellRoot);
    this.cornellRoot = new Object3D();
    this.scene.add(this.cornellRoot);
    this.cornellRoot.add(gltf.scene);
    this.meshes = [];
    this._clearUserLights();

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

  syncGizmo(show: boolean): void {
    this.lightTransformController.visible = show;
    this.lightTransformController.enabled = show;
  }

  syncVisualLight(colorHex: string, intensity: number): void {
    const lightColorLinear = new Color(colorHex).convertSRGBToLinear();
    this.visualLight.color.copy(lightColorLinear);
    this.visualLight.intensity = 30 * intensity;
  }

  // ── Asset Library ─────────────────────────────────────────────────────────
  private groundPlane = new Plane(new Vector3(0, 1, 0), 0);

  pickGroundPoint(clientX: number, clientY: number): Vector3 {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hit = new Vector3();
    const ok = this.raycaster.ray.intersectPlane(this.groundPlane, hit);
    return ok ? hit : new Vector3(0, 0, 0);
  }

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
      if (spec.id !== 'plane') node.position.y = Math.max(node.position.y, 0.5);
      const mesh = node as Mesh;
      this.cornellRoot.add(mesh);
      this.meshes.push(mesh as SceneObj);
      this.hooks.installDummyLightmaps([mesh as SceneObj]);
    } else {
      const light = node as Light;
      this.scene.add(light);
      if (light instanceof SpotLight) this.scene.add(light.target);

      const marker = new Mesh(
        new SphereGeometry(0.18, 12, 8),
        new MeshBasicMaterial({ color: 0xffee44, depthTest: false, transparent: true, opacity: 0.9 }),
      );
      marker.userData.lightmapIgnore = true;
      marker.userData.isLightMarker = true;
      light.add(marker);
      this.lights.push(light);
      this.lightMarkerMap.set(marker.uuid, light.uuid);
    }

    this.hooks.onSceneChanged(this.meshes);
    this.hooks.onStaleChange?.();
    return node.uuid;
  }

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

    const lightIdx = this.lights.findIndex((l) => l.uuid === id);
    if (lightIdx !== -1) {
      const light = this.lights[lightIdx]!;
      for (const child of light.children) {
        if (child.userData.isLightMarker) this.lightMarkerMap.delete(child.uuid);
      }
      this.scene.remove(light);
      this.lights.splice(lightIdx, 1);
      this.hooks.onSceneChanged(this.meshes);
      this.hooks.onStaleChange?.();
    }
  }

  async loadPresetById(presetId: string): Promise<void> {
    const preset = sceneRegistry.get(presetId);
    if (!preset) {
      console.warn(`[scene-loader] unknown preset id: ${presetId}`);
      return;
    }
    this.hooks.disposeBake();
    if (this.cornellRoot) this.scene.remove(this.cornellRoot);
    for (const child of [...this.scene.children]) {
      if (child.name === 'sceneRoot') this.scene.remove(child);
    }
    this.cornellRoot = new Object3D();
    this.cornellRoot.name = `preset:${presetId}`;
    this.scene.add(this.cornellRoot);
    this.meshes = [];
    this._clearUserLights();

    const preExisting = new Set<Mesh>();
    this.scene.traverse((obj) => {
      if ((obj as Mesh).isMesh) preExisting.add(obj as Mesh);
    });

    const result = await preset.build(this.scene);

    this.scene.traverse((obj) => {
      const m = obj as Mesh;
      if (!m.isMesh) return;
      if (preExisting.has(m)) return;
      if (m.userData.lightmapIgnore === true) return;
      let p: Object3D | null = m.parent;
      while (p) {
        if (p === this.lightDummy) return;
        p = p.parent;
      }
      if (!this.meshes.includes(m as SceneObj)) this.meshes.push(m as SceneObj);
    });

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

  private _clearUserLights(): void {
    for (const light of this.lights) this.scene.remove(light);
    this.lights = [];
    const entry = this.lightMarkerMap.get(this.lightMarker.uuid);
    this.lightMarkerMap.clear();
    if (entry) this.lightMarkerMap.set(this.lightMarker.uuid, entry);
  }
}
