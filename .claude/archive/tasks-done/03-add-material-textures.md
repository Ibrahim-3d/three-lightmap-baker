# Task 03 — Add Per-Triangle Albedo and Emissive Material Textures

## Context
Bounce lighting requires knowing the ALBEDO (surface color) at each ray hit point. When a ray hits the red wall, the bounce contribution is `albedo_red × incoming_light`. Without per-triangle albedo data available during ray tracing, bounces can't work.

The existing baker may only have emissive data (to identify light sources). We need both albedo AND emissive as data textures that the ray tracing step can sample.

## Approach

Build two DataTextures (same pattern as three-gpu-pathtracer's material packing):

```
albedoTexture: DataTexture (size: ceil(sqrt(totalTriangles)) × ceil(sqrt(totalTriangles)))
  - Each texel = one triangle's albedo color (RGB)
  - Indexed by triangle index in the merged BVH geometry

emissiveTexture: DataTexture (same size)  
  - Each texel = one triangle's emissive color (RGB)
  - Triangles belonging to emissive meshes have non-zero values
  - All others are (0, 0, 0)
```

## Steps

1. Read docs/architecture.md from Task 02 to find how the BVH merges geometry
2. Walk all meshes in scene-traverse order (same order as BVH construction)
3. For each mesh, for each triangle:
   - Read the mesh's material color → store in albedoTexture at triangle's global index
   - Read the mesh's emissive color → store in emissiveTexture at triangle's global index
4. Pass both textures as uniforms to the ray tracing shader/step
5. Verify: log the albedo of triangle index 0, confirm it matches the first mesh's material color

## Handling Material Types

- MeshStandardMaterial: albedo = .color, emissive = .emissive × .emissiveIntensity
- MeshBasicMaterial: albedo = .color, emissive = (0,0,0)
- MeshPhysicalMaterial: same as Standard
- ShaderMaterial: skip (warn in console)
- Material arrays: use the material for each face's materialIndex

## Success Criteria
- albedoTexture has correct colors per triangle (red wall triangles = red, etc.)
- emissiveTexture has non-zero values only for the ceiling light mesh
- Both textures are accessible in the ray tracing step
- Existing direct lighting still works (no regression)

## Dependencies
- Task 02 completed (need architecture understanding)
