# Perf-Sweep Map — `src/lib/` Hot Spots & Tech Debt

Generated: 2026-05-11. Scope: `src/lib/**`. Demo excluded. Read-only exploration.

---

## 1. Hot Paths — Top 5 GPU-Cost Contributors

### H1 · LightmapperMaterial full-resolution draw (per tile per sample, per-texel cost)
**File:** `src/lib/lightmap/Lightmapper.ts:196–209` (fast-path) / `src/lib/lightmap/Lightmapper.ts:200–213` (tiled)
**What it does per call:** Every `renderOneTile()` invocation renders a fullscreen quad (or scissored tile). The fragment shader at `src/lib/lightmap/LightmapperMaterial.ts:364–412` runs for every texel in the tile:
- Samples `positions` + `normals` G-buffers
- Runs `casts` hemisphere rays (default 5) per texel, each calling `bvhIntersectFirstHit`
- For every bounce (up to 4), calls `sampleAllLightsNEE` which emits one shadow-ray **per light per bounce** (`LightmapperMaterial.ts:288–306`, loop `for li < MAX_LIGHTS`)
- PCG4d RNG called multiple times per ray

**Cost formula:** `tiles_per_sample × resolution² / tileSize² × casts × bounces × lightCount` BVH traversals per sample.
**Redundant work:** Direct-lighting loop (`LightmapperMaterial.ts:398–404`) calls `sampleAllLightsNEE` `casts` times with identical `hitAlbedo=vec3(1.0)` — no path variation between direct-cast iterations within one texel. The result is averaged at line 407, so all `casts` NEE calls produce identical geometry samples (same hitPos/hitNormal each frame). This means `casts` copies of the same light evaluation, differing only by shadow-ray jitter from `rand4()`. Whether the cost of `casts` shadow rays outweighs a single averaged call is worth profiling.

### H2 · AOMaterial draw (per tile per sample, mirrors H1 cost for AO ray budget)
**File:** `src/lib/lightmap/AOMapper.ts:121–164`
**What it does:** Same tiling infrastructure as Lightmapper. AOMaterial (`src/lib/lightmap/AOMaterial.ts`) issues `aoSamples` BVH rays per texel per tile call, accumulating normalized visibility.
**Cost:** Same tile/sample cadence as H1, independent budget. At default `aoSamples == castsPerFrame`, the AO pass doubles the BVH query count of the bounce pass with zero shared work.
**Redundant work:** Both mappers call `bvhIntersectFirstHit` into the same BVH structure with different directions from the same origin — zero opportunity for cache reuse between them within a frame since they're separate draw calls.

### H3 · `composite.refresh()` per RAF (per-frame, persistent for whole bake)
**File:** `src/lib/LightmapBaker.ts:1148` (called in `runMappersWithTimeoutProtection` tick loop); implementation at `src/lib/lightmap/Composite.ts:87–109`
**What it does per RAF:** Full `resolution × resolution` quad draw that reads three float textures (direct, indirect, ao) and writes to the composite HalfFloat RT. On a 1024² atlas with 96 samples × typical 4 tiles/sample = 384 tile draws per group, there are also 96 composite draws — one per sample boundary. At 2048² the composite draw is itself 4× heavier.
**Redundant observation:** `composite.refresh()` is called unconditionally every RAF (`LightmapBaker.ts:1148`), even for mid-sample RAF ticks where no sample boundary was crossed and the accumulators haven't changed. `LightmapperRender.sampleComplete` (`Lightmapper.ts:59`) already signals whether a full sample completed. Skipping the refresh when `!lr.sampleComplete && !ar.sampleComplete` would cut composite draws by a factor of `tilesPerSample` with no visual difference.

