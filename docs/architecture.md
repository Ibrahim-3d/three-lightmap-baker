# Architecture — Three Lightmap Baker

Snapshot taken during Task 02. Reflects the codebase as it exists *before* any
bounce-GI / albedo-texture work has begun. File:line references are pinned to
the current commit.

---

## 1. File inventory (`src/`)

| File | Role |
|---|---|
| `src/index.ts` | Entry. Awaits `loadXAtlasThree()` (loads xatlas WASM), then instantiates `CornellBoxExample`. Hooks window resize. |
| `src/CornellBoxExample.ts` | Cornell-Box demo + bake orchestrator. Builds scene, owns the tweakpane UI, drives `bake()` → atlas → BVH → lightmapper → progressive render loop. **The active app.** |
| `src/LightBakerExample.ts` | Legacy upstream demo that loads an arbitrary GLB (`level_blockout.glb`). **Not wired in `index.ts`** — kept for reference; ignore for current work. |
| `src/atlas/generateAtlas.ts` | xatlas-three integration. `loadXAtlasThree()` fetches WASM. `generateAtlas(meshes)` mutates each `mesh.geometry` to add a `uv2` attribute via `unwrapper.packAtlas(geometry, 'uv2', 'uv')`. |
| `src/atlas/renderAtlas.ts` | UV-space rasterization pass. Renders each mesh once with `gl_Position = (uv2 + offset)*2 − 1`, fragment writes worldPos / worldNormal. Repeats with 25 dilation offsets to bleed values into seam-adjacent texels. Returns `{ positionTexture, normalTexture }`. |
| `src/lightmap/Lightmapper.ts` | Sets up `LightmapperMaterial` + a `WebGLRenderTarget` (FloatType, mipmapped). `render()` increments `sampleIndex`, sets `opacity = 1/sampleIndex`, draws a fullscreen 2×2 plane through an `OrthographicCamera`. Progressive accumulation via alpha blend. |
| `src/lightmap/LightmapperMaterial.ts` | **The ray tracer.** A `ShaderMaterial` whose fragment shader reads worldPos/worldNormal at `vUv`, fires `casts` rays per texel via `bvhIntersectFirstHit`, and writes radiance. |
| `src/lightmap/LightmapperUtils.ts` | `renderSampleCount` / `renderTime` helpers (drive `lightmapper.render()` N times or for T ms). **Not currently called** by either example. |
| `src/utils/GeometryUtils.ts` | `mergeGeometry(meshes)` — clones each mesh's geometry, drops `color` attribute, applies `matrixWorld`, then `mergeGeometries(...)` into one buffer. **Discards material identity per triangle.** |
| `src/utils/LoaderUtils.ts` | Promise wrappers for `TextureLoader` / `GLTFLoader`. Only used by `LightBakerExample`. |
| `src/denoise/DenoiseMaterial.ts` | `smartDeNoise` bilateral blur shader. **Defined but never instantiated** in the active pipeline. Reserved for Task 05. |

---

## 2. Data-flow diagram (Cornell pipeline)

