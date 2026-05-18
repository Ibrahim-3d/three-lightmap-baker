# Task: PT Viewport (erichlof integration)

**Goal:** Integrate erichlof's path tracer as the real-time viewport renderer for Atelier.
**Product impact:** Users see live PT preview while positioning objects; bake is static GI export.

## Architecture

```
src/pathtracer/           ← first-class reusable module (not demo-only)
  PTRenderer.ts           ← owns ping-pong targets, animate loop, uniforms
  chunks.ts               ← registers erichlof's GLSL chunks into THREE.ShaderChunk
  preprocess.ts           ← resolves #include <chunk> in shader strings
  shaders/
    vertex.glsl           ← fullscreen triangle (verbatim erichlof)
    screen-copy.frag.glsl ← ping-pong copy (verbatim erichlof)
    screen-output.frag.glsl ← edge-aware denoiser (verbatim erichlof)
    cornell-box.frag.glsl ← analytic scene: room + area light + dynamic sphere
    chunks/               ← 9 extracted GLSL chunks from PathTracingCommon.js
      uniforms_and_defines.glsl
      random_functions.glsl
      calc_fresnel_reflectance.glsl
      sphere_intersect.glsl
      box_intersect.glsl
      box_interior_intersect.glsl
      quad_intersect.glsl
      sample_quad_light.glsl
      main.glsl

src/demo/three/
  PTController.ts         ← wires PTRenderer to signals + SceneController

public/
  BlueNoise_R_128.png     ← required by pathtracing_main chunk
```

## Phases

### Phase 1 — pathtracer/ module ✅ DONE (tsc clean)
- [x] Create directory structure
- [x] Extract 9 GLSL chunks from PathTracingCommon.js → chunks/
- [x] preprocess.ts — #include resolver
- [x] chunks.ts — register into THREE.ShaderChunk
- [x] vertex.glsl + screen-copy + screen-output (verbatim from erichlof)
- [x] cornell-box.frag.glsl (adapted Cornell_Box_Fragment.glsl + dynamic sphere)
- [x] PTRenderer.ts — ping-pong RTs, uniforms, render(), dispose()
- [x] BlueNoise_R_128.png → public/

### Phase 2 — Demo wiring (NEXT)
- [ ] PTController.ts — owns PTRenderer, wires to SceneController + signals
- [ ] Add 'pathtraced' render mode to LAYERS in modes.ts
- [ ] SceneController: expose sphere Object3D position → PTController
- [ ] Wire OrbitControls 'change' → ptRenderer.notifyCameraMoving()
- [ ] Wire TransformControls 'change' → PTController.syncSpherePosition()
- [ ] isStale / resetAccumulation on static mesh change
- [ ] Viewport switch: renderMode='pathtraced' → stop normal rAF, start PT loop
- [ ] Bake lifecycle: PT pause → baker runs → PT resume

### Phase 3 — Hybrid post-bake (future)
- [ ] Static meshes sample lightmap texture in PT shader
- [ ] Dynamic sphere still PT-lit on top

## Key decisions
- Cornell Box = all analytic geometry. Zero BVH for Phase 1+2.
- Dynamic sphere = SphereIntersect + uSpherePosition uniform. Moving = update uniform only.
- sceneIsDynamic = true → sampleCounter always 1.0 → always live, never converges.
- ScreenOutput denoiser (37-pixel edge-aware kernel) runs every frame → clean at 1spp.
- PTRenderer in src/pathtracer/ (library-reusable). PTController in src/demo/ (signals wiring).
