# Step 2 — Folder restructure into `packages/` + `apps/`

Roadmap Step 2 from `.claude/progress.md`. Mechanical move + panel-slot API.
No behavior changes. Cornell parity preserved.

## Decisions

- **Registry home**: `packages/shared/` (cleanest read of "no sibling imports").
- **UI primitives**: `Field`, `Section`, `helpers` are generic — also in
  `packages/shared/src/ui/`. Both `demo-shell/` and `baker-classic/ui/` import
  from shared.
- **Orchestrator interface**: generic methods in
  `packages/shared/src/registries/orchestrator.ts`. Baker-specific extension
  lives in `baker-classic/ui/`.
- **Three orchestration**: SceneController + BakeController + CornellBoxExample
  + modes + types all live in `apps/playground/` (orchestrator is app glue,
  not shell). Shell is Preact-only.
- **No npm workspaces**: just TypeScript path mapping + Vite aliases. No
  build step inside packages — Vite compiles sources directly.
- **No `@lightmap/*` scope yet**: use bare alias names (`baker-classic`,
  `demo-shell`, `shared`) via tsconfig + vite resolve.alias. Cleaner for
  internal-only consumption; publish scope is a Tier-4 concern.

## Target tree

```
packages/
  shared/src/
    index.ts
    registries/        panel-registry.ts, menu-registry.ts, orchestrator.ts
    signals/           ui.ts, bake.ts
    ui/                Field.tsx, Section.tsx, helpers.ts
  baker-classic/src/   (= src/lib/)
    index.ts, LightmapBaker.ts, AtlasViewer.ts, errors.ts
    atlas/ denoise/ gpu/ lightmap/ utils/ types/
    ui/                BakePage.tsx, LightmapPage.tsx, menus.ts, index.ts
  demo-shell/src/
    index.ts, App.tsx, theme.css
    components/        Topbar Outliner Inspector Splitter Toast StaleBanner
                       StatusBar MenuButton AssetLibrary ScenePicker
                       MobileSplash icons
    inspector/         ObjectPage MaterialPage WorldPage LightPage
    menus/             file edit view help (+ index)

apps/playground/
  index.html
  src/
    main.tsx, index.ts, CornellBoxExample.ts
    three/             SceneController BakeController modes types
    scenes/            registry + presets/
    assets/            primitives
```

## Plan checklist

### Phase 0 — Skeleton
- [x] Create packages/{shared,baker-classic,demo-shell}/src/ and apps/playground/src/
- [x] Set up tsconfig path mapping
- [x] Set up vite.config.js alias + root
- [x] Update eslint.config.js paths
- [x] Update CI workflow paths (`packages/ apps/` instead of `src/`)

### Phase 1 — Move baker-classic library
- [x] `git mv src/lib/* packages/baker-classic/src/`
- [x] Verify relative imports still valid (no changes needed)

### Phase 2 — Create shared package
- [x] Create `packages/shared/src/registries/panel-registry.ts` (NEW)
- [x] Move + adapt `src/demo/state/menuRegistry.ts` → `packages/shared/src/registries/menu-registry.ts`
- [x] Move + adapt `src/demo/state/orchestrator.ts` → `packages/shared/src/registries/orchestrator.ts` (generic interface)
- [x] Move `src/demo/state/signals.ts` → split → `packages/shared/src/signals/ui.ts` + `signals/bake.ts`
- [x] Move `src/demo/app/shell/inspector/Field.tsx` → `packages/shared/src/ui/Field.tsx`
- [x] Move `src/demo/app/shell/inspector/helpers.ts` → `packages/shared/src/ui/helpers.ts` (generic version)
- [x] Move `apps/playground/src/scenes/registry.ts` → `packages/shared/src/registries/scene-registry.ts`
- [x] Move `apps/playground/src/assets/primitives.ts` → `packages/shared/src/assets/primitives.ts`
- [x] Write `packages/shared/src/index.ts` re-export barrel

### Phase 3 — Move demo-shell components
- [x] Move `src/demo/app/App.tsx` → `packages/demo-shell/src/App.tsx`
- [x] Move `src/demo/app/theme.css` → `packages/demo-shell/src/theme.css`
- [x] Move `src/demo/app/shell/*.tsx` → `packages/demo-shell/src/components/`
- [x] Move generic inspector pages (`ObjectPage`, `MaterialPage`) → `packages/demo-shell/src/inspector/`
- [x] (`LightPage`, `WorldPage` moved to baker-classic — they read baker-specific options)
- [x] Move `src/demo/app/shell/menus/{file,edit,view,help,index}.ts` → `packages/demo-shell/src/menus/`
- [x] Update Inspector.tsx to read panelRegistry
- [x] Write `packages/demo-shell/src/index.ts` barrel

### Phase 4 — Move baker-classic UI
- [x] Move `src/demo/app/shell/inspector/BakePage.tsx` → `packages/baker-classic/src/ui/BakePage.tsx`
- [x] Move `src/demo/app/shell/inspector/LightmapPage.tsx` → `packages/baker-classic/src/ui/LightmapPage.tsx`
- [x] Move `LightPage.tsx` + `WorldPage.tsx` from demo-shell → `packages/baker-classic/src/ui/`
- [x] Move + adapt `src/demo/app/shell/menus/render.ts` → `packages/baker-classic/src/ui/menus.ts` (also owns File → Export Lightmap PNG)
- [x] Add `packages/baker-classic/src/ui/orchestrator.ts` with `BakerOrchestrator` interface
- [x] Write `packages/baker-classic/src/ui/index.ts` with `registerBakerClassicUI()`

### Phase 5 — Move playground app
- [x] Move `src/demo/main.tsx` → `apps/playground/src/main.tsx`
- [x] Move `src/demo/CornellBoxExample.ts` → `apps/playground/src/CornellBoxExample.ts`
- [x] Move `src/demo/index.ts` → `apps/playground/src/index.ts`
- [x] Move `src/demo/three/{SceneController,BakeController,modes,types}.ts` → `apps/playground/src/three/`
- [x] Move `src/demo/scenes/` (presets only) → `apps/playground/src/scenes/`
- [x] Move `index.html` → `apps/playground/index.html`

### Phase 6 — Wire up imports
- [x] Rewrite all `../lib` to `baker-classic` alias
- [x] Rewrite `../state/*` to `shared` alias
- [x] Rewrite `./Field`, `./helpers` in panels to `shared` alias
- [x] CornellBoxExample implements `BakerOrchestrator`
- [x] Vite config root = apps/playground; outDir back to <repo>/dist
- [x] index.html script src points to ./src/index.ts

### Phase 7 — Verify
- [x] `npx tsc --noEmit` clean
- [x] `npm run lint` clean (0 errors, 93 pre-existing warnings)
- [x] `npm run format:check` clean
- [x] `npm run build` green at 838.64 KiB / 228.66 KiB gz
- [x] `npx madge --circular packages/ apps/` no cycles
- [x] No new file > 300 LOC; legacy files grandfathered
- [ ] Cornell Box renders in dev server (manual — deferred)

### Phase 8 — Wrap-up
- [x] Update `.github/workflows/ci.yml`: madge + LOC scan paths
- [x] Update `eslint.config.js` patterns
- [x] Update `package.json` scripts: `lint src/` → `lint packages/ apps/`
- [x] Update `tailwind.config.js` content paths
- [x] Update `tsconfig.json` include + path mapping
- [x] Update `CLAUDE.md` Key Files section
- [x] Update `.claude/progress.md` Status table + S14 entry
