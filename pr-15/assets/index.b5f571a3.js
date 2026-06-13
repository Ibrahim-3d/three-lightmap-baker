import{S as B,s as W,t as H,G as z,O,c as A,M,P as G,u as X,v as Y,w as j,R as k,F as w,N as P,k as f,x as K}from"./index.f28635c1.js";var Q=`/**
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

    // Map UV2 [0,1]\xB2 \u2192 clip space [-1,1]\xB2
    gl_Position = vec4(uv2 * 2.0 - 1.0, 0.0, 1.0);
}
`,q=`/**
 * UV-space path-trace bake fragment shader.
 *
 * Reuses the same BVH traversal and path integrator as bvh-scene.frag.glsl.
 * The key difference: instead of shooting a camera ray through a pixel, the
 * ray origin and direction come from the surface point encoded in vWorldPos/
 * vWorldNormal by the UV-space vertex shader.
 *
 * Each invocation contributes one sample; the app layer accumulates over N
 * frames by blending with tPreviousTexture (same ping-pong as PTRenderer).
 *
 * Includes: all pathtracing chunks + the BVH/albedo/light/sky infrastructure
 * from bvh-scene.frag.glsl.  The only replacement is \`main()\`.
 */

precision highp float;
precision highp int;
precision highp sampler2D;
precision highp sampler2DArray;

#include <pathtracing_uniforms_and_defines>

// \u2500\u2500 BVH scene data \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
uniform sampler2D tTriangleTexture;
uniform sampler2D tAABBTexture;

// \u2500\u2500 Albedo array - single sampler2DArray binding (see bvh-scene.frag.glsl).
uniform sampler2DArray tAlbedoArray;

vec3 sampleAlbedo(int layer, vec2 uv) {
    if (layer < 0) return vec3(1.0);
    return texture(tAlbedoArray, vec3(uv, float(layer))).rgb;
}

// \u2500\u2500 Scene lights (DataTexture, 4 texels/light, max 16) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
uniform sampler2D tLightTexture;
uniform int       uNumPTLights;

struct PTLight {
    vec3  pos;   float type;
    vec3  color; float dist;
    vec3  dir;   float spotCos;
    float width; float height;
};

PTLight getLight(int i) {
    vec4 t0 = texelFetch(tLightTexture, ivec2(i * 4 + 0, 0), 0);
    vec4 t1 = texelFetch(tLightTexture, ivec2(i * 4 + 1, 0), 0);
    vec4 t2 = texelFetch(tLightTexture, ivec2(i * 4 + 2, 0), 0);
    vec4 t3 = texelFetch(tLightTexture, ivec2(i * 4 + 3, 0), 0);
    return PTLight(t0.xyz, t0.w, t1.xyz, t1.w, t2.xyz, t2.w, t3.x, t3.y);
}

// \u2500\u2500 Sky \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
uniform sampler2D tHDRTexture;
uniform bool      uHasSkyTexture;
uniform float     uSkyLightIntensity;

#define INV_TEXTURE_WIDTH 0.00048828125

// \u2500\u2500 Hit record globals \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
vec3  rayOrigin, rayDirection;
vec3  hitNormal, hitColor;
vec2  hitUV;
float hitObjectID = -INFINITY;
float hitOpacity;
int   hitType, hitAlbedoLayer;
float hitRoughness, hitMetalness;

vec3 F_Schlick(float cosTheta, vec3 F0) {
    return F0 + (1.0 - F0) * pow(max(1.0 - cosTheta, 0.0), 5.0);
}

// \u2500\u2500 Varyings from UV-space vertex shader \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
varying vec3  vWorldPos;
varying vec3  vWorldNormal;
varying float vValid;

#include <pathtracing_random_functions>
#include <pathtracing_calc_fresnel_reflectance>
#include <pathtracing_boundingbox_intersect>
#include <pathtracing_bvhTriangle_intersect>

// \u2500\u2500 BVH node lookup \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
void GetBoxNodeData(const in float i, inout vec4 boxNodeData0, inout vec4 boxNodeData1) {
    float ix2 = i * 2.0;
    ivec2 uv0 = ivec2(mod(ix2,       2048.0), ix2       * INV_TEXTURE_WIDTH);
    ivec2 uv1 = ivec2(mod(ix2 + 1.0, 2048.0), (ix2 + 1.0) * INV_TEXTURE_WIDTH);
    boxNodeData0 = texelFetch(tAABBTexture, uv0, 0);
    boxNodeData1 = texelFetch(tAABBTexture, uv1, 0);
}

// \u2500\u2500 BVH traversal (identical to bvh-scene.frag.glsl) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
float SceneIntersect() {
    vec4 cur0, cur1, nA0, nA1, nB0, nB1, tmp0, tmp1;
    vec4 vd0, vd1, vd2, vd3, vd4, vd5, vd6, vd7;
    vec3 invDir = 1.0 / rayDirection;

    float stack[32];
    float idA, idB, tA, tB, tmpF;
    float d, t = INFINITY, ptr = 0.0, id = 0.0;
    float triID = 0.0, triU = 0.0, triV = 0.0, triW = 0.0, tu, tv;
    int   popNext = TRUE, triLookup = FALSE;
    hitObjectID = -INFINITY;

    GetBoxNodeData(ptr, cur0, cur1);
    d = BoundingBoxIntersect(cur0.xyz, vec3(cur0.w, cur1.xy), rayOrigin, invDir);
    popNext = (d < t) ? FALSE : TRUE;

    while (true) {
        if (popNext == TRUE) {
            if (--ptr < 0.0) break;
            GetBoxNodeData(stack[int(ptr)], cur0, cur1);
        }
        popNext = TRUE;

        if (cur1.z == 0.0) {
            GetBoxNodeData(cur1.w,       nA0, nA1);
            GetBoxNodeData(cur1.w + 1.0, nB0, nB1);
            idA = cur1.w; idB = cur1.w + 1.0;
            tA = BoundingBoxIntersect(nA0.xyz, vec3(nA0.w, nA1.xy), rayOrigin, invDir);
            tB = BoundingBoxIntersect(nB0.xyz, vec3(nB0.w, nB1.xy), rayOrigin, invDir);
            if (tB < tA) {
                tmpF = idA; idA = idB; idB = tmpF;
                tmpF = tA;  tA  = tB;  tB  = tmpF;
                tmp0 = nA0; tmp1 = nA1; nA0 = nB0; nA1 = nB1; nB0 = tmp0; nB1 = tmp1;
            }
            if (tB < t) { cur0 = nB0; cur1 = nB1; popNext = FALSE; }
            if (tA < t) {
                if (popNext == FALSE) stack[int(ptr++)] = idB;
                cur0 = nA0; cur1 = nA1; popNext = FALSE;
            }
            continue;
        }

        id  = 8.0 * cur1.w;
        vd0 = texelFetch(tTriangleTexture, ivec2(mod(id,     2048.0), floor(id     * INV_TEXTURE_WIDTH)), 0);
        vd1 = texelFetch(tTriangleTexture, ivec2(mod(id+1.0, 2048.0), floor((id+1.0)*INV_TEXTURE_WIDTH)), 0);
        vd2 = texelFetch(tTriangleTexture, ivec2(mod(id+2.0, 2048.0), floor((id+2.0)*INV_TEXTURE_WIDTH)), 0);
        d = BVH_TriangleIntersect(vec3(vd0.xyz), vec3(vd0.w, vd1.xy), vec3(vd1.zw, vd2.x),
                                  rayOrigin, rayDirection, tu, tv);
        if (d < t) { t = d; triID = id; triU = tu; triV = tv; triLookup = TRUE; }
    }

    if (triLookup == TRUE) {
        ivec2 u0=ivec2(mod(triID+0.0,2048.0),floor((triID+0.0)*INV_TEXTURE_WIDTH));
        ivec2 u1=ivec2(mod(triID+1.0,2048.0),floor((triID+1.0)*INV_TEXTURE_WIDTH));
        ivec2 u2=ivec2(mod(triID+2.0,2048.0),floor((triID+2.0)*INV_TEXTURE_WIDTH));
        ivec2 u3=ivec2(mod(triID+3.0,2048.0),floor((triID+3.0)*INV_TEXTURE_WIDTH));
        ivec2 u4=ivec2(mod(triID+4.0,2048.0),floor((triID+4.0)*INV_TEXTURE_WIDTH));
        ivec2 u5=ivec2(mod(triID+5.0,2048.0),floor((triID+5.0)*INV_TEXTURE_WIDTH));
        ivec2 u6=ivec2(mod(triID+6.0,2048.0),floor((triID+6.0)*INV_TEXTURE_WIDTH));
        ivec2 u7=ivec2(mod(triID+7.0,2048.0),floor((triID+7.0)*INV_TEXTURE_WIDTH));
        vd0=texelFetch(tTriangleTexture,u0,0); vd1=texelFetch(tTriangleTexture,u1,0);
        vd2=texelFetch(tTriangleTexture,u2,0); vd3=texelFetch(tTriangleTexture,u3,0);
        vd4=texelFetch(tTriangleTexture,u4,0); vd5=texelFetch(tTriangleTexture,u5,0);
        vd6=texelFetch(tTriangleTexture,u6,0); vd7=texelFetch(tTriangleTexture,u7,0);

        triW         = 1.0 - triU - triV;
        hitNormal    = normalize(triW*vec3(vd2.yzw) + triU*vec3(vd3.xyz) + triV*vec3(vd3.w,vd4.xy));
        hitColor     = vd6.yzw;
        hitOpacity   = vd7.y;
        hitUV        = triW*vec2(vd4.zw) + triU*vec2(vd5.xy) + triV*vec2(vd5.zw);
        hitType      = int(vd6.x);
        hitAlbedoLayer = int(vd7.x);
        hitRoughness = vd7.z;
        hitMetalness = vd7.w;
        hitObjectID  = 0.0;
    }
    return t;
}

// \u2500\u2500 Sky \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
vec3 GetSkyColor(vec3 dir) {
    if (uHasSkyTexture) {
        vec2 uv = vec2(atan(dir.z, dir.x)*ONE_OVER_TWO_PI + 0.5,
                       asin(clamp(dir.y,-1.0,1.0))*ONE_OVER_PI + 0.5);
        return texture(tHDRTexture, uv).rgb * uSkyLightIntensity;
    }
    // t=1 when dir.y=+1 (up) \u2192 bright sky; t=0 when dir.y=-1 (down) \u2192 dark ground.
    float t = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
    return mix(vec3(0.05, 0.1, 0.3), vec3(0.55, 0.65, 0.9), t) * uSkyLightIntensity;
}

// \u2500\u2500 NEE (identical to bvh-scene.frag.glsl) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
vec3 SetupNEE(vec3 x, vec3 nl, out float toLightDist, out float cosNL) {
    toLightDist = INFINITY; cosNL = 0.0;
    if (uNumPTLights < 1) return vec3(0.0);

    int li = clamp(int(rand() * float(uNumPTLights)), 0, uNumPTLights - 1);
    PTLight L = getLight(li);
    vec3 toLight = vec3(0.0);

    if (L.type < 0.5) {
        toLight = -L.dir; toLightDist = INFINITY; cosNL = max(0.0, dot(toLight, nl));
    } else if (L.type < 1.5) {
        vec3 delta = L.pos - x; float d = max(length(delta), 0.001);
        toLight = delta / d; toLightDist = d; cosNL = max(0.0, dot(toLight, nl));
        float range = L.dist;
        L.color *= (range > 0.0) ? pow(max(0.0,1.0-d/range),2.0)/(d*d+1.0) : 1.0/(d*d+1.0);
    } else if (L.type < 2.5) {
        vec3 delta = L.pos - x; float d = max(length(delta), 0.001);
        toLight = delta / d; toLightDist = d; cosNL = max(0.0, dot(toLight, nl));
        float ct = dot(toLight, -L.dir), cc = L.spotCos;
        if (ct < cc * 0.9) return vec3(0.0);
        float range = L.dist;
        L.color *= smoothstep(cc*0.9,cc,ct) * ((range>0.0)?pow(max(0.0,1.0-d/range),2.0)/(d*d+1.0):1.0/(d*d+1.0));
    } else {
        vec3 faceNorm = normalize(-L.dir);
        vec3 right = normalize(cross(abs(faceNorm.y)<0.9 ? vec3(0,1,0) : vec3(1,0,0), faceNorm));
        vec3 up = cross(faceNorm, right);
        vec2 r = vec2(rand()-0.5, rand()-0.5);
        vec3 samplePos = L.pos + right*(r.x*L.width) + up*(r.y*L.height);
        vec3 delta = samplePos - x; float d = max(length(delta), 0.001);
        toLight = delta/d; toLightDist = d; cosNL = max(0.0, dot(toLight, nl));
        float cosFace = max(0.0, dot(-toLight, faceNorm));
        L.color *= cosFace * L.width * L.height / (d*d+1.0);
    }
    if (cosNL <= 0.0) return vec3(0.0);
    rayDirection = normalize(toLight + vec3(rand()-0.5, rand()-0.5, rand()-0.5)*0.02);
    rayOrigin    = x + nl * uEPS_intersect;
    return L.color * float(uNumPTLights);
}

// \u2500\u2500 Path integrator \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
vec3 CalculateRadiance() {
    vec3  accumCol = vec3(0.0);
    vec3  mask     = vec3(1.0);
    vec3  n, nl, x;
    float ratioIoR, Re, Tr;
    bool  nee_active = false, nee_isInfinite = true;
    float nee_lightDist = INFINITY;
    vec3  nee_lightColor = vec3(0.0);
    bool  lastWasDiffuse = false;
    int   diffuseCount = 0;
    hitType = -100;

    for (int bounce = 0; bounce < 8; bounce++) {
        float t = SceneIntersect();

        if (nee_active) {
            bool reached = nee_isInfinite ? (t == INFINITY) : (t > nee_lightDist - uEPS_intersect * 20.0);
            if (reached) accumCol += mask * nee_lightColor;
            break;
        }

        if (t == INFINITY) {
            if (lastWasDiffuse) accumCol += mask * GetSkyColor(rayDirection) * 0.5;
            else                accumCol += mask * GetSkyColor(rayDirection);
            break;
        }

        if (hitType == LIGHT) { accumCol += mask * hitColor; break; }

        n  = normalize(hitNormal);
        nl = dot(n, rayDirection) < 0.0 ? n : -n;
        x  = rayOrigin + rayDirection * t;

        vec3 albedo = hitColor;
        if (hitAlbedoLayer >= 0 && hitUV.x > -0.5)
            albedo *= sampleAlbedo(hitAlbedoLayer, hitUV);

        if (hitType == REFR) {
            float nc = 1.0, nt = 1.5;
            Re = calcFresnelReflectance(rayDirection, n, nc, nt, ratioIoR);
            if (rand() < Re) {
                rayDirection = reflect(rayDirection, nl);
                rayOrigin    = x + nl * uEPS_intersect;
            } else {
                vec3 refractDir = refract(rayDirection, nl, ratioIoR);
                if (dot(refractDir, refractDir) < 0.5) {
                    rayDirection = reflect(rayDirection, nl);
                    rayOrigin    = x + nl * uEPS_intersect;
                } else {
                    rayDirection = normalize(refractDir);
                    rayOrigin    = x - nl * uEPS_intersect;
                    mask        *= albedo;
                }
            }
            lastWasDiffuse = false;
            continue;
        }

        {
            vec3  F0    = mix(vec3(0.04), albedo, hitMetalness);
            float cosV  = max(dot(nl, -rayDirection), 0.0);
            vec3  F     = F_Schlick(cosV, F0);
            float pSpec = clamp(max(F.r, max(F.g, F.b)), 0.04, 0.96);

            if (rand() < pSpec) {
                vec3 reflDir = reflect(rayDirection, nl);
                rayDirection = hitRoughness < 0.001 ? reflDir : randomDirectionInSpecularLobe(nl, reflDir, hitRoughness);
                mask        *= F / pSpec;
                rayOrigin    = x + nl * uEPS_intersect;
                lastWasDiffuse = false;
            } else {
                float oneMinusP = max(1.0 - pSpec, 0.001);
                vec3  kd        = (vec3(1.0) - F) * (1.0 - hitMetalness);
                mask *= albedo * kd / oneMinusP;
                diffuseCount++;
                lastWasDiffuse = true;

                // Unbiased 50/50 split (see bvh-scene.frag.glsl comments).
                if (uNumPTLights > 0 && rand() < 0.5) {
                    float nee_cosNL, nee_dist;
                    vec3 lightRad = SetupNEE(x, nl, nee_dist, nee_cosNL);
                    if (nee_cosNL > 0.0 && length(lightRad) > 0.0) {
                        nee_active = true; nee_isInfinite = (nee_dist == INFINITY);
                        nee_lightDist = nee_dist; nee_lightColor = lightRad * nee_cosNL * 2.0;
                        continue;
                    }
                    // NEE invalid \u2192 zero contribution; do NOT fall through to hemisphere bounce.
                    break;
                }
                mask        *= 2.0;
                rayDirection = randomCosWeightedDirectionInHemisphere(nl);
                rayOrigin    = x + nl * uEPS_intersect;
            }
            continue;
        }
    }
    return max(vec3(0.0), accumCol);
}

void SetupScene(void) {}

// \u2500\u2500 Bake main \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
void main() {
    // Discard fragments with no UV2 geometry.
    if (vValid < 0.5) { pc_fragColor = vec4(0.0); return; }

    vec3 worldPos    = vWorldPos;
    vec3 worldNormal = normalize(vWorldNormal);

    // Per-texel RNG seed (same pattern as pathtracing_main).
    seed = uvec2(uFrameCounter, uFrameCounter + 1.0) * uvec2(gl_FragCoord);
    randNumber = 0.0;
    blueNoise  = texelFetch(tBlueNoiseTexture, ivec2(mod(floor(gl_FragCoord.xy), 128.0)), 0).r;

    // Primary ray: origin at surface point, direction = cosine-weighted hemisphere.
    rayOrigin    = worldPos + worldNormal * uEPS_intersect * 10.0;
    rayDirection = randomCosWeightedDirectionInHemisphere(worldNormal);

    SetupScene();

    // Single sample from the path integrator.
    vec3 radiance = CalculateRadiance();

    // Progressive accumulation: sum over all frames; display shader divides by sampleCounter.
    vec4 prev = texelFetch(tPreviousTexture, ivec2(gl_FragCoord.xy), 0);
    pc_fragColor = vec4(prev.rgb + radiance, 1.0);
}
`;class J extends B{constructor(e,r){W();const s={tTriangleTexture:{value:e.triangleTexture},tAABBTexture:{value:e.aabbTexture},tAlbedoArray:{value:e.albedoArray},tPreviousTexture:{value:null},tBlueNoiseTexture:{value:null},uSampleCounter:{value:1},uFrameCounter:{value:1},uEPS_intersect:{value:.001},uRandomVec2:{value:{x:0,y:0}},uHasSkyTexture:{value:!1},tHDRTexture:{value:null},uSkyLightIntensity:{value:1},tLightTexture:{value:r},uNumPTLights:{value:0},uResolution:{value:{x:1,y:1}},uCameraMatrix:{value:null},uCameraIsMoving:{value:!1},uSceneIsDynamic:{value:!1},uUseOrthographicCamera:{value:!1},uApertureSize:{value:0},uFocusDistance:{value:100},uULen:{value:1},uVLen:{value:1},uTime:{value:0},uPreviousSampleCount:{value:1}};super({vertexShader:Q,fragmentShader:H(q),uniforms:s,glslVersion:z}),this.customProgramCacheKey=()=>"pt-bake-v1"}setPreviousTexture(e){var r;this.uniforms.tPreviousTexture.value=(r=e==null?void 0:e.texture)!=null?r:null}}function Z(){const i=new Float32Array(256),e=new j(i,64,1,k,w);return e.colorSpace=P,e.minFilter=e.magFilter=f,e.generateMipmaps=!1,e.needsUpdate=!0,e}function g(i){const e=new K(i,i,{type:w,format:k,minFilter:f,magFilter:f,generateMipmaps:!1,depthBuffer:!1});return e.texture.colorSpace=P,e.texture.flipY=!1,e}const $=`
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,ee=`
precision highp float;
uniform sampler2D tAccum;
uniform float uSampleCount;
out vec4 pc_fragColor;
void main() {
  vec3 radiance = texelFetch(tAccum, ivec2(gl_FragCoord.xy), 0).rgb;
  pc_fragColor = vec4(radiance / uSampleCount, 1.0);
}
`;function ne(){return new Promise(i=>setTimeout(i,0))}class te{constructor(){this.ownedLightTex=null}async bake(e,r,s,t={}){var I,L,N,_,b,F,S,E;const l=(I=t.size)!=null?I:1024,a=(L=t.samples)!=null?L:128,R=(N=t.yieldEvery)!=null?N:4,V=(_=t.numLights)!=null?_:0,C=(F=t.lightTex)!=null?F:(b=this.ownedLightTex)!=null?b:this.ownedLightTex=Z(),p=g(l),x=g(l),m=g(l),o=new J(s,C);o.uniforms.uNumPTLights.value=V,o.uniforms.uSkyLightIntensity.value=(S=t.skyIntensity)!=null?S:1;const u=new B({vertexShader:$,fragmentShader:ee,uniforms:{tAccum:{value:null},uSampleCount:{value:a}},glslVersion:"300 es"}),T=new Map;for(const n of r)T.set(n,n.material);const y=new O(-1,1,1,-1,0,1),D=new A,U=new M(new G(2,2),u);D.add(U);let d=p,h=x;try{for(let n=0;n<a;n++){o.uniforms.uSampleCounter.value=n+1,o.uniforms.uFrameCounter.value=n+1,o.uniforms.uRandomVec2.value={x:Math.random(),y:Math.random()},o.setPreviousTexture(d);for(const c of r)c.material=o;e.setRenderTarget(h),e.clear();for(const c of r){const v=new A;v.add(c),e.render(v,y),c.parent===v&&v.remove(c)}[d,h]=[h,d],(E=t.onProgress)==null||E.call(t,(n+1)/a),(n+1)%R===0&&await ne()}for(const n of r){const c=T.get(n);c&&(n.material=c)}u.uniforms.tAccum.value=d.texture,u.uniforms.uSampleCount.value=a,e.setRenderTarget(m),e.clear(),e.render(D,y)}finally{e.setRenderTarget(null)}return{texture:m,samples:a,dispose:()=>{var n;o.dispose(),u.dispose(),p.dispose(),x.dispose(),m.dispose(),(n=this.ownedLightTex)==null||n.dispose()}}}dispose(){var e;(e=this.ownedLightTex)==null||e.dispose()}}async function ie(i,e,r,s={}){const t=X(e),l=new te,a=await l.bake(i,r,t,s);return{result:{...a,dispose:()=>{a.dispose(),l.dispose(),Y(t)}},sceneData:t}}export{J as PTBakeMaterial,te as PTBaker,ie as bakePTLightmap};
