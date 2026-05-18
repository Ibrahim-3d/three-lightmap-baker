/**
 * Mercury Statue + Area Lights — three-gpu-pathtracer areaLight.js
 * Model: "Mercury About to Kill Argos" — Virtual Museums of Małopolska (CC-BY)
 * Source: https://github.com/gkjohnson/three-gpu-pathtracer/blob/main/example/areaLight.js
 * License: MIT · Author: Garrett Johnson (gkjohnson)
 *
 * Requires internet — model fetched from gkjohnson/3d-demo-data CDN.
 */
import {
    Box3,
    CylinderGeometry,
    Mesh,
    MeshStandardMaterial,
    Object3D,
    RectAreaLight,
    type Scene,
    SphereGeometry,
    Vector3,
} from 'three';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib';
import { loadGLTF } from '../loaders';
import { sceneRegistry, type SceneBuildResult } from '../registry';

const MODEL_URL =
    'https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/mercury-about-to-kill-argos/scene.glb';

async function build(scene: Scene): Promise<SceneBuildResult> {
    // Init rect area light uniforms for correct visual preview.
    RectAreaLightUniformsLib.init();

    const root = new Object3D();
    root.name = 'sceneRoot';
    scene.add(root);

    const gltf = await loadGLTF(MODEL_URL);
    const model = gltf.scene;

    // Scale matches areaLight.js (original model is in mm scale).
    model.scale.setScalar(0.01);
    model.position.x = 0.05;
    model.updateMatrixWorld(true);

    const box = new Box3().setFromObject(model);
    model.position.y -= box.min.y;
    model.updateMatrixWorld(true);
    root.add(model);

    // Circular floor disc.
    const floor = new Mesh(
        new CylinderGeometry(3.5, 3.5, 0.05, 60),
        new MeshStandardMaterial({ color: 0x999999, roughness: 0.02, metalness: 0.2 }),
    );
    floor.name = 'Floor';
    floor.position.y = -0.025;
    root.add(floor);

    // White area light — key from side (matches areaLight.js geometry).
    const keyLight = new RectAreaLight(0xffffff, 5.0, 1.0, 1.0);
    keyLight.name = 'Key Area Light';
    keyLight.position.set(1.5, 1.0, -0.5);
    keyLight.rotateZ(-Math.PI / 4);
    keyLight.rotateX(-Math.PI / 2);
    root.add(keyLight);

    // Red fill area light — large, from behind/above.
    const fillLight = new RectAreaLight(0xff4444, 8.0, 1.25, 2.75);
    fillLight.name = 'Red Fill Area Light';
    fillLight.position.set(0, 1.25, -1.5);
    fillLight.rotateX(Math.PI);
    root.add(fillLight);

    // Visual markers for area lights (ignored by baker — just for viewport clarity).
    for (const [light, c] of [[keyLight, 0xffffff], [fillLight, 0xff4444]] as const) {
        const mk = new Mesh(
            new SphereGeometry(0.04, 8, 6),
            new MeshStandardMaterial({ color: 0x0, emissive: c, emissiveIntensity: 3 }),
        );
        mk.position.copy(light.position);
        mk.userData.lightmapIgnore = true;
        root.add(mk);
    }

    // Recompute bounds for camera placement.
    const box2 = new Box3().setFromObject(root);
    const center2 = new Vector3();
    box2.getCenter(center2);

    return {
        camera: {
            position: [0.0, 0.6, 2.65],
            target: [center2.x, center2.y * 0.6, center2.z],
        },
        lightDummy: { position: [1.5, 1.0, -0.5] },
        background: 0x050508,
    };
}

sceneRegistry.register({
    id: 'pt.mercury-statue',
    label: '★ Online — Mercury Statue + Area Lights (three-gpu-pathtracer)',
    category: 'showcase',
    description: '"Mercury About to Kill Argos" statue lit by key white + red fill area lights. From gkjohnson/three-gpu-pathtracer areaLight.js. Requires internet.',
    source: {
        name: 'three-gpu-pathtracer / areaLight.js',
        url: 'https://github.com/gkjohnson/three-gpu-pathtracer',
        license: 'MIT',
        author: 'Garrett Johnson (gkjohnson)',
    },
    referenceUrl: 'https://gkjohnson.github.io/three-gpu-pathtracer/example/bundle/areaLight.html',
    build,
    defaultBakeSettings: { lightMapSize: 1024, targetSamples: 256, bounces: 3, casts: 5, texelsPerMeter: 18 },
    schemaVersion: 1,
});
