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
 *  2. `result.lightmaps` is `Map<Mesh, Texture>` where every entry points to the SAME
 *     atlas texture. Spec implies per-mesh textures; our atlas pipeline produces one
 *     shared atlas. The Map shape lets callers iterate per mesh as the spec expects.
 *  3. `bounces > 1` is accepted but currently no-op — the bake shader is hardcoded
 *     1-bounce (multi-bounce GI in WebGL2 GLSL needs a hand-unrolled loop or multi-pass
 *     scheme; deferred). A console.warn fires on construction for bounces > 1.
 *  4. `result.export(path, ...)` triggers a browser download. The `path` argument is
 *     interpreted as a filename hint (last path segment); browsers can't write to
 *     directories.
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
  /** Resolution × resolution — atlas texel count. */
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
  /** Bounces. Accepted but >1 is no-op; warned. Default 1. */
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
};

export type LightOptions = {
  position: Vector3;
  color?: Color | string | number;
  intensity?: number;
  size?: number;
  enabled?: boolean;
};
export type GIOptions = {
  enabled?: boolean;
  intensity?: number;
  skyColor?: Color | string | number;
  skyIntensity?: number;
};
export type AOOptions = {
  enabled?: boolean;
  distance?: number;
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
}

const DEFAULT_REFINEMENT: PostProcessOptions = {
  dilationIterations: 4,
  denoiseEnabled: true,
  denoiseSigma: 2.5,
  denoiseThreshold: 0.18,
  denoiseKSigma: 1.0,
};

/** Result of a successful bake. Owns the GPU resources — call `dispose()` to release. */
export class LightmapBakeResult {
  constructor(
    private readonly renderer: WebGLRenderer,
    private readonly meshes: Mesh[],
    public readonly texture: Texture,
    public readonly resolution: number,
    public readonly stats: BakeStats,
    private readonly internals: {
      lightmapper: Lightmapper;
      composite: CompositeResult;
      refinement: PostProcessResult | null;
      atlasDispose: () => void;
      matTexDispose: () => void;
    },
  ) {}

  /** All entries point to the same shared atlas Texture (atlas pipeline produces one). */
  get lightmaps(): Map<Mesh, Texture> {
    const m = new Map<Mesh, Texture>();
    for (const mesh of this.meshes) m.set(mesh, this.texture);
    return m;
  }

  /** Mounts the atlas as `mat.lightMap` on every baked mesh (channel = 2). */
  apply(): void {
    for (const mesh of this.meshes) {
      const mat = mesh.material as MeshStandardMaterial;
      if (!mat) continue;
      mat.lightMap = this.texture;
      this.texture.channel = 2;
      mat.lightMapIntensity = 1;
      mat.needsUpdate = true;
    }
  }

