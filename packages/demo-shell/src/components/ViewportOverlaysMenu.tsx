import { useEffect, useRef, useState } from 'preact/hooks';
import type { Signal } from '@preact/signals';
import { showAxes, showGrid } from 'shared';
import { ChevronDown } from './icons';

/**
 * Top-right viewport overlay - Blender/Unreal-style "Overlays" toggle list.
 * Renders a single pill button that opens a popover with one row per boolean
 * signal (grid, axes). Each row is a click-target with a
 * leading checkbox; clicking flips the underlying signal.
 *
 * Lives in the same horizontal row as `ViewportToggle` and the camera-speed
 * dropdown - the row container handles positioning, this component is
 * pure inline + relatively-anchored popover.
 */
type Entry = {
  id: string;
  label: string;
  signal: Signal<boolean>;
  hotkey?: string;
};

const ENTRIES: Entry[] = [
  { id: 'grid', label: 'Ground Grid', signal: showGrid, hotkey: 'G' },
  { id: 'axes', label: 'World Axes', signal: showAxes },
];

export function ViewportOverlaysMenu() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  // Touch each signal so the popover re-renders on toggle.
  for (const e of ENTRIES) void e.signal.value;

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const a = anchorRef.current;
      if (a && !a.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('mousedown', onDown);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const onCount = ENTRIES.filter((e) => e.signal.value).length;

  return (
    <div ref={anchorRef} class="pointer-events-auto relative" data-testid="viewport-overlays">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        class="flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium text-text-0 bg-bg-1/95 backdrop-blur border border-border rounded-md shadow-md hover:bg-bg-2 transition-colors"
        title="Viewport overlays - toggle grid and axes"
      >
        <span>Overlays</span>
        <span class="text-text-2 text-[10px] tabular-nums">
          {onCount}/{ENTRIES.length}
        </span>
        <ChevronDown size={12} class="text-text-2" />
      </button>

      {open && (
        <div
          role="menu"
          class="absolute top-full right-0 mt-1 w-52 bg-bg-1 border border-border rounded-md shadow-xl overflow-hidden"
        >
          {ENTRIES.map((entry) => {
            const on = entry.signal.value;
            return (
              <div
                key={entry.id}
                role="menuitemcheckbox"
                aria-checked={on}
                data-overlay-id={entry.id}
                class="flex items-center justify-between px-3 h-7 text-[12px] cursor-pointer text-text-1 hover:bg-bg-3 hover:text-text-0"
                onClick={() => {
                  entry.signal.value = !entry.signal.value;
                }}
              >
                <span class="flex items-center gap-2">
                  <span
                    class={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center text-[10px] leading-none ${
                      on ? 'bg-accent border-accent text-bg-0' : 'border-border text-transparent'
                    }`}
                  >
                    ✓
                  </span>
                  <span class="truncate">{entry.label}</span>
                </span>
                {entry.hotkey && <span class="text-text-2 text-[10px] ml-2">{entry.hotkey}</span>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
