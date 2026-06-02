# Copilot instructions for three-lightmap-baker

## Build, test, lint
- `npm run typecheck`
- `npm run lint`
- `npm run format:check`
- `npm run build`
- `npm run test`
- Single test (Playwright): `npx playwright test tests/<spec>.spec.ts` or `npm run test -- tests/<spec>.spec.ts`
- Combined checks: `npm run check` (typecheck + lint + format:check)

## High-level architecture
- Monorepo split: reusable packages live under `packages/`, demos under `apps/`. `apps/*` should stay thin wiring; feature code belongs in a package.
- Classic baker pipeline is **two-pass**: Pass 1 rasterizes UV2 into position/normal textures; Pass 2 ray-traces from those textures via BVH to produce lightmaps. Post-process (dilation/denoise/composite) runs after the trace pass.
- UI shell is in `packages/demo-shell/`; renderer-specific panels live in the owning package (e.g., `packages/baker-classic/`). `apps/playground/` wires shell + package UI and orchestrator.
- PT renderer is a separate package (`packages/pt-renderer/`) with its own BVH builder and progressive tracer; it is not the classic baker.

## Key conventions
- **Two-pass bake is non-negotiable.** Do not merge UV rasterization and ray tracing into one shader (see FAILED-APPROACHES).
- **Shaders:** GLSL 3.0 ES only (`#version 300 es`), use MRT for multi-output, use `texture()` (not `texture2D`). Uniforms must have JSDoc with unit/range; each shader needs a top comment block describing inputs/outputs.
- **TypeScript:** strict mode; no `any`. Avoid `as` except at FFI boundaries and add a `// SAFETY:` comment. Exported functions require JSDoc.
- **WebGL lifecycle:** every texture/RT/material/geometry must be tracked and disposed; renderer state changes must be wrapped in `try/finally`; `dispose()` should be idempotent.
- **Debug logging:** guard with `const DEBUG = import.meta.env.DEV;` and prefix logs with `[baker]`.
- **Modularity limits:** ≤300 LOC/file, ≤50 LOC/function, ≤5 project imports/file; no module-level mutable state; no circular imports (`npx madge --circular packages/ apps/`).
- **Package boundaries:** no code outside `packages/` or `apps/`; packages must not import from apps or sibling packages (use `packages/shared/` or compose at the app layer).
- **Dependency pins:** `three`, `three-mesh-bvh`, and `xatlas-three` are pinned by CI; don’t bump without updating CI expectations.
