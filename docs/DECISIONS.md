# Decision Log

Every non-trivial technical decision is recorded here. Format:

## D-[number]: [short title]
- **Date:** YYYY-MM-DD
- **Status:** accepted | superseded by D-XX | rejected
- **Context:** Why this decision came up
- **Decision:** What we chose
- **Alternatives considered:** What else we looked at and why we rejected it
- **Consequences:** What this decision enables and constrains

---

## D-001: Two-pass architecture (UV rasterization → ray tracing)

- **Date:** 2026-04-26
- **Status:** accepted
- **Context:** Prior attempt used single-pass UV-space rasterization with inline path tracing. This required overriding gl_Position AND tracing rays in the same shader, which created matrixWorld propagation bugs (12 integration bugs over 4 hours).
- **Decision:** Split into two passes. Pass 1 rasterizes geometry into UV space to create world-position and normal textures. Pass 2 ray-traces from those stored positions. The renderer is used normally in both passes.
- **Alternatives considered:**
  - Single-pass UV-space rasterization + inline ray tracing: rejected due to 12 integration bugs stemming from fighting Three.js's rendering pipeline
  - CPU-side ray tracing per texel: rejected due to speed (viable as fallback but not primary)
  - Hemicube per texel (pmndrs/react-three-lightmap approach): rejected due to quality ceiling
- **Consequences:** Slightly more GPU memory (position + normal textures exist alongside lightmap). Much simpler shader code. No matrixWorld hacks. Each pass is independently testable.

## D-002: Fork lucas-jones, not build from scratch

- **Date:** 2026-04-26
- **Status:** accepted
- **Context:** lucas-jones/three-lightmap-baker has a working two-pass architecture with xatlas UV2 unwrapping, but lacks bounce lighting. Our prior from-scratch build had correct bounce shaders but broken architecture.
- **Decision:** Fork lucas-jones for architecture, port our bounce shader logic into his ray tracing step.
- **Alternatives considered:**
  - Continue debugging from-scratch build: rejected after 4 hours of debugging with 4 wrong diagnoses
  - Use pmndrs/react-three-lightmap: rejected — dead since 2022, broken on R3F 9, hemicube quality ceiling
  - Blender bake pipeline: rejected — requires DCC round-trip, breaks Atelier's "no install" value prop
- **Consequences:** Inherit lucas-jones's xatlas integration (working), scene BVH construction (working), UV-space rasterization (working). Need to add: bounce lighting, material textures, denoising, API surface, multiple light types, light probes.

## D-003: GLSL 3.0 with MRT

- **Date:** 2026-04-26
- **Status:** accepted
- **Context:** Pass 1 needs to output both world position AND world normal. Without MRT, this requires rendering the same geometry twice.
- **Decision:** Use GLSL 3.0 ES with Multiple Render Targets. Single geometry pass outputs to both textures simultaneously via layout(location=N) out declarations.
- **Alternatives considered:**
  - Two separate passes for position and normal: rejected — doubles vertex processing cost for no benefit
  - GLSL 1.0 with gl_FragData: rejected — deprecated, less portable
- **Consequences:** Requires WebGL2 (no WebGL1 fallback). This is acceptable — our target hardware (RTX 3060+ / M2 Pro+) all support WebGL2.

## D-004: Private until Atelier ships, open-source after validation

- **Date:** 2026-04-26
- **Status:** accepted
- **Context:** This baker is the first browser-native lightmap baker with GI for Three.js. Open-sourcing it would benefit the community but could also benefit competitors (Pascal, Shapespark's web tools).
- **Decision:** Keep private during Atelier development. Open-source after Atelier has 50-100 paying customers.
- **Alternatives considered:**
  - Immediate open source (MIT): rejected — burns the GitHub launch moment before Atelier exists to convert attention into signups
  - Permanent proprietary: rejected — open-source after validation provides developer relations value and community maintenance
  - Published demo without source: acceptable intermediate step for portfolio purposes
- **Consequences:** No community contributions during development. All maintenance is solo. But competitive advantage preserved during the critical 0→1 phase.
