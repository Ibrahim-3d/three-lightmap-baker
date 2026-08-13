<p align="center">
  <img src="https://raw.githubusercontent.com/Ibrahim-3d/three-lightmap-baker/master/screenshots/after-production-baked-combined.png" alt="Cornell advanced scene with path-traced global illumination baked in-browser" width="720" />
</p>

| Solid viewport before bake | Preview bake | Production bake |
| --- | --- | --- |
| <img src="https://raw.githubusercontent.com/Ibrahim-3d/three-lightmap-baker/master/screenshots/before-solid-viewport.png" alt="Cornell advanced scene before lightmap baking" width="260" /> | <img src="https://raw.githubusercontent.com/Ibrahim-3d/three-lightmap-baker/master/screenshots/after-preview-baked-combined.png" alt="Cornell advanced scene after Preview lightmap bake" width="260" /> | <img src="https://raw.githubusercontent.com/Ibrahim-3d/three-lightmap-baker/master/screenshots/after-production-baked-combined.png" alt="Cornell advanced scene after Production lightmap bake" width="260" /> |

<h1 align="center">🔆 Lightmap Baker</h1>

<p align="center">
  <strong>Browser-native path-traced lightmap baking for Three.js.</strong><br />
  Path-traced global illumination. In the browser. No Blender. No Unity. No round-trips.
</p>

<p align="center">
  <a href="https://Ibrahim-3d.github.io/three-lightmap-baker/"><strong>Live Demo 🚀</strong></a> ·
  <a href="https://www.npmjs.com/package/lightmap-baker"><strong>npm</strong></a> ·
  <a href="https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/docs/GETTING_STARTED.md">Getting Started</a> ·
  <a href="https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/docs/LIGHT_PROBES.md">Light Probes</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Three.js-r185-black?logo=threedotjs" alt="Three.js r185" />
  <img src="https://img.shields.io/badge/WebGL-2-990000?logo=webgl" alt="WebGL 2" />
  <img src="https://img.shields.io/badge/TypeScript-strict-3178c6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/GI_Bounces-1--4-orange" alt="GI Bounces" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License" />
</p>

> **GPU note:** this baker is GPU-bound. For real baking, Chrome or Edge should have hardware acceleration enabled and `chrome://gpu` should report WebGL/WebGL2 as hardware accelerated. Software/headless WebGL is useful for API smoke tests, but it is not representative of production bake output.

---

## Install

```bash
npm install lightmap-baker three
```

```bash
pnpm add lightmap-baker three
```

### Compatibility

- **Three.js:** `>=0.185.1 <0.186.0`
- **Renderer:** `WebGLRenderer`
- **Browser:** WebGL 2 with `EXT_color_buffer_float`
- **TypeScript:** declarations included
- **Node/headless baking:** not supported yet; actual baking currently requires a browser WebGL context

The package ships its xatlas JavaScript/WASM assets, so normal UV generation does not depend on a third-party CDN.

---

## The Problem

Three.js developers looking for real lightmap baking keep running into the same wall.

There are renderers. There are path tracers. There are old baking experiments. And there is always the classic answer:

> “Just bake it in Blender and export.”

That works when the scene is authored offline and never changes.

It breaks down when the scene is procedural, user-generated, configurable, AI-authored, assembled at runtime, or simply has Three.js as its real source of truth.

When I started looking for a maintained browser-first lightmap baker with actual bounce lighting, I couldn't find one that fit modern Three.js.

