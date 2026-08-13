# API Status — v1.0.0 Release Candidate

`lightmap-baker` is at the v1 npm release-candidate stage.

The public package is separated from the demo/editor code and produces ESM, CommonJS and TypeScript declaration outputs. The tested Three.js baseline is r185 and the peer dependency is intentionally constrained to:

```text
three >=0.185.1 <0.186.0
```

## Primary public API

```ts
import { LightmapBaker } from 'lightmap-baker';

const baker = new LightmapBaker(renderer, options);
// or
const baker = new LightmapBaker({ renderer, ...options });
// or
const baker = new LightmapBaker({ rendererAdapter, ...options });

const result = await baker.bake(scene, hooks);
```

The first bake initializes the packaged xatlas JavaScript/WASM assets automatically. `loadXAtlasThree()` remains public for eager preload or custom asset URLs.

## `LightmapBakeResult`

A successful bake returns a `LightmapBakeResult` with:

- `lightmaps`
- `groups`
- `bvh`
- `stats`
- `apply()`
- `export(pathOrName, { format })`
- `refreshAO(...)`
- `rebakeAO(...)`
- `dispose()`

The result owns its GPU resources. `dispose()` should be called when the bake result is no longer required.

Persistent application of lightmaps is safe for shared material instances: baked meshes receive package-owned variants when necessary, unbound meshes keep their original material objects, repeated identical `apply()` calls are idempotent, and disposal restores the original ownership layer.

## Native probe API

Preferred dynamic-object lighting API:

```ts
captureLightmappedProbeGrid(renderer, scene, lightmapBakeResult, options?)
captureLightmappedProbeGridFromJSON(
  renderer,
  scene,
  lightmapBakeResult,
  descriptor,
  options?,
)
```

`captureLightmappedProbeGrid()` owns the baked-scene capture policy:

- mounts final/refined lightmaps;
- isolates completed static renderables;
- hides live lights and non-static renderables;
- disables environment/background and display transforms;
- captures Three.js' native GPU L2 SH `LightProbeGrid`;
- restores every temporary scene/material/renderer mutation in `finally`.

The lower-level native capture API remains public for integrations that intentionally own capture-state policy:

```ts
captureNativeLightProbeGrid(renderer, scene, source, options?)
captureNativeLightProbeGridFromJSON(renderer, scene, descriptor, options?)
```

Native capture should normally use `bounces: 0` when sampling a scene whose static lightmaps already contain GI.

## Legacy probe API

The earlier RGB probe-volume runtime remains available as an explicit fallback:

```ts
generateProbeGrid(source, options?)
await generateProbeVolume(renderer, source, lightmapBakeResult, options?, hooks?)
await bakeProbeIrradianceFromLightmaps(renderer, source, volume, options?, hooks?)
createProbeDebugView(volume, options?)
bindProbeLighting(mesh, volume, options?)
ProbeVolume.fromJSON(json)
volume.sample(worldPosition)
volume.toJSON()
```

Native Three.js probes are preferred for v1 because they preserve directional L2 spherical-harmonic information and use Three.js' standard-material runtime integration.

## Implemented v1 capabilities

### Baking

- Browser/WebGL lightmap baking.
- Path-traced direct and indirect GI.
- 1–4 configurable bounce depth.
- BVH acceleration through `three-mesh-bvh`.
- Automatic lightmap UV generation through packaged xatlas JS/WASM.
- Multiple atlas/resolution groups.
- Supersampling/downscale workflow.
- Progressive accumulation hooks and cancellation.
- Context-loss guard and timeout protection.

### Material transport

- `MeshStandardMaterial.color`.
- Base-color `material.map` transport.
- UV0 (`map.channel = 0`).
- UV1 (`map.channel = 1`).
- Standard sRGB base-color decoding in the validated path.
- Geometry groups and material arrays.
- Per-triangle mesh/material-slot identity retained after BVH reordering.
- Shared-material-safe lightmap application.
- Solid emissive color.

The diffuse GI convention is:

```text
surface albedo = material.color × sampled material.map
```

