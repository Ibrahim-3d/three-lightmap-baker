import { type Object3D, MeshStandardMaterial, Mesh, type Texture, Vector3 } from 'three';
import { AtlasViewer, BakeFrameInfo, exportLightmap, ExportFormat } from 'baker-classic';
import type { BakerOrchestrator } from 'baker-classic/ui';
import type { AssetSpec } from 'shared';
import { atlasViewerVisible, bakeProgress, bakeStatus } from 'shared';
import { LAYERS } from './three/modes';
import { BakeController } from './three/BakeController';
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
  private bakeStartTime = 0;
  private bakeBatchHistory: { samples: number; t: number }[] = [];
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
    this.rebuildScene();

    // Init PT viewport (async, resolves before user can switch mode).
    void this._initPT().catch((err) => console.error('[PT] init failed:', err));
  }

  private async _initPT(): Promise<void> {
    const sc = this.sceneController;
    // matrixWorld is lazy — must force update before PTController reads it.
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

  /** Hidden file input for GLB imports — clicked by the File menu. */
  private initGLBInput(): void {
    this.glbFileInput = document.createElement('input');
    this.glbFileInput.type = 'file';
    this.glbFileInput.accept = '.glb,.gltf';
    this.glbFileInput.style.display = 'none';
    this.glbFileInput.addEventListener('change', () => {
      const f = this.glbFileInput.files?.[0];
      if (f) void this.importGLB(f);
    });
    document.body.appendChild(this.glbFileInput);
  }

  updateSize(): void {
    this.sceneController.updateSize();
  }

  // ──────────────────────────────────────────────────────────────────────────
  //  Scene rebuild / GLB import.
  // ──────────────────────────────────────────────────────────────────────────
  private async rebuildScene(): Promise<void> {
    this.sceneController.rebuildScene(this.options.preset as ScenePreset);
    if (this.options.autoBake) await this.bake();
    this.startLoop();
  }

  private async importGLB(file: File): Promise<void> {
    this.externalHooks.onSceneLoad?.();
    await this.sceneController.importGLB(file);
    this.options.perMesh = {};
    if (this.options.autoBake) await this.bake();
    this.startLoop();
  }

  // ──────────────────────────────────────────────────────────────────────────
  //  Bake orchestration.
  // ──────────────────────────────────────────────────────────────────────────
  private async bake(): Promise<void> {
    if (!this.sceneController.meshes.length) return;

    this.bakeStartTime = performance.now();
    this.bakeBatchHistory = [];

    this.sceneController.syncVisualLight(this.options.lightColor, this.options.lightIntensity);

    try {
      await this.bakeController.runBake(
        this.sceneController.meshes,
        this.sceneController.lightDummy.position,
        this.options,
      );
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('[baker] bake failed:', err);
      this.externalHooks.onBakeError?.(msg);
      this.options.pause = true;
      return;
    }

    this.options.refinementStatus = 'idle';
    this.options.samples = this.options.targetSamples;
    this.options.spp = this.options.targetSamples * this.options.casts;
    this.options.etaSec = 0;
    this.options.pause = false;

    this.renderModeRunner.apply();
    this.bakeController.diag.snap('after applyRenderMode (lightmaps mounted)');
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
      console.warn('[baker] export: no bake to export — bake first');
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
      console.warn('[baker] no baked lightmap available — bake first');
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

      this.sceneController.syncGizmo(this.options.showGizmo);
      this.sceneController.updateLightHelpers();

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
        // PT mode: PTController owns the render loop — skip normal Three.js render.
        if (!this.ptController?.isActive) {
          this.sceneController.renderer.render(
            this.sceneController.scene,
            this.sceneController.camera,
          );
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
   * atlas viewer. Texel-density and albedo layers have no per-group texture —
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

  async loadScenePreset(id: string): Promise<void> {
    this.externalHooks.onSceneLoad?.();
    // Deactivate PT during load to avoid rendering a half-built scene.
    const wasPT = this.ptController?.isActive ?? false;
    this.ptController?.deactivate();

    await this.sceneController.loadPresetById(id);
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
   * Path-Traced Bake — uses pt-renderer's BVH sampler for physically accurate
   * lightmaps. Requires UV2 coordinates (run Quick Bake once to generate them).
   * After accumulation, applies dilation + optional denoise via baker-classic's
   * refinement pipeline so seams are filled and noise is suppressed.
   */
  async requestPTBake(): Promise<void> {
    const meshes = this.sceneController.meshes as Mesh[];
    if (!meshes.length) return;
    const hasUV2 = meshes.every((m) => m.geometry.hasAttribute('uv2'));
    if (!hasUV2) {
      console.warn('[PTBaker] UV2 missing — run Quick Bake first to generate UV2 coords.');
      this.externalHooks.onBakeError?.('UV2 missing — run Quick Bake first.');
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

      // Dilation + denoise — fills UV seams and reduces noise.
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
        '[PTBaker] done — ' +
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
