import {
  Color,
  GLSL3,
  Group,
  InstancedBufferAttribute,
  InstancedMesh,
  Matrix4,
  ShaderMaterial,
  SphereGeometry,
  Vector3,
} from 'three';
import { ProbeVolume } from './ProbeVolume';

export type ProbeDebugViewOptions = {
  radius?: number;
  opacity?: number;
  widthSegments?: number;
  heightSegments?: number;
};

/** Colored instanced spheres using a fixed display-only c/(1+c) tone mapping. */
export class ProbeDebugView extends Group {
  readonly mesh: InstancedMesh;
  private readonly geometry: SphereGeometry;
  private readonly material: ShaderMaterial;
  private readonly colorAttribute: InstancedBufferAttribute;
  private readonly probePosition = new Vector3();
  private readonly probeMatrix = new Matrix4();
  private readonly color = new Color();

  constructor(
    readonly volume: ProbeVolume,
    options: ProbeDebugViewOptions = {},
  ) {
    super();
    this.name = 'ProbeDebugView';
    const radius = Math.max(1.0e-4, options.radius ?? defaultRadius(volume));
    const opacity = Math.min(1, Math.max(0, options.opacity ?? 0.9));
    this.geometry = new SphereGeometry(
      radius,
      Math.max(4, Math.floor(options.widthSegments ?? 8)),
      Math.max(3, Math.floor(options.heightSegments ?? 6)),
    );
    this.material = new ShaderMaterial({
      glslVersion: GLSL3,
      uniforms: { opacity: { value: opacity } },
      toneMapped: false,
      transparent: opacity < 1,
      depthWrite: opacity >= 1,
      vertexShader: /* glsl */ `
        in vec3 probeColor;
        out vec3 vProbeColor;
        void main() {
          vProbeColor = probeColor;
          vec4 worldPosition = modelMatrix * instanceMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * viewMatrix * worldPosition;
        }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        uniform float opacity;
        in vec3 vProbeColor;
        out vec4 fragColor;
        void main() {
          fragColor = vec4(vProbeColor, opacity);
        }
      `,
    });
    this.mesh = new InstancedMesh(this.geometry, this.material, volume.probeCount);
    this.colorAttribute = new InstancedBufferAttribute(new Float32Array(volume.probeCount * 3), 3);
    this.geometry.setAttribute('probeColor', this.colorAttribute);
    this.mesh.instanceColor = this.colorAttribute;
    this.mesh.name = 'ProbeDebugSpheres';
    this.mesh.frustumCulled = false;
    this.add(this.mesh);
    this.refresh();
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
      // Fixed display-only Reinhard mapping. It does not mutate ProbeVolume,
      // interpolation, serialization, or runtime shader values. Zero stays zero.
      this.color.setRGB(
        this.color.r / (1 + this.color.r),
        this.color.g / (1 + this.color.g),
        this.color.b / (1 + this.color.b),
      );
      this.color.toArray(this.colorAttribute.array, index * 3);
    }
    this.colorAttribute.needsUpdate = true;
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
  const spacing = [volume.spacing.x, volume.spacing.y, volume.spacing.z].filter(
    (value) => value > 0,
  );
  return (spacing.length ? Math.min(...spacing) : 1) * 0.08;
}
