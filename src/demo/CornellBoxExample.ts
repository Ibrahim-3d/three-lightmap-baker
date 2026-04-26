import {
  BoxGeometry,
  Color,
  DoubleSide,
  LinearFilter,
  LinearMipMapLinearFilter,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  NearestFilter,
  Object3D,
  PerspectiveCamera,
  PlaneGeometry,
  PointLight,
  Scene,
  SphereGeometry,
  SRGBColorSpace,
  Texture,
  TorusKnotGeometry,
  Vector3,
  WebGLMultipleRenderTargets,
  WebGLRenderer,
} from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { Pane } from 'tweakpane';
import {
  generateAtlas,
  renderAtlas,
  generateLightmapper,
  Lightmapper,
  RaycastOptions,
  runRefinement,
  RefinementResult,
  runComposite,
  CompositeResult,
  mergeGeometry,
  extractPerTriangleMaterials,
  buildMaterialTextures,
  exportLightmap,
  ExportFormat,
  AtlasViewer,
  AtlasViewerCorner,
  PackedLight,
  TexelDensityMaterial,
} from '../lib';
import type { Material } from 'three';

/** Diagnostic logs — flip to true locally when debugging. CLAUDE.md convention. */
const DEBUG = false;

// Classic Cornell box dims: 10×10×10 unit room centered at (0, 5, 0)
const ROOM = 10;
const HALF = ROOM / 2;

/**
 * Layer registry — view-time mapping from a layer ID to the texture(s) it shows.
 *
 * Adding a new layer = one entry. The if/else chain in `applyRenderMode` is gone.
 * Phase A.2/A.3 will register additional entries (Direct, Indirect, Combined Dilated, …)
 * once MRT lands. For now this preserves the Session-6 behaviour through the registry.
 */
type LayerContext = {
  composite: Texture | null; // combined view (direct + indirect*gi) * ao — Phase A.3
  direct: Texture | null; // MRT[0]
  indirect: Texture | null; // MRT[1]
  ao: Texture | null; // MRT[2]
  raw: Texture | null; // alias for composite, back-compat
  refinement: Texture | null; // refinement.texture (denoised final)
  refinementDilated: Texture | null; // dilation-only stage — Refinement doesn't expose separately yet
  positions: Texture | null;
  normals: Texture | null;
};

type Layer = {
  id: string;
  label: string;
  /** The lightmap texture to mount, or null for "no lightmap". */
  getLightMap: (ctx: LayerContext) => Texture | null;
  /** Whether to keep the mesh's original colour map alongside (true for Combined-style views). */
  showAlbedo: boolean;
  /** UI grouping hint. */
  group: 'output' | 'debug';
};

/**
 * Registry. Order = display order in the dropdown.
 * TODO Phase A.3 follow-up: expose dilated-only stage from PostProcess for a "Combined (Dilated)" layer.
 */
const LAYERS: Layer[] = [
  {
    id: 'combined',
    label: 'Combined',
    group: 'output',
    showAlbedo: true,
    getLightMap: (c) => c.refinement ?? c.composite,
  },
  {
    id: 'combinedPost',
    label: 'Combined (Refined)',
    group: 'output',
    showAlbedo: true,
    getLightMap: (c) => c.refinement ?? c.composite,
  },
  {
    id: 'combinedRaw',
    label: 'Combined (Raw)',
    group: 'output',
    showAlbedo: true,
    getLightMap: (c) => c.composite,
  },
  {
    id: 'direct',
    label: 'Direct',
    group: 'output',
    showAlbedo: false,
    getLightMap: (c) => c.direct,
  },
  {
    id: 'indirect',
    label: 'Indirect (GI)',
    group: 'output',
    showAlbedo: false,
    getLightMap: (c) => c.indirect,
  },
  {
    id: 'ao',
    label: 'Ambient Occlusion',
    group: 'output',
    showAlbedo: false,
    getLightMap: (c) => c.ao,
  },
  {
    id: 'lightmapRaw',
    label: 'Lightmap (Raw)',
    group: 'debug',
    showAlbedo: false,
    getLightMap: (c) => c.composite,
  },
  { id: 'albedo', label: 'Albedo', group: 'debug', showAlbedo: true, getLightMap: () => null },
  {
    id: 'positions',
    label: 'World Position',
    group: 'debug',
    showAlbedo: false,
    getLightMap: (c) => c.positions,
  },
  {
    id: 'normals',
    label: 'World Normal',
    group: 'debug',
    showAlbedo: false,
    getLightMap: (c) => c.normals,
  },
  {
    // Material-swap layer: replaces mesh material with TexelDensityMaterial.
    // applyRenderMode special-cases this id and restores originals on switch-away.
    id: 'texelDensity',
    label: 'Texel Density',
    group: 'debug',
    showAlbedo: false,
    getLightMap: () => null,
  },
];

const LAYER_OPTIONS = Object.fromEntries(LAYERS.map((l) => [l.label, l.id]));

const Filter = {
  Linear: 'linear',
  Nearest: 'nearest',
};

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
 * relinquishing their preferred resolution/casts/sample budget. The runtime cost scales
 * linearly with bounces (path-traced loop, not exponential).
 */
const QUALITY_PRESETS = {
  Custom: null,
  Draft: { lightMapSize: 256, casts: 4, targetSamples: 32 /* ≈ 128 spp */ },
  Preview: { lightMapSize: 512, casts: 5, targetSamples: 96 /* ≈ 480 spp */ },
  Production: { lightMapSize: 1024, casts: 6, targetSamples: 256 /* ≈ 1536 spp */ },
  Final: { lightMapSize: 2048, casts: 8, targetSamples: 512 /* ≈ 4096 spp */ },
} as const;
type QualityPresetName = keyof typeof QUALITY_PRESETS;

type SceneObj = Mesh & { material: MeshStandardMaterial & { _originalMap?: Texture | null } };

export class CornellBoxExample {
  renderer: WebGLRenderer;
  camera: PerspectiveCamera;
  scene: Scene;
  controls: OrbitControls;

