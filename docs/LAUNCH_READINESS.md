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

- Run `BAKER_EXPECT_GPU="<expected renderer substring>" npm run capture:launch`
  on the target machine to generate baseline before/after stills and benchmark
  data in `launch-artifacts/` without accidentally publishing fallback-GPU
  numbers.
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
benchmark numbers.

Do not claim that the site can force a high-performance GPU. Browser content
cannot change OS/driver GPU routing. The correct product behavior is to request
hardware acceleration, detect the actual WebGL renderer, and warn or fail when
the renderer is not the expected launch GPU.

Automation must launch Chromium with:

```text
--enable-gpu --enable-webgl --enable-webgl2 --ignore-gpu-blocklist --disable-gpu-driver-bug-workarounds --force-gpu-rasterization --enable-gpu-rasterization --enable-accelerated-2d-canvas --enable-zero-copy --disable-software-rasterizer --force_high_performance_gpu
```

`--force_high_performance_gpu` is a Chromium switch used by upstream GPU test
configs for dual-GPU machines, but it is not a substitute for OS/driver GPU
assignment.

On Windows, launch capture defaults to ANGLE D3D11 because that selected the
NVIDIA RTX 3050 Ti Laptop GPU on the validation machine. When
`BAKER_EXPECT_GPU` is set, the helper probes `d3d11`, `d3d11on12`, and `gl`
before failing. If a future driver behaves differently, override the order:

```text
BAKER_CAPTURE_ANGLE="d3d11,d3d11on12,gl" BAKER_EXPECT_GPU="RTX 3050" npm run capture:launch
```

For benchmark automation, enforce the expected renderer:

```text
BAKER_EXPECT_GPU="RTX 3050" npm run capture:launch
```

The capture helper uses installed Chrome by default. To intentionally use
Playwright's bundled Chromium instead:

```text
BAKER_CAPTURE_BROWSER_CHANNEL=bundled npm run capture:launch
```

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
