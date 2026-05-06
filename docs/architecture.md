# Architecture — Three Lightmap Baker

Current as of 2026-05-06 (post-S12). Source-of-truth is the code; this doc
exists to give a fast mental model. The pre-bounce baseline snapshot from
Task 02 is preserved at
[`.claude/archive/architecture-baseline-2026-04-25.md`](../.claude/archive/architecture-baseline-2026-04-25.md).

---

## 1. Layout

```
src/
├── lib/                       Public library (consumed by demo + future callers)
│   ├── LightmapBaker.ts       Orchestrator — entry point: LightmapBaker.bake(opts) → LightmapBakeResult
│   ├── index.ts               Public surface (types + helpers re-exports)
│   ├── errors.ts              BakeError + BakeErrorPhase
│   ├── AtlasViewer.ts         Debug viewer for per-atlas RTs
│   ├── atlas/
│   │   ├── generateAtlas.ts   xatlas-three integration; uv2 unwrap (single + multi-bin)
│   │   └── renderAtlas.ts     Pass-1 UV-space rasterization → positionTex + normalTex
│   ├── lightmap/
│   │   ├── Lightmapper.ts     Pass-2 driver — owns 2-MRT bounce RT, scissor tiling
│   │   ├── LightmapperMaterial.ts  GLSL3 ray-trace shader (direct + indirect bounce loop)
│   │   ├── AOMapper.ts        Pass-2b — AO ray pass (own RT, own ray budget)
│   │   ├── AOMaterial.ts      GLSL3 AO shader (stores raw normalized visibility)
│   │   ├── Composite.ts       View-time combine: (direct + indirect·gi) · aoRemap
│   │   ├── CompositeMaterial.ts    Composite shader (incl. AO remap + 1/1.1 contrast)
│   │   ├── Refinement.ts      Post-process: dilation passes + optional bilateral denoise
│   │   ├── DilationMaterial.ts     Chart-aware 3×3 fill
│   │   ├── Lights.ts          Scene → PackedLight[] → 4-wide DataTexture
│   │   └── TexelDensityMaterial.ts  Debug viz layer (checker tinted by texel density)
│   ├── gpu/
│   │   └── Capabilities.ts    detectGPUCapabilities(renderer) → tier + tile/budget defaults
│   ├── utils/
│   │   ├── GeometryUtils.ts   mergeGeometry (with meshIndex tag) + extractPerTriangleMaterials
│   │   ├── MaterialTextures.ts buildMaterialTextures (albedo + emissive DataTextures)
│   │   ├── Packing.ts         binPackMeshes — first-fit-decreasing density-aware packer
│   │   ├── Partition.ts       partitionByDensity / partitionByResolution
│   │   ├── Diagnostics.ts     WebGL-debug helper (banner/snap/measure/contextLossInfo)
│   │   └── exportLightmap.ts  PNG / EXR / raw export
│   ├── denoise/
│   │   └── DenoiseMaterial.ts  Bilateral kernel
│   └── types/                  Public type re-exports
│
└── demo/
    └── CornellBoxExample.ts   Demo app + Tweakpane UI. Currently runs its OWN bake
                               orchestration that predates LightmapBaker.bake();
                               migration to consume the public API is the open
                               Phase 3b/4 work (see .claude/progress.md).
```

---

## 2. Pipeline (LightmapBaker.bake)

