# API Status — v1.1.0

This document describes the public browser-local WebGL package maintained in this repository. The repository is the original open-source LightBaker implementation; next-generation hosted/backend development is outside this repository.

## Renderer contract

- Three.js: `>=0.185.1 <0.186.0`
- Required renderer: `THREE.WebGLRenderer`
- Required graphics API: WebGL 2
- Required extension: `EXT_color_buffer_float`
- `THREE.WebGPURenderer`: **unsupported**
- `WebGPURenderer({ forceWebGL: true })`: **unsupported**
- Node/headless baking: **not provided by this package**

The renderer-adapter API exists for browser/offscreen-browser ownership and testing. It does not make the bake pipeline renderer-neutral.

## Bake-material contract

Bake targets are meshes using `MeshStandardMaterial` or `MeshPhysicalMaterial`.

Supported diffuse transport:

- `material.color`
- base-color `material.map`
- UV0 (`map.channel = 0`)
- UV1 (`map.channel = 1`)
- geometry groups and material arrays
- shared material instances
- solid emissive color

The diffuse GI convention is:

```text
surface albedo = material.color × sampled material.map
```

Not part of the supported transport contract:

- `ShaderMaterial` / `RawShaderMaterial`
- node/TSL materials and arbitrary custom shader logic
- `emissiveMap`
- normal/displacement maps in GI transport
- roughness/metalness maps in GI transport
- alpha/cutout/transparent transport
- transmission
- vertex colors

Some unsupported mapped/PBR features are treated approximately as opaque diffuse transport and are surfaced by scene preflight where possible.

## Primary API

```ts
import { LightmapBaker, preflightBakeScene } from 'lightmap-baker';

const issues = preflightBakeScene(scene);

const baker = new LightmapBaker({
  renderer, // THREE.WebGLRenderer
  resolution: 512,
  samples: 64,
  bounces: 2,
});

const result = await baker.bake(scene);
result.apply();
```

A successful `LightmapBakeResult` exposes lightmaps/groups/stats plus `apply()`, export, AO refresh/rebake, and `dispose()`. Dispose results when their GPU resources are no longer needed.

## Implemented capabilities

- browser/WebGL2 path-traced direct and indirect lightmap baking
- 0–4 configurable surface-bounce depth
- BVH acceleration through `three-mesh-bvh`
- automatic lightmap UV generation through packaged xatlas JS/WASM
- multiple atlas/resolution groups and supersampling
- progressive accumulation and cancellation
- AO, chart dilation, bilateral denoising and final composition
- PNG, EXR and raw Float32 export utilities
- native Three.js `LightProbeGrid` capture for dynamic objects
- legacy RGB probe-volume fallback
- ESM, CommonJS and TypeScript package outputs

## Known limitations

- baking is browser/WebGL-only
- WebGPU/WebGPURenderer is not a compatibility path for this package
- Three.js r185 is the supported v1.1 line
- base-color source tiles are bounded to 512 px in the GI atlas
- native probe capture remains WebGLRenderer-based and synchronous
- browser export triggers downloads rather than arbitrary filesystem writes
- custom shader/material graphs are not interpreted by the baker

## Repository scope

Maintenance in this repository is deliberately narrow: correctness, security, documentation, packaging, and reasonable compatibility work for the original WebGL implementation. WebGPU, hosted/cloud execution, headless infrastructure, agent/runtime intelligence, and next-generation backend work are out of scope here.

See [MAINTENANCE.md](./MAINTENANCE.md) for the boundary.

See also:

- [Getting Started](./GETTING_STARTED.md)
- [Light Probes](./LIGHT_PROBES.md)
- [Changelog](../CHANGELOG.md)
