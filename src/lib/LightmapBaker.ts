import {
  Color,
  LinearFilter,
  Mesh,
  MeshStandardMaterial,
  NearestFilter,
  Object3D,
  Scene,
  Texture,
  Vector3,
  WebGLRenderer,
} from 'three';
import { PackedLight, collectLightsFromScene } from './lightmap/Lights';
import { MeshBVH } from 'three-mesh-bvh';
import { generateAtlas } from './atlas/generateAtlas';
import { renderAtlas } from './atlas/renderAtlas';
import { generateLightmapper, Lightmapper, RaycastOptions } from './lightmap/Lightmapper';
import { generateAOMapper, AOMapper, AORaycastOptions } from './lightmap/AOMapper';
import { runComposite, CompositeResult } from './lightmap/Composite';
import { runPostProcess, PostProcessOptions, PostProcessResult } from './lightmap/Refinement';
import { mergeGeometry, extractPerTriangleMaterials } from './utils/GeometryUtils';
import { buildMaterialTextures } from './utils/MaterialTextures';
import { exportLightmap, ExportFormat } from './utils/exportLightmap';
import { partitionByResolution, partitionByDensity, PerMeshOverride } from './utils/Partition';
import { BakeError, BakeErrorPhase } from './errors';
import { detectGPUCapabilities, GPUCapabilities } from './gpu/Capabilities';

/**
 * One-call lightmap baker — wraps the lib primitives behind the Task 06 spec API.
 *
 * Spec deviations (intentional, documented in JSDoc per call site):
 *
 *  1. Constructor takes a `WebGLRenderer`. The spec omits this; in practice the baker
 *     can't run without a GL context, and creating a headless one would mean the user's
 *     scene textures wouldn't be in our context. Caller passes their renderer.
 *  2. `result.lightmaps` returns a `Map<Mesh, Texture>` where each mesh maps to its
 *     group's atlas texture. With `perMesh` grouping, meshes in different resolution
 *     groups get different textures. Without `perMesh`, all entries share one texture.
 *  3. `bounces` [1,4] controls GI path depth. Clamped on construction. Russian Roulette
 *     terminates low-throughput paths after bounce 2 for performance.
 *  4. `result.export(path, ...)` triggers a browser download. The `path` argument is
 *     interpreted as a filename hint (last path segment); browsers can't write to
 *     directories. With per-mesh grouping each group is exported as a separate file.
 */

export type BakePhase = 'uv-unwrap' | 'geometry' | 'bake' | 'refine';

/**
 * Per-frame bake snapshot — fires after each RAF tick during the `bake` phase.
 * Lets callers preserve a live preview of the in-flight accumulator (mount
 * `compositeTexture` on a material's `lightMap` slot once and watch it fade in)
 * and drive their own UI updates (FPS counter, progress widget, stats overlay).
 *
 * The texture refs are STABLE across calls — Three.js will pick up the latest
 * sample on its next render automatically. Don't store copies; store the ref.
 */
export type BakeFrameInfo = {
  /** 0-indexed group currently baking. Public API processes groups sequentially. */
  groupIndex: number;
  /** Total group count for this bake. */
  totalGroups: number;
  /** Bounce-pass sample count completed so far for this group. */
  bounceSamples: number;
  /** AO-pass sample count completed so far for this group. */
  aoSamples: number;
  /** Target sample count for this group (= `LightmapBakerOptions.samples`). */
  targetSamples: number;
  /** True on the final RAF of this group — both mappers report done. */
  done: boolean;
  /** Live composite texture (direct + indirect × gi) × ao. Refreshed per-RAF. */
  compositeTexture: Texture;
  /** Raw bounce direct accumulator. */
  directTexture: Texture;
  /** Raw bounce indirect accumulator. */
  indirectTexture: Texture;
  /** Raw AO visibility accumulator (pre-remap). */
  aoTexture: Texture;
};

export type BakeHooks = {
  /** `percent` is 0-1, NOT 0-100. Called several times per phase. */
  onProgress?: (phase: BakePhase, percent: number) => void;
  /**
   * Per-RAF callback during the `bake` phase. Use to drive live preview and
   * UI updates. The composite is refreshed BEFORE this fires, so reading
   * `compositeTexture` reflects the current sample count.
   */
  onFrame?: (info: BakeFrameInfo) => void;
  /** Aborts mid-bake if signalled. */
  signal?: AbortSignal;
};

export type BakeStats = {
  meshCount: number;
  /** Resolution × resolution — atlas texel count (summed across all groups). */
  texelCount: number;
  /** Estimate: samples × castsPerFrame × texelCount. */
  raysTraced: number;
  /** Per-phase + total wall-clock time, milliseconds. */
  duration: { uvUnwrap: number; geometry: number; bake: number; refine: number; total: number };
};

