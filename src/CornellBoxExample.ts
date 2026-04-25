import {
    BoxGeometry,
    Color,
    DoubleSide,
    LinearFilter,
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
import { generateAtlas } from './atlas/generateAtlas';
import { renderAtlas } from './atlas/renderAtlas';
import { generateLightmapper, Lightmapper, RaycastOptions } from './lightmap/Lightmapper';
import { runPostProcess, PostProcessResult } from './lightmap/PostProcess';
import { runComposite, CompositeResult } from './lightmap/Composite';
import { mergeGeometry, extractPerTriangleMaterials } from './utils/GeometryUtils';
import { buildMaterialTextures } from './utils/MaterialTextures';

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
    composite:   Texture | null;  // combined view (direct + indirect*gi) * ao — Phase A.3
    direct:      Texture | null;  // MRT[0]
    indirect:    Texture | null;  // MRT[1]
    ao:          Texture | null;  // MRT[2]
    raw:         Texture | null;  // alias for composite, back-compat
    post:        Texture | null;  // post.texture (denoised final)
    postDilated: Texture | null;  // dilation-only stage — PostProcess doesn't expose separately yet
    positions:   Texture | null;
    normals:     Texture | null;
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
    { id: 'combined',     label: 'Combined',            group: 'output', showAlbedo: true,  getLightMap: c => c.post ?? c.composite },
    { id: 'combinedPost', label: 'Combined (Denoised)', group: 'output', showAlbedo: true,  getLightMap: c => c.post ?? c.composite },
    { id: 'combinedRaw',  label: 'Combined (Raw)',      group: 'output', showAlbedo: true,  getLightMap: c => c.composite },
    { id: 'direct',       label: 'Direct',              group: 'output', showAlbedo: false, getLightMap: c => c.direct },
    { id: 'indirect',     label: 'Indirect (GI)',       group: 'output', showAlbedo: false, getLightMap: c => c.indirect },
    { id: 'ao',           label: 'Ambient Occlusion',   group: 'output', showAlbedo: false, getLightMap: c => c.ao },
    { id: 'lightmapRaw',  label: 'Lightmap (Raw)',      group: 'debug',  showAlbedo: false, getLightMap: c => c.composite },
    { id: 'albedo',       label: 'Albedo',              group: 'debug',  showAlbedo: true,  getLightMap: () => null },
    { id: 'positions',    label: 'World Position',      group: 'debug',  showAlbedo: false, getLightMap: c => c.positions },
    { id: 'normals',      label: 'World Normal',        group: 'debug',  showAlbedo: false, getLightMap: c => c.normals },
];

const LAYER_OPTIONS = Object.fromEntries(LAYERS.map(l => [l.label, l.id]));

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
 * NOTE: bounces stays at 1 across all presets — multi-bounce was deferred from Sessions 4/5
 * (no GLSL recursion + N² ray cost). The "bounces" column in the spec is preserved here as
 * a UI hint only; bumping it has no current effect.
 */
