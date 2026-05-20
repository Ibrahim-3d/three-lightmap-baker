import { flyActive, flySpeed } from 'shared';

const MIN = 0.5;
const MAX = 30;
const STEP = 0.1;

/**
 * Top-right viewport overlay — fly-camera speed slider. Sits directly below
 * `ViewportToggle`. Reads/writes the `flySpeed` signal (metres per second);
 * `FlyController` also writes it via mouse-wheel while fly mode is active.
 *
 * The pill outline lights up while `flyActive` is true so the user has a
 * clear "you are flying" affordance. Tooltip teaches the gesture: hold RMB,
 * then WASD / QE / Shift / wheel.
 */
export function ViewportFlySpeed() {
  const v = flySpeed.value;
  const active = flyActive.value;
  const hint = 'Hold right-click + WASD to fly. Q/E down/up, Shift boost, wheel = speed.';

  return (
    <div
      class="pointer-events-auto absolute top-12 right-3 z-20"
      data-testid="fly-speed-control"
      title={hint}
    >
      <div
        class={`flex items-center gap-2 px-3 py-1 bg-bg-1/95 backdrop-blur border rounded-md shadow-md transition-colors ${
          active ? 'border-accent' : 'border-border'
        }`}
      >
        <span
          class={`text-[10px] uppercase tracking-wider font-semibold ${
            active ? 'text-accent' : 'text-text-2'
          }`}
        >
          Fly
        </span>
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={STEP}
          value={v}
          aria-label="Fly speed"
          onInput={(e) => {
            flySpeed.value = Number((e.target as HTMLInputElement).value);
          }}
          class="w-28 accent-accent"
        />
        <span class="text-[11px] tabular-nums text-text-1 w-12 text-right">
          {v.toFixed(1)} m/s
        </span>
      </div>
    </div>
  );
}
