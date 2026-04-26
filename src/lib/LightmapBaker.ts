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
import { runComposite, CompositeResult } from './lightmap/Composite';
import { runPostProcess, PostProcessOptions, PostProcessResult } from './lightmap/Refinement';
import { mergeGeometry, extractPerTriangleMaterials } from './utils/GeometryUtils';
import { buildMaterialTextures } from './utils/MaterialTextures';
import { exportLightmap, ExportFormat } from './utils/exportLightmap';
import { BakeError, BakeErrorPhase } from './errors';

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

export type BakeHooks = {
  /** `percent` is 0-1, NOT 0-100. Called several times per phase. */
  onProgress?: (phase: BakePhase, percent: number) => void;
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
   * Per-mesh overrides. Keys are mesh UUIDs (mesh.uuid).
   * - resolution: lightmap side length for this mesh. Default = global resolution.
   * - exclude:    if true, mesh is skipped entirely (no UV unwrap, no lightmap).
   *               Excluded meshes still appear in the BVH so they cast shadows
   *               and contribute to GI for other meshes.
   *
   * Note: `scaleInLightmap` from the original spec is NOT implemented — xatlas-three
   * does not expose per-mesh chart weighting in our integration. Use `resolution`
   * to control quality per mesh.
   */
  perMesh?: Record<string, { resolution?: number; exclude?: boolean }>;
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

  // Validate per-mesh resolution overrides.
  for (const [uuid, override] of Object.entries(opts.perMesh ?? {})) {
    const r = override.resolution;
    if (r === undefined) continue;
    if (!Number.isFinite(r) || r < 128 || r > 4096)
      throw new BakeError(`perMesh[${uuid}].resolution must be 128-4096, got ${r}`, 'validation');
    if (!isPowerOfTwo(r))
      throw new BakeError(
        `perMesh[${uuid}].resolution must be a power of two, got ${r}`,
        'validation',
      );
  }
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
  composite: CompositeResult;
  refinement: PostProcessResult | null;
  atlasDispose: () => void;
  resolution: number;
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
      g.lightmapper.dispose();
      g.atlasDispose();
    }
    this.internals.matTexDispose();
  }
}

export class LightmapBaker {
  private opts: Required<
    Omit<LightmapBakerOptions, 'light' | 'gi' | 'ao' | 'refinementOptions' | 'perMesh'>
  > & {
    light: Required<LightOptions>;
    gi: Required<GIOptions>;
    ao: Required<AOOptions>;
    refinementOptions: PostProcessOptions;
    perMesh: Record<string, { resolution?: number; exclude?: boolean }>;
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
      },
      refinementOptions: {
        ...DEFAULT_REFINEMENT,
        ...(opts.refinementOptions ?? {}),
        denoiseEnabled: opts.denoise ?? DEFAULT_REFINEMENT.denoiseEnabled,
      },
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

    scene.updateMatrixWorld(true);

    const checkAbort = (phase: BakeErrorPhase): void => {
      if (hooks.signal?.aborted) throw new BakeError('aborted by signal', phase);
    };

    // Partition meshes into excluded / groups keyed by effective resolution.
    const { excluded, groups } = partitionMeshes(
      allMeshes,
      this.opts.perMesh,
      this.opts.resolution,
    );

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
    const groupResolutions = [...groups.keys()];
    const groupResults: GroupInternals[] = [];
    const meshLightmaps = new Map<Mesh, Texture>();
    const meshResolutions = new Map<Mesh, number>();

    // Track excluded meshes: they get no lightmap entry.
    // (They're kept separate so callers know to handle them differently.)
    void excluded; // intentionally unused beyond BVH; suppress lint

