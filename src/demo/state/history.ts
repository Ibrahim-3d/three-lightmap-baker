import { signal } from '@preact/signals';

/**
 * Lightweight undo/redo command stack (max 50 steps).
 * Each command is a label + do/undo pair. Consumers push commands after
 * mutations; the stack is cleared when a new scene loads.
 *
 * `tick` is a Preact signal so menu items / status bar can subscribe and
 * react to canUndo / canRedo state changes.
 */

export type Command = {
    label: string;
    do: () => void;
    undo: () => void;
};

const MAX = 50;

class History {
    private stack: Command[] = [];
    private cursor = -1;
    /** Bumps on every push/undo/redo/clear so subscribers react. */
    readonly tick = signal(0);

    push(cmd: Command): void {
        // Drop the redo branch when a new action is taken.
        if (this.cursor < this.stack.length - 1) {
            this.stack = this.stack.slice(0, this.cursor + 1);
        }
        this.stack.push(cmd);
        if (this.stack.length > MAX) this.stack.shift();
        else this.cursor++;
        this.tick.value++;
    }

    undo(): void {
        if (this.cursor < 0) return;
        this.stack[this.cursor]!.undo();
        this.cursor--;
        this.tick.value++;
    }

    redo(): void {
        if (this.cursor >= this.stack.length - 1) return;
        this.cursor++;
        this.stack[this.cursor]!.do();
        this.tick.value++;
    }

    get canUndo(): boolean { return this.cursor >= 0; }
    get canRedo(): boolean { return this.cursor < this.stack.length - 1; }
    get undoLabel(): string | null { return this.stack[this.cursor]?.label ?? null; }
    get redoLabel(): string | null { return this.stack[this.cursor + 1]?.label ?? null; }

    /** Call on scene load so stale commands don't reference deleted objects. */
    clear(): void {
        this.stack = [];
        this.cursor = -1;
        this.tick.value++;
    }
}

export const history = new History();
