/**
 * Registers erichlof's PathTracing GLSL utility chunks into THREE.ShaderChunk
 * so that `#include <chunk_name>` works in our PT shaders.
 * Call registerChunks() once before creating any PTRenderer - idempotent.
 */
import { ShaderChunk } from 'three';

import uniforms from './shaders/chunks/uniforms_and_defines.glsl?raw';
import randomFns from './shaders/chunks/random_functions.glsl?raw';
import sphereIntersect from './shaders/chunks/sphere_intersect.glsl?raw';
import boxIntersect from './shaders/chunks/box_intersect.glsl?raw';
import boxInteriorIntersect from './shaders/chunks/box_interior_intersect.glsl?raw';
import quadIntersect from './shaders/chunks/quad_intersect.glsl?raw';
import sampleQuadLight from './shaders/chunks/sample_quad_light.glsl?raw';
import fresnelReflectance from './shaders/chunks/calc_fresnel_reflectance.glsl?raw';
import ptMain from './shaders/chunks/main.glsl?raw';
import boundingboxIntersect from './shaders/chunks/boundingbox_intersect.glsl?raw';
import bvhTriangleIntersect from './shaders/chunks/bvh_triangle_intersect.glsl?raw';

// THREE.ShaderChunk is typed to known Three.js chunk names only.
// Cast to a mutable string dict so we can register custom PT chunks.
const chunks = ShaderChunk as unknown as Record<string, string>;

let registered = false;

export function registerChunks(): void {
  if (registered) return;
  registered = true;

  chunks['pathtracing_uniforms_and_defines'] = uniforms;
  chunks['pathtracing_random_functions'] = randomFns;
  chunks['pathtracing_sphere_intersect'] = sphereIntersect;
  chunks['pathtracing_box_intersect'] = boxIntersect;
  chunks['pathtracing_box_interior_intersect'] = boxInteriorIntersect;
  chunks['pathtracing_quad_intersect'] = quadIntersect;
  chunks['pathtracing_sample_quad_light'] = sampleQuadLight;
  chunks['pathtracing_calc_fresnel_reflectance'] = fresnelReflectance;
  chunks['pathtracing_main'] = ptMain;
  // BVH triangle traversal chunks (used by bvh-scene.frag.glsl)
  chunks['pathtracing_boundingbox_intersect'] = boundingboxIntersect;
  chunks['pathtracing_bvhTriangle_intersect'] = bvhTriangleIntersect;
}
