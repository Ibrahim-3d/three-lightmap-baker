import { menuRegistry } from '../../../state/menuRegistry';
import { getOrchestrator } from '../../../state/orchestrator';

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
