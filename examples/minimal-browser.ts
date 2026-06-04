import * as THREE from 'three';
import { LightmapBaker } from 'three-lightmap-baker';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(512, 512);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x20262f);

const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0xced4da, roughness: 0.6, metalness: 0.1 }),
);
mesh.position.set(0, 0.5, 0);
scene.add(mesh);

const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(4, 4),
  new THREE.MeshStandardMaterial({ color: 0x5c677d, roughness: 0.9 }),
);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

const light = new THREE.DirectionalLight(0xffffff, 2.5);
light.position.set(2, 4, 1);
scene.add(light);

// Clean constructor style.
const baker = new LightmapBaker({
  renderer,
  resolution: 512,
  samples: 64,
  bounces: 2,
  denoise: true,
});

const result = await baker.bake(scene, {
  onProgress: (phase, percent) => {
    console.log(`[example] ${phase}: ${(percent * 100).toFixed(0)}%`);
  },
});
result.apply();

// Explicit renderer-injected style remains supported.
const explicit = new LightmapBaker(renderer, { resolution: 256, samples: 16, bounces: 1 });
const quick = await explicit.bake(scene);
quick.dispose();
