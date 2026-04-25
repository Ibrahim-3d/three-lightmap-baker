# Task 01 — Baseline Verification

## Objective
Verify the existing baker works correctly on the Cornell Box scene with DIRECT lighting only (no bounces). This establishes the baseline before we add GI.

## Steps

1. Run `yarn dev` (or npm/pnpm — check package.json scripts)
2. Open the browser, verify the Cornell Box renders
3. Trigger a bake at default settings
4. Verify output:
   - Walls are lit where direct light from ceiling emitter reaches them
   - Sphere has a shadow underneath
   - AO is visible in corners
   - NO color bleeding (expected — bounces not implemented yet)
5. Screenshot the result → save to screenshots/01-baseline.png

## Diagnostic Checks

Add temporary logging to confirm the bake pipeline runs correctly:

- [ ] xatlas UV2 unwrap completes without error for all 7 meshes
- [ ] World position texture has non-zero values (not all black)
- [ ] Normal texture has non-zero values
- [ ] Ray tracing step processes all texels
- [ ] Output lightmap applied to meshes via UV2

## Success Criteria

- Bake completes without errors
- Direct lighting is visible on surfaces facing the ceiling light
- Shadow under sphere is visible
- Screenshot saved

## Failure Protocol

If the existing baker doesn't work on the Cornell Box:
- Check if scene geometry is compatible with xatlas (needs manifold meshes)
- Check if the emitter mesh is recognized as a light source
- Log the world position texture — if all zeros, UV-space rasterization failed
- Do NOT proceed to Task 02 until this works

## Files to Read First
- src/lightmap-baker.ts (main pipeline)
- src/scene.ts (scene setup)
- src/shaders/ (existing shader code)
