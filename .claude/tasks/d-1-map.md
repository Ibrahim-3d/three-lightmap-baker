# d-1-map — CornellBoxExample.ts section map

Source: `src/demo/CornellBoxExample.ts` (1858 LOC, read 2026-05-14)

---

## SceneController candidates

- L0–L48: Imports — THREE primitives, OrbitControls, TransformControls, GLTFLoader, mergeVertices, Tweakpane, lib re-exports. SceneController needs OrbitControls/TransformControls/GLTFLoader/THREE scene primitives.
- L211–L222: Class fields — `renderer`, `camera`, `scene`, `controls`, `visualLight`, `lightDummy`, `lightTransformController`, `lightMarker`, `cornellRoot`, `meshes`. All SceneController state.
- L252–L253: `texelDensityMats` + `originalMaterials` WeakMap — per-mesh material-swap caches. Owned by SceneController (mesh property maps).
- L366–L384: Constructor: `Scene`, `PerspectiveCamera`, `WebGLRenderer` construction + DOM append + `diag.snap`. SceneController init block.
- L389–L403: `webglcontextlost` / `webglcontextrestored` event listeners — log diagnostic info on context loss/restore. SceneController owns renderer, so it owns these.
- L405–L407: `OrbitControls` construction + initial `target`/`update`. SceneController.
- L409–L436: `lightDummy` + `lightMarker` + `visualLight` (with `userData.lightmapIgnore = true`) + `lightTransformController` + `dragging-changed` listener (disables Orbit during gizmo drag). SceneController owns these; the `dragging-changed` wiring is the **OrbitControls drag-fight guard** — copy verbatim.
- L830–L835: `updateSize()` — resize handler for renderer + camera aspect ratio. SceneController public method.
- L838–L853: `mat()` helper — creates `MeshStandardMaterial` with `_originalMap` field. SceneController private helper (used only by scene-build methods).
- L848–L853: `addMesh()` — pushes to `this.meshes` + `cornellRoot.add`. SceneController private.
- L855–L897: `buildWalls()` — Cornell box wall geometry construction. SceneController (scene factory).
- L899–L916: `buildClassicBlocks()` — tall + short box geometry. SceneController (scene factory).
- L918–L945: `buildAdvancedExtras()` — sphere, torus knot, accent block. SceneController (scene factory).
- L954–L1005: `importGLB()` — async GLB parse via GLTFLoader, mesh eligibility filter (`lightMap` check + `mergeVertices`), `fitCameraAndLightToScene`, perMesh reset. SceneController (`loadGLB`).
- L1007–L1026: `fitCameraAndLightToScene()` — bbox-driven camera pull-back + OrbitControls target + lightDummy placement. SceneController.
- L1075–L1104: `rebuildScene()` — disposes groups, rebuilds cornellRoot, calls `buildWalls` + `buildClassicBlocks` + optionally `buildAdvancedExtras`, prunes stale perMesh UUIDs. SceneController (`loadPreset`). **NOTE: calls `installDummyLightmaps()` — cross-cutting with BakeController (dummy-LM pin).**
- L1536–L1543: Private render-loop state fields — `looping`, `fpsElement`, `progressContainer`, `progressBar`, `progressText`, `glbFileInput`, `bakeStartTime`, `bakeBatchHistory`. Mixed: loop machinery belongs in SceneController; progress DOM elements belong in the Orchestrator (or BakeController for bake-progress subset).
- L1573–L1763: `startLoop()` — RAF loop; gizmo visibility sync, FPS counter, per-group `lightmapper.render()` / `aoMapper.render()` step, per-atlas progress aggregation, `refreshAllComposites`, `estimateTimeRemaining`, progress text/bar, `controls.update()`, `firstPostBakeRender` diag gate, `renderer.render()`, AtlasViewer update. **Heavily cross-cutting** — see Cross-cutting section.

---

## BakeController candidates

