# Task 13 — Layer System + MRT Pass Split

## Status
Session 7 (2026-04-25): Phase A.2 (MRT shader + WebGLMultipleRenderTargets) and Phase A.3 (view-time CompositeMaterial + Composite runner) complete. Phase B (status panel progress bar), Phase C (UI polish), and Phase D1/D2 (texel density heatmap) still pending.

## Objective
Replace the single-output bake pipeline with industry-standard render passes (AOVs).
Refactor the UI around a **Layer registry** (rename `renderMode` → `layer`) so adding
new visualizations is one entry, not an `if`/`else` branch in `applyRenderMode`.

## Why
- "renderMode" is a debug-menu term; pro 3D tools call this **Layer** / **View Pass** / **AOV**.
- "beauty" is unintuitive — the standard label is **Combined**.
- The current shader collapses Direct + Indirect + AO into a single output channel; users
  can't inspect or denoise them independently. MRT splits them at zero extra render cost.
- Subsumes **Task 09** (separate AO map) — falls out for free.
- Scales: every future layer (UV Checker, Density Heatmap, Reflections, Emissive)
  becomes one registry entry.

## Steps

### Phase A.1 — Layer Registry + UI Rename (no shader changes)
1. Define `Layer` type: `{ id, label, getTexture(ctx), showAlbedo?, group? }`.
2. Define `LayerContext` carrying all available textures (raw lightmap, position, normal, …).
3. Build a `LAYERS: Layer[]` registry in `CornellBoxExample`.
4. Rename `options.renderMode` → `options.layer`. Old labels:
   `standard → Albedo · positions → World Position · normals → World Normal · lightmap → Lightmap (Raw) · beauty → Combined`.
5. Replace the `if/else` chain in `applyRenderMode()` with a registry lookup.
6. Verify build + visual identity to Session 6 baseline.

### Phase A.2 — MRT Shader + RTs
1. Convert `LightmapperMaterial` to GLSL 3.00 ES (`glslVersion: GLSL3`, `in`/`out`,
   `layout(location=N) out vec4`).
2. Three outputs:
   - `location 0` — Direct (replaces existing `totalDirectLight` output)
   - `location 1` — Indirect / GI (replaces `totalIndirectLight`)
   - `location 2` — AO (replaces the current AO multiply)
3. `Lightmapper.ts`: swap `WebGLRenderTarget` → `WebGLMultipleRenderTargets(w, h, 3, opts)`.
   Expose `renderTexture.texture[0..2]` to the example.
4. Each attachment uses the same progressive blend (`opacity = 1/totalSamples`) — already
   correct since attachments share the global blend state.
5. Update layer registry: register `Direct`, `Indirect (GI)`, `Ambient Occlusion`.

### Phase A.3 — Composite Combined + Post-process Layers
1. New `CompositeMaterial`: reads Direct/Indirect/AO + uniforms `giIntensity`, `aoEnabled`,
   per-channel mix, writes to a single RGBA RT. View-time only — no re-bake on slider drag.
2. Run composite once after bake completes, again on any post-bake slider change
   (`giIntensity`, ambient toggles).
3. Run post-process pipeline on the composite: persist dilated + denoised RTs eagerly.
4. Register layers: `Combined`, `Combined (Dilated)`, `Combined (Denoised)`.
5. Layer dropdown becomes:
   `Combined · Combined (Dilated) · Combined (Denoised) · Direct · Indirect (GI) ·
    Ambient Occlusion · Lightmap (Raw) · Albedo · World Position · World Normal`
6. Drop the old `lightmap` / `beauty` strings entirely.

## Memory accounting (Final preset 2048², RGBA Float)
| Resource | Bytes |
|---|---|
| MRT (Direct + Indirect + AO) | 3 × 16 MB = 48 MB |
| Composite (Combined) | 16 MB |
| Dilated | 16 MB |
| Denoised | 16 MB |
| **Total bake-side** | **96 MB** |

At Production (1024²) this drops 4× → ~24 MB. Acceptable.
Auto-fallback to lazy-allocate post layers when `lightMapSize >= 2048` is a future opt-in;
not in this task.

## Out of scope
- **Reflections layer.** Current shader is pure diffuse Lambertian; specular sampling is
  a Task 07 concern. Layer registry will be *ready* for it (one new entry), but the actual
  reflection bake is not part of this task.
- **Per-pass denoising.** Phase A.3 denoises Combined only. Per-pass denoise is a Phase A.4.
- **Texel density** (heatmap + per-mesh weights). Separate sub-task (Task 14).

## Success Criteria
- Layer dropdown shows all 10 entries; switching is instant (no re-bake).
- `Direct`, `Indirect (GI)`, `Ambient Occlusion` show physically distinct contributions.
- `Combined = Direct + Indirect × giIntensity` multiplied by AO — matches Session 6 beauty
  output bit-for-bit when sliders are at defaults.
- Dragging `giIntensity` post-bake updates Combined / Combined (Dilated) / Combined (Denoised)
  without re-baking.
- Vite build green at each checkpoint.

## Dependencies
- Task 05 (Session 6) — provides PostProcess pipeline and presets we now layer on top of.
