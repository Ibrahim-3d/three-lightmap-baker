import { type PerspectiveCamera } from 'three';
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
  getOrchestrator,
  cameraLockId,
} from 'shared';

interface BakerOrchestratorLike {
  options: {
    perMesh: Record<string, { scaleInLightmap: number; exclude: boolean }>;
  };
}

/** Object tab: name + visible + transform numeric inputs. */
export function ObjectPage() {
  void objectTick.value; // re-render on transform/visibility writes
  // Cast to a structural interface to access options without importing the specific
  // BakerOrchestrator interface from baker-classic, avoiding a circular dependency.
  const app = getOrchestrator() as unknown as BakerOrchestratorLike;
  const obj = lookupSelected(selectedId.value);
  if (!obj) {
    return <Empty />;
  }

  const meshSelected = isMesh(obj);
  const cameraSelected = !!obj.userData?.bakerCameraType;
  const cam = cameraSelected
    ? (obj.children.find((c) => (c as PerspectiveCamera).isPerspectiveCamera) as PerspectiveCamera)
    : null;
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

      {cameraSelected && (
        <Section title="Camera Settings">
          <Row label="View">
            <div class="flex flex-col gap-1.5 w-full">
              <button
                type="button"
                class="w-full h-6 bg-bg-3 hover:bg-bg-4 border border-border rounded text-[10px] text-text-1"
                onClick={() => getOrchestrator()?.setAsViewCamera?.(obj.uuid)}
              >
                View Camera View
              </button>
              <button
                type="button"
                class={`w-full h-6 border border-border rounded text-[10px] ${
                  cameraLockId.value === obj.uuid
                    ? 'bg-accent text-bg-1 border-accent'
                    : 'bg-bg-3 hover:bg-bg-4 text-text-1'
                }`}
                onClick={() => {
                  const orchestrator = getOrchestrator();
                  if (orchestrator?.isCameraLocked?.(obj.uuid)) {
                    orchestrator.setCameraLock?.(null);
                  } else {
                    orchestrator?.setCameraLock?.(obj.uuid);
                  }
                }}
              >
                {cameraLockId.value === obj.uuid
                  ? 'Locked to Viewport'
                  : 'Move Camera with Viewport'}
              </button>
            </div>
          </Row>
          {cameraSelected && cam && (
            <>
              <Row label="FOV">
                <NumberField
                  value={cam.fov}
                  step={1}
                  onChange={(v) => {
                    cam.fov = v;
                    cam.updateProjectionMatrix();
                    getOrchestrator()?.updateHelpers?.();
                    markStale();
                  }}
                />
              </Row>
              <Row label="Aspect">
                <NumberField
                  value={cam.aspect}
                  step={0.1}
                  onChange={(v) => {
                    cam.aspect = v;
                    cam.updateProjectionMatrix();
                    getOrchestrator()?.updateHelpers?.();
                    markStale();
                  }}
                />
              </Row>
              <Row label="Near">
                <NumberField
                  value={cam.near}
                  step={0.1}
                  onChange={(v) => {
                    cam.near = v;
                    cam.updateProjectionMatrix();
                    getOrchestrator()?.updateHelpers?.();
                    markStale();
                  }}
                />
              </Row>
              <Row label="Far">
                <NumberField
                  value={cam.far}
                  step={1}
                  onChange={(v) => {
                    cam.far = v;
                    cam.updateProjectionMatrix();
                    getOrchestrator()?.updateHelpers?.();
                    markStale();
                  }}
                />
              </Row>
            </>
          )}
        </Section>
      )}

      {entry && (
        <Section title="Bake Settings">
          <Row
            label="Texel Density ×"
            hint="Multiplier on this mesh's share of the scene density. Higher = more atlas area."
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
