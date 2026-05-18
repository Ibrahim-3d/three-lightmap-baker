import { Color } from 'three';
import { getOrchestrator } from '../../../state/orchestrator';
import { objectTick, optionsTick, ptSettings, renderMode } from '../../../state/signals';
import { ColorField, RangeField, Row, Section } from './Field';
import { bumpObject, bumpOptions, markStale } from './helpers';

/**
 * World tab. Scene-level settings: background, sky (shared baker+PT),
 * PT-specific DOF, and light-probe slot (Task 11).
 *
 * Sky Intensity and Sky Color control BOTH the baker's GI miss-hit fill AND
 * the path tracer's environment sky — one slider drives both.
 */
export function WorldPage() {
    objectTick.value;
    optionsTick.value;
    const app = getOrchestrator();
    if (!app) return null;
    const sc = (app as unknown as { sceneController: { scene: { background: Color | null } } }).sceneController;
    const o = (app as unknown as {
        options: { skyColor: string; skyIntensity: number };
    }).options;
    const pt   = ptSettings.value;
    const isPT = renderMode.value === 'pathtraced';

    const bgHex = sc.scene.background instanceof Color
        ? `#${(sc.scene.background as Color).getHexString()}`
        : '#000000';

    return (
        <div class="text-[12px]">
            <Section title="Viewport background">
                <Row label="Color">
                    <ColorField
                        value={bgHex}
                        onChange={(hex) => {
                            const c = new Color(hex);
                            sc.scene.background = c;
                            bumpObject();
                        }}
                    />
                </Row>
            </Section>

            <Section title="Sky / Environment  (baker + PT)">
                <Row label="Color" hint="Ambient sky tint — used as GI miss-hit fill in bake and as sky color in path tracer.">
                    <ColorField
                        value={o.skyColor}
                        onChange={(hex) => {
                            o.skyColor = hex;
                            bumpOptions();
                            markStale();
                        }}
                    />
                </Row>
                <Row label="Intensity" hint="Controls sky brightness in BOTH the baker (GI fill) and the path tracer (environment light). 0 = closed room.">
                    <RangeField
                        value={pt.skyIntensity}
                        min={0}
                        max={4}
                        step={0.05}
                        onChange={(v) => {
                            // Sync to both baker option and PT signal
                            o.skyIntensity = v;
                            ptSettings.value = { ...pt, skyIntensity: v };
                            bumpOptions();
                            markStale();
                        }}
                    />
                </Row>
            </Section>

            {isPT && (
                <Section title="Path Tracer — Lighting">
                    <Row label="Light Scale" hint="Global multiplier for all scene lights. Reduce if surfaces look blown-out white; increase if scene is too dark. Each scene may need different tuning.">
                        <RangeField
                            value={pt.lightScale}
                            min={0.01}
                            max={1.0}
                            step={0.01}
                            onChange={(v) => {
                                ptSettings.value = { ...pt, lightScale: v };
                            }}
                        />
                    </Row>
                </Section>
            )}
            {isPT && (
                <Section title="Path Tracer — Depth of Field">
                    <Row label="Aperture" hint="0 = pinhole (no blur). Increase for lens bokeh.">
                        <RangeField
                            value={pt.aperture}
                            min={0}
                            max={0.5}
                            step={0.005}
                            onChange={(v) => {
                                ptSettings.value = { ...pt, aperture: v };
                            }}
                        />
                    </Row>
                    <Row label="Focus dist" hint="Distance to focal plane in world units.">
                        <RangeField
                            value={pt.focusDist}
                            min={1}
                            max={500}
                            step={1}
                            onChange={(v) => {
                                ptSettings.value = { ...pt, focusDist: v };
                            }}
                        />
                    </Row>
                </Section>
            )}

            <Section title="Environment HDRI">
                <Row label="HDRI">
                    <span class="text-[11px] text-text-2 italic">slot — wired in a later phase</span>
                </Row>
            </Section>

            <Section title="Light Probes (SH)">
                <Row label="Probes">
                    <span class="text-[11px] text-text-2 italic">Task 11 — Spherical Harmonics</span>
                </Row>
            </Section>
        </div>
    );
}