export type LightmapBakerOptions = {
  /** Frames of progressive accumulation. Effective spp = samples × castsPerFrame. Default 96. */
  samples?: number;
  /** Rays per texel per frame. Default 5. */
  castsPerFrame?: number;
  /** GI bounce depth [1,4]. Default 1 (single-bounce NEE, same as pre-Task-07). */
  bounces?: number;
  /** Atlas resolution. Default 1024. */
  resolution?: number;
  /** Run dilation + bilateral denoise after the bake. Default true. */
  denoise?: boolean;
  /** Fine-grained refinement controls; merged onto sensible defaults. */
  refinementOptions?: Partial<PostProcessOptions>;
  /** Light source. Required for any direct lighting; see LightOptions defaults below. */
  light?: LightOptions;
  /** Indirect / GI controls. */
  gi?: GIOptions;
  /** Ambient occlusion controls. */
  ao?: AOOptions;
  /** UV2 filtering at view time. Default 'linear'. */
  filtering?: 'linear' | 'nearest';
  /**
   * Density-aware multi-atlas bin-packing. Texels per WORLD UNIT (typically meters)
   * of mesh surface. When provided, the baker computes per-mesh atlas demand from
   * world-space surface area × `texelsPerMeter²` and greedily packs meshes into
   * one or more atlases of side `resolution`. Larger meshes auto-spawn additional
   * atlases when one cannot hold them all at the target density.
   *
   * When NOT provided (default), the baker falls back to resolution-only grouping —
   * all meshes share one atlas at `resolution`, OR meshes with `perMesh[uuid].resolution`
   * overrides get their own per-resolution atlas.
   *
   * Density and per-mesh `resolution` compose: a mesh with `resolution: 2048` gets
   * its own 2048² atlas; within that atlas the bin-packer respects its `density` weight.
   */
  texelsPerMeter?: number;
  /**
   * Per-mesh overrides. Keys are mesh UUIDs (mesh.uuid).
   * - resolution: lightmap side length for this mesh. Default = global resolution.
   *               Forces this mesh into its own resolution-keyed atlas group.
   * - density:    per-mesh density multiplier (1.0 = match `texelsPerMeter`, 2.0 =
   *               double density, 0.5 = half). Only meaningful when top-level
   *               `texelsPerMeter` is set. Range 0.1–10.
   * - exclude:    if true, mesh is skipped entirely (no UV unwrap, no lightmap).
   *               Excluded meshes still appear in the BVH so they cast shadows
   *               and contribute to GI for other meshes.
   */
  perMesh?: Record<string, { resolution?: number; density?: number; exclude?: boolean }>;
  /**
   * GPU timeout (TDR) protection. The bake auto-tiles each ray-tracing draw
   * call into smaller scissored regions to avoid Windows' ~2s GPU watchdog,
   * and adapts the tile size if RAFs stretch under load.
   *
   * Defaults are derived from `detectGPUCapabilities()` at bake start.
   * Override only if you need a specific tradeoff.
   */
  timeoutProtection?: TimeoutProtectionOptions;
};

export type TimeoutProtectionOptions = {
  /**
   * Smallest possible tile (64) and tightest budgets. Use on hardware known
   * to TDR (older Intel iGPU, low-end mobile). Slow but safe. Default false.
   */
  safeMode?: boolean;
  /**
   * Initial per-draw tile side in texels. Defaults: discrete=1024, iGPU=256,
   * unknown=256, safeMode=64. Pass `>= resolution` to disable tiling entirely.
   */
  initialTileSize?: number;
  /**
   * Soft upper bound on per-tile wall time before adaptive shrinking fires.
   * Default 250–500 ms depending on tier; safeMode forces 100 ms.
   */
  maxBatchMs?: number;
  /**
   * Per-frame work budget. Mappers yield once this is exceeded. Default 16ms.
   */
  maxFrameMs?: number;
  /** Enable RAF-interval-based adaptive tile shrinking. Default true. */
  autoAdapt?: boolean;
};

export type LightOptions = {
  position: Vector3;
  color?: Color | string | number;
  intensity?: number;
  size?: number;
  enabled?: boolean;
};

// Re-export so callers can import PackedLight from the public API.
export type { PackedLight };
export type GIOptions = {
  enabled?: boolean;
  intensity?: number;
  skyColor?: Color | string | number;
  skyIntensity?: number;
};
export type AOOptions = {
  enabled?: boolean;
  /** AO max distance — first hits beyond this are treated as "no occluder". Default 0.5. */
  distance?: number;
  /** Darkness multiplier on the final occlusion amount. Default 1.0. Sane 0..3. */
  intensity?: number;
  /** Falloff curve exponent. 1.0 = linear (pre-7D). Default 1.5. Sane 0.5..4.0. */
  exponent?: number;
  /**
   * AO ray budget per frame, independent of `castsPerFrame`. Lets you keep AO
   * clean while indirect stays cheap (e.g. casts=4, samples=16). Default:
   * same as `castsPerFrame`. Set to 0 to disable AO via empty loop. Range 0..64.
   */
  samples?: number;
};

const toLinearColor = (c: Color | string | number | undefined, fallback: number): Color =>
  new Color(c ?? fallback).convertSRGBToLinear();

const isPowerOfTwo = (n: number): boolean => n > 0 && (n & (n - 1)) === 0;

/**
 * Validate every numeric/required field BEFORE allocating GPU resources. Each
 * failure throws a single BakeError so the caller sees one structured error
 * instead of a cascade of secondary failures.
 */