```
                        ┌──────────────────────────────────────┐
                        │  CornellBoxExample.rebuildScene()    │
                        │   buildWalls / Blocks / Extras       │
                        │   → this.meshes : Mesh[]             │
                        └──────────────────┬───────────────────┘
                                           │
                                           ▼
                        ┌──────────────────────────────────────┐
                        │ bake() — CornellBoxExample.ts:263    │
                        │  scene.updateMatrixWorld(true)       │
                        └──────────────────┬───────────────────┘
                                           │
   ┌───────────────────────────────────────┼───────────────────────────────────────┐
   │                                       │                                       │
   ▼                                       ▼                                       ▼
┌──────────────────────┐   ┌────────────────────────────────┐   ┌──────────────────────────────────┐
│ generateAtlas(meshes)│   │ renderAtlas(renderer, meshes,  │   │ mergeGeometry(meshes)            │
│  (atlas/generate-    │   │  res, dilate=true)             │   │  (utils/GeometryUtils.ts:4)      │
│   Atlas.ts:27)       │   │  (atlas/renderAtlas.ts:100)    │   │                                  │
│                      │   │                                │   │  for each mesh:                  │
│  mutates each        │   │  Pass A: worldPositionMaterial │   │    geom = mesh.geometry.clone()  │
│  geometry → adds     │   │    → positionTexture (FloatRT) │   │    geom.deleteAttribute('color') │
│  `uv2` attribute     │   │  Pass B: normalMaterial        │   │    geom.applyMatrix4(matrixWorld)│
│                      │   │    → normalTexture   (FloatRT) │   │  mergeGeometries([...])          │
└──────────┬───────────┘   └────────────────┬───────────────┘   └──────────────┬───────────────────┘
           │                                │                                  │
           │ (mesh geom carries uv2)        │ (positions, normals)             │ (single merged geom)
           │                                │                                  ▼
           │                                │                       ┌──────────────────────┐
           │                                │                       │ new MeshBVH(merged)  │
           │                                │                       │ (CornellBoxExample   │
           │                                │                       │  .ts:282)            │
           │                                │                       └──────────┬───────────┘
           │                                │                                  │
           └────────────────────────────────┴──────────────────────────────────┤
                                                                               ▼
                            ┌──────────────────────────────────────────────────────────────┐
                            │ generateLightmapper(renderer, posTex, normTex, bvh, opts)    │
                            │  (lightmap/Lightmapper.ts:23)                                │
                            │                                                              │
                            │  → LightmapperMaterial(bvh, positions, normals, casts,       │
                            │       lightPosition, lightSize, ambient*, *Enabled)          │
                            │  → renderTexture: WebGLRenderTarget(FloatType,               │
                            │       LinearMipMapLinearFilter, generateMipmaps=true)        │
                            │  → render()  — fullscreen 2×2 plane through OrthoCam,        │
                            │                sampleIndex++, opacity = 1/sampleIndex        │
                            └──────────────────────┬───────────────────────────────────────┘
                                                   │
                                                   ▼
                            ┌──────────────────────────────────────────────────────────────┐
                            │ startLoop() / requestAnimationFrame                          │
                            │  if !pause:  lightmapper.render()  (one extra sample/frame)  │
                            │  applyRenderMode() binds renderTexture.texture as            │
                            │   `material.lightMap` on every scene mesh (channel = 2)      │
                            └──────────────────────────────────────────────────────────────┘
```

---

## 3. Shader programs

| # | Shader | Defined in | Purpose |
|---|---|---|---|
| 1 | `worldPositionMaterial` | `atlas/renderAtlas.ts:24` | Atlas pass A. Vertex: `gl_Position = (uv2 + offset)*2 − 1`, `vWorldPosition = modelMatrix * position`. Fragment: `gl_FragColor = vWorldPosition`. |
| 2 | `normalMaterial` | `atlas/renderAtlas.ts:57` | Atlas pass B. Vertex: same UV-NDC trick, `vNormal = modelMatrix * vec4(normal, 0)`. Fragment: `gl_FragColor = normalize(vNormal)`. (modelMatrix on a normal is wrong for non-uniform scale, but Cornell has none.) |
| 3 | `LightmapperMaterial` | `lightmap/LightmapperMaterial.ts:60` | The path tracer. Fullscreen quad. Per fragment: read `positions`/`normals` at `vUv`, run `casts` hemisphere rays for AO+sky-indirect, `casts` cone rays toward `lightPosition` for direct visibility. Emits `vec4 finalColor`. |
| 4 | `DenoiseMaterial` | `denoise/DenoiseMaterial.ts:59` | Bilateral edge-preserving blur (`smartDeNoise`). **Unused.** |

