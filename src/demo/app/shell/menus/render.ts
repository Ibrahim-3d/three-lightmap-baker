import { menuRegistry } from '../../../state/menuRegistry';
import { getOrchestrator } from '../../../state/orchestrator';
import { renderMode } from '../../../state/signals';

/**
 * Render menu (T-D9). Delegates to the orchestrator's existing public API.
 */

menuRegistry.register('Render', {
    id: 'render.rebake',
    label: 'Re-bake',
    hotkey: 'B',
    action: () => {
        void getOrchestrator()?.requestBake();
    },
});

menuRegistry.register('Render', {
    id: 'render.rebake-ao',
    label: 'Re-bake AO only',
    action: () => {
        void getOrchestrator()?.requestAORebake();
    },
});

menuRegistry.register('Render', {
    id: 'render.pt-toggle',
    label: 'Path Traced Preview',
    separatorBefore: true,
    hotkey: 'P',
    action: () => {
        const orc = getOrchestrator();
        if (!orc) return;
        const next = renderMode.value === 'pathtraced' ? 'combined' : 'pathtraced';
        renderMode.value = next;
        (orc as unknown as { setRenderMode: (m: string) => void }).setRenderMode(next);
    },
});
