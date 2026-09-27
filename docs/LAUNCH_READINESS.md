# Public Release & Showcase Readiness

Last updated: 2026-09-27

`lightmap-baker@1.0.0` is the current stable public npm release. This document
tracks readiness for **future releases and public showcase pushes**; it is not a
first-publish approval gate.

## Stable baseline

Public v1.0.0 currently establishes:

- npm package: `lightmap-baker`;
- GitHub Release/tag: `v1.0.0`;
- ESM, CommonJS and TypeScript declaration outputs;
- Three.js peer range `>=0.185.1 <0.186.0`;
- browser/WebGL2 baking with `EXT_color_buffer_float`;
- packaged xatlas JavaScript/WASM assets;
- path-traced lightmaps, AO/refinement and native `LightProbeGrid` support;
- a live browser demo and committed launch screenshots;
- CI for typecheck, lint, formatting, build, package import and browser coverage.

The [Changelog](../CHANGELOG.md) is the source of truth for changes after v1.0.0.

## Next release gate

Before publishing the next patch release:

- [ ] `package.json` version and intended tag are decided.
- [ ] `CHANGELOG.md#Unreleased` accurately describes user-visible changes.
- [ ] `pnpm run check` passes.
- [ ] `pnpm run build` passes.
- [ ] package import/tarball smoke passes.
- [ ] browser correctness and release suites pass.
- [ ] `pnpm run test:release:hardware` passes on a supported hardware GPU.
- [ ] representative production scenes receive a visual review.
- [ ] install/update instructions match the package that will ship.
- [ ] breaking changes or migrations are explicit; otherwise the release remains
      within patch/minor semantic-versioning expectations.
- [ ] GitHub Release notes are product-facing rather than a raw commit list.
- [ ] README, API status, Roadmap and Changelog agree on version and limitations.

## Flagship showcase gate

The public package exists; the remaining launch-quality gap is visual proof beyond
the Cornell scene.

Before a major promotion/relaunch push:

- [ ] Build or import a polished architectural/interior showcase.
- [ ] Capture before-bake and final-bake states.
- [ ] Capture texel density, atlas, direct, indirect/GI and AO views.
- [ ] Show native probe-grid lighting on a moving object.
- [ ] Produce a short top-of-README GIF/video that demonstrates the workflow.
- [ ] Add a larger-scene regression after the showcase is stable.
- [ ] Re-run primary links, npm install and live-demo checks.

Cornell remains a correctness scene. It should not be the only artifact used to
communicate product value.

## Hardware validation

Software/headless WebGL is useful for deterministic API and lifecycle tests but
is not production qualification for a GPU lightmap baker.

For trusted visual/performance results:

1. use Chrome or Edge with hardware acceleration enabled;
2. verify the reported WebGL renderer is the intended hardware device;
3. reject SwiftShader/software fallbacks in the hardware release gate;
4. run the hardware suite plus representative visual review.

The site cannot force operating-system GPU routing. Runtime diagnostics should
report the renderer that was actually obtained.

## Current stable limitations

These are product constraints, not hidden release blockers:

- baking requires a browser `WebGLRenderer`;
- WebGL 2 and `EXT_color_buffer_float` are required;
- v1 targets Three.js r185;
- true Node/headless baking is not shipped;
- the shipping native probe path uses Three.js' WebGL `LightProbeGrid`;
- base-color transport is supported, while broader PBR texture transport remains
  future work.

See [API_STATUS.md](./API_STATUS.md) for the detailed support matrix.

## Release discipline

Publishing is always explicit:

- normal development must not silently tag, version-bump or publish;
- green CI is necessary but does not itself create a release;
- release notes should be prepared from `CHANGELOG.md`;
- after publication, version references across README/docs must be synchronized;
- meaningful post-release work stays under `Unreleased` until the next version ships.
