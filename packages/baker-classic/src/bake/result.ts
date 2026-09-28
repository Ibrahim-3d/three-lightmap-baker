import { runAnimationTask, abortError } from './animationTask';
import { Mesh, Texture, type WebGLRenderer } from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import { generateAOMapper, type PostProcessOptions } from '../lightmap';
import type {
  CompositeResult,
  DownscaleResult,
  LightmapPassBackend,
  PostProcessResult,
} from '../gpu/PassBackend';
import type { ExportFormat } from '../utils/exportLightmap';
import { mountMeshLightmaps } from '../utils/LightmapMaterials';
import { BakeError } from '../errors';
import type { BakeHooks, BakeStats, BakeGroupView } from './types';
import type { GroupInternals } from './internals';
import {
  installRendererLossGuard,
  isRendererAdapterLost,
  rendererLossMessage,
  type LightmapRendererAdapter,
} from '../rendererAdapter';

/** Result of a successful bake. Owns the GPU resources - call `dispose()` to release. */
export class LightmapBakeResult {
  private disposed = false;
  private aoJob: AbortController | null = null;
  private persistentMaterialMount: {
    restore: () => void;
    lightmaps: Map<Mesh, Texture>;
  } | null = null;

  constructor(
    private readonly rendererAdapter: LightmapRendererAdapter,
    private readonly passBackend: LightmapPassBackend,
    private readonly meshLightmaps: Map<Mesh, Texture>,
    private readonly meshResolutions: Map<Mesh, number>,
    public readonly stats: BakeStats,
    private readonly internals: {
      groups: GroupInternals[];
      bvh: MeshBVH;
      refinementOptions: PostProcessOptions;
      denoise: boolean;
      matTexDispose: () => void;
      sceneDispose?: () => void;
    },
  ) {}

  private get renderer(): WebGLRenderer {
    return this.rendererAdapter.renderer;
  }

  /**
   * Returns the per-mesh lightmap textures. Meshes in the same resolution group
   * share a texture. Excluded meshes are not present in the map.
   */
  get lightmaps(): Map<Mesh, Texture> {
    return new Map(this.meshLightmaps);
  }

  /**
   * Live BVH used by every group's mappers - covers the FULL bake set
   * (including excluded meshes, since they cast shadows / contribute GI).
   * Read-only handle; lifetime is owned by the result. Useful for advanced
   * callers that want to reuse the BVH for their own ray queries.
   */
  get bvh(): MeshBVH {
    return this.internals.bvh;
  }

  /**
   * Public per-group view - every texture produced by every group's bake.
   * Use this for advanced layer mounting (debug visualizations of Direct,
   * Indirect, AO, Position, Normal channels), multi-atlas viewers, or
   * manual refinement re-runs against the live composite.
   *
   * Texture refs are STABLE - store the ref, not a copy. Three.js will see
   * updates automatically on accumulation, AO re-bake, or manual refinement.
   *
   * Cost: O(groups) - each call rebuilds the wrapper array.
   */
  get groups(): ReadonlyArray<BakeGroupView> {
    return this.internals.groups.map((g) => ({
      meshes: g.meshes as ReadonlyArray<Mesh>,
      resolution: g.resolution,
      internalResolution: g.internalResolution,
      lightmapper: g.lightmapper,
      aoMapper: g.aoMapper,
      textures: {
        direct: g.lightmapper.textures.direct,
        indirect: g.lightmapper.textures.indirect,
        ao: g.aoMapper.texture,
        composite: g.composite.texture,
        refinement: g.refinement?.texture ?? null,
        position: g.positionTex,
        normal: g.normalTex,
        surfaceAlbedo: g.surfaceAlbedoTex,
      },
    }));
  }

  /**
   * Find the group containing a given mesh. Used by per-mesh layer mounting
   * (e.g. mounting the right group's composite on a mesh's `material.lightMap`
   * when meshes from different groups share the scene). Returns `null` if
   * the mesh was excluded or not part of the bake.
   */
  getGroupForMesh(mesh: Mesh): BakeGroupView | null {
    for (const g of this.internals.groups) {
      if (g.meshes.includes(mesh)) {
        return {
          meshes: g.meshes as ReadonlyArray<Mesh>,
          resolution: g.resolution,
          internalResolution: g.internalResolution,
          lightmapper: g.lightmapper,
          aoMapper: g.aoMapper,
          textures: {
            direct: g.lightmapper.textures.direct,
            indirect: g.lightmapper.textures.indirect,
            ao: g.aoMapper.texture,
            composite: g.composite.texture,
            refinement: g.refinement?.texture ?? null,
            position: g.positionTex,
            normal: g.normalTex,
            surfaceAlbedo: g.surfaceAlbedoTex,
          },
        };
      }
    }
    return null;
  }

