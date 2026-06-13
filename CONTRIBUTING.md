# Contributing - three-lightmap-baker

## Project State

This repo is currently a browser/WebGL-first Three.js lightmap baker. The
classic baker is package-ready and the first npm publish is still pending.
Launch screenshots and RTX 3050 Ti benchmark numbers are already committed in
the README. Demo Project JSON save/load currently covers built-in presets,
imported GLB/glTF payloads, bake/editor options, and asset-library additions;
baked final lightmaps are persisted as raw Float32 atlas payloads.

## Current Layout

```text
packages/baker-classic/src/       Published classic lightmap baker
  LightmapBaker.ts                Public entrypoint
  bake/                           Bake orchestration, result lifecycle, validation
  atlas/                          xatlas UV2 generation and UV-space rasterization
  lightmap/                       GI, AO, composite, refinement, downscale passes
  gpu/                            Capability detection and timeout defaults
  utils/                          Geometry/material extraction and export helpers
  ui/                             Demo/editor controls for the classic baker
packages/pt-renderer/src/         Real-time path-tracing preview renderer
packages/pt-baker/src/            Experimental PT baker path
packages/demo-shell/src/          Shared editor shell, menus, panels, layout
packages/shared/src/              Shared registries, signals, history, UI helpers
apps/playground/                  Main live demo/editor
apps/pt-preview/                  Standalone PT preview app
apps/pt-baked/                    PT preview vs baked comparison app
examples/                         Minimal browser usage examples
tests/                            API import smoke and Playwright e2e tests
docs/                             Architecture, roadmap, launch/API status
```

## Architecture Rule: Two-Pass Bake

Pass 1: UV-space rasterization to world-position and normal textures.
Pass 2: ray tracing from texel world positions through the scene BVH.

These passes are separate by design. Do not combine UV-space rasterization and
ray tracing into a single shader; prior attempts produced renderer-state and
matrix propagation bugs.

## Critical Invariants

- `MeshBVH` reorders the merged index buffer. Material extraction must run after
  BVH construction so per-triangle material data matches shader face indices.
- Scene materials must keep the dummy 1x1 `lightMap` path that pins the
  `USE_LIGHTMAP` shader variant before heavy bake work.
- `LightmapBaker.bake()` must keep context-loss handling and GPU queue drain
  behavior intact.
- Generated textures/render targets are owned by `LightmapBakeResult` or must be
  disposed before returning.
- Public API examples must stay aligned with both supported constructors:
  `new LightmapBaker(renderer, options?)` and
  `new LightmapBaker({ renderer, ...options })`.

## Contributor License Agreement

All contributions require signing the CLA at [`/CLA.md`](./CLA.md) via the
hosted CLA Assistant app. PRs cannot be merged until the CLA is signed.

## Shader Rules

- Use GLSL 3.0 ES where the pass requires WebGL2 features.
- Use MRT where multiple outputs are needed; do not render the same geometry
  twice just to write position and normal separately.
- Every shader should explain its inputs and outputs at the top.
- Avoid magic numbers. Use documented constants, uniforms, or helper functions.
- Floating-point constants should use explicit decimal points.
- Guard against NaN/Inf in random sampling and normalization paths.

## TypeScript Rules

- Keep strict mode clean.
- Avoid `any`; use explicit types or `unknown` with narrowing.
- Keep assertions near FFI/WebGL/WASM boundaries and document why they are safe.
- Exported public APIs should have JSDoc when their behavior is not obvious.
- Prefer local helpers over growing already-large controller files.

## Resource Management

WebGL resources leak if not explicitly disposed.

1. A function that creates a `WebGLRenderTarget` must either return ownership or
   dispose it before returning.
2. Long-lived classes should track disposable resources and release them in
   `dispose()`.
3. Renderer state changes belong in `try/finally` blocks.
4. `dispose()` should be idempotent.
5. Public methods should reject work after disposal when applicable.

## Diagnostics

- Console diagnostics should be behind dev/debug paths.
- Logs should be prefixed with `[baker]` or a specific package prefix.
- Prefer `console.info`, `console.warn`, and `console.error`; avoid stray
  `console.log` in production paths.

## Git Conventions

- Keep commits focused by concern.
- Do not commit `node_modules/`, generated package output, or IDE config.
- Do not commit ad-hoc debug screenshots. Curated README/launch assets may live
  under `screenshots/`; rerunnable raw capture output belongs in ignored
  `launch-artifacts/`.
- Do not revert unrelated local changes while working on a task.

## Modularity Guidance

- New files should have one nameable responsibility.
- Several legacy/editor files exceed ideal size already. Do not make them harder
  to split; when touching them substantively, prefer extracting cohesive helpers.
- Avoid circular imports.
- Avoid module-level mutable state unless the value is immutable after
  initialization or explicitly shared by design.
- Keep package boundaries clear: library code must not depend on app/demo code.

## Before Opening A PR

- Run typecheck, example typecheck, lint, build, API import smoke, adapter
  runtime smoke, Cornell visual smoke, and bake cancellation smoke when touching
  renderer setup, bake lifecycle, or automation paths.
- `pnpm run build` and `pnpm run release:check` enforce the demo bundle budget.
  If a change intentionally adds substantial JS/CSS or copied launch assets,
  update `scripts/check-bundle-budget.mjs` in the same change and explain the
  new ceiling.
- Pull requests upload a static demo preview artifact from CI. Use it for
  review without pushing ad-hoc screenshots or modifying the production Pages
  deployment.
- Check whether formatting baseline/tooling is expected to be green for the
  branch before treating format failures as regressions.
- For visual or GPU-sensitive changes, include GPU renderer info, bake settings,
  and before/after screenshots or capture artifacts.
