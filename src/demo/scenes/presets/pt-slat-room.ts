/**
 * Slat Room — geometry from three-gpu-pathtracer fog.js
 * Source: https://github.com/gkjohnson/three-gpu-pathtracer/blob/main/example/fog.js
 * License: MIT · Author: Garrett Johnson (gkjohnson)
 *
 * Spot light shining through horizontal slats → sharp baked shadow bars on floor.
 * Showcases spot-light shadow baking. No CDN assets required.
 */
import {
    BoxGeometry,
    CylinderGeometry,
    Group,
    Mesh,
    MeshStandardMaterial,
    Object3D,
    type Scene,
    SphereGeometry,
    SpotLight,
} from 'three';
import { sceneRegistry, type SceneBuildResult } from '../registry';

const TOTAL_SLATS = 10;
const WIDTH = 2.0;

function build(scene: Scene): SceneBuildResult {
    const root = new Object3D();
    root.name = 'sceneRoot';
    scene.add(root);

    // Floor disc
    const floor = new Mesh(
        new CylinderGeometry(5, 5, 0.1, 40),
        new MeshStandardMaterial({ color: 0x999999, roughness: 1.0, metalness: 0 }),
    );
    floor.name = 'Floor';
    floor.position.y = -1.1;
    root.add(floor);

    // Back wall — gives the spot shadow something to land on behind.
    const wall = new Mesh(
        new BoxGeometry(10, 8, 0.2),
        new MeshStandardMaterial({ color: 0xdddddd, roughness: 0.95 }),
    );
    wall.name = 'Back Wall';
    wall.position.set(0, 1, -3);
    root.add(wall);

    // Horizontal slats hanging above (at y=2).
    const slatGeo = new BoxGeometry(0.1, 0.08, 2.5);
    const slatMat = new MeshStandardMaterial({ color: 0x333333, roughness: 0.9 });
    const slatGroup = new Group();
    slatGroup.name = 'Slats';
    for (let i = 0; i < TOTAL_SLATS; i++) {
        const s = new Mesh(slatGeo, slatMat);
        s.name = `Slat ${i + 1}`;
        s.position.x = -WIDTH * 0.5 + (WIDTH * i) / (TOTAL_SLATS - 1);
        s.position.y = 2;
        slatGroup.add(s);
    }
    root.add(slatGroup);

    // Spot light above the slats — baker picks this up via collectLightsFromScene.
    // angle PI/4.5 ≈ 40° cone; soft penumbra for realistic shadows.
    const spot = new SpotLight(0xffffff, 80);
    spot.name = 'Spot Light';
    spot.position.set(0, 3.5, 0);
    spot.angle = Math.PI / 4.5;
    spot.penumbra = 0.15;
    spot.decay = 2;
    root.add(spot);

    // Spot target (must be in scene for Three.js to track orientation).
    const target = spot.target;
    target.position.set(0, -1.1, 0);
    root.add(target);

    // Visual marker sphere for the spot light position (ignored by baker).
    const marker = new Mesh(
        new SphereGeometry(0.06, 12, 8),
        new MeshStandardMaterial({ color: 0x000000, emissive: 0xffffcc, emissiveIntensity: 3 }),
    );
    marker.name = 'Light Marker';
    marker.position.copy(spot.position);
    marker.userData.lightmapIgnore = true;
    root.add(marker);

    return {
        camera: { position: [0, 2.5, 8], target: [0, 0, 0] },
        lightDummy: { position: [0, 3.5, 0] },
        background: 0x000000,
    };
}

sceneRegistry.register({
    id: 'pt.slat-room',
    label: 'Slat Room (three-gpu-pathtracer)',
    category: 'showcase',
    description: 'Spot light through horizontal slats — sharp baked shadow bars on floor. Scene geometry from gkjohnson/three-gpu-pathtracer fog.js.',
    source: {
        name: 'three-gpu-pathtracer / fog.js',
        url: 'https://github.com/gkjohnson/three-gpu-pathtracer',
        license: 'MIT',
        author: 'Garrett Johnson (gkjohnson)',
    },
    referenceUrl: 'https://gkjohnson.github.io/three-gpu-pathtracer/example/bundle/fog.html',
    build,
    defaultBakeSettings: { lightMapSize: 1024, targetSamples: 256, bounces: 2, casts: 6, texelsPerMeter: 12 },
    schemaVersion: 1,
});
