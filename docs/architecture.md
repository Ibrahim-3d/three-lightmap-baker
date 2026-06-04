# Architecture — Three Lightmap Baker

Current as of 2026-06-04.

## Repository layout (relevant paths)

```text
apps/playground/                    Live browser demo/editor
packages/baker-classic/src/         Classic lightmap baker library
  LightmapBaker.ts                  Public entrypoint (constructor + bake orchestration)
  bake/                             Pipeline orchestration + result lifecycle
  atlas/                            UV2 generation + UV-space rasterization
  lightmap/                         Path-traced passes, AO, composite, refinement
  gpu/                              Capability detection + timeout defaults
  utils/                            Geometry/material extraction + export helpers
docs/                               Product docs, status, roadmap
```

## Pipeline (classic baker)

1. **Validation + capability detection**
   - Validate options and resolve timeout-protection defaults from GPU tier.
2. **Mesh partitioning**
   - Resolution mode or density mode (`texelsPerMeter`) with per-mesh overrides.
3. **UV unwrap**
   - `xatlas-three` generates/updates UV2 charts.
4. **Shared geometry phase**
   - Merge geometry, build shared `MeshBVH`, extract per-triangle materials, build material textures.
5. **Per-group bake**
   - Pass 1: rasterize UV-space position/normal textures.
   - Pass 2: progressive GI path tracing (direct + indirect accumulators) + standalone AO pass.
   - Composite pass combines direct/indirect/AO for live preview.
6. **Refinement**
   - Dilation and optional bilateral denoise.
7. **Result assembly**
   - Stable `LightmapBakeResult` with `apply/export/dispose`, AO refresh/rebake hooks, and group internals.

## Public API shape

`packages/baker-classic/src/LightmapBaker.ts` supports:

- `new LightmapBaker(renderer, options?)` (explicit renderer injection)
- `new LightmapBaker({ renderer, ...options })` (clean config style)

A renderer is required before calling `bake()`.

## Headless status

- Current implementation is **WebGL browser-first**.
- True Node.js headless baking is **not yet implemented**.
- Existing architecture keeps renderer ownership explicit to enable a future adapter layer (offscreen/headless context providers) without changing bake-core interfaces.