function validateOptions(opts: LightmapBakerOptions): void {
  const samples = opts.samples ?? 96;
  if (!Number.isFinite(samples) || samples < 1 || samples > 4096)
    throw new BakeError(`samples must be 1-4096, got ${samples}`, 'validation');

  const casts = opts.castsPerFrame ?? 5;
  if (!Number.isFinite(casts) || casts < 1 || casts > 256)
    throw new BakeError(`castsPerFrame must be 1-256, got ${casts}`, 'validation');

  const aoSamples = opts.ao?.samples;
  if (aoSamples !== undefined && (!Number.isFinite(aoSamples) || aoSamples < 0 || aoSamples > 64))
    throw new BakeError(`ao.samples must be 0-64, got ${aoSamples}`, 'validation');

  const bounces = opts.bounces ?? 1;
  if (!Number.isInteger(bounces) || bounces < 0 || bounces > 8)
    throw new BakeError(`bounces must be integer 0-8, got ${bounces}`, 'validation');

  const resolution = opts.resolution ?? 1024;
  if (!Number.isFinite(resolution) || resolution < 16 || resolution > 4096)
    throw new BakeError(`resolution must be 16-4096, got ${resolution}`, 'validation');
  if (!isPowerOfTwo(resolution))
    throw new BakeError(`resolution must be a power of two, got ${resolution}`, 'validation');

  if (opts.light?.intensity !== undefined && opts.light.intensity < 0)
    throw new BakeError(`light.intensity must be >= 0, got ${opts.light.intensity}`, 'validation');
  if (opts.light?.size !== undefined && opts.light.size < 0)
    throw new BakeError(`light.size must be >= 0, got ${opts.light.size}`, 'validation');

  if (opts.gi?.intensity !== undefined && opts.gi.intensity < 0)
    throw new BakeError(`gi.intensity must be >= 0, got ${opts.gi.intensity}`, 'validation');
  if (opts.gi?.skyIntensity !== undefined && opts.gi.skyIntensity < 0)
    throw new BakeError(`gi.skyIntensity must be >= 0, got ${opts.gi.skyIntensity}`, 'validation');

  if (opts.ao?.distance !== undefined && opts.ao.distance < 0)
    throw new BakeError(`ao.distance must be >= 0, got ${opts.ao.distance}`, 'validation');

  // Validate top-level density (Phase 1 — density-aware multi-atlas).
  if (opts.texelsPerMeter !== undefined) {
    const tpm = opts.texelsPerMeter;
    if (!Number.isFinite(tpm) || tpm <= 0 || tpm > 1024)
      throw new BakeError(`texelsPerMeter must be in (0, 1024], got ${tpm}`, 'validation');
  }

  // Validate per-mesh resolution + density overrides.
  for (const [uuid, override] of Object.entries(opts.perMesh ?? {})) {
    const r = override.resolution;
    if (r !== undefined) {
      if (!Number.isFinite(r) || r < 128 || r > 4096)
        throw new BakeError(`perMesh[${uuid}].resolution must be 128-4096, got ${r}`, 'validation');
      if (!isPowerOfTwo(r))
        throw new BakeError(
          `perMesh[${uuid}].resolution must be a power of two, got ${r}`,
          'validation',
        );
    }
    const d = override.density;
    if (d !== undefined && (!Number.isFinite(d) || d < 0.1 || d > 10))
      throw new BakeError(`perMesh[${uuid}].density must be in [0.1, 10], got ${d}`, 'validation');
  }

  // Density mode and per-mesh resolution are mutually exclusive (orthogonal sizing
  // strategies). When `texelsPerMeter` is set, all atlases share `resolution`;
  // per-mesh `resolution` overrides are ignored. Surface as a warning, not an error.
  if (opts.texelsPerMeter !== undefined && import.meta.env.DEV) {
    const overrides = Object.entries(opts.perMesh ?? {}).filter(
      ([, o]) => o.resolution !== undefined,
    );
    if (overrides.length > 0) {
      console.warn(
        `[baker] texelsPerMeter is set; perMesh[].resolution overrides on ${overrides.length} mesh(es) will be ignored — density mode uses one shared resolution.`,
      );
    }
  }

  // Validate timeout-protection overrides (defaults applied later from capabilities).
  const tp = opts.timeoutProtection;
  if (tp?.initialTileSize !== undefined) {
    const t = tp.initialTileSize;
    if (!Number.isFinite(t) || t < 16 || t > 4096)
      throw new BakeError(
        `timeoutProtection.initialTileSize must be 16-4096, got ${t}`,
        'validation',
      );
  }
  if (tp?.maxBatchMs !== undefined && (!Number.isFinite(tp.maxBatchMs) || tp.maxBatchMs <= 0))
    throw new BakeError(
      `timeoutProtection.maxBatchMs must be > 0, got ${tp.maxBatchMs}`,
      'validation',
    );
  if (tp?.maxFrameMs !== undefined && (!Number.isFinite(tp.maxFrameMs) || tp.maxFrameMs <= 0))
    throw new BakeError(
      `timeoutProtection.maxFrameMs must be > 0, got ${tp.maxFrameMs}`,
      'validation',
    );
}

/**
 * Resolve timeout-protection settings from user opts + detected GPU capabilities.
 * Pure function for testability — no side effects beyond the capability log.
 */
function resolveTimeoutProtection(
  user: TimeoutProtectionOptions | undefined,
  caps: GPUCapabilities,
): Required<TimeoutProtectionOptions> {
  const safe = user?.safeMode ?? false;
  return {
    safeMode: safe,
    initialTileSize: user?.initialTileSize ?? (safe ? 64 : caps.initialTileSize),
    maxBatchMs: user?.maxBatchMs ?? (safe ? 100 : caps.maxBatchMs),
    maxFrameMs: user?.maxFrameMs ?? caps.maxFrameMs,
    autoAdapt: user?.autoAdapt ?? true,
  };
}

