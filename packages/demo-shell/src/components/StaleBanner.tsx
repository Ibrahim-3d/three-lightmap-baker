import { bakeStatus, getOrchestrator, isStale } from 'shared';
import { AlertTriangle } from './icons';

/**
 * Overlay chip pinned to the viewport bottom-center (T-D7). Visible whenever
 * `isStale` is true AND we are not mid-bake. Click or press B to kick a re-bake.
 *
 * The keyboard binding is registered in `main.tsx` (`wireHotkeys`) — this
 * component is the click target.
 */
export function StaleBanner() {
  const stale = isStale.value;
  const baking = bakeStatus.value === 'baking';
  if (!stale || baking) return null;

  const onClick = () => {
    const app = getOrchestrator();
    if (!app?.requestBake) return;
    void app.requestBake();
  };

  return (
    <button
      type="button"
      data-stale-banner
      onClick={onClick}
      class="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 bg-stale text-bg-0 rounded-full px-4 py-1.5 text-[12px] font-medium shadow-lg cursor-pointer hover:bg-stale/90 flex items-center gap-2 pointer-events-auto"
      title="Re-bake the lightmap (B)"
    >
      <AlertTriangle size={14} />
      <span>Scene changed — Re-bake (B)</span>
    </button>
  );
}
