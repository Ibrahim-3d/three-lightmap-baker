import {
  BoolField,
  bumpOptions,
  NumberField,
  optionsTick,
  RangeField,
  Row,
  Section,
  SelectField,
} from 'shared';
import { getBakerOrchestrator } from './orchestrator';

const RUNTIME_DEFAULTS = {
  native: { spacing: 1.25, maxProbes: 1024 },
  legacy: { spacing: 0.65, maxProbes: 8192 },
} as const;

export function ProbesPage() {
  void optionsTick.value;
  const app = getBakerOrchestrator();
  if (!app) return null;
  const o = app.options;
  const runtime = o.probeRuntime === 'legacy' ? 'legacy' : 'native';
  const spacing = o.probeSpacing ?? RUNTIME_DEFAULTS[runtime].spacing;
  const padding = o.probePadding ?? 0.1;
  const maxProbes = o.probeMaxProbes ?? RUNTIME_DEFAULTS[runtime].maxProbes;
  const cubemapSize = o.probeCubemapSize ?? 8;
  const sampleStride = o.probeSampleStride ?? 3;
  const fillIterations = o.probeFillIterations ?? 5;
  const intensity = o.probeIntensity ?? 1;
  const showProbes = o.probeShow ?? true;
  const showDemo = o.probeDemoEnabled ?? true;
  const animateDemo = o.probeDemoAnimate ?? true;
  const status = o.probeStatus ?? 'idle';
  const progress = o.probeProgress ?? 0;
  const probeCount = o.probeCount ?? 0;
  const previewCount = o.probePreviewCount ?? 0;
  const previewOverLimit = o.probePreviewOverLimit ?? false;
  const generating = status === 'generating';
  const available = !!app.generateProbes;

  const refreshPreview = (): void => {
    if (runtime === 'native' && probeCount > 0) o.probeStatus = 'stale';
    bumpOptions();
    app.previewProbes?.();
  };

  return (
    <div class="text-[12px]">
      <Section title="Probe volume">
        <Row
          label="Runtime"
          hint="Native Three.js L2 SH is preferred; the existing RGB volume remains available as a fallback."
        >
          <SelectField
            value={runtime}
            options={[
              { value: 'native', label: 'Three.js L2 SH (GPU)' },
              { value: 'legacy', label: 'Legacy RGB volume' },
            ]}
            onChange={(value) => {
              const previousDefaults = RUNTIME_DEFAULTS[runtime];
              const nextDefaults = RUNTIME_DEFAULTS[value];
              if (o.probeSpacing === undefined || o.probeSpacing === previousDefaults.spacing) {
                o.probeSpacing = nextDefaults.spacing;
              }
              if (
                o.probeMaxProbes === undefined ||
                o.probeMaxProbes === previousDefaults.maxProbes
              ) {
                o.probeMaxProbes = nextDefaults.maxProbes;
              }
              o.probeRuntime = value;
              app.clearProbes?.();
              bumpOptions();
            }}
          />
        </Row>
        <Row
          label="Target spacing"
          hint="Maximum world-space step. Endpoint fitting may make the actual spacing smaller."
        >
          <RangeField
            value={spacing}
            min={0.2}
            max={2}
            step={0.05}
            onChange={(value) => {
              o.probeSpacing = value;
              refreshPreview();
            }}
          />
        </Row>
        <Row label="Padding" hint="World-space expansion around the baked scene bounds.">
          <RangeField
            value={padding}
            min={0}
            max={1}
            step={0.05}
            onChange={(value) => {
              o.probePadding = value;
              refreshPreview();
            }}
          />
        </Row>
        <Row label="Maximum" hint="Hard safety cap; target spacing is never enlarged silently.">
          <NumberField
            value={maxProbes}
            min={64}
            max={32768}
            step={64}
            onChange={(value) => {
              o.probeMaxProbes = Math.floor(value);
              refreshPreview();
            }}
          />
        </Row>
        <Row label="Target layout">
          <div
            class={`flex-1 text-right font-mono text-[11px] ${previewOverLimit ? 'text-red-400' : 'text-text-2'}`}
          >
            {previewCount > 0
              ? previewOverLimit
                ? `${previewCount} / ${maxProbes} — over limit`
                : `${previewCount} positions`
              : 'No preview'}
          </div>
        </Row>
      </Section>

      <Section title="Generation">
        {runtime === 'native' ? (
          <Row
            label="Cubemap size"
            hint="Per-face resolution Three.js projects into each probe's L2 SH coefficients."
          >
            <SelectField
              value={String(cubemapSize)}
              options={[
                { value: '4', label: '4 px (fast)' },
                { value: '8', label: '8 px (recommended)' },
                { value: '16', label: '16 px (high)' },
              ]}
              onChange={(value) => {
                o.probeCubemapSize = Number(value);
                if (probeCount > 0) o.probeStatus = 'stale';
                bumpOptions();
              }}
            />
          </Row>
        ) : (
          <>
            <Row
              label="Atlas stride"
              hint="Read every Nth lightmap texel while building the legacy field."
            >
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
            <Row
              label="Fill passes"
              hint="Six-neighbour diffusion passes for unsampled legacy probes."
            >
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
          </>
        )}
        <Row label="Status">
          <div class="flex-1 text-right font-mono text-[11px] text-text-2">
            {status === 'generating'
              ? `${Math.round(progress * 100)}%`
              : status === 'ready'
                ? `${probeCount} ${runtime === 'native' ? 'L2 SH' : 'RGB'} probes`
                : status === 'stale'
                  ? 'Settings changed — recapture'
                  : status}
          </div>
        </Row>
        <div class="px-3 pb-3 flex gap-2">
          <button
            type="button"
            disabled={!available || generating || previewOverLimit}
            class="flex-1 px-3 py-1.5 rounded bg-accent text-white disabled:opacity-40 hover:brightness-110 transition"
            onClick={() => void app.generateProbes?.()}
          >
            {generating
              ? runtime === 'native'
                ? 'Capturing…'
                : 'Generating…'
              : runtime === 'native'
                ? 'Capture Native L2 SH'
                : 'Generate Legacy RGB'}
          </button>
          <button
            type="button"
            disabled={generating || (probeCount === 0 && previewCount === 0)}
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
        <Row label={runtime === 'native' ? 'Capture intensity' : 'Intensity'}>
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
        {runtime === 'native'
          ? 'After the path-traced lightmap bake, Three.js captures the baked static scene into a GPU L2 SH grid. The demo sphere uses the native renderer; capture changes require recapture.'
          : 'Legacy RGB volumes remain available for comparison and fallback. They use atlas projection, CPU interpolation, and the existing material binding.'}
      </div>
    </div>
  );
}
