import {
    BoxGeometry,
    Mesh,
    MeshStandardMaterial,
    Object3D,
    PointLight,
    type Scene,
    SphereGeometry,
    TorusKnotGeometry,
} from 'three';
import { sceneRegistry, type SceneBuildResult } from '../registry';

function mat(color: number, roughness = 0.6, metalness = 0.0): MeshStandardMaterial {
    return new MeshStandardMaterial({ color, roughness, metalness });
}

function build(scene: Scene): SceneBuildResult {
    const root = new Object3D();
    root.name = 'sceneRoot';
    scene.add(root);

    // Backdrop floor + back wall for context.
    const floor = new Mesh(new BoxGeometry(20, 0.2, 20), mat(0x303030, 0.9));
    floor.name = 'Floor';
    floor.position.set(0, -0.1, 0);
    root.add(floor);

    const back = new Mesh(new BoxGeometry(20, 12, 0.2), mat(0x404040, 0.9));
    back.name = 'Backdrop';
    back.position.set(0, 6, -6);
    root.add(back);

    // Centered subject — torus knot stands in for the original Lee Perry-Smith head.
    const subject = new Mesh(
        new TorusKnotGeometry(1.3, 0.42, 200, 32),
        mat(0xc9b290, 0.55, 0.0),
    );
    subject.name = 'Subject';
    subject.position.set(0, 3, 0);
    root.add(subject);

    // 3-point lighting rig. Point lights with visible markers (markers ignored
    // by the baker via userData.lightmapIgnore).
    const rig: [string, number, number, number, number, number][] = [
        ['Key (warm)', 0xffc88a, 4.0, 5.0, 3.5, 80],
        ['Fill (cool)', 0x88a8ff, -4.0, 3.5, 2.5, 40],
        ['Rim', 0xffffff, 0.0, 4.5, -3.5, 60],
    ];
    for (const [name, color, x, y, z, power] of rig) {
        const light = new PointLight(color, power, 0, 2);
        light.position.set(x, y, z);
        light.userData.lightmapIgnore = true;
        root.add(light);

        const marker = new Mesh(
            new SphereGeometry(0.12, 12, 8),
            new MeshStandardMaterial({ color: 0x000000, emissive: color, emissiveIntensity: 2 }),
        );
        marker.name = name;
        marker.position.set(x, y, z);
        marker.userData.lightmapIgnore = true;
        root.add(marker);
    }

    return {
        camera: { position: [0, 4, 10], target: [0, 3, 0] },
        lightDummy: { position: [4.0, 5.0, 3.5] },
        background: 0x1a1a1f,
    };
}

sceneRegistry.register({
    id: 'threejs.decals',
    label: 'three.js — Decals (3-Point Lighting)',
    category: 'threejs-port',
    description: 'Port of the webgl_decals lighting setup: warm key + cool fill + rim around a centered subject.',
    source: {
        name: 'three.js / webgl_decals',
        url: 'https://threejs.org/examples/?q=decals#webgl_decals',
        license: 'MIT',
        author: 'three.js authors',
    },
    referenceUrl: 'https://threejs.org/examples/?q=decals#webgl_decals',
    build,
    defaultBakeSettings: { lightMapSize: 1024, targetSamples: 256, bounces: 2, casts: 5, texelsPerMeter: 8 },
    schemaVersion: 1,
});
