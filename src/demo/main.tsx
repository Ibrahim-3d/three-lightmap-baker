import './scenes/presets';
import { effect } from '@preact/signals';
import { render } from 'preact';
import { loadXAtlasThree } from '../lib';
import type { AssetSpec } from './assets/primitives';
import { App } from './app/App';
import { showToast } from './app/shell/Toast';
import './app/theme.css';
import { CornellBoxExample } from './CornellBoxExample';
import { LIGHT_DUMMY_ID } from './three/SceneController';
import { setOrchestrator } from './state/orchestrator';
import { history } from './state/history';
import {
    activeSceneId,
    bakeProgress,
    bakeStatus,
    gizmoMode,
    inspectorTab,
    isStale,
    objectTick,
    sceneTree,
    selectedId,
} from './state/signals';

// ── URL param helpers ─────────────────────────────────────────────────────────

function getSceneParam(): string | null {
    return new URLSearchParams(window.location.search).get('scene');
}

function isLegacy(): boolean {
    return new URLSearchParams(window.location.search).get('legacy') === '1';
}

function isTestMode(): boolean {
    return new URLSearchParams(window.location.search).get('test') === '1';
}

// ── Status / signals helpers ──────────────────────────────────────────────────

function startStatusSync(app: CornellBoxExample): void {
    setInterval(() => {
        const status = app.getBakeStatus();
        if (bakeStatus.value !== status) bakeStatus.value = status;

        const opts = (app as unknown as {
            options: { samples: number; targetSamples: number; etaSec: number };
        }).options;
        const total = opts.targetSamples;
        const pct = total > 0 ? Math.min(100, (opts.samples / total) * 100) : 0;
        bakeProgress.value = {
            pct,
            samples: opts.samples,
            atlas: app.getBakeGroupCount(),
            total,
            elapsedMs: 0,
        };
    }, 250);
}

function wireSelectionEffects(app: CornellBoxExample): void {
    effect(() => { app.setSelection(selectedId.value); });
    effect(() => { app.setGizmoMode(gizmoMode.value); });
    // Auto-switch inspector tab: light-dummy → Light tab, anything else → Object.
    effect(() => {
        const id = selectedId.value;
        if (!id) return;
        inspectorTab.value = id === LIGHT_DUMMY_ID ? 'light' : 'object';
    });
}

function wireHotkeys(app: CornellBoxExample): void {
    window.addEventListener('keydown', (e) => {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

        // Undo / Redo
        if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
            e.preventDefault();
            history.undo();
            return;
        }
        if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
            e.preventDefault();
            history.redo();
            return;
        }

        // Gizmo modes
        if (e.key === 'w' || e.key === 'W') gizmoMode.value = 'translate';
        else if (e.key === 'e' || e.key === 'E') gizmoMode.value = 'rotate';
        else if (e.key === 'r' || e.key === 'R') gizmoMode.value = 'scale';
        // Frame selected (Blender convention)
        else if (e.key === 'f' || e.key === 'F') {
            const id = selectedId.value;
            if (id) app.frameSelected(id);
        }
        else if (e.key === 'Escape') selectedId.value = null;
        else if (e.key === 'Delete' || e.key === 'Backspace') {
            const id = selectedId.value;
            if (!id || id === LIGHT_DUMMY_ID) return;
            const extracted = app.extractNode(id);
            if (!extracted) return;
            const { node, kind } = extracted;
            const nodeName = node.name || id;
            selectedId.value = null;
            history.push({
                label: `Delete "${nodeName}"`,
                undo: () => {
                    app.reinsertNode(node, kind);
                    selectedId.value = node.uuid;
                },
                do: () => {
                    app.extractNode(node.uuid);
                    if (selectedId.value === node.uuid) selectedId.value = null;
                },
            });
        }
        else if (e.key === 'b' || e.key === 'B') {
            if (isStale.value && bakeStatus.value !== 'baking') void app.requestBake();
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
        if (!uuid) return;
        selectedId.value = uuid;
        // Undo add: extract (soft remove). Redo add: re-create at same position.
        let currentUUID = uuid;
        history.push({
            label: `Add ${spec.id}`,
            undo: () => {
                app.extractNode(currentUUID);
                if (selectedId.value === currentUUID) selectedId.value = null;
            },
            do: () => {
                currentUUID = app.addAsset(spec, worldPos);
                if (currentUUID) selectedId.value = currentUUID;
            },
        });
    });
}

/** Wire transform-change events from the gizmo into the undo history. */
function wireTransformHistory(app: CornellBoxExample): void {
    app.externalHooks.onTransformChange = (obj, before, after) => {
        const moved =
            !obj.position.equals(before.pos) ||
            obj.rotation.x !== before.rot.x ||
            obj.rotation.y !== before.rot.y ||
            obj.rotation.z !== before.rot.z ||
            !obj.scale.equals(before.scale);
        if (!moved) return;

        history.push({
            label: `Move "${obj.name || 'object'}"`,
            do: () => {
                obj.position.copy(after.pos);
                obj.rotation.copy(after.rot);
                obj.scale.copy(after.scale);
                objectTick.value++;
            },
            undo: () => {
                obj.position.copy(before.pos);
                obj.rotation.copy(before.rot);
                obj.scale.copy(before.scale);
                objectTick.value++;
            },
        });
    };
}

// ── Boot ──────────────────────────────────────────────────────────────────────

void (async () => {
    const sceneParam = getSceneParam();

    // ── Gallery mode — no ?scene= param ───────────────────────────────────────
    if (!sceneParam && !isTestMode()) {
        const { GalleryPage } = await import('./gallery/GalleryPage');
        const mount = document.createElement('div');
        mount.id = 'app';
        document.body.style.cssText = 'margin:0;padding:0;background:#0a0a0f';
        document.body.appendChild(mount);
        render(<GalleryPage />, mount);
        return;
    }

    // ── Editor mode — ?scene= param present (or test mode) ────────────────────
    await loadXAtlasThree();

    const app = new CornellBoxExample();
    setOrchestrator(app);

    app.externalHooks = {
        // onSceneChanged fires on every mutation (add/remove/rebuild) — just refresh tree.
        onSceneChanged: () => { sceneTree.value = app.getSceneTree(); },
        // onSceneLoad fires only on full scene replacement — clear undo history.
        onSceneLoad:    () => { history.clear(); },
        onStaleChange:  () => { isStale.value = true; },
        onViewportPick: (id) => { selectedId.value = id; },
        onBakeError:    (msg) => { showToast('error', `Bake failed: ${msg}`); },
    };

    // Wire gizmo drag → history AFTER externalHooks object is set.
    wireTransformHistory(app);

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

    // Auto-load the scene from the URL param — replaces the default Cornell Box.
    if (sceneParam) {
        activeSceneId.value = sceneParam;
        try {
            await app.loadScenePreset(sceneParam);
        } catch (err) {
            console.error('[baker] failed to load scene from URL:', sceneParam, err);
            showToast('error', `Could not load scene "${sceneParam}"`);
        }
    }

    if (isTestMode()) {
        (window as unknown as { __baker: CornellBoxExample }).__baker = app;
        document.body.setAttribute('data-baker-ready', '1');
    }
})();
