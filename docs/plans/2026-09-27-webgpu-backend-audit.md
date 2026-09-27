# WebGPU Backend Audit

Date: 2026-09-27

## Decision

Do not treat WebGPU as a renderer swap.

The target architecture is:

```text
                     LightmapBaker
                          |
                  shared bake pipeline
                          |
                 backend-neutral boundary
                    /             \
                   /               \
            WebGL backend      WebGPU backend
            current path       new path
```

The project should keep one public baker and one product model. WebGL remains
the supported fallback while WebGPU is introduced behind the same high-level
bake API.

The best migration path is:

1. remove direct WebGL assumptions from orchestration and lifecycle code;
2. port simple GPU utility passes to backend-neutral TSL/node paths where practical;
3. implement the ray-heavy bake/AO work as a WebGPU-native compute path;
4. prove output/lifecycle parity before claiming WebGPU support;
5. optimize WebGPU only after parity is established.

## Why this is feasible now

The repository currently pins:

- Three.js `0.185.1`;
- `three-mesh-bvh` `0.9.14`.

That pairing is useful because `three-mesh-bvh` 0.9.x now includes the
`three-mesh-bvh/webgpu` entrypoint and `BVHComputeData`, which requires
Three.js r185 or newer.

`BVHComputeData` packs scene BVHs into GPU storage buffers and exposes WebGPU
ray traversal functions for Three.js TSL/compute workflows. This removes the
need for this project to invent a separate WebGPU BVH representation from
scratch.

Important caveat: the upstream WebGPU BVH API is explicitly marked unstable.
It should therefore stay behind an internal backend boundary rather than leak
into the public Lightmap Baker API.

## Current shape of the code

### Green — mostly backend-independent

These areas should not need fundamental redesign for WebGPU:

- scene preflight and validation;
- mesh collection and visibility rules;
- xatlas UV generation and atlas packing decisions;
- mesh partitioning by resolution / texel density;
- CPU-side material extraction;
- light collection and option resolution;
- progress hooks, cancellation contract and bake statistics;
- result-to-mesh lightmap ownership semantics;
- package/export API shape.

These are the parts of the machine that decide **what to bake** and **how the
job is organized**. They should remain shared.

### Yellow — needs a backend boundary

These areas currently contain WebGL-specific control logic but their purpose is
not inherently WebGL-only.

| Area | Current WebGL assumption | Migration target |
| --- | --- | --- |
| `rendererAdapter.ts` | stores only `WebGLRenderer` and identifies `isWebGLRenderer` | identify backend kind and expose backend operations/capabilities |
| `runtimeCapabilities.ts` | reports only WebGL2-oriented bake capability | report WebGL/WebGPU availability, selected backend and feature support |
| `LightmapBaker.ts` | calls `getContext()`, checks `EXT_color_buffer_float`, listens for `webglcontextlost` | move validation/loss handling into backend implementation |
| `gpu/Capabilities.ts` | reads WebGL debug renderer info directly | backend-owned GPU/capability reporting |
| `bake/pipeline.ts` | calls `gl.finish()` and reads renderer capabilities directly | backend-owned queue drain and limits |
| `bake/groups.ts` | passes `WebGLRenderer` through every GPU stage | pass backend/context abstraction |
| `bake/result.ts` | stores `WebGLRenderer`; AO rebake uses WebGL context-loss events | backend-neutral result lifecycle |
| texture export/readback | uses `readRenderTargetPixels` | backend-neutral texture readback |
| render-target allocation | constructs `WebGLRenderTarget` in many modules | backend-owned texture/target allocation |
| viewport/scissor state | manipulates WebGL renderer state directly | shared renderer-state helper or backend operations |

This is the first implementation target because it prevents WebGPU-specific
checks from spreading through the rest of the code.

## Red — GPU code that must be ported or replaced

### 1. Atlas/G-buffer generation

Relevant files include:

- `packages/baker-classic/src/atlas/renderAtlas.ts`
- `packages/baker-classic/src/utils/MaterialTextures.ts`

Current behavior is implemented with `ShaderMaterial`, GLSL and
`WebGLRenderTarget`.

Target:

- preserve the same position/normal/surface-albedo semantic outputs;
- port simple materials to TSL/node materials or a WebGPU-compatible render
  path;
- keep output texture conventions identical so the higher-level baker does not
  care which backend generated them.

### 2. Lightmap path tracing

Relevant files include:

- `packages/baker-classic/src/lightmap/Lightmapper.ts`
- `packages/baker-classic/src/lightmap/LightmapperMaterial.ts`

