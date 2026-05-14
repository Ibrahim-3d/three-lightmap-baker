import { useEffect, useState } from 'preact/hooks';
import { AlertTriangle } from './icons';

/**
 * Desktop-only gate. Lightmap baking needs WebGL2 + a mouse for gizmo +
 * OrbitControls; touch + small-viewport UX is out of scope. Renders a
 * full-screen splash that swallows pointer events below 1024px wide OR on
 * coarse-pointer devices (phones, tablets without a stylus).
 */
export function MobileSplash() {
    const [block, setBlock] = useState(() => computeBlock());

    useEffect(() => {
        const handler = () => setBlock(computeBlock());
        window.addEventListener('resize', handler);
        const mm = window.matchMedia('(pointer: coarse)');
        mm.addEventListener?.('change', handler);
        return () => {
            window.removeEventListener('resize', handler);
            mm.removeEventListener?.('change', handler);
        };
    }, []);

    if (!block) return null;

    return (
        <div class="fixed inset-0 z-[100] bg-bg-0/95 backdrop-blur flex items-center justify-center p-6 pointer-events-auto">
            <div class="max-w-md text-center">
                <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-stale/20 text-stale mb-4">
                    <AlertTriangle size={28} />
                </div>
                <h1 class="text-xl font-semibold text-text-0 mb-2">Desktop only</h1>
                <p class="text-sm text-text-1 leading-relaxed">
                    Lightmap Studio needs WebGL2, a mouse, and a wide viewport. Touch and
                    small screens aren't supported. Open this URL on a laptop or desktop.
                </p>
                <p class="mt-6 text-[11px] text-text-2 font-mono">≥ 1024px · fine pointer</p>
            </div>
        </div>
    );
}

function computeBlock(): boolean {
    if (typeof window === 'undefined') return false;
    const narrow = window.innerWidth < 1024;
    const coarse = window.matchMedia?.('(pointer: coarse)').matches ?? false;
    return narrow || coarse;
}
