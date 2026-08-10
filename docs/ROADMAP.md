# Roadmap

Last updated: 2026-08-11

Public npm publication is not approved. Local package validation and the
existence of release infrastructure are engineering aids only; publication is
gated on Ibrahim's explicit approval.

## Product Direction

Three Lightmap Baker is a browser-first lighting pipeline for Three.js:

1. Bake static GI into reusable lightmaps. Implemented.
2. Capture the baked static scene into native Three.js `LightProbeGrid`. Implemented in code.
3. Use the native GPU L2 SH grid for dynamic-object lighting. Implemented in code.
4. Retain the custom RGB probe stack as an explicit fallback until the native path is proven broadly.
5. Validate and showcase the complete native lightmap + probe workflow on target hardware. Current gate.
6. Add optional real-time companion passes where they strengthen the baked workflow.
7. Stage WebGPU acceleration without breaking the WebGL-first package.

The core product remains stable baked lighting. Probes now bridge static lightmaps with dynamic objects. SSGI, GTAO, SSR, temporal work, and WebGPU remain optional future layers rather than replacements for the baker.

## Current State

- **Core baker:** Browser/WebGL lightmap baking is implemented with path-traced GI, BVH traversal, auto UV2, AO, dilation, denoise, supersampling/downscale, progressive hooks, and `LightmapBakeResult` lifecycle helpers.
- **Debug tooling:** Combined, refined/raw combined, direct, indirect, AO, raw lightmap, albedo, unlit albedo, position, normal, texel density, atlas, and probe-only views exist.
- **Light probes:** Three.js `LightProbeGrid` is the preferred runtime. It captures the completed baked static scene into a GPU-resident L2 SH atlas and lights moving `MeshStandardMaterial` objects through the native renderer. The prior RGB volume, CPU interpolation, shader binding, diagnostics, and persistence remain available under **Legacy RGB volume**.
- **Probe lifecycle:** Probe resources are cleared on scene replacement and invalidated before a new classic bake. Selecting the probe-only layer without a generated volume falls back to Combined.
- **Public API:** Both renderer constructor styles and the optional `LightmapRendererAdapter` boundary are supported. Probe generation remains a separate opt-in API after the lightmap bake.
- **Package engineering:** Local artifacts provide ESM/CJS/type declaration output, installed-tarball import smoke, packaged xatlas assets, browser regression coverage, and third-party notices. This does not indicate public-release readiness or authorization.
- **Launch proof:** README uses committed Cornell screenshots and benchmark numbers recorded before the probe integration.
- **Current validation truth:** The r185.1 migration, source/example typechecks, and production build pass on 2026-08-11. Native browser capture has dedicated regression coverage; a full GPU-suite rerun remains required on a machine where the Playwright browser launcher is responsive. No publication was performed.

## Now: Probe Showcase and Larger-Scene Measurement

### 0. Keep the engineering gate green

Run:

```bash
corepack enable
pnpm install
pnpm run typecheck
pnpm run typecheck:examples
pnpm run lint
pnpm run test:release
pnpm run dev
```

The automated gate now validates:

- A real Draft bake can generate non-empty RGB probe irradiance.
- The debug grid receives instance colors and the PBR demo sphere moves through the field.
- Project restoration, probe-only visibility, bake cancellation, and repeated bakes remain healthy.
- App startup and xatlas initialization do not request a third-party CDN.
- ESM, CommonJS, declarations, and installed tarball imports remain healthy.

Manual visual review still determines whether probe spacing, color quality, and
leakage are acceptable for each larger showcase scene.

### 1. Probe and debug-view showcase

Once validation is green, capture and review:

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

Native L2 SH is now the baseline. Upgrade only where validation demonstrates a real deficiency:

- Tune default spacing, fill iterations, surface offset, and atlas stride.
- Add per-probe validity and confidence values.
- Add visibility or occlusion weighting if probes leak through walls.
- Add probe relocation if samples sit inside geometry.
- Add multi-point sampling for large dynamic objects.
- Compact `.3dl` probe payloads if JSON size becomes material.
- Tune native grid spacing and cubemap size against capture time and leakage.
- Retire individual legacy RGB components only after equivalent native-path tests pass on target hardware.

### 3. Pre-release maintenance

- Keep local build, package-import, and browser regression checks green.
- Do not spend time on publishing infrastructure unless it directly blocks
  development or testing.
- Publishing, tags, version bumps, GitHub Releases, and workflow changes require
  Ibrahim's explicit approval.
- Keep claims explicit: browser/WebGL lightmaps and native L2 SH probes now; Node baking and a WebGPU probe-grid runtime remain future work.

### 4. Custom architectural showcase

Cornell proves correctness; the custom room should prove product value:

- Build or import a larger interior with multiple material colors and occluded spaces.
- Bake static GI.
- Generate probes.
- Move a recognizable product object through the room.
- Capture lightmap-only, probes-only, and final views.
- Add larger-scene visual regression after the showcase is stable.
- Keep the first probe showcase's static contributors to one solid-color
  material per mesh. Base-color maps and geometry material groups are not yet
  represented by the baker's shared per-triangle material lookup.

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
