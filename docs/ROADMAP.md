# Roadmap

Last updated: 2026-06-04

## Now (product hardening)
- **Library API stability:** Maintain dual constructor support (`renderer, opts` and `{ renderer, ...opts }`) and keep docs/examples synced to shipped behavior.
- **Publish readiness:** Validate `npm pack` output and first release flow for `three-lightmap-baker`.
- **Demo reliability:** Keep `apps/playground` as the visual integration test bed and preserve existing bake workflows.
- **Validation:** iGPU/TDR validation for high-res bakes and Cornell visual smoke checklist.

## Next (headless staging)
- **Stage 1:** Keep renderer-injected bake API as the contract boundary.
- **Stage 2:** Add optional context/renderer adapter interface for offscreen browser workers and test harnesses.
- **Stage 3:** Prototype Node-compatible runtime path (headless-gl/WebGPU/offscreen strategy), with explicit capability matrix and limitations.
- **Stage 4:** Add automation-focused non-UI examples and CI smoke checks around API import + basic orchestration.

## Later
- **Features:** Light probes and richer lighting authoring workflows.
- **Quality:** Visual regression automation for Cornell and larger scene presets.
- **Infrastructure:** PR preview deploys and stronger bundle-size/perf budgets.
- **UX:** Additional editor polish (selection, ergonomics, scene tooling).
