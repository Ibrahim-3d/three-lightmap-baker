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

export type BakeGroup = {
  atlasIdx: number;
  meshes: Mesh[];
  positionTexture: Texture;
  normalTexture: Texture;
  lightmapper: Lightmapper;
  aoMapper: AOMapper;
  composite: CompositeResult;
  refinement: RefinementResult | null;
};

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

export type RunBakeOptions = {
  signal?: AbortSignal;
};

export type BakeTickResult = {
  active: boolean;
  allDone: boolean;
  minSamples: number;
  perAtlasSamples: number[];
};

export class BakeController {
  bakeGroups: BakeGroup[] = [];
  meshToGroup: Map<Mesh, BakeGroup> = new Map();
  restoredLightmaps: Map<Mesh, Texture> = new Map();
  bakeResult: LightmapBakeResult | null = null;
  firstPostBakeRender = false;
  diag: Diagnostics;
  onProgress: ((info: BakeFrameInfo) => void) | null = null;
  private dummyLightmap: Texture | null = null;

  constructor(
    private renderer: WebGLRenderer,
    private scene: Scene,
  ) {
    this.diag = new Diagnostics(renderer);
  }

  getDummyLightmap(): Texture {
    if (this.dummyLightmap) return this.dummyLightmap;
    const data = new Uint8Array([255, 255, 255, 255]);
    const tex = new DataTexture(data, 1, 1);
    tex.needsUpdate = true;
    tex.channel = 2;
    this.dummyLightmap = tex;
    return tex;
  }

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

  disposeAllGroups(): void {
    for (const g of this.bakeGroups) {
      g.refinement?.dispose();
      g.composite.dispose();
    }
    const restored = new Set(this.restoredLightmaps.values());
    for (const tex of restored) tex.dispose();
    this.restoredLightmaps.clear();
    this.bakeGroups = [];
    this.meshToGroup.clear();
    this.bakeResult?.dispose();
    this.bakeResult = null;
  }

  restoreLightmaps(
    entries: ReadonlyArray<{ meshes: ReadonlyArray<Mesh>; texture: Texture }>,
  ): void {
    this.disposeAllGroups();
    for (const entry of entries) {
      entry.texture.channel = 2;
      for (const mesh of entry.meshes) {
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        for (const mat of mats) {
          if (mat && 'lightMap' in mat) {
            const m = mat as MeshStandardMaterial;
            m.lightMap = entry.texture;
            m.lightMapIntensity = 1;
            m.needsUpdate = true;
          }
        }
        this.restoredLightmaps.set(mesh, entry.texture);
      }
    }
  }

  getRestoredLightmap(mesh: Mesh): Texture | null {
    return this.restoredLightmaps.get(mesh) ?? null;
  }

  async runBake(
    meshes: ReadonlyArray<Mesh>,
    lightPosition: Vector3,
    options: BakeOptions,
    runOptions: RunBakeOptions = {},
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

    this.disposeAllGroups();

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
        signal: runOptions.signal,
        onFrame: (info: BakeFrameInfo) => {
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

    this.bakeResult = result;
    this.bakeGroups = [];
    this.meshToGroup.clear();
    for (let i = 0; i < result.groups.length; i++) {
      const gv = result.groups[i];
      if (!gv) throw new Error(`[baker] missing result group ${i}`);
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

    if (!allDone) {
      for (const g of this.bakeGroups) g.composite.refresh();
    }

    return { active: !allDone, allDone, minSamples, perAtlasSamples };
  }

  refreshAllComposites(overrides: {
    directIntensity?: number;
    giIntensity?: number;
    aoEnabled?: boolean;
    aoIntensity?: number;
    aoExponent?: number;
  }): void {
    for (const g of this.bakeGroups) g.composite.refresh(overrides);
  }

  async runAOOnly(opts: {
    samples: number;
    distance: number;
    targetSamples: number;
  }): Promise<void> {
    if (!this.bakeGroups.length || !this.bakeResult) return;
    await this.bakeResult.rebakeAO(opts);
    const fresh = this.bakeResult.groups;
    for (let i = 0; i < this.bakeGroups.length; i++) {
      const g = this.bakeGroups[i];
      if (!g) throw new Error(`[baker] missing demo bake group ${i}`);
      const gv = fresh[i];
      if (!gv) continue;
      g.aoMapper = gv.aoMapper;
      g.composite.refresh({ aoTex: gv.aoMapper.texture });
    }
  }

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
      const g = this.bakeGroups[i];
      if (!g) throw new Error(`[baker] missing demo bake group ${i}`);
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

  clearRefinement(): void {
    for (const g of this.bakeGroups) {
      g.refinement?.dispose();
      g.refinement = null;
    }
  }
}
