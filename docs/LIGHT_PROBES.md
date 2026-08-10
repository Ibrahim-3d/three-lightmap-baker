# Baked Light Probes

Status: package and playground integration reconciled and locally validated on
2026-08-10. Public npm publication is not approved.

## What is implemented

The classic browser baker now includes an end-to-end diffuse light-probe workflow:

- Regular three-dimensional probe-grid generation from baked scene bounds or an explicit `Box3`.
- Configurable target/maximum spacing, exact counts, padding, atlas sampling stride, fill passes, and a hard maximum-probe cap.
- Target world-space spacing is never enlarged to fit the maximum-probe cap;
  an over-limit layout is reported as an error.
- Counts are computed with `ceil(size / targetSpacing) + 1`; the resulting
  regular grid covers both bounds exactly, so actual per-axis spacing may be
  smaller than the target and is reported in generation diagnostics.
- A separate cyan preview represents requested grid positions only and cannot be
  mistaken for generated irradiance.
- RGB irradiance storage in `ProbeVolume`.
- Trilinear world-space interpolation.
- JSON serialization and restoration.
- Lightmap-derived probe generation using the existing position, normal, and final-lighting atlases.
- Chunked browser processing with progress and abort hooks.
- Six-neighbour diffusion for interior probes without direct surface samples.
- Colored instanced debug spheres.
- Fixed display-only `c / (1 + c)` debug tone mapping. Black maps exactly to
  black, and the mapping never touches stored or runtime values.
- Detailed source, projection, contribution, fill, irradiance-percentile, and
  spatial black-probe diagnostics.
- `ProbeController` lifecycle ownership in the playground.
- A dedicated **Probes** inspector tab.
- Generate, Clear, Show Probes, spacing, intensity, progress, demo, and animation controls.
- A moving white dynamic sphere that is excluded from static lightmap baking.
- An existing render-layer entry named **Light Probes** that hides ordinary scene renderables and shows the probe field.
- Optional `probeVolume` and probe settings inside Project JSON / `.3dl` version 1.
- Probe restoration when a project is loaded.
- Automatic probe cleanup on scene replacement and invalidation before a new classic bake.
- Physically based `MeshStandardMaterial` integration through `onBeforeCompile`.
- Probe irradiance is added to `reflectedLight.indirectDiffuse`; the emissive-channel MVP is no longer used.
- Diffuse probe energy respects the material diffuse BRDF and metallic workflow.
- Focused tests for grid generation, interpolation, JSON round-trip, PBR shader injection, project restoration, demo creation, and probe-only visibility.

No GitHub Actions workflow was added, changed, or manually dispatched for this work.

## Current algorithm

This implementation reuses the stable lightmap result instead of introducing another ray tracer.

For every bake group:

1. Read the world-position atlas.
2. Read the world-normal atlas.
3. Read the refined or raw final incoming-lighting atlas.
4. Sample atlas texels at the configured stride.
5. Move each valid surface sample slightly along its world normal.
6. Multiply incoming lighting by the sampled surface's linear material albedo
   to reconstruct its reflected diffuse contribution in the baker's normalized
   energy convention.
7. Distribute that RGB reflected contribution into the eight surrounding probes.
8. Weight the contribution by trilinear position and surface facing.
9. Normalize accumulated probe colors.
10. Diffuse valid colors into unsampled interior probes.
11. Use the volume average, or an explicit fallback color, for any remaining empty probes.

This creates a stable low-frequency RGB irradiance field for diffuse dynamic-object lighting. It is not yet directional spherical-harmonic lighting.

## Energy and BRDF convention

The textures use the baker's linear working color space, but their numeric values
follow its established normalized diffuse-energy convention rather than
calibrated SI radiometric units:

1. The final lightmap stores an albedo-free incoming-light field for Three.js's
   `lightMap` irradiance input. The delivered value already includes bake-time
   direct/GI intensity, AO, the composite contrast curve, and refinement, so it
   should be understood as the baker's final light field rather than physical
   illuminance measured in SI units.
2. Probe projection multiplies that field once by the source surface's linear
   `material.color`. This reconstructs the source's reflected diffuse
   contribution. No additional source `1 / PI` is applied because the baker's
   cosine-weighted bounce estimator deliberately folds that factor into its
   existing normalized convention.
3. `ProbeVolume.irradiance` stores the interpolatable RGB field unchanged apart
   from explicit generation intensity, diffusion, and documented fallback.
4. Runtime binding samples that stored field. Generated values are non-negative;
   the binding defensively clamps invalid negative input to zero, applies the
   explicit runtime intensity (default `1`), and otherwise uploads it unchanged.
   An optional caller-specified `maxIrradiance` can impose an upper clamp, but
   there is no implicit upper clamp.
5. The target `MeshStandardMaterial` applies its own diffuse response exactly
   once as `material.diffuseColor * RECIPROCAL_PI`. The target base color is not
   baked into the stored probe field.

Therefore source and target albedo are separate, intentional operations. There
is no double target albedo and no double Lambert `1 / PI` factor. Projection uses
weighted averages, diffusion averages neighbors, and fallback uses an average;
none can exceed the contributing range for physically valid source albedo in
`[0,1]`. Only explicit generation/runtime intensity can amplify it.

## Fill validity versus physical darkness

