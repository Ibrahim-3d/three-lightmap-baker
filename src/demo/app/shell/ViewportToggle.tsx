import { getOrchestrator } from '../../state/orchestrator';
import { renderMode } from '../../state/signals';

/**
 * Pill-shaped toggle in viewport top-right corner.
 * Two segments: "Fast Preview" (normal Three.js) | "Path Traced" (erichlof PT).
 * pointer-events:auto so clicks register even though the viewport layer is none.
 */
export function ViewportToggle() {
    const mode = renderMode.value;
    const isPT = mode === 'pathtraced';

    const set = (next: string) => {
        renderMode.value = next;
        const orc = getOrchestrator() as unknown as { setRenderMode(m: string): void } | null;
        orc?.setRenderMode(next);
    };

    return (
        <div
            class="pointer-events-auto absolute top-3 right-3 flex items-center rounded-full border border-border bg-bg-1 text-[11px] font-medium select-none overflow-hidden shadow-md"
            style="z-index:10"
        >
            <button
                onClick={() => set('combined')}
                class={[
                    'px-3 py-1 transition-colors',
                    !isPT
                        ? 'bg-accent text-white'
                        : 'text-text-1 hover:text-text-0 hover:bg-bg-2',
                ].join(' ')}
                title="Fast Preview — standard rasterisation (hotkey: P)"
            >
                Fast Preview
            </button>
            <button
                onClick={() => set('pathtraced')}
                class={[
                    'px-3 py-1 transition-colors',
                    isPT
                        ? 'bg-accent text-white'
                        : 'text-text-1 hover:text-text-0 hover:bg-bg-2',
                ].join(' ')}
                title="Path Traced — real-time GI (hotkey: P)"
            >
                Path Traced
            </button>
        </div>
    );
}