  /**
   * Trigger a browser download of the atlas. `pathOrName` is treated as a filename
   * hint — only the basename is used (browsers can't pick directories).
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
    await exportLightmap(this.renderer, this.texture, this.resolution, base, fmt);
  }

  dispose(): void {
    this.internals.refinement?.dispose();
    this.internals.composite.dispose();
    this.internals.lightmapper.dispose();
    this.internals.matTexDispose();
    this.internals.atlasDispose();
  }
}

export class LightmapBaker {
  private opts: Required<
    Omit<LightmapBakerOptions, 'light' | 'gi' | 'ao' | 'refinementOptions'>
  > & {
    light: Required<LightOptions>;
    gi: Required<GIOptions>;
    ao: Required<AOOptions>;
    refinementOptions: PostProcessOptions;
  };

  constructor(
    public readonly renderer: WebGLRenderer,
    opts: LightmapBakerOptions = {},
  ) {
    validateOptions(opts);

    if ((opts.bounces ?? 1) > 1) {
      console.warn(
        '[baker] bounces > 1 accepted but currently no-op — shader is hardcoded 1-bounce. ' +
          'Multi-bounce is deferred (no GLSL recursion in WebGL2; needs a multi-pass scheme).',
      );
    }
    this.opts = {
      samples: opts.samples ?? 96,
      castsPerFrame: opts.castsPerFrame ?? 5,
      bounces: opts.bounces ?? 1,
      resolution: opts.resolution ?? 1024,
      denoise: opts.denoise ?? true,
      filtering: opts.filtering ?? 'linear',
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

    // Pre-flight scene + GL context checks before allocating any GPU resources.
    const meshes = collectBakeMeshes(scene);
    if (!meshes.length)
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

    // --- 1. UV unwrap ---
    const tUV0 = performance.now();
    hooks.onProgress?.('uv-unwrap', 0);
    await generateAtlas(meshes);
    hooks.onProgress?.('uv-unwrap', 1);
    checkAbort('unwrap');
    const tUV1 = performance.now();

    // --- 2. Geometry: G-buffers + BVH + per-tri materials ---
    const tG0 = performance.now();
    hooks.onProgress?.('geometry', 0);
    const atlas = renderAtlas(this.renderer, meshes, this.opts.resolution, true);
    hooks.onProgress?.('geometry', 0.4);

    const merged = mergeGeometry(meshes);
    const bvh = new MeshBVH(merged); // mutates merged.index in place — BVH leaf order
    hooks.onProgress?.('geometry', 0.7);

    const perTri = extractPerTriangleMaterials(merged, meshes);
    const matTex = buildMaterialTextures(perTri);
    hooks.onProgress?.('geometry', 1);
    checkAbort('geometry');
    const tG1 = performance.now();

    // --- 3. Bake (RAF-driven progressive accumulation) ---
    const tB0 = performance.now();
    hooks.onProgress?.('bake', 0);
    const lightColor = toLinearColor(this.opts.light.color, 0xffffff);
    const skyColor = toLinearColor(this.opts.gi.skyColor, 0xffffff);

    const raycastOpts: RaycastOptions = {
      resolution: this.opts.resolution,
      casts: this.opts.castsPerFrame,
      filterMode: this.opts.filtering === 'linear' ? LinearFilter : NearestFilter,
      lightPosition: this.opts.light.position,
      lightSize: this.opts.light.size,
      lightColor,
      lightIntensity: this.opts.light.intensity,
      skyColor,
      skyIntensity: this.opts.gi.skyIntensity,
      ambientDistance: this.opts.ao.distance,
      ambientLightEnabled: this.opts.ao.enabled,
      directLightEnabled: this.opts.light.enabled,
      indirectLightEnabled: this.opts.gi.enabled,
      albedoTexture: matTex.albedoTexture,
      emissiveTexture: matTex.emissiveTexture,
      materialTextureSize: matTex.side,
      targetSamples: this.opts.samples,
    };
    const lightmapper = generateLightmapper(
      this.renderer,
      atlas.positionTexture,
      atlas.normalTexture,
      bvh,
      raycastOpts,
    );

    await new Promise<void>((resolve, reject) => {
      const tick = (): void => {
        if (hooks.signal?.aborted) {
          reject(new BakeError('aborted by signal', 'bake'));
          return;
        }
        const r = lightmapper.render();
        hooks.onProgress?.('bake', this.opts.samples > 0 ? r.samples / this.opts.samples : 1);
        if (r.done) {
          resolve();
          return;
        }
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    const tB1 = performance.now();

    // --- 4. View-time composite (direct + indirect*gi) * ao ---
    const composite = runComposite(this.renderer, lightmapper.textures, this.opts.resolution, {
      directIntensity: 1.0,
      giIntensity: this.opts.gi.intensity,
      aoEnabled: this.opts.ao.enabled,
    });
    composite.refresh();

    // --- 5. Refinement (optional dilation + denoise) ---
    const tR0 = performance.now();
    let refinement: PostProcessResult | null = null;
    if (this.opts.denoise || this.opts.refinementOptions.dilationIterations > 0) {
      hooks.onProgress?.('refine', 0);
      refinement = await runPostProcess(
        this.renderer,
        composite.texture,
        atlas.positionTexture,
        this.opts.resolution,
        this.opts.refinementOptions,
        (p) => hooks.onProgress?.('refine', p),
      );
      hooks.onProgress?.('refine', 1);
    }
    const tR1 = performance.now();

    const finalTex = refinement?.texture ?? composite.texture;

    const stats: BakeStats = {
      meshCount: meshes.length,
      texelCount: this.opts.resolution * this.opts.resolution,
      raysTraced:
        this.opts.samples * this.opts.castsPerFrame * this.opts.resolution * this.opts.resolution,
      duration: {
        uvUnwrap: tUV1 - tUV0,
        geometry: tG1 - tG0,
        bake: tB1 - tB0,
        refine: tR1 - tR0,
        total: performance.now() - t0,
      },
    };

    return new LightmapBakeResult(this.renderer, meshes, finalTex, this.opts.resolution, stats, {
      lightmapper,
      composite,
      refinement,
      atlasDispose: atlas.dispose,
      matTexDispose: () => {
        matTex.albedoTexture.dispose();
        matTex.emissiveTexture.dispose();
      },
    });
  }
}

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
