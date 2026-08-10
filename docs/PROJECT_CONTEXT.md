# Three Lightmap Baker — Current Project Context and Continuation Handoff

Last audited: 2026-07-26  
Repository: `Ibrahim-3d/three-lightmap-baker`  
Authoritative branch: `master`  
Pre-handoff audited HEAD: `00845a20b09b41fb9f982128c4ef0ab38e9b1a9c`  
Latest code-bearing integration: PR #15, merged as `145d9c37029d8349f90e43d6860f66c2502a8510`

## 1. Important correction

The baseline does **not** need to be built again.

The debug system also does **not** need to be designed from zero. It already exists in the playground and has dedicated Playwright coverage.

The repository stopped after the stable browser baker, editor, project persistence, package hardening, and most core debug modes were implemented. The actual next major feature is **baked light probes for dynamic objects**.

The work before probe implementation is only a short verification pass: install dependencies, run the existing checks, confirm the current UI manually, and then continue from the existing architecture.

The separate Blender lightmap project is not part of this repository or this handoff.

## 2. Product goal

Finish Three Lightmap Baker as a coherent browser-first lighting system for Three.js:

```text
existing stable baked lightmaps
    ↓
existing inspection and debug workflow
    ↓
new baked light probes for dynamic objects
    ↓
probe-lit dynamic-object demonstration
    ↓
probe persistence and package-facing APIs
    ↓
strong architectural/interior showcase
    ↓
optional runtime companion lighting and future WebGPU work
```

The baked-lighting product remains the foundation. SSGI, GTAO, SSR, WebGPU, and the experimental path-tracing packages must not replace or destabilize the classic baker.

## 3. What is already implemented

### 3.1 Core browser baker baseline

The baseline is substantially complete:

- Browser/WebGL2 lightmap baking.
- Path-traced direct and indirect global illumination.
- Configurable multi-bounce lighting.
- `three-mesh-bvh` acceleration.
- Automatic UV2 generation through `xatlas-three`.
- Per-triangle albedo and emissive material data.
- Separate direct, indirect, AO, and composite outputs.
- Progressive accumulation hooks.
- Supersampling and downscaling.
- Gap flood / dilation.
- Bilateral denoising.
- Bake cancellation.
- Stable `LightmapBakeResult` lifecycle with `apply()`, `export()`, AO refresh/rebake, and `dispose()`.
- Explicit renderer and renderer-adapter constructor paths.
- Node-safe runtime capability reporting that truthfully reports Node baking as unsupported.

### 3.2 Editor and workflow baseline

The playground already contains a substantial DCC-style workflow:

- Scene presets and gallery.
- Asset Library add path.
- Outliner selection and framing.
- Transform controls.
- Undo and redo for add, remove, and transform operations.
- Three-dimensional camera objects.
- Camera view-through and viewport synchronization.
- Bake controls and presets.
- Inspector panels.
- Post-processing controls.
- Project JSON (`.3dl`) save and load.
- Imported GLB/glTF persistence.
- Baked final lightmap persistence, allowing a saved project to restore lighting without rebaking.

### 3.3 Existing debug and inspection system

The current debug system is functional. `apps/playground/src/three/modes.ts` already defines these render layers:

#### Output views

- `combined` — current final output.
- `combinedPost` — refined combined output.
- `combinedRaw` — raw combined output.
- `direct` — direct-light contribution.
- `indirect` — indirect/GI contribution.
- `ao` — ambient-occlusion contribution.

#### Debug views

- `lightmapRaw` — raw lightmap texture.
- `albedo` — normal albedo view.
- `albedoUnlit` — diffuse texture without lighting.
- `positions` — world-position atlas data.
- `normals` — world-normal atlas data.
- `texelDensity` — per-mesh texel-density visualization.

The inspector also includes a working Atlas view that paints the current bake atlas.

The debug mode runner already handles non-destructive material swapping, restores real materials before rebaking, preserves the pinned `USE_LIGHTMAP` shader variant, and cleans up generated debug materials.

### 3.4 Existing debug tests

`tests/e2e/render-modes.spec.ts` already tests that:

- Every existing layer can be selected after a bake without runtime errors.
- Rebaking from Texel Density restores the real scene materials before baking.
- Rebaking from Direct does not leave the final Combined output black.
- The Atlas inspector paints real atlas content.

Therefore, debug views are an implemented subsystem, not an unstarted phase.

### 3.5 Package and validation baseline

Already implemented:

