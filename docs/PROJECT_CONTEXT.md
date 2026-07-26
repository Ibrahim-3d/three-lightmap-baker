# Three Lightmap Baker — Current Project Context and Continuation Handoff

Last audited: 2026-07-26  
Repository: `Ibrahim-3d/three-lightmap-baker`  
Authoritative branch: `master`  
Audited HEAD: `00845a20b09b41fb9f982128c4ef0ab38e9b1a9c`  
Latest code-bearing integration: PR #15, merged as `145d9c37029d8349f90e43d6860f66c2502a8510`

## 1. Why this file exists

This is the continuation handoff for finishing the Three.js light-baking project.

The repository was left in a confusing state because the final commits were planning and roadmap updates rather than implementation. The browser lightmap baker itself is substantially built and hardened. The project stopped immediately before the next major product phase: baked light probes, dynamic-object GI, stronger debug views, and the broader hybrid-lighting workflow.

This file separates:

- what is actually implemented,
- what was only planned,
- what must not be regressed,
- what decisions remain open,
- and the recommended order for completing the product.

The separate Blender lightmap project is not part of this repository or this handoff.

## 2. Decision frame

### Goal

Finish Three Lightmap Baker as a coherent browser-first lighting system for Three.js, not merely a Cornell-box experiment or a collection of unrelated rendering prototypes.

### Product hierarchy

```text
stable baked lightmaps
    ↓
baked light probes for dynamic objects
    ↓
clear debug and inspection workflow
    ↓
optional real-time companion lighting
    ↓
future WebGPU acceleration
```

The baked-lighting product remains the foundation. SSGI, GTAO, SSR, WebGPU, and the experimental path-tracing packages must not erase or destabilize the core baker.

### Success criteria

The project is considered meaningfully finished when a user can:

1. Load or construct a Three.js scene.
2. Bake stable static lightmaps in the browser.
3. Inspect texel density, atlas layout, direct, indirect, AO, and final lighting.
4. Generate a probe volume from the baked static scene.
5. Move a dynamic object through the scene and see its lighting change from interpolated probe data.
6. Save and reload both lightmaps and probe data in the demo project format.
7. Use the core system through a documented package API.
8. Run automated tests that prove the main workflow still works.
9. View a convincing architectural/interior showcase rather than only a Cornell box.
10. Install the package from npm after the first real release.

### Constraints

- Browser/WebGL remains the shipping baseline.
- Three.js version is currently `r161`.
- TypeScript is strict.
- The classic two-pass lightmap architecture is non-negotiable.
- Existing WebGL resource ownership and cleanup rules must remain explicit.
- New features must not require Blender, Unity, or a server-side rendering backend.
- True Node.js baking is not currently supported and must not be implied.
- Experimental path-tracing packages are separate from the classic baker.

## 3. Repository state at the stop point

### Branch and PR state

- Default and authoritative branch: `master`.
- No open pull requests were found during this audit.
- No open issues were found during this audit.
- The latest repository commit is documentation-only: `00845a2` — `docs: add aggressive rendering research tracks`.
- The last major implementation merge is PR #15: `feat: pnpm migration, automation infrastructure, and lightmap persistence`.
- Closed but unmerged PRs must not be treated as shipped code. In particular, PRs #9, #10, and #11 were closed without merge.

### Important interpretation

The project did not stop because the existing baker was broken. It stopped after a major hardening phase, when the roadmap was expanded toward hybrid lighting. The probe system was specified in documentation but no probe implementation was added.

## 4. What is implemented now

## 4.1 Classic browser lightmap baker

The main library lives under:

```text
packages/baker-classic/src/
```

Implemented capabilities include:

- Browser/WebGL lightmap baking.
- Two-pass UV-space pipeline.
- `xatlas-three` automatic UV2 generation.
- Shared `three-mesh-bvh` acceleration structure.
- Direct and indirect global-illumination accumulation.
- Configurable multi-bounce path tracing.
- Per-triangle albedo and emissive material data.
- Standalone AO pass.
- Progressive accumulation and progress hooks.
- Bake cancellation through `AbortSignal`.
- Dilation/padding to prevent UV-island seams.
- Bilateral denoising.
- Supersampling and downscaling.
- Runtime/GPU capability detection.
- Explicit result lifecycle with apply, export, AO refresh/rebake, and disposal.

Current public construction styles:

```ts
new LightmapBaker(renderer, options?)
new LightmapBaker({ renderer, ...options })
new LightmapBaker({ rendererAdapter, ...options })
```

Current result lifecycle:

```ts
const result = await baker.bake(scene, hooks);
result.apply();
await result.export(...);
result.refreshAO(...);
result.rebakeAO(...);
result.dispose();
```

## 4.2 Classic baker architecture

Relevant paths:

```text
packages/baker-classic/src/
  LightmapBaker.ts
  rendererAdapter.ts
  runtimeCapabilities.ts
  bake/
  atlas/
  lightmap/
  gpu/
  utils/
```

Current pipeline:

1. Validate options and runtime capabilities.
2. Partition meshes by resolution or texel-density mode.
3. Generate or update UV2 charts.
4. Merge scene geometry.
5. Build the shared BVH.
6. Extract per-triangle material data after BVH index reordering.
7. Rasterize UV-space position and normal buffers.
8. Trace direct and indirect lighting progressively.
9. Run AO.
10. Composite direct, indirect, and AO.
11. Dilate and optionally denoise.
12. Assemble a disposable `LightmapBakeResult`.
13. Explicitly drain the GPU queue before returning.

## 4.3 Demo/editor

The main browser application lives in:

```text
apps/playground/
```

The editor shell and shared UI are split across:

```text
packages/demo-shell/
packages/shared/
```

Implemented editor capabilities include:

- Scene gallery and built-in presets.
- Asset Library for primitives, lights, and cameras.
- Outliner selection.
- Keyboard selection stepping.
- Frame-to-object behavior.
- Transform controls.
- Add/remove/transform undo and redo.
- Topbar menus and settings navigation.
- Bake controls and cancellation.
- 3D camera objects.
- Camera-specific FOV, aspect, and clipping controls.
- View-through-camera mode.
- Move-camera-with-viewport workflow.
- Blender-style camera portal rendering.

## 4.4 Project persistence

The demo project format can preserve:

- built-in scene presets,
- imported GLB/glTF data,
- asset-library additions,
- bake options,
- editor options,
- and baked final lightmap atlas payloads.

Baked lightmaps are stored in the project JSON as encoded floating-point atlas data, allowing a project to reload without rebaking.

The demo format is an editor convenience format, not the public npm API.

The roadmap refers to it as `.3dl`, while some older wording calls it Project JSON v1. Keep one canonical extension and schema name during the next implementation pass.

## 4.5 Testing and automation

The repository uses pnpm through Corepack.

Primary commands:

```bash
corepack enable
pnpm install
pnpm run typecheck
pnpm run typecheck:examples
pnpm run lint
pnpm run format:check
pnpm run build
pnpm run test:browser-smoke
pnpm run release:check
```

The browser smoke suite currently covers:

- renderer-adapter runtime,
- Cornell Draft visual bake,
- bake cancellation,
- project save/load,
- outliner selection,
- editor history,
- asset-library add path,
- topbar controls.

Additional automation exists for:

- launch screenshots,
- benchmark capture,
- expected-GPU validation,
- bundle-size budget,
- runtime benchmark budget,
- tarball import testing,
- npm publish dry run,
- manual npm publishing with provenance.

The documentation reports that `release:check` passed at the last audit. It was not re-executed during this repository-context pass and must be rerun before feature work is merged.

## 4.6 Package and release status

- Package version: `1.0.0`.
- ESM build exists.
- CJS build exists.
- Type declarations exist.
- Tarball import smoke exists.
- npm dry-run validation exists.
- Manual publish workflow exists.
- The package has not been published to npm yet.

## 4.7 Experimental path-tracing packages

These paths exist separately from the classic baker:

```text
packages/pt-renderer/
packages/pt-baker/
apps/pt-preview/
apps/pt-baked/
```

They were created for real-time path-tracing preview and experimental bake comparison. Their UI was intentionally hidden from the main editor during the polish phase.

Rules:

- Do not confuse `pt-renderer` with the classic lightmap baker.
- Do not make probe implementation depend on reviving the PT editor mode.
- Reuse low-level logic only when it is demonstrably cleaner than extending the stable classic pipeline.
- Keep these packages experimental until they have a clear product role and automated coverage.

## 5. Critical invariants that must not be regressed

## 5.1 BVH reorder and material extraction

`MeshBVH` reorders the merged index buffer during construction.

Therefore:

- build the BVH first,
- extract per-triangle materials after BVH construction,
- preserve mesh ordering across geometry merge and material extraction.

Changing this order breaks material lookup during ray tracing.

## 5.2 `USE_LIGHTMAP` shader variant pinning

A shared 1×1 dummy lightmap is installed on every `MeshStandardMaterial` during scene initialization with zero intensity.