const DEFAULT_REFINEMENT: PostProcessOptions = {
  dilationIterations: 4,
  denoiseEnabled: true,
  denoiseSigma: 2.5,
  denoiseThreshold: 0.18,
  denoiseKSigma: 1.0,
};

type GroupInternals = {
  lightmapper: Lightmapper;
  aoMapper: AOMapper;
  composite: CompositeResult;
  refinement: PostProcessResult | null;
  atlasDispose: () => void;
  resolution: number;
  /** Meshes assigned to this group (for the public `groups` accessor). */
  meshes: Mesh[];
  /**
   * Atlas G-buffers kept alive for the duration of the bake result so AO-only
   * rebakes can reuse them and so refinement can read positionTex as the chart
   * mask. Released by `atlasDispose()` on `LightmapBakeResult.dispose()`.
   */
  positionTex: Texture;
  normalTex: Texture;
};

/**
 * Public per-group view exposed by `LightmapBakeResult.groups`. Provides
 * read-only access to every texture produced by a group's bake — needed by
 * advanced callers that mount per-channel debug layers (Direct, Indirect, AO,
 * Position, Normal), run their own refinement passes, or implement a
 * multi-atlas viewer.
 *
 * All textures are STABLE refs — Three.js will see updates automatically when
 * the underlying RT contents change (e.g. during accumulation, after `rebakeAO`,
 * after a manual refinement re-run).
 */
export type BakeGroupView = {
  /** Meshes assigned to this group (read-only — do NOT mutate). */
  readonly meshes: ReadonlyArray<Mesh>;
  /** Lightmap side length for every mesh in this group. */
  readonly resolution: number;
  /**
   * Live bounce mapper instance for this group. Read-only handle —
   * lifetime is owned by the result; do NOT call `.dispose()`. Useful for
   * advanced callers that want to drive accumulation per-RAF or introspect
   * per-group sample counts (`textures` for direct/indirect refs, `setTileSize`,
   * `renderTiled`).
   */
  readonly lightmapper: Lightmapper;
  /**
   * Live AO mapper instance for this group. Read-only handle — lifetime
   * is owned by the result; do NOT call `.dispose()`. Mirrors `lightmapper`
   * for the AO pass.
   */
  readonly aoMapper: AOMapper;
  readonly textures: {
    /** Direct lighting accumulator (raw, pre-composite). */
    direct: Texture;
    /** Indirect / GI accumulator (raw, pre-composite). */
    indirect: Texture;
    /** AO visibility accumulator (raw, pre-remap). */
    ao: Texture;
    /** Composite (direct + indirect × gi) × ao_remap with contrast curve. */
    composite: Texture;
    /** Post-refinement (dilation + denoise) texture. Null when denoise was off. */
    refinement: Texture | null;
    /** UV-space world-position G-buffer. */
    position: Texture;
    /** UV-space world-normal G-buffer. */
    normal: Texture;
  };
};

