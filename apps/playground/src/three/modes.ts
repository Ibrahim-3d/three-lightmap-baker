import {
  Color,
  type Mesh,
  MeshBasicMaterial,
  type MeshStandardMaterial,
  type RectAreaLight,
  type Texture,
} from 'three';
import { resolveDensityTexelsPerMeter, TexelDensityMaterial } from 'baker-classic';
import type { BakeGroup } from './BakeController';
import type { RenderModeOptions, SceneObj } from './types';

/** Flip to true locally when debugging render-mode swaps. CLAUDE.md convention. */
const DEBUG = false;

export type LayerContext = { group: BakeGroup };

export type Layer = {
  id: string;
  label: string;
  group: 'output' | 'debug';
  showAlbedo: boolean;
  getLightMap: (ctx: LayerContext) => Texture | null;
};

export const LAYERS: Layer[] = [
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
    // Material-swap layer: replaces mesh material with MeshBasicMaterial that
    // shows the albedo texture WITHOUT any lighting, env probe, or lightmap.
    // Pure unlit diffuse - best for inspecting texture content & uv mapping.
    id: 'albedoUnlit',
    label: 'Albedo (Unlit)',
    group: 'debug',
    showAlbedo: true,
    getLightMap: () => null,
  },
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
    // apply() special-cases this id and restores originals on switch-away.
    id: 'texelDensity',
    label: 'Texel Density',
    group: 'debug',
    showAlbedo: false,
    getLightMap: () => null,
  },
];

export const LAYER_OPTIONS: Record<string, string> = Object.fromEntries(
  LAYERS.map((l) => [l.label, l.id]),
);

export const FilterOptions = {
  Linear: 'linear',
  Nearest: 'nearest',
};

/** Dependencies the runner reads on every `apply()` / `refreshTexelDensityMaterials()` call.
 *  Passed as getters because the orchestrator may reassign `meshes` / `bakeGroups`
 *  between calls (e.g. on GLB import).
 */
export type RenderModeRunnerDeps = {
  getMeshes(): ReadonlyArray<SceneObj>;
  getBakeGroups(): ReadonlyArray<BakeGroup>;
  getMeshToGroup(): Map<Mesh, BakeGroup>;
  getOptions(): RenderModeOptions;
  getVisualLight(): RectAreaLight;
  getLightMarker(): Mesh;
  getDummyLightmap(): Texture;
  getRestoredLightmap(mesh: Mesh): Texture | null;
};

/**
 * Owns view-time render-mode swapping for the demo. Lazy-creates per-mesh
 * TexelDensityMaterial caches and the WeakMap of original materials so the
 * "Texel Density" layer can swap and restore non-destructively.
 *
 * Pure-ish: holds two maps but reads everything else from the deps getters.
 */
export class RenderModeRunner {
  private texelDensityMats: Map<Mesh, TexelDensityMaterial> = new Map();
  private albedoUnlitMats: Map<Mesh, MeshBasicMaterial> = new Map();
  private originalMaterials = new WeakMap<Mesh, Mesh['material']>();

  constructor(private deps: RenderModeRunnerDeps) {}

  restoreSwappedMaterials(): void {
    const meshes = this.deps.getMeshes();
    for (const m of meshes) {
      const orig = this.originalMaterials.get(m);
      if (orig && m.material !== orig) m.material = orig as SceneObj['material'];
    }
  }

  prepareForBake(): void {
    const opts = this.deps.getOptions();
    this.restoreSwappedMaterials();
    this.deps.getVisualLight().visible = opts.directLightEnabled;
    const dummy = this.deps.getDummyLightmap();
    for (const m of this.deps.getMeshes()) {
      for (const mat of this.standardMaterials(m)) {
        mat.map = mat._originalMap ?? null;
        mat.lightMap = dummy;
        mat.lightMapIntensity = 0;
      }
    }
  }

