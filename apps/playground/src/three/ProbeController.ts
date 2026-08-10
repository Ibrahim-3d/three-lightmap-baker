import {
  Box3,
  Mesh,
  MeshStandardMaterial,
  Scene,
  SphereGeometry,
  Vector3,
  type Object3D,
  type Texture,
  type WebGLRenderer,
} from 'three';
import {
  ProbeDebugView,
  ProbeLightingBinding,
  ProbeVolume,
  createProbeDebugView,
  generateProbeVolume,
  type BakeGroupView,
  type LightmapBakeResult,
  type ProbeBakeStats,
  type ProbeVolumeJSON,
} from 'baker-classic';
import { ProbeGridPreview, type ProbeGridPreviewResult } from './ProbeGridPreview';

type LiveBakeGroup = {
  atlasIdx: number;
  composite: { texture: Texture };
  refinement: { texture: Texture } | null;
};

export type PlaygroundProbeOptions = {
  spacing: number;
  padding: number;
  intensity: number;
  sampleStride: number;
  fillIterations: number;
  maxProbes: number;
  showProbes: boolean;
  showDemo: boolean;
  animateDemo: boolean;
};

export type ProbeGenerationHooks = {
  signal?: AbortSignal;
  onProgress?: (progress: number) => void;
};

/**
 * Playground-side owner for probe generation, visualization, persistence, and
 * the dynamic-object demonstration. The package owns probe algorithms; this
 * controller owns scene objects and their lifecycle.
 */
export class ProbeController {
  volume: ProbeVolume | null = null;
  debugView: ProbeDebugView | null = null;
  previewView: ProbeGridPreview | null = null;
  demoMesh: Mesh<SphereGeometry, MeshStandardMaterial> | null = null;
  demoBinding: ProbeLightingBinding | null = null;
  lastGenerationStats: ProbeBakeStats | null = null;

  private readonly hiddenForProbeLayer = new Map<Object3D, boolean>();
  private probeOnly = false;
  private options: PlaygroundProbeOptions | null = null;

  constructor(
    private readonly renderer: WebGLRenderer,
    private readonly scene: Scene,
    private readonly getBakeResult: () => LightmapBakeResult | null,
    private readonly getLiveBakeGroups: () => ReadonlyArray<LiveBakeGroup> = () => [],
  ) {}

  get probeCount(): number {
    return this.volume?.probeCount ?? 0;
  }

  get hasVolume(): boolean {
    return this.volume !== null;
  }

  preview(options: PlaygroundProbeOptions): ProbeGridPreviewResult {
    this.clearPreview();
    const preview = new ProbeGridPreview(
      this.resolveBounds(),
      options.spacing,
      options.padding,
      options.maxProbes,
    );
    this.previewView = preview;
    this.scene.add(preview);
    return preview.result;
  }

  clearPreview(): void {
    if (!this.previewView) return;
    this.scene.remove(this.previewView);
    this.previewView.dispose();
    this.previewView = null;
  }

  async generate(
    options: PlaygroundProbeOptions,
    hooks: ProbeGenerationHooks = {},
  ): Promise<ProbeBakeStats> {
    const bakeResult = this.getBakeResult();
    if (!bakeResult) {
      throw new Error('[baker:probes] bake the scene before generating probes');
    }

    this.clearPreview();
    const bounds = boundsFromBakeResult(bakeResult);
    const liveGroups = this.getLiveBakeGroups();
    const source = {
      groups: bakeResult.groups.map((group, index) =>
        withLiveFinalTexture(
          group,
          liveGroups.find((item) => item.atlasIdx === index) ?? liveGroups[index],
        ),
      ),
    };

    const generated = await generateProbeVolume(
      this.renderer,
      bounds,
      source,
      {
        bounds,
        spacing: options.spacing,
        padding: options.padding,
        maxProbes: options.maxProbes,
        bake: {
          sampleStride: options.sampleStride,
          fillIterations: options.fillIterations,
          intensity: 1,
        },
      },
      hooks,
    );

    this.installVolume(generated.volume, options);
    this.lastGenerationStats = generated.stats;
    return generated.stats;
  }

  restore(json: ProbeVolumeJSON, options: PlaygroundProbeOptions): void {
    this.installVolume(ProbeVolume.fromJSON(json), options);
  }

  serialize(): ProbeVolumeJSON | undefined {
    return this.volume?.toJSON();
  }

  clear(): void {
    this.setProbeOnly(false);
    this.clearPreview();
    this.destroyDemo();
    if (this.debugView) {
      this.scene.remove(this.debugView);
      this.debugView.dispose();
      this.debugView = null;
    }
    this.volume = null;
    this.lastGenerationStats = null;
    this.options = null;
  }

  setShowProbes(visible: boolean): void {
    if (this.options) this.options.showProbes = visible;
    if (this.debugView) this.debugView.visible = this.probeOnly || visible;
  }

  setDemoEnabled(enabled: boolean): void {
    if (this.options) this.options.showDemo = enabled;
    if (!enabled) {
      this.destroyDemo();
      return;
    }
    if (this.volume && this.options && !this.demoMesh) this.createDemo(this.options);
  }

  setDemoAnimation(enabled: boolean): void {
    if (this.options) this.options.animateDemo = enabled;
  }

  setIntensity(intensity: number): void {
    if (!this.options) return;
    this.options.intensity = Math.max(0, intensity);
    if (this.demoMesh && this.volume) {
      this.demoBinding?.dispose();
      this.demoBinding = new ProbeLightingBinding(this.demoMesh, this.volume, {
        intensity: this.options.intensity,
      });
    }
  }