- Strict TypeScript.
- pnpm workspace and authoritative lockfile.
- ESM, CJS, and declaration builds.
- Tarball import smoke test.
- `release:check` with typecheck, lint, formatting, builds, bundle budget, package import test, and npm dry run.
- Playwright browser smoke tests.
- Cornell visual bake regression.
- Launch screenshot and benchmark capture scripts.
- Runtime and bundle budget scripts.

Local package artifacts and import checks exist, but public npm publication is
not approved and must remain gated on Ibrahim's explicit approval.

## 4. What the debug system still needs

This is refinement and exposure work, not baseline implementation.

### 4.1 Not yet package-facing

Most debug modes currently live inside the playground/editor layer. The public library does not yet expose a clean, supported debug API for applications that consume `three-lightmap-baker` without the demo shell.

A later API could provide access to bake outputs and helper materials without coupling the npm package to the editor UI.

### 4.2 Incomplete launch presentation

The views work, but the repository still lacks a complete visual explanation in the README:

- Texel-density capture.
- Atlas capture.
- Direct-only capture.
- Indirect/GI-only capture.
- AO-only capture.
- Raw versus refined comparison.
- A compact technical breakdown sequence.

This is capture and documentation work, not renderer work.

### 4.3 Test integration gap

`render-modes.spec.ts` exists, but it is not included in the current `test:browser-smoke` script. It should either be added to that gate or placed in a clearly named extended visual/debug gate.

### 4.4 Diagnostics panel gap

Runtime capability reporting exists, but a complete user-facing diagnostics panel for renderer, ANGLE backend, WebGL2, float-buffer support, timeout-protection mode, and performance budget status still needs consolidation.

### 4.5 Probe debug modes are genuinely missing

Probe-only view, probe grid, influence visualization, interpolation preview, and probe heatmap cannot exist yet because the probe system itself has not been implemented.

## 5. Exact stop point

The final code-bearing work was merged through PR #15. It hardened package management, tests, project persistence, runtime capability reporting, editor functions, and lightmap restoration.

The commits after that were mainly documentation changes defining the hybrid-lighting direction.

No baked probe implementation was found under `packages/baker-classic/src/probes/` or elsewhere in the current package.

The project therefore stopped at this boundary:

```text
static lightmap baker: implemented
editor workflow: implemented
core debug views: implemented
saved lightmaps: implemented
baked probe volume: missing
dynamic object probe lighting: missing
probe persistence: missing
probe-facing API: missing
probe showcase: missing
```

## 6. Critical architecture that must not regress

### 6.1 Keep the classic two-pass bake

1. UV-space rasterization produces world-position and world-normal textures.
2. BVH ray tracing produces direct, indirect, AO, and composite lighting.

Do not merge these phases into one shader.

### 6.2 Preserve BVH/material extraction order

`MeshBVH` reorders the merged index buffer. Per-triangle material extraction must happen after BVH construction, while preserving mesh ordering.

### 6.3 Preserve shader variant pinning

The shared dummy lightmap keeps `USE_LIGHTMAP` compiled before heavy GPU work. Do not set lightmaps to `null` during normal layer switching and do not force unnecessary `needsUpdate` recompiles.

### 6.4 Preserve the explicit GPU drain

The baker calls `gl.finish()` after the group loop to avoid moving a large GPU queue drain into the first post-bake viewport render.

### 6.5 Preserve context-loss handling

Bake work must stop safely on WebGL context loss, listeners must be removed in `finally`, and queued progressive callbacks must not outlive the bake.

### 6.6 Preserve resource ownership

Every probe texture, geometry, helper material, debug mesh, render target, and data buffer added by the new work needs explicit ownership and idempotent disposal.

### 6.7 Keep experimental renderers separate

`packages/pt-renderer/` and `packages/pt-baker/` are experimental sibling paths. They are not the classic baker and should not become dependencies of the probe MVP unless a deliberate architecture decision proves that necessary.

## 7. Correct continuation plan

### Step 0 — Verify, do not rebuild

Run:

```bash
corepack enable
pnpm install
pnpm run release:check
pnpm run test:browser-smoke
pnpm exec playwright test tests/e2e/render-modes.spec.ts
```

Then manually confirm:

- Cornell bake.
- Combined/raw/refined switching.
- Direct, indirect, and AO switching.
- Position, normal, atlas, and texel-density views.
- Project save/load with restored lightmaps.

This step should only identify regressions. It is not a development phase.

### Step 1 — Define the probe data model

Create an isolated package boundary under:

```text
packages/baker-classic/src/probes/
```

Recommended initial modules:

```text
ProbeVolume.ts
ProbeTypes.ts
generateProbeGrid.ts
bakeProbeVolume.ts
interpolateProbes.ts
ProbeDebugView.ts
index.ts
```

The volume should initially store:

- bounds,
- dimensions,
- spacing,
- probe positions,
- validity state,
- irradiance coefficients,
- version information,
- and explicit disposal or release behavior where GPU resources are owned.

### Step 2 — Implement grid generation

Requirements:

- Generate a regular three-dimensional grid from scene bounds.
- Allow explicit bounds override.
- Allow configurable spacing or explicit grid dimensions.
- Avoid probes outside the usable volume where possible.
- Keep generation deterministic for persistence and tests.

### Step 3 — Implement probe lighting bake

Recommended quality direction: diffuse irradiance stored as low-order spherical harmonics, preferably SH9 RGB coefficients per probe.

MVP generation path:

1. Trace a reduced ray set around each probe using the existing scene BVH and material data.
2. Accumulate incident radiance from direct and bounced lighting.
3. Project the samples into SH9.
4. Store coefficients in a compact CPU structure first.
5. Add a GPU texture representation only when runtime application needs it.

Do not begin with a full WebGPU rewrite or SSGI system.

### Step 4 — Add probe visualization

Add:

- Colored probe spheres.
- Probe-grid visibility toggle.
- Probe-only render layer.
- Invalid-probe indication.
- Optional influence or interpolation preview.

Reuse the existing render-mode architecture rather than introducing a second debug framework.

### Step 5 — Add runtime interpolation

Implement trilinear interpolation between the eight neighboring probes.

Acceptance test:

- A moving diffuse sphere changes its received ambient/indirect color smoothly.
- The transition does not visibly jump at cell boundaries.
- Nearby red, green, or warm surfaces visibly influence the dynamic object.

### Step 6 — Integrate dynamic object shading

Start with a controlled demonstration material or material patch.

The first goal is proof, not universal material support:

- One moving diffuse object.
- Probe-derived indirect lighting.
- Existing direct real-time light can remain separate.
- Clear toggles for baked room, probe lighting, and final output.

After proof, define the supported integration path for `MeshStandardMaterial` and custom shaders.

### Step 7 — Persist probes in `.3dl`

Extend the demo project format with a versioned probe payload containing:

- volume bounds,
- grid dimensions and spacing,
- coefficient encoding,
- validity data,
- and a schema version.

Add a save/load round-trip test comparable to the existing baked-lightmap persistence test.

### Step 8 — Expose a clean package API

A likely direction:

```ts
const result = await baker.bake(scene);
const probes = await baker.bakeProbes(scene, probeOptions);
const irradiance = probes.sample(position, normal);
probes.dispose();
```

The final API should be decided after the internal probe MVP proves the data model. Do not freeze the public API before the runtime path works.

### Step 9 — Build the flagship interior showcase

Cornell proves correctness. A custom room proves product value.

The showcase should demonstrate:

- Static baked room lighting.
- Direct, indirect, AO, atlas, and texel-density views.
- Probe grid generation.
- A moving product/furniture object receiving colored bounce.
- Final composite.

### Step 10 — Finish release and launch proof

After the probe workflow is stable:

- Add the full technical capture sequence.
- Add probe and dynamic-object tests to CI.
- Run the complete release gate.
- Publish the npm package.
- Update README installation text.

## 8. Work that should not block the probe system

These remain later tracks:

- Full SSGI renderer.
- GTAO integration.
- SSR.
- Full WebGPU rewrite.
- True Node.js headless baking.
- Complex node-material editor.
- Large editor-chrome redesign.

They may be researched in isolation, but they should not delay a working probe volume and dynamic-object GI demonstration.

## 9. Definition of done

The project is meaningfully complete when:

1. Existing lightmap and debug functionality still passes.
2. A probe volume can be generated from a baked scene.
3. Probe data represents local bounced lighting.
4. A dynamic object samples the probe volume smoothly.
5. Probe debug views work through the existing render-mode system.
6. Lightmaps and probes survive project save/load.
7. Probe resources are disposed correctly.
8. Automated tests cover generation, interpolation, persistence, and the visual workflow.
9. A custom interior scene demonstrates the complete value proposition.
10. A future public-release decision is made only after Ibrahim's explicit
    approval and with honest browser/WebGL support claims.

## 10. Immediate next move

Do not spend a development cycle on baseline or generic debug work.

Run the existing checks, fix only real regressions, then start the probe data model and grid generator under `packages/baker-classic/src/probes/`.
