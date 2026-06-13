# Demo Redesign - DCC-Editor Showcase

**Status:** Approved 2026-05-14. Roadmap T-D1 … T-D13 in `.claude/` task tracker.
**Owner:** Demo track. Library (`src/lib/`) untouched.

## 1. Goal

Replace the current single-file tweakpane demo (`src/demo/CornellBoxExample.ts`,
1858 LOC) with a Unity/Unreal/Blender-style showcase that:

- looks and feels like a real DCC tool (dark theme, dense panels, dock-style layout)
- exposes the library's full capability via friendly UI, not developer chrome
- ships a library of preset scenes (Cornell variants + ports of three.js MIT
  examples) that double as side-by-side proof - "same scene, with our baker"
- supports add/remove/edit of meshes and lights with a transform gizmo
- handles the bake lifecycle (stale → re-bake) without surprising the user
- is built so future tracks (R3F wrapper, SH probes, save/load, undo/redo, HDRI
  envs, animation timeline) slot in as data, not new shell code

Marketing line (matches README): _"Path-traced lightmap baking with global
illumination. In the browser. No Blender. No Unity. No round-trips."_

## 2. Non-goals

- Save/load arbitrary user projects (showcase, not editor)
- Multi-object selection (deliberately deferred - single-select keeps inspector simple)
- Marquee / box-select in viewport
- Auto re-bake on edit (manual re-bake via banner only)
- Mobile / touch support (desktop-only splash)
- Library API changes (zero - demo is a pure consumer)

## 3. Library impact

**None.** `src/lib/` is not edited by this track. `LightmapBaker.bake()` API
frozen. Demo work doubles as a spec for the future R3F wrapper: the same
reactive consumption pattern (signals → `bake()` → `BakeHooks.onFrame` →
signals) is exactly what `<LightmapBake>` in R3F will need. If anything
awkward surfaces calling `bake()` from reactive Preact, we fix it lib-side
_before_ the R3F wrapper is written. Net: R3F track de-risked.

## 4. UI shape

```
┌────────────────────────────────────────────────────────────────┐
│ ⬢ Lightmap Studio │ File Edit View Render Help │ Scene▾ ⇄ ⚙  │  topbar 36px
├──────────┬───────────────────────────────────────┬─────────────┤
│ Outliner │ ┌──────────────────────┐ ┌─Render▾─┐  │ Inspector   │
│  + ▾ Scn │ │                      │ └─────────┘  │ ┌Obj Light  │
│   ▾ Lt   │ │                      │              │ │Mat Bake   │
│   ▾ Mesh │ │      3D Viewport     │              │ │World      │
│          │ │                      │  ⇱ gizmo     │ │           │
│  ─────   │ │                      │              │ │ fields…   │
│  Assets  │ │  Stale: Re-bake ▸    │  stats ⓘ    │ │           │
│  Primit▸ │ └──────────────────────┘              │ │           │
│  Lights▸ │                                       │ │           │
│  Scenes▸ │                                       │ │           │
├──────────┴───────────────────────────────────────┴─────────────┤
│ ▶ Bake  [████░░░] 60% · 1024² · Atlas 2/3 · 14s   ⓘ logs       │ 40px
└────────────────────────────────────────────────────────────────┘
```

**Panels:**

- _Topbar_ - logo + 5 menus (data-driven `menuRegistry`) + right-side scene
  picker dropdown + Compare ⇄ split-screen toggle + settings cog.
- _Outliner_ - left, tree of Lights + Meshes; collapsible groups; click
  selects; row affordances (visible toggle, lock placeholder).
- _Asset Library_ - below Outliner; Primitives + Lights categories; HTML5
  drag source.
- _Viewport_ - center; THREE canvas; overlays: render-mode dropdown (top-left,
  data-driven `renderModeRegistry`), stats + ⓘ Diagnostics (top-right), stale
  banner (bottom-center, amber).
