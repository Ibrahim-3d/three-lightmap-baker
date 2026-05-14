import { useEffect } from 'preact/hooks';
import { Inspector } from './shell/Inspector';
import { Outliner } from './shell/Outliner';
import { StaleBanner } from './shell/StaleBanner';
import { StatusBar } from './shell/StatusBar';
import { Topbar } from './shell/Topbar';
import { layout } from '../state/signals';

const STORAGE_KEY = 'lightmap-studio.layout.v1';

function loadLayout(): void {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const saved = JSON.parse(raw) as { outlinerW?: number; inspectorW?: number; logOpen?: boolean };
        layout.value = {
            outlinerW: saved.outlinerW ?? layout.value.outlinerW,
            inspectorW: saved.inspectorW ?? layout.value.inspectorW,
            logOpen: saved.logOpen ?? layout.value.logOpen,
        };
    } catch {
        // Corrupted localStorage; ignore.
    }
}

let savePending: ReturnType<typeof setTimeout> | null = null;
function saveLayout(): void {
    if (savePending) clearTimeout(savePending);
    savePending = setTimeout(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(layout.value));
        } catch {
            /* quota? incognito? — ignore */
        }
    }, 500);
}

/**
 * Root shell. CSS grid: 36px topbar / 1fr middle / 40px status. Middle row
 * is a 3-column flex (Outliner | Viewport | Inspector). The center "Viewport"
 * region is intentionally empty + pointer-events:none so OrbitControls and
 * TransformControls reach the canvas underneath. Topbar/Outliner/Inspector/
 * StatusBar all set pointer-events:auto on themselves.
 */
export function App() {
    useEffect(() => {
        loadLayout();
        const unsub = layout.subscribe(() => saveLayout());
        return unsub;
    }, []);

    return (
        <div class="fixed inset-0 flex flex-col pointer-events-none z-40">
            <Topbar />
            <div class="flex-1 flex min-h-0 relative">
                <Outliner />
                <div class="flex-1 pointer-events-none" />
                <Inspector />
                <StaleBanner />
            </div>
            <StatusBar />
        </div>
    );
}