The most complete starting point, [lucas-jones/three-lightmap-baker](https://github.com/lucas-jones/three-lightmap-baker), had the right two-pass architecture but stopped before full bounce lighting.

No color bleeding. No multi-bounce GI. No modern package story.

**This repo continues that idea and takes it much further.**

---

## Why This Exists

The Three.js ecosystem needs lightmap baking that runs **inside the application**.

Not:

> export → open Blender → unwrap → bake → wait → export → re-import → repeat

But:

> build scene → click Bake → get lightmaps → keep working

The goal is not to replace Blender, Unreal, Unity, or offline production renderers.

The goal is to make baked lighting a native capability of a Three.js workflow.

That matters for:

- architectural configurators
- product configurators
- procedural environments
- digital twins
- browser-based editors
- AI-generated 3D spaces
- runtime scene assembly
- tools where users can move walls, furniture, materials, or lights and need to rebake without leaving the browser

### The Agentic AI Angle

This was also one of the reasons I kept pushing the project further.

AI coding agents can already create components, generate geometry, manipulate Three.js scenes, place assets, and build full 3D applications programmatically.

But lighting is still one of the places where the workflow often falls back to a DCC tool.

A JavaScript-native baker changes that.

An agent that assembles a room from a furniture catalog should be able to light that room too. A generated digital twin should not need a human to open Blender just to calculate static bounce lighting. A browser-based CAD/configurator workflow should be able to own its lighting pipeline from end to end.

True Node/headless baking is not shipped yet, but the browser-native renderer-injected API is the foundation for that direction.

---

## Familiar Workflow — Unity & Unreal Style

If you've used Unity's **Progressive Lightmapper** or Unreal's **Lightmass**, the concepts should feel familiar:

- **Direct + Indirect GI** — separate accumulation of direct illumination and bounce light.
- **Bake quality controls** — trade speed for convergence using samples, casts, bounces, and resolution.
- **Automatic lightmap UVs** — xatlas generates non-overlapping lightmap UVs when needed.
- **Dilation / padding** — fills chart borders to reduce black seams.
- **Denoising** — bilateral refinement guided by geometry information.
- **Texel density** — atlas and density tools help inspect how resolution is distributed.
- **Light probes** — finished static lightmaps can be captured into Three.js' native L2 SH `LightProbeGrid` for moving objects.

The difference is that the whole pipeline runs in the browser and speaks Three.js directly.

---

## Minimal Bake

```ts
import * as THREE from 'three';
import { LightmapBaker } from 'lightmap-baker';

const renderer = new THREE.WebGLRenderer({ antialias: true });
const scene = new THREE.Scene();

const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0xffffff }),
);
scene.add(mesh);

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(3, 5, 2);
scene.add(light);

const baker = new LightmapBaker({
  renderer,
  resolution: 512,
  samples: 64,
  bounces: 2,
  denoise: true,
});

const result = await baker.bake(scene, {
  onProgress: (phase, progress) => {
    console.log(`${phase}: ${Math.round(progress * 100)}%`);
  },
});

result.apply();

// Later, when the bake is no longer needed:
result.dispose();
```

`result.apply()` mounts the final baked atlas textures on the baked meshes. Package-owned material clones prevent a lightmap from leaking onto another mesh that happened to share the same original material instance.

---

## Features

### Shipping in v1

- **Path-traced global illumination** — real bounce lighting, not a screen-space approximation. Red walls bleed red light onto white surfaces. The Cornell Box test is part of the hardware-GPU release gate.
- **Automatic lightmap UVs** — xatlas generates non-overlapping lightmap UVs and the package ships the required JS/WASM assets.
- **GPU-accelerated BVH ray tracing** — powered by [three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh).
- **1–4 configurable GI bounces** — multi-bounce diffuse transport with progressive accumulation.
- **Textured GI** — secondary hits evaluate `material.color × material.map`.
- **UV0 + UV1 base-color support** — `material.map.channel = 0` and `1` are carried through the BVH/material transport path.
- **Multi-material geometry** — geometry groups resolve the correct material slot per hit even after BVH index reordering.
- **Shared-material safety** — baked meshes can share source materials with other baked or dynamic meshes without leaking persistent lightmap state.
- **Multiple atlas groups / resolutions** — including supersampling/downscale workflows.
- **Direct / indirect / AO separation** — with final composition and inspection textures.
- **AO-only rebake** — recompute AO without retracing full GI.
- **Gap flood / edge dilation** — reduces black seams at UV chart borders.
- **Bilateral denoising** — geometry-guided refinement for cleaner output.
- **Progressive rendering** — observe convergence while a bake is running.
- **PNG / EXR / raw export** — browser download utilities for final lightmaps.
- **Native Three.js dynamic light probes** — capture the completed baked scene into `LightProbeGrid` / GPU L2 SH for moving standard-material objects.
- **Legacy RGB probe volume** — retained as an explicit fallback and for custom CPU sampling workflows.
- **Renderer adapter boundary** — browser/offscreen integrations can inject renderer ownership cleanly.
- **TypeScript** — strict, generated public declarations with ESM and CommonJS builds.

---

## Textured & Multi-Material GI

This used to be one of the important missing pieces. It is now part of the v1 transport path.

For every secondary hit, the baker keeps enough source information to answer the questions that matter after the geometry has been merged and reordered into the BVH:

1. Which source mesh did this triangle come from?
2. Which geometry-group material slot owns it?
3. Which source UV channel should its base-color texture use?
4. What is the barycentrically interpolated UV at the hit point?
5. What diffuse color should this surface reflect into the next bounce?

The resulting convention is:

```text
surface albedo = material.color × sampled material.map
```

| Material input | v1 status |
| --- | --- |
| `MeshStandardMaterial.color` | Supported |
| `MeshStandardMaterial.map` | Supported |
| `map.channel = 0` / UV0 | Supported |
| `map.channel = 1` / UV1 | Supported |
| Material arrays / geometry groups | Supported |
| Solid emissive color | Supported |
| `emissiveMap` | Not yet |
| Normal / roughness / metalness maps in GI transport | Not yet |
| Vertex colors / alpha transport / custom shaders | Not yet |

Base-color maps are resampled into a bounded GPU atlas for secondary-ray lookup. Individual source tiles are currently capped at **512 px**.

---

## Dynamic Objects with Native Light Probes

Static lightmaps are ideal for static geometry. Moving objects need a different representation of the baked lighting.

The preferred v1 path is:

```text
path-traced static lightmap bake
  → mount completed lightmaps
  → isolate the baked static scene
  → Three.js LightProbeGrid capture
  → GPU L2 spherical harmonics
  → dynamic standard-material objects
```

```ts
import {
  LightmapBaker,
  captureLightmappedProbeGrid,
} from 'lightmap-baker';

const baker = new LightmapBaker({
  renderer,
  resolution: 512,
  samples: 64,
  bounces: 2,
});

const result = await baker.bake(scene);
result.apply();

const probes = captureLightmappedProbeGrid(renderer, scene, result, {
  spacing: 1.25,
  maxProbes: 1024,
  cubemapSize: 8,
  bounces: 0, // baked lightmaps already contain indirect lighting
  lightMapIntensity: 3.2,
});

// probes.grid is already added to the scene.
renderer.render(scene, camera);
```

The high-level capture helper owns the correctness policy: it temporarily mounts the finished lightmaps, hides live lights and non-static renderables, disables environment/background and display transforms, captures the grid, then restores scene/material/renderer state even if capture throws.

The playground's intended probe-lightmap intensity starts at **3.2**. The lower-level library helper still accepts an explicit `lightMapIntensity`, so applications remain in control of their own calibration.

See [docs/LIGHT_PROBES.md](https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/docs/LIGHT_PROBES.md) for native capture, persistence descriptors, and the legacy RGB path.

---

## Why Not Just Bake in Blender?

Blender is still the right tool when your scene is authored offline, your assets are stable, and a DCC round-trip is cheap.

This project targets the cases where that workflow becomes the bottleneck:

- Procedural scenes assembled at runtime.
- Product configurators where users change layouts, finishes, or lights.
- AI-generated or agent-authored 3D spaces.
- Architectural visualization that needs an in-app **Bake** button.
- Digital twins whose source state lives in an application or database.
- Pipelines where the source of truth is Three.js, not a `.blend` file.

The point isn't “browser rendering beats Blender.”

The point is: **sometimes the browser owns the scene, so the browser should be able to own the bake.**

---

## How It Works

The architecture is intentionally two-pass.

No giant one-shader trick. No exporting the scene out of Three.js just to calculate lighting.

### Pass 1 — UV-Space Rasterization

The baker first creates or uses the mesh's lightmap UV channel and rasterizes surface information into atlas space.

The important G-buffer data includes:

| Texture | Contents | Purpose |
| --- | --- | --- |
| **Position** | World-space XYZ | Secondary-ray origins / hit reconstruction |
| **Normal** | World-space normal | Hemisphere orientation and geometry guidance |
| **Surface albedo** | Linear source diffuse color | Probe projection / material-consistent fallback workflows |

Conceptually, triangles are projected into their lightmap UV layout so every output texel knows where it came from in the 3D scene.

### Pass 2 — GPU Path-Traced Transport

For each valid lightmap texel:

```text
read world position + normal
sample direct lights

for each GI cast:
    generate cosine-weighted hemisphere direction
    trace into the scene BVH

    if a surface is hit:
        resolve the post-BVH source triangle
        resolve its material slot
        interpolate the source UV
        sample material.color × material.map
        add emissive + next-event light contribution
        update throughput
        continue for configured bounces

accumulate → composite direct + indirect + AO → refine → final lightmap
```

### Why Two Passes?

The naive version was tempting: override `gl_Position` into UV space and do the whole bake in one giant shader/render path.

I tried it.

It turned into hours of fighting renderer state, matrix propagation, render-target state, and integration bugs that had nothing to do with lighting.

The two-pass design was the turning point.

Pass 1 lets the GPU do normal rasterization into a useful lookup space. Pass 2 lets the BVH do ray traversal without asking Three.js to pretend the bake is a normal camera render.

That separation is still the core of the project today.

---

## `LightmapBakeResult`

A successful `bake()` returns a `LightmapBakeResult` that owns the bake's GPU resources.

| API | Purpose |
| --- | --- |
| `result.lightmaps` | `Map<Mesh, Texture>` of final per-mesh lightmaps |
| `result.groups` | Direct / indirect / AO / composite / position / normal / albedo textures per atlas group |
| `result.bvh` | Shared bake BVH for advanced integrations |
| `result.stats` | Bake statistics and timing |
| `result.apply()` | Mount final lightmaps on baked meshes |
| `result.export(name, { format })` | Browser download of PNG / EXR / raw output |
| `result.refreshAO(...)` | Change AO look without tracing again |
| `result.rebakeAO(...)` | Recompute AO without rerunning GI |
| `result.dispose()` | Restore package-owned material clones and dispose GPU resources |

### Export

```ts
await result.export('room-lightmap', { format: 'png' });
await result.export('room-lightmap', { format: 'exr' });
```

Browser builds trigger downloads; `export()` does not write directly to arbitrary filesystem paths.

---

## Constructor Styles

```ts
const baker = new LightmapBaker(renderer, {
  resolution: 512,
  samples: 64,
  bounces: 2,
});
```

or:

```ts
const baker = new LightmapBaker({
  renderer,
  resolution: 512,
  samples: 64,
  bounces: 2,
});
```

Advanced browser/offscreen integrations can inject a renderer adapter:

```ts
import { createRendererAdapter, LightmapBaker } from 'lightmap-baker';

const adapter = createRendererAdapter(renderer, { label: 'my-renderer' });
const baker = new LightmapBaker({ rendererAdapter: adapter });
```

---

## Defaults

Current high-level baker defaults:

| Option | Default |
| --- | ---: |
| `samples` | `96` |
| `castsPerFrame` | `5` |
| `bounces` | `1` |
| `resolution` | `1024` |
| `superSample` | `1` |
| `denoise` | `true` |
| GI enabled | `true` |
| AO enabled | `true` |

The playground's presets intentionally choose different values for Draft, Preview, Production, and Final workflows.

---

## React Three Fiber

The baker does not depend on React. It only needs the underlying Three.js renderer and scene.

In R3F, get them from `useThree()`:

```tsx
import { useThree } from '@react-three/fiber';
import { LightmapBaker } from 'lightmap-baker';

const { gl, scene } = useThree();

const baker = new LightmapBaker({
  renderer: gl,
  resolution: 512,
  samples: 64,
  bounces: 2,
});

const result = await baker.bake(scene);
result.apply();
```

See [Getting Started](https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/docs/GETTING_STARTED.md) for a fuller integration example and lifecycle guidance.

---

## Performance Baseline

Measured on Windows with installed Chrome + ANGLE D3D11 on an **RTX 3050 Ti Laptop GPU**, using the committed `cornell.advanced` scene:

| Preset | Resolution | Effective samples | Bounces | Bake time |
| --- | ---: | ---: | ---: | ---: |
| Draft | 256 | 128 spp | 2 | 4.63 s |
| Preview | 512 | 480 spp | 2 | 5.05 s |
| Production | 1024 | 1536 spp | 2 | 36.48 s |
| Final | 2048 | 4096 spp | 2 | 408.7 s |

These are reference measurements, not universal guarantees. Scene complexity, atlas coverage, browser, GPU, driver, sample count, and bounce depth all matter.

The release workflow deliberately treats full GI output as a **hardware-GPU validation**. GitHub's headless runner still validates API/build/browser behavior, but it is not used as the authority for visual GI output.

---

## Runtime Requirements & Known Limitations

These are current v1 limits, not vague roadmap disclaimers:

- Requires **WebGL 2** and `EXT_color_buffer_float`.
- Three.js support is intentionally constrained to **r185** for v1.
- Hardware-accelerated Chrome/Edge is strongly recommended for production baking.
- Large atlases, high sample counts and multiple bounces can hit browser/GPU timeout limits on weaker hardware.
- The diffuse GI material model does not yet transport `emissiveMap`, normal, roughness, metalness, alpha, vertex-color or custom-shader effects.
- Base-color texture tiles in the GI lookup atlas are capped at **512 px**.
- Native probes currently require `WebGLRenderer`; upstream `LightProbeGrid` does not provide the equivalent path for `WebGPURenderer`.
- Native probe capture is synchronous.
- True Node.js/headless baking is not part of v1.
- `result.export()` triggers browser downloads; it does not write arbitrary filesystem paths.

For runtime capability checks:

```ts
import { getLightmapRuntimeCapabilities } from 'lightmap-baker';

console.log(getLightmapRuntimeCapabilities());
```

---

## The Landscape

This project started because the pieces existed, but the exact workflow did not.

- [lucas-jones/three-lightmap-baker](https://github.com/lucas-jones/three-lightmap-baker) proved the original two-pass browser lightmap architecture.
- [three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh) makes practical GPU BVH traversal in the Three.js ecosystem possible.
- [three-gpu-pathtracer](https://github.com/gkjohnson/three-gpu-pathtracer) is a major reference point for modern Three.js path tracing, but it is a renderer rather than a baked-lightmap workflow.
- `@react-three/lightmap` and older light-baking experiments explored related workflows, but they target different Three.js generations and architectures.

Three Lightmap Baker is specifically about **publishing lighting back into the scene as reusable lightmaps**, with optional baked-scene probe capture for dynamic objects.

---

## Development

```bash
git clone https://github.com/Ibrahim-3d/three-lightmap-baker.git
cd three-lightmap-baker
corepack enable
pnpm install
pnpm dev
```

Useful focused checks:

```bash
pnpm run typecheck
pnpm run test:material-gi
pnpm run test:probes
pnpm run test:api-import
```

Before an npm release on a real supported GPU:

```bash
pnpm run release:check
```

That command includes the hardware-sensitive browser suite, package builds/import checks, and `npm publish --dry-run`.

---

## Documentation

- [Getting Started](https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/docs/GETTING_STARTED.md)
- [Light Probes](https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/docs/LIGHT_PROBES.md)
- [API Status & support matrix](https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/docs/API_STATUS.md)
- [Roadmap](https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/docs/ROADMAP.md)
- [Changelog](https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/CHANGELOG.md)

---

## Acknowledgments

This repo is a fork and continuation of [lucas-jones/three-lightmap-baker](https://github.com/lucas-jones/three-lightmap-baker), which established the original two-pass architecture and proved the approach could work in the browser.

The project now includes a substantially expanded GI/material pipeline, multi-atlas workflow, refinement, public package API, native probe integration, persistence/editor tooling, and modern Three.js support.

Built on top of excellent work from the Three.js ecosystem:

- [three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh) by Garrett Johnson — BVH acceleration and GPU traversal infrastructure.
- [three-gpu-pathtracer](https://github.com/gkjohnson/three-gpu-pathtracer) by Garrett Johnson — an important reference for path tracing in Three.js.
- [xatlas-three](https://github.com/repalash/xatlas-three/) and [xatlas.js](https://github.com/repalash/xatlas.js) — browser-native xatlas UV unwrapping.
- The older browser-GI experiments that proved surprisingly serious lighting work could happen on the web long before this project existed.

---

## Contributing

Contributions are welcome, especially around the places where a renderer like this gets better through real-world abuse:

- **Test scenes** — complex interiors, imported GLBs, awkward UVs, material edge cases.
- **Performance benchmarks** — more GPUs, browsers and scene types.
- **Bug reports** — include screenshots, GPU/renderer info, sample count, resolution and reproduction steps.
- **Material coverage** — especially practical cases beyond the current diffuse transport model.
- **Lighting workflows** — useful real-world integrations, not just synthetic demos.

Open an issue before starting a large PR so the direction can stay coordinated. Contributions require the repository CLA where applicable.

---

## Roadmap

See [`docs/ROADMAP.md`](https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/docs/ROADMAP.md) for current priorities.

The important v1 distinction is simple: optional future work such as Node/headless baking, WebGPU, reflection probes, extra real-time companion passes and deeper material parity does **not** block the browser/WebGL npm package.

---

## License

MIT. See [LICENSE](https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/LICENSE) and [THIRD_PARTY_LICENSES.md](https://github.com/Ibrahim-3d/three-lightmap-baker/blob/master/THIRD_PARTY_LICENSES.md).

---

<p align="center">
  <em>Built by a designer who got tired of exporting to Blender at 2am.</em>
</p>
