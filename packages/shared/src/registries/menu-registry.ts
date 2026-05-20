import { signal } from '@preact/signals';

/**
 * Data-driven top-bar menu registry. Agents register items at module load via
 * `menuRegistry.register('File', { id, label, action, when, disabled })`.
 *
 * Reactive: when items mutate the bumped tick reactivates dropdowns.
 */

export type MenuId = 'File' | 'Edit' | 'View' | 'Render' | 'Help';

export type MenuItem = {
  id: string;
  label: string;
  action: () => void;
  /** Display predicate. Re-evaluated on every render tick. */
  when?: () => boolean;
  /** Greyed out (still visible). */
  disabled?: boolean;
  /** Optional separator inserted ABOVE this item. */
  separatorBefore?: boolean;
  /** Hotkey label (display only). */
  hotkey?: string;
  /** Checked-state predicate. When set, the item renders with a leading ✓
   *  when truthy — standard for boolean toggles (Show Grid, Show Axes, …). */
  checked?: () => boolean;
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
