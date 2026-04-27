# Lightmap Baker — Progress Tracker

## Status

### Core

| Task | Status | Notes |
|---|---|---|
| 01 — Baseline verification | ✅ Done | |
| 02 — Understand architecture | ✅ Done | |
| 03 — Material textures | ✅ Done | Per-triangle albedo+emissive DataTextures |
| 04 — Bounce lighting (GI) | ✅ Done (1-bounce) | Multi-bounce deferred → merged into Task 07 below |
| 05 — Quality + denoising | ✅ Done | ETA estimator stub remains |
| 06 — Export + API | ✅ Done | LightmapBaker class, PNG/EXR/raw export |
| 09 — Separate AO map | ✅ Done | Via Task 13 MRT layers |
| 13 — Layer system + MRT | ✅ Phases A–C done | D1/D2 (texel density heatmap) merged below |

### Debt items resolved

| Item | Status |
|---|---|
| RT leak audit | ✅ Fixed (9b3b1cc) |
| `[baker]` prefix + DEBUG gate | ✅ Done (3739f94) |
| BakeError + validation | ✅ Done (b40e339) |
| GLSL3 + shader guards | ✅ Done (bed1f19) |

### Carryovers resolved in Session 8 (Task 07)

- ✅ `estimateTimeRemaining()` — rolling-average implementation
- ✅ Atlas-pass normal uses inverse-transpose (renderAtlas.ts)
- ✅ sRGB hex picker → linear shader: verified already in place at both call sites

### Extended tasks

| Task | Status |
|---|---|
| 07 — Multi-light + multi-bounce + production polish (merged) | ✅ Done | Sub-phases 7A–7F shipped Session 8 |
| 12 — Model import/export (GLB round-trip) | ✅ Done | Wired in demo since pre-S8: GLTFLoader + GLTFExporter + file-picker UI in `CornellBoxExample.ts` |
| 08 — WebGL timeout protection | ⬜ |
| 10 — Lightmap downscaling | ⬜ |
| 11 — Light probes (SH) | ⬜ |

### Pending refactors (not original tasks)

| Item | Status | Notes |
|---|---|---|
| Demo → public `LightmapBaker.bake()` migration | ⬜ | Demo still uses its own group orchestration; per-mesh `resolution` override is wired in the public class but not the demo path. Carry-over from S8. |
| AO `samples` separate from indirect ray budget | ✅ Done | Session 9 — AO now lives in its own `AOMapper` / `AOMaterial`. |

### Deliberate exclusions

| lucas-jones TODO item | Why excluded |
|---|---|
| Denoise offline (Optix) | Requires native binary — violates browser-only constraint |
| Only denoise indirect light & AO | Nice-to-have; can be added by separating MRT denoise channels |

## Session Log

### Session 1 — 2026-04-25

**Tasks completed**
- Task 00 — Agentic setup: created `CLAUDE.md`, `.claude/tasks/01-…06-…md`, `.claude/progress.md`, prepared `docs/` and `screenshots/` directories.
- Task 01 — Baseline verification: Cornell box scene (`src/CornellBoxExample.ts`) bakes correctly with the upstream direct-light-only pipeline. Saved `screenshots/01-baseline.png`. Zero console errors, zero warnings during bake. xatlas UV2 unwrap completes for all 11 meshes (5 walls + 2 classic blocks + sphere + knot + accent + light marker). Position/normal G-buffers populate correctly (verified in earlier sessions via the "Positions" / "Normals" render modes).

**Baseline behaviour observed (matches expected)**
- Walls show direct lighting from the point-light position.
- Soft shadows visible on the floor under all blocks/sphere/knot.
- Corner AO visible (ceiling–wall and wall–wall corners darken).
- No color bleeding — confirms bounces are not yet implemented.

**Cornell scene composition**
- Walls: white floor/ceiling/back, red left, green right (10×10 inward-facing planes).
- Classic blocks: tall (back-left, ~17° rotated), short (front-right, ~-17° rotated).
- Advanced extras: diffuse white sphere (front-right), gold torus knot (front-center), blue accent block (front-left).
- Light: visual `PointLight` + emissive marker plane parented to `lightDummy` at `(0, 9.5, 0)`. Movable via `TransformControls`. Re-bake on demand with the "Bake" button.

**Blockers surfaced for downstream tasks (DO NOT FIX SPECULATIVELY)**

1. **The shader has no concept of an emissive-mesh light source.** `src/lightmap/LightmapperMaterial.ts` carries a single `uniform vec3 lightPosition` and a `uniform float lightSize`; direct-light rays are aimed at that point. It does not look up emissive material data on hit, so the existing pipeline cannot identify "ceiling emitter mesh" the way Task 03/04 assumes.

2. **The "white sphere" success criterion in Task 04 is colour-bleed-by-default.** Our scene's diffuse sphere is at `MeshStandardMaterial` `(0xf5f5f5, roughness 0.4, metalness 0.0)` — correct for receiving lightmap diffuse. But: the upstream shader collapses indirect to a scalar, not a colour: `totalIndirectLight.r/g/b += 1.0` on a miss (see `LightmapperMaterial.ts` ~lines 175-178). So even adding a per-triangle albedo lookup is insufficient — the indirect accumulator must become a `vec3` carrying tinted radiance.

3. **`mergeGeometry` discards material identity.** `src/utils/GeometryUtils.ts` builds the BVH from a single merged buffer geometry. It does not preserve a per-triangle material/mesh-index attribute. Task 03's "lookup albedo by triangle index" requires either:
   (a) writing a per-triangle material-index buffer attribute during merge, then exposing it as a triangle-indexed DataTexture, or
   (b) writing one giant flat `albedoTexture` keyed by global triangle index in merge order.
   The merge order in `mergeGeometry` is `meshes.map(...)`, which is the same order as `this.meshes` in `CornellBoxExample.ts` — that ordering is preserved and exploitable.

4. **Atlas pass currently runs against the demo's local materials.** `src/atlas/renderAtlas.ts` clones each mesh and replaces the material with the position/normal shaders. It does not need material data, so it's not affected — but it does mean the position/normal G-buffers are 1-to-1 with `meshes` in scene order; the material lookup can use the same ordering.

**Next session should start with Task 02** — read every file under `src/`, write `docs/architecture.md` with the data-flow diagram, BVH-merge order, render-target lifecycle, and the exact GLSL line where the bounce ray belongs. The blockers above will be confirmed/refined during that walkthrough; do not begin Task 03 until Task 02 is documented and committed.

### Session 2 — 2026-04-25

**Task completed**
- Task 02 — walked every file in `src/` and wrote `docs/architecture.md`. All four Session-1 blockers confirmed against code with file:line citations.

**Key findings written into `docs/architecture.md`**
- Active entry path is `index.ts → CornellBoxExample`. `LightBakerExample.ts` (GLB demo) is unreferenced legacy; `LoaderUtils.ts` is only used by it. `LightmapperUtils.ts` (renderSampleCount/renderTime) and `denoise/DenoiseMaterial.ts` are defined but not wired into the active pipeline.
- Ray tracing is **GPU shader raycasting** via `three-mesh-bvh`'s `bvhIntersectFirstHit` GLSL helper; BVH uploaded once via `MeshBVHUniformStruct.updateFrom`. Single fullscreen 2×2 plane processes all texels in parallel; `casts` rays per-texel inside the fragment shader's inner loop. No CPU-side raycast, no JS-side texel iteration.
- Progressive accumulation = additive alpha blend with `opacity = 1/sampleIndex`. One additional sample per `requestAnimationFrame`. Auto-pause at 6s.
- **Bounce insertion point pinned:** `src/lightmap/LightmapperMaterial.ts` line 178, immediately after the `if (!hit) { totalIndirectLight += 1; }` sky-miss block, before the AO check at line 180. The `else` branch (`hit == true`) is currently empty — that's where the bounce/shadow-ray logic must go.
- `totalIndirectLight` is already declared `vec3` but used as a colorless scalar accumulator. Replacing `+= 1.0` with tinted radiance requires no new accumulator — only the Task-03 albedo lookup keyed by `faceIndices.x`.
- `mergeGeometry` order = `meshes.map(...)` order = `CornellBoxExample.meshes` order. That ordering is the lookup key for both the future albedo DataTexture and any per-triangle materialIndex attribute.
- **Render-target leak surfaced** for Task 05/06: position/normal/lightmap render targets are never `.dispose()`'d; every rebake leaks. Documented in §4 of `docs/architecture.md`.
- The atlas-pass normal shader uses `modelMatrix * vec4(normal, 0.0)` rather than the inverse-transpose — incorrect under non-uniform scale. Cornell has none, so this is benign for now; flag for any GLB content downstream.

