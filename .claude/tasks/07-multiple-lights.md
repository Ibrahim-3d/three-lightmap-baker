# Task 07 — Multiple Lights, Light Types, and Light Color

## Objective
The baker currently only supports a single emissive mesh as a light source. Real scenes have multiple lights of different types and colors.

## Light Types to Support

1. **Emissive mesh** (already works) — any mesh with emissive material acts as area light
2. **Point light** — THREE.PointLight → treat as a small emissive sphere at the light's position. During ray tracing, add a direct-light sample toward the point light position (next event estimation / shadow ray). Color and intensity from the light object. Falloff: inverse-square.
3. **Directional light** — THREE.DirectionalLight → cast shadow ray in light direction for every texel. No falloff. Color and intensity from the light object.
4. **Spot light** — THREE.SpotLight → same as point but with cone angle falloff.
5. **Rect area light** — THREE.RectAreaLight → sample random point on the rectangle, cast shadow ray toward it. Most physically accurate for interior design (ceiling panels, windows).

## Implementation

Before the bake, collect all lights into a LightData array:

type: point | directional | spot | area
position, direction, color, intensity
spot-specific: angle, penumbra
area-specific: width, height, normal

Pack into a DataTexture and pass to the ray tracing shader. For each texel, sample EACH light with a direct shadow ray (next event estimation) in addition to random hemisphere sampling. This dramatically reduces noise for small bright lights.

## Success Criteria
- Cornell Box with THREE.PointLight instead of emissive mesh produces equivalent results
- Scene with 3 different-colored point lights shows correct color mixing
- Rect area light produces soft shadows proportional to light size
- No regression on emissive-mesh lighting

## Dependencies
- Task 04 (bounce lighting works)
