import { signal } from '@preact/signals';

/**
 * Generic shell UI signals. Renderer-agnostic — both `demo-shell/` and any
 * renderer-specific UI in a package's `ui/` folder read/write these.
 *
 * Bake-specific signals live in `./bake.ts`.
 */

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

/** Scene tree mirror — rebuilt by the orchestrator on every scene mutation. */
export const sceneTree = signal<SceneNode[]>([]);

/** Active transform-gizmo mode. */
export const gizmoMode = signal<'translate' | 'rotate' | 'scale'>('translate');

/** Bumps whenever Inspector field writes touch `orchestrator.options`. Inspector
 *  components read this in their render path so the UI re-renders when an edit
 *  writes back to vanilla TS state. */
export const optionsTick = signal<number>(0);

/** Bumps whenever any THREE object property is mutated by Inspector (transform,
 *  material color, etc.) so visible-state-dependent UI refreshes. */
export const objectTick = signal<number>(0);

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
export const inspectorTab = signal<string>('object');

/**
 * Viewport view-layer descriptor. App populates `viewLayers` at boot from its
 * own LAYERS table; the shell's `ViewportToggle` reads the signal to render
 * the Blender-style top-right layer dropdown. Keeps the shell renderer-agnostic.
 */
export type ViewLayerDescriptor = {
  id: string;
  label: string;
  group: 'output' | 'debug';
};

export const viewLayers = signal<ReadonlyArray<ViewLayerDescriptor>>([]);

/**
 * Multi-atlas viewer overlay visibility. Driven by View → Toggle Atlas Viewer.
 * Renderer reads this each RAF to decide whether to call AtlasViewer.render().
 */
export const atlasViewerVisible = signal<boolean>(false);

/** Append a log entry (ring-buffered to 200 entries). */
export function log(level: LogLevel, msg: string): void {
  const next = logBuffer.value.concat({ ts: Date.now(), level, msg });
  logBuffer.value = next.length > 200 ? next.slice(next.length - 200) : next;
}
