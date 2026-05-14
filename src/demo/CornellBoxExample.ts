import { Color, type Texture } from 'three';
import { Pane } from 'tweakpane';
import {
  AtlasViewer,
  AtlasViewerCorner,
  BakeFrameInfo,
  exportLightmap,
  ExportFormat,
} from '../lib';
import { BakeController } from './three/BakeController';
import { SceneController, type SceneControllerHooks, type ScenePreset } from './three/SceneController';
import { FilterOptions, LAYER_OPTIONS, LAYERS, RenderModeRunner } from './three/modes';
import type { PerMeshMap, RenderModeOptions, SceneObj } from './three/types';

const presets = {
  'Cornell Classic': 'classic',
  'Cornell Advanced': 'advanced',
};

/**
 * Bake-quality presets — Task 5 spec.
 *
 * `targetSamples` is **frames**, not samples-per-texel. With `casts` rays per frame the
 * actual samples-per-texel ≈ targetSamples × casts. The label below shows that product.
 *
 * Bounces are NOT in the preset table on purpose: they're an independent quality knob
 * exposed as its own slider (1–4, default 2), so users can crank bounces without
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
 * Demo orchestrator. Owns:
 *  - Tweakpane UI + scene/bake `options` bag
 *  - DOM widgets (FPS, progress bar, GLB file input)
 *  - RAF loop (drives BakeController.tick + renderer.render)
 *  - Bake ETA window
 *  - Lightmap / scene-GLB export buttons
 *  - Atlas viewer overlay
 *
 * THREE side delegated to SceneController. Bake call site delegated to
 * BakeController. View-time render-mode swap delegated to RenderModeRunner.
 *
 * This is the migration-baseline orchestrator (T-D1). T-D2 will mount a Preact
 * shell behind `?legacy=0` that talks to the same controllers; the tweakpane
 * path here will keep working under `?legacy=1` during the transition.
 */
export class CornellBoxExample {
  sceneController: SceneController;
  bakeController: BakeController;
  renderModeRunner: RenderModeRunner;
  pane: Pane;

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

