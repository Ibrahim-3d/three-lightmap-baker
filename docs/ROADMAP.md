# Roadmap

Last updated: 2026-07-26

## Product Direction

Three Lightmap Baker is a browser-first lighting pipeline for Three.js:

1. Bake static GI into reusable lightmaps. Implemented.
2. Generate and debug light probes from the baked scene. Implemented in code.
3. Use probes to light dynamic objects at runtime. Implemented in code.
4. Validate and showcase the complete lightmap + probe workflow on target hardware. Current gate.
5. Add optional real-time companion passes where they strengthen the baked workflow.
6. Stage WebGPU acceleration without breaking the WebGL-first package.

The core product remains stable baked lighting. Probes now bridge static lightmaps with dynamic objects. SSGI, GTAO, SSR, temporal work, and WebGPU remain optional future layers rather than replacements for the baker.

## Current State

- **Core baker:** Browser/WebGL lightmap baking is implemented with path-traced GI, BVH traversal, auto UV2, AO, dilation, denoise, supersampling/downscale, progressive hooks, and `LightmapBakeResult` lifecycle helpers.
- **Debug tooling:** Combined, refined/raw combined, direct, indirect, AO, raw lightmap, albedo, unlit albedo, position, normal, texel density, atlas, and probe-only views exist.
- **Light probes:** Regular RGB probe volumes, lightmap-derived irradiance, interpolation, debug spheres, public generation/evaluation APIs, PBR dynamic-object binding, playground controls, animated demo, and Project JSON / `.3dl` persistence are implemented.
- **Probe lifecycle:** Probe resources are cleared on scene replacement and invalidated before a new classic bake. Selecting the probe-only layer without a generated volume falls back to Combined.
- **Public API:** Both renderer constructor styles and the optional `LightmapRendererAdapter` boundary are supported. Probe generation remains a separate opt-in API after the lightmap bake.
- **Package readiness:** ESM/CJS/type declaration output, API-import smoke, example typecheck, release gate, and manual npm publish workflow exist. The package is not published on npm yet.
- **Launch proof:** README uses committed Cornell screenshots and benchmark numbers recorded before the probe integration.
- **Current validation truth:** The pre-probe baseline previously passed `release:check`. The new probe integration has not been compiled or executed in this environment. Local typecheck, focused Playwright tests, package build, and visual GPU validation are the current gate.

## Now: Probe Validation and Showcase

### 0. Validate the current master locally

Run:

```bash
corepack enable
pnpm install
pnpm run typecheck
pnpm run typecheck:examples
pnpm run test:probes
pnpm run build:package
pnpm run dev
```

Validate:

- Probes generate after a completed Draft or Preview bake.
- Red/green Cornell color bleed appears in nearby probe debug spheres.
- The animated white sphere transitions smoothly through the irradiance field.
- The material remains PBR and does not use emissive as the probe-light channel.
- Light Probes mode hides normal renderables and Combined restores visibility.
- Saving creates a `.3dl` file containing optional probe data.
- Loading restores probe count, colors, visibility, controls, and demo state.
- Starting a new static bake clears stale probes.
- No console, shader compile, WebGL, or resource-lifecycle errors appear.

Any failures found here take priority over new rendering features.

### 1. Probe and debug-view showcase

Once validation is green, capture and publish:

- Probe grid inside Cornell and the future custom room.
- Moving dynamic sphere or product object receiving colored bounce.
- Probe-only view.
- Combined lightmap + dynamic-object result.
- Texel density.
- Lightmap atlas.
- Direct-only pass.
- Indirect/GI-only pass.
- AO-only pass.
- Raw bake versus dilation/denoise where useful.
- GPU/runtime diagnostics: renderer, ANGLE backend, WebGL2, `EXT_color_buffer_float`, timeout protection, and benchmark status.

### 2. Improve probe quality only from measured failures

The current RGB diffuse field is the shipping MVP. Upgrade only where validation demonstrates a real deficiency:

- Tune default spacing, fill iterations, surface offset, and atlas stride.
- Add per-probe validity and confidence values.
- Add visibility or occlusion weighting if probes leak through walls.
- Add probe relocation if samples sit inside geometry.
- Add multi-point sampling for large dynamic objects.
- Compact `.3dl` probe payloads if JSON size becomes material.
- Evaluate SH9 directional irradiance only if RGB cannot provide acceptable dynamic-object lighting.
- Evaluate per-probe cubemap or reduced-ray generation only if lightmap-derived projection is visibly insufficient.

### 3. First npm release

After current master passes validation:

- Run the full local `pnpm run release:check`.
- Configure the publishing environment.
- Run the manual npm publish workflow for the exact package version.
- Update README install wording from tarball guidance to registry installation.
- Keep claims explicit: browser/WebGL lightmaps and RGB diffuse probes now; Node baking, SH9, and WebGPU remain future work.

### 4. Custom architectural showcase

Cornell proves correctness; the custom room should prove product value:

- Build or import a larger interior with multiple material colors and occluded spaces.
- Bake static GI.
- Generate probes.
- Move a recognizable product object through the room.
- Capture lightmap-only, probes-only, and final views.
- Add larger-scene visual regression after the showcase is stable.

### 5. Hybrid runtime lighting companion

Add real-time effects only where they complement the baker:

- SSGI companion pass for small camera-visible bounce.
- GTAO-style stronger contact occlusion.
- SSR/reflections only if configurator/interior demos materially improve.
- Temporal accumulation and denoise experiments for noisy real-time passes.
- Clear UI split between baked lighting, probe lighting, and screen-space companion lighting.

Do not let SSGI erase the baked-lighting product. Screen-space effects remain camera-dependent and incomplete; stable lightmaps and probes remain the foundation.

### 6. WebGPU acceleration path

WebGL remains the shipping baseline. WebGPU exploration should be staged:

- Add a WebGPU capability probe to the runtime matrix.
- Write a design document for compute-based bake and probe generation.
- Prototype one small WebGPU-only pass behind an experimental flag.
- Investigate node-based shaders for optional companion post-processing.
- Preserve the current public WebGL API and fallback path.

### 7. Headless and automation

- Keep the renderer-injected API as the stable boundary. Done.
- Keep the optional context/renderer adapter interface for offscreen-browser test ownership. Done.
- Continue Node-safe capability reporting through `getLightmapRuntimeCapabilities()`. Done for the unsupported Node bake path.
- Prototype a true non-browser runtime only after selecting a rendering backend: headless-gl, browser automation, WebGPU, or another explicit strategy.
- Do not claim Node baking before a real runtime passes the same visual and lifecycle checks as the browser path.

## Aggressive R&D Tracks

These remain evaluation tracks, not current product requirements:

- Full SSGI sibling renderer.
- Full WebGPU-native baker and probe generator.
- Full real-time GI mode combining optional screen-space effects, probes, temporal accumulation, and baked fallback.
- Physics/editor interactions that directly improve lighting demonstrations.
- Complex node-material editing only after the lighting pipeline is validated and packaged.

Decision rule: prototype and measure before replacing stable systems. Do not turn the baker into a collection of half-finished rendering modes.

## Later

- Minor editor chrome polish unrelated to lighting workflows.
- Additional sample assets after the main hybrid-lighting showcase exists.
- Extra themes and layout preferences.
- Additional documentation examples after the current probe workflow is validated.
