import { Color } from 'three';
import {
  bumpObject,
  bumpOptions,
  ColorField,
  markStale,
  objectTick,
  optionsTick,
  RangeField,
  Row,
  Section,
} from 'shared';
import { getBakerOrchestrator } from './orchestrator';

/**
 * World tab. Scene-level settings: viewport background, sky color/intensity (a
 * miss-hit fill added during GI), Env HDRI slot (T-future), light-probe slot
 * (Task 11).
 */
export function WorldPage() {
  void objectTick.value;
  void optionsTick.value;
  const app = getBakerOrchestrator();
  if (!app) return null;
  const scene = app.getScene();
  const o = app.options;

  const bgHex =
    scene.background instanceof Color
      ? `#${(scene.background as Color).getHexString()}`
      : '#000000';

  return (
    <div class="text-[12px]">
      <Section title="Viewport background">
        <Row label="Color">
          <ColorField
            value={bgHex}
            onChange={(hex) => {
              const c = new Color(hex);
              scene.background = c;
              bumpObject();
            }}
          />
        </Row>
      </Section>

      <Section title="Sky (GI miss-hit fill)">
        <Row label="Color">
          <ColorField
            value={o.skyColor}
            onChange={(hex) => {
              o.skyColor = hex;
              bumpOptions();
              markStale();
            }}
          />
        </Row>
        <Row
          label="Intensity"
          hint="Fill added when GI rays miss the scene. Bumping it lights up otherwise-dark holes; 0 keeps the room closed."
        >
          <RangeField
            value={o.skyIntensity}
            min={0}
            max={4}
            step={0.05}
            onChange={(v) => {
              o.skyIntensity = v;
              bumpOptions();
              markStale();
            }}
          />
        </Row>
      </Section>

      <Section title="Environment HDRI">
        <Row label="HDRI">
          <span class="text-[11px] text-text-2 italic">slot — wired in a later phase</span>
        </Row>
      </Section>

      <Section title="Light Probes (SH)">
        <Row label="Probes">
          <span class="text-[11px] text-text-2 italic">Task 11 — Spherical Harmonics</span>
        </Row>
      </Section>
    </div>
  );
}
