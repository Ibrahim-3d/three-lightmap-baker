# Getting Started

This guide covers the public `lightmap-baker` package API for browser-based Three.js applications.

## Requirements

- Three.js `>=0.185.1 <0.186.0`
- `WebGLRenderer`
- WebGL 2
- `EXT_color_buffer_float`
- Hardware-accelerated browser graphics strongly recommended

Node/headless and WebGPU baking are not part of v1.

## Install

```bash
npm install lightmap-baker three
```

or:

```bash
pnpm add lightmap-baker three
```

## First bake

```ts
import * as THREE from 'three';
import { LightmapBaker } from 'lightmap-baker';

const renderer = new THREE.WebGLRenderer({ antialias: true });
const scene = new THREE.Scene();

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(6, 6),
  new THREE.MeshStandardMaterial({ color: 0x808080 }),
);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

const box = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0xd9d9d9 }),
);
box.position.y = 0.5;
scene.add(box);

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(3, 6, 2);
scene.add(light);

const baker = new LightmapBaker({
  renderer,
  resolution: 512,
  samples: 64,
  bounces: 2,
  denoise: true,
});

const result = await baker.bake(scene, {
  onProgress: (phase, progress) => {
    console.log(phase, `${Math.round(progress * 100)}%`);
  },
});

result.apply();
```

The baker automatically prepares lightmap UVs where needed, builds the shared BVH, traces lighting, runs AO/compositing/refinement, and returns a `LightmapBakeResult`.

## Scene preparation

The high-level baker targets visible Three.js meshes with standard-material-style surfaces.

For predictable results:

- use `MeshStandardMaterial` for bakeable surfaces;
- keep world transforms up to date before baking;
- make sure the scene contains at least one supported light or configured sky contribution;
- exclude objects that should not receive a lightmap using the integration's bake-ignore mechanism;
- keep dynamic objects outside the static lightmap set and light them with probes or live lights instead.

## Textured materials

Diffuse GI transport supports:

```text
material.color × material.map
```

for:

- UV0 (`map.channel = 0`);
- UV1 (`map.channel = 1`);
- geometry groups / material arrays;
- shared material instances.

The baker keeps per-triangle mesh/material identity aligned after BVH reordering, so a ray hit resolves the correct material group rather than defaulting to material slot 0.

### Current material-transport limits

The following are not yet part of the diffuse GI transport model:

- `emissiveMap`;
- normal maps;
- roughness/metalness maps;
- alpha transport;
- vertex colors;
- custom shader materials.

Solid emissive color is supported.

Base-color maps are packed into a GPU atlas with a current per-source-tile cap of 512 px.

## Bake result lifecycle

A `LightmapBakeResult` owns GPU resources.

### Apply

```ts
result.apply();
```

This mounts package-owned material variants where required. It is safe when baked and unbaked meshes share an original material object, and repeated identical `apply()` calls do not stack clone layers.

### Inspect

```ts
console.log(result.stats);
console.log(result.lightmaps);
console.log(result.groups);
```

Each group exposes direct, indirect, AO, composite, position, normal and surface-albedo textures for advanced tooling/debug views.

### AO-only updates

View-time AO controls do not require another ray bake:

```ts
result.refreshAO({
  intensity: 1.2,
  exponent: 1.5,
  enabled: true,
});
```

To retrace AO without rerunning GI:

```ts
await result.rebakeAO({
  samples: 8,
  distance: 0.5,
  targetSamples: 64,
});
```

### Export

```ts
await result.export('room-lightmap', { format: 'png' });
await result.export('room-lightmap-hdr', { format: 'exr' });
```

Browser export triggers downloads. It does not write directly to an arbitrary filesystem directory.

### Dispose

```ts
result.dispose();
```

Dispose the result when its lightmaps/BVH are no longer needed. This also restores original material ownership for package-created persistent material variants.

## Native light probes

Use probes when moving objects need baked-environment lighting.

```ts
import {
  LightmapBaker,
  captureLightmappedProbeGrid,
} from 'lightmap-baker';

const baker = new LightmapBaker({ renderer, resolution: 512, bounces: 2 });
const result = await baker.bake(scene);
result.apply();

const probes = captureLightmappedProbeGrid(renderer, scene, result, {
  spacing: 1.25,
  maxProbes: 1024,
  cubemapSize: 8,
  bounces: 0,
  lightMapIntensity: 3.2,
});

console.log(probes.stats);
```

`captureLightmappedProbeGrid()` is preferred over the low-level native capture API because it owns the baked-scene capture policy:

1. mounts completed lightmaps;
2. isolates baked static renderables;
3. hides live lights and dynamic objects;
4. disables environment/background and tone mapping for capture;
5. bakes the native Three.js `LightProbeGrid`;
6. restores all temporary state in `finally`.

The capture uses `bounces: 0` because the static lightmaps already contain GI.

For persistence, store `probes.descriptor` and recapture later with `captureLightmappedProbeGridFromJSON()` after the baked lightmaps have been restored.

See [LIGHT_PROBES.md](./LIGHT_PROBES.md) for native and legacy probe details.

## React Three Fiber

Use the underlying Three.js renderer and scene from `useThree()`:

```tsx
const { gl, scene } = useThree();

const baker = new LightmapBaker({
  renderer: gl,
  resolution: 512,
  samples: 64,
  bounces: 2,
});

const result = await baker.bake(scene);
result.apply();
```

Run expensive baking from an explicit user action rather than every React render.

## Cancellation

`bake()` accepts an `AbortSignal` through the hooks object:

```ts
const controller = new AbortController();

const promise = baker.bake(scene, {
  signal: controller.signal,
  onProgress: (phase, progress) => console.log(phase, progress),
});

// controller.abort();
await promise;
```

## Renderer adapters

For browser automation or custom renderer ownership:

```ts
import { createRendererAdapter, LightmapBaker } from 'lightmap-baker';

const adapter = createRendererAdapter(renderer, { label: 'automation-renderer' });
const baker = new LightmapBaker({ rendererAdapter: adapter });
```

The adapter boundary does not make Node/headless baking available by itself; it allows browser/offscreen-browser integrations to own renderer and context-loss wiring cleanly.

## Runtime capability check

```ts
import { getLightmapRuntimeCapabilities } from 'lightmap-baker';

const capabilities = getLightmapRuntimeCapabilities();
console.log(capabilities.runtime, capabilities.canBake);
```

## Troubleshooting

### Bake fails with `EXT_color_buffer_float` unavailable

The browser/GPU combination cannot allocate the HDR accumulation targets required by the current baker. Confirm hardware acceleration is enabled and inspect `chrome://gpu` in Chromium-based browsers.

### Bake is black

Check:

- the browser is using a real GPU rather than a software fallback;
- supported lights are present and enabled;
- the bakeable surfaces use supported standard materials;
- scene transforms are valid;
- the requested bake mode actually includes direct/GI contribution.

### Bake is very slow

Reduce, in this order:

1. resolution;
2. sample count;
3. supersampling;
4. bounce depth.

A 256–512 px lightmap with modest samples is a better first integration target than a Final-quality bake.

### Dynamic object is dark after static bake

Static lightmaps do not automatically illuminate moving objects. Generate a native light probe grid or keep appropriate live lights for dynamic geometry.

## Next references

- [README](../README.md)
- [API status](./API_STATUS.md)
- [Light probes](./LIGHT_PROBES.md)
- [Roadmap](./ROADMAP.md)
- [Changelog](../CHANGELOG.md)
