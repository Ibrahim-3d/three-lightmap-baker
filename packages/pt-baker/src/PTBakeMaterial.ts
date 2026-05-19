/**
 * PTBakeMaterial — ShaderMaterial for UV-space path-traced lightmap baking.
 *
 * Vertex: renders geometry in UV2 space (gl_Position = uv2*2-1).
 * Fragment: shoots a cosine-weighted hemisphere ray from the world-space
 *           surface point, runs the PT path integrator, accumulates.
 *
 * Compatible with PTRenderer's uniform layout so the same BVHSceneData and
 * light DataTexture can be shared between real-time preview and baking.
 */

import {
  DataTexture,
  GLSL3,
  ShaderMaterial,
  type Texture,
  type WebGLRenderTarget,
} from 'three';
import { registerChunks } from 'pt-renderer';
import { resolveIncludes } from 'pt-renderer';
import type { BVHSceneData } from 'pt-renderer';
import type { PTSceneUniforms } from 'pt-renderer';

import vertSrc from './shaders/pt-bake.vert.glsl?raw';
import fragSrc from './shaders/pt-bake.frag.glsl?raw';

/** Uniforms the caller must populate (mirrors PTRenderer's sceneUniforms). */
export interface PTBakeSceneUniforms extends PTSceneUniforms {
  tPreviousTexture: { value: Texture | null };
  uSampleCounter:   { value: number };
  uFrameCounter:    { value: number };
  uEPS_intersect:   { value: number };
  uRandomVec2:      { value: { x: number; y: number } };
}

export class PTBakeMaterial extends ShaderMaterial {
  constructor(sceneData: BVHSceneData, lightTex: DataTexture, albedoFallback: DataTexture) {
    registerChunks();

    const uniforms: Record<string, { value: unknown }> = {
      // BVH scene
      tTriangleTexture:   { value: sceneData.triangleTexture },
      tAABBTexture:       { value: sceneData.aabbTexture },
      // Previous accumulation buffer (ping-pong)
      tPreviousTexture:   { value: null },
      // Blue-noise texture for low-discrepancy sampling
      tBlueNoiseTexture:  { value: null },
      // Standard PT uniforms
      uSampleCounter:     { value: 1.0 },
      uFrameCounter:      { value: 1.0 },
      uEPS_intersect:     { value: 0.001 },
      uRandomVec2:        { value: { x: 0, y: 0 } },
      // Sky
      uHasSkyTexture:     { value: false },
      tHDRTexture:        { value: null },
      uSkyLightIntensity: { value: 1.0 },
      // Lights DataTexture
      tLightTexture:      { value: lightTex },
      uNumPTLights:       { value: 0 },
      // Unused PT uniforms (still referenced by shared chunks)
      uResolution:        { value: { x: 1, y: 1 } },
      uCameraMatrix:      { value: null },
      uCameraIsMoving:    { value: false },
      uSceneIsDynamic:    { value: false },
      uUseOrthographicCamera: { value: false },
      uApertureSize:      { value: 0.0 },
      uFocusDistance:     { value: 100.0 },
      uULen:              { value: 1.0 },
      uVLen:              { value: 1.0 },
      uTime:              { value: 0.0 },
      uPreviousSampleCount: { value: 1.0 },
    };

    // 16 albedo texture slots
    for (let i = 0; i < 16; i++) {
      uniforms[`tAlbedoTex${i}`] = { value: sceneData.albedoTextures[i] ?? albedoFallback };
    }

    super({
      vertexShader:   vertSrc,
      fragmentShader: resolveIncludes(fragSrc),
      uniforms,
      glslVersion:    GLSL3,
    });

    // THREE.js doesn't include modelMatrix / normalMatrix in the auto-uniforms
    // for ShaderMaterial — override by setting these in the material.
    this.customProgramCacheKey = () => 'pt-bake-v1';
  }

  /** Link an existing ping-pong RT as the previous-frame input. */
  setPreviousTexture(rt: WebGLRenderTarget | null): void {
    this.uniforms['tPreviousTexture']!.value = rt?.texture ?? null;
  }
}