  /** Mounts each mesh's atlas texture as `mat.lightMap` (channel = 2). */
  apply(): void {
    if (this.disposed) throw new Error('Bake result is disposed');
    if (
      this.persistentMaterialMount &&
      mapsHaveSameEntries(this.persistentMaterialMount.lightmaps, this.meshLightmaps)
    ) {
      return;
    }

    this.persistentMaterialMount?.restore();
    this.persistentMaterialMount = null;
    const lightmaps = new Map(this.meshLightmaps);
    const restore = mountMeshLightmaps(
      [...lightmaps].map(([mesh, lightMap]) => ({ mesh, lightMap })),
      { persistent: true },
    );
    this.persistentMaterialMount = { restore, lightmaps };
  }

  /**
   * Trigger browser downloads of all group atlases. `pathOrName` is used as a
   * basename hint; each group appends `_groupN` when there are multiple groups.
   */
  async export(
    pathOrName: string = 'lightmap',
    opts: { format?: ExportFormat } = {},
  ): Promise<void> {
    const fmt = opts.format ?? 'png';
    const base =
      pathOrName
        .replace(/[\/\\]+$/, '')
        .split(/[\/\\]/)
        .pop() || 'lightmap';
    const groups = this.internals.groups;
    for (let i = 0; i < groups.length; i++) {
      const g = groups[i];
      if (!g) throw new Error(`[baker] missing bake group ${i}`);
      // When superSample > 1, export the downscaled (target-res) texture, not
      // the internal-res source - exportLightmap reads pixels at the supplied
      // resolution and would otherwise read past the end of the buffer.
      const finalTex = g.downscale?.texture ?? g.refinement?.texture ?? g.composite.texture;
      const name = groups.length > 1 ? `${base}_group${i}` : base;
      await this.passBackend.exportLightmap(finalTex, g.resolution, name, fmt);
    }
  }

  dispose(): void {
    if (this.disposed) return;
    this.disposed = true;
    this.aoJob?.abort(abortError());
    this.persistentMaterialMount?.restore();
    this.persistentMaterialMount = null;
    for (const g of this.internals.groups) {
      g.downscale?.dispose();
      g.refinement?.dispose();
      g.composite.dispose();
      g.aoMapper.dispose();
      g.lightmapper.dispose();
      g.atlasDispose();
    }
    this.internals.matTexDispose();
    this.internals.sceneDispose?.();
    this.internals.groups.length = 0;
    this.meshLightmaps.clear();
    this.meshResolutions.clear();
  }

  /**
   * View-time AO tweak - applies new intensity / exponent / enabled to every
   * group's composite. Sub-millisecond per group; no re-bake. Returns
   * immediately. Use this for `aoIntensity`, `aoExponent`, and `aoEnabled`.
   */
  refreshAO(opts: { intensity?: number; exponent?: number; enabled?: boolean }): void {
    for (const g of this.internals.groups) {
      g.composite.refresh({
        aoIntensity: opts.intensity,
        aoExponent: opts.exponent,
        aoEnabled: opts.enabled,
      });
    }
  }

