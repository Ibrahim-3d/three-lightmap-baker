import {
  BoxGeometry,
  DirectionalLight,
  Matrix4,
  type Object3D,
  MeshStandardMaterial,
  Mesh,
  PlaneGeometry,
  Scene,
  type Texture,
  Vector3,
  WebGLRenderer,
} from 'three';
import {
  AtlasViewer,
  BakeFrameInfo,
  createRendererAdapter,
  exportLightmap,
  ExportFormat,
  LightmapBaker,
  type LightmapContextLossTarget,
} from 'baker-classic';
import type { BakerOrchestrator } from 'baker-classic/ui';
import type { AssetSpec } from 'shared';
import { activeSceneId, atlasViewerVisible, bakeProgress, bakeStatus, dirtyMeshIds } from 'shared';
import { LAYERS } from './three/modes';
import { BakeController } from './three/BakeController';
import { FlyController } from './three/FlyController';
import {
  SceneController,
  type SceneControllerHooks,
  type ScenePreset,
  type TransformSnap,
} from './three/SceneController';
import { RenderModeRunner } from './three/modes';
import { PTController } from './three/PTController';
import type { PerMeshMap, RenderModeOptions, SceneObj } from './three/types';

/**
 * Bake-quality presets. `targetSamples` is **frames**, not samples-per-texel:
 * with `casts` rays per frame the actual samples-per-texel ≈ targetSamples × casts.
 * Bounces are a separate quality knob (1–4) so users can crank GI without
 * relinquishing their preferred resolution/casts/sample budget.
 */
const QUALITY_PRESETS = {
  Custom: null,
  Draft: { lightMapSize: 256, casts: 4, targetSamples: 32 },
  Preview: { lightMapSize: 512, casts: 5, targetSamples: 96 },
  Production: { lightMapSize: 1024, casts: 6, targetSamples: 256 },
  Final: { lightMapSize: 2048, casts: 8, targetSamples: 512 },
} as const;
type QualityPresetName = keyof typeof QUALITY_PRESETS;

type Vec3Tuple = [number, number, number];

type ProjectAssetV1 = {
  spec: AssetSpec;
  name: string;
  visible: boolean;
  position: Vec3Tuple;
  rotation: Vec3Tuple;
  scale: Vec3Tuple;
  material?: {
    color: number;
    roughness: number;
    metalness: number;
  };
};

type ProjectOptionsV1 = {
  quality: QualityPresetName;
  layer: string;
  lightMapSize: number;
  casts: number;
  targetSamples: number;
  bounces: number;
  safeMode: boolean;
  filterMode: string;
  directLightEnabled: boolean;
  indirectLightEnabled: boolean;
  ambientLightEnabled: boolean;
  ambientDistance: number;
  aoIntensity: number;
  aoExponent: number;
  aoSamples: number;
  texelsPerMeter: number;
  directIntensity: number;
  giIntensity: number;
  skyColor: string;
  skyIntensity: number;
  autoApplyRefinement: boolean;
  dilationIterations: number;
  denoiseEnabled: boolean;
  denoiseSigma: number;
  denoiseThreshold: number;
  denoiseKSigma: number;
  exportFormat: ExportFormat;
};

type ProjectImportedModelV1 = {
  kind: 'glb' | 'gltf';
  fileName: string;
  mimeType: string;
  dataBase64: string;
};

type ProjectV1 = {
  version: 1;
  scenePresetId: string;
  importedModel?: ProjectImportedModelV1;
  options: ProjectOptionsV1;
  assets: ProjectAssetV1[];
};

/**
 * Demo orchestrator (T-D12: tweakpane fully removed). Owns the options bag,
 * the RAF loop, lightmap/scene-GLB export, and a thin public surface that
 * the Preact shell + Playwright tests call through. Visual UI lives in the
 * `app/` Preact tree; THREE side delegated to SceneController; baking to
 * BakeController; render-mode swaps to RenderModeRunner.
 */
export class CornellBoxExample implements BakerOrchestrator {
  sceneController: SceneController;
  bakeController: BakeController;
  renderModeRunner: RenderModeRunner;
  ptController: PTController | null = null;
  flyController!: FlyController;
  atlasViewer: AtlasViewer;

  options = {
    preset: 'advanced' as 'classic' | 'advanced',
    layer: 'combined',
    quality: 'Custom' as QualityPresetName,
    lightMapSize: 1024,
    casts: 5,
    targetSamples: 256,
    bounces: 2,
    safeMode: true,
    filterMode: 'linear',
    directLightEnabled: true,
    indirectLightEnabled: true,
    ambientLightEnabled: true,
    ambientDistance: 0.5,
    aoIntensity: 1.0,
    aoExponent: 1.5,
    aoSamples: 5,
    texelsPerMeter: 10,
    lightSize: 2.9,
    lightIntensity: 2.0,
    lightColor: '#ffffff',
    directIntensity: 1.4,
    giIntensity: 2.7,
    skyColor: '#ffffff',
    skyIntensity: 0.0,
    pause: false,
    showGizmo: true,
    autoBake: false,

    autoApplyRefinement: false,
    dilationIterations: 1,
    denoiseEnabled: false,
    denoiseSigma: 2.5,
    denoiseThreshold: 0.18,
    denoiseKSigma: 1.0,

    secondaryLightEnabled: false,
    secondaryDirX: -0.5,
    secondaryDirY: -1.0,
    secondaryDirZ: -0.5,
    secondaryIntensity: 0.8,
    secondaryColor: '#ffffcc',

    samples: 0,
    spp: 0,
    etaSec: 0,
    refinementStatus: 'idle' as 'idle' | 'running' | 'applied' | 'skipped',

    exportFormat: 'png' as ExportFormat,

    perMesh: {} as PerMeshMap,
  };

