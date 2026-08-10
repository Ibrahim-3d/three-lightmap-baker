# RGB probe architectural measurement showcase

This document records the deterministic measurement run for the
`showcase.probe-architectural` preset on `feat/probe-architectural-showcase`.
It is a development benchmark, not a release-readiness claim.

The scene has two connected rooms, a 0.42 m-thick separating wall with a
2 m-wide doorway, a recessed alcove, a full-height column, a low obstruction,
floor and ceiling slabs, red and green solid-color walls, neutral surrounding
surfaces, two area lights, and one moving white `MeshStandardMaterial` sphere.
All 15 static contributors have one solid-color material per mesh and no maps.

## Measurement conditions

- Chromium/WebGL via the repository Playwright configuration on the local test
  machine.
- Draft bake: one 256x256 atlas, 32/32 samples.
- Probe projection: source stride 3, five diffusion iterations, intensity 1.
- Probe volume: padding 0.1 m and hard cap 8192 for every trial.
- Frame timings synchronously finish WebGL work, use 300 frames per round, and
  report the median of five rounds. They are throughput measurements, not
  display-vsynced animation FPS.
- Full raw values, including every path sample and source/probe RGB statistic,
  are in `showcase/probe-architectural/measurements.json`.

The Draft bake took 178.2 ms by the baker timer (181 ms wall clock). The baked
source supplied 3342 valid source samples. Its RGB range was
`[0,0,0]` to `[11.2344,10.8125,10.5938]`; its mean was
`[2.1308,2.0710,1.9492]`.

## Probe volume and spacing experiment

The shared scene bounds, after 0.1 m padding, were
`[-7.34,-0.30,-6.14]` to `[7.34,4.30,4.10]`.

| Target spacing | Actual XYZ spacing | Grid | Probes | Generation | Contributions | Empty before | Diffusion-filled | Fallback-filled | Physically dark | Non-zero | Payload |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1.20 m | 1.1292 / 1.1500 / 1.1378 | 14x5x10 | 700 | 64.4 ms | 22,736 | 79 | 79 | 0 | 12 (1.71%) | 98.29% | 39,892 B |
| 0.65 m | 0.6383 / 0.5750 / 0.6400 | 24x9x17 | 3,672 | 58.6 ms | 22,736 | 1,209 | 1,209 | 0 | 236 (6.43%) | 93.57% | 198,494 B |
| 0.50 m | 0.4893 / 0.4600 / 0.4876 | 31x11x22 | 7,502 | 67.8 ms | 26,592 | 3,340 | 3,340 | 0 | 711 (9.48%) | 90.52% | 392,503 B |

Every actual axis spacing is at or below its target. All trials used the same
8192 cap; no spacing was enlarged. All structural empty probes were resolved by
diffusion and none used the fallback. The rising dark percentage is therefore
not an unfilled-probe count: at higher density, more structurally populated or
diffused probes retain physically near-zero RGB values under the fixed source
sampling density.

The coarse grid produced the smoothest but most spatially blurred path. The
0.65 m grid gave the best balance in this run. The fine grid resolved a larger
field but did not improve this RGB system monotonically: its maximum adjacent
path delta rose to 4.7821, mean delta to 1.2742, and local alcove jitter to
4.59%. No package default was changed.

## Spatial RGB at 0.65 m

| Point | Position | Stored/interpolated RGB | Luminance |
| --- | --- | --- | ---: |
| Red zone | `[-4.8,1.0,0.4]` | `[5.7840,4.9909,4.4704]` | 5.1219 |
| Green zone | `[4.2,1.0,0.4]` | `[5.4305,5.4638,4.7273]` | 5.4035 |
| Neutral center | `[-2.2,1.0,1.6]` | `[5.1876,4.8111,4.3170]` | 4.8555 |
| Doorway | `[0,1.0,0]` | `[3.7986,3.5582,3.0356]` | 3.5716 |
| Closed wall, red side | `[-0.65,1.0,-2.45]` | `[3.6319,3.2637,2.8287]` | 3.3106 |
| Closed wall, green side | `[0.65,1.0,-2.45]` | `[3.6471,3.6273,3.0105]` | 3.5870 |
| Alcove | `[5.65,1.0,-4.85]` | `[1.9126,2.0753,1.6651]` | 2.0111 |

The red zone has positive red excess (`R-G = 0.7931`). The second zone crosses
to a small green excess (`G-R = 0.0333`), and the alcove remains green-biased
while dropping to 39% of the red-zone luminance. This is colored and spatially
plausible, though the green-zone chroma is weak relative to the neutral energy.

## Wall leakage

Equivalent points 0.65 m from the separator center were sampled on the two
sides of its closed northern portion. The raw values are in the table above.
Using positive red chromatic excess, `max(R-G,0)`, the red-side signal is
0.36821 and the green-side residual is 0.01977: a **5.37% cross-wall excess
ratio** at 0.65 m. The equivalent coarse ratio is 14.05%; the fine point has no
positive red excess on the green side (0%).

