import {
  BoolField,
  bumpOptions,
  NumberField,
  optionsTick,
  RangeField,
  Row,
  Section,
} from 'shared';
import { getBakerOrchestrator } from './orchestrator';

export function ProbesPage() {
  void optionsTick.value;
  const app = getBakerOrchestrator();
  if (!app) return null;
  const o = app.options;
  const spacing = o.probeSpacing ?? 1.25;
  const padding = o.probePadding ?? 0;
  const maxProbes = o.probeMaxProbes ?? 4096;
  const sampleStride = o.probeSampleStride ?? 3;
  const fillIterations = o.probeFillIterations ?? 5;
  const intensity = o.probeIntensity ?? 1;
  const showProbes = o.probeShow ?? true;
  const showDemo = o.probeDemoEnabled ?? true;
  const animateDemo = o.probeDemoAnimate ?? true;
  const status = o.probeStatus ?? 'idle';
  const progress = o.probeProgress ?? 0;
  const probeCount = o.probeCount ?? 0;
  const generating = status === 'generating';
  const available = !!app.generateProbes;

  const refreshPreview = (): void => {
    bumpOptions();
    app.previewProbes?.();
  };

  return (
    <div class="text-[12px]">
      <Section title="Probe volume">
        <Row label="Spacing" hint="World-space distance between probes. The blue grid updates immediately.">
          <RangeField
            value={spacing}
            min={0.2}
            max={3}
            step={0.05}
            onChange={(value) => {
              o.probeSpacing = value;
              refreshPreview();
            }}
          />
        </Row>
        <Row label="Padding" hint="Expands the probe volume around the scene. Preview updates without rebaking.">
          <RangeField
            value={padding}
            min={0}
            max={2}
            step={0.05}
            onChange={(value) => {
              o.probePadding = value;
              refreshPreview();
            }}
          />
        </Row>
        <Row label="Maximum" hint="Safety cap. Spacing is fitted upward automatically when the grid would exceed it.">
          <NumberField
            value={maxProbes}
            min={64}
            max={16384}
            step={64}
            onChange={(value) => {
              o.probeMaxProbes = Math.floor(value);
              refreshPreview();
            }}
          />
        </Row>
        <Row label="Layout">
          <div class="flex-1 text-right font-mono text-[11px] text-text-2">
            {probeCount > 0 ? `${probeCount} probes` : 'No preview'}
          </div>
        </Row>
      </Section>

      <Section title="Generation">
        <Row label="Atlas stride" hint="Read every Nth lightmap texel while building the probe field.">
          <NumberField
            value={sampleStride}
            min={1}
            max={16}
            step={1}
            onChange={(value) => {
              o.probeSampleStride = Math.floor(value);
              bumpOptions();
            }}
          />
        </Row>
        <Row label="Fill passes" hint="Six-neighbour diffusion passes for probes with no direct surface samples.">
          <NumberField
            value={fillIterations}
            min={0}
            max={16}
            step={1}
            onChange={(value) => {
              o.probeFillIterations = Math.floor(value);
              bumpOptions();
            }}
          />
        </Row>
        <Row label="Status">
          <div class="flex-1 text-right font-mono text-[11px] text-text-2">
            {status === 'generating'
              ? `${Math.round(progress * 100)}%`
              : status === 'ready'
                ? `${probeCount} lit probes`
                : status === 'preview'
                  ? `${probeCount} layout preview`
                  : status}
          </div>
        </Row>
        <div class="px-3 pb-3 flex gap-2">
          <button
            type="button"
            disabled={!available || generating}
            class="flex-1 px-3 py-1.5 rounded bg-accent text-white disabled:opacity-40 hover:brightness-110 transition"
            onClick={() => void app.generateProbes?.()}
          >
            {generating ? 'Generating…' : 'Generate Probe Lighting'}
          </button>
          <button
            type="button"
            disabled={generating || probeCount === 0}
            class="px-3 py-1.5 rounded bg-bg-3 border border-border disabled:opacity-40 hover:bg-bg-4 transition"
            onClick={() => {
              app.clearProbes?.();
              bumpOptions();
            }}
          >
            Clear
          </button>
        </div>
      </Section>

      <Section title="Display and runtime">
        <Row label="Show probes">
          <BoolField
            value={showProbes}
            onChange={(value) => {
              o.probeShow = value;
              app.setProbeVisibility?.(value);
              bumpOptions();
            }}
          />
        </Row>
        <Row label="Intensity">
          <RangeField
            value={intensity}
            min={0}
            max={4}
            step={0.05}
            onChange={(value) => {
              o.probeIntensity = value;
              app.setProbeIntensity?.(value);
              bumpOptions();
            }}
          />
        </Row>
        <Row label="Demo sphere">
          <BoolField
            value={showDemo}
            onChange={(value) => {
              o.probeDemoEnabled = value;
              app.setProbeDemoEnabled?.(value);
              bumpOptions();
            }}
          />
        </Row>
        <Row label="Animate demo">
          <BoolField
            value={animateDemo}
            onChange={(value) => {
              o.probeDemoAnimate = value;
              app.setProbeDemoAnimation?.(value);
              bumpOptions();
            }}
          />
        </Row>
      </Section>

      <div class="px-3 py-2 text-[11px] leading-4 text-text-3">
        Blue spheres are a layout-only preview. Generate Probe Lighting replaces them with colors sampled from the current baked lightmap. The demo object remains physically based and is excluded from static baking.
      </div>
    </div>
  );
}