The lightmapper's BVH traversal uses three-mesh-bvh's GLSL helpers — `${shaderStructs}` and `${shaderIntersectFunction}` are inlined at top of fragment, with `uniform BVH bvh` driven by `MeshBVHUniformStruct`. This is **GPU shader raycasting, not CPU**.

---

## 4. WebGL render-target lifecycle

| RT | Created in | Format | Lifetime | Disposal? |
|---|---|---|---|---|
| `positionTextureRT` | `renderAtlas.ts:103` (inside `renderWithShader`) | RGBA `FloatType`, NearestFilter min+mag, no mipmap, `resolution²` | Per `bake()` call. Texture handed back via `target.texture`; the RT object itself goes out of scope. | **No**. RT and its GPU texture are leaked on every rebake. |
| `normalTextureRT` | same — second call to `renderWithShader` | same | same | **No** — leaked. |
| `lightmapTarget` (a.k.a. `renderTexture` in Lightmapper) | `Lightmapper.ts:41` | RGBA `FloatType`, `LinearMipMapLinearFilter` min, `LinearFilter` mag, `generateMipmaps=true` | Per `generateLightmapper(...)` call. Held by `CornellBoxExample.lightmapTarget` and bound as `material.lightMap` on scene meshes. | **No**. On rebake the previous target loses its only reference → leaked. |

Per-frame cycle on `lightmapTarget`:

```
render():
  setRenderTarget(renderTexture)
  uniforms.sampleIndex = totalSamples
  uniforms.opacity     = totalSamples == 0 ? 1 : 1 / totalSamples
  draw raycastMesh (2×2 plane, OrthoCam)        ← additive blend via material.transparent + opacity
  setRenderTarget(null)
  totalSamples++
```

