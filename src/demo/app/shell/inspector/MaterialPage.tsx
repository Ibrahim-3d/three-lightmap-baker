import { objectTick, selectedId } from '../../../state/signals';
import { BoolField, ColorField, RangeField, Row, Section } from './Field';
import {
  bumpObject,
  colorToHex,
  hexToColor,
  isMesh,
  lookupSelected,
  markStale,
  meshMaterial,
} from './helpers';

/**
 * Material tab: edits the underlying `MeshStandardMaterial` fields. Color
 * changes are view-time only (don't invalidate the bake). Emissive changes
 * DO change baked irradiance — flag stale.
 */
export function MaterialPage() {
  objectTick.value; // re-render on color/material writes
  const obj = lookupSelected(selectedId.value);
  if (!isMesh(obj)) {
    return <Empty msg="Material editor needs a mesh selected." />;
  }
  const mat = meshMaterial(obj);
  if (!mat) {
    return <Empty msg="Selected mesh has no editable material." />;
  }

  return (
    <div class="text-[12px]">
      <Section title="Base">
        <Row label="Color">
          <ColorField
            value={colorToHex(mat.color)}
            onChange={(hex) => {
              hexToColor(mat.color, hex);
              bumpObject();
              markStale();
            }}
          />
        </Row>
        <Row label="Roughness">
          <RangeField
            value={mat.roughness}
            min={0}
            max={1}
            step={0.01}
            onChange={(v) => {
              mat.roughness = v;
              bumpObject();
            }}
          />
        </Row>
        <Row label="Metalness">
          <RangeField
            value={mat.metalness}
            min={0}
            max={1}
            step={0.01}
            onChange={(v) => {
              mat.metalness = v;
              bumpObject();
            }}
          />
        </Row>
      </Section>

      <Section title="Emissive">
        <Row label="Color">
          <ColorField
            value={colorToHex(mat.emissive)}
            onChange={(hex) => {
              hexToColor(mat.emissive, hex);
              bumpObject();
              markStale();
            }}
          />
        </Row>
        <Row label="Intensity">
          <RangeField
            value={mat.emissiveIntensity}
            min={0}
            max={10}
            step={0.1}
            onChange={(v) => {
              mat.emissiveIntensity = v;
              bumpObject();
              markStale();
            }}
          />
        </Row>
      </Section>

      <Section title="Bake">
        <Row label="Receive only" hint="Receive lighting but do not contribute to GI bounces.">
          <BoolField
            value={obj.userData.receiveOnly === true}
            onChange={(v) => {
              obj.userData.receiveOnly = v;
              bumpObject();
              markStale();
            }}
          />
        </Row>
      </Section>
    </div>
  );
}

function Empty(props: { msg: string }) {
  return <div class="p-2 italic text-text-2 text-[12px]">{props.msg}</div>;
}
