/**
 * Gallery landing — shown on `/` with no `?scene=` query param. Click a card
 * to open the editor with that preset pre-loaded (full reload via location).
 *
 * Categories pulled from `sceneRegistry`. Thumbnails are CSS gradients keyed
 * by preset id; falls back to a neutral dark gradient when an id is unknown.
 */
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

const CATEGORY_LABEL: Record<string, string> = {
  cornell: 'Cornell Box',
  'threejs-port': 'three.js Port',
  interior: 'Interior',
  isometric: 'Isometric',
  showcase: 'Showcase',
};

function openScene(id: string): void {
  window.location.href = `/?scene=${encodeURIComponent(id)}`;
}

function SceneCard({ p }: { p: ScenePreset }): preact.JSX.Element {
  const grad = GRADIENT[p.id] ?? 'linear-gradient(135deg,#0a0a12 0%,#181828 100%)';

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => openScene(p.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') openScene(p.id);
      }}
      class="group relative rounded-lg overflow-hidden cursor-pointer border border-white/10 hover:border-accent/60 transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent/40"
      style={{ aspectRatio: '16/9', background: grad }}
    >
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      <div class="absolute bottom-0 left-0 right-0 p-3">
        <div class="text-[9px] uppercase tracking-wider text-white/50 mb-0.5">
          {CATEGORY_LABEL[p.category] ?? p.category}
        </div>
        <div class="text-white font-semibold text-sm leading-tight truncate">{p.label}</div>
        <div class="text-white/40 text-[10px] mt-0.5 line-clamp-2">
          {p.description.split('—')[0]?.trim()}
        </div>
      </div>
    </div>
  );
}

export function GalleryPage(): preact.JSX.Element {
  const presets = sceneRegistry.list();
  const byCat = sceneRegistry.listByCategory();

  return (
    <div class="min-h-screen bg-bg-0 text-text-0 font-sans">
      <header class="px-8 pt-12 pb-8 border-b border-border">
        <div class="max-w-6xl mx-auto">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-accent text-3xl leading-none">⬢</span>
            <h1 class="text-2xl font-bold tracking-tight">Lightmap Studio</h1>
          </div>
          <p class="text-text-1 text-sm max-w-lg">
            Browser-native path-traced global illumination lightmap baking for Three.js. Pick a
            scene to open the editor.
          </p>
        </div>
      </header>

      <main class="max-w-6xl mx-auto px-8 py-8">
        {presets.length === 0 ? (
          <p class="text-text-2 text-sm">No scenes registered.</p>
        ) : (
          Array.from(byCat.entries()).map(([cat, items]) => (
            <section key={cat} class="mb-10 last:mb-0">
              <h2 class="text-[10px] uppercase tracking-[0.15em] text-text-2 font-semibold mb-3">
                {CATEGORY_LABEL[cat] ?? cat}
              </h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {items.map((p) => (
                  <SceneCard key={p.id} p={p} />
                ))}
              </div>
            </section>
          ))
        )}
      </main>

      <footer class="px-8 py-6 border-t border-border text-text-2 text-xs">
        <div class="max-w-6xl mx-auto">three-lightmap-baker · open source</div>
      </footer>
    </div>
  );
}
