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
| Demo `→ LightmapBaker.bake()` migration (P3b + P4) | 🟨 Deferred |
| Task 10 — Lightmap downscaling | ⬜ |
| Task 11 — Light probes (SH) | ⬜ |
| Post-bake TDR mitigations (HalfFloat composite, GPU drain, dummy-LM pin) | ✅ Done (S12) |

**iGPU validation of Task 08 / S12 TDR work** — still deferred to user environment.

---

## Migration Risk Register — features at risk if demo bake path is replaced naively

The demo's local bake orchestrator predates `LightmapBaker.bake()`. Phase 3b
(rewrite the demo to consume the public API) is the open work; these are the
nine features the rewrite must preserve. Authoritative analysis lives in
[`archive/AUDIT-2026-04-27.md`](archive/AUDIT-2026-04-27.md) §5.

| ID | Feature | Demo location | Public API equivalent | Risk |
|---|---|---|---|---|
| R-01 | `scaleInLightmap` per-mesh density multiplier | `CornellBoxExample.ts` `binPackMeshes` `perMeshScale` | None — `perMesh` only has `{ resolution?, exclude? }` (S11 P1 promoted `density` but call site is still demo-local) | "Density ×" slider becomes no-op |
| R-02 | Density-aware multi-atlas auto-spawn | `binPackMeshes` opens new bins on overflow | `partitionByDensity` exists in public API (S11 P1) — wire-through pending | Multi-atlas based on density is lost |
| R-03 | Secondary directional light UI | Builds a virtual `PackedLight` | `collectLightsFromScene` only walks real `THREE.*Light` | Promote secondary to a real `THREE.DirectionalLight` |
| R-04 | `bakeBVH` reused for AO-only re-bake | Demo `rebakeAO()` | `LightmapBakeResult.rebakeAO` (uses `internals.bvh`) — fine if delegated | Don't re-implement; delegate |
| R-05 | Per-atlas progress widget | Demo shows `[done 256, 187, 187]` per bin | `BakeHooks.onProgress(phase, percent)` is scalar only | Granular multi-atlas progress lost |
| R-06 | Per-mesh `TexelDensityMaterial` cache (target = global × scale) | Demo `refreshTexelDensityMaterials` | Material exported as primitive only | "Texel Density" debug layer loses per-mesh scaling |
| R-07 | Manual / re-runnable refinement (`Run Refinement`, `Revert to Raw`) | Demo `applyRefinement`, `showUnrefined` | `LightmapBakerOptions.denoise=true` runs once inside `bake()`; no re-run path | Re-tuning denoise sliders without re-baking lost |
| R-08 | Multi-atlas `AtlasViewer.setTextures(texs)` | Demo collects textures from all groups for active layer | `AtlasViewer` exported but multi-tex API is demo-glue | Atlas viewer reverts to single-atlas only |
| R-09 | GLB import camera/light auto-fit | Demo `fitCameraAndLightToScene` | None | Import experience regresses |

**Migration plan when undertaken:** wire R-01/R-02 via the now-public density
mode. Promote R-03 to a real Three.js light. Delegate R-04 to
`result.rebakeAO`. Widen `BakeHooks` for per-group progress (R-05). Keep
R-06/R-07/R-08/R-09 in the demo layer — those are presentation, not bake.

---

## Open work

- **Task 10** — lightmap downscaling. Still ⬜. See `tasks/10-lightmap-downscaling.md`.
- **Task 11** — SH light probes. Still ⬜. See `tasks/11-light-probes.md`.
- **Demo migration P3b + P4** — biggest pending refactor. P3b briefing is in
  [Session 11](archive/sessions-2026-04-27.md#session-11--2026-04-27); the
  Migration Risk Register above is the acceptance checklist. Best routed via
  a sub-agent (per CLAUDE.md dispatch rules) — a 400-LOC rewrite of a
  ~1800-line demo is too big for inline.
- **iGPU TDR validation** — bake at 2048² / 512 samples on a known-TDR-prone
  iGPU with `safeMode: true`; confirm completion. Plus exercise the S12
  HalfFloat composite + dummy-LM pin path (see Session 12 below).

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
