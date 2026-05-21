import { useMemo } from 'preact/hooks';
import {
  Color,
  type DirectionalLight,
  type Light,
  type Object3D,
  type PointLight,
  type RectAreaLight,
  type SpotLight,
} from 'three';
import {
  BoolField,
  bumpObject,
  ColorField,
  markStale,
  NumberField,
  objectTick,
  optionsTick,
  RangeField,
  Row,
  Section,
  selectedId,
} from 'shared';
import { getBakerOrchestrator } from './orchestrator';

/**
 * Light tab. Every light — including the scene's default area light — is now
 * an asset-library-style group (with `userData.bakerLightType`). Editing
 * mutates the THREE Light directly so the viewport preview updates in real
 * time. The baker walks the scene and reads each Light via
 * `collectLightsFromScene`; there is no options-mirror.
 */
export function LightPage() {
  void optionsTick.value;
  void objectTick.value;
  const id = selectedId.value;
  const app = getBakerOrchestrator();
  if (!app) return null;

  const obj = app.lookupObject(id);
  const lightType = obj?.userData?.bakerLightType as string | undefined;
  if (obj && lightType) return <SceneLightPage obj={obj} type={lightType} />;

  return (
    <div class="p-2 italic text-text-2 text-[12px]">
      Select a light in the Outliner to edit it, or drag one in from the Asset Library.
    </div>
  );
}

/**
 * Find the actual Light child inside a light Group (skip helper + target).
 * Returns the first descendant where `isLight === true`.
 */
function findLightChild(group: Object3D): Light | null {
  let found: Light | null = null;
  group.traverse((c) => {
    if (found) return;
    if ((c as Light).isLight) found = c as Light;
  });
  return found;
}

function colorToHex(c: Color): string {
  return `#${c.getHexString()}`;
}

function SceneLightPage({ obj, type }: { obj: Object3D; type: string }) {
  const light = useMemo(() => findLightChild(obj), [obj.uuid]);
  if (!light) {
    return (
      <div class="p-2 italic text-text-2 text-[12px]">
        Group has no Light child — unsupported configuration.
      </div>
    );
  }

  // Field hooks (read directly from the Light each render — `objectTick` causes
  // re-render after transform/gizmo mutations).
  const colorHex = colorToHex(light.color);
  const setColor = (hex: string): void => {
    light.color.set(new Color(hex));
    bumpObject();
    markStale();
  };
  const setIntensity = (v: number): void => {
    light.intensity = v;
    bumpObject();
    markStale();
  };

  const helperUpdate = (): void => {
    const h = (obj.userData?.lightHelper as { update?: () => void } | undefined) ?? null;
    h?.update?.();
  };

  return (
    <div class="text-[12px]">
      <Section title={`${labelForType(type)} Light`}>
        <Row label="Name">
          <input
            type="text"
            value={obj.name}
            class="w-full bg-bg-2 border border-border rounded px-1.5 py-0.5 text-[11px] text-text-0"
            onInput={(e) => {
              obj.name = (e.target as HTMLInputElement).value;
              bumpObject();
            }}
          />
        </Row>
        <Row label="Visible">
          <BoolField
            value={obj.visible}
            onChange={(v) => {
              obj.visible = v;
              bumpObject();
              markStale();
            }}
          />
        </Row>
        <Row label="Color">
          <ColorField value={colorHex} onChange={setColor} />
        </Row>
        <Row label="Intensity">
          <RangeField
            value={light.intensity}
            min={0}
            max={type === 'directional' ? 5 : 20}
            step={0.05}
            onChange={setIntensity}
          />
        </Row>
      </Section>

      {type === 'point' && (
        <Section title="Point Light">
          <Row label="Distance" hint="0 = no falloff; otherwise light fades to 0 at this distance.">
            <RangeField
              value={(light as PointLight).distance}
              min={0}
              max={50}
              step={0.5}
              onChange={(v) => {
                (light as PointLight).distance = v;
                bumpObject();
                markStale();
              }}
            />
          </Row>
          <Row label="Decay" hint="Inverse-square (2) is physically correct.">
            <NumberField
              value={(light as PointLight).decay}
              min={0}
              max={4}
              step={0.1}
              onChange={(v) => {
                (light as PointLight).decay = v;
                bumpObject();
                markStale();
              }}
            />
          </Row>
        </Section>
      )}

      {type === 'spot' && (
        <Section title="Spot Light">
          <Row label="Angle (°)" hint="Half-angle of the cone aperture.">
            <RangeField
              value={radToDeg((light as SpotLight).angle)}
              min={1}
              max={89}
              step={1}
              onChange={(v) => {
                (light as SpotLight).angle = degToRad(v);
                helperUpdate();
                bumpObject();
                markStale();
              }}
            />
          </Row>
          <Row label="Penumbra" hint="Soft edge of the cone, 0 = hard, 1 = fully soft.">
            <RangeField
              value={(light as SpotLight).penumbra}
              min={0}
              max={1}
              step={0.02}
              onChange={(v) => {
                (light as SpotLight).penumbra = v;
                helperUpdate();
                bumpObject();
                markStale();
              }}
            />
          </Row>
          <Row label="Distance">
            <RangeField
              value={(light as SpotLight).distance}
              min={0}
              max={50}
              step={0.5}
              onChange={(v) => {
                (light as SpotLight).distance = v;
                helperUpdate();
                bumpObject();
                markStale();
              }}
            />
          </Row>
        </Section>
      )}

      {type === 'directional' && (
        <Section title="Sun (Directional)">
          <Row
            label="Rotation"
            hint="Use the rotate gizmo (R key) on the light group to change direction."
          >
            <span class="text-[11px] text-text-2 italic">via gizmo</span>
          </Row>
        </Section>
      )}

      {type === 'area' && (
        <Section title="Area Light">
          <Row label="Width">
            <RangeField
              value={(light as RectAreaLight).width}
              min={0.1}
              max={10}
              step={0.1}
              onChange={(v) => {
                (light as RectAreaLight).width = v;
                bumpObject();
                markStale();
              }}
            />
          </Row>
          <Row label="Height">
            <RangeField
              value={(light as RectAreaLight).height}
              min={0.1}
              max={10}
              step={0.1}
              onChange={(v) => {
                (light as RectAreaLight).height = v;
                bumpObject();
                markStale();
              }}
            />
          </Row>
        </Section>
      )}

      {type === 'directional' && (
        <Section title="Direction (computed)">
          <Row label="From">
            <span class="text-[11px] font-mono text-text-2">
              {(light as DirectionalLight).position
                .toArray()
                .map((n) => n.toFixed(2))
                .join(', ')}
            </span>
          </Row>
        </Section>
      )}
    </div>
  );
}

function labelForType(t: string): string {
  switch (t) {
    case 'point':
      return 'Point';
    case 'spot':
      return 'Spot';
    case 'directional':
      return 'Sun';
    case 'area':
      return 'Area';
    default:
      return t;
  }
}

function radToDeg(r: number): number {
  return (r * 180) / Math.PI;
}
function degToRad(d: number): number {
  return (d * Math.PI) / 180;
}
