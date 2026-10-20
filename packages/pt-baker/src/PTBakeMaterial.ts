/**
 * PTBakeMaterial - ShaderMaterial for UV-space path-traced lightmap baking.
 *
 * Vertex: renders geometry in UV2 space (gl_Position = uv2*2-1).
 * Fragment: shoots a cosine-weighted hemisphere ray from the world-space
 *           surface point, runs the PT path integrator, accumulates.
 *
 * Compatible with PTRenderer's uniform layout so the same BVHSceneData and
 * light DataTexture can be shared between real-time preview and baking.
 */

import { DataTexture, GLSL3, ShaderMaterial, type Texture, type WebGLRenderTarget } from 'three';
import { registerChunks } from 'pt-renderer';
import { resolveIncludes } from 'pt-renderer';
import type { BVHSceneData } from 'pt-renderer';
import type { PTSceneUniforms } from 'pt-renderer';

import vertSrc from './shaders/pt-bake.vert.glsl?raw';
import fragSrc from './shaders/pt-bake.frag.glsl?raw';

/** Uniforms the caller must populate (mirrors PTRenderer's sceneUniforms). */
export interface PTBakeSceneUniforms extends PTSceneUniforms {
  tPreviousTexture: { value: Texture | null };
  uSampleCounter: { value: number };
  uFrameCounter: { value: number };
  uEPS_intersect: { value: number };
  uRandomVec2: { value: { x: number; y: number } };
}

export class PTBakeMaterial extends ShaderMaterial {
  constructor(sceneData: BVHSceneData, lightTex: DataTexture) {
    registerChunks();

    const uniforms: Record<string, { value: unknown }> = {
      tTriangleTexture: { value: sceneData.triangleTexture },
      tAABBTexture: { value: sceneData.aabbTexture },
      tAlbedoArray: { value: sceneData.albedoArray },
      tPreviousTexture: { value: null },
      tBlueNoiseTexture: { value: null },
      uSampleCounter: { value: 1.0 },
      uFrameCounter: { value: 1.0 },
      uEPS_intersect: { value: 0.001 },
      uRandomVec2: { value: { x: 0, y: 0 } },
      uHasSkyTexture: { value: false },
      tHDRTexture: { value: null },
      uSkyLightIntensity: { value: 1.0 },
      tLightTexture: { value: lightTex },
      uNumPTLights: { value: 0 },
      uResolution: { value: { x: 1, y: 1 } },
      uCameraMatrix: { value: null },
      uCameraIsMoving: { value: false },
      uSceneIsDynamic: { value: false },
      uUseOrthographicCamera: { value: false },
      uApertureSize: { value: 0.0 },
      uFocusDistance: { value: 100.0 },
      uULen: { value: 1.0 },
      uVLen: { value: 1.0 },
      uTime: { value: 0.0 },
      uPreviousSampleCount: { value: 1.0 },
    };

    super({
      vertexShader: vertSrc,
      fragmentShader: resolveIncludes(fragSrc),
      uniforms,
      glslVersion: GLSL3,
    });

    this.customProgramCacheKey = () => 'pt-bake-v1';
  }

  /** Link an existing ping-pong RT as the previous-frame input. */
  setPreviousTexture(rt: WebGLRenderTarget | null): void {
    const previous = this.uniforms['tPreviousTexture'];
    if (!previous) throw new Error('[pt-baker] missing tPreviousTexture uniform');
    previous.value = rt?.texture ?? null;
  }
}
