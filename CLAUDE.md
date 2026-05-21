# Lightmap Baker — Claude Code Instructions

## Project

Browser-native lightmap baker with path-traced global illumination for Three.js.
Fork of lucas-jones/three-lightmap-baker, extended with multi-bounce GI.

**Scope expansion 2026-05-18:** project is becoming a multi-renderer monorepo
(`packages/` + `apps/`). Real-time GPU path tracer (Erich Loftis-style) is
landing in PR #2 to give designers a preview that predicts the bake look.
A new PT-baker (UV-space front-end on the same sampler) will follow so the
preview and the bake share one engine. The current classic baker stays in tree
as the safe fallback. See `.claude/progress.md` "Roadmap" for the sequence.

## Stack

- Three.js (check package.json for exact version — DO NOT upgrade)
- three-mesh-bvh (GPU-accelerated BVH raycasting) — used by the **classic baker**
- Custom SAH BVH builder (ported from Erich Loftis' BVH_Quick_Builder.js) — used by the **PT renderer** (PR #2)
- xatlas-three (auto UV2 unwrapping)
- TypeScript strict mode
- Vite dev server

## Architecture — Classic Baker (Two-Pass)

This describes the **classic baker** in `src/lib/` today. The PT renderer in
PR #2 is a separate screen-space progressive tracer; the planned PT-baker
will reuse the PT renderer's sampler but write to a UV-space RT.

Pass 1 (UV-space rasterization):
- Render each mesh's geometry with gl_Position = uv2 * 2 - 1
- Fragment shader outputs world position (RGB) into positionTexture
- Fragment shader outputs world normal (RGB) into normalTexture
- These textures are a 2D lookup table: texel coords → world coords

Pass 2 (ray tracing):
- For each texel in the position/normal textures:
  - Read worldPos and worldNormal
  - Cast cosine-weighted hemisphere rays from worldPos
  - Accumulate radiance from emissive surfaces (direct)
  - Trace bounce rays from hit points (indirect GI)
  - Write result into lightmap texture

This two-pass approach decouples UV mapping from ray tracing.
The renderer is used normally — no modelMatrix/matrixWorld hacks needed.

## Key Files (post-Roadmap Step 2)

Classic baker library (`packages/baker-classic/src/`):
- `LightmapBaker.ts` — main orchestrator (public API entry)
- `lightmap/LightmapperMaterial.ts` — inline GLSL3 BVH ray-trace shader
- `lightmap/AOMapper.ts` — AO sub-pass
- `lightmap/Lights.ts` — light packing → DataTexture
- `lightmap/Composite.ts` / `DenoiseMaterial.ts` / `DilationMaterial.ts` — post-process
- `atlas/renderAtlas.ts` — Pass 1 UV rasterization
- `utils/GeometryUtils.ts` — BVH merge + per-tri material extraction
- `utils/MaterialTextures.ts` — albedo/emissive DataTextures
- `ui/` — `BakePage`, `LightmapPage`, `LightPage`, `WorldPage` panels + `menus.ts` + `registerBakerClassicUI()` entry point

Shared primitives (`packages/shared/src/`):
- `registries/panel-registry.ts` / `menu-registry.ts` / `orchestrator.ts` / `scene-registry.ts` — extension points renderers register into
- `signals/ui.ts` / `signals/bake.ts` — cross-cutting UI + bake-progress signals
- `ui/Field.tsx` / `ui/helpers.ts` — generic inspector primitives
- `assets/primitives.ts` — stock primitive + light catalog used by `<AssetLibrary/>`

Demo shell (`packages/demo-shell/src/`):
- `App.tsx` — root layout grid
- `components/` — Topbar, Outliner, Inspector, Splitter, Toast, StaleBanner, StatusBar, MenuButton, AssetLibrary, ScenePicker, MobileSplash, icons
- `inspector/ObjectPage.tsx`, `MaterialPage.tsx` — built-in generic inspector tabs (Light/World moved to baker-classic)
- `menus/` — File/Edit/View/Help generic menu items

Playground app (`apps/playground/src/`):
- `main.tsx` — boot, registers baker-classic UI, mounts shell, signal wiring
- `CornellBoxExample.ts` — orchestrator class implementing `BakerOrchestrator`
- `three/SceneController.ts` — scene, camera, renderer, transform, asset add/remove
- `three/BakeController.ts` — bake orchestration
- `three/modes.ts` / `three/types.ts` — render-mode runner + shared types
- `scenes/presets/` — built-in preset scenes (registered via `sceneRegistry`)

PT renderer (PR #2 — rebased onto new layout in Step 3):
- `packages/pt-renderer/src/BVHBuilder.ts` — SAH builder
- `packages/pt-renderer/src/BVHSceneBuilder.ts` — scene → DataTextures
- `packages/pt-renderer/src/PTRenderer.ts` — 3-pass ping-pong pipeline
- `packages/pt-renderer/src/chunks.ts` — GLSL chunks from PathTracingCommon.js

## Folder Structure & Modularity (MUST FOLLOW)

**These are HARD rules. Verify before every commit. Violations get reverted —
not patched.**

### Folder layout (post-Roadmap Step 2)

- `packages/<name>/` — reusable code. Each package is independently
  consumable in a bigger product. Each has its own `index.ts` with explicit
  named exports, its own README, its own types. No code outside `packages/`
  or `apps/`.
- `apps/<name>/` — demos only. THIN wiring. Each `apps/<name>/main.tsx`
  must be ≤100 LOC: import shell, import packages, glue, render. No feature
  code in `apps/`. If you find yourself writing logic in an app, it belongs
  in a package.
- `packages/shared/` — common helpers (BVH, material packing, light data).
  Sibling packages share through here.
- Packages MUST NOT import from `apps/`.
- Packages MUST NOT import from sibling packages directly — go through
  `packages/shared/` or compose at the app layer.
- Renderer-specific UI panels live in the OWNING package
  (`baker-classic/`, `pt-renderer/`, `pt-baker/`), NOT in `demo-shell/`.
  Shell exposes a panel-slot API; packages register at boot.

### Modularity hard limits

- Max **300 lines** per file. Hit it → split.
- Max **50 lines** per function. Hit it → extract helpers.
- Max **5 project imports** per file. Hit it → the file is doing too much.
- **No circular imports.** Run `npx madge --circular packages/ apps/`
  before every commit.
- **No module-level mutable state.** Functions take + return; classes own
  state. No top-level `let`, no top-level singletons.
- Every WebGL resource (texture, RT, buffer, material, geometry) is
  tracked and explicitly disposed. Try/finally for renderer state changes.

### Naming

- Files: `kebab-case.ts` — never `camelCase.ts` or `PascalCase.ts`.
- Types & classes: `PascalCase`.
- Functions & variables: `camelCase`.
- True constants: `SCREAMING_SNAKE`.
- Prefer named exports over default — better tree-shaking.

### Before committing — required checks

**Run the same npm scripts CI runs. NOT `npx prettier`/`npx eslint`
directly.** The repo's npm scripts pin the exact target paths
(`packages/ apps/`) and Prettier respects nested config differently when
invoked via the package script. CI uses `npm run format:check` — running
`npx prettier --check .` locally can pass while CI fails on 7+ files. The
lint error format is the same trap (lint config is wired into
`npm run lint`, not bare `npx eslint`).

1. `npm run typecheck` — zero errors
2. `npm run lint` — zero errors. Warnings allowed; errors fail CI.
3. `npm run format:check` — all formatted. If it fails: `npm run format`
   to auto-fix, then re-check.
4. `npx madge --circular packages/ apps/` — no cycles
5. `npm run build` — vite build green
6. Quick scan: any new file > 300 LOC? Split it. Any new file with > 5
   project imports? Refactor it.
7. CI must be green (see `.github/workflows/ci.yml`).

The `npm run check` script chains 1–3 in one shot.

## CI / CD Workflows

Workflows live in `.github/workflows/`. The old `deploy.yml` pushes
`dist/` to GitHub Pages on push to `main`. The plan for everything else is
below — current tier in green, deferred tiers documented so future
sessions know what's parked.

### Tier 1 — live in `.github/workflows/ci.yml`

- **`check` job** — `tsc --noEmit`, `eslint`, `prettier --check`,
  `vite build`. Hard fail. Minimum bar for merge.
- **`modularity` job** — `madge --circular` + report of every TS file > 300
  LOC. **Currently advisory** (warns, does not fail) because legacy files
  (`LightmapBaker.ts` 1316 LOC, `LightmapperMaterial.ts` 423 LOC,
  `CornellBoxExample.ts` 1858 LOC) predate the rule. Flip to hard-fail
  after Roadmap Step 2 splits them.
- **`deps-pinned` job** — fails if `three` / `three-mesh-bvh` /
  `xatlas-three` version strings change. To deliberately upgrade, update
  the `EXPECT_*` constants inside `ci.yml` in the same PR.

### Tier 2 — add after Roadmap Step 2 (restructure lands)

- **Bundle-size check** — per-app gzip size, comment PR with delta vs.
  master. Fail on > 10 % growth without `allow-bundle-growth` label.
- **Per-app build matrix** — once `apps/*` exists, build each independently
  to catch package-internal regressions.
- **Tighten `modularity`** — flip from advisory to hard-fail once legacy
  oversized files are split.
- **Playwright smoke tests** — boot each app, canvas mounts, no console
  errors, "Bake" completes on Cornell. Config already added in PR #1.

### Tier 3 — add after PT-baker ships (Roadmap Step 5)

- **Visual regression on Cornell Box** — headless boot of `apps/playground/`,
  bake with each engine, compare output PNG to baselines (`pixelmatch` or
  `odiff`). Runs nightly + on shader-touching PRs.
- **PR preview deploys** — push each PR's `apps/playground/` build to a
  preview URL (Cloudflare Pages, Vercel, or GitHub Pages branch deploy).
  Designer-friendly review.

### Tier 4 — when packages are ready to publish

- **`release.yml`** with [changesets](https://github.com/changesets/changesets)
  — cross-package version management. Each PR adds a `.changeset/*.md`
  describing the bump. Merging the auto-opened "Release PR" publishes to
  npm + tags git.

### Pre-commit hooks (local, parallel to CI)

Not wired yet. When ready: [husky](https://typicode.github.io/husky/) +
[lint-staged](https://github.com/lint-staged/lint-staged). Minimum:
prettier-fix + eslint-fix on staged files, `tsc --noEmit` on changed
packages. Keep heavy work (build, e2e, visual) in CI only.

## Conventions

- All diagnostic/debug code behind `if (DEBUG)` flag
- Console logs prefixed with `[baker]`
- GPU resources tracked and disposed explicitly — no leaks
- Each task file in .claude/tasks/ is a self-contained unit of work

## Output style — keep summaries SHORT

End-of-task summaries to the user must be brief. Plain language, no jargon, no
long explanations. Hard cap: ~150 words.

Required structure (use these headings, nothing more):
  **Changed:** 1–3 bullets, plain words.
  **Test:** 2–3 bullets — what to click, what to expect.
  **Note:** one line if anything is deferred or known-broken. Skip if not.

Do NOT in the user-facing summary:
- Restate the task description
- List every file touched
- Explain trade-offs already in the code/comments
- Add educational paragraphs
- Use phrases like "I have", "Successfully", "Now", "Then"

Detailed reasoning, decisions, and file-by-file diffs go ONLY in
`.claude/progress.md`'s Session Log — the user reads that on demand.

In-conversation `★ Insight` blocks during work are fine; the FINAL message must
be tight.

## Testing

Visual verification against Cornell Box:
1. Red color bleeding on left side of white sphere
2. Green color bleeding on right side of white sphere  
3. Soft shadow under sphere
4. Ceiling corners show faint color tint from adjacent walls

## Do NOT

- Upgrade Three.js or any dependency version
- Modify xatlas integration (UV unwrapping works — don't touch it)
- Add React, R3F, or any framework to `src/lib/` — the library stays raw Three.js
  so consumers can drop it into any stack. (The DCC-style demo under `src/demo/`
  uses Preact + @preact/signals + Tailwind v3 as of T-D2 — this is an exception
  scoped to the demo bundle. The library bundle has zero framework imports.)
- Add postprocessing to the LIBRARY bundle (`packages/baker-classic/`) — it masks bake quality issues. The shell-level Post-FX panel (`packages/demo-shell/inspector/PostFXPage.tsx`) is a demo-only showcase feature gated by the `postFXSettings.master` signal (off by default). Bake-QA workflow must keep master = off.
- Over-engineer — this is a focused library, not an engine
- Add code outside `packages/` or `apps/` once Roadmap Step 2 lands
- Cross-import between sibling packages (use `packages/shared/` or compose at the app layer)
- Put renderer-specific code in `packages/demo-shell/` — it stays generic
- Let a file grow past 300 LOC, a function past 50 LOC, or imports past 5 — split first

## Workflow Orchestration

### Plan first
- Any task with 3+ steps or architectural impact: plan mode before edits.
- If something goes sideways mid-task: STOP, re-plan, don't bash through.
- Plans live in `.claude/tasks/` as checkable items; mark items as you go.
- Detailed specs upfront beat ambiguity later.

### Verification before "done"
Never claim a task complete without proof:
- `npx tsc --noEmit` clean
- `build-verifier` green (size delta sane)
- Visual changes: Cornell Box check (see Testing) — red/green bleed, soft shadow
- Diff behavior vs. `master` when relevant

Sub-agent summaries describe INTENT, not result. After any worker that wrote
files: `Read` the changed file or dispatch `build-verifier` to confirm.

### Demand elegance (balanced)
- Non-trivial change: pause and ask "is there a simpler way?" before shipping.
- Hacky fix → redo as the elegant solution. "Knowing what I know now,
  implement it properly."
- Skip for one-line fixes. Don't over-engineer trivia.

### Autonomous bug fixing
- Bug report with logs / errors / failing test → just fix it. Don't ask for
  steps. Point at the failure, resolve it, verify.
- Root-cause, not Band-Aid (see Core Principles below).

### Self-improvement loop
- After ANY user correction: append the pattern to `.claude/tasks/lessons.md`
  with enough context that future-you won't repeat it.
- At session start: skim `lessons.md` alongside `progress.md` / `docs/`.
- Lessons stay forever; supersede with new entries, never delete.

### Core principles
- **Simplicity first** — minimal-impact changes; touch only what's necessary.
- **No laziness** — find root causes; no temp fixes; senior-dev standards.
- **Minimal blast radius** — no incidental refactors that introduce new bugs.

## Sub-agents — Development Workflow

This project uses a fleet of sub-agents in `.claude/agents/` to **offload context
work** from the main session. Workers run in their own context window and return
a compact summary; reading 800 lines of shader code in a worker costs zero tokens
in the main context. Over a long session this is the difference between hitting
compaction at hour 2 vs hour 8.

**All workers run on `model: sonnet`.** Sonnet is sufficient for execution work
(file edits, build runs, pattern matching, code review against fixed rules) and
costs ~1/5 of Opus. The main session keeps the user's chosen model for
orchestration, design decisions, and dialog.

### Agent roster

| Agent | Purpose | Tools | Dispatch when |
|---|---|---|---|
| `shader-engineer` | GLSL / Three.js Material / MRT / GLSL3 / BVH-shader interaction | Read, Edit, Write, Glob, Grep, Bash | ANY change to `src/lightmap/*Material.ts`, `src/denoise/*.ts`, or shader strings |
| `build-verifier` | `pnpm build`, parse output, report status + size delta | Read, Bash, Grep | After ANY meaningful edit. Cheap — dispatch liberally |
| `architecture-explorer` | Deep code reads, data-flow tracing, file:line citations | Read, Glob, Grep, Write | Starting a new phase, debugging an unfamiliar code path, planning a refactor |
| `code-reviewer` | Project-convention review (CLAUDE.md rules, RT disposal, BVH gotchas, no dep upgrades) | Read, Glob, Grep, Bash | Before marking a phase complete or committing |
| `progress-logger` | Append Session entry to `.claude/progress.md`, update Status table & task files | Read, Edit, Write | At end of every phase / session |

### Dispatch rules

**DO dispatch a sub-agent when:**
- The work needs >500 LOC of file reads to plan or execute (offloads context)
- You need to verify a build (cheap — always dispatch `build-verifier`)
- You're touching shaders (always dispatch `shader-engineer` — domain expertise + hard constraints)
- You're closing out a phase (`progress-logger` + `code-reviewer` in parallel)
- You need a second opinion on conventions before committing (`code-reviewer`)

**DO NOT dispatch a sub-agent when:**
- It's a single-file edit the main session already has loaded
- It's a TypeScript / type-fix the main session can do in one Edit
- The work needs <50 lines of reading
- The user is mid-dialog and waiting on a decision (sub-agents add latency)

**Parallelize:** when dispatching independent agents (e.g., `build-verifier` + `code-reviewer` after a change), dispatch them in a SINGLE message with multiple tool uses so they run concurrently.

### Brief carefully — workers don't see prior conversation

Sub-agent prompts must be self-contained. Per the agent's tool result, the worker's reply is the ONLY thing that lands back in main context. Brief like a smart colleague who just walked into the room: state the goal, what's already known/ruled out, what specific output you need. Terse "fix the shader" prompts produce shallow work.

### Trust but verify

A sub-agent's summary describes what it INTENDED to do, not necessarily what it did. After any agent that wrote files, the main session should `Read` the relevant changed file to confirm — or dispatch `build-verifier` to catch syntax/type damage.

## Coding Standards

All code must follow CONTRIBUTING.md. Key rules:

- GLSL 3.0 ES only, with MRT where applicable
- No `any` in TypeScript — use proper types
- Every WebGL resource must be tracked and disposed
- Try/finally for renderer state changes
- Yield to browser every 100ms during bake operations
- Console logs prefixed with `[baker]`, behind DEBUG flag in production
- See CONTRIBUTING.md for full rules

## Context-Driven Development

Before starting any session, read these files in order:
1. `.claude/progress.md` — what was done, what's next
2. `docs/DECISIONS.md` — why things are the way they are
3. `docs/FAILED-APPROACHES.md` — what NOT to try again
4. `docs/ARCHITECTURE.md` — how the system fits together
5. `docs/GLOSSARY.md` — what terms mean in this project

After every session, update:
1. `.claude/progress.md` — append session log with tasks completed, blockers, next steps
2. `docs/DECISIONS.md` — append any new decisions made during the session
3. `docs/FAILED-APPROACHES.md` — append any approaches that were tried and failed

NEVER delete entries from DECISIONS.md or FAILED-APPROACHES.md. Superseded decisions get their status changed to "superseded by D-XX", not removed. Failed approaches stay forever as warnings.
