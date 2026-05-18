/**
 * UV-space bake vertex shader.
 *
 * Instead of normal clip-space rendering, projects geometry into UV2 space
 * so each fragment corresponds to one lightmap texel.  World-space position
 * and normal are passed as varyings for the fragment shader to seed rays.
 */
precision highp float;

attribute vec2 uv2;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat3 normalMatrix;

varying vec3  vWorldPos;
varying vec3  vWorldNormal;
varying float vValid;   // 0.0 = no uv2, discard in frag

void main() {
    vWorldPos    = (modelMatrix * vec4(position, 1.0)).xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vValid       = 1.0;

    // Map UV2 [0,1]² → clip space [-1,1]²
    gl_Position = vec4(uv2 * 2.0 - 1.0, 0.0, 1.0);
}
