# Contributing to the original WebGL LightBaker

This repository maintains the MIT-licensed browser-local WebGL package. Contributions to the package, examples, correctness tests, and documentation are welcome. The public product UI is maintained in `lightbaker-web`.

Read [docs/MAINTENANCE.md](./docs/MAINTENANCE.md) before proposing scope changes. WebGPU/`WebGPURenderer`, hosted/cloud, headless infrastructure, next-generation backend work, and agent-runtime features are intentionally out of scope here.

## Compatibility contract

- renderer: `THREE.WebGLRenderer`
- graphics API: WebGL 2 + `EXT_color_buffer_float`
- Three.js: `>=0.185.1 <0.186.0`
- bake-target materials: `MeshStandardMaterial` and `MeshPhysicalMaterial`
- `THREE.WebGPURenderer`: unsupported, including its WebGL fallback mode

## Validate

```sh
pnpm install --frozen-lockfile
pnpm run typecheck
pnpm run typecheck:examples
pnpm run lint
pnpm run build
pnpm run test:api-import
pnpm run test:correctness
```

Browser correctness tests require Playwright Chromium. For GPU output quality, test with a hardware-accelerated WebGL 2 browser. Add focused coverage for behavior changes and explain compatibility impact in the pull request.
