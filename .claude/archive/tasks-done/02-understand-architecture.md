# Task 02 — Understand the Existing Architecture

## Objective
Read and document the existing codebase's architecture before modifying anything.

## Steps

1. Read every file in src/. Document:
   - What each file does (one sentence)
   - What data flows between files
   - Where the ray tracing happens
   - How the BVH is constructed
   - How materials/albedo/emissive are stored and looked up during ray tracing
   - How the lightmap texture is assembled from ray tracing results

2. Create a file `docs/architecture.md` with:
   - Data flow diagram (text-based)
   - List of all shader programs and what they do
   - List of all WebGL render targets and their lifecycle
   - The exact point in code where a bounce ray WOULD be added

3. Identify:
   - Does the ray tracer use three-mesh-bvh's JS API (CPU) or GPU shader raycasting?
   - Does it iterate texels on CPU or dispatch a fullscreen shader?
   - How are material properties (albedo color, emissive) passed to the ray tracing step?
   - Is there a per-triangle material lookup texture, or per-mesh uniform?

## Success Criteria
- docs/architecture.md exists and accurately describes the codebase
- The exact insertion point for bounce logic is identified with file + line number

## Files to Read
- ALL files in src/
- package.json (dependencies)
- README.md
