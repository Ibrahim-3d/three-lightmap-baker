import type { Mesh, Scene, WebGLRenderer } from 'three';
import {
  bindProbeLighting,
  bakeProbeIrradianceFromLightmaps,
  createProbeDebugView,
  generateProbeGrid,
  type LightmapBakeResult,
  type ProbeDebugView,
  type ProbeLightingBinding,
  type ProbeVolume,
} from 'three-lightmap-baker';

export type LightProbeDemo = {
  volume: ProbeVolume;
  debugView: ProbeDebugView;
  binding: ProbeLightingBinding;
  update(): void;
  dispose(): void;
};

/**
 * Generate a diffuse probe volume from an existing successful lightmap bake and
 * bind it to one dynamic MeshStandardMaterial object.
 */
export async function attachLightProbeDemo(
  renderer: WebGLRenderer,
  scene: Scene,
  bakeResult: LightmapBakeResult,
  dynamicMesh: Mesh,
): Promise<LightProbeDemo> {
  const volume = generateProbeGrid(scene, {
    spacing: 0.75,
    padding: 0.1,
    maxProbes: 2048,
  });

  const stats = await bakeProbeIrradianceFromLightmaps(renderer, bakeResult, volume, {
    sampleStride: 3,
    fillIterations: 5,
    intensity: 1,
    rowsPerYield: 24,
  });
  console.info('[baker:probes] generated', stats);

  const debugView = createProbeDebugView(volume, {
    opacity: 0.85,
  });
  scene.add(debugView);

  const binding = bindProbeLighting(dynamicMesh, volume, {
    intensity: 1,
    multiplyByAlbedo: true,
  });

  return {
    volume,
    debugView,
    binding,
    update: () => binding.update(),
    dispose: () => {
      binding.dispose();
      scene.remove(debugView);
      debugView.dispose();
    },
  };
}
