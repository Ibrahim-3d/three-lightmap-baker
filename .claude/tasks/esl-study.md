# ESL Study — `enhance-shader-lighting` vs. our baker

**Source path:** `C:\Projects\apps\Lightbaking\enhance-shader-lighting`
**Author / repo:** 0beqz / [enhance-shader-lighting](https://github.com/0beqz/enhance-shader-lighting)
**Live site (per readme):** https://enhance-shader-lighting.vercel.app
**Date:** 2026-05-21
**Status:** Decision-grade — no code ported yet. Demos will be imported separately (see tasks #2–#6).

---

## TL;DR

| Aspect | ESL | Ours |
|---|---|---|
| **Lightmap origin** | Pre-baked **offline in Blender Cycles**, shipped inside the GLB's `emissiveMap` slot | Computed **in browser** by GPU path tracer (BVH ray-march + cosine hemisphere sampling) |
| **AO map** | Pre-baked offline too (Blender), separate texture | Bake as side product of the same path-trace |
| **Runtime role** | Load GLB → swap `emissiveMap → lightMap` → tweak look via `onBeforeCompile` shader patch | UV-rasterize world pos/normal → ray-trace → write lightmap RT → optional denoise/dilate |
| **What it produces** | A *look-correction layer* on top of an already-baked lightmap | The lightmap itself |
| **PBR fidelity** | Best-effort visual match to Blender reference — arbitrary, no PBR claim | Cosine-weighted hemisphere GI, multi-bounce |
| **Headline win** | Cinematic post-stack: dual bloom, LUT, lens distortion, vignette, scanline, noise, color grading | Live re-bake, no offline tool dependency, ground truth GI |

**Verdict in one line:** ESL is a complementary **look/grade layer**, not a competing baker. Their shader-injection is portable to our pipeline as an *optional grading mode* on the demo-shell side. Their post-stack is the highest-value asset to copy. Their offline-baked lightmaps give us a free A/B reference set against our path tracer.

---

## 1. Lightbaking pipeline — side by side

### 1.1 ESL

```
[Blender Cycles offline]
    │  bake lightmap + AO map into texture
    ▼
[GLB export, lightmap stored in material.emissiveMap]
    │
    ▼
[scene.js: traverse + emissiveMap → lightMap, emissiveMap = null]
    │  also loads HDR envmap (PMREMGenerator)
    │  also reflective floor (MeshReflectorMaterial)
    │  also box-projected envmap (BoxProjectedEnvMapHelper)
    ▼
[material.onBeforeCompile = enhanceShaderLighting(shader, opts)]
    │  patches: lightmap fragment, lights_pars_begin, getIBLIrradiance, getIBLRadiance
    │  uniforms: aoColor, hemisphereColor, irradianceColor, radianceColor,
    │            aoPower, aoSmoothing, gammas, contrasts, smoothingPower, etc.
    ▼
[Compose with EffectComposer: bloom1 + bloom2 + LUT + lens distortion + vignette + ...]
```

### 1.2 Ours (`baker-classic`)

```
[GLB / preset scene loaded into Three.js]
    │  xatlas-three auto-unwraps UV2
    ▼
[Pass 1 — atlas/renderAtlas.ts]
    │  draw each mesh with gl_Position = uv2 * 2 - 1
    │  MRT outputs: positionTexture (RGB = world pos), normalTexture (RGB = world normal)
    ▼
[Pass 2 — lightmap/LightmapperMaterial.ts (inline GLSL3)]
    │  per-texel: read worldPos/worldNormal, cast N cosine-hemisphere rays
    │  three-mesh-bvh BVH lookup, accumulate radiance from emissives + bounce
    │  AOMapper.ts as separate sub-pass
    ▼
[Composite + DilateMaterial + DenoiseMaterial (optional)]
    │
    ▼
[Set material.lightMap, render normally with Three's PBR shader]
```

### 1.3 Where they overlap / disagree

| | ESL | Ours |
|---|---|---|
| **UV2** | Authored in Blender, baked in toolchain | Generated at runtime by xatlas-three |
| **Lightmap math** | Blender Cycles (full PBR offline) | GPU path-trace with hemisphere sampling, ground truth at sample count |
| **AO** | Separate Blender bake → `material.aoMap` | Same engine, second target |
| **Cost** | Free at runtime (texture lookup), expensive offline tool dependency | Few-seconds in-browser bake, no offline tool |
| **Iteration loop** | Re-export Blender → reload | Re-bake in browser tab |
| **Edits to scene at runtime** | Must re-bake offline = full round trip | Click "Bake" = ~seconds |

**Why this matters for "match 1:1":** their `emissiveMap` ships the Blender bake. To compare apples-to-apples we either (a) load their pre-baked map as our `lightMap` straight through (mode B = "theirs"), or (b) point our baker at the same GLB and re-bake from scratch (mode A = "ours"). Both wired per your decision; default = ours.

---

## 2. The ESL shader — what it actually does

`src/EnhanceShaderLighting.js` (374 LOC, one file) patches `MeshStandardMaterial` via `onBeforeCompile`. Feature breakdown:

### 2.1 Six knob clusters

| Cluster | Uniforms | Effect |
|---|---|---|
| **AO shaping** | `aoColor`, `aoPower`, `aoSmoothing`, `aoMapGamma`, `aoMapIntensity` | Push AO into ambient color (occluded → tinted cool/dark), gamma the AO texture, smooth the curve |
| **Hemisphere ambient** | `hemisphereColor`, `irradianceColor` | Dark occluded spots fade toward a "sky-ish" color; mid-tones use scene-average color |
| **Env IBL split** | `envPower`, `radianceColor`, `radianceIntensity`, `irradianceIntensity`, `roughnessPower` | Re-mixes Three's `getIBLIrradiance` + `getIBLRadiance`. Lets you tint reflection ≠ ambient, exponentiate the env probe, push roughness curve |
| **Lightmap grading** | `lightMapGamma`, `lightMapContrast`, `lightMapSaturation` | Treat the baked lightmap as if it were a LUT — gamma/contrast/saturation in HSV space before multiplying albedo |
| **Diffuse coupling** | `mapContrast` | Albedo contrast inside the same patch |
| **Sun re-injection** | `sunIntensity`, `sunColor` | Adds an extra `pow(aoMapClr, 16)` directional kick to push sun-lit patches |

### 2.2 Key insight (worth copying)

ESL doesn't ADD the lightmap to `reflectedLight.indirectDiffuse` (which is what Three's `<lightmap_fragment>` does). It **multiplies the lightmap into `diffuseColor` itself**, after HSV-based color blending. From `EnhanceShaderLighting.js:181`:

```glsl
diffuseColor *= lightnessFactor * sampledDiffuseColor * vec4(lightMapClr, 1.);
```

This is unphysical, but visually it makes baked PBR look the way artists expect — lit surfaces look saturated, dark surfaces fade to the AO tint. Three's default lightmap path tends to look washed out on PBR; ESL's tends to look "Blendered."

### 2.3 Other clever bits

- **Hemisphere smoothing** (`envPower`, `smoothingPower`) — exponentiates env probe so AO-occluded crevices stay dark while lit faces glow. Cheap fake bounce light.
- **Hardcode mode** (`hardcodeValues: true`) — re-emits uniforms as `const` so the shader compiles into a constant-folded variant. Maybe 5–10 % faster per material. Useful if values are locked.
- **`disableSmoothing` define** — kill switch in #ifdef.

### 2.4 Three.js 0.161 compatibility risk

ESL `peerDependencies` pins `three: <0.151.0`. We are on `^0.161.0`. Risk surface:

| Replace target | Status in 0.161 |
|---|---|
| `uniform float opacity;` | Still present ✓ |
| `#include <lights_pars_begin>` | Still present ✓ |
| `#include <lightmap_fragment>` | Still present ✓ |
| `#include <map_fragment>` | Still present ✓ |
| `#include <envmap_physical_pars_fragment>` | Still present ✓ |
| `getIBLIrradiance( const in vec3 normal )` signature | **Changed** — in 0.160+ this became `getIBLIrradiance( const vec3 normal, const in vec3 viewDir, const in float roughness )` for some PBR variants. Need to check at 0.161 exactly |
| `geometry.viewDir / geometry.normal` | Renamed to `geometryViewDir / geometryNormal` somewhere around 0.158 |
| `return PI * envMapColor.rgb * envMapIntensity;` | Literal string match — may have changed |
| `iblIrradiance += getIBLIrradiance( geometry.normal );` | Likely now `iblIrradiance += getIBLIrradiance( geometryNormal );` |

**Implication:** straight `npm i enhance-shader-lighting` will not work. Porting needs ~30–60 min of shader-chunk audit against Three 0.161's actual sources. The CONCEPT ports fine; the string replacements need refresh.

---

## 3. Other stuff inside `enhance-shader-lighting/example/` (not the lib)

The demo app ships its own goodies, separately publishable:

| File | What | Port worthiness |
|---|---|---|
| `BoxProjectedEnvMapHelper.js` | Treats env probe as if reflected off a box volume (`envMapPos + envMapSize`). Makes flat HDRI feel like it has parallax. | **Worth porting.** Tiny (~80 LOC). Big win for indoor scenes (gym, backrooms). |
| `MeshReflectorMaterial.js` | Drei-style ground reflector — renders a mirror pass to a low-res RT, blurs it, mixes with the base material. | **Maybe.** Heavy (~450 LOC), already exists upstream in drei. If we host raw Three we can copy; alternative is just enable our SSR if we add one. |
| `AmbientParticles.js` | Dust motes in volume, billboard sprite + per-particle drift. | **Cheap + nice.** ~120 LOC. Demo-only flavor, fine to copy. |
| `LensDistortionShader.js` | Chromatic-aberration band-offset full-screen shader. | **Optional.** Pure post-pass; we can wire into PostFX panel. |
| `GammaCorrectionEffect.js` | Manual gamma in a `postprocessing` effect (because they bypass `outputEncoding`). | Drop. Our path uses Three's `renderer.outputColorSpace`. |
| `CompressionPass.js` | Banding/compression artifact emulator — backrooms uses it for "video tape" look. | Style only. Skip unless backrooms demo specifically calls for it. |
| `Movement.js` | First-person controls + octree collision against scene. | Drop. Our shell has its own camera controllers. |
| `Utils.js` / `imgsupport.js` / `SSGIDebugGUI.js` | Misc | Drop. |

---

## 4. Their look stack (for Post-FX parity task #4)

From `scene.js` + per-demo settings. Pipeline order at runtime:

```
RenderPass
  → VelocityDepthNormalPass     (only used by realism-effects)
  → EffectPass:
       TRAA (desktop only)
       GammaCorrection
       SMAA (webgl1 fallback)
       Bloom1                    (small kernel, high luminance threshold)
       HueSaturation
       Vignette
       Bloom2 (desktop only)     (huge kernel, low luminance threshold)
       LUT3dl                    (per-demo .3dl file)
  → LensDistortionPass (desktop only)
  → CompressionPass (backrooms only)
```

Their two-bloom trick is the secret sauce — Bloom1 picks up small bright spots, Bloom2 gives the soft global glow. Our current PostFX is single bloom. Adding **bloom2** + **LUT** + **lens distortion** is the minimum diff for visual parity.

### 4.1 Per-demo numeric settings (already captured in tasks)

- Gym: bloom1 1.53/0.64, bloom2 0.25/0.32, expose 1.81, fov 56, fog 0x707656 @ 0.0012, env 7.77
- Desert: bloom1 0.18/0.66, bloom2 1.28/0.5, expose 0.8, fov 52, fog 0x74AA48 @ 0.0012, env 1.74
- Backrooms: bloom1 0.3/0.64, bloom2 0.69/0.09, expose 1.35, fov 83, fog off, env 7.1, **compression pass on**

These are the numbers we pour into per-preset `postFXSettings` apply().

---

## 5. Asset summary (task #2)

| File | Size | Type | License note |
|---|---|---|---|
| `gym.optimized.glb` | 5.5 MB | scene | repo license MIT |
| `desert.optimized.glb` | 1.3 MB | scene | MIT |
| `backrooms.optimized.glb` | 1.5 MB | scene | MIT |
| `envGym.hdr` | 5.5 MB | env probe | MIT |
| `envDesert.hdr` | 4.4 MB | env probe | MIT |
| `envBackrooms.hdr` | 5.3 MB | env probe | MIT |
| `kloofendal_48d_partly_cloudy_1k.hdr` | 1.6 MB | sky | Poly Haven CC0 |
| `gym/desert/backrooms.3dl` | ~485 KB each | LUT | MIT |
| `lightmap/avif/*.avif` | ~370 KB total | their pre-baked lightmaps (track demo only — gym/desert/backrooms lightmaps are inside the GLB emissiveMap) | MIT |
| `audio/hum.mp3`, `audio/steps.wav` | (check) | backrooms ambient | check freesound credit (MinigunFiend) |
| `cameraAnim.optimized.glb`, `sceneViewCameraAnim.optimized.glb` | ~10 KB | cinematic flythrough | MIT |
| `particle.png` | 701 B | dust sprite | MIT |
| **Total** | **~25 MB** | | |

Repo growth ~25 MB tracked. Acceptable, you confirmed.

---

## 6. Port-worthiness verdict — `enhanceShaderLighting` core

This is the decision item you asked for. **Recommendation: PORT — but as an opt-in shader mode in `demo-shell`, NOT in the baker library.**

### 6.1 Reasons FOR porting

1. **Free aesthetic upgrade.** Our baker produces physically-honest GI. Three's default `MeshStandardMaterial` lightmap path *displays* it washed out. ESL's multiply-into-diffuse trick makes our bakes pop the same way Blender previews do.
2. **AO grading is genuinely useful.** `aoColor` + `aoPower` + `hemisphereColor` give artists tint control over cavities without re-baking. Today we have no UI for this.
3. **Tiny code surface.** ~370 LOC, one file, no deps. Cheaper to port than to write our own.
4. **The 1:1 demos will look wrong without it.** Their reference screenshots are pure ESL + post-stack. If we drop demos in raw, the gym will look gray and flat — user will think the import is broken when it's just the missing grading layer.

### 6.2 Reasons AGAINST porting

1. **Unphysical.** Diverges from PBR. Future PT-baker should stay clean; this is a viewer-time effect.
2. **Three 0.161 chunk drift.** ~1 hour of patching string-replace targets. Not free.
3. **Yet another knob set.** 14 uniforms to expose in the UI = bigger Material panel.
4. **Maintainability.** ESL repo is not actively maintained (`peer three < 0.151`). We'd be forking and owning it.

### 6.3 Proposed integration shape (when you greenlight)

- Live in `packages/demo-shell/src/shaders/enhanceShaderLighting.ts` — **not in baker-classic**.
- Hook off the shell's MaterialPage, gated by a `useESL` toggle per material (or scene-wide).
- Reuse our existing PostFX signal infrastructure for the uniform set.
- Re-target string replacements to Three 0.161 chunks once (audit pass).
- Keep the baker library framework-free. ESL is a *consumer-side* shader patch.

### 6.4 What I would NOT port

- ESL's lightmap-source assumption (`material.emissiveMap → lightMap`). We have a baker; that copy is automatic in our pipeline.
- `hardcodeValues: true` mode — clutter for marginal gain.
- The audio/cinematic-camera/octree-collision/movement code from the example app.

---

## 7. Decision items for you

1. **Port ESL shader patch?** Recommend YES, demo-shell only, AFTER demos land so we can A/B with-and-without.
2. **Port BoxProjectedEnvMap?** Recommend YES, tiny, big win for gym/backrooms interiors. Lives in `packages/shared/` or demo-shell.
3. **Port MeshReflectorMaterial?** Recommend DEFER. Wait until we have a real SSR pass. Use plain shiny floor for the gym v1.
4. **Port AmbientParticles?** Recommend YES for demo flavor. ~100 LOC, demo-shell only.
5. **CompressionPass + LensDistortion?** Recommend YES into PostFX panel, behind master toggle (matches CLAUDE.md "bake-QA = off" rule).

Awaiting your call on (1)-(5) before any shader port.

---

## 8. Open follow-ups I noticed while reading

- Their LUT is `.3dl` — `postprocessing` ships an LUT3dlLoader. We don't bundle `postprocessing` today; check our PostFX implementation choice (Three native `EffectComposer` vs. pmndrs/postprocessing).
- Their `material.emissiveMap` convention is non-standard — Blender folks usually export to `material.lightMap` directly via `KHR_materials_lightmaps` or stash in `userData`. The emissive-slot trick works because nothing else uses it in their scenes.
- The backrooms scene depends on `THREE.PositionalAudio` + `AudioListener` mounted on the camera. Our shell doesn't have positional audio; if backrooms needs the hum/steps it's another small system to wire.
