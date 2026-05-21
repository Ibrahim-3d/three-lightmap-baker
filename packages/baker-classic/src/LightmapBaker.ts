import { Mesh, Object3D, Scene, Texture, Vector3, WebGLRenderer } from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import { collectLightsFromScene, type PackedLight } from './lightmap';
import { generateAtlas } from './atlas/generateAtlas';
import { mergeGeometry, extractPerTriangleMaterials } from './utils/GeometryUtils';
import { buildMaterialTextures } from './utils/MaterialTextures';
import { partitionByResolution, partitionByDensity } from './utils/Partition';
import { BakeError, type BakeErrorPhase } from './errors';
import { detectGPUCapabilities } from './gpu/Capabilities';
import {
  DEFAULT_REFINEMENT,
  resolveTimeoutProtection,
  toLinearColor,
  validateOptions,
} from './bake/validation';
import { LightmapBakeResult } from './bake/result';
import { runGroupBake, type GroupBakeContext } from './bake/groups';
import type {
  BakeHooks,
  BakeStats,
  LightmapBakerOptions,
  ResolvedBakerOptions,
  TimeoutProtectionOptions,
} from './bake/types';
import type { GroupInternals, ContextLossState } from './bake/internals';

// LightmapBakeResult lives in `./bake/result` to keep this file under the
// 300-LOC modularity cap. Re-exported here so the public barrel can pull it
// off `./LightmapBaker` unchanged.
export { LightmapBakeResult } from './bake/result';

// Public type surface — re-exported through `./index.ts`. Definitions live
// in `./bake/types` to keep this file under the 300-LOC modularity cap.
export type {
  BakePhase,
  BakeFrameInfo,
  BakeHooks,
  BakeStats,
  LightmapBakerOptions,
  TimeoutProtectionOptions,
  LightOptions,
  PackedLight,
  GIOptions,
  AOOptions,
  BakeGroupView,
} from './bake/types';

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

export class LightmapBaker {
  private opts: ResolvedBakerOptions;

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
      superSample: opts.superSample ?? 1,
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
    // Every light — including the scene's default area light — now lives in
    // the scene as a real THREE.Light, so `collectLightsFromScene` is the
    // single source of truth. If the user deleted every light, the bake will
    // be lit by sky GI alone.
    const skyColor = toLinearColor(this.opts.gi.skyColor, 0xffffff);
    const sceneLights: PackedLight[] = collectLightsFromScene(scene);

    // --- 4. Per-group bake ---
    const tB0 = performance.now();
    const groupKeys = [...groups.keys()];
    const groupResults: GroupInternals[] = [];
    const meshLightmaps = new Map<Mesh, Texture>();
    const meshResolutions = new Map<Mesh, number>();

    // Track excluded meshes: they get no lightmap entry.
    // (They're kept separate so callers know to handle them differently.)
    void excluded; // intentionally unused beyond BVH; suppress lint

    const ctx: GroupBakeContext = {
      renderer: this.renderer,
      opts: this.opts,
      bvh,
      sceneLights,
      skyColor,
      matTex,
      tp,
      ctxState,
    };
    for (let gi = 0; gi < groupKeys.length; gi++) {
      const key = groupKeys[gi]!;
      const res = groupResolution(key);
      const internalRes = res * this.opts.superSample;
      const groupMeshes = groups.get(key)!;

      const { group, finalTex } = await runGroupBake(
        ctx,
        gi,
        groupKeys.length,
        groupMeshes,
        res,
        internalRes,
        hooks,
        checkAbort,
      );
      groupResults.push(group);

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
