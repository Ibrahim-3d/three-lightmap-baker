precision highp float;
precision highp int;
precision highp sampler2D;
precision highp sampler2DArray;
out highp vec4 pc_fragColor;

#include <pathtracing_uniforms_and_defines>

// ── BVH scene data ────────────────────────────────────────────────────────────
uniform sampler2D tTriangleTexture;
uniform sampler2D tAABBTexture;

// ── Albedo array - single sampler2DArray binding holding all unique scene
// albedo maps as layers. Layer 0 is a white fallback (used when a material
// has no map). Triangle data stores the layer index per face; values < 0
// signal "skip texture sampling, use vertex color only". This replaces the
// erichlof-style hard-coded `tAlbedoTex0..N` pattern that caps at the WebGL2
// texture-unit limit (~10 useful slots after core samplers). The array can
// scale to thousands of unique maps with a single binding.
uniform sampler2DArray tAlbedoArray;

vec3 sampleAlbedo(int layer, vec2 uv) {
    if (layer < 0) return vec3(1.0);
    return texture(tAlbedoArray, vec3(uv, float(layer))).rgb;
}

// ── Scene lights - packed into a DataTexture, 4 RGBA texels per light ─────────
//
// Layout (each light at offset i*4 in a 64x1 RGBA32F texture):
//   texel i*4+0 : pos.xyz,   type     (0=directional, 1=point, 2=spot, 3=rectarea)
//   texel i*4+1 : color.rgb, dist
//   texel i*4+2 : dir.xyz,   spotCos
//   texel i*4+3 : width,     height,  reserved, reserved   (RectAreaLight)
//
// Max 16 lights (64 texels / 4 = 16).
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

// ── Sky ───────────────────────────────────────────────────────────────────────
uniform sampler2D tHDRTexture;
uniform bool      uHasSkyTexture;
uniform float     uSkyLightIntensity;

#define INV_TEXTURE_WIDTH 0.00048828125

// ── Hit record globals ────────────────────────────────────────────────────────
vec3  rayOrigin, rayDirection;
vec3  hitNormal, hitColor;
vec2  hitUV;
float hitObjectID = -INFINITY;
float hitOpacity;
int   hitType, hitAlbedoLayer;
float hitRoughness, hitMetalness;

// Fresnel Schlick approximation.
vec3 F_Schlick(float cosTheta, vec3 F0) {
    return F0 + (1.0 - F0) * pow(max(1.0 - cosTheta, 0.0), 5.0);
}


#include <pathtracing_random_functions>
#include <pathtracing_calc_fresnel_reflectance>
#include <pathtracing_boundingbox_intersect>
#include <pathtracing_bvhTriangle_intersect>

// ── BVH node lookup - reads 2 RGBA texels per node from tAABBTexture ─────────
// texel[i*2+0]: aabbMin.xyz, aabbMax.x
// texel[i*2+1]: aabbMax.yz,  primitiveCount, leafOrChild_ID
void GetBoxNodeData(const in float i, inout vec4 boxNodeData0, inout vec4 boxNodeData1) {
    float ix2 = i * 2.0;
    ivec2 uv0 = ivec2(mod(ix2,       2048.0), ix2       * INV_TEXTURE_WIDTH);
    ivec2 uv1 = ivec2(mod(ix2 + 1.0, 2048.0), (ix2 + 1.0) * INV_TEXTURE_WIDTH);
    boxNodeData0 = texelFetch(tAABBTexture, uv0, 0);
    boxNodeData1 = texelFetch(tAABBTexture, uv1, 0);
}

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

        triW = 1.0 - triU - triV;
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


// ── Sky ───────────────────────────────────────────────────────────────────────
vec3 GetSkyColor(vec3 dir) {
    vec3 sky = vec3(0.0);
    if (uHasSkyTexture) {
        vec2 uv = vec2(atan(dir.z, dir.x)*ONE_OVER_TWO_PI + 0.5,
                       asin(clamp(dir.y,-1.0,1.0))*ONE_OVER_PI + 0.5);
        sky = texture(tHDRTexture, uv).rgb;
    } else {
        // t=1 when dir.y=+1 (up) → bright sky; t=0 when dir.y=-1 (down) → dark ground
        float t = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
        sky = mix(vec3(0.05, 0.1, 0.3), vec3(0.55, 0.65, 0.9), t);
    }
    return sky * uSkyLightIntensity;
}


