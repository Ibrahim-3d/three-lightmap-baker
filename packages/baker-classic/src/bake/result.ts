import { Mesh, MeshStandardMaterial, Texture, WebGLRenderer } from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import {
  generateAOMapper,
  runPostProcess,
  type AORaycastOptions,
  type PostProcessOptions,
} from '../lightmap';
import { exportLightmap, type ExportFormat } from '../utils/exportLightmap';
import { BakeError } from '../errors';
import type { BakeHooks, BakeStats, BakeGroupView } from './types';
import type { GroupInternals } from './internals';

/** Result of a successful bake. Owns the GPU resources - call `dispose()` to release. */
export class LightmapBakeResult {
  constructor(
    private readonly renderer: WebGLRenderer,
    private readonly meshLightmaps: Map<Mesh, Texture>,
    private readonly meshResolutions: Map<Mesh, number>,
    public readonly stats: BakeStats,
    private readonly internals: {
      groups: GroupInternals[];
      bvh: MeshBVH;
      refinementOptions: PostProcessOptions;
      denoise: boolean;
      matTexDispose: () => void;
    },
  ) {}

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
          },
        };
      }
    }
    return null;
  }

  /** Mounts each mesh's atlas texture as `mat.lightMap` (channel = 2). */
  apply(): void {
    for (const [mesh, tex] of this.meshLightmaps) {
      const mat = mesh.material as MeshStandardMaterial;
      if (!mat) continue;
      mat.lightMap = tex;
      tex.channel = 2;
      mat.lightMapIntensity = 1;
      mat.needsUpdate = true;
    }
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
      const g = groups[i]!;
      // When superSample > 1, export the downscaled (target-res) texture, not
      // the internal-res source - exportLightmap reads pixels at the supplied
      // resolution and would otherwise read past the end of the buffer.
      const finalTex = g.downscale?.texture ?? g.refinement?.texture ?? g.composite.texture;
      const name = groups.length > 1 ? `${base}_group${i}` : base;
      await exportLightmap(this.renderer, finalTex, g.resolution, name, fmt);
    }
  }

  dispose(): void {
    for (const g of this.internals.groups) {
      g.downscale?.dispose();
      g.refinement?.dispose();
      g.composite.dispose();
      g.aoMapper.dispose();
      g.lightmapper.dispose();
      g.atlasDispose();
    }
    this.internals.matTexDispose();
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
    const groups = this.internals.groups;
    for (let gi = 0; gi < groups.length; gi++) {
      const g = groups[gi]!;
      const aoOpts: AORaycastOptions = {
        resolution: g.internalResolution,
        aoSamples: opts.samples,
        ambientDistance: opts.distance,
        targetSamples: opts.targetSamples,
      };
      await rebakeAOForGroup(
        this.renderer,
        this.internals.bvh,
        g,
        aoOpts,
        hooks,
        gi,
        groups.length,
        (p) => hooks.onProgress?.('bake', (gi + p) / groups.length),
      );

      // Re-run refinement so denoise sees the new composite output.
      if (g.refinement) {
        g.refinement.dispose();
        g.refinement = await runPostProcess(
          this.renderer,
          g.composite.texture,
          g.positionTex,
          g.internalResolution,
          this.internals.refinementOptions,
        );
        // If supersampling, the downscale wraps refinement's NEW texture and
        // its target ref stays stable - only the source pointer changes. Mesh
        // bindings keep pointing at downscale.texture; no Map update needed.
        // For SS=1, the refinement texture itself is the new ref → update Map.
        if (g.downscale) {
          g.downscale.setSource(g.refinement.texture);
          g.downscale.refresh();
        } else {
          const finalTex = g.refinement.texture;
          for (const [mesh, res] of this.meshResolutions) {
            if (res === g.resolution) this.meshLightmaps.set(mesh, finalTex);
          }
        }
      } else if (g.downscale) {
        // No refinement - downscale source is composite.texture (stable ref);
        // just re-blit so the new AO accumulator flows through.
        g.downscale.refresh();
      }
    }
  }
}

/**
 * AO-only re-bake helper. Used by `LightmapBakeResult.rebakeAO()` to swap each
 * group's AO mapper without touching bounce/composite/refinement allocations
 * beyond the single texture rebind.
 *
 * Fires `hooks.onFrame` per RAF with the same `BakeFrameInfo` shape as a full
 * bake. `bounceSamples` is always 0 (we don't touch bounce); `directTexture`
 * and `indirectTexture` remain stable refs to the existing accumulators.
 *
 * Lives next to `LightmapBakeResult` (not in `pipeline.ts`) to avoid a cycle:
 * `pipeline.ts` already imports `LightmapBakeResult` from this file; putting
 * `rebakeAOForGroup` there would force `result.ts` to import from `pipeline.ts`
 * and the two modules would reach across each other.
 */
function rebakeAOForGroup(
  renderer: WebGLRenderer,
  bvh: MeshBVH,
  group: GroupInternals,
  aoOpts: AORaycastOptions,
  hooks: BakeHooks,
  groupIndex: number,
  totalGroups: number,
  onProgress: (p: number) => void,
): Promise<void> {
  const newAO = generateAOMapper(renderer, group.positionTex, group.normalTex, bvh, aoOpts);
  // Replace the old AO mapper.
  group.aoMapper.dispose();
  group.aoMapper = newAO;
  // Rebind composite's AO source so per-RAF refreshes during accumulation
  // already read the new texture (caller can mount composite.texture and watch
  // the AO fade in live).
  group.composite.refresh({ aoTex: newAO.texture });
  return new Promise<void>((resolve, reject) => {
    const tick = (): void => {
      if (hooks.signal?.aborted) {
        reject(new BakeError('aborted by signal', 'bake'));
        return;
      }
      // AO-only re-bake doesn't install its own context-loss guard - the
      // caller (`LightmapBakeResult.rebakeAO`) is short enough that a lost
      // context will surface as a draw-call failure on the next renderer
      // call. Adding one would require threading the canvas through.
      const r = newAO.render();
      onProgress(aoOpts.targetSamples > 0 ? r.samples / aoOpts.targetSamples : 1);

      // Refresh composite so live preview reflects this RAF's AO accumulator,
      // then fire onFrame with the same shape as a full bake. Bounce textures
      // are stable refs; bounceSamples is 0 (not touched by AO rebake).
      group.composite.refresh();
      hooks.onFrame?.({
        groupIndex,
        totalGroups,
        bounceSamples: 0,
        aoSamples: r.samples,
        targetSamples: aoOpts.targetSamples,
        done: r.done,
        compositeTexture: group.composite.texture,
        directTexture: group.lightmapper.textures.direct,
        indirectTexture: group.lightmapper.textures.indirect,
        aoTexture: newAO.texture,
      });

      if (r.done) {
        resolve();
        return;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}
