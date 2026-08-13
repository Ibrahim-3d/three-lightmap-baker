# Baked Light Probes

Three Lightmap Baker provides two probe runtimes for dynamic objects:

1. **Native Three.js `LightProbeGrid`** — preferred for v1.
2. **Legacy RGB `ProbeVolume`** — retained as an explicit fallback and diagnostic path.

## Preferred v1 architecture

```text
path-traced static lightmap bake
  -> completed lightmapped static scene
  -> captureLightmappedProbeGrid()
  -> Three.js LightProbeGrid
  -> GPU L2 spherical-harmonic volume
  -> native standard-material dynamic lighting
```

The native path is preferred because Three.js handles cubemap projection, L2 SH storage/interpolation and material integration on the GPU. It preserves directional low-frequency lighting rather than reducing each location to one RGB value.

The baker deliberately keeps probe generation separate from `LightmapBaker.bake()`. Applications that only need static lightmaps do not pay the cost of probe capture.

## Native package API

```ts
import {
  LightmapBaker,
  captureLightmappedProbeGrid,
} from 'lightmap-baker';

const baker = new LightmapBaker({
  renderer,
  resolution: 512,
  samples: 64,
  bounces: 2,
});

const result = await baker.bake(scene);
result.apply();

const { grid, stats, descriptor } = captureLightmappedProbeGrid(
  renderer,
  scene,
  result,
  {
    spacing: 1.25,
    padding: 0.1,
    maxProbes: 1024,
    cubemapSize: 8,
    bounces: 0,
    lightMapIntensity: 3.2,
  },
);

console.log(stats.probeCount);
```

`grid` is added to the scene by the native Three.js capture path.

Use `bounces: 0` for normal baked-scene capture. The static lightmaps already contain indirect lighting; asking the probe capture to create another bounce layer would double-count the intended transport.

The demo/editor's intended native capture intensity default is **3.2**. Library integrations can set `lightMapIntensity` explicitly as shown above.

## What `captureLightmappedProbeGrid()` owns

The high-level helper is the recommended package entry point because correct capture requires more than calling `LightProbeGrid.bake()` directly.

It temporarily:

- resolves the completed lightmaps for baked static meshes;
- mounts the final/refined lightmaps;
- isolates those static meshes;
- hides live lights and non-static renderables;
- clears scene background/environment lighting;
- disables tone mapping and exposure transforms;
- updates scene transforms;
- runs native `LightProbeGrid` capture;
- restores scene, renderer, visibility and exact original material ownership in `finally`.

Shared material instances are handled safely during this temporary capture. If two meshes require different temporary lightmap/base-map states, the helper clones only the conflicting variant and restores the exact original `mesh.material` references afterward.

## Native options

The native grid accepts regular grid/bounds options plus capture settings.

Common options:

| Option | Purpose |
| --- | --- |
| `spacing` | Target world-space spacing used to derive grid counts |
| `counts` | Explicit `[x, y, z]` probe counts |
| `padding` | Expand generated bounds around the source |
| `maxProbes` | Runtime safety cap; native default is 1024 |
| `cubemapSize` | Per-probe capture cubemap resolution; hard maximum 64 |
| `near` / `far` | Probe capture clip planes |
| `bounces` | Native capture bounce count; use 0 for already-baked scenes |
| `lightMapIntensity` | Temporary static-lightmap intensity used during capture |

The package also has a hard native probe safety ceiling of 32,768 probes. Saved descriptors are validated independently against the caller/runtime cap before GPU allocation.

## Persistence

Native GPU probe textures are not serialized byte-for-byte.

Persist the returned descriptor:

```ts
const { descriptor } = captureLightmappedProbeGrid(renderer, scene, result, options);
```

After restoring the baked static lightmaps, recapture with:

```ts
import { captureLightmappedProbeGridFromJSON } from 'lightmap-baker';

const restored = captureLightmappedProbeGridFromJSON(
  renderer,
  scene,
  restoredBakeResult,
  descriptor,
  { maxProbes: 1024, lightMapIntensity: 3.2 },
);
```

Descriptor validation covers bounds, counts, probe-count limits, cubemap size, clip planes and bounce values before allocation.

## Low-level native API

Advanced integrations that intentionally own visibility/material/renderer capture policy can call:

```ts
captureNativeLightProbeGrid(renderer, scene, source, options?)
captureNativeLightProbeGridFromJSON(renderer, scene, descriptor, options?)
```

These functions capture the scene **exactly as currently configured**. Most package consumers should prefer the higher-level lightmapped capture helper.

---

## Legacy RGB `ProbeVolume`

