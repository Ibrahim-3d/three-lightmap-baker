/**
 * Gallery landing page — shown when the app loads with no `?scene=` param.
 * Clicking any card navigates to `/?scene=<id>` which loads the full editor
 * with that scene pre-loaded.
 *
 * Thumbnail priority:
 *  1. `thumbUrl` on the preset (copied screenshots)
 *  2. CSS gradient derived from `thumbColor`
 */
import '../app/theme.css';
import { sceneRegistry, type ScenePreset } from '../scenes/registry';

// Static thumbnail map — real screenshots where available, gradient colour elsewhere.
const THUMBS: Partial<Record<string, string>> = {
    'gltf.gym':       '/thumbs/gym.webp',
    'gltf.backrooms': '/thumbs/backrooms.webp',
    'gltf.desert':    '/thumbs/desert.webp',
};

const GRADIENT: Partial<Record<string, string>> = {
    'cornell.classic':        'linear-gradient(135deg,#1a0000 0%,#3d0a0a 100%)',
    'cornell.advanced':       'linear-gradient(135deg,#1a0800 0%,#3d1a00 100%)',
    'cornell.glass-mirror':   'linear-gradient(135deg,#001a1a 0%,#003030 100%)',
    'cornell.emissive-strip': 'linear-gradient(135deg,#0a001a 0%,#200040 100%)',
    'threejs.pointlights':    'linear-gradient(135deg,#00100a 0%,#002a18 100%)',
    'threejs.shadowmap':      'linear-gradient(135deg,#4a6a90 0%,#87ceeb 100%)',
    'threejs.decals':         'linear-gradient(135deg,#1a1a00 0%,#2a2800 100%)',
    'isometric.room':         'linear-gradient(135deg,#100808 0%,#2a1a14 100%)',
    'pt.slat-room':           'linear-gradient(135deg,#000000 0%,#0a0800 100%)',
    'pt.three-balls':         'linear-gradient(135deg,#050510 0%,#0d0d2a 100%)',
    'pt.modern-bathroom':     'linear-gradient(135deg,#08100a 0%,#101a10 100%)',
    'pt.robot-spotlight':     'linear-gradient(135deg,#050505 0%,#151510 100%)',
    'pt.mercury-statue':      'linear-gradient(135deg,#050008 0%,#100018 100%)',
};

const CATEGORY_LABEL: Record<ScenePreset['category'], string> = {
    cornell:        'Cornell Box',
    'threejs-port': 'three.js Port',
    interior:       'Interior',
    isometric:      'Isometric',
    showcase:       'Showcase',
};

function openScene(id: string) {
    window.location.href = `/?scene=${encodeURIComponent(id)}`;
}

function SceneCard({ p }: { p: ScenePreset }) {
    const thumb = THUMBS[p.id];
    const grad  = GRADIENT[p.id] ?? 'linear-gradient(135deg,#0a0a12 0%,#181828 100%)';

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => openScene(p.id)}
            onKeyDown={(e) => e.key === 'Enter' && openScene(p.id)}
            class="group relative rounded-lg overflow-hidden cursor-pointer border border-white/10 hover:border-white/40 transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/30"
            style={{ aspectRatio: '16/9', background: grad }}
        >
            {thumb && (
                <img
                    src={thumb}
                    alt={p.label}
                    loading="lazy"
                    class="absolute inset-0 w-full h-full object-cover"
                />
            )}

            {/* Dark gradient overlay for text legibility */}
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Online badge */}
            {p.label.startsWith('★') && (
                <div class="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-amber-500/80 text-black uppercase tracking-wider">
                    Online
                </div>
            )}

            {/* Category + label */}
            <div class="absolute bottom-0 left-0 right-0 p-3">
                <div class="text-[9px] uppercase tracking-wider text-white/50 mb-0.5">
                    {CATEGORY_LABEL[p.category] ?? p.category}
                </div>
                <div class="text-white font-semibold text-sm leading-tight truncate">
                    {/* Strip leading ★ from label */}
                    {p.label.replace(/^★\s*Online\s*—\s*/i, '').replace(/\s*\(.*?\)$/, '')}
                </div>
                <div class="text-white/40 text-[10px] mt-0.5 line-clamp-1">
                    {p.description.split('—')[0]?.trim()}
                </div>
            </div>
        </div>
    );
}

export function GalleryPage() {
    const presets = sceneRegistry.list() as ScenePreset[];

    return (
        <div class="min-h-screen bg-[#0a0a0f] text-white font-sans">
            {/* Header */}
            <header class="px-8 pt-12 pb-8 border-b border-white/10">
                <div class="max-w-6xl mx-auto">
                    <div class="flex items-center gap-3 mb-3">
                        <span class="text-[#7c8aff] text-3xl leading-none">⬢</span>
                        <h1 class="text-2xl font-bold tracking-tight">Lightmap Studio</h1>
                    </div>
                    <p class="text-white/50 text-sm max-w-lg">
                        Browser-native path-traced global illumination lightmap baking for Three.js.
                        Click a scene to open the editor.
                    </p>
                </div>
            </header>

            {/* Scene grid */}
            <main class="max-w-6xl mx-auto px-8 py-8">
                {presets.length === 0 ? (
                    <p class="text-white/30 text-sm">No scenes registered.</p>
                ) : (
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {presets.map((p) => (
                            <SceneCard key={p.id} p={p} />
                        ))}
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer class="px-8 py-6 border-t border-white/10 text-white/30 text-xs max-w-6xl mx-auto">
                three-lightmap-baker · open source
            </footer>
        </div>
    );
}
