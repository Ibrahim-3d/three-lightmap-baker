# Failed Approaches

Documenting what didn't work and why. This prevents future sessions from re-attempting known dead ends.

---

## F-001: Single-pass UV-space rasterization with inline path tracing

**What we tried:** Override gl_Position to rasterize in UV2 space, trace BVH rays in the same fragment shader, accumulate into HDR float render targets.

**Why it failed:**
1. `matrixWorldNeedsUpdate` - Three.js skips matrixWorld computation when matrixAutoUpdate=false and matrixWorldNeedsUpdate=false (default). Every mesh baked from identity transform. All 6 meshes produced identical lightmaps (confirmed via diagnostic: all meanR=0.149533).
2. R3F's render loop resets setRenderTarget(null) between frames, corrupting accumulation across yield points.
3. xatlas-web vertex reindexing produced broken topology - the struct layout was different from what we assumed.
4. DoubleSide rendering in UV space double-counts fragments with additive blending.
5. UV0→UV2 passthrough creates overlapping UV space for BoxGeometry (6 faces share [0,1]²) and SphereGeometry (longitude wrap).

**12 bugs total, 4 hours of debugging, 4 wrong diagnoses from Claude before identifying the matrixWorld issue.**

**Lesson:** Don't fight the renderer. If your shader needs to subvert gl_Position, matrixWorld, or the render target lifecycle, you're going to spend more time on integration bugs than on the actual feature.

## F-002: pmndrs/react-three-lightmap

**What we tried:** Evaluated using the existing R3F lightmap package.

**Why it failed:** Dead since 2022, pinned to R3F v8, uses hemicube method (32×32 framebuffer per texel averaged to one color). Quality ceiling too low - no path tracing, no importance sampling, no proper BRDF.

## F-003: Using `texture2D` in GLSL 3.0

**What happened:** Shaders compiled on some drivers but failed on others.

**Fix:** GLSL 3.0 uses `texture()` not `texture2D()`. Always use `texture()`.

## F-004: `renderer.compile(scene, camera)` upfront to seed all shader variants

**What we tried (S12, 2026-05-06):** Investigating post-bake context loss on
NVIDIA D3D11 - the first `renderer.render` after assigning `lightMap` for the
first time on `MeshStandardMaterial` triggered a ~2 s program compile and
exceeded the Windows TDR watchdog. Tried calling
`renderer.compile(scene, camera)` once at scene init with the materials
preconfigured for every variant we'd need post-bake (USE_LIGHTMAP, etc.).

**Why it failed:** Made the problem WORSE - first post-bake render time went
from 2.2 s to 14 s. NVIDIA's D3D11 driver with parallel-shader-compile
DEFERS the actual GPU compile when given a batch of programs upfront, so the
five variants we requested all sat queued. The first real draw then waited
on ALL of them simultaneously - the watchdog window was now occupied by 5×
work instead of 1×.

**Lesson:** `renderer.compile` is not a magic warm-up button. On
parallel-compile drivers it just defers the work to the first draw. Pin
shader variants by mounting them on a real mesh and rendering an actual
frame BEFORE the GPU is busy with anything else. See D-016.

## F-005: `LinearMipMapLinearFilter` on the composite RT after bake completes

**What we tried (S12, 2026-05-06):** Composite RT was originally `FloatType`
with `LinearMipMapLinearFilter` + `generateMipmaps:true` (so the lightmap
could sample at any LOD when used as `MeshStandardMaterial.lightMap`). Bake
completion mounted the composite as `lightMap`; the next scene render did a
lazy regeneration of the full mipmap chain - ~21 MB of GPU work for a 1024²
Float RT.

**Why it failed:** Layered onto the program compile (F-004 / D-016) and the
queue backlog from the bake's tile draws, the simultaneous mipmap regen
pushed the GPU work past the Windows TDR watchdog → context loss.

**Fix:** Composite RT is now `HalfFloatType` + `LinearFilter` only, no
mipmaps. Lightmaps don't need mipmapped sampling at runtime (the surface is
sampled at base mip in the standard render path) and we never observed
visual artifacts from dropping the chain. See D-014.

**Lesson:** Don't pay for filtering features you don't actually sample. Each
"nice to have" RT flag has a setup cost that lands at the worst possible
moment (first render after asset load).