  // --- RAF + ETA window ---
  private looping = false;
  private glbFileInput!: HTMLInputElement;
  private projectFileInput!: HTMLInputElement;
  private currentScenePresetId = 'cornell.advanced';
  private currentImportedModel: ProjectImportedModelV1 | null = null;
  private bakeStartTime = 0;
  private bakeBatchHistory: { samples: number; t: number }[] = [];
  private bakeInFlight = false;
  private activeBakeAbort: AbortController | null = null;
  private static readonly BAKE_ETA_WINDOW = 16;

  /** Optional callbacks the orchestrator forwards to the Preact shell. */
  externalHooks: {
    onStaleChange?: () => void;
    onSceneChanged?: () => void;
    onViewportPick?: (id: string | null) => void;
    onBakeError?: (msg: string) => void;
    /** Fired at gizmo drag-end for undo/redo push. */
    onTransformChange?: (obj: Object3D, before: TransformSnap, after: TransformSnap) => void;
    /** Fired before any full scene replacement (preset load / GLB import). */
    onSceneLoad?: () => void;
  } = {};

  constructor() {
    const hooks: SceneControllerHooks = {
      onSceneChanged: () => this.onSceneChanged(),
      installDummyLightmaps: (meshes) => this.bakeController.installDummyLightmaps(meshes),
      disposeBake: () => {
        this.bakeController.disposeAllGroups();
      },
      onStaleChange: () => this.externalHooks.onStaleChange?.(),
      onViewportPick: (id) => this.externalHooks.onViewportPick?.(id),
      onTransformChange: (obj, before, after) =>
        this.externalHooks.onTransformChange?.(obj, before, after),
    };
    this.sceneController = new SceneController(hooks);
    this.flyController = new FlyController(
      this.sceneController.camera,
      this.sceneController.renderer,
      this.sceneController.controls,
    );
    this.bakeController = new BakeController(
      this.sceneController.renderer,
      this.sceneController.scene,
    );
    this.renderModeRunner = new RenderModeRunner({
      getMeshes: () => this.sceneController.meshes,
      getBakeGroups: () => this.bakeController.bakeGroups,
      getMeshToGroup: () => this.bakeController.meshToGroup,
      getOptions: (): RenderModeOptions => ({
        layer: this.options.layer,
        texelsPerMeter: this.options.texelsPerMeter,
        lightMapSize: this.options.lightMapSize,
        perMesh: this.options.perMesh,
      }),
      getVisualLight: () => this.sceneController.visualLight,
      getLightMarker: () => this.sceneController.lightMarker,
      getDummyLightmap: () => this.bakeController.getDummyLightmap(),
    });
    this.bakeController.onProgress = (info) => this.onBakeFrame(info);

    // Multi-atlas overlay: corner panel that mirrors active layer's textures.
    // Hidden by default; View → Toggle Atlas Viewer flips it on.
    this.atlasViewer = new AtlasViewer({ size: 256, margin: 16, corner: 'br', sRGB: true });
    this.atlasViewer.attachHeader(document.body);
    this.atlasViewer.visible = false;

    this.initGLBInput();
    this.initProjectInput();
    this.rebuildScene();

    // Init PT viewport (async, resolves before user can switch mode).
    void this._initPT().catch((err) => console.error('[PT] init failed:', err));
  }

  private async _initPT(): Promise<void> {
    const sc = this.sceneController;
    // matrixWorld is lazy - must force update before PTController reads it.
    sc.scene.updateMatrixWorld(true);
    this.ptController = new PTController({
      renderer: sc.renderer,
      camera: sc.camera,
      controls: sc.controls,
      getScene: () => sc.scene,
    });
    await this.ptController.init();
    // Prime BVH with initial scene so first activate() is immediate.
    await this.ptController.setScene(sc.scene, sc.camera);
  }

  private onSceneChanged(): void {
    // Prune stale perMesh entries.
    const liveUUIDs = new Set(this.sceneController.meshes.map((m) => m.uuid));
    for (const k of Object.keys(this.options.perMesh)) {
      if (!liveUUIDs.has(k)) delete this.options.perMesh[k];
    }
    this.externalHooks.onSceneChanged?.();
  }

  /** Hidden file input for GLB imports - clicked by the File menu. */
  private initGLBInput(): void {
    this.glbFileInput = document.createElement('input');
    this.glbFileInput.id = 'baker-glb-input';
    this.glbFileInput.type = 'file';
    this.glbFileInput.accept = '.glb,.gltf';
    this.glbFileInput.style.display = 'none';
    this.glbFileInput.addEventListener('change', () => {
      const f = this.glbFileInput.files?.[0];
      if (f) void this.importGLB(f);
    });
    document.body.appendChild(this.glbFileInput);
  }

  /** Hidden file input for Project JSON imports - clicked by the File menu. */
  private initProjectInput(): void {
    this.projectFileInput = document.createElement('input');
    this.projectFileInput.id = 'baker-project-input';
    this.projectFileInput.type = 'file';
    this.projectFileInput.accept = 'application/json,.json';
    this.projectFileInput.style.display = 'none';
    this.projectFileInput.addEventListener('change', () => {
      const f = this.projectFileInput.files?.[0];
      if (f) void this.importProjectFile(f);
    });
    document.body.appendChild(this.projectFileInput);
  }

