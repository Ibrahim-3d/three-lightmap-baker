import type { ComponentChildren } from 'preact';
import { primitiveCatalog } from '../../assets/primitives';
import { Box, Circle, Cylinder, Disc, Lightbulb, Square, Sun, Triangle } from './icons';

/**
 * Asset Library panel (T-D7). Two categories: Primitives + Lights. Each tile is
 * an HTML5 drag source carrying a JSON-encoded `AssetSpec` on the
 * `application/x-baker-asset` mime — main.tsx listens for the drop on the
 * renderer canvas and routes to `SceneController.addAsset`.
 */
export function AssetLibrary() {
  return (
    <div class="flex-1 overflow-auto bg-bg-1 text-[12px]">
      <Category label="Primitives">
        {primitiveCatalog.primitives.map((p) => (
          <Tile
            key={p.id}
            label={p.label}
            icon={p.icon}
            spec={{ kind: 'primitive', id: p.id }}
            enabled
          />
        ))}
      </Category>
      <Category label="Lights">
        {primitiveCatalog.lights.map((l) => (
          <Tile
            key={l.id}
            label={l.label}
            icon={l.icon}
            spec={{ kind: 'light', id: l.id }}
            enabled={l.enabled}
          />
        ))}
      </Category>
    </div>
  );
}

function Category(props: { label: string; children: ComponentChildren }) {
  return (
    <div class="border-b border-border/40 last:border-b-0">
      <div class="px-2 py-1 text-[10px] uppercase tracking-wider text-text-2 font-semibold">
        {props.label}
      </div>
      <div class="grid grid-cols-3 gap-1 p-1.5">{props.children}</div>
    </div>
  );
}

type TileProps = {
  label: string;
  icon:
    | 'box'
    | 'sphere'
    | 'plane'
    | 'cylinder'
    | 'cone'
    | 'torus'
    | 'lightbulb'
    | 'sun'
    | 'spot'
    | 'area';
  spec: { kind: 'primitive' | 'light'; id: string };
  enabled: boolean;
};

function Tile(props: TileProps) {
  const onDragStart = (e: DragEvent) => {
    if (!props.enabled) {
      e.preventDefault();
      return;
    }
    if (!e.dataTransfer) return;
    e.dataTransfer.setData('application/x-baker-asset', JSON.stringify(props.spec));
    e.dataTransfer.effectAllowed = 'copy';
  };
  const Icon = pickIcon(props.icon);
  return (
    <div
      data-asset-tile={props.spec.id}
      draggable={props.enabled}
      onDragStart={onDragStart}
      title={props.enabled ? `Drag ${props.label} to viewport` : `${props.label} (coming soon)`}
      class={`flex flex-col items-center justify-center gap-1 p-1.5 rounded border border-transparent text-[10px] select-none ${
        props.enabled
          ? 'bg-bg-2 hover:bg-bg-3 hover:border-border text-text-1 hover:text-text-0 cursor-grab active:cursor-grabbing'
          : 'bg-bg-2/40 text-text-2 cursor-not-allowed opacity-50'
      }`}
    >
      <Icon size={18} />
      <span class="truncate w-full text-center">{props.label}</span>
    </div>
  );
}

function pickIcon(name: TileProps['icon']) {
  switch (name) {
    case 'box':
      return Box;
    case 'sphere':
      return Circle;
    case 'plane':
      return Square;
    case 'cylinder':
      return Cylinder;
    case 'cone':
      return Triangle;
    case 'torus':
      return Disc;
    case 'lightbulb':
      return Lightbulb;
    case 'sun':
      return Sun;
    case 'spot':
      return Lightbulb;
    case 'area':
      return Square;
    default:
      return Box;
  }
}