This forces the lightmap shader variant to compile before heavy GPU work. Post-bake texture replacement must not trigger an expensive shader recompile.

## 5.3 GPU queue drain

`LightmapBaker.bake()` must call `gl.finish()` after the per-group loop.

Without the explicit drain, the first post-bake scene render may inherit queued work and trigger a driver timeout on NVIDIA/D3D11.

## 5.4 Context-loss handling

The baker installs a `webglcontextlost` listener before the pipeline starts and removes it in `finally`.

New progressive passes must check the shared context-loss state before scheduling more GPU work.

## 5.5 Resource ownership

`LightmapBakeResult` owns generated textures, render targets, atlas internals, AO/composite outputs, and the shared BVH view returned by the bake.

Probe resources must follow the same explicit ownership model. Every texture, target, material, helper geometry, and debug object needs a clear `dispose()` path.

## 5.6 Package boundaries

- Reusable feature code belongs under `packages/`.
- `apps/*` should remain thin integration layers.
- Packages must not import from apps.
- Cross-package shared behavior belongs in `packages/shared/` only when it is genuinely shared.
- Avoid circular imports.

## 6. What is not implemented

The following items exist only in roadmap and status documents:

### Light probes

- Probe grid generation.
- Probe bounds override.
- Probe spacing controls.
- Probe validity testing.
- Irradiance capture per probe.
- Directional probe representation.
- Probe interpolation.
- Probe debug spheres.
- Probe influence visualization.
- Probe heatmap.
- Dynamic-object probe lighting.
- Probe persistence in `.3dl`.
- Probe import/export.
- Probe lifecycle/disposal API.
- Public probe-generation API.

### Debug workflow

- Stable direct-only view.
- Stable indirect-only view.
- Stable AO-only view.
- Stable atlas view suitable for capture.
- Raw-versus-dilated-versus-denoised comparison.
- Probe-only view.
- Playwright hooks for all debug modes.
- Complete committed debug-view screenshot set.

Texel-density tooling exists, but the full debug showcase was not completed.

### Hybrid companion lighting

- SSGI companion pass.
- GTAO-style contact occlusion.
- SSR/reflection companion.
- Temporal accumulation for companion passes.
- Companion-pass denoising.
- Clear baked/probe/screen-space contribution controls.

### WebGPU

- WebGPU capability reporting.
- WebGPU compute design.
- WebGPU bake prototype.
- WebGPU probe-generation prototype.

### Headless runtime

- True Node.js baker.
- Node-compatible WebGL/WebGPU backend.
- Real non-browser CI bake.

The current Node capability API correctly reports that baking is unsupported.

### Product proof

- Custom architectural/interior showcase scene.
- Larger-scene visual regression.
- Top-of-README product video or GIF.
- Complete technical breakdown images.

### Release

- Actual first npm publish.
- Post-publish README install update.

## 7. Light-probe design decision

The old roadmap proposes storing one RGB irradiance value per probe. That is acceptable for a throwaway ambient-color demo but is weak as the final architecture because it has no directionality. A surface facing away from a bright wall would receive the same light as a surface facing toward it.

### Evaluation matrix

| Representation | Directional quality | Storage | Runtime cost | Implementation risk | Long-term value |
|---|---:|---:|---:|---:|---:|
| One RGB value | Very low | Very low | Very low | Low | Low |
| RGB + dominant direction | Medium-low | Low | Low | Medium | Medium-low |
| First-order SH, 4 coefficients/channel | Medium | Medium | Low | Medium | Medium |
| Second-order SH, 9 coefficients/channel | High for diffuse GI | Medium-high | Low-medium | Medium | High |
| Cubemap per probe | High | Very high | High | High | Low for dense volumes |

### Recommended direction

Use second-order spherical harmonics, matching Three.js `SphericalHarmonics3` / `LightProbe` conventions, as the persisted probe representation.

Why:

- It preserves directional diffuse irradiance.
- It is standard for light probes.
- Nine coefficients per RGB channel are compact compared with cubemaps.
- It provides a credible foundation rather than an RGB-only dead end.
- It aligns with Three.js concepts even if the runtime application needs a per-object material adapter.

A temporary RGB preview may be used for debugging, but it should be derived from the SH data rather than becoming the canonical storage format.

## 8. Recommended probe-generation path

### First implementation path: baked-scene cubemap capture to SH

For the first production-capable version:

1. Bake the static scene normally.
2. Apply the final lightmaps to the static scene.
3. Generate probe positions inside a configurable volume.
4. At each valid probe position, render the baked static scene into a low-resolution cubemap.
5. Project the cubemap radiance into second-order SH coefficients.
6. Persist the SH coefficients and volume metadata.
7. Interpolate neighboring SH probes at runtime.