  /** Visual-only point light. The baker uses lightDummy.position as its sole light source. */
  visualLight: PointLight;
  lightDummy: Object3D;
  lightTransformController: TransformControls;
  lightMarker: Mesh;

  cornellRoot: Object3D | null = null;
  meshes: SceneObj[] = [];

  // Initialized in startBake() — every read site is gated on bake having run.
  positionTexture!: Texture;
  normalTexture!: Texture;
  lightmapTarget!: WebGLMultipleRenderTargets;
  // Disposers for the per-bake GPU resources that aren't owned by the lightmapper/composite.
  private atlasDispose: (() => void) | null = null;
  private matTexDispose: (() => void) | null = null;
  lightmapper: Lightmapper | null = null;

  /** View-time composite of MRT direct+indirect+AO. Eagerly allocated at bake start. */
  private composite: CompositeResult | null = null;
  /** Result of the most recent refinement pass (dilation + denoise). Null until run. */
  private refinement: RefinementResult | null = null;

  /** Lazy-allocated TexelDensityMaterial for the "Texel Density" debug layer. */
  private texelDensityMat: TexelDensityMaterial | null = null;
  /** Caches each mesh's original material so we can restore it when leaving a swap layer. */
  private originalMaterials = new WeakMap<Mesh, Material>();

  pane: Pane;

  options = {
    preset: 'advanced',
    // Active layer ID (matches LAYERS[].id). 'combined' is the lit/final view.
    layer: 'combined',
    quality: 'Custom' as QualityPresetName,
    lightMapSize: 1024,
    casts: 5,
    // Frames to accumulate before pausing. Effective samples-per-texel = targetSamples × casts.
    targetSamples: 256,
    bounces: 2,
    filterMode: 'linear',
    directLightEnabled: true,
    indirectLightEnabled: true,
    ambientLightEnabled: true,
    ambientDistance: 0.5,
    aoIntensity: 1.0,
    aoExponent: 1.5,
    /** Texel-density debug viz target (texels per world meter). Layer = "Texel Density". */
    texelsPerMeter: 10,
    lightSize: 2.9,
    // Linear-space HDR intensity multiplier for the bake's point light.
    lightIntensity: 2.0,
    // Color picker writes "#rrggbb" sRGB strings; converted to linear Color before upload.
    lightColor: '#ffffff',
    // Post-bake intensity multipliers. 0.5 matches the old version's default 50/50 mix.
    directIntensity: 1.4,
    giIntensity: 2.7,
    // Sky / ambient fill — a constant added to indirect on hemisphere-miss. In a closed
    // Cornell most rays hit, so this mainly fills the rare miss + tints any leak. Default
    // off; users wanting a softer "neutral fill" look can dial it up.
    skyColor: '#ffffff',
    skyIntensity: 0.0,
    pause: false,
    showGizmo: true,

    // --- Refinement (Task 5) ---
    autoApplyRefinement: true, // run dilation+denoise automatically when bake hits target
    dilationIterations: 4, // 4px halo per spec
    denoiseEnabled: true,
    denoiseSigma: 2.5, // spatial blur sigma (in texels)
    denoiseThreshold: 0.18, // range sigma — higher = more blurring across edges
    denoiseKSigma: 1.0, // kernel radius multiplier

    // --- Secondary directional light (Task 7C) ---
    secondaryLightEnabled: false,
    secondaryDirX: -0.5,
    secondaryDirY: -1.0,
    secondaryDirZ: -0.5,
    secondaryIntensity: 0.8,
    secondaryColor: '#ffffcc',

    // --- Readouts (rendered as monitors) ---
    samples: 0, // current frame count (UI mirror of lightmapper state)
    spp: 0, // samples-per-texel = samples × casts
    etaSec: 0, // estimated seconds remaining
    refinementStatus: 'idle', // 'idle' | 'running' | 'applied' | 'skipped'

    // --- Export (Task 06 Phase 1) ---
    exportFormat: 'png' as ExportFormat, // 'png' | 'exr' | 'bin'

    // --- Atlas viewer (2D corner overlay) ---
    atlasViewerEnabled: true,
    atlasViewerSize: 256,
    atlasViewerCorner: 'br' as AtlasViewerCorner, // 'tl' | 'tr' | 'bl' | 'br'
    atlasViewerSRGB: true,
  };

  private atlasViewer: AtlasViewer = (() => {
    const v = new AtlasViewer({ size: 256, corner: 'br', sRGB: true });
    v.attachHeader();
    return v;
  })();

