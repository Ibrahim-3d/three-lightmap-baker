# Roadmap

Last updated: 2026-06-15

## Product Direction

Three Lightmap Baker is not only a lightmap exporter. The target is a browser-first lighting pipeline for Three.js:

1. Bake static GI into reusable lightmaps.
2. Generate and debug light probes from the baked scene.
3. Use probes to light dynamic objects at runtime.
4. Add real-time companion passes where they strengthen the baked workflow.
5. Stage WebGPU acceleration without breaking the WebGL-first package.

The core product remains baked lighting for Three.js. Real-time SSGI, GTAO, SSR, probes, and WebGPU are now urgent roadmap items because they explain how the baker becomes a full web lighting system instead of only a screenshot generator.

## Current State

- **Core baker:** Browser/WebGL lightmap baking is implemented with path-traced GI, BVH traversal, auto UV2, AO, dilation, denoise, supersampling/downscale, progressive hooks, and `LightmapBakeResult` lifecycle helpers.
- **Public API:** Both renderer constructor styles are supported: `new LightmapBaker(renderer, options?)` and `new LightmapBaker({ renderer, ...options })`. The optional `LightmapRendererAdapter` boundary is also available for offscreen-browser/test harness ownership of renderer setup, and `getLightmapRuntimeCapabilities()` exposes the current runtime capability matrix for browser/offscreen/Node staging.
- **Package readiness:** ESM/CJS/type declaration output is configured, `test:api-import` validates package import, adapter exports, and tarball installation, `typecheck:examples` validates public examples, `release:check` adds the full pre-publish gate plus npm dry run, and `.github/workflows/npm-publish.yml` provides a manual authenticated publish path with version confirmation and npm provenance. The package is not published on npm yet.
- **Launch proof:** README uses committed before/after launch screenshots from `cornell.advanced`; benchmark numbers for Draft, Preview, Production, and Final are recorded for an RTX 3050 Ti Laptop GPU.
- **Automation:** `scripts/capture-launch-assets.mjs` captures launch images and benchmark data, with GPU renderer enforcement via `BAKER_EXPECT_GPU`. `pnpm run test:browser-smoke` runs the eight CI browser smokes in one Playwright invocation: adapter runtime, Cornell Draft visual bake, bake cancellation, Project JSON save/load, outliner selection, editor history, asset-library add path, and topbar controls. Individual targeted scripts remain available for each smoke.
- **Validation status:** `release:check` passes locally as of the latest audit. It covers `typecheck`, `typecheck:examples`, `lint`, `format:check`, demo build, bundle budget, package build, tarball import smoke, and npm publish dry run.

## Now: Release + Hybrid Lighting Push

### 0. First npm release

- Run the manual `npm Publish` workflow for the package version in `package.json` after the publishing environment is configured.
- After publish, update README install wording from tarball/pre-release guidance to normal registry install flow.
- Keep release messaging honest: browser/WebGL baker now; Node/headless baking and WebGPU acceleration are staged, not shipped.

### 1. Debug-view showcase

This is urgent because it makes the project read as an engine-quality tool, not just a Cornell render.

Add README/demo captures for:

- Texel density view.
- Lightmap atlas view.
- Direct-only pass.
- Indirect/GI-only pass.
- AO-only pass.
- Probe-only pass.
- Final composite.
- Raw bake vs dilation vs denoise where visually useful.
- GPU/runtime diagnostics panel: renderer, ANGLE backend, WebGL2, `EXT_color_buffer_float`, timeout protection mode, and budget status.

### 2. Baked Light Probes

This is the next major feature. It bridges baked static GI with dynamic runtime objects.

Minimum viable probe system:

- Generate a 3D probe grid inside scene bounds.
- Sample baked lighting or trace a reduced ray set per probe.
- Store RGB irradiance per probe.
- Visualize probe points as colored debug spheres.
- Interpolate nearby probes for a moving test object.
- Persist probe data inside the demo `.3dl` project format.
- Add import/export and dispose lifecycle rules for probe resources.

### 3. Dynamic object GI demo

Build a clear demo that proves why probes matter:

- Bake a room.
- Generate probes.
- Move a sphere or product object through the room.
- Show the dynamic object receiving colored room bounce from nearby probes.
- Add debug toggles: baked lightmap only, probe lighting only, final composite.

### 4. Hybrid runtime lighting companion

Add the real-time layer where it complements the baker.

Urgent research/prototype tasks:

- SSGI companion pass for small real-time screen-space bounce.
- GTAO-style stronger contact-occlusion pass or integration story.
- SSR/reflection companion only if it directly improves configurator/interior demos.
- Temporal accumulation and denoise experiments for noisy real-time passes.
- Clear UI split: baked lighting, probe lighting, screen-space companion lighting.

Do not let SSGI erase the baked-lighting product. SSGI is camera-dependent and screen-space-limited. The product should combine stable baked lighting with optional real-time enhancement.

### 5. WebGPU acceleration path

WebGL remains the shipping baseline. WebGPU is now urgent exploration because advanced Three.js lighting work is moving there.

Required staging:

- Keep WebGL path stable.
- Add a WebGPU capability probe to the runtime matrix.
- Add a design document for WebGPU compute-based bake/probe generation.
- Prototype a small WebGPU-only pass behind an experimental flag.
- Investigate node-based shader implementation for companion post-processing, without breaking the current baker API.

### 6. Aggressive R&D tracks

These are no longer ignored or postponed. They are urgent evaluation tracks, but they must be proven with prototypes before they replace the stable WebGL baker.

- **Full SSGI renderer:** investigate whether a complete real-time SSGI path should exist as a sibling renderer/demo mode, not as the first replacement for baked lightmaps.
- **Full WebGPU rewrite:** evaluate a future WebGPU-native baker/runtime architecture, including compute-driven ray dispatch, probe generation, denoising, and atlas updates.
- **Full real-time GI engine:** explore whether the project should eventually include a runtime GI mode combining SSGI, probes, GTAO, SSR, temporal accumulation, and baked fallback.
- **Physics/editor features:** evaluate only where they improve lighting demos, for example moving test objects, draggable light/probe volumes, room-object interaction, and scene-state validation.
- **Complex node material editor:** evaluate as a future material-authoring layer only after the lighting pipeline is stable; do not block probes, debug views, or WebGPU experiments on this.

Decision rule: these tracks are urgent to study, but the shipping product must remain coherent. Do not create a half-finished engine that makes the baker harder to use.

### 7. Headless and automation

Headless is still important, but it must follow the renderer strategy rather than pretending Node can bake today.

- Keep renderer-injected API as the stable contract boundary. Done.
- Keep optional context/renderer adapter interface for offscreen browser workers and test harnesses. Done.
- Continue Node-safe capability reporting through `getLightmapRuntimeCapabilities()`. Done for current unsupported Node bake path.
- Prototype true non-browser runtime only after choosing the rendering backend: headless-gl, browser automation, WebGPU, or another explicit renderer strategy.

## Urgent Showcase Work

- Custom interior/architectural room is now urgent, not postponed. Cornell proves correctness; the room proves product value.
- Larger-scene visual regression should be added once the custom room exists.
- Top-of-README GIF/video should show: texel density, bake, atlas, GI result, probe grid, moving dynamic object, final composite.
- Technical breakdown should show: before, texel density, UV2/atlas, direct, indirect, AO, probes, dynamic object, final.

## Later

Only non-critical polish belongs here:

- Minor editor chrome polish not connected to lighting workflows.
- Additional sample assets after the main hybrid-lighting showcase exists.
- Extra themes and layout preferences.
- Additional documentation examples after the core hybrid lighting pipeline is demonstrable.
