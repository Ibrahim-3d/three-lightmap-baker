import { effect } from '@preact/signals';
import { render } from 'preact';
import { loadXAtlasThree } from '../lib';
import { App } from './app/App';
import './app/theme.css';
import { CornellBoxExample } from './CornellBoxExample';
import { LIGHT_DUMMY_ID } from './three/SceneController';
import { setOrchestrator } from './state/orchestrator';
import {
    bakeProgress,
    bakeStatus,
    gizmoMode,
    isStale,
    sceneTree,
    selectedId,
} from './state/signals';

/**
 * Demo entry point during the T-D1 → T-D12 migration.
 *
 * Default (`?legacy` absent or `?legacy=0`): bring up `CornellBoxExample`
 *   (existing tweakpane UI) AND mount the Preact `<App/>` shell on top.
 * `?legacy=1`: skip Preact entirely — escape hatch.
 * `?test=1`: expose `window.__baker` for Playwright + use preserveDrawingBuffer.
 */
function isLegacy(): boolean {
    return new URLSearchParams(window.location.search).get('legacy') === '1';
}

function isTestMode(): boolean {
    return new URLSearchParams(window.location.search).get('test') === '1';
}

/**
 * 4Hz poll bridging vanilla bake state into reactive signals. Replaced by
 * signal-emitting controllers in a later phase if polling shows up in perf.
 */
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

/** Wire signals → orchestrator side-effects (gizmo attach, gizmo mode). */
function wireSelectionEffects(app: CornellBoxExample): void {
    effect(() => {
        app.setSelection(selectedId.value);
    });
    effect(() => {
        app.setGizmoMode(gizmoMode.value);
    });
}

/** W/E/R = translate/rotate/scale. Escape = deselect. */
function wireHotkeys(): void {
    window.addEventListener('keydown', (e) => {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
        if (e.key === 'w' || e.key === 'W') gizmoMode.value = 'translate';
        else if (e.key === 'e' || e.key === 'E') gizmoMode.value = 'rotate';
        else if (e.key === 'r' || e.key === 'R') gizmoMode.value = 'scale';
        else if (e.key === 'Escape') selectedId.value = null;
    });
}

void (async () => {
    await loadXAtlasThree();

    const app = new CornellBoxExample();
    setOrchestrator(app);

    // Hooks that flow vanilla controller events back into reactive signals.
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
    };
    // Initial tree population (constructor already built the scene). Pre-select
    // the scene light so the gizmo keeps its T-D3 default attachment.
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
        wireHotkeys();
    }

    if (isTestMode()) {
        (window as unknown as { __baker: CornellBoxExample }).__baker = app;
        document.body.setAttribute('data-baker-ready', '1');
    }
})();