/** Result of a successful bake. Owns the GPU resources — call `dispose()` to release. */
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
   * Live BVH used by every group's mappers — covers the FULL bake set
   * (including excluded meshes, since they cast shadows / contribute GI).
   * Read-only handle; lifetime is owned by the result. Useful for advanced
   * callers that want to reuse the BVH for their own ray queries.
   */
  get bvh(): MeshBVH {
    return this.internals.bvh;
  }

  /**
   * Public per-group view — every texture produced by every group's bake.
   * Use this for advanced layer mounting (debug visualizations of Direct,
   * Indirect, AO, Position, Normal channels), multi-atlas viewers, or
   * manual refinement re-runs against the live composite.
   *
   * Texture refs are STABLE — store the ref, not a copy. Three.js will see
   * updates automatically on accumulation, AO re-bake, or manual refinement.
   *
   * Cost: O(groups) — each call rebuilds the wrapper array.
   */
  get groups(): ReadonlyArray<BakeGroupView> {
    return this.internals.groups.map((g) => ({
      meshes: g.meshes as ReadonlyArray<Mesh>,
      resolution: g.resolution,
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
      const finalTex = g.refinement?.texture ?? g.composite.texture;
      const name = groups.length > 1 ? `${base}_group${i}` : base;
      await exportLightmap(this.renderer, finalTex, g.resolution, name, fmt);
    }
  }

  dispose(): void {
    for (const g of this.internals.groups) {
      g.refinement?.dispose();
      g.composite.dispose();
      g.aoMapper.dispose();
      g.lightmapper.dispose();
      g.atlasDispose();
    }
    this.internals.matTexDispose();
  }

  /**
   * View-time AO tweak — applies new intensity / exponent / enabled to every
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
   * Re-bake AO only — re-runs every group's AO mapper with the supplied
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
        resolution: g.resolution,
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
          g.resolution,
          this.internals.refinementOptions,
        );
        const finalTex = g.refinement.texture;
        for (const [mesh, res] of this.meshResolutions) {
          if (res === g.resolution) this.meshLightmaps.set(mesh, finalTex);
        }
      }
    }
  }
}

export class LightmapBaker {
  private opts: Required<
    Omit<
      LightmapBakerOptions,
      'light' | 'gi' | 'ao' | 'refinementOptions' | 'perMesh' | 'timeoutProtection'
    >
  > & {
    light: Required<LightOptions>;
    gi: Required<GIOptions>;
    ao: Required<AOOptions>;
    refinementOptions: PostProcessOptions;
    perMesh: Record<string, PerMeshOverride>;
    /** Raw user override; resolved against GPU capabilities at bake start. */
    timeoutProtection: TimeoutProtectionOptions | undefined;
  };

  constructor(
    public readonly renderer: WebGLRenderer,
    opts: LightmapBakerOptions = {},
  ) {
    validateOptions(opts);

    this.opts = {
      samples: opts.samples ?? 96,
      castsPerFrame: opts.castsPerFrame ?? 5,
      bounces: Math.min(4, Math.max(1, opts.bounces ?? 1)),
      resolution: opts.resolution ?? 1024,
      denoise: opts.denoise ?? true,
      filtering: opts.filtering ?? 'linear',
      texelsPerMeter: opts.texelsPerMeter ?? 0,
      perMesh: opts.perMesh ?? {},
      light: {
        position: opts.light?.position ?? new Vector3(0, 10, 0),
        color: opts.light?.color ?? 0xffffff,
        intensity: opts.light?.intensity ?? 2.0,
        size: opts.light?.size ?? 1.0,
        enabled: opts.light?.enabled ?? true,
      },
      gi: {
        enabled: opts.gi?.enabled ?? true,
        intensity: opts.gi?.intensity ?? 1.0,
        skyColor: opts.gi?.skyColor ?? 0xffffff,
        skyIntensity: opts.gi?.skyIntensity ?? 0.0,
      },
      ao: {
        enabled: opts.ao?.enabled ?? true,
        distance: opts.ao?.distance ?? 0.5,
        intensity: opts.ao?.intensity ?? 1.0,
        exponent: opts.ao?.exponent ?? 1.5,
        samples: opts.ao?.samples ?? opts.castsPerFrame ?? 5,
      },
      refinementOptions: {
        ...DEFAULT_REFINEMENT,
        ...(opts.refinementOptions ?? {}),
        denoiseEnabled: opts.denoise ?? DEFAULT_REFINEMENT.denoiseEnabled,
      },
      timeoutProtection: opts.timeoutProtection,
    };
  }

  async bake(scene: Scene | Object3D, hooks: BakeHooks = {}): Promise<LightmapBakeResult> {
    const t0 = performance.now();

    const allMeshes = collectBakeMeshes(scene);
    if (!allMeshes.length)
      throw new BakeError(
        'no bake-eligible meshes in scene (need Mesh + MeshStandardMaterial-like)',
        'validation',
      );

    const gl = this.renderer.getContext();
    if (!gl.getExtension('EXT_color_buffer_float'))
      throw new BakeError(
        'EXT_color_buffer_float WebGL2 extension is unavailable; FloatType RTs cannot be allocated',
        'validation',
      );

    // Detect GPU + resolve timeout-protection settings.
    const caps = detectGPUCapabilities(this.renderer);
    const tp = resolveTimeoutProtection(this.opts.timeoutProtection, caps);

    // Context-loss guard: shared mutable flag flipped by the canvas listener.
    // Each tick of the mapper loop checks it before scheduling new work.
    const ctxState: ContextLossState = { lost: false };
    const canvas = this.renderer.domElement;
    const onLost = (e: Event): void => {
      e.preventDefault(); // Tells the browser we'll attempt recovery (we don't, but it's harmless).
      ctxState.lost = true;
      console.error('[baker] webglcontextlost during bake — cancelling');
    };
    canvas.addEventListener('webglcontextlost', onLost as EventListener, false);
    const releaseContextGuard = (): void => {
      canvas.removeEventListener('webglcontextlost', onLost as EventListener, false);
    };

    scene.updateMatrixWorld(true);

    const checkAbort = (phase: BakeErrorPhase): void => {
      if (hooks.signal?.aborted) throw new BakeError('aborted by signal', phase);
      if (ctxState.lost) throw new BakeError('webgl context lost', 'context-loss');
    };

    try {
      return await this.bakeInternal(allMeshes, scene, hooks, t0, tp, ctxState, checkAbort);
    } finally {
      releaseContextGuard();
    }
  }

  private async bakeInternal(
    allMeshes: Mesh[],
    scene: Scene | Object3D,
    hooks: BakeHooks,
    t0: number,
    tp: Required<TimeoutProtectionOptions>,
    ctxState: ContextLossState,
    checkAbort: (phase: BakeErrorPhase) => void,
  ): Promise<LightmapBakeResult> {
    // Partition meshes — density mode if `texelsPerMeter` is set (groups keyed
    // by atlas index, all sharing `resolution`), else resolution mode (groups
    // keyed by resolution, one mesh per `perMesh.resolution` override). The
    // two strategies are orthogonal; validateOptions surfaces a DEV warning
    // when the caller mixes them.
    const tpm = this.opts.texelsPerMeter;
    const partition =
      tpm > 0
        ? partitionByDensity(allMeshes, this.opts.perMesh, this.opts.resolution, tpm)
        : partitionByResolution(allMeshes, this.opts.perMesh, this.opts.resolution);
    const { excluded, groups } = partition;
    // In density mode, group keys are atlas indices and ALL groups bake at
    // `partition.resolution`. In resolution mode, the group key IS the per-group
    // resolution. The downstream loop uses `groupResolution(key)` to abstract this.
    const groupResolution = (key: number): number => (tpm > 0 ? partition.resolution : key);

    // --- 1. UV unwrap (only non-excluded meshes need UV2) ---
    const tUV0 = performance.now();
    hooks.onProgress?.('uv-unwrap', 0);
    // Unwrap all groups at once so xatlas sees the full non-excluded set.
    const bakeMeshes = [...groups.values()].flat();
    await generateAtlas(bakeMeshes);
    hooks.onProgress?.('uv-unwrap', 1);
    checkAbort('unwrap');
    const tUV1 = performance.now();

    // --- 2. Geometry: BVH + per-tri materials (SHARED — includes excluded meshes) ---
    const tG0 = performance.now();
    hooks.onProgress?.('geometry', 0);

    // BVH is built from ALL meshes (including excluded) so they cast shadows / contribute GI.
    const merged = mergeGeometry(allMeshes);
    const bvh = new MeshBVH(merged); // mutates merged.index in place
    hooks.onProgress?.('geometry', 0.5);

    const perTri = extractPerTriangleMaterials(merged, allMeshes);
    const matTex = buildMaterialTextures(perTri);
    hooks.onProgress?.('geometry', 1);
    checkAbort('geometry');
    const tG1 = performance.now();

    // --- 3. Build shared light list ---
    const skyColor = toLinearColor(this.opts.gi.skyColor, 0xffffff);
    let sceneLights: PackedLight[] = collectLightsFromScene(scene);
    if (sceneLights.length === 0 && this.opts.light.enabled) {
      const lightColor = toLinearColor(this.opts.light.color, 0xffffff);
      sceneLights = [
        {
          type: 'point',
          position: this.opts.light.position.clone(),
          direction: new Vector3(0, -1, 0),
          color: lightColor.multiplyScalar(this.opts.light.intensity),
          params: [this.opts.light.size, 0, 0, 0],
        },
      ];
    }

    // --- 4. Per-group bake ---
    const tB0 = performance.now();
    const groupKeys = [...groups.keys()];
    const groupResults: GroupInternals[] = [];
    const meshLightmaps = new Map<Mesh, Texture>();
    const meshResolutions = new Map<Mesh, number>();

    // Track excluded meshes: they get no lightmap entry.
    // (They're kept separate so callers know to handle them differently.)
    void excluded; // intentionally unused beyond BVH; suppress lint

    for (let gi = 0; gi < groupKeys.length; gi++) {
      const key = groupKeys[gi]!;
      const res = groupResolution(key);
      const groupMeshes = groups.get(key)!;

      hooks.onProgress?.('bake', gi / groupKeys.length);
      checkAbort('bake');

      const atlas = renderAtlas(this.renderer, groupMeshes, res, true);

      const raycastOpts: RaycastOptions = buildRaycastOpts(
        this.opts,
        res,
        sceneLights,
        skyColor,
        matTex,
        tp,
      );
      const aoOpts: AORaycastOptions = buildAORaycastOpts(this.opts, res, tp);

      const lightmapper = generateLightmapper(
        this.renderer,
        atlas.positionTexture,
        atlas.normalTexture,
        bvh,
        raycastOpts,
      );
      const aoMapper = generateAOMapper(
        this.renderer,
        atlas.positionTexture,
        atlas.normalTexture,
        bvh,
        aoOpts,
      );

      // Composite is created BEFORE the mappers loop so its texture exists
      // during accumulation — callers can mount `composite.texture` on
      // materials immediately and watch it fade in via per-RAF refreshes
      // inside runMappersWithTimeoutProtection. Phase-2 onFrame hook.
      const composite = runComposite(
        this.renderer,
        {
          direct: lightmapper.textures.direct,
          indirect: lightmapper.textures.indirect,
          ao: aoMapper.texture,
        },
        res,
        {
          directIntensity: 1.0,
          giIntensity: this.opts.gi.intensity,
          aoEnabled: this.opts.ao.enabled,
          aoIntensity: this.opts.ao.intensity,
          aoExponent: this.opts.ao.exponent,
        },
      );

      await runMappersWithTimeoutProtection(
        lightmapper,
        aoMapper,
        composite,
        this.opts.samples,
        hooks,
        ctxState,
        tp,
        gi,
        groupKeys.length,
        (p) => hooks.onProgress?.('bake', (gi + p) / groupKeys.length),
      );

      let refinement: PostProcessResult | null = null;
      if (this.opts.denoise || this.opts.refinementOptions.dilationIterations > 0) {
        refinement = await runPostProcess(
          this.renderer,
          composite.texture,
          atlas.positionTexture,
          res,
          this.opts.refinementOptions,
        );
      }

      const finalTex = refinement?.texture ?? composite.texture;
      groupResults.push({
        lightmapper,
        aoMapper,
        composite,
        refinement,
        atlasDispose: atlas.dispose,
        resolution: res,
        meshes: groupMeshes,
        positionTex: atlas.positionTexture,
        normalTex: atlas.normalTexture,
      });

      for (const m of groupMeshes) {
        meshLightmaps.set(m, finalTex);
        meshResolutions.set(m, res);
      }
    }
    const tB1 = performance.now();

    const tR0 = performance.now();
    hooks.onProgress?.('refine', 1);
    const tR1 = performance.now();

    // GPU command-queue drain. The bake submits work asynchronously; by the
    // time JS reaches here, the GPU is typically seconds behind processing
    // queued tile/composite draws. If we return without draining, the FIRST
    // post-bake `renderer.render(scene)` triggers an implicit drain — and on
    // some drivers (NVIDIA D3D11 reproduced) that drain piles up enough
    // pressure to TDR / drop the WebGL context. Force the drain HERE, where
    // we can isolate it from scene rendering and any caller observation.
    // Cost: blocks JS for the queue length (~3s observed at 1024² Production).
    // That cost was happening anyway — this just makes it explicit.
    const tDrain0 = performance.now();
    this.renderer.getContext().finish();
    const tDrain1 = performance.now();
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.info(`[baker] GPU queue drain: ${(tDrain1 - tDrain0).toFixed(1)}ms`);
    }

    // Sum texels across all groups. In density mode every group bakes at
    // `partition.resolution`; in resolution mode the key IS the resolution.
    const totalTexels = groupKeys.reduce((s: number, k: number) => {
      const r = groupResolution(k);
      return s + r * r;
    }, 0);
    const stats: BakeStats = {
      meshCount: bakeMeshes.length,
      texelCount: totalTexels,
      raysTraced: this.opts.samples * this.opts.castsPerFrame * totalTexels,
      duration: {
        uvUnwrap: tUV1 - tUV0,
        geometry: tG1 - tG0,
        bake: tB1 - tB0,
        refine: tR1 - tR0,
        total: performance.now() - t0,
      },
    };

    return new LightmapBakeResult(this.renderer, meshLightmaps, meshResolutions, stats, {
      groups: groupResults,
      bvh,
      refinementOptions: this.opts.refinementOptions,
      denoise: this.opts.denoise,
      matTexDispose: () => {
        matTex.albedoTexture.dispose();
        matTex.emissiveTexture.dispose();
      },
    });
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Walks the scene; returns Meshes with a `MeshStandardMaterial`-like material
 * (Standard or Physical). Excludes:
 *  - Helpers/gizmos (TransformControls etc. use `MeshBasicMaterial` — `lightMap`
 *    alone is too loose since Basic also exposes that property)
 *  - Anything marked `userData.lightmapIgnore = true` (explicit opt-out)
 *  - Invisible objects (`visible === false`)
 */
function collectBakeMeshes(scene: Scene | Object3D): Mesh[] {
  const out: Mesh[] = [];
  scene.traverse((obj) => {
    if (!(obj as Mesh).isMesh) return;
    if (!obj.visible) return;
    if (obj.userData?.lightmapIgnore) return;
    const mesh = obj as Mesh;
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    if (mats.some((m) => m && (m as { isMeshStandardMaterial?: boolean }).isMeshStandardMaterial))
      out.push(mesh);
  });
  return out;
}

function buildRaycastOpts(
  opts: LightmapBaker['opts'],
  resolution: number,
  lights: PackedLight[],
  skyColor: Color,
  matTex: { albedoTexture: Texture; emissiveTexture: Texture; side: number },
  tp: Required<TimeoutProtectionOptions>,
): RaycastOptions {
  return {
    resolution,
    casts: opts.castsPerFrame,
    filterMode: opts.filtering === 'linear' ? LinearFilter : NearestFilter,
    lights,
    skyColor,
    skyIntensity: opts.gi.skyIntensity,
    directLightEnabled: opts.light.enabled,
    indirectLightEnabled: opts.gi.enabled,
    albedoTexture: matTex.albedoTexture,
    emissiveTexture: matTex.emissiveTexture,
    materialTextureSize: matTex.side,
    targetSamples: opts.samples,
    bounces: opts.bounces,
    tileSize: tp.initialTileSize,
  };
}

/** Build the AOMapper options for a group at the given resolution. */
function buildAORaycastOpts(
  opts: LightmapBaker['opts'],
  resolution: number,
  tp: Required<TimeoutProtectionOptions>,
): AORaycastOptions {
  return {
    resolution,
    aoSamples: opts.ao.samples,
    ambientDistance: opts.ao.distance,
    targetSamples: opts.samples,
    tileSize: tp.initialTileSize,
  };
}

/** Mutable state shared between the canvas listener and the mapper loop. */
type ContextLossState = { lost: boolean };

/**
 * Decide whether to shrink the tile size based on recent RAF intervals.
 *
 * Called once per RAF tick. Receives:
 *   - `intervals`: ring buffer of the last few RAF deltas (ms, newest last)
 *   - `currentTileSize`: tile size in effect right now
 *   - `tp.maxFrameMs`: the per-frame budget the orchestrator targets
 *   - `tp.maxBatchMs`: the per-tile soft ceiling
 *
 * Returns the next tile size. Return `currentTileSize` to leave it alone, or
 * a smaller power-of-two-ish value to trigger an adaptive shrink. The mapper
 * will commit it at the next sample boundary.
 *
 * Constraints:
 *   - Never grow above `currentTileSize` (we don't have RAF data on the
 *     unloaded GPU; growing risks oscillation and TDR).
 *   - Floor at `MIN_TILE_SIZE` (64). Below that, scissor overhead dominates.
 *   - Be conservative — false positives just slow the bake; false negatives
 *     can TDR the user's machine.
 *
 * @example
 *   adaptiveTileSize([18, 19, 17, 20], 256, tp) // → 256 (steady)
 *   adaptiveTileSize([45, 38, 50, 42], 256, tp) // → 128 (3+ stretched RAFs)
 */
const MIN_TILE_SIZE = 64;
function adaptiveTileSize(
  intervals: number[],
  currentTileSize: number,
  tp: Required<TimeoutProtectionOptions>,
): number {
  // TODO(user): Implement the adaptive throttling policy. ~5–10 lines.
  //
  // The signal: if recent RAF intervals are much longer than `tp.maxFrameMs`,
  // the GPU is the bottleneck — shrink the tile so each draw is smaller.
  //
  // Suggested heuristic (feel free to tune):
  //   - If we don't have at least 4 samples yet, return currentTileSize.
  //   - Count how many of the last 4 intervals exceeded `tp.maxFrameMs * 1.5`.
  //   - If 3 or more did, halve currentTileSize (Math.max(MIN_TILE_SIZE, ...)).
  //   - Otherwise return currentTileSize.
  //
  // Why "3 of last 4" not "1 of last 4": single-RAF spikes happen for
  // unrelated reasons (GC, OS scheduler, browser layout). We only want to
  // react to sustained pressure.
  //
  // Why halve, not subtract: tile work scales with side² — halving the side
  // quarters the per-tile cost. Linear shrinking would barely help on the
  // first iteration.
  //
  // Why floor at MIN_TILE_SIZE: each tile incurs ~10–100µs of CPU/driver
  // overhead per draw. At 64x64 on a 1024² lightmap that's already 256 draws
  // per sample — going smaller hurts more than it helps.
  if (intervals.length < 4) return currentTileSize;
  const lookback = intervals.slice(-4);
  const overBudget = lookback.filter((i) => i > tp.maxFrameMs * 1.5).length;
  if (overBudget >= 3) return Math.max(MIN_TILE_SIZE, currentTileSize >> 1);
  return currentTileSize;
}

/**
 * Drive bounce + AO mappers with timeout protection: each RAF runs
 * `renderTiled(maxFrameMs)` on both, optionally shrinks tile size when RAFs
 * stretch under load, and rejects with a `'context-loss'` BakeError if the
 * canvas reports webglcontextlost mid-bake.
 */
function runMappersWithTimeoutProtection(
  lightmapper: Lightmapper,
  aoMapper: AOMapper,
  composite: CompositeResult,
  targetSamples: number,
  hooks: BakeHooks,
  ctxState: ContextLossState,
  tp: Required<TimeoutProtectionOptions>,
  groupIndex: number,
  totalGroups: number,
  onProgress: (p: number) => void,
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const intervals: number[] = [];
    let lastRaf = performance.now();
    let tileSize = tp.initialTileSize;

    const tick = (): void => {
      if (hooks.signal?.aborted) {
        reject(new BakeError('aborted by signal', 'bake'));
        return;
      }
      if (ctxState.lost) {
        reject(new BakeError('webgl context lost during bake', 'context-loss'));
        return;
      }

      const now = performance.now();
      intervals.push(now - lastRaf);
      if (intervals.length > 8) intervals.shift();
      lastRaf = now;

      if (tp.autoAdapt) {
        const next = adaptiveTileSize(intervals, tileSize, tp);
        if (next !== tileSize) {
          console.warn(`[baker] adaptive throttle: tileSize ${tileSize} → ${next}`);
          tileSize = next;
          lightmapper.setTileSize(tileSize);
          aoMapper.setTileSize(tileSize);
          intervals.length = 0; // reset history after a change
        }
      }

      const lr = lightmapper.renderTiled(tp.maxFrameMs);
      const ar = aoMapper.renderTiled(tp.maxFrameMs);
      const minSamples = Math.min(lr.samples, ar.samples);
      onProgress(targetSamples > 0 ? minSamples / targetSamples : 1);

      // Refresh composite so the live preview reflects this frame's accumulator
      // state, then fire onFrame with the live texture refs. The composite must
      // refresh BEFORE onFrame so callers see the up-to-date pixels.
      // Gate refresh on sample-boundary: accumulators only change when a full
      // sample completes, so mid-sample RAFs would blit identical pixels.
      const done = lr.done && ar.done;
      if (lr.sampleComplete || ar.sampleComplete) composite.refresh();
      hooks.onFrame?.({
        groupIndex,
        totalGroups,
        bounceSamples: lr.samples,
        aoSamples: ar.samples,
        targetSamples,
        done,
        compositeTexture: composite.texture,
        directTexture: lightmapper.textures.direct,
        indirectTexture: lightmapper.textures.indirect,
        aoTexture: aoMapper.texture,
      });

      if (done) {
        resolve();
        return;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

/**
 * AO-only re-bake helper. Used by `LightmapBaker.rebakeAO()` to swap each
 * group's AO mapper without touching bounce/composite/refinement allocations
 * beyond the single texture rebind.
 *
 * Fires `hooks.onFrame` per RAF with the same `BakeFrameInfo` shape as a full
 * bake. `bounceSamples` is always 0 (we don't touch bounce); `directTexture`
 * and `indirectTexture` remain stable refs to the existing accumulators.
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
      // AO-only re-bake doesn't install its own context-loss guard — the
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
