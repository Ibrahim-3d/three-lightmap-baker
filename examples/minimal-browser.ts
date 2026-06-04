import * as THREE from 'three';
import { LightmapBaker } from 'three-lightmap-baker';

const renderer = new THREE.WebGLRenderer({ antialias: true });
const scene = new THREE.Scene();

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
