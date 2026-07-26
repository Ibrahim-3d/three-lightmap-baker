import 'demo-shell/theme.css';
import './scenes/presets';
import { effect } from '@preact/signals';
import { render } from 'preact';
import { loadXAtlasThree } from 'baker-classic';
import { registerBakerClassicUI } from 'baker-classic/ui';
// PT renderer UI hidden 2026-05-19 while focus is on baker polish.
// Code stays in tree (packages/pt-renderer/) - flip back on by uncommenting:
//   import { registerPTRendererUI } from 'pt-renderer/ui';
//   registerPTRendererUI();
import { App, GalleryPage, PostFXPage, showToast } from 'demo-shell';
import {
  activeSceneId,
  bakeProgress,
  bakeStatus,
  cameraFOV,
  commandHistory,
  flyActive,
  gizmoMode,
  inspectorTab,
  isStale,
  optionsTick,
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
import { LAYERS } from './three/modes';
import { AddCommand, RemoveCommand, TransformCommand } from './three/commands';
import { installProbeIntegration } from './three/installProbeIntegration';

/**
 * Playground entry. With no `?scene=` param renders the gallery landing.
 * With `?scene=<id>` boots the full editor and loads the chosen preset.
 *
 * `?legacy=1` skips Preact + bypasses gallery - escape hatch.
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

/** 4Hz poll bridging vanilla bake state into reactive signals. */
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
    void optionsTick.value;
    app.setLayer(renderMode.peek());
  });
  effect(() => {
    app.sceneController.gridHelper.visible = showGrid.value;
  });
  effect(() => {
    app.sceneController.axesHelper.visible = showAxes.value;
  });
  effect(() => {
    app.sceneController.setCameraFov(cameraFOV.value);
  });
  effect(() => {
    const id = selectedId.value;
    if (!id) return;
    const obj = app.lookupObject(id);
    const t = inspectorTab.peek();
    if (obj?.userData?.bakerLightType) {
      if (t !== 'light') inspectorTab.value = 'light';
    } else if (obj) {
      if (t !== 'material' && t !== 'lightmap' && t !== 'object') {
        inspectorTab.value = 'object';
      }
    }
  });
}

function orderedSceneNodeIds(): string[] {
  const tree = sceneTree.value;
  return tree
    .filter((n) => n.kind === 'light')
    .concat(tree.filter((n) => n.kind === 'mesh'))
    .map((n) => n.id);
}

function selectSceneNodeRelative(delta: -1 | 1): void {
  const ids = orderedSceneNodeIds();
  if (!ids.length) return;

  const current = selectedId.value;
  const index = current ? ids.indexOf(current) : -1;
  const nextIndex =
    index === -1 ? (delta > 0 ? 0 : ids.length - 1) : (index + delta + ids.length) % ids.length;
  const next = ids[nextIndex];
  if (next) selectedId.value = next;
}

function wireHotkeys(app: CornellBoxExample): void {
  window.addEventListener('keydown', (e) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
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
    if (
      flyActive.value &&
      (k === 'w' || k === 'a' || k === 's' || k === 'd' || k === 'q' || k === 'e')
    ) {
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectSceneNodeRelative(1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectSceneNodeRelative(-1);
    } else if (k === 'w') gizmoMode.value = 'translate';
    else if (k === 'e') gizmoMode.value = 'rotate';
    else if (k === 'r') gizmoMode.value = 'scale';
    else if (e.key === 'Escape') selectedId.value = null;
    else if (e.key === 'Delete' || e.key === 'Backspace') {
      const id = selectedId.value;
      if (!id) return;
      const detached = app.sceneController.detachNode(id);
      if (detached) {
        commandHistory.push(new RemoveCommand(app.sceneController, detached.node, detached.parent));
      }
      selectedId.value = null;
    } else if (k === 'b') {
      if (isStale.value && bakeStatus.value !== 'baking') void app.requestBake();
    } else if (k === 'f') {
      const id = selectedId.value;
      const obj = id ? app.sceneController.lookupObject(id) : null;
      if (obj) app.sceneController.frameObject(obj);
    } else if (k === 'g') {
      showGrid.value = !showGrid.value;
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
  const sceneParam = getSceneParam();
  if (!sceneParam && !isLegacy() && !isTestMode()) {
    mountGallery();
    return;
  }

  await loadXAtlasThree();

  const app = new CornellBoxExample();
  setOrchestrator(app);
  registerBakerClassicUI();

  viewLayers.value = LAYERS.map((l) => ({ id: l.id, label: l.label, group: l.group }));
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
      const skipStale = obj === app.sceneController.lightDummy;
      commandHistory.push(
        new TransformCommand(obj, before, after, () => {
          if (!skipStale) isStale.value = true;
        }),
      );
    },
    onSceneLoad: () => {
      commandHistory.clear();
    },
  };

  installProbeIntegration(app);

  if (sceneParam) {
    activeSceneId.value = sceneParam;
    try {
      await app.loadScenePreset(sceneParam);
    } catch (err) {
      console.warn('[baker] failed to load scene from URL:', sceneParam, err);
    }
  }

  sceneTree.value = app.getSceneTree();
  const initialLight = app.sceneController.scene.children.find(
    (c) => c.userData?.bakerLightType && c.visible,
  );
  selectedId.value = initialLight?.uuid ?? null;
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