  updateSize(): void {
    this.sceneController.updateSize();
  }

  // ──────────────────────────────────────────────────────────────────────────
  //  Scene rebuild / GLB import.
  // ──────────────────────────────────────────────────────────────────────────
  private async rebuildScene(): Promise<void> {
    this.currentImportedModel = null;
    this.sceneController.rebuildScene(this.options.preset as ScenePreset);
    if (this.options.autoBake) await this.bake();
    this.startLoop();
  }

  private async importGLB(file: File): Promise<void> {
    this.externalHooks.onSceneLoad?.();
    const buffer = await file.arrayBuffer();
    this.currentScenePresetId = 'imported.glb';
    this.currentImportedModel = {
      kind: file.name.toLowerCase().endsWith('.gltf') ? 'gltf' : 'glb',
      fileName: file.name || 'scene.glb',
      mimeType: file.type || 'model/gltf-binary',
      dataBase64: CornellBoxExample.arrayBufferToBase64(buffer),
    };
    await this.sceneController.importGLBBuffer(buffer);
    this.options.perMesh = {};
    if (this.options.autoBake) await this.bake();
    this.startLoop();
  }

  private async loadImportedProjectModel(model: ProjectImportedModelV1): Promise<void> {
    this.externalHooks.onSceneLoad?.();
    const buffer = CornellBoxExample.base64ToArrayBuffer(model.dataBase64);
    this.currentScenePresetId = 'imported.glb';
    this.currentImportedModel = { ...model };
    await this.sceneController.importGLBBuffer(buffer);
    this.options.perMesh = {};
    this.startLoop();
  }

  private async importProjectFile(file: File): Promise<void> {
    const text = await file.text();
    const project = JSON.parse(text) as ProjectV1;
    await this.loadProject(project);
  }

  private static arrayBufferToBase64(buffer: ArrayBuffer): string {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    const chunkSize = 0x8000;
    for (let i = 0; i < bytes.length; i += chunkSize) {
      const chunk = bytes.subarray(i, i + chunkSize);
      binary += String.fromCharCode(...chunk);
    }
    return btoa(binary);
  }

  private static base64ToArrayBuffer(base64: string): ArrayBuffer {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes.buffer;
  }

  private projectOptions(): ProjectOptionsV1 {
    return {
      quality: this.options.quality,
      layer: this.options.layer,
      lightMapSize: this.options.lightMapSize,
      casts: this.options.casts,
      targetSamples: this.options.targetSamples,
      bounces: this.options.bounces,
      safeMode: this.options.safeMode,
      filterMode: this.options.filterMode,
      directLightEnabled: this.options.directLightEnabled,
      indirectLightEnabled: this.options.indirectLightEnabled,
      ambientLightEnabled: this.options.ambientLightEnabled,
      ambientDistance: this.options.ambientDistance,
      aoIntensity: this.options.aoIntensity,
      aoExponent: this.options.aoExponent,
      aoSamples: this.options.aoSamples,
      texelsPerMeter: this.options.texelsPerMeter,
      directIntensity: this.options.directIntensity,
      giIntensity: this.options.giIntensity,
      skyColor: this.options.skyColor,
      skyIntensity: this.options.skyIntensity,
      autoApplyRefinement: this.options.autoApplyRefinement,
      dilationIterations: this.options.dilationIterations,
      denoiseEnabled: this.options.denoiseEnabled,
      denoiseSigma: this.options.denoiseSigma,
      denoiseThreshold: this.options.denoiseThreshold,
      denoiseKSigma: this.options.denoiseKSigma,
      exportFormat: this.options.exportFormat,
    };
  }

  private serializeProjectAssets(): ProjectAssetV1[] {
    const roots: Object3D[] = [];
    const cornellRoot = this.sceneController.cornellRoot;

    if (cornellRoot) {
      for (const child of cornellRoot.children) {
        if (child.userData.assetSpec) roots.push(child);
      }
    }

    for (const child of this.sceneController.scene.children) {
      if (child === cornellRoot) continue;
      if (child.userData.assetSpec) roots.push(child);
    }

    return roots.map((obj) => {
      const spec = obj.userData.assetSpec as AssetSpec;
      return {
        spec: { ...spec },
        name: obj.name,
        visible: obj.visible,
        position: [obj.position.x, obj.position.y, obj.position.z],
        rotation: [obj.rotation.x, obj.rotation.y, obj.rotation.z],
        scale: [obj.scale.x, obj.scale.y, obj.scale.z],
        material: this.projectMaterial(obj),
      };
    });
  }

  private projectMaterial(obj: Object3D): ProjectAssetV1['material'] | undefined {
    const stack = [obj];
    while (stack.length) {
      const child = stack.pop();
      if (!child) continue;
      if (child instanceof Mesh) {
        const mat = child.material;
        if (mat instanceof MeshStandardMaterial) {
          return {
            color: mat.color.getHex(),
            roughness: mat.roughness,
            metalness: mat.metalness,
          };
        }
      }
      stack.push(...child.children);
    }

    return undefined;
  }

