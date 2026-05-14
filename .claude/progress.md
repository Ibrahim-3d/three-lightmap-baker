# Lightmap Baker — Progress Tracker

**Checkpoint: 2026-05-06.** Sessions 1–11 (Tasks 01–09, 12, 13 + multi-bounce
GI + AO split + TDR/timeout protection + public API foundation) archived to
[`.claude/archive/sessions-2026-04-27.md`](archive/sessions-2026-04-27.md).
The reconciliation audit done at the end of S9 lives at
[`.claude/archive/AUDIT-2026-04-27.md`](archive/AUDIT-2026-04-27.md) — read
that if you ever doubt the journal vs. the code.

For current pipeline shape see [`docs/architecture.md`](../docs/architecture.md).
For decisions see [`docs/DECISIONS.md`](../docs/DECISIONS.md). For dead-end
patterns see [`docs/FAILED-APPROACHES.md`](../docs/FAILED-APPROACHES.md).

---

## Status

| Track | State |
|---|---|
| Core baker (Tasks 01–09, 12, 13) | ✅ Done |
| Multi-bounce GI (1–4 bounces, RR ≥ b2) | ✅ Done (S8) |
| AO split into own pass (`AOMapper`, view-time remap) | ✅ Done (S9) |
| Multi-light DataTexture (point/dir/spot/area, ≤16) | ✅ Done (S8) |
| WebGL TDR / context-loss protection (scissor tiling + adaptive throttle) | ✅ Done (S10) |
| Density-aware multi-atlas in public API | ✅ Done (S11 P1) |
| `BakeHooks.onFrame` + per-RAF composite refresh | ✅ Done (S11 P2) |
| `BakeGroupView` / `result.groups` / `getGroupForMesh` | ✅ Done (S11 P3a) |
| Demo `→ LightmapBaker.bake()` migration (P3b + P4) | ✅ Done (S12.1) |
| Task 10 — Lightmap downscaling (superSample) | ✅ Done |
| Task 11 — Light probes (SH) | ⬜ |
| Post-bake TDR mitigations (HalfFloat composite, GPU drain, dummy-LM pin) | ✅ Done (S12) |
| T-D1 — Demo restructure: SceneController + BakeController + modes.ts | ✅ Done (S13) |

**iGPU validation of Task 08 / S12 TDR work** — still deferred to user environment.

---

## Migration Risk Register — historical, all addressed

The demo migration (P3b + P4) shipped in stages across S11 and S12.1. The
register below is kept for archaeology — every R-item is now addressed in
code. Authoritative analysis lives in
[`archive/AUDIT-2026-04-27.md`](archive/AUDIT-2026-04-27.md) §5.

| ID | Feature | Resolution |
|---|---|---|
| R-01 | `scaleInLightmap` per-mesh density multiplier | ✅ Demo maps `e.scaleInLightmap → perMesh[uuid].density` and passes through `LightmapBaker.bake()` (`CornellBoxExample.ts:1209`). |
| R-02 | Density-aware multi-atlas auto-spawn | ✅ Library `partitionByDensity` runs whenever `texelsPerMeter > 0`; demo always passes it. |
| R-03 | Secondary directional light | ✅ Demo adds a real `THREE.DirectionalLight` to the scene around the bake (`CornellBoxExample.ts:1200`); removed in `finally`. Caught by `collectLightsFromScene`. |
| R-04 | AO-only re-bake | ✅ Demo `rebakeAO()` now delegates to `result.rebakeAO()` and re-pulls fresh group views (S12.1). Library owns BVH lifetime. |
| R-05 | Per-atlas progress | ✅ `BakeFrameInfo.totalGroups` + `groupIndex` give per-atlas resolution; demo renders `Atlas N/M` line in the progress text (`CornellBoxExample.ts:1280`). |
| R-06 | Per-mesh `TexelDensityMaterial` cache | ✅ Stayed in demo by design (presentation, not bake). |
| R-07 | Manual / re-runnable refinement | ✅ Stayed in demo by design (`runRefinement` is exported as a primitive). |
| R-08 | Multi-atlas `AtlasViewer.setTextures(texs)` | ✅ Stayed in demo by design (`AtlasViewer` is a demo-grade widget, not a public bake feature). |
| R-09 | GLB import camera/light auto-fit | ✅ Stayed in demo by design. |