### H4 · `renderAtlas` — 25-offset G-buffer bake with mesh cloning (per bake, per group)
**File:** `src/lib/atlas/renderAtlas.ts:186–196` (offset loop), `:171–174` (mesh clone loop)
**What it does:** For each of 2 G-buffers (position, normal), it loops 25 UV offsets and calls `renderer.render()` with the full mesh group each time. Each render targets a `FloatType` RT at `resolution²`.
**Cost:** `50 × renderer.render()` calls per group (25 offsets × 2 G-buffers). Each `render()` touches every mesh in the group.
**Issue 1 — mesh clone per G-buffer call:** `renderWithShader` clones all meshes into a new `Object3D` every call (`renderAtlas.ts:168–175`), so there are 2 sets of mesh clones created and left for GC (no explicit disposal of the clone geometries/materials — just the RT via `rts`). The clones share geometry data (`.clone()` is shallow for geometry) but the `Object3D` + `Mesh` wrappers are heap-allocated × `meshes.length × 2`.
**Issue 2 — module-level singleton materials:** `worldPositionMaterial` and `normalMaterial` are module-level singletons (`renderAtlas.ts:47–56`, `90–99`). Their `offset` uniform is mutated in place during the render loop (`renderAtlas.ts:188–191`). This is safe for sequential use but **prevents concurrent atlas renders** and makes the side effect non-obvious.
**Issue 3 — 25 dilation offsets:** The Pass-1 dilation-via-offset trick fires 25 `renderer.render()` calls per G-buffer. Whether this is preferable to a single atlas render + post-process dilation pass (like the refinement stage) is worth evaluating.

### H5 · `runPostProcess` — ping-pong dilation + denoise + mipmap regen (per group, post-bake)
**File:** `src/lib/lightmap/Refinement.ts:83–115`
**What it does:** Allocates 2 `FloatType` RTs with `generateMipmaps: true` (`Refinement.ts:50–55`). Runs `dilationIterations` (default 4) full-resolution draws, each yielding to RAF. Then runs bilateral denoise (another full-resolution draw). Each dilation pass triggers a `readRenderTargetPixels` sentinel readback at end (`Refinement.ts:131`).
**Cost per group:** `dilationIterations + 1` full-resolution (`resolution²`) float draws + 1 GPU readback + mipmap generation on both RTs after every write.
**Mipmap issue:** `LinearMipMapLinearFilter` + `generateMipmaps: true` on the refinement RTs means Three.js regenerates the full mip chain (log₂(resolution) levels) after each draw. For a 1024² RT that's 10 mip levels regenerated 5× (4 dilation + 1 denoise). These mips are never used by the bake pipeline — the composite and lightmap slots only sample at full resolution. Setting `generateMipmaps: false` + `LinearFilter` (matching every other RT in the pipeline) would eliminate this work entirely.

---

## 2. RT / Texture Lifecycle Audit

