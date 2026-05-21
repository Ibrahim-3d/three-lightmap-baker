# LightmapBaker.ts — Split Map
> Generated 2026-05-21. Read-only mapping pass; no source was modified.
> Source: `packages/baker-classic/src/LightmapBaker.ts` (1314 LOC)

---

## 1. Top-level inventory

| Lines | Name | Kind | Cluster |
|-------|------|------|---------|
| 46 | `BakePhase` | `export type` | types |
| 57–78 | `BakeFrameInfo` | `export type` | types |
| 80–91 | `BakeHooks` | `export type` | types |
| 93–102 | `BakeStats` | `export type` | types |
| 104–173 | `LightmapBakerOptions` | `export type` | types |
| 175–197 | `TimeoutProtectionOptions` | `export type` | types |
| 199–205 | `LightOptions` | `export type` | types |
| 207–208 | `PackedLight` re-export | `export type` | types |
| 209–214 | `GIOptions` | `export type` | types |
| 215–229 | `AOOptions` | `export type` | types |
| 231–232 | `toLinearColor` | `const fn` | validation helpers |
| 234 | `isPowerOfTwo` | `const fn` | validation helpers |
| 241–344 | `validateOptions` | `function` | validation helpers |
| 350–362 | `resolveTimeoutProtection` | `function` | validation helpers |
| 364–371 | `DEFAULT_REFINEMENT` | `const` | config |
| 372–397 | `GroupInternals` | `type` (private) | internal |
| 399–458 | `BakeGroupView` | `export type` | types |
| 461–683 | `LightmapBakeResult` | `export class` | result cluster |
| 685–1033 | `LightmapBaker` | `export class` | baker cluster |
| 1040–1060 | `collectBakeMeshes` | `function` | scene helpers |
| 1062–1086 | `buildRaycastOpts` | `function` | opts-builders |
| 1088–1101 | `buildAORaycastOpts` | `function` | opts-builders |
| 1103–1104 | `ContextLossState` | `type` | internal |
| 1106–1163 | `adaptiveTileSize` | `function` | pipeline helpers |
| 1130 | `MIN_TILE_SIZE` | `const` | pipeline helpers |
| 1165–1247 | `runMappersWithTimeoutProtection` | `function` | pipeline helpers |
| 1249–1314 | `rebakeAOForGroup` | `function` | result/AO helpers |

**LOC breakdown by cluster:**
- types (pure data) — ~220 LOC
- `LightmapBakeResult` class — ~222 LOC (461–683)
- `LightmapBaker` class — ~349 LOC (685–1033)
- free helpers (all below line 1036) — ~280 LOC

---

## 2. Public API surface

Everything exported from `index.ts:65-77` that originates here:

| Export | Kind | External consumers? |
|--------|------|---------------------|
| `LightmapBaker` | class | Yes — `BakeController.ts` (playground app) |
| `LightmapBakeResult` | class | Yes — `BakeController.ts` |
| `LightmapBakerOptions` | type | Yes — `BakeController.ts` |
| `LightOptions` | type | Yes — `LightPage.tsx` |
| `GIOptions` | type | Yes — `BakePage.tsx` |
| `AOOptions` | type | Yes — `BakePage.tsx` |
| `TimeoutProtectionOptions` | type | index.ts only |
| `BakePhase` | type | index.ts only |
| `BakeHooks` | type | Yes — `BakeController.ts` |
| `BakeStats` | type | Yes — `BakePage.tsx` (stats display) |
| `BakeFrameInfo` | type | Yes — `BakeController.ts` |
| `BakeGroupView` | type | Yes — `BakeController.ts` |
| `PackedLight` (re-export) | type | index.ts passes through |

All are re-exported verbatim by `index.ts`. None originate IN `index.ts`.

---

## 3. Class anatomy — `LightmapBaker` (685–1033)

| Lines | Member | What it does | Touches |
|-------|--------|--------------|---------|
| 686–699 | `opts` (private field) | Normalized options bag | All methods |
| 701–744 | `constructor(renderer, opts)` | `validateOptions` → normalize opts into `this.opts` | `validateOptions`, `DEFAULT_REFINEMENT` |
| 746–793 | `bake(scene, hooks)` | Public entry: collect meshes, check EXT, detect GPU, install context-loss guard, call `bakeInternal` in try/finally | `collectBakeMeshes`, `detectGPUCapabilities`, `resolveTimeoutProtection`, `bakeInternal` |
| 795–1033 | `bakeInternal(...)` | **54 LOC over limit at ~240 LOC** — full pipeline: partition → unwrap → BVH → lights → per-group loop → drain → stats → construct result | `partitionByDensity/Resolution`, `generateAtlas`, `mergeGeometry`, `extractPerTriangleMaterials`, `buildMaterialTextures`, `collectLightsFromScene`, `toLinearColor`, `renderAtlas`, `buildRaycastOpts`, `buildAORaycastOpts`, `generateLightmapper`, `generateAOMapper`, `runComposite`, `runMappersWithTimeoutProtection`, `runPostProcess`, `createDownscale`, `LightmapBakeResult` constructor |