    atlasViewerEnabled: true,
    atlasViewerSize: 256,
    atlasViewerCorner: 'br' as AtlasViewerCorner,
    atlasViewerSRGB: true,
  };

  private perMeshFolder: ReturnType<Pane['addFolder']> | null = null;

  private atlasViewer: AtlasViewer = (() => {
    const v = new AtlasViewer({ size: 256, corner: 'br', sRGB: true });
    v.attachHeader();
    return v;
  })();

  // --- RAF + progress DOM ---
  private looping = false;
  private fpsElement!: HTMLDivElement;
  private progressContainer!: HTMLDivElement;
  private progressBar!: HTMLDivElement;
  private progressText!: HTMLDivElement;
  private glbFileInput!: HTMLInputElement;
  private bakeStartTime = 0;
  private bakeBatchHistory: { samples: number; t: number }[] = [];
  private static readonly BAKE_ETA_WINDOW = 16;

  /** Optional callbacks the orchestrator forwards to the Preact shell. */
  externalHooks: {
    onStaleChange?: () => void;
    onSceneChanged?: () => void;
    onViewportPick?: (id: string | null) => void;
  } = {};

  constructor() {
    const hooks: SceneControllerHooks = {
      onSceneChanged: () => this.onSceneChanged(),
      installDummyLightmaps: (meshes) => this.bakeController.installDummyLightmaps(meshes),
      disposeBake: () => {
        this.bakeController.disposeAllGroups();
        this.bakeController.matTexDispose?.();
        this.bakeController.matTexDispose = null;
      },
      onStaleChange: () => this.externalHooks.onStaleChange?.(),
      onViewportPick: (id) => this.externalHooks.onViewportPick?.(id),
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

    this.pane = new Pane({ title: '🔆 Lightbaker' });

    const viewFolder = this.pane.addFolder({ title: 'View', expanded: true });
    (viewFolder as unknown as { element: HTMLElement }).element.classList.add('tp-view');
    viewFolder
      .addInput(this.options, 'layer', { options: LAYER_OPTIONS, label: 'Layer' })
      .on('change', () => this.renderModeRunner.apply());
    viewFolder
      .addInput(this.options, 'filterMode', { options: FilterOptions, label: 'Filtering' })
      .on('change', () => this.renderModeRunner.apply());
    viewFolder.addInput(this.options, 'showGizmo', { label: 'Show Gizmo' });
    viewFolder.addInput(this.options, 'pause', { label: 'Pause' });

    const bakeFolder = this.pane.addFolder({ title: 'Bake Settings', expanded: false });
    (bakeFolder as unknown as { element: HTMLElement }).element.classList.add('tp-bake');
    bakeFolder
      .addInput(this.options, 'quality', {
        options: Object.fromEntries(Object.keys(QUALITY_PRESETS).map((k) => [k, k])),
        label: 'Preset',
      })
      .on('change', (e) => this.applyQualityPreset(e.value as QualityPresetName));

    bakeFolder
      .addInput(this.options, 'lightMapSize', { min: 128, max: 2048, step: 128, label: 'Atlas Size' })
      .on('change', (e) => {
        this.options.quality = 'Custom';
        this.pane.refresh();
        this.maybeBake(e);
      });
    bakeFolder
      .addInput(this.options, 'texelsPerMeter', { min: 1, max: 50, step: 0.5, label: 'Density (px/m)' })
      .on('change', (e) => {
        this.renderModeRunner.refreshTexelDensityMaterials();
        this.maybeBake(e);
      });
    bakeFolder
      .addInput(this.options, 'casts', { min: 1, max: 16, step: 1, label: 'Casts/Frame' })
      .on('change', (e) => {
        this.options.quality = 'Custom';
        this.pane.refresh();
        this.maybeBake(e);
      });
    bakeFolder
      .addInput(this.options, 'targetSamples', { min: 16, max: 1024, step: 16, label: 'Target Frames' })
      .on('change', (e) => {
        this.options.quality = 'Custom';
        this.pane.refresh();
        this.maybeBake(e);
      });
    bakeFolder
      .addInput(this.options, 'bounces', { min: 1, max: 4, step: 1, label: 'Bounces' })
      .on('change', (e) => {
        this.options.quality = 'Custom';
        this.pane.refresh();
        this.maybeBake(e);
      });
    bakeFolder.addInput(this.options, 'autoBake', { label: 'Auto-bake' });
    bakeFolder
      .addInput(this.options, 'safeMode', { label: 'Safe Mode (TDR)' })
      .on('change', (e) => {
        this.options.quality = 'Custom';
        this.pane.refresh();
        this.maybeBake(e);
      });
    bakeFolder.addButton({ title: 'Bake Now' }).on('click', () => void this.bake());

    const lightFolder = this.pane.addFolder({ title: 'Lighting & GI', expanded: false });
    (lightFolder as unknown as { element: HTMLElement }).element.classList.add('tp-light');

    const directFolder = lightFolder.addFolder({ title: 'Direct Light' });
    directFolder.addInput(this.options, 'directLightEnabled', { label: 'Enabled' }).on('change', this.maybeBake);
    directFolder.addInput(this.options, 'lightColor', { view: 'color', label: 'Color' }).on('change', this.maybeBake);
    directFolder
      .addInput(this.options, 'lightIntensity', { min: 0.0, max: 15.0, step: 0.1, label: 'Bake Power' })
      .on('change', this.maybeBake);
    directFolder
      .addInput(this.options, 'lightSize', { min: 0.1, max: 5, step: 0.1, label: 'Source Size' })
      .on('change', this.maybeBake);
    directFolder
      .addInput(this.options, 'directIntensity', { min: 0.0, max: 4.0, step: 0.05, label: 'View Multiplier' })
      .on('change', () =>
        this.bakeController.refreshAllComposites({ directIntensity: this.options.directIntensity }),
      );

    const giFolder = lightFolder.addFolder({ title: 'Global Illumination' });
    giFolder.addInput(this.options, 'indirectLightEnabled', { label: 'Enabled' }).on('change', this.maybeBake);
    giFolder
      .addInput(this.options, 'giIntensity', { min: 0.0, max: 4.0, step: 0.05, label: 'Bounce Power' })
      .on('change', () => this.bakeController.refreshAllComposites({ giIntensity: this.options.giIntensity }));
    giFolder.addInput(this.options, 'skyColor', { view: 'color', label: 'Sky Color' }).on('change', this.maybeBake);
    giFolder
      .addInput(this.options, 'skyIntensity', { min: 0.0, max: 4.0, step: 0.05, label: 'Sky Intensity' })
      .on('change', this.maybeBake);

    const aoFolder = lightFolder.addFolder({ title: 'Ambient Occlusion' });
    aoFolder
      .addInput(this.options, 'ambientLightEnabled', { label: 'Enabled' })
      .on('change', () =>
        this.bakeController.refreshAllComposites({ aoEnabled: this.options.ambientLightEnabled }),
      );
    aoFolder
      .addInput(this.options, 'ambientDistance', { min: 0.05, max: 2, step: 0.05, label: 'Max Distance' })
      .on('change', () => void this.rebakeAO());
    aoFolder
      .addInput(this.options, 'aoIntensity', { min: 0, max: 3, step: 0.05, label: 'Intensity' })
      .on('change', () => this.bakeController.refreshAllComposites({ aoIntensity: this.options.aoIntensity }));
    aoFolder
      .addInput(this.options, 'aoExponent', { min: 0.5, max: 4, step: 0.1, label: 'Exponent' })
      .on('change', () => this.bakeController.refreshAllComposites({ aoExponent: this.options.aoExponent }));
    aoFolder
      .addInput(this.options, 'aoSamples', { min: 0, max: 32, step: 1, label: 'Samples' })
      .on('change', () => void this.rebakeAO());

    const post = this.pane.addFolder({ title: 'Refinement', expanded: false });
    (post as unknown as { element: HTMLElement }).element.classList.add('tp-post');
    post.addInput(this.options, 'autoApplyRefinement', { label: 'Auto-apply' });
    post.addInput(this.options, 'dilationIterations', { min: 0, max: 8, step: 1, label: 'Dilate Iters' });
    post.addInput(this.options, 'denoiseEnabled', { label: 'Denoise' });
    post.addInput(this.options, 'denoiseSigma', { min: 0.1, max: 8, step: 0.1, label: 'Spatial Sigma' });
    post.addInput(this.options, 'denoiseThreshold', { min: 0.01, max: 1, step: 0.01, label: 'Edge Thresh' });
    post.addInput(this.options, 'denoiseKSigma', { min: 0.5, max: 3, step: 0.1, label: 'Range Sigma' });
    post.addButton({ title: 'Run Refinement' }).on('click', () => void this.applyRefinement());
    post.addButton({ title: 'Revert to Raw' }).on('click', () => this.showUnrefined());

    const secFolder = lightFolder.addFolder({ title: 'Secondary Light (Directional)' });
    secFolder.addInput(this.options, 'secondaryLightEnabled', { label: 'Enabled' }).on('change', this.maybeBake);
    secFolder.addInput(this.options, 'secondaryDirX', { min: -1, max: 1, step: 0.05, label: 'Dir X' }).on('change', this.maybeBake);
    secFolder.addInput(this.options, 'secondaryDirY', { min: -1, max: 1, step: 0.05, label: 'Dir Y' }).on('change', this.maybeBake);
    secFolder.addInput(this.options, 'secondaryDirZ', { min: -1, max: 1, step: 0.05, label: 'Dir Z' }).on('change', this.maybeBake);
    secFolder.addInput(this.options, 'secondaryIntensity', { min: 0, max: 5, step: 0.1, label: 'Intensity' }).on('change', this.maybeBake);
    secFolder.addInput(this.options, 'secondaryColor', { view: 'color', label: 'Color' }).on('change', this.maybeBake);

    const exportFolder = this.pane.addFolder({ title: 'Export', expanded: false });
    (exportFolder as unknown as { element: HTMLElement }).element.classList.add('tp-export');
    exportFolder.addInput(this.options, 'exportFormat', {
      options: { 'PNG (LDR preview)': 'png', 'EXR (HDR linear)': 'exr', 'Raw Float32 (.bin)': 'bin' },
      label: 'Format',
    });
    exportFolder.addButton({ title: 'Export Final Lightmap' }).on('click', () => void this.exportFinal());
    exportFolder.addButton({ title: 'Export Current Layer' }).on('click', () => void this.exportCurrent());

    const viewerFolder = this.pane.addFolder({ title: 'Atlas Viewer', expanded: false });
    (viewerFolder as unknown as { element: HTMLElement }).element.classList.add('tp-viewer');
    viewerFolder.addInput(this.options, 'atlasViewerEnabled', { label: 'Enabled' }).on('change', (e) => {
      this.atlasViewer.visible = e.value as boolean;
    });
    viewerFolder
      .addInput(this.options, 'atlasViewerSize', { min: 128, max: 768, step: 32, label: 'Size' })
      .on('change', (e) => this.atlasViewer.setSize(e.value as number));
    viewerFolder
      .addInput(this.options, 'atlasViewerCorner', {
        options: { 'Top-Left': 'tl', 'Top-Right': 'tr', 'Bot-Left': 'bl', 'Bot-Right': 'br' },
        label: 'Corner',
      })
      .on('change', (e) => this.atlasViewer.setCorner(e.value as AtlasViewerCorner));
    viewerFolder.addInput(this.options, 'atlasViewerSRGB', { label: 'sRGB Encode' }).on('change', (e) => this.atlasViewer.setSRGB(e.value as boolean));

    const sceneFolder = this.pane.addFolder({ title: 'Scene', expanded: false });
    (sceneFolder as unknown as { element: HTMLElement }).element.classList.add('tp-scene');
    sceneFolder
      .addInput(this.options, 'preset', { options: presets, label: 'Complexity' })
      .on('change', () => this.rebuildScene());
    sceneFolder.addButton({ title: 'Import GLB...' }).on('click', () => {
      this.glbFileInput.value = '';
      this.glbFileInput.click();
    });
    sceneFolder.addButton({ title: 'Reset to Cornell' }).on('click', () => this.rebuildScene());
    sceneFolder.addButton({ title: 'Export Scene as GLB' }).on('click', () => void this.exportSceneGLB());

    this.initUI();
    this.rebuildScene();
  }

  // ──────────────────────────────────────────────────────────────────────────
  //  Hook: SceneController fires this after every rebuild / GLB import.
  // ──────────────────────────────────────────────────────────────────────────
  private onSceneChanged(): void {
    // Prune stale perMesh entries.
    const liveUUIDs = new Set(this.sceneController.meshes.map((m) => m.uuid));
    for (const k of Object.keys(this.options.perMesh)) {
      if (!liveUUIDs.has(k)) delete this.options.perMesh[k];
    }
    this.buildPerMeshUI();
    this.externalHooks.onSceneChanged?.();
  }

  private buildPerMeshUI(): void {
    this.perMeshFolder?.dispose();
    const folder = this.pane.addFolder({ title: 'Per-Mesh', expanded: false });
    this.perMeshFolder = folder;

    const meshes = this.sceneController.meshes;
    for (let i = 0; i < meshes.length; i++) {
      const mesh = meshes[i]!;
      const uuid = mesh.uuid;
      if (!this.options.perMesh[uuid]) {
        this.options.perMesh[uuid] = { scaleInLightmap: 1.0, exclude: false };
      }
      const entry = this.options.perMesh[uuid]!;
      const label = mesh.name || `Mesh ${i + 1} (${mesh.geometry.type.replace('Geometry', '')})`;

      const meshFolder = folder.addFolder({ title: label, expanded: false });
      meshFolder.addInput(entry, 'exclude', { label: 'Exclude' }).on('change', this.maybeBake);
      meshFolder
        .addInput(entry, 'scaleInLightmap', { label: 'Density ×', min: 0.25, max: 4.0, step: 0.25 })
        .on('change', (e) => {
          this.renderModeRunner.refreshTexelDensityMaterials();
          this.maybeBake(e);
        });
    }
  }

  private initUI(): void {
    this.fpsElement = document.createElement('div');
    this.fpsElement.style.cssText =
      'position:absolute;top:10px;left:10px;color:#0f0;font-family:monospace;font-size:12px;line-height:1.4;pointer-events:none;z-index:100;padding:8px;background-color:rgba(0,0,0,0.5);border-radius:4px;';
    document.body.appendChild(this.fpsElement);

    this.progressContainer = document.createElement('div');
    this.progressContainer.style.cssText =
      'position:absolute;bottom:20px;left:20px;width:300px;background-color:rgba(0,0,0,0.7);padding:12px;border-radius:4px;font-family:monospace;font-size:11px;color:#fff;display:none;z-index:100;border:1px solid #444;';
    document.body.appendChild(this.progressContainer);

    const barBg = document.createElement('div');
    barBg.style.cssText = 'width:100%;height:4px;background-color:#222;margin-top:8px;border-radius:2px;overflow:hidden;';
    this.progressContainer.appendChild(barBg);

    this.progressBar = document.createElement('div');
    this.progressBar.className = 'progress-pulse';
    this.progressBar.style.cssText = 'width:0%;height:100%;background-color:#0f0;';
    barBg.appendChild(this.progressBar);

    this.progressText = document.createElement('div');
    this.progressText.style.cssText = 'margin-top:8px;white-space:pre;';
    this.progressContainer.appendChild(this.progressText);

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
    await this.sceneController.importGLB(file);
    // perMesh state from prior scene is meaningless against new uuids.
    this.options.perMesh = {};
    this.buildPerMeshUI();
    if (this.options.autoBake) await this.bake();
    this.startLoop();
  }

  // ──────────────────────────────────────────────────────────────────────────
  //  Bake orchestration.
  // ──────────────────────────────────────────────────────────────────────────
  private async bake(): Promise<void> {
    if (!this.sceneController.meshes.length) return;

    this.progressContainer.style.display = 'block';
    this.bakeStartTime = performance.now();
    this.bakeBatchHistory = [];

    this.sceneController.syncVisualLight(this.options.lightColor, this.options.lightIntensity);

    await this.bakeController.runBake(
      this.sceneController.meshes,
      this.sceneController.lightDummy.position,
      this.options,
    );

    this.options.refinementStatus = 'idle';
    this.options.samples = this.options.targetSamples;
    this.options.spp = this.options.targetSamples * this.options.casts;
    this.options.etaSec = 0;
    this.options.pause = false;
    this.progressBar.style.width = '100%';
    this.pane.refresh();

    console.info('[baker:debug] bake() returned, calling applyRenderMode', {
      groups: this.bakeController.bakeGroups.length,
      result: !!this.bakeController.bakeResult,
      meshes: this.sceneController.meshes.length,
      firstGroupComposite: this.bakeController.bakeGroups[0]?.composite.texture.uuid,
    });
    this.renderModeRunner.apply();
    this.bakeController.diag.snap('after applyRenderMode (lightmaps mounted)');
  }

  /** Fired by BakeController on each library bake frame. Updates progress DOM + options mirrors. */
  private onBakeFrame(info: BakeFrameInfo): void {
    const totalSamples = info.targetSamples;
    const minSamples = Math.min(info.bounceSamples, info.aoSamples);
    const overall =
      info.totalGroups > 0
        ? (info.groupIndex + minSamples / Math.max(1, totalSamples)) / info.totalGroups
        : 0;
    this.progressBar.style.width = `${Math.min(100, overall * 100)}%`;
    const elapsed = (performance.now() - this.bakeStartTime) / 1000;
    const spp = minSamples * this.options.casts;
    this.options.samples = minSamples;
    this.options.spp = spp;
    let atlasLine = '';
    if (info.totalGroups > 1) atlasLine = `\nAtlas ${info.groupIndex + 1}/${info.totalGroups}`;
    this.progressText.innerText =
      `Baking: ${minSamples}/${totalSamples} frames (${spp} spp)\nElapsed: ${elapsed.toFixed(1)}s` +
      atlasLine;
  }

  private applyQualityPreset(name: QualityPresetName): void {
    const p = QUALITY_PRESETS[name];
    if (!p) return; // Custom = no-op
    this.options.lightMapSize = p.lightMapSize;
    this.options.casts = p.casts;
    this.options.targetSamples = p.targetSamples;
    this.pane.refresh();
    void this.bake();
  }

  private async applyRefinement(): Promise<void> {
    if (!this.bakeController.bakeGroups.length) return;
    this.options.refinementStatus = 'running';
    this.pane.refresh();

    await this.bakeController.runRefinement(this.options, this.options.lightMapSize, (i, progress) => {
      const overall = (i + progress) / this.bakeController.bakeGroups.length;
      this.progressBar.style.width = `${Math.min(100, overall * 100)}%`;
      this.progressText.innerText =
        `Refinement: atlas ${i + 1}/${this.bakeController.bakeGroups.length} ` +
        `(${Math.round(progress * 100)}%)\nDilation & Bilateral Denoise...`;
    });

    this.options.refinementStatus =
      this.options.dilationIterations > 0 || this.options.denoiseEnabled ? 'applied' : 'skipped';
    this.pane.refresh();
    this.renderModeRunner.apply();

    this.progressText.innerText = `Baking & Refinement complete!\nReady.`;
    setTimeout(() => {
      this.progressContainer.style.display = 'none';
    }, 3000);
  }

  private showUnrefined(): void {
    this.bakeController.clearRefinement();
    this.options.refinementStatus = 'idle';
    this.pane.refresh();
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
  private async exportFinal(): Promise<void> {
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

  private async exportCurrent(): Promise<void> {
    const groups = this.bakeController.bakeGroups;
    const layer = LAYERS.find((l) => l.id === this.options.layer) ?? LAYERS[0]!;
    if (!groups.length) {
      console.warn('[baker] export: no bake to export — bake first');
      return;
    }
    let exported = 0;
    for (let i = 0; i < groups.length; i++) {
      const g = groups[i]!;
      const tex = layer.getLightMap({ group: g });
      if (!tex) continue;
      const suffix = groups.length > 1 ? `_atlas${i}` : '';
      await this.runExport(tex, `lightmap_${layer.id}_${this.options.lightMapSize}${suffix}`);
      exported++;
    }
    if (!exported) console.warn(`[baker] export: layer "${layer.id}" has no exportable texture`);
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

  private async exportSceneGLB(): Promise<void> {
    if (!this.sceneController.meshes.length) {
      console.warn('[baker] no meshes to export');
      return;
    }
    if (!this.bakeController.bakeGroups.length) {
      console.warn('[baker] no baked lightmap available — bake first');
      return;
    }

    // Ensure Combined layer mounted so export sees the most-refined output.
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

    let lastTime = performance.now();
    let frames = 0;
    let fps = 0;

    const tick = (): void => {
      requestAnimationFrame(tick);

      this.sceneController.syncGizmo(this.options.showGizmo);

      const now = performance.now();
      frames++;
      if (now >= lastTime + 1000) {
        fps = Math.round((frames * 1000) / (now - lastTime));

        let vram = 0;
        let triangles = 0;

        const textures = this.sceneController.renderer.info.memory.textures;
        for (const g of this.bakeController.bakeGroups) {
          const res = this.options.lightMapSize;
          vram += res * res * 16 * 2; // G-buffers: Pos+Normal RGBA32F
          vram += res * res * 8; // Composite RGBA16F
          vram += res * res * 16 * 3; // Lightmapper MRT
          if (g.refinement) vram += res * res * 8;
        }

        for (const m of this.sceneController.meshes) {
          const geom = m.geometry;
          if (geom.index) triangles += geom.index.count / 3;
          else {
            const pos = geom.attributes.position;
            if (pos) triangles += pos.count / 3;
          }
        }

        const vramMB = (vram / (1024 * 1024)).toFixed(1);
        const triK = (triangles / 1000).toFixed(1);

        let statsText = `FPS: ${fps}\nVRAM: ${vramMB} MB (${textures} tex)\nTRIS: ${triK}k\n`;
        if (this.bakeController.bakeGroups.length && !this.options.pause) {
          const rps =
            (this.bakeController.bakeGroups.length *
              this.options.lightMapSize *
              this.options.lightMapSize *
              this.options.casts *
              fps) /
            1000000;
          statsText += `RAYS: ${rps.toFixed(1)}M/s`;
        } else {
          statsText += `RAYS: 0.0M/s`;
        }

        this.fpsElement.innerText = statsText;
        frames = 0;
        lastTime = now;
      }

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
            this.progressText.innerText = `Baking complete! ${elapsed.toFixed(1)}s\nRunning post-process...`;
            console.info('[baker:debug] post-bake done', {
              groups: this.bakeController.bakeGroups.length,
              firstCompositeUuid: this.bakeController.bakeGroups[0]?.composite.texture.uuid,
            });
            this.pane.refresh();
            if (this.options.autoApplyRefinement) void this.applyRefinement();
          } else {
            const totalSamples = this.options.targetSamples;
            const progress = totalSamples > 0 ? result.minSamples / totalSamples : 0;
            this.progressBar.style.width = `${Math.min(100, progress * 100)}%`;

            const elapsed = (performance.now() - this.bakeStartTime) / 1000;

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

            let atlasLine: string;
            if (this.bakeController.bakeGroups.length === 1) {
              atlasLine = '';
            } else if (this.bakeController.bakeGroups.length <= 6) {
              atlasLine =
                '\nAtlases: [' +
                result.perAtlasSamples
                  .map((s) => (s >= totalSamples ? `${totalSamples}✓` : String(s)))
                  .join(', ') +
                ']';
            } else {
              const doneCount = result.perAtlasSamples.filter((s) => s >= totalSamples).length;
              atlasLine = `\nAtlases: ${doneCount}/${this.bakeController.bakeGroups.length} done`;
            }

            this.progressText.innerText =
              `Baking: ${result.minSamples}/${totalSamples} frames (${spp} spp)\n` +
              `Elapsed: ${elapsed.toFixed(1)}s | ETA: ${this.options.etaSec}s` +
              atlasLine;
          }
        }
      }

      this.sceneController.controls.update();
      if (this.bakeController.firstPostBakeRender) {
        this.bakeController.firstPostBakeRender = false;
        this.bakeController.diag.snap('about to do FIRST post-bake scene render');
        this.bakeController.diag.measure('FIRST post-bake renderer.render', () =>
          this.sceneController.renderer.render(this.sceneController.scene, this.sceneController.camera),
        );
        this.bakeController.diag.snap('after FIRST post-bake scene render');
      } else {
        this.sceneController.renderer.render(this.sceneController.scene, this.sceneController.camera);
      }

      // Atlas viewer overlay.
      this.atlasViewer.visible = this.options.atlasViewerEnabled;
      if (this.atlasViewer.visible) {
        const layer = LAYERS.find((l) => l.id === this.options.layer) ?? LAYERS[0]!;
        const groups = this.bakeController.bakeGroups;
        if (groups.length === 0) {
          this.atlasViewer.setTexture(null);
        } else {
          const texs: Texture[] = [];
          for (const g of groups) {
            texs.push(layer.getLightMap({ group: g }) ?? g.composite.texture);
          }
          this.atlasViewer.setTextures(texs);
        }
        const suffix = this.bakeController.bakeGroups.length > 1 ? ` (${this.bakeController.bakeGroups.length} atlases)` : '';
        this.atlasViewer.setLayerLabel(layer.label + suffix);
      }
      this.atlasViewer.render(this.sceneController.renderer);
    };
    tick();
  }

  /** Bake gate for slider/input change events. Skips mid-drag + auto-bake disabled. */
  private maybeBake = (e?: { last?: boolean }): void => {
    if (e?.last === false) return;
    if (!this.options.autoBake) return;
    void this.bake();
  };

  /** Expose for legacy callers that reach into mesh list. Will be removed in T-D2. */
  get meshes(): ReadonlyArray<SceneObj> {
    return this.sceneController.meshes;
  }

  /** Expose for legacy callers. Will be removed in T-D2. */
  get scene() {
    return this.sceneController.scene;
  }

  // ──────────────────────────────────────────────────────────────────────────
  //  Public test API. Surfaced on `window.__baker` only when `?test=1` is set
  //  (see main.tsx). Used by Playwright e2e specs in `tests/e2e/`.
  // ──────────────────────────────────────────────────────────────────────────

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

  getSceneTree(): ReturnType<typeof this.sceneController.buildSceneTree> {
    return this.sceneController.buildSceneTree();
  }

  pickAt(clientX: number, clientY: number): string | null {
    return this.sceneController.pickAt(clientX, clientY);
  }

  setSelection(id: string | null): void {
    this.sceneController.attachGizmoTo(this.sceneController.lookupObject(id));
  }

  setGizmoMode(mode: 'translate' | 'rotate' | 'scale'): void {
    this.sceneController.setGizmoMode(mode);
  }

  setNodeVisible(id: string, visible: boolean): void {
    this.sceneController.setVisible(id, visible);
  }

  getBakeGroupCount(): number {
    return this.bakeController.bakeGroups.length;
  }

  /** Read a single pixel from the current backbuffer. Image-space coords (y down).
   *  Returns [r,g,b,a] each in [0,255]. Returns null if the WebGL context is lost.
   *  Forces a fresh render in the same call so `preserveDrawingBuffer=false` doesn't
   *  hand us a cleared buffer. */
  sampleCanvasPixel(x: number, y: number): [number, number, number, number] | null {
    const renderer = this.sceneController.renderer;
    const gl = renderer.getContext();
    if (gl.isContextLost()) return null;
    // Synchronous render so the back buffer is guaranteed populated.
    renderer.setRenderTarget(null);
    renderer.render(this.sceneController.scene, this.sceneController.camera);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    const buf = new Uint8Array(4);
    const h = gl.drawingBufferHeight;
    gl.readPixels(x, h - y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, buf);
    return [buf[0]!, buf[1]!, buf[2]!, buf[3]!];
  }

  /** Diagnostic for tests: canvas + drawing-buffer dimensions and GL error code. */
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
}
