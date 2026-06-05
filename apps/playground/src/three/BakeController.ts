import {
  Color,
  DataTexture,
  DirectionalLight,
  type Mesh,
  type MeshStandardMaterial,
  type Texture,
  Vector3,
  type WebGLRenderer,
  type Scene,
} from 'three';
import {
  AOMapper,
  BakeFrameInfo,
  CompositeResult,
  Diagnostics,
  Lightmapper,
  LightmapBaker,
  LightmapBakeResult,
  LightmapBakerOptions,
  RefinementResult,
  runComposite,
  runRefinement,
} from 'baker-classic';
import type { PerMeshMap } from './types';

/**
 * One bake group = one atlas. Demo-side handle into a single group of the
 * library's `LightmapBakeResult`.
 *
 * Demo-OWNED (disposed in `disposeAllGroups`):
 *   - `composite` - view-time composite created here via `runComposite()`
 *   - `refinement` - lazy dilation/denoise RT created by `runRefinement()`
 *
 * Library-OWNED (freed by `LightmapBakeResult.dispose()` - do NOT dispose here):
 *   - `lightmapper`, `aoMapper`, `positionTexture`, `normalTexture`,
 *     BVH, per-tri material textures, atlas RT.
 */
export type BakeGroup = {
  atlasIdx: number;
  meshes: Mesh[];
  positionTexture: Texture;
  normalTexture: Texture;
  lightmapper: Lightmapper;
  /** Standalone AO bake - independent ray budget; AO-only re-bake on slider change. */
  aoMapper: AOMapper;
  composite: CompositeResult;
  refinement: RefinementResult | null;
};

/** Subset of the orchestrator's option bag this controller reads on `runBake`. */
export type BakeOptions = {
  lightMapSize: number;
  targetSamples: number;
  casts: number;
  bounces: number;
  filterMode: string;
  texelsPerMeter: number;
  safeMode: boolean;
  perMesh: PerMeshMap;
  directLightEnabled: boolean;
  lightIntensity: number;
  lightColor: string;
  lightSize: number;
  directIntensity: number;
  indirectLightEnabled: boolean;
  giIntensity: number;
  skyColor: string;
  skyIntensity: number;
  ambientLightEnabled: boolean;
  ambientDistance: number;
  aoIntensity: number;
  aoExponent: number;
  aoSamples: number;
  secondaryLightEnabled: boolean;
  secondaryDirX: number;
  secondaryDirY: number;
  secondaryDirZ: number;
  secondaryIntensity: number;
  secondaryColor: string;
  dilationIterations: number;
  denoiseEnabled: boolean;
  denoiseSigma: number;
  denoiseThreshold: number;
  denoiseKSigma: number;
};

/** Returned each RAF tick during an active bake. */
export type BakeTickResult = {
  /** True while a bake is in progress (groups exist + not done + not paused). */
  active: boolean;
  /** True once every group's lightmapper + aoMapper reports done. */
  allDone: boolean;
  /** Minimum of (bounceSamples, aoSamples) across groups. 0 if no progress yet. */
  minSamples: number;
  /** Per-atlas min(bounceSamples, aoSamples). Empty if no groups. */
  perAtlasSamples: number[];
};

/**
 * Owns the LightmapBaker call site, bake-state, dummy-LM shader-variant pin,
 * AO-only re-bake, refinement, and the view-time composite for each atlas.
 *
 * The orchestrator's RAF drives the bake forward by calling `tick()` every
 * frame; this controller knows nothing about timing, FPS, or the DOM. Likewise
 * it does NOT mount textures onto materials - that lives in `modes.ts`
 * (`RenderModeRunner.apply`).
 */
export class BakeController {
  bakeGroups: BakeGroup[] = [];
  meshToGroup: Map<Mesh, BakeGroup> = new Map();
  bakeResult: LightmapBakeResult | null = null;

  /** Set true on the RAF immediately after `runBake` returns - orchestrator instruments that frame. */
  firstPostBakeRender = false;

  diag: Diagnostics;

  /** Progress reporter used during bake - orchestrator sets this once at startup. */
  onProgress: ((info: BakeFrameInfo) => void) | null = null;

  private dummyLightmap: Texture | null = null;

  constructor(
    private renderer: WebGLRenderer,
    private scene: Scene,
  ) {
    this.diag = new Diagnostics(renderer);
  }

  /** 1×1 white texture reused across meshes - placeholder lightmap that pins the
   *  USE_LIGHTMAP shader variant so the first post-bake render needs zero new
   *  programs (NVIDIA D3D11 TDR mitigation, see Session 12 in progress.md). */
  getDummyLightmap(): Texture {
    if (this.dummyLightmap) return this.dummyLightmap;
    const data = new Uint8Array([255, 255, 255, 255]);
    const tex = new DataTexture(data, 1, 1);
    tex.needsUpdate = true;
    tex.channel = 2;
    this.dummyLightmap = tex;
    return tex;
  }