**Blocker status after walkthrough**
1. No emissive-mesh-as-light path — confirmed (`LightmapperMaterial.ts:71-72, 191-194`).
2. Indirect accumulator is colorless — confirmed (`LightmapperMaterial.ts:175-177`).
3. `mergeGeometry` discards material identity — confirmed (`utils/GeometryUtils.ts:4-15`); merge ordering is preserved and exploitable.
4. Atlas pass is material-agnostic — confirmed (`atlas/renderAtlas.ts:113-117`).

**Next session: Task 03.** Plan: add per-triangle `materialIndex` BufferAttribute during `mergeGeometry`; pack albedo (and emissive) into a `DataTexture` keyed by global triangle index; add `uniform sampler2D albedoTex` (+ emissive equivalent) to `LightmapperMaterial`. Direct-light loop multiplies hit shading by hit albedo before Task 04 wires up the bounce term at the line-178 insertion site.

### Session 3 — 2026-04-25

**Task completed**
- Task 03 — per-triangle albedo + emissive material textures wired end-to-end. Vite production build succeeds (`717 KiB`), no TS errors in our code (the `tsc --noEmit` crash is a Node 25 vs TS 4.4 runtime incompat, unrelated).

**What changed**

| File | Change |
|---|---|
| `src/utils/GeometryUtils.ts` | Added `extractPerTriangleMaterials(meshes)` returning `{ albedo, emissive, totalTriangles, perMeshTriangleCounts }`. Walks meshes in **the same order `mergeGeometry` concatenates them**, so index `i` in the flat arrays === face index `i` returned by `bvhIntersectFirstHit`. Handles `MeshStandardMaterial`/`MeshPhysicalMaterial` (color + emissive×emissiveIntensity), `MeshBasicMaterial` (color only, emissive=0), material arrays (uses slot 0 with warn), and `ShaderMaterial`/unknown (white-fallback with warn). Indexed-vs-non-indexed triangle count handled. `mergeGeometry` itself unchanged. |
| `src/utils/MaterialTextures.ts` | **New file.** `buildMaterialTextures(perTri)` packs into two square `DataTexture`s of side `ceil(sqrt(N))` using `RGBAFormat` + `FloatType` + `NearestFilter` + `ClampToEdgeWrapping`, no mipmaps. Float chosen because Task 04's eventual emissive area light needs HDR intensity > 1; UByte would silently clamp. RGBA chosen over RGB because some drivers internally pad RGB to RGBA anyway. |
| `src/lightmap/LightmapperMaterial.ts` | Added 3 uniforms: `albedoTex: sampler2D`, `emissiveTex: sampler2D`, `materialTextureSize: float`. Added GLSL helper `vec3 readTriangleMaterial(sampler2D tex, uint triIdx)` that does the `(triIdx % W, triIdx / W)` square lookup. Added a labelled `BOUNCE INSERTION POINT (Task 04)` comment at the hit branch of the hemisphere loop. Added a `1e-30`-weight reference call to keep the new uniforms alive through GLSL dead-code elimination until Task 04 actually consumes them. **No change to existing ray-tracing logic** — direct/indirect/AO output is byte-identical to baseline. |
| `src/lightmap/Lightmapper.ts` | Extended `RaycastOptions` with `albedoTexture`, `emissiveTexture`, `materialTextureSize`. Forwarded to `LightmapperMaterial` constructor. |
| `src/CornellBoxExample.ts` | After `mergeGeometry` + `MeshBVH` (so the merge order is locked), call `extractPerTriangleMaterials(this.meshes)` then `buildMaterialTextures(perTri)`. Pass results into `generateLightmapper`. Console-log triangle 0's albedo + the first red-wall triangle's albedo + per-mesh triangle counts on every bake (success criterion). |

**Verification approach**
- Console output on each bake (visible in browser DevTools):
  - `[baker] material textures built: <N> triangles, <W>×<W> texture`
  - `[baker] triangle 0 albedo (expect floor white ~0.87): (r, g, b)`
  - `[baker] first left-wall triangle albedo (expect red ~0.74,0.02,0.02): (r, g, b)`
  - `[baker] per-mesh triangle counts: [...]`
