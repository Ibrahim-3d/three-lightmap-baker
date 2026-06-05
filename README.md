<p align="center">
  <img src="screenshots/01-baseline.png" alt="Cornell Box with path-traced global illumination baked in-browser" width="720" />
</p>

> Launch asset placeholder: replace this static screenshot with a short GIF/video showing a flat Three.js interior scene, the Bake action, visible GI/color bleeding, the lightmap atlas, and the baked result applied back to the scene.

> Important GPU note: this baker is GPU-bound. Chrome and Edge must have **Use graphics acceleration when available** enabled, and `chrome://gpu` should report WebGL/WebGL2 as hardware accelerated. Launch capture uses installed Chrome and, on Windows, prefers ANGLE D3D11 because that is the backend that selected the NVIDIA RTX GPU in testing. The app reports the renderer it actually received, and launch automation can reject captures from the wrong GPU with `BAKER_EXPECT_GPU="RTX 3050" npm run capture:launch`.

<h1 align="center">🔆 Three Lightmap Baker</h1>

<p align="center">
  <strong>Path-traced lightmap baking with global illumination. In the browser. No Blender. No Unity. No round-trips.</strong>
</p>

<p align="center">
  <a href="https://Ibrahim-3d.github.io/three-lightmap-baker/"><strong>Live Demo 🚀</strong></a>
</p>

<p align="center">
  <a href="#quick-start">Quick Start</a> •
  <a href="#why-this-exists">Why This Exists</a> •
  <a href="#features">Features</a> •
  <a href="#examples">Examples</a> •
  <a href="#benchmarks">Benchmarks</a> •
  <a href="#how-it-works">How It Works</a> •
  <a href="#known-limitations">Limitations</a> •
  <a href="#api">API</a> •
  <a href="#roadmap">Roadmap</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Three.js-r161-black?logo=threedotjs" alt="Three.js" />
  <img src="https://img.shields.io/badge/TypeScript-strict-blue?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License" />
  <img src="https://img.shields.io/badge/GI_Bounces-1--4-orange" alt="GI Bounces" />
  <img src="https://img.shields.io/badge/Status-Active_Development-brightgreen" alt="Status" />
</p>

---

## The Problem

Three.js developers looking for real lightmap baking run into the same gaps:

- **`@react-three/lightmap`** - built around an older hemicube workflow and no longer tracks modern R3F releases.
- **`mem1b/lightbaking`** - targets pre-BufferGeometry-era Three.js APIs, so it is not a drop-in option for current projects.
- **`three-gpu-pathtracer`** - excellent screen-space path tracing, but it does not publish baked lightmap atlases. Its lightmap-baking request has been open since **2021**.
- **Stack Overflow answers** - "just bake in Blender and export." Which is fine until your scene is procedural, user-generated, or assembled at runtime. Then you're stuck.

The result: in 2026, Three.js still lacks a maintained, browser-first lightmap baker focused on path-traced global illumination.

This repo fixes that.

## Why This Exists

The Three.js ecosystem needs lightmap baking that runs in the browser. Not "export to Blender, bake for 40 minutes, re-import" - actual in-app baking where the user clicks a button and sees the result in seconds.

I looked for a library. There wasn't one. The most complete option ([lucas-jones/three-lightmap-baker](https://github.com/lucas-jones/three-lightmap-baker)) had the right architecture but stopped before bounce lighting - no color bleeding, no indirect illumination, no GI.

So I'm building it. This fork keeps the proven two-pass architecture, adds multi-bounce path-traced GI, and focuses on a maintained, documented library.

### The Agentic AI Angle

Every AI coding agent (Claude Code, Cursor, Devin, Copilot Workspace) can build and manipulate 3D scenes programmatically. What they can't do is bake lighting without spawning Blender and writing a Python script to drive it.

A JavaScript-native lightmap baker that runs in Node.js or the browser is infrastructure for the agentic wave. An AI agent that assembles a room from a furniture catalog needs to light that room without opening a DCC tool.

If you're building anything where 3D scenes are constructed programmatically - architectural configurators, AI interior design, procedural environments, digital twins - and you need those scenes to look lit, you're the target user.

---

## Familiar Workflow (Unity & Unreal Style)

If you've used Unity's **Progressive Lightmapper** or Unreal's **Lightmass**, you'll feel at home. This baker implements the same industry-standard concepts directly in the browser:

- **Direct & Indirect (GI):** Separate accumulation of direct light and multi-bounce global illumination.
- **Bake Presets:** Toggle between high-speed Draft bakes and high-fidelity Production bakes.
- **Dilation & Padding:** Automatic edge-bleeding prevention to eliminate black seams at UV island borders.
- **Denoising:** Integrated bilateral noise reduction for clean soft shadows and smooth gradients.
- **Texel Density:** Visualized via checkerboard overlays to ensure consistent lightmap resolution across the scene.

---

## Features

### Shipping Now

- **Path-traced global illumination** - real bounce lighting, not screen-space hacks. Red walls bleed red light onto white surfaces. The Cornell Box test passes.
- **Auto UV2 unwrapping** - drop in any geometry, xatlas generates non-overlapping lightmap UVs automatically. No Blender unwrap step.
- **GPU-accelerated BVH ray tracing** - powered by [three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh). Millions of rays per second in WebGL.
- **Multi-bounce** - 1-4 configurable bounce depth. Each bounce adds indirect illumination. Energy-conserving (albedo < 1 guarantees convergence).
- **Per-triangle material data** - albedo and emissive packed into DataTextures, indexed by BVH triangle. Materials are respected during bounces - a red wall reflects red light because the bounce ray reads the wall's albedo.
- **Progressive rendering** - watch the lightmap converge in real-time. Stop early if quality is acceptable.
- **Bake presets** - Draft (2-5s), Preview (10-30s), Production (1-5min), Final (5-15min).
- **Gap flood / edge dilation** - prevents black seams at UV island borders.
- **Bilateral denoiser** - smooths noise while preserving shadow edges, guided by world-position and normal textures.
- **TypeScript** - strict mode, fully typed API.

### Coming Next