---

## Open work

- **Task 10** — lightmap downscaling. ⬜. See `tasks/10-lightmap-downscaling.md`.
- **Task 11** — SH light probes. ⬜. See `tasks/11-light-probes.md`.
- **iGPU TDR validation** — bake at 2048² / 512 samples on a known-TDR-prone
  iGPU with `safeMode: true`; confirm completion. Plus exercise the S12
  HalfFloat composite + dummy-LM pin path (see Session 12).
- **Performance / tech-debt sweep** (next focus) — analyze current bake
  pipeline for hot spots, conflicts, dead code, redundant GPU work. Demo is
  now a thin consumer of the public API, so optimization can land in `lib/`
  with confidence the demo will follow.
- **Demo redesign roadmap (T-D2 → T-D13)** — Preact + Tailwind + signals UI; DCC-editor shell; scene preset registry; asset library; 8 preset scenes. Full design: `docs/plans/2026-05-14-demo-redesign-design.md`. Tasks in `.claude/tasks/d-2…d-13`.

---

## Recent: Session 12 — 2026-05-06 — Post-bake TDR mitigations + diagnostics

Investigation of `WEBGL_CONTEXT_LOST` reproducible on NVIDIA D3D11 immediately
after a successful bake on the Cornell scene. Root cause was the *post-bake*
path, not the bake itself: the first scene render after `bake()` returned was
hitting a 14-second compile of a fresh `USE_LIGHTMAP` shader variant and a
21 MB lazy mipmap regen on the composite RT, simultaneously, in front of a
full GPU command queue. Three independent fixes shipped:

| Layer | Change | Commit |
|---|---|---|
| `Composite.ts` | RT switched to `HalfFloatType` + `LinearFilter`, no mipmaps. Avoids `OES_texture_float_linear` fallback path on iGPUs and the post-bake mipmap regen. Output bit-equivalent at HDR ranges that fit half precision (~65k). | `ccae2c5` |
| `Lightmapper.ts` / `AOMapper.ts` | Inline comments documenting why **MRT stays `FloatType`** (HalfFloat MRT triggered a 30× ANGLE D3D11 perf regression on RTX 3050 Ti). No code change. | `ccae2c5` |
| `LightmapBaker.ts` | `gl.finish()` between sample loop and post-process — drains queued tile draws explicitly so the first scene render doesn't trigger an implicit drain on top of compile + mipmap work. Cost (~3 s at 1024² Production) was already happening; this just makes it explicit and isolates it from scene render. | `ccae2c5` |
| `Lights.ts` + `CornellBoxExample.ts` | `collectLightsFromScene` now skips `userData.lightmapIgnore` objects (matches mesh collector). Cornell's display-only `PointLight` was over-exposing the bake by 30×. | `ccae2c5` |
| `TexelDensityMaterial.ts` | When `uv2` is missing (pre-bake), draw magenta checker instead of solid red. Reads as "atlas not built yet" not "undersample bug". | `ccae2c5` |
| `atlas/generateAtlas.ts` | xatlas log throttle: one `done` per category, not one line per percent. | `ccae2c5` |
| `src/lib/utils/Diagnostics.ts` (NEW, 194 LOC) | `Diagnostics` helper: `snap()` / `measure()` / `banner()` / `contextLossInfo()` over `WEBGL_debug_renderer_info` + `KHR_parallel_shader_compile` + texture-format extension probes. Demo wires it around `bake()` entry, post-bake mode swap, and the first post-bake render (the latter via `diag.measure` so any future regression surfaces as an explicit timing). | `2374643` |
| Demo: dummy lightmap shader-variant pin | At scene init, every mesh gets a 1×1 white `DataTexture` as `lightMap` with `intensity=0`. Pins the `USE_LIGHTMAP` shader variant during scene construction (cheap — empty scene). First post-bake render then swaps the `lightMap` pointer instead of triggering a fresh program compile (~2 s on NVIDIA D3D11 → exceeded TDR watchdog). `applyRenderMode` keeps the dummy for excluded / pre-bake meshes (intensity=0) instead of `mat.lightMap=null` (null removes the define → recompile). | `2374643` |
| Demo: `autoBake=false` actually honored | `loadExternalScene` and `rebuildScene` no longer force a bake on scene swap when `autoBake` is off. | `2374643` |
| Demo: `webglcontextlost` / `webglcontextrestored` listeners on the canvas | Log group state + Diagnostics dump for post-mortem when context is lost. Demo also sets `powerPreference: 'low-power'`. | `2374643` |