  private applyProjectAsset(obj: Object3D, asset: ProjectAssetV1): void {
    obj.name = asset.name;
    obj.visible = asset.visible;
    obj.position.set(asset.position[0], asset.position[1], asset.position[2]);
    obj.rotation.set(asset.rotation[0], asset.rotation[1], asset.rotation[2]);
    obj.scale.set(asset.scale[0], asset.scale[1], asset.scale[2]);
    obj.userData.assetSpec = { ...asset.spec };

    if (!asset.material) return;
    const material = asset.material;
    obj.traverse((child) => {
      if (!(child instanceof Mesh)) return;
      const mat = child.material;
      if (!(mat instanceof MeshStandardMaterial)) return;
      mat.color.setHex(material.color);
      mat.roughness = material.roughness;
      mat.metalness = material.metalness;
      mat.needsUpdate = true;
    });
  }

  // ──────────────────────────────────────────────────────────────────────────
  //  Bake orchestration.
  // ──────────────────────────────────────────────────────────────────────────
  private async bake(): Promise<void> {
    if (!this.sceneController.meshes.length) return;
    if (this.bakeInFlight) return;

    this.bakeStartTime = performance.now();
    this.bakeBatchHistory = [];
    this.bakeInFlight = true;
    this.activeBakeAbort = new AbortController();
    this.options.pause = false;
    bakeStatus.value = 'baking';

    // Note: the default area light is now a regular asset-library light edited
    // directly through SceneLightPage (no options-mirror), so we no longer
    // overwrite its color/intensity from `options.lightColor` at bake time.

    try {
      await this.bakeController.runBake(
        this.sceneController.meshes,
        this.sceneController.lightDummy.position,
        this.options,
        { signal: this.activeBakeAbort.signal },
      );
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      this.bakeInFlight = false;
      this.activeBakeAbort = null;
      this.bakeController.disposeAllGroups();
      this.options.samples = 0;
      this.options.spp = 0;
      this.options.etaSec = 0;
      this.options.pause = true;

      if (msg.includes('aborted by signal')) {
        console.info('[baker] bake cancelled');
        this.externalHooks.onStaleChange?.();
        return;
      }

      console.error('[baker] bake failed:', err);
      this.externalHooks.onBakeError?.(msg);
      return;
    }

    this.bakeInFlight = false;
    this.activeBakeAbort = null;
    this.options.refinementStatus = 'idle';
    this.options.samples = this.options.targetSamples;
    this.options.spp = this.options.targetSamples * this.options.casts;
    this.options.etaSec = 0;
    this.options.pause = false;

    this.renderModeRunner.apply();
    this.bakeController.diag.snap('after applyRenderMode (lightmaps mounted)');

    // Unreal-style dirty tracking: snapshot the world matrix of every baked
    // mesh now. From here on, any mesh whose matrixWorld drifts from its
    // snapshot is rendered unlit until the next rebake.
    this.snapshotBakedTransforms();
    dirtyMeshIds.value = new Set();
  }

  /** Per-mesh "baked at this transform" snapshot. Cleared on scene reload. */
  private bakedMatrices = new Map<string, Matrix4>();
  /** Cached dirty set so we only bump the signal on transition. */
  private _lastDirtySet = new Set<string>();

  private snapshotBakedTransforms(): void {
    this.bakedMatrices.clear();
    for (const m of this.sceneController.meshes) {
      m.updateMatrixWorld(true);
      this.bakedMatrices.set(m.uuid, m.matrixWorld.clone());
    }
  }

  /**
   * Per-RAF dirty check. Compares each mesh's current matrixWorld to its
   * post-bake snapshot. Dirty meshes get \`lightMapIntensity = 0\` so they
   * fall back to unlit albedo while the rest of the scene keeps its baked
   * appearance - same UX as Unreal's "stationary light needs rebuild".
   *
   * Cheap - Matrix4.equals is a 16-element compare per mesh.
   */
  private updateDirtyTracking(): void {
    if (!this.bakedMatrices.size) return;
    const dirty = new Set<string>();
    for (const m of this.sceneController.meshes) {
      const snap = this.bakedMatrices.get(m.uuid);
      // Multi-material meshes are real (GLB imports often carry arrays);
      // accessing `.lightMap` on the array directly is undefined-behavior,
      // so iterate each slot.
      const mats = Array.isArray(m.material) ? m.material : [m.material];
      const isDirty = !snap || !snap.equals(m.matrixWorld);
      if (isDirty) {
        dirty.add(m.uuid);
        for (const mat of mats) {
          if (mat instanceof MeshStandardMaterial && mat.lightMap) mat.lightMapIntensity = 0;
        }
      } else if (this._lastDirtySet.has(m.uuid)) {
        // Returned to the baked transform → restore lightmap intensity.
        for (const mat of mats) {
          if (mat instanceof MeshStandardMaterial && mat.lightMap) mat.lightMapIntensity = 1;
        }
      }
    }
    // Signal only on transition (Preact signal equality is reference-based).
    if (dirty.size !== this._lastDirtySet.size || !setsEqual(dirty, this._lastDirtySet)) {
      this._lastDirtySet = dirty;
      dirtyMeshIds.value = dirty;
    }
  }

  /** Fired by BakeController per library bake frame. Updates options mirrors. */
  private onBakeFrame(info: BakeFrameInfo): void {
    const minSamples = Math.min(info.bounceSamples, info.aoSamples);
    this.options.samples = minSamples;
    this.options.spp = minSamples * this.options.casts;
  }

  private applyQualityPreset(name: QualityPresetName): void {
    const p = QUALITY_PRESETS[name];
    if (!p) return; // Custom = no-op
    this.options.lightMapSize = p.lightMapSize;
    this.options.casts = p.casts;
    this.options.targetSamples = p.targetSamples;
    void this.bake();
  }

