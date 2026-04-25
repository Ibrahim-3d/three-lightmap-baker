# Contributing — three-lightmap-baker

## Architecture Rule: Two-Pass Bake (Non-Negotiable)

Pass 1: UV-space rasterization → world position texture + normal texture (+ any MRT targets)
Pass 2: Ray tracing from texel world positions via BVH

These passes are SEPARATE. Never combine UV-space rasterization and ray tracing into a single shader. The prior codebase attempted this and produced 12 integration bugs. The two-pass architecture exists to prevent that class of bug from recurring.

## Shader Rules

- All shaders MUST be GLSL 3.0 ES (`#version 300 es`)
- Use MRT (Multiple Render Targets) where multiple outputs are needed — do NOT render the same geometry twice to write position and normal separately
- Every shader uniform MUST have a JSDoc comment explaining its unit and range
- Every shader MUST have a comment block at the top explaining: what it does, what its inputs are, what its outputs are
- NO magic numbers in shaders. Use `#define` or uniforms with documented names
- Floating-point constants MUST have explicit decimal points (`1.0` not `1`)
- Guard against NaN/Inf: clamp PRNG output, check vector lengths before normalize, validate varyings at fragment entry
- Do NOT use `texture2D` — use `texture()` (GLSL 3.0)

## TypeScript Rules

- Strict mode always (`"strict": true` in tsconfig)
- No `any` — use `unknown` and narrow, or define a proper type
- No `as` type assertions except at FFI boundaries (WebGL calls, WASM interop) — and those MUST have a `// SAFETY:` comment explaining why the assertion is valid
- Exported functions MUST have JSDoc with `@param` and `@returns`
- Internal functions SHOULD have a one-line comment explaining purpose
- Prefer `interface` over `type` for object shapes (interfaces give better error messages and are extendable)
- Use `readonly` on properties that should not be mutated after construction
- Enum values: use string enums (`enum Phase { Unwrapping = 'unwrapping' }`) not numeric

## Naming Conventions

| Thing | Convention | Example |
|---|---|---|
| Files | kebab-case | `gap-flood.ts`, `bake-shader.ts` |
| Classes | PascalCase | `LightmapBaker`, `BakeResult` |
| Interfaces | PascalCase, no I-prefix | `BakeOptions`, NOT `IBakeOptions` |
| Functions | camelCase | `runGapFlood`, `buildSceneBvh` |
| Constants | UPPER_SNAKE | `MAX_BOUNCES`, `DEFAULT_SAMPLES` |
| Shader uniforms | uCamelCase | `uSampleIndex`, `uAlbedoTex` |
| Shader varyings/in/out | vCamelCase | `vWorldPos`, `vWorldNormal` |
| Private class members | underscore prefix | `_accumRT`, `_disposed` |
| Type parameters | single capital letter | `T`, `K` |

## File Organization

```
src/
├── lib/                    # The library (published to npm)
│   ├── core/               # Orchestrator, options, result types
│   │   ├── baker.ts        # LightmapBaker class — single entry point
│   │   ├── options.ts      # BakeOptions interface + defaults + validation
│   │   ├── result.ts       # BakeResult class — lightmaps, AO maps, probes, dispose()
│   │   └── types.ts        # Shared type definitions (NO implementation)
│   ├── uv/                 # UV unwrapping (xatlas integration)
│   │   └── unwrap.ts
│   ├── passes/             # Render passes
│   │   ├── world-pos.ts    # Pass 1: UV-space → position+normal textures
│   │   ├── ray-trace.ts    # Pass 2: BVH ray tracing from texel positions
│   │   ├── gap-flood.ts    # Post: edge dilation
│   │   ├── denoise.ts      # Post: bilateral filter
│   │   └── downscale.ts    # Post: supersample reduction
│   ├── shaders/            # GLSL source (imported as strings)
│   │   ├── world-pos.vert
│   │   ├── world-pos.frag
│   │   ├── ray-trace.frag
│   │   ├── gap-flood.frag
│   │   ├── denoise.frag
│   │   └── common.glsl     # Shared functions (PRNG, cosine hemisphere, etc.)
│   ├── scene/              # Scene analysis (BVH, material packing)
│   │   ├── bvh-builder.ts
│   │   └── material-pack.ts
│   ├── lights/             # Light collection and packing
│   │   └── light-data.ts
│   ├── probes/             # SH light probe generation
│   │   └── probe-grid.ts
│   └── index.ts            # Public API surface (re-exports)
├── demo/                   # Demo app (NOT published)
│   ├── scenes/
│   │   └── cornell-box.ts
│   ├── ui/
│   │   └── controls.ts
│   └── main.ts
└── __tests__/              # Tests
```

## Resource Management (CRITICAL for WebGL)

WebGL resources (textures, render targets, shader materials, geometries) leak if not explicitly disposed. Rules:

1. **Every function that creates a WebGLRenderTarget MUST either return it (caller owns it) or dispose it before returning.** No middle ground.
2. **Track allocations.** Use a `Disposable[]` array in long-lived classes. `dispose()` method iterates and disposes all.
3. **Try/finally for render passes.** If a function changes renderer state (setRenderTarget, setClearColor, autoClear), wrap in try/finally that restores previous state.