- Two independent witnesses (triangle 0 + first left-wall triangle) prove both the indexing math and the per-mesh offset accumulator are correct, not a coincidence.
- Visual: existing direct/AO/indirect output unchanged — Cornell renders identically to Session 1 baseline. Any regression here means we accidentally rewired the radiance pipeline (we didn't).

**Decisions made (and why)**
1. **Float texture, not 8-bit byte.** Cornell's eventual emissive ceiling-light source needs `emissiveIntensity` ~5–20× to drive bounce GI within the 6-second progressive bake window. UByte caps at 1.0 → clamping makes the area light invisible in the bounce term. Float costs 16 B/texel vs 4, but at ~5K triangles → ~71×71 → ~80 KB total.
2. **Square `ceil(sqrt(N))` texture, not 1D row.** Row layout would crowd `MAX_TEXTURE_SIZE` (16384) at >16K triangles. Square scales to 1M+ triangles before approaching the cap.
3. **Keep `mergeGeometry` untouched; sibling extractor.** The merge function's job is geometry-only. Material extraction is a separate concern that benefits from independent testing. The two functions are guaranteed to produce parallel orderings because both iterate `meshes` in input order.
4. **Don't sample yet.** Task 04 owns the actual bounce sampling at the marked insertion point. Today we only ensure the uniforms reach the GPU and the lookup helper compiles. The `1e-30` keep-alive is the cheapest way to defeat shader DCE without producing visible output.
5. **No emissive ceiling-light mesh added to the scene.** Cornell's current light is `lightDummy.position` + a non-BVH visual marker. Adding a real emissive ceiling mesh is a Task 04 scope question (it changes the light model fundamentally). For Session 3 the emissive texture is correctly all-zero because no BVH-resident mesh has emissive material.

**Carry-overs / not changed**
- The render-target leaks documented in `docs/architecture.md` §4 are still present. The two new `DataTexture`s are *also* not disposed across rebakes. Add a single dispose pass in Task 05/06.
- Material-array (per-face groups) path uses slot 0 with a console warning — none of Cornell's meshes use it, but a GLB import path will. Mark for Task 06.
- `tsc --noEmit` errors out on Node 25 due to TS 4.4's `tsc.js` runtime; Vite's esbuild transpile is the source of truth. Consider a TS bump in a maintenance pass — flagged but **not done** (CLAUDE.md forbids dependency upgrades).

**Next session: Task 04.** All infrastructure is ready. Insertion site is `src/lightmap/LightmapperMaterial.ts` at the comment block labelled `◀──── BOUNCE INSERTION POINT (Task 04) ────▶`. The hit-branch logic should:
1. Compute `vec3 hitPos = rayOrigin + newDirection * dist;`
2. `vec3 hitAlbedo = readTriangleMaterial(albedoTex, faceIndices.w);`
3. `vec3 hitEmissive = readTriangleMaterial(emissiveTex, faceIndices.w);`
4. Add `hitEmissive` to `totalIndirectLight` (direct visibility of an emitter through this hemisphere ray).
5. Cast a shadow ray from `hitPos` toward `lightPosition`; if unoccluded, contribute `hitAlbedo * lightColor * max(0, dot(faceNormal, L)) / PI` to `totalIndirectLight` (the color-bleed term).
6. Decide whether to recurse a 2nd bounce inside the same fragment (multiplies cost N²) or run a multi-pass scheme (cheaper, more samples needed).
Replace the `+= 1.0` sky-miss accumulator with proper radiance once the hit branch produces real values, so the two paths share the same accumulator semantics.

### Session 4 — 2026-04-25

**Task completed**
- Task 04 — 1-bounce GI implemented at the marked insertion site in `LightmapperMaterial.ts`. Vite build succeeds (718.49 KiB, +~1 KiB vs Session 3 — purely the new GLSL string). Visual verification by user against the Cornell criteria is the final gate.

**What changed (single file)**

`src/lightmap/LightmapperMaterial.ts`:

1. **Hit-branch logic** filled in at the `BOUNCE INSERTION POINT` marker. The hit branch is gated by `if (indirectLightEnabled && hit)` to avoid wasted shadow rays when only AO is enabled.
2. **Term (a) — emissive direct visibility:** `totalIndirectLight += hitEmissive`. No cosine factor: cosine-weighted hemisphere PDF (`cosθ/π`) cancels with the `cosθ` in the rendering equation, leaving the bare `L_e`. Currently zero in Cornell because no BVH-resident mesh has emissive material — this is correct, future-proofs for Task 07's emissive area lights.
3. **Term (b) — NEE shadow ray to point light:** From the hit point, build `shadowOrigin = hitPos + hitNormal * 0.001` (using `hitNormal = side > 0 ? faceNormal : -faceNormal` to handle backface hits). Cast a single BVH ray toward `lightPosition`. Compare the closest-hit distance against `distToLight`: if nothing intervenes (or the closest hit is beyond the light), the light is visible. Contribution: `hitAlbedo * cos(N·L) / π * 1.0` (unit-white intensity matches the `+= 1.0` scale used by the direct-light loop on visibility).
4. **Sky-miss on indirect zeroed.** The baseline added `+= 1.0` on miss as a stand-in environment. In a closed Cornell, those misses are noise — keeping them washed out the new bounce term. AO miss handling (separate accumulator, line ~245) is **unchanged**; AO still flips on `!hit || dist > ambientDistance` exactly as before. Open-world / non-closed scenes will need an explicit sky/environment uniform later (flag for a follow-up; not done).
5. **Keep-alive stub removed.** The `_matKeepAlive * 1e-30` block at the end of `main()` is gone — `albedoTex`/`emissiveTex`/`materialTextureSize` are now legitimately consumed by the bounce code, so GLSL DCE can no longer strip them.

**Math notes (for future sessions)**

- Cosine-weighted hemisphere sampler (`getHemisphereSample`) was already in place from upstream; PDF = `cos(θ)/π`. This is why the emissive-direct term has **no** explicit cosine factor.
- The NEE term uses Lambertian BRDF `f_r = ρ/π` × cosine `cos(N·L)` × incoming radiance. With unit-white light, contribution = `hitAlbedo / π · cos(N·L)`. This is *not* drawn from the cosine-weighted distribution, so the cosine factor must be written explicitly.
- `0.31830988618` is `1/π` literal-encoded — chosen over `1.0/3.1415` to avoid one runtime division per shadow ray and match the common GLSL idiom.
- The `multiplier = directLightEnabled && indirectLightEnabled ? 0.5 : 1.0` mix at line ~273 is unchanged. Indirect is now physically lower-magnitude (no white sky), so combined output is darker than the baseline — that's expected; baseline brightness was inflated by the sky term.

**Decisions made (and why)**

1. **NEE instead of pure-emissive bounce.** Cornell's light is `lightPosition` + a non-BVH visual marker; there is no emissive triangle in the BVH. Pure-emissive bounce (the spec's literal algorithm) would give zero color bleed in this scene. NEE was the smaller, scene-compatible path — and it composes additively with future emissive surfaces (Task 07).
2. **No emissive ceiling-light mesh added.** That's a scene/light-model change (`CornellBoxExample.ts`); kept out of this task to honour the "Don't over-engineer" rule. Flag: when Task 07 adds proper area lights, the emissive-direct term in this shader will start contributing for free — no shader changes needed there.
3. **Hardcoded 1 bounce.** Spec calls for `bounces: number — default 1, max 4`. Implemented default 1 only; multi-bounce requires either a recursive shader (no recursion in GLSL — needs hand-unrolled loop with N² ray cost) or a multi-pass scheme. Not in scope for this session. The hit-branch is structured so that wrapping it in a loop with shifting origins/directions is a mechanical extension.
4. **`faceIndices.w` for the triangle index.** Confirms the comment at line 81 and the lookup-helper contract from Session 3. (Session 1 mistakenly used `.x`; the Session-3 wiring used `.w`. Sticking with `.w` because the keep-alive call from Session 3 already validated this index works against the texture layout.)
5. **Ray-bias of `0.001` along `hitNormal`.** Same magnitude as the primary-ray bias on line 187 (`rayOrigin += rayDirection * 0.001`). For Cornell at scale ~10 units this is well below visible thresholds; flag if a sub-unit-scale GLB import surfaces shadow acne.
6. **No new uniforms.** The shader reuses `lightPosition` from the existing direct-light path. No `lightColor`/`lightIntensity` exposed yet; spec doesn't require them for Cornell.

**Verification (deferred to user)**

User-facing check per `.claude/tasks/04-add-bounce-lighting.md`:
1. Left side of white sphere — RED tint from red wall.
2. Right side of white sphere — GREEN tint from green wall.
3. Ceiling corners near red wall — faint red.
4. Ceiling corners near green wall — faint green.
5. Floor near red wall — faint red.
6. Soft shadow under sphere (already worked from baseline; should not regress).

If 1–5 all visible: success. If any fail, debug paths in priority order:
- Visualise indirect alone (toggle direct off in the UI). The bounce term must be visibly tinted, not grey.
- Confirm Session 3's console logs still show `triangle 0 albedo (white)` and `first left-wall triangle (red ~0.74,0.02,0.02)` — bad indexing would show as monochrome bleed.
- Inspect a sphere-left texel: its hemi rays should preferentially hit the red wall, then NEE-shadow to `(0, 9.5, 0)`. If the shadow ray is occluded by the tall block, the bleed will be patchy in shadow — that's physically correct, not a bug.

**Carry-overs / not changed**

- Render-target leaks (architecture.md §4) still present.
- Material textures still not disposed across rebakes (Session 3 carry-over, still pending).
- Sky/environment lighting deliberately removed for Cornell; needs explicit uniform when non-closed scenes are supported.
- `bounces` parameter and 2nd+ bounce recursion deferred — see Decision 3 above.
- `lightColor` / `lightIntensity` not yet uniforms — needed before Task 07's multi-light support; trivial mechanical add.

**Next session: Task 05 — quality + denoising.** With color bleed working but at low sample counts (likely noisy on the sphere), Task 05's denoiser becomes the natural next step. Alternative: jump to Task 06 (export + API) if the visual result already looks clean enough at 6s × `casts=N` per frame.

### Session 5 — 2026-04-25

**Tasks completed**
- Task 04 hardening: lighting controls, energy rebalance, leak fixes, scene polish, and most importantly **the discovery + fix of a critical BVH-index-reorder bug** that had been silently corrupting every material lookup since Task 03 landed.

**The critical bug — BVH index reorder vs material lookup**

`new MeshBVH(merged)` mutates `merged.index` in place — see `node_modules/three-mesh-bvh/src/core/build/sortUtils.template.js:38–46`. The Hoare partition swaps three-element triples in the index buffer to build a spatially-sorted tree. After construction, the geometry's index buffer is in **BVH leaf order**, not the original mesh-by-mesh concatenation order.

The shader's `bvhIntersectFirstHit` returns `faceIndices.w = i` where `i` is the iteration index inside the BVH leaf's triangle range — i.e., a position in the **post-reorder** index buffer (see `bvh_ray_functions.glsl.js:88,102`).

But Task 03's `extractPerTriangleMaterials` built the per-triangle albedo+emissive arrays by walking `meshes` in **input order**, writing mesh-i's material into a contiguous range matching its pre-reorder triangle slot. Result: every triangle hit returned the wrong mesh's albedo.

**Why it took until Session 5 to surface**
- Task 03's verification was JS-side only — it logged `perTri.albedo[0]` and `perTri.albedo[leftWallStart * 3]`. Both checks pass because the **JS-side extraction** was correct. Neither checked what `faceIndices.w` retrieves at GPU hit time.
- Task 04's keep-alive stub used `readTriangleMaterial(albedoTex, uint(0)) * 1e-30` — a constant index, never the actual `faceIndices.w`. So the GPU lookup path was never exercised in Task 03.
- Task 04's first bake produced "kinda working" colour bleed because some triangles, by chance, happened to map to the right mesh's slot after the spatial sort. Cornell's symmetry hides the misindexing — most surfaces are white, so most wrong lookups were "white → white" no-ops.
- Once the user pushed `lightIntensity` high enough to make the bounce term visible, the misindexing surfaced as: green bleed appearing on the LEFT face of the LEFT cube (because the cube's left-face triangles happened to remap to the green wall's slot in the material texture), and the gold knot's many triangles tinting the entire advanced scene yellow.