- L232–L242: Fields `bakeGroups`, `meshToGroup`, `matTexDispose`, `bakeResult` — core bake state owned by BakeController.
- L254: `diag: Diagnostics` field — BakeController (diag hookpoints surround bake calls).
- L257: `firstPostBakeRender: boolean` flag — BakeController (triggers diag measure on first post-bake render).
- L1106–L1127: `dummyLightmap` field + `getDummyLightmap()` + `installDummyLightmaps()` — **S12 dummy-LM pin**: 1×1 white `DataTexture`, `channel=2`, `lightMapIntensity=0`. Called at scene init to pre-compile USE_LIGHTMAP shader variant and prevent D3D11 TDR on first post-bake render. BakeController owns this (called from `applyToScene`; wired at scene init via an `onSceneReady` hook or by SceneController calling `BakeController.installDummyLightmaps(meshes)`).
- L1129–L1140: `disposeAllGroups()` — iterates `bakeGroups`, calls `refinement.dispose`, `composite.dispose`, `aoMapper.dispose`, `lightmapper.dispose`, `atlasDispose`. BakeController.
- L1142–L1350: `bake()` — full bake entry: progress show, `diag.snap('bake() entry')`, filter excluded meshes, `disposeAllGroups`, secondary directional light inject + teardown, `perMesh` override build, `LightmapBakerOptions` assembly, `LightmapBaker.bake(scene, hooks)`, `BakeGroupView → BakeGroup` adapter loop (`runComposite` per group), `matTexDispose` reassign to `result.dispose`, `applyRenderMode`, `firstPostBakeRender = true`. BakeController (`runBake`).
- L1246–L1275: `onFrame` hook body inside `bake()` — composite refresh, `diag.snap`, overall progress bar math, per-atlas line log with throttle. Belongs with BakeController's `runBake`.
- L1352–L1361: `applyQualityPreset()` — writes to `options.lightMapSize/casts/targetSamples`, calls `bake()`. Stays in orchestrator (reads from `options` owned by CornellBoxExample).
- L1363–L1403: `applyRefinement()` — iterates `bakeGroups`, calls `runRefinement` per group with per-group progress callback, sets `refinementStatus`, calls `applyRenderMode`. BakeController.
- L1458–L1467: `showUnrefined()` — disposes each group's refinement RT, sets status, calls `applyRenderMode`. BakeController.
- L1766–L1774: `refreshAllComposites()` — pushes uniform overrides to every group's composite. BakeController.
- L1785–L1805: `rebakeAO()` — delegates to `bakeResult.rebakeAO()`, re-pulls fresh group views, rebinds `g.aoMapper` + calls `composite.refresh({ aoTex })`. BakeController (`runAOOnly`).
- L1649–L1689: Inside `startLoop()`'s tick — `lightmapper.render()` + `aoMapper.render()` per group, `allDone` detection, auto-refinement trigger. BakeController concerns embedded in the loop; see Cross-cutting.

---

## modes.ts candidates

- L86–L98: `LayerContext` + `Layer` types. Belongs in modes.ts.
- L100–L174: `LAYERS` constant array — 10 entries mapping id/label/group/showAlbedo/getLightMap. modes.ts.
- L176: `LAYER_OPTIONS` — derived from LAYERS. modes.ts.
- L178–L181: `Filter` constant. modes.ts.
- L1469–L1534: `applyRenderMode()` — resolves active Layer, handles `texelDensity` material-swap special case, restores originals, mounts per-group lightmap or falls back to dummy (with `lightMapIntensity=0` to keep USE_LIGHTMAP variant pinned), logs result. modes.ts as `applyRenderMode(meshes, bakeGroups, meshToGroup, options, texelDensityMats, originalMaterials, getDummyLightmap, visualLight)` — or as a method taking a context struct.
- L1807–L1844: `refreshTexelDensityMaterials()` — lazy-creates/updates TexelDensityMaterial per mesh using `options.texelsPerMeter × perMesh.scaleInLightmap`. Companion to the texelDensity layer; belongs in modes.ts or a separate texel-density helper, but is called from applyRenderMode.

---

## Stays in CornellBoxExample.ts

