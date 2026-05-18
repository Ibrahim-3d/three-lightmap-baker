/**
 * Gym — 0beqz / enhance-shader-lighting
 * GLB ported from https://github.com/0beqz/enhance-shader-lighting
 * License: MIT · Author: Eric Wojtaś (0beqz)
 */
import { Box3, DirectionalLight, type Scene, Vector3 } from 'three';
import { loadGLTF } from '../loaders';
import { sceneRegistry, type SceneBuildResult } from '../registry';

async function build(scene: Scene): Promise<SceneBuildResult> {
    const gltf = await loadGLTF('/models/gym.glb');
    const root = gltf.scene;
    root.name = 'sceneRoot';
    scene.add(root);

    const box = new Box3().setFromObject(root);
    const center = new Vector3();
    box.getCenter(center);
    const size = new Vector3();
    box.getSize(size);

    // Natural light through skylights / windows — baked as directional.
    // Position is the effective sun origin above+side the gym.
    const sun = new DirectionalLight(0xfff8e8, 4.0);
    sun.name = 'Sun';
    sun.position.set(center.x + size.x * 0.6, box.max.y + size.y * 0.5, center.z + size.z * 0.2);
    scene.add(sun);
    sun.updateMatrixWorld();

    // Fill from opposite side (cool sky bounce).
    const sky = new DirectionalLight(0xc8d8ff, 1.2);
    sky.name = 'Sky Fill';
    sky.position.set(center.x - size.x * 0.5, box.max.y + size.y * 0.3, center.z - size.z * 0.3);
    scene.add(sky);
    sky.updateMatrixWorld();

    // Camera looks down the long axis of the gym from one short end.
    const camZ = box.max.z + size.z * 0.2;
    const camY = box.min.y + size.y * 0.4;

    return {
        camera: {
            position: [center.x, camY, camZ],
            target: [center.x, camY * 0.6, center.z],
        },
        lightDummy: { position: [center.x + size.x * 0.6, box.max.y + size.y * 0.5, center.z + size.z * 0.2] },
        background: 0xb0c0d8,
    };
}

sceneRegistry.register({
    id: 'gltf.gym',
    label: 'Gym (enhance-shader-lighting)',
    category: 'showcase',
    description: 'Sports gym interior by 0beqz — large open space lit by directional sun through skylights. Re-baked with our path tracer.',
    source: {
        name: 'enhance-shader-lighting',
        url: 'https://github.com/0beqz/enhance-shader-lighting',
        license: 'MIT',
        author: '0beqz (Eric Wojtaś)',
    },
    build,
    defaultBakeSettings: { lightMapSize: 1024, targetSamples: 128, bounces: 2, casts: 4, texelsPerMeter: 3 },
    schemaVersion: 1,
});