**The fix**

1. **`mergeGeometry`** (`utils/GeometryUtils.ts`) now adds a per-vertex `meshIndex` `Float32Array` `BufferAttribute` before merging. Each vertex of mesh-i gets the value `i`. Vertices are NOT reordered by BVH construction (only the index buffer is), so this tag survives.

2. **`extractPerTriangleMaterials`** signature changed: now takes `(merged: BufferGeometry, meshes: Mesh[])`. Walks `merged.index` in post-BVH order; for each triangle reads `meshIndex` of its first vertex (all three share the tag by construction) and looks up the corresponding mesh's albedo/emissive.

3. **`CornellBoxExample.bake`** reordered:
   ```
   const merged = mergeGeometry(this.meshes);
   const bvh = new MeshBVH(merged);              // reorders merged.index in place
   const perTri = extractPerTriangleMaterials(merged, this.meshes);  // reads reordered order
   ```
   Calling `extractPerTriangleMaterials` BEFORE `new MeshBVH(merged)` would re-introduce the bug. Comment in the file calls this out explicitly.

4. **Diagnostic logging upgraded** from "expect floor white" (assumed pre-reorder) to a sample of triangles 0/1/middle/last with their mesh tag and albedo. A wrong-mesh mapping is now immediately visible in DevTools.

**Other changes this session**

| Area | Change | Reason |
|---|---|---|
| `LightmapperMaterial.ts` | `lightColor` + `lightIntensity` uniforms applied to direct loop and NEE bounce | User had no light-strength knob; baseline `+= 1.0` was hardcoded too dim once Task 04 zeroed the white sky-miss |
| `LightmapperMaterial.ts` | `giIntensity` uniform multiplies the indirect channel post-divide | Independent dial for color-bleed intensity, important for stylised vs physical look |
| `LightmapperMaterial.ts` | `skyColor` + `skyIntensity` uniforms added to indirect on hemisphere-miss | Configurable fill light; default 0 preserves closed-scene physical bake; >0 acts as environment for open scenes or as gentle fill |
| `LightmapperMaterial.ts` | Removed the `side > 0 ? faceNormal : -faceNormal` flip | three-mesh-bvh internally does `norm = side * normalize(norm)` (`bvh_ray_functions.glsl.js:64`) — `faceNormal` is already oriented toward the ray origin. The flip was double-negating on backface hits, pushing `shadowOrigin` INTO the surface and self-occluding the NEE shadow ray. Killed bounce contributions from ceiling, sphere/knot interiors |
| `LightmapperMaterial.ts` | Dropped the `1/π` Lambertian factor from the NEE bounce | The direct loop is non-physical (`+= lightColor*lightIntensity` with no receiver-side cos or distance falloff). Strict `albedo/π * cos` on the bounce was ~π× quieter than direct under the 0.5 mix, crushing colour bleed below visibility. Dropping `1/π` puts both channels on the same order of magnitude. `giIntensity` provides further control |
| `CornellBoxExample.ts` | Walls converted from `PlaneGeometry` to `BoxGeometry` (T = 0.2) | Diagnostic + correctness: thin DoubleSide planes had identical UV2 on front and back faces (last-write-wins in atlas pass) and could be missed by grazing rays due to BVH precision. Boxes have unique UV2 per face and a real volume to hit. Inner surfaces sit on the original room bounds, outer faces extend outward |
| `CornellBoxExample.ts` | Walls + closed meshes: `FrontSide` (was `DoubleSide`) | When camera orbited outside the box, DoubleSide showed the inside-baked lightmap on the back face — looked like the wall was "glowing on the wrong side". FrontSide back-face-culls these |
| `CornellBoxExample.ts` | Accent block: `0x4c9aff` → `0xc77a3a` (terracotta) | Bright blue (linear B=1.0 channel) was bouncing strongly enough to dominate the colour bleed in the front-left of the room. Terracotta is muted and complements the red wall instead of fighting it |
| `CornellBoxExample.ts` | Defaults bumped: `casts 3→5`, `lightIntensity 1.0→4.0`, `giIntensity 1.0→2.0` | Less noise, lit walls land near 1.0 in beauty mode after the closed-scene + 1/π-drop math |
| `atlas/generateAtlas.ts` | `unwrapper.packOptions.padding = 16; resolution = 4096` | xatlas defaults are 0 padding + 2048 resolution. Combined with `renderAtlas`'s ±2-pixel dilation halo, zero-padding charts bleed into neighbours. Originally suspected as the cause of misplaced colour, but kept anyway because the dilation-bleed risk is real |
| `Lightmapper.ts` | New `RaycastOptions` fields: `lightColor`, `lightIntensity`, `giIntensity`, `skyColor`, `skyIntensity` | Forward through to material constructor |

**Math reference (current shader)**

- Direct (per visible cast): `+= lightColor * lightIntensity` (no receiver cos, no distance; treats the light as fixed-irradiance unit when visible)
- Indirect emissive (per hit): `+= hitEmissive` (cosθ/PDF cancels under cosine-weighted hemisphere sampling)
- Indirect NEE (per hit, light visible from hit point): `+= hitAlbedo * cos(N_hit·L) * lightColor * lightIntensity` (the `1/π` is dropped intentionally to match the non-physical direct-loop magnitude)
- Indirect sky-miss: `+= skyColor * skyIntensity`
- Final: `multiplier * direct + multiplier * indirect * giIntensity`, then `* AO`. `multiplier = 0.5` if both direct & indirect are on, else 1.

**Carry-overs**

- Render-target leaks (architecture.md §4) still present.
- Material textures still not disposed across rebakes.
- Multi-bounce (`bounces` parameter, max 4) still deferred — current shader is hardcoded 1-bounce. Multi-bounce in WebGL2 GLSL needs a hand-unrolled loop with N² ray cost or a multi-pass scheme; out of scope this session.
- `lightColor`/`skyColor` are uploaded as raw floats from the sRGB hex picker via `convertSRGBToLinear()`. Working but UI shows sRGB hex while shader uses linear — mismatch can confuse users debugging colour values.
- The BVH index-reorder fix uses a Float32 per-vertex tag; for very large meshes (millions of vertices) this adds `4 bytes × vertices` to the merged geometry. Negligible at Cornell scale; flag if scaling up.

**Lessons / postmortem**

1. **Verifying intermediate data is not the same as verifying the lookup.** Task 03's verification logged the JS-side flat array contents, not what the GPU read at hit time. The actual lookup needed a runtime test (e.g., pin a known-position texel, log its hit albedo over many samples, compare to expected colour).
2. **Don't trust "looks plausible" output.** The Task 04 "kinda working" bleed felt close enough to fool the eye. Cornell's symmetry meant ~70% of mismatched lookups were white-to-white and visually invisible. The bug only surfaced once `lightIntensity` was cranked high enough to make the colour channels of the misindexed bounces visible.
3. **Library APIs that mutate caller state need defensive testing.** `MeshBVH` documents the index reorder, but the documentation lives in the upstream README, not in our integration code. A single-line comment on the `new MeshBVH(merged)` call could have prevented this from the start.

**Next session: Task 05 — quality + denoising.** Or revisit the `bounces` parameter for true multi-bounce GI now that 1-bounce is correctly indexed and visibly working.

### Session 6 — 2026-04-25

**Task in progress** — Task 05 (quality + denoising). All five spec items implemented except multi-bounce (still deferred — see Decision 1 below). Plus the user's extra: a sample-budget slider replaces the wall-clock `setTimeout(6000)`. Vite build green at 730.53 KiB (+~9 KiB vs S5).

**What changed**

