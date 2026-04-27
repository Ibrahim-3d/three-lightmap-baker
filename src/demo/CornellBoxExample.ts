import {
  Box3,
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
  WebGLRenderer,
} from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Pane } from 'tweakpane';
import {
  generateAtlases,
  renderAtlas,
  generateLightmapper,
  Lightmapper,
  RaycastOptions,
  generateAOMapper,
  AOMapper,
  AORaycastOptions,
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
  binPackMeshes,
  BinAssignment,
} from '../lib';
import type { Material } from 'three';

/** Diagnostic logs — flip to true locally when debugging. CLAUDE.md convention. */
const DEBUG = false;

// Classic Cornell box dims: 10×10×10 unit room centered at (0, 5, 0)
const ROOM = 10;
const HALF = ROOM / 2;

/**
 * One bake group = one atlas. Each group has its own xatlas pack, position +
 * normal G-buffers, lightmapper instance, view-time composite RT, and (after
 * refinement runs) a refinement RT. The BVH and per-tri material textures
 * live OUTSIDE the group (shared across all groups so cross-group shadows
 * and color bleed remain physically correct).
 *
 * The bin-packer (binPackMeshes) decides how meshes split into groups: small
 * meshes share an atlas, large ones get their own. Atlas resolution is the
 * same across all groups (lightMapSize); what varies is how many of them.
 */
type BakeGroup = {
  /** 0-indexed atlas slot from the bin-packer. */
  atlasIdx: number;
  meshes: Mesh[];
  positionTexture: Texture;
  normalTexture: Texture;
  atlasDispose: () => void;
  lightmapper: Lightmapper;
  /** Standalone AO bake — independent ray budget; AO-only re-bake on slider change. */
  aoMapper: AOMapper;
  composite: CompositeResult;
  refinement: RefinementResult | null;
};

/**
 * Layer registry — view-time mapping from a layer ID to the texture(s) it shows.
 * Now PER-GROUP: each mesh resolves to its own group, and the layer reads the
 * per-group composite/lightmapper/refinement texture.
 */
type LayerContext = { group: BakeGroup };

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

