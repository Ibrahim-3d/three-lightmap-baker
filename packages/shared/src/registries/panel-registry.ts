import { signal } from '@preact/signals';
import type { JSX } from 'preact';

/**
 * Data-driven inspector panel registry. Packages register their renderer-
 * specific tabs at app boot:
 *   `panelRegistry.register({ id: 'bake', label: 'Bake', component: BakePage })`
 *
 * Shell `<Inspector/>` interleaves these into the tab strip after the built-in
 * generic tabs (Object / Material / Light / World).
 *
 * Reactive: registrations bump `panelTick` so the UI re-renders.
 */

export type PanelComponent = () => JSX.Element | null;

export type PanelDescriptor = {
  id: string;
  label: string;
  component: PanelComponent;
  /** Display predicate; re-evaluated on every render. Defaults to `() => true`. */
  when?: () => boolean;
};

class PanelRegistry {
  private items: PanelDescriptor[] = [];

  register(item: PanelDescriptor): void {
    const idx = this.items.findIndex((i) => i.id === item.id);
    if (idx >= 0) this.items[idx] = item;
    else this.items.push(item);
    panelTick.value++;
  }

  unregister(id: string): void {
    this.items = this.items.filter((i) => i.id !== id);
    panelTick.value++;
  }

  all(): ReadonlyArray<PanelDescriptor> {
    return this.items;
  }
}

export const panelRegistry = new PanelRegistry();

/** Bumps when items mutate. UI reads this in render path. */
export const panelTick = signal<number>(0);
