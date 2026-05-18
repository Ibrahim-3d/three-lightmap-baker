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
 * Lightmap tab: per-mesh density multiplier + exclude-from-bake. Edits land in
 * `orchestrator.options.perMesh[uuid]` and flag the bake stale.
 */
export function LightmapPage() {
  void optionsTick.value; // re-render on perMesh writes
  const obj = lookupSelected(selectedId.value);
  if (!isMesh(obj)) {
    return (
      <div class="p-2 italic text-text-2 text-[12px]">Lightmap settings need a mesh selected.</div>
    );
  }

  const app = getBakerOrchestrator();
  if (!app) return null;
  const options = app.options;

  if (!options.perMesh[obj.uuid]) {
    options.perMesh[obj.uuid] = { scaleInLightmap: 1.0, exclude: false };
  }
  const entry = options.perMesh[obj.uuid]!;

  return (
    <div class="text-[12px]">
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
    </div>
  );
}