- _Inspector_ - right; tabbed (Object · Material · Lightmap · Bake · Light ·
  World); pages chosen by lookup over `selectedNode.type` × `inspectorTab`;
  registered via `inspectorRegistry`.
- _Status bar_ - bottom; Bake button (binds `BakeController.runBake()`),
  progress bar (bound to `bakeProgress` signal), log popover (200-entry ring).

**Theme tokens** in `app/theme.css` via Tailwind v4 `@theme`:

```css
--color-bg-0: #1a1a1d; /* viewport bg */
--color-bg-1: #1e1e22; /* panel bg */
--color-bg-2: #25252a; /* row alt */
--color-bg-3: #2e2e34; /* hover */
--color-border: #3a3a40;
--color-accent: #4a9eff; /* selection, focus, progress */
--color-stale: #f59e0b; /* re-bake warning amber */
--color-text-0: #e5e5e9;
--color-text-1: #9a9aa3;
--color-text-2: #6a6a73;
--font-ui: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace;
```

Dense rows: 22 px outliner, 24 px inspector. Compact like Unity.

Splits resize via drag handles; widths persist to `localStorage`
(`view.outlinerWidth`, `view.inspectorWidth`).

Icons: `lucide-preact` (tree-shakeable, Unity-ish line set).

## 5. Architecture

### 5.1 File layout

```
src/demo/
├── main.tsx                 ← Preact mount; reads ?legacy= flag during migration
├── app/
│   ├── App.tsx              ← root layout
│   ├── theme.css            ← Tailwind v4 entry + tokens
│   └── shell/               ← Topbar | Outliner | Viewport | Inspector | StatusBar
├── three/
│   ├── SceneController.ts   ← owns THREE.Scene, camera, renderer, gizmo, raycaster
│   ├── BakeController.ts    ← owns LightmapBaker call site, stale, diagnostics
│   ├── ViewportHost.tsx     ← <canvas> + overlay components
│   └── modes.ts             ← render-mode swappers (existing logic, extracted)
├── state/
│   ├── signals.ts           ← all @preact/signals atoms
│   └── derived.ts           ← computed signals
├── scenes/
│   ├── registry.ts          ← sceneRegistry + ScenePreset type
│   └── presets/             ← cornell.classic.ts, cornell.glass-mirror.ts, ...
├── assets/
│   ├── primitives.ts        ← Cube/Sphere/Plane/Cylinder/Cone/Torus factories
│   └── lights.ts            ← Point/Spot/Sun/Area factories
└── panels/
    ├── Outliner/
    ├── Inspector/           ← tabbed; pages registered via inspectorRegistry
    ├── AssetLibrary/        ← grid + drag source
    └── StatusBar/           ← bake button, progress, log popover
```

Library at `src/lib/` is **not** edited.

### 5.2 State model - `@preact/signals`

```ts
// state/signals.ts (atoms)
selectedId        = signal<string | null>(null)
sceneTree         = signal<SceneNode[]>([])
bakeStatus        = signal<BakeStatus>('idle')            // idle|baking|done|error
bakeProgress      = signal<{pct,samples,atlas,total,elapsedMs}>(...)
isStale           = signal<boolean>(false)
renderMode        = signal<RenderMode>('shaded')
activeSceneId     = signal<string>('cornell.classic')
bakeSettings      = signal<BakeSettings>({...})
layout            = signal<{outlinerW,inspectorW,logOpen}>(...)
logBuffer         = signal<LogEntry[]>([])
inspectorTab      = signal<'object'|'light'|'material'|'bake'|'world'>('object')

// state/derived.ts (computed)
selectedNode      = computed(() => sceneTree.value.find(n => n.id === selectedId.value))
selectedThree     = computed(() => sceneController.lookup(selectedId.value))
canBake           = computed(() => bakeStatus.value !== 'baking' && sceneTree.value.some(n => n.type === 'mesh'))
```

### 5.3 Controllers (vanilla TS, signal-emitting)

