import { menuRegistry } from '../../../state/menuRegistry';

/**
 * Edit menu (T-D9). Undo/Redo ship disabled until a command-history is wired
 * (post T-D12 per design doc §5.4). Preferences is a stub.
 */

menuRegistry.register('Edit', {
    id: 'edit.undo',
    label: 'Undo',
    hotkey: 'Ctrl+Z',
    disabled: true,
    action: () => {
        /* disabled */
    },
});

menuRegistry.register('Edit', {
    id: 'edit.redo',
    label: 'Redo',
    hotkey: 'Ctrl+Shift+Z',
    disabled: true,
    action: () => {
        /* disabled */
    },
});

menuRegistry.register('Edit', {
    id: 'edit.prefs',
    label: 'Preferences',
    separatorBefore: true,
    action: () => {
        console.log('[demo] Edit → Preferences (stub)');
    },
});