| # | File:line | Type | Size formula | Who allocates | Who disposes | Lifetime | Notes |
|---|---|---|---|---|---|---|---|
| 1 | `renderAtlas.ts:157–161` | `WebGLRenderTarget` (Float, NearestFilter, no mips) × 2 | `res × res` | `renderAtlas()` | `AtlasResult.dispose()` → `atlas.dispose` in `bakeInternal:894` | Per-group, held for full result lifetime (positionTex/normalTex reused by refinement + rebakeAO) | Safe. `rts` array on line 154 tracks both. |
| 2 | `Lightmapper.ts:135–141` | `WebGLMultipleRenderTargets` (Float × 2) | `res × res × 2` | `generateLightmapper()` | `Lightmapper.dispose()` → `LightmapBakeResult.dispose()` | Persistent across whole result | Safe. |
| 3 | `AOMapper.ts:81–86` | `WebGLRenderTarget` (Float) | `res × res` | `generateAOMapper()` | `AOMapper.dispose()` → `LightmapBakeResult.dispose()` | Persistent. On `rebakeAO`: old disposed before new created (`LightmapBaker.ts:1193`) | Safe, rebake path correct. |
| 4 | `Composite.ts:63–68` | `WebGLRenderTarget` (HalfFloat, LinearFilter, no mips) | `res × res` | `runComposite()` | `CompositeResult.dispose()` → `LightmapBakeResult.dispose()` | Persistent | Safe. |
| 5 | `Refinement.ts:49–55` × 2 | `WebGLRenderTarget` (Float, LinearMipMapLinearFilter, **generateMipmaps: true**) | `res × res` each | `runPostProcess()` | `PostProcessResult.dispose()` → `LightmapBakeResult.dispose()` | Per-group, post-bake | **Mipmap flag inconsistency** — only RT in the pipeline with `generateMipmaps: true`. Mipmaps never consumed. See H5. |
| 6 | `Lights.ts:145` | `DataTexture` (Float, 4 × lightCount) | `4 × max(1, lightCount) × 4 floats` | `buildLightTexture()` → called inside `generateLightmapper()` at `Lightmapper.ts:106` | `disposeLightTexture()` in `Lightmapper.dispose()` | Per-lightmapper instance | Safe. |
| 7 | `MaterialTextures.ts:19–26` × 2 | `DataTexture` (Float, RGBA, NearestFilter) | `ceil(sqrt(N))²` each | `buildMaterialTextures()` at `LightmapBaker.ts:777` | `matTexDispose()` lambda in `LightmapBakeResult.dispose()` | Persistent, shared across ALL groups | Safe. Single allocation per bake, shared by all group mappers. |
| 8 | `AOMaterial.ts:39` / `LightmapperMaterial.ts:45` | `MeshBVHUniformStruct` (in-shader uniform) | BVH size (MBs for complex scenes) | Inside material constructor | `material.dispose()` (ShaderMaterial cleanup) | Per-material, per-group | **One `MeshBVHUniformStruct` per group per pass** (one for Lightmapper, one for AOMapper). Two uploads of the full BVH to GPU uniform buffer per group. |
| 9 | `LightmapperUtils.ts` | — | — | — | — | — | `renderSampleCount` / `renderTime` exports are UNREFERENCED from `lib/index.ts` (not exported). Dead internal helpers. |
| 10 | `renderAtlas.ts:168–174` | `Mesh` clone × `meshes.length` × 2 | CPU only | `renderWithShader()` | Never explicitly — GC only | Per-G-buffer call (2× per group) | **Leak risk**: `Mesh.clone()` creates new `Object3D` wrappers; geometry shared (shallow). No `dispose()` call on clones or on `lightMapMeshes` container. Negligible for small scenes; scales with mesh count. |

---

## 3. Redundant GPU Work Suspects

### R1 · Composite refresh on every RAF, not just sample-boundary RAFs
`LightmapBaker.ts:1148` calls `composite.refresh()` unconditionally in the per-RAF `tick`. The accumulators (direct/indirect RT, AO RT) only change when a full sample completes. `lr.sampleComplete` + `ar.sampleComplete` from `renderTiled` are available in scope but unused as a gate. Cost: one full `res²` HalfFloat blit per RAF regardless of tiling depth.

### R2 · Duplicate BVH upload — one `MeshBVHUniformStruct` per mapper per group
`LightmapperMaterial.ts:45–46` and `AOMaterial.ts:38–39` each `new MeshBVHUniformStruct()` and call `.updateFrom(bvh)`. Both pass the same `bvh` object. `MeshBVHUniformStruct.updateFrom` serializes the BVH node tree into GPU buffer uniforms. For a complex scene BVH this can be several MB per group, done twice per group. The structs are not shared between materials.

