# Maintenance Scope

This repository is the original MIT-licensed browser-local WebGL implementation of LightBaker.

## In scope

- correctness and regression fixes for the existing WebGL baker
- security fixes
- documentation and examples
- npm/package/release maintenance
- reasonable compatibility fixes within the documented Three.js/WebGL contract
- tests for the existing public API

## Out of scope

- WebGPU or `THREE.WebGPURenderer` support
- hosted/cloud baking infrastructure
- Node/headless production infrastructure
- next-generation GPU backend work
- proprietary performance/compute work
- agent/runtime intelligence and automated lighting evaluation
- hosted product UI

The current public product interface lives in [lightbaker-web](https://github.com/Ibrahim-3d/lightbaker-web). This repository remains useful as a working open-source WebGL implementation and reference package; it is not the roadmap for the hosted LightBaker backend.

## Compatibility boundary

The package requires `THREE.WebGLRenderer`, WebGL 2 and `EXT_color_buffer_float`. `THREE.WebGPURenderer` is unsupported even when configured to use a WebGL backend.

Bake-target materials are `MeshStandardMaterial` and `MeshPhysicalMaterial`. Arbitrary custom shader/material graphs are outside the supported bake contract.
