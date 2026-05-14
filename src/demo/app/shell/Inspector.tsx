import { BakePage } from './inspector/BakePage';
import { LightPage } from './inspector/LightPage';
import { LightmapPage } from './inspector/LightmapPage';
import { MaterialPage } from './inspector/MaterialPage';
import { ObjectPage } from './inspector/ObjectPage';
import { WorldPage } from './inspector/WorldPage';
import { Splitter } from './Splitter';
import { inspectorTab, layout } from '../../state/signals';

const TABS = [
    { id: 'object', label: 'Object' },
    { id: 'material', label: 'Material' },
    { id: 'lightmap', label: 'Lightmap' },
    { id: 'bake', label: 'Bake' },
    { id: 'light', label: 'Light' },
    { id: 'world', label: 'World' },
] as const;

export function Inspector() {
    const active = inspectorTab.value;
    return (
        <aside
            class="relative bg-bg-1 border-l border-border flex flex-col text-[12px] pointer-events-auto"
            style={{ width: `${layout.value.inspectorW}px` }}
        >
            <div class="border-b border-border bg-bg-2 flex">
                {TABS.map((t) => (
                    <button
                        type="button"
                        class={`flex-1 px-2 h-7 text-[11px] font-medium border-r border-border last:border-r-0 ${
                            active === t.id
                                ? 'text-text-0 bg-bg-1 border-b-2 border-b-accent'
                                : 'text-text-1 hover:text-text-0 hover:bg-bg-3'
                        }`}
                        onClick={() => (inspectorTab.value = t.id)}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            <div class="flex-1 overflow-auto">
                {active === 'object' && <ObjectPage />}
                {active === 'material' && <MaterialPage />}
                {active === 'lightmap' && <LightmapPage />}
                {active === 'bake' && <BakePage />}
                {active === 'light' && <LightPage />}
                {active === 'world' && <WorldPage />}
            </div>

            <Splitter
                side="right"
                width={layout.value.inspectorW}
                onResize={(w) => (layout.value = { ...layout.value, inspectorW: w })}
                min={240}
                max={520}
            />
        </aside>
    );
}