As a conservative context metric, the green-side normalized red fraction is
94.94% of the red-side red fraction at 0.65 m (95.66% coarse, 95.01% fine).
This high fraction is dominated by broad neutral RGB energy and demonstrates
why the current unoccluded RGB interpolation cannot be described as
visibility-aware. The chromatic-excess metric improves with density, but this
stress test does not establish hard-wall light isolation.

## Deterministic dynamic path at 0.65 m

The test moves the probe-bound sphere through 13 points. Runtime binding output
matched direct `ProbeVolume.sample()` at every point (maximum RGB difference
0), so the runtime transition uses the measured values rather than a separate
display transform.

| Path point | RGB | Luminance |
| --- | --- | ---: |
| Red | `[5.7840,4.9909,4.4704]` | 5.1219 |
| Red -> door 25% | `[5.3492,4.8536,4.2859]` | 4.9180 |
| Red -> door 50% | `[5.2123,4.8224,4.2398]` | 4.8632 |
| Red -> door 75% | `[4.7202,4.3169,3.7716]` | 4.3633 |
| Doorway | `[3.7986,3.5582,3.0356]` | 3.5716 |
| Door -> green 25% | `[4.0385,3.9091,3.3484]` | 3.8961 |
| Door -> green 50% | `[4.5203,4.3685,3.7978]` | 4.3595 |
| Door -> green 75% | `[4.5980,4.6157,3.9384]` | 4.5631 |
| Green | `[5.4305,5.4638,4.7273]` | 5.4035 |
| Green -> alcove 25% | `[5.1717,5.2136,4.4910]` | 5.1525 |
| Green -> alcove 50% | `[4.0347,4.1304,3.4848]` | 4.0635 |
| Green -> alcove 75% | `[2.3816,2.5812,2.0506]` | 2.5005 |
| Alcove | `[1.9126,2.0753,1.6651]` | 2.0111 |

There were zero black flashes in both direct samples and runtime binding output
at all three densities. At 0.65 m, the maximum adjacent RGB delta was 2.6813
and the mean was 0.9757. A +/-0.05 m single-point perturbation changed the RGB
vector by at most 0.68% in the red zone, 0.80% at the doorway, 0.54% in the
green zone, and 2.13% in the alcove. The path is stable at the named anchors,
but the fine grid's 4.59% alcove sensitivity and larger path jump show that
single-point sampling can expose local discontinuities rather than removing
them.

## Performance at 0.65 m

| Configuration | Synchronous frame time | Throughput |
| --- | ---: | ---: |
| Static scene, debug probes hidden | 0.122 ms | 8,219 FPS |
| Moving object with dynamic probe binding | 6.819 ms | 146.6 FPS |
| Debug-probe instances, dynamic object hidden | 5.537 ms | 180.6 FPS |

On this headless WebGL run, dynamic-object rendering plus binding update added
6.697 ms over the static baseline. The debug instances added 5.416 ms. The
absolute baseline is unusually fast because this is forced synchronous test
throughput, so these values are useful for regression comparison on the same
machine and should not be generalized as end-user frame rates.

## Captures

1. `showcase/probe-architectural/01-architectural-static-bake.png`
2. `showcase/probe-architectural/02-layout-preview.png`
3. `showcase/probe-architectural/03-generated-probe-colors.png`
4. `showcase/probe-architectural/04-probe-only.png`
5. `showcase/probe-architectural/05-combined-result.png`
6. `showcase/probe-architectural/06-dynamic-red-zone.png`
7. `showcase/probe-architectural/07-dynamic-doorway.png`
8. `showcase/probe-architectural/08-dynamic-second-zone.png`
9. `showcase/probe-architectural/09-dynamic-alcove.png`
10. `showcase/probe-architectural/10-wall-leakage-comparison.png`

Capture 05 keeps live direct lights enabled for the full combined result.
Captures 06-09 temporarily hide live lights so the moving sphere's probe-driven
indirect diffuse is visible against the unchanged baked static surfaces. Probe
intensity remains 1 and no exposure, normalization, or per-capture color
transform is applied.

## Reproduction and current gate

PowerShell:

```powershell
$env:BAKER_MEASURE_PROBE_SHOWCASE='1'
$env:BAKER_E2E_TEST_TIMEOUT_MS='600000'
$env:BAKER_E2E_BAKE_TIMEOUT_MS='240000'
pnpm exec playwright test --workers=1 tests/e2e/probe-architectural-showcase.spec.ts
```

This phase deliberately does not add SH9, visibility weighting, relocation,
multi-point sampling, textured albedo, or WebGPU changes. The current RGB
pipeline is ready for repeatable larger-scene measurement: it produces colored
irradiance, drives `MeshStandardMaterial` without black flashes, and exposes
cost and density tradeoffs. It is not yet a basis for claiming hard-wall
isolation or production-quality probe visibility, and it is not a public
release gate.
