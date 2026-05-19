import { bakeStatus, dirtyMeshIds, getOrchestrator, isStale } from 'shared';
import { AlertTriangle } from './icons';

/**
 * Overlay chip pinned to the viewport bottom-center. Shows when bake is
 * stale or any mesh has drifted from its baked transform. Click or hit B
 * to kick a re-bake. Dirty meshes meanwhile render unlit (intensity 0) so
 * the user can see which objects need rebuilding (Unreal-style).
 */
export function StaleBanner() {
  const stale = isStale.value;
  const baking = bakeStatus.value === 'baking';
  const dirtyCount = dirtyMeshIds.value.size;
  if ((!stale && dirtyCount === 0) || baking) return null;

  const onClick = () => {
    const app = getOrchestrator();
    if (!app?.requestBake) return;
    void app.requestBake();
  };

  const label =
    dirtyCount > 0
      ? `${dirtyCount} object${dirtyCount === 1 ? '' : 's'} need rebuild — Re-bake (B)`
      : 'Scene changed — Re-bake (B)';

  return (
    <button
      type="button"
      data-stale-banner
      onClick={onClick}
      class="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 bg-stale text-bg-0 rounded-full px-4 py-1.5 text-[12px] font-medium shadow-lg cursor-pointer hover:bg-stale/90 flex items-center gap-2 pointer-events-auto"
      title="Re-bake the lightmap (B)"
    >
      <AlertTriangle size={14} />
      <span>{label}</span>
    </button>
  );
}