Planned work is tracked in the [Roadmap](#roadmap).

---

## Quick Start

```bash
# Clone
git clone https://github.com/Ibrahim-3d/three-lightmap-baker.git
cd three-lightmap-baker

# Install
npm install

# Run the Cornell Box demo
npm run start # opens http://localhost:5173
```

Click **Bake** and watch the lightmap converge. Color bleeding should be visible on the sphere within seconds.

### Use as a Library

The npm package name is reserved for release, but it is **not published yet**.

```bash
# After the first npm release:
npm install three-lightmap-baker

# Until then, install from a generated tarball:
npm run build:package
npm pack
npm install ./three-lightmap-baker-1.0.0.tgz
```

If you're working in this repo, the classic baker lives in `packages/baker-classic/`.

```typescript
import { LightmapBaker } from 'three-lightmap-baker';
import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(512, 512);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x20262f);

const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
camera.position.set(2.5, 2, 3);
camera.lookAt(0, 0.5, 0);

const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0xced4da, roughness: 0.6 }),
);
mesh.position.y = 0.5;
scene.add(mesh);

const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(4, 4),
  new THREE.MeshStandardMaterial({ color: 0x5c677d, roughness: 0.9 }),
);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

const light = new THREE.DirectionalLight(0xffffff, 2.5);
light.position.set(2, 4, 1);
scene.add(light);

// Bake (clean constructor style)
const baker = new LightmapBaker({
  renderer,
  samples: 64,
  bounces: 2,
  resolution: 512,
  denoise: true,
});

const result = await baker.bake(scene, {
  onProgress: (phase, percent) => {
    console.log(`${phase}: ${(percent * 100).toFixed(0)}%`);
  },
});

// Apply baked lightmaps to scene materials
result.apply();
renderer.render(scene, camera);

// Export lightmaps as PNG files
await result.export('lightmaps/', { format: 'png' });

// Clean up GPU resources when done
result.dispose();
```

Renderer-explicit style is also supported:

```typescript
const baker = new LightmapBaker(renderer, { samples: 64, bounces: 2, resolution: 512 });
const result = await baker.bake(scene);
```

---

## Examples

### Minimal Browser

See [`examples/minimal-browser.ts`](./examples/minimal-browser.ts) for a copy-pasteable browser scene with a renderer, camera, `MeshStandardMaterial` geometry, direct light, and both supported constructor styles.

### React Three Fiber

The baker needs access to the underlying Three.js renderer and scene. In R3F, get them from `useThree()` and run the bake from a user action:

```tsx
import { useState } from 'react';
import { useThree } from '@react-three/fiber';
import { LightmapBaker } from 'three-lightmap-baker';

export function BakeButton() {
  const { gl, scene } = useThree();
  const [busy, setBusy] = useState(false);

  async function bake() {
    setBusy(true);
    try {
      const baker = new LightmapBaker({
        renderer: gl,
        resolution: 512,
        samples: 64,
        bounces: 2,
        denoise: true,
      });

      const result = await baker.bake(scene, {
        onProgress: (phase, progress) => {
          console.info(`[lightmap] ${phase}: ${Math.round(progress * 100)}%`);
        },
      });

      result.apply();
    } finally {
      setBusy(false);
    }
  }

  return (
    <button type="button" onClick={bake} disabled={busy}>
      {busy ? 'Baking...' : 'Bake'}
    </button>
  );
}
```

Keep the button outside the `<Canvas>` if you prefer native DOM controls; the important part is that the bake runs after the scene contains real `MeshStandardMaterial` meshes and a renderer-backed WebGL context.

### Interior / Architectural Demo

The launch demo target is a small interior scene, not only a Cornell Box:

1. Start with a flat Three.js room/configurator scene.
2. Click **Bake**.
3. Show progressive convergence, color bleeding, and soft contact shadows.
4. Show the generated lightmap atlas.
5. Apply the exported result back onto the same scene.

This section is intentionally a checklist until the final visual asset is captured.

---

## Benchmarks

Benchmark numbers should be published only after the same scene and settings are tested across machines. Use this format for the first public table:

Run the local capture and benchmark helper with:

```bash
npm run capture:launch
```

It writes `launch-artifacts/before-albedo-unlit.png`, `launch-artifacts/after-baked-combined.png`, `launch-artifacts/benchmark.json`, and `launch-artifacts/benchmark.md`. The output directory is ignored by git so you can rerun it on the real launch machine and copy only the numbers/assets you want to publish.

For launch numbers, enforce the expected renderer so a dual-GPU laptop cannot accidentally publish integrated-GPU results:

```bash
BAKER_EXPECT_GPU="RTX 3050" npm run capture:launch
```

On Windows PowerShell:

```powershell
$env:BAKER_EXPECT_GPU="RTX 3050"; npm run capture:launch
```

The capture helper uses installed Chrome by default. To intentionally use Playwright's bundled Chromium instead, set `BAKER_CAPTURE_BROWSER_CHANNEL=bundled`.

On Windows the helper tries ANGLE backends in this order when `BAKER_EXPECT_GPU` is set: `d3d11`, `d3d11on12`, then `gl`. Override that list when debugging:

```powershell
$env:BAKER_CAPTURE_ANGLE="d3d11,d3d11on12,gl"; $env:BAKER_EXPECT_GPU="RTX 3050"; npm run capture:launch
```

| Device |         Scene | Resolution | Samples | Bounces | Denoise | Bake Time |
| ------ | ------------: | ---------: | ------: | ------: | ------: | --------: |
| TBD    |   Cornell Box |        512 |      64 |       2 |      On |       TBD |
| TBD    | Interior Demo |       1024 |     128 |       2 |      On |       TBD |

Current preset expectations are directional only: Draft is for seconds-scale iteration, Preview is for design review, and Production/Final are for higher-quality output on discrete GPUs.

---

## Why Not Just Bake In Blender?

Blender is still the right tool when your scene is authored offline, your assets are stable, and you can afford a DCC round-trip. This project targets the cases where that workflow breaks down:

- Procedural scenes assembled at runtime.
- Product configurators where users change layouts, finishes, or lights in the browser.
- AI-generated or agent-authored 3D spaces.
- Web architectural visualization that needs an in-app “Bake” button.
- Pipelines where the source of truth is Three.js, not a `.blend` file.

The goal is not to replace offline production renderers. The goal is browser-native baked lighting for dynamic Three.js workflows.

---

## How It Works

Two-pass architecture. No vertex shader hacks. No fighting the Three.js renderer.

### Pass 1 - UV-Space Rasterization

Each mesh's geometry is rendered with `gl_Position = uv2 * 2.0 - 1.0`, projecting triangles into their lightmap UV layout. Two textures are generated:

| Texture          | Contents                                    | Purpose                   |
| ---------------- | ------------------------------------------- | ------------------------- |
| **Position map** | World-space XYZ per texel (RGB = position)  | Ray origins for Pass 2    |
| **Normal map**   | World-space normal per texel (RGB = normal) | Ray directions for Pass 2 |

These textures are a 2D lookup table: for any texel coordinate, you can read the corresponding world position and surface normal.

<p align="center">
  <em>Position map (left) and normal map (right) for a Cornell Box - each texel encodes a world-space coordinate.</em>
</p>

### Pass 2 - Path-Traced Ray Tracing

For each texel in the position/normal maps:

```
Read worldPos and worldNormal from textures
For each sample:
    Generate cosine-weighted hemisphere direction around worldNormal
    Trace ray from worldPos into scene BVH

    If ray hits a surface:
        Read hit surface's emissive color → add to radiance (direct)
        Read hit surface's albedo color

        // Bounce: trace again from hit point
        Generate new direction around hit normal
        Trace bounce ray into BVH
        If bounce hits emissive surface:
            radiance += hitAlbedo × bounceEmissive (indirect GI)

        // More bounces if configured (2, 3, 4...)

    Accumulate radiance into lightmap texel

Divide accumulated radiance by sample count → final lightmap
```

The BVH acceleration structure (from [three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh)) makes this fast - millions of ray queries per second on a mid-range GPU.

### Why Two Passes?

The naive approach (what I tried first and burned 4 hours debugging) is to do everything in a single shader: override `gl_Position` to UV space AND trace rays in the same fragment shader. This fights Three.js at every level - `modelMatrix` propagation breaks, render target state leaks between frames, `matrixWorldNeedsUpdate` doesn't fire. 12 integration bugs later, it still didn't work.

The two-pass approach treats the renderer normally. Pass 1 uses the GPU for what it's good at (rasterization). Pass 2 uses the BVH for what it's good at (ray queries). No renderer hacks. No matrix bugs. It just works.

---

## The Landscape

| Project                                                                                 | Last Updated          | GI Bounces             | Status                                    |
| --------------------------------------------------------------------------------------- | --------------------- | ---------------------- | ----------------------------------------- |
| **This repo**                                                                           | **Active**            | **✅ 1-4 bounces**     | **✅ Maintained**                         |
| [lucas-jones/three-lightmap-baker](https://github.com/lucas-jones/three-lightmap-baker) | 2023                  | ❌ Direct only         | Archived (this fork continues it)         |
| [@react-three/lightmap](https://github.com/pmndrs/react-three-lightmap)                 | 2022-era package      | ❌ Hemicube workflow   | Not current with modern R3F               |
| [mem1b/lightbaking](https://github.com/mem1b/lightbaking)                               | Older Three.js era    | ✅ Has bounces         | Uses legacy Three.js APIs                 |
| [three-gpu-pathtracer #5](https://github.com/gkjohnson/three-gpu-pathtracer/issues/5)   | Issue open since 2021 | n/a                    | Renderer, not a lightmap exporter         |
| PlayCanvas lightmapper                                                                  | Active                | ❌ Direct + AO focused | Engine-integrated, not a Three.js package |

---

## Bake Presets

| Preset         | Samples | Bounces | Resolution | Time (RTX 3060) | Use Case                       |
| -------------- | ------- | ------- | ---------- | --------------- | ------------------------------ |
| **Draft**      | 16      | 1       | 256px      | ~2-5s           | Quick iteration, layout checks |
| **Preview**    | 64      | 2       | 512px      | ~10-30s         | Client preview, design review  |
| **Production** | 256     | 3       | 1024px     | ~1-5min         | Published walkthroughs         |
| **Final**      | 512+    | 4       | 2048px     | ~5-15min        | Hero shots, portfolio pieces   |

---

## API Reference

### `LightmapBaker`

```typescript
const baker = new LightmapBaker(renderer, options?: BakeOptions);
// or:
const baker = new LightmapBaker({ renderer, ...options });
```

| Option        | Type      | Default | Description                                               |
| ------------- | --------- | ------- | --------------------------------------------------------- |
| `samples`     | `number`  | `64`    | Rays per texel. More = less noise, longer bake.           |
| `bounces`     | `number`  | `2`     | Indirect light bounces. 1 = direct + one bounce. 4 = max. |
| `resolution`  | `number`  | `512`   | Lightmap texture size (square).                           |
| `denoise`     | `boolean` | `true`  | Apply bilateral denoiser after bake.                      |
| `dilatePx`    | `number`  | `4`     | Edge dilation passes to prevent UV seam artifacts.        |
| `superSample` | `number`  | `1`     | Bake at resolution × superSample, then downscale.         |

### `baker.bake(scene, callbacks?)`

```typescript
const result = await baker.bake(scene, {
  onProgress: (phase: string, percent: number) => void,
});
```

Returns a `BakeResult`:

| Property    | Type                 | Description                                                        |
| ----------- | -------------------- | ------------------------------------------------------------------ |
| `lightmaps` | `Map<Mesh, Texture>` | Per-mesh lightmap textures                                         |
| `groups`    | `BakeGroupView[]`    | Per-atlas internals (direct/indirect/ao/composite/position/normal) |
| `bvh`       | `MeshBVH`            | Shared BVH built for the bake                                      |
| `stats`     | `object`             | Mesh count, texel count, rays traced, and per-phase durations      |

### `result.apply()`

Sets `mesh.material.lightMap` for each baked mesh. Three.js samples lightMap from UV2 automatically.

### `result.export(path, options?)`

Exports lightmap textures as PNG (LDR) or EXR (HDR).

### `result.dispose()`

Releases all GPU resources (textures, render targets).

### `result.refreshAO()` and `result.rebakeAO()`

- `refreshAO({ intensity, exponent, enabled })` applies AO look changes instantly.
- `rebakeAO({ samples, distance, targetSamples })` recomputes AO rays without re-running the full GI bake.

---

## Known Limitations

- Verified against the current codebase: these are real current limits, not marketing disclaimers.
- Browser/WebGL renderer required. True Node.js headless baking is planned but not shipped.
- Requires WebGL 2 and `EXT_color_buffer_float` for HDR accumulation targets.
- `result.export()` triggers browser downloads; it does not write directly to arbitrary filesystem paths.
- Large atlases, high sample counts, and many bounces can still hit browser/GPU timeout behavior on weaker hardware.
- Light/material coverage is focused on `MeshStandardMaterial`-style surfaces, emissive contribution, direct light collection, AO, and GI bounces. Advanced production lighting such as IES profiles, textured area lights, and full material parity remain roadmap items.
- Auto UV2 unwrapping is designed to remove the Blender unwrap step, but pathological geometry can still need cleanup or manual UVs.
- Playwright or other automated browser captures must record the actual WebGL renderer and should enforce the expected device with `BAKER_EXPECT_GPU`. Chromium GPU flags improve the odds of hardware acceleration, but they do not override OS/driver GPU assignment on every machine.
- The current public package is prepared for npm release but is not published until the first release is cut.

---

## Headless / Automation Status

- **Browser + injected renderer:** implemented now.
- **Node.js true headless baking:** not implemented yet.
- Current pipeline depends on WebGL renderer/context, RAF-driven progressive passes, and browser-side texture export/download paths.
- Planned direction: keep renderer-injected API stable, then add optional adapter layers for offscreen/headless contexts.

---

## Requirements

- **Three.js** r161 (see `package.json`)
- **WebGL 2** with `EXT_color_buffer_float` (required for HDR lightmap accumulation)
- **Browser/renderer context required** - this release is WebGL-first (Node headless adapter is planned, not shipped)
- **GPU**: any discrete GPU from the last 5 years. Intel/AMD integrated GPUs work but bake slower - the library auto-detects and warns.

---

## Acknowledgments

This repo is a fork of [lucas-jones/three-lightmap-baker](https://github.com/lucas-jones/three-lightmap-baker), which established the two-pass architecture and proved it works. The bounce lighting, material system, denoiser, and API are new.

Built on top of:

- [three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh) by Garrett Johnson - GPU-accelerated BVH that makes browser ray tracing possible
- [three-gpu-pathtracer](https://github.com/gkjohnson/three-gpu-pathtracer) by Garrett Johnson - reference implementation for path tracing in Three.js
- [xatlas-three](https://github.com/repalash/xatlas-three/) - browser-native UV unwrapping via xatlas WASM
- The original [iq/Jaume Sanchez hemicube GI demo](http://www.iquilezles.org/www/articles/simplegi/simplegi.htm) - proof that browser GI is possible, even on a phone

---

## Contributing

This is actively developed. Contributions welcome - especially:

- **Test scenes** - complex interiors, outdoor scenes, edge cases
- **Performance benchmarks** - bake times across GPU generations
- **Bug reports** - screenshots + GPU info + sample count + resolution
- **Light type implementations** - spot lights, IES profiles, textured area lights

Open an issue before starting a PR so we can coordinate. All contributions
require signing the [CLA](./CLA.md) via CLA Assistant.

---

## Roadmap

See [`docs/ROADMAP.md`](./docs/ROADMAP.md) for current milestones and
priorities.

---

## License

MIT - same as the original lucas-jones repo.

---

<p align="center">
  <em>Built by a designer who got tired of exporting to Blender at 2am.</em>
</p>