### R3 · Direct-light `casts` loop — identical NEE geometry samples
`LightmapperMaterial.ts:398–404`:
```glsl
for (int i = 0; i < casts; i++) {
    totalDirectLight += sampleAllLightsNEE(rayOrigin, normal.xyz, vec3(1.0));
}
```
`sampleAllLightsNEE` at `LightmapperMaterial.ts:288` uses `rand4().xy` for jitter. All `casts` iterations evaluate at the same `rayOrigin`/`normal`, summed then divided. This is correct Monte Carlo (soft shadow jitter per cast) but costs `casts × lightCount` shadow rays per texel per sample in the direct channel alone — on top of the same cost in the indirect `tracePath` bounce loop. Separate direct and indirect `casts` budgets (or unified) would enable trade-off tuning.

### R4 · Refinement `FloatType` ping-pong — mipmap regen × (dilation + denoise) passes
`Refinement.ts:50–55`: both ping-pong RTs have `generateMipmaps: true`. Three.js auto-generates mipmaps after each `renderer.render()` to a target with mipmaps enabled. Mips are never sampled (composite reads `composite.texture` at full res; denoise samples `map` with `LinearFilter`). At 1024²: 10 mip levels × 2 RTs × 5 passes = 100 mip uploads wasted per group.

### R5 · Atlas G-buffer — 50 renderer.render() calls per group (25 offsets × 2 shaders)
`renderAtlas.ts:186–196`: 25 UV-jitter offset passes per shader (position + normal) = 50 draw calls to rasterize geometry. These are vertex-shader-only cost (UV→NDC remap) but still 50 complete `renderer.render()` dispatch cycles with full state setup per group. The alternative — render once to full res then dilate via a GPU kernel — is already done in the refinement stage.

### R6 · `renderer.getClearColor` + `new Color()` allocations on every mapper construction
`Lightmapper.ts:145`, `AOMapper.ts:90`, `renderAtlas.ts:149`. Each allocates a fresh `Color` object to save/restore clear color. Three mappers + atlas = 4 transient `Color` allocations per group. Minor but consistent pattern of allocating to do a save/restore.

### R7 · `rebakeAO` re-runs `runPostProcess` on every group even when refinement was originally skipped
`LightmapBaker.ts:604–617`: `if (g.refinement)` → re-runs refinement. But if `denoise=false` and `dilationIterations=0`, `g.refinement` is null and the re-run is skipped. Correct. No issue here.

---

## 4. Dead Code / Over-Engineering Candidates

