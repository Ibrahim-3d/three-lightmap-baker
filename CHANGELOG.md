# Changelog

All notable public changes to `lightmap-baker` are documented here.

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