`SceneController` owns `THREE.Scene`, camera, renderer, `OrbitControls`,
`TransformControls`, raycaster. Public API:

```ts
add(spec: SceneNodeSpec, hitPoint?: Vector3): string   // appends, returns id; flips isStale
remove(id: string): void                                // flips isStale
update(id: string, patch: Partial<NodeProps>): void    // transform/material/light/density edits; flips isStale
setSelected(id: string | null): void                    // does NOT flip isStale
loadPreset(presetId: string): Promise<void>             // tear down, build from registry
serialize(): ProjectV1                                  // versioned JSON, future save
load(project: ProjectV1): Promise<void>                 // future
```

Mutations flip `isStale` except: selection, visibility, rendermode swap.

`BakeController` owns the `LightmapBaker` call site:

```ts
async runBake(): Promise<void>      // wires BakeHooks.onFrame → bakeProgress
async runAOOnly(): Promise<void>    // → result.rebakeAO()
applyToScene(): void                // post-bake: swap dummy lightMap → real, per S12 pattern
cancel(): void                      // future
```

### 5.4 Plugin slots (day-1 registries; future tracks add data, not shell code)

| Registry                                                | Adds                                                                     |
| ------------------------------------------------------- | ------------------------------------------------------------------------ |
| `menuRegistry.register(menuId, item)`                   | File/Edit/View/Render/Help items                                         |
| `renderModeRegistry.register({id,label,apply,restore})` | render modes (Lightmap, Shaded, Wireframe, Atlas, AO, Diff, …)           |
| `inspectorRegistry.register({tabId,when,page})`         | inspector tabs (Object, Material, Lightmap, Bake, Light, World, Probes…) |
| `assetLibrary.register(categoryId, asset[])`            | asset categories (primitives, lights, future: HDRI, .glb upload)         |
| `sceneRegistry.register(preset)`                        | preset scenes                                                            |

Reserved future slots wired now, contents added later:

- `File → Import HDRI`
- `Render → Probes ▸` (Task 11 - SH light probes)
- `View → Animation Timeline`
- `Edit → Undo/Redo` (implemented via shared command history for
  add/remove/transform)
- Compare ⇄ split-screen, driven by `ScenePreset.referenceUrl`

### 5.5 Scene preset schema (versioned)

```ts
interface ScenePreset {
  id: string; // 'cornell.classic'
  label: string;
  category: 'cornell' | 'threejs-port' | 'interior' | 'isometric' | 'showcase';
  thumb: string; // /thumbs/...
  description: string;
  source?: { name; url; license: 'MIT' | 'CC0' | 'CC-BY'; author? };
  referenceUrl?: string; // original three.js demo URL → Compare ⇄
  build(THREE, scene): Promise<SceneBuildResult>;
  defaultBakeSettings: Partial<BakeSettings>;
  schemaVersion: 1;
}
```

Project save format `ProjectV1` is also versioned; loader registered by
version so v2 can add fields without breaking v1 files.

### 5.6 Per-object Inspector pages

| Tab          | Visible when   | Fields                                                                                                 |
| ------------ | -------------- | ------------------------------------------------------------------------------------------------------ |
| **Object**   | any selection  | name · visible · transform (numeric + gizmo) · duplicate · delete                                      |
| **Material** | mesh selected  | color · roughness · metalness · emissive · emissiveIntensity · receive shadow only · exclude from bake |
| **Lightmap** | mesh selected  | density (texels/m) · uv2 status · atlas index · texel preview thumbnail                                |
| **Light**    | light selected | type (RO) · color · intensity · range/angle/penumbra (type-dependent) · cast on bake                   |
| **Bake**     | always         | size · samples · bounces · AO toggle/distance/samples · denoise · superSample · safeMode               |
| **World**    | always         | bg color · env HDRI (slot, future) · sun (quick add) · probes (slot, Task 11)                          |

