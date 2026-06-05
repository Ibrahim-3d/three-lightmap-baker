# Launch Readiness

Last updated: 2026-06-05

## Positioning

Browser-based Three.js lightmap baker with path-traced global illumination,
auto UV2 unwrapping, BVH ray tracing, AO, denoising, and progressive preview.
Built for procedural scenes, configurators, AI-generated 3D spaces, and web
architectural visualization. No Blender round-trip.

## Ready before first npm publish

- Package exports provide ESM, CJS, and TypeScript declarations.
- `npm pack` output is validated by `npm run test:api-import`.
- README install instructions distinguish pre-release tarball install from
  post-release `npm install three-lightmap-baker`.
- Headless support is documented as planned, not shipped.
- Public API examples match the dual constructor support and browser renderer
  requirement.

## Still manual before public launch

- Capture a top-of-README GIF/video: flat scene, click Bake, GI appears,
  atlas shown, baked result applied.
- Capture before/after flat vs baked GI stills.
- Build and record a small interior/architectural scene, not only Cornell Box.
- Fill the benchmark table with measured hardware, scene, resolution, samples,
  bounces, denoise setting, and bake time.
- Publish the first npm release, then update install wording from "after
  release" to the normal npm install flow.
- Share only after the visual proof is strong enough for Three.js/R3F/CGI
  communities.

## GitHub metadata

Suggested description:

> Browser-based Three.js lightmap baker with path-traced global illumination,
> auto UV2 unwrapping, BVH ray tracing, AO, denoising, and progressive preview.

Suggested topics:

- threejs
- webgl
- lightmap
- lightmapping
- global-illumination
- path-tracing
- bvh
- three-mesh-bvh
- xatlas
- r3f
- react-three-fiber
- 3d
- graphics
- rendering
- procedural-3d
- architectural-visualization
- configurator
- webgpu
