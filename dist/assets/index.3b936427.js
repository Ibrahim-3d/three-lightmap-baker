import{S as B,s as W,t as H,G as z,O,c as A,M,P as G,u as X,v as Y,w as j,R as k,F as w,N as P,k as f,x as K}from"./index.fb58af02.js";var Q=`/**\r
 * UV-space bake vertex shader.\r
 *\r
 * Instead of normal clip-space rendering, projects geometry into UV2 space\r
 * so each fragment corresponds to one lightmap texel.  World-space position\r
 * and normal are passed as varyings for the fragment shader to seed rays.\r
 */\r
precision highp float;\r
\r
attribute vec2 uv2;\r
\r
uniform mat4 modelMatrix;\r
uniform mat4 modelViewMatrix;\r
uniform mat3 normalMatrix;\r
\r
varying vec3  vWorldPos;\r
varying vec3  vWorldNormal;\r
varying float vValid;   // 0.0 = no uv2, discard in frag\r
\r
void main() {\r
    vWorldPos    = (modelMatrix * vec4(position, 1.0)).xyz;\r
    vWorldNormal = normalize(mat3(modelMatrix) * normal);\r
    vValid       = 1.0;\r
\r
    // Map UV2 [0,1]\xB2 \u2192 clip space [-1,1]\xB2\r
    gl_Position = vec4(uv2 * 2.0 - 1.0, 0.0, 1.0);\r
}\r
`,q=`/**\r
 * UV-space path-trace bake fragment shader.\r
 *\r
 * Reuses the same BVH traversal and path integrator as bvh-scene.frag.glsl.\r
 * The key difference: instead of shooting a camera ray through a pixel, the\r
 * ray origin and direction come from the surface point encoded in vWorldPos/\r
 * vWorldNormal by the UV-space vertex shader.\r
 *\r
 * Each invocation contributes one sample; the app layer accumulates over N\r
 * frames by blending with tPreviousTexture (same ping-pong as PTRenderer).\r
 *\r
 * Includes: all pathtracing chunks + the BVH/albedo/light/sky infrastructure\r
 * from bvh-scene.frag.glsl.  The only replacement is \`main()\`.\r
 */\r
\r
precision highp float;\r
precision highp int;\r
precision highp sampler2D;\r
precision highp sampler2DArray;\r
\r
#include <pathtracing_uniforms_and_defines>\r
\r
// \u2500\u2500 BVH scene data \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
uniform sampler2D tTriangleTexture;\r
uniform sampler2D tAABBTexture;\r
\r
// \u2500\u2500 Albedo array \u2014 single sampler2DArray binding (see bvh-scene.frag.glsl).\r
uniform sampler2DArray tAlbedoArray;\r
\r
vec3 sampleAlbedo(int layer, vec2 uv) {\r
    if (layer < 0) return vec3(1.0);\r
    return texture(tAlbedoArray, vec3(uv, float(layer))).rgb;\r
}\r
\r
// \u2500\u2500 Scene lights (DataTexture, 4 texels/light, max 16) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
uniform sampler2D tLightTexture;\r
uniform int       uNumPTLights;\r
\r
struct PTLight {\r
    vec3  pos;   float type;\r
    vec3  color; float dist;\r
    vec3  dir;   float spotCos;\r
    float width; float height;\r
};\r
\r
PTLight getLight(int i) {\r
    vec4 t0 = texelFetch(tLightTexture, ivec2(i * 4 + 0, 0), 0);\r
    vec4 t1 = texelFetch(tLightTexture, ivec2(i * 4 + 1, 0), 0);\r
    vec4 t2 = texelFetch(tLightTexture, ivec2(i * 4 + 2, 0), 0);\r
    vec4 t3 = texelFetch(tLightTexture, ivec2(i * 4 + 3, 0), 0);\r
    return PTLight(t0.xyz, t0.w, t1.xyz, t1.w, t2.xyz, t2.w, t3.x, t3.y);\r
}\r
\r
// \u2500\u2500 Sky \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
uniform sampler2D tHDRTexture;\r
uniform bool      uHasSkyTexture;\r
uniform float     uSkyLightIntensity;\r
\r
#define INV_TEXTURE_WIDTH 0.00048828125\r
\r
// \u2500\u2500 Hit record globals \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
vec3  rayOrigin, rayDirection;\r
vec3  hitNormal, hitColor;\r
vec2  hitUV;\r
float hitObjectID = -INFINITY;\r
float hitOpacity;\r
int   hitType, hitAlbedoLayer;\r
float hitRoughness, hitMetalness;\r
\r
vec3 F_Schlick(float cosTheta, vec3 F0) {\r
    return F0 + (1.0 - F0) * pow(max(1.0 - cosTheta, 0.0), 5.0);\r
}\r
\r
// \u2500\u2500 Varyings from UV-space vertex shader \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
varying vec3  vWorldPos;\r
varying vec3  vWorldNormal;\r
varying float vValid;\r
\r
#include <pathtracing_random_functions>\r
#include <pathtracing_calc_fresnel_reflectance>\r
#include <pathtracing_boundingbox_intersect>\r
#include <pathtracing_bvhTriangle_intersect>\r
\r
// \u2500\u2500 BVH node lookup \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
void GetBoxNodeData(const in float i, inout vec4 boxNodeData0, inout vec4 boxNodeData1) {\r
    float ix2 = i * 2.0;\r
    ivec2 uv0 = ivec2(mod(ix2,       2048.0), ix2       * INV_TEXTURE_WIDTH);\r
    ivec2 uv1 = ivec2(mod(ix2 + 1.0, 2048.0), (ix2 + 1.0) * INV_TEXTURE_WIDTH);\r
    boxNodeData0 = texelFetch(tAABBTexture, uv0, 0);\r
    boxNodeData1 = texelFetch(tAABBTexture, uv1, 0);\r
}\r
\r
// \u2500\u2500 BVH traversal (identical to bvh-scene.frag.glsl) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
float SceneIntersect() {\r
    vec4 cur0, cur1, nA0, nA1, nB0, nB1, tmp0, tmp1;\r
    vec4 vd0, vd1, vd2, vd3, vd4, vd5, vd6, vd7;\r
    vec3 invDir = 1.0 / rayDirection;\r
\r
    float stack[32];\r
    float idA, idB, tA, tB, tmpF;\r
    float d, t = INFINITY, ptr = 0.0, id = 0.0;\r
    float triID = 0.0, triU = 0.0, triV = 0.0, triW = 0.0, tu, tv;\r
    int   popNext = TRUE, triLookup = FALSE;\r
    hitObjectID = -INFINITY;\r
\r
    GetBoxNodeData(ptr, cur0, cur1);\r
    d = BoundingBoxIntersect(cur0.xyz, vec3(cur0.w, cur1.xy), rayOrigin, invDir);\r
    popNext = (d < t) ? FALSE : TRUE;\r
\r
    while (true) {\r
        if (popNext == TRUE) {\r
            if (--ptr < 0.0) break;\r
            GetBoxNodeData(stack[int(ptr)], cur0, cur1);\r
        }\r
        popNext = TRUE;\r
\r
        if (cur1.z == 0.0) {\r
            GetBoxNodeData(cur1.w,       nA0, nA1);\r
            GetBoxNodeData(cur1.w + 1.0, nB0, nB1);\r
            idA = cur1.w; idB = cur1.w + 1.0;\r
            tA = BoundingBoxIntersect(nA0.xyz, vec3(nA0.w, nA1.xy), rayOrigin, invDir);\r
            tB = BoundingBoxIntersect(nB0.xyz, vec3(nB0.w, nB1.xy), rayOrigin, invDir);\r
            if (tB < tA) {\r
                tmpF = idA; idA = idB; idB = tmpF;\r
                tmpF = tA;  tA  = tB;  tB  = tmpF;\r
                tmp0 = nA0; tmp1 = nA1; nA0 = nB0; nA1 = nB1; nB0 = tmp0; nB1 = tmp1;\r
            }\r
            if (tB < t) { cur0 = nB0; cur1 = nB1; popNext = FALSE; }\r
            if (tA < t) {\r
                if (popNext == FALSE) stack[int(ptr++)] = idB;\r
                cur0 = nA0; cur1 = nA1; popNext = FALSE;\r
            }\r
            continue;\r
        }\r
\r
        id  = 8.0 * cur1.w;\r
        vd0 = texelFetch(tTriangleTexture, ivec2(mod(id,     2048.0), floor(id     * INV_TEXTURE_WIDTH)), 0);\r
        vd1 = texelFetch(tTriangleTexture, ivec2(mod(id+1.0, 2048.0), floor((id+1.0)*INV_TEXTURE_WIDTH)), 0);\r
        vd2 = texelFetch(tTriangleTexture, ivec2(mod(id+2.0, 2048.0), floor((id+2.0)*INV_TEXTURE_WIDTH)), 0);\r
        d = BVH_TriangleIntersect(vec3(vd0.xyz), vec3(vd0.w, vd1.xy), vec3(vd1.zw, vd2.x),\r
                                  rayOrigin, rayDirection, tu, tv);\r
        if (d < t) { t = d; triID = id; triU = tu; triV = tv; triLookup = TRUE; }\r
    }\r
\r
    if (triLookup == TRUE) {\r
        ivec2 u0=ivec2(mod(triID+0.0,2048.0),floor((triID+0.0)*INV_TEXTURE_WIDTH));\r
        ivec2 u1=ivec2(mod(triID+1.0,2048.0),floor((triID+1.0)*INV_TEXTURE_WIDTH));\r
        ivec2 u2=ivec2(mod(triID+2.0,2048.0),floor((triID+2.0)*INV_TEXTURE_WIDTH));\r
        ivec2 u3=ivec2(mod(triID+3.0,2048.0),floor((triID+3.0)*INV_TEXTURE_WIDTH));\r
        ivec2 u4=ivec2(mod(triID+4.0,2048.0),floor((triID+4.0)*INV_TEXTURE_WIDTH));\r
        ivec2 u5=ivec2(mod(triID+5.0,2048.0),floor((triID+5.0)*INV_TEXTURE_WIDTH));\r
        ivec2 u6=ivec2(mod(triID+6.0,2048.0),floor((triID+6.0)*INV_TEXTURE_WIDTH));\r
        ivec2 u7=ivec2(mod(triID+7.0,2048.0),floor((triID+7.0)*INV_TEXTURE_WIDTH));\r
        vd0=texelFetch(tTriangleTexture,u0,0); vd1=texelFetch(tTriangleTexture,u1,0);\r
        vd2=texelFetch(tTriangleTexture,u2,0); vd3=texelFetch(tTriangleTexture,u3,0);\r
        vd4=texelFetch(tTriangleTexture,u4,0); vd5=texelFetch(tTriangleTexture,u5,0);\r
        vd6=texelFetch(tTriangleTexture,u6,0); vd7=texelFetch(tTriangleTexture,u7,0);\r
\r
        triW         = 1.0 - triU - triV;\r
        hitNormal    = normalize(triW*vec3(vd2.yzw) + triU*vec3(vd3.xyz) + triV*vec3(vd3.w,vd4.xy));\r
        hitColor     = vd6.yzw;\r
        hitOpacity   = vd7.y;\r
        hitUV        = triW*vec2(vd4.zw) + triU*vec2(vd5.xy) + triV*vec2(vd5.zw);\r
        hitType      = int(vd6.x);\r
        hitAlbedoLayer = int(vd7.x);\r
        hitRoughness = vd7.z;\r
        hitMetalness = vd7.w;\r
        hitObjectID  = 0.0;\r
    }\r
    return t;\r
}\r
\r
// \u2500\u2500 Sky \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
vec3 GetSkyColor(vec3 dir) {\r
    if (uHasSkyTexture) {\r
        vec2 uv = vec2(atan(dir.z, dir.x)*ONE_OVER_TWO_PI + 0.5,\r
                       asin(clamp(dir.y,-1.0,1.0))*ONE_OVER_PI + 0.5);\r
        return texture(tHDRTexture, uv).rgb * uSkyLightIntensity;\r
    }\r
    // t=1 when dir.y=+1 (up) \u2192 bright sky; t=0 when dir.y=-1 (down) \u2192 dark ground.\r
    float t = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);\r
    return mix(vec3(0.05, 0.1, 0.3), vec3(0.55, 0.65, 0.9), t) * uSkyLightIntensity;\r
}\r
\r
// \u2500\u2500 NEE (identical to bvh-scene.frag.glsl) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
vec3 SetupNEE(vec3 x, vec3 nl, out float toLightDist, out float cosNL) {\r
    toLightDist = INFINITY; cosNL = 0.0;\r
    if (uNumPTLights < 1) return vec3(0.0);\r
\r
    int li = clamp(int(rand() * float(uNumPTLights)), 0, uNumPTLights - 1);\r
    PTLight L = getLight(li);\r
    vec3 toLight = vec3(0.0);\r
\r
    if (L.type < 0.5) {\r
        toLight = -L.dir; toLightDist = INFINITY; cosNL = max(0.0, dot(toLight, nl));\r
    } else if (L.type < 1.5) {\r
        vec3 delta = L.pos - x; float d = max(length(delta), 0.001);\r
        toLight = delta / d; toLightDist = d; cosNL = max(0.0, dot(toLight, nl));\r
        float range = L.dist;\r
        L.color *= (range > 0.0) ? pow(max(0.0,1.0-d/range),2.0)/(d*d+1.0) : 1.0/(d*d+1.0);\r
    } else if (L.type < 2.5) {\r
        vec3 delta = L.pos - x; float d = max(length(delta), 0.001);\r
        toLight = delta / d; toLightDist = d; cosNL = max(0.0, dot(toLight, nl));\r
        float ct = dot(toLight, -L.dir), cc = L.spotCos;\r
        if (ct < cc * 0.9) return vec3(0.0);\r
        float range = L.dist;\r
        L.color *= smoothstep(cc*0.9,cc,ct) * ((range>0.0)?pow(max(0.0,1.0-d/range),2.0)/(d*d+1.0):1.0/(d*d+1.0));\r
    } else {\r
        vec3 faceNorm = normalize(-L.dir);\r
        vec3 right = normalize(cross(abs(faceNorm.y)<0.9 ? vec3(0,1,0) : vec3(1,0,0), faceNorm));\r
        vec3 up = cross(faceNorm, right);\r
        vec2 r = vec2(rand()-0.5, rand()-0.5);\r
        vec3 samplePos = L.pos + right*(r.x*L.width) + up*(r.y*L.height);\r
        vec3 delta = samplePos - x; float d = max(length(delta), 0.001);\r
        toLight = delta/d; toLightDist = d; cosNL = max(0.0, dot(toLight, nl));\r
        float cosFace = max(0.0, dot(-toLight, faceNorm));\r
        L.color *= cosFace * L.width * L.height / (d*d+1.0);\r
    }\r
    if (cosNL <= 0.0) return vec3(0.0);\r
    rayDirection = normalize(toLight + vec3(rand()-0.5, rand()-0.5, rand()-0.5)*0.02);\r
    rayOrigin    = x + nl * uEPS_intersect;\r
    return L.color * float(uNumPTLights);\r
}\r
\r
// \u2500\u2500 Path integrator \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
vec3 CalculateRadiance() {\r
    vec3  accumCol = vec3(0.0);\r
    vec3  mask     = vec3(1.0);\r
    vec3  n, nl, x;\r
    float ratioIoR, Re, Tr;\r
    bool  nee_active = false, nee_isInfinite = true;\r
    float nee_lightDist = INFINITY;\r
    vec3  nee_lightColor = vec3(0.0);\r
    bool  lastWasDiffuse = false;\r
    int   diffuseCount = 0;\r
    hitType = -100;\r
\r
    for (int bounce = 0; bounce < 8; bounce++) {\r
        float t = SceneIntersect();\r
\r
        if (nee_active) {\r
            bool reached = nee_isInfinite ? (t == INFINITY) : (t > nee_lightDist - uEPS_intersect * 20.0);\r
            if (reached) accumCol += mask * nee_lightColor;\r
            break;\r
        }\r
\r
        if (t == INFINITY) {\r
            if (lastWasDiffuse) accumCol += mask * GetSkyColor(rayDirection) * 0.5;\r
            else                accumCol += mask * GetSkyColor(rayDirection);\r
            break;\r
        }\r
\r
        if (hitType == LIGHT) { accumCol += mask * hitColor; break; }\r
\r
        n  = normalize(hitNormal);\r
        nl = dot(n, rayDirection) < 0.0 ? n : -n;\r
        x  = rayOrigin + rayDirection * t;\r
\r
        vec3 albedo = hitColor;\r
        if (hitAlbedoLayer >= 0 && hitUV.x > -0.5)\r
            albedo *= sampleAlbedo(hitAlbedoLayer, hitUV);\r
\r
        if (hitType == REFR) {\r
            float nc = 1.0, nt = 1.5;\r
            Re = calcFresnelReflectance(rayDirection, n, nc, nt, ratioIoR);\r
            if (rand() < Re) {\r
                rayDirection = reflect(rayDirection, nl);\r
                rayOrigin    = x + nl * uEPS_intersect;\r
            } else {\r
                vec3 refractDir = refract(rayDirection, nl, ratioIoR);\r
                if (dot(refractDir, refractDir) < 0.5) {\r
                    rayDirection = reflect(rayDirection, nl);\r
                    rayOrigin    = x + nl * uEPS_intersect;\r
                } else {\r
                    rayDirection = normalize(refractDir);\r
                    rayOrigin    = x - nl * uEPS_intersect;\r
                    mask        *= albedo;\r
                }\r
            }\r
            lastWasDiffuse = false;\r
            continue;\r
        }\r
\r
        {\r
            vec3  F0    = mix(vec3(0.04), albedo, hitMetalness);\r
            float cosV  = max(dot(nl, -rayDirection), 0.0);\r
            vec3  F     = F_Schlick(cosV, F0);\r
            float pSpec = clamp(max(F.r, max(F.g, F.b)), 0.04, 0.96);\r
\r
            if (rand() < pSpec) {\r
                vec3 reflDir = reflect(rayDirection, nl);\r
                rayDirection = hitRoughness < 0.001 ? reflDir : randomDirectionInSpecularLobe(nl, reflDir, hitRoughness);\r
                mask        *= F / pSpec;\r
                rayOrigin    = x + nl * uEPS_intersect;\r
                lastWasDiffuse = false;\r
            } else {\r
                float oneMinusP = max(1.0 - pSpec, 0.001);\r
                vec3  kd        = (vec3(1.0) - F) * (1.0 - hitMetalness);\r
                mask *= albedo * kd / oneMinusP;\r
                diffuseCount++;\r
                lastWasDiffuse = true;\r
\r
                // Unbiased 50/50 split (see bvh-scene.frag.glsl comments).\r
                if (uNumPTLights > 0 && rand() < 0.5) {\r
                    float nee_cosNL, nee_dist;\r
                    vec3 lightRad = SetupNEE(x, nl, nee_dist, nee_cosNL);\r
                    if (nee_cosNL > 0.0 && length(lightRad) > 0.0) {\r
                        nee_active = true; nee_isInfinite = (nee_dist == INFINITY);\r
                        nee_lightDist = nee_dist; nee_lightColor = lightRad * nee_cosNL * 2.0;\r
                        continue;\r
                    }\r
                    // NEE invalid \u2192 zero contribution; do NOT fall through to hemisphere bounce.\r
                    break;\r
                }\r
                mask        *= 2.0;\r
                rayDirection = randomCosWeightedDirectionInHemisphere(nl);\r
                rayOrigin    = x + nl * uEPS_intersect;\r
            }\r
            continue;\r
        }\r
    }\r
    return max(vec3(0.0), accumCol);\r
}\r
\r
void SetupScene(void) {}\r
\r
// \u2500\u2500 Bake main \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
void main() {\r
    // Discard fragments with no UV2 geometry.\r
    if (vValid < 0.5) { pc_fragColor = vec4(0.0); return; }\r
\r
    vec3 worldPos    = vWorldPos;\r
    vec3 worldNormal = normalize(vWorldNormal);\r
\r
    // Per-texel RNG seed (same pattern as pathtracing_main).\r
    seed = uvec2(uFrameCounter, uFrameCounter + 1.0) * uvec2(gl_FragCoord);\r
    randNumber = 0.0;\r
    blueNoise  = texelFetch(tBlueNoiseTexture, ivec2(mod(floor(gl_FragCoord.xy), 128.0)), 0).r;\r
\r
    // Primary ray: origin at surface point, direction = cosine-weighted hemisphere.\r
    rayOrigin    = worldPos + worldNormal * uEPS_intersect * 10.0;\r
    rayDirection = randomCosWeightedDirectionInHemisphere(worldNormal);\r
\r
    SetupScene();\r
\r
    // Single sample from the path integrator.\r
    vec3 radiance = CalculateRadiance();\r
\r
    // Progressive accumulation: sum over all frames; display shader divides by sampleCounter.\r
    vec4 prev = texelFetch(tPreviousTexture, ivec2(gl_FragCoord.xy), 0);\r
    pc_fragColor = vec4(prev.rgb + radiance, 1.0);\r
}\r
`;class J extends B{constructor(r,t){W();const s={tTriangleTexture:{value:r.triangleTexture},tAABBTexture:{value:r.aabbTexture},tAlbedoArray:{value:r.albedoArray},tPreviousTexture:{value:null},tBlueNoiseTexture:{value:null},uSampleCounter:{value:1},uFrameCounter:{value:1},uEPS_intersect:{value:.001},uRandomVec2:{value:{x:0,y:0}},uHasSkyTexture:{value:!1},tHDRTexture:{value:null},uSkyLightIntensity:{value:1},tLightTexture:{value:t},uNumPTLights:{value:0},uResolution:{value:{x:1,y:1}},uCameraMatrix:{value:null},uCameraIsMoving:{value:!1},uSceneIsDynamic:{value:!1},uUseOrthographicCamera:{value:!1},uApertureSize:{value:0},uFocusDistance:{value:100},uULen:{value:1},uVLen:{value:1},uTime:{value:0},uPreviousSampleCount:{value:1}};super({vertexShader:Q,fragmentShader:H(q),uniforms:s,glslVersion:z}),this.customProgramCacheKey=()=>"pt-bake-v1"}setPreviousTexture(r){var t;this.uniforms.tPreviousTexture.value=(t=r==null?void 0:r.texture)!=null?t:null}}function Z(){const i=new Float32Array(256),r=new j(i,64,1,k,w);return r.colorSpace=P,r.minFilter=r.magFilter=f,r.generateMipmaps=!1,r.needsUpdate=!0,r}function g(i){const r=new K(i,i,{type:w,format:k,minFilter:f,magFilter:f,generateMipmaps:!1,depthBuffer:!1});return r.texture.colorSpace=P,r.texture.flipY=!1,r}const $=`
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,rr=`
precision highp float;
uniform sampler2D tAccum;
uniform float uSampleCount;
out vec4 pc_fragColor;
void main() {
  vec3 radiance = texelFetch(tAccum, ivec2(gl_FragCoord.xy), 0).rgb;
  pc_fragColor = vec4(radiance / uSampleCount, 1.0);
}
`;function er(){return new Promise(i=>setTimeout(i,0))}class nr{constructor(){this.ownedLightTex=null}async bake(r,t,s,n={}){var I,L,N,_,b,F,S,E;const l=(I=n.size)!=null?I:1024,a=(L=n.samples)!=null?L:128,R=(N=n.yieldEvery)!=null?N:4,V=(_=n.numLights)!=null?_:0,C=(F=n.lightTex)!=null?F:(b=this.ownedLightTex)!=null?b:this.ownedLightTex=Z(),p=g(l),x=g(l),m=g(l),o=new J(s,C);o.uniforms.uNumPTLights.value=V,o.uniforms.uSkyLightIntensity.value=(S=n.skyIntensity)!=null?S:1;const u=new B({vertexShader:$,fragmentShader:rr,uniforms:{tAccum:{value:null},uSampleCount:{value:a}},glslVersion:"300 es"}),T=new Map;for(const e of t)T.set(e,e.material);const y=new O(-1,1,1,-1,0,1),D=new A,U=new M(new G(2,2),u);D.add(U);let d=p,h=x;try{for(let e=0;e<a;e++){o.uniforms.uSampleCounter.value=e+1,o.uniforms.uFrameCounter.value=e+1,o.uniforms.uRandomVec2.value={x:Math.random(),y:Math.random()},o.setPreviousTexture(d);for(const c of t)c.material=o;r.setRenderTarget(h),r.clear();for(const c of t){const v=new A;v.add(c),r.render(v,y),c.parent===v&&v.remove(c)}[d,h]=[h,d],(E=n.onProgress)==null||E.call(n,(e+1)/a),(e+1)%R===0&&await er()}for(const e of t){const c=T.get(e);c&&(e.material=c)}u.uniforms.tAccum.value=d.texture,u.uniforms.uSampleCount.value=a,r.setRenderTarget(m),r.clear(),r.render(D,y)}finally{r.setRenderTarget(null)}return{texture:m,samples:a,dispose:()=>{var e;o.dispose(),u.dispose(),p.dispose(),x.dispose(),m.dispose(),(e=this.ownedLightTex)==null||e.dispose()}}}dispose(){var r;(r=this.ownedLightTex)==null||r.dispose()}}async function ir(i,r,t,s={}){const n=X(r),l=new nr,a=await l.bake(i,t,n,s);return{result:{...a,dispose:()=>{a.dispose(),l.dispose(),Y(n)}},sceneData:n}}export{J as PTBakeMaterial,nr as PTBaker,ir as bakePTLightmap};