| File | Change |
|---|---|
| `src/lightmap/Lightmapper.ts` | Added `targetSamples: number` to `RaycastOptions`. `render()` now returns `{ samples, done }` and short-circuits once `samples >= target`. New `reset()` method exported (unused by Cornell, future-proof). When `target == 0` the old "render forever" behaviour is preserved. |
| `src/lightmap/DilationMaterial.ts` | **New.** Chart-aware 3×3 dilation. For each texel: if `positionTex.a > 0` (inside a UV chart) → pass through; else average the non-empty 3×3 neighbours (`step(1e-6, sum.rgb)` weight). Re-uses the position G-buffer from Pass 1 as a free chart mask — no extra textures needed. |
| `src/lightmap/PostProcess.ts` | **New.** `runPostProcess(renderer, src, positions, res, opts)`. Allocates two ping-pong float RTs, runs `dilationIterations` passes of `DilationMaterial`, then optionally one bilateral denoise pass. Returns `{ texture, dispose }`. Caller owns RT lifetime. Reuses a single fullscreen-quad mesh + ortho camera at module scope. |
| `src/denoise/DenoiseMaterial.ts` | Stripped `<tonemapping_fragment>` and `<encodings_fragment>` from the fragment shader. Reason: the denoiser writes into an internal float RT that's then consumed as `MeshStandardMaterial.lightMap` — which expects linear values. Leaving the encoding includes in would double-encode (tonemap + sRGB) the lightmap, blowing out beauty mode. The two `#include` lines were leftovers from a screen-output context. |
| `src/CornellBoxExample.ts` | (1) Imports `runPostProcess`. (2) New `QUALITY_PRESETS` table — Custom / Draft / Preview / Production / Final → `{lightMapSize, casts, targetSamples}`. (3) New options block: `quality`, `targetSamples`, `autoApplyPost`, `dilationIterations`, `denoiseEnabled/Sigma/Threshold/KSigma`, plus four monitor fields (`samples`, `spp`, `etaSec`, `postStatus`). (4) Pane UI: quality dropdown (manual changes flip back to Custom), samples slider (16–1024 step 16), Post-process folder with 6 inputs + Apply Post / Show Raw buttons, Status folder with 4 read-only monitors. (5) `bake()` no longer uses `setTimeout(6000)` — pause is now driven by the lightmapper's `done` flag. (6) `applyRenderMode()` prefers `this.post.texture` over the raw lightmap when present. (7) Render loop drives readouts every frame, calls `applyPostProcess()` on `done` if `autoApplyPost`. (8) New methods: `applyQualityPreset`, `applyPostProcess`, `showRaw`, `estimateTimeRemaining` (stub awaiting user). (9) Casts slider cap raised 4→16 to accommodate Final preset (8 casts). |

**Pipeline notes**

- Effective samples-per-texel = `targetSamples × casts`. UI shows both as separate monitors (`frames` and `spp`).
- Post-process pipeline order: `src → (dilate)×N → A → (denoise?) → B → result`. Two RTs total, ping-ponged. Denoise reads from the dilated buffer so sparse texels don't poison the bilateral kernel.
- Auto-apply post fires once when the lightmapper reports `done`. Manual Apply Post can be re-run to re-tune sliders without re-baking. Show Raw drops the post-process and falls back to the live RT.
- Quality presets — Draft (256/4 casts/32 frames ≈ 128 spp), Preview (512/5/96 ≈ 480 spp), Production (1024/6/256 ≈ 1536 spp), Final (2048/8/512 ≈ 4096 spp). Manual changes to lightMapSize/casts/targetSamples flip the dropdown to Custom.

**Decisions made (and why)**

1. **Bounces stays at 1.** Spec asks for 1/2/3/4 across presets. WebGL2 GLSL has no recursion → multi-bounce needs either a hand-unrolled hit-loop (N² ray cost per primary ray) or a multi-pass scheme with intermediate radiance RTs. Both are larger than Task 5's scope. Presets vary `samples × casts × resolution` but call the same 1-bounce shader. Honest UI: not labeled "bounces" anywhere. Task 7's multi-light work or a dedicated follow-up is the right time to revisit.
2. **Position G-buffer alpha as the chart mask.** The atlas pass writes `gl_FragColor = vWorldPosition` with `vWorldPosition.w = 1.0` (vertex emits `vec4(position, 1.0)`). So `positionTex.a == 1` inside any UV chart, `0` outside. Free, exact, no extra texture upload needed.
3. **Strip tonemapping/encoding from DenoiseMaterial.** It's no longer a screen-output material. Lightmap consumers want raw linear. Discovered by inspection — would have produced washed-out beauty mode if not caught.
4. **Two RTs, ping-ponged, owned by `PostProcessResult`.** Each bake makes a fresh pair; previous pair is `.dispose()`'d in `bake()`. Doesn't fix the broader RT-leak (architecture.md §4) but doesn't add to it either.
5. **Auto-apply on done, manual re-apply via button.** Lets the user iterate denoise sliders without re-baking. Avoids re-running post-process every frame during accumulation (would tank framerate at 1024²).
6. **Sample-budget instead of wall-clock timeout.** `targetSamples` slider gives reproducible quality across machines. The previous `setTimeout(6000)` produced wildly different results on a fast desktop vs an integrated GPU.
7. **`estimateTimeRemaining` left as a stub.** Surfaces a real choice to the user — naive proportional vs rolling window vs EMA. Current stub is the naive form, jumpy in the first second. User contributes the smoothing strategy.

**Carry-overs / not changed**

