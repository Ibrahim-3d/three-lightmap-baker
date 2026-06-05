import { effect, untracked } from '@preact/signals';
import { canRedo, canUndo, commandHistory, menuRegistry } from 'shared';

/**
 * Edit menu. Undo / Redo wired to the shared `commandHistory`. Producers
 * (transform, add, remove) push commands; this menu just invokes the stack.
 * Disabled state is reactive - re-registers the items when `canUndo`/`canRedo`
 * flip so the dropdown reflects the current stack.
 */

function registerUndo(): void {
  menuRegistry.register('Edit', {
    id: 'edit.undo',
    label: 'Undo',
    hotkey: 'Ctrl+Z',
    disabled: !canUndo.value,
    action: () => {
      commandHistory.undo();
    },
  });
}

function registerRedo(): void {
  menuRegistry.register('Edit', {
    id: 'edit.redo',
    label: 'Redo',
    hotkey: 'Ctrl+Shift+Z',
    disabled: !canRedo.value,
    action: () => {
      commandHistory.redo();
    },
  });
}

effect(() => {
  // Read the signal so the effect re-runs on change, then re-register.
  // `untracked` so the menuTick read+write inside `menuRegistry.register`
  // doesn't pull menuTick into this effect's deps (would self-trigger → cycle).
  void canUndo.value;
  untracked(registerUndo);
});

effect(() => {
  void canRedo.value;
  untracked(registerRedo);
});

menuRegistry.register('Edit', {
  id: 'edit.prefs',
  label: 'Preferences',
  separatorBefore: true,
  action: () => {
    console.log('[demo] Edit → Preferences (stub)');
  },
});
