# API Status (2026-06-12)

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

## Intended API direction

- Keep browser-first API minimal and stable.
- Keep explicit renderer-injected path for advanced/automation use.
- Expand the optional renderer/context adapter boundary into real offscreen-browser and future headless implementations.
- Preserve current result lifecycle (`apply/export/dispose`) while expanding non-destructive utilities.

## Claim audit (README/docs/code)

### Fully implemented

- Path-traced lightmap baking with configurable bounces.
- BVH-accelerated ray tracing (`three-mesh-bvh`).
- Auto UV2 generation (`xatlas-three`).
- Direct + indirect GI accumulation.
- AO pass, dilation, denoise, progressive accumulation hooks.
- Browser demo in `apps/playground`.
- Supersample/downscale workflow.
- Launch capture and benchmark automation.
- Package build output for ESM, CJS, and TypeScript declarations.
- Optional `LightmapRendererAdapter` boundary with `createRendererAdapter()` and `setRendererAdapter()`.
- Offscreen-browser automation example in `examples/offscreen-browser.ts`, covered by `pnpm run typecheck:examples`.
- Runtime capability matrix API through `getLightmapRuntimeCapabilities()`, with `examples/node-headless-status.ts` covering the current Node-safe probe path. Node currently reports `canBake: false`.
- Runtime smoke for detached/offscreen browser adapter orchestration in `tests/e2e/adapter-runtime.spec.ts`, exposed as `pnpm run test:adapter-runtime` and wired into CI with a CI-safe elapsed-time budget.
- Cornell Draft visual bake smoke in `tests/e2e/bake-cornell-draft.spec.ts`, exposed as `pnpm run test:visual-cornell` and wired into CI. It validates post-bake GI color signatures from the rendered canvas.
- Demo/editor bake cancellation using the public `BakeHooks.signal` path, exposed as `pnpm run test:bake-cancel` and wired into CI.
- Demo/editor Project JSON save/load for built-in presets, imported GLB/glTF payloads, bake/editor options, baked final lightmaps, and asset-library additions, exposed as `pnpm run test:project-save-load` and wired into CI.
- Demo/editor outliner selection ergonomics: stable selected row metadata, ArrowUp/ArrowDown selection stepping, and double-click frame-to-node. Covered by `pnpm run test:selection` and wired into CI.
- Asset Library is the editor add path for primitives/lights; the old disabled Outliner add placeholder was removed and asset tiles are covered by `pnpm run test:asset-library` in CI.
- Demo/editor undo/redo command history for add/remove/transform operations, with Edit menu items and Ctrl/Cmd keyboard shortcuts. Delete undo/redo is covered by `pnpm run test:editor-history` and wired into CI.
- Help menu shortcut/reference text is aligned with current editor controls and repository links, with topbar menu coverage in `pnpm run test:topbar` in CI.
- Topbar settings button opens the existing Post FX inspector tab instead of being a disabled placeholder, covered by `pnpm run test:topbar` in CI.
- Full browser smoke gate is exposed as `pnpm run test:browser-smoke` and wired into CI as one sequential Playwright invocation to avoid local dev-server port races and GPU contention between separate test commands.
- Demo bundle-size budget script in `scripts/check-bundle-budget.mjs`, exposed as `pnpm run budget:bundle` and run during `build` / `release:check`.
- Launch benchmark budget script in `scripts/check-runtime-budget.mjs`, exposed as `pnpm run budget:runtime` / `pnpm run check:launch-benchmarks` for validating `launch-artifacts/benchmark.json` after a target-machine capture.
- Pull-request demo preview artifact in CI. This is a downloadable static build, not a live per-PR URL.

### Partially implemented

- npm packaging: publish metadata/exports/build added, tarball import smoke passes, `release:check` includes npm dry run, and `.github/workflows/npm-publish.yml` provides the manual authenticated publish path; still needs npm trusted publishing or `NPM_TOKEN` configuration plus the real publish run.
- Automation workflow: browser capture/benchmark automation exists, renderer-injected/adapter usage works, and runtime capability probing is exported; still WebGL/browser-bound for actual baking.
- README launch proof: Cornell advanced screenshots and measured benchmark numbers are published in README; the stronger custom interior/architectural showcase and its larger-scene visual regression are postponed until that room is designed.

### Planned but missing

- True Node.js headless baking adapter/runtime.
- True non-browser CI/runtime path once a Node-compatible renderer strategy is selected.
- Probe-based lighting features referenced in roadmap.
- Custom-room/larger-scene visual regression automation after the custom room exists.
- Live per-PR preview deployment URLs.

### Previously corrected docs drift

- README clone URL used an incorrect stand-in value.
- README API constructor mismatch.
- Architecture doc references to the pre-monorepo source layout.
- README result shape implied fields (`aoMaps`, `probes`, `duration`) not in current result object.

## Known limitations

- Requires WebGL2 renderer + `EXT_color_buffer_float`.
- `export()` uses browser download behavior (not direct filesystem writes).
- E2E Playwright tests require installed Chromium binaries in the environment.
- The npm package name is not published on the public registry yet.
- Package manager is pnpm through Corepack; CI/docs/scripts should stay aligned with `pnpm-lock.yaml`.
- Demo Project JSON v1 is an editor convenience format, not the npm package API. It embeds imported GLB/glTF payloads and baked final lightmap atlas payloads.