const LAYERS: Layer[] = [
  {
    id: 'combined',
    label: 'Combined',
    group: 'output',
    showAlbedo: true,
    getLightMap: (c) => c.group.refinement?.texture ?? c.group.composite.texture,
  },
  {
    id: 'combinedPost',
    label: 'Combined (Refined)',
    group: 'output',
    showAlbedo: true,
    getLightMap: (c) => c.group.refinement?.texture ?? c.group.composite.texture,
  },
  {
    id: 'combinedRaw',
    label: 'Combined (Raw)',
    group: 'output',
    showAlbedo: true,
    getLightMap: (c) => c.group.composite.texture,
  },
  {
    id: 'direct',
    label: 'Direct',
    group: 'output',
    showAlbedo: false,
    getLightMap: (c) => c.group.lightmapper.textures.direct,
  },
  {
    id: 'indirect',
    label: 'Indirect (GI)',
    group: 'output',
    showAlbedo: false,
    getLightMap: (c) => c.group.lightmapper.textures.indirect,
  },
  {
    id: 'ao',
    label: 'Ambient Occlusion',
    group: 'output',
    showAlbedo: false,
    getLightMap: (c) => c.group.aoMapper.texture,
  },
  {
    id: 'lightmapRaw',
    label: 'Lightmap (Raw)',
    group: 'debug',
    showAlbedo: false,
    getLightMap: (c) => c.group.composite.texture,
  },
  { id: 'albedo', label: 'Albedo', group: 'debug', showAlbedo: true, getLightMap: () => null },
  {
    id: 'positions',
    label: 'World Position',
    group: 'debug',
    showAlbedo: false,
    getLightMap: (c) => c.group.positionTexture,
  },
  {
    id: 'normals',
    label: 'World Normal',
    group: 'debug',
    showAlbedo: false,
    getLightMap: (c) => c.group.normalTexture,
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

  /**
   * One BakeGroup per atlas. The bin-packer (binPackMeshes) decides how meshes
   * split — tiny scenes get one group, dense interiors many. Each group owns
   * its own xatlas pack, position+normal G-buffers, lightmapper, composite RT,
   * and (lazy) refinement RT.
   */
  private bakeGroups: BakeGroup[] = [];
  /** Mesh → its bake group. Excluded meshes are absent from this map. */
  private meshToGroup: Map<Mesh, BakeGroup> = new Map();
  /** Disposer for the SHARED per-tri material DataTextures (one per bake). */
  private matTexDispose: (() => void) | null = null;
  /**
   * BVH from the last bake — kept alive so AO-only rebakes can reuse it
   * without redoing the merge + tree build. Cleared in `disposeAllGroups()`
   * via the next bake's reassignment.
   */
  private bakeBVH: MeshBVH | null = null;

  /**
   * Per-mesh TexelDensityMaterial cache for the "Texel Density" debug layer.
   * One material per mesh so each can carry its own effective target
   * (`global texelsPerMeter × perMesh.scaleInLightmap`). Allows the slider
   * to update the viz without re-baking.
   */
  private texelDensityMats: Map<Mesh, TexelDensityMaterial> = new Map();
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
    /** AO ray budget per frame, independent of `casts`. */
    aoSamples: 5,
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

    // --- Bake control ---
    /**
     * Auto-rebake on slider release. When false, sliders just update state and
     * the user must press "Bake Now" to apply. Useful when iterating multiple
     * settings without paying for a re-bake on each one.
     */
    autoBake: true,

    // --- Refinement (Task 5) ---
    // Defaults OFF so the post-bake step doesn't make the bake feel "still running".
    // Toggle Run Refinement manually after a satisfactory bake, or flip autoApply
    // to chain it after every bake.
    autoApplyRefinement: false,
    dilationIterations: 1, // light gutter — bump to 4 if seams appear at chart borders
    denoiseEnabled: false,
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

    /**
     * Per-mesh overrides keyed by mesh.uuid.
     * - scaleInLightmap: density multiplier (1.0 = global texelsPerMeter, 2.0 = double,
     *   0.5 = half). Feeds the bin-packer; meshes with higher scale claim more atlas
     *   area, so use sparingly for hero objects.
     * - exclude: if true, mesh is skipped from UV unwrap + bake (but stays in BVH for
     *   GI / shadows of other meshes).
     */
    perMesh: {} as Record<string, { scaleInLightmap: number; exclude: boolean }>,

    // --- Atlas viewer (2D corner overlay) ---
    atlasViewerEnabled: true,
    atlasViewerSize: 256,
    atlasViewerCorner: 'br' as AtlasViewerCorner, // 'tl' | 'tr' | 'bl' | 'br'
    atlasViewerSRGB: true,
  };

  /** Tweakpane folder for per-mesh controls — rebuilt each time the scene changes. */
  private perMeshFolder: ReturnType<Pane['addFolder']> | null = null;

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
        label: 'Atlas Size',
      })
      .on('change', (e) => {
        this.options.quality = 'Custom';
        this.pane.refresh();
        this.maybeBake(e);
      });
    // Density target — feeds the bin-packer (more density → more atlases) and
    // also drives the "Texel Density" debug viz layer. Re-bake on slider release.
    bakeFolder
      .addInput(this.options, 'texelsPerMeter', {
        min: 1,
        max: 50,
        step: 0.5,
        label: 'Density (px/m)',
      })
      .on('change', (e) => {
        this.refreshTexelDensityMaterials();
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
      .addInput(this.options, 'targetSamples', {
        min: 16,
        max: 1024,
        step: 16,
        label: 'Target Frames',
      })
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
    bakeFolder.addButton({ title: 'Bake Now' }).on('click', () => this.bake());

    const lightFolder = this.pane.addFolder({ title: 'Lighting & GI', expanded: false });
    (lightFolder as any).element.classList.add('tp-light');

    const directFolder = lightFolder.addFolder({ title: 'Direct Light' });
    directFolder
      .addInput(this.options, 'directLightEnabled', { label: 'Enabled' })
      .on('change', this.maybeBake);
    directFolder
      .addInput(this.options, 'lightColor', { view: 'color', label: 'Color' })
      .on('change', this.maybeBake);
    directFolder
      .addInput(this.options, 'lightIntensity', {
        min: 0.0,
        max: 15.0,
        step: 0.1,
        label: 'Bake Power',
      })
      .on('change', this.maybeBake);
    directFolder
      .addInput(this.options, 'lightSize', { min: 0.1, max: 5, step: 0.1, label: 'Source Size' })
      .on('change', this.maybeBake);
    directFolder
      .addInput(this.options, 'directIntensity', {
        min: 0.0,
        max: 4.0,
        step: 0.05,
        label: 'View Multiplier',
      })
      .on('change', () =>
        this.refreshAllComposites({ directIntensity: this.options.directIntensity }),
      );

    const giFolder = lightFolder.addFolder({ title: 'Global Illumination' });
    giFolder
      .addInput(this.options, 'indirectLightEnabled', { label: 'Enabled' })
      .on('change', this.maybeBake);
    giFolder
      .addInput(this.options, 'giIntensity', {
        min: 0.0,
        max: 4.0,
        step: 0.05,
        label: 'Bounce Power',
      })
      .on('change', () => this.refreshAllComposites({ giIntensity: this.options.giIntensity }));
    giFolder
      .addInput(this.options, 'skyColor', { view: 'color', label: 'Sky Color' })
      .on('change', this.maybeBake);
    giFolder
      .addInput(this.options, 'skyIntensity', {
        min: 0.0,
        max: 4.0,
        step: 0.05,
        label: 'Sky Intensity',
      })
      .on('change', this.maybeBake);

    const aoFolder = lightFolder.addFolder({ title: 'Ambient Occlusion' });
    aoFolder.addInput(this.options, 'ambientLightEnabled', { label: 'Enabled' }).on('change', () =>
      // View-time toggle on the composite — no re-bake.
      this.refreshAllComposites({ aoEnabled: this.options.ambientLightEnabled }),
    );
    aoFolder
      .addInput(this.options, 'ambientDistance', {
        min: 0.05,
        max: 2,
        step: 0.05,
        label: 'Max Distance',
      })
      // Distance changes which hits count as occluders → AO-only re-bake.
      .on('change', () => this.rebakeAO());
    aoFolder
      .addInput(this.options, 'aoIntensity', { min: 0, max: 3, step: 0.05, label: 'Intensity' })
      // View-time remap on the composite — sub-ms; no re-bake.
      .on('change', () => this.refreshAllComposites({ aoIntensity: this.options.aoIntensity }));
    aoFolder
      .addInput(this.options, 'aoExponent', { min: 0.5, max: 4, step: 0.1, label: 'Exponent' })
      // View-time remap on the composite — sub-ms; no re-bake.
      .on('change', () => this.refreshAllComposites({ aoExponent: this.options.aoExponent }));
    aoFolder
      .addInput(this.options, 'aoSamples', {
        min: 0,
        max: 32,
        step: 1,
        label: 'Samples',
      })
      // Samples changes the AO ray budget → AO-only re-bake.
      .on('change', () => this.rebakeAO());

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
      .on('change', this.maybeBake);
    secFolder
      .addInput(this.options, 'secondaryDirX', { min: -1, max: 1, step: 0.05, label: 'Dir X' })
      .on('change', this.maybeBake);
    secFolder
      .addInput(this.options, 'secondaryDirY', { min: -1, max: 1, step: 0.05, label: 'Dir Y' })
      .on('change', this.maybeBake);
    secFolder
      .addInput(this.options, 'secondaryDirZ', { min: -1, max: 1, step: 0.05, label: 'Dir Z' })
      .on('change', this.maybeBake);
    secFolder
      .addInput(this.options, 'secondaryIntensity', {
        min: 0,
        max: 5,
        step: 0.1,
        label: 'Intensity',
      })
      .on('change', this.maybeBake);
    secFolder
      .addInput(this.options, 'secondaryColor', { view: 'color', label: 'Color' })
      .on('change', this.maybeBake);

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
    sceneFolder.addButton({ title: 'Import GLB...' }).on('click', () => {
      // Reset value so re-selecting the same file fires `change` again.
      this.glbFileInput.value = '';
      this.glbFileInput.click();
    });
    sceneFolder.addButton({ title: 'Reset to Cornell' }).on('click', () => this.rebuildScene());
    sceneFolder
      .addButton({ title: 'Export Scene as GLB' })
      .on('click', () => void this.exportSceneGLB());

    this.initUI();
    this.rebuildScene();
  }

  /**
   * Rebuild the Per-Mesh tweakpane folder to match the current mesh list.
   * Called after every scene rebuild. `exclude` skips a mesh from the bake;
   * `scaleInLightmap` is a density multiplier consumed by the bin-packer.
   */
  private buildPerMeshUI(): void {
    this.perMeshFolder?.dispose();
    const folder = this.pane.addFolder({ title: 'Per-Mesh', expanded: false });
    this.perMeshFolder = folder;

    for (let i = 0; i < this.meshes.length; i++) {
      const mesh = this.meshes[i]!;
      const uuid = mesh.uuid;
      if (!this.options.perMesh[uuid]) {
        this.options.perMesh[uuid] = { scaleInLightmap: 1.0, exclude: false };
      }
      const entry = this.options.perMesh[uuid]!;
      const label = mesh.name || `Mesh ${i + 1} (${mesh.geometry.type.replace('Geometry', '')})`;

      const meshFolder = folder.addFolder({ title: label, expanded: false });
      meshFolder.addInput(entry, 'exclude', { label: 'Exclude' }).on('change', this.maybeBake);
      // Density multiplier — feeds binPackMeshes(perMeshScale). 2.0 means "give this
      // mesh 2x more atlas area per square meter" (i.e. quadruple the texels).
      // The viz updates immediately on every drag step (no bake required) so the
      // user sees the target shift; the actual bake re-runs on slider release.
      meshFolder
        .addInput(entry, 'scaleInLightmap', {
          label: 'Density ×',
          min: 0.25,
          max: 4.0,
          step: 0.25,
        })
        .on('change', (e) => {
          this.refreshTexelDensityMaterials();
          this.maybeBake(e);
        });
    }
  }

  private initUI() {
    this.fpsElement = document.createElement('div');
    this.fpsElement.style.position = 'absolute';
    this.fpsElement.style.top = '10px';
    this.fpsElement.style.left = '10px';
    this.fpsElement.style.color = '#00ff00';
    this.fpsElement.style.fontFamily = 'monospace';
    this.fpsElement.style.fontSize = '12px';
    this.fpsElement.style.lineHeight = '1.4';
    this.fpsElement.style.pointerEvents = 'none';
    this.fpsElement.style.zIndex = '100';
    this.fpsElement.style.padding = '8px';
    this.fpsElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    this.fpsElement.style.borderRadius = '4px';
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

    // Hidden file picker for GLB/GLTF imports — triggered by the "Import GLB..." button.
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
    floor.name = 'Floor';
    floor.position.set(0, -T / 2, 0);
    this.addMesh(floor);

    // Ceiling: bottom surface at y=ROOM, slab extends up to y=ROOM+T
    const ceil = new Mesh(new BoxGeometry(ROOM, T, ROOM), white.clone());
    ceil.name = 'Ceiling';
    (ceil.material as any)._originalMap = null;
    ceil.position.set(0, ROOM + T / 2, 0);
    this.addMesh(ceil);

    // Back wall: front surface at z=-HALF, slab extends back to z=-HALF-T
    const back = new Mesh(new BoxGeometry(ROOM, ROOM, T), white.clone());
    back.name = 'Back Wall';
    (back.material as any)._originalMap = null;
    back.position.set(0, HALF, -HALF - T / 2);
    this.addMesh(back);

    // Left wall (red): inside surface at x=-HALF
    const left = new Mesh(new BoxGeometry(T, ROOM, ROOM), red);
    left.name = 'Left Wall (Red)';
    left.position.set(-HALF - T / 2, HALF, 0);
    this.addMesh(left);

    // Right wall (green): inside surface at x=+HALF
    const right = new Mesh(new BoxGeometry(T, ROOM, ROOM), green);
    right.name = 'Right Wall (Green)';
    right.position.set(HALF + T / 2, HALF, 0);
    this.addMesh(right);
  }

  private buildClassicBlocks() {
    const white = this.mat(0xe8e8e8);

    // Tall block: ~3×6×3, back-left, rotated ~17° CCW
    const tall = new Mesh(new BoxGeometry(3, 6, 3), white);
    tall.name = 'Tall Block';
    tall.position.set(-1.8, 3, -1.5);
    tall.rotation.y = 0.29;
    this.addMesh(tall);

    // Short block: ~3×3×3, front-right, rotated ~-17°
    const short = new Mesh(new BoxGeometry(3, 3, 3), white.clone());
    short.name = 'Short Block';
    (short.material as any)._originalMap = null;
    short.position.set(1.8, 1.5, 1.5);
    short.rotation.y = -0.29;
    this.addMesh(short);
  }

  private buildAdvancedExtras() {
    // Diffuse pearl sphere — sits in front of the short block.
    // NOTE: keep metalness ~0; baked lightmaps only carry diffuse irradiance.
    const sphere = new Mesh(new SphereGeometry(1.0, 48, 32), this.mat(0xf5f5f5, 0.4, 0.0));
    sphere.name = 'Sphere';
    sphere.position.set(2.4, 1.0, 3.0);
    this.addMesh(sphere);

    // Torus knot on the floor between the two blocks — fully lit, shows curvature AO well.
    const knot = new Mesh(
      new TorusKnotGeometry(0.55, 0.18, 160, 24),
      this.mat(0xffd166, 0.55, 0.0),
    );
    knot.name = 'Torus Knot';
    knot.position.set(0.0, 1.0, 2.8);
    knot.rotation.x = Math.PI / 2;
    this.addMesh(knot);

    // Accent block — sits on the floor near the front-left, standalone.
    // Warm terracotta: a less-saturated colour than the previous bright blue, which used
    // to dominate the bounce term (linear blue=1.0 channel) and tint the whole front-left
    // of the room. Terracotta complements the red wall instead of fighting it.
    const accent = new Mesh(new BoxGeometry(1.2, 1.2, 1.2), this.mat(0xc77a3a, 0.8, 0.0));
    accent.name = 'Accent Block';
    accent.position.set(-3.5, 0.6, 2.8);
    accent.rotation.y = 0.45;
    this.addMesh(accent);
  }

  /**
   * Import a GLB/GLTF file and replace the active scene with its meshes.
   * Bake-eligible meshes (those with a MeshStandardMaterial-like material) are
   * indexed (xatlas + extractPerTriangleMaterials require it), tagged into
   * `this.meshes`, and offered to the bake pipeline. Camera and the primary
   * light are auto-fit to the scene's bounding box.
   */
  private async importGLB(file: File): Promise<void> {
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

    // Tear down current bake-owned GPU resources before swapping geometry.
    this.disposeAllGroups();
    this.matTexDispose?.();
    this.matTexDispose = null;

    // Replace cornellRoot with the imported scene.
    if (this.cornellRoot) this.scene.remove(this.cornellRoot);
    this.cornellRoot = new Object3D();
    this.scene.add(this.cornellRoot);
    this.cornellRoot.add(gltf.scene);
    this.meshes = [];

    // Walk the imported scene; collect bake-eligible meshes and ensure indexed
    // geometry (mergeVertices both dedupes and creates an index buffer when
    // missing — required by extractPerTriangleMaterials).
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
      return;
    }

    // Auto-fit camera + light to the imported scene's bounding box.
    this.cornellRoot.updateMatrixWorld(true);
    this.fitCameraAndLightToScene();

    // perMesh state from prior scene is meaningless against new uuids — clear it.
    this.options.perMesh = {};
    this.buildPerMeshUI();
    await this.bake();
    this.startLoop();
  }

  /**
   * Position camera + light based on the world-space bbox of `this.meshes`.
   * Sets OrbitControls target to the scene center, places the light slightly
   * above the bbox top, and pulls the camera back to a distance proportional
   * to the longest axis.
   */
  private fitCameraAndLightToScene(): void {
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

  /**
   * Mount each mesh's per-group lightmap onto its material, then export the
   * full scene as a binary GLB with embedded textures. With density-aware
   * bin-packing the scene may have N atlases — each mesh receives the texture
   * of its own group, so the exported GLB embeds N images and routes each
   * mesh to the right one.
   */
  private async exportSceneGLB(): Promise<void> {
    if (!this.meshes.length) {
      console.warn('[baker] no meshes to export');
      return;
    }
    if (!this.bakeGroups.length) {
      console.warn('[baker] no baked lightmap available — bake first');
      return;
    }

    // applyRenderMode already mounts each mesh's group texture; re-run it on
    // a "Combined" view to guarantee the export sees the most-refined output.
    const previousLayer = this.options.layer;
    this.options.layer = 'combined';
    this.applyRenderMode();
    this.options.layer = previousLayer;

    const { GLTFExporter } = await import('three/examples/jsm/exporters/GLTFExporter');
    const exporter = new GLTFExporter();
    const result = await new Promise<ArrayBuffer>((resolve, reject) => {
      exporter.parse(
        this.cornellRoot!,
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

  private async rebuildScene() {
    this.disposeAllGroups();
    if (this.cornellRoot) this.scene.remove(this.cornellRoot);
    this.cornellRoot = new Object3D();
    this.scene.add(this.cornellRoot);
    this.meshes = [];

    this.buildWalls();
    this.buildClassicBlocks();
    if (this.options.preset === 'advanced') this.buildAdvancedExtras();

    // Prune stale perMesh entries from previous scene build.
    const liveUUIDs = new Set(this.meshes.map((m) => m.uuid));
    for (const k of Object.keys(this.options.perMesh)) {
      if (!liveUUIDs.has(k)) delete this.options.perMesh[k];
    }

    this.buildPerMeshUI();
    await this.bake();
    this.startLoop();
  }

  /** Tear down all bake groups (lightmappers, composites, refinements, atlases). */
  private disposeAllGroups(): void {
    for (const g of this.bakeGroups) {
      g.refinement?.dispose();
      g.composite.dispose();
      g.aoMapper.dispose();
      g.lightmapper.dispose();
      g.atlasDispose();
    }
    this.bakeGroups = [];
    this.meshToGroup.clear();
  }

  private async bake() {
    if (!this.meshes.length) return;

    this.progressContainer.style.display = 'block';
    this.bakeStartTime = performance.now();
    this.bakeBatchHistory = [];

    const res = this.options.lightMapSize;

    // renderAtlas reads modelMatrix and mergeGeometry calls applyMatrix4(matrixWorld);
    // both need an explicit world-matrix flush before the bake's first frame.
    this.scene.updateMatrixWorld(true);

    // Excluded meshes don't bake but DO live in the BVH so their geometry casts
    // shadows + contributes to other meshes' GI.
    const bakeMeshes = this.meshes.filter((m) => !(this.options.perMesh[m.uuid]?.exclude === true));
    if (!bakeMeshes.length) {
      console.warn('[baker] all meshes excluded — nothing to bake');
      this.progressContainer.style.display = 'none';
      return;
    }

    // --- 1. Density-aware bin pack ----------------------------------------
    const perMeshScale: Record<string, number> = {};
    for (const m of bakeMeshes) {
      const s = this.options.perMesh[m.uuid]?.scaleInLightmap;
      if (s !== undefined && s !== 1.0) perMeshScale[m.uuid] = s;
    }
    const assignments: BinAssignment[] = binPackMeshes(bakeMeshes, {
      atlasResolution: res,
      texelsPerMeter: this.options.texelsPerMeter,
      perMeshScale,
    });
    const numAtlases = assignments.reduce((mx, a) => Math.max(mx, a.atlasIdx + 1), 0);
    const meshesByBin: Mesh[][] = Array.from({ length: numAtlases }, () => []);
    for (const a of assignments) meshesByBin[a.atlasIdx]!.push(a.mesh);

    if (DEBUG) {
      const totalArea = assignments.reduce((s, a) => s + a.surfaceArea, 0);
      console.info(
        `[baker] bin-pack: ${assignments.length} meshes → ${numAtlases} atlas${numAtlases === 1 ? '' : 'es'} @ ${res}² (${this.options.texelsPerMeter} texels/m, ${totalArea.toFixed(2)}m² total)`,
      );
      for (let i = 0; i < numAtlases; i++) {
        const bin = assignments.filter((a) => a.atlasIdx === i);
        const fill = bin.reduce((s, a) => s + a.uvFraction, 0);
        console.info(
          `[baker]   atlas ${i}: ${bin.length} meshes, ${(fill * 100).toFixed(1)}% fill`,
        );
      }
    }

    // --- 2. Per-bin xatlas pack (writes uv2 to each mesh) ------------------
    await generateAtlases(meshesByBin);

    // --- 3. Shared BVH + per-tri materials (across ALL meshes inc. excluded) ---
    const merged = mergeGeometry(this.meshes);
    const bvh = new MeshBVH(merged);
    this.bakeBVH = bvh;
    this.matTexDispose?.();
    const perTri = extractPerTriangleMaterials(merged, this.meshes);
    const matTex = buildMaterialTextures(perTri);
    this.matTexDispose = (): void => {
      matTex.albedoTexture.dispose();
      matTex.emissiveTexture.dispose();
    };

    if (DEBUG)
      console.info(
        `[baker] material textures: ${perTri.totalTriangles} triangles, ${matTex.side}×${matTex.side}; ` +
          `per-mesh tri counts [${perTri.perMeshTriangleCounts.join(', ')}]`,
      );

    // --- 4. Light list (linear-space, sRGB picker → linear) ---------------
    const lightColorLinear = new Color(this.options.lightColor).convertSRGBToLinear();
    const skyColorLinear = new Color(this.options.skyColor).convertSRGBToLinear();
    this.visualLight.color.copy(lightColorLinear);
    this.visualLight.intensity = 30 * this.options.lightIntensity;

    const lights: PackedLight[] = [
      {
        type: 'point',
        position: this.lightDummy.position.clone(),
        direction: new Vector3(0, -1, 0),
        color: lightColorLinear.clone().multiplyScalar(this.options.lightIntensity),
        params: [this.options.lightSize, 0, 0, 0],
      },
    ];
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

    const baseOpts: Omit<RaycastOptions, 'resolution'> = {
      casts: this.options.casts,
      filterMode: this.options.filterMode === 'linear' ? LinearFilter : NearestFilter,
      lights,
      skyColor: skyColorLinear,
      skyIntensity: this.options.skyIntensity,
      directLightEnabled: this.options.directLightEnabled,
      indirectLightEnabled: this.options.indirectLightEnabled,
      albedoTexture: matTex.albedoTexture,
      emissiveTexture: matTex.emissiveTexture,
      materialTextureSize: matTex.side,
      targetSamples: this.options.targetSamples,
      bounces: this.options.bounces,
    };

    const aoBaseOpts: Omit<AORaycastOptions, 'resolution'> = {
      aoSamples: this.options.aoSamples,
      ambientDistance: this.options.ambientDistance,
      targetSamples: this.options.targetSamples,
    };

    // --- 5. Per-bin renderAtlas + lightmapper + composite ------------------
    this.disposeAllGroups();
    for (let bi = 0; bi < numAtlases; bi++) {
      const binMeshes = meshesByBin[bi]!;
      const atlas = renderAtlas(this.renderer, binMeshes, res, true);
      const lightmapper = generateLightmapper(
        this.renderer,
        atlas.positionTexture,
        atlas.normalTexture,
        bvh,
        { ...baseOpts, resolution: res },
      );
      const aoMapper = generateAOMapper(
        this.renderer,
        atlas.positionTexture,
        atlas.normalTexture,
        bvh,
        { ...aoBaseOpts, resolution: res },
      );
      const composite = runComposite(
        this.renderer,
        {
          direct: lightmapper.textures.direct,
          indirect: lightmapper.textures.indirect,
          ao: aoMapper.texture,
        },
        res,
        {
          directIntensity: this.options.directIntensity,
          giIntensity: this.options.giIntensity,
          aoEnabled: this.options.ambientLightEnabled,
          aoIntensity: this.options.aoIntensity,
          aoExponent: this.options.aoExponent,
        },
      );
      const group: BakeGroup = {
        atlasIdx: bi,
        meshes: binMeshes,
        positionTexture: atlas.positionTexture,
        normalTexture: atlas.normalTexture,
        atlasDispose: atlas.dispose,
        lightmapper,
        aoMapper,
        composite,
        refinement: null,
      };
      this.bakeGroups.push(group);
      for (const m of binMeshes) this.meshToGroup.set(m, group);
      lightmapper.render(); // first sample
      aoMapper.render();
    }

    this.options.refinementStatus = 'idle';
    this.options.samples = 0;
    this.options.spp = 0;
    this.options.etaSec = 0;
    this.options.pause = false;
    this.pane.refresh();
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

  /**
   * Run the dilation+denoise refinement on every bake group. Each group's
   * refinement RT chains off its own composite output and uses its own
   * position G-buffer as the chart mask.
   */
  private async applyRefinement() {
    if (!this.bakeGroups.length) return;
    this.options.refinementStatus = 'running';
    this.pane.refresh();
    const res = this.options.lightMapSize;

    for (let i = 0; i < this.bakeGroups.length; i++) {
      const g = this.bakeGroups[i]!;
      g.refinement?.dispose();
      g.refinement = await runRefinement(
        this.renderer,
        g.composite.texture,
        g.positionTexture,
        res,
        this.options,
        (progress) => {
          // Per-group progress; aggregate by averaging across already-finished groups.
          const overall = (i + progress) / this.bakeGroups.length;
          this.progressBar.style.width = `${Math.min(100, overall * 100)}%`;
          this.progressText.innerText =
            `Refinement: atlas ${i + 1}/${this.bakeGroups.length} ` +
            `(${Math.round(progress * 100)}%)\nDilation & Bilateral Denoise...`;
        },
      );
    }

    this.options.refinementStatus =
      this.options.dilationIterations > 0 || this.options.denoiseEnabled ? 'applied' : 'skipped';
    this.pane.refresh();
    this.applyRenderMode();

    this.progressText.innerText = `Baking & Refinement complete!\nReady.`;
    setTimeout(() => {
      this.progressContainer.style.display = 'none';
    }, 3000);
  }

  /**
   * Export each atlas's final lightmap as a separate file.
   * Filenames: `lightmap_<stage>_<res>_atlas<i>.{png,exr,bin}` when there are
   * multiple atlases, or just `lightmap_<stage>_<res>` when there's one.
   */
  private async exportFinal() {
    if (!this.bakeGroups.length) {
      console.warn('[baker] export: no bake to export — bake first');
      return;
    }
    const stage = this.bakeGroups[0]!.refinement ? 'refined' : 'composite';
    for (let i = 0; i < this.bakeGroups.length; i++) {
      const g = this.bakeGroups[i]!;
      const tex = g.refinement?.texture ?? g.composite.texture;
      const suffix = this.bakeGroups.length > 1 ? `_atlas${i}` : '';
      await this.runExport(tex, `lightmap_${stage}_${this.options.lightMapSize}${suffix}`);
    }
  }

  /** Export the active layer's texture from each atlas. */
  private async exportCurrent() {
    const layer = LAYERS.find((l) => l.id === this.options.layer) ?? LAYERS[0]!;
    if (!this.bakeGroups.length) {
      console.warn('[baker] export: no bake to export — bake first');
      return;
    }
    let exported = 0;
    for (let i = 0; i < this.bakeGroups.length; i++) {
      const g = this.bakeGroups[i]!;
      const tex = layer.getLightMap({ group: g });
      if (!tex) continue;
      const suffix = this.bakeGroups.length > 1 ? `_atlas${i}` : '';
      await this.runExport(tex, `lightmap_${layer.id}_${this.options.lightMapSize}${suffix}`);
      exported++;
    }
    if (!exported) console.warn(`[baker] export: layer "${layer.id}" has no exportable texture`);
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

  /** Revert display to raw composite (drops every group's refinement result). */
  private showUnrefined() {
    for (const g of this.bakeGroups) {
      g.refinement?.dispose();
      g.refinement = null;
    }
    this.options.refinementStatus = 'idle';
    this.pane.refresh();
    this.applyRenderMode();
  }

  /**
   * Apply the active layer to every mesh — each mesh resolves to its own bake
   * group, so meshes in different atlases mount different textures.
   */
  private applyRenderMode() {
    const layer = LAYERS.find((l) => l.id === this.options.layer) ?? LAYERS[0]!;

    // Material-swap layer (Texel Density). One material per mesh so each can
    // carry its own effective target = global × per-mesh density multiplier.
    if (layer.id === 'texelDensity') {
      this.refreshTexelDensityMaterials();
      for (const m of this.meshes) {
        if (!this.originalMaterials.has(m)) this.originalMaterials.set(m, m.material);
        const tdm = this.texelDensityMats.get(m);
        if (tdm) m.material = tdm as unknown as SceneObj['material'];
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

      // Excluded mesh OR no group yet (pre-bake): no lightmap.
      const group = this.meshToGroup.get(m);
      const lm = group ? layer.getLightMap({ group }) : null;
      mat.lightMap = lm;
      if (mat.lightMap) {
        mat.lightMap.channel = 2;
        mat.lightMap.needsUpdate = true;
      }
      mat.lightMapIntensity = 1;
      mat.needsUpdate = true;
    }

    (this.lightMarker.material as MeshBasicMaterial).color = new Color(0xffffff);
    this.visualLight.visible = layer.id === 'albedo';
  }

  private looping = false;
  // Initialized by buildOverlayUI() invoked from the constructor.
  private fpsElement!: HTMLDivElement;
  private progressContainer!: HTMLDivElement;
  private progressBar!: HTMLDivElement;
  private progressText!: HTMLDivElement;
  private glbFileInput!: HTMLInputElement;
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

        // Calculate VRAM and Scene complexity
        let vram = 0;
        let triangles = 0;

        // Textures & RenderTargets
        const textures = this.renderer.info.memory.textures;
        // Approximation: Width * Height * 4 (channels) * 4 (float)
        // Lightmap baking uses FloatType (4 bytes) or HalfFloat (2 bytes)
        // We can get more precise by counting our specific RTs
        for (const g of this.bakeGroups) {
          const res = this.options.lightMapSize;
          // G-Buffers: Position(RGBA32F), Normal(RGBA32F) = 2 * res^2 * 16 bytes
          vram += res * res * 16 * 2;
          // Composite: RGBA16F = res^2 * 8 bytes
          vram += res * res * 8;
          // Lightmapper internal MRT (3x RGBA32F) = 3 * res^2 * 16 bytes
          vram += res * res * 16 * 3;
          if (g.refinement) vram += res * res * 8;
        }

        // Scene Triangles
        for (const m of this.meshes) {
          const geom = m.geometry;
          if (geom.index) {
            triangles += geom.index.count / 3;
          } else {
            const pos = geom.attributes.position;
            if (pos) triangles += pos.count / 3;
          }
        }

        const vramMB = (vram / (1024 * 1024)).toFixed(1);
        const triK = (triangles / 1000).toFixed(1);

        let statsText = `FPS: ${fps}\n`;
        statsText += `VRAM: ${vramMB} MB (${textures} tex)\n`;
        statsText += `TRIS: ${triK}k\n`;

        if (this.bakeGroups.length && !this.options.pause) {
          const rps =
            (this.bakeGroups.length *
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

      if (this.bakeGroups.length && !this.options.pause) {
        // Step every group; aggregate sample counts for the progress widget.
        // Drive bounce + AO accumulators in lockstep — both report independent
        // sample counts but use the same `targetSamples` budget.
        let allDone = true;
        let minSamples = Infinity;
        const perAtlasSamples: number[] = [];
        for (const g of this.bakeGroups) {
          const r = g.lightmapper.render();
          const ar = g.aoMapper.render();
          if (!r.done || !ar.done) allDone = false;
          const minOfPair = Math.min(r.samples, ar.samples);
          if (minOfPair < minSamples) minSamples = minOfPair;
          perAtlasSamples.push(minOfPair);
        }
        if (!Number.isFinite(minSamples)) minSamples = 0;

        if (allDone) {
          this.options.pause = true;
          this.options.etaSec = 0;
          const elapsed = (performance.now() - this.bakeStartTime) / 1000;
          console.info(
            `[baker] done in ${elapsed.toFixed(2)}s (${this.bakeGroups.length} atlas${this.bakeGroups.length === 1 ? '' : 'es'})`,
          );
          this.progressText.innerText = `Baking complete! ${elapsed.toFixed(1)}s\nRunning post-process...`;

          // Generate mipmaps on every group's MRT outputs at end-of-bake; swap min
          // filter to LinearMipMapLinear so the lightmap can sample at any LOD.
          // Bounce MRT now has 2 attachments (direct, indirect); AO lives on its
          // own mapper texture and is upgraded the same way.
          for (const g of this.bakeGroups) {
            const rt = g.lightmapper.renderTarget;
            for (let i = 0; i < 2; i++) {
              const tex = rt.texture[i];
              if (!tex) continue;
              tex.generateMipmaps = true;
              tex.minFilter = LinearMipMapLinearFilter;
              this.renderer.initTexture(tex);
            }
            const aoTex = g.aoMapper.texture;
            aoTex.generateMipmaps = true;
            aoTex.minFilter = LinearMipMapLinearFilter;
            this.renderer.initTexture(aoTex);
            g.composite.texture.needsUpdate = true;
          }
          this.pane.refresh();
          if (this.options.autoApplyRefinement) void this.applyRefinement();
          return;
        }

        // Refresh composite per group so layer views reflect the latest accumulation.
        for (const g of this.bakeGroups) g.composite.refresh();

        const totalSamples = this.options.targetSamples;
        const progress = totalSamples > 0 ? minSamples / totalSamples : 0;
        this.progressBar.style.width = `${Math.min(100, progress * 100)}%`;

        const elapsed = (performance.now() - this.bakeStartTime) / 1000;

        const tNow = performance.now();
        const tail = this.bakeBatchHistory[this.bakeBatchHistory.length - 1];
        if (!tail || tail.samples !== minSamples) {
          this.bakeBatchHistory.push({ samples: minSamples, t: tNow });
          if (this.bakeBatchHistory.length > CornellBoxExample.BAKE_ETA_WINDOW) {
            this.bakeBatchHistory.shift();
          }
        }
        const eta = this.estimateTimeRemaining(minSamples, totalSamples);
        const spp = minSamples * this.options.casts;
        this.options.samples = minSamples;
        this.options.spp = spp;
        this.options.etaSec = Math.ceil(eta);

        // Build per-atlas line: "[done 256, 187, 187]" or compact summary if many.
        let atlasLine: string;
        if (this.bakeGroups.length === 1) {
          atlasLine = '';
        } else if (this.bakeGroups.length <= 6) {
          atlasLine =
            '\nAtlases: [' +
            perAtlasSamples
              .map((s) => (s >= totalSamples ? `${totalSamples}✓` : String(s)))
              .join(', ') +
            ']';
        } else {
          const doneCount = perAtlasSamples.filter((s) => s >= totalSamples).length;
          atlasLine = `\nAtlases: ${doneCount}/${this.bakeGroups.length} done`;
        }

        this.progressText.innerText =
          `Baking: ${minSamples}/${totalSamples} frames (${spp} spp)\n` +
          `Elapsed: ${elapsed.toFixed(1)}s | ETA: ${this.options.etaSec}s` +
          atlasLine;
      }

      this.controls.update();
      this.renderer.render(this.scene, this.camera);

      // Atlas viewer overlay — show ALL atlases simultaneously in a grid.
      this.atlasViewer.visible = this.options.atlasViewerEnabled;
      if (this.atlasViewer.visible) {
        const layer = LAYERS.find((l) => l.id === this.options.layer) ?? LAYERS[0]!;
        if (this.bakeGroups.length === 0) {
          this.atlasViewer.setTexture(null);
        } else {
          const texs: Texture[] = [];
          for (const g of this.bakeGroups) {
            texs.push(layer.getLightMap({ group: g }) ?? g.composite.texture);
          }
          this.atlasViewer.setTextures(texs);
        }
        const suffix = this.bakeGroups.length > 1 ? ` (${this.bakeGroups.length} atlases)` : '';
        this.atlasViewer.setLayerLabel(layer.label + suffix);
      }
      this.atlasViewer.render(this.renderer);
    };
    tick();
  }

  /** Push uniform overrides into every group's view-time composite. */
  private refreshAllComposites(overrides: {
    directIntensity?: number;
    giIntensity?: number;
    aoEnabled?: boolean;
    aoIntensity?: number;
    aoExponent?: number;
  }): void {
    for (const g of this.bakeGroups) g.composite.refresh(overrides);
  }

  /**
   * AO-only re-bake. Disposes each group's AO mapper, builds a fresh one with
   * current `aoSamples` / `ambientDistance`, swaps it into the composite, and
   * resumes accumulation. Bounce textures stay untouched. Used when a slider
   * change requires fresh rays (samples / distance) — not for intensity or
   * exponent, which are view-time uniforms on the composite.
   */
  private rebakeAO(): void {
    if (!this.bakeGroups.length || !this.bakeBVH) return;
    const res = this.options.lightMapSize;
    const aoOpts: Omit<AORaycastOptions, 'resolution'> = {
      aoSamples: this.options.aoSamples,
      ambientDistance: this.options.ambientDistance,
      targetSamples: this.options.targetSamples,
    };
    for (const g of this.bakeGroups) {
      g.aoMapper.dispose();
      g.aoMapper = generateAOMapper(
        this.renderer,
        g.positionTexture,
        g.normalTexture,
        this.bakeBVH,
        { ...aoOpts, resolution: res },
      );
      g.composite.refresh({ aoTex: g.aoMapper.texture });
    }
    // Resume accumulation — the per-frame loop drives both lightmapper.render()
    // (already converged → returns done) and aoMapper.render() (fresh → ticks).
    this.options.pause = false;
  }

  /**
   * Sync the per-mesh TexelDensityMaterial cache with the current mesh list +
   * options. Each mesh's effective target = global texelsPerMeter × its
   * per-mesh scale (default 1.0). Lazy-creates materials on first sight,
   * disposes materials whose mesh is gone, and updates uniforms in place.
   *
   * Cheap to call — no GPU work beyond uniform writes. Triggered on:
   *  - Texel Density layer activation (initial mount)
   *  - Per-mesh density slider change (real-time viz update without bake)
   *  - Global texelsPerMeter slider change
   *  - lightMapSize change
   */
  private refreshTexelDensityMaterials(): void {
    const live = new Set<Mesh>(this.meshes);
    // Drop entries for meshes no longer in the scene.
    for (const m of this.texelDensityMats.keys()) {
      if (!live.has(m)) {
        this.texelDensityMats.get(m)?.dispose();
        this.texelDensityMats.delete(m);
      }
    }
    // Create / update per-mesh.
    for (const m of this.meshes) {
      const scale = this.options.perMesh[m.uuid]?.scaleInLightmap ?? 1.0;
      const target = this.options.texelsPerMeter * scale;
      let mat = this.texelDensityMats.get(m);
      if (!mat) {
        mat = new TexelDensityMaterial({
          texelsPerMeter: target,
          lightmapSize: this.options.lightMapSize,
        });
        this.texelDensityMats.set(m, mat);
      } else {
        mat.setTexelsPerMeter(target);
        mat.setLightmapSize(this.options.lightMapSize);
      }
    }
  }

  /**
   * Bake gate for slider/input change events. Skips:
   *  - Mid-drag updates (`e.last === false`) — Tweakpane fires `last:true` only
   *    on slider release, so dragging through values doesn't kick off N bakes.
   *  - Auto-bake disabled — user wants to fiddle multiple settings before
   *    triggering a single re-bake via the "Bake Now" button.
   */
  private maybeBake = (e?: { last?: boolean }): void => {
    if (e?.last === false) return;
    if (!this.options.autoBake) return;
    void this.bake();
  };
}
