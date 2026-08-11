# API Status (2026-08-11)

The API is under active development and is not approved for public npm
publication. Package-local validation does not change that status.

## Current public API

```ts
new LightmapBaker(renderer, options?)
new LightmapBaker({ renderer, ...options })
new LightmapBaker({ rendererAdapter, ...options })
await baker.bake(scene, hooks?)
```

The first bake automatically initializes the packaged xatlas JavaScript/WASM
assets. `loadXAtlasThree(options?)` remains public only for eager preload or
custom asset URLs; normal consumers do not need to call it.

`LightmapBakeResult` currently provides:

- `lightmaps`
- `groups`
- `bvh`
- `stats`
- `apply()`
- `export(pathOrName, { format })`
- `refreshAO(...)`
- `rebakeAO(...)`
- `dispose()`

Probe APIs are exported separately so the core lightmap bake remains minimal:

```ts
generateProbeGrid(source, options?)
await generateProbeVolume(renderer, source, lightmapBakeResult, options?, hooks?)
await bakeProbeIrradianceFromLightmaps(renderer, source, volume, options?, hooks?)
createProbeDebugView(volume, options?)
bindProbeLighting(mesh, volume, options?)
ProbeVolume.fromJSON(json)
volume.sample(worldPosition)
volume.toJSON()

captureLightmappedProbeGrid(renderer, scene, lightmapBakeResult, options?)
captureLightmappedProbeGridFromJSON(renderer, scene, lightmapBakeResult, descriptor, options?)
```

The `captureLightmappedProbeGrid` pair is the preferred native API. It mounts
completed lightmaps, isolates baked static renderables, disables live and
environment lighting plus display transforms, captures, and restores every
scene/renderer/material mutation in `finally`. The lower-level native capture
API remains available when callers intentionally own capture-state policy.

## Intended API direction

- Keep the browser-first API minimal and stable.
- Keep explicit renderer-injected paths for advanced and automation use.
- Expand the optional renderer/context adapter boundary into real offscreen-browser and future headless implementations.
- Preserve the current result lifecycle (`apply/export/dispose`) while expanding non-destructive utilities.
- Keep probe generation outside the core `bake()` call so consumers can choose whether dynamic-object lighting is needed.
- Keep real-time companion passes optional. They should enhance baked lighting, not replace it.

## Claim audit

### Fully implemented in code

- Path-traced lightmap baking with configurable bounces.
- BVH-accelerated ray tracing (`three-mesh-bvh`).
- Auto UV2 generation (`xatlas-three`).
- Direct and indirect GI accumulation.
- Base-color texture transport at secondary hits using `material.color * material.map`.
- Geometry-group material-slot lookup retaining mesh, slot, UV, and post-BVH triangle identity.
- AO pass, dilation, denoise, and progressive accumulation hooks.
- Browser demo in `apps/playground`.
- Supersample/downscale workflow.
- Package build output for ESM, CJS, and TypeScript declarations.
- Optional `LightmapRendererAdapter` boundary with `createRendererAdapter()` and `setRendererAdapter()`.
- Runtime capability matrix through `getLightmapRuntimeCapabilities()`.
- Demo/editor bake cancellation using `BakeHooks.signal`.
- Project JSON save/load for built-in presets, imported GLB/glTF payloads, editor options, baked lightmaps, and asset additions.
- Outliner selection, framing, transform controls, camera objects, undo/redo, and asset-library workflows.
- Direct, indirect, AO, raw lightmap, albedo, unlit albedo, position, normal, texel-density, and atlas inspection views.
- Regular RGB light-probe volume generation from the completed lightmap bake.
- Preferred native Three.js `LightProbeGrid` capture from the completed baked static scene.
- GPU-resident L2 SH atlas interpolation through the stock `WebGLRenderer` standard-material path.
- Native `LightProbeGridHelper`, editor runtime selector, capture-size controls, animated dynamic-object demo, and recapture descriptors in Project JSON / `.3dl` version 1.
- Legacy RGB generation, CPU interpolation, custom material binding, diagnostics, and project loading remain supported as an explicit fallback.
- Trilinear probe sampling and JSON serialization.
- Lightmap-atlas-derived probe irradiance with progress, abort handling, and empty-probe diffusion.
- Textured, material-group-aware source diffuse projection using the same
  rasterized `material.color * material.map` convention as bounce transport.
- Probe bake diagnostics for source and projected ranges, contribution validity,
  empty/fill counts, final percentiles, black-probe classification, bounds, and
  grid dimensions.
