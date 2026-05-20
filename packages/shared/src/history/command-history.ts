import { signal } from '@preact/signals';

/**
 * Generic command-history (undo/redo) for the editor. Producers create a
 * Command object describing a reversible mutation and `commandHistory.push()`
 * it AFTER the effect has been applied externally. The command is responsible
 * for `undo()` (revert) and `redo()` (re-apply).
 *
 * Commands may also implement `dispose()` for resources they retain so they
 * survive across undo cycles (e.g. detached Object3Ds whose dispose is
 * deferred until the command falls off the history). Dispose runs on:
 * - Eviction past MAX_DEPTH on the undo stack
 * - The redo stack being cleared by a new push
 * - `commandHistory.clear()` (scene-level resets)
 */

export interface Command {
  /** Revert the effect. Object state should return to pre-do. */
  undo(): void;
  /** Re-apply the effect after an undo. */
  redo(): void;
  /** Optional: release retained resources when this command is dropped. */
  dispose?(): void;
  /** Human-readable label for menu/status. */
  label?: string;
}

const MAX_DEPTH = 100;

class CommandHistory {
  private undoStack: Command[] = [];
  private redoStack: Command[] = [];

  push(cmd: Command): void {
    this.undoStack.push(cmd);
    if (this.undoStack.length > MAX_DEPTH) {
      const evicted = this.undoStack.shift();
      evicted?.dispose?.();
    }
    if (this.redoStack.length) {
      for (const c of this.redoStack) c.dispose?.();
      this.redoStack = [];
    }
    this.sync();
  }

  undo(): boolean {
    const cmd = this.undoStack.pop();
    if (!cmd) return false;
    try {
      cmd.undo();
    } catch (err) {
      console.error('[history] undo failed', err);
    }
    this.redoStack.push(cmd);
    this.sync();
    return true;
  }

  redo(): boolean {
    const cmd = this.redoStack.pop();
    if (!cmd) return false;
    try {
      cmd.redo();
    } catch (err) {
      console.error('[history] redo failed', err);
    }
    this.undoStack.push(cmd);
    this.sync();
    return true;
  }

  /** Wipe history. Disposes every retained command. Call on scene-replace. */
  clear(): void {
    for (const c of this.undoStack) c.dispose?.();
    for (const c of this.redoStack) c.dispose?.();
    this.undoStack = [];
    this.redoStack = [];
    this.sync();
  }

  private sync(): void {
    canUndo.value = this.undoStack.length > 0;
    canRedo.value = this.redoStack.length > 0;
  }
}

export const commandHistory = new CommandHistory();

/** Reactive flags for menu items / status indicators. */
export const canUndo = signal<boolean>(false);
export const canRedo = signal<boolean>(false);
