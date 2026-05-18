import { ChevronUp, Info, Play, Square } from './icons';
import { computed } from '@preact/signals';
import {
    bakeProgress,
    bakeStatus,
    isStale,
    layout,
    logBuffer,
} from '../../state/signals';
import { getOrchestrator } from '../../state/orchestrator';

const isBakingC = computed(() => bakeStatus.value === 'baking');

function onBakeClick() {
    const app = getOrchestrator();
    if (!app) return;
    void app.requestBake();
}

function toggleLog() {
    layout.value = { ...layout.value, logOpen: !layout.value.logOpen };
}

/**
 * Bottom status bar: Bake button + progress + bake metrics + log popover toggle.
 * T-D9 will swap the placeholder render-mode pill for an overlay dropdown
 * inside the viewport itself.
 */
export function StatusBar() {
    const p = bakeProgress.value;
    const baking = isBakingC.value;
    const stale = isStale.value;

    return (
        <footer class="h-10 bg-bg-1 border-t border-border flex items-center gap-3 px-3 text-[12px] pointer-events-auto relative">
            <button
                type="button"
                class={`flex items-center gap-1.5 px-3 py-1.5 rounded font-medium text-[12px] ${
                    baking
                        ? 'bg-stale/20 text-stale border border-stale/40 cursor-wait'
                        : stale
                          ? 'bg-stale text-bg-0 hover:bg-stale/90 animate-pulse'
                          : 'bg-accent text-bg-0 hover:bg-accent/90'
                }`}
                onClick={onBakeClick}
                disabled={baking}
            >
                {baking ? <Square size={12} /> : <Play size={12} fill="currentColor" />}
                <span>{baking ? 'Baking…' : stale ? 'Re-bake' : 'Bake'}</span>
            </button>

            <div class="flex-1 max-w-md">
                <div class="h-1.5 bg-bg-3 rounded-full overflow-hidden">
                    <div
                        class="h-full bg-accent transition-[width] duration-150"
                        style={{ width: `${p.pct}%` }}
                    />
                </div>
            </div>

            <div class="flex items-center gap-3 text-text-1 font-mono text-[11px]">
                <span>
                    {p.samples}/{p.total} frames
                </span>
                {p.atlas > 0 && (
                    <span>
                        Atlases: {p.atlas}
                    </span>
                )}
                <span>{(p.elapsedMs / 1000).toFixed(1)}s</span>
            </div>

            <button
                type="button"
                class="ml-auto flex items-center gap-1 p-1.5 text-text-1 hover:bg-bg-3 hover:text-text-0 rounded"
                onClick={toggleLog}
                title="Logs"
            >
                <Info size={14} />
                <span class="text-[11px]">{logBuffer.value.length}</span>
                <ChevronUp
                    size={12}
                    class={`transition-transform ${layout.value.logOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {layout.value.logOpen && <LogPopover />}
        </footer>
    );
}

function LogPopover() {
    const entries = logBuffer.value.slice().reverse();
    return (
        <div class="absolute bottom-full right-2 mb-1 w-[420px] max-h-72 overflow-auto bg-bg-1 border border-border rounded shadow-xl font-mono text-[11px] z-50">
            {entries.length === 0 ? (
                <div class="p-3 text-text-2 italic">No log entries yet.</div>
            ) : (
                <ul>
                    {entries.map((e) => (
                        <li
                            key={e.ts}
                            class={`px-2 py-1 border-b border-border/40 last:border-b-0 ${
                                e.level === 'error'
                                    ? 'text-red-400'
                                    : e.level === 'warn'
                                      ? 'text-stale'
                                      : 'text-text-1'
                            }`}
                        >
                            <span class="text-text-2 mr-2">
                                {new Date(e.ts).toLocaleTimeString()}
                            </span>
                            {e.msg}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
