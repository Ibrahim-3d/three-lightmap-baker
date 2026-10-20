/**
 * Gallery landing - full-viewport grid of clickable scene tiles separated by
 * 4px white gridlines. No text, no chrome. Click a tile to open the editor.
 */
import { useEffect, useState } from 'preact/hooks';
import { sceneRegistry, type ScenePreset } from 'shared';

const GRADIENT: Record<string, string> = {
  'cornell.classic': 'linear-gradient(135deg,#1a0000 0%,#3d0a0a 100%)',
  'cornell.advanced': 'linear-gradient(135deg,#1a0800 0%,#3d1a00 100%)',
  'cornell.glass-mirror': 'linear-gradient(135deg,#001a1a 0%,#003030 100%)',
  'cornell.emissive-strip': 'linear-gradient(135deg,#0a001a 0%,#200040 100%)',
  'threejs.pointlights': 'linear-gradient(135deg,#00100a 0%,#002a18 100%)',
  'threejs.shadowmap': 'linear-gradient(135deg,#4a6a90 0%,#87ceeb 100%)',
  'threejs.decals': 'linear-gradient(135deg,#1a1a00 0%,#2a2800 100%)',
  'isometric.room': 'linear-gradient(135deg,#100808 0%,#2a1a14 100%)',
};

const FALLBACK = 'linear-gradient(135deg,#0a0a12 0%,#181828 100%)';

function openScene(id: string): void {
  const url = new URL(window.location.href);
  url.searchParams.set('scene', id);
  window.location.href = url.toString();
}

function computeCols(n: number, vw: number, vh: number): number {
  if (n <= 1) return 1;
  const aspect = vw / Math.max(vh, 1);
  return Math.max(1, Math.round(Math.sqrt(n * aspect)));
}

function Tile({ p }: { p: ScenePreset }): preact.JSX.Element {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => openScene(p.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') openScene(p.id);
      }}
      style={{
        background: GRADIENT[p.id] ?? FALLBACK,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontWeight: 700,
        fontSize: 'clamp(14px, 2vw, 28px)',
        textAlign: 'center',
        padding: '8px',
        userSelect: 'none',
      }}
    >
      {p.label}
    </div>
  );
}

export function GalleryPage(): preact.JSX.Element {
  const presets = sceneRegistry.list();
  const [cols, setCols] = useState(() =>
    computeCols(presets.length, window.innerWidth, window.innerHeight),
  );

  useEffect(() => {
    const onResize = (): void =>
      setCols(computeCols(presets.length, window.innerWidth, window.innerHeight));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [presets.length]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        background: '#ffffff',
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridAutoRows: '1fr',
        gap: '4px',
        overflow: 'hidden',
      }}
    >
      {presets.map((p) => (
        <Tile key={p.id} p={p} />
      ))}
    </div>
  );
}
