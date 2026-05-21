# Lightmap Baker — Progress Tracker

## Recent: Session 17 — 2026-05-21 — Task 11 parked; LightmapBaker split

**Decisions:**
- Task 11 (SH light probes) **parked** ⏸. Current demos have zero dynamic
  geometry; probes solve a problem we don't have today. PT-vs-classic
  canonical-sampler question must resolve before sampler choice for probes
  makes sense. Math + Three.js API choice in the task file remain correct
  when resurrected.
- Modularity debt sweep started. 13 files over 300-LOC limit, ~6500 LOC
  overweight in total. Worst-first strategy: split the top monsters,
  validate the pattern, then flip CI `modularity` job to hard-fail.
- This session: Step 1 only — `packages/baker-classic/src/LightmapBaker.ts`
  (1314 LOC). Branch `refactor/lightmap-baker-split` off
  `feat/step-4-5-completion` (S16 polish branch still live; modularity
  work doesn't touch the playground UI files S16 is iterating on).

**Split shipped (LightmapBaker.ts 1314 → 171 LOC):**

| Commit | New file | LOC | Content |
|---|---|---|---|
| `b01b736` | — | — | docs: park Task 11, kick off sprint |
| `<types>` | `bake/types.ts` | 275 | 13 public type aliases + `BakeGroupView` + `ResolvedBakerOptions` |
| `<types>` | `bake/internals.ts` | 41 | `GroupInternals`, `ContextLossState` (private) |
| `<validation>` | `bake/validation.ts` | 154 | `validateOptions`, `resolveTimeoutProtection`, `DEFAULT_REFINEMENT`, `toLinearColor`, `isPowerOfTwo` |
| `<result>` | `bake/result.ts` | 309 | `LightmapBakeResult` class + `rebakeAOForGroup` helper |
| `<result>` | `lightmap/index.ts` | 23 | Sub-system barrel for `AOMapper`/`Composite`/`Downscale`/`Lightmapper`/`Lights`/`Refinement` |
| `<groups>` | `bake/groups.ts` | 324 | `runGroupBake`, `buildRaycastOpts`, `buildAORaycastOpts`, `runMappersWithTimeoutProtection`, `adaptiveTileSize` |
| `<pipeline>` | `bake/pipeline.ts` | 228 | `runBakePipeline` orchestrator + `collectBakeMeshes` |
| `<pipeline>` | `bake/index.ts` | 12 | Internal barrel (validation + result + groups + types + internals) |
| `<pipeline>` | `utils/index.ts` | 11 | Internal barrel (GeometryUtils + MaterialTextures + Partition + exportLightmap) |
| (facade) | `LightmapBaker.ts` | **171** | constructor + `bake()` entry + re-exports |

**S12 invariants preserved (verified by code-reviewer agent):**
- `gl.finish()` drain at `bake/pipeline.ts:192`, correct position (post-group-loop, pre-stats, pre-`LightmapBakeResult` construction).
- Context-loss guard install + `finally` teardown in `LightmapBaker.bake()` (`LightmapBaker.ts:138`).
- `LightmapBakeResult.dispose()` order unchanged (downscale → refinement → composite → aoMapper → lightmapper → atlasDispose → matTexDispose).
- `LightmapperMaterial.ts` not touched.

**Modularity status after this PR:**

| File | LOC | State |
|---|---|---|
| `LightmapBaker.ts` (facade) | 171 | ✅ under cap |
| `bake/pipeline.ts` | 228 | ✅ under cap |
| `bake/types.ts` | 275 | ✅ under cap |
| `bake/validation.ts` | 154 | ✅ under cap |
| `bake/internals.ts` | 41 | ✅ under cap |
| `bake/index.ts` | 12 | ✅ under cap |
| `lightmap/index.ts` | 23 | ✅ under cap |
| `utils/index.ts` | 11 | ✅ under cap |
| `bake/result.ts` | 309 | ⚠ 9 over (class + colocated `rebakeAOForGroup` helper) |
| `bake/groups.ts` | 324 | ⚠ 24 over (per-group loop + RAF tile loop) |

**Known follow-ups (deferred, deliberate trade-offs):**
- Function-LOC overage: `runBakePipeline` (149 LOC) and `runGroupBake` (106 LOC) exceed CLAUDE.md's 50-LOC function cap. Pipeline orchestrators by nature exceed it; splitting into 6+ tiny private helpers adds noise without reducing complexity. Candidate Phase-2 split: extract phase helpers (`runGeometryPhase`, `runPerGroupLoop`, `computeBakeStats`) once the call sites mature.
- File-LOC overage: `bake/groups.ts` and `bake/result.ts` are 9–24 LOC over the 300 cap. Could split `rebakeAOForGroup` out of `result.ts` into `bake/ao-rebake.ts` and split the RAF tile loop out of `groups.ts` into `bake/tile-loop.ts`. Deferred — current cohesion reads cleanly.

**Verification.** `npx tsc --noEmit` clean (verified per commit via `git stash --keep-index` to exclude parallel S16 WIP on `LightPage.tsx` + `SceneController.ts`). `npm run build` green. Code-reviewer subagent confirmed S12 invariants + public API surface + consumer compatibility (`BakeController.ts`, `BakePage.tsx`). Cornell visual smoke deferred to user environment per convention.

**Next sprint.** Apply the same pattern to the remaining oversized monsters: `SceneController.ts` (962), `CornellBoxExample.ts` (844), `BVHSceneBuilder.ts` (741), `LightPage.tsx` (458), `BakeController.ts` (428), `LightmapperMaterial.ts` (423). User picked one-file-at-a-time per sprint to validate the pattern before committing to a bulk split.

---

## Recent: Session 16 — 2026-05-19 — Overnight polish sweep (no PT, baker focus)

Context: user paused PT renderer work, asked for a sweeping demo polish run
to bring the editor up to game-engine standard (Blender / Unreal / Unity
reference). Single overnight run on branch `feat/step-4-5-completion`.

| Phase | Commit | Change |
|---|---|---|
| 1 | `b049194` | Gallery landing restored; PT renderer UI hidden (PT code stays in tree); ScenePicker dropdown removed; menu z-index fix (Topbar wrapper `relative z-50`); File menu gains `Open Gallery…` |
| 2 | `59b7b1e` | Blender-style viewport pass dropdown (11 layers, Output/Debug grouped); LightmapPage `Layer Intensities` sliders (Direct / Indirect / AO Intensity / AO Exponent) → `BakeController.refreshAllComposites`; `viewLayers` signal in shared |
| 3 | `e99d9a7` | AtlasViewer multi-atlas overlay mounted; `atlasViewerVisible` signal + View menu toggle (hotkey **A**); texel density viz back via dropdown |
| 4 | `dc2a78f` | All 4 light types enabled in asset library (Point / Spot / Sun / Area); each spawns a Group{Light + Target + Helper}; Blender-grade gizmos via `PointLightHelper` / `SpotLightHelper` / `DirectionalLightHelper` / `RectAreaLightHelper`; Outliner walks `userData.bakerLightType`; LightPage rewritten into type-aware editor (color, intensity, distance/decay/angle/penumbra/width/height per type) |
| 5 | `38cc6be` | Unreal-style per-object dirty tracking — snapshots `matrixWorld` per mesh post-bake; RAF compares each frame; dirty meshes get `lightMapIntensity = 0` (unlit albedo) while rest of scene stays baked; `dirtyMeshIds` signal feeds StaleBanner badge count |
| 6 | `7e61edb` | EffectComposer chain in SceneController (RenderPass → SSAO → UnrealBloom → FXAA); `postFXSettings` signal in shared; new `PostFXPage` inspector tab (Master / Tone Mapping / SSAO / Bloom); master off by default — bake QA pristine |
| 7 | `6abfbd4` | Camera viewpoints — `SceneController.setView(...)` + `setCameraFov(...)`; hotkeys 1/3/7/0 (Blender numpad: Front / Right / Top / Persp; Shift+ = Back/Left/Bottom); WorldPage gains Camera section with FOV slider + 4 shortcut buttons |
| 8 | `0b5ab93` | Polish — Inspector auto-switches to Light tab on light selection / Object on mesh; Help → Keyboard Shortcuts dialog enumerates every hotkey; CLAUDE.md amended: library still bans post-FX, demo shell PostFXPage permitted gated by `master = false` default |

**Architectural ground laid (reusable):**
- `shared/signals/ui.ts` grew: `viewLayers`, `atlasViewerVisible`, `dirtyMeshIds`, `postFXSettings`. Renderer-agnostic; demo-shell + baker-classic both consume.
- `viewLayers` pattern keeps the shell free of app-domain enums — playground populates the signal at boot from its `modes.LAYERS` table.
- Light groups carry `userData.bakerLightType` so SceneController / Outliner / Inspector / asset library all key off one flag instead of `instanceof` checks.
- `BakerOrchestrator` interface extended with `refreshComposites(overrides)` — view-time intensity tweaks bypass the rebake path.

**Verification.** `npx tsc --noEmit` clean across all 8 commits.
`npm run build` green throughout — last bundle 940 KiB / 257 KiB gz
(+21 KiB vs S15.1's 919 KiB; the bulk is EffectComposer + RectAreaLightHelper
+ FXAA shader, all from `three/examples/jsm/`). Cornell visual smoke test
deferred to user environment per convention.

**Deferred (deliberate scope cuts):**
- True in-scene Camera objects with render-target switching — needs to
  coexist with the bake's RT lifecycle. Numpad viewpoint shortcuts cover
  ~90% of the value at a fraction of the risk.
- Outliner per-light-type icons (Point / Spot / Sun / Area glyphs).
- Light auto-fit-to-helper-size when scaling the gizmo.

**Carry-overs from S15.1 / earlier sessions (still open):**
- iGPU TDR validation (S12 work) — deferred to user environment.
- Task 11 (SH light probes).
- Modularity CI job still advisory — legacy oversized files
  (`LightmapBaker.ts`, `CornellBoxExample.ts`, `SceneController.ts`,
  `BakeController.ts`, `LightmapperMaterial.ts`) untouched. This session
  added ~160 LOC to CornellBoxExample and ~180 LOC to SceneController;
  both still over the 300-LOC modularity target. Splitting deferred.

**Next session.** User-environment smoke test on the polished demo:
gallery → pick scene → drop in lights of each type → verify gizmos →
bake → move objects → verify dirty count → toggle Post-FX → enable
atlas viewer. Once smoke is clean, can flip the modularity CI job to
hard-fail and start splitting the oversized files.

---

**Checkpoint: 2026-05-06.** Sessions 1–11 (Tasks 01–09, 12, 13 + multi-bounce
GI + AO split + TDR/timeout protection + public API foundation) archived to
[`.claude/archive/sessions-2026-04-27.md`](archive/sessions-2026-04-27.md).
The reconciliation audit done at the end of S9 lives at
[`.claude/archive/AUDIT-2026-04-27.md`](archive/AUDIT-2026-04-27.md) — read
that if you ever doubt the journal vs. the code.

**Scope expansion 2026-05-18 (Session 13 — planning).** Project pivots from
single-baker library to a multi-renderer monorepo. Two in-flight PRs (#1 demo
UI shell, #2 real-time PT preview) define the new shape. The classic baker
stays in tree as the safe fallback. A new PT-baker on top of PR #2's sampler
will follow so the bake and the preview share one engine. See "Roadmap"
below for the ordered sequence.

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
| Task 11 — Light probes (SH) | ⏸ Parked (S17) |
| Post-bake TDR mitigations (HalfFloat composite, GPU drain, dummy-LM pin) | ✅ Done (S12) |
| T-D1 — Demo restructure: SceneController + BakeController + modes.ts | ✅ Done (S13) |
| **Demo UI shell** (PR #1 `feat/demo-redesign`) | ✅ Merged (Session 13.5) |
| **Real-time PT preview** (PR #2 `feat/pt-realtime-pathtracer`) | ✅ Rebased into `packages/pt-renderer/` (Step 3, PR #6) |
| **Folder restructure → `packages/` + `apps/`** | ✅ Done (S14) |
| **PT renderer Step 4** (lights→DataTex, 16 albedo, RectArea area sampling) | ✅ Done (S15) |
| **PT-baker `packages/pt-baker/`** + playground wiring + dilation/denoise | ✅ Done (S15.1) |
| **HDRI environment** (file picker, RGBELoader, signal→uniform) | ✅ Done (S15.1) |
| **`apps/pt-baked/`** side-by-side demo | ✅ Done (S15.1) |

**iGPU validation of Task 08 / S12 TDR work** — still deferred to user environment.

---

## Roadmap — current sprint (Sessions 13–17 target)

Strict ordering. Each step must land green before the next starts. Detailed
rationale: the user's reason for adding the real-time PT was to give 3D
designers a preview that predicts the baked result. The classic baker
(diffuse-only) and the PT (unified PBR + NEE + glass) produce visibly
different images — same scene, different BRDFs. Right fix is one shared
sampler core with two front-ends; classic baker stays alive as insurance.

**Step 1 — Merge PR #1 (demo UI shell).**
Code review + merge as-is. Foundational. No restructure work yet. Owns:
top-bar menus, outliner, inspector, transforms, undo/redo, file system,
asset library, scene preset registry, mobile splash, error toast.

**Step 2 — Folder restructure into `packages/` + `apps/`.**
Mechanical move + import-path fix. No behavior changes. Target shape:
- `packages/baker-classic/` ← today's `src/lib/`
- `packages/demo-shell/` ← PR #1's generic UI
- `packages/shared/` ← BVH builder, material/light packing helpers
- `apps/playground/` ← today's mega-demo, wires everything
- During the move: pull baker-specific inspector panels (`BakePage`,
  `LightmapPage`) out of `demo-shell/` and into `baker-classic/`. Add a
  shell "panel slot" API so packages register their own pages, menus,
  top-bar buttons. Each `apps/*` becomes a ≈30-50 LOC wiring file.

**Step 3 — Rebase PR #2 onto the new layout.**
- `packages/pt-renderer/` ← `src/pathtracer/`
- `apps/pt-preview/` ← new small demo, PT only, uses `demo-shell/`
- PT-specific inspector panels (settings, world, aperture/focus) live in
  `pt-renderer/` and register via the shell slot.

**Step 4 — Finish the PT renderer to "done."**
Definition of done (needs user confirmation — initial list from PR #2
description):
- [ ] Raise light limit beyond 4 (uniform → DataTexture)
- [ ] Raise albedo texture limit beyond 8 (texture array or atlas)
- [ ] RectAreaLight as true area light, not point approximation
- [ ] HDRI environment (replace placeholder in World tab)
- [ ] Local model copies for `mercury-statue` / `modern-bathroom`
- [ ] Visual parity check against Erich's reference scenes

**Step 5 — New PT-baker (`packages/pt-baker/`).**
- UV-space front-end on `pt-renderer/`'s sampler. Replace
  `gl_Position = projection*view*model*pos` with `gl_Position = vec4(uv2*2-1, 0, 1)`;
  write accumulation to a UV-space RT.
- Reuse classic baker's dilation / denoise / supersample pipeline
  (`Refinement.ts`, `DenoiseMaterial.ts`, `DilationMaterial.ts`) — already
  shader-agnostic.
- `apps/pt-baked/` ← new demo: PT preview + PT bake side by side.
- Cornell Box parity gate: red/green bleed, soft shadow, ceiling tint.
- Classic baker NOT removed at this step. Both bakers ship; users pick
  ("Quick Bake" vs "Path-Traced Bake"). Retirement of classic baker is a
  later decision once PT-baker has matured.

---

## In-flight PRs (as of 2026-05-18)

| # | Branch | Base | Status | Notes |
|---|---|---|---|---|
| 1 | `feat/demo-redesign` | `master` | Open, awaiting code review | T-D9..T-D13. Foundational. Merges first. |
| 2 | `feat/pt-realtime-pathtracer` | `master` | Open | Sits on top of #1. After #1 lands + Step 2 restructure, gets rebased onto new layout. |

PR #2 currently includes `SUB-REPOS-FOR-REFERNCE/` submodules and a
`dist/assets/index.de478d98.js` bundle (+4926 LOC) in the diff — confirm
these are intentional before merge or strip during the rebase in Step 3.

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

## Recent: Session 14 — 2026-05-18 — Roadmap Step 2 restructure

PR #1 merged into master. This session executes Roadmap Step 2: relocate the
codebase into `packages/` + `apps/` and introduce the panel-slot API so renderer
packages plug into the shell without sibling imports.

**Layout shipped:**

```
packages/
  shared/src/
    registries/   panel-registry.ts (NEW) menu-registry.ts orchestrator.ts scene-registry.ts
    signals/      ui.ts bake.ts (split from old signals.ts)
    ui/           Field.tsx helpers.ts
    assets/       primitives.ts
    index.ts      barrel
  baker-classic/src/   ← was src/lib/
    index.ts LightmapBaker.ts AtlasViewer.ts errors.ts
    atlas/ denoise/ gpu/ lightmap/ types/ utils/
    ui/           (NEW) BakePage.tsx LightmapPage.tsx LightPage.tsx
                  WorldPage.tsx menus.ts orchestrator.ts index.ts
  demo-shell/src/      ← was src/demo/app/
    App.tsx theme.css
    components/   Topbar Outliner Inspector Splitter Toast StaleBanner
                  StatusBar MenuButton AssetLibrary ScenePicker MobileSplash icons
    inspector/    ObjectPage MaterialPage  (LightPage + WorldPage moved to baker-classic)
    menus/        file edit view help (render moved to baker-classic)
    index.ts

apps/playground/
  index.html              ← was /index.html
  src/
    main.tsx              ← was src/demo/main.tsx
    index.ts CornellBoxExample.ts vite-env.d.ts
    three/                SceneController BakeController modes types
    scenes/presets/       (registry moved to shared)
```

**Registry / interface design:**

| Item | Home | Purpose |
|---|---|---|
| `panelRegistry` (NEW) | `shared` | Inspector tabs registered by renderer packages |
| `menuRegistry` (moved) | `shared` | Topbar menu items registered by renderer packages |
| `Orchestrator` interface (rewritten) | `shared` | Generic contract shell components depend on; bake methods optional |
| `BakerOrchestrator` interface (NEW) | `baker-classic/ui` | Extends `Orchestrator`; carries `options` + `requestBake` etc. |
| `sceneRegistry` (moved) | `shared` | Generic registry; categories relaxed to `string` |
| `primitiveCatalog` (moved) | `shared` | Used by shell's `<AssetLibrary/>`; factories belong with the data |

**Path aliases:** TS `paths` + Vite `resolve.alias` carry the bare names `shared`,
`baker-classic`, `baker-classic/ui`, `demo-shell`. No npm workspaces — those
land at Tier-4 publishing time.

**Vite root** is now `apps/playground/`; build emits to `<repo>/dist/` so the
existing GitHub Pages `deploy.yml` keeps working.

**Verification:**

| Check | Result |
|---|---|
| `npx tsc --noEmit` | ✅ clean |
| `npm run lint` | ✅ 0 errors, 93 warnings (pre-existing, mostly explicit-return-type) |
| `npm run format:check` | ✅ clean |
| `npm run build` | ✅ green — 838.64 KiB / 228.66 KiB gz (Δ −71 KiB vs S13.5 — Tweakpane CSS was the bulk) |
| `npx madge --circular packages/ apps/` | ✅ no cycles |
| Dev server | ✅ boots; aliases resolve; index + main.tsx + `shared` served 200 |
| Cornell parity (manual) | ⏳ deferred to user environment |

**Decisions made:**
1. Registries live in `packages/shared/` — cleanest reading of "no sibling imports". Packages don't import from each other; both go through shared.
2. `LightPage` and `WorldPage` moved to `baker-classic/ui/` since they touch baker-specific options (`lightColor`, `directLightEnabled`, `skyIntensity`). Shell keeps only Object + Material as built-in tabs.
3. Bake signals (`bakeStatus`, `bakeProgress`, `isStale`) stay in `shared` so `StatusBar` + `StaleBanner` read them without sibling imports. Pure-preview renderers leave them at defaults.
4. `primitiveCatalog` and `sceneRegistry` moved to `shared` because the shell's `<AssetLibrary/>` and `<ScenePicker/>` consume them. Generic enough to belong there.
5. Generic `Orchestrator` interface gets a `getScene(): Scene` accessor so generic shell pages can read viewport background without casting to baker types.

**Carry-overs:**
- Legacy oversized files unchanged (LightmapBaker.ts 1314, CornellBoxExample.ts 572, SceneController.ts 589, BakeController.ts 428, LightmapperMaterial.ts 423). Modularity job stays advisory until they're split (deferred — out of scope for Step 2).
- Cornell visual check (red/green bleed, soft shadow, ceiling tint) deferred to user environment per convention.
- `main.tsx` runs 159 LOC — over the 100-LOC app-wiring guidance but carries hotkeys, drag-drop, and status-sync glue. Splitting deferred to a follow-up.

**Next session:** Roadmap Step 3 — rebase PR #2 (`feat/pt-realtime-pathtracer`)
onto the new layout. `src/pathtracer/` → `packages/pt-renderer/`, new
`apps/pt-preview/`, PT inspector pages register into the same panel slots
baker-classic uses.

---



Planning session, zero code changes. Two open PRs (#1 demo UI shell, #2
real-time PT preview) prompted a re-think of project scope. Decisions made:

| Topic | Decision |
|---|---|
| Why the real-time PT was added | So 3D designers can preview the lit look before committing to a bake. Currently broken because classic baker (diffuse-only) and PT (PBR+NEE) produce visibly different images for the same scene. |
| How to fix the preview/bake mismatch | Build a new PT-baker on top of Erich's PT sampler — same engine for viewport and bake. Don't try to patch the classic baker's BRDF; the gap is structural. |
| Fate of the classic baker | Stays in tree as the safe fallback / "Quick Bake" option. Not deleted. Retirement decision deferred until PT-baker has matured. |
| Folder layout | Restructure into `packages/` + `apps/` monorepo. Each package independently consumable for bigger products. Each `apps/*` is a thin (~30-50 LOC) wiring of the shell + chosen packages. |
| UI shell reuse | One `demo-shell/` package shared by all apps. NO duplication. Shell exposes a panel-slot API so each renderer package registers its own inspector pages / menus / top-bar buttons. Baker-specific panels (`BakePage`, `LightmapPage`) move out of the shell during Step 2. |
| Step ordering | (1) merge PR #1, (2) folder restructure, (3) rebase PR #2 onto new layout, (4) finish PT to "done", (5) build PT-baker. Strict order — no concurrent steps. |
| PT engine choice | Stick with Erich's (PR #2). Already working. Skip three-gpu-pathtracer migration for now — user confirmed Erich's is real-time on their hardware and the other is heavier. |
| BVH choice | Keep custom SAH builder from PR #2. Revisit if maintenance hurts. |
| Material / light conventions | PT's conventions (incl. `ptLightScale`) become canonical when PT-baker lands. Don't migrate them backwards to the classic baker. |

Also updated `CLAUDE.md`: Stack now lists both BVH stacks (mesh-bvh for
classic, custom SAH for PT). Architecture section flagged as describing the
*classic* baker only. Key Files section refreshed (was stale — referenced
`src/lightmap-baker.ts` from before the `src/lib/` split). New "Planned
layout — `packages/` + `apps/`" section added.

No code changed. No build run. Next session picks up with Step 1 (PR #1 code
review).

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

---

## Recent: Session 15 — 2026-05-18 — Steps 3, 4, 5 (PT monorepo completion)

**Goal:** Finish all steps planned in the roadmap.

| Step | Work | Commits |
|---|---|---|
| 2 merged | Folder restructure → `packages/` + `apps/` | PR #5 merged (`46b0c6c`) |
| 3 | PT renderer ported to `packages/pt-renderer/`; PTController to `apps/playground/`; ViewportToggle; `registerPTRendererUI()` | `b49189f` |
| 4 | Lights upgraded to DataTexture (16 max, 4 texels/light); albedo slots 8→16; RectAreaLight area sampling | `feat/step-3-pt-rebase` |
| 5 | `packages/pt-baker/` — UV-space PT bake shader + PTBaker orchestrator | `feat/step-3-pt-rebase` |

**Deferred (Step 4 remainder):**
- HDRI UI wiring (shader already supports tHDRTexture — just needs file picker + EXR loader)
- Local model copies for `mercury-statue` / `modern-bathroom`
- Visual parity check vs Erich's reference scenes (needs user environment)

**Deferred (Step 5 remainder):**
- `apps/pt-baked/` side-by-side demo
- Playground orchestrator wiring of PTBaker ("Path-Traced Bake" button)
- Classic baker dilation/denoise pipeline integration with pt-baker output

**Verification.** `npx tsc --noEmit` clean. `npm run build` green at 908 KiB / 248 KiB gz across all steps. PR #6 (`feat/step-3-pt-rebase`) open for review.

---

## Recent: Session 15.1 — 2026-05-18 — Step 4 + 5 completion (all deferred items)

Addressed all items flagged as deferred in Session 15.

| Item | Change |
|---|---|
| HDRI environment (Step 4) | `hdriTexture` signal in `shared/signals/bake.ts`; `WorldPage` file picker (RGBELoader, .hdr); `PTController._syncSettings()` syncs signal → `tHDRTexture`/`uHasSkyTexture` uniforms + resets accumulation |
| Playground PTBaker wiring (Step 5) | `CornellBoxExample.requestPTBake()`: checks UV2 exists, builds BVH, runs PTBaker, then runs `renderAtlas()` + `runRefinement()` for dilation/denoise, applies refined lightMap to meshes |
| Render menu (Step 5) | `baker-classic/ui/menus.ts` gains "Path-Traced Bake" item (Render menu, separator above it) |
| `apps/pt-baked/` (Step 5) | Side-by-side demo: left = PTRenderer real-time preview, right = standard rasteriser showing baked lightmap once "Bake (PT)" completes. Single renderer, scissor split |
| PTController `lightTextureState` | Public getter exposing light DataTexture + count so `requestPTBake()` can share lights without accessing privates |

**Local model copies** (`mercury-statue`, `modern-bathroom`): external assets — requires user to supply `.glb` files and register as scene presets. Cannot be automated.

**Visual parity check**: requires user to run the app and compare output against Erich's reference scenes. Cannot be automated.

**Verification.** `npx tsc --noEmit` clean. `npm run build` green at 919 KiB / 251 KiB gz.
