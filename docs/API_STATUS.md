# API Status (2026-07-26)

## Current public API

```ts
new LightmapBaker(renderer, options?)
new LightmapBaker({ renderer, ...options })
new LightmapBaker({ rendererAdapter, ...options })
await baker.bake(scene, hooks?)
```

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
```

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
- Trilinear probe sampling and JSON serialization.
- Lightmap-atlas-derived probe irradiance with progress, abort handling, and empty-probe diffusion.
- Public probe generation, evaluation, debug-view, and dynamic-object binding APIs.
- Playground `ProbeController` owning probe resources and cleanup.
- Dedicated Probes inspector page with generation and runtime controls.
- Moving dynamic white-sphere demonstration excluded from static lightmap baking.
- Light Probes render layer that isolates the debug field and restores previous object visibility afterward.
- Optional probe volume and probe settings in Project JSON / `.3dl` version 1.
- Probe restoration on project load.
- Automatic probe invalidation on scene replacement and before a new classic lightmap bake.
- PBR `MeshStandardMaterial` integration that adds probe irradiance to `reflectedLight.indirectDiffuse` rather than emissive.
- Diffuse BRDF and metallic-energy handling through `material.diffuseColor * RECIPROCAL_PI`.
- Focused probe tests covering the pure volume, shader hook, project restoration, demo creation, and probe-only visibility.

### Implemented but awaiting local validation

- The new probe integration has been statically reviewed but has not been compiled or run in this environment because the repository could not be checked out and GitHub Actions were intentionally not used.
- Target-browser shader compilation against Three.js r161 needs the local `pnpm run test:probes` and visual run.
- Probe color quality, performance, and sensible default spacing need target-GPU validation.
- Project round-trip size needs measurement on larger probe volumes.

### Partially implemented

- npm packaging: publish metadata, exports, build, dry-run checks, and publish workflow exist; the real public publish still needs environment configuration and execution.
- Automation/runtime work remains WebGL/browser-bound for actual baking.
- README launch proof has Cornell screenshots and measurements, but a stronger custom architectural showcase remains desirable.
- Debug tooling is functional, but committed presentation captures for every channel and probes are still incomplete.

### Urgent but missing

- Optional SSGI companion pass for small real-time screen-space bounce.
- GTAO-style stronger contact-occlusion pass or integration story.
- Temporal accumulation and denoise experiments for noisy real-time companion passes.
- WebGPU capability probe and experimental WebGPU bake/probe path.
- Custom-room/larger-scene visual regression automation after the custom room exists.
- True Node.js headless baking adapter/runtime.
- True non-browser runtime once a Node-compatible renderer strategy is selected.
- Live per-PR preview deployment URLs.
- Directional SH9 probe storage and evaluation.
- Probe visibility/occlusion, relocation, validity classification, and reflection probes.

## Known limitations

- Requires a WebGL2 renderer and `EXT_color_buffer_float`.
- `export()` uses browser download behavior rather than direct filesystem writes.
- E2E Playwright tests require installed Chromium binaries.
- The npm package name is not published on the public registry yet.
- Package management is pnpm through Corepack.
- Project JSON v1 is an editor convenience format, not the npm package API.
- Probe generation uses GPU texture readback.
- Current probes store low-frequency RGB diffuse irradiance rather than directional SH.
- Dynamic-object sampling currently uses the object origin plus an optional offset.
- High probe counts produce large JSON arrays until compact binary persistence is added.