Advantages:

- Reuses the existing final baked result.
- Avoids immediately building a second probe-specific ray tracer.
- Produces directional data.
- Is easy to validate visually against the baked room.
- Keeps the first probe system browser/WebGL-compatible.

Costs:

- Six renders per probe.
- Must hide dynamic objects and debug helpers during capture.
- Requires probe validity and near-geometry checks.
- Large volumes need batching, progress reporting, cancellation, and performance limits.

### Later optimization path

After correctness is proven, evaluate a batched reduced-ray probe pass using the existing BVH/material textures. Do not begin with this unless cubemap capture proves inadequate.

## 9. Recommended probe module boundary

```text
packages/baker-classic/src/probes/
  types.ts
  ProbeVolume.ts
  generateProbeGrid.ts
  validateProbePositions.ts
  captureProbeCubemap.ts
  projectCubemapToSH.ts
  interpolateProbeSH.ts
  applyProbeLighting.ts
  ProbeDebugView.ts
  serialization.ts
  index.ts
```

Suggested responsibilities:

### `types.ts`

- `ProbeVolumeOptions`
- `ProbeRecord`
- `SerializedProbeVolume`
- `ProbeGenerationHooks`
- schema version types

### `ProbeVolume.ts`

Owns:

- volume bounds,
- grid dimensions,
- spacing,
- SH coefficients,
- validity flags,
- interpolation,
- serialization,
- disposal of debug/runtime resources.

### `generateProbeGrid.ts`

Generates deterministic positions from:

- scene bounds,
- explicit bounds override,
- grid spacing,
- padding,
- maximum probe count.

### `validateProbePositions.ts`

Rejects or relocates probes:

- inside solid geometry,
- too close to a surface,
- outside the configured volume,
- or outside navigable/meaningful space when a custom mask is supplied.

### `captureProbeCubemap.ts`

- Captures only the static baked scene.
- Preserves renderer state with `try/finally`.
- Supports cancellation.
- Reuses render targets where possible.
- Does not leak cube targets, materials, or helper cameras.

### `projectCubemapToSH.ts`

Produces `THREE.SphericalHarmonics3`-compatible coefficients and documents color-space handling.

### `interpolateProbeSH.ts`

Begins with trilinear interpolation on a regular grid. Invalid corners must be renormalized rather than contributing black energy.

### `applyProbeLighting.ts`

Must support the moving-object demo without globally applying one probe to the entire scene.

Likely implementation:

- sample the probe volume per object,
- pass SH coefficients to that object's material through a controlled `onBeforeCompile`/`onBeforeRender` adapter,
- keep original material behavior reversible,
- and dispose shader hooks cleanly.

A single global `THREE.LightProbe` is acceptable only for the earliest one-object proof, not as the final multi-object architecture.

### `ProbeDebugView.ts`

Provides:

- colored probe spheres,
- valid/invalid state,
- selected probe details,
- optional influence cells,
- optional interpolation preview,
- and explicit disposal.

### `serialization.ts`

Persists:

- schema version,
- bounds,
- dimensions,
- spacing,
- coefficient layout,
- coefficients,
- validity flags,
- generation settings.

## 10. Recommended continuation plan

## Phase 0 — Re-establish a trustworthy baseline

Before changing architecture:

1. Pull `master`.
2. Install through Corepack and pnpm.
3. Run `pnpm run release:check`.
4. Run `pnpm run test:browser-smoke`.
5. Run the demo with hardware acceleration.
6. Verify Cornell Draft and Production bakes manually.
7. Save and reload a baked `.3dl` project.
8. Record any environment-specific failures before feature work.

Exit condition: the existing project is green and behavior is documented.

## Phase 1 — Finish the debug-view foundation

Implement stable internal/debug access to:

- texel density,
- atlas,
- direct,
- indirect,
- AO,
- raw composite,
- dilated result,
- denoised final.

Add deterministic UI hooks and Playwright selectors before probes. Probe debugging will depend on the same mode system.

Exit condition: each debug mode can be selected, captured, and restored without rebaking.

## Phase 2 — Probe data model and grid

Implement:

- probe types,
- regular grid generation,
- bounds override,
- spacing controls,
- count limit,
- position validation,
- debug spheres,
- deterministic interpolation tests.

Do not generate lighting yet.

Exit condition: a visible, valid, disposable probe grid can be created and edited in the room.