- Render-target leaks (architecture.md §4) still present — `lightmapTarget` and the position/normal G-buffers from Pass 1 are not disposed across rebakes. Post-process RTs ARE properly disposed via `this.post.dispose()` on rebake. Material textures from Task 03 also still leak.
- Bounces still hardcoded to 1 (see Decision 1).
- ETA estimator is a placeholder until user picks a smoothing strategy.
- Bilateral denoiser uses RGB delta as the edge term (Morrone's "smart denoise"). The Task 5 spec mentions using world-position + normal textures as edge guides — would give better material-boundary preservation but requires a new shader. Current behaviour is acceptable for Cornell; revisit when GLB content has finer geometry.

**Next session.** User implements `estimateTimeRemaining()` (5–10 lines, see banner comment in `CornellBoxExample.ts`). Then close out Task 05 and proceed to Task 06 (export + API) — or revisit multi-bounce as a dedicated phase.

### Session 7 — 2026-04-25

**Task in progress** — Task 13 / Phase A.2 + Phase A.3: MRT shader split and view-time CompositeMaterial. Phase A.1 (Layer Registry + UI rename) was completed in Session 6. Vite build green (build size not recorded this session).

**What changed**

| File | Change |
|---|---|
| `src/lightmap/LightmapperMaterial.ts` | Converted to GLSL 3.00 ES (`glslVersion: GLSL3`). Three `layout(location=0..2) out vec4` outputs: `directOut`, `indirectOut`, `aoOut`. All `texture2D` → `texture`. Vertex shader uses `in/out`. Per-channel toggle semantics preserved (writes 0 if the channel's enable flag is false). `giIntensity` uniform + multiplication removed from indirect channel — responsibility moved to CompositeMaterial. |
| `src/lightmap/Lightmapper.ts` | `WebGLRenderTarget` → `WebGLMultipleRenderTargets(w, h, 3, opts)`. New return shape: `renderTarget`, `textures: { direct, indirect, ao }`. Deprecation getters `renderTexture`/`texture` kept for back-compat; should be removed in a follow-up cleanup. Removed `giIntensity` from `RaycastOptions` and constructor invocation. |
| `src/lightmap/CompositeMaterial.ts` (NEW, ~65 lines) | Full-screen GLSL3 quad shader. Reads `directTex`/`indirectTex`/`aoTex` + `giIntensity`/`aoEnabled` uniforms. Output: `lit = (direct + indirect * giIntensity) * (aoEnabled ? ao : vec3(1.0))`. No tonemapping — writes to an internal float RT. |
| `src/lightmap/Composite.ts` (NEW, ~75 lines) | `runComposite(renderer, lightmapTextures, resolution, opts) → CompositeResult { texture, refresh, dispose }`. Eagerly allocates one FloatType + LinearMipMapLinearFilter RT. `refresh(overrides?)` updates uniforms, rebinds RT, renders quad, restores previous RT. Owns mat/quad/cam/RT — all disposed via `dispose()`. |
| `src/CornellBoxExample.ts` | New `composite: CompositeResult \| null` field. `bake()` disposes prior composite + allocates new one. Render-loop tick calls `composite.refresh()` every frame during accumulation. `giIntensity` slider rewired to `composite.refresh({ giIntensity })` — live, no re-bake. `ambientLightEnabled` toggle also calls composite refresh. `applyPostProcess` chains off `composite.texture` instead of MRT[0]. `LayerContext` expanded with composite/direct/indirect/ao/postDilated. `LAYERS` registry replaced with 9 entries: Combined, Combined (Denoised), Direct, Indirect (GI), Ambient Occlusion, Lightmap (Raw), Albedo, World Position, World Normal. |
| `src/LightBakerExample.ts` | Defensive `texture` → `texture[0]` updates (legacy unreferenced file). |

**Pipeline notes**

- The bake shader writes three independent channels per fragment in a single MRT pass — no extra ray cost vs the old single-output bake (ray work is shared). `WebGLMultipleRenderTargets` adds ~2× memory at the lightmap RT (3 attachments instead of 1).
- `giIntensity` moved to view time: tweaking the slider now triggers only `composite.refresh()` (one fullscreen quad pass, ~0.1 ms at 1024² FloatType). Prior to A.3 it required a full re-bake.
- Composite is refreshed every frame during accumulation so all per-channel layers (Direct/Indirect/AO/Combined) stay in sync at partial sample counts.

**Decisions made (and why)**

1. **MRT over N separate bakes.** Shared ray work, single shader invocation. Memory cost (~3× at the lightmap RT) is dwarfed by the BVH textures, and the user explicitly chose MRT (option 1) + eager allocation.
2. **Composite is view-time, not a 4th MRT attachment.** Enables live `giIntensity` slider tweaking without re-baking. Direct/Indirect/AO are the physical signals; Combined is a derived view.
3. **Per-channel toggle semantics inside the bake shader** (writes 0 to a channel when its toggle is off). Keeps the JS-side composite simple (always sums all three) and means a disabled channel has zero contribution after composite without any conditional in CompositeMaterial.
4. **Deprecation getters on `Lightmapper`** (`renderTexture`, `texture`). Kept the diff atomic and the build green during the A.2 transition. Should be removed in a follow-up cleanup once all callers are migrated.
5. **"Combined (Dilated)" deferred.** `PostProcess` doesn't expose a separate dilated-only stage. Padding the registry with an orphan layer would misrepresent what's available. TODO comment placed near the registry.
6. **`giIntensity` removed from bake material entirely** (not kept as a no-op uniform). Single source of truth in CompositeMaterial; no risk of a stale uniform double-applying after a future refactor.

**Carry-overs / not changed**

- Multi-bounce GI still deferred (no GLSL recursion; N² ray cost per bounce). Bounces stays at 1 across all presets.
- "Combined (Dilated)" layer not exposed; needs `PostProcess` to expose a dilated-only intermediate.
- Phase B (status panel rebuild — progress bar widget), Phase C (UI structure + labels polish), Phase D1/D2 (texel density heatmap + per-object density) still pending.
- `LightBakerExample.ts` defensively updated but remains unreferenced legacy.
- `estimateTimeRemaining()` formula in `CornellBoxExample.ts` ~line 580 still a stub — deferred since Session 6, awaiting user contribution.
- Render-target leaks (architecture.md §4) still present for primary Pass 1 G-buffers. MRT RT and composite RT are disposed on rebake.

**Next session** — Phase B: status panel rebuild. Replace the current Tweakpane `Monitor` readouts (samples/spp/etaSec) with a proper progress bar widget showing percentage + elapsed-vs-remaining time. Then Phase C (UI structure + labels polish), then Phase D1 (texel density heatmap, read-only).

### Standards Checkpoint — 2026-04-26
- Created CONTRIBUTING.md with full coding standards
- Added ESLint + Prettier configuration
- Tightened tsconfig strict options
- Updated CLAUDE.md with coding standards reference
- Added lint/format/typecheck npm scripts
- All future tasks must pass `npm run check` before commit

### Context-Driven Development Setup — 2026-04-26
- Added modularity rules to CONTRIBUTING.md (300 line/file, 50 line/function, 5 import max)
- Created docs/DECISIONS.md with D-001 through D-004
- Created docs/FAILED-APPROACHES.md with F-001 through F-003
- Appended system diagram, data flow, and key invariants to docs/architecture.md
- Created docs/GLOSSARY.md with all project-specific terms defined
- Updated CLAUDE.md with modularity reference and context-driven development section

### Standards + Debt Cleanup — 2026-04-26 (Prompt 2)
- Phase 1: prettier auto-format applied; ESLint v10 flat config (eslint.config.js) added
- Phase 2: TypeScript strict compliance — narrowed all noUncheckedIndexedAccess fallout, replaced `any` in DenoiseMaterial with typed parameters, module-augmented three-mesh-bvh for the missing shaderIntersectFunction export, added vite-env.d.ts; legacy LightBakerExample excluded from typecheck
- Phase 3: WebGL resource leak audit — renderAtlas now returns dispose() that releases position+normal RTs (was leaking two RTs per bake!); LightmapBakeResult.dispose() chains atlas + matTex disposal; all renderer state mutations wrapped in try/finally so a render throw cannot leave autoClear/clearColor/RT corrupted
- Phase 4: Shader audit — DilationMaterial/AtlasViewer/renderAtlas/exportLightmap converted from GLSL1 to GLSL3 (varying→in/out, texture2D→texture, gl_FragColor→explicit out); DenoiseMaterial deliberately stays GLSL1 (documented exception); NaN guards added to randomSpherePoint sqrt and shadow-ray distToLight; CompositeMaterial pow() guarded against negative input; renderAtlas normal output guards zero-length vectors
- Phase 5: BakeError class with phase + meshName, validateOptions() pre-flight on construction, EXT_color_buffer_float check at bake start, AbortSignal aborts now throw BakeError tagged with the catching phase
- Phase 6: console logging — all log/info prefixed [baker] and gated behind import.meta.env.DEV; demo runExport rethrows after logging (was swallow-and-continue)
- Phase 7: file org already split into src/lib/ + src/demo/ in commit 694c930 (Phase D)
- Phase 8: `npm run check` passes — typecheck clean, format clean, lint 0 errors (28 informational warnings, none in lib/lightmap path)
- All changes are behavioral no-ops in the bake pipeline (algorithm and math unchanged)
- Type-aware ESLint rule set dropped — strict TypeScript is the safety net; type-aware rules fired hundreds of times on Tweakpane any-typed bindings with no real value

### Session 8 — 2026-04-26

**Task completed** — Task 07 (multi-light + multi-bounce + production polish), executed as six commit-isolated sub-phases (7A–7F). All sub-phases green on `npm run check` + `npm run build` throughout.

**Preflight commit** (`9e696eb` — chore: sync progress.md with actual repo state): Status table updated to reflect Tasks 05/06/09/13 as already complete via earlier commits; stale carryover notes folded into Task 07.

**What changed**

| File | Change |
|---|---|
| `src/lib/atlas/renderAtlas.ts` | 7A — vertex shader normal transform changed from `mat3(modelMatrix) * normal` to `transpose(inverse(mat3(modelMatrix))) * normal`; keeps normals perpendicular to surface under non-uniform scale (e.g. imported GLB with stretched axes). Alpha preserved at 0 to match wire format. |
| `src/lib/lightmap/LightmapperMaterial.ts` | 7A — `estimateTimeRemaining()` uses a 16-sample ring buffer (`bakeBatchHistory: { samples, t }[]`) reset on each bake start; pushes only when sample count advances (RAF can fire faster than samples produce). Replaces the naive `elapsed/progress - elapsed` formula that jumped wildly in the first second. |
| `src/lib/lightmap/LightmapperMaterial.ts` | 7B — single-bounce hit branch replaced with `tracePath()`, a hand-unrolled bounce loop bounded by `#define MAX_BOUNCES 4` and a runtime `bounces` uniform. Per bounce: emissive direct, NEE shadow ray, throughput multiply, Russian Roulette for b≥2 with `1e-4` divisor guard. `bounces=1` is byte-identical to the prior single-bounce path. |
| `src/lib/lightmap/Lightmapper.ts` | 7B — `bounces` added to `RaycastOptions`. |
| `src/lib/LightmapBaker.ts` | 7B — clamps `bounces` to [1,4] and forwards into `RaycastOptions`. Removed stale JSDoc note about "bounces>1 no-op". |
| `src/demo/CornellBoxExample.ts` | 7B — bounces slider in Bake folder, default 2, range [1,4] step 1. QUALITY_PRESETS comment updated; bounces stays an independent slider, not folded into preset rows. |
| `src/lib/lightmap/Lights.ts` (NEW, ~150 LOC) | 7C — `PackedLight` type; `collectLightsFromScene` (walks scene tree, converts `THREE.PointLight`/`DirectionalLight`/`SpotLight`/`RectAreaLight`); `buildLightTexture` (4-wide × N-tall RGBA float `DataTexture`: row 0 = pos+type, row 1 = dir+param0, row 2 = color+param1, row 3 = params2+3); `disposeLightTexture`. |
| `src/lib/lightmap/LightmapperMaterial.ts` | 7C — dropped 4 single-light uniforms (`lightPosition`/`lightSize`/`lightColor`/`lightIntensity`); added `lightsTex`, `lightCount`, `MAX_LIGHTS=16` define. New GLSL helpers: `sampleLight(li, hitPos, hitN, rnd) → LightSample` (per-type position + direction + falloff) and `sampleAllLightsNEE(hitPos, hitN, hitAlbedo)` (loops `lightCount`, fires one shadow ray each). The `L.y > 0` downward-emission gate removed — it was guarding against a marker mesh not in the BVH, so served no purpose; ceiling undersides near the light are now correctly lit. |
| `src/lib/lightmap/Lightmapper.ts` | 7C — `RaycastOptions.lights: PackedLight[]` replaces the four single-light fields. Light texture built and disposed inside `generateLightmapper`. |
| `src/lib/LightmapBaker.ts` | 7C — collects scene lights via `collectLightsFromScene`; falls back to a synthetic point from `LightOptions` if none present. |
| `src/demo/CornellBoxExample.ts` | 7C — primary point light from `lightDummy` + optional secondary directional via "Lights" folder (off by default). |
| `src/lib/lightmap/LightmapperMaterial.ts` | 7D — AO falloff formula changed from `clamp(dist/ambientDistance, 0, 1)` to `1 - clamp((1 - pow(t, aoExponent)) * aoIntensity, 0, 1)` where `t = clamp(dist/ambientDistance, 0, 1)`. At `intensity=1, exponent=1` collapses to the pre-7D linear behavior — existing bakes that don't touch the new sliders are byte-equivalent. |
| `src/lib/LightmapBaker.ts` | 7D — `aoIntensity` (default 1.0, range 0–3) and `aoExponent` (default 1.5, range 0.5–4) added to public `AOOptions`. |
| `src/demo/CornellBoxExample.ts` | 7D — `aoIntensity` and `aoExponent` sliders in Ambient Occlusion folder. |
| `src/lib/lightmap/TexelDensityMaterial.ts` (NEW) | 7E — Unity/Unreal-style checker debug shader. Checker in UV2 space, colored by how actual texel density compares to a user-set target (texels per world meter). Bands: red (<0.5×) → yellow (0.5–0.8) → green (0.8–1.2) → cyan (1.2–1.5) → blue (>1.5×). Density computed via `dFdx`/`dFdy` of UV2 vs world position; geometric mean across both axes for anisotropy robustness. |
| `src/demo/CornellBoxExample.ts` | 7E — Layer system extended with a "material-swap" layer type; original materials cached in a `WeakMap<Mesh, Material>` and restored on switch-away. `texelDensity` entry added to the registry. View folder slider `Density Target (px/m)` (1–50, default 10). Closes Task 13 D1/D2. |
| `src/lib/LightmapBaker.ts` | 7F — public `LightmapBakerOptions.perMesh: Record<uuid, { resolution?, exclude? }>` added. `bake()` partitions non-excluded meshes into resolution groups; runs separate atlas + lightmapper + composite + refinement per group. BVH and per-tri material textures stay SHARED across groups so cross-mesh shadows/GI remain accurate. Excluded meshes never enter the atlas/bake but DO appear in the BVH (they cast shadows). |
| `src/lib/LightmapBaker.ts` | 7F — `LightmapBakeResult` restructured: `lightmaps` is now `Map<Mesh, Texture>`; `apply()` walks the map; `export()` writes one file per mesh; `dispose()` chains all per-group disposers. |
| `src/demo/CornellBoxExample.ts` | 7F — per-mesh Tweakpane folder with exclude checkbox + resolution-override dropdown per mesh. Exclude flag fully wired; excluded meshes show no lightmap but still cast shadows. Resolution override shown in UI but deferred in the demo's own bake path (public `LightmapBaker.bake()` implements full grouping; demo rework is a follow-up). |

**Math notes**

- Multi-bounce throughput accumulator: `throughput *= hitAlbedo`. Russian Roulette fires at bounce ≥ 2; survival probability = `max(throughput.r, throughput.g, throughput.b)`; throughput divided by probability on survival. The `1e-4` floor on the divisor prevents NaN on black surfaces.
- AO falloff: `ao = 1 - clamp((1 - pow(t, e)) * intensity, 0, 1)`. At `e=1, intensity=1` → `ao = t = dist/ambientDistance` (linear, matches pre-7D). Higher `e` concentrates darkening near the surface; higher `intensity` deepens shadows globally.
- Light texture layout: each light occupies 4 texels (one column of a 4-wide texture). Row 0 = `(world_pos.xyz, type_enum)`. Row 1 = `(direction.xyz, param0)` (spot inner angle / rect half-width). Row 2 = `(color.rgb, param1)` (spot outer angle / rect half-height). Row 3 = `(intensity, decay, _, _)`.

**Decisions made (and why)**

1. **Hand-unrolled bounce loop, not GLSL recursion.** WebGL2 GLSL has no recursion. N² ray cost at N=4 is acceptable at the sample budgets the UI exposes (Draft 128 spp × 4 bounces = 512 ray-ops/texel). Multi-pass with intermediate radiance RTs would halve the GPU memory but triple the JS orchestration complexity.
2. **`#define MAX_BOUNCES 4` + runtime `bounces` uniform.** Compile-time constant satisfies driver loop-unrolling requirements for portability; runtime cap lets the user tune quality without recompiling shaders. `bounces=1` path produces exactly the Session 7 output.
3. **Light DataTexture (4-wide float) instead of uniform arrays.** Uniform arrays have a driver-specific max size (~256 floats on some mobile drivers). A texture scales to `MAX_LIGHTS=16` now and can be widened to any N later by changing only `buildLightTexture`. Uniform arrays would need a shader recompile to change the count.
4. **`L.y > 0` gate removed.** The gate was guarding against emissive contributions from the light-marker plane. That plane is never inserted into the BVH, so the gate was checking a condition that could never be true. Removing it correctly lights ceiling undersides.
5. **AO `samples` (separate ray budget) deferred.** The spec allows AO to run on a separate ray budget from the indirect hemisphere loop. Implementing it requires a second inner loop or a second MRT pass. Not in scope for 7D; AO continues to share rays with indirect. Documented.
6. **`scaleInLightmap` not implemented for per-mesh resolution.** xatlas-three does not expose per-mesh chart weighting in the current integration. Per-mesh quality is via `resolution` only. Documented in code and deferred.
7. **Demo still uses its own bake path for resolution grouping.** The demo's bake pipeline predates the public `LightmapBaker.bake()` refactor. Migrating the demo to consume the public class is a pre-requisite for the Task 12 (model import/export) workflow; deferred to that session.

**Carry-overs / not changed**

- Demo's bake pipeline duplicates `LightmapBaker`'s group orchestration; per-mesh `resolution` override has no effect in the demo (only `exclude` is wired). Rework blocked on Task 12 (GLB import/export demo path).
- AO `samples` (separate ray budget from indirect) deferred — AO shares rays with indirect loop.
- "Combined (Dilated)" layer in the registry still deferred — `PostProcess` does not expose a dilated-only intermediate stage.
- `LightBakerExample.ts` remains unreferenced legacy; not removed (out of scope, but not harmful).

**Next session** — Task 12 (GLB model import/export) first: migrating the demo to consume the public `LightmapBaker.bake()` path unlocks per-mesh resolution end-to-end and provides the import/export surface needed for the asset-pipeline story. After that, Task 08 (WebGL TDR / timeout protection) is high priority on Windows — longer multi-bounce bakes at Production/Final quality raise GPU-hang risk. Tasks 10 (lightmap downscaling) and 11 (light probes/SH) follow.

### Session 9 — 2026-04-27

**Task completed** — AO split into its own bake pass + Task 12 reclassification.

**Trajectory audit (this session, before any code changes):**
- Walked Sessions 1–8 + DECISIONS.md + FAILED-APPROACHES.md to confirm no work was about to be reverted or duplicated.
- Discovered Task 12 (GLB import/export) was actually already wired in the demo and had been since before S8 — `GLTFLoader` at `CornellBoxExample.ts:917`, `GLTFExporter` at `:1013`, hidden file picker + Import/Export buttons. The Status table just hadn't been flipped. Updated the table (Task 12 → Done) + added a new "Pending refactors" subsection to track the actual remaining gap: demo migration to consume public `LightmapBaker.bake()` (separate from GLB I/O itself).

**What changed (AO split — code shipped this session)**

| File | Change |
|---|---|
| `src/lib/lightmap/AOMaterial.ts` (NEW, ~160 LOC) | Standalone GLSL3 AO bake material. Single output `aoOut`. Stores RAW normalized visibility `t = clamp(dist/ambientDistance, 0, 1)` per texel (1.0 on miss / hit beyond range). Mirrors LightmapperMaterial's RNG, hemisphere sampler, ray bias, and BVH usage so contact AO is byte-equivalent to the pre-split path at `intensity=1, exponent=1`. |
| `src/lib/lightmap/AOMapper.ts` (NEW, ~130 LOC) | `generateAOMapper(renderer, positions, normals, bvh, opts)` — owns its own RT (FloatType + LinearFilter), accumulator, render loop, dispose. Mirror of `generateLightmapper` shape: `{ texture, render(), reset(), dispose() }`. |
| `src/lib/lightmap/LightmapperMaterial.ts` | AO removed from MRT (3 attachments → 2). Dropped uniforms `ambientLightEnabled`, `ambientDistance`, `aoIntensity`, `aoExponent`, the `aoOut` location-2 output, and the `totalAO` accumulator block from `main()`. Bounce ray work unchanged — `tracePath` still drives indirect. |
| `src/lib/lightmap/Lightmapper.ts` | `WebGLMultipleRenderTargets(..., 3, ...)` → `..., 2, ...`. `RaycastOptions` dropped 4 AO fields. Returned `textures` is now `{ direct, indirect }` (no `ao`). |
| `src/lib/lightmap/CompositeMaterial.ts` | Added `aoIntensity`, `aoExponent` uniforms. AO remap moved here from the bake shader: `occ = 1 - pow(t, aoExponent); a = 1 - clamp(occ * aoIntensity, 0, 1)`. At `intensity=1, exponent=1` collapses to identity → byte-equivalent default behaviour. |
| `src/lib/lightmap/Composite.ts` | `CompositeOverrides` adds `aoIntensity`, `aoExponent`. `runComposite` accepts `{ direct, indirect, ao }` (the AO texture now comes from `AOMapper`, not from the bounce MRT). |
| `src/lib/LightmapBaker.ts` | Public class now drives both `Lightmapper` AND `AOMapper` per group. New `runMappersUntilDone` lockstep helper drives both accumulators each frame; progress reflects `min(bounce.samples, ao.samples)` so the bar never jumps. New `LightmapBakeResult.refreshAO({ intensity?, exponent?, enabled? })` (sub-ms, view-time). New `LightmapBakeResult.rebakeAO({ samples, distance, targetSamples })` for slider changes that need fresh rays — disposes the AO mapper, builds a new one, swaps it into the composite, re-runs refinement. Bounce textures untouched on AO-only re-bake. `AOOptions.samples` added (range 0–64, default = `castsPerFrame`). Group internals now retain `positionTex` + `normalTex` for AO re-bake reuse. |
| `src/lib/index.ts` | Public exports for `generateAOMapper`, `AOMapper`, `AORaycastOptions`, `AOMapperRender`. |
| `src/lib/lightmap/TexelDensityMaterial.ts` | `CHECKER_TEXELS` 16 → 4 (smaller checker squares; better readability at moderate density targets). Added `polygonOffset` + explicit `FrontSide` to avoid z-fighting on coincident faces. |
| `src/lib/utils/Packing.ts` | Cleaner mesh label fallback: `"Mesh N (Box/Sphere/...)"` instead of UUID prefix when `mesh.name` is empty. |
| `src/demo/CornellBoxExample.ts` | (1) Wired the new `AOMapper` per `BakeGroup`. AO sliders rerouted: `aoIntensity` / `aoExponent` / `ambientLightEnabled` → composite refresh (no re-bake); `ambientDistance` / `aoSamples` → AO-only re-bake via new private `rebakeAO()`. (2) `bakeBVH` field retains the BVH across rebakes. (3) Mesh `name` set on every Cornell mesh (`Floor`, `Ceiling`, `Back Wall`, `Left Wall (Red)`, etc.) so Tweakpane per-mesh folders read clean. (4) Stats overlay extended: VRAM (RT-aware approximation), triangle count, rays/sec. (5) "Lightmap (AO)" layer now reads `aoMapper.texture` instead of `lightmapper.textures.ao`. (6) Mipmap upgrade loop on bake-done iterates 2 attachments instead of 3 + upgrades AO texture separately. |

**Pipeline shape after the split**

```
Pass 1 (atlas):     geometry → positionTex, normalTex                        (unchanged)
Pass 2a (bounce):   positionTex + normalTex + BVH → MRT { direct, indirect } (was 3 attachments)
Pass 2b (AO):       positionTex + normalTex + BVH → aoTex                    (NEW — own ray budget)
Composite (view):   (direct + indirect * giIntensity) * aoRemap(aoTex)       (aoRemap is new here)
Refinement:         dilation + bilateral on composite output                  (unchanged)
```

Per-frame cost: bounce-pass rays = `casts × resolution²`, AO-pass rays = `aoSamples × resolution²`. They run as separate fullscreen quad draws each frame; both accumulate progressively against the shared `targetSamples` budget.

**Decisions made (and why)**

1. **Two passes, not a second MRT attachment on the bounce shader.** A second inner loop in LightmapperMaterial would let AO share the same shader invocation, but it would also lock AO ray count to the bounce loop count. The user-facing benefit of the split is *independent* ray budgets and the ability to tweak AO without touching bounce. A separate pass realizes that benefit cleanly.
2. **AO stores RAW visibility `t`; remap moved to composite.** Previously the bake shader applied `aoIntensity` / `aoExponent` and stored the final occlusion value. After the split, the bake stores `t ∈ [0, 1]` only. The remap (`1 - clamp((1 - pow(t, e)) * intensity, 0, 1)`) lives in `CompositeMaterial`, so `aoIntensity` / `aoExponent` sliders are sub-millisecond view-time tweaks instead of full re-bakes.
3. **`ambientDistance` triggers a re-bake; `aoIntensity` / `aoExponent` do not.** Distance changes which hits count as occluders, which is a ray-result change — the stored `t` values are no longer valid. Intensity/exponent only reshape the stored `t`, which is a view-time op. Documented inline at the slider handlers.
4. **`AOMapper` mirrors `Lightmapper`'s shape exactly.** Same `{ texture, render, reset, dispose }` interface. Lets `runMappersUntilDone` drive both with one tick loop. Makes future "more independent passes" (e.g. probes, irradiance) easy to add — same pattern.
5. **BVH retained across AO-only re-bakes.** Stored on `LightmapBakeResult.internals.bvh` (and `bakeBVH` in the demo). Re-baking AO does NOT rebuild the BVH or atlas G-buffers — those are reused. AO-only re-bake cost ≈ `aoSamples / (aoSamples + casts × bounceCost)` of a full bake; rough order 5–15%.
6. **Default `AOOptions.samples` = `castsPerFrame`.** Preserves the pre-split ray budget exactly when the caller doesn't pass a value. Documented in JSDoc + validateOptions.

**Carry-overs / not changed**

- Demo `→` public `LightmapBaker.bake()` migration STILL pending. Demo continues to use its own group orchestration. Per-mesh `resolution` override is wired in the public class but not in the demo path. (Logged in the new "Pending refactors" section of the Status table.)
- Multi-bounce GI still hand-unrolled in the bounce shader (no GLSL recursion). Bounces uniform [1, 4]; default 1 produces byte-equivalent output to the pre-7B path.
- "Combined (Dilated)" layer still deferred — `PostProcess` doesn't expose a dilated-only intermediate stage.
- `LightBakerExample.ts` remains unreferenced legacy.
- `npm run check` passes (typecheck 0 errors, prettier clean, eslint 45 informational warnings — all pre-existing on Tweakpane any-typed bindings, not in lib/lightmap).
- `npm run build` green at 883.70 KiB (was 730.53 KiB at end of S8 — delta is the new AOMaterial + AOMapper + demo overlay code, expected).

**Next session** — Demo `→` `LightmapBaker.bake()` migration, then Task 08 (WebGL TDR / timeout protection on Windows). Tasks 10 (lightmap downscaling) and 11 (SH light probes) follow.