  /**
   * Re-bake AO only - re-runs every group's AO mapper with the supplied
   * options, refreshes its composite to read the new AO texture, and re-runs
   * refinement. Bounce textures (direct/indirect) are NOT touched. Cost ≈
   * (AO ray cost / total bake ray cost) × original bake time, typically
   * 5–15% of a full bake.
   *
   * Use for `aoSamples` / `ambientDistance` slider changes.
   * Use `refreshAO()` instead for `aoIntensity` / `aoExponent` / `aoEnabled`.
   */
  async rebakeAO(
    opts: { samples: number; distance: number; targetSamples: number },
    hooks: BakeHooks = {},
  ): Promise<void> {
    if (this.disposed || this.aoJob)
      throw new BakeError('Result is disposed or an AO rebake is already active', 'validation');
    if (
      !Number.isInteger(opts.samples) ||
      opts.samples < 0 ||
      opts.samples > 64 ||
      !Number.isInteger(opts.targetSamples) ||
      opts.targetSamples < 1 ||
      opts.targetSamples > 4096 ||
      !Number.isFinite(opts.distance) ||
      opts.distance < 0
    )
      throw new BakeError('Invalid AO rebake options', 'validation');
    const controller = new AbortController();
    this.aoJob = controller;
    const signal = hooks.signal;
    const cancel = (): void => controller.abort(signal?.reason ?? abortError());
    const lossMessage = rendererLossMessage(this.rendererAdapter);
    const lost = (): void =>
      controller.abort(new BakeError(`${lossMessage} during AO rebake`, 'context-loss'));
    let releaseLossGuard = (): void => {};
    const staged: Array<{
      group: GroupInternals;
      ao: ReturnType<typeof generateAOMapper>;
      composite: CompositeResult;
      refinement: PostProcessResult | null;
      downscale: DownscaleResult | null;
    }> = [];
    let committed = false;
    try {
      signal?.addEventListener('abort', cancel, { once: true });
      releaseLossGuard = installRendererLossGuard(this.rendererAdapter, lost);
      if (signal?.aborted) cancel();
      const groups = this.internals.groups;
      for (let gi = 0; gi < groups.length; gi++) {
        if (controller.signal.aborted) throw controller.signal.reason;
        const group = groups[gi];
        if (!group) continue;
        const ao = generateAOMapper(
          this.renderer,
          group.positionTex,
          group.normalTex,
          this.internals.bvh,
          {
            resolution: group.internalResolution,
            aoSamples: opts.samples,
            ambientDistance: opts.distance,
            targetSamples: opts.targetSamples,
          },
        );
        let composite: CompositeResult;
        try {
          composite = this.passBackend.createComposite(
            {
              direct: group.lightmapper.textures.direct,
              indirect: group.lightmapper.textures.indirect,
              ao: ao.texture,
            },
            group.internalResolution,
            group.composite.getOptions(),
          );
        } catch (error) {
          ao.dispose();
          throw error;
        }
        const entry = {
          group,
          ao,
          composite,
          refinement: null as PostProcessResult | null,
          downscale: null as DownscaleResult | null,
        };
        staged.push(entry);
        await runAnimationTask(() => {
          if (isRendererAdapterLost(this.rendererAdapter))
            throw new BakeError(lossMessage, 'context-loss');
          const result = ao.renderTiled(8);
          if (result.sampleComplete) composite.refresh();
          hooks.onProgress?.('bake', (gi + result.samples / opts.targetSamples) / groups.length);
          hooks.onFrame?.({
            groupIndex: gi,
            totalGroups: groups.length,
            bounceSamples: 0,
            aoSamples: result.samples,
            targetSamples: opts.targetSamples,
            done: result.done,
            compositeTexture: composite.texture,
            directTexture: group.lightmapper.textures.direct,
            indirectTexture: group.lightmapper.textures.indirect,
            aoTexture: ao.texture,
          });
          return result.done;
        }, controller.signal);
        if (group.refinement)
          entry.refinement = await this.passBackend.runPostProcess(
            composite.texture,
            group.positionTex,
            group.internalResolution,
            this.internals.refinementOptions,
            undefined,
            { signal: controller.signal, normals: group.normalTex },
          );
        if (group.downscale)
          entry.downscale = this.passBackend.createDownscale(
            entry.refinement?.texture ?? composite.texture,
            group.resolution,
          );
      }
      if (controller.signal.aborted || this.disposed)
        throw controller.signal.reason ?? abortError();
      for (const entry of staged) {
        const { group, ao, composite, refinement, downscale } = entry;
        group.aoMapper.dispose();
        group.composite.dispose();
        group.refinement?.dispose();
        group.downscale?.dispose();
        group.aoMapper = ao;
        group.composite = composite;
        group.refinement = refinement;
        group.downscale = downscale;
        const texture = downscale?.texture ?? refinement?.texture ?? composite.texture;
        for (const mesh of group.meshes) this.meshLightmaps.set(mesh, texture);
      }
      committed = true;
      if (this.persistentMaterialMount) this.apply();
    } finally {
      if (!committed)
        for (const entry of staged) {
          entry.downscale?.dispose();
          entry.refinement?.dispose();
          entry.composite.dispose();
          entry.ao.dispose();
        }
      signal?.removeEventListener('abort', cancel);
      releaseLossGuard();
      this.aoJob = null;
    }
  }
}

function mapsHaveSameEntries(left: Map<Mesh, Texture>, right: Map<Mesh, Texture>): boolean {
  if (left.size !== right.size) return false;
  for (const [mesh, texture] of left) {
    if (right.get(mesh) !== texture) return false;
  }
  return true;
}