This is the largest WebGL lock today.

The current path uses:

- GLSL `ShaderMaterial`;
- `MeshBVHUniformStruct` and GLSL BVH helper code;
- MRT render targets for direct + indirect output;
- fullscreen/scissored raster draws;
- progressive alpha-style accumulation.

Target WebGPU path:

- use `BVHComputeData` from `three-mesh-bvh/webgpu`;
- dispatch texel work through WebGPU compute;
- write direct/indirect results to storage textures/buffers;
- preserve current sample/bounce/light semantics at the public API level;
- retain the existing WebGL implementation as the fallback.

This is **not** a line-for-line GLSL-to-WGSL rewrite. It should be a native
compute implementation of the same light-baking job.

### 3. AO

Relevant files:

- `packages/baker-classic/src/lightmap/AOMapper.ts`
- `packages/baker-classic/src/lightmap/AOMaterial.ts`

AO uses the same GLSL BVH traversal pattern as the main lightmapper.

Target:

- use the same WebGPU BVH compute data as the main bake;
- keep AO output semantics unchanged;
- share scheduling/cancellation logic with the WebGPU lightmapper.

### 4. Refinement and utility passes

Relevant files include:

- `lightmap/Composite.ts`
- `lightmap/CompositeMaterial.ts`
- `lightmap/DilationMaterial.ts`
- `denoise/DenoiseMaterial.ts`
- `lightmap/Downscale.ts`
- `probes/readFloatTexture.ts`
- `utils/exportLightmap.ts`

These are simpler than the ray-tracing passes.

Target:

- prefer TSL/node materials where the same pass can run through both the
  WebGPU renderer family and its WebGL2 fallback;
- use backend-neutral readback;
- do not keep parallel GLSL/WGSL copies for trivial image operations unless a
  measured limitation forces it.

### 5. Experimental PT packages

Relevant files:

- `packages/pt-renderer/src/PTRenderer.ts`
- `packages/pt-baker/src/PTBaker.ts`
- `packages/pt-baker/src/PTBakeMaterial.ts`

These are heavily WebGL/GLSL-specific.

They are not the first migration target. The shipping classic baker should
establish the backend architecture first. After that, the experimental PT
packages can either reuse the WebGPU compute infrastructure or remain
WebGL-only until there is a product reason to port them.

## Special case: probes

The current preferred native probe path depends on Three.js'
`LightProbeGrid` integration used with `WebGLRenderer`.

WebGPU lightmap baking should therefore be split into two milestones:

1. **lightmap parity** — WebGPU can bake, refine, export and apply static
   lightmaps;
2. **probe parity** — the preferred dynamic-object lighting path also has a
   supported WebGPU strategy.

The legacy probe-volume path may remain useful as a compatibility fallback, but
it should not silently redefine the existing native probe promise.

## Proposed backend contract

Do not expose raw WebGPU concepts through the public `LightmapBaker` API.

Internally, evolve the existing renderer adapter toward a contract that owns
operations such as:

```text
backend kind
renderer initialization/readiness
capability detection
maximum texture/storage limits
target/texture allocation
render/compute submission
texture readback
queue drain / completion
device/context loss detection
viewport/scissor state when relevant
resource disposal
```

The WebGL implementation can initially wrap the behavior that already exists.
The WebGPU implementation can be added without changing the public bake API.

Avoid making the adapter a giant copy of every Three.js renderer method. Only
abstract behavior the baker itself needs.

## Recommended implementation sequence

### W0 — audit and contract

Status: this document.

- inventory direct WebGL dependencies;
- define backend capabilities and required operations;
- keep behavior unchanged.

Exit condition:

- every WebGL-specific concern has an owner;
- no WebGPU implementation yet.

### W1 — capability/lifecycle separation

- extend `getLightmapRuntimeCapabilities()` with WebGPU fields;
- give `LightmapRendererAdapter` an explicit backend kind;
- move extension checks, context/device-loss handling, GPU identification and
  queue draining behind the adapter/backend layer;
- stop passing raw `WebGLRenderer` through orchestration modules where only
  backend operations are needed.

Exit condition:

- existing WebGL tests remain green;
- user-visible behavior is unchanged;
- orchestration no longer calls raw WebGL context APIs.

### W2 — portable utility passes

Port the low-risk passes first:

1. downscale;
2. composite;
3. dilation;
4. denoise/refinement;
5. atlas copy/material-texture helpers;
6. readback/export plumbing.

