<p align="center">
  <img src="screenshots/cornell-box-gi.png" alt="Cornell Box with path-traced global illumination — baked in-browser" width="720" />
</p>

<h1 align="center">🔆 Three Lightmap Baker</h1>

<p align="center">
  <strong>Path-traced lightmap baking with global illumination. In the browser. No Blender. No Unity. No round-trips.</strong>
</p>

<p align="center">
  <a href="#quick-start">Quick Start</a> •
  <a href="#why-this-exists">Why This Exists</a> •
  <a href="#features">Features</a> •
  <a href="#how-it-works">How It Works</a> •
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

Three.js developers looking for real lightmap baking hit the same dead ends:

- **`@react-three/lightmap`** — abandoned in 2022. Broken on R3F 9. Uses a hemicube method from 2016 that produces ambient-ish blobs, not real GI. The maintainers (pmndrs) walked away.
- **`mem1b/lightbaking`** — last updated when Three.js still used `geometry.faces`. Ancient API. Won't run.
- **`three-gpu-pathtracer`** — great screen-space renderer, but no lightmap output. Issue #5 ("Add lightmap baking") has been open since **2021**.
- **Stack Overflow answers** — "just bake in Blender and export." Which is fine until your scene is procedural, user-generated, or assembled at runtime. Then you're stuck.

The result: in 2026, the Three.js ecosystem has **zero maintained lightmap bakers with global illumination.**

This repo fixes that.

## Why This Exists


That workflow needs lightmap baking that runs in the browser. Not "export to Blender, bake for 40 minutes, re-import" — actual in-app baking where the designer clicks a button and sees the result in seconds.

I looked for a library. There wasn't one. The most complete option ([lucas-jones/three-lightmap-baker](https://github.com/lucas-jones/three-lightmap-baker)) had the right architecture but stopped before bounce lighting — no color bleeding, no indirect illumination, no GI.

So I'm building it. This fork keeps the proven two-pass architecture, adds multi-bounce path-traced GI, and focuses on a maintained, documented library.

### The Agentic AI Angle

Every AI coding agent (Claude Code, Cursor, Devin, Copilot Workspace) can build and manipulate 3D scenes programmatically. What they can't do is bake lighting without spawning Blender and writing a Python script to drive it.

A JavaScript-native lightmap baker that runs in Node.js or the browser is infrastructure for the agentic wave. An AI agent that assembles a room from a furniture catalog needs to light that room without opening a DCC tool.

If you're building anything where 3D scenes are constructed programmatically — architectural configurators, AI interior design, procedural environments, digital twins — and you need those scenes to look lit, you're the target user.

---

## Features

### Shipping Now

- **Path-traced global illumination** — real bounce lighting, not screen-space hacks. Red walls bleed red light onto white surfaces. The Cornell Box test passes.
- **Auto UV2 unwrapping** — drop in any geometry, xatlas generates non-overlapping lightmap UVs automatically. No Blender unwrap step.
- **GPU-accelerated BVH ray tracing** — powered by [three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh). Millions of rays per second in WebGL.
- **Multi-bounce** — 1-4 configurable bounce depth. Each bounce adds indirect illumination. Energy-conserving (albedo < 1 guarantees convergence).
- **Per-triangle material data** — albedo and emissive packed into DataTextures, indexed by BVH triangle. Materials are respected during bounces — a red wall reflects red light because the bounce ray reads the wall's albedo.
- **Progressive rendering** — watch the lightmap converge in real-time. Stop early if quality is acceptable.
- **Bake presets** — Draft (2-5s), Preview (10-30s), Production (1-5min), Final (5-15min).
- **Gap flood / edge dilation** — prevents black seams at UV island borders.
- **Bilateral denoiser** — smooths noise while preserving shadow edges, guided by world-position and normal textures.
- **TypeScript** — strict mode, fully typed API.

### Coming Next

