# Task 12 — Model Import with Lightmap Export (GLB round-trip)

## Objective
Import GLB/GLTF → bake lightmaps → export model WITH baked lightmaps as new GLB. Enables "drop in model → bake → download lit model" workflow.

## Import

GLTFLoader (already available in Three.js):
- Load model
- xatlas auto-generates UV2 if not present
- Bake as normal

## Export

GLTFExporter writes baked scene back to GLB:
- Apply lightmaps to materials before export
- UV2 attribute preserved in geometry
- Lightmap textures embedded in GLB binary

Exported GLB contains: original geometry with UV2, materials with lightMap, lightmap textures as embedded images.

## Success Criteria
- Import GLB → bake → export → re-import → lightmaps visible
- Round-trip preserves material colors, geometry, transforms
- Exported file size reasonable (lightmaps compressed as JPEG/PNG inside GLB)

## Dependencies
- Task 06 (clean API)
- Convenience feature — can be deferred