Exit condition:

- these passes can run through the intended WebGPU renderer family;
- WebGL baseline output remains unchanged within accepted tolerances.

### W3 — WebGPU atlas/G-buffer prototype

Port position/normal/surface-albedo atlas generation.

Exit condition:

- same test scene produces equivalent atlas occupancy and world-space data on
  WebGL and WebGPU paths.

### W4 — WebGPU AO compute prototype

Use `BVHComputeData` for a contained first ray-query workload.

Why AO first:

- simpler than full multi-bounce GI;
- exercises BVH traversal, random hemisphere sampling, storage output and
  progressive sampling;
- gives us a meaningful correctness comparison before porting the largest
  shader.

Exit condition:

- AO numerical/visual parity on focused test scenes;
- cancellation and disposal proven.

### W5 — WebGPU direct + indirect lightmap compute

Move the main bake to WebGPU compute while preserving:

- direct/indirect separation;
- light types and attenuation behavior;
- material/albedo sampling;
- 0–4 bounce semantics;
- progressive accumulation;
- tiling/work-budget behavior or an equivalent WebGPU-safe scheduler.

Exit condition:

- representative scenes pass WebGL/WebGPU parity tests;
- no resource leaks after repeated bake/cancel/dispose cycles.

### W6 — product integration

- backend selector / automatic preference policy;
- WebGPU hardware tests;
- WebGL fallback tests;
- docs and examples;
- explicit known limitations;
- benchmark representative workloads before making performance claims.

Only here should WebGPU be described as supported.

### W7 — WebGPU optimization

After parity:

- tune workgroup sizes;
- reduce intermediate textures/copies;
- evaluate direct storage-buffer material data;
- evaluate compute-native dilation/denoise;
- remove WebGL-inspired workarounds that do not benefit WebGPU;
- benchmark memory, bake time and cancellation responsiveness.

## First implementation slice

The first code PR after this audit should be deliberately boring:

**"backend capability/lifecycle boundary — no rendering changes."**

It should touch approximately:

- `rendererAdapter.ts`;
- `runtimeCapabilities.ts`;
- `gpu/Capabilities.ts`;
- `LightmapBaker.ts`;
- `bake/pipeline.ts`;
- tests for runtime/backend reporting.

It should **not** port `LightmapperMaterial` yet.

That gives the project a clean socket for WebGPU without risking the stable
WebGL baker.

## Acceptance matrix

| Requirement | WebGL baseline | WebGPU milestone |
| --- | --- | --- |
| public `LightmapBaker` API | preserve | same API |
| UV generation | preserve | shared |
| scene/material collection | preserve | shared |
| direct lighting | preserve | numerical/visual parity |
| indirect GI | preserve | numerical/visual parity |
| AO | preserve | numerical/visual parity |
| refinement | preserve | parity |
| export | preserve | parity |
| cancellation | preserve | parity |
| repeated dispose/rebake | preserve | no leaks |
| context/device loss | preserve WebGL behavior | explicit WebGPU device-loss behavior |
| native probes | preserve | separate parity milestone |
| WebGL fallback | supported | remains supported |

## Risk register

### High — shader semantics drift

A compute implementation can accidentally change energy balance, bounce
semantics, random sampling or material lookup behavior.

Mitigation: compare intermediate direct, indirect, AO, position, normal and
surface-albedo outputs, not only the final composite.

### High — unstable upstream WebGPU BVH API

`BVHComputeData` is explicitly unstable.

Mitigation: isolate it behind the internal backend layer and add a focused
adapter test so upstream changes have one repair point.

### Medium — browser/device differences

WebGPU availability does not mean identical limits or behavior on every GPU.

Mitigation: explicit capability reporting and hardware test coverage; retain
WebGL fallback until measured support is good enough.

### Medium — premature optimization

Rewriting everything directly as compute could make parity debugging harder.

Mitigation: port easy image passes first, then AO, then the full lightmapper.

### Medium — probe support lag

Static WebGPU baking could ship before the native probe path has equivalent
support.

Mitigation: track lightmap parity and probe parity as separate milestones and
document the distinction.

## Non-goals for the first WebGPU milestone

- removing WebGL;
- changing the public bake API;
- porting every playground visual effect;
- porting the experimental PT renderer before the classic baker;
- claiming WebGPU is faster before benchmarks;
- combining the Node/headless project with the WebGPU migration.

Headless and WebGPU may eventually share backend infrastructure, but they are
separate product problems and should not block each other.
