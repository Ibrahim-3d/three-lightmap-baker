import { getOrchestrator } from '../../../state/orchestrator';
import { optionsTick, selectedId } from '../../../state/signals';
import { BoolField, RangeField, Row, Section } from './Field';
import { bumpOptions, isMesh, lookupSelected, markStale } from './helpers';

/**
 * Lightmap tab: per-mesh density multiplier + exclude-from-bake. Edits land in
 * `orchestrator.options.perMesh[uuid]` and flag the bake stale.
 */
export function LightmapPage() {
    optionsTick.value; // re-render on perMesh writes
    const obj = lookupSelected(selectedId.value);
    if (!isMesh(obj)) {
        return <div class="p-2 italic text-text-2 text-[12px]">Lightmap settings need a mesh selected.</div>;
    }

    const app = getOrchestrator();
    if (!app) return null;
    const options = (app as unknown as {
        options: {
            perMesh: Record<string, { scaleInLightmap: number; exclude: boolean }>;
        };
    }).options;

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
                <Row label="Exclude" hint="Skip this mesh during UV unwrap + bake. It still contributes to BVH (shadows/GI for other meshes).">
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
