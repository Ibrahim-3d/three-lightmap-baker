# Bake correctness review — 2026-09-27

Status: draft, not ready to merge or certify for production.

This branch reconstructs the previously uncommitted correctness work. It changes lighting output deliberately: the lightmap stores irradiance, positional lights respect range and decay, and rectangular emitters use their area, orientation and geometric term. Scene preflight rejects unsupported deformation and malformed geometry; visible static instances are expanded into isolated bake meshes until result disposal. Atlas normals carry chart identity for bounded filtering. Cancellation and exceptions release owned resources, and AO rebakes preserve previous output until every group succeeds.

## Validation

`pnpm run check`, `pnpm run build`, and `pnpm run test:api-import` are the static/package gates. The focused browser suite is `pnpm run test:correctness`; set `BAKER_CHROMIUM_PATH` to test a particular Chromium executable.

The 11 focused tests cover transformed light targets, inherited visibility, light packing, instance restoration, invalid scenes, option validation, animation callback exceptions, suspended-frame cancellation, numerical lighting, chart filtering, and bake/AO cleanup. On the tested serverless Chromium 138 SwiftShader build all 11 pass. Lifecycle measurements return GPU texture allocation count to its baseline.

## Merge blockers and remaining qualification

1. **Secondary sky compatibility:** tested serverless Chromium 148 and 153 SwiftShader builds return zero for the secondary-sky fixture; Chromium 138 returns the expected pi/2 irradiance. Direct sky, attenuation, 17-light accumulation and area-light measurements pass. The cause is unresolved; this is not evidence that all newer Chromium or hardware drivers fail. Keep the assertion enabled and reproduce on the supported hardware/browser matrix before merging. CI now runs the suite without skipping this test.
2. **xatlas worker lifecycle:** cancellation is checked before and after loading/packing, but cannot interrupt an in-flight worker call. The installed xatlas-three wrapper exposes no worker termination API, and its packing implementation does not reset its internal busy state in a finally block. A worker failure/hang can therefore prevent recovery; the outer bake cleanup does not fully solve this dependency limitation. A cancellable, restartable worker boundary remains necessary to satisfy complete cancellation/exception coverage.
3. **Atlas qualification:** packing now uses the requested resolution, reserves padding, validates a single atlas and finite in-range UVs, and restores geometry on failure. Stress coverage for pathological charts, actual xatlas output dimensions, low-resolution packing, and supersampled padding is still needed before claiming padding is guaranteed in every supported case.
4. **Hardware and visual release gates:** no hardware GPU validation or complete existing release suite was performed in this environment. These focused tests establish specific invariants, not industry-standard or production certification.

## Behavioral constraints

- Only one bake can be active at a time because the atlas helper has shared state.
- Dispose a result to restore its original geometry and instance presentation. Static instance expansion consumes additional memory.
- Skinned/morphed geometry and partial draw ranges are rejected. Transparent, transmissive, vertex-colored and mixed unsupported materials produce preflight warnings because their bake transport is approximate.
- More than 16 lights compile a larger shader bound; texture-capacity checks are enforced, but large-light-count performance needs workload testing.