Also: the rejected approaches from this investigation are recorded in
`docs/FAILED-APPROACHES.md` (F-004, F-005). The decisions are in
`docs/DECISIONS.md` (D-014, D-015, D-016).

**Verification.** `npx tsc --noEmit` clean. Vite build green (3 commits:
`ccae2c5` lib, `2374643` diag+demo, `68d720e` dist rebuild). On the
reproducer (NVIDIA D3D11, Cornell, autoBake off → manual Bake at default
quality), bake completes and the first post-bake render lands under 200 ms;
no context loss observed across ~20 cycles. Wider iGPU validation still
pending.

---

## Recent: Session 12.1 — 2026-05-06 — Migration cleanup, tracker reconciliation

Discovered during a baseline audit before the upcoming optimization sweep:
demo P3b migration was already shipped in S11 commits, but the tracker still
listed it as deferred and the demo carried residue.

| Layer | Change |
|---|---|
| `CornellBoxExample.ts` | `rebakeAO()` now `await`s `LightmapBakeResult.rebakeAO({ samples, distance, targetSamples })` and re-pulls fresh `result.groups[]` to rebind each demo composite's `aoTex`. Removes the duplicate `generateAOMapper` orchestration that paralleled the public method. |
| `CornellBoxExample.ts` | Replaced `bakeBVH: MeshBVH \| null` field with `bakeResult: LightmapBakeResult \| null`. BVH now lives where it's owned (library result). |
| `CornellBoxExample.ts` | Stripped 12 dead imports left over from the pre-migration local bake path: `MeshBVH`, `generateAtlases`, `renderAtlas`, `generateLightmapper`, `RaycastOptions`, `generateAOMapper`, `AORaycastOptions`, `mergeGeometry`, `extractPerTriangleMaterials`, `buildMaterialTextures`, `binPackMeshes`, `BinAssignment`, `PackedLight`. |
| Tracker | Migration Risk Register R-01 / R-02 / R-03 / R-04 / R-05 marked ✅ Done (R-01–R-03 + R-05 had shipped in S11 P1–P3a; R-04 fixed in this session). R-06–R-09 confirmed as design-intent ("stays in demo"). Status table flipped P3b+P4 to ✅ Done. |

`npx tsc --noEmit` clean. `npm run build` green at 909.97 KiB / 236 KiB
gzipped (Δ +0 vs. previous: dead imports were tree-shaken anyway, but the
source is now honest).

---

## Working with this checkpoint

When starting a session:

1. Read this file (status + open work).
2. Read [`docs/architecture.md`](../docs/architecture.md) for current pipeline shape.
3. Read [`docs/DECISIONS.md`](../docs/DECISIONS.md) and
   [`docs/FAILED-APPROACHES.md`](../docs/FAILED-APPROACHES.md) — never delete
   from these; supersede instead.