## Phase 3 — Baked-scene capture and SH generation

Implement:

- baked cubemap capture,
- cubemap-to-SH projection,
- generation progress,
- cancellation,
- resource reuse,
- validity handling,
- probe color visualization.

Exit condition: probe colors and directions visibly match the room's baked bounce lighting.

## Phase 4 — Dynamic-object GI

Implement:

- per-object probe sampling,
- trilinear SH interpolation,
- reversible material integration,
- moving sphere/product demo,
- baked-only/probe-only/final modes.

Exit condition: a dynamic object visibly receives different bounced light while moving through the room.

## Phase 5 — Persistence and API

Implement:

- `.3dl` probe schema,
- schema versioning,
- save/load round trip,
- import/export behavior,
- public or semi-public probe API,
- explicit disposal rules.

Recommended API direction:

```ts
const result = await baker.bake(scene, hooks);
const probes = await baker.generateProbes(scene, result, options, hooks);

const sample = probes.sample(worldPosition);
probes.applyTo(object);
probes.removeFrom(object);

const json = probes.serialize();
probes.dispose();
```

Keep `bake()` stable. Probe generation should be additive rather than changing the existing result shape in a breaking way.

Exit condition: lightmaps and probes survive save/load and can be used without the editor.

## Phase 6 — Automated proof

Add tests for:

- deterministic grid dimensions,
- interpolation at corners/edges/center,
- invalid-probe renormalization,
- SH serialization round trip,
- probe generation cancellation,
- resource disposal,
- project save/load with probes,
- dynamic-object color response in two different room regions,
- debug-mode switching.

Exit condition: probe correctness is protected before hybrid companion passes begin.

## Phase 7 — Flagship interior showcase

Build one custom room designed to expose:

- warm and cool color zones,
- shadowed corners,
- open bright regions,
- different surface materials,
- a moving product object,
- probe grid and interpolation.

Produce:

- top README video/GIF,
- before/after images,
- atlas view,
- direct/indirect/AO breakdown,
- probe visualization,
- moving-object proof,
- final composite.

Exit condition: the value is obvious without reading implementation details.

## Phase 8 — First npm release

Only after baseline checks remain green:

1. Configure trusted publishing or repository token.
2. Run the manual npm publish workflow for version `1.0.0` or intentionally bump the version.
3. Verify registry install in a clean external sample.
4. Update README installation instructions.
5. Tag the release.

The first npm release can ship before optional SSGI/WebGPU work, but probe support should be clearly versioned if it is not included in `1.0.0`.

## Phase 9 — Optional hybrid runtime companion

After probes are stable, evaluate:

- GTAO/contact-occlusion first,
- small SSGI companion second,
- SSR only for a proven configurator/interior need,
- temporal accumulation only where the visual gain justifies complexity.

Each pass must be separately toggleable and must not modify the meaning of the baked result.

## Phase 10 — WebGPU and true headless research

Only after the product workflow is complete:

- extend runtime capabilities with WebGPU status,
- prototype one isolated compute pass,
- benchmark probe generation,
- choose an explicit headless renderer strategy,
- keep WebGL supported until a WebGPU path is proven.

## 11. Definition of done

### Core baker

- Existing static bake quality does not regress.
- Baseline release and browser tests pass.
- Resource disposal remains correct.

### Debug workflow

- All major bake contributions are independently inspectable.
- Debug views are deterministic and automation-friendly.

### Probes

- Directional SH probe data is generated.
- Invalid probes are handled.
- Interpolation is stable.
- Dynamic objects respond to location.
- Multiple objects can receive different samples.
- Probe data persists.
- Probe resources dispose cleanly.

### Product proof

- Custom interior scene exists.
- Dynamic-object GI is obvious.
- README explains the pipeline visually.

### Release

- Package installs from npm.
- Documentation matches code.
- Unsupported Node/WebGPU claims are not made.

## 12. Immediate next move

Create a dedicated implementation branch from current `master` and execute only Phase 0 and Phase 1 first.

Recommended branch:

```text
feat/probe-foundation-and-debug-views
```

Do not start SSGI, WebGPU, a node editor, or a full engine rewrite before the probe foundation, dynamic-object proof, persistence, and automated coverage are complete.

## 13. Audit limitations

This handoff was produced from the GitHub repository contents, commit history, PR history, roadmap, API status, launch-readiness documentation, package configuration, and architecture documentation.

No local clone, dependency installation, build, browser run, or GPU bake was executed during this audit. The first implementation session must therefore begin by validating the repository on a real development machine and updating this file where runtime reality differs from the documented state.
