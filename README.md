<p align="center">
  <img src="https://raw.githubusercontent.com/Ibrahim-3d/three-lightmap-baker/master/screenshots/after-production-baked-combined.png" alt="Three Lightmap Baker production lightmap bake" width="760" />
</p>

<h1 align="center">Three Lightmap Baker</h1>

<p align="center">
  <strong>Browser-first path-traced lightmap baking for Three.js.</strong><br />
  Global illumination, automatic lightmap UVs, textured and multi-material bounce transport, AO, denoising, and native L2 SH light probes for dynamic objects.
</p>

<p align="center">
  <a href="https://Ibrahim-3d.github.io/three-lightmap-baker/"><strong>Live Demo</strong></a> ·
  <a href="https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/docs/GETTING_STARTED.md">Getting Started</a> ·
  <a href="https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/docs/LIGHT_PROBES.md">Light Probes</a> ·
  <a href="https://github.com/Ibrahim-3d/three-lightmap-baker/issues">Issues</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Three.js-r185-black?logo=threedotjs" alt="Three.js r185" />
  <img src="https://img.shields.io/badge/WebGL-2-990000?logo=webgl" alt="WebGL 2" />
  <img src="https://img.shields.io/badge/TypeScript-typed-3178c6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License" />
</p>

## Install

```bash
npm install three-lightmap-baker three
```

```bash
pnpm add three-lightmap-baker three
```

### Compatibility

- **Three.js:** `>=0.185.1 <0.186.0`
- **Renderer:** `WebGLRenderer`
- **Browser:** WebGL 2 with `EXT_color_buffer_float`
- **TypeScript:** declarations are included
- **Node/headless baking:** not supported yet; baking currently requires a browser WebGL context

The package ships its xatlas JavaScript/WASM assets, so normal UV generation does not depend on a third-party CDN.

---

## Minimal bake

```ts
import * as THREE from 'three';
import { LightmapBaker } from 'three-lightmap-baker';

const renderer = new THREE.WebGLRenderer({ antialias: true });
const scene = new THREE.Scene();

const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0xffffff }),
);
scene.add(mesh);

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(3, 5, 2);
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
    console.log(`${phase}: ${Math.round(progress * 100)}%`);
  },
});

result.apply();

// Later, when the bake is no longer needed:
result.dispose();
```

`result.apply()` mounts the baked atlas textures on the baked meshes while preserving shared-material ownership safely.

---

## What it supports

- **Path-traced baked GI** with 1–4 configurable bounce depth.
- **Automatic lightmap UV generation** with packaged xatlas JS/WASM.
- **GPU BVH traversal** through `three-mesh-bvh`.
- **Textured diffuse transport** using `material.color × material.map`.
- **UV0 and UV1 base-color maps** (`map.channel` 0 and 1).
- **Multi-material geometry** with correct per-triangle geometry-group material lookup after BVH reordering.
- **Shared material instances** without leaking one mesh's baked lightmap onto another mesh.
- **Multiple lightmap groups / resolutions** and supersampling.
- **Direct, indirect and AO layers** with post-bake compositing.
- **Standalone AO rebake** without rerunning GI.
- **Chart dilation and bilateral denoising**.
- **PNG / EXR / raw lightmap export utilities**.
- **Native Three.js `LightProbeGrid` capture** for dynamic standard-material objects.
- **Legacy RGB probe volumes** as an explicit fallback.
- **ESM, CommonJS and TypeScript declarations**.

---

## Textured and multi-material GI

The baker's diffuse GI transport resolves the hit triangle after BVH construction, selects the correct material slot from geometry groups, interpolates the source UV barycentrically, and evaluates:

```text
surface albedo = material.color × sampled material.map
```

Supported for GI transport:

| Material input | Status |
| --- | --- |
| `MeshStandardMaterial.color` | Supported |
| `MeshStandardMaterial.map` | Supported |
| `map.channel = 0` / UV0 | Supported |
| `map.channel = 1` / UV1 | Supported |
| Material arrays / geometry groups | Supported |
| Solid emissive color | Supported |
| `emissiveMap` | Not yet |
| Normal / roughness / metalness maps in GI transport | Not yet |
| Vertex colors / alpha transport / custom shaders | Not yet |

Base-color maps are resampled into a bounded GPU atlas for ray-hit lookup. Individual source tiles are currently capped at **512 px**.

---

## Dynamic objects with native light probes

Static lightmaps and dynamic lighting are separate on purpose. Bake the static scene first, then capture its finished appearance into Three.js' native GPU L2 spherical-harmonic probe grid:

```ts
import {
  LightmapBaker,
  captureLightmappedProbeGrid,
} from 'three-lightmap-baker';

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

// captureLightmappedProbeGrid adds probes.grid to the scene.
// Standard Three.js materials can then receive the native probe lighting.
```

The high-level capture helper temporarily mounts the completed lightmaps, hides live lights and non-static renderables, disables environment/background and display transforms, performs the capture, and restores scene/material/renderer state even if capture fails.

Use `captureLightmappedProbeGridFromJSON()` to recapture a saved native-grid descriptor from restored baked lightmaps.