const QUALITY_PRESETS = {
    Custom:     null,
    Draft:      { lightMapSize: 256,  casts: 4, targetSamples: 32  /* ≈ 128 spp */ },
    Preview:    { lightMapSize: 512,  casts: 5, targetSamples: 96  /* ≈ 480 spp */ },
    Production: { lightMapSize: 1024, casts: 6, targetSamples: 256 /* ≈ 1536 spp */ },
    Final:      { lightMapSize: 2048, casts: 8, targetSamples: 512 /* ≈ 4096 spp */ },
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

    positionTexture: Texture;
    normalTexture: Texture;
    lightmapTarget: WebGLMultipleRenderTargets;
    lightmapper: Lightmapper | null = null;

    /** View-time composite of MRT direct+indirect+AO. Eagerly allocated at bake start. */
    private composite: CompositeResult | null = null;
    /** Result of the most recent post-process (dilation + denoise). Null until run. */
    private post: PostProcessResult | null = null;
    /** Wall-clock when current bake started, for time-remaining estimate. */
    private bakeStartMs = 0;
    /** Last reported sample count (so the loop can detect "done" once and run post). */
    private lastSamples = 0;

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
        filterMode: 'linear',
        directLightEnabled: true,
        indirectLightEnabled: true,
        ambientLightEnabled: true,
        ambientDistance: 0.5,
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

        // --- Post-process (Task 5) ---
        autoApplyPost: true,             // run dilation+denoise automatically when bake hits target
        dilationIterations: 4,           // 4px halo per spec
        denoiseEnabled: true,
        denoiseSigma: 2.5,               // spatial blur sigma (in texels)
        denoiseThreshold: 0.18,          // range sigma — higher = more blurring across edges
        denoiseKSigma: 1.0,              // kernel radius multiplier

        // --- Readouts (rendered as monitors) ---
        samples: 0,                      // current frame count (UI mirror of lightmapper state)
        spp: 0,                          // samples-per-texel = samples × casts
        etaSec: 0,                       // estimated seconds remaining
        postStatus: 'idle',              // 'idle' | 'running' | 'applied' | 'skipped'
    };

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
            new MeshBasicMaterial({ color: 0xffffff, side: DoubleSide })
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

        this.pane = new Pane({ title: 'Cornell Bake' });
        this.pane.addInput(this.options, 'preset', { options: presets }).on('change', () => this.rebuildScene());
        this.pane.addInput(this.options, 'layer', { options: LAYER_OPTIONS, label: 'layer' })
            .on('change', () => this.applyRenderMode());

        // Quality preset — picks lightMapSize, casts, targetSamples in one shot.
        this.pane.addInput(this.options, 'quality', {
            options: Object.fromEntries(Object.keys(QUALITY_PRESETS).map(k => [k, k])),
            label: 'preset',
        }).on('change', (e) => this.applyQualityPreset(e.value as QualityPresetName));

        this.pane.addInput(this.options, 'lightMapSize', { min: 128, max: 2048, step: 128 })
            .on('change', () => { 
                this.options.quality = 'Custom'; 
                this.pane.refresh(); 
                this.bake(); 
            });
        // ↑ casts cap was 4; bump to 16 so Final preset (8 casts) and tuners can reach it
        this.pane.addInput(this.options, 'casts', { min: 1, max: 16, step: 1 })
            .on('change', () => { 
                this.options.quality = 'Custom'; 
                this.pane.refresh(); 
                this.bake();
            });
        this.pane.addInput(this.options, 'targetSamples', { min: 16, max: 1024, step: 16, label: 'samples (frames)' })
            .on('change', () => { 
                this.options.quality = 'Custom'; 
                this.pane.refresh(); 
                this.bake();
            });

        this.pane.addInput(this.options, 'lightSize', { min: 0.1, max: 5, step: 0.1 })
            .on('change', () => this.bake());
        this.pane.addInput(this.options, 'lightIntensity', { min: 0.0, max: 15.0, step: 0.1 })
            .on('change', () => this.bake());
        this.pane.addInput(this.options, 'lightColor', { view: 'color' })
            .on('change', () => this.bake());
        this.pane.addInput(this.options, 'directIntensity', { min: 0.0, max: 4.0, step: 0.05, label: 'direct intensity' })
            .on('change', () => this.composite?.refresh({ directIntensity: this.options.directIntensity }));
        this.pane.addInput(this.options, 'giIntensity', { min: 0.0, max: 4.0, step: 0.05, label: 'gi intensity' })
            .on('change', () => this.composite?.refresh({ giIntensity: this.options.giIntensity }));
        this.pane.addInput(this.options, 'skyColor', { view: 'color', label: 'sky color' })
            .on('change', () => this.bake());
        this.pane.addInput(this.options, 'skyIntensity', { min: 0.0, max: 4.0, step: 0.05, label: 'sky intensity' })
            .on('change', () => this.bake());
        this.pane.addInput(this.options, 'directLightEnabled')
            .on('change', () => this.bake());
        this.pane.addInput(this.options, 'indirectLightEnabled')
            .on('change', () => this.bake());
        this.pane.addInput(this.options, 'ambientLightEnabled')
            .on('change', () => {
                this.composite?.refresh({ aoEnabled: this.options.ambientLightEnabled });
                this.bake();
            });
        this.pane.addInput(this.options, 'ambientDistance', { min: 0.05, max: 2, step: 0.05 })
            .on('change', () => this.bake());
        this.pane.addInput(this.options, 'filterMode', { options: Filter }).on('change', () => this.applyRenderMode());
        this.pane.addButton({ title: 'Bake' }).on('click', () => this.bake());
        this.pane.addInput(this.options, 'pause');
        this.pane.addInput(this.options, 'showGizmo', { label: 'show gizmo' });

        // --- Post-process folder (Task 5) ---
        const post = this.pane.addFolder({ title: 'Post-process' });
        post.addInput(this.options, 'autoApplyPost', { label: 'auto-apply' });
        post.addInput(this.options, 'dilationIterations', { min: 0, max: 8, step: 1, label: 'dilate iters' });
        post.addInput(this.options, 'denoiseEnabled', { label: 'denoise' });
        post.addInput(this.options, 'denoiseSigma', { min: 0.1, max: 8, step: 0.1, label: 'denoise sigma' });
        post.addInput(this.options, 'denoiseThreshold', { min: 0.01, max: 1, step: 0.01, label: 'edge thresh' });
        post.addInput(this.options, 'denoiseKSigma', { min: 0.5, max: 3, step: 0.1, label: 'kernel ×' });
        post.addButton({ title: 'Apply Post' }).on('click', () => this.applyPostProcess());
        post.addButton({ title: 'Show Raw' }).on('click', () => this.showRaw());

        // --- Status folder (read-only monitors) ---
        const stat = this.pane.addFolder({ title: 'Status' });
        stat.addMonitor(this.options, 'samples', { label: 'frames' });
        stat.addMonitor(this.options, 'spp', { label: 'spp' });
        stat.addMonitor(this.options, 'etaSec', { label: 'eta (s)', format: (v: number) => v.toFixed(1) });
        stat.addMonitor(this.options, 'postStatus', { label: 'post' });

        this.rebuildScene();
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
        const red   = this.mat(0xd62728);
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
            this.mat(0xffd166, 0.55, 0.0)
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
        const res = this.options.lightMapSize;

        // CRITICAL: renderAtlas reads each mesh's modelMatrix and mergeGeometry calls
        // applyMatrix4(matrixWorld). Both require an explicit world-matrix flush since
        // we bake before the render loop has had a chance to do it implicitly.
        this.scene.updateMatrixWorld(true);

        // 1. Unwrap UV2 atlas
        await generateAtlas(this.meshes);

        // 2. Render position + normal G-buffers in lightmap UV space
        const atlas = renderAtlas(this.renderer, this.meshes, res, true);
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
        const perTri = extractPerTriangleMaterials(merged, this.meshes);
        const matTex = buildMaterialTextures(perTri);

        // Sanity sample the first 4 triangles. With BVH spatial sort the first
        // triangle is whichever happened to land first in tree order (NOT
        // necessarily the floor). Log mesh tag + albedo so a wrong-mesh mapping
        // is immediately visible during a bake.
        const indexArr = merged.index!.array as Uint16Array | Uint32Array;
        const meshIdxArr = merged.attributes.meshIndex.array as Float32Array;
        const sample = (tri: number) => {
            const v0 = indexArr[tri * 3];
            const meshIdx = meshIdxArr[v0] | 0;
            const o = tri * 3;
            return `tri#${tri} mesh#${meshIdx} albedo=(${perTri.albedo[o].toFixed(3)}, ${perTri.albedo[o + 1].toFixed(3)}, ${perTri.albedo[o + 2].toFixed(3)})`;
        };
        if (DEBUG) console.log(
            `[baker] material textures built: ${perTri.totalTriangles} triangles, ${matTex.side}x${matTex.side} texture\n` +
            `[baker] post-BVH samples: ${sample(0)}; ${sample(1)}; ${sample(Math.floor(perTri.totalTriangles / 2))}; ${sample(perTri.totalTriangles - 1)}\n` +
            `[baker] per-mesh triangle counts (input order): [${perTri.perMeshTriangleCounts.join(', ')}]`
        );

        // Linear-space Color from the sRGB hex picker. Three's Color ctor accepts "#rrggbb"
        // as sRGB and stores linear when SRGBColorSpace is the renderer output — but Color
        // values uploaded as uniforms are taken raw, so we convert explicitly.
        const lightColorLinear = new Color(this.options.lightColor).convertSRGBToLinear();
        const skyColorLinear = new Color(this.options.skyColor).convertSRGBToLinear();

        // Mirror the bake intensity onto the realtime PointLight so Standard mode roughly
        // tracks the bake. The 30× factor is a heuristic match (visualLight uses inverse-
        // square decay; the bake's 1.0-per-cast unit is unitless), default 4.0 → ~120 — a
        // bit hotter than the previously hardcoded 80, which matches the new bake target.
        this.visualLight.color.copy(lightColorLinear);
        this.visualLight.intensity = 30 * this.options.lightIntensity;

        // 4. Spawn progressive lightmapper
        const opts: RaycastOptions = {
            resolution: res,
            casts: this.options.casts,
            filterMode: this.options.filterMode === 'linear' ? LinearFilter : NearestFilter,
            lightPosition: this.lightDummy.position,
            lightSize: this.options.lightSize,
            lightColor: lightColorLinear,
            lightIntensity: this.options.lightIntensity,
            // giIntensity removed from bake opts — Phase A.3 applies it in CompositeMaterial.
            skyColor: skyColorLinear,
            skyIntensity: this.options.skyIntensity,
            ambientDistance: this.options.ambientDistance,
            ambientLightEnabled: this.options.ambientLightEnabled,
            directLightEnabled: this.options.directLightEnabled,
            indirectLightEnabled: this.options.indirectLightEnabled,
            albedoTexture: matTex.albedoTexture,
            emissiveTexture: matTex.emissiveTexture,
            materialTextureSize: matTex.side,
        };
        // Free GPU resources from any prior bake before re-allocating. Composite/post
        // hold refs into the OLD MRT textures, so dispose them BEFORE the lightmapper
        // (which owns the underlying RT) is overwritten.
        this.composite?.dispose();
        this.composite = null;
        this.post?.dispose();
        this.post = null;
        this.lightmapper?.dispose();

        this.lightmapper = await generateLightmapper(
            this.renderer,
            this.positionTexture,
            this.normalTexture,
            bvh,
            opts
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
                aoEnabled: this.options.ambientLightEnabled 
            },
        );

        // Reset readouts. Pause flag flipped on by the render loop once
        // `lightmapper.render()` reports `done = true` (frame count reaches
        // options.targetSamples). post + composite already disposed above.
        this.options.postStatus = 'idle';
        this.options.samples = 0;
        this.options.spp = 0;
        this.options.etaSec = 0;
        this.options.pause = false;
        this.lastSamples = 0;
        this.bakeStartMs = performance.now();
        this.pane.refresh();
        this.lightmapper.render();
        this.applyRenderMode();
    }

    /** Apply a quality preset → lightMapSize, casts, targetSamples, then re-bake. */
    private applyQualityPreset(name: QualityPresetName) {
        const p = QUALITY_PRESETS[name];
        if (!p) return; // Custom = no-op
        this.options.lightMapSize  = p.lightMapSize;
        this.options.casts         = p.casts;
        this.options.targetSamples = p.targetSamples;
        this.pane.refresh();
        this.bake();
    }

    /** Run dilation + denoise on the current lightmap. Swaps the displayed texture. */
    private applyPostProcess() {
        if (!this.lightmapper || !this.positionTexture) return;
        this.options.postStatus = 'running';
        this.pane.refresh();

        this.post?.dispose();
        // Phase A.3: post-process chains off the composite (not raw direct) so denoising
        // operates on the already-combined (direct+indirect*gi)*ao signal.
        this.post = runPostProcess(
            this.renderer,
            this.composite!.texture,
            this.positionTexture,
            this.options.lightMapSize,
            {
                dilationIterations: this.options.dilationIterations,
                denoiseEnabled:     this.options.denoiseEnabled,
                denoiseSigma:       this.options.denoiseSigma,
                denoiseThreshold:   this.options.denoiseThreshold,
                denoiseKSigma:      this.options.denoiseKSigma,
            },
        );
        this.options.postStatus = (this.options.dilationIterations > 0 || this.options.denoiseEnabled)
            ? 'applied' : 'skipped';
        this.pane.refresh();
        this.applyRenderMode();
    }

    /** Revert display to the raw progressive lightmap (drops post-process result). */
    private showRaw() {
        this.post?.dispose();
        this.post = null;
        this.options.postStatus = 'idle';
        this.pane.refresh();
        this.applyRenderMode();
    }

    /**
     * 🟡 USER CONTRIBUTION REQUESTED 🟡
     *
     * Estimate seconds remaining for the current bake. Called once per frame from the
     * render loop with the latest sample count. Result lands in `options.etaSec`.
     *
     * The naive answer is:
     *   elapsed * (target - samples) / samples
     * but that swings wildly for small `samples`. Real choices:
     *   - Naive proportional (above) — simple, jumpy first second.
     *   - Rolling window — average frame time over last K frames; multiply by remaining.
     *   - Exponential moving average (EMA) — smooth, low memory, tunable α.
     *
     * Pick one. Keep it 5–10 lines. The trade-off is responsiveness (fast convergence
     * to the true rate) vs stability (no jittery countdown).
     *
     * Inputs available:
     *   - samples:     frames rendered so far (>= 1)
     *   - target:      frames target (> samples; caller already gated on this)
     *   - elapsedMs:   wall-clock since `this.bakeStartMs`
     *   - this.lastSamples / this.bakeStartMs are mutable scratch you can repurpose
     *
     * Implement and remove this banner comment when done.
     */
    private estimateTimeRemaining(samples: number, target: number, elapsedMs: number): number {
        // TODO(user): replace this stub with a real estimator (see options above).
        return Math.max(0, (elapsedMs / 1000) * (target - samples) / Math.max(1, samples));
    }

    /** Resolve the current LayerContext from cached textures. */
    private layerContext(): LayerContext {
        return {
            composite:   this.composite?.texture ?? null,
            direct:      this.lightmapper?.textures.direct   ?? null,
            indirect:    this.lightmapper?.textures.indirect ?? null,
            ao:          this.lightmapper?.textures.ao       ?? null,
            raw:         this.composite?.texture ?? null,
            post:        this.post?.texture ?? null,
            postDilated: null, // PostProcess currently only exposes final; leave for future
            positions:   this.positionTexture ?? null,
            normals:     this.normalTexture ?? null,
        };
    }

    /** Apply the active layer to every mesh. Registry lookup, no per-layer if/else. */
    private applyRenderMode() {
        const layer = LAYERS.find(l => l.id === this.options.layer) ?? LAYERS[0];
        const ctx   = this.layerContext();
        const lm    = layer.getLightMap(ctx);

        for (const m of this.meshes) {
            const mat = m.material as MeshStandardMaterial & { _originalMap?: Texture | null };
            mat.map      = layer.showAlbedo ? (mat._originalMap ?? null) : null;
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
        this.visualLight.visible = (layer.id === 'albedo');
    }

    private looping = false;
    private fpsElement: HTMLDivElement;

    private startLoop() {
        if (this.looping) return;
        this.looping = true;

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

                // Phase A.3: refresh composite every frame so layer views reflect latest accumulation.
                this.composite?.refresh();

                // Update readouts. Cheap — Pane.refresh batches DOM writes per frame.
                if (r.samples !== this.lastSamples) {
                    this.lastSamples = r.samples;
                    this.options.samples = r.samples;
                    this.options.spp     = r.samples * this.options.casts;
                    this.options.etaSec  = r.done ? 0 : this.estimateTimeRemaining(
                        r.samples, this.options.targetSamples, performance.now() - this.bakeStartMs,
                    );
                }

                if (r.done) {
                    this.options.pause = true;
                    this.options.etaSec = 0;

                    // Manual mipmap generation at the end to keep the progressive loop fast.
                    // Swapping to LinearMipMapLinearFilter enables hardware mipmap sampling.
                    const rt = this.lightmapper.renderTarget;
                    for (let i = 0; i < 3; i++) {
                        const tex = rt.texture[i];
                        tex.generateMipmaps = true;
                        tex.minFilter = LinearMipMapLinearFilter;
                        this.renderer.initTexture(tex);
                    }
                    this.composite?.texture && (this.composite.texture.needsUpdate = true);

                    this.pane.refresh();
                    if (this.options.autoApplyPost) this.applyPostProcess();
                }
            }

            this.controls.update();
            this.renderer.render(this.scene, this.camera);
        };
        tick();
    }
}
