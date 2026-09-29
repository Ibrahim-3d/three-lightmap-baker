# LightBaker — original WebGL implementation

This MIT-licensed repository preserves the original browser-local LightBaker for Three.js. It remains an open-source package and WebGL reference implementation. Active next-generation LightBaker development powers the hosted LightBaker product. The public product interface lives in [lightbaker-web](https://github.com/Ibrahim-3d/lightbaker-web).

**This package is intentionally WebGL-only. It requires `THREE.WebGLRenderer`. `THREE.WebGPURenderer` is not supported, including its WebGL fallback mode. WebGPU, cloud/headless execution, and the next-generation baking backend are not developed in this repository.**

![Cornell scene after browser-local bake](screenshots/after-production-baked-combined.png)

## Install

```sh
npm install lightmap-baker three
```

## Compatibility

| Area | Supported |
| --- | --- |
| Three.js | `>=0.185.1 <0.186.0` |
| Renderer | `THREE.WebGLRenderer` |
| Graphics API | WebGL 2 + `EXT_color_buffer_float` |
| `THREE.WebGPURenderer` | **No** |
| `WebGPURenderer({ forceWebGL: true })` | **No** |
| Node/headless baking | **No** |
| Bake-target materials | `MeshStandardMaterial`, `MeshPhysicalMaterial` |

The bake pipeline uses WebGL2/GLSL ES 3.0 internally. That does **not** mean arbitrary application shaders are supported. Custom `ShaderMaterial`, `RawShaderMaterial`, node/TSL materials, and custom shader logic are outside the v1.1 bake-material contract.

Diffuse transport supports `material.color × material.map`, UV0/UV1, geometry groups/material arrays, shared material instances, and solid emissive color. Normal maps, roughness/metalness maps, `emissiveMap`, transparency/transmission, vertex colors, and custom shaders are not fully transported and may be approximated or ignored.

- [Getting started](docs/GETTING_STARTED.md)
- [API status](docs/API_STATUS.md)
- [Maintenance scope](docs/MAINTENANCE.md)
- [Light probes](docs/LIGHT_PROBES.md)
- [Architecture of the original package](docs/architecture.md)
- [Changelog](CHANGELOG.md)

The original playground and preview applications remain available in repository history. Their public gallery and baked-result presentation have moved to [lightbaker-web](https://github.com/Ibrahim-3d/lightbaker-web). This repository now builds the original npm package and keeps its examples and correctness tests.

## Develop

```sh
pnpm install --frozen-lockfile
pnpm run typecheck
pnpm run typecheck:examples
pnpm run build
pnpm run test:api-import
pnpm run test:correctness
```

Browser correctness tests require Playwright Chromium. Hardware-dependent lighting quality needs a real GPU and should be checked on suitable hardware.

[MIT License](LICENSE)