  /** Attach the dummy lightmap (intensity=0) to every mesh material. Called by
   *  SceneController after scene rebuild + GLB import. Must run before the first
   *  scene render or the USE_LIGHTMAP variant won't be pinned. */
  installDummyLightmaps(meshes: ReadonlyArray<Mesh>): void {
    const dummy = this.getDummyLightmap();
    for (const m of meshes) {
      const mat = m.material as MeshStandardMaterial;
      if (!mat) continue;
      mat.lightMap = dummy;
      mat.lightMapIntensity = 0;
      mat.needsUpdate = true;
    }
  }

  /** Tear down every group + its GPU resources. Safe to call repeatedly.
   *  Releases demo-owned per-group artifacts (composite, refinement) and then
   *  routes library-owned resources (lightmapper/aoMapper/atlas/matTex/BVH)
   *  through a single `LightmapBakeResult.dispose()` call. */
  disposeAllGroups(): void {
    for (const g of this.bakeGroups) {
      g.refinement?.dispose();
      g.composite.dispose();
    }
    this.bakeGroups = [];
    this.meshToGroup.clear();
    this.bakeResult?.dispose();
    this.bakeResult = null;
  }

  /**
   * Full bake. Returns when LightmapBaker.bake() resolves and per-group view-time
   * composites are built. RAF then drives the accumulators forward via `tick()`.
   *
   * Note: this does NOT mount textures onto materials. The orchestrator should
   * call its RenderModeRunner.apply after this returns.
   */
  async runBake(
    meshes: ReadonlyArray<Mesh>,
    lightPosition: Vector3,
    options: BakeOptions,
  ): Promise<void> {
    if (!meshes.length) return;

    this.diag.snap('bake() entry');

    const res = options.lightMapSize;
    this.scene.updateMatrixWorld(true);

    const bakeMeshes = meshes.filter((m) => !(options.perMesh[m.uuid]?.exclude === true));
    if (!bakeMeshes.length) {
      console.warn('[baker] all meshes excluded - nothing to bake');
      return;
    }

    // Tear down previous bake (disposes both demo-owned and library-owned resources).
    this.disposeAllGroups();

    // Secondary directional light: collectLightsFromScene reads scene lights only,
    // so the demo's UI-driven directional must be parented to the scene for the bake.
    let tempSecondaryLight: DirectionalLight | null = null;
    if (options.secondaryLightEnabled) {
      tempSecondaryLight = new DirectionalLight(
        new Color(options.secondaryColor).convertSRGBToLinear(),
        options.secondaryIntensity,
      );
      const dir = new Vector3(
        options.secondaryDirX,
        options.secondaryDirY,
        options.secondaryDirZ,
      ).normalize();
      tempSecondaryLight.position.copy(dir).multiplyScalar(-10);
      this.scene.add(tempSecondaryLight);
    }

    // Build per-mesh overrides for the library (density × exclude).
    const perMesh: LightmapBakerOptions['perMesh'] = {};
    for (const m of meshes) {
      const e = options.perMesh[m.uuid];
      if (!e) continue;
      const entry: { density?: number; exclude?: boolean } = {};
      if (e.scaleInLightmap !== undefined && e.scaleInLightmap !== 1.0)
        entry.density = e.scaleInLightmap;
      if (e.exclude) entry.exclude = true;
      if (entry.density !== undefined || entry.exclude) perMesh[m.uuid] = entry;
    }

    const opts: LightmapBakerOptions = {
      resolution: res,
      samples: options.targetSamples,
      castsPerFrame: options.casts,
      bounces: options.bounces,
      filtering: options.filterMode === 'linear' ? 'linear' : 'nearest',
      texelsPerMeter: options.texelsPerMeter,
      perMesh,
      denoise: false,
      refinementOptions: { dilationIterations: 0, denoiseEnabled: false },
      light: {
        position: lightPosition.clone(),
        color: options.lightColor,
        intensity: options.lightIntensity,
        size: options.lightSize,
        enabled: options.directLightEnabled,
      },
      gi: {
        enabled: options.indirectLightEnabled,
        intensity: options.giIntensity,
        skyColor: options.skyColor,
        skyIntensity: options.skyIntensity,
      },
      ao: {
        enabled: options.ambientLightEnabled,
        distance: options.ambientDistance,
        intensity: options.aoIntensity,
        exponent: options.aoExponent,
        samples: options.aoSamples,
      },
      timeoutProtection: { safeMode: options.safeMode },
    };

    let result: LightmapBakeResult;
    try {
      const baker = new LightmapBaker(this.renderer, opts);
      result = await baker.bake(this.scene, {
        onFrame: (info: BakeFrameInfo) => {
          // Refresh demo's per-group composites so view-time intensity sliders
          // see the latest accumulator state.
          const g = this.bakeGroups[info.groupIndex];
          if (g) g.composite.refresh();

          if (info.bounceSamples % 30 === 0 || info.done) {
            this.diag.snap(
              `bake RAF samples=${info.bounceSamples}/${info.targetSamples} done=${info.done}`,
            );
          }

          this.onProgress?.(info);
        },
      });
    } finally {
      if (tempSecondaryLight) this.scene.remove(tempSecondaryLight);
    }

    // Adapter: BakeGroupView → BakeGroup.
    this.bakeResult = result;
    this.bakeGroups = [];
    this.meshToGroup.clear();
    for (let i = 0; i < result.groups.length; i++) {
      const gv = result.groups[i]!;
      const composite = runComposite(
        this.renderer,
        {
          direct: gv.lightmapper.textures.direct,
          indirect: gv.lightmapper.textures.indirect,
          ao: gv.aoMapper.texture,
        },
        gv.resolution,
        {
          directIntensity: options.directIntensity,
          giIntensity: options.giIntensity,
          aoEnabled: options.ambientLightEnabled,
          aoIntensity: options.aoIntensity,
          aoExponent: options.aoExponent,
        },
      );
      const group: BakeGroup = {
        atlasIdx: i,
        meshes: [...gv.meshes],
        positionTexture: gv.textures.position,
        normalTexture: gv.textures.normal,
        lightmapper: gv.lightmapper,
        aoMapper: gv.aoMapper,
        composite,
        refinement: null,
      };
      this.bakeGroups.push(group);
      for (const m of group.meshes) this.meshToGroup.set(m, group);
    }

    this.diag.snap('after baker.bake() return, before applyRenderMode');
    this.firstPostBakeRender = true;
  }