```
                                 ┌─────────────────────────┐
                                 │  validateOptions(opts)  │
                                 └────────────┬────────────┘
                                              ▼
                              ┌────────────────────────────────┐
                              │  detectGPUCapabilities(rndr)   │
                              │  + resolveTimeoutProtection    │
                              │  + install webglcontextlost    │
                              └────────────┬───────────────────┘
                                           ▼
                              ┌────────────────────────────────┐
                              │  partition meshes by mode      │
                              │  • density: binPackMeshes      │
                              │  • resolution: per-mesh override│
                              └────────────┬───────────────────┘
                                           ▼
                              ┌────────────────────────────────┐
                              │  generateAtlas(es)  (xatlas)   │
                              │  → mesh.geometry.uv2           │
                              └────────────┬───────────────────┘
                                           ▼
                              ┌────────────────────────────────┐
                              │  mergeGeometry(allMeshes)      │
                              │   incl. meshIndex BufferAttr   │
                              │  + new MeshBVH(merged)         │
                              │  + extractPerTriangleMaterials │
                              │  + buildMaterialTextures       │
                              │  + collectLightsFromScene      │
                              │    (skips userData.lightmapIgnore)│
                              └────────────┬───────────────────┘
                                           ▼
                                  ╔════════════════════╗
                                  ║  for each group:   ║
                                  ╚═════════╤══════════╝
                                            ▼
                              ┌────────────────────────────────┐
                              │  Pass 1: renderAtlas(group)    │
                              │   → positionTex, normalTex     │
                              │   (25 dilation offsets)        │
                              └────────────┬───────────────────┘
                                           ▼
                              ┌────────────────────────────────┐
                              │  generateLightmapper(group)    │   ← MRT(2): direct, indirect
                              │  generateAOMapper(group)       │   ← own RT, own budget
                              │  runComposite(group)           │   ← created EARLY for live preview
                              └────────────┬───────────────────┘
                                           ▼
                              ┌────────────────────────────────┐
                              │  per-RAF runMappersWith        │
                              │       TimeoutProtection:       │
                              │   • renderTiled(maxFrameMs)    │
                              │   • adaptiveTileSize on stretch│
                              │   • composite.refresh()        │
                              │   • onFrame(BakeFrameInfo)     │
                              │   • abort on context-loss      │
                              └────────────┬───────────────────┘
                                           ▼
                              ┌────────────────────────────────┐
                              │  gl.finish()  ← S12: drain     │
                              │  pre-post-process queue        │
                              └────────────┬───────────────────┘
                                           ▼
                              ┌────────────────────────────────┐
                              │  runPostProcess(opt: dilate +  │
                              │   denoise) → refinement.texture│
                              └────────────┬───────────────────┘
                                           ▼
                                LightmapBakeResult {
                                  lightmaps: Map<Mesh, Texture>
                                  groups:    BakeGroupView[]
                                  refreshAO, rebakeAO,
                                  apply(), export(), dispose()
                                }
```

**Two-pass core (D-001).** Pass 1 rasterizes geometry into UV2 space to
materialize `worldPos` + `worldNormal` textures; Pass 2 ray-traces from those
stored positions. Each pass uses the renderer normally — no `gl_Position`
hacks, no matrixWorld surgery.

**Bounce loop is hand-unrolled** (`MAX_BOUNCES=4` define + runtime
`bounces` uniform). Per bounce: emissive direct, NEE shadow ray over all
lights, throughput multiply, Russian Roulette for `b ≥ 2` (D-005).

**AO is a separate pass** (D-010). Stores raw `t = clamp(dist/D, 0, 1)`;
`aoIntensity` / `aoExponent` remap is in CompositeMaterial (sub-ms view-time).
`ambientDistance` / `aoSamples` need fresh rays → `result.rebakeAO()`.

---

## 3. Key invariants

1. **`new MeshBVH(merged)` reorders `merged.index` in place.** Therefore
   `extractPerTriangleMaterials` MUST be called AFTER BVH construction. The
   per-vertex `meshIndex` `BufferAttribute` (added by `mergeGeometry`)
   survives the reorder because vertices aren't reordered, only indices.
   Reversing this order silently returns wrong albedos. See F-001 in
   FAILED-APPROACHES and the comment at the bake-call site.
2. **`mergeGeometry` order is preserved.** Both `mergeGeometry(meshes)` and
   `extractPerTriangleMaterials(merged, meshes)` walk `meshes` in input
   order, so `meshIndex` tags line up.
3. **`faceIndices.w` (not `.x`) is the triangle index.** Used by every
   `readTriangleMaterial(...)` call inside the shader.
4. **Cosine-weighted hemisphere sampling cancels the receiver-side cos.**
   Emissive contributions on indirect hits add `+= hitEmissive` with NO
   cosine factor. NEE contributions (shadow ray to a known light) DO add a
   cosine factor explicitly because that direction isn't drawn from the
   cosine distribution.
