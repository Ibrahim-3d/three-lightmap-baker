/**
 * Ambient dust particles — port of ESL's `AmbientParticles.js`. MIT.
 *
 * Instanced billboard quads scattered in a volume around the camera area,
 * drifting via shader-time animation. Cheap atmospheric flavor; pure visual,
 * `lightmapIgnore = true` so the baker doesn't include them.
 */
import {
  Color,
  InstancedMesh,
  Matrix4,
  MeshBasicMaterial,
  Object3D,
  PlaneGeometry,
  ShaderChunk,
  TextureLoader,
  type Texture,
  type WebGLProgramParametersWithUniforms,
} from 'three';
import { ESL_BASE } from './esl-shared';

let _texture: Texture | null = null;
function getParticleTexture(): Texture {
  if (_texture) return _texture;
  const loader = new TextureLoader();
  _texture = loader.load(`${ESL_BASE}/particle.png`);
  return _texture;
}

export type DustZone = {
  center: [number, number, number];
  size: [number, number]; // x, z spread
  count?: number;
};

function patchAmbientParticles(shader: WebGLProgramParametersWithUniforms): void {
  shader.uniforms.time = {
    get value() {
      return performance.now() / 50000;
    },
  } as unknown as { value: number };
  shader.vertexShader =
    'varying float particleDepth;\nuniform float time;\n' +
    shader.vertexShader.replace(
      '#include <project_vertex>',
      /* glsl */ `
        vec4 mvPosition = vec4(transformed, 1.0);
        mat4 transformInstanceMatrix = mat4(instanceMatrix);
        float seed = transformInstanceMatrix[3][1] * transformInstanceMatrix[3][2] - transformInstanceMatrix[3][0];
        transformInstanceMatrix[3][0] += cos(time + seed) * 15. - 7.5;
        transformInstanceMatrix[3][1] += sin(time + seed) * 9.;
        transformInstanceMatrix[3][2] += cos(time + seed) * 7.5 - 7.5;
        mvPosition = modelViewMatrix * transformInstanceMatrix * inverse(viewMatrix) * mvPosition;
        gl_Position = projectionMatrix * mvPosition;
        particleDepth = -mvPosition.z * 0.25;
      `,
    );
  shader.fragmentShader =
    'varying float particleDepth;\n' +
    shader.fragmentShader
      .replace('#include <map_fragment>', ShaderChunk.map_fragment)
      .replace(
        'diffuseColor *= sampledDiffuseColor;',
        /* glsl */ `
        diffuseColor *= sampledDiffuseColor;
        float depthOpacity = clamp(particleDepth * particleDepth, 0., 1.);
        diffuseColor.a *= depthOpacity * depthOpacity;
      `,
      );
}

/**
 * Build a single `InstancedMesh` of dust particles covering one or more zones.
 * Parent it under whatever root your preset is using.
 */
export function createAmbientDust(zones: DustZone[]): InstancedMesh {
  const map = getParticleTexture();
  const mat = new MeshBasicMaterial({
    map,
    alphaMap: map,
    transparent: true,
    depthWrite: false,
    opacity: 0.5,
  });
  mat.onBeforeCompile = patchAmbientParticles;

  const totalCount = zones.reduce((acc, z) => acc + (z.count ?? 280), 0);
  const mesh = new InstancedMesh(new PlaneGeometry(1, 1, 1), mat, totalCount);
  mesh.frustumCulled = false;
  mesh.name = 'ambientParticles';
  mesh.userData.lightmapIgnore = true;

  const proxy = new Object3D();
  const matrix = new Matrix4();
  const bright = new Color(0xffffff);
  let index = 0;
  for (const zone of zones) {
    const count = zone.count ?? 280;
    for (let i = 0; i < count; i++) {
      proxy.position.set(
        zone.size[0] * Math.random() - zone.size[0] / 2 + zone.center[0],
        zone.center[1] + 45 * Math.random(),
        zone.size[1] * Math.random() - zone.size[1] / 2 + zone.center[2],
      );
      const scale = 0.05 * Math.random() + 0.05;
      proxy.scale.set(scale, scale, scale);
      proxy.rotation.set(0, 0, 0);
      proxy.updateMatrix();
      matrix.copy(proxy.matrix);
      mesh.setMatrixAt(index + i, matrix);
      mesh.setColorAt(index + i, bright);
    }
    index += count;
  }
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  return mesh;
}
