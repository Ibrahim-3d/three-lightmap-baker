# Original WebGL package architecture

`packages/baker-classic/src` contains the browser-local LightBaker public API and implementation. The package accepts a Three.js `WebGLRenderer`, prepares scene geometry and lights, generates UV atlases, runs GPU lightmap passes, and returns baked outputs. The public entrypoint is `packages/baker-classic/src/index.ts`.

`examples/` contains integration examples. `tests/correctness/` and `tests/browser/` exercise the package and GPU behavior. `vite.lib.config.js` bundles ESM and CJS from the package entrypoint; `tsconfig.lib.json` emits declarations. `vite.config.js` serves the browser test harness only.

The original playground/editor is preserved in Git history. Its public presentation is now in [lightbaker-web](https://github.com/Ibrahim-3d/lightbaker-web). Future engine development is maintained separately.