  private async applyRefinement(): Promise<void> {
    if (!this.bakeController.bakeGroups.length) return;
    this.options.refinementStatus = 'running';

    await this.bakeController.runRefinement(this.options, this.options.lightMapSize, () => {
      // Progress goes through bakeProgress signal pipeline (T-D8 status bar).
    });

    this.options.refinementStatus =
      this.options.dilationIterations > 0 || this.options.denoiseEnabled ? 'applied' : 'skipped';
    this.renderModeRunner.apply();
  }

  private showUnrefined(): void {
    this.bakeController.clearRefinement();
    this.options.refinementStatus = 'idle';
    this.renderModeRunner.apply();
  }

  private async rebakeAO(): Promise<void> {
    if (!this.bakeController.bakeGroups.length || !this.bakeController.bakeResult) return;
    await this.bakeController.runAOOnly({
      samples: this.options.aoSamples,
      distance: this.options.ambientDistance,
      targetSamples: this.options.targetSamples,
    });
    this.options.pause = false;
  }

  // ──────────────────────────────────────────────────────────────────────────
  //  Export.
  // ──────────────────────────────────────────────────────────────────────────
  exportFinal(): Promise<void> {
    return this.exportFinalImpl();
  }

  private async exportFinalImpl(): Promise<void> {
    const groups = this.bakeController.bakeGroups;
    if (!groups.length) {
      console.warn('[baker] export: no bake to export - bake first');
      return;
    }
    const stage = groups[0]!.refinement ? 'refined' : 'composite';
    for (let i = 0; i < groups.length; i++) {
      const g = groups[i]!;
      const tex = g.refinement?.texture ?? g.composite.texture;
      const suffix = groups.length > 1 ? `_atlas${i}` : '';
      await this.runExport(tex, `lightmap_${stage}_${this.options.lightMapSize}${suffix}`);
    }
  }

  private async runExport(tex: Texture, basename: string): Promise<void> {
    const fmt = this.options.exportFormat;
    const res = this.options.lightMapSize;
    const t0 = performance.now();
    try {
      await exportLightmap(this.sceneController.renderer, tex, res, basename, fmt);
      console.info(
        `[baker] exported ${basename}.${fmt} (${res}×${res}) in ${(performance.now() - t0).toFixed(0)}ms`,
      );
    } catch (e) {
      console.error('[baker] export failed:', e);
      throw e;
    }
  }

  exportSceneGLB(): Promise<void> {
    return this.exportSceneGLBImpl();
  }

