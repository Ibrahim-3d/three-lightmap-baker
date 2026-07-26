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
    id: 'texelDensity',
    label: 'Texel Density',
    group: 'debug',
    showAlbedo: false,
    getLightMap: () => null,
  },
  {
    id: 'probes',
    label: 'Light Probes',
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

export class RenderModeRunner {
  private texelDensityMats: Map<Mesh, TexelDensityMaterial> = new Map();
  private albedoUnlitMats: Map<Mesh, MeshBasicMaterial> = new Map();
  private originalMaterials = new WeakMap<Mesh, Mesh['material']>();
  private setProbeOnly: (active: boolean) => boolean = (active) => !active;
  private beforeBake: () => void = () => {};

  constructor(private deps: RenderModeRunnerDeps) {}

  setProbeOnlyHandler(handler: (active: boolean) => boolean): void {
    this.setProbeOnly(false);
    this.setProbeOnly = handler;
  }

  setBeforeBakeHandler(handler: () => void): void {
    this.beforeBake = handler;
  }

  restoreSwappedMaterials(): void {
    const meshes = this.deps.getMeshes();
    for (const m of meshes) {
      const orig = this.originalMaterials.get(m);
      if (orig && m.material !== orig) m.material = orig as SceneObj['material'];
    }
  }

  prepareForBake(): void {
    const opts = this.deps.getOptions();
    this.beforeBake();
    this.setProbeOnly(false);
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
    const requestedLayer = LAYERS.find((l) => l.id === opts.layer) ?? LAYERS[0]!;
    const probeActive =
      requestedLayer.id === 'probes' ? this.setProbeOnly(true) : (this.setProbeOnly(false), false);
    const layer = requestedLayer.id === 'probes' && !probeActive ? LAYERS[0]! : requestedLayer;

    if (requestedLayer.id === 'probes' && probeActive) {
      this.restoreSwappedMaterials();
      visualLight.visible = false;
      return;
    }

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

    this.restoreSwappedMaterials();

    let mounted = 0;
    let nullLM = 0;
    const dummy = this.deps.getDummyLightmap();
    for (const m of meshes) {
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
      if (lm) mounted++;
      else nullLM++;
    }

    if (DEBUG) {
      console.info('[baker:debug] applyRenderMode', {
        requestedLayer: requestedLayer.id,
        effectiveLayer: layer.id,
        meshes: meshes.length,
        mounted,
        nullLM,
        groups: bakeGroups.length,
      });
    }

    (lightMarker.material as MeshBasicMaterial).color = new Color(0xffffff);
    const hasBake = bakeGroups.length > 0;
    visualLight.visible = layer.id === 'albedo' || !hasBake;
  }

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
    this.setProbeOnly(false);
    for (const mat of this.texelDensityMats.values()) mat.dispose();
    this.texelDensityMats.clear();
    for (const mat of this.albedoUnlitMats.values()) mat.dispose();
    this.albedoUnlitMats.clear();
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
