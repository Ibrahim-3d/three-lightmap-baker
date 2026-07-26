import {
  Color,
  Group,
  InstancedMesh,
  Matrix4,
  MeshBasicMaterial,
  SphereGeometry,
  Vector3,
} from 'three';
import { ProbeVolume } from './ProbeVolume';

export type ProbeDebugViewOptions = {
  radius?: number;
  exposure?: number;
  opacity?: number;
  widthSegments?: number;
  heightSegments?: number;
};

/** Colored instanced spheres for inspecting probe placement and irradiance. */
export class ProbeDebugView extends Group {
  readonly mesh: InstancedMesh;
  private readonly geometry: SphereGeometry;
  private readonly material: MeshBasicMaterial;
  private readonly probePosition = new Vector3();
  private readonly probeMatrix = new Matrix4();
  private readonly color = new Color();
  private exposure: number;

  constructor(
    readonly volume: ProbeVolume,
    options: ProbeDebugViewOptions = {},
  ) {
    super();
    this.name = 'ProbeDebugView';
    this.exposure = Math.max(0, options.exposure ?? 1);
    const radius = Math.max(1.0e-4, options.radius ?? defaultRadius(volume));
    const opacity = Math.min(1, Math.max(0, options.opacity ?? 0.9));
    this.geometry = new SphereGeometry(
      radius,
      Math.max(4, Math.floor(options.widthSegments ?? 8)),
      Math.max(3, Math.floor(options.heightSegments ?? 6)),
    );
    this.material = new MeshBasicMaterial({
      vertexColors: true,
      toneMapped: false,
      transparent: opacity < 1,
      opacity,
      depthWrite: opacity >= 1,
    });
    this.mesh = new InstancedMesh(this.geometry, this.material, volume.probeCount);
    this.mesh.name = 'ProbeDebugSpheres';
    this.mesh.frustumCulled = false;
    this.add(this.mesh);
    this.refresh();
  }

  setExposure(exposure: number): void {
    this.exposure = Math.max(0, exposure);
    this.refreshColors();
  }

  refresh(): void {
    for (let index = 0; index < this.volume.probeCount; index++) {
      this.volume.getPosition(index, this.probePosition);
      this.probeMatrix.makeTranslation(
        this.probePosition.x,
        this.probePosition.y,
        this.probePosition.z,
      );
      this.mesh.setMatrixAt(index, this.probeMatrix);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    this.refreshColors();
  }

  refreshColors(): void {
    for (let index = 0; index < this.volume.probeCount; index++) {
      this.volume.getIrradiance(index, this.color);
      this.color.multiplyScalar(this.exposure);
      this.color.setRGB(
        this.color.r / (1 + this.color.r),
        this.color.g / (1 + this.color.g),
        this.color.b / (1 + this.color.b),
      );
      this.mesh.setColorAt(index, this.color);
    }
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }

  dispose(): void {
    this.remove(this.mesh);
    this.geometry.dispose();
    this.material.dispose();
  }
}

export function createProbeDebugView(
  volume: ProbeVolume,
  options: ProbeDebugViewOptions = {},
): ProbeDebugView {
  return new ProbeDebugView(volume, options);
}

function defaultRadius(volume: ProbeVolume): number {
  const spacing = [volume.spacing.x, volume.spacing.y, volume.spacing.z].filter((value) => value > 0);
  return (spacing.length ? Math.min(...spacing) : 1) * 0.08;
}
