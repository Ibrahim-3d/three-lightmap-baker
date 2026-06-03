# Roadmap

Last updated: 2026-06-03

## Now (stability + cleanup)
- **Modularity Split:** Split remaining oversized files (> 300 LOC) and flip the CI modularity job to hard-fail.
  - `apps/playground/src/three/SceneController.ts` (~1150 LOC)
  - `apps/playground/src/CornellBoxExample.ts` (~750 LOC)
  - `packages/pt-renderer/src/BVHSceneBuilder.ts` (~670 LOC)
  - `packages/baker-classic/src/lightmap/LightmapperMaterial.ts` (~360 LOC)
- **Validation:** iGPU/TDR validation for high-res bakes, plus the Cornell visual smoke checklist.
- **Diagnostics:** Remove or clarify `TODO(user)` stubs in `Capabilities.ts` and `adaptiveTileSize`.
- **PT Parity:** PT renderer parity checks against reference scenes.

## Next (productization)
- **CI Tier 2:** bundle-size checks, per-app build matrix, and Playwright smoke tests.
- **UI/UX:** Multi-object selection in Outliner/Inspector.
- **Post-FX:** Implement "look-correction" layer (ESL-style multiply-into-diffuse) as a toggle.
- **Demo Polish:** Audio + compression-pass for backrooms demo.
- **Refinement:** Proper `estimateTimeRemaining()` formula for bake progress.

## Later
- **Features:** Light probes (Task 11), after sampler decisions settle.
- **Optimization:** AO independent budget (separate samples from indirect).
- **Automation:** Visual regression for Cornell Box outputs.
- **Infrastructure:** PR preview deploys for apps.