// ── NEE - Next Event Estimation ───────────────────────────────────────────────
vec3 SetupNEE(vec3 x, vec3 nl, out float toLightDist, out float cosNL) {
    toLightDist = INFINITY; cosNL = 0.0;
    if (uNumPTLights < 1) return vec3(0.0);

    int li = clamp(int(rand() * float(uNumPTLights)), 0, uNumPTLights - 1);
    PTLight L = getLight(li);
    vec3 toLight = vec3(0.0);

    if (L.type < 0.5) {
        toLight     = -L.dir;
        toLightDist = INFINITY;
        cosNL       = max(0.0, dot(toLight, nl));

    } else if (L.type < 1.5) {
        vec3 delta = L.pos - x;
        float d    = max(length(delta), 0.001);
        toLight    = delta / d;
        toLightDist = d;
        cosNL       = max(0.0, dot(toLight, nl));
        float range = L.dist;
        L.color    *= (range > 0.0)
            ? pow(max(0.0, 1.0 - d/range), 2.0) / (d*d + 1.0)
            : 1.0 / (d*d + 1.0);

    } else if (L.type < 2.5) {
        vec3 delta = L.pos - x;
        float d    = max(length(delta), 0.001);
        toLight    = delta / d;
        toLightDist = d;
        cosNL       = max(0.0, dot(toLight, nl));
        float ct    = dot(toLight, -L.dir);
        float cc    = L.spotCos;
        if (ct < cc * 0.9) return vec3(0.0);
        float range = L.dist;
        L.color    *= smoothstep(cc*0.9, cc, ct) *
                      ((range > 0.0) ? pow(max(0.0, 1.0-d/range), 2.0)/(d*d+1.0) : 1.0/(d*d+1.0));

    } else {
        vec3 faceNorm = normalize(-L.dir);
        vec3 right    = normalize(cross(abs(faceNorm.y) < 0.9 ? vec3(0,1,0) : vec3(1,0,0), faceNorm));
        vec3 up       = cross(faceNorm, right);

        vec2 r = vec2(rand() - 0.5, rand() - 0.5);
        vec3 samplePos = L.pos + right * (r.x * L.width) + up * (r.y * L.height);

        vec3 delta  = samplePos - x;
        float d     = max(length(delta), 0.001);
        toLight     = delta / d;
        toLightDist = d;
        cosNL       = max(0.0, dot(toLight, nl));

        float cosFace = max(0.0, dot(-toLight, faceNorm));
        float area    = L.width * L.height;
        L.color      *= cosFace * area / (d * d + 1.0);
    }

    if (cosNL <= 0.0) return vec3(0.0);

    rayDirection = normalize(toLight + vec3(rand()-0.5, rand()-0.5, rand()-0.5) * 0.02);
    rayOrigin    = x + nl * uEPS_intersect;
    return L.color * float(uNumPTLights);
}


