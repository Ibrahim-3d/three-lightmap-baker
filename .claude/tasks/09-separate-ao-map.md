# Task 09 — Separate AO Map Output

## Objective
Produce ambient occlusion as a SEPARATE grayscale texture from the color lightmap. AO maps are useful for: multiplying onto albedo in real-time, combining with different lighting, and denoiser input.

## Approach

During ray tracing, maintain TWO accumulators per texel:
1. radianceAccum — full color GI (existing)
2. aoAccum — grayscale occlusion (0 = occluded, 1 = open)

AO per sample:
- Cast hemisphere ray
- If hit and hitDistance < aoRadius → occluded (add 0)
- If miss or hitDistance >= aoRadius → open (add 1)

aoRadius is configurable (default ~2.0 units). Shorter = tight contact shadows. Longer = broad ambient darkening.

## Output Addition

BakeResult gains:
  aoMaps: Map<THREE.Mesh, THREE.Texture>  // grayscale

Apply via mesh.material.aoMap (Three.js samples aoMap from UV2 automatically).

## Success Criteria
- AO map shows darkened corners and contact shadows under sphere
- AO map is grayscale, no color information
- AO map is independent of light positions (geometry-only)
- Can be applied separately from color lightmap

## Dependencies
- Task 04 (runs during same bake pass)
