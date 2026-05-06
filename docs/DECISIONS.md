# Decision Log

Every non-trivial technical decision is recorded here. Format:

## D-[number]: [short title]
- **Date:** YYYY-MM-DD
- **Status:** accepted | superseded by D-XX | rejected
- **Context:** Why this decision came up
- **Decision:** What we chose
- **Alternatives considered:** What else we looked at and why we rejected it
- **Consequences:** What this decision enables and constrains

---

## D-001: Two-pass architecture (UV rasterization → ray tracing)

- **Date:** 2026-04-26
- **Status:** accepted
- **Context:** Prior attempt used single-pass UV-space rasterization with inline path tracing. This required overriding gl_Position AND tracing rays in the same shader, which created matrixWorld propagation bugs (12 integration bugs over 4 hours).
- **Decision:** Split into two passes. Pass 1 rasterizes geometry into UV space to create world-position and normal textures. Pass 2 ray-traces from those stored positions. The renderer is used normally in both passes.
- **Alternatives considered:**
  - Single-pass UV-space rasterization + inline ray tracing: rejected due to 12 integration bugs stemming from fighting Three.js's rendering pipeline
  - CPU-side ray tracing per texel: rejected due to speed (viable as fallback but not primary)
  - Hemicube per texel (pmndrs/react-three-lightmap approach): rejected due to quality ceiling
- **Consequences:** Slightly more GPU memory (position + normal textures exist alongside lightmap). Much simpler shader code. No matrixWorld hacks. Each pass is independently testable.

## D-002: Fork lucas-jones, not build from scratch

- **Date:** 2026-04-26
- **Status:** accepted
- **Context:** lucas-jones/three-lightmap-baker has a working two-pass architecture with xatlas UV2 unwrapping, but lacks bounce lighting. Our prior from-scratch build had correct bounce shaders but broken architecture.
- **Decision:** Fork lucas-jones for architecture, port our bounce shader logic into his ray tracing step.
- **Alternatives considered:**
  - Continue debugging from-scratch build: rejected after 4 hours of debugging with 4 wrong diagnoses
  - Use pmndrs/react-three-lightmap: rejected — dead since 2022, broken on R3F 9, hemicube quality ceiling
  - Blender bake pipeline: rejected — requires DCC round-trip, breaks Atelier's "no install" value prop
- **Consequences:** Inherit lucas-jones's xatlas integration (working), scene BVH construction (working), UV-space rasterization (working). Need to add: bounce lighting, material textures, denoising, API surface, multiple light types, light probes.

## D-003: GLSL 3.0 with MRT

- **Date:** 2026-04-26
- **Status:** accepted
- **Context:** Pass 1 needs to output both world position AND world normal. Without MRT, this requires rendering the same geometry twice.
- **Decision:** Use GLSL 3.0 ES with Multiple Render Targets. Single geometry pass outputs to both textures simultaneously via layout(location=N) out declarations.
- **Alternatives considered:**
  - Two separate passes for position and normal: rejected — doubles vertex processing cost for no benefit
  - GLSL 1.0 with gl_FragData: rejected — deprecated, less portable
- **Consequences:** Requires WebGL2 (no WebGL1 fallback). This is acceptable — our target hardware (RTX 3060+ / M2 Pro+) all support WebGL2.

## D-004: Private until Atelier ships, open-source after validation

