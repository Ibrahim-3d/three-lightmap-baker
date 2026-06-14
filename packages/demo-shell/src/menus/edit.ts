import { effect, untracked } from '@preact/signals';
import { canRedo, canUndo, commandHistory, menuRegistry } from 'shared';

/**
 * Edit menu. Undo / Redo are wired to the shared command history. Producers
 * push add, remove, and transform commands; this menu just invokes the stack.
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
  void canUndo.value;
  untracked(registerUndo);
});

effect(() => {
  void canRedo.value;
  untracked(registerRedo);
});
