import { getOrchestrator } from '../../../state/orchestrator';
import { optionsTick } from '../../../state/signals';
import { BoolField, NumberField, RangeField, Row, Section, SelectField } from './Field';
import { bumpOptions } from './helpers';

/** Bake tab: global bake settings. Writes go to `orchestrator.options` directly. */
export function BakePage() {
  optionsTick.value; // re-render on writes
  const app = getOrchestrator();
  if (!app) return null;
  const o = app.options;

  return (
    <div class="text-[12px]">
      <Section title="Quality">
        <Row label="Preset">
          <SelectField
            value={o.quality as 'Custom' | 'Draft' | 'Preview' | 'Production' | 'Final'}
            options={[
              { value: 'Custom', label: 'Custom' },
              { value: 'Draft', label: 'Draft' },
              { value: 'Preview', label: 'Preview' },
              { value: 'Production', label: 'Production' },
              { value: 'Final', label: 'Final' },
            ]}
            onChange={(v) => {
              app.setQuality(v);
              bumpOptions();
            }}
          />
        </Row>
        <Row label="Atlas size">
          <NumberField
            value={o.lightMapSize}
            min={128}
            max={2048}
            step={128}
            onChange={(v) => {
              o.lightMapSize = v;
              o.quality = 'Custom';
              bumpOptions();
            }}
          />
        </Row>
        <Row label="Density (px/m)">
          <RangeField
            value={o.texelsPerMeter}
            min={1}
            max={50}
            step={0.5}
            onChange={(v) => {
              o.texelsPerMeter = v;
              bumpOptions();
            }}
          />
        </Row>
      </Section>

      <Section title="Path tracer">
        <Row label="Casts/frame">
          <NumberField
            value={o.casts}
            min={1}
            max={16}
            step={1}
            onChange={(v) => {
              o.casts = v;
              o.quality = 'Custom';
              bumpOptions();
            }}
          />
        </Row>
        <Row label="Target frames">
          <NumberField
            value={o.targetSamples}
            min={16}
            max={1024}
            step={16}
            onChange={(v) => {
              o.targetSamples = v;
              o.quality = 'Custom';
              bumpOptions();
            }}
          />
        </Row>
        <Row label="Bounces">
          <NumberField
            value={o.bounces}
            min={1}
            max={4}
            step={1}
            onChange={(v) => {
              o.bounces = v;
              bumpOptions();
            }}
          />
        </Row>
        <Row
          label="Safe mode (TDR)"
          hint="Tile the path-tracer draw into 64×64 scissored blocks to stay under the GPU watchdog."
        >
          <BoolField
            value={o.safeMode}
            onChange={(v) => {
              o.safeMode = v;
              bumpOptions();
            }}
          />
        </Row>
      </Section>

      <Section title="Ambient occlusion">
        <Row label="Enabled">
          <BoolField
            value={o.ambientLightEnabled}
            onChange={(v) => {
              o.ambientLightEnabled = v;
              bumpOptions();
            }}
          />
        </Row>
        <Row label="Distance">
          <RangeField
            value={o.ambientDistance}
            min={0.05}
            max={2}
            step={0.05}
            onChange={(v) => {
              o.ambientDistance = v;
              bumpOptions();
            }}
          />
        </Row>
        <Row label="Samples">
          <NumberField
            value={o.aoSamples}
            min={0}
            max={32}
            step={1}
            onChange={(v) => {
              o.aoSamples = v;
              bumpOptions();
            }}
          />
        </Row>
        <Row label="Intensity">
          <RangeField
            value={o.aoIntensity}
            min={0}
            max={3}
            step={0.05}
            onChange={(v) => {
              o.aoIntensity = v;
              bumpOptions();
            }}
          />
        </Row>
        <Row label="Exponent">
          <RangeField
            value={o.aoExponent}
            min={0.5}
            max={4}
            step={0.1}
            onChange={(v) => {
              o.aoExponent = v;
              bumpOptions();
            }}
          />
        </Row>
      </Section>

      <Section title="Refinement">
        <Row label="Denoise">
          <BoolField
            value={o.denoiseEnabled}
            onChange={(v) => {
              o.denoiseEnabled = v;
              bumpOptions();
            }}
          />
        </Row>
        <Row label="Spatial sigma">
          <RangeField
            value={o.denoiseSigma}
            min={0.1}
            max={8}
            step={0.1}
            onChange={(v) => {
              o.denoiseSigma = v;
              bumpOptions();
            }}
          />
        </Row>
      </Section>

      <Section title="Workflow">
        <Row label="Auto-bake on edit">
          <BoolField
            value={o.autoBake}
            onChange={(v) => {
              o.autoBake = v;
              bumpOptions();
            }}
          />
        </Row>
      </Section>
    </div>
  );
}
