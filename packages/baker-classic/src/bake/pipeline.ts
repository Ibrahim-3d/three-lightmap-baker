import { Mesh, Object3D, Scene, Texture, WebGLRenderer } from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import { collectLightsFromScene, type PackedLight } from '../lightmap';
import { generateAtlas, generateAtlases } from '../atlas/generateAtlas';
import {
  buildMaterialTextures,
  extractPerTriangleMaterials,
  mergeGeometry,
  partitionByDensity,
  partitionByResolution,
} from '../utils';
import type { BakeErrorPhase } from '../errors';
import {
  LightmapBakeResult,
  runGroupBake,
  toLinearColor,
  type BakeHooks,
  type BakeStats,
  type ContextLossState,
  type GroupBakeContext,
  type GroupInternals,
  type ResolvedBakerOptions,
  type TimeoutProtectionOptions,
} from '.';

// Top-level bake orchestrator. Spans more responsibility than typical
// CLAUDE.md `< 5 project imports` heuristic permits - that's intentional for
// a hub file. Each phase delegates to a peer module: partition + UV unwrap +
// BVH/materials, light gather, the per-group loop (delegated to `runGroupBake`
// in `./groups`), GPU drain, and final stats / result construction. Adding any
// logic beyond those phase boundaries belongs in a peer file, not here.
//
// Critical S12 invariants preserved verbatim:
//   - `gl.finish()` drain between the per-group loop and result construction
//     (NVIDIA D3D11 TDR prevention).
//   - Context-loss guard installation and teardown happen in the facade
//     (`LightmapBaker.bake`) - not here - so the `try/finally` cannot be
//     accidentally broken by a future split.

/**
 * Walks the scene; returns Meshes with a `MeshStandardMaterial`-like material
 * (Standard or Physical). Excludes:
 *  - Helpers/gizmos (TransformControls etc. use `MeshBasicMaterial` - `lightMap`
 *    alone is too loose since Basic also exposes that property)
 *  - Anything marked `userData.lightmapIgnore = true` (explicit opt-out)
 *  - Invisible objects (`visible === false`)
 */
export function collectBakeMeshes(scene: Scene | Object3D): Mesh[] {
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

export type BakePipelineArgs = {
  renderer: WebGLRenderer;
  opts: ResolvedBakerOptions;
  scene: Scene | Object3D;
  allMeshes: Mesh[];
  hooks: BakeHooks;
  t0: number;
  tp: Required<TimeoutProtectionOptions>;
  ctxState: ContextLossState;
  checkAbort: (phase: BakeErrorPhase) => void;
};

/**
 * Drive the full bake pipeline: partition → UV unwrap → BVH + materials →
 * lights → per-group loop → drain → stats → result. Caller (`LightmapBaker.bake`)
 * owns context-loss guard installation; this function only signals abort
 * through `checkAbort` and the `ctxState.lost` flag visible to inner loops.
 */
export async function runBakePipeline(args: BakePipelineArgs): Promise<LightmapBakeResult> {
  const { renderer, opts, scene, allMeshes, hooks, t0, tp, ctxState, checkAbort } = args;

  // Partition meshes - density mode if `texelsPerMeter` is set (groups keyed
  // by atlas index, all sharing `resolution`), else resolution mode (groups
  // keyed by resolution, one mesh per `perMesh.resolution` override). The
  // two strategies are orthogonal; validateOptions surfaces a DEV warning
  // when the caller mixes them.
  const tpm = opts.texelsPerMeter;
  const partition =
    tpm > 0
      ? partitionByDensity(allMeshes, opts.perMesh, opts.resolution, tpm)
      : partitionByResolution(allMeshes, opts.perMesh, opts.resolution);
  const { excluded, groups } = partition;
  // In density mode, group keys are atlas indices and ALL groups bake at
  // `partition.resolution`. In resolution mode, the group key IS the per-group
  // resolution. The downstream loop uses `groupResolution(key)` to abstract this.
  const groupResolution = (key: number): number => (tpm > 0 ? partition.resolution : key);

  // --- 1. UV unwrap (only non-excluded meshes need UV2) ---
  const tUV0 = performance.now();
  hooks.onProgress?.('uv-unwrap', 0);
  const meshesByGroup = [...groups.values()];
  if (tpm > 0) {
    // Density mode creates one render target per atlas group. Each group must
    // receive its own full 0-1 UV2 layout, otherwise separate atlas targets
    // still contain UVs from a global pack and density appears to do nothing.
    const perMeshScale: Record<string, number> = {};
    for (const [uuid, override] of Object.entries(opts.perMesh)) {
      if (override.density !== undefined) perMeshScale[uuid] = override.density;
    }
    await generateAtlases(meshesByGroup, {
      resolution: opts.resolution,
      texelsPerUnit: tpm,
      perMeshScale,
    });
  } else {
    // Resolution mode preserves the legacy behavior: all non-excluded meshes
    // sharing a resolution are unwrapped together.
    await generateAtlas(meshesByGroup.flat());
  }
  hooks.onProgress?.('uv-unwrap', 1);
  checkAbort('unwrap');
  const tUV1 = performance.now();

  // --- 2. Geometry: BVH + per-tri materials (SHARED - includes excluded meshes) ---
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
  // Every light - including the scene's default area light - now lives in
  // the scene as a real THREE.Light, so `collectLightsFromScene` is the
  // single source of truth. If the user deleted every light, the bake will
  // be lit by sky GI alone.
  const skyColor = toLinearColor(opts.gi.skyColor, 0xffffff);
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
    renderer,
    opts,
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
    const internalRes = res * opts.superSample;
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

  // GPU command-queue drain. The bake submits work asynchronously; by the time
  // JS reaches here, the GPU is typically seconds behind processing queued
  // tile/composite draws. If we return without draining, the FIRST post-bake
  // `renderer.render(scene)` triggers an implicit drain - and on some drivers
  // (NVIDIA D3D11 reproduced) that drain piles up enough pressure to TDR /
  // drop the WebGL context. Force the drain HERE, where we can isolate it
  // from scene rendering and any caller observation.
  // Cost: blocks JS for the queue length (~3s observed at 1024² Production).
  // That cost was happening anyway - this just makes it explicit.
  const tDrain0 = performance.now();
  renderer.getContext().finish();
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
    meshCount: meshesByGroup.flat().length,
    texelCount: totalTexels,
    raysTraced: opts.samples * opts.castsPerFrame * totalTexels,
    duration: {
      uvUnwrap: tUV1 - tUV0,
      geometry: tG1 - tG0,
      bake: tB1 - tB0,
      refine: tR1 - tR0,
      total: performance.now() - t0,
    },
  };

  return new LightmapBakeResult(renderer, meshLightmaps, meshResolutions, stats, {
    groups: groupResults,
    bvh,
    refinementOptions: opts.refinementOptions,
    denoise: opts.denoise,
    matTexDispose: () => {
      matTex.albedoTexture.dispose();
      matTex.emissiveTexture.dispose();
    },
  });
}