  /**
   * RAF bake step. Returns null when no bake active. Returns aggregate sample
   * counts otherwise. Orchestrator handles progress DOM + ETA from the return value.
   *
   * Also calls each group's composite.refresh() so layer views reflect the
   * latest accumulator state.
   */
  tick(): BakeTickResult | null {
    if (!this.bakeGroups.length) return null;

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

    // Refresh composite per group so layer views reflect the latest accumulation.
    if (!allDone) {
      for (const g of this.bakeGroups) g.composite.refresh();
    }

    return { active: !allDone, allDone, minSamples, perAtlasSamples };
  }

  /** Push uniform overrides into every group's view-time composite. */
  refreshAllComposites(overrides: {
    directIntensity?: number;
    giIntensity?: number;
    aoEnabled?: boolean;
    aoIntensity?: number;
    aoExponent?: number;
  }): void {
    for (const g of this.bakeGroups) g.composite.refresh(overrides);
  }

  /**
   * AO-only re-bake - delegates to LightmapBakeResult.rebakeAO and re-binds
   * each demo group's view-time composite to the freshly-built AO texture.
   */
  async runAOOnly(opts: {
    samples: number;
    distance: number;
    targetSamples: number;
  }): Promise<void> {
    if (!this.bakeGroups.length || !this.bakeResult) return;
    await this.bakeResult.rebakeAO(opts);
    const fresh = this.bakeResult.groups;
    for (let i = 0; i < this.bakeGroups.length; i++) {
      const g = this.bakeGroups[i]!;
      const gv = fresh[i];
      if (!gv) continue;
      g.aoMapper = gv.aoMapper;
      g.composite.refresh({ aoTex: gv.aoMapper.texture });
    }
  }

  /**
   * Run dilation+denoise refinement on every group. `onProgress(groupIndex, fraction)`
   * fires throughout. After the call, every group has a fresh refinement RT;
   * orchestrator should re-run RenderModeRunner.apply to mount.
   */
  async runRefinement(
    options: {
      dilationIterations: number;
      denoiseEnabled: boolean;
      denoiseSigma: number;
      denoiseThreshold: number;
      denoiseKSigma: number;
    },
    res: number,
    onProgress: (groupIndex: number, fraction: number) => void,
  ): Promise<void> {
    if (!this.bakeGroups.length) return;

    for (let i = 0; i < this.bakeGroups.length; i++) {
      const g = this.bakeGroups[i]!;
      g.refinement?.dispose();
      g.refinement = await runRefinement(
        this.renderer,
        g.composite.texture,
        g.positionTexture,
        res,
        options,
        (progress) => onProgress(i, progress),
      );
    }
  }

  /** Drop every group's refinement RT (revert to raw composite view). */
  clearRefinement(): void {
    for (const g of this.bakeGroups) {
      g.refinement?.dispose();
      g.refinement = null;
    }
  }
}
