/**
 * Desert — 0beqz / enhance-shader-lighting
 * GLB ported from https://github.com/0beqz/enhance-shader-lighting
 * License: MIT · Author: Eric Wojtaś (0beqz)
 */
import { Box3, DirectionalLight, type Scene, Vector3 } from 'three';
import { loadGLTF } from '../loaders';
import { sceneRegistry, type SceneBuildResult } from '../registry';

async function build(scene: Scene): Promise<SceneBuildResult> {
    const gltf = await loadGLTF('/models/desert.glb');
    const root = gltf.scene;
    root.name = 'sceneRoot';
    scene.add(root);

    const box = new Box3().setFromObject(root);
    const center = new Vector3();
    box.getCenter(center);
    const size = new Vector3();
    box.getSize(size);

    // Warm overhead sun — high angle, slightly south-west.
    const sun = new DirectionalLight(0xffeec0, 5.0);
    sun.name = 'Desert Sun';
    sun.position.set(
        center.x + size.x * 0.4,
        center.y + size.y * 2.5,
        center.z + size.z * 0.3,
    );
    scene.add(sun);
    sun.updateMatrixWorld();

    // Cool sky fill from opposite direction.
    const skyFill = new DirectionalLight(0x90b8e0, 1.0);
    skyFill.name = 'Sky Fill';
    skyFill.position.set(center.x - size.x * 0.3, center.y + size.y * 1.5, center.z - size.z * 0.2);
    scene.add(skyFill);
    skyFill.updateMatrixWorld();

    const camZ = box.max.z + size.z * 0.15;
    const camY = center.y + size.y * 0.6;

    return {
        camera: {
            position: [center.x - size.x * 0.1, camY, camZ],
            target: [center.x, center.y, center.z],
        },
        lightDummy: {
            position: [center.x + size.x * 0.4, center.y + size.y * 2.5, center.z + size.z * 0.3],
        },
        background: 0xd8c8a0,
    };
}

sceneRegistry.register({
    id: 'gltf.desert',
    label: 'Desert (enhance-shader-lighting)',
    category: 'showcase',
    description: 'Outdoor desert by 0beqz — warm directional sun + cool sky fill. Re-baked with our path tracer.',
    source: {
        name: 'enhance-shader-lighting',
        url: 'https://github.com/0beqz/enhance-shader-lighting',
        license: 'MIT',
        author: '0beqz (Eric Wojtaś)',
    },
    build,
    defaultBakeSettings: { lightMapSize: 1024, targetSamples: 128, bounces: 2, casts: 4, texelsPerMeter: 2 },
    schemaVersion: 1,
});