### D1 · `LightmapperUtils.ts` — unreferenced module
`src/lib/lightmap/LightmapperUtils.ts`: exports `renderSampleCount` and `renderTime`. Neither is re-exported from `src/lib/index.ts`. Neither is imported anywhere in `src/lib/**` (Grep confirms: only file in lib referencing it would be index.ts, which doesn't). These are legacy demo helpers that survived the lib/demo split. Safe to delete.

### D2 · Deprecated aliases on `Lightmapper` type
`Lightmapper.ts:310–315`: `get renderTexture()` and `get texture()` are `@deprecated` aliases. Both are still exported on the public type (`Lightmapper.ts:92–94`). If no external caller uses them (internal demo now uses `lightmapper.textures.direct`), they can be dropped from the type and the getter implementations. Each getter adds a live property descriptor to the returned object.

### D3 · `BakeGroupView` getter rebuilds wrapper array on every access
`LightmapBaker.ts:461–477`: `get groups()` calls `.map(...)` constructing a new `BakeGroupView[]` each time it's read. Annotated in a JSDoc comment (`LightmapBaker.ts:459`). For UI code that reads `result.groups` on every RAF, this allocates N wrapper objects per frame. A cached array (invalidated on `rebakeAO`) would eliminate this.

### D4 · `getGroupForMesh` uses linear scan
`LightmapBaker.ts:485–506`: `for...of groups` + `includes(mesh)`. For N groups × M meshes per group = O(N×M) per call. Fine for typical scene sizes (< 20 groups, < 100 meshes) but could be a `Map<Mesh, GroupInternals>` precomputed once at bake end.

### D5 · `index.ts` exports `renderAtlas`, `mergeGeometry`, `extractPerTriangleMaterials`, `buildMaterialTextures`, `generateLightmapper`, `generateAOMapper`, `runComposite` as low-level primitives
`src/lib/index.ts:13–29`. These are the pre-Phase-3 primitive exports that the old demo used directly. Now that `LightmapBaker.bake()` is the one-call API and the demo uses it, these exports are public API surface that creates a backward-compat obligation without necessarily serving external callers. If the intent is to keep them as escape hatches, they are fine; if the intent is a clean `LightmapBaker`-only API, they are over-exposed.

### D6 · `classifyRenderer` has a TODO stub comment in production code
`Capabilities.ts:64–80`: The implementation is complete but the TODO comment block from the spec is still present above a working implementation (lines 64–80 are a comment describing what to implement; lines 81–98 do implement it). The comment is misleading — reads as if the implementation is missing.

---

## 5. Cross-Cutting Concerns

### S1 · Shader variant compile count per bake
Each `LightmapperMaterial` and `AOMaterial` constructor calls `new MeshBVHUniformStruct()` (`LightmapperMaterial.ts:45`, `AOMaterial.ts:38`) and emits new `ShaderMaterial` instances with inline GLSL (`LightmapperMaterial.ts:48–415`, `AOMaterial.ts:41`). Three.js compiles a WebGL program the first time each `ShaderMaterial` is rendered.

**Programs compiled per bake:** For `G` groups:
- `G` Lightmapper programs (all use identical GLSL but are separate `ShaderMaterial` instances → Three.js **cannot cache** across instances by default unless `customProgramCacheKey` is set identically)
- `G` AOMaterial programs (same issue)
- `G` CompositeMaterial programs
- `G` DilationMaterial programs
- 1 DenoiseMaterial program (shared via module singleton `fsQuad`, but `DenoiseMaterial` is `new`'d each refinement run at `Refinement.ts:99` — if `G > 1`, `G` programs)

In density mode with 3 atlases: potentially **15 GLSL program compiles** per bake. On NVIDIA D3D11 each compile can be 0.5–14s (D-016 in DECISIONS.md documents the 14s case for `USE_LIGHTMAP`). `LightmapperMaterial` and `AOMaterial` GLSLs are deterministic across groups (same defines, same BVH struct layout) — they would benefit from a material-pool / program-cache pattern.

`CompositeMaterial` (`Composite.ts:70–79`) also compiles fresh per group. Its GLSL (`CompositeMaterial.ts`) has no group-varying defines — it is literally the same program compiled N times.

`DilationMaterial` is `new`'d per group at `Refinement.ts:70`. Same issue.

### S2 · Uniform update frequency
- `sampleIndex` + `opacity`: updated per tile draw (`Lightmapper.ts:191–193`, `AOMapper.ts:129–130`) — per-tile cadence, mandatory.
- BVH uniforms (`bvh`): set once at material construction, never updated — correct.
- Light texture (`lightsTex`): set once at construction (`Lightmapper.ts:119`) — correct.
- Albedo/emissive textures: set once, shared across groups — correct.
- Composite uniforms (`directIntensity`, `giIntensity`, etc.): updated only when `refresh(overrides)` is called with non-null overrides — correct (per slider change).
- `aoTex` in CompositeMaterial: only updated on `rebakeAO` path via `refresh({ aoTex })` (`LightmapBaker.ts:1198`) — correct.

No uniform pathology found; all updates are at appropriate cadence.

### S3 · BVH usage pattern — one shared BVH, two per-group uploads
`LightmapBaker.ts:771–773`: single `MeshBVH` built from `allMeshes`. All groups share the same JS-side BVH object. However each `generateLightmapper` and `generateAOMapper` call constructs a fresh `MeshBVHUniformStruct` (see R2). The struct serializes the BVH node tree into a set of `DataTexture`/`InterleavedBuffer` uniforms inside the material. For `G` groups: `2G` serialization passes of the same BVH data to GPU uniform textures.

The BVH itself is correctly shared CPU-side (single `new MeshBVH()` per bake). The redundancy is in the GPU-side uniform uploads. Sharing one `MeshBVHUniformStruct` across all materials of the same type (and rebinding per draw if needed) would cut this to 2 uploads total (one for LightmapperMaterial type, one for AOMaterial type).

### S4 · MRT layout — 2 float outputs (`directOut`, `indirectOut`) per fragment
`LightmapperMaterial.ts:146–147`. This is correct and efficient for GLSL3. The MRT avoids a second full-res draw pass to separate direct/indirect channels. No issue.

### S5 · Per-group tile state duplication
`Lightmapper.ts:162–169` and `AOMapper.ts:108–115` each maintain their own `tileSize`, `pendingTileSize`, `nextTileIndex`, `grid` state — identical implementations. `setTileSize` (`Lightmapper.ts:272–283`, `AOMapper.ts:206–216`) is copy-pasted. This is a structural duplication. Not a hot-path issue but a maintenance concern.

### S6 · Scissor test state save/restore — 2 driver round-trips per tile
`Lightmapper.ts:187–188` + `210–211` (finally): `renderer.getScissorTest()` + `renderer.setScissorTest()` on every tile. The bake code always owns the render target during tile rendering; reading back the previous scissor state and restoring it adds two driver state calls per tile. At 256 tiles/sample × 96 samples = 24,576 scissor state round-trips per group. The bake could track its own scissor state rather than deferring to the renderer getter each time.

### S7 · LOC violations
- `LightmapBaker.ts`: 1238 lines. Project convention is 300 max (`CLAUDE.md`). **4× over limit.**
- `LightmapperMaterial.ts`: 416 lines (shader inline). Over 300 limit.
- `renderAtlas.ts`: 219 lines. Within limit.
- `AOMapper.ts`: 238 lines. Within limit.
- `Lightmapper.ts`: 317 lines. Marginally over limit.
- `AOMaterial.ts` (full file not read but ~200+ lines including shader). Check against limit.

`LightmapBaker.ts` is the primary violator. `bakeInternal` alone (`LightmapBaker.ts:731–958`) is 228 lines, well over the 50-line function limit.

---

## Summary Table

| ID | Category | File | Severity | One-line |
|---|---|---|---|---|
| H1 | Hot path | `LightmapperMaterial.ts:398–404` | High | Direct NEE loop repeats `casts` times with same origin; diverges only in RNG jitter |
| H2 | Hot path | `AOMapper.ts:121–164` | High | AO doubles BVH traversal count; no shared work with bounce pass |
| H3 | Hot path | `LightmapBaker.ts:1148` | Medium | Composite refresh fires every RAF; skippable when no sample completed |
| H4 | Hot path | `renderAtlas.ts:171–196` | Medium | 50 renderer.render() calls; mesh clones left for GC |
| H5 | Hot path | `Refinement.ts:50–55` | Medium | `generateMipmaps:true` on ping-pong RTs; mipmaps never consumed |
| R2 | Redundant | `LightmapperMaterial.ts:45`, `AOMaterial.ts:39` | Medium | BVH serialized twice per group (one per material type) |
| D1 | Dead code | `LightmapperUtils.ts:1–51` | Low | Entire file unreferenced from index.ts |
| D2 | Dead code | `Lightmapper.ts:310–315` | Low | Deprecated aliases still exported |
| D3 | Over-eng | `LightmapBaker.ts:461–477` | Low | `get groups()` allocates fresh wrapper array per access |
| S1 | Variants | Per-group material constructors | High | Up to 5 GLSL compiles per group; same programs, no cache sharing |
| S7 | LOC | `LightmapBaker.ts` (1238 LOC) | Medium | 4× over project 300-line limit; `bakeInternal` 228-line function |
