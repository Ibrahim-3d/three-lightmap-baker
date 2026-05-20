import 'demo-shell/theme.css';
import './scenes/presets';
import { effect } from '@preact/signals';
import { render } from 'preact';
import { loadXAtlasThree } from 'baker-classic';
import { registerBakerClassicUI } from 'baker-classic/ui';
// PT renderer UI hidden 2026-05-19 while focus is on baker polish.
// Code stays in tree (packages/pt-renderer/) — flip back on by uncommenting:
//   import { registerPTRendererUI } from 'pt-renderer/ui';
//   registerPTRendererUI();
import { App, GalleryPage, PostFXPage, showToast } from 'demo-shell';
import {
  activeSceneId,
  atlasViewerVisible,
  bakeProgress,
  bakeStatus,
  commandHistory,
  flyActive,
  gizmoMode,
  inspectorTab,
  isStale,
  panelRegistry,
  renderMode,
  sceneTree,
  selectedId,
  setOrchestrator,
  showAxes,
  showGrid,
  viewLayers,
  type AssetSpec,
} from 'shared';
import { CornellBoxExample } from './CornellBoxExample';
import { LIGHT_DUMMY_ID } from './three/SceneController';
import { LAYERS } from './three/modes';
import { AddCommand, RemoveCommand, TransformCommand } from './three/commands';

/**
 * Playground entry. With no `?scene=` param renders the gallery landing.
 * With `?scene=<id>` boots the full editor and loads the chosen preset.
 *
 * `?legacy=1` skips Preact + bypasses gallery — escape hatch.
 * `?test=1` exposes `window.__baker` for Playwright and bypasses gallery.
 */
function getSceneParam(): string | null {
  return new URLSearchParams(window.location.search).get('scene');
}

function isLegacy(): boolean {
  return new URLSearchParams(window.location.search).get('legacy') === '1';
}

function isTestMode(): boolean {
  return new URLSearchParams(window.location.search).get('test') === '1';
}

function mountGallery(): void {
  const mount = document.createElement('div');
  mount.id = 'app';
  document.body.appendChild(mount);
  render(<GalleryPage />, mount);
}

/**
 * 4Hz poll bridging vanilla bake state into reactive signals. Replaced by
 * signal-emitting controllers in a later phase if polling shows up in perf.
 */
function startStatusSync(app: CornellBoxExample): void {
  setInterval(() => {
    const status = app.getBakeStatus();
    if (bakeStatus.value !== status) bakeStatus.value = status;

    const opts = app.options;
    const total = opts.targetSamples;
    const pct = total > 0 ? Math.min(100, (opts.samples / total) * 100) : 0;
    bakeProgress.value = {
      pct,
      samples: opts.samples,
      atlas: app.getBakeGroupCount(),
      total,
      elapsedMs: status === 'baking' ? app.getBakeElapsedMs() : 0,
    };
  }, 250);
}

function wireSelectionEffects(app: CornellBoxExample): void {
  effect(() => {
    app.setSelection(selectedId.value);
  });
  effect(() => {
    app.setGizmoMode(gizmoMode.value);
  });
  effect(() => {
    app.setLayer(renderMode.value);
  });
  effect(() => {
    app.sceneController.gridHelper.visible = showGrid.value;
  });
  effect(() => {
    app.sceneController.axesHelper.visible = showAxes.value;
  });
  // Auto-switch inspector tab on selection: lights → Light; meshes → Object.
  effect(() => {
    const id = selectedId.value;
    if (!id) return;
    if (id === LIGHT_DUMMY_ID) {
      inspectorTab.value = 'light';
      return;
    }
    const obj = app.lookupObject(id);
    if (obj?.userData?.bakerLightType) {
      inspectorTab.value = 'light';
    } else if (obj) {
      // Keep current tab if already on a per-mesh tab (Material / Lightmap).
      const t = inspectorTab.value;
      if (t !== 'material' && t !== 'lightmap') inspectorTab.value = 'object';
    }
  });
}

/** W/E/R = translate/rotate/scale. Escape = deselect. Delete = remove node.
 *  B = re-bake when stale. A = toggle atlas viewer. 1/3/7/0 = view orbits
 *  (front / right / top / persp — Blender numpad convention; Shift+ = back/
 *  left/bottom). */