// ── Path integrator ───────────────────────────────────────────────────────────
vec3 CalculateRadiance(out vec3 objectNormal, out vec3 objectColor,
                       out float objectID,    out float pixelSharpness)
{
    // ── DEBUG_VIS: single-hit diagnostic output ──────────────────────────
    // 0 = normal path tracing (default)
    // 1 = world-space normal (RGB = XYZ mapped 0..1)
    // 2 = shading normal nl (after flip)
    // 3 = albedo / material color
    // 4 = material type (LIGHT=white, DIFF/PBR=green, REFR=cyan)
    // 5 = direct cosine lighting (nl · toLight) - no shadows
    #if DEBUG_VIS > 0
    {
        float t = SceneIntersect();
        if (t == INFINITY) { pixelSharpness = 1.0; return GetSkyColor(rayDirection); }
        vec3 n  = normalize(hitNormal);
        vec3 nl = dot(n, rayDirection) < 0.0 ? n : -n;
        vec3 x  = rayOrigin + rayDirection * t;
        objectNormal = n; objectColor = hitColor; objectID = 0.0;

        #if DEBUG_VIS == 1
            return n * 0.5 + 0.5;          // world normal → RGB
        #elif DEBUG_VIS == 2
            return nl * 0.5 + 0.5;         // shading normal → RGB
        #elif DEBUG_VIS == 3
            return hitColor;                // material color
        #elif DEBUG_VIS == 4
            if (hitType == LIGHT) return vec3(1.0, 1.0, 1.0);
            if (hitType == REFR)  return vec3(0.0, 1.0, 1.0);
            return vec3(0.2, 0.8, 0.2);    // PBR/DIFF
        #elif DEBUG_VIS == 5
            // simple N·L with first light
            if (uNumPTLights < 1) return vec3(0.1);
            PTLight L = getLight(0);
            vec3 toLight;
            if (L.type < 0.5) { toLight = -L.dir; }
            else { toLight = normalize(L.pos - x); }
            float NdL = max(0.0, dot(nl, toLight));
            return hitColor * NdL;
        #endif
    }
    #endif

    vec3  accumCol = vec3(0.0);
    vec3  mask     = vec3(1.0);
    vec3  n, nl, x;
    float ratioIoR, Re, Tr;

    bool  nee_active     = false;
    bool  nee_isInfinite = true;
    float nee_lightDist  = INFINITY;
    vec3  nee_lightColor = vec3(0.0);

    bool lastWasDiffuse = false;
    int  diffuseCount   = 0;
    hitType = -100;
    int bounceIsSpecular = TRUE;

    for (int bounce = 0; bounce < 8; bounce++)
    {
        float t = SceneIntersect();

        if (nee_active) {
            bool reached = nee_isInfinite ? (t == INFINITY)
                                          : (t > nee_lightDist - uEPS_intersect * 20.0);
            if (reached) accumCol += mask * nee_lightColor;
            break;
        }

        if (t == INFINITY) {
            if (bounce == 0) { pixelSharpness = 1.0; accumCol += GetSkyColor(rayDirection); break; }
            if (lastWasDiffuse) {
                accumCol += mask * GetSkyColor(rayDirection) * 0.5;
            } else {
                accumCol += mask * GetSkyColor(rayDirection);
            }
            break;
        }

        if (hitType == LIGHT) { accumCol += mask * hitColor; break; }

        n  = normalize(hitNormal);
        nl = dot(n, rayDirection) < 0.0 ? n : -n;
        x  = rayOrigin + rayDirection * t;

        vec3 albedo = hitColor;
        if (hitAlbedoLayer >= 0 && hitUV.x > -0.5)
            albedo *= sampleAlbedo(hitAlbedoLayer, hitUV);

        if (bounce == 0) { objectNormal += n; objectColor += albedo; objectID += hitObjectID; }

        if (hitType == REFR) {
            float nc = 1.0, nt = 1.5;
            Re = calcFresnelReflectance(rayDirection, n, nc, nt, ratioIoR);
            Tr = 1.0 - Re;
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
            if (diffuseCount < 2) bounceIsSpecular = TRUE;
            lastWasDiffuse = false;
            continue;
        }

        {
            vec3  F0   = mix(vec3(0.04), albedo, hitMetalness);
            float cosV = max(dot(nl, -rayDirection), 0.0);
            vec3  F    = F_Schlick(cosV, F0);
            float pSpec = clamp(max(F.r, max(F.g, F.b)), 0.04, 0.96);

            if (rand() < pSpec) {
                vec3 reflDir = reflect(rayDirection, nl);
                if (hitRoughness < 0.001) {
                    rayDirection = reflDir;
                } else {
                    rayDirection = randomDirectionInSpecularLobe(nl, reflDir, hitRoughness);
                }
                mask        *= F / pSpec;
                rayOrigin    = x + nl * uEPS_intersect;
                bounceIsSpecular = TRUE;
                lastWasDiffuse   = false;
            } else {
                float oneMinusP = max(1.0 - pSpec, 0.001);
                vec3  kd        = (vec3(1.0) - F) * (1.0 - hitMetalness);
                mask *= albedo * kd / oneMinusP;

                diffuseCount++;
                bounceIsSpecular = FALSE;
                lastWasDiffuse   = true;

                // Unbiased 50/50 split between NEE (direct) and hemisphere
                // bounce (indirect). Each branch's contribution is multiplied
                // by 2 to compensate the 1/2 selection probability.
                //
                // CRITICAL: when the NEE branch is chosen but NEE fails
                // (cosNL ≤ 0 or shadowed), we MUST terminate the path with
                // zero contribution - NOT fall through to hemisphere bounce.
                // Falling through would double-count the indirect bounce on
                // back-facing surfaces (bottom of sphere / shadow side),
                // producing the classic "lower hemisphere too bright with
                // hard NEE-validity line" artifact.
                if (uNumPTLights > 0 && rand() < 0.5) {
                    float nee_cosNL, nee_dist;
                    vec3 lightRad = SetupNEE(x, nl, nee_dist, nee_cosNL);
                    if (nee_cosNL > 0.0 && length(lightRad) > 0.0) {
                        nee_active     = true;
                        nee_isInfinite = (nee_dist == INFINITY);
                        nee_lightDist  = nee_dist;
                        nee_lightColor = lightRad * nee_cosNL * 2.0;
                        continue;
                    }
                    // NEE invalid → zero direct contribution. Terminate path
                    // so we don't bias the indirect (hemisphere) branch.
                    break;
                }

                mask        *= 2.0;
                rayDirection = randomCosWeightedDirectionInHemisphere(nl);
                rayOrigin    = x + nl * uEPS_intersect;
            }
            continue;
        }

    } // end bounce loop

    return max(vec3(0.0), accumCol);
}


void SetupScene(void) { /* all geometry lives in the BVH DataTextures */ }

#include <pathtracing_main>
