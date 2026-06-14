import { useEffect, useRef, useState } from 'preact/hooks';
import { flyActive, flySpeed, cameraFOV } from 'shared';
import { ChevronDown } from './icons';

const SPEED_MIN = 0.5;
const SPEED_MAX = 30;
const SPEED_STEP = 0.1;

const FOV_MIN = 1;
const FOV_MAX = 120;
const FOV_STEP = 1;

/**
 * Top-right viewport overlay - camera settings dropdown (speed & FOV).
 * The closed pill shows "Camera Settings"; clicking opens a popover.
 *
 * Speed reads/writes `flySpeed` (metres per second); `FlyController` also
 * writes it via mouse-wheel while fly mode is active.
 *
 * FOV reads/writes `cameraFOV` (degrees).
 *
 * The pill outline lights up while `flyActive` is true so the user has a
 * clear "you are flying" affordance. Tooltip teaches the gesture: hold RMB,
 * then WASD / QE / Shift / wheel.
 *
 * Lives inline in the viewport overlay row - positioning handled by parent.
 */
export function ViewportCameraSettings() {
  const speed = flySpeed.value;
  const fov = cameraFOV.value;
  const active = flyActive.value;
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const hint = 'Hold right-click + WASD to fly. Q/E down/up, Shift boost, wheel = speed.';

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const a = anchorRef.current;
      if (a && !a.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('mousedown', onDown);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div
      ref={anchorRef}
      class="pointer-events-auto relative"
      data-testid="camera-settings-control"
      title={hint}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((vv) => !vv)}
        class={`flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium bg-bg-1/95 backdrop-blur border rounded-md shadow-md hover:bg-bg-2 transition-colors ${
          active ? 'border-accent text-accent' : 'border-border text-text-0'
        }`}
      >
        <span>Camera Settings</span>
        <ChevronDown size={12} class="text-text-2" />
      </button>

      {open && (
        <div
          role="menu"
          class="absolute top-full right-0 mt-1 w-64 bg-bg-1 border border-border rounded-md shadow-xl p-4 flex flex-col gap-4"
        >
          {/* Speed Section */}
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-[10px] uppercase tracking-wider font-semibold text-text-2">
                Fly Speed
              </span>
              <span class="text-[11px] tabular-nums text-text-1">{speed.toFixed(1)} m/s</span>
            </div>
            <input
              type="range"
              min={SPEED_MIN}
              max={SPEED_MAX}
              step={SPEED_STEP}
              value={speed}
              aria-label="Camera speed"
              onInput={(e) => {
                flySpeed.value = Number((e.target as HTMLInputElement).value);
              }}
              class="w-full accent-accent"
            />
            <div class="flex justify-between text-[10px] text-text-2 mt-1 tabular-nums">
              <span>{SPEED_MIN}</span>
              <span>{SPEED_MAX}</span>
            </div>
          </div>

          {/* FOV Section */}
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-[10px] uppercase tracking-wider font-semibold text-text-2">
                Field of View
              </span>
              <span class="text-[11px] tabular-nums text-text-1">{fov}°</span>
            </div>
            <input
              type="range"
              min={FOV_MIN}
              max={FOV_MAX}
              step={FOV_STEP}
              value={fov}
              aria-label="Field of view"
              onInput={(e) => {
                cameraFOV.value = Number((e.target as HTMLInputElement).value);
              }}
              class="w-full accent-accent"
            />
            <div class="flex justify-between text-[10px] text-text-2 mt-1 tabular-nums">
              <span>{FOV_MIN}°</span>
              <span>{FOV_MAX}°</span>
            </div>
          </div>

          <p class="text-[10px] text-text-2 leading-snug border-t border-border pt-2">{hint}</p>
        </div>
      )}
    </div>
  );
}
