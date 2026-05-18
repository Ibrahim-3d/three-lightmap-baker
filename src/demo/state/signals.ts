import { computed, signal } from '@preact/signals';

/**
 * Cross-panel reactive state for the demo. Signal atoms here. Derived state
 * lives next to consumers as `computed(...)` (or below for cross-cutting).
 *
 * The library never reads these. Controllers (SceneController, BakeController)
 * own the truth; this file mirrors what the UI needs to observe.
 */

export type BakeStatus = 'idle' | 'baking' | 'done' | 'error';
export type RenderMode = string; // layer id from modes.ts LAYERS

export type LogLevel = 'info' | 'warn' | 'error';
export type LogEntry = { ts: number; level: LogLevel; msg: string };

export type SceneNodeKind = 'mesh' | 'light';
export type SceneNode = {
    id: string;
    name: string;
    kind: SceneNodeKind;
    visible: boolean;
};

/** Currently selected scene-tree node id, or null when nothing is selected. */
export const selectedId = signal<string | null>(null);

/** Scene tree mirror — rebuilt by SceneController on every scene mutation. */
export const sceneTree = signal<SceneNode[]>([]);

/** Active transform-gizmo mode. */
export const gizmoMode = signal<'translate' | 'rotate' | 'scale'>('translate');

/** Compare ⇄ split-screen toggle (T-D9). Off by default; UI logs flip. */
export const compareMode = signal<boolean>(false);

/** Bumps whenever Inspector field writes touch `orchestrator.options`. Inspector
 *  components read this in their render path so the UI re-renders when an edit
 *  writes back to vanilla TS state. */
export const optionsTick = signal<number>(0);

/** Bumps whenever any THREE object property is mutated by Inspector (transform,
 *  material color, etc.) so visible-state-dependent UI refreshes. */
export const objectTick = signal<number>(0);

/** Bake status finite state. */
export const bakeStatus = signal<BakeStatus>('idle');

/** Live progress while baking. Updated each library `onFrame`. */
export const bakeProgress = signal<{
    pct: number;
    samples: number;
    atlas: number;
    total: number;
    elapsedMs: number;
}>({ pct: 0, samples: 0, atlas: 0, total: 0, elapsedMs: 0 });

/** True after any scene mutation that invalidates the current lightmap. */
export const isStale = signal<boolean>(false);

/** Active render-mode layer id (from modes.ts LAYERS). */
export const renderMode = signal<RenderMode>('combined');

/** Active scene preset id. */
export const activeSceneId = signal<string>('cornell.advanced');

/** Layout state — persisted to localStorage in App. */
export const layout = signal<{ outlinerW: number; inspectorW: number; logOpen: boolean }>({
    outlinerW: 280,
    inspectorW: 320,
    logOpen: false,
});

/** Rolling 200-entry log buffer for the bottom-bar log popover. */
export const logBuffer = signal<LogEntry[]>([]);

/** Inspector tab currently shown. Driven by the selected node's type + user click. */
export const inspectorTab = signal<'object' | 'light' | 'material' | 'lightmap' | 'bake' | 'world'>(
    'object',
);

/** Path Tracer settings — shared with baker sky/env for unified control. */
export type PTSettings = {
    skyIntensity: number;  // 0=dark sky, 3=bright sky (feeds both baker GI fill and PT environment)
    lightScale:   number;  // global multiplier for all scene lights (default 0.15 — normalises arbitrary THREE.js intensities)
    aperture:     number;  // 0=pinhole, >0=DOF blur amount
    focusDist:    number;  // DOF focal plane distance in world units
};
export const ptSettings = signal<PTSettings>({
    skyIntensity: 1.0,
    lightScale:   0.15,   // 0.15 works well for most scenes; tune per scene in World tab
    aperture:     0.0,
    focusDist:    100.0,
});

/** Convenience: are we mid-bake? */
export const isBaking = computed(() => bakeStatus.value === 'baking');

/** Append a log entry (ring-buffered to 200 entries). */
export function log(level: LogLevel, msg: string): void {
    const next = logBuffer.value.concat({ ts: Date.now(), level, msg });
    logBuffer.value = next.length > 200 ? next.slice(next.length - 200) : next;
}
