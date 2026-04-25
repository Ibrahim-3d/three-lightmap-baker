# Glossary

Terms used in this codebase, defined precisely to prevent ambiguity across sessions.

| Term | Definition |
|---|---|
| **Lightmap** | A texture storing pre-computed lighting information, applied to a mesh via UV2. Sampled at runtime as a simple texture lookup — zero per-frame cost. |
| **UV2** | Second UV channel on a mesh geometry. UV0 is for tiling textures (albedo, normal maps). UV2 is for lightmaps — every surface point maps to a UNIQUE texel (no overlap allowed). |
| **BVH** | Bounding Volume Hierarchy. A tree structure that accelerates ray-scene intersection from O(n) to O(log n). Built by three-mesh-bvh from merged scene geometry. |
| **Bounce** | An indirect light path. Ray leaves surface A, hits surface B, light from B reflects back toward A modulated by B's albedo. N bounces = N indirect reflections. |
| **Color bleeding** | Visible effect of bounce lighting. A red wall's reflected light tints nearby white surfaces pink. THE visual indicator that GI is working. |
| **Cornell Box** | Standard GI test scene. Closed box: red left wall, green right wall, white floor/ceiling/back wall, white sphere, ceiling light. If the sphere shows red/green tints, GI is correct. |
| **MRT** | Multiple Render Targets. GLSL 3.0 feature: a single fragment shader writes to multiple textures simultaneously via `layout(location=N) out`. |
| **Gap flood / dilation** | Post-process that expands lightmap texels outward to cover UV island edges. Prevents black seams where UV unwrapping left gaps between islands. |
| **SH / Spherical Harmonics** | Mathematical basis for encoding directional lighting as ~27 numbers. Used by light probes to store omnidirectional illumination at a point. |
| **Texel** | A single pixel in a texture. Distinct from "pixel" (which is a screen pixel). One lightmap texel = one pre-computed lighting sample at a surface point. |
| **TDR** | Timeout Detection and Recovery. Windows kills GPU processes that take too long (~2s). Cause of the BSOD during the prior bake attempts. Prevented by batching GPU work. |
| **xatlas** | Library for automatic UV unwrapping. Generates non-overlapping UV2 layouts for arbitrary geometry. Used as WASM in browser via xatlas-three. |
| **Cosine-weighted hemisphere sampling** | Random direction sampling biased toward the surface normal. PDF = cos(θ)/π. Used because diffuse reflection is strongest along the normal. Cancels the cos(θ) term in the rendering equation, simplifying the Monte Carlo estimator. |
| **Next event estimation** | Instead of hoping a random ray hits a light source, explicitly cast a shadow ray toward each known light. Dramatically reduces noise for small bright lights. |
