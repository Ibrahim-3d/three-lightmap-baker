/**
 * The Backrooms — 0beqz / enhance-shader-lighting
 * GLB ported from https://github.com/0beqz/enhance-shader-lighting
 * License: MIT · Author: Eric Wojtaś (0beqz)
 *
 * Liminal-space interior: grid of fluorescent-lit yellowed rooms.
 * Fluorescent lights modelled as PointLights distributed across the ceiling
 * grid — baker picks them all up via collectLightsFromScene.
 */
import { Box3, PointLight, type Scene, Vector3 } from 'three';
import { loadGLTF } from '../loaders';
import { sceneRegistry, type SceneBuildResult } from '../registry';

async function build(scene: Scene): Promise<SceneBuildResult> {
    const gltf = await loadGLTF('/models/backrooms.glb');
    const root = gltf.scene;
    root.name = 'sceneRoot';
    scene.add(root);

    const box = new Box3().setFromObject(root);
    const center = new Vector3();
    box.getCenter(center);
    const size = new Vector3();
    box.getSize(size);

    // Fluorescent warm-yellow ceiling lights arranged in a 3×3 grid.
    // Backrooms env-map size was ~34m × 4.2m × 34m; scale lights to match.
    const ceilY = box.max.y - size.y * 0.05;
    const ROWS = 3, COLS = 3;
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            const lx = box.min.x + size.x * ((c + 0.5) / COLS);
            const lz = box.min.z + size.z * ((r + 0.5) / ROWS);
            const fluoro = new PointLight(0xffeeaa, 6, size.x * 0.55, 2);
            fluoro.name = `Fluorescent ${r * COLS + c + 1}`;
            fluoro.position.set(lx, ceilY, lz);
            scene.add(fluoro);
        }
    }

    // First-person eye height inside the space, looking down a corridor.
    const eyeY = box.min.y + size.y * 0.35;

    return {
        camera: {
            position: [center.x, eyeY, center.z + size.z * 0.4],
            target: [center.x, eyeY, center.z - size.z * 0.4],
        },
        lightDummy: { position: [center.x, ceilY, center.z] },
        background: 0x08080a,
    };
}

sceneRegistry.register({
    id: 'gltf.backrooms',
    label: 'The Backrooms (enhance-shader-lighting)',
    category: 'interior',
    description: 'Liminal backrooms by 0beqz — 9 fluorescent ceiling lights baked into yellow GI. Re-baked with our path tracer.',
    source: {
        name: 'enhance-shader-lighting',
        url: 'https://github.com/0beqz/enhance-shader-lighting',
        license: 'MIT',
        author: '0beqz (Eric Wojtaś)',
    },
    build,
    defaultBakeSettings: { lightMapSize: 1024, targetSamples: 192, bounces: 3, casts: 5, texelsPerMeter: 8 },
    schemaVersion: 1,
});
