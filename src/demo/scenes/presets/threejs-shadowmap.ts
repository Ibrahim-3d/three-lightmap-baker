import {
    BoxGeometry,
    ConeGeometry,
    CylinderGeometry,
    DirectionalLight,
    Mesh,
    MeshStandardMaterial,
    Object3D,
    type Scene,
    SphereGeometry,
} from 'three';
import { sceneRegistry, type SceneBuildResult } from '../registry';

function mat(color: number, roughness = 0.85, metalness = 0.0): MeshStandardMaterial {
    return new MeshStandardMaterial({ color, roughness, metalness });
}

function build(scene: Scene): SceneBuildResult {
    const root = new Object3D();
    root.name = 'sceneRoot';
    scene.add(root);

    // Large ground plane (use a thin box for proper UV unwrapping).
    const ground = new Mesh(new BoxGeometry(40, 0.4, 40), mat(0x808080));
    ground.name = 'Ground';
    ground.position.set(0, -0.2, 0);
    root.add(ground);

    // A handful of primitive obstacles — substitutes for the original example's
    // knight + tree silhouettes. Lighting (a high directional sun) is what we
    // care about reproducing.
    const obstacles: Array<[string, Mesh]> = [
        ['Cube A', new Mesh(new BoxGeometry(2, 2, 2), mat(0xd2691e))],
        ['Cube B', new Mesh(new BoxGeometry(1.5, 3, 1.5), mat(0x4682b4))],
        ['Sphere', new Mesh(new SphereGeometry(1.2, 32, 24), mat(0xf5deb3))],
        ['Cone', new Mesh(new ConeGeometry(1.3, 3, 24), mat(0x556b2f))],
        ['Pillar', new Mesh(new CylinderGeometry(0.6, 0.6, 4, 24), mat(0xc0c0c0))],
    ];
    const placements: Array<[number, number, number]> = [
        [-4, 1, 2],
        [3, 1.5, -3],
        [-2, 1.2, -3.5],
        [5, 1.5, 3],
        [0, 2, 5],
    ];
    for (let i = 0; i < obstacles.length; i++) {
        const [name, m] = obstacles[i]!;
        const [x, y, z] = placements[i]!;
        m.name = name;
        m.position.set(x, y, z);
        root.add(m);
    }

    // Directional "sun" — display-only; baker reads lightDummy.position for
    // direct light.
    const sun = new DirectionalLight(0xfff4d0, 1.5);
    sun.position.set(10, 18, 8);
    sun.userData.lightmapIgnore = true;
    root.add(sun);

    return {
        camera: { position: [12, 10, 18], target: [0, 1, 0] },
        lightDummy: { position: [10, 18, 8] },
        background: 0x87ceeb,
    };
}

sceneRegistry.register({
    id: 'threejs.shadowmap',
    label: 'three.js — Shadow Map',
    category: 'threejs-port',
    description: 'Port of webgl_shadowmap: outdoor scene with directional sun + ground + a few obstacles.',
    source: {
        name: 'three.js / webgl_shadowmap',
        url: 'https://threejs.org/examples/?q=shadowmap#webgl_shadowmap',
        license: 'MIT',
        author: 'three.js authors',
    },
    referenceUrl: 'https://threejs.org/examples/?q=shadowmap#webgl_shadowmap',
    build,
    defaultBakeSettings: { lightMapSize: 1024, targetSamples: 256, bounces: 2, casts: 5, texelsPerMeter: 4 },
    schemaVersion: 1,
});
