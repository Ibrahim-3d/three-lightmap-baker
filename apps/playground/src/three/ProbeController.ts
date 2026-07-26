import {
  Box3,
  Mesh,
  MeshStandardMaterial,
  Scene,
  SphereGeometry,
  Vector3,
  type Object3D,
  type WebGLRenderer,
} from 'three';
import {
  ProbeDebugView,
  ProbeLightingBinding,
  ProbeVolume,
  createProbeDebugView,
  generateProbeVolume,
  type LightmapBakeResult,
  type ProbeBakeStats,
  type ProbeVolumeJSON,
} from 'baker-classic';

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
  demoMesh: Mesh<SphereGeometry, MeshStandardMaterial> | null = null;
  demoBinding: ProbeLightingBinding | null = null;

  private readonly hiddenForProbeLayer = new Map<Object3D, boolean>();
  private probeOnly = false;
  private options: PlaygroundProbeOptions | null = null;

  constructor(
    private readonly renderer: WebGLRenderer,
    private readonly scene: Scene,
    private readonly getBakeResult: () => LightmapBakeResult | null,
  ) {}

  get probeCount(): number {
    return this.volume?.probeCount ?? 0;
  }

  get hasVolume(): boolean {
    return this.volume !== null;
  }

  async generate(
    options: PlaygroundProbeOptions,
    hooks: ProbeGenerationHooks = {},
  ): Promise<ProbeBakeStats> {
    const bakeResult = this.getBakeResult();
    if (!bakeResult) {
      throw new Error('[baker:probes] bake the scene before generating probes');
    }

    const bounds = boundsFromBakeResult(bakeResult);
    const generated = await generateProbeVolume(
      this.renderer,
      bounds,
      bakeResult,
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
    this.destroyDemo();
    if (this.debugView) {
      this.scene.remove(this.debugView);
      this.debugView.dispose();
      this.debugView = null;
    }
    this.volume = null;
    this.options = null;
  }

  setShowProbes(visible: boolean): void {
    if (this.options) this.options.showProbes = visible;
    if (this.debugView) this.debugView.visible = this.probeOnly || visible;
  }

  setProbeExposure(exposure: number): void {
    this.debugView?.setExposure(exposure);
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
    this.debugView?.setExposure(Math.max(0, intensity));
  }

  /** Hide normal renderables and leave only the colored probe debug instances. */
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

  private installVolume(volume: ProbeVolume, options: PlaygroundProbeOptions): void {
    this.clear();
    this.volume = volume;
    this.options = { ...options };

    this.debugView = createProbeDebugView(volume, {
      exposure: Math.max(0, options.intensity),
      opacity: 0.95,
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
