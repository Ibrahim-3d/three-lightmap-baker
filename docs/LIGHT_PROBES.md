# Baked Light Probes

Status: first package-level implementation committed on 2026-07-26.

## What is implemented

The classic browser baker now exposes a first usable diffuse light-probe pipeline:

- Regular three-dimensional probe-grid generation from scene bounds or an explicit `Box3`.
- Configurable spacing, exact counts, padding, and a hard maximum-probe safety cap.
- RGB irradiance storage in `ProbeVolume`.
- Trilinear world-space interpolation.
- JSON serialization and restoration.
- Lightmap-derived probe generation using the existing baked position, normal, and final-lighting atlases.
- Chunked browser processing with progress and abort hooks.
- Six-neighbour diffusion to fill interior probes that did not receive direct surface samples.
- Colored instanced debug spheres.
- A runtime binding that applies interpolated probe lighting to a moving `MeshStandardMaterial` object.
- Pure Playwright coverage for grid generation, interpolation, JSON round-trip, and dynamic-material binding.

No GitHub Actions workflow was added, changed, or manually dispatched for this work.

## Current algorithm

This first implementation deliberately reuses the stable lightmap result instead of introducing another ray tracer.

For every bake group:

1. Read back the world-position atlas.
2. Read back the world-normal atlas.
3. Read back the refined or raw final baked-lighting atlas.
4. Sample atlas texels at a configurable stride.
5. Move each valid surface sample slightly along its world normal.
6. Distribute its baked RGB radiance into the eight surrounding probes.
7. Weight the contribution by trilinear position and surface facing.
8. Normalize accumulated probe colors.
9. Diffuse valid colors into unsampled interior probes.
10. Use the volume average, or an explicit fallback color, for any remaining empty probes.

This produces a stable low-frequency RGB field suitable for diffuse dynamic-object lighting. It is not yet directional spherical-harmonic lighting.

## Public API

```ts
import {
  generateProbeVolume,
  createProbeDebugView,
  bindProbeLighting,
} from 'three-lightmap-baker';

const { volume, stats } = await generateProbeVolume(
  renderer,
  scene,
  lightmapBakeResult,
  {
    spacing: 0.75,
    padding: 0.1,
    maxProbes: 2048,
    bake: {
      sampleStride: 3,
      fillIterations: 5,
      intensity: 1,
    },
  },
  {
    onProgress: (progress) => console.log(progress),
  },
);

const debugView = createProbeDebugView(volume);
scene.add(debugView);

const binding = bindProbeLighting(dynamicMesh, volume);

function animate() {
  requestAnimationFrame(animate);
  binding.update();
  renderer.render(scene, camera);
}
```

A complete reusable helper is available in `examples/light-probes.ts`.

## Manual validation

Run these locally after pulling `master`:

```bash
corepack enable
pnpm install
pnpm run typecheck
pnpm run typecheck:examples
pnpm run test:probes
pnpm run build:package
```

Then perform the visual test:

1. Run the playground and load `cornell.advanced`.
2. Complete a Draft or Preview bake.
3. Generate a volume with spacing around `0.5` to `0.8` world units.
4. Add the debug view and confirm probes near the red and green walls inherit those colors.
5. Bind a dedicated white `MeshStandardMaterial` sphere or product object.
6. Move it from the red side to the green side.
7. Call `binding.update()` every frame.
8. Confirm the object receives a visible smooth color transition.
9. Confirm `binding.dispose()` restores the original emissive values.
10. Confirm `debugView.dispose()` releases its geometry and material.

## Important limitations

- This is an RGB diffuse field, not SH9 directional irradiance.
- Probe generation currently requires GPU texture readback and therefore remains browser/WebGL-based.
- The runtime binding uses the material emissive channel as the first integration path. It is appropriate for proving color transfer but is not the final physically based shader integration.
- Probe generation is implemented in the package but is not yet exposed through a dedicated playground inspector page.
- Probe data is JSON-serializable but is not yet embedded in the playground `.3dl` project file.
- The probe debug view is available through the API but is not yet part of the existing render-layer dropdown.
- Target-GPU visual quality and performance remain unverified until local manual testing is run.

## Next implementation order

1. Run local typecheck, example typecheck, focused probe test, and package build.
2. Correct any strict-TypeScript or Three.js r161 issues found locally.
3. Add a playground `ProbeController` that owns volume, debug view, bindings, and cleanup.
4. Add Generate Probes, Show Probes, spacing, intensity, and progress controls to the existing UI.
5. Add a dedicated moving white-sphere/product demonstration.
6. Persist `ProbeVolume.toJSON()` inside `.3dl` Project JSON v1 as an optional field.
7. Restore probe volumes and debug state on project load.
8. Add probe-only and final-composite render-layer presentation.
9. Replace emissive integration with a stable material shader hook that adds probe irradiance to indirect diffuse lighting.
10. Evaluate SH9 only after the RGB MVP is visually proven.