- L50–L98: Module-level constants — `DEBUG`, `ROOM`, `HALF`, `BakeGroup` type, `LayerContext` type, `Layer` type. The type definitions should move with their home modules; `DEBUG/ROOM/HALF` can stay.
- L183–L207: `presets` + `QUALITY_PRESETS` + `QualityPresetName` + `SceneObj`. Scene/preset config, stays for now (feeds UI).
- L209–L210: `CornellBoxExample` class declaration.
- L259–L355: `options` object literal — all Tweakpane-bound state. Stays in orchestrator.
- L357–L364: `perMeshFolder` field + `atlasViewer` field + init. Stays in orchestrator.
- L366–L390: Constructor preamble up to renderer DOM append — partially SceneController, but constructor wiring stays in orchestrator.
- L438–L723: Tweakpane `Pane` construction + all `addFolder`/`addInput`/`addButton` calls (View, Bake Settings, Lighting & GI, Refinement, Secondary Light, Export, Atlas Viewer, Scene folders). Entire UI wiring stays in orchestrator.
- L721–L722: `this.initUI(); this.rebuildScene();` — orchestrator startup sequence.
- L730–L762: `buildPerMeshUI()` — builds per-mesh Tweakpane folder. Stays in orchestrator.
- L764–L828: `initUI()` — creates FPS div, progress bar DOM, GLB file input. Stays in orchestrator.
- L1035–L1073: `exportSceneGLB()` — applyRenderMode('combined'), lazy-import GLTFExporter, parse + download. Stays in orchestrator (demo-grade export).
- L1352–L1361: `applyQualityPreset()` — writes options, calls bake. Stays as thin shim.
- L1404–L1441: `exportFinal()` + `exportCurrent()` — iterate bakeGroups, read layer tex, call runExport. Stays in orchestrator (demo-grade).
- L1443–L1456: `runExport()` — calls `exportLightmap`. Stays.
- L1536–L1551: Loop-state fields + `BAKE_ETA_WINDOW`. Rendering loop state — stays in orchestrator (startLoop is the main RAF).
- L1553–L1571: `estimateTimeRemaining()` — rolling ETA from bakeBatchHistory. Stays (used only inside startLoop).
- L1573–L1763: `startLoop()` — RAF tick: gizmo sync, FPS stats, bake step, progress update, controls, diag, renderer.render, atlasViewer. Stays in orchestrator (it's the main render loop), but bake-step segment (L1649–L1689) logically belongs to BakeController.
- L1846–L1857: `maybeBake()` — gate for slider change events. Stays in orchestrator.

---

## Cross-cutting concerns / gotchas

- **S12 dummy-LM pin (load-bearing)** — `installDummyLightmaps()` (L1118–L1127) is called from `rebuildScene()` (L1099, SceneController territory) but is conceptually BakeController's concern. The pin must happen before the first render. Safest split: SceneController calls `bakeController.installDummyLightmaps(meshes)` as part of `loadPreset` completion. Never remove the pin or set `mat.lightMap = null` on excluded meshes — see comment L1502–L1507.
- **`applyRenderMode` also falls back to dummy** (L1514–L1518) — the dummy fallback in the render-mode path is a second pin site. Both pin sites must move together or be consolidated in `BakeController.applyToScene`.
- **`userData.lightmapIgnore` on visualLight** (L428) — set in SceneController init; read by `collectLightsFromScene` inside the library. Must not be dropped when visualLight construction moves into SceneController.
- **TransformControls + OrbitControls drag-fight guard** (L432–L434) — `dragging-changed` listener disables `controls.enabled` on drag start and re-enables on drag end. Lives inside SceneController; must be preserved verbatim.
- **Per-group composite cache + dispose path** — `disposeAllGroups()` (L1129–L1140) calls `g.atlasDispose()` which is wired to `() => composite.dispose()` at L1310. BakeController must preserve this exact dispose chain; no direct composite.dispose() calls elsewhere.
- **`startLoop()` bake step** (L1649–L1689) — calls `g.lightmapper.render()` and `g.aoMapper.render()` which live on BakeController data but are driven by the orchestrator's RAF. Extract path options: (a) BakeController exposes a `tick()` method the loop calls; (b) loop stays in orchestrator with direct field access. Option (a) is cleaner but requires BakeController to own the done-detection and auto-refinement trigger too.
- **`firstPostBakeRender` diag gate** (L1734–L1743) — wraps `renderer.render()` with `diag.measure` on first post-bake RAF. Lives in loop; BakeController sets the flag (L1349); renderer.render is orchestrator. Minimal cross-cutting — just a bool handoff.
- **Secondary directional light inject** (L1174–L1188 / L1277) — a `DirectionalLight` is added to `this.scene` inside `bake()` for the duration of the bake, then removed in `finally`. BakeController needs a reference to the scene (i.e., SceneController) to do this.
- **Per-group composite `refresh()` in RAF** (L1689) — loop calls `g.composite.refresh()` every frame during active bake. If tick() is extracted to BakeController, this moves with it. If loop stays in orchestrator, orchestrator needs to read BakeController's groups.
- **`texelDensity` layer material-swap** (L1478–L1487) — `applyRenderMode` special-cases this id, calls `refreshTexelDensityMaterials`, and swaps `m.material`. Both `texelDensityMats` and `originalMaterials` must travel together with `applyRenderMode` into modes.ts (or the context struct passed to it must carry them).
- **`onFrame` hook inside `bake()`** (L1246–L1275) — accesses `this.bakeGroups[info.groupIndex]` which doesn't exist yet (groups are built AFTER bake returns at L1285). The refresh call at L1251 on a potentially-undefined group is guarded by `if (g)`. If BakeController owns groups, the hook closure captures `this` correctly only if it's a method on BakeController, not a closure over orchestrator fields.
- **`refreshAllComposites` called from tweakpane handlers** (L550–L598) — called directly from UI event handlers in orchestrator; BakeController must expose this as a public method.
