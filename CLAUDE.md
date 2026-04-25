# Lightmap Baker — Claude Code Instructions

## Project

Browser-native lightmap baker with path-traced global illumination for Three.js.
Fork of lucas-jones/three-lightmap-baker, extended with multi-bounce GI.

## Stack

- Three.js (check package.json for exact version — DO NOT upgrade)
- three-mesh-bvh (GPU-accelerated BVH raycasting)
- three-gpu-pathtracer (reference for path tracing shader code)
- xatlas-three (auto UV2 unwrapping)
- TypeScript strict mode
- Vite dev server

## Architecture — Two-Pass Bake

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

## Key Files

- src/lightmap-baker.ts — main orchestrator
- src/shaders/ — GLSL shaders for both passes
- src/xatlas/ — UV unwrapping integration
- src/scene.ts — Cornell Box test scene (and other test scenes)

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
- Add React, R3F, or any framework — this is raw Three.js
- Add postprocessing (SSAO, bloom, tone mapping) — they mask bake quality issues
- Over-engineer — this is a focused library, not an engine

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

## File Naming

- kebab-case for files: `gap-flood.ts` not `gapFlood.ts`
- See CONTRIBUTING.md naming table for full conventions

## Before Committing

1. `npx tsc --noEmit` — zero errors
2. `npx eslint src/` — zero errors, warnings acceptable but fix if easy
3. `npx prettier --check src/` — all files formatted

## Modularity

- Max 300 lines per file, 50 lines per function
- Max 5 project imports per file
- No circular imports, no module-level mutable state
- See CONTRIBUTING.md "Code Modularity Rules" for full details
- CHECK THESE BEFORE EVERY COMMIT

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
