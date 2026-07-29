import {
  Box3,
  Color,
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
  generateProbeGrid,
  generateProbeVolume,
  type BakeGroupView,
  type LightmapBakeResult,
  type ProbeBakeStats,
  type ProbeVolumeJSON,
} from 'baker-classic';

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

export type ProbeLayoutResult = {
  probeCount: number;
  effectiveSpacing: number;
  spacingAdjusted: boolean;
};

export type ProbeGenerationResult = ProbeBakeStats & ProbeLayoutResult;

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
  private previewOnly = false;
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
    return this.volume !== null && !this.previewOnly;
  }

  get hasVisualization(): boolean {
    return this.debugView !== null;
  }

  preview(options: PlaygroundProbeOptions): ProbeLayoutResult {
    const bounds = this.resolveBounds();
    const layout = fitProbeLayout(bounds, options);
    const volume = generateProbeGrid(bounds, {
      bounds,
      spacing: layout.effectiveSpacing,
      padding: options.padding,
      maxProbes: options.maxProbes,
    });
    const previewColor = new Color(0.08, 0.35, 1);
    for (let index = 0; index < volume.probeCount; index++) {
      volume.setIrradiance(index, previewColor);
    }
    this.installVolume(
      volume,
      { ...options, spacing: layout.effectiveSpacing, showDemo: false },
      true,
    );
    return layout;
  }

  async generate(
    options: PlaygroundProbeOptions,
    hooks: ProbeGenerationHooks = {},
  ): Promise<ProbeGenerationResult> {
    const bakeResult = this.getBakeResult();
    if (!bakeResult) {
      throw new Error('[baker:probes] bake the scene before generating probe lighting');
    }

    const bounds = boundsFromBakeResult(bakeResult);
    const layout = fitProbeLayout(bounds, options);
    const liveGroups = this.getLiveBakeGroups();
    const source = {
      groups: bakeResult.groups.map((group, index) =>
        withLiveFinalTexture(
          group,
          liveGroups.find((item) => item.atlasIdx === index) ?? liveGroups[index],
        ),
      ),
    };

    this.clear();
    const generated = await generateProbeVolume(
      this.renderer,
      bounds,
      source,
      {
        bounds,
        spacing: layout.effectiveSpacing,
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

    this.installVolume(generated.volume, { ...options, spacing: layout.effectiveSpacing }, false);
    return { ...generated.stats, ...layout };
  }

  restore(json: ProbeVolumeJSON, options: PlaygroundProbeOptions): void {
    this.installVolume(ProbeVolume.fromJSON(json), options, false);
  }

  serialize(): ProbeVolumeJSON | undefined {
    return this.previewOnly ? undefined : this.volume?.toJSON();
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
    this.previewOnly = false;
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
    if (!enabled || this.previewOnly) {
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
    if (this.demoMesh && this.volume && !this.previewOnly) {
      this.demoBinding?.dispose();
      this.demoBinding = new ProbeLightingBinding(this.demoMesh, this.volume, {
        intensity: this.options.intensity,
      });
    }
    this.debugView?.setExposure(this.previewOnly ? 1 : Math.max(0, intensity));
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
    if (!mesh || !volume || !options || this.previewOnly) return;

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

  private installVolume(
    volume: ProbeVolume,
    options: PlaygroundProbeOptions,
    previewOnly: boolean,
  ): void {
    this.clear();
    this.volume = volume;
    this.previewOnly = previewOnly;
    this.options = { ...options };

    this.debugView = createProbeDebugView(volume, {
      exposure: previewOnly ? 1 : Math.max(0, options.intensity),
      opacity: previewOnly ? 0.55 : 0.95,
      autoExposure: !previewOnly,
    });
    this.debugView.name = previewOnly ? 'ProbeGridPreview' : 'ProbeDebugView';
    this.debugView.userData.bakerProbeDebug = true;
    this.debugView.mesh.userData.bakerProbeDebug = true;
    this.debugView.visible = options.showProbes;
    this.scene.add(this.debugView);

    if (!previewOnly && options.showDemo) this.createDemo(options);
  }

  private createDemo(options: PlaygroundProbeOptions): void {
    const volume = this.volume;
    if (!volume || this.demoMesh || this.previewOnly) return;

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

function fitProbeLayout(bounds: Box3, options: PlaygroundProbeOptions): ProbeLayoutResult {
  const padded = bounds.clone();
  if (options.padding > 0) padded.expandByScalar(options.padding);
  const size = padded.getSize(new Vector3());
  const requested = Math.max(0.05, options.spacing);
  const maxProbes = Math.max(1, Math.floor(options.maxProbes));
  let spacing = requested;
  let probeCount = countForSize(size, spacing);

  for (let attempt = 0; probeCount > maxProbes && attempt < 12; attempt++) {
    spacing *= Math.max(1.02, Math.cbrt(probeCount / maxProbes) * 1.02);
    probeCount = countForSize(size, spacing);
  }

  return {
    probeCount,
    effectiveSpacing: spacing,
    spacingAdjusted: Math.abs(spacing - requested) > 1.0e-6,
  };
}

function countForSize(size: Vector3, spacing: number): number {
  const axis = (value: number): number =>
    value <= 1.0e-4 ? 1 : Math.max(2, Math.ceil(value / spacing) + 1);
  return axis(size.x) * axis(size.y) * axis(size.z);
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
      object.userData?.bakerProbeDebug
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