`emptyBeforeFill` and `emptyAfterFill` describe structural population: whether
a probe received a source contribution or a diffused neighbor value.
`fallbackFilled` records the remaining structurally empty probes assigned the
documented fallback. `populatedEffectivelyBlack` separately counts valid or
diffused values at or below `blackThreshold`; `fallbackEffectivelyBlack` does
the same for fallback-assigned values. A valid probe can therefore be physically
black, and final black count need not equal the pre-fallback empty count.

## Playground workflow

1. Open a scene in the playground.
2. Run a normal Draft, Preview, Production, or Final lightmap bake.
3. Open the **Probes** inspector tab.
4. Set target probe spacing and the maximum probe count.
5. Select **Generate Probes**.
6. Toggle **Show Probes** to inspect the colored probe grid in the normal combined view.
7. Enable **Demo sphere** and **Animate demo** to see the dynamic object move through the field.
8. Select the **Light Probes** render layer to isolate the probe field.
9. Save the project. Probe data and settings are written into the same Project JSON / `.3dl` payload.
10. Load the project. The probe grid, controls, debug view, and demo state are restored without regenerating probes.

Starting a new classic bake clears the old probe volume because it was derived from the previous static-lighting result.

## Public API

```ts
import { generateProbeVolume, createProbeDebugView, bindProbeLighting } from 'three-lightmap-baker';

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

// Use a unique or cloned material when separately binding multiple moving meshes.
const binding = bindProbeLighting(dynamicMesh, volume);

function animate() {
  requestAnimationFrame(animate);
  binding.update();
  renderer.render(scene, camera);
}
```

A complete package-level helper remains available in `examples/light-probes.ts`.

## PBR material integration

`ProbeLightingBinding` preserves the original `MeshStandardMaterial` and installs a shader hook. Each update:

1. Samples the probe volume at the mesh world position.
2. Uploads the interpolated RGB irradiance through a stable shader uniform,
   without an implicit clamp.
3. Adds the value to `reflectedLight.indirectDiffuse`.
4. Multiplies by `material.diffuseColor * RECIPROCAL_PI` by default.

This keeps probe light inside the Three.js standard material pipeline, including:

- Base color.
- Metalness.
- Roughness and the normal direct/specular workflow.
- Ambient occlusion processing.
- Fog.
- Tone mapping and output conversion.

Calling `dispose()` restores the material’s original `onBeforeCompile` and `customProgramCacheKey` functions.

## Project persistence

Project version remains `1`. The new fields are optional for backward compatibility:

```ts
{
  version: 1,
  // existing project fields...
  options: {
    // existing options...
    probeSpacing,
    probePadding,
    probeIntensity,
    probeSampleStride,
    probeFillIterations,
    probeMaxProbes,
    probeShow,
    probeDemoEnabled,
    probeDemoAnimate
  },
  probeVolume: {
    version: 1,
    bounds: { min: [x, y, z], max: [x, y, z] },
    counts: [nx, ny, nz],
    irradiance: number[]
  }
}
```

Older project files without `probeVolume` continue to load normally.

## Manual validation

Run locally after pulling `master`:

```bash
git pull
corepack enable
pnpm install
pnpm run typecheck
pnpm run typecheck:examples
pnpm run test:probes
pnpm run build:package
pnpm run dev
```

Then perform the visual validation:

1. Load `cornell.advanced`.
2. Run a Draft or Preview bake.
3. Open **Probes** and generate a field using spacing around `0.5` to `0.8` world units.
4. Confirm probes near the red and green walls inherit the expected color bleed.
5. Enable and animate the white demo sphere.
6. Confirm it transitions smoothly between the colored regions.
7. Confirm the material remains a standard PBR material and its emissive color is not modified.
8. Select the **Light Probes** render layer and confirm normal scene renderables disappear.
9. Return to **Combined** and confirm original visibility is restored.
10. Save and reload the project; confirm probe count, debug view, demo settings, and colors return.
11. Start a new lightmap bake and confirm the old probe field is cleared.
12. Check the browser console and WebGL error state.

## Remaining limitations

- The stored field is RGB diffuse irradiance, not directional SH9 irradiance.
- The field is generated from baked surface atlases, not direct per-probe cubemap or ray capture.
- Probe generation requires GPU texture readback and remains browser/WebGL-based.
- Runtime sampling is currently one sample at the mesh origin plus an optional offset; large objects do not yet sample multiple points.
- A shared material should not be independently bound to multiple meshes without cloning it first.
- Probe-volume JSON can become large at high probe counts because irradiance is currently stored as number arrays rather than a compact binary payload.
- Static source albedo currently uses one solid `material.color` per mesh.
  `material.map` and geometry material groups are unsupported in both the
  baker's shared per-triangle material lookup and probe projection. The first
  architectural probe showcase must therefore use solid-color static meshes.
- Follow-up task: preserve material-slot identity and UVs in the merged BVH,
  sample `material.color * material.map` consistently for bake bounces, retain a
  matching base-color atlas per bake group for primary probe projection, and
  add map/material-group energy-ratio tests before lifting the showcase gate.
- Larger architectural-scene quality, leakage, and performance remain to be
  measured; Cornell validation alone does not establish those properties.
- SH9, visibility/occlusion data, relocation, per-probe validity, and reflection probes remain future upgrades rather than requirements for this completed RGB diffuse implementation.