  private async exportSceneGLBImpl(): Promise<void> {
    if (!this.sceneController.meshes.length) {
      console.warn('[baker] no meshes to export');
      return;
    }
    if (!this.bakeController.bakeGroups.length) {
      console.warn('[baker] no baked lightmap available - bake first');
      return;
    }

    const previousLayer = this.options.layer;
    this.options.layer = 'combined';
    this.renderModeRunner.apply();
    this.options.layer = previousLayer;

    const { GLTFExporter } = await import('three/examples/jsm/exporters/GLTFExporter');
    const exporter = new GLTFExporter();
    const result = await new Promise<ArrayBuffer>((resolve, reject) => {
      exporter.parse(
        this.sceneController.cornellRoot!,
        (data) => {
          if (data instanceof ArrayBuffer) resolve(data);
          else reject(new Error('expected binary GLB output'));
        },
        (err) => reject(err),
        { binary: true, embedImages: true },
      );
    });

    const blob = new Blob([result], { type: 'model/gltf-binary' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'scene-baked.glb';
    a.click();
    URL.revokeObjectURL(url);
  }

  // ──────────────────────────────────────────────────────────────────────────
  //  RAF loop.
  // ──────────────────────────────────────────────────────────────────────────
  private estimateTimeRemaining(currentSamples: number, targetSamples: number): number {
    if (targetSamples <= 0 || currentSamples >= targetSamples) return 0;
    const hist = this.bakeBatchHistory;
    if (hist.length < 2) return 0;
    const first = hist[0]!;
    const last = hist[hist.length - 1]!;
    const dn = last.samples - first.samples;
    const dtMs = last.t - first.t;
    if (dn <= 0 || dtMs <= 0) return 0;
    const msPerSample = dtMs / dn;
    return ((targetSamples - currentSamples) * msPerSample) / 1000;
  }

  private startLoop(): void {
    if (this.looping) return;
    this.looping = true;

    const tick = (): void => {
      requestAnimationFrame(tick);

      this.flyController.tick();
      this.sceneController.syncGizmo(this.options.showGizmo);
      this.sceneController.updateLightHelpers();
      this.updateDirtyTracking();

      // Bake step.
      if (this.bakeController.bakeGroups.length && !this.options.pause) {
        const result = this.bakeController.tick();
        if (result) {
          if (result.allDone) {
            this.options.pause = true;
            this.options.etaSec = 0;
            const elapsed = (performance.now() - this.bakeStartTime) / 1000;
            console.info(
              `[baker] done in ${elapsed.toFixed(2)}s (${this.bakeController.bakeGroups.length} atlas${this.bakeController.bakeGroups.length === 1 ? '' : 'es'})`,
            );
            if (this.options.autoApplyRefinement) void this.applyRefinement();
          } else {
            const totalSamples = this.options.targetSamples;
            const tNow = performance.now();
            const tail = this.bakeBatchHistory[this.bakeBatchHistory.length - 1];
            if (!tail || tail.samples !== result.minSamples) {
              this.bakeBatchHistory.push({ samples: result.minSamples, t: tNow });
              if (this.bakeBatchHistory.length > CornellBoxExample.BAKE_ETA_WINDOW) {
                this.bakeBatchHistory.shift();
              }
            }
            const eta = this.estimateTimeRemaining(result.minSamples, totalSamples);
            const spp = result.minSamples * this.options.casts;
            this.options.samples = result.minSamples;
            this.options.spp = spp;
            this.options.etaSec = Math.ceil(eta);
          }
        }
      }

      this.sceneController.controls.update();
      if (this.bakeController.firstPostBakeRender) {
        this.bakeController.firstPostBakeRender = false;
        this.bakeController.diag.snap('about to do FIRST post-bake scene render');
        this.bakeController.diag.measure('FIRST post-bake renderer.render', () =>
          this.sceneController.renderer.render(
            this.sceneController.scene,
            this.sceneController.camera,
          ),
        );
        this.bakeController.diag.snap('after FIRST post-bake scene render');
      } else {
        // PT mode: PTController owns the render loop - skip normal Three.js render.
        if (!this.ptController?.isActive) {
          // renderFrame() runs the EffectComposer if postFX.master is on,
          // otherwise a plain renderer.render. Either way the default
          // framebuffer is updated before the atlas-viewer scissor pass.
          this.sceneController.renderFrame();
        }
      }

      // Atlas viewer overlay (toggled from View → Toggle Atlas Viewer).
      // Skipped during PT to avoid clobbering the PT framebuffer.
      this.atlasViewer.visible = atlasViewerVisible.value && !this.ptController?.isActive;
      if (this.atlasViewer.visible) {
        this.syncAtlasViewerTextures();
        this.atlasViewer.render(this.sceneController.renderer);
      }
    };
    tick();
  }

  /**
   * Pull each bake group's texture for the current view layer and feed the
   * atlas viewer. Texel-density and albedo layers have no per-group texture -
   * fall back to the composite (or hide if pre-bake).
   */
  private syncAtlasViewerTextures(): void {
    const layer = LAYERS.find((l) => l.id === this.options.layer) ?? LAYERS[0]!;
    const groups = this.bakeController.bakeGroups;
    const texs: Texture[] = [];
    for (const g of groups) {
      const t = layer.getLightMap({ group: g }) ?? g.composite.texture;
      if (t) texs.push(t);
    }
    this.atlasViewer.setTextures(texs);
    this.atlasViewer.setLayerLabel(layer.label);
  }

  /** Bake gate for slider/input change events. Skips mid-drag + auto-bake disabled. */
  private maybeBake = (e?: { last?: boolean }): void => {
    if (e?.last === false) return;
    if (!this.options.autoBake) return;
    void this.bake();
  };

  // ──────────────────────────────────────────────────────────────────────────
  //  Public surface (Preact UI + Playwright tests).
  // ──────────────────────────────────────────────────────────────────────────

  get meshes(): ReadonlyArray<SceneObj> {
    return this.sceneController.meshes;
  }

  get scene() {
    return this.sceneController.scene;
  }

  requestBake(): Promise<void> {
    return this.bake();
  }

  cancelBake(): void {
    if (!this.bakeInFlight) return;
    this.activeBakeAbort?.abort();
  }

  serializeProject(): ProjectV1 {
    return {
      version: 1,
      scenePresetId: this.currentScenePresetId,
      importedModel:
        this.currentScenePresetId === 'imported.glb' && this.currentImportedModel
          ? { ...this.currentImportedModel }
          : undefined,
      options: this.projectOptions(),
      assets: this.serializeProjectAssets(),
    };
  }

  async loadProject(project: ProjectV1): Promise<void> {
    if (!project || project.version !== 1) {
      throw new Error('Unsupported project file version');
    }

    if (project.scenePresetId === 'imported.glb') {
      if (!project.importedModel) throw new Error('Imported GLB project is missing model data');
      await this.loadImportedProjectModel(project.importedModel);
    } else {
      await this.loadScenePreset(project.scenePresetId);
      this.currentImportedModel = null;
    }
    Object.assign(this.options, project.options);
    activeSceneId.value = project.scenePresetId;

    for (const asset of project.assets) {
      const id = this.addAsset(asset.spec, asset.position);
      const obj = this.lookupObject(id);
      if (obj) this.applyProjectAsset(obj, asset);
    }

    this.options.perMesh = {};
    this.bakeController.disposeAllGroups();
    this.externalHooks.onSceneChanged?.();
    this.externalHooks.onStaleChange?.();
    this.startLoop();
  }

  saveProject(): void {
    const blob = new Blob([JSON.stringify(this.serializeProject(), null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'three-lightmap-baker-project.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  openProjectFile(): void {
    this.projectFileInput.value = '';
    this.projectFileInput.click();
  }

  requestAORebake(): Promise<void> {
    return this.rebakeAO();
  }

  setQuality(name: QualityPresetName): void {
    this.options.quality = name;
    this.applyQualityPreset(name);
  }

  setLayer(id: string): void {
    this.options.layer = id;
    this.renderModeRunner.apply();
  }

  /** Push per-layer intensity uniforms into every group's composite (view-time). */
  refreshComposites(overrides: {
    directIntensity?: number;
    giIntensity?: number;
    aoEnabled?: boolean;
    aoIntensity?: number;
    aoExponent?: number;
  }): void {
    this.bakeController.refreshAllComposites(overrides);
  }

  /** Switch between rasterisation ('combined' etc.) and PT ('pathtraced') mode. */
  setRenderMode(mode: string): void {
    if (mode === 'pathtraced') {
      const sc = this.sceneController;
      // Rebuild BVH from current live scene then activate.
      void this.ptController?.setScene(sc.scene, sc.camera).then(() => {
        this.ptController?.activate();
      });
    } else {
      this.ptController?.deactivate();
    }
  }

  setAutoBake(on: boolean): void {
    this.options.autoBake = on;
  }

  /** Coarse bake state from live fields. Stays consistent across N bakes. */
  getBakeStatus(): 'idle' | 'baking' | 'done' | 'error' {
    if (this.bakeInFlight) return 'baking';
    if (!this.bakeController.bakeGroups.length) return 'idle';
    if (this.options.pause) return 'done';
    return 'baking';
  }

  getMeshCount(): number {
    return this.sceneController.meshes.length;
  }

  getBakeGroupCount(): number {
    return this.bakeController.bakeGroups.length;
  }

  /** ms since the last `bake()` invocation. Returns 0 while no bake has run yet. */
  getBakeElapsedMs(): number {
    if (!this.bakeStartTime) return 0;
    return performance.now() - this.bakeStartTime;
  }

  getSceneTree(): ReturnType<typeof this.sceneController.buildSceneTree> {
    return this.sceneController.buildSceneTree();
  }

  pickAt(clientX: number, clientY: number): string | null {
    return this.sceneController.pickAt(clientX, clientY);
  }

  setSelection(id: string | null): void {
    this.sceneController.attachGizmoTo(this.sceneController.lookupObject(id));
  }

  lookupObject(id: string | null): Object3D | null {
    return this.sceneController.lookupObject(id);
  }

  getScene() {
    return this.sceneController.scene;
  }

  setGizmoMode(mode: 'translate' | 'rotate' | 'scale'): void {
    this.sceneController.setGizmoMode(mode);
  }

  setNodeVisible(id: string, visible: boolean): void {
    this.sceneController.setVisible(id, visible);
  }

  frameNode(id: string): void {
    const obj = this.lookupObject(id);
    if (obj) this.sceneController.frameObject(obj);
  }

  applyRefinementNow(): Promise<void> {
    return this.applyRefinement();
  }

  showUnrefinedNow(): void {
    this.showUnrefined();
  }

  /** Read a single pixel from the current backbuffer. Image-space coords (y down).
   *  Returns [r,g,b,a] each in [0,255]. Returns null if the WebGL context is lost. */
  sampleCanvasPixel(x: number, y: number): [number, number, number, number] | null {
    const renderer = this.sceneController.renderer;
    const gl = renderer.getContext();
    if (gl.isContextLost()) return null;
    renderer.setRenderTarget(null);
    renderer.render(this.sceneController.scene, this.sceneController.camera);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    const buf = new Uint8Array(4);
    const h = gl.drawingBufferHeight;
    gl.readPixels(x, h - y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, buf);
    return [buf[0]!, buf[1]!, buf[2]!, buf[3]!];
  }

  getRenderDiag(): { canvasW: number; canvasH: number; gbW: number; gbH: number; glError: number } {
    const gl = this.sceneController.renderer.getContext();
    return {
      canvasW: this.sceneController.renderer.domElement.width,
      canvasH: this.sceneController.renderer.domElement.height,
      gbW: gl.drawingBufferWidth,
      gbH: gl.drawingBufferHeight,
      glError: gl.getError(),
    };
  }

  async runAdapterRuntimeSmoke(): Promise<{
    rendererLabel: string;
    elapsedMs: number;
    meshCount: number;
    groupCount: number;
    lightmapCount: number;
    texelCount: number;
  }> {
    const startedAt = performance.now();
    const width = 128;
    const height = 128;
    const hasOffscreen = typeof OffscreenCanvas !== 'undefined';
    const canvas = hasOffscreen
      ? new OffscreenCanvas(width, height)
      : document.createElement('canvas');
    const renderer = new WebGLRenderer({
      canvas,
      antialias: false,
      powerPreference: 'high-performance',
      failIfMajorPerformanceCaveat: false,
    });
    renderer.setSize(width, height, false);

    const scene = new Scene();
    const mesh = new Mesh(
      new BoxGeometry(1, 1, 1),
      new MeshStandardMaterial({ color: 0xd7dde8, roughness: 0.7 }),
    );
    mesh.position.y = 0.5;
    scene.add(mesh);

    const ground = new Mesh(
      new PlaneGeometry(4, 4),
      new MeshStandardMaterial({ color: 0x596579, roughness: 0.9 }),
    );
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    const light = new DirectionalLight(0xffffff, 2.4);
    light.position.set(2, 4, 1.5);
    scene.add(light);

    const rendererLabel = hasOffscreen ? 'offscreen-browser' : 'detached-browser-canvas';
    const adapter = createRendererAdapter(renderer, {
      contextLossTarget: canvas as unknown as LightmapContextLossTarget,
      label: rendererLabel,
    });
    const baker = new LightmapBaker({
      rendererAdapter: adapter,
      resolution: 64,
      samples: 1,
      castsPerFrame: 1,
      bounces: 1,
      denoise: false,
      ao: false,
      timeoutProtection: { safeMode: true },
    });

    let result = null as Awaited<ReturnType<LightmapBaker['bake']>> | null;
    try {
      result = await baker.bake(scene);
      result.apply();
      return {
        rendererLabel,
        elapsedMs: performance.now() - startedAt,
        meshCount: result.stats.meshCount,
        groupCount: result.groups.length,
        lightmapCount: result.lightmaps.size,
        texelCount: result.stats.texelCount,
      };
    } finally {
      result?.dispose();
      renderer.dispose();
      mesh.geometry.dispose();
      ground.geometry.dispose();
      (mesh.material as MeshStandardMaterial).dispose();
      (ground.material as MeshStandardMaterial).dispose();
    }
  }

  async loadScenePreset(id: string): Promise<void> {
    this.externalHooks.onSceneLoad?.();
    // Deactivate PT during load to avoid rendering a half-built scene.
    const wasPT = this.ptController?.isActive ?? false;
    this.ptController?.deactivate();

    await this.sceneController.loadPresetById(id);
    this.currentScenePresetId = id;
    this.currentImportedModel = null;
    activeSceneId.value = id;
    this.options.perMesh = {};

    if (this.ptController) {
      await this.ptController.setScene(this.sceneController.scene, this.sceneController.camera);
      if (wasPT) this.ptController.activate();
    }

    this.startLoop();
  }

  addAsset(spec: AssetSpec, worldPos: Vector3 | [number, number, number]): string {
    const vec = Array.isArray(worldPos)
      ? new Vector3(worldPos[0], worldPos[1], worldPos[2])
      : worldPos;
    return this.sceneController.addAsset(spec, vec);
  }

  removeNode(id: string): void {
    this.sceneController.removeNode(id);
  }

  pickGroundPoint(clientX: number, clientY: number): Vector3 {
    return this.sceneController.pickGroundPoint(clientX, clientY);
  }

  /** Public so Preact menus can fire AO-only re-bake / Open .glb / refinement. */
  triggerImportGLB(): void {
    this.glbFileInput.value = '';
    this.glbFileInput.click();
  }

  /**
   * Path-Traced Bake - uses pt-renderer's BVH sampler for physically accurate
   * lightmaps. Requires UV2 coordinates (run Quick Bake once to generate them).
   * After accumulation, applies dilation + optional denoise via baker-classic's
   * refinement pipeline so seams are filled and noise is suppressed.
   */
  async requestPTBake(): Promise<void> {
    const meshes = this.sceneController.meshes as Mesh[];
    if (!meshes.length) return;
    const hasUV2 = meshes.every((m) => m.geometry.hasAttribute('uv2'));
    if (!hasUV2) {
      console.warn('[PTBaker] UV2 missing - run Quick Bake first to generate UV2 coords.');
      this.externalHooks.onBakeError?.('UV2 missing - run Quick Bake first.');
      return;
    }

    // Dynamic imports keep pt-baker tree-shaken out of classic-only builds.
    const { PTBaker } = await import('pt-baker');
    const { buildBVHScene, disposeBVHSceneData } = await import('pt-renderer');
    const { renderAtlas } = await import('baker-classic');
    const { runRefinement } = await import('baker-classic');

    const sc = this.sceneController;
    const lts = this.ptController?.lightTextureState;

    bakeStatus.value = 'baking';
    bakeProgress.value = { pct: 0, samples: 0, atlas: 1, total: 1, elapsedMs: 0 };

    const sceneData = buildBVHScene(sc.scene);
    const baker = new PTBaker();

    try {
      const result = await baker.bake(sc.renderer, meshes, sceneData, {
        size: this.options.lightMapSize,
        samples: this.options.targetSamples,
        skyIntensity: this.options.skyIntensity,
        lightTex: lts?.tex,
        numLights: lts?.count ?? 0,
        onProgress: (pct) => {
          bakeProgress.value = {
            pct: pct * 100,
            samples: Math.round(pct * this.options.targetSamples),
            atlas: 1,
            total: 1,
            elapsedMs: 0,
          };
        },
      });

      // Dilation + denoise - fills UV seams and reduces noise.
      // renderAtlas gives us the position texture needed for edge-aware dilation.
      const atlasResult = renderAtlas(sc.renderer, meshes, this.options.lightMapSize);
      const refined = await runRefinement(
        sc.renderer,
        result.texture.texture,
        atlasResult.positionTexture,
        this.options.lightMapSize,
        {
          dilationIterations: Math.max(1, this.options.dilationIterations),
          denoiseEnabled: this.options.denoiseEnabled,
          denoiseSigma: this.options.denoiseSigma,
          denoiseThreshold: this.options.denoiseThreshold,
          denoiseKSigma: this.options.denoiseKSigma,
        },
      );
      atlasResult.positionTexture.dispose();
      atlasResult.normalTexture.dispose();

      // Apply the refined lightmap to every mesh (handles multi-material meshes).
      for (const mesh of meshes) {
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        for (const mat of mats) {
          if (mat instanceof MeshStandardMaterial) {
            mat.lightMap = refined.texture;
            mat.lightMapIntensity = 1.0;
            mat.needsUpdate = true;
          }
        }
      }

      // Store result so exportFinal() can access it.
      console.info(
        '[PTBaker] done - ' +
          this.options.targetSamples +
          ' samples, ' +
          this.options.lightMapSize +
          '×' +
          this.options.lightMapSize,
      );
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('[PTBaker] bake failed:', err);
      this.externalHooks.onBakeError?.(msg);
    } finally {
      disposeBVHSceneData(sceneData);
      baker.dispose();
      bakeStatus.value = 'done';
    }
  }
}

function setsEqual<T>(a: ReadonlySet<T>, b: ReadonlySet<T>): boolean {
  if (a.size !== b.size) return false;
  for (const v of a) if (!b.has(v)) return false;
  return true;
}
