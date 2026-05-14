import { useEffect, useRef, useState } from 'preact/hooks';
import { ChevronDown } from './icons';
import { sceneRegistry, type ScenePreset } from '../../scenes/registry';
import { activeSceneId } from '../../state/signals';
import { getOrchestrator } from '../../state/orchestrator';

const CATEGORY_LABEL: Record<ScenePreset['category'], string> = {
    cornell: 'Cornell',
    'threejs-port': 'three.js Ports',
    interior: 'Interior',
    isometric: 'Isometric',
    showcase: 'Showcase',
};

/**
 * Scene preset dropdown (T-D9). Reads `sceneRegistry.listByCategory()` for the
 * menu; clicking sets `activeSceneId` and calls `loadScenePreset(id)`. When the
 * registry is empty (A3 not merged yet) renders a single disabled hint item.
 */
export function ScenePicker() {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);

    const presets = sceneRegistry.list();
    const byCat = sceneRegistry.listByCategory();
    const active = presets.find((p) => p.id === activeSceneId.value);
    const label = active?.label ?? activeSceneId.value;

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

    const pick = (id: string) => {
        activeSceneId.value = id;
        const orch = getOrchestrator() as unknown as {
            loadScenePreset?: (id: string) => Promise<void>;
        } | null;
        void orch?.loadScenePreset?.(id);
        setOpen(false);
    };

    return (
        <div ref={anchorRef} class="relative">
            <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={open}
                data-testid="scene-picker"
                class="flex items-center gap-1.5 px-2.5 py-1 text-[12px] text-text-0 bg-bg-2 hover:bg-bg-3 rounded border border-border"
                onClick={() => setOpen((v) => !v)}
            >
                <span class="truncate max-w-[180px]">{label}</span>
                <ChevronDown size={12} class="text-text-2" />
            </button>

            {open && (
                <div
                    role="menu"
                    class="absolute top-full mt-0.5 right-0 w-64 bg-bg-1 border border-border rounded shadow-xl z-50 max-h-[60vh] overflow-auto"
                >
                    {presets.length === 0 ? (
                        <div class="px-3 h-6 flex items-center text-[12px] text-text-2 italic opacity-50 cursor-not-allowed">
                            No scenes registered yet
                        </div>
                    ) : (
                        Array.from(byCat.entries()).map(([cat, items]) => (
                            <div key={cat} class="border-b border-border/40 last:border-b-0">
                                <div class="px-3 py-1 text-[10px] uppercase tracking-wider text-text-2 font-semibold">
                                    {CATEGORY_LABEL[cat] ?? cat}
                                </div>
                                {items.map((p) => {
                                    const selected = p.id === activeSceneId.value;
                                    return (
                                        <div
                                            key={p.id}
                                            role="menuitem"
                                            data-scene-id={p.id}
                                            class={`flex items-center justify-between px-3 h-6 text-[12px] cursor-pointer ${
                                                selected
                                                    ? 'bg-accent/20 text-text-0'
                                                    : 'text-text-1 hover:bg-bg-3 hover:text-text-0'
                                            }`}
                                            onClick={() => pick(p.id)}
                                        >
                                            <span class="truncate">{p.label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
