# Lightmap Baker — Progress Tracker

## Status

| Task | Status | Notes |
|---|---|---|
| 00 — Agentic setup | ✅ Done | CLAUDE.md + task files created |
| 01 — Baseline verification | ✅ Done | Direct light + AO + shadows confirmed; screenshot saved. Surfaced an architectural blocker for Task 03/04 — see Session 1 notes. |
| 02 — Understand architecture | ✅ Done | `docs/architecture.md` written. Data flow, shader inventory, RT lifecycle (incl. leak notes), and bounce-ray insertion point pinned to `LightmapperMaterial.ts:178`. All four Session-1 blockers confirmed in code. |
| 03 — Material textures | ✅ Done | `extractPerTriangleMaterials` + `buildMaterialTextures` produce two square FloatType RGBA `DataTexture`s keyed by global triangle index. Wired into `LightmapperMaterial` via 3 new uniforms (`albedoTex`, `emissiveTex`, `materialTextureSize`) plus a GLSL helper `readTriangleMaterial(tex, triIdx)`. Console verification logs triangle 0 (floor) and first left-wall triangle (red) on every bake. Vite build succeeds. |
| 04 — Bounce lighting (GI) | ✅ Done (1-bounce, NEE + emissive). **Critical bug fixed in Session 5** — BVH index reorder vs material lookup mismatch. | Hit branch implements emissive direct + albedo-tinted NEE shadow ray. Light intensity, GI intensity, sky color/intensity all controllable via tweakpane. Walls thickened to BoxGeometry. Material lookup now built post-BVH against the reordered index buffer. Vite build 721.22 KiB. |
| 05 — Quality + denoising | 🟡 In progress (Session 6) | Sample-budget gating + samples slider, chart-aware dilation, bilateral denoise wired, quality presets, status readouts. Bounces still hardcoded to 1. ETA estimator stub awaiting user formula. Vite build 730.53 KiB. |
| 06 — Export + API | ⬜ Not started | |

### Extended (any order after Task 06)

| Task | Status | Notes |
|---|---|---|
| 07 — Multiple lights | ⬜ Not started | Point, directional, spot, rect area |
| 08 — WebGL timeout protection | ⬜ Not started | Batch work, prevent TDR/BSOD |
| 09 — Separate AO map | ⬜ Not started | Grayscale occlusion output |
| 10 — Lightmap downscaling | ⬜ Not started | Supersample + downscale |
| 11 — Light probes (SH) | ⬜ Not started | For dynamic objects in Atelier |
| 12 — Model import/export | ⬜ Not started | GLB round-trip with baked lightmaps |
| 13 — Layer system + MRT | 🟡 In progress (Session 7) | Phase A.1 (S6) + A.2 + A.3 (S7) done. Phase B/C/D pending. |

### Deliberate exclusions

| lucas-jones TODO item | Why excluded |
|---|---|
| Denoise offline (Optix) | Requires native binary — violates browser-only constraint |
| Only denoise indirect light & AO | Nice-to-have, can add later by separating accumulators in Task 09's pattern |

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
