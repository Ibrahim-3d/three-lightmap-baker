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

- Run `npm run capture:launch` on the target machine to generate baseline
  before/after stills and benchmark data in `launch-artifacts/`.
- Capture a top-of-README GIF/video: flat scene, click Bake, GI appears,
  atlas shown, baked result applied.
- Review the generated before/after stills and replace them with a stronger
  interior scene capture if they are not launch-grade.
- Build and record a small interior/architectural scene, not only Cornell Box.
- Fill the benchmark table with measured hardware, scene, resolution, samples,
  bounces, denoise setting, and bake time.
- Publish the first npm release, then update install wording from "after
  release" to the normal npm install flow.
- Share only after the visual proof is strong enough for Three.js/R3F/CGI
  communities.

## GPU capture requirements

Chrome or Edge must have graphics acceleration enabled. Verify `chrome://gpu`
shows WebGL/WebGL2 as hardware accelerated before trusting screenshots or
benchmark numbers. On dual-GPU systems, also select the high-performance GPU in
Windows Graphics settings, NVIDIA Control Panel, AMD Software, or the
equivalent OS/driver panel.

Automation must launch Chromium with:

```text
--enable-gpu --enable-webgl --ignore-gpu-blocklist --enable-gpu-rasterization --force_high_performance_gpu
```

`--force_high_performance_gpu` is a Chromium switch used by upstream GPU test
configs for dual-GPU machines, but it is not a substitute for OS/driver GPU
assignment.

References:

- Chromium command-line switch guidance: https://www.chromium.org/developers/how-tos/run-chromium-with-flags
- Chromium GPU testing docs using `--force_high_performance_gpu`: https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/gpu/gpu_testing.md
- Chromium GPU process source checks `kForceHighPerformanceGPU`: https://chromium.googlesource.com/chromium/src/+/master/content/browser/gpu/gpu_process_host.cc

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