4. Glance at any open task file in `.claude/tasks/`.
5. Drop into `.claude/archive/` only if you need historical context that the
   current docs no longer carry.

When closing a session:

1. Append a new `## Recent: Session N — DATE` block here. Keep it tight —
   one short table of changes plus a verification line. Detailed narrative
   goes in commits.
2. Append any new D-/F- entries to DECISIONS / FAILED-APPROACHES.
3. Update the Status table if a track changed state.
4. If the "Recent" section grows beyond ~3 sessions, archive the oldest into
   `.claude/archive/` and leave a one-line pointer.

---

## Recent: Session 13 — 2026-05-14 — T-D1 demo restructure baseline

**Task completed:** Extract 1858-LOC `CornellBoxExample.ts` monolith into modular vanilla-TS controllers. Zero behavior change. Migration baseline for T-D2 Preact/Tailwind work.

| File | Change |
|---|---|
| `src/demo/three/types.ts` (NEW, 19 LOC) | Shared `SceneObj`, `PerMeshEntry`, `PerMeshMap`, `RenderModeOptions` types. |
| `src/demo/three/SceneController.ts` (NEW, 333 LOC) | Scene, camera, renderer, OrbitControls, TransformControls, light dummy/marker, Cornell build factories, GLB import, scene rebuild, resize, context-loss listeners. Hook-based callbacks keep it framework-free. |
| `src/demo/three/BakeController.ts` (NEW, 417 LOC) | `LightmapBaker` call site, bake groups, `bakeResult` lifetime, dummy-LM pin, AO-only re-bake, refinement runner, per-RAF `tick()`, `refreshAllComposites`. |
| `src/demo/three/modes.ts` (NEW, 237 LOC) | `LAYERS` table, `Layer` type, `RenderModeRunner` class. Fixed P1: `DEBUG` flag now gates the `applyRenderMode` diagnostic log (was unconditional). |
| `src/demo/CornellBoxExample.ts` (1858 → 824 LOC) | Thin orchestrator: Tweakpane bindings, `options` bag, DOM widgets, RAF loop, bake ETA, export buttons, atlas viewer. Wires controllers; two legacy getters preserved for `index.ts`. |
| `.claude/tasks/d-1-restructure-controllers.md` (NEW) | Per-task plan + step checklist. |
| `.claude/tasks/d-1-map.md` (NEW) | 42-entry section map of the old monolith. |
| `docs/plans/2026-05-14-demo-redesign-design.md` (NEW) | Full 13-task roadmap design doc (T-D1 → T-D13). |

**Decisions made:**
1. Hook-based callbacks on controllers (`onSceneChanged`, `installDummyLightmaps`, `disposeBake`) rather than EventEmitter — keeps controllers framework-free, orchestrator stays in charge of UI rebuild. Avoids EventEmitter dependency.
2. All 8 S12 failure-mode watch-items (dummy-LM pin, `lightmapIgnore` flag, TC/OC drag guard, composite cache chain, secondary DirLight inject/remove, `firstPostBakeRender` gate, `if (g)` group guard, 5 view-time sliders) explicitly preserved and verified by code-reviewer subagent before merge.

**Carry-overs / not changed:** Visual Cornell check (red/green bleed, soft shadow, ceiling tint) deferred to user environment per established convention. ESLint skipped — yarn-lockfile tooling error pre-existing, not introduced here.

**Next session:** T-D2 — install Preact + Tailwind + signals into the demo shell; replace Tweakpane bindings in `CornellBoxExample.ts` with signal-driven Preact components. Controllers unchanged; orchestrator becomes the signals bridge.

**Verification.** `npx tsc --noEmit` clean. `npm run build` green at 913.61 KiB / 237.19 KiB gz (Δ +3.64 KiB vs S12.1 — within ±5 KB target for pure restructure). `npx prettier --check src/demo/` clean. Code-reviewer verified all 8 S12 failure modes preserved; 1 P1 fixed.