**`bakeInternal` sub-sections (natural cut points):**
- L809–828: partition + UV unwrap (calls `partitionByDensity/Resolution`, `generateAtlas`)
- L831–843: geometry phase (BVH + per-tri materials)
- L845–859: light collection / fallback default light
- L861–980: per-group loop (atlas → raycast opts → mappers → composite → sample loop → refine → downscale → push results)
- L982–1032: drain + stats + `LightmapBakeResult` construction

**Cohesion clusters identified:**
- `constructor` + opts normalization → stays in facade
- `bake` guard setup (context loss, abort check) → stays in facade
- partition + unwrap + BVH + lights → `bake/pipeline.ts` setup section
- per-group loop body → `bake/pipeline.ts` group loop
- `buildRaycastOpts` / `buildAORaycastOpts` → could colocate with `bake/pipeline.ts` or `bake/groups.ts`

---

## 4. Class anatomy — `LightmapBakeResult` (461–683)

| Lines | Member | What it does | Private state touched |
|-------|--------|--------------|----------------------|
| 462–474 | `constructor(renderer, meshLightmaps, meshResolutions, stats, internals)` | Stores refs — no GPU work | All fields |
| 480–482 | `get lightmaps()` | Returns shallow copy of `meshLightmaps` Map | `meshLightmaps` |
| 490–492 | `get bvh()` | Returns `internals.bvh` | `internals.bvh` |
| 505–522 | `get groups()` | Maps `internals.groups` → `BakeGroupView[]` | `internals.groups` |
| 530–552 | `getGroupForMesh(mesh)` | Linear search over groups | `internals.groups` |
| 554–564 | `apply()` | Sets `mat.lightMap` on all meshes | `meshLightmaps` |
| 570–590 | `export(pathOrName, opts)` | Browser download per group | `internals.groups`, `renderer` |
| 592–602 | `dispose()` | Dispose all GPU resources in order | `internals.groups`, `internals.matTexDispose` |
| 609–617 | `refreshAO(opts)` | View-time AO tweak (no rebake) | `internals.groups[].composite` |
| 629–682 | `rebakeAO(opts, hooks)` | Full AO re-bake: new AOMapper per group + re-run refinement + re-blit downscale | `internals.groups`, `internals.bvh`, `meshLightmaps`, `meshResolutions`, `renderer` — calls `rebakeAOForGroup` |

**Cross-class coupling that blocks extraction:**
- `rebakeAO` (L629) mutates `internals.groups[i].aoMapper` (private field of `GroupInternals`) — this is fine since `GroupInternals` is an internal type, not a class.
- `rebakeAO` mutates `this.meshLightmaps` (L673) when `superSample=1` — tightly coupled to the Map owned by the result.
- `rebakeAO` calls free function `rebakeAOForGroup` (L1258) — this function takes `GroupInternals` directly. Moving `LightmapBakeResult` to `bake/result.ts` requires either co-locating `rebakeAOForGroup` in that file or exporting `GroupInternals` + `rebakeAOForGroup` from `bake/pipeline.ts` and importing them.
- `export()` calls `exportLightmap` — adds `utils/exportLightmap` as a dependency of `result.ts`. Acceptable (one import).
- `dispose()` must stay intact — calls `g.downscale?.dispose()`, `g.refinement?.dispose()`, `g.composite.dispose()`, `g.aoMapper.dispose()`, `g.lightmapper.dispose()`, `g.atlasDispose()`, `this.internals.matTexDispose()` in a single sequential block. Do NOT reorder or split across files.

**`LightmapBakeResult` is self-contained enough to extract to `bake/result.ts`** with one caveat: it needs `GroupInternals` and `rebakeAOForGroup`. Both must move with it or be imported from `bake/pipeline.ts`.

---

## 5. Internal helpers (free functions below line 1036)

| Lines | Name | Callers |
|-------|------|---------|
| 1048–1060 | `collectBakeMeshes` | `LightmapBaker.bake` (L749) |
| 1062–1086 | `buildRaycastOpts` | `LightmapBaker.bakeInternal` (L883) |
| 1088–1101 | `buildAORaycastOpts` | `LightmapBaker.bakeInternal` (L891) |
| 1104 | `ContextLossState` type | `bake` + `bakeInternal` + `runMappersWithTimeoutProtection` |
| 1131 | `MIN_TILE_SIZE` | `adaptiveTileSize` only |
| 1131–1163 | `adaptiveTileSize` | `runMappersWithTimeoutProtection` (L1204) |
| 1171–1247 | `runMappersWithTimeoutProtection` | `LightmapBaker.bakeInternal` (L929) |
| 1258–1314 | `rebakeAOForGroup` | `LightmapBakeResult.rebakeAO` (L642) |

