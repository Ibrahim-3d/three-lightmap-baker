/**
 * Three Metallic Balls — geometry from three-gpu-pathtracer primitives.js
 * Source: https://github.com/gkjohnson/three-gpu-pathtracer/blob/main/example/primitives.js
 * License: MIT · Author: Garrett Johnson (gkjohnson)
 *
 * Three metallic spheres on a platform under a warm overhead light.
 * Simple, clean showcase of GI color bleeding and specular baking.
 */
import {
    BoxGeometry,
    Mesh,
    MeshStandardMaterial,
    Object3D,
    PointLight,
    type Scene,
    SphereGeometry,
} from 'three';
import { sceneRegistry, type SceneBuildResult } from '../registry';

function build(scene: Scene): SceneBuildResult {
    const root = new Object3D();
    root.name = 'sceneRoot';
    scene.add(root);

    // Ground platform
    const ground = new Mesh(
        new BoxGeometry(4.5, 0.12, 2.0),
        new MeshStandardMaterial({ color: 0xffffff, roughness: 0.8, metalness: 0 }),
    );
    ground.name = 'Platform';
    ground.position.y = -0.06;
    root.add(ground);

    // Large floor disc — receives soft colored GI from the spheres.
    const floor = new Mesh(
        new BoxGeometry(14, 0.1, 14),
        new MeshStandardMaterial({ color: 0xcccccc, roughness: 0.95 }),
    );
    floor.name = 'Floor';
    floor.position.y = -0.55;
    root.add(floor);

    // Three metallic spheres (from primitives.js).
    const sphereGeo = new SphereGeometry(0.49, 48, 32);
    const balls: Array<[string, number, number, number, number]> = [
        ['Ball Left', 0xe91e63, 0.25, 1.0, -1.0],
        ['Ball Center', 0xff9800, 0.1, 1.0, 0.0],
        ['Ball Right', 0x2196f3, 0.2, 1.0, 1.0],
    ];
    for (const [name, color, roughness, metalness, x] of balls) {
        const m = new Mesh(
            sphereGeo,
            new MeshStandardMaterial({ color, roughness, metalness }),
        );
        m.name = name;
        m.position.set(x, 0.49, 0);
        root.add(m);
    }

    // Warm overhead fill — picked up by baker for direct light.
    const fill = new PointLight(0xfff0e0, 40, 0, 2);
    fill.name = 'Fill Light';
    fill.position.set(0, 4, 2);
    root.add(fill);

    // Cool rim from behind — adds color to the bake.
    const rim = new PointLight(0x80c0ff, 25, 0, 2);
    rim.name = 'Rim Light';
    rim.position.set(0, 2, -3);
    root.add(rim);

    // Visual markers (ignored by baker).
    for (const [light, color] of [[fill, 0xfff0e0], [rim, 0x80c0ff]] as const) {
        const mk = new Mesh(
            new SphereGeometry(0.06, 8, 6),
            new MeshStandardMaterial({ color: 0x0, emissive: color, emissiveIntensity: 3 }),
        );
        mk.position.copy(light.position);
        mk.userData.lightmapIgnore = true;
        root.add(mk);
    }

    return {
        camera: { position: [0, 1.5, -5.5], target: [0, 0.5, 0] },
        lightDummy: { position: [0, 4, 2] },
        background: 0x111115,
    };
}

sceneRegistry.register({
    id: 'pt.three-balls',
    label: 'Three Metallic Balls (three-gpu-pathtracer)',
    category: 'showcase',
    description: 'Three metallic spheres on a platform — showcases GI color bleeding and specular baking. Geometry from gkjohnson/three-gpu-pathtracer primitives.js.',
    source: {
        name: 'three-gpu-pathtracer / primitives.js',
        url: 'https://github.com/gkjohnson/three-gpu-pathtracer',
        license: 'MIT',
        author: 'Garrett Johnson (gkjohnson)',
    },
    referenceUrl: 'https://gkjohnson.github.io/three-gpu-pathtracer/example/bundle/primitives.html',
    build,
    defaultBakeSettings: { lightMapSize: 1024, targetSamples: 256, bounces: 3, casts: 5, texelsPerMeter: 20 },
    schemaVersion: 1,
});
