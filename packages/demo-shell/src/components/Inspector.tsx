import { inspectorTab, layout, panelRegistry, panelTick, type PanelDescriptor } from 'shared';
import { MaterialPage } from '../inspector/MaterialPage';
import { ObjectPage } from '../inspector/ObjectPage';
import { Splitter } from './Splitter';

/**
 * Built-in generic tabs always present. Renderer-specific tabs (Lightmap,
 * Bake, Light, World - whatever the renderer registers) append after these.
 */
const BUILTIN_TABS: ReadonlyArray<PanelDescriptor> = [
  { id: 'object', label: 'Object', component: ObjectPage },
  { id: 'material', label: 'Material', component: MaterialPage },
];

export function Inspector() {
  void panelTick.value; // re-render when packages register/unregister panels
  const active = inspectorTab.value;
  const registered = panelRegistry.all().filter((p) => p.when?.() ?? true);
  const tabs: PanelDescriptor[] = [...BUILTIN_TABS, ...registered];
  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];
  const ActiveComponent = activeTab?.component;
  return (
    <aside
      class="relative bg-bg-1 border-l border-border flex flex-col text-[12px] pointer-events-auto"
      style={{ width: `${layout.value.inspectorW}px` }}
    >
      <div class="border-b border-border bg-bg-2 flex">
        {tabs.map((t) => (
          <button
            key={t.id}
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

      <div class="flex-1 overflow-auto">{ActiveComponent && <ActiveComponent key={activeTab.id} />}</div>

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
