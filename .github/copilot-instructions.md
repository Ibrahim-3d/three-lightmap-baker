# Repository scope

This repository maintains the original open-source WebGL LightBaker package.

Keep changes focused on `packages/baker-classic`, examples, correctness tests, packaging, and public documentation. Preserve the MIT package API and documented `THREE.WebGLRenderer` compatibility boundary.

Do not introduce WebGPU/`WebGPURenderer`, hosted/cloud, headless infrastructure, next-generation backend, or agent-runtime work here. The public product UI belongs in `lightbaker-web`; backend evolution happens outside this public repository.

Read `docs/MAINTENANCE.md` before expanding scope.
