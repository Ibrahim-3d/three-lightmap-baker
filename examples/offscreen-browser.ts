import * as THREE from 'three';
import {
  LightmapBaker,
  createRendererAdapter,
  type LightmapContextLossTarget,
} from 'three-lightmap-baker';

type AutomationRenderer = {
  adapter: ReturnType<typeof createRendererAdapter>;
  renderer: THREE.WebGLRenderer;
};

function createAutomationRenderer(width = 512, height = 512): AutomationRenderer {
  const canvas =
    typeof OffscreenCanvas !== 'undefined'
      ? new OffscreenCanvas(width, height)
      : document.createElement('canvas');

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    powerPreference: 'high-performance',
  });
  renderer.setSize(width, height, false);

  const contextLossTarget = canvas as unknown as LightmapContextLossTarget;
  const adapter = createRendererAdapter(renderer, {
    contextLossTarget,
    label: canvas instanceof OffscreenCanvas ? 'offscreen-browser' : 'detached-browser-canvas',
  });

  return { adapter, renderer };
}

function createScene(): THREE.Scene {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x20262f);

  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0xd7dde8, roughness: 0.7 }),
  );
  mesh.position.y = 0.5;
  scene.add(mesh);

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(4, 4),
    new THREE.MeshStandardMaterial({ color: 0x596579, roughness: 0.9 }),
  );
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);

  const key = new THREE.DirectionalLight(0xffffff, 2.4);
  key.position.set(2, 4, 1.5);
  scene.add(key);

  return scene;
}

export async function bakeWithOffscreenBrowserRenderer(): Promise<void> {
  const { adapter, renderer } = createAutomationRenderer();
  const baker = new LightmapBaker({
    rendererAdapter: adapter,
    resolution: 256,
    samples: 8,
    castsPerFrame: 8,
    bounces: 1,
    denoise: false,
  });

  const result = await baker.bake(createScene());
  result.apply();
  result.dispose();
  renderer.dispose();
}

void bakeWithOffscreenBrowserRenderer().catch((error) => {
  console.error('[baker] offscreen-browser example failed:', error);
});
