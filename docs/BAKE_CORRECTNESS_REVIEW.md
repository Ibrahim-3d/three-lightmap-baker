# Bake correctness review — 2026-09-27

Status: correctness fixes implemented; hardware qualification remains outstanding. Keep the PR in draft until the hardware gate passes.

The branch corrects light targets, attenuation, area sampling and light-count handling; validates and isolates scene geometry; restores static instances; separates chart filtering; and stages AO rebakes so failed work preserves existing output.

## Follow-up fixes

### Secondary sky

The previous numerical fixture returned zero instead of pi/2 on serverless Chromium 148/153 SwiftShader. Diagnostic shader reads of the scalar bounce uniform disagreed with the value reported by GL. Packing the bake settings into two explicit `vec4` records restores the expected result. CPU-facing uniforms are retained and synchronized before every draw. This is an empirically verified compatibility fix; it does not establish the precise upstream driver defect.

Material records now use integer texel fetches, and material atlas reads use explicit LOD zero inside divergent path traversal. The regression still checks the same expected lighting, including a blocked zero-bounce path and a four-bounce limit.

### Worker ownership and recovery

Each atlas operation owns its worker, RPC requests, callback ports, abort listener and timeout. The worker is terminated on success, cancellation, RPC failure, script error, WASM initialization rejection, message failure or timeout. A subsequent pack creates a fresh worker instead of inheriting a stuck internal busy flag. Geometry is restored when packing fails or is aborted.

Loader fetches have a 30-second deadline; worker operations have a 120-second deadline. A fresh WASM instance per operation trades some initialization cost for bounded lifetime and deterministic recovery. Custom asset URLs remain supported by `loadXAtlasThree`, which now also accepts an abort signal.

### Atlas boundaries

Padding is checked in final output pixels using xatlas's actual returned width/height. An oversized internal atlas can no longer silently reduce the requested gap. Packing retries with adjusted padding/density, caps individual chart dimensions, and rejects layouts that cannot fit. Failed retries restore input geometry.

The current xatlasjs wrapper uses 16-bit indices internally. Inputs and remapped outputs above 65,535 vertices are explicitly rejected instead of silently wrapping indices; split such meshes before baking. Triangle corners are separated in temporary raster geometry so charts touching at a single indexed vertex cannot overwrite each other's labels.

## Validation

| Gate | Result |
| --- | --- |
| TypeScript, examples, ESLint, formatting (`pnpm run check`) | Pass |
| Production/package build and bundle budgets (`pnpm run build`) | Pass |
| ESM/CJS, packed installation, TypeScript declarations (`pnpm run test:api-import`) | Pass |
| Focused correctness suite, Chromium 138 SwiftShader | 14 passed |
| Focused correctness suite, Chromium 148 SwiftShader | 14 passed |
| Focused correctness suite, Chromium 153 SwiftShader | 14 passed |
| Full release suite, Chromium 148 SwiftShader | Initial run: 46 passed, 1 failed, 1 skipped. Sole failure fixed; affected preset suite: 4/4 passed on rerun |
| Hardware GPU gate | Unavailable: this environment exposes SwiftShader and no GPU device |

The release failure was an existing external Draco-decoder fetch in the packaged Gym/Desert/Backrooms presets. Those presets now use the decoder assets shipped with Three.js; all four scene-preset tests pass after that fix. The skipped test is the opt-in `BAKER_MEASURE_PROBE_SHOWCASE` density/capture benchmark. The full suite was not repeated after the isolated decoder fix.

The focused suite covers numerical transport, targets/visibility/instancing, invalid scenes/options, callback exceptions and cancellation, script/WASM/RPC/timeout recovery, mid-pack abort followed by successful reuse, low-resolution rejection, six-chart boxes, very thin charts, dense packing rejection/restoration, index overflow, chart filtering, 2× supersampling, and bake/AO resource restoration. Worker fault tests leave zero live workers; GPU lifecycle tests return texture allocations to baseline.

## Reproduction and remaining gate

Software compatibility run:

```sh
BAKER_CHROMIUM_PATH=/path/to/chromium pnpm run test:correctness
BAKER_CHROMIUM_PATH=/path/to/chromium BAKER_E2E_ANGLE=swiftshader BAKER_E2E_VIDEO=off BAKER_E2E_TEST_TIMEOUT_MS=120000 pnpm run test:release
```

On a machine with a real GPU and installed Chrome:

```sh
pnpm install --frozen-lockfile
pnpm exec playwright install chromium
pnpm run test:release:hardware
```

The hardware command checks the actual WebGL renderer, rejects software fallbacks, and runs both the focused numerical suite and the full release suite. Clear any software-specific `BAKER_E2E_ANGLE` override first. Passing software tests is not a hardware or visual production certification. Representative production scenes still need visual review on supported devices.

## Behavioral constraints

- Only one bake/atlas mutation operation is allowed at a time.
- Dispose a result to restore its original geometry and instance presentation. Static instance expansion uses additional memory.
- Skinned/morphed geometry and partial draw ranges are rejected. Some material features remain approximate and emit preflight warnings.
- More than 16 lights compile a larger shader bound; large-light-count performance still depends on workload and device.