- **Date:** 2026-04-26
- **Status:** accepted
- **Context:** This baker is the first browser-native lightmap baker with GI for Three.js. Open-sourcing it would benefit the community but could also benefit competitors (Pascal, Shapespark's web tools).
- **Decision:** Keep private during Atelier development. Open-source after Atelier has 50-100 paying customers.
- **Alternatives considered:**
  - Immediate open source (MIT): rejected — burns the GitHub launch moment before Atelier exists to convert attention into signups
  - Permanent proprietary: rejected — open-source after validation provides developer relations value and community maintenance
  - Published demo without source: acceptable intermediate step for portfolio purposes
- **Consequences:** No community contributions during development. All maintenance is solo. But competitive advantage preserved during the critical 0→1 phase.

## D-005: Russian Roulette starts at bounce 2, not bounce 0

- **Date:** 2026-04-26
- **Status:** accepted
- **Context:** Multi-bounce GI added in 7B. RR is the standard unbiased path-termination technique. Question: when does it kick in?
- **Decision:** RR only for `b >= 2`. Bounces 0 and 1 always run to completion.
- **Alternatives considered:**
  - RR from bounce 0: rejected — at low sample counts (Cornell Draft preset ≈128 spp), early termination of nearly every primary cast washes out direct color bleed entirely. Variance explodes.
  - No RR (always run to MAX_BOUNCES): rejected — wastes work on dim throughput chains, biases output unless the loop is truly bounded.
- **Consequences:** Slightly more bias at very high bounce counts (RR kicks in less often than pure unbiased), but the bake's other approximations (1/PI dropping, no MIS) already trade bias for stability. Acceptable.

## D-006: 1/PI dropped from NEE BRDF — energy balance vs the non-physical direct loop

- **Date:** 2026-04-26
- **Status:** accepted (carried forward from S5; documented here on the multi-bounce / multi-light rewrite)
- **Context:** A strict Lambertian BRDF is `albedo / PI * cos(N·L)` for the bounce term. The standalone direct-light loop, however, contributes `lightColor * intensity * cos(N·L)` per visible cast — no `1/PI`, no distance falloff. If the bounce term divides by PI but the direct term doesn't, color bleed becomes ~PI× dimmer than direct under the 0.5 mix, and crushes below visibility.
- **Decision:** Drop the `1/PI` factor from NEE on BOTH the per-bounce hit AND the standalone direct loop. Both contribute `albedo * cos(N·L) * lightColor * intensity`. `giIntensity` (composite-time) provides fine adjustment.
- **Alternatives considered:**
  - Add `1/PI` to the direct loop: rejected — would dim the existing well-tuned default presets and require all light intensities to be re-multiplied.
  - Use full physical units (candela, lumens, etc.) end-to-end: rejected — overcomplicated for an artistic baker.
- **Consequences:** The bake is non-physical in absolute units but internally consistent. Per-light-type emission terms (spot cone falloff, area one-sided gate) compose cleanly because the cos*albedo factor is shared.

## D-007: Multi-light storage as DataTexture, not uniform array

- **Date:** 2026-04-26
- **Status:** accepted
- **Context:** 7C added support for an arbitrary number of lights. Choices: uniform array (`uniform Light lights[N]`) or DataTexture lookup.
- **Decision:** Pack lights into a 4-wide × N-tall RGBA float DataTexture. Shader reads per-light texels by row index.
- **Alternatives considered:**
  - Uniform array: rejected — bound by `gl_MaxFragmentUniformVectors` (driver-dependent, often 256 vec4s total across ALL uniforms). Recompiling the shader for different light counts wastes warm-up time.
  - SSBO / uniform buffer: rejected — WebGL2 ES has no SSBO; uniform buffers add complexity for marginal benefit at the small light counts we expect.
- **Consequences:** 3 texture fetches per light per NEE call. Texels for one light are adjacent → cache friendly. Scales to dozens of lights without shader recompile. Cost: light DataTexture is uploaded on every bake; trivially small even at 100 lights (~6KB).

## D-008: Per-mesh resolution groups share ONE BVH, not per-group BVHs

- **Date:** 2026-04-26
- **Status:** accepted
- **Context:** 7F supports running separate bakes per resolution group (different meshes get different lightmap sizes). Question: does each group also build its own BVH, or do they share?
- **Decision:** Single BVH built from the merged geometry of ALL meshes (including excluded ones). Each per-resolution-group bake reuses the shared BVH; only the atlas G-buffers + lightmapper + composite + refinement are per-group.
- **Alternatives considered:**
  - Per-group BVH built from only that group's meshes: rejected — shadow / GI rays would miss occluders in other groups, breaking cross-mesh contact shadows and color bleed.
  - Per-group BVH including all meshes (rebuild N times): rejected — wasted work; BVH construction is O(n log n) and can dominate at moderate scene sizes.
- **Consequences:** Excluded meshes still cast shadows for other meshes (they're in the BVH but skipped from atlas). All groups see the same scene geometry → physically correct cross-mesh GI. Single BVH allocation = lower peak memory.

## D-010: AO split into a dedicated pass with composite-time remap

- **Date:** 2026-04-27
- **Status:** accepted
- **Context:** Through Session 8 (Task 7D), AO was a third MRT attachment of `LightmapperMaterial`. AO sliders (`aoIntensity`, `aoExponent`, `ambientDistance`) all triggered a full bounce-pass re-bake because they were uniforms on the bake shader. The `samples` carry-over from S8 also wanted AO to have an independent ray budget from the indirect bounce loop.
- **Decision:** Split AO into its own pass:
  1. New `AOMaterial` + `generateAOMapper` — single-output GLSL3 shader, owns its own RT, accumulator, and dispose.
  2. Bounce MRT goes from 3 attachments to 2 (`direct`, `indirect`). AO uniforms removed from the bounce shader.
  3. AO bake stores RAW normalized visibility `t = clamp(dist/ambientDistance, 0, 1)` per texel.
  4. `aoIntensity` / `aoExponent` remap moved to `CompositeMaterial`. View-time tweak; sub-millisecond.
  5. `ambientDistance` and `aoSamples` still require fresh rays → AO-only re-bake (`LightmapBakeResult.rebakeAO()`). Bounce textures untouched.
- **Alternatives considered:**
  - Second inner loop inside LightmapperMaterial: rejected — couples AO ray count to bounce loop count, defeats the point of independent budgets.
  - Keep AO on the MRT, lift only the remap to composite: rejected — solves the slider latency but not the budget independence; messier API.
- **Consequences:** +1 fullscreen quad draw per frame during accumulation (negligible). +1 RT alive during bake (FloatType, square at lightmap resolution — ~16 MB at 2048²). View-time AO tweaking is now sub-ms instead of full re-bake. AO-only re-bakes (distance / samples sliders) cost ~5–15% of a full bake. Composite shader is the single source of truth for the AO remap formula. At `aoIntensity=1, aoExponent=1` the rendered output is byte-equivalent to the pre-split path.

## D-011: CompositeMaterial applies a `pow(1/1.1)` contrast correction

- **Date:** 2026-04-27 (retroactively documented during the trajectory audit; the correction itself has been live since the early composite work)
- **Status:** accepted (retroactive; documented during audit)
- **Context:** `CompositeMaterial.ts:88` applies `pow(max(lit, vec3(0.0)), vec3(1.0/1.1))` as the final step before writing `outColor`. This is a subtle gamma-like contrast boost (γ ≈ 0.909 — pulls midtones up). It was added implicitly during the original composite shader work and never recorded.
- **Decision:** Keep it. Document it now so it isn't accidentally removed during a future "physical accuracy" pass that misreads it as a bug.
- **Alternatives considered:**
  - Remove the `pow` and ship raw linear lit values: rejected — the existing demo presets (and any user's existing visual reference of "what a baked Cornell looks like in this baker") are calibrated against post-`pow` output. Removing it would shift every comparison reference. If a future caller wants raw values they can read pre-composite from `Lightmapper.textures.direct`/`indirect`.
  - Make it a uniform with default 1.0 (= identity): acceptable future work. Out of scope right now.
- **Consequences:** Output is NOT physically calibrated in absolute units. Quantitative comparisons between this baker's output and ground truth (Mitsuba, PBRT) must account for the curve. Visual comparison against other browser bakers is meaningless without normalising both sides through the same curve. The bias is consistent across direct, indirect, and AO channels (all flow through the composite), so relative ratios within an output are preserved.

## D-013: Density mode and per-mesh resolution as orthogonal sizing strategies

- **Date:** 2026-04-27
- **Status:** accepted
- **Context:** Phase 1 of the demo→public-API migration promotes the demo's `scaleInLightmap` density multiplier into the public API as `LightmapBakerOptions.texelsPerMeter` + `perMesh[uuid].density`. The existing public API already had `perMesh[uuid].resolution` (forces a mesh into its own per-resolution atlas). Both knobs control "per-mesh quality" but use different mechanisms — combining them in one bake call would require the bin-packer to handle mixed atlas sizes, which it doesn't.
- **Decision:** Treat them as **mutually exclusive within one bake**. When `texelsPerMeter` is set, density mode runs (`partitionByDensity` → `binPackMeshes`); per-mesh `resolution` overrides are silently ignored with a DEV warning. When `texelsPerMeter` is omitted, resolution mode runs (`partitionByResolution`) and `density` overrides are ignored. Both still respect `exclude`.
- **Alternatives considered:**
  - Compose them: meshes with explicit `resolution` get their own atlas group; remaining meshes get density-packed at `globalRes`. Rejected — adds complexity to the partition + bake loop for a use case neither the demo nor public-API callers exercise today.
  - Make `density` always-on (as a multiplier on the resolution-mode atlas allocation): rejected — `partitionByResolution` doesn't compute UV demand; density would have no effect there.
- **Consequences:** The new partition logic lives in `src/lib/utils/Partition.ts` (not LightmapBaker.ts) per the 300-line modularity rule. Public API gains capability without breaking existing callers (default `texelsPerMeter=0` triggers the legacy resolution-only path). DEV warning surfaces caller misuse without throwing.

## D-012: TDR / GPU-watchdog protection via scissor tiling, not resolution downscaling

- **Date:** 2026-04-27
- **Status:** accepted
- **Context:** Task 08 — bakes at 2048² / 512 samples (Final preset) issue ~80M+ ray traversals in a single `gl.draw()` call. Windows' default GPU watchdog (TDR) is ~2s; iGPUs and low-end discrete cards routinely exceed it. The bake must scale to that workload without crashing the user's GPU.
- **Decision:** Split each ray-tracing draw into N×N **scissored tiles** (default 64×64 in safe mode, 256×256 on iGPUs, 1024×1024 / unlimited on discrete GPUs). Each tile is a separate `gl.draw()` of the same fullscreen quad with `gl.scissor` masking output to a sub-rectangle. The mapper's progressive accumulator (additive blend with `opacity = 1/(n+1)`) is order-invariant, so tiled output is bit-identical to single-draw output.
- **Alternatives considered:**
  - **Resolution downscaling** (smaller lightmap when GPU is weak): rejected — permanent quality loss; user would see blurrier output as a side-effect of hardware choice. The user explicitly raised this concern and confirmed tiling is the correct approach.
  - **GPU timer queries** (`EXT_disjoint_timer_query_webgl2`) for batch-time measurement: rejected — adds extension boilerplate and per-frame query lifecycle for a signal we get for free from RAF-interval observation. WebGL is async; CPU `performance.now()` around `gl.draw()` measures command-buffer build, not GPU work, so a stretched RAF is a cleaner proxy for GPU back-pressure.
  - **Multiple smaller quads** instead of scissored fullscreen quads: rejected — equivalent output, more vertex/uniform plumbing, no benefit.
  - **Auto-retry on context loss**: rejected per task spec. Reloading the page is the cleanest recovery; auto-retry on a corrupt context risks deeper failure modes.
- **Consequences:**
  - Bake output is bit-identical to pre-T08 when `tileSize >= resolution` (the default for non-tiled paths). Existing reference images and demo behaviour unchanged.
  - At default `tileSize=256` on iGPU, a 1024² bake issues 16 draw calls per sample × samples × bounces; per-draw GPU work is ~1/16 of single-draw, well below TDR watchdog.
  - Per-tile CPU/driver overhead is ~10–100µs/draw — negligible vs the GPU shader work, but the floor on tile size (`MIN_TILE_SIZE = 64`) prevents this from dominating at extreme tiling.
  - Public API surface: `LightmapBakerOptions.timeoutProtection?: { safeMode?, initialTileSize?, maxBatchMs?, maxFrameMs?, autoAdapt? }`.
  - New `BakeError` phase `'context-loss'` is thrown if the canvas reports `webglcontextlost` mid-bake.
  - `adaptiveTileSize(intervals, current, tp)` is a user-tunable policy slot — the framework supplies a starter (3-of-last-4 RAFs over 1.5× budget → halve, no growback) but the function is explicitly marked `TODO(user)` because the threshold/magnitude/hysteresis trade-offs are UX calls.

## D-014: HalfFloat composite RT, no mipmaps, gl.finish() drain

- **Date:** 2026-05-06
- **Status:** accepted
- **Context:** On NVIDIA D3D11 the FIRST scene render after a successful bake reproducibly lost the WebGL context (`webglcontextlost`) on the Cornell scene. Investigation showed two contributing pressures landing at the same instant: (1) the composite RT was `FloatType` + `LinearMipMapLinearFilter` + `generateMipmaps:true`, and post-bake the new `MeshStandardMaterial.lightMap = composite.texture` assignment triggered a lazy mipmap chain regen for a 1024² Float RT (~21 MB GPU work) on top of (2) a queued backlog of bounce+AO+composite tile draws from the bake itself that the driver hadn't drained yet.
- **Decision:**
  1. Composite RT switched to `HalfFloatType` + `LinearFilter`, `generateMipmaps:false`. HalfFloat + LinearFilter is universally supported in WebGL2 (no `OES_texture_float_linear` extension dependency) and ~65k dynamic range covers our HDR composite outputs. Skipping mipmaps removes the chain-regen cost entirely; the lightmap is sampled at base mip in the standard render path.
  2. Bounce MRT and AO RT remain `FloatType` (see D-015).
  3. `LightmapBaker.bake()` calls `this.renderer.getContext().finish()` between the sample loop and `runPostProcess`. Drains the GPU queue explicitly. The cost (~3 s observed at 1024² Production) was happening anyway; this just isolates it from the post-bake scene render and makes it explicit in profiling.
- **Alternatives considered:**
  - Keep FloatType composite, only drop mipmaps: rejected — `OES_texture_float_linear` is missing on enough iGPUs that the fallback path was itself a TDR risk.
  - Use `gl.flush()` instead of `gl.finish()`: rejected — `flush` is non-blocking; the goal is to make sure the GPU is idle before we trigger more work, which only `finish` guarantees.
  - Batch the post-bake renderer setup across multiple RAFs to spread the load: rejected — adds orchestration complexity and user-visible latency for a problem that has a single-line fix.
- **Consequences:** Composite output precision drops from 32-bit float to 16-bit float per channel. For lightmap composite (linear radiance, typical magnitudes 0–10) the precision loss is far below visual threshold. Quantitative comparisons against earlier bakes need to account for the format change. Bake completion now blocks the JS thread for the queue length before resolving, but that block was implicit in the first post-bake render anyway.

## D-015: HalfFloat MRT for bounce was tested and rejected — Float MRT stays

- **Date:** 2026-05-06
- **Status:** accepted (records the rejection)
- **Context:** Natural follow-up to D-014: if HalfFloat composite is fine, why not HalfFloat MRT for the bounce shader too? Memory savings would be ~50% per bounce RT.
- **Decision:** Keep `FloatType` MRT in `Lightmapper.ts` and `AOMapper.ts`. Documented inline.
- **Alternatives considered:**
  - HalfFloat MRT: tested on RTX 3050 Ti / Windows / ANGLE D3D11. A 1024²×512-sample bake that completed in ~32 s with FloatType MRT took **~981 s** with HalfFloat MRT (30× regression). The driver's MRT path for HalfFloat hits a slow fallback when the render target is sampled by a downstream shader (CompositeMaterial reads `directTex` / `indirectTex` / `aoTex` per fragment). Single-attachment HalfFloat works; HalfFloat MRT does not on this driver path.
- **Consequences:** Bounce + AO RTs are 2× larger than they could be on memory-friendly drivers, but consistent fast-path performance everywhere. `OES_texture_float_linear` reports `true` on every tested discrete GPU, so the FloatType path doesn't fall back.

## D-016: Pin the USE_LIGHTMAP shader variant at scene init via a 1×1 dummy lightmap

- **Date:** 2026-05-06
- **Status:** accepted
- **Context:** With D-014's composite changes in place, a residual TDR/context-loss path remained: the first `renderer.render(scene, camera)` after a bake assigned `lightMap` for the first time on every `MeshStandardMaterial`, which adds the `USE_LIGHTMAP` define to the shader, which forces a fresh program compile. On NVIDIA D3D11 with parallel-shader-compile this took ~2 s and exceeded the Windows TDR watchdog when stacked on top of any other GPU work in flight. `renderer.compile(scene, camera)` upfront with all variants at once made it WORSE (2.2 s → 14 s) — see F-004.
- **Decision:** At scene construction time, before any heavy GPU work, install a 1×1 white `DataTexture` as `lightMap` on every `MeshStandardMaterial` with `lightMapIntensity = 0`. This forces the `USE_LIGHTMAP` shader variant to compile during scene init, when the scene is empty and the program is small (low-millisecond cost). After bake, `applyRenderMode` swaps `mat.lightMap = composite.texture` — same shader variant, no recompile, just a texture pointer swap. `mat.needsUpdate` is intentionally NOT set on swap. For excluded / pre-bake meshes, the dummy stays mounted with intensity 0 (visually identical to "no lightmap") instead of `mat.lightMap = null` — null removes the define and triggers the recompile.
- **Alternatives considered:**
  - `renderer.compile(scene, camera)` with all USE_LIGHTMAP variants seeded upfront: rejected — see F-004.
  - Compile a single throwaway program at startup containing the variant, without mounting on real meshes: rejected — shader variants in three.js are tied to material flags, not standalone; can't pre-compile in isolation.
  - Pre-render an off-screen frame to a 1×1 RT to warm the program cache: rejected — equivalent cost to mounting a dummy + first render, with more orchestration.
- **Consequences:** Every `MeshStandardMaterial` in the scene carries an extra 4-byte texture reference and an `intensity=0` slot for the lifetime of the demo. Functionally invisible; memory cost negligible. The dummy texture is module-scoped and reused across all meshes (one `DataTexture` shared by reference). Any future Three.js material added to the demo MUST go through the `installDummyLightmaps` path or risk re-introducing the TDR.

## D-009: Texel density as a material-swap layer (not a lightmap-overlay layer)

- **Date:** 2026-04-26
- **Status:** accepted
- **Context:** 7E adds a "Texel Density" debug visualization. The Layer registry was originally designed for swapping the `lightMap` texture only; texel density needs to draw a checker pattern *instead of* the mesh's normal shading.
- **Decision:** Extend the layer system with a "swap material" path. `applyRenderMode` special-cases the `texelDensity` layer ID, swaps each mesh's material to a shared `TexelDensityMaterial` instance, and caches the original material in a `WeakMap<Mesh, Material>` so it can be restored on switch-away.
- **Alternatives considered:**
  - Bake a density texture and mount as `lightMap`: rejected — derivative-based density (`dFdx`/`dFdy`) is screen-space; baking it offline gives a flat-color density per mesh rather than a per-pixel ratio against the actual rendered density.
  - Separate "viz scene" rendered to a different RT: rejected — overkill; reusing the main scene + swapping materials is cheaper.
- **Consequences:** The Layer registry now has two "kinds" of layers (lightmap-mounting and material-swapping). Future swap-style layers (e.g. wireframe, normals viz) follow the same pattern. WeakMap usage means cached originals are GC'd if a mesh is removed from the scene.
