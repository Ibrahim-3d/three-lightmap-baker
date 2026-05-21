import {
  BoolField,
  ColorField,
  eslEnvEnabled,
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

      <Section title="Vignette">
        <Row label="Enabled">
          <BoolField value={s.vignetteEnabled} onChange={(v) => set('vignetteEnabled', v)} />
        </Row>
        <Row label="Strength" hint="Darkness applied to frame corners.">
          <RangeField
            value={s.vignetteStrength}
            min={0}
            max={2}
            step={0.01}
            onChange={(v) => set('vignetteStrength', v)}
          />
        </Row>
      </Section>

      <Section title="Bloom 2 (Soft Global Glow)">
        <Row label="Enabled" hint="ESL secondary bloom: large kernel, low threshold.">
          <BoolField value={s.bloom2Enabled} onChange={(v) => set('bloom2Enabled', v)} />
        </Row>
        <Row label="Strength">
          <RangeField value={s.bloom2Strength} min={0} max={3} step={0.05} onChange={(v) => set('bloom2Strength', v)} />
        </Row>
        <Row label="Radius">
          <RangeField value={s.bloom2Radius} min={0} max={1} step={0.01} onChange={(v) => set('bloom2Radius', v)} />
        </Row>
        <Row label="Threshold">
          <RangeField value={s.bloom2Threshold} min={0} max={2} step={0.01} onChange={(v) => set('bloom2Threshold', v)} />
        </Row>
      </Section>

      <Section title="Hue / Saturation">
        <Row label="Enabled">
          <BoolField value={s.hueSatEnabled} onChange={(v) => set('hueSatEnabled', v)} />
        </Row>
        <Row label="Hue shift">
          <RangeField value={s.hue} min={-1} max={1} step={0.01} onChange={(v) => set('hue', v)} />
        </Row>
        <Row label="Saturation">
          <RangeField value={s.saturation} min={-1} max={1} step={0.01} onChange={(v) => set('saturation', v)} />
        </Row>
      </Section>

      <Section title="Gamma">
        <Row label="Gamma" hint="< 1 = crush blacks, > 1 = lift midtones.">
          <RangeField value={s.gamma} min={0.4} max={2.2} step={0.01} onChange={(v) => set('gamma', v)} />
        </Row>
      </Section>

      <Section title="Fog (Exponential²)">
        <Row label="Enabled">
          <BoolField value={s.fogEnabled} onChange={(v) => set('fogEnabled', v)} />
        </Row>
        <Row label="Color">
          <ColorField
            value={`#${s.fogColor.toString(16).padStart(6, '0')}`}
            onChange={(hex) => set('fogColor', parseInt(hex.replace('#', ''), 16))}
          />
        </Row>
        <Row label="Density">
          <RangeField value={s.fogDensity} min={0} max={0.02} step={0.0001} onChange={(v) => set('fogDensity', v)} />
        </Row>
      </Section>

      <Section title="Lens Distortion">
        <Row label="Enabled" hint="ESL chromatic-aberration barrel distortion.">
          <BoolField value={s.lensDistortionEnabled} onChange={(v) => set('lensDistortionEnabled', v)} />
        </Row>
        <Row label="Base IOR">
          <RangeField value={s.baseIor} min={0.8} max={1.05} step={0.001} onChange={(v) => set('baseIor', v)} />
        </Row>
        <Row label="Band offset">
          <RangeField value={s.bandOffset} min={0} max={0.01} step={0.0001} onChange={(v) => set('bandOffset', v)} />
        </Row>
        <Row label="Jitter">
          <RangeField value={s.jitterIntensity} min={0} max={10} step={0.1} onChange={(v) => set('jitterIntensity', v)} />
        </Row>
      </Section>

      <Section title="HDR Environment (ESL)">
        <Row label="Enable HDR" hint="One-click: scene.environmentIntensity + per-material envMapIntensity → 1.">
          <BoolField value={eslEnvEnabled.value} onChange={(v) => { eslEnvEnabled.value = v; }} />
        </Row>
      </Section>
    </div>
  );
}
