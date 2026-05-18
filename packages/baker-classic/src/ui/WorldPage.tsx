import { Color } from 'three';
import {
  bumpObject,
  bumpOptions,
  ColorField,
  markStale,
  objectTick,
  optionsTick,
  ptSettings,
  RangeField,
  Row,
  Section,
  renderMode,
} from 'shared';
import { getBakerOrchestrator } from './orchestrator';

/**
 * World tab. Scene-level settings: viewport background, sky color/intensity
 * (shared baker GI fill + PT sky), PT-specific DOF, and future probe slot.
 *
 * Sky Intensity and Sky Color drive BOTH the baker's GI miss-hit fill AND
 * the path tracer's environment sky — one slider controls both.
 */
export function WorldPage() {
  void objectTick.value;
  void optionsTick.value;
  const app = getBakerOrchestrator();
  if (!app) return null;
  const scene = app.getScene();
  const o = app.options;
  const pt = ptSettings.value;
  const isPT = renderMode.value === 'pathtraced';

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

      <Section title="Sky / Environment  (baker + PT)">
        <Row label="Color" hint="Ambient sky tint — GI miss-hit fill in bake and sky color in path tracer.">
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
          hint="Fill added when GI rays miss the scene. Also controls PT sky brightness."
        >
          <RangeField
            value={o.skyIntensity}
            min={0}
            max={4}
            step={0.05}
            onChange={(v) => {
              o.skyIntensity = v;
              // Sync to PT signal so PTController picks it up next frame.
              ptSettings.value = { ...ptSettings.value, skyIntensity: v };
              bumpOptions();
              markStale();
            }}
          />
        </Row>
      </Section>

      {isPT && (
        <Section title="Path Tracer — Depth of Field">
          <Row label="Aperture" hint="0 = pinhole (sharp everywhere); increase for lens blur.">
            <RangeField
              value={pt.aperture}
              min={0}
              max={0.05}
              step={0.001}
              onChange={(v) => { ptSettings.value = { ...ptSettings.value, aperture: v }; }}
            />
          </Row>
          <Row label="Focus dist" hint="Distance to the focal plane in world units.">
            <RangeField
              value={pt.focusDist}
              min={1}
              max={500}
              step={1}
              onChange={(v) => { ptSettings.value = { ...ptSettings.value, focusDist: v }; }}
            />
          </Row>
          <Row label="Light scale" hint="Global multiplier for scene lights in PT mode (default 0.15).">
            <RangeField
              value={pt.lightScale}
              min={0}
              max={2}
              step={0.01}
              onChange={(v) => { ptSettings.value = { ...ptSettings.value, lightScale: v }; }}
            />
          </Row>
        </Section>
      )}

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
