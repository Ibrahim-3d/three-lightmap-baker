import {
  BoolField,
  bumpObject,
  bumpOptions,
  isMesh,
  lookupSelected,
  markStale,
  NumberField,
  objectTick,
  RangeField,
  refreshTreeFromScene,
  Row,
  Section,
  selectedId,
  TextField,
} from 'shared';
import { getBakerOrchestrator } from 'baker-classic/ui';

/** Object tab: name + visible + transform numeric inputs. */
export function ObjectPage() {
  void objectTick.value; // re-render on transform/visibility writes
  const app = getBakerOrchestrator();
  const obj = lookupSelected(selectedId.value);
  if (!obj) {
    return <Empty />;
  }

  const meshSelected = isMesh(obj);
  const options = app?.options;
  if (meshSelected && options && !options.perMesh[obj.uuid]) {
    options.perMesh[obj.uuid] = { scaleInLightmap: 1.0, exclude: false };
  }
  const entry = meshSelected && options ? options.perMesh[obj.uuid]! : null;

  return (
    <div class="text-[12px]">
      <Section title="Object">
        <Row label="Name">
          <TextField
            value={obj.name}
            onChange={(v) => {
              obj.name = v;
              bumpObject();
              refreshTreeFromScene();
            }}
          />
        </Row>
        <Row label="Visible">
          <BoolField
            value={obj.visible}
            onChange={(v) => {
              obj.visible = v;
              bumpObject();
              refreshTreeFromScene();
            }}
          />
        </Row>
      </Section>

      <Section title="Transform">
        <Vec3Row
          label="Position"
          x={obj.position.x}
          y={obj.position.y}
          z={obj.position.z}
          onChange={(x, y, z) => {
            obj.position.set(x, y, z);
            bumpObject();
            markStale();
          }}
        />
        <Vec3Row
          label="Rotation"
          x={obj.rotation.x}
          y={obj.rotation.y}
          z={obj.rotation.z}
          onChange={(x, y, z) => {
            obj.rotation.set(x, y, z);
            bumpObject();
            markStale();
          }}
        />
        <Vec3Row
          label="Scale"
          x={obj.scale.x}
          y={obj.scale.y}
          z={obj.scale.z}
          onChange={(x, y, z) => {
            obj.scale.set(x, y, z);
            bumpObject();
            markStale();
          }}
        />
      </Section>

      {entry && (
        <Section title="Bake Settings">
          <Row
            label="Texel Density ×"
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
      )}
    </div>
  );
}

function Vec3Row(props: {
  label: string;
  x: number;
  y: number;
  z: number;
  onChange: (x: number, y: number, z: number) => void;
}) {
  return (
    <Row label={props.label}>
      <NumberField
        value={props.x}
        step={0.1}
        onChange={(v) => props.onChange(v, props.y, props.z)}
      />
      <NumberField
        value={props.y}
        step={0.1}
        onChange={(v) => props.onChange(props.x, v, props.z)}
      />
      <NumberField
        value={props.z}
        step={0.1}
        onChange={(v) => props.onChange(props.x, props.y, v)}
      />
    </Row>
  );
}

function Empty() {
  return <div class="p-2 italic text-text-2 text-[12px]">Nothing selected.</div>;
}
