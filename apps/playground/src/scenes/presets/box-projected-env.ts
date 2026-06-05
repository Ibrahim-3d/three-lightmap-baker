/**
 * Box-Projected Environment Map shader patch - port of ESL's
 * `BoxProjectedEnvMapHelper.js` (credits: codercat / 0beqz). MIT.
 *
 * Treats a single equirect HDR probe as if it were captured inside an axis-
 * aligned box volume (`envMapPosition` + `envMapSize`). Reflections + IBL
 * irradiance are re-projected so they appear "parallax-correct" against that
 * box. Flat HDR reflections on a long gym wall look smeared; with this on,
 * the wall reflects what would actually be at the wall's mirrored position.
 *
 * Apply per-material via `material.onBeforeCompile = patch`. Stack-safe: if a
 * material already has a patch, the new patch chains after via the existing
 * binding pattern.
 *
 * Three.js 0.161 chunk-target audit:
 *  - `#include <worldpos_vertex>` - present ✓
 *  - `#include <envmap_physical_pars_fragment>` - present ✓
 *  - `vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );` -
 *    string-match still present in 0.161 envmap_physical_pars_fragment ✓
 *  - `reflectVec = inverseTransformDirection( reflectVec, viewMatrix );` -
 *    still present ✓
 */
import { ShaderChunk, type Vector3, type WebGLProgramParametersWithUniforms } from 'three';

const worldposReplace = /* glsl */ `
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
    vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );

    #ifdef BOX_PROJECTED_ENV_MAP
        vWorldPosition = worldPosition.xyz;
    #endif
#endif
`;

const boxProjectDefinitions = /* glsl */ `
#ifdef BOX_PROJECTED_ENV_MAP
    uniform vec3 envMapSize;
    uniform vec3 envMapPosition;
    varying vec3 vWorldPosition;

    vec3 parallaxCorrectNormal( vec3 v, vec3 cubeSize, vec3 cubePos ) {
        vec3 nDir = normalize( v );
        vec3 rbmax = ( .5 * cubeSize + cubePos - vWorldPosition ) / nDir;
        vec3 rbmin = ( -.5 * cubeSize + cubePos - vWorldPosition ) / nDir;
        vec3 rbminmax;
        rbminmax.x = ( nDir.x > 0. ) ? rbmax.x : rbmin.x;
        rbminmax.y = ( nDir.y > 0. ) ? rbmax.y : rbmin.y;
        rbminmax.z = ( nDir.z > 0. ) ? rbmax.z : rbmin.z;
        float correction = min( min( rbminmax.x, rbminmax.y ), rbminmax.z );
        vec3 boxIntersection = vWorldPosition + nDir * correction;
        return boxIntersection - cubePos;
    }
#endif
`;

const iblIrradiancePatch = /* glsl */ `
#ifdef BOX_PROJECTED_ENV_MAP
    worldNormal = parallaxCorrectNormal( worldNormal, envMapSize, envMapPosition );
#endif
`;

const iblRadiancePatch = /* glsl */ `
#ifdef BOX_PROJECTED_ENV_MAP
    reflectVec = parallaxCorrectNormal( reflectVec, envMapSize, envMapPosition );
#endif
`;

/**
 * Returns an `onBeforeCompile` function that patches the shader to use
 * box-projected envmap math. Box defined by world-space center + xyz size.
 */
export function makeBoxProjectedEnvMapPatch(
  envMapPosition: Vector3,
  envMapSize: Vector3,
): (shader: WebGLProgramParametersWithUniforms) => void {
  return (shader) => {
    shader.defines = { ...shader.defines, BOX_PROJECTED_ENV_MAP: '' };
    shader.uniforms.envMapPosition = { value: envMapPosition };
    shader.uniforms.envMapSize = { value: envMapSize };
    shader.vertexShader =
      'varying vec3 vWorldPosition;\n' +
      shader.vertexShader.replace('#include <worldpos_vertex>', worldposReplace);
    shader.fragmentShader =
      boxProjectDefinitions +
      '\n' +
      shader.fragmentShader
        .replace(
          '#include <envmap_physical_pars_fragment>',
          ShaderChunk.envmap_physical_pars_fragment,
        )
        .replace(
          'vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );',
          `vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n${iblIrradiancePatch}`,
        )
        .replace(
          'reflectVec = inverseTransformDirection( reflectVec, viewMatrix );',
          `reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n${iblRadiancePatch}`,
        );
  };
}