### AO and refinement

- Standalone AO ray pass.
- View-time AO intensity/exponent/enabled updates.
- AO-only rebake without rerunning GI.
- Chart dilation.
- Bilateral denoising.
- Final composite/refinement textures.

### Export and inspection

- PNG export.
- EXR export.
- Raw Float32 export utility.
- Direct, indirect, AO, composite, position, normal and surface-albedo group textures.
- Shared bake BVH exposed for advanced integrations.

### Dynamic lighting

- Preferred native Three.js `LightProbeGrid` capture.
- GPU L2 SH probe atlas/interpolation through Three's WebGL material pipeline.
- Native helper/debug integration in the demo.
- Native capture descriptors and recapture on project restoration.
- Legacy RGB volume fallback with CPU trilinear interpolation and custom binding.

### Packaging

- Public library barrel under `packages/baker-classic`.
- Demo/editor UI kept outside the published library package.
- ESM output.
- CommonJS output.
- TypeScript declarations.
- `three` as a peer dependency.
- `@types/three`, `three-mesh-bvh` and `xatlas-three` as published dependencies.
- Self-contained xatlas JavaScript/WASM assets.
- Clean isolated tarball import/type smoke coverage.

## Current defaults

High-level `LightmapBaker` defaults:

| Option | Default |
| --- | ---: |
| `samples` | `96` |
| `castsPerFrame` | `5` |
| `bounces` | `1` |
| `resolution` | `1024` |
| `superSample` | `1` |
| `denoise` | `true` |
| GI enabled | `true` |
| AO enabled | `true` |

The demo/editor's intended native-probe capture intensity default is `3.2`.

## Validation model

The repository separates hardware-dependent GPU output assertions from software/headless CI checks.

GitHub CI validates the checks that are reliable on its headless renderer, including:

- TypeScript source/examples;
- lint and formatting;
- package/demo builds;
- bundle budgets;
- package dependency contract;
- ESM/CJS/declaration/tarball imports;
- scene preset asset loading;
- deterministic non-hardware material/probe/browser workflows.

Hardware-sensitive GI output tests remain part of the full local/release suite and are run on a real supported GPU before publication. The v1 release candidate has been manually/local validated on an NVIDIA RTX-class hardware path for:

- textured secondary-bounce transport;
- UV0 / UV1 / standard sRGB base-color transport;
- Cornell red/green GI output after preset switching;
- Gym / Desert / Backrooms scene loading.

## Known v1 limitations

- Requires WebGL 2 and `EXT_color_buffer_float`.
- Three.js r185 is the supported v1 line.
- Actual baking requires a browser/WebGL renderer; Node/headless baking is not shipped.
- `export()` triggers browser downloads instead of direct arbitrary filesystem writes.
- Base-color maps are resampled into a bounded GPU atlas with individual source tiles capped at 512 px.
- `emissiveMap` transport is not implemented.
- Normal, roughness, metalness, alpha, vertex-color and custom-shader inputs are outside the current diffuse GI transport model.
- Native probes require `WebGLRenderer`; equivalent upstream Three.js `WebGPURenderer` `LightProbeGrid` support is not available in the path used by this package.
- Native probe capture is synchronous.
- Native probe GPU textures are recaptured from persisted baked lightmaps/descriptors rather than serialized byte-for-byte.
- Legacy probe persistence can become large at high probe counts.

## Post-v1 direction

Potential later work, not release blockers:

- Node/headless renderer strategy.
- WebGPU bake/probe path when the required renderer/runtime capabilities are practical.
- `emissiveMap` and broader PBR transport parity.
- Visibility-aware/relocated probes and reflection probes.
- Optional real-time companion effects such as SSGI/GTAO, without replacing the baked-lighting core.
- Larger architectural showcase and additional launch-quality visual regression scenes.

See also:

- [Getting Started](./GETTING_STARTED.md)
- [Light Probes](./LIGHT_PROBES.md)
- [Roadmap](./ROADMAP.md)
- [Changelog](../CHANGELOG.md)