  constructor() {
    this.scene = new Scene();
    this.scene.background = new Color(0x0a0a0a);

    this.camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 5, 18);
    this.camera.lookAt(0, 5, 0);

    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.outputColorSpace = SRGBColorSpace;
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 5, 0);
    this.controls.update();

    // Light dummy — the baker reads .position to fire direct-light rays toward it.
    this.lightDummy = new Object3D();
    this.lightDummy.position.set(0, ROOM - 0.001, 0);
    this.scene.add(this.lightDummy);

    // Visual-only: a small emissive disc + point light so "Standard" mode looks right.
    this.lightMarker = new Mesh(
      new PlaneGeometry(2.5, 2.5),
      new MeshBasicMaterial({ color: 0xffffff, side: DoubleSide }),
    );
    this.lightMarker.rotation.x = Math.PI / 2;
    this.lightDummy.add(this.lightMarker);

    this.visualLight = new PointLight(0xffffff, 80, 0, 2);
    this.lightDummy.add(this.visualLight);

    this.lightTransformController = new TransformControls(this.camera, this.renderer.domElement);
    this.lightTransformController.addEventListener('dragging-changed', (event) => {
      this.controls.enabled = !event.value;
    });
    this.lightTransformController.attach(this.lightDummy);
    this.scene.add(this.lightTransformController);

    this.pane = new Pane({ title: '🔆 Lightbaker' });

    const viewFolder = this.pane.addFolder({ title: 'View', expanded: true });
    (viewFolder as any).element.classList.add('tp-view');
    viewFolder
      .addInput(this.options, 'layer', { options: LAYER_OPTIONS, label: 'Layer' })
      .on('change', () => this.applyRenderMode());
    viewFolder
      .addInput(this.options, 'filterMode', { options: Filter, label: 'Filtering' })
      .on('change', () => this.applyRenderMode());
    viewFolder.addInput(this.options, 'showGizmo', { label: 'Show Gizmo' });
    viewFolder.addInput(this.options, 'pause', { label: 'Pause' });
    // Texel density target — only meaningful when the "Texel Density" layer is active.
    viewFolder
      .addInput(this.options, 'texelsPerMeter', {
        min: 1,
        max: 50,
        step: 0.5,
        label: 'Density Target (px/m)',
      })
      .on('change', () => this.texelDensityMat?.setTexelsPerMeter(this.options.texelsPerMeter));

    const bakeFolder = this.pane.addFolder({ title: 'Bake Settings', expanded: false });
    (bakeFolder as any).element.classList.add('tp-bake');
    bakeFolder
      .addInput(this.options, 'quality', {
        options: Object.fromEntries(Object.keys(QUALITY_PRESETS).map((k) => [k, k])),
        label: 'Preset',
      })
      .on('change', (e) => this.applyQualityPreset(e.value));

    bakeFolder
      .addInput(this.options, 'lightMapSize', {
        min: 128,
        max: 2048,
        step: 128,
        label: 'Resolution',
      })
      .on('change', () => {
        this.options.quality = 'Custom';
        this.pane.refresh();
        this.bake();
      });
    bakeFolder
      .addInput(this.options, 'casts', { min: 1, max: 16, step: 1, label: 'Casts/Frame' })
      .on('change', () => {
        this.options.quality = 'Custom';
        this.pane.refresh();
        this.bake();
      });
    bakeFolder
      .addInput(this.options, 'targetSamples', {
        min: 16,
        max: 1024,
        step: 16,
        label: 'Target Frames',
      })
      .on('change', () => {
        this.options.quality = 'Custom';
        this.pane.refresh();
        this.bake();
      });
    bakeFolder
      .addInput(this.options, 'bounces', { min: 1, max: 4, step: 1, label: 'Bounces' })
      .on('change', () => {
        this.options.quality = 'Custom';
        this.pane.refresh();
        this.bake();
      });
    bakeFolder.addButton({ title: 'Bake Now' }).on('click', () => this.bake());

    const lightFolder = this.pane.addFolder({ title: 'Lighting & GI', expanded: false });
    (lightFolder as any).element.classList.add('tp-light');

    const directFolder = lightFolder.addFolder({ title: 'Direct Light' });
    directFolder
      .addInput(this.options, 'directLightEnabled', { label: 'Enabled' })
      .on('change', () => this.bake());
    directFolder
      .addInput(this.options, 'lightColor', { view: 'color', label: 'Color' })
      .on('change', () => this.bake());
    directFolder
      .addInput(this.options, 'lightIntensity', {
        min: 0.0,
        max: 15.0,
        step: 0.1,
        label: 'Bake Power',
      })
      .on('change', () => this.bake());
    directFolder
      .addInput(this.options, 'lightSize', { min: 0.1, max: 5, step: 0.1, label: 'Source Size' })
      .on('change', () => this.bake());
    directFolder
      .addInput(this.options, 'directIntensity', {
        min: 0.0,
        max: 4.0,
        step: 0.05,
        label: 'View Multiplier',
      })
      .on('change', () =>
        this.composite?.refresh({ directIntensity: this.options.directIntensity }),
      );

    const giFolder = lightFolder.addFolder({ title: 'Global Illumination' });
    giFolder
      .addInput(this.options, 'indirectLightEnabled', { label: 'Enabled' })
      .on('change', () => this.bake());
    giFolder
      .addInput(this.options, 'giIntensity', {
        min: 0.0,
        max: 4.0,
        step: 0.05,
        label: 'Bounce Power',
      })
      .on('change', () => this.composite?.refresh({ giIntensity: this.options.giIntensity }));
    giFolder
      .addInput(this.options, 'skyColor', { view: 'color', label: 'Sky Color' })
      .on('change', () => this.bake());
    giFolder
      .addInput(this.options, 'skyIntensity', {
        min: 0.0,
        max: 4.0,
        step: 0.05,
        label: 'Sky Intensity',
      })
      .on('change', () => this.bake());

    const aoFolder = lightFolder.addFolder({ title: 'Ambient Occlusion' });
    aoFolder
      .addInput(this.options, 'ambientLightEnabled', { label: 'Enabled' })
      .on('change', () => {
        this.composite?.refresh({ aoEnabled: this.options.ambientLightEnabled });
        this.bake();
      });
    aoFolder
      .addInput(this.options, 'ambientDistance', {
        min: 0.05,
        max: 2,
        step: 0.05,
        label: 'Max Distance',
      })
      .on('change', () => this.bake());
    aoFolder
      .addInput(this.options, 'aoIntensity', { min: 0, max: 3, step: 0.05, label: 'Intensity' })
      .on('change', () => this.bake());
    aoFolder
      .addInput(this.options, 'aoExponent', { min: 0.5, max: 4, step: 0.1, label: 'Exponent' })
      .on('change', () => this.bake());

    // --- Refinement folder ---
    const post = this.pane.addFolder({ title: 'Refinement', expanded: false });
    (post as any).element.classList.add('tp-post');
    post.addInput(this.options, 'autoApplyRefinement', { label: 'Auto-apply' });
    post.addInput(this.options, 'dilationIterations', {
      min: 0,
      max: 8,
      step: 1,
      label: 'Dilate Iters',
    });
    post.addInput(this.options, 'denoiseEnabled', { label: 'Denoise' });
    post.addInput(this.options, 'denoiseSigma', {
      min: 0.1,
      max: 8,
      step: 0.1,
      label: 'Spatial Sigma',
    });
    post.addInput(this.options, 'denoiseThreshold', {
      min: 0.01,
      max: 1,
      step: 0.01,
      label: 'Edge Thresh',
    });
    post.addInput(this.options, 'denoiseKSigma', {
      min: 0.5,
      max: 3,
      step: 0.1,
      label: 'Range Sigma',
    });
    post.addButton({ title: 'Run Refinement' }).on('click', () => this.applyRefinement());
    post.addButton({ title: 'Revert to Raw' }).on('click', () => this.showUnrefined());

    // --- Secondary light (Task 7C) ---
    const secFolder = lightFolder.addFolder({ title: 'Secondary Light (Directional)' });
    secFolder
      .addInput(this.options, 'secondaryLightEnabled', { label: 'Enabled' })
      .on('change', () => this.bake());
    secFolder
      .addInput(this.options, 'secondaryDirX', { min: -1, max: 1, step: 0.05, label: 'Dir X' })
      .on('change', () => this.bake());
    secFolder
      .addInput(this.options, 'secondaryDirY', { min: -1, max: 1, step: 0.05, label: 'Dir Y' })
      .on('change', () => this.bake());
    secFolder
      .addInput(this.options, 'secondaryDirZ', { min: -1, max: 1, step: 0.05, label: 'Dir Z' })
      .on('change', () => this.bake());
    secFolder
      .addInput(this.options, 'secondaryIntensity', {
        min: 0,
        max: 5,
        step: 0.1,
        label: 'Intensity',
      })
      .on('change', () => this.bake());
    secFolder
      .addInput(this.options, 'secondaryColor', { view: 'color', label: 'Color' })
      .on('change', () => this.bake());

    // --- Export folder (Task 06 Phase 1) ---
    const exportFolder = this.pane.addFolder({ title: 'Export', expanded: false });
    (exportFolder as any).element.classList.add('tp-export');
    exportFolder.addInput(this.options, 'exportFormat', {
      options: {
        'PNG (LDR preview)': 'png',
        'EXR (HDR linear)': 'exr',
        'Raw Float32 (.bin)': 'bin',
      },
      label: 'Format',
    });
    exportFolder
      .addButton({ title: 'Export Final Lightmap' })
      .on('click', () => this.exportFinal());
    exportFolder
      .addButton({ title: 'Export Current Layer' })
      .on('click', () => this.exportCurrent());

    // --- Atlas Viewer folder ---
    const viewerFolder = this.pane.addFolder({ title: 'Atlas Viewer', expanded: false });
    (viewerFolder as any).element.classList.add('tp-viewer');
    viewerFolder
      .addInput(this.options, 'atlasViewerEnabled', { label: 'Enabled' })
      .on('change', (e) => {
        this.atlasViewer.visible = e.value;
      });
    viewerFolder
      .addInput(this.options, 'atlasViewerSize', { min: 128, max: 768, step: 32, label: 'Size' })
      .on('change', (e) => this.atlasViewer.setSize(e.value));
    viewerFolder
      .addInput(this.options, 'atlasViewerCorner', {
        options: { 'Top-Left': 'tl', 'Top-Right': 'tr', 'Bot-Left': 'bl', 'Bot-Right': 'br' },
        label: 'Corner',
      })
      .on('change', (e) => this.atlasViewer.setCorner(e.value));
    viewerFolder
      .addInput(this.options, 'atlasViewerSRGB', { label: 'sRGB Encode' })
      .on('change', (e) => this.atlasViewer.setSRGB(e.value));

    const sceneFolder = this.pane.addFolder({ title: 'Scene', expanded: false });
    (sceneFolder as any).element.classList.add('tp-scene');
    sceneFolder
      .addInput(this.options, 'preset', { options: presets, label: 'Complexity' })
      .on('change', () => this.rebuildScene());

    this.initUI();
    this.rebuildScene();
  }

  private initUI() {
    this.fpsElement = document.createElement('div');
    this.fpsElement.style.position = 'absolute';
    this.fpsElement.style.top = '10px';
    this.fpsElement.style.left = '10px';
    this.fpsElement.style.color = '#00ff00';
    this.fpsElement.style.fontFamily = 'monospace';
    this.fpsElement.style.fontSize = '12px';
    this.fpsElement.style.pointerEvents = 'none';
    this.fpsElement.style.zIndex = '100';
    document.body.appendChild(this.fpsElement);

    // Progress Widget
    this.progressContainer = document.createElement('div');
    this.progressContainer.style.position = 'absolute';
    this.progressContainer.style.bottom = '20px';
    this.progressContainer.style.left = '20px';
    this.progressContainer.style.width = '300px';
    this.progressContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    this.progressContainer.style.padding = '12px';
    this.progressContainer.style.borderRadius = '4px';
    this.progressContainer.style.fontFamily = 'monospace';
    this.progressContainer.style.fontSize = '11px';
    this.progressContainer.style.color = '#fff';
    this.progressContainer.style.display = 'none';
    this.progressContainer.style.zIndex = '100';
    this.progressContainer.style.border = '1px solid #444';
    document.body.appendChild(this.progressContainer);

    const barBg = document.createElement('div');
    barBg.style.width = '100%';
    barBg.style.height = '4px';
    barBg.style.backgroundColor = '#222';
    barBg.style.marginTop = '8px';
    barBg.style.borderRadius = '2px';
    barBg.style.overflow = 'hidden';
    this.progressContainer.appendChild(barBg);

    this.progressBar = document.createElement('div');
    this.progressBar.className = 'progress-pulse';
    this.progressBar.style.width = '0%';
    this.progressBar.style.height = '100%';
    this.progressBar.style.backgroundColor = '#00ff00';
    barBg.appendChild(this.progressBar);

    this.progressText = document.createElement('div');
    this.progressText.style.marginTop = '8px';
    this.progressText.style.whiteSpace = 'pre';
    this.progressContainer.appendChild(this.progressText);
  }

  updateSize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(window.devicePixelRatio);
  }

  /** Wraps a MeshStandardMaterial so the upstream render-mode logic finds `_originalMap`. */
  private mat(color: number, roughness = 0.95, metalness = 0.0): MeshStandardMaterial {
    // FrontSide on closed-volume meshes means orbiting outside the box back-face-culls
    // the walls instead of showing them lit from behind (the inside lightmap leaks
    // through DoubleSide because both faces share UV2). Pass `doubleSide=true` only for
    // intentional thin geometry (none in this scene).
    const m = new MeshStandardMaterial({ color, roughness, metalness });
    (m as any)._originalMap = null;
    return m;
  }

  private addMesh(mesh: Mesh): SceneObj {
    const m = mesh as SceneObj;
    this.meshes.push(m);
    this.cornellRoot!.add(m);
    return m;
  }

  private buildWalls() {
    // Thick (BoxGeometry) walls — diagnostic + correctness improvement over thin
    // double-sided PlaneGeometry. Each wall now has 12 unique triangles with unique
    // UV2 coordinates, so the inner face and outer face never share a lightmap texel
    // and the BVH has a real volume to hit (no grazing-ray precision misses).
    // The inner surface of each slab sits exactly on the original room bounds.
    const T = 0.2; // wall thickness
    const white = this.mat(0xf0f0f0);
    const red = this.mat(0xd62728);
    const green = this.mat(0x2ca02c);

    // Floor: top surface at y=0, slab extends down to y=-T
    const floor = new Mesh(new BoxGeometry(ROOM, T, ROOM), white);
    floor.position.set(0, -T / 2, 0);
    this.addMesh(floor);

    // Ceiling: bottom surface at y=ROOM, slab extends up to y=ROOM+T
    const ceil = new Mesh(new BoxGeometry(ROOM, T, ROOM), white.clone());
    (ceil.material as any)._originalMap = null;
    ceil.position.set(0, ROOM + T / 2, 0);
    this.addMesh(ceil);

    // Back wall: front surface at z=-HALF, slab extends back to z=-HALF-T
    const back = new Mesh(new BoxGeometry(ROOM, ROOM, T), white.clone());
    (back.material as any)._originalMap = null;
    back.position.set(0, HALF, -HALF - T / 2);
    this.addMesh(back);

    // Left wall (red): inside surface at x=-HALF
    const left = new Mesh(new BoxGeometry(T, ROOM, ROOM), red);
    left.position.set(-HALF - T / 2, HALF, 0);
    this.addMesh(left);

    // Right wall (green): inside surface at x=+HALF
    const right = new Mesh(new BoxGeometry(T, ROOM, ROOM), green);
    right.position.set(HALF + T / 2, HALF, 0);
    this.addMesh(right);
  }

  private buildClassicBlocks() {
    const white = this.mat(0xe8e8e8);

    // Tall block: ~3×6×3, back-left, rotated ~17° CCW
    const tall = new Mesh(new BoxGeometry(3, 6, 3), white);
    tall.position.set(-1.8, 3, -1.5);
    tall.rotation.y = 0.29;
    this.addMesh(tall);

    // Short block: ~3×3×3, front-right, rotated ~-17°
    const short = new Mesh(new BoxGeometry(3, 3, 3), white.clone());
    (short.material as any)._originalMap = null;
    short.position.set(1.8, 1.5, 1.5);
    short.rotation.y = -0.29;
    this.addMesh(short);
  }

  private buildAdvancedExtras() {
    // Diffuse pearl sphere — sits in front of the short block.
    // NOTE: keep metalness ~0; baked lightmaps only carry diffuse irradiance.
    const sphere = new Mesh(new SphereGeometry(1.0, 48, 32), this.mat(0xf5f5f5, 0.4, 0.0));
    sphere.position.set(2.4, 1.0, 3.0);
    this.addMesh(sphere);

    // Torus knot on the floor between the two blocks — fully lit, shows curvature AO well.
    const knot = new Mesh(
      new TorusKnotGeometry(0.55, 0.18, 160, 24),
      this.mat(0xffd166, 0.55, 0.0),
    );
    knot.position.set(0.0, 1.0, 2.8);
    knot.rotation.x = Math.PI / 2;
    this.addMesh(knot);

    // Accent block — sits on the floor near the front-left, standalone.
    // Warm terracotta: a less-saturated colour than the previous bright blue, which used
    // to dominate the bounce term (linear blue=1.0 channel) and tint the whole front-left
    // of the room. Terracotta complements the red wall instead of fighting it.
    const accent = new Mesh(new BoxGeometry(1.2, 1.2, 1.2), this.mat(0xc77a3a, 0.8, 0.0));
    accent.position.set(-3.5, 0.6, 2.8);
    accent.rotation.y = 0.45;
    this.addMesh(accent);
  }

  private async rebuildScene() {
    if (this.cornellRoot) this.scene.remove(this.cornellRoot);
    this.cornellRoot = new Object3D();
    this.scene.add(this.cornellRoot);
    this.meshes = [];
    this.lightmapper = null;

    this.buildWalls();
    this.buildClassicBlocks();
    if (this.options.preset === 'advanced') this.buildAdvancedExtras();

    await this.bake();
    this.startLoop();
  }

  private async bake() {
    if (!this.meshes.length) return;

    // Show progress widget and record start time
    this.progressContainer.style.display = 'block';
    this.bakeStartTime = performance.now();
    this.bakeBatchHistory = [];

    const res = this.options.lightMapSize;

    // CRITICAL: renderAtlas reads each mesh's modelMatrix and mergeGeometry calls
    // applyMatrix4(matrixWorld). Both require an explicit world-matrix flush since
    // we bake before the render loop has had a chance to do it implicitly.
    this.scene.updateMatrixWorld(true);

    // 1. Unwrap UV2 atlas
    await generateAtlas(this.meshes);

    // 2. Render position + normal G-buffers in lightmap UV space
    // Dispose previous atlas RTs before allocating new ones (re-bake path).
    this.atlasDispose?.();
    const atlas = renderAtlas(this.renderer, this.meshes, res, true);
    this.atlasDispose = atlas.dispose;
    this.positionTexture = atlas.positionTexture;
    this.normalTexture = atlas.normalTexture;

    // 3. Build BVH over merged scene geometry.
    // CRITICAL: new MeshBVH(merged) mutates merged.index in place to build a
    // spatially-sorted tree. The shader's faceIndices.w returns indices into
    // this REORDERED buffer — so the per-triangle material table MUST be
    // built AFTER BVH construction (and walks merged.index in its post-sort
    // order). Vertices are not reordered, only the index buffer, so the
    // per-vertex `meshIndex` tag added by mergeGeometry survives intact.
    const merged = mergeGeometry(this.meshes);
    const bvh = new MeshBVH(merged);

    // 3b. Build per-triangle material lookup tables — keyed by post-BVH triangle index.
    this.matTexDispose?.();
    const perTri = extractPerTriangleMaterials(merged, this.meshes);
    const matTex = buildMaterialTextures(perTri);
    this.matTexDispose = (): void => {
      matTex.albedoTexture.dispose();
      matTex.emissiveTexture.dispose();
    };

    // Sanity sample the first 4 triangles. With BVH spatial sort the first
    // triangle is whichever happened to land first in tree order (NOT
    // necessarily the floor). Log mesh tag + albedo so a wrong-mesh mapping
    // is immediately visible during a bake.
    const indexArr = merged.index!.array as Uint16Array | Uint32Array;
    const meshIdxAttr = merged.attributes.meshIndex;
    if (!meshIdxAttr) throw new Error('[baker] merged geometry missing meshIndex attribute');
    const meshIdxArr = meshIdxAttr.array as Float32Array;
    const sample = (tri: number): string => {
      // SAFETY: tri ∈ [0, totalTriangles); indexArr length == totalTriangles*3.
      const v0 = indexArr[tri * 3] ?? 0;
      const meshIdx = (meshIdxArr[v0] ?? 0) | 0;
      const o = tri * 3;
      const r = perTri.albedo[o] ?? 0;
      const g = perTri.albedo[o + 1] ?? 0;
      const b = perTri.albedo[o + 2] ?? 0;
      return `tri#${tri} mesh#${meshIdx} albedo=(${r.toFixed(3)}, ${g.toFixed(3)}, ${b.toFixed(3)})`;
    };
    if (DEBUG)
      console.info(
        `[baker] material textures built: ${perTri.totalTriangles} triangles, ${matTex.side}x${matTex.side} texture\n` +
          `[baker] post-BVH samples: ${sample(0)}; ${sample(1)}; ${sample(Math.floor(perTri.totalTriangles / 2))}; ${sample(perTri.totalTriangles - 1)}\n` +
          `[baker] per-mesh triangle counts (input order): [${perTri.perMeshTriangleCounts.join(', ')}]`,
      );

    // Linear-space Color from the sRGB hex picker.
    const lightColorLinear = new Color(this.options.lightColor).convertSRGBToLinear();
    const skyColorLinear = new Color(this.options.skyColor).convertSRGBToLinear();

    // Mirror the bake intensity onto the realtime PointLight so Standard mode roughly
    // tracks the bake. The 30× factor is a heuristic match (visualLight uses inverse-
    // square decay; the bake's 1.0-per-cast unit is unitless).
    this.visualLight.color.copy(lightColorLinear);
    this.visualLight.intensity = 30 * this.options.lightIntensity;

    // Build light list for the bake. Primary = point light at lightDummy.position.
    const primaryLight: PackedLight = {
      type: 'point',
      position: this.lightDummy.position.clone(),
      direction: new Vector3(0, -1, 0),
      color: lightColorLinear.clone().multiplyScalar(this.options.lightIntensity),
      params: [this.options.lightSize, 0, 0, 0],
    };
    const lights: PackedLight[] = [primaryLight];
    if (this.options.secondaryLightEnabled) {
      const secColor = new Color(this.options.secondaryColor)
        .convertSRGBToLinear()
        .multiplyScalar(this.options.secondaryIntensity);
      const secDir = new Vector3(
        this.options.secondaryDirX,
        this.options.secondaryDirY,
        this.options.secondaryDirZ,
      ).normalize();
      lights.push({
        type: 'directional',
        position: new Vector3(0, 0, 0),
        direction: secDir,
        color: secColor,
        params: [0, 0, 0, 0],
      });
    }

    // 4. Spawn progressive lightmapper
    const opts: RaycastOptions = {
      resolution: res,
      casts: this.options.casts,
      filterMode: this.options.filterMode === 'linear' ? LinearFilter : NearestFilter,
      lights,
      skyColor: skyColorLinear,
      skyIntensity: this.options.skyIntensity,
      ambientDistance: this.options.ambientDistance,
      aoIntensity: this.options.aoIntensity,
      aoExponent: this.options.aoExponent,
      ambientLightEnabled: this.options.ambientLightEnabled,
      directLightEnabled: this.options.directLightEnabled,
      indirectLightEnabled: this.options.indirectLightEnabled,
      albedoTexture: matTex.albedoTexture,
      emissiveTexture: matTex.emissiveTexture,
      materialTextureSize: matTex.side,
      targetSamples: this.options.targetSamples,
      bounces: this.options.bounces,
    };
    // Free GPU resources from any prior bake before re-allocating. Composite/post
    // hold refs into the OLD MRT textures, so dispose them BEFORE the lightmapper
    // (which owns the underlying RT) is overwritten.
    this.composite?.dispose();
    this.composite = null;
    this.refinement?.dispose();
    this.refinement = null;
    this.lightmapper?.dispose();

    this.lightmapper = generateLightmapper(
      this.renderer,
      this.positionTexture,
      this.normalTexture,
      bvh,
      opts,
    );
    this.lightmapTarget = this.lightmapper.renderTexture;

    // Phase A.3: eagerly allocate view-time composite (direct*directIntensity + indirect*giIntensity)*ao.
    this.composite = runComposite(
      this.renderer,
      this.lightmapper.textures,
      this.options.lightMapSize,
      {
        directIntensity: this.options.directIntensity,
        giIntensity: this.options.giIntensity,
        aoEnabled: this.options.ambientLightEnabled,
      },
    );

    // Reset readouts. Pause flag flipped on by the render loop once
    // `lightmapper.render()` reports `done = true` (frame count reaches
    // options.targetSamples). post + composite already disposed above.
    this.options.refinementStatus = 'idle';
    this.options.samples = 0;
    this.options.spp = 0;
    this.options.etaSec = 0;
    this.options.pause = false;
    this.pane.refresh();
    this.lightmapper.render();
    this.applyRenderMode();
  }

  /** Apply a quality preset → lightMapSize, casts, targetSamples, then re-bake. */
  private applyQualityPreset(name: QualityPresetName) {
    const p = QUALITY_PRESETS[name];
    if (!p) return; // Custom = no-op
    this.options.lightMapSize = p.lightMapSize;
    this.options.casts = p.casts;
    this.options.targetSamples = p.targetSamples;
    this.pane.refresh();
    this.bake();
  }

  private async applyRefinement() {
    if (!this.lightmapper || !this.positionTexture) return;
    this.options.refinementStatus = 'running';
    this.pane.refresh();

    this.refinement?.dispose();
    // Phase A.3: post-process chains off the composite (not raw direct) so denoising
    // operates on the already-combined (direct+indirect*gi)*ao signal.
    const src = this.composite!.texture;
    const res = this.options.lightMapSize;

    this.refinement = await runRefinement(
      this.renderer,
      src,
      this.positionTexture,
      res,
      this.options,
      (progress) => {
        this.progressBar.style.width = `${Math.min(100, progress * 100)}%`;
        this.progressText.innerText =
          `Refinement: ${Math.round(progress * 100)}%\n` + `Dilation & Bilateral Denoise...`;
      },
    );
    this.options.refinementStatus =
      this.options.dilationIterations > 0 || this.options.denoiseEnabled ? 'applied' : 'skipped';
    this.pane.refresh();
    this.applyRenderMode();

    this.progressText.innerText = `Baking & Refinement complete!\n` + `Ready.`;

    // Hide progress widget after a delay
    setTimeout(() => {
      this.progressContainer.style.display = 'none';
    }, 3000);
  }

  /** Export the "deliverable" lightmap — refinement if available, else composite. */
  private async exportFinal() {
    const tex = this.refinement?.texture ?? this.composite?.texture ?? null;
    if (!tex) {
      console.warn('[baker] export: no bake to export — bake first');
      return;
    }
    const stage = this.refinement ? 'refined' : 'composite';
    await this.runExport(tex, `lightmap_${stage}_${this.options.lightMapSize}`);
  }

  /** Export whatever the active layer is currently displaying. */
  private async exportCurrent() {
    const layer = LAYERS.find((l) => l.id === this.options.layer) ?? LAYERS[0]!;
    const tex = layer.getLightMap(this.layerContext());
    if (!tex) {
      console.warn(`[baker] export: layer "${layer.id}" has no exportable texture`);
      return;
    }
    await this.runExport(tex, `lightmap_${layer.id}_${this.options.lightMapSize}`);
  }

  private async runExport(tex: Texture, basename: string) {
    const fmt = this.options.exportFormat;
    const res = this.options.lightMapSize;
    const t0 = performance.now();
    try {
      await exportLightmap(this.renderer, tex, res, basename, fmt);
      console.info(
        `[baker] exported ${basename}.${fmt} (${res}×${res}) in ${(performance.now() - t0).toFixed(0)}ms`,
      );
    } catch (e) {
      console.error('[baker] export failed:', e);
      throw e;
    }
  }

  /** Revert display to the raw progressive lightmap (drops refinement result). */
  private showUnrefined() {
    this.refinement?.dispose();
    this.refinement = null;
    this.options.refinementStatus = 'idle';
    this.pane.refresh();
    this.applyRenderMode();
  }

  /** Resolve the current LayerContext from cached textures. */
  private layerContext(): LayerContext {
    return {
      composite: this.composite?.texture ?? null,
      direct: this.lightmapper?.textures.direct ?? null,
      indirect: this.lightmapper?.textures.indirect ?? null,
      ao: this.lightmapper?.textures.ao ?? null,
      raw: this.composite?.texture ?? null,
      refinement: this.refinement?.texture ?? null,
      refinementDilated: null, // Refinement currently only exposes final; leave for future
      positions: this.positionTexture ?? null,
      normals: this.normalTexture ?? null,
    };
  }

  /** Apply the active layer to every mesh. Registry lookup, no per-layer if/else. */
  private applyRenderMode() {
    const layer = LAYERS.find((l) => l.id === this.options.layer) ?? LAYERS[0]!;
    const ctx = this.layerContext();
    const lm = layer.getLightMap(ctx);

    // Material-swap layers (e.g. "Texel Density"). Restore originals on switch-away.
    if (layer.id === 'texelDensity') {
      if (!this.texelDensityMat) {
        this.texelDensityMat = new TexelDensityMaterial({
          texelsPerMeter: this.options.texelsPerMeter,
          lightmapSize: this.options.lightMapSize,
        });
      } else {
        this.texelDensityMat.setLightmapSize(this.options.lightMapSize);
        this.texelDensityMat.setTexelsPerMeter(this.options.texelsPerMeter);
      }
      for (const m of this.meshes) {
        if (!this.originalMaterials.has(m)) this.originalMaterials.set(m, m.material);
        m.material = this.texelDensityMat as unknown as SceneObj['material'];
      }
      this.visualLight.visible = false;
      return;
    }

    // Restore originals if we just left a swap layer.
    for (const m of this.meshes) {
      const orig = this.originalMaterials.get(m);
      if (orig && m.material !== orig) m.material = orig as SceneObj['material'];
    }

    for (const m of this.meshes) {
      const mat = m.material as MeshStandardMaterial & { _originalMap?: Texture | null };
      mat.map = layer.showAlbedo ? (mat._originalMap ?? null) : null;
      mat.lightMap = lm;
      if (mat.lightMap) {
        mat.lightMap.channel = 2;
        mat.lightMap.needsUpdate = true;
      }
      mat.lightMapIntensity = 1;
      mat.needsUpdate = true;
    }

    // Light marker disc never takes a lightmap.
    (this.lightMarker.material as MeshBasicMaterial).color = new Color(0xffffff);

    // The realtime point light is only meaningful when the lightmap is OFF
    // (i.e. when we're showing pure Albedo with no baked irradiance).
    this.visualLight.visible = layer.id === 'albedo';
  }

  private looping = false;
  // Initialized by buildOverlayUI() invoked from the constructor.
  private fpsElement!: HTMLDivElement;
  private progressContainer!: HTMLDivElement;
  private progressBar!: HTMLDivElement;
  private progressText!: HTMLDivElement;
  private bakeStartTime: number = 0;
  /**
   * Rolling window of `{samples, t}` checkpoints used by `estimateTimeRemaining`.
   * Push one entry per RAF tick where `r.samples` advanced; trim to last
   * `BAKE_ETA_WINDOW` entries. Reset to `[]` on every new bake.
   */
  private bakeBatchHistory: { samples: number; t: number }[] = [];
  private static readonly BAKE_ETA_WINDOW = 16;

  /**
   * Rolling-average ETA (seconds). Uses the slope of the last
   * `BAKE_ETA_WINDOW` (samples, time) checkpoints rather than total
   * `elapsed/progress` — discards RAF startup overhead and adapts to
   * GPU thermal throttling mid-bake. Returns 0 when no estimate is
   * possible (no history yet, target unset, already done, or non-positive
   * sample rate).
   */
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

  private startLoop() {
    if (this.looping) return;
    this.looping = true;

    let lastTime = performance.now();
    let frames = 0;
    let fps = 0;

    const tick = () => {
      requestAnimationFrame(tick);

      // Sync gizmo visibility and interactivity with UI option
      this.lightTransformController.visible = this.options.showGizmo;
      this.lightTransformController.enabled = this.options.showGizmo;

      const now = performance.now();
      frames++;
      if (now >= lastTime + 1000) {
        fps = Math.round((frames * 1000) / (now - lastTime));
        this.fpsElement.innerText = `FPS: ${fps}`;
        frames = 0;
        lastTime = now;
      }

      if (this.lightmapper && !this.options.pause) {
        const r = this.lightmapper.render();
        if (r.done) {
          this.options.pause = true;
          this.options.etaSec = 0;

          const elapsed = (performance.now() - this.bakeStartTime) / 1000;
          console.info(`[baker] done in ${elapsed.toFixed(2)}s`);
          this.progressText.innerText =
            `Baking complete! ${elapsed.toFixed(1)}s\n` + `Running post-process...`;

          // Manual mipmap generation at the end to keep the progressive loop fast.
          // Swapping to LinearMipMapLinearFilter enables hardware mipmap sampling.
          const rt = this.lightmapper.renderTarget;
          for (let i = 0; i < 3; i++) {
            const tex = rt.texture[i];
            if (!tex) continue; // SAFETY: WebGLMultipleRenderTargets always has 3 textures here
            tex.generateMipmaps = true;
            tex.minFilter = LinearMipMapLinearFilter;
            this.renderer.initTexture(tex);
          }
          if (this.composite?.texture) this.composite.texture.needsUpdate = true;

          this.pane.refresh();
          if (this.options.autoApplyRefinement) void this.applyRefinement();
          return; // Stop processing this frame
        }

        // Phase A.3: refresh composite every frame so layer views reflect latest accumulation.
        this.composite?.refresh();

        // Update Progress Widget
        const totalSamples = this.options.targetSamples;
        const progress = totalSamples > 0 ? r.samples / totalSamples : 0;
        this.progressBar.style.width = `${Math.min(100, progress * 100)}%`;

        const elapsed = (performance.now() - this.bakeStartTime) / 1000;

        // Append to rolling history only when sample count actually advanced;
        // RAF can fire at >60Hz on high-refresh displays without a new sample.
        const now = performance.now();
        const tail = this.bakeBatchHistory[this.bakeBatchHistory.length - 1];
        if (!tail || tail.samples !== r.samples) {
          this.bakeBatchHistory.push({ samples: r.samples, t: now });
          if (this.bakeBatchHistory.length > CornellBoxExample.BAKE_ETA_WINDOW) {
            this.bakeBatchHistory.shift();
          }
        }
        const eta = this.estimateTimeRemaining(r.samples, totalSamples);

        const spp = r.samples * this.options.casts;
        this.options.samples = r.samples;
        this.options.spp = spp;
        this.options.etaSec = Math.ceil(eta);

        this.progressText.innerText =
          `Baking: ${r.samples}/${totalSamples} frames (${spp} spp)\n` +
          `Elapsed: ${elapsed.toFixed(1)}s | ETA: ${this.options.etaSec}s`;
      }

      this.controls.update();
      this.renderer.render(this.scene, this.camera);

      // 2D atlas viewer overlay — track the active layer's texture each frame.
      this.atlasViewer.visible = this.options.atlasViewerEnabled;
      if (this.atlasViewer.visible) {
        const layer = LAYERS.find((l) => l.id === this.options.layer) ?? LAYERS[0]!;
        const tex = layer.getLightMap(this.layerContext()) ?? this.composite?.texture ?? null;
        this.atlasViewer.setTexture(tex);
        this.atlasViewer.setLayerLabel(layer.label);
      }
      this.atlasViewer.render(this.renderer);
    };
    tick();
  }
}