Planned work is tracked in the [Roadmap](#roadmap).

---

## Quick Start

```bash
# Clone
git clone https://github.com/user/three-lightmap-baker.git
cd three-lightmap-baker

# Install
npm install

# Run the Cornell Box demo
npm run start # opens http://localhost:5173
```

Click **Bake** and watch the lightmap converge. Color bleeding should be visible on the sphere within seconds.

### Use as a Library

```bash
npm install three-lightmap-baker
```

If you're working in this repo, the classic baker lives in `packages/baker-classic/`.

```typescript
import { LightmapBaker } from 'three-lightmap-baker';
import * as THREE from 'three';

// Set up your scene as normal
const scene = new THREE.Scene();
// ... add meshes, materials, lights ...

// Bake
const baker = new LightmapBaker({
  samples: 64,
  bounces: 2,
  resolution: 512,
  denoise: true,
});

const result = await baker.bake(scene, {
  onProgress: (phase, percent) => {
    console.log(`${phase}: ${percent}%`);
  },
});

// Apply baked lightmaps to scene materials
result.apply();

// Export lightmaps as PNG files
await result.export('lightmaps/', { format: 'png' });

// Clean up GPU resources when done
result.dispose();
```

---

## How It Works

Two-pass architecture. No vertex shader hacks. No fighting the Three.js renderer.

### Pass 1 — UV-Space Rasterization

Each mesh's geometry is rendered with `gl_Position = uv2 * 2.0 - 1.0`, projecting triangles into their lightmap UV layout. Two textures are generated:

| Texture | Contents | Purpose |
|---|---|---|
| **Position map** | World-space XYZ per texel (RGB = position) | Ray origins for Pass 2 |
| **Normal map** | World-space normal per texel (RGB = normal) | Ray directions for Pass 2 |

These textures are a 2D lookup table: for any texel coordinate, you can read the corresponding world position and surface normal.

<p align="center">
  <em>Position map (left) and normal map (right) for a Cornell Box — each texel encodes a world-space coordinate.</em>
</p>

### Pass 2 — Path-Traced Ray Tracing

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

The BVH acceleration structure (from [three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh)) makes this fast — millions of ray queries per second on a mid-range GPU.

### Why Two Passes?

The naive approach (what I tried first and burned 4 hours debugging) is to do everything in a single shader: override `gl_Position` to UV space AND trace rays in the same fragment shader. This fights Three.js at every level — `modelMatrix` propagation breaks, render target state leaks between frames, `matrixWorldNeedsUpdate` doesn't fire. 12 integration bugs later, it still didn't work.

The two-pass approach treats the renderer normally. Pass 1 uses the GPU for what it's good at (rasterization). Pass 2 uses the BVH for what it's good at (ray queries). No renderer hacks. No matrix bugs. It just works.

---

## The Landscape (Why Every Other Option Is Dead)

| Project | Last Updated | GI Bounces | Status |
|---|---|---|---|
| **This repo** | **Active** | **✅ 1-4 bounces** | **✅ Maintained** |
| [lucas-jones/three-lightmap-baker](https://github.com/lucas-jones/three-lightmap-baker) | 2023 | ❌ Direct only | Archived (this fork continues it) |
| [@react-three/lightmap](https://github.com/pmndrs/react-three-lightmap) | 2022 | ❌ Hemicube (no real GI) | Dead, broken on R3F 9 |
| [mem1b/lightbaking](https://github.com/mem1b/lightbaking) | ~2016 | ✅ Has bounces | Dead, ancient Three.js API |
| [three-gpu-pathtracer #5](https://github.com/gkjohnson/three-gpu-pathtracer/issues/5) | Issue open since 2021 | n/a | Feature request, never implemented |
| PlayCanvas lightmapper | Active | ❌ Direct + AO only | Proprietary engine, not usable with Three.js |

---

## Bake Presets

| Preset | Samples | Bounces | Resolution | Time (RTX 3060) | Use Case |
|---|---|---|---|---|---|
| **Draft** | 16 | 1 | 256px | ~2-5s | Quick iteration, layout checks |
| **Preview** | 64 | 2 | 512px | ~10-30s | Client preview, design review |
| **Production** | 256 | 3 | 1024px | ~1-5min | Published walkthroughs |
| **Final** | 512+ | 4 | 2048px | ~5-15min | Hero shots, portfolio pieces |

---

## API Reference

### `LightmapBaker`

```typescript
const baker = new LightmapBaker(options?: BakeOptions);
```

| Option | Type | Default | Description |
|---|---|---|---|
| `samples` | `number` | `64` | Rays per texel. More = less noise, longer bake. |
| `bounces` | `number` | `2` | Indirect light bounces. 1 = direct + one bounce. 4 = max. |
| `resolution` | `number` | `512` | Lightmap texture size (square). |
| `denoise` | `boolean` | `true` | Apply bilateral denoiser after bake. |
| `dilatePx` | `number` | `4` | Edge dilation passes to prevent UV seam artifacts. |
| `superSample` | `number` | `1` | Bake at resolution × superSample, then downscale. |

### `baker.bake(scene, callbacks?)`

```typescript
const result = await baker.bake(scene, {
  onProgress: (phase: string, percent: number) => void,
});
```

Returns a `BakeResult`:

| Property | Type | Description |
|---|---|---|
| `lightmaps` | `Map<Mesh, Texture>` | Per-mesh lightmap textures |
| `aoMaps` | `Map<Mesh, Texture>` | Per-mesh ambient occlusion (if enabled) |
| `probes` | `LightProbe[]` | SH light probes (if configured) |
| `duration` | `number` | Bake time in milliseconds |
| `stats` | `object` | Mesh count, texel count, rays traced |

### `result.apply()`

Sets `mesh.material.lightMap` for each baked mesh. Three.js samples lightMap from UV2 automatically.

### `result.export(path, options?)`

Exports lightmap textures as PNG (LDR) or EXR (HDR).

### `result.dispose()`

Releases all GPU resources (textures, render targets).

---

## Requirements

- **Three.js** r161 (see `package.json`)
- **WebGL 2** with `EXT_color_buffer_float` (required for HDR lightmap accumulation)
- **GPU**: any discrete GPU from the last 5 years. Intel/AMD integrated GPUs work but bake slower — the library auto-detects and warns.

---

## Acknowledgments

This repo is a fork of [lucas-jones/three-lightmap-baker](https://github.com/lucas-jones/three-lightmap-baker), which established the two-pass architecture and proved it works. The bounce lighting, material system, denoiser, and API are new.

Built on top of:
- [three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh) by Garrett Johnson — GPU-accelerated BVH that makes browser ray tracing possible
- [three-gpu-pathtracer](https://github.com/gkjohnson/three-gpu-pathtracer) by Garrett Johnson — reference implementation for path tracing in Three.js
- [xatlas-three](https://github.com/repalash/xatlas-three/) — browser-native UV unwrapping via xatlas WASM
- The original [iq/Jaume Sanchez hemicube GI demo](http://www.iquilezles.org/www/articles/simplegi/simplegi.htm) — proof that browser GI is possible, even on a phone

---

## Contributing

This is actively developed. Contributions welcome — especially:

- **Test scenes** — complex interiors, outdoor scenes, edge cases
- **Performance benchmarks** — bake times across GPU generations
- **Bug reports** — screenshots + GPU info + sample count + resolution
- **Light type implementations** — spot lights, IES profiles, textured area lights

Open an issue before starting a PR so we can coordinate. All contributions
require signing the [CLA](./CLA.md) via CLA Assistant.

---

## Roadmap

See [`docs/ROADMAP.md`](./docs/ROADMAP.md) for current milestones and
priorities.

---

## License

MIT — same as the original lucas-jones repo.

---

<p align="center">
  <em>Built by a designer who got tired of exporting to Blender at 2am.</em>
</p>