    for (let gi = 0; gi < groupResolutions.length; gi++) {
      const res = groupResolutions[gi]!;
      const groupMeshes = groups.get(res)!;

      hooks.onProgress?.('bake', gi / groupResolutions.length);
      checkAbort('bake');

      const atlas = renderAtlas(this.renderer, groupMeshes, res, true);

      const raycastOpts: RaycastOptions = buildRaycastOpts(
        this.opts,
        res,
        sceneLights,
        skyColor,
        matTex,
      );

      const lightmapper = generateLightmapper(
        this.renderer,
        atlas.positionTexture,
        atlas.normalTexture,
        bvh,
        raycastOpts,
      );

      await runLightmapperUntilDone(lightmapper, this.opts.samples, hooks, (p) =>
        hooks.onProgress?.('bake', (gi + p) / groupResolutions.length),
      );

      const composite = runComposite(this.renderer, lightmapper.textures, res, {
        directIntensity: 1.0,
        giIntensity: this.opts.gi.intensity,
        aoEnabled: this.opts.ao.enabled,
      });
      composite.refresh();

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
        composite,
        refinement,
        atlasDispose: atlas.dispose,
        resolution: res,
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

    const totalTexels = groupResolutions.reduce((s, r) => s + r * r, 0);
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

/** Walks the scene; returns Meshes whose material has `lightMap` (i.e. MeshStandard-like). */
function collectBakeMeshes(scene: Scene | Object3D): Mesh[] {
  const out: Mesh[] = [];
  scene.traverse((obj) => {
    if (!(obj as Mesh).isMesh) return;
    const mesh = obj as Mesh;
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    if (mats.some((m) => m && 'lightMap' in m)) out.push(mesh);
  });
  return out;
}

/**
 * Partition meshes into excluded and resolution-keyed groups.
 * Defaults for omitted perMesh entries: { exclude: false, resolution: globalRes }.
 */
function partitionMeshes(
  meshes: Mesh[],
  perMesh: Record<string, { resolution?: number; exclude?: boolean }>,
  globalRes: number,
): { excluded: Mesh[]; groups: Map<number, Mesh[]> } {
  const excluded: Mesh[] = [];
  const groups = new Map<number, Mesh[]>();
  for (const m of meshes) {
    const override = perMesh[m.uuid] ?? {};
    if (override.exclude === true) {
      excluded.push(m);
      continue;
    }
    const res = override.resolution ?? globalRes;
    if (!groups.has(res)) groups.set(res, []);
    groups.get(res)!.push(m);
  }
  // Ensure at least one group (all meshes at globalRes) when no overrides apply.
  if (groups.size === 0 && excluded.length < meshes.length) {
    groups.set(
      globalRes,
      meshes.filter((m) => !perMesh[m.uuid]?.exclude),
    );
  }
  return { excluded, groups };
}

function buildRaycastOpts(
  opts: LightmapBaker['opts'],
  resolution: number,
  lights: PackedLight[],
  skyColor: Color,
  matTex: { albedoTexture: Texture; emissiveTexture: Texture; side: number },
): RaycastOptions {
  return {
    resolution,
    casts: opts.castsPerFrame,
    filterMode: opts.filtering === 'linear' ? LinearFilter : NearestFilter,
    lights,
    skyColor,
    skyIntensity: opts.gi.skyIntensity,
    ambientDistance: opts.ao.distance,
    aoIntensity: opts.ao.intensity,
    aoExponent: opts.ao.exponent,
    ambientLightEnabled: opts.ao.enabled,
    directLightEnabled: opts.light.enabled,
    indirectLightEnabled: opts.gi.enabled,
    albedoTexture: matTex.albedoTexture,
    emissiveTexture: matTex.emissiveTexture,
    materialTextureSize: matTex.side,
    targetSamples: opts.samples,
    bounces: opts.bounces,
  };
}

function runLightmapperUntilDone(
  lightmapper: Lightmapper,
  targetSamples: number,
  hooks: BakeHooks,
  onProgress: (p: number) => void,
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const tick = (): void => {
      if (hooks.signal?.aborted) {
        reject(new BakeError('aborted by signal', 'bake'));
        return;
      }
      const r = lightmapper.render();
      onProgress(targetSamples > 0 ? r.samples / targetSamples : 1);
      if (r.done) {
        resolve();
        return;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}
