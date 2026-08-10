import {
  Box3,
  Box3Helper,
  Group,
  InstancedMesh,
  Matrix4,
  MeshBasicMaterial,
  SphereGeometry,
  Vector3,
} from 'three';

const MIN_SPACING = 1.0e-4;

export type ProbeGridPreviewResult = {
  probeCount: number;
  counts: readonly [number, number, number];
  actualSpacing: readonly [number, number, number];
  bounds: Box3;
  overLimit: boolean;
};

/** Geometry-only visualization derived from target/maximum spacing. */
export class ProbeGridPreview extends Group {
  readonly result: ProbeGridPreviewResult;

  private readonly markerGeometry: SphereGeometry | null;
  private readonly markerMaterial: MeshBasicMaterial | null;
  private readonly markers: InstancedMesh | null;
  private readonly boundsHelper: Box3Helper;

  constructor(sourceBounds: Box3, spacing: number, padding: number, maxProbes: number) {
    super();
    this.name = 'ProbeGridPreview';
    this.userData.bakerProbePreview = true;
    this.userData.lightmapIgnore = true;

    if (!Number.isFinite(spacing) || spacing < MIN_SPACING) {
      throw new Error(`[baker:probes] spacing must be at least ${MIN_SPACING}`);
    }
    if (!Number.isFinite(padding) || padding < 0) {
      throw new Error('[baker:probes] padding must be a finite non-negative number');
    }

    const bounds = sourceBounds.clone();
    if (padding > 0) bounds.expandByScalar(padding);
    const size = bounds.getSize(new Vector3());
    const counts = [
      countForAxis(size.x, spacing),
      countForAxis(size.y, spacing),
      countForAxis(size.z, spacing),
    ] as const;
    const actualSpacing = [
      counts[0] > 1 ? size.x / (counts[0] - 1) : 0,
      counts[1] > 1 ? size.y / (counts[1] - 1) : 0,
      counts[2] > 1 ? size.z / (counts[2] - 1) : 0,
    ] as const;
    const probeCount = counts[0] * counts[1] * counts[2];
    const overLimit = probeCount > Math.max(1, Math.floor(maxProbes));
    this.result = { probeCount, counts, actualSpacing, bounds: bounds.clone(), overLimit };

    this.boundsHelper = new Box3Helper(bounds, overLimit ? 0xff5555 : 0x67c8ff);
    this.boundsHelper.name = 'ProbePreviewBounds';
    this.boundsHelper.userData.bakerProbePreview = true;
    this.boundsHelper.userData.lightmapIgnore = true;
    this.add(this.boundsHelper);

    if (overLimit) {
      this.markerGeometry = null;
      this.markerMaterial = null;
      this.markers = null;
      return;
    }

    const radius = Math.max(0.015, spacing * 0.055);
    this.markerGeometry = new SphereGeometry(radius, 6, 4);
    this.markerMaterial = new MeshBasicMaterial({
      color: 0x67c8ff,
      transparent: true,
      opacity: 0.42,
      depthWrite: false,
      toneMapped: false,
    });
    this.markers = new InstancedMesh(this.markerGeometry, this.markerMaterial, probeCount);
    this.markers.name = 'ProbePreviewMarkers';
    this.markers.frustumCulled = false;
    this.markers.userData.bakerProbePreview = true;
    this.markers.userData.lightmapIgnore = true;

    const matrix = new Matrix4();
    let index = 0;
    for (let z = 0; z < counts[2]; z++) {
      const pz = coordinate(bounds.min.z, bounds.max.z, counts[2], z);
      for (let y = 0; y < counts[1]; y++) {
        const py = coordinate(bounds.min.y, bounds.max.y, counts[1], y);
        for (let x = 0; x < counts[0]; x++) {
          const px = coordinate(bounds.min.x, bounds.max.x, counts[0], x);
          matrix.makeTranslation(px, py, pz);
          this.markers.setMatrixAt(index++, matrix);
        }
      }
    }
    this.markers.instanceMatrix.needsUpdate = true;
    this.add(this.markers);
  }

  dispose(): void {
    this.remove(this.boundsHelper);
    this.boundsHelper.geometry.dispose();
    const boundsMaterials = Array.isArray(this.boundsHelper.material)
      ? this.boundsHelper.material
      : [this.boundsHelper.material];
    for (const material of boundsMaterials) material.dispose();
    if (this.markers) this.remove(this.markers);
    this.markerGeometry?.dispose();
    this.markerMaterial?.dispose();
  }
}

function countForAxis(size: number, spacing: number): number {
  if (size <= MIN_SPACING) return 1;
  return Math.max(2, Math.ceil(size / spacing) + 1);
}

function coordinate(min: number, max: number, count: number, index: number): number {
  if (count <= 1) return (min + max) * 0.5;
  return min + ((max - min) * index) / (count - 1);
}
