/**
 * Robot + Spotlight Stage — three-gpu-pathtracer spotLights.js
 * Model: "Steampunk Robot" by Benedict Chew (Sketchfab)
 * Source: https://github.com/gkjohnson/three-gpu-pathtracer/blob/main/example/spotLights.js
 * License: MIT · Author: Garrett Johnson (gkjohnson)
 *
 * Requires internet — model fetched from gkjohnson/3d-demo-data CDN.
 */
import {
    Box3,
    BoxGeometry,
    CylinderGeometry,
    Mesh,
    MeshStandardMaterial,
    Object3D,
    type Scene,
    SphereGeometry,
    SpotLight,
    Vector3,
} from 'three';
import { loadGLTF } from '../loaders';
import { sceneRegistry, type SceneBuildResult } from '../registry';

const MODEL_URL =
    'https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/steampunk-robot/scene.gltf';

async function build(scene: Scene): Promise<SceneBuildResult> {
    const root = new Object3D();
    root.name = 'sceneRoot';
    scene.add(root);

    const gltf = await loadGLTF(MODEL_URL);
    const model = gltf.scene;

    model.traverse((c) => {
        c.castShadow = true;
        c.receiveShadow = true;
    });
    root.add(model);
    model.updateMatrixWorld();

    const box = new Box3().setFromObject(model);
    const size = new Vector3();
    box.getSize(size);

    // Floor disc (matches spotLights.js proportions).
    const floor = new Mesh(
        new CylinderGeometry(8, 8, 0.5, 64),
        new MeshStandardMaterial({ color: 0x555555, roughness: 0.05, metalness: 0.4 }),
    );
    floor.name = 'Floor';
    floor.position.y = box.min.y - 0.25;
    root.add(floor);

    // Painted back wall behind the robot.
    const wall = new Mesh(
        new BoxGeometry(14, 7, 0.5),
        new MeshStandardMaterial({ color: 0xa06464, roughness: 0.4, metalness: 0.1 }),
    );
    wall.name = 'Back Wall';
    wall.position.set(0, box.min.y + 3.5, box.min.z - 0.5);
    root.add(wall);

    // Spot light from above-front — baker picks this up for baking.
    const spot = new SpotLight(0xffffff, 50);
    spot.name = 'Stage Spot';
    spot.position.set(0, box.max.y + 3, 4);
    spot.angle = Math.PI / 4.5;
    spot.penumbra = 1.0;
    spot.decay = 0;
    root.add(spot);

    const spotTarget = spot.target;
    spotTarget.position.set(0, box.min.y + 2, 0.05);
    root.add(spotTarget);

    // Visual marker (ignored by baker).
    const mk = new Mesh(
        new SphereGeometry(0.1, 8, 6),
        new MeshStandardMaterial({ color: 0x0, emissive: 0xffffff, emissiveIntensity: 4 }),
    );
    mk.position.copy(spot.position);
    mk.userData.lightmapIgnore = true;
    root.add(mk);

    return {
        camera: {
            position: [-1.6, box.min.y + size.y * 0.5 + 1.5, 6.4],
            target: [0, box.min.y + size.y * 0.4, 0],
        },
        lightDummy: { position: [0, box.max.y + 3, 4] },
        background: 0x080808,
    };
}

sceneRegistry.register({
    id: 'pt.robot-spotlight',
    label: '★ Online — Robot Spotlight (three-gpu-pathtracer)',
    category: 'showcase',
    description: 'Steampunk robot on a reflective stage under a single spot light. Scene from gkjohnson/three-gpu-pathtracer spotLights.js. Requires internet.',
    source: {
        name: 'three-gpu-pathtracer / spotLights.js',
        url: 'https://github.com/gkjohnson/three-gpu-pathtracer',
        license: 'MIT',
        author: 'Garrett Johnson (gkjohnson)',
    },
    referenceUrl: 'https://gkjohnson.github.io/three-gpu-pathtracer/example/bundle/spotLights.html',
    build,
    defaultBakeSettings: { lightMapSize: 1024, targetSamples: 192, bounces: 2, casts: 5, texelsPerMeter: 6 },
    schemaVersion: 1,
});
