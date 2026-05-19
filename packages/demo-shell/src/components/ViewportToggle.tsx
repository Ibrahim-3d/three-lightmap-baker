import { useEffect, useRef, useState } from 'preact/hooks';
import { renderMode, viewLayers, type ViewLayerDescriptor } from 'shared';
import { ChevronDown } from './icons';

/**
 * Top-right viewport overlay. Blender-style view-layer picker.
 *
 * Reads the `viewLayers` signal (populated by the app from its modes.LAYERS
 * table) and the active layer id from `renderMode`. Click → dropdown grouped
 * by `group` ('output' / 'debug'). The shell stays renderer-agnostic — it
 * never imports app-side enums.
 *
 * The app wires the `renderMode` signal back into the orchestrator via an
 * effect (see `apps/playground/src/main.tsx`) so picking a layer here calls
 * `orchestrator.setLayer(id)`.
 */
const GROUP_LABEL: Record<ViewLayerDescriptor['group'], string> = {
  output: 'Output',
  debug: 'Debug',
};

export function ViewportToggle() {
  const layers = viewLayers.value;
  const active = renderMode.value;
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

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

  if (layers.length === 0) return null;

  const activeLayer = layers.find((l) => l.id === active) ?? layers[0]!;
  const grouped = new Map<ViewLayerDescriptor['group'], ViewLayerDescriptor[]>();
  for (const l of layers) {
    const arr = grouped.get(l.group) ?? [];
    arr.push(l);
    grouped.set(l.group, arr);
  }

  const pick = (id: string): void => {
    renderMode.value = id;
    setOpen(false);
  };

  return (
    <div
      ref={anchorRef}
      class="pointer-events-auto absolute top-3 right-3 z-20"
      data-testid="view-layer-dropdown"
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        class="flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium text-text-0 bg-bg-1/95 backdrop-blur border border-border rounded-md shadow-md hover:bg-bg-2 transition-colors"
        title="Viewport — switch active pass / view layer"
      >
        <span class="truncate max-w-[160px]">{activeLayer.label}</span>
        <ChevronDown size={12} class="text-text-2" />
      </button>

      {open && (
        <div
          role="menu"
          class="absolute top-full right-0 mt-1 w-56 bg-bg-1 border border-border rounded-md shadow-xl overflow-hidden"
        >
          {Array.from(grouped.entries()).map(([g, items]) => (
            <div key={g} class="border-b border-border/40 last:border-b-0">
              <div class="px-3 py-1 text-[10px] uppercase tracking-wider text-text-2 font-semibold">
                {GROUP_LABEL[g]}
              </div>
              {items.map((l) => {
                const selected = l.id === active;
                return (
                  <div
                    key={l.id}
                    role="menuitem"
                    data-layer-id={l.id}
                    class={`flex items-center justify-between px-3 h-6 text-[12px] cursor-pointer ${
                      selected
                        ? 'bg-accent/20 text-text-0'
                        : 'text-text-1 hover:bg-bg-3 hover:text-text-0'
                    }`}
                    onClick={() => pick(l.id)}
                  >
                    <span class="truncate">{l.label}</span>
                    {selected && <span class="text-accent text-[10px]">●</span>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
