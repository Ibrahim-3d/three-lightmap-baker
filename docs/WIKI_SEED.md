# LightBaker Wiki Seed

Use this file to initialize the GitHub Wiki navigation. The version-controlled `/docs` directory remains the source of truth.

## Suggested Wiki pages

### Home
- What LightBaker is
- WebGL-only compatibility warning
- Links to installation, API and troubleshooting
- Link to the separate LightBaker Studio/client repository

### Installation
- `npm install lightmap-baker three`
- supported Three.js range
- WebGL2 / `EXT_color_buffer_float` requirements

### Quick Start
- minimal `WebGLRenderer` example
- first bake
- applying and disposing results

### Renderer Compatibility
- supported: `THREE.WebGLRenderer`
- unsupported: `THREE.WebGPURenderer`, including `forceWebGL`
- browser/hardware expectations

### Materials & Shaders
- `MeshStandardMaterial`
- `MeshPhysicalMaterial`
- supported diffuse transport
- unsupported custom shaders / TSL / mapped PBR details

### Light Probes
- native `LightProbeGrid`
- legacy probe volume
- limitations

### Troubleshooting
- missing `EXT_color_buffer_float`
- black bakes
- slow bakes
- unsupported materials
- dynamic objects

### Maintenance Scope
- what this OSS repo still accepts
- which capabilities are intentionally outside this repository

## Source links

- [Getting Started](./GETTING_STARTED.md)
- [API Status](./API_STATUS.md)
- [Light Probes](./LIGHT_PROBES.md)
- [Maintenance Scope](./MAINTENANCE.md)