Initial clear is `setClearColor(0xff0000, 0)` then `clear()` once at construction (`Lightmapper.ts:48`). After that, each render *blends* (since `transparent: true` and the new fragment's alpha = `opacity = 1/N`), giving a running average of N samples.

> **Leak note for downstream tasks:** Task 05/06 should add `.dispose()` on the previous targets (and the BVH uniform struct's GPU buffers) before rebaking; ignoring this will OOM the GPU on long sessions of preset / resolution toggling.

---

## 5. Ray-tracer specifics (answers to Task 02 §3)

- **CPU vs GPU?** GPU. `bvhIntersectFirstHit(bvh, rayOrigin, rayDirection, …)` is a GLSL function provided by `three-mesh-bvh`. The BVH is uploaded once via `MeshBVHUniformStruct.updateFrom(bvh)` (`LightmapperMaterial.ts:30-31`).
- **Texel iteration?** Fullscreen shader. One draw call (2×2 plane) processes every texel of the lightmap render target in parallel. The fragment shader's inner loop iterates over **`casts` rays per texel**, not over texels.
- **Albedo / emissive passing?** **None.** The fragment shader has zero material-data uniforms. `lightPosition: vec3` and `lightSize: float` are the only spatial light inputs. No `albedoTexture`, no `emissiveTexture`, no per-triangle attribute. On a hit, the shader has `faceIndices: uvec4` and `faceNormal: vec3` from BVH output, but does nothing with `faceIndices.x` (the global triangle index) — this is the single missing hook.
- **Per-triangle vs per-mesh material lookup?** Neither exists today. `mergeGeometry` (`utils/GeometryUtils.ts:4`) merges all mesh geometries into one BVH-input buffer in `meshes.map(...)` order — same order as `CornellBoxExample.meshes`. That ordering *is* preserved and exploitable: a per-triangle material-index attribute (or a flat `albedoTexture` keyed by `faceIndices.x`) can be built at merge time. **Neither is built today.**

---

## 6. The exact line where the bounce ray belongs

File: `src/lightmap/LightmapperMaterial.ts`
Function: fragment `main()`, lines 167–187 (the `if(ambientLightEnabled || indirectLightEnabled)` block).

Current code (annotated):

```glsl
// LightmapperMaterial.ts:167-187
if (ambientLightEnabled || indirectLightEnabled) {
    for (int i = 0; i < casts; i++) {
        vec3 newDirection = getHemisphereSample(normal.xyz, rand4().xy);

        if (dot(rayDirection, newDirection) > 0.0) {
            bool hit = bvhIntersectFirstHit(
                bvh, rayOrigin, newDirection,
                faceIndices, faceNormal, barycoord, side, dist
            );

            // ── Line 174-178: SKY-MISS BRANCH ────────────────────────────────
            //  Today's "indirect light" = white sky on miss only.
            //  This is the colorless scalar accumulator the bake currently uses.
            if (!hit) {
                totalIndirectLight.r += 1.0;
                totalIndirectLight.g += 1.0;
                totalIndirectLight.b += 1.0;
            }

            //  ◀──── BOUNCE INSERTION POINT  (between line 178 and line 180) ──▶
            //
            //  When `hit == true`, today the shader does NOTHING radiance-wise
            //  with the hit. To add 1-bounce GI, the `else` of `if (!hit)` must:
            //    1. Compute hitPos = rayOrigin + newDirection * dist
            //    2. Look up albedo of the hit triangle:
            //         vec3 albedo = texelFetch(albedoTexture, ivec2(faceIndices.x % W,
            //                                                      faceIndices.x / W), 0).rgb;
            //       (requires Task 03's per-triangle albedoTexture +
            //        triangle-index attribute on the merged BVH geometry)
            //    3. Optionally: emissive lookup → if (emissive>0) contribute directly
            //    4. Cast a SHADOW ray from hitPos toward lightPosition; if unoccluded,
            //         contribute  albedo * lightColor * max(0, dot(faceNormal, L)) / PI
            //         to totalIndirectLight  (this is the color-bleed term)
            //    5. (Multi-bounce later) Recursive hemisphere ray from hitPos around
            //         faceNormal, multiplied by `albedo` of this hit
            //
            //  Critically: `totalIndirectLight` already exists as `vec3` — but is being
            //  used as a colorless 1.0 scalar. Replacing the +=1.0 with tinted radiance
            //  (and adding the hit-branch term above) requires no new accumulator.

            if (!hit || dist > ambientDistance) {
                totalAO.r += 1.0;
                totalAO.g += 1.0;
                totalAO.b += 1.0;
            }
        }
    }
}
```

**Insertion site, precisely:** after the closing `}` of the `if (!hit) { totalIndirectLight += 1; }` block at **line 178**, before the AO check at line 180. New logic must execute on the hit branch (i.e. the `else` of the `if (!hit)` test) — that's the moment we have `dist`, `faceIndices`, `faceNormal`, `barycoord` for a real surface hit and can use them to query the (Task-03) albedo lookup.

---

## 7. Confirmed blockers (from Session 1 progress.md)

The walkthrough above confirms all four blockers raised at the end of Task 01:

1. **No emissive-mesh-as-light path.** Confirmed: only `lightPosition: vec3` + `lightSize: float`. Direct rays are aimed at a single point. (`LightmapperMaterial.ts:71-72, 191-194`.)
2. **`totalIndirectLight` is a scalar masquerading as `vec3`.** Confirmed: `+=1.0` per channel on miss with no albedo modulation. Color bleeding is impossible without the hit-branch insertion above. (`LightmapperMaterial.ts:175-177`.)
3. **`mergeGeometry` discards material identity.** Confirmed at `utils/GeometryUtils.ts:4-15`. Merge order = `meshes.map(...)` = `CornellBoxExample.meshes` order. A per-triangle material-index attribute must be added during merge (option a in progress.md), exposed as a `usampler2D` or float `DataTexture` keyed by `faceIndices.x`.
4. **Atlas pass is material-agnostic.** Confirmed: `renderAtlas.ts:113-117` clones each mesh and overrides material. Position/normal G-buffers are 1:1 with `meshes` ordering — same exploitable ordering as merge.

---

## 8. Order-of-operations for downstream tasks

```
Task 03 (Albedo / Emissive textures)
  ├── add per-triangle materialIndex BufferAttribute in mergeGeometry
  ├── pack albedo[i] (and emissive[i]) into DataTexture keyed by global triIdx
  ├── add `uniform sampler2D albedoTex; uniform sampler2D emissiveTex;` to LightmapperMaterial
  └── Direct-light loop multiplies hit-shading by hit albedo (color-bleed direct)

Task 04 (Bounce / GI)  — depends on 03
  ├── insertion at LightmapperMaterial.ts line 178 (per §6 above)
  ├── replace `totalIndirectLight += 1.0` with proper radiance accumulation
  ├── on hit: shadow-ray to lightPosition, accumulate albedo-tinted irradiance
  └── (later) iterate to 2-bounce by recursing the hemisphere ray from hitPos

Task 05 (Denoise)
  └── wire src/denoise/DenoiseMaterial.ts into a post-bake fullscreen pass
      (run when sampleIndex stops advancing, or as a preview filter)

Task 06 (Export / API)
  ├── readPixels from lightmapTarget → encode (RGBE / EXR / PNG with HDR pack)
  ├── per-mesh atlas extraction so each export mesh ships its own lightmap slice
  └── dispose() leaked render targets (see §4)
```

---

*End of architecture snapshot. Anything not described here is either out-of-tree
(node_modules) or untouched legacy (`LightBakerExample.ts`, `LoaderUtils.ts`).*

---

## 9. System Diagram (target architecture)

```
┌─────────────────────────────────────────────────────┐
│                    LightmapBaker                     │
│                   (orchestrator)                     │
├─────────────┬──────────────┬────────────────────────┤
│             │              │                        │
│   UV Unwrap │   Pass 1     │   Pass 2               │
│   (xatlas)  │   UV→World   │   Ray Trace            │
│             │   Position   │   (BVH + bounce)       │
│             │   + Normal   │                        │
│             │   (MRT)      │                        │
├─────────────┴──────────────┴────────────────────────┤
│                                                      │
│   Post-Processing Pipeline                           │
│   gap-flood → denoise → downscale → export          │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│   Output: BakeResult                                 │
│   - lightmaps: Map<Mesh, Texture>                   │
│   - aoMaps: Map<Mesh, Texture>  (if requested)      │
│   - probes: LightProbe[]       (if requested)       │
│   - apply() / export() / dispose()                  │
│                                                      │
└──────────────────────────────────────────────────────┘
```

## 10. Data Flow

```
Scene meshes
  │
  ▼
xatlas unwrap → geometry with UV2
  │
  ▼
Pass 1: render geometry with gl_Position = uv2*2-1
  │      fragment outputs worldPos (RT0) + worldNormal (RT1)
  │
  ▼
Pass 2: fullscreen quad reads worldPos + worldNormal textures
  │      for each texel: trace rays from worldPos along hemisphere
  │      BVH intersection via three-mesh-bvh
  │      accumulate: emissive (direct) + albedo × bounce (indirect)
  │
  ▼
gap-flood: dilate edges 4px to cover UV seams
  │
  ▼
denoise: bilateral filter guided by worldPos + worldNormal
  │
  ▼
downscale: bilinear reduce if superSample > 1
  │
  ▼
BakeResult: lightmap textures applied via mesh.material.lightMap
```

## 11. Key Invariants

1. Pass 1 and Pass 2 are SEPARATE shaders, SEPARATE draw calls
2. Material data (albedo, emissive) is packed into DataTextures indexed by triangle index in the merged BVH
3. Every WebGL resource has an explicit owner and dispose path
4. The orchestrator (baker.ts) is the ONLY file that knows the phase sequence
5. Passes communicate through typed data, never through shared mutable state