Transform gizmo: `THREE.TransformControls`, W/E/R = translate/rotate/scale
(Blender/Unity convention). Drag-end → `update(id, {transform})` → stale.

### 5.7 Add/remove + stale flow

- **Add:** HTML5 drag from Asset Library thumb → drop on viewport → raycast
  to ground plane (or origin if no hit) → `sceneController.add(spec,
hitPoint)`. New node auto-selected.
- **Remove:** Delete key on selection.
- **Stale:** Any mutation that changes baked output flips `isStale = true`.
  Amber banner `⚠ Scene changed - Re-bake (B)` above viewport bottom; click
  or press B → `runBake()`. Shift-click → `runAOOnly()`. Banner suppressed
  during `bakeStatus === 'baking'`.

## 6. Initial preset shortlist

**Wave 1 - Cornell variants (ships in T-D10):**

1. `cornell.classic` - port of current demo (no behavior change)
2. `cornell.glass-mirror` - Cornell + glass sphere + chrome cube
3. `cornell.emissive-strip` - emissive ceiling panel as sole light

**Wave 2 - three.js example ports + iso (ships in T-D11):** 4. `threejs.pointlights` - port of `webgl_lights_pointlights` 5. `threejs.shadowmap` - port of `webgl_shadowmap` (knight scene) 6. `threejs.collada-kinematics` - industrial robot 7. `threejs.decals` - Lee Perry-Smith head, 3-point light 8. `isometric.room` - built-in low-poly iso room (CC0 author or hand-modeled)

Each Wave 2 preset records source + license + author in `docs/SCENES-ATTRIBUTION.md`. `referenceUrl` opens original demo for side-by-side comparison.

## 7. Migration plan (non-breaking)

| Phase | Task                                            | Visible change                                   |
| ----- | ----------------------------------------------- | ------------------------------------------------ |
| A     | T-D1 - extract controllers                      | none; build green; Cornell visual identical      |
| B     | T-D2 - Preact + Tailwind + signals; legacy flag | default = legacy; `?legacy=0` boots Preact shell |
| C     | T-D3 → T-D9 - port panels one at a time         | each PR keeps app working                        |
| D     | T-D12 - flip default; remove legacy             | new UI is default; tweakpane removed             |
| E     | T-D10, T-D11 - scene library                    | new presets ship incrementally                   |

Each phase ships a green `npm run build`, `npx tsc --noEmit` clean, Cornell
visual check (red/green color bleed on sphere, soft shadow, ceiling tint).

## 8. Risks + mitigations

| Risk                                                 | Mitigation                                                                                                   |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Preact + signals incompatibility with Vite 2.6       | Audit at T-D2; bump Vite to 5 only if forced, scoped to demo dev pipeline (library bundle unchanged)         |
| Tailwind v4 alpha churn                              | Pin exact version; tokens isolate to `theme.css` so v4 → v5 jump is one file                                 |
| three.js example licenses ambiguous on ported scenes | Per-scene license review at T-D11; record in `docs/SCENES-ATTRIBUTION.md`; drop any unclear scene            |
| Bake API surface shifts when called from reactive UI | Caught early in T-D2; fix lib-side BEFORE R3F wrapper                                                        |
| TransformControls + OrbitControls input fight        | Disable Orbit while gizmo dragging (existing demo pattern, port verbatim)                                    |
| Large bundle from Preact + Tailwind + lucide         | Bundle budget: demo entry ≤ 350 KiB gzipped (current 236 KiB + ~80 KiB ceiling for new UI); enforce in T-D13 |

## 9. Verification per task

Every task:

1. `npx tsc --noEmit` clean
2. `npm run build` green; size delta sane
3. Visual: Cornell red/green color bleed, soft shadow under sphere, ceiling tint
4. Any new public-facing UI: 1-screenshot in PR

Phase D (T-D12) additionally:

- Diff bundle size vs. last legacy build; document Δ
- 20-cycle bake stress test on Cornell (catches S12 TDR regressions)
