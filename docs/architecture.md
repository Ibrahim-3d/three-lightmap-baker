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

## Critical invariants (do not regress)

1. **BVH reorder + material extraction order**
   - `MeshBVH` reorders the merged **index buffer** in place during construction.
   - `extractPerTriangleMaterials()` MUST run **after** `new MeshBVH(merged)` so triangle indices match `faceIndices.w` in shaders.
   - Mesh identity is recovered via the per-vertex `meshIndex` attribute written by `mergeGeometry`, so the `meshes[]` order passed to both `mergeGeometry` and `extractPerTriangleMaterials` must stay stable.
2. **Shader variant pinning (USE_LIGHTMAP)**
   - At scene init, install a shared 1×1 dummy `lightMap` on every `MeshStandardMaterial` with `lightMapIntensity = 0`.
   - This forces the `USE_LIGHTMAP` shader variant to compile **before** any heavy GPU work; post-bake swaps the texture without setting `needsUpdate`, avoiding an expensive recompile/TDR.
3. **GPU queue drain**
   - After the per-group loop, `LightmapBaker.bake()` must explicitly call `gl.finish()` (see D-014) to drain queued work.
   - Skipping this causes the first post-bake scene render to trigger the drain and can TDR on NVIDIA D3D11.

## Public API shape

`packages/baker-classic/src/LightmapBaker.ts` supports:

- `new LightmapBaker(renderer, options?)` (explicit renderer injection)
- `new LightmapBaker({ renderer, ...options })` (clean config style)

A renderer is required before calling `bake()`.

## Headless status

- Current implementation is **WebGL browser-first**.
- True Node.js headless baking is **not yet implemented**.
- Existing architecture keeps renderer ownership explicit to enable a future adapter layer (offscreen/headless context providers) without changing bake-core interfaces.
