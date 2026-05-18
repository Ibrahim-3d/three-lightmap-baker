import { signal } from '@preact/signals';

/**
 * Data-driven top-bar menu registry. Agents register items at module load via
 * `menuRegistry.register('File', { id, label, action, when, disabled })`.
 *
 * Reactive: when items mutate the bumped tick reactivates dropdowns.
 * Dynamic disabled/label: use `disabledFn`/`labelFn` — called inside Preact
 * render so signal reads are tracked safely without external effects.
 */

export type MenuId = 'File' | 'Edit' | 'View' | 'Render' | 'Help';

export type MenuItem = {
    id: string;
    label: string;
    action: () => void;
    /** Display predicate. Re-evaluated on every render tick. */
    when?: () => boolean;
    /** Greyed out (still visible). Static version. */
    disabled?: boolean;
    /** Dynamic disabled predicate — called in Preact render, safe to read signals. */
    disabledFn?: () => boolean;
    /** Dynamic label — called in Preact render, safe to read signals. */
    labelFn?: () => string;
    /** Optional separator inserted ABOVE this item. */
    separatorBefore?: boolean;
    /** Hotkey label (display only). */
    hotkey?: string;
};

class MenuRegistry {
    private items: Map<MenuId, MenuItem[]> = new Map();
    register(menu: MenuId, item: MenuItem): void {
        const arr = this.items.get(menu) ?? [];
        // Replace by id if exists.
        const filtered = arr.filter((i) => i.id !== item.id);
        filtered.push(item);
        this.items.set(menu, filtered);
        menuTick.value++;
    }
    items_for(menu: MenuId): ReadonlyArray<MenuItem> {
        return this.items.get(menu) ?? [];
    }
    unregister(menu: MenuId, id: string): void {
        const arr = this.items.get(menu);
        if (!arr) return;
        this.items.set(
            menu,
            arr.filter((i) => i.id !== id),
        );
        menuTick.value++;
    }
}

export const menuRegistry = new MenuRegistry();

/** Bumps when items mutate. UI reads this in render path. */
export const menuTick = signal<number>(0);
