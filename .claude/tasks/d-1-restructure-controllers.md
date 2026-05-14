# T-D1 — Restructure: extract SceneController + BakeController

## Status
Completed in Session 13 (2026-05-14).

**Phase A of demo redesign.** Reference: `docs/plans/2026-05-14-demo-redesign-design.md`.

**Goal:** Lift orchestration logic out of `src/demo/CornellBoxExample.ts` (1858 LOC) into two vanilla-TS classes under `src/demo/three/`. **Zero behavior change.** Existing tweakpane UI still drives everything, just via the new controllers. Build green. Cornell visual identical.

This task is the safety-net baseline: we ship the new architecture *before* any Preact/Tailwind work touches the project. If T-D2 breaks, we revert to this state and the demo still works.

## Non-goals

- No Preact, no Tailwind, no signals (those are T-D2)
- No visible UI change
- No library edits (`src/lib/` is read-only for this task)
- No new presets

## Approach

### Step 0 — Map the monolith (architecture-explorer)
Subagent reads `src/demo/CornellBoxExample.ts` end-to-end and produces a section map:
- Scene setup (Scene, camera, OrbitControls, TransformControls, raycaster, GLB loader)
- Mesh management (add/remove/duplicate, materials, per-mesh density override)
- Bake call site (`LightmapBaker.bake()` wiring, `BakeHooks.onFrame`, AO re-bake, refinement, composite mounting, dummy-LM pin)
- Render mode swappers (Layer table, applyRenderMode)
- Tweakpane UI (Pane construction, bindings)
- Diagnostics + context-loss listeners

Output: `.claude/tasks/d-1-map.md` with file:line ranges per section.

### Step 1 — Create skeleton classes
- `src/demo/three/SceneController.ts` — empty class with public surface from design §5.3
- `src/demo/three/BakeController.ts` — empty class with public surface from design §5.3
- `src/demo/three/modes.ts` — placeholder for render-mode logic

### Step 2 — Move scene state into `SceneController`
- Cut `Scene`, camera, renderer, OrbitControls, TransformControls, raycaster, GLB loader, mesh registry from CornellBoxExample → SceneController fields
- Public methods: `add()`, `remove()`, `update()`, `setSelected()`, `lookup(id)`, `serialize()` (stub for now), `loadPreset(id)` (stub)
- CornellBoxExample owns one `SceneController` instance and forwards every old call to it
- `npx tsc --noEmit` clean, `npm run build` green

### Step 3 — Move bake state into `BakeController`
- Cut `LightmapBaker` call site, `bakeResult` field, AO re-bake, refinement runner, composite mount/swap into BakeController
- Public: `runBake()`, `runAOOnly()`, `applyToScene()`
- Internal: holds reference to `SceneController` for scene access
- Same verification

### Step 4 — Move render modes into `modes.ts`
- Extract `LAYERS` table + `applyRenderMode` into `modes.ts`
- Export `applyRenderMode(sceneController, layerId)` as pure function

### Step 5 — Wire CornellBoxExample as thin orchestrator
- Tweakpane UI still owned by CornellBoxExample
- Tweakpane bindings now call `sceneController.update(...)`, `bakeController.runBake()`, etc.
- File should shrink from 1858 to ~700 LOC (UI + scene-build factory + tweakpane wiring only)

### Step 6 — Verify
- `npx tsc --noEmit` clean
- `npm run build` green; size delta within ±5 KB gzipped
- Run dev server (`npm run start`); manual Cornell check:
  - Bake at default (Production 1024², 64 samples)
  - Red color bleed left side of sphere ✓
  - Green color bleed right side ✓
  - Soft shadow under sphere ✓
  - Ceiling corners faint tint ✓
- 5× bake-cycle stress (catch S12 TDR regression if controller boundaries broke anything)
- code-reviewer subagent against CLAUDE.md rules

## File boundaries

| Old (CornellBoxExample.ts §) | New home |
|---|---|
| Scene setup, camera, renderer, OrbitControls | `SceneController` |
| TransformControls, gizmo wiring | `SceneController` |
| GLB loader, scene rebuild | `SceneController` (`loadGLB`, `loadPreset` stub) |
| Mesh registry, `addMesh`/`removeMesh`/`duplicateMesh` | `SceneController` |
| Per-mesh density / exclude maps | `SceneController` (`update(id, patch)`) |
| Raycaster (viewport click → select) | `SceneController.pick(x, y)` |
| LightmapBaker call + BakeHooks wiring | `BakeController.runBake` |
| AO-only path (`result.rebakeAO()`) | `BakeController.runAOOnly` |
| Refinement runner | `BakeController` (private) |
| Composite mount + dummy-LM swap (S12 pattern) | `BakeController.applyToScene` |
| `LAYERS` + `applyRenderMode` | `modes.ts` |
| Diagnostics banner + measure calls | `BakeController` (keeps existing hookpoints) |
| `webglcontextlost`/`webglcontextrestored` listeners | `SceneController` |
| Tweakpane Pane + bindings | stays in `CornellBoxExample.ts` for now |
| Atlas Viewer widget | stays in `CornellBoxExample.ts` for now (demo-grade) |

## Checklist

- [ ] Step 0 — architecture-explorer produces `.claude/tasks/d-1-map.md`
- [ ] Step 1 — Skeleton classes + modes.ts
- [ ] Step 2 — SceneController owns scene/camera/raycast/gizmo/mesh CRUD
- [ ] Step 3 — BakeController owns LightmapBaker lifecycle
- [ ] Step 4 — modes.ts owns LAYERS + applyRenderMode
- [ ] Step 5 — CornellBoxExample wired as thin orchestrator
- [ ] Step 6 — Verify (tsc, build, Cornell, 5× cycle, code-reviewer)

## Failure modes to watch

- **Lost dummy-LM pin (S12)** — if composite mount path is rewritten, the
  shader-variant pin may break and post-bake context-loss returns. Pattern:
  every mesh gets a 1×1 white `DataTexture` as `lightMap` at scene init;
  `applyToScene` swaps the pointer. Tested in 20-cycle stress.
- **TransformControls + OrbitControls fight** — gizmo drag start must disable
  Orbit; gizmo drag end must re-enable. Existing demo handles this; preserve verbatim.
- **Per-group composite cache** — current demo caches per-group composite RTs
  keyed on render mode. If lifted into BakeController without preserving
  cache, render-mode swaps will leak RTs. Audit dispose path.
- **`collectLightsFromScene` userData.lightmapIgnore filter** — Cornell's
  display-only PointLight relies on this. Don't drop the flag during cleanup.
