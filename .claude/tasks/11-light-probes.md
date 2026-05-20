# Task 11 — Light Probe Generation and Export

**Status: ⏸ PARKED 2026-05-21.** Reopen when (a) a consumer ships dynamic
geometry that needs indirect lighting, OR (b) PT-vs-classic canonical
sampler decision resolves. Math + API choice below remain correct on
resurrection; sampler dependency note in `## Dependencies` needs a refresh
(was written pre-monorepo, references the old classic-baker Task 04 path).
See progress.md Session 17 for rationale.

## Objective
Generate spherical harmonics (SH) light probes at specified positions. Dynamic (moving) objects sample these probes to receive approximate indirect lighting without lightmaps.

## What Light Probes Are

A probe stores "what does lighting look like from this point" as 9 SH coefficients × 3 color channels = 27 floats. Dynamic objects at position P sample nearest probes and blend their SH data to approximate ambient illumination.

Three.js has built-in THREE.LightProbe and THREE.SphericalHarmonics3.

## Approach

1. User specifies probe positions or auto-generates a grid:
   - min/max corners + [X, Y, Z] subdivisions

2. For each probe position, trace N rays in ALL directions (full sphere, not hemisphere — probes need omnidirectional data).

3. Accumulate radiance per direction into SH coefficients using THREE.SphericalHarmonics3.

4. Output: array of THREE.LightProbe objects positioned in the scene.

## BakeResult Addition

  probes: THREE.LightProbe[]  // positioned in scene

Usage: result.probes.forEach(probe => scene.add(probe))
Dynamic objects automatically receive SH lighting via Three.js's probe system.

## Success Criteria
- Place a dynamic (non-baked) cube inside baked Cornell Box
- Cube receives red tint on left side, green tint on right side from probes
- Probe data persists after lightmap disposal
- Probe grid visualizable as debug spheres

## Dependencies
- Task 04 (same ray tracing infrastructure)
- This is a v2 feature for Atelier — can be deferred if time is tight
