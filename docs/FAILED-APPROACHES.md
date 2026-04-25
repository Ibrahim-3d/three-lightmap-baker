# Failed Approaches

Documenting what didn't work and why. This prevents future sessions from re-attempting known dead ends.

---

## F-001: Single-pass UV-space rasterization with inline path tracing

**What we tried:** Override gl_Position to rasterize in UV2 space, trace BVH rays in the same fragment shader, accumulate into HDR float render targets.

**Why it failed:**
1. `matrixWorldNeedsUpdate` — Three.js skips matrixWorld computation when matrixAutoUpdate=false and matrixWorldNeedsUpdate=false (default). Every mesh baked from identity transform. All 6 meshes produced identical lightmaps (confirmed via diagnostic: all meanR=0.149533).
2. R3F's render loop resets setRenderTarget(null) between frames, corrupting accumulation across yield points.
3. xatlas-web vertex reindexing produced broken topology — the struct layout was different from what we assumed.
4. DoubleSide rendering in UV space double-counts fragments with additive blending.
5. UV0→UV2 passthrough creates overlapping UV space for BoxGeometry (6 faces share [0,1]²) and SphereGeometry (longitude wrap).

**12 bugs total, 4 hours of debugging, 4 wrong diagnoses from Claude before identifying the matrixWorld issue.**

**Lesson:** Don't fight the renderer. If your shader needs to subvert gl_Position, matrixWorld, or the render target lifecycle, you're going to spend more time on integration bugs than on the actual feature.

## F-002: pmndrs/react-three-lightmap

**What we tried:** Evaluated using the existing R3F lightmap package.

**Why it failed:** Dead since 2022, pinned to R3F v8, uses hemicube method (32×32 framebuffer per texel averaged to one color). Quality ceiling too low for Atelier — no path tracing, no importance sampling, no proper BRDF.

## F-003: Using `texture2D` in GLSL 3.0

**What happened:** Shaders compiled on some drivers but failed on others.

**Fix:** GLSL 3.0 uses `texture()` not `texture2D()`. Always use `texture()`.
