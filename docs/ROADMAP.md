# Roadmap

Last updated: 2026-06-02

## Now (stability + cleanup)
- Split remaining oversized files and flip the CI modularity job to hard-fail.
- iGPU/TDR validation for high-res bakes, plus the Cornell visual smoke checklist.
- Performance/tech-debt sweep in the classic baker pipeline.
- PT renderer parity checks against reference scenes.

## Next (productization)
- CI Tier 2: bundle-size checks, per-app build matrix, and Playwright smoke tests.
- Tighten package boundaries and ensure each package is ready for publishing.
- Decide default bake engine labeling in the UI (classic vs PT) and document it.

## Later
- Light probes (Task 11), after sampler decisions settle.
- Visual regression for Cornell Box outputs.
- PR preview deploys for apps.
