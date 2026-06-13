# Roadmap

Last updated: 2026-06-12

## Current State

- **Core baker:** Browser/WebGL lightmap baking is implemented with path-traced GI, BVH traversal, auto UV2, AO, dilation, denoise, supersampling/downscale, progressive hooks, and `LightmapBakeResult` lifecycle helpers.
- **Public API:** Both renderer constructor styles are supported: `new LightmapBaker(renderer, options?)` and `new LightmapBaker({ renderer, ...options })`. The optional `LightmapRendererAdapter` boundary is also available for offscreen-browser/test harness ownership of renderer setup, and `getLightmapRuntimeCapabilities()` exposes the current runtime capability matrix for browser/offscreen/Node staging.
- **Package readiness:** ESM/CJS/type declaration output is configured, `test:api-import` validates package import, adapter exports, and tarball installation, `typecheck:examples` validates public examples, `release:check` adds the full pre-publish gate plus npm dry run, and `.github/workflows/npm-publish.yml` provides a manual authenticated publish path with version confirmation and npm provenance. The package is not published on npm yet.
- **Launch proof:** README uses committed before/after launch screenshots from `cornell.advanced`; benchmark numbers for Draft, Preview, Production, and Final are recorded for an RTX 3050 Ti Laptop GPU.
- **Automation:** `scripts/capture-launch-assets.mjs` captures launch images and benchmark data, with GPU renderer enforcement via `BAKER_EXPECT_GPU`. `pnpm run test:browser-smoke` runs the eight CI browser smokes in one Playwright invocation: adapter runtime, Cornell Draft visual bake, bake cancellation, Project JSON save/load, outliner selection, editor history, asset-library add path, and topbar controls. Individual targeted scripts remain available for each smoke.
- **Validation status:** `release:check` passes locally as of this audit. It covers `typecheck`, `typecheck:examples`, `lint`, `format:check`, demo build, bundle budget, package build, tarball import smoke, and npm publish dry run.

## Now

- **First npm release:** Run the manual `npm Publish` GitHub Actions workflow for the package version in `package.json` after npm trusted publishing or `NPM_TOKEN` is configured, then update README install wording from tarball/pre-release guidance to normal registry install flow.
- **Docs cleanup:** Keep README, API status, and launch readiness aligned whenever release status, screenshots, or benchmark numbers change.
- **Launch visual decision:** Current proof is Cornell advanced. A stronger custom interior/architectural room is intentionally postponed until that room is designed.

## Next (Headless Staging)

- **Stage 1:** Keep renderer-injected bake API as the contract boundary. Done.
- **Stage 2:** Add optional context/renderer adapter interface for offscreen browser workers and test harnesses. Done; `examples/offscreen-browser.ts` is covered by `typecheck:examples`.
- **Stage 3:** Prototype Node-compatible runtime path (headless-gl/WebGPU/offscreen strategy), with explicit capability matrix and limitations. Started: `getLightmapRuntimeCapabilities()` and `examples/node-headless-status.ts` now provide the Node-safe capability matrix; actual Node baking still reports unsupported until a renderer strategy is selected.
- **Stage 4:** Add automation-focused non-UI examples and CI smoke checks around API import + basic orchestration. Done for the browser runtime path via `examples/offscreen-browser.ts`, package import smoke, example typecheck, `tests/e2e/adapter-runtime.spec.ts`, and the CI adapter-runtime job.

## Later

- **Features:** Light probes and richer lighting authoring workflows.
- **Quality:** Cornell Draft visual bake smoke is automated through `pnpm run test:visual-cornell`; custom-room/larger-scene visual regression remains future work and should wait for the planned custom room.
- **Infrastructure:** Demo bundle-size budgets are enforced by `pnpm run budget:bundle` during `build` and `release:check`. Runtime budgets now cover the CI adapter smoke and launch-machine benchmark artifacts via `pnpm run budget:runtime` after `pnpm run capture:launch`. Pull requests now produce a downloadable demo preview artifact in CI; live per-PR preview URLs remain future work.
- **UX:** Bake cancellation is implemented in the demo/editor and covered by `pnpm run test:bake-cancel`. Project JSON save/load is implemented for built-in scene presets, imported GLB/glTF payloads, bake/editor options, baked final lightmaps, and asset-library additions. Selection ergonomics now include stable selected-row metadata, ArrowUp/ArrowDown stepping through the outliner, and double-click frame-to-node. Undo/redo is wired for add/remove/transform command history with menu items and keyboard shortcuts, and delete undo/redo is covered by `pnpm run test:editor-history`. The Help menu now reflects current shortcuts and project links, and the topbar settings button opens the Post FX inspector tab; both are covered in `tests/e2e/topbar-menus.spec.ts`. Broader editor polish and scene tooling remain future work.
