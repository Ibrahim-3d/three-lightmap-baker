import './menus/index';
import { GitCompareArrows, Settings } from './icons';
import { MenuButton } from './MenuButton';
import { ScenePicker } from './ScenePicker';
import type { MenuId } from '../../state/menuRegistry';
import { compareMode } from '../../state/signals';

const MENUS: MenuId[] = ['File', 'Edit', 'View', 'Render', 'Help'];

function toggleCompare(): void {
    compareMode.value = !compareMode.value;
}

/**
 * Topbar (T-D9). Logo + 5 data-driven menus + scene picker + Compare toggle +
 * settings cog. Menus register at module load via the side-effect import above.
 */
export function Topbar() {
    const compareOn = compareMode.value;
    return (
        <header class="h-9 bg-bg-1/95 backdrop-blur border-b border-border flex items-center px-2 select-none pointer-events-auto">
            <div class="flex items-center gap-2 px-2 mr-2">
                <span class="text-accent text-base leading-none">⬢</span>
                <span class="font-semibold text-text-0 text-[13px]">Lightmap Studio</span>
            </div>

            <nav class="flex items-center gap-0.5">
                {MENUS.map((m) => (
                    <MenuButton key={m} menuId={m} />
                ))}
            </nav>

            <div class="flex-1" />

            <div class="flex items-center gap-1">
                <ScenePicker />
                <button
                    type="button"
                    aria-pressed={compareOn}
                    data-testid="compare-toggle"
                    class={`p-1.5 rounded ${
                        compareOn
                            ? 'bg-accent/20 text-accent'
                            : 'text-text-1 hover:bg-bg-3 hover:text-text-0'
                    }`}
                    title="Compare with reference"
                    onClick={toggleCompare}
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
