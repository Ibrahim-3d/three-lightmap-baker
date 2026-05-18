import { history } from '../../../state/history';
import { menuRegistry } from '../../../state/menuRegistry';

/**
 * Edit menu. Undo/Redo use `disabledFn` and `labelFn` — these are called
 * inside Preact's Row render, so signal reads are tracked safely without
 * any external effect() (which would cause a cycle via menuTick writes).
 */

menuRegistry.register('Edit', {
    id: 'edit.undo',
    label: 'Undo',
    hotkey: 'Ctrl+Z',
    labelFn: () => {
        history.tick.value; // subscribe — re-renders Row when history changes
        return history.undoLabel ? `Undo "${history.undoLabel}"` : 'Undo';
    },
    disabledFn: () => {
        history.tick.value;
        return !history.canUndo;
    },
    action: () => history.undo(),
});

menuRegistry.register('Edit', {
    id: 'edit.redo',
    label: 'Redo',
    hotkey: 'Ctrl+Shift+Z',
    labelFn: () => {
        history.tick.value;
        return history.redoLabel ? `Redo "${history.redoLabel}"` : 'Redo';
    },
    disabledFn: () => {
        history.tick.value;
        return !history.canRedo;
    },
    action: () => history.redo(),
});

menuRegistry.register('Edit', {
    id: 'edit.prefs',
    label: 'Preferences',
    separatorBefore: true,
    action: () => {
        console.log('[demo] Edit → Preferences (stub)');
    },
});
