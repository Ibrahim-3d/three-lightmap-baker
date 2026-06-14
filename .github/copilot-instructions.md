# Copilot instructions for three-lightmap-baker

## Build, Test, Lint

- `pnpm run typecheck`
- `pnpm run typecheck:examples`
- `pnpm run lint`
- `pnpm run format:check`
- `pnpm run build`
- Bundle budget only: `pnpm run budget:bundle`
- `pnpm run test`
- Adapter runtime smoke: `pnpm run test:adapter-runtime`
- Cornell visual bake smoke: `pnpm run test:visual-cornell`
- Bake cancellation smoke: `pnpm run test:bake-cancel`
- Single Playwright test: `pnpm exec playwright test tests/<spec>.spec.ts` or `pnpm run test -- tests/<spec>.spec.ts`
- Combined checks: `pnpm run check`

Use Corepack so the repo's declared `packageManager` is respected:

```bash
corepack enable
pnpm install
```

## High-Level Architecture

- Monorepo split: reusable packages live under `packages/`, demos under `apps/`.
- `apps/*` should stay thin wiring; feature code belongs in a package.
- Classic baker pipeline is two-pass: UV2 rasterization creates position/normal textures, then BVH ray tracing produces lightmaps.
- UI shell is in `packages/demo-shell/`; renderer-specific panels live in the owning package.
- `apps/playground/` wires shell, package UI, and orchestrator.
- `packages/pt-renderer/` is a separate progressive preview renderer, not the classic baker.

## Key Conventions

- Two-pass bake is non-negotiable. Do not merge UV rasterization and ray tracing into one shader.
- Shaders should use GLSL 3.0 ES where WebGL2 features are required, use MRT for multi-output, and use `texture()` rather than `texture2D`.
- TypeScript stays strict. Avoid `any`; keep assertions near FFI/WebGL/WASM boundaries.
- WebGL resources must be tracked and disposed. Renderer state changes belong in `try/finally`.
- Diagnostic logs should be guarded and prefixed with `[baker]` or a package-specific prefix.
- Avoid circular imports: `pnpm dlx madge --circular packages/ apps/`.
- Package boundaries matter: packages must not import from apps; use `packages/shared/` or compose at the app layer.
- `three`, `three-mesh-bvh`, and `xatlas-three` are pinned by CI; do not bump without updating CI expectations.
