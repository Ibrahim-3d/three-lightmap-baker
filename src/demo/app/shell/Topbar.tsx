import { ChevronDown, GitCompareArrows, Settings } from './icons';
import { activeSceneId } from '../../state/signals';

const MENUS = ['File', 'Edit', 'View', 'Render', 'Help'];

const SCENES = [
    { id: 'cornell.advanced', label: 'Cornell Advanced' },
    { id: 'cornell.classic', label: 'Cornell Classic' },
];

/**
 * Topbar. Logo + 5 menu buttons (placeholder, no popups yet — T-D9 wires
 * `menuRegistry`) + right-side scene picker + Compare toggle + settings cog.
 * Background uses backdrop-blur over the canvas for the glass effect.
 */
export function Topbar() {
    const activeScene = SCENES.find((s) => s.id === activeSceneId.value) ?? SCENES[0]!;
    return (
        <header class="h-9 bg-bg-1/95 backdrop-blur border-b border-border flex items-center px-2 select-none pointer-events-auto">
            <div class="flex items-center gap-2 px-2 mr-2">
                <span class="text-accent text-base leading-none">⬢</span>
                <span class="font-semibold text-text-0 text-[13px]">Lightmap Studio</span>
            </div>

            <nav class="flex items-center gap-0.5">
                {MENUS.map((m) => (
                    <button
                        type="button"
                        class="px-2.5 py-1 text-[12px] text-text-1 hover:bg-bg-3 hover:text-text-0 rounded"
                        disabled
                        title="Wired in T-D9"
                    >
                        {m}
                    </button>
                ))}
            </nav>

            <div class="flex-1" />

            <div class="flex items-center gap-1">
                <button
                    type="button"
                    class="flex items-center gap-1.5 px-2.5 py-1 text-[12px] text-text-0 bg-bg-2 hover:bg-bg-3 rounded border border-border"
                >
                    <span>{activeScene.label}</span>
                    <ChevronDown size={12} class="text-text-2" />
                </button>
                <button
                    type="button"
                    class="p-1.5 text-text-1 hover:bg-bg-3 hover:text-text-0 rounded"
                    title="Compare with reference (T-D9)"
                    disabled
                >
                    <GitCompareArrows size={14} />
                </button>
                <button
                    type="button"
                    class="p-1.5 text-text-1 hover:bg-bg-3 hover:text-text-0 rounded"
                    title="Settings (T-D9)"
                    disabled
                >
                    <Settings size={14} />
                </button>
            </div>
        </header>
    );
}
