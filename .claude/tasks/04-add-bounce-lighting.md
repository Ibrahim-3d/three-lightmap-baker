# Task 04 — Add Bounce Lighting (THE core feature)

## Context
This is the task that turns a direct-light-only baker into a GI baker.

## The Algorithm

Current (direct only):
```
For each texel (worldPos, normal):
  Cast ray in cosine-weighted hemisphere direction
  If ray hits geometry:
    Check if hit surface is emissive → add emissive contribution
    Check shadow toward light sources → add direct light
  Write radiance to lightmap
```

New (with 1-bounce GI):
```
For each texel (worldPos, normal):
  Cast ray in cosine-weighted hemisphere direction  
  If ray hits geometry:
    hitAlbedo = sampleAlbedoTexture(hitTriangleIndex)
    hitEmissive = sampleEmissiveTexture(hitTriangleIndex)
    
    // Direct: hit surface is itself a light
    radiance += hitEmissive
    
    // Indirect (1-bounce): from hit point, cast another ray
    hitPos = worldPos + dir * hitDistance
    hitNormal = faceNormal (flip if backface)
    bounceDir = cosineWeightedHemisphere(hitNormal)
    
    If bounceRay hits geometry:
      bounceEmissive = sampleEmissiveTexture(bounceTriangleIndex)
      radiance += hitAlbedo * bounceEmissive
      
      // Optional: 2nd bounce (adds ~50% more bake time, subtle improvement)
      // bounce2Albedo = sampleAlbedoTexture(bounceTriangleIndex)
      // ... trace third ray ...
      // radiance += hitAlbedo * bounce2Albedo * bounce3Emissive

  Write radiance to lightmap
```

## Key Math Notes

- Cosine-weighted hemisphere sampling has PDF = cos(θ)/π
- The Monte Carlo estimator with this PDF simplifies to: contribution = L_incoming (no explicit cos weighting needed — it cancels with the PDF)
- The bounce contribution is modulated by hitAlbedo because that's how diffuse reflection works — a red wall reflects red light
- Multiple bounces compound: each bounce multiplies by the hit surface's albedo, so energy naturally decays (albedo < 1 for all real materials)

## Implementation — Depends on Architecture (from Task 02)

### If ray tracing is GPU-based (fullscreen shader):
Add the bounce ray code directly in the fragment shader. You have access to the BVH via textures. Sample the albedo/emissive DataTextures by triangle index.

### If ray tracing is CPU-based (JS loop):
Add the bounce ray after the direct ray in the per-texel loop. Use `bvh.raycastFirst()` for the bounce ray. Read albedo/emissive from the DataTextures.

### If ray tracing is hybrid:
Follow the existing pattern. The bounce is just "trace another ray from the hit point" — same API, same BVH, different origin and direction.

## Cosine-Weighted Hemisphere Sampling (GLSL)

```glsl
vec3 cosineWeightedHemisphere(vec3 normal, inout float seed) {
  float u1 = rand(seed);
  float u2 = rand(seed);
  float r = sqrt(max(0.0, u1));
  float theta = 6.2831853 * u2;
  vec3 local = vec3(r * cos(theta), r * sin(theta), sqrt(max(0.0, 1.0 - u1)));
  
  vec3 up = abs(normal.y) < 0.999 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
  vec3 t = normalize(cross(normal, up));
  vec3 b = cross(normal, t);
  
  return normalize(local.x * t + local.y * b + local.z * normal);
}
```

## PRNG (GLSL)

```glsl
float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.yzx + 33.33);
  return clamp(fract((p.x + p.y) * p.z), 1e-5, 1.0 - 1e-5);
}

float rand(inout float seed) {
  seed = fract(seed * 747796.405 + 123.4567);
  return clamp(seed, 1e-5, 1.0 - 1e-5);
}
```

## Settings

Add to the bake options:
- `bounces: number` — default 1, max 4. Each bounce roughly doubles bake time.
- `samplesPerTexel: number` — default 64. More samples = less noise.

## Success Criteria — THE Cornell Box Test

After baking with bounces=1, samples=64:

1. Left side of white sphere shows visible RED tint (color bleeding from red wall)
2. Right side of white sphere shows visible GREEN tint (color bleeding from green wall)
3. Ceiling corners near red wall have faint red tint
4. Ceiling corners near green wall have faint green tint
5. Floor near red wall has faint red tint
6. Soft shadow under sphere (from AO/direct, should already work from baseline)

If ANY of 1-5 fail, the bounce implementation is wrong. Debug by:
- Visualizing only the bounce contribution (subtract the direct-only bake from the bounced bake)
- Checking if albedoTexture has correct colors (Task 03 verification)
- Logging a specific texel on the sphere's left side — its bounce rays should hit the red wall, bounce to ceiling light, return red × white = red

Screenshot → screenshots/04-bounce-gi.png

## Dependencies
- Task 01 (baseline works)
- Task 02 (architecture understood)  
- Task 03 (material textures available)