```typescript
// PATTERN: safe render target usage
const prevTarget = renderer.getRenderTarget();
const prevClear = renderer.getClearColor(new THREE.Color());
const prevAlpha = renderer.getClearAlpha();
try {
  renderer.setRenderTarget(myRT);
  renderer.setClearColor(0x000000, 0);
  renderer.clear();
  renderer.render(scene, camera);
} finally {
  renderer.setRenderTarget(prevTarget);
  renderer.setClearColor(prevClear, prevAlpha);
}
```

4. **dispose() is idempotent.** Calling it twice must not throw. Guard with a `_disposed` flag.
5. **After dispose, methods throw.** Check `_disposed` at entry of public methods.

## Error Handling

- Use custom error class: `BakeError extends Error` with `phase: string` and `meshName?: string`
- Never swallow errors silently — log and rethrow, or log and continue with documented degradation
- Validate all options at entry (`baker.bake()`) BEFORE allocating GPU resources
- Validate scene (has meshes, has at least one light source) BEFORE starting UV unwrap

## Performance Constraints

- Bake operations MUST yield to the browser event loop at least every 100ms (requestAnimationFrame / setTimeout)
- No synchronous loops longer than 50ms without a yield point
- DataTexture uploads MUST use `texture.needsUpdate = true` exactly once, not per-pixel
- Measure and log bake duration per phase in debug mode

## Debug Mode

All diagnostic code behind a `DEBUG` constant:

```typescript
const DEBUG = import.meta.env.DEV;

if (DEBUG) {
  console.log('[baker] phase timing:', { unwrap: t1 - t0, bake: t2 - t1 });
}
```

Console logs prefixed with `[baker]`. No `console.log` without the prefix. No `console.log` in production builds.

## Git Conventions

- Commit messages: `task-XX: short description` for task work, `fix: description` for bugfixes, `refactor: description` for cleanup
- Each task is one or more commits. Squash is fine.
- Do NOT commit debug screenshots to main — they go in a `.gitignore`d `screenshots/` directory
- Do NOT commit `node_modules/`, `dist/`, or IDE config

## Code Modularity Rules

### File Size Limits

- **Hard limit: 300 lines per file.** If a file exceeds 300 lines, it must be split before the next commit.
- **Target: 150-250 lines per file.** This is the sweet spot where a file does one thing completely without scrolling.
- **Shader files (.glsl): 200 lines max.** Extract shared functions into `common.glsl` and `#include` or import them.
- **The only exception:** auto-generated files (type definitions from codegen, WASM bindings). These can exceed limits but must be marked with `// AUTO-GENERATED — DO NOT EDIT` at the top.

### How to Split a File

When a file exceeds 300 lines, split by responsibility, not by arbitrary line count:

```
// BAD: split baker.ts into baker-part1.ts and baker-part2.ts

// GOOD: split baker.ts into:
//   baker.ts        — orchestration (calls phases in order, handles errors)
//   options.ts      — option validation and defaults
//   result.ts       — BakeResult class and disposal
//   progress.ts     — progress reporting and timing
```

Each extracted file must:
1. Have a single, nameable responsibility
2. Export a clear interface (not a grab bag of functions)
3. Be testable in isolation
4. Not create circular imports

### Function Size Limits

- **Hard limit: 50 lines per function.** If a function exceeds 50 lines, extract helper functions.
- **Target: 15-30 lines per function.** A function should fit on one screen.
- **Exception: shader main() functions** can go to 80 lines because GLSL doesn't support function extraction as cleanly. But prefer helper functions even in GLSL.

### Coupling Rules

- **No file imports from more than 5 other project files.** If it does, it's a god-file that knows too much. Split it or introduce an interface boundary.
- **No circular imports.** If A imports B and B imports A, extract the shared dependency into C.
- **Types live in types.ts, not in implementation files.** If two files need the same interface, it belongs in types.ts, not duplicated or re-exported.
- **Passes are independent.** Each file in `src/lib/passes/` must work given only its input types. It must NOT reach into another pass's internals. Communication between passes happens through the orchestrator (`baker.ts`) via typed data, not through shared mutable state.

### Dependency Direction

```
core/ (types, options, result)
  ↑
passes/ (each pass depends on core types, nothing else)
  ↑
scene/ (BVH, materials — depends on core types)
  ↑
baker.ts (orchestrator — depends on everything above)
  ↑
demo/ (depends on lib/ — never the other way)
```

A file may only import from files ABOVE it in this diagram, or from the same directory. Never downward.

### State Management

- **No module-level mutable state.** No `let sharedRT = null` at file scope. All state lives in class instances or is passed as function arguments.
- **No singletons.** Multiple LightmapBaker instances must be able to coexist (different scenes, different settings) without interfering.
- **Render targets are owned, not shared.** The function that creates an RT either returns it (caller owns) or disposes it (creator owns). Never "this RT lives in module scope and multiple functions write to it."

### Before Every Commit — Modularity Checklist

- [ ] No file exceeds 300 lines
- [ ] No function exceeds 50 lines
- [ ] No file imports from more than 5 project files
- [ ] No circular imports
- [ ] No module-level mutable state
- [ ] Dependency direction is respected (no downward imports)
