import {
  Box3,
  Mesh,
  MeshStandardMaterial,
  Scene,
  Vector3,
  type Object3D,
  type Texture,
  type WebGLRenderer,
} from 'three';
import { LightProbeGrid } from 'three/addons/lighting/LightProbeGrid.js';
import { LightProbeGridHelper } from 'three/addons/helpers/LightProbeGridHelper.js';
import {
  captureLightmappedProbeGrid,
  captureLightmappedProbeGridFromJSON,
  ProbeDebugView,
  ProbeVolume,
  createProbeDebugView,
  generateProbeVolume,
  type BakeGroupView,
  type LightmapBakeResult,
  type NativeLightProbeGridJSON,
  type NativeLightProbeGridStats,
  type ProbeBakeStats,
  type ProbeVolumeJSON,
} from 'baker-classic';
import { ProbeGridPreview, type ProbeGridPreviewResult } from './ProbeGridPreview';
import { ProbeDemoController } from './ProbeDemoController';

type LiveBakeGroup = {
  atlasIdx: number;
  composite: { texture: Texture };
  refinement: { texture: Texture } | null;
};

export type PlaygroundProbeOptions = {
  runtime: 'native' | 'legacy';
  spacing: number;
  padding: number;
  intensity: number;
  sampleStride: number;
  fillIterations: number;
  maxProbes: number;
  cubemapSize: number;
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
  nativeGrid: LightProbeGrid | null = null;
  nativeHelper: LightProbeGridHelper | null = null;
  nativeDescriptor: NativeLightProbeGridJSON | null = null;
  volume: ProbeVolume | null = null;
  debugView: ProbeDebugView | null = null;
  previewView: ProbeGridPreview | null = null;
  lastGenerationStats: ProbeBakeStats | NativeLightProbeGridStats | null = null;

  private readonly hiddenForProbeLayer = new Map<Object3D, boolean>();
  private probeOnly = false;
  private options: PlaygroundProbeOptions | null = null;
  private releaseFrameLifecycle: (() => void) | null = null;
  private readonly demo: ProbeDemoController;

  constructor(
    private readonly renderer: WebGLRenderer,
    private readonly scene: Scene,
    private readonly getBakeResult: () => LightmapBakeResult | null,
    private readonly getLiveBakeGroups: () => ReadonlyArray<LiveBakeGroup> = () => [],
  ) {
    this.demo = new ProbeDemoController(scene);
  }

  get demoMesh(): ProbeDemoController['mesh'] {
    return this.demo.mesh;
  }

  get demoBinding(): ProbeDemoController['binding'] {
    return this.demo.binding;
  }

  get probeCount(): number {
    if (this.nativeGrid) {
      const r = this.nativeGrid.resolution;
      return r.x * r.y * r.z;
    }
    return this.volume?.probeCount ?? 0;
  }

  get hasVolume(): boolean {
    return this.nativeGrid !== null || this.volume !== null;
  }

  get activeRuntime(): 'native' | 'legacy' | null {
    if (this.nativeGrid) return 'native';
    if (this.volume) return 'legacy';
    return null;
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
  ): Promise<ProbeBakeStats | NativeLightProbeGridStats> {
    if (options.runtime === 'native') return this.generateNative(options, hooks);
    return this.generateLegacy(options, hooks);
  }

  private async generateLegacy(
    options: PlaygroundProbeOptions,
    hooks: ProbeGenerationHooks,
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

  private async generateNative(
    options: PlaygroundProbeOptions,
    hooks: ProbeGenerationHooks,
  ): Promise<NativeLightProbeGridStats> {
    const bakeResult = this.getBakeResult();
    if (!bakeResult) {
      throw new Error('[baker:probes] bake the static scene before capturing native probes');
    }

    this.clearPreview();
    this.clear();
    hooks.onProgress?.(0.02);
    await nextFrame();
    checkAbort(hooks.signal);

    const result = captureLightmappedProbeGrid(this.renderer, this.scene, bakeResult, {
      spacing: options.spacing,
      padding: options.padding,
      maxProbes: options.maxProbes,
      cubemapSize: options.cubemapSize,
      bounces: 0,
      lightMapIntensity: options.intensity,
      resolveBaseColorMap: (_mesh, material) =>
        (material as MeshStandardMaterial & { _originalMap?: Texture | null })._originalMap,
    });
    this.installNative(result.grid, result.descriptor, options);
    this.lastGenerationStats = result.stats;
    hooks.onProgress?.(1);
    return result.stats;
  }

  restore(json: ProbeVolumeJSON, options: PlaygroundProbeOptions): void {
    this.installVolume(ProbeVolume.fromJSON(json), { ...options, runtime: 'legacy' });
  }

  async restoreNative(
    json: NativeLightProbeGridJSON,
    options: PlaygroundProbeOptions,
  ): Promise<void> {
    const bakeResult = this.getBakeResult();
    this.clear();
    await nextFrame();
    const result = captureLightmappedProbeGridFromJSON(
      this.renderer,
      this.scene,
      bakeResult,
      json,
      {
        maxProbes: options.maxProbes,
        lightMapIntensity: options.intensity,
        resolveBaseColorMap: (_mesh, material) =>
          (material as MeshStandardMaterial & { _originalMap?: Texture | null })._originalMap,
      },
    );
    this.installNative(result.grid, result.descriptor, { ...options, runtime: 'native' });
    this.lastGenerationStats = result.stats;
  }

  serialize(): ProbeVolumeJSON | undefined {
    return this.volume?.toJSON();
  }

  serializeNative(): NativeLightProbeGridJSON | undefined {
    return this.nativeDescriptor ?? undefined;
  }

  clear(): void {
    this.setProbeOnly(false);
    this.clearPreview();
    this.demo.clear();
    if (this.nativeHelper) {
      this.scene.remove(this.nativeHelper);
      this.nativeHelper.dispose();
      this.nativeHelper = null;
    }
    if (this.nativeGrid) {
      this.scene.remove(this.nativeGrid);
      this.nativeGrid.dispose();
      this.nativeGrid = null;
    }
    if (this.debugView) {
      this.scene.remove(this.debugView);
      this.debugView.dispose();
      this.debugView = null;
    }
    this.volume = null;
    this.nativeDescriptor = null;
    this.lastGenerationStats = null;
    this.options = null;
  }

  setShowProbes(visible: boolean): void {
    if (this.options) this.options.showProbes = visible;
    if (this.debugView) this.debugView.visible = this.probeOnly || visible;
    if (this.nativeHelper) this.nativeHelper.visible = this.probeOnly || visible;
  }

  setDemoEnabled(enabled: boolean): void {
    if (this.options) this.options.showDemo = enabled;
    if (!enabled) {
      this.demo.clear();
      return;
    }
    this.demo.setEnabled(enabled, this.runtimeBounds(), this.volume);
  }

  setDemoAnimation(enabled: boolean): void {
    if (this.options) this.options.animateDemo = enabled;
    this.demo.setAnimated(enabled);
  }

  setIntensity(intensity: number): void {
    if (!this.options) return;
    this.options.intensity = Math.max(0, intensity);
    this.demo.setIntensity(this.options.intensity, this.volume);
  }

  /** Hide normal renderables and leave only the probe debug instances. */
  setProbeOnly(active: boolean): void {
    if (active) {
      const debugView = this.debugView ?? this.nativeHelper;
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
    if (this.nativeHelper) this.nativeHelper.visible = this.options?.showProbes ?? false;
  }

  update(timeSeconds: number): void {
    const bounds = this.runtimeBounds();
    this.demo.update(timeSeconds, bounds);
  }

  ownFrameLifecycle(release: () => void): void {
    this.releaseFrameLifecycle?.();
    this.releaseFrameLifecycle = release;
  }

  dispose(): void {
    this.releaseFrameLifecycle?.();
    this.releaseFrameLifecycle = null;
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

    this.demo.configure(options.showDemo, options.animateDemo, options.intensity);
    this.demo.sync(this.runtimeBounds(), this.volume);
  }

  private installNative(
    grid: LightProbeGrid,
    descriptor: NativeLightProbeGridJSON,
    options: PlaygroundProbeOptions,
  ): void {
    this.nativeGrid = grid;
    this.nativeDescriptor = descriptor;
    this.options = { ...options, runtime: 'native' };

    const size = grid.boundingBox.getSize(_size);
    const helperRadius = Math.min(0.12, Math.max(0.025, Math.min(size.x, size.y, size.z) * 0.018));
    const helper = new LightProbeGridHelper(grid, helperRadius);
    helper.name = 'Native L2 SH Probe Grid Helper';
    helper.userData.bakerProbeDebug = true;
    helper.visible = options.showProbes;
    this.nativeHelper = helper;
    this.scene.add(helper);

    this.demo.configure(options.showDemo, options.animateDemo, options.intensity);
    this.demo.sync(this.runtimeBounds(), this.volume);
  }

  private runtimeBounds(): Box3 | null {
    return this.nativeGrid?.boundingBox ?? this.volume?.bounds ?? null;
  }
}

const _size = new Vector3();

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
  return boundsFromMeshes(result.groups.flatMap((group) => [...group.meshes]));
}

function boundsFromMeshes(meshes: Iterable<Mesh>): Box3 {
  const bounds = new Box3();
  for (const mesh of meshes) bounds.expandByObject(mesh, true);
  if (bounds.isEmpty()) throw new Error('[baker:probes] completed bake has no bounded meshes');
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

function checkAbort(signal: AbortSignal | undefined): void {
  if (!signal?.aborted) return;
  throw new DOMException('Probe capture aborted', 'AbortError');
}

function nextFrame(): Promise<void> {
  if (typeof requestAnimationFrame === 'function') {
    return new Promise((resolve) => requestAnimationFrame(() => resolve()));
  }
  return Promise.resolve();
}
