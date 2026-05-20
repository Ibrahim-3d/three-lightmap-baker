import {
  BoolField,
  bumpOptions,
  isMesh,
  lookupSelected,
  markStale,
  optionsTick,
  RangeField,
  Row,
  Section,
  selectedId,
} from 'shared';
import { getBakerOrchestrator } from './orchestrator';

/**
 * Lightmap tab. Always shows view-time Layer Intensities (global composite
 * uniforms). Per-mesh sections render only when a mesh is selected.
 */
export function LightmapPage() {
  void optionsTick.value;
  const app = getBakerOrchestrator();
  if (!app) return null;
  const options = app.options;
  const obj = lookupSelected(selectedId.value);
  const meshSelected = isMesh(obj);

  if (meshSelected && !options.perMesh[obj.uuid]) {
    options.perMesh[obj.uuid] = { scaleInLightmap: 1.0, exclude: false };
  }
  const entry = meshSelected ? options.perMesh[obj.uuid]! : null;

  return (
    <div class="text-[12px]">
      <Section title="Layer Intensities (view-time)">
        <Row
          label="Direct"
          hint="Multiplier on the direct-lighting pass at composite time. No rebake."
        >
          <RangeField
            value={options.directIntensity}
            min={0}
            max={3}
            step={0.05}
            onChange={(v) => {
              options.directIntensity = v;
              app.refreshComposites({ directIntensity: v });
              bumpOptions();
            }}
          />
        </Row>
        <Row label="Indirect (GI)" hint="Multiplier on the indirect-bounce pass at composite time.">
          <RangeField
            value={options.giIntensity}
            min={0}
            max={4}
            step={0.05}
            onChange={(v) => {
              options.giIntensity = v;
              app.refreshComposites({ giIntensity: v });
              bumpOptions();
            }}
          />
        </Row>
        <Row label="AO intensity" hint="Darkness applied by AO at composite time.">
          <RangeField
            value={options.aoIntensity}
            min={0}
            max={3}
            step={0.05}
            onChange={(v) => {
              options.aoIntensity = v;
              app.refreshComposites({ aoIntensity: v });
              bumpOptions();
            }}
          />
        </Row>
        <Row label="AO exponent" hint="Curve on AO contact darkening. Higher = sharper contacts.">
          <RangeField
            value={options.aoExponent}
            min={0.5}
            max={4}
            step={0.1}
            onChange={(v) => {
              options.aoExponent = v;
              app.refreshComposites({ aoExponent: v });
              bumpOptions();
            }}
          />
        </Row>
      </Section>

      {meshSelected && entry ? (
        <>
          <Section title="Bake settings (per mesh)">
            <Row
              label="Density ×"
              hint="Multiplier on the global texels/m density for this mesh. Higher = more atlas area."
            >
              <RangeField
                value={entry.scaleInLightmap}
                min={0.25}
                max={4}
                step={0.25}
                onChange={(v) => {
                  entry.scaleInLightmap = v;
                  bumpOptions();
                  markStale();
                }}
              />
            </Row>
            <Row
              label="Exclude"
              hint="Skip this mesh during UV unwrap + bake. It still contributes to BVH (shadows/GI for other meshes)."
            >
              <BoolField
                value={entry.exclude}
                onChange={(v) => {
                  entry.exclude = v;
                  bumpOptions();
                  markStale();
                }}
              />
            </Row>
          </Section>

          <Section title="UV2 status">
            <Row label="UV2 channel">
              <span class="text-[11px] text-text-1 font-mono">
                {obj.geometry.attributes.uv2 ? 'present' : 'rebake to generate'}
              </span>
            </Row>
          </Section>
        </>
      ) : (
        <div class="p-2 italic text-text-2 text-[12px]">
          Select a mesh in the Outliner to edit its per-mesh bake settings.
        </div>
      )}
    </div>
  );
}
