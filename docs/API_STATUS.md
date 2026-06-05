# API Status (2026-06-04)

## Current public API

```ts
new LightmapBaker(renderer, options?)
new LightmapBaker({ renderer, ...options })
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
- Add optional renderer/context adapter boundary for future headless/offscreen implementations.
- Preserve current result lifecycle (`apply/export/dispose`) while expanding non-destructive utilities.

## Claim audit (README/docs/code)

### Fully implemented

- Path-traced lightmap baking with configurable bounces.
- BVH-accelerated ray tracing (`three-mesh-bvh`).
- Auto UV2 generation (`xatlas-three`).
- Direct + indirect GI accumulation.
- AO pass, dilation, denoise, progressive accumulation hooks.
- Browser demo in `apps/playground`.

### Partially implemented

- Public API alignment: now supports clean constructor style and explicit renderer style.
- npm packaging: publish metadata/exports/build added; still needs real publish cycle validation on npm.
- Automation workflow: renderer-injected usage works; still browser/WebGL-bound.

### Planned but missing

- True Node.js headless baking adapter/runtime.
- Probe-based lighting features referenced in roadmap.

### Incorrect/stale (fixed in this pass)

- README clone URL placeholder.
- README API constructor mismatch.
- Architecture doc path references (`src/lib`, `src/demo`) from old structure.
- README result shape implied fields (`aoMaps`, `probes`, `duration`) not in current result object.

## Known limitations

- Requires WebGL2 renderer + `EXT_color_buffer_float`.
- `export()` uses browser download behavior (not direct filesystem writes).
- E2E Playwright tests require installed Chromium binaries in the environment.
