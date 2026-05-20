import { useEffect } from 'preact/hooks';
import { layout } from 'shared';
import { Inspector } from './components/Inspector';
import { MobileSplash } from './components/MobileSplash';
import { Outliner } from './components/Outliner';
import { StaleBanner } from './components/StaleBanner';
import { StatusBar } from './components/StatusBar';
import { Toast } from './components/Toast';
import { Topbar } from './components/Topbar';
import { ViewportFlySpeed } from './components/ViewportFlySpeed';
import { ViewportToggle } from './components/ViewportToggle';

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
 *
 * ViewportToggle is an absolute-positioned overlay inside the viewport column
 * (pointer-events:auto on itself only, matching the canvas beneath).
 */
export function App() {
  useEffect(() => {
    loadLayout();
    const unsub = layout.subscribe(() => saveLayout());
    return unsub;
  }, []);

  return (
    <>
      <div class="fixed inset-0 flex flex-col pointer-events-none z-40">
        <Topbar />
        <div class="flex-1 flex min-h-0 relative">
          <Outliner />
          <div class="flex-1 relative pointer-events-none">
            <ViewportToggle />
            <ViewportFlySpeed />
          </div>
          <Inspector />
          <StaleBanner />
        </div>
        <StatusBar />
      </div>
      <Toast />
      <MobileSplash />
    </>
  );
}
