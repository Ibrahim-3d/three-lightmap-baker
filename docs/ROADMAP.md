# Roadmap

Last updated: 2026-09-27

**Current stable release:** `v1.0.0` — published to npm and GitHub Releases on 2026-08-13.  
**Development branch:** `master` — may contain unreleased changes.  
**Unreleased change log:** [CHANGELOG.md](../CHANGELOG.md#unreleased)

This roadmap describes product direction. It is intentionally smaller than the
issue backlog: actionable bugs and scoped implementation work belong in Issues,
while shipped user-visible changes belong in Releases and the Changelog.

## Product direction

Lightmap Baker is a browser-native static-lighting pipeline for Three.js:

1. Bake reusable path-traced direct and indirect GI into lightmaps.
2. Generate lightmap UVs automatically inside the JavaScript workflow.
3. Keep inspection, export and rebake workflows inside the browser.
4. Bridge baked static lighting to moving objects through native Three.js
   `LightProbeGrid`.
5. Make the package dependable enough for configurators, procedural scenes,
   digital twins, architectural visualization and agent-authored 3D workflows.
6. Add WebGPU or headless execution only when those paths can meet the same
   correctness and lifecycle bar as the shipping WebGL path.

The core product remains baked lighting. Experimental path tracing, screen-space
effects and future WebGPU work must complement rather than obscure that product.

## Shipped — v1.0.0

The first stable public release includes:

- Browser/WebGL2 path-traced direct and indirect lightmap baking.
- Automatic lightmap UV generation with packaged xatlas JavaScript/WASM assets.
- BVH ray traversal through `three-mesh-bvh`.
- Textured diffuse GI, UV0/UV1 base-color transport and multi-material geometry.
- Multiple atlas groups, supersampling/downscale, AO, dilation and denoising.
- Progressive baking, cancellation and explicit result/resource lifecycle.
- PNG, EXR and raw lightmap export.
- Native Three.js `LightProbeGrid` capture for dynamic objects.
- ESM, CommonJS and TypeScript package outputs.
- Browser demo/editor, project persistence and debug/inspection views.

See the [v1.0.0 release](https://github.com/Ibrahim-3d/three-lightmap-baker/releases/tag/v1.0.0)
and [Changelog](../CHANGELOG.md) for the release record.

## Now — ship the post-v1 v1.1 line

The correctness and lifecycle hardening on `master` has cleared the hardware gate.
The immediate priority is packaging and publishing it as the v1.1 release.

### Correctness and lifecycle

Current unreleased work includes:

- corrected transformed-light targets, attenuation and rectangular emitter sampling;
- light counts above the previous fixed bound;
- clearer zero-to-four GI surface-bounce semantics;
- scene preflight, inherited visibility and isolated bake geometry;
- requested-resolution atlas packing and stronger invalid-layout rejection;
- chart-aware padding, denoising and filtering;
- cancellation/error cleanup for GPU work and atlas workers;
- packaged Draco decoder assets instead of a runtime CDN dependency.

Release qualification:

- GitHub CI: green on the current release-prep base.
- Hardware gate: 14/14 focused correctness checks passed; full RTX 3090 / ANGLE
  D3D11 release suite passed 47 tests with one intentional benchmark skip.
- Release commit must keep package version, Changelog, API status, release notes
  and known limitations aligned.
- After registry publication, verify a clean consumer install and minimal browser import.

### Flagship architectural showcase

Cornell proves transport behavior. The next adoption asset should prove product
value in a scene that resembles real Three.js production use.

Target proof:

- a polished interior/architectural scene with textured materials and occlusion;
- visible before/bake/final comparison;
- texel-density and atlas inspection;
- direct, indirect/GI and AO breakdown;
- native probe-grid capture with a moving object;
- a short top-of-README motion asset showing the workflow end to end;
- a larger-scene regression once the showcase itself is stable.

### Adoption and integration examples

After the patch line is qualified:

- add a minimal real-world integration example beyond Cornell;
- add a focused React Three Fiber example if it can stay small and maintainable;
- keep package-facing examples separate from editor-only features;
- make unsupported material/runtime behavior fail or warn clearly.

## Next

These are meaningful product extensions, but they should not delay correctness,
release coherence or the flagship showcase.

### Broader material transport

Evaluate measured demand for:

- `emissiveMap`;
- normal-map-aware transport;
- roughness/metalness transport;
- vertex colors, alpha/cutout and custom-shader integration.

### Probe quality

Improve native probe defaults only from measured failure cases:

- spacing and cubemap-size tuning;
- validity/confidence information;
- leakage mitigation and probe relocation;
- large-object sampling strategies.

The legacy RGB probe stack remains a fallback until native coverage is proven
sufficient for supported workflows.

### Three.js compatibility

The stable v1 package intentionally targets:

```text
three >=0.185.1 <0.186.0
```

Broaden that range only with explicit compatibility testing rather than assuming
renderer-internal stability across releases.

## Later / research

- A true Node/headless baking backend.
- A WebGPU-native bake path.
- Optional SSGI/GTAO/reflection companions where they materially improve the
  baked-lighting workflow.
- Additional persistence and automation formats driven by real integrations.
- Editor polish that does not improve the package, showcase or lighting workflow.

## Release policy

- GitHub Releases and npm versions are the public record of shipped package state.
- `master` can be ahead of the latest stable release; unreleased user-visible
  changes must remain under `CHANGELOG.md#Unreleased`.
- A release is not implied by green CI alone. Versioning, tagging and publication
  are deliberate release operations.
- Breaking changes require explicit migration notes.
- Known hardware/runtime limitations must be stated in release notes rather than
  hidden behind generic compatibility claims.
