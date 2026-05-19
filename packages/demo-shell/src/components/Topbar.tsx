import '../menus/index';
import { compareMode, type MenuId } from 'shared';
import { GitCompareArrows, Settings } from './icons';
import { MenuButton } from './MenuButton';

const MENUS: MenuId[] = ['File', 'Edit', 'View', 'Render', 'Help'];

function toggleCompare(): void {
  compareMode.value = !compareMode.value;
}

/**
 * Topbar. Logo + data-driven menus + Compare toggle + settings.
 * Wrapper gets `relative z-50` so MenuButton popovers paint above the middle
 * row's relative stacking context (Outliner / Inspector / StaleBanner).
 * ScenePicker moved to gallery landing page (no longer in Topbar).
 */
export function Topbar() {
  const compareOn = compareMode.value;
  return (
    <header class="relative z-50 h-9 bg-bg-1/95 backdrop-blur border-b border-border flex items-center px-2 select-none pointer-events-auto">
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
        <button
          type="button"
          aria-pressed={compareOn}
          data-testid="compare-toggle"
          class={`p-1.5 rounded ${
            compareOn ? 'bg-accent/20 text-accent' : 'text-text-1 hover:bg-bg-3 hover:text-text-0'
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
