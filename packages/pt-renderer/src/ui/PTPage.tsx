import { ptSettings, RangeField, Row, Section } from 'shared';

/**
 * Inspector tab — "Path Tracer" settings.
 * Registered by `registerPTRendererUI()` at boot.
 * Shows live PT controls: light scale, DOF, accumulation reset trigger.
 */
export function PTPage() {
  const pt = ptSettings.value;

  return (
    <div class="text-[12px]">
      <Section title="Sampling">
        <Row
          label="Light scale"
          hint="Global multiplier for all scene lights in PT mode. 0.15 works for most THREE.js scenes."
        >
          <RangeField
            value={pt.lightScale}
            min={0}
            max={2}
            step={0.01}
            onChange={(v) => {
              ptSettings.value = { ...ptSettings.value, lightScale: v };
            }}
          />
        </Row>
        <Row label="Sky intensity" hint="Environment sky brightness. Also drives baker GI fill.">
          <RangeField
            value={pt.skyIntensity}
            min={0}
            max={4}
            step={0.05}
            onChange={(v) => {
              ptSettings.value = { ...ptSettings.value, skyIntensity: v };
            }}
          />
        </Row>
      </Section>

      <Section title="Depth of Field">
        <Row label="Aperture" hint="0 = pinhole. Increase for background blur.">
          <RangeField
            value={pt.aperture}
            min={0}
            max={0.05}
            step={0.001}
            onChange={(v) => {
              ptSettings.value = { ...ptSettings.value, aperture: v };
            }}
          />
        </Row>
        <Row label="Focus dist" hint="Focal plane distance in world units.">
          <RangeField
            value={pt.focusDist}
            min={1}
            max={500}
            step={1}
            onChange={(v) => {
              ptSettings.value = { ...ptSettings.value, focusDist: v };
            }}
          />
        </Row>
      </Section>
    </div>
  );
}
