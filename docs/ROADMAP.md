# Roadmap

Last updated: 2026-06-12

## Current State

- **Core baker:** Browser/WebGL lightmap baking is implemented with path-traced GI, BVH traversal, auto UV2, AO, dilation, denoise, supersampling/downscale, progressive hooks, and `LightmapBakeResult` lifecycle helpers.
- **Public API:** Both renderer constructor styles are supported: `new LightmapBaker(renderer, options?)` and `new LightmapBaker({ renderer, ...options })`. The optional `LightmapRendererAdapter` boundary is also available for offscreen-browser/test harness ownership of renderer setup.
- **Package readiness:** ESM/CJS/type declaration output is configured, `test:api-import` validates package import, adapter exports, and tarball installation, `typecheck:examples` validates public examples, and `release:check` adds the full pre-publish gate plus npm dry run. The package is not published on npm yet.
- **Launch proof:** README uses committed before/after launch screenshots from `cornell.advanced`; benchmark numbers for Draft, Preview, Production, and Final are recorded for an RTX 3050 Ti Laptop GPU.
- **Automation:** `scripts/capture-launch-assets.mjs` captures launch images and benchmark data, with GPU renderer enforcement via `BAKER_EXPECT_GPU`. `pnpm run test:adapter-runtime` covers the offscreen/detached renderer adapter runtime path and enforces a CI-safe adapter runtime budget, `pnpm run test:visual-cornell` covers a real Cornell Draft bake by asserting post-bake GI pixel signatures, `pnpm run test:bake-cancel` covers cancelling an in-flight bake and rebaking afterward, `pnpm run test:project-save-load` covers Project JSON round trips for built-in presets, imported GLB/glTF payloads, and asset-library additions, and `pnpm run test:selection` covers outliner selection propagation plus keyboard stepping. All five browser smokes are wired into CI.
- **Validation status:** `release:check` passes locally as of this audit. It covers `typecheck`, `typecheck:examples`, `lint`, `format:check`, demo build, bundle budget, package build, tarball import smoke, and npm publish dry run.

## Now

- **First npm release:** Run `pnpm run release:check`, publish `three-lightmap-baker` from an authenticated npm session, then update README install wording from tarball/pre-release guidance to normal registry install flow.
- **Docs cleanup:** Keep README, API status, and launch readiness aligned whenever release status, screenshots, or benchmark numbers change.
- **Launch visual decision:** Current proof is Cornell advanced. A stronger custom interior/architectural room is intentionally postponed until that room is designed.

## Next (Headless Staging)

- **Stage 1:** Keep renderer-injected bake API as the contract boundary. Done.
- **Stage 2:** Add optional context/renderer adapter interface for offscreen browser workers and test harnesses. Done; `examples/offscreen-browser.ts` is covered by `typecheck:examples`.
- **Stage 3:** Prototype Node-compatible runtime path (headless-gl/WebGPU/offscreen strategy), with explicit capability matrix and limitations.
- **Stage 4:** Add automation-focused non-UI examples and CI smoke checks around API import + basic orchestration. Done for the browser runtime path via `examples/offscreen-browser.ts`, package import smoke, example typecheck, `tests/e2e/adapter-runtime.spec.ts`, and the CI adapter-runtime job.

## Later

- **Features:** Light probes and richer lighting authoring workflows.
- **Quality:** Cornell Draft visual bake smoke is automated through `pnpm run test:visual-cornell`; custom-room/larger-scene visual regression remains future work and should wait for the planned custom room.
- **Infrastructure:** Demo bundle-size budgets are enforced by `pnpm run budget:bundle` during `build` and `release:check`. Runtime budgets now cover the CI adapter smoke and launch-machine benchmark artifacts via `pnpm run budget:runtime` after `pnpm run capture:launch`. Pull requests now produce a downloadable demo preview artifact in CI; live per-PR preview URLs remain future work.
- **UX:** Bake cancellation is implemented in the demo/editor and covered by `pnpm run test:bake-cancel`. Project JSON save/load is implemented for built-in scene presets, imported GLB/glTF payloads, bake/editor options, and asset-library additions; baked lightmap texture persistence remains future work. Selection ergonomics now include stable selected-row metadata, ArrowUp/ArrowDown stepping through the outliner, and double-click frame-to-node; broader editor polish and scene tooling remain future work.