  /** Hide normal renderables and leave only the probe debug instances. */
  setProbeOnly(active: boolean): void {
    if (active) {
      const debugView = this.debugView;
      if (!debugView || this.probeOnly) return;

      this.probeOnly = true;
      this.hiddenForProbeLayer.clear();
      this.scene.traverse((obj) => {
        const renderable = obj as Object3D & {
          isMesh?: boolean;
          isLine?: boolean;
          isPoints?: boolean;
          isSprite?: boolean;
        };
        if (
          !renderable.isMesh &&
          !renderable.isLine &&
          !renderable.isPoints &&
          !renderable.isSprite
        ) {
          return;
        }
        if (obj.userData?.bakerProbeDebug) return;
        this.hiddenForProbeLayer.set(obj, obj.visible);
        obj.visible = false;
      });
      debugView.visible = true;
      return;
    }

    if (!this.probeOnly) return;
    this.probeOnly = false;
    for (const [obj, wasVisible] of this.hiddenForProbeLayer) obj.visible = wasVisible;
    this.hiddenForProbeLayer.clear();
    if (this.debugView) this.debugView.visible = this.options?.showProbes ?? false;
  }

  update(timeSeconds: number): void {
    const mesh = this.demoMesh;
    const volume = this.volume;
    const options = this.options;
    if (!mesh || !volume || !options) return;

    if (options.animateDemo) {
      const size = volume.bounds.getSize(_size);
      const center = volume.bounds.getCenter(_center);
      const margin = Math.min(size.x * 0.12, 0.25);
      const minX = volume.bounds.min.x + margin;
      const maxX = volume.bounds.max.x - margin;
      const t = 0.5 + 0.5 * Math.sin(timeSeconds * 0.7);
      mesh.position.set(
        minX + Math.max(0, maxX - minX) * t,
        volume.bounds.min.y + size.y * 0.35,
        center.z,
      );
    }

    this.demoBinding?.update();
  }

  dispose(): void {
    this.clear();
  }

  private resolveBounds(): Box3 {
    const bakeResult = this.getBakeResult();
    return bakeResult ? boundsFromBakeResult(bakeResult) : boundsFromScene(this.scene);
  }

  private installVolume(volume: ProbeVolume, options: PlaygroundProbeOptions): void {
    this.clear();
    this.volume = volume;
    this.options = { ...options };

    this.debugView = createProbeDebugView(volume, {
      opacity: 1,
    });
    this.debugView.userData.bakerProbeDebug = true;
    this.debugView.mesh.userData.bakerProbeDebug = true;
    this.debugView.visible = options.showProbes;
    this.scene.add(this.debugView);

    if (options.showDemo) this.createDemo(options);
  }

  private createDemo(options: PlaygroundProbeOptions): void {
    const volume = this.volume;
    if (!volume || this.demoMesh) return;

    const size = volume.bounds.getSize(_size);
    const radius = Math.min(0.3, Math.max(0.08, Math.min(size.x, size.y, size.z) * 0.055));
    const material = new MeshStandardMaterial({
      name: 'ProbeDemoMaterial',
      color: 0xffffff,
      roughness: 0.72,
      metalness: 0.05,
    });
    const mesh = new Mesh(new SphereGeometry(radius, 32, 20), material);
    mesh.name = 'Probe Dynamic Demo Sphere';
    mesh.userData.lightmapIgnore = true;
    mesh.userData.bakerProbeDemo = true;
    mesh.castShadow = true;
    mesh.receiveShadow = false;
    volume.bounds.getCenter(mesh.position);
    this.scene.add(mesh);

    this.demoMesh = mesh;
    this.demoBinding = new ProbeLightingBinding(mesh, volume, {
      intensity: Math.max(0, options.intensity),
    });
    this.demoBinding.update();
  }

  private destroyDemo(): void {
    this.demoBinding?.dispose();
    this.demoBinding = null;
    if (!this.demoMesh) return;
    this.scene.remove(this.demoMesh);
    this.demoMesh.geometry.dispose();
    this.demoMesh.material.dispose();
    this.demoMesh = null;
  }
}

const _size = new Vector3();
const _center = new Vector3();

function withLiveFinalTexture(
  group: BakeGroupView,
  live: LiveBakeGroup | undefined,
): BakeGroupView {
  if (!live) return group;
  return {
    ...group,
    textures: {
      ...group.textures,
      composite: live.composite.texture,
      refinement: live.refinement?.texture ?? null,
    },
  };
}

function boundsFromBakeResult(result: LightmapBakeResult): Box3 {
  const bounds = new Box3();
  for (const group of result.groups) {
    for (const mesh of group.meshes) bounds.expandByObject(mesh, true);
  }
  if (bounds.isEmpty()) {
    throw new Error('[baker:probes] completed bake has no bounded meshes');
  }
  return bounds;
}

function boundsFromScene(scene: Scene): Box3 {
  const bounds = new Box3();
  scene.traverse((object) => {
    const mesh = object as Mesh;
    if (
      !mesh.isMesh ||
      !mesh.visible ||
      object.userData?.lightmapIgnore ||
      object.userData?.bakerProbeDebug ||
      object.userData?.bakerProbePreview
    ) {
      return;
    }
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const isSurface = materials.some(
      (material) =>
        material && (material as { isMeshStandardMaterial?: boolean }).isMeshStandardMaterial,
    );
    if (isSurface) bounds.expandByObject(mesh, true);
  });
  if (bounds.isEmpty()) throw new Error('[baker:probes] scene has no bounded lightmap surfaces');
  return bounds;
}
