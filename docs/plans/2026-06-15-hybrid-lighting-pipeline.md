# Hybrid Lighting Pipeline Plan

Date: 2026-06-15

## Goal

Move Three Lightmap Baker from a browser lightmap baker into a browser-first lighting pipeline for Three.js.

The target system should support:

1. Static baked GI through lightmaps.
2. Debuggable lightmap workflow views.
3. Baked light probes for dynamic objects.
4. Optional real-time companion passes for screen-space bounce, contact occlusion, and reflection enhancement.
5. A future WebGPU acceleration path.

This is now urgent roadmap work, not a distant research bucket.

## Product Rule

Do not replace the baker with SSGI or a real-time renderer.

The product hierarchy is:

```text
baked lightmaps = stable static GI
baked probes = dynamic object bridge
screen-space companion passes = optional real-time enhancement
WebGPU = future acceleration path
```

## Phase 1: Debug-View Showcase

### Required views

- Texel density view.
- Lightmap atlas view.
- Direct-only pass.
- Indirect/GI-only pass.
- AO-only pass.
- Final composite.
- Raw bake vs dilation vs denoise where visually useful.
- GPU/runtime diagnostics panel.

### Required outputs

- Committed screenshots under `screenshots/`.
- README debug-view section.
- Launch capture support for these views where practical.
- Stable test hooks for switching debug views from Playwright.

### Acceptance criteria

- README can explain the full pipeline visually without requiring the user to run the demo.
- A technical artist can see that this is a production workflow, not only a final render.

## Phase 2: Baked Light Probes

### Core idea

After the static scene is baked, generate probes that store approximate local indirect lighting. Dynamic objects can sample the nearest probes and inherit the room lighting.

### MVP implementation

- Add probe grid generation from scene bounds.
- Support configurable grid spacing and bounds override.
- For each probe, compute RGB irradiance from baked lighting or a reduced ray-tracing pass.
- Store probe data in a compact internal structure.
- Add colored debug spheres for probe visualization.
- Add probe interpolation for a test object.
- Save/load probe data in demo Project JSON v1.

### Suggested module boundary

```text
packages/baker-classic/src/probes/
  generateProbeGrid.ts
  sampleProbeLighting.ts
  ProbeVolume.ts
  ProbeDebugView.ts
  interpolateProbes.ts
```

### Acceptance criteria

- A moving test sphere changes lighting as it moves through a baked room.
- Probe colors visibly match nearby bounced lighting.
- Probe data survives save/load in the demo project format.
- Probe resources have explicit dispose rules.

## Phase 3: Dynamic Object GI Demo

### Demo sequence

1. Load room scene.
2. Bake static lightmaps.
3. Generate probes.
4. Move a white/chrome/product object through the scene.
5. Toggle between:
   - baked room only
   - probe lighting only
   - final composite
6. Show debug probe grid.

### Acceptance criteria

- The demo makes it obvious why probes matter.
- The object receives visible warm/color bounce from the room.
- The demo can be recorded as a short launch video.

## Phase 4: Hybrid Runtime Companion Passes

### Purpose

Add real-time enhancement where baked data cannot respond fast enough.

### Candidate passes

- SSGI companion pass for small screen-space bounce.
- GTAO-style stronger contact occlusion.
- SSR/reflection companion only if it improves interiors/configurators.
- Temporal accumulation / denoise experiments for noisy companion passes.

### Rule

These passes must be optional. The baker should still work without them.

### Acceptance criteria

- Clear toggles separate baked, probe, and screen-space contributions.
- No claims that SSGI is equivalent to baked GI.
- Screen-space limitations are documented.

## Phase 5: WebGPU Acceleration

### Purpose

Explore faster bake/probe generation and modern browser GPU workflows.

### Required staging

- Extend `getLightmapRuntimeCapabilities()` with WebGPU capability fields.
- Add a design doc for WebGPU compute bake/probe generation.
- Prototype one isolated WebGPU pass behind an experimental flag.
- Keep WebGL as the supported baseline until WebGPU path is proven.

### Acceptance criteria

- WebGPU experiments cannot break the WebGL package.
- README does not imply WebGPU is required.
- Runtime capability output makes WebGPU status explicit.

## Phase 6: Headless Strategy

### Current status

Node-safe capability probing exists. True Node baking is not implemented.

### Required decision

Choose one explicit renderer strategy before implementing real headless:

- Browser automation as the official headless path.
- WebGPU runtime path.
- headless-gl or equivalent OpenGL emulation.
- Another explicit renderer/context provider.

### Acceptance criteria

- No hidden fallback pretending Node can bake when it cannot.
- `getLightmapRuntimeCapabilities()` remains truthful.
- Non-browser CI appears only when a real backend exists.

## Documentation Updates Required With Each Phase

- `docs/ROADMAP.md`
- `docs/API_STATUS.md`
- `docs/LAUNCH_READINESS.md`
- README feature list
- README limitations
- README screenshots / debug-view section

## Launch Story After This Plan

The final story should be:

```text
Bake static GI in the browser.
Inspect texel density, atlas, direct, indirect, AO, and final composite.
Generate probes from the baked scene.
Move dynamic objects through the room and inherit bounced lighting.
Optionally enhance the result with real-time screen-space passes.
Prepare for WebGPU acceleration without abandoning WebGL users.
```
