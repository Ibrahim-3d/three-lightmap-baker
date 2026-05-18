import { getOrchestrator } from '../../../state/orchestrator';
import { optionsTick, selectedId } from '../../../state/signals';
import { BoolField, ColorField, NumberField, RangeField, Row, Section } from './Field';
import { bumpOptions, markStale } from './helpers';

const LIGHT_DUMMY_ID = 'light:dummy';

/**
 * Light tab. The Cornell demo's "scene light" is a 1-light setup driven through
 * `options.light*` (its 3D position is the lightDummy object). T-D7 will add
 * per-light editing once add-light is supported.
 *
 * Selecting the lightDummy in the outliner routes here. Selecting any other
 * object falls through to the "select scene light" empty state.
 */
export function LightPage() {
  optionsTick.value;
  const id = selectedId.value;
  const app = getOrchestrator();
  if (!app || id !== LIGHT_DUMMY_ID) {
    return (
      <div class="p-2 italic text-text-2 text-[12px]">
        Select the Scene Light in the Outliner to edit it.
      </div>
    );
  }
  const o = app.options;

  return (
    <div class="text-[12px]">
      <Section title="Primary (Area)">
        <Row label="Enabled">
          <BoolField
            value={o.directLightEnabled}
            onChange={(v) => {
              o.directLightEnabled = v;
              bumpOptions();
              markStale();
            }}
          />
        </Row>
        <Row label="Color">
          <ColorField
            value={o.lightColor}
            onChange={(v) => {
              o.lightColor = v;
              bumpOptions();
              markStale();
            }}
          />
        </Row>
        <Row label="Intensity">
          <RangeField
            value={o.lightIntensity}
            min={0}
            max={15}
            step={0.1}
            onChange={(v) => {
              o.lightIntensity = v;
              bumpOptions();
              markStale();
            }}
          />
        </Row>
        <Row label="Source size" hint="Radius of the disc-shaped emitter. Larger = softer shadows.">
          <RangeField
            value={o.lightSize}
            min={0.1}
            max={5}
            step={0.1}
            onChange={(v) => {
              o.lightSize = v;
              bumpOptions();
              markStale();
            }}
          />
        </Row>
      </Section>

      <Section title="Global Illumination">
        <Row label="Indirect on">
          <BoolField
            value={o.indirectLightEnabled}
            onChange={(v) => {
              o.indirectLightEnabled = v;
              bumpOptions();
              markStale();
            }}
          />
        </Row>
        <Row label="Bounce power">
          <RangeField
            value={o.giIntensity}
            min={0}
            max={4}
            step={0.05}
            onChange={(v) => {
              o.giIntensity = v;
              bumpOptions();
            }}
          />
        </Row>
      </Section>

      <Section title="Secondary (Directional / Sun)">
        <Row label="Enabled">
          <BoolField
            value={o.secondaryLightEnabled}
            onChange={(v) => {
              o.secondaryLightEnabled = v;
              bumpOptions();
              markStale();
            }}
          />
        </Row>
        <Row label="Color">
          <ColorField
            value={o.secondaryColor}
            onChange={(v) => {
              o.secondaryColor = v;
              bumpOptions();
              markStale();
            }}
          />
        </Row>
        <Row label="Intensity">
          <RangeField
            value={o.secondaryIntensity}
            min={0}
            max={5}
            step={0.1}
            onChange={(v) => {
              o.secondaryIntensity = v;
              bumpOptions();
              markStale();
            }}
          />
        </Row>
        <Row label="Dir X">
          <NumberField
            value={o.secondaryDirX}
            min={-1}
            max={1}
            step={0.05}
            onChange={(v) => {
              o.secondaryDirX = v;
              bumpOptions();
              markStale();
            }}
          />
        </Row>
        <Row label="Dir Y">
          <NumberField
            value={o.secondaryDirY}
            min={-1}
            max={1}
            step={0.05}
            onChange={(v) => {
              o.secondaryDirY = v;
              bumpOptions();
              markStale();
            }}
          />
        </Row>
        <Row label="Dir Z">
          <NumberField
            value={o.secondaryDirZ}
            min={-1}
            max={1}
            step={0.05}
            onChange={(v) => {
              o.secondaryDirZ = v;
              bumpOptions();
              markStale();
            }}
          />
        </Row>
      </Section>
    </div>
  );
}
