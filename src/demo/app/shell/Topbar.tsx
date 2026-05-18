import './menus/index';
import { GitCompareArrows, Maximize2, Move, RefreshCw, Settings } from './icons';
import { MenuButton } from './MenuButton';
import { ScenePicker } from './ScenePicker';
import type { MenuId } from '../../state/menuRegistry';
import { compareMode, gizmoMode } from '../../state/signals';

const MENUS: MenuId[] = ['File', 'Edit', 'View', 'Render', 'Help'];

function toggleCompare(): void {
    compareMode.value = !compareMode.value;
}

type GizmoMode = 'translate' | 'rotate' | 'scale';

const GIZMO_BUTTONS: { mode: GizmoMode; icon: typeof Move; title: string; key: string }[] = [
    { mode: 'translate', icon: Move,       title: 'Translate (W)', key: 'W' },
    { mode: 'rotate',    icon: RefreshCw,  title: 'Rotate (E)',    key: 'E' },
    { mode: 'scale',     icon: Maximize2,  title: 'Scale (R)',     key: 'R' },
];

/**
 * Topbar (T-D9 + polish). Gizmo-mode buttons (W/E/R) sit between the menu nav
 * and the right-side controls. Active mode is highlighted with accent colour.
 *
 * `relative z-[60]` creates its own stacking context so the ScenePicker dropdown
 * paints above the Inspector panel.
 */
export function Topbar() {
    const compareOn = compareMode.value;
    const activeMode = gizmoMode.value;

    return (
        <header class="relative z-[60] h-9 bg-bg-1/95 backdrop-blur border-b border-border flex items-center px-2 select-none pointer-events-auto">
            <div class="flex items-center gap-2 px-2 mr-2">
                <span class="text-accent text-base leading-none">⬢</span>
                <span class="font-semibold text-text-0 text-[13px]">Lightmap Studio</span>
            </div>

            <nav class="flex items-center gap-0.5">
                {MENUS.map((m) => (
                    <MenuButton key={m} menuId={m} />
                ))}
            </nav>

            {/* Gizmo mode toggle — W / E / R hotkeys */}
            <div class="flex items-center gap-0.5 ml-3 border-l border-border pl-3">
                {GIZMO_BUTTONS.map(({ mode, icon: Icon, title, key }) => (
                    <button
                        key={mode}
                        type="button"
                        title={title}
                        onClick={() => { gizmoMode.value = mode; }}
                        class={`flex items-center gap-1 px-1.5 py-1 rounded text-[11px] font-medium leading-none ${
                            activeMode === mode
                                ? 'bg-accent/20 text-accent'
                                : 'text-text-1 hover:bg-bg-3 hover:text-text-0'
                        }`}
                    >
                        <Icon size={12} />
                        <span>{key}</span>
                    </button>
                ))}
            </div>

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
                    title="Settings"
                    disabled
                >
                    <Settings size={14} />
                </button>
            </div>
        </header>
    );
}