See [docs/LIGHT_PROBES.md](https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/docs/LIGHT_PROBES.md) for the full native and legacy probe APIs.

---

## `LightmapBakeResult`

A successful `bake()` returns a `LightmapBakeResult` that owns the bake's GPU resources.

```ts
const result = await baker.bake(scene);
```

Important members:

| API | Purpose |
| --- | --- |
| `result.lightmaps` | `Map<Mesh, Texture>` of final per-mesh lightmaps |
| `result.groups` | Direct / indirect / AO / composite / position / normal / albedo textures per atlas group |
| `result.bvh` | Shared bake BVH for advanced integrations |
| `result.stats` | Bake statistics and timing |
| `result.apply()` | Mount final lightmaps on baked meshes |
| `result.export(name, { format })` | Browser download of PNG / EXR / raw output |
| `result.refreshAO(...)` | Change AO look without tracing again |
| `result.rebakeAO(...)` | Recompute AO without rerunning GI |
| `result.dispose()` | Restore package-owned material clones and dispose GPU resources |

### Export

```ts
await result.export('room-lightmap', { format: 'png' });
await result.export('room-lightmap', { format: 'exr' });
```

Browser builds trigger downloads; `export()` does not write directly to arbitrary filesystem paths.

---

## Constructor styles

```ts
const baker = new LightmapBaker(renderer, {
  resolution: 512,
  samples: 64,
  bounces: 2,
});
```

or:

```ts
const baker = new LightmapBaker({
  renderer,
  resolution: 512,
  samples: 64,
  bounces: 2,
});
```

Advanced browser/offscreen integrations can inject a renderer adapter:

```ts
import { createRendererAdapter, LightmapBaker } from 'three-lightmap-baker';

const adapter = createRendererAdapter(renderer, { label: 'my-renderer' });
const baker = new LightmapBaker({ rendererAdapter: adapter });
```

---

## Defaults

Current high-level baker defaults:

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

For interactive tools, start lower and increase quality after the workflow is stable.

---

## React Three Fiber

The baker is renderer-agnostic at the framework level; it needs the underlying Three.js `WebGLRenderer` and scene. In R3F, obtain them from `useThree()` and run the bake from a user action.

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

---

## Runtime requirements and limitations

- Requires **WebGL 2** and `EXT_color_buffer_float`.
- Three.js support is intentionally constrained to **r185** for v1.
- Hardware-accelerated Chrome/Edge is strongly recommended for production baking.
- Very large atlases, high sample counts and high bounce counts can trigger browser/GPU timeout behavior on weaker devices.
- The diffuse GI material model does not yet transport `emissiveMap`, normal, roughness, metalness, alpha, vertex-color or custom-shader effects.
- Native probes currently require `WebGLRenderer`; equivalent `WebGPURenderer` support is not available in the upstream Three.js `LightProbeGrid` path used here.
- Native probe capture is synchronous.
- Node.js/headless baking and WebGPU baking are not part of v1.

For runtime capability checks:

```ts
import { getLightmapRuntimeCapabilities } from 'three-lightmap-baker';

console.log(getLightmapRuntimeCapabilities());
```

---

## Performance baseline

Measured on the committed `cornell.advanced` scene using installed Chrome + ANGLE D3D11 on an RTX 3050 Ti Laptop GPU:

| Preset | Resolution | Effective samples | Bounces | Bake time |
| --- | ---: | ---: | ---: | ---: |
| Draft | 256 | 128 spp | 2 | 4.63 s |
| Preview | 512 | 480 spp | 2 | 5.05 s |
| Production | 1024 | 1536 spp | 2 | 36.48 s |
| Final | 2048 | 4096 spp | 2 | 408.7 s |

These are reference measurements, not universal performance guarantees.

---

## Development

```bash
git clone https://github.com/Ibrahim-3d/three-lightmap-baker.git
cd three-lightmap-baker
corepack enable
pnpm install
pnpm dev
```

Useful checks:

```bash
pnpm run typecheck
pnpm run test:material-gi
pnpm run test:probes
pnpm run test:api-import
pnpm run release:check
```

`release:check` includes hardware-sensitive WebGL tests and should be run on a real supported GPU before publishing. GitHub's headless CI separately runs the browser checks that are reliable on its software renderer.

---

## Documentation

- [Getting Started](https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/docs/GETTING_STARTED.md)
- [Light Probes](https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/docs/LIGHT_PROBES.md)
- [API Status & support matrix](https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/docs/API_STATUS.md)
- [Roadmap](https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/docs/ROADMAP.md)
- [Changelog](https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/CHANGELOG.md)

---

## Why this project exists

Three.js scenes are increasingly procedural, configurable and generated at runtime. For those workflows, "open Blender and rebake" is not always a viable pipeline.

Three Lightmap Baker keeps the lighting workflow inside the Three.js application: generate lightmap UVs, bake static GI in the browser, apply/export the atlases, and optionally capture native probes for moving objects.

It is intended for configurators, architectural visualization, procedural scenes, digital twins, AI-authored 3D environments and other applications where Three.js is the source of truth.

## License

MIT. See [LICENSE](https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/LICENSE) and [THIRD_PARTY_LICENSES.md](https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/THIRD_PARTY_LICENSES.md).