import { useRef } from 'preact/hooks';
import { Color, EquirectangularReflectionMapping } from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import {
  BoolField,
  bumpObject,
  bumpOptions,
  ColorField,
  hdriTexture,
  markStale,
  cameraFOV,
  NumberField,
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
 * (shared baker GI fill + PT sky), PT-specific DOF, HDRI environment, and
 * future probe slot.
 *
 * HDRI file picker loads a .hdr file via RGBELoader and stores the resulting
 * DataTexture in the `hdriTexture` signal. PTController reads that signal
 * each frame and uploads it to the `tHDRTexture` / `uHasSkyTexture` uniforms.
 */
export function WorldPage() {
  void objectTick.value;
  void optionsTick.value;
  const hdriInputRef = useRef<HTMLInputElement | null>(null);
  const app = getBakerOrchestrator();
  if (!app) return null;
  const scene = app.getScene();
  const o = app.options;
  const pt = ptSettings.value;
  const isPT = renderMode.value === 'pathtraced';
  const hasHDRI = hdriTexture.value !== null;

  const bgHex =
    scene.background instanceof Color
      ? `#${(scene.background as Color).getHexString()}`
      : '#000000';

  const loadHDRI = (file: File): void => {
    const url = URL.createObjectURL(file);
    const loader = new RGBELoader();
    loader.load(
      url,
      (tex) => {
        URL.revokeObjectURL(url);
        // EquirectangularReflectionMapping required for correct panoramic projection.
        tex.mapping = EquirectangularReflectionMapping;
        // Dispose old HDRI texture if any.
        hdriTexture.value?.dispose();
        hdriTexture.value = tex;
      },
      undefined,
      (err) => {
        URL.revokeObjectURL(url);
        console.error('[WorldPage] HDRI load failed:', err);
      },
    );
  };

  const sc = (
    app as unknown as {
      sceneController?: {
        setView?(v: 'front' | 'right' | 'top' | 'persp'): void;
        setCameraFov?(v: number): void;
      };
    }
  ).sceneController;

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

      <Section title="Camera">
        <Row label="FOV" hint="Field of view in degrees. Hotkeys 1 / 3 / 7 / 0 jump views.">
          <RangeField
            value={cameraFOV.value}
            min={10}
            max={120}
            step={1}
            onChange={(v) => {
              cameraFOV.value = v;
              bumpObject();
            }}
          />
        </Row>
        <Row label="Views" hint="Blender-style numpad: 1 Front, 3 Right, 7 Top, 0 Persp.">
          <div class="flex flex-wrap gap-1">
            {(['front', 'right', 'top', 'persp'] as const).map((v) => (
              <button
                key={v}
                type="button"
                class="px-2 py-0.5 text-[10px] rounded bg-bg-2 hover:bg-accent hover:text-white border border-border transition-colors uppercase"
                onClick={() => sc?.setView?.(v)}
              >
                {v}
              </button>
            ))}
          </div>
        </Row>
      </Section>

      <Section title="Sky / Environment  (baker + PT)">
        <Row
          label="Color"
          hint="Ambient sky tint - GI miss-hit fill in bake and sky color in path tracer."
        >
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
              ptSettings.value = { ...ptSettings.value, skyIntensity: v };
              bumpOptions();
              markStale();
            }}
          />
        </Row>
      </Section>

      <Section title="Bake - Direct &amp; Indirect (master)">
        <Row label="Direct on" hint="Master switch for all scene direct lights at bake time.">
          <BoolField
            value={o.directLightEnabled}
            onChange={(v) => {
              o.directLightEnabled = v;
              bumpOptions();
              markStale();
            }}
          />
        </Row>
        <Row label="Indirect on" hint="Master switch for the GI bounce pass.">
          <BoolField
            value={o.indirectLightEnabled}
            onChange={(v) => {
              o.indirectLightEnabled = v;
              bumpOptions();
              markStale();
            }}
          />
        </Row>
        <Row label="Bounce power" hint="Multiplier on indirect-bounce contribution.">
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

      <Section title="Bake - Secondary Sun (legacy)">
        <Row
          label="Enabled"
          hint="Bake-only directional sun in addition to scene lights. For a viewport-visible sun, drag in a Sun light from the asset library instead."
        >
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

      <Section title="Environment HDRI  (PT only)">
        <Row label="File" hint="Load a .hdr equirectangular environment map for PT mode.">
          <div class="flex gap-1 items-center">
            <button
              type="button"
              class="px-2 py-0.5 rounded text-[11px] bg-bg-3 hover:bg-accent hover:text-white border border-border transition-colors"
              onClick={() => hdriInputRef.current?.click()}
            >
              {hasHDRI ? 'Replace' : 'Load .hdr'}
            </button>
            {hasHDRI && (
              <button
                type="button"
                class="px-2 py-0.5 rounded text-[11px] bg-bg-3 hover:bg-red-700 hover:text-white border border-border transition-colors"
                onClick={() => {
                  hdriTexture.value?.dispose();
                  hdriTexture.value = null;
                }}
                title="Remove HDRI (use procedural sky)"
              >
                ✕
              </button>
            )}
            <span class="text-text-2 text-[10px]">{hasHDRI ? 'loaded' : 'none'}</span>
          </div>
          <input
            ref={hdriInputRef}
            type="file"
            accept=".hdr"
            class="hidden"
            onChange={(e) => {
              const f = (e.target as HTMLInputElement).files?.[0];
              if (f) loadHDRI(f);
            }}
          />
        </Row>
      </Section>

      {isPT && (
        <Section title="Path Tracer - Depth of Field">
          <Row label="Aperture" hint="0 = pinhole (sharp everywhere); increase for lens blur.">
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
          <Row label="Focus dist" hint="Distance to the focal plane in world units.">
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
          <Row
            label="Light scale"
            hint="Global multiplier for scene lights in PT mode (default 0.15)."
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
        </Section>
      )}

      <Section title="Light Probes (SH)">
        <Row label="Probes">
          <span class="text-[11px] text-text-2 italic">Task 11 - Spherical Harmonics</span>
        </Row>
      </Section>
    </div>
  );
}