function wireHotkeys(app: CornellBoxExample): void {
  window.addEventListener('keydown', (e) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
    // Undo / Redo — check BEFORE key-letter routing so 'z' doesn't fall through.
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
      e.preventDefault();
      if (e.shiftKey) commandHistory.redo();
      else commandHistory.undo();
      return;
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') {
      e.preventDefault();
      commandHistory.redo();
      return;
    }
    const k = e.key.toLowerCase();
    // Fly mode owns WASD/QE/Shift — don't let them double-fire as gizmo shortcuts.
    if (
      flyActive.value &&
      (k === 'w' || k === 'a' || k === 's' || k === 'd' || k === 'q' || k === 'e')
    ) {
      return;
    }
    if (k === 'w') gizmoMode.value = 'translate';
    else if (k === 'e') gizmoMode.value = 'rotate';
    else if (k === 'r') gizmoMode.value = 'scale';
    else if (e.key === 'Escape') selectedId.value = null;
    else if (e.key === 'Delete' || e.key === 'Backspace') {
      const id = selectedId.value;
      if (!id || id === LIGHT_DUMMY_ID) return;
      // Undoable delete — detach (no dispose), retain on the command.
      const detached = app.sceneController.detachNode(id);
      if (detached) {
        commandHistory.push(new RemoveCommand(app.sceneController, detached.node, detached.parent));
      }
      selectedId.value = null;
    } else if (k === 'b') {
      if (isStale.value && bakeStatus.value !== 'baking') void app.requestBake();
    } else if (k === 'f') {
      // Maya/Blender/Unreal "frame selected" — center selection in view.
      const id = selectedId.value;
      const obj = id ? app.sceneController.lookupObject(id) : null;
      if (obj) app.sceneController.frameObject(obj);
    } else if (k === 'g') {
      // Toggle ground grid (matches Unity / common viewport "show grid").
      showGrid.value = !showGrid.value;
    } else if (k === 'a') {
      atlasViewerVisible.value = !atlasViewerVisible.value;
    } else if (e.key === '1') {
      app.sceneController.setView(e.shiftKey ? 'back' : 'front');
    } else if (e.key === '3') {
      app.sceneController.setView(e.shiftKey ? 'left' : 'right');
    } else if (e.key === '7') {
      app.sceneController.setView(e.shiftKey ? 'bottom' : 'top');
    } else if (e.key === '0') {
      app.sceneController.setView('persp');
    }
  });
}

function wireDragDrop(app: CornellBoxExample): void {
  const canvas = app.sceneController.renderer.domElement;
  canvas.addEventListener('dragover', (e: DragEvent) => {
    if (!e.dataTransfer) return;
    if (!Array.from(e.dataTransfer.types).includes('application/x-baker-asset')) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  });
  canvas.addEventListener('drop', (e: DragEvent) => {
    if (!e.dataTransfer) return;
    const payload = e.dataTransfer.getData('application/x-baker-asset');
    if (!payload) return;
    e.preventDefault();
    let spec: AssetSpec;
    try {
      spec = JSON.parse(payload) as AssetSpec;
    } catch {
      console.warn('[baker] bad asset drop payload', payload);
      return;
    }
    const worldPos = app.pickGroundPoint(e.clientX, e.clientY);
    const uuid = app.addAsset(spec, worldPos);
    if (uuid) {
      selectedId.value = uuid;
      const node = app.lookupObject(uuid);
      // Primitives are parented to cornellRoot; lights are direct scene children.
      const parent =
        spec.kind === 'primitive'
          ? app.sceneController.getCornellRoot()
          : app.sceneController.scene;
      if (node && parent) {
        commandHistory.push(new AddCommand(app.sceneController, node, parent));
      }
    }
  });
}

void (async () => {
  // Gallery landing: no scene param, not legacy, not test → render static
  // gallery and stop. The orchestrator (and THREE renderer) never spin up.
  const sceneParam = getSceneParam();
  if (!sceneParam && !isLegacy() && !isTestMode()) {
    mountGallery();
    return;
  }

  await loadXAtlasThree();

  const app = new CornellBoxExample();
  setOrchestrator(app);
  registerBakerClassicUI();
  // registerPTRendererUI(); // disabled 2026-05-19 — see top-of-file note

  // Publish app-side view-layer table to the shell so `<ViewportToggle/>` can
  // render the top-right pass picker without importing app internals.
  viewLayers.value = LAYERS.map((l) => ({ id: l.id, label: l.label, group: l.group }));

  // Generic Post-FX tab (renderer-agnostic; reads the `postFXSettings` signal).
  panelRegistry.register({ id: 'postfx', label: 'Post FX', component: PostFXPage });

  app.externalHooks = {
    onSceneChanged: () => {
      sceneTree.value = app.getSceneTree();
    },
    onStaleChange: () => {
      isStale.value = true;
    },
    onViewportPick: (id) => {
      selectedId.value = id;
    },
    onBakeError: (msg) => {
      showToast('error', `Bake failed: ${msg}`);
    },
    onTransformChange: (obj, before, after) => {
      // Light dummy position is queried at bake time, so its transforms don't
      // dirty the bake — mirror the producer-side rule in SceneController.
      const skipStale = obj === app.sceneController.lightDummy;
      commandHistory.push(
        new TransformCommand(obj, before, after, () => {
          if (!skipStale) isStale.value = true;
        }),
      );
    },
    // Full scene replacement (preset load / GLB import) invalidates every
    // retained Object3D in history — clear the stack and dispose orphans.
    onSceneLoad: () => {
      commandHistory.clear();
    },
  };

  // URL-driven initial scene. Falls back silently to the default Cornell that
  // the orchestrator built in its constructor if the id is unknown.
  if (sceneParam) {
    activeSceneId.value = sceneParam;
    try {
      await app.loadScenePreset(sceneParam);
    } catch (err) {
      console.warn('[baker] failed to load scene from URL:', sceneParam, err);
    }
  }

  sceneTree.value = app.getSceneTree();
  selectedId.value = LIGHT_DUMMY_ID;
  window.addEventListener('resize', () => app.updateSize());

  if (!isLegacy()) {
    const mount = document.createElement('div');
    mount.id = 'app';
    document.body.appendChild(mount);
    render(<App />, mount);
    startStatusSync(app);
    wireSelectionEffects(app);
    wireHotkeys(app);
    wireDragDrop(app);
  }

  if (isTestMode()) {
    (window as unknown as { __baker: CornellBoxExample }).__baker = app;
    document.body.setAttribute('data-baker-ready', '1');
  }
})();
