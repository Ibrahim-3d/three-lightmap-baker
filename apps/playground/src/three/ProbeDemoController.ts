import { Box3, Mesh, MeshStandardMaterial, Scene, SphereGeometry, Vector3 } from 'three';
import { ProbeLightingBinding, ProbeVolume } from 'baker-classic';

const size = new Vector3();
const center = new Vector3();

/** Owns the optional dynamic sphere, its legacy binding, and animation state. */
export class ProbeDemoController {
  mesh: Mesh<SphereGeometry, MeshStandardMaterial> | null = null;
  binding: ProbeLightingBinding | null = null;
  private enabled = false;
  private animated = false;
  private intensity = 1;

  constructor(private readonly scene: Scene) {}

  configure(enabled: boolean, animated: boolean, intensity: number): void {
    this.enabled = enabled;
    this.animated = animated;
    this.intensity = Math.max(0, intensity);
  }

  sync(bounds: Box3 | null, volume: ProbeVolume | null): void {
    if (!this.enabled || !bounds) {
      this.clear();
      return;
    }
    if (!this.mesh) this.create(bounds);
    this.rebind(volume);
  }

  setEnabled(enabled: boolean, bounds: Box3 | null, volume: ProbeVolume | null): void {
    this.enabled = enabled;
    this.sync(bounds, volume);
  }

  setAnimated(animated: boolean): void {
    this.animated = animated;
  }

  setIntensity(intensity: number, volume: ProbeVolume | null): void {
    this.intensity = Math.max(0, intensity);
    this.rebind(volume);
  }

  update(timeSeconds: number, bounds: Box3 | null): void {
    const mesh = this.mesh;
    if (!mesh || !bounds) return;
    if (this.animated) {
      bounds.getSize(size);
      bounds.getCenter(center);
      const margin = Math.min(size.x * 0.12, 0.25);
      const minX = bounds.min.x + margin;
      const maxX = bounds.max.x - margin;
      const t = 0.5 + 0.5 * Math.sin(timeSeconds * 0.7);
      mesh.position.set(
        minX + Math.max(0, maxX - minX) * t,
        bounds.min.y + size.y * 0.35,
        center.z,
      );
    }
    this.binding?.update();
  }

  clear(): void {
    this.binding?.dispose();
    this.binding = null;
    if (!this.mesh) return;
    this.scene.remove(this.mesh);
    this.mesh.geometry.dispose();
    this.mesh.material.dispose();
    this.mesh = null;
  }

  private create(bounds: Box3): void {
    bounds.getSize(size);
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
    bounds.getCenter(mesh.position);
    this.scene.add(mesh);
    this.mesh = mesh;
  }

  private rebind(volume: ProbeVolume | null): void {
    this.binding?.dispose();
    this.binding = null;
    if (!this.mesh || !volume) return;
    this.binding = new ProbeLightingBinding(this.mesh, volume, { intensity: this.intensity });
    this.binding.update();
  }
}