**Target file for each:**
- `collectBakeMeshes` → `bake/pipeline.ts` (called only during `bake()`)
- `buildRaycastOpts` / `buildAORaycastOpts` → `bake/pipeline.ts` or `bake/groups.ts`
- `ContextLossState` + `adaptiveTileSize` + `MIN_TILE_SIZE` + `runMappersWithTimeoutProtection` → `bake/pipeline.ts` (they form one coherent tile-loop unit)
- `rebakeAOForGroup` → `bake/result.ts` (called only by `LightmapBakeResult.rebakeAO`)

---

## 6. Shared mutable state

| Symbol | Kind | Location | Verdict |
|--------|------|----------|---------|
| `DEFAULT_REFINEMENT` | `const` (frozen value object) | L364–371 | Safe — immutable; move to `bake/pipeline.ts` or inline |
| `MIN_TILE_SIZE` | `const` number | L1130 | Safe — immutable; move with `adaptiveTileSize` |
| `ctxState` | `let`-like object `{ lost: boolean }` | created inside `bake()` L769, passed down | Safe — closure-scoped per bake call, not module-level |

**No module-level `let` or singleton. CLAUDE.md ban is NOT violated.**

---

## 7. External dependencies

| Import | Source | Target helper file |
|--------|--------|-------------------|
| `Color`, `LinearFilter`, `Mesh`, `MeshStandardMaterial`, `NearestFilter`, `Object3D`, `Scene`, `Texture`, `Vector3`, `WebGLRenderer` | `three` | split across all files |
| `MeshBVH` | `three-mesh-bvh` | `bake/pipeline.ts` (BVH construction), `bake/result.ts` (stored in internals) |
| `collectLightsFromScene`, `PackedLight` | `./lightmap/Lights` | `bake/pipeline.ts` (light collection in `bakeInternal`) |
| `generateAtlas` | `./atlas/generateAtlas` | `bake/pipeline.ts` (UV unwrap step) |
| `renderAtlas` | `./atlas/renderAtlas` | `bake/pipeline.ts` (per-group atlas) |
| `generateLightmapper`, `Lightmapper`, `RaycastOptions` | `./lightmap/Lightmapper` | `bake/pipeline.ts` |
| `generateAOMapper`, `AOMapper`, `AORaycastOptions` | `./lightmap/AOMapper` | `bake/pipeline.ts`, `bake/result.ts` |
| `runComposite`, `CompositeResult` | `./lightmap/Composite` | `bake/pipeline.ts`, `bake/result.ts` |
| `runPostProcess`, `PostProcessOptions`, `PostProcessResult` | `./lightmap/Refinement` | `bake/pipeline.ts`, `bake/result.ts` |
| `createDownscale`, `DownscaleResult` | `./lightmap/Downscale` | `bake/pipeline.ts`, `bake/result.ts` |
| `mergeGeometry`, `extractPerTriangleMaterials` | `./utils/GeometryUtils` | `bake/pipeline.ts` |
| `buildMaterialTextures` | `./utils/MaterialTextures` | `bake/pipeline.ts` |
| `exportLightmap`, `ExportFormat` | `./utils/exportLightmap` | `bake/result.ts` |
| `partitionByResolution`, `partitionByDensity`, `PerMeshOverride` | `./utils/Partition` | `bake/pipeline.ts` |
| `BakeError`, `BakeErrorPhase` | `./errors` | all files |
| `detectGPUCapabilities`, `GPUCapabilities` | `./gpu/Capabilities` | `bake/pipeline.ts` |

**Circular dependency risk:** None. All imports flow from `LightmapBaker.ts` → lib primitives. After split, `bake/result.ts` would import from `bake/pipeline.ts` (for `rebakeAOForGroup` / `GroupInternals`) — one-way, no cycle.

**Import count per proposed file:**
- `LightmapBaker.ts` (facade): `bake/pipeline.ts` + `bake/result.ts` + `./errors` = 3 project imports ✓
- `bake/pipeline.ts`: ~12 lib imports — **exceeds 5-import limit**. Needs `bake/groups.ts` to absorb the per-group setup so pipeline.ts only orchestrates. See §8.
- `bake/result.ts`: `./lightmap/AOMapper` + `./lightmap/Composite` + `./lightmap/Refinement` + `./lightmap/Downscale` + `./utils/exportLightmap` + `./errors` = 6 project imports — **one over limit**. Could group Composite+Refinement+Downscale into a shared result-resources import if those are barrel-exported.

---

## 8. Proposed cut lines (refined)

Four helper files is probably **one short**. Recommend **five** helpers + thin facade:

