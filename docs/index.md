---
layout: default
title: LightBaker WebGL Documentation
---

# LightBaker — WebGL Documentation

This site documents the original MIT-licensed browser-local LightBaker for Three.js.

> **Compatibility:** this package requires `THREE.WebGLRenderer`, WebGL 2, and `EXT_color_buffer_float`. `THREE.WebGPURenderer` is not supported, including its WebGL fallback mode.

## Start here

- [Getting Started](./GETTING_STARTED.md)
- [API Status & compatibility](./API_STATUS.md)
- [Light Probes](./LIGHT_PROBES.md)
- [Maintenance scope](./MAINTENANCE.md)
- [Architecture](./architecture.md)
- [Changelog](../CHANGELOG.md)

## What this repository is

`three-lightmap-baker` is the original browser-local WebGL implementation and public npm package.

It remains useful for:
- local/browser lightmap baking;
- Three.js WebGL integrations;
- open-source reference and research;
- existing `lightmap-baker` users.

The current public LightBaker product interface lives in [lightbaker-web](https://github.com/Ibrahim-3d/lightbaker-web). Hosted/cloud and next-generation backend work are outside this repository.

## Material support

Bake targets:
- `MeshStandardMaterial`
- `MeshPhysicalMaterial`

Diffuse transport supports:
- `material.color`
- base-color `material.map`
- UV0 / UV1
- material arrays / geometry groups
- solid emissive color

Not part of the supported bake-material contract:
- `ShaderMaterial`
- `RawShaderMaterial`
- node/TSL materials
- arbitrary custom shader logic
- full normal/roughness/metalness/emissive-map transport
- transparent/transmission transport

See [API Status](./API_STATUS.md) for the complete compatibility boundary.
