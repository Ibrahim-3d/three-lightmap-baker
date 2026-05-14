import {
    BoxGeometry,
    Mesh,
    MeshPhysicalMaterial,
    MeshStandardMaterial,
    Object3D,
    type Scene,
    SphereGeometry,
} from 'three';
import { sceneRegistry, type SceneBuildResult } from '../registry';

const ROOM = 10;
const HALF = ROOM / 2;
const T = 0.2;

function mat(color: number, roughness = 0.95, metalness = 0.0): MeshStandardMaterial {
    return new MeshStandardMaterial({ color, roughness, metalness });
}

function build(scene: Scene): SceneBuildResult {
    const root = new Object3D();
    root.name = 'sceneRoot';
    scene.add(root);

    const floor = new Mesh(new BoxGeometry(ROOM, T, ROOM), mat(0xf0f0f0));
    floor.name = 'Floor';
    floor.position.set(0, -T / 2, 0);
    root.add(floor);

    const ceil = new Mesh(new BoxGeometry(ROOM, T, ROOM), mat(0xf0f0f0));
    ceil.name = 'Ceiling';
    ceil.position.set(0, ROOM + T / 2, 0);
    root.add(ceil);

    const back = new Mesh(new BoxGeometry(ROOM, ROOM, T), mat(0xf0f0f0));
    back.name = 'Back Wall';
    back.position.set(0, HALF, -HALF - T / 2);
    root.add(back);

    const left = new Mesh(new BoxGeometry(T, ROOM, ROOM), mat(0xd62728));
    left.name = 'Left Wall (Red)';
    left.position.set(-HALF - T / 2, HALF, 0);
    root.add(left);

    const right = new Mesh(new BoxGeometry(T, ROOM, ROOM), mat(0x2ca02c));
    right.name = 'Right Wall (Green)';
    right.position.set(HALF + T / 2, HALF, 0);
    root.add(right);

    // Tall mirror cube — metalness=1, very low roughness.
    // userData.lightmapIgnore=true so the baker skips it (mirror reflection is
    // view-time only; UV unwrap is meaningless).
    const mirror = new Mesh(
        new BoxGeometry(2.5, 5, 2.5),
        new MeshStandardMaterial({ color: 0xffffff, roughness: 0.05, metalness: 1.0 }),
    );
    mirror.name = 'Mirror Cube';
    mirror.position.set(-2.2, 2.5, -1.5);
    mirror.rotation.y = 0.3;
    mirror.userData.lightmapIgnore = true;
    root.add(mirror);

    // Glass sphere — transmission=1, roughness=0. Also ignored by bake.
    const glass = new Mesh(
        new SphereGeometry(1.2, 48, 32),
        new MeshPhysicalMaterial({
            color: 0xffffff,
            roughness: 0.0,
            metalness: 0.0,
            transmission: 1.0,
            thickness: 0.5,
            ior: 1.5,
            transparent: true,
        }),
    );
    glass.name = 'Glass Sphere';
    glass.position.set(2.4, 1.2, 1.5);
    glass.userData.lightmapIgnore = true;
    root.add(glass);

    return {
        camera: { position: [0, 5, 18], target: [0, 5, 0] },
        lightDummy: { position: [0, ROOM - 0.001, 0] },
        background: 0x0a0a0a,
    };
}

sceneRegistry.register({
    id: 'cornell.glass-mirror',
    label: 'Cornell — Glass + Mirror',
    category: 'cornell',
    description: 'Cornell with a mirror cube + glass sphere (excluded from bake; rendered view-time only).',
    build,
    defaultBakeSettings: { lightMapSize: 1024, targetSamples: 256, bounces: 2, casts: 5, texelsPerMeter: 10 },
    schemaVersion: 1,
});