```
LightmapBaker.ts           ~160 LOC  constructor + bake() guard + re-exports
bake/types.ts              ~220 LOC  ALL export types + GroupInternals (private internal type)
bake/validation.ts         ~130 LOC  validateOptions + resolveTimeoutProtection + isPowerOfTwo + toLinearColor + DEFAULT_REFINEMENT
bake/result.ts             ~250 LOC  LightmapBakeResult class + rebakeAOForGroup
bake/pipeline.ts           ~260 LOC  bakeInternal + collectBakeMeshes + buildRaycastOpts + buildAORaycastOpts + runMappersWithTimeoutProtection + adaptiveTileSize + MIN_TILE_SIZE + ContextLossState
```

**Why 5 not 4:**
- Extracting `types.ts` is necessary — the 13 exported types/interfaces (~220 LOC) are consumed by both `result.ts` and `pipeline.ts` and the facade. Without a `types.ts`, both helpers would need to import from the facade (cycle) or duplicate the types.
- With `types.ts` extracted, the 4-helper split lands cleanly within 300 LOC each.

**What stays in the facade (`LightmapBaker.ts`):**
- `LightmapBaker` class body (constructor + `bake` + `bakeInternal` calls only — ~160 LOC)
- Re-export of `LightmapBakeResult` from `bake/result.ts`
- Re-export of all types from `bake/types.ts`

**`bake/groups.ts` assessment:** The proposed `bake/groups.ts` (bin-pack + group/atlas spawn + per-group setup) overlaps heavily with `bakeInternal`'s per-group loop. That loop is 120 LOC inside `bakeInternal`. It CAN be extracted as `runGroupBake(renderer, opts, group, ...)` → `bake/groups.ts`. This would bring `pipeline.ts` under 200 LOC. Recommended as an optional fifth helper if `pipeline.ts` still reads too dense after the initial split.

---

## 9. Risk callouts

| Risk | Location | Note |
|------|----------|------|
| **`gl.finish()` drain** | L997 `this.renderer.getContext().finish()` | MUST stay in `bakeInternal` after the per-group loop and before stats construction. If moved to a helper, must guarantee it runs even if an earlier group errors (it's outside the per-group loop — currently safe). |
| **Context-loss guard** | L771–779 `canvas.addEventListener` + `releaseContextGuard` | The `try/finally` at L788–792 ensures `releaseContextGuard()` fires even on throw. The listener references `ctxState` (closure). Do NOT split `bake()` across files in a way that breaks the closure — pass `ctxState` as a parameter to any extracted function (already done: `bakeInternal` receives it). |
| **`dispose()` order** | L592–602 | GPU resource release order matters: downscale → refinement → composite → aoMapper → lightmapper → atlasDispose. Do not reorder. Keep in one block. |
| **`rebakeAO` mutates `meshLightmaps`** | L672–675 | When `superSample=1` and `refinement` exists, `rebakeAO` directly overwrites entries in `this.meshLightmaps`. This Map is also returned by `get lightmaps()`. If `result.ts` is split from `pipeline.ts`, `GroupInternals` must be imported from the types file, not the pipeline file, to avoid a cycle (`result.ts` → `pipeline.ts` → `result.ts` would be circular if `pipeline.ts` imports `LightmapBakeResult`). The free function `rebakeAOForGroup` must live in `bake/result.ts` (not `bake/pipeline.ts`) for the same reason. |
| **`dummy-LM shader variant pin`** | NOT PRESENT in `LightmapBaker.ts` | The S12 lesson referred to a pin in `Lightmapper.ts` / `LightmapperMaterial.ts`, not in this file. No action needed here. |
| **`GroupInternals` is a mutable struct** | L372–397 | `rebakeAOForGroup` mutates `group.aoMapper` (L1270) and the result's `rebakeAO` mutates `g.refinement` (L655–656). After extraction these mutations must stay in-scope of the owning object. Both currently work because `GroupInternals` is passed by reference. Safe across files as long as `GroupInternals` type is shared from `bake/types.ts`. |
| **Import count: `bake/pipeline.ts`** | ~12 lib imports projected | Exceeds 5-import hard limit. Must extract per-group loop to `bake/groups.ts` OR accept barrel re-exports from the lib layer. Plan: extract `runGroupBake` + `buildRaycastOpts` + `buildAORaycastOpts` to `bake/groups.ts`; `pipeline.ts` imports only `bake/groups.ts` + `bake/types.ts` + `./atlas/*` + `./utils/GeometryUtils` + `./utils/MaterialTextures` (5 project imports). |
| **`bakeInternal` is 238 LOC** | L795–1033 | Already violates 50-LOC-per-function limit (238 LOC). Must be split. Natural seam: extract the per-group loop body (L872–979) to `bake/groups.ts::runGroupBake(...)`. Remaining `bakeInternal` would be ~100 LOC orchestrator. |
