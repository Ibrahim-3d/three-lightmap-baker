import {
  BoolField,
  postFXSettings,
  RangeField,
  Row,
  Section,
  SelectField,
  type PostFXSettings,
} from 'shared';

/**
 * Post-FX panel (Unreal-style). Master toggle gates the whole composer; per-
 * effect sliders edit the live signal which SceneController reads each frame.
 * CLAUDE.md note: this panel exists for the showcase view; baker QA workflow
 * must keep master = off so bake quality issues are not hidden by bloom etc.
 */
function set<K extends keyof PostFXSettings>(key: K, value: PostFXSettings[K]): void {
  postFXSettings.value = { ...postFXSettings.value, [key]: value };
}

const TONE_MAP_OPTIONS = [
  { value: 'none', label: 'None' },
  { value: 'linear', label: 'Linear' },
  { value: 'reinhard', label: 'Reinhard' },
  { value: 'cineon', label: 'Cineon' },
  { value: 'aces', label: 'ACES Filmic' },
  { value: 'agx', label: 'AgX (ACES fallback)' },
] as const;

export function PostFXPage() {
  const s = postFXSettings.value;
  return (
    <div class="text-[12px]">
      <Section title="Master">
        <Row label="Enable Post-FX" hint="Bypass = bake-QA mode. Enable for the showcase view.">
          <BoolField value={s.master} onChange={(v) => set('master', v)} />
        </Row>
      </Section>

      <Section title="Tone Mapping">
        <Row label="Curve">
          <SelectField
            value={s.toneMapping}
            options={TONE_MAP_OPTIONS}
            onChange={(v) => set('toneMapping', v as PostFXSettings['toneMapping'])}
          />
        </Row>
        <Row label="Exposure">
          <RangeField
            value={s.exposure}
            min={0.1}
            max={4}
            step={0.05}
            onChange={(v) => set('exposure', v)}
          />
        </Row>
      </Section>

      <Section title="Ambient Occlusion (SSAO)">
        <Row label="Enabled">
          <BoolField value={s.ssaoEnabled} onChange={(v) => set('ssaoEnabled', v)} />
        </Row>
        <Row label="Intensity">
          <RangeField
            value={s.ssaoIntensity}
            min={0}
            max={2}
            step={0.05}
            onChange={(v) => set('ssaoIntensity', v)}
          />
        </Row>
        <Row label="Radius">
          <RangeField
            value={s.ssaoRadius}
            min={0.05}
            max={2}
            step={0.01}
            onChange={(v) => set('ssaoRadius', v)}
          />
        </Row>
      </Section>

      <Section title="Bloom">
        <Row label="Enabled">
          <BoolField value={s.bloomEnabled} onChange={(v) => set('bloomEnabled', v)} />
        </Row>
        <Row label="Strength">
          <RangeField
            value={s.bloomStrength}
            min={0}
            max={3}
            step={0.05}
            onChange={(v) => set('bloomStrength', v)}
          />
        </Row>
        <Row label="Radius">
          <RangeField
            value={s.bloomRadius}
            min={0}
            max={1}
            step={0.01}
            onChange={(v) => set('bloomRadius', v)}
          />
        </Row>
        <Row label="Threshold" hint="Only pixels brighter than this glow.">
          <RangeField
            value={s.bloomThreshold}
            min={0}
            max={2}
            step={0.01}
            onChange={(v) => set('bloomThreshold', v)}
          />
        </Row>
      </Section>
    </div>
  );
}
