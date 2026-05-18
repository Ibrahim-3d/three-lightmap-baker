import { AssetLibrary } from './AssetLibrary';
import { Eye, EyeOff, Layers, Lightbulb, Plus, Square, Trash2 } from './icons';
import { Splitter } from './Splitter';
import { getOrchestrator } from '../../state/orchestrator';
import { history } from '../../state/history';
import { layout, sceneTree, selectedId, type SceneNode } from '../../state/signals';

const LIGHT_DUMMY_ID = 'light:dummy';

export function Outliner() {
    const tree = sceneTree.value;
    const lights = tree.filter((n) => n.kind === 'light');
    const meshes = tree.filter((n) => n.kind === 'mesh');

    return (
        <aside
            class="relative bg-bg-1 border-r border-border flex flex-col text-[12px] pointer-events-auto"
            style={{ width: `${layout.value.outlinerW}px` }}
        >
            <div class="flex items-center justify-between px-2 h-7 border-b border-border bg-bg-2">
                <div class="flex items-center gap-1.5 text-text-1">
                    <Layers size={12} />
                    <span class="font-medium text-text-0">Outliner</span>
                </div>
                <button
                    type="button"
                    class="p-1 text-text-1 hover:bg-bg-3 hover:text-text-0 rounded disabled:opacity-50"
                    title="Add object — drag from Assets below"
                    disabled
                >
                    <Plus size={12} />
                </button>
            </div>

            <div class="flex-1 overflow-auto">
                <TreeGroup label="Lights" nodes={lights} />
                <TreeGroup label="Meshes" nodes={meshes} />
                {tree.length === 0 && (
                    <div class="p-2 text-text-2 italic">Empty scene.</div>
                )}
            </div>

            <div class="border-t border-border bg-bg-2 h-7 px-2 flex items-center text-text-1 flex-shrink-0">
                <span class="font-medium text-text-0">Assets</span>
            </div>
            <div class="flex-1 min-h-0 max-h-[50%] flex flex-col border-t border-border/40">
                <AssetLibrary />
            </div>

            <Splitter
                side="left"
                width={layout.value.outlinerW}
                onResize={(w) => (layout.value = { ...layout.value, outlinerW: w })}
                min={200}
                max={480}
            />
        </aside>
    );
}

function TreeGroup(props: { label: string; nodes: SceneNode[] }) {
    if (props.nodes.length === 0) return null;
    return (
        <div class="border-b border-border/40 last:border-b-0">
            <div class="px-2 py-1 text-[10px] uppercase tracking-wider text-text-2 font-semibold">
                {props.label}
            </div>
            <ul>
                {props.nodes.map((n) => (
                    <TreeRow key={n.id} node={n} />
                ))}
            </ul>
        </div>
    );
}

function TreeRow(props: { node: SceneNode }) {
    const selected = selectedId.value === props.node.id;
    const isDummy = props.node.id === LIGHT_DUMMY_ID;

    function toggleVisible(e: MouseEvent): void {
        e.stopPropagation();
        const app = getOrchestrator();
        if (!app) return;
        const prev = props.node.visible;
        const next = !prev;
        const id = props.node.id;
        const name = props.node.name;
        app.setNodeVisible(id, next);
        sceneTree.value = sceneTree.value.map((n) => n.id === id ? { ...n, visible: next } : n);
        history.push({
            label: `${next ? 'Show' : 'Hide'} "${name}"`,
            do: () => {
                app.setNodeVisible(id, next);
                sceneTree.value = sceneTree.value.map((n) => n.id === id ? { ...n, visible: next } : n);
            },
            undo: () => {
                app.setNodeVisible(id, prev);
                sceneTree.value = sceneTree.value.map((n) => n.id === id ? { ...n, visible: prev } : n);
            },
        });
    }

    function deleteNode(e: MouseEvent): void {
        e.stopPropagation();
        if (isDummy) return;
        const app = getOrchestrator();
        if (!app) return;
        const id = props.node.id;
        const name = props.node.name;
        const extracted = app.extractNode(id);
        if (!extracted) return;
        const { node, kind } = extracted;
        if (selectedId.value === id) selectedId.value = null;
        history.push({
            label: `Delete "${name}"`,
            undo: () => {
                app.reinsertNode(node, kind);
                selectedId.value = node.uuid;
            },
            do: () => {
                app.extractNode(node.uuid);
                if (selectedId.value === node.uuid) selectedId.value = null;
            },
        });
    }

    return (
        <li
            class={`group flex items-center gap-1.5 px-2 h-[22px] cursor-pointer select-none ${
                selected ? 'bg-accent/20 text-text-0' : 'text-text-1 hover:bg-bg-3 hover:text-text-0'
            }`}
            onClick={() => { selectedId.value = props.node.id; }}
        >
            <span class={`flex-shrink-0 ${selected ? 'text-accent' : 'text-text-2'}`}>
                {props.node.kind === 'light' ? <Lightbulb size={12} /> : <Square size={12} />}
            </span>
            <span class="flex-1 truncate text-[12px]">{props.node.name}</span>

            <button
                type="button"
                class="p-0.5 opacity-0 group-hover:opacity-100 text-text-2 hover:text-text-0"
                onClick={toggleVisible}
                title={props.node.visible ? 'Hide' : 'Show'}
            >
                {props.node.visible ? <Eye size={12} /> : <EyeOff size={12} />}
            </button>

            {!isDummy && (
                <button
                    type="button"
                    class="p-0.5 opacity-0 group-hover:opacity-100 text-text-2 hover:text-red-400"
                    onClick={deleteNode}
                    title="Delete (Del)"
                >
                    <Trash2 size={12} />
                </button>
            )}
        </li>
    );
}