  apply(): void {
    const opts = this.deps.getOptions();
    const meshes = this.deps.getMeshes();
    const bakeGroups = this.deps.getBakeGroups();
    const meshToGroup = this.deps.getMeshToGroup();
    const visualLight = this.deps.getVisualLight();
    const lightMarker = this.deps.getLightMarker();
    const layer = LAYERS.find((l) => l.id === opts.layer) ?? LAYERS[0]!;

    // Material-swap layer (Texel Density).
    if (layer.id === 'texelDensity') {
      this.refreshTexelDensityMaterials();
      for (const m of meshes) {
        if (!this.originalMaterials.has(m)) this.originalMaterials.set(m, m.material);
        const tdm = this.texelDensityMats.get(m);
        if (tdm) m.material = tdm as unknown as SceneObj['material'];
      }
      visualLight.visible = false;
      return;
    }

    // Material-swap layer (Albedo Unlit) - pure diffuse, no lighting at all.
    if (layer.id === 'albedoUnlit') {
      const live = new Set<Mesh>(meshes);
      for (const m of this.albedoUnlitMats.keys()) {
        if (!live.has(m)) {
          this.albedoUnlitMats.get(m)?.dispose();
          this.albedoUnlitMats.delete(m);
        }
      }
      for (const m of meshes) {
        if (!this.originalMaterials.has(m)) this.originalMaterials.set(m, m.material);
        const origStd = this.standardMaterialsFrom(this.originalMaterials.get(m))[0];
        let basic = this.albedoUnlitMats.get(m);
        if (!basic) {
          basic = new MeshBasicMaterial({ color: 0xffffff });
          this.albedoUnlitMats.set(m, basic);
        }
        basic.map = origStd?._originalMap ?? origStd?.map ?? null;
        basic.color = origStd?.color ? origStd.color.clone() : new Color(0xffffff);
        basic.needsUpdate = true;
        m.material = basic as unknown as SceneObj['material'];
      }
      visualLight.visible = false;
      return;
    }

    // Restore originals if we just left a swap layer.
    this.restoreSwappedMaterials();

    let mounted = 0;
    let nullLM = 0;
    const dummy = this.deps.getDummyLightmap();
    for (const m of meshes) {
      // Excluded mesh OR no group yet (pre-bake): keep dummy lightmap with
      // intensity=0 instead of mat.lightMap=null. Setting null removes the
      // USE_LIGHTMAP define → forces a shader recompile → NVIDIA D3D11 TDR.
      const group = meshToGroup.get(m);
      const restored =
        !group && (layer.id === 'combined' || layer.id === 'combinedPost')
          ? this.deps.getRestoredLightmap(m)
          : null;
      const lm = group ? layer.getLightMap({ group }) : restored;
      const mats = this.standardMaterials(m);
      for (const mat of mats) {
        mat.map = layer.showAlbedo ? (mat._originalMap ?? null) : null;
        if (lm) {
          mat.lightMap = lm;
          mat.lightMap.channel = 2;
          mat.lightMapIntensity = 1;
        } else {
          mat.lightMap = dummy;
          mat.lightMapIntensity = 0;
        }
      }
      if (lm) {
        mounted++;
      } else {
        nullLM++;
      }
      // Intentionally NOT setting mat.needsUpdate - variant pinned at scene init.
    }
    if (DEBUG) {
      console.info('[baker:debug] applyRenderMode', {
        layer: layer.id,
        meshes: meshes.length,
        mounted,
        nullLM,
        groups: bakeGroups.length,
      });
    }

    (lightMarker.material as MeshBasicMaterial).color = new Color(0xffffff);

    // Visual disc light is the viewport "scene lamp". On.
    //   - Albedo layer (always - that layer is the unlit/textured preview).
    //   - Any output layer when no bake exists yet. Without this, Combined
    //     pre-bake mounts a dummy lightmap with intensity 0 AND no scene
    //     lights → MeshStandardMaterial renders fully black. With it on,
    //     pre-bake Combined shows the scene lit by the viewport lamp; once
    //     the bake completes, lightMap kicks in (intensity 1) and the lamp
    //     turns off so the user is judging the baked lighting alone.
    const hasBake = bakeGroups.length > 0;
    visualLight.visible = layer.id === 'albedo' || !hasBake;
  }

  /**
   * Sync per-mesh TexelDensityMaterial cache with current mesh list + options.
   * Density is scene-relative: 1 fills one atlas, then per-mesh scale adjusts
   * local allocation.
   * Cheap - uniform writes only. Triggered on Texel Density layer activation,
   * per-mesh density slider, global density multiplier, and lightMapSize changes.
   */
  refreshTexelDensityMaterials(): void {
    const opts = this.deps.getOptions();
    const meshes = this.deps.getMeshes();
    const live = new Set<Mesh>(meshes);
    const perMeshScale: Record<string, number> = {};
    for (const m of meshes) {
      const scale = opts.perMesh[m.uuid]?.scaleInLightmap ?? 1.0;
      if (scale !== 1.0) perMeshScale[m.uuid] = scale;
    }
    const resolvedTexelsPerMeter = resolveDensityTexelsPerMeter(meshes, {
      atlasResolution: opts.lightMapSize,
      densityMultiplier: opts.texelsPerMeter,
      perMeshScale,
    });

    for (const m of this.texelDensityMats.keys()) {
      if (!live.has(m)) {
        this.texelDensityMats.get(m)?.dispose();
        this.texelDensityMats.delete(m);
      }
    }
    for (const m of meshes) {
      const scale = opts.perMesh[m.uuid]?.scaleInLightmap ?? 1.0;
      const target = resolvedTexelsPerMeter * scale;
      let mat = this.texelDensityMats.get(m);
      if (!mat) {
        mat = new TexelDensityMaterial({
          texelsPerMeter: target,
          lightmapSize: opts.lightMapSize,
        });
        this.texelDensityMats.set(m, mat);
      } else {
        mat.setTexelsPerMeter(target);
        mat.setLightmapSize(opts.lightMapSize);
      }
    }
  }

  dispose(): void {
    for (const mat of this.texelDensityMats.values()) mat.dispose();
    this.texelDensityMats.clear();
  }

  private standardMaterials(
    mesh: Mesh,
  ): Array<MeshStandardMaterial & { _originalMap?: Texture | null }> {
    return this.standardMaterialsFrom(mesh.material);
  }

  private standardMaterialsFrom(
    raw: Mesh['material'] | undefined,
  ): Array<MeshStandardMaterial & { _originalMap?: Texture | null }> {
    const mats = Array.isArray(raw) ? raw : raw ? [raw] : [];
    return mats.filter((mat): mat is MeshStandardMaterial & { _originalMap?: Texture | null } => {
      return !!mat && 'lightMap' in mat && 'map' in mat;
    });
  }
}
