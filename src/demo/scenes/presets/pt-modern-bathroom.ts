/**
 * Modern Bathroom Interior — three-gpu-pathtracer interior.js
 * Model: "Modern Bathroom" by Charles Forman
 * Source: https://github.com/gkjohnson/three-gpu-pathtracer/blob/main/example/interior.js
 * License: MIT · Author: Garrett Johnson (gkjohnson)
 *
 * Requires internet — model fetched from gkjohnson/3d-demo-data CDN.
 */
import { Box3, type Scene, Vector3 } from 'three';
import { loadGLTF } from '../loaders';
import { sceneRegistry, type SceneBuildResult } from '../registry';

const MODEL_URL =
    'https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/pathtracing-bathroom/modernbathroom.glb';

async function build(scene: Scene): Promise<SceneBuildResult> {
    const gltf = await loadGLTF(MODEL_URL);
    const root = gltf.scene;
    root.name = 'sceneRoot';

    // Enable transmission thickness for glass/water surfaces (as in source).
    root.traverse((c) => {
        const m = (c as { material?: { thickness?: number } }).material;
        if (m) m.thickness = 1.0;
    });

    // Centre the model.
    const box = new Box3().setFromObject(root);
    const center = new Vector3();
    box.getCenter(center);
    root.position.addScaledVector(center, -0.5);
    root.updateMatrixWorld();
    scene.add(root);

    // Recompute box after centering.
    const box2 = new Box3().setFromObject(root);
    const size = new Vector3();
    box2.getSize(size);

    return {
        // Camera position from interior.js, adjusted for centered model.
        camera: {
            position: [0.4, 0.6, 2.65],
            target: [-0.15, 0.33, -0.08],
        },
        lightDummy: { position: [0, box2.max.y - 0.1, 0] },
        background: 0x0d0d0f,
    };
}

sceneRegistry.register({
    id: 'pt.modern-bathroom',
    label: '★ Online — Modern Bathroom (three-gpu-pathtracer)',
    category: 'interior',
    description: '"Modern Bathroom" by Charles Forman — detailed PBR interior. Geometry from gkjohnson/three-gpu-pathtracer interior.js. Requires internet connection.',
    source: {
        name: 'three-gpu-pathtracer / interior.js',
        url: 'https://github.com/gkjohnson/three-gpu-pathtracer',
        license: 'MIT',
        author: 'Garrett Johnson (gkjohnson)',
    },
    referenceUrl: 'https://gkjohnson.github.io/three-gpu-pathtracer/example/bundle/interior.html',
    build,
    defaultBakeSettings: { lightMapSize: 1024, targetSamples: 192, bounces: 3, casts: 5, texelsPerMeter: 15 },
    schemaVersion: 1,
});