The retained fallback uses the completed lightmap result instead of a second ray tracer.

Pipeline:

```text
final incoming-light lightmap
  × rasterized source material albedo
  -> reflected RGB samples
  -> regular 3D ProbeVolume
  -> trilinear interpolation
  -> custom MeshStandardMaterial indirect-diffuse binding
```

The source albedo convention is the same as textured GI transport:

```text
material.color × material.map
```

including geometry-group material selection and supported UV channels.

### Legacy generation

```ts
import {
  generateProbeVolume,
  createProbeDebugView,
  bindProbeLighting,
} from 'lightmap-baker';

const { volume, stats } = await generateProbeVolume(
  renderer,
  scene,
  result,
  {
    spacing: 0.65,
    padding: 0.1,
    maxProbes: 8192,
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

const debug = createProbeDebugView(volume);
scene.add(debug);

const binding = bindProbeLighting(dynamicMesh, volume);

function frame() {
  binding.update();
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
frame();
```

The legacy runtime samples at the mesh world origin plus an optional offset. If multiple moving meshes share one material and need separate legacy bindings, clone the material first.

## Legacy grid rules

Legacy grid generation uses a target maximum spacing rather than silently enlarging spacing to fit a cap.

For each axis:

```text
count = ceil(boundsSize / targetSpacing) + 1
actualSpacing = boundsSize / (count - 1)
```

Therefore:

- both bounds endpoints are covered exactly;
- actual spacing is never larger than the requested target;
- a layout exceeding `maxProbes` fails instead of silently lowering density.

The editor can show a separate cyan positions-only preview before generating actual irradiance. Preview positions are never persisted as lighting data.

## Legacy energy convention

The baker works in linear color space but uses a normalized diffuse-energy convention rather than calibrated SI radiometry.

1. The final lightmap represents the baker's albedo-free incoming-light field.
2. Legacy probe projection multiplies that once by the source surface's linear rasterized albedo (`material.color × material.map`).
3. No second source Lambert `1 / PI` is applied during projection because the baker's existing estimator convention already accounts for its diffuse-energy normalization.
4. `ProbeVolume` stores the interpolatable RGB field.
5. Runtime `ProbeLightingBinding` samples the field and adds it to `reflectedLight.indirectDiffuse`.
6. The target `MeshStandardMaterial` applies its own diffuse response through `material.diffuseColor * RECIPROCAL_PI`.

Source and target albedo are therefore separate operations. The target object's base color is not baked into the stored probe volume.

## Legacy fill and debug behavior

The legacy projection includes:

- weighted distribution to neighboring probes;
- normalization of accumulated samples;
- six-neighbor diffusion for structurally empty interior probes;
- documented fallback for any remaining empty probes;
- diagnostics separating structural emptiness from physically valid dark probes;
- display-only debug tone mapping `c / (1 + c)`.

Debug tone mapping never modifies stored or runtime irradiance values.

---

## Playground workflow

1. Bake the static scene.
2. Open **Probes**.
3. Keep **Three.js L2 SH (GPU)** selected for the preferred runtime.
4. Choose spacing/count and cubemap size.
5. Capture the native grid.
6. Toggle probe visualization if needed.
7. Enable the moving demo object to inspect spatial response.
8. Save the project if persistence is required.

The playground stores native descriptor/settings and restored baked lightmaps; on load it recaptures the GPU grid rather than attempting to serialize the internal GPU texture.

Starting a new static bake invalidates the old probe field because it was derived from the previous baked-lighting state.

## Current limitations

### Native

- Requires Three.js `WebGLRenderer`.
- Capture is synchronous in the upstream `LightProbeGrid` implementation.
- Dense grids can be expensive; validate capture time on target hardware.
- Three.js selects/provides probe-grid lighting using the object's spatial integration available in the upstream runtime; very large moving objects are not a substitute for visibility-aware DDGI.
- No probe relocation, visibility/occlusion field or reflection-probe system is included in v1.
- Equivalent `WebGPURenderer` native-grid support is outside the current Three.js path used by this package.

### Legacy

- Requires GPU texture readback during generation.
- Stores low-frequency RGB rather than directional SH.
- Dynamic binding samples once per object origin/offset.
- High probe counts can produce large JSON payloads.

### Shared material transport limits

The static bake/probe source convention supports solid material color plus base-color maps, including multi-material geometry and UV0/UV1 maps. `emissiveMap`, normal-map, roughness/metalness-map, alpha, vertex-color and custom-shader transport are not part of v1.

## Related docs

- [Getting Started](./GETTING_STARTED.md)
- [API Status](./API_STATUS.md)
- [Roadmap](./ROADMAP.md)
