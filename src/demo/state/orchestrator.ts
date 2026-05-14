import type { CornellBoxExample } from '../CornellBoxExample';

/**
 * Module-level reference to the active orchestrator. Set by `main.tsx` after
 * `new CornellBoxExample()`. UI components grab it via `getOrchestrator()`.
 *
 * This is a deliberate, narrow coupling: the Preact tree is read-only over a
 * vanilla TS world. The orchestrator never imports from `state/` (avoids
 * cycle), but the UI imports both. Replaced with a Context provider in T-D12
 * once the legacy path is removed.
 */
let instance: CornellBoxExample | null = null;

export function setOrchestrator(o: CornellBoxExample): void {
    instance = o;
}

export function getOrchestrator(): CornellBoxExample | null {
    return instance;
}
