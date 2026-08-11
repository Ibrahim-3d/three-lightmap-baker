# Launch Readiness

Last updated: 2026-08-11

> **Release status:** engineering and package-local checks do not authorize a
> public npm release. The package is not approved for publication; npm publish,
> tags, GitHub Releases, version bumps, and publishing-workflow changes remain
> blocked until Ibrahim explicitly approves them.

## Positioning

Browser-based Three.js lightmap baker with path-traced global illumination,
auto UV2 unwrapping, textured and grouped-material BVH transport, AO, denoising,
progressive preview, and native Three.js L2 SH probes for dynamic objects.

Built for procedural scenes, configurators, AI-generated 3D spaces, and web
architectural visualization. No Blender round-trip.

## Pre-release engineering gate

- Package exports provide ESM, CJS, and TypeScript declarations.
- Package tarball output is validated by `pnpm run test:api-import`.
- The local validation commands cover typecheck, example typecheck, lint,
  formatting, all browser tests with one GPU worker, demo build, bundle budget,
  package build, and tarball import smoke. A dry run may check package integrity,
  but is not publication approval.
- xatlas JavaScript and WASM are packaged locally, licensed in
  `THIRD_PARTY_LICENSES.md`, and covered by an offline/no-third-party-request
  browser test.
- A real Draft bake generates non-empty RGB probe irradiance and drives the
  dynamic PBR demo object in the browser suite.
- A deterministic material scene verifies GPU textured bounce transport,
  post-BVH group-slot resolution, single application of color times map, the
  legacy source-albedo convention, and solid Cornell compatibility.
- Native baked-scene capture is a package API and the editor has no independent
  unowned probe animation loop.
- Existing publishing infrastructure is dormant and does not imply approval to
  configure, trigger, or use it.
- Development currently uses source checkouts or locally built package artifacts.
- Headless support is documented as planned, not shipped.
- Public API examples match the dual constructor support and browser renderer
  requirement.
- `getLightmapRuntimeCapabilities()` exposes a Node-safe runtime probe so
  automation can fail clearly instead of attempting unsupported Node baking.
- Offscreen/detached browser adapter orchestration is covered by
  `pnpm run test:adapter-runtime` and wired into CI with a conservative runtime
  budget (`BAKER_ADAPTER_RUNTIME_BUDGET_MS`, default 20000).
- Cornell Draft visual bake regression is covered by
  `pnpm run test:visual-cornell` and wired into CI. It performs a real bake and
  checks post-bake GI color signatures from the rendered canvas.
- In-flight bake cancellation is implemented in the demo/editor and covered by
  `pnpm run test:bake-cancel` in CI.
- Project JSON save/load is implemented for built-in presets, imported GLB/glTF
  payloads, bake/editor options, baked final lightmaps, and asset-library
  additions, and is covered by `pnpm run test:project-save-load` in CI.
- Outliner selection supports selected-row metadata, ArrowUp/ArrowDown stepping,
  and double-click frame-to-node, covered by `pnpm run test:selection` in CI.
- Undo/redo command history is wired for add/remove/transform operations through
  menu items and keyboard shortcuts; delete undo/redo is covered by
  `pnpm run test:editor-history` in CI.
- Asset Library and topbar/editor chrome smokes are covered by
  `pnpm run test:asset-library` and `pnpm run test:topbar` in CI.
- The CI browser gate runs these browser smokes through
  `pnpm run test:browser-smoke` as one sequential Playwright invocation.
- Pull requests build and upload a downloadable demo preview artifact without
  touching the production GitHub Pages deployment.
- Launch capture automation exists in `scripts/capture-launch-assets.mjs`.
- Launch benchmark budget checking exists in `scripts/check-runtime-budget.mjs`.
  Run `pnpm run budget:runtime` after `pnpm run capture:launch`; preset budgets
  can be tightened with `BAKER_RUNTIME_BUDGET_<PRESET>_MS`.
- README launch screenshots are committed:
  `screenshots/before-solid-viewport.png`,
  `screenshots/after-preview-baked-combined.png`, and
  `screenshots/after-production-baked-combined.png`.
- README benchmark tables contain measured RTX 3050 Ti Laptop GPU numbers for
  Draft, Preview, Production, and Final on `cornell.advanced`.

## Release operation (blocked pending approval)

- Do not publish, tag, bump a release version, or create a GitHub Release without
  Ibrahim's explicit approval, even when all engineering checks pass.
- Keep release messaging honest: browser/WebGL textured lightmaps, preferred
  native Three.js L2 SH probes, and legacy RGB fallback now; true Node headless
  baking and WebGPU remain staged next steps.

## Urgent before flagship public launch

Public npm release remains blocked. Before any later launch decision, the visual
proof should not stay Cornell-only. These are product-validation tasks:

- Capture a short top-of-README GIF/video showing the interactive flow: texel
  density view, click Bake, GI appears, atlas shown, baked result applied.
- Add debug-view screenshots for texel density, atlas, direct-only, indirect/GI,
  AO-only, and final composite.
- Build the custom interior/architectural showcase room. Cornell proves
  correctness; the room proves product value.
- Add larger-scene visual regression after the custom room exists.
- Capture the existing baked light-probe demo in the custom room: bake the
  static scene, generate a probe grid, move a dynamic object through the room,
  and show probe-interpolated indirect light.
- Add a technical breakdown asset: before, texel density, UV2/atlas, direct,
  indirect, AO, probes, moving object, final.
- Share broadly only after the visual proof is strong enough for Three.js, R3F,
  technical-art, CGI, and archviz communities.

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
BAKER_CAPTURE_ANGLE="d3d11,d3d11on12,gl" BAKER_EXPECT_GPU="RTX 3050" pnpm run capture:launch
```

For benchmark automation, enforce the expected renderer:

```text
BAKER_EXPECT_GPU="RTX 3050" pnpm run capture:launch
```

The capture helper uses installed Chrome by default. To intentionally use
Playwright's bundled Chromium instead:

```text
BAKER_CAPTURE_BROWSER_CHANNEL=bundled pnpm run capture:launch
```

References:

- Chromium command-line switch guidance: https://www.chromium.org/developers/how-tos/run-chromium-with-flags
- Chromium GPU testing docs using `--force_high_performance_gpu`: https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/gpu/gpu_testing.md
- Chromium GPU process source checks `kForceHighPerformanceGPU`: https://chromium.googlesource.com/chromium/src/+/master/content/browser/gpu/gpu_process_host.cc

## GitHub metadata

Suggested description:

> Browser-based Three.js lightmap baker with path-traced global illumination,
> auto UV2 unwrapping, BVH ray tracing, AO, denoising, progressive preview, and
> staged baked-probe/runtime-lighting support.

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
- light-probes
- ssgi