- Target/maximum probe spacing with endpoint-fit actual spacing exposed in
  diagnostics. Actual per-axis spacing never exceeds the target, and layouts
  exceeding `maxProbes` fail instead of silently reducing density.
- A separate cyan positions-only layout preview that is never persisted or used
  as generated lighting.
- Fixed, display-only `c / (1 + c)` debug tone mapping. It maps zero exactly to
  zero and never changes stored, interpolated, serialized, or runtime values.
- Public probe generation, evaluation, debug-view, and dynamic-object binding APIs.
- Package-owned baked-scene native capture policy; the playground owns only
  runtime selection, visualization, persistence integration, and cleanup.
- Application-owned probe animation updates; no independent probe RAF loop.
- Dedicated Probes inspector page with generation and runtime controls.
- Moving dynamic white-sphere demonstration excluded from static lightmap baking.
- Light Probes render layer that isolates the debug field and restores previous object visibility afterward.
- Optional probe volume and probe settings in Project JSON / `.3dl` version 1.
- Probe restoration on project load.
- Automatic probe invalidation on scene replacement and before a new classic lightmap bake.
- PBR `MeshStandardMaterial` integration that adds probe irradiance to `reflectedLight.indirectDiffuse` rather than emissive.
- Diffuse BRDF and metallic-energy handling through `material.diffuseColor * RECIPROCAL_PI`.
- Focused probe tests covering the pure volume, shader hook, project restoration, demo creation, probe-only visibility, and irradiance generated by a real bake.
- Self-contained xatlas JavaScript/WASM assets with an offline browser smoke that rejects third-party CDN requests.
- Deterministic single-GPU-worker browser regression suite, including focused
  textured/material-group transport and native/legacy probe coverage.

### Locally validated on 2026-08-11

- TypeScript source and examples compile.
- The 18-test browser-smoke gate, focused material GI checks, and native probe
  regression checks pass sequentially without retries.
- A Draft bake generates a dense 5,832-probe Cornell field with measurable red
  and green bounce, truthful debug colors, and an animated PBR demo object whose
  sampled irradiance changes with position.
- Five back-to-back Draft bakes complete without WebGL context loss.
- ESM, CommonJS, TypeScript declarations, installed tarball imports, and embedded xatlas assets pass local checks. No package was published.
- The production dependency audit reports no known vulnerabilities.

### Partially implemented

- Automation/runtime work remains WebGL/browser-bound for actual baking.
- README launch proof has Cornell screenshots and measurements, but a stronger custom architectural showcase remains desirable.
- Debug tooling is functional, but committed presentation captures for every channel and probes are still incomplete.
- Probe color quality, performance, and persistence size still need measurement on larger scenes and denser volumes.

### Optional post-v1 work

- Optional SSGI companion pass for small real-time screen-space bounce.
- GTAO-style stronger contact-occlusion pass or integration story.
- Temporal accumulation and denoise experiments for noisy real-time companion passes.
- WebGPU capability probe and experimental WebGPU bake/probe path.
- Custom-room/larger-scene visual regression automation after the custom room exists.
- True Node.js headless baking adapter/runtime.
- True non-browser runtime once a Node-compatible renderer strategy is selected.
- Live per-PR preview deployment URLs.
- Equivalent native `LightProbeGrid` support in `WebGPURenderer` (upstream Three.js does not provide it yet).
- Probe visibility/occlusion, relocation, validity classification, and reflection probes.

## Known limitations

- Requires a WebGL2 renderer and `EXT_color_buffer_float`.
- Three 0.185.1 is the tested baseline and peer range is constrained to r185.
- `export()` uses browser download behavior rather than direct filesystem writes.
- E2E Playwright tests require installed Chromium binaries.
- Package management is pnpm through Corepack.
- Project JSON v1 is an editor convenience format, not the npm package API.
- Probe generation uses GPU texture readback.
- Native probe textures are GPU-owned and are recaptured from the persisted baked scene on project load; they are not serialized byte-for-byte.
- Base-color maps are resampled into a bounded GPU atlas with tiles capped at
  512 px; this is not lossless preservation of arbitrarily large textures.
- Emissive color is supported; `emissiveMap` transport is not yet implemented.
- Normal, roughness, metalness, alpha, vertex-color, and custom-shader material
  parity are outside the diffuse GI material model.
- Dynamic-object sampling currently uses the object origin plus an optional offset.
- High probe counts produce large JSON arrays until compact binary persistence is added.