5. **`1/π` is intentionally dropped from the NEE BRDF** (D-006) so that the
   bounce term and the standalone direct loop sit at the same magnitude.
6. **`CompositeMaterial` applies a `pow(max(lit, 0), 1/1.1)` contrast curve**
   on every composite (D-011). All quantitative comparisons must account
   for this.
7. **`HalfFloatType` for the composite RT, `FloatType` for MRT bounce + AO**
   (D-014, D-015). The mismatch is intentional. HalfFloat MRT triggered a
   30× ANGLE D3D11 perf regression; Float composite triggered post-bake
   context loss on iGPUs lacking `OES_texture_float_linear`.
8. **The `USE_LIGHTMAP` shader variant must be pinned BEFORE the first
   post-bake render** (D-016). Demo does this with a 1×1 white dummy
   `lightMap` at intensity=0 on every mesh during scene construction.
   Setting `mat.lightMap=null` after a bake un-pins it and forces a
   ~2-second program compile on NVIDIA D3D11 — exceeds the Windows TDR
   watchdog.
9. **`gl.finish()` between sample loop and post-process** (D-014). Drains
   the queued tile draws explicitly so the first post-bake scene render
   doesn't trigger an implicit drain on top of program compile and
   composite-RT setup.
10. **`userData.lightmapIgnore = true` opts an object out of both the mesh
    collector and the light collector.** Use it on display-only lights /
    helpers / gizmo geometry that must NOT contribute to the bake.

---

## 4. Resource lifecycle

Every WebGL resource is owned by exactly one disposer. `LightmapBakeResult.
dispose()` walks all groups; each group disposes its atlas RTs, lightmapper,
AOMapper, composite, refinement, and per-tri material textures. Renderer
state mutations (autoClear, clearColor, scissor, render target) are wrapped
in `try/finally` so an exception cannot leave the renderer in a corrupted
state. Context-loss listeners are registered for the duration of `bake()`
and removed in `finally`.

Demo holds `bakeGroups: BakeGroup[]`, calling `disposeAllGroups()` on every
re-bake. Position/normal G-buffers from Pass 1 are also tracked + disposed
per group.

---

## 5. Public API summary

```ts
interface LightmapBakerOptions {
  scene: Scene;
  light?: LightOptions;          // fallback when scene has no real lights
  lightMapSize: number;
  texelsPerMeter?: number;       // > 0 → density mode (multi-atlas); else resolution mode
  perMesh?: Record<UUID, { resolution?: number; density?: number; exclude?: boolean }>;
  samples?, casts?, bounces?, ao?, denoise?, refinement?, hooks?,
  timeoutProtection?: { safeMode?, initialTileSize?, maxBatchMs?, maxFrameMs?, autoAdapt? };
}

interface LightmapBakeResult {
  lightmaps: Map<Mesh, Texture>;
  groups: ReadonlyArray<BakeGroupView>;     // per-group { meshes, resolution, textures: { direct, indirect, ao, composite, refinement, position, normal } }
  getGroupForMesh(mesh): BakeGroupView | null;
  refreshAO({ intensity?, exponent?, enabled? }): void;       // sub-ms view-time
  rebakeAO({ samples, distance, targetSamples }, hooks?): Promise<void>;  // AO-only re-bake
  apply(): void;
  export(opts): Promise<...>;
  dispose(): void;
}

interface BakeHooks {
  onProgress?(phase, percent): void;
  onFrame?(info: BakeFrameInfo): void;       // per-RAF, stable texture refs
}
```

See `src/lib/index.ts` for the full export surface and `src/lib/LightmapBaker.ts`
for inline JSDoc on every option.

---

## 6. Conventions

- TypeScript strict; no `any`. See CONTRIBUTING.md.
- GLSL 3.0 ES with MRT (D-003). `texture()` not `texture2D()`.
- Console logs: `[baker]` prefix, gated behind `import.meta.env.DEV`.
- Files ≤ 300 lines, functions ≤ 50, ≤ 5 project imports per file.
- File naming kebab-case for utilities, PascalCase for classes/materials.
- All renderer state mutations in `try/finally`; yield to browser every
  ~100 ms during long bakes.
