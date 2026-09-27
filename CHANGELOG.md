# Changelog

All notable public changes to `lightmap-baker` are documented here.

## Unreleased

### Added

- Runtime capability reporting now exposes WebGPU availability separately from
  the backend currently selected for baking.

### Changed

- Renderer adapters now identify their backend and own WebGL bake validation,
  GPU identity/limits, loss monitoring and explicit queue completion. The
  shipping bake path remains WebGL-only and preserves existing output behavior.

## lightmap-baker v1.1.0 — 2026-09-27

Correctness and lifecycle release for the browser/WebGL baker. This release is
backward compatible with v1.0.0 and keeps the same Three.js r185 peer range.

### Added

- Public `preflightBakeScene()` diagnostics for detecting unsupported or invalid
  scene data before UV mutation or GPU allocation.
- Abort-aware atlas loading/packing and explicit atlas padding control.
- Hardware-only release validation that rejects software WebGL fallbacks before
  running numerical correctness and the full release suite.
- GitHub Packages publication support for the scoped
  `@ibrahim-3d/lightmap-baker` mirror; npmjs.org `lightmap-baker` remains the
  canonical package.

### Fixed

- Correct transformed DirectionalLight and SpotLight targets, point/spot
  distance-decay attenuation, and RectAreaLight orientation/area sampling.
- Remove the previous fixed light-count ceiling so scenes with more than 16
  supported lights are represented correctly.
- Define zero-to-four GI surface bounces consistently and account for sky misses
  at secondary path depths.
- Respect inherited visibility during bake preparation, isolate bake geometry,
  expand static instances safely, and restore original geometry/instance
  presentation on disposal.
- Pack against the requested atlas resolution, validate final-output padding,
  reject impossible/overflowing layouts, and prevent filtering/denoising across
  UV-chart boundaries.
- Own and terminate atlas workers on success, abort, timeout, script/WASM/RPC
  failure, and recover cleanly on the next operation.
- Handle animation callback failures and cancellation without leaving temporary
  GPU resources or partially replacing existing AO results.
- Use packaged Three.js Draco decoder assets for the ESL presets instead of a
  runtime Google CDN dependency.
- Stabilize secondary-sky transport on tested Chromium/ANGLE software paths by
  packing GPU bake settings into explicit records without weakening the
  numerical assertions.

### Validation

- Focused hardware correctness gate: **14/14 passed**.
- Full hardware release suite on NVIDIA GeForce RTX 3090 / ANGLE D3D11:
  **47 passed, 1 intentional opt-in benchmark skipped, 0 failures**.
- Current GitHub CI passes typecheck, lint, formatting, package/demo builds,
  package import smoke, browser correctness/runtime smoke, dependency guards and
  deployment.

### Compatibility

- Three.js peer range remains `>=0.185.1 <0.186.0`.
- Requires `WebGLRenderer`, WebGL 2 and `EXT_color_buffer_float` for baking.
- Node/headless and WebGPU baking remain future work.

## lightmap-baker v1.0.0 — 2026-08-13

First public npm release.

### Added

- Browser-first `LightmapBaker` high-level API.
- Path-traced direct and indirect lightmap baking with 1–4 bounce depth.
- Automatic lightmap UV generation through packaged xatlas JavaScript/WASM assets.
- GPU BVH ray traversal through `three-mesh-bvh`.
- Textured diffuse GI using `material.color × material.map`.
- UV0 and UV1 base-color texture support.
- Multi-material geometry-group lookup with per-triangle material identity preserved after BVH reordering.
- Safe persistent lightmap mounting for shared material instances.
- Multiple atlas/resolution groups, supersampling and texel-density controls.
- Standalone AO accumulation, view-time AO adjustments and AO-only rebaking.
- Chart dilation, bilateral denoising and composite/refinement stages.
- PNG, EXR and raw lightmap export utilities.
- Native Three.js `LightProbeGrid` capture for dynamic objects using GPU L2 spherical harmonics.
- Package-owned `captureLightmappedProbeGrid()` capture policy with exception-safe scene/material/renderer restoration.
- Native probe descriptor persistence/recapture API.
- Legacy RGB probe volume generation, interpolation, debug and material binding as an explicit fallback.
- ESM, CommonJS and TypeScript package outputs.
- Runtime capability and renderer-adapter APIs.
- Browser demo/editor, project save/load, render/debug layers and bake inspection tools.

### Compatibility

- Three.js peer range: `>=0.185.1 <0.186.0`.
- Requires `WebGLRenderer`, WebGL 2 and `EXT_color_buffer_float` for baking.
- Hardware-accelerated Chromium-based browsers are the primary validated production path.

### Known limitations

- Node/headless and WebGPU baking are not available in v1.
- Native probe capture currently uses the upstream Three.js WebGL `LightProbeGrid` path.
- Base-color source textures are resampled into a bounded GI atlas; individual tiles are capped at 512 px.
- Solid emissive color is supported, but `emissiveMap` transport is not yet implemented.
- Normal, roughness, metalness, alpha, vertex-color and custom-shader inputs are not part of the diffuse GI transport model.
- Browser lightmap export triggers downloads rather than direct arbitrary filesystem writes.

