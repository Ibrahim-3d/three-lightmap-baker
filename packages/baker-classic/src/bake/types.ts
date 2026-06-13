import { Color, Texture, Vector3 } from 'three';
import type { Mesh } from 'three';
import type { AOMapper, Lightmapper, PackedLight, PostProcessOptions } from '../lightmap';
import type { PerMeshOverride } from '../utils/Partition';

// Public type surface for the classic baker. All `import type` so this file
// strips to nothing at runtime - pure declaration aggregation, not a module.

export type BakePhase = 'uv-unwrap' | 'geometry' | 'bake' | 'refine';

/**
 * Per-frame bake snapshot - fires after each RAF tick during the `bake` phase.
 * Lets callers preserve a live preview of the in-flight accumulator (mount
 * `compositeTexture` on a material's `lightMap` slot once and watch it fade in)
 * and drive their own UI updates (FPS counter, progress widget, stats overlay).
 *
 * The texture refs are STABLE across calls - Three.js will pick up the latest
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
  /** True on the final RAF of this group - both mappers report done. */
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
  /** Resolution × resolution - atlas texel count (summed across all groups). */
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
  /**
   * Supersample factor. Bake at `resolution × superSample` internally, then
   * downscale to `resolution` with hardware bilinear. Produces smoother
   * lightmaps than baking at `resolution` directly because high-res captures
   * finer detail that gets anti-aliased during downscale.
   *
   * Cost: trace count scales with internal texel count (superSample=2 → 4× rays,
   * superSample=3 → 9×). Memory: internal-res RTs stay resident on the result.
   *
   * Default 1 (no supersampling). Range 1–4. Power of 2 recommended.
   */
  superSample?: number;
  /** Run dilation + bilateral denoise after the bake. Default true. */
  denoise?: boolean;
  /** Fine-grained refinement controls; merged onto sensible defaults. */
  refinementOptions?: Partial<PostProcessOptions>;
  /** Light source. Required for any direct lighting; see LightOptions defaults below. */
  light?: LightOptions;
  /** Indirect / GI controls. Pass `false` to disable GI quickly. */
  gi?: GIOptions | boolean;
  /** Ambient occlusion controls. Pass `false` to disable AO quickly. */
  ao?: AOOptions | boolean;
  /** UV2 filtering at view time. Default 'linear'. */
  filtering?: 'linear' | 'nearest';
  /**
   * Density-aware multi-atlas bin-packing. Legacy field name: this is a
   * scene-relative density multiplier, not raw texels per meter.
   *
   * `1` derives the texels-per-world-unit needed to fit all eligible meshes into
   * one atlas at `resolution`. `2` asks for roughly 4x the atlas area and may
   * split the scene into more atlases. Per-mesh `density` values multiply local
   * allocation before that baseline is solved.
   *
   * When NOT provided (default), the baker falls back to resolution-only grouping.
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

// Re-export so callers can import PackedLight from the public API barrel.
export type { PackedLight };

export type GIOptions = {
  enabled?: boolean;
  intensity?: number;
  skyColor?: Color | string | number;
  skyIntensity?: number;
};

export type AOOptions = {
  enabled?: boolean;
  /** AO max distance - first hits beyond this are treated as "no occluder". Default 0.5. */
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

/**
 * Public per-group view exposed by `LightmapBakeResult.groups`. Provides
 * read-only access to every texture produced by a group's bake - needed by
 * advanced callers that mount per-channel debug layers (Direct, Indirect, AO,
 * Position, Normal), run their own refinement passes, or implement a
 * multi-atlas viewer.
 *
 * All textures are STABLE refs - Three.js will see updates automatically when
 * the underlying RT contents change (e.g. during accumulation, after `rebakeAO`,
 * after a manual refinement re-run).
 */
export type BakeGroupView = {
  /** Meshes assigned to this group (read-only - do NOT mutate). */
  readonly meshes: ReadonlyArray<Mesh>;
  /**
   * Lightmap side length bound to `mesh.lightMap` (the public/delivery res).
   *
   * NOTE: When `superSample > 1`, the textures in `textures.*` are at the
   * INTERNAL bake resolution (`resolution × superSample`), not at `resolution`.
   * The downscaled target-res texture is what meshes actually use - fetch it
   * via `LightmapBakeResult.lightmaps.get(mesh)`. Use `internalResolution`
   * for read-render-target / pixel-count operations against `textures.*`.
   */
  readonly resolution: number;
  /**
   * Pixel side length of every texture exposed in `textures.*`. Equals
   * `resolution × superSample`. Same as `resolution` when SS=1.
   */
  readonly internalResolution: number;
  /**
   * Live bounce mapper instance for this group. Read-only handle -
   * lifetime is owned by the result; do NOT call `.dispose()`. Useful for
   * advanced callers that want to drive accumulation per-RAF or introspect
   * per-group sample counts (`textures` for direct/indirect refs, `setTileSize`,
   * `renderTiled`).
   */
  readonly lightmapper: Lightmapper;
  /**
   * Live AO mapper instance for this group. Read-only handle - lifetime
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

/**
 * Internal - the LightmapBaker constructor's normalized options shape. Shared
 * across bake/* helpers (groups, pipeline) so the orchestrator can pass a
 * single typed bag instead of N positional parameters. Not exported from the
 * public package barrel.
 */
export type ResolvedBakerOptions = Required<
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
