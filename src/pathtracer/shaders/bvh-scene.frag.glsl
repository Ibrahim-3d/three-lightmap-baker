precision highp float;
precision highp int;
precision highp sampler2D;

#include <pathtracing_uniforms_and_defines>

// ── BVH scene data ────────────────────────────────────────────────────────────
uniform sampler2D tTriangleTexture;
uniform sampler2D tAABBTexture;

// ── Albedo textures — 8 individual named samplers (ANGLE/SM5 safe) ────────────
uniform sampler2D tAlbedoTex0, tAlbedoTex1, tAlbedoTex2, tAlbedoTex3;
uniform sampler2D tAlbedoTex4, tAlbedoTex5, tAlbedoTex6, tAlbedoTex7;

vec3 sampleAlbedo(int id, vec2 uv) {
    vec3 c = vec3(1.0);
    if      (id == 0) c = texture(tAlbedoTex0, uv).rgb;
    else if (id == 1) c = texture(tAlbedoTex1, uv).rgb;
    else if (id == 2) c = texture(tAlbedoTex2, uv).rgb;
    else if (id == 3) c = texture(tAlbedoTex3, uv).rgb;
    else if (id == 4) c = texture(tAlbedoTex4, uv).rgb;
    else if (id == 5) c = texture(tAlbedoTex5, uv).rgb;
    else if (id == 6) c = texture(tAlbedoTex6, uv).rgb;
    else if (id == 7) c = texture(tAlbedoTex7, uv).rgb;
    return c;
}

// ── Scene lights — synced every frame from THREE.js scene ─────────────────────
#define MAX_PT_LIGHTS 4
uniform float uNumPTLights;
uniform vec3  uPTLightPos[MAX_PT_LIGHTS];
uniform vec3  uPTLightDir[MAX_PT_LIGHTS];
uniform vec3  uPTLightColor[MAX_PT_LIGHTS];
uniform float uPTLightType[MAX_PT_LIGHTS];
uniform float uPTLightDist[MAX_PT_LIGHTS];
uniform float uPTLightSpotCos[MAX_PT_LIGHTS];

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
float hitRoughness;   // 0=smooth … 1=rough
float hitMetalness;   // 0=dielectric … 1=metal
int   hitType = -100;
int   hitAlbedoTextureID;

// ── Utility chunks ────────────────────────────────────────────────────────────
#include <pathtracing_random_functions>
#include <pathtracing_calc_fresnel_reflectance>
#include <pathtracing_boundingbox_intersect>
#include <pathtracing_bvhTriangle_intersect>


// ── Schlick Fresnel — used by PBR material ────────────────────────────────────
vec3 F_Schlick(float cosTheta, vec3 F0) {
    float f = clamp(1.0 - cosTheta, 0.0, 1.0);
    f = f * f * f * f * f;   // f^5
    return F0 + (vec3(1.0) - F0) * f;
}


// ── BVH node fetch ────────────────────────────────────────────────────────────
void GetBoxNodeData(const in float i, inout vec4 d0, inout vec4 d1) {
    float ix2 = i * 2.0;
    d0 = texelFetch(tAABBTexture, ivec2(mod(ix2,       2048.0), floor(ix2       * INV_TEXTURE_WIDTH)), 0);
    d1 = texelFetch(tAABBTexture, ivec2(mod(ix2 + 1.0, 2048.0), floor((ix2+1.0) * INV_TEXTURE_WIDTH)), 0);
}


// ── BVH traversal ─────────────────────────────────────────────────────────────
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
        hitColor     = vd6.yzw;   // base color (emissive×intensity for LIGHT, albedo otherwise)
        hitOpacity   = vd7.y;
        hitUV        = triW*vec2(vd4.zw) + triU*vec2(vd5.xy) + triV*vec2(vd5.zw);
        hitType      = int(vd6.x);
        hitAlbedoTextureID = int(vd7.x);
        hitRoughness = vd7.z;   // packed by BVHSceneBuilder
        hitMetalness = vd7.w;   // packed by BVHSceneBuilder
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
        float t = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
        sky = mix(vec3(0.55, 0.65, 0.9), vec3(0.05, 0.1, 0.3), t);
    }
    return sky * uSkyLightIntensity;
}


// ── NEE ───────────────────────────────────────────────────────────────────────
// Picks one light uniformly, computes radiance at x, sets up shadow ray.
// Returns: lColor * numLights  (caller handles cosNL + probability weights).
// toLightDist: INFINITY = directional, >0 = point/spot.
// cosNL: cos(angle to light) at surface normal nl.
vec3 SetupNEE(vec3 x, vec3 nl, out float toLightDist, out float cosNL) {
    toLightDist = INFINITY; cosNL = 0.0;
    if (uNumPTLights < 1.0) return vec3(0.0);

    int li = clamp(int(rand() * uNumPTLights), 0, MAX_PT_LIGHTS - 1);
    float lType  = uPTLightType[li];
    vec3  lColor = uPTLightColor[li];
    vec3  toLight = vec3(0.0);

    if (lType < 0.5) {
        toLight     = -uPTLightDir[li];
        toLightDist = INFINITY;
        cosNL       = max(0.0, dot(toLight, nl));
    } else if (lType < 1.5) {
        vec3 delta = uPTLightPos[li] - x;
        float d    = max(length(delta), 0.001);
        toLight    = delta / d; toLightDist = d; cosNL = max(0.0, dot(toLight, nl));
        float range = uPTLightDist[li];
        lColor *= (range > 0.0) ? pow(max(0.0, 1.0 - d/range), 2.0) / (d*d + 1.0) : 1.0/(d*d + 1.0);
    } else {
        vec3 delta = uPTLightPos[li] - x;
        float d    = max(length(delta), 0.001);
        toLight    = delta / d; toLightDist = d; cosNL = max(0.0, dot(toLight, nl));
        float ct = dot(toLight, -uPTLightDir[li]), cc = uPTLightSpotCos[li];
        if (ct < cc * 0.9) return vec3(0.0);
        float range = uPTLightDist[li];
        lColor *= smoothstep(cc*0.9, cc, ct) *
                  ((range > 0.0) ? pow(max(0.0, 1.0 - d/range), 2.0)/(d*d+1.0) : 1.0/(d*d+1.0));
    }
    if (cosNL <= 0.0) return vec3(0.0);

    rayDirection = normalize(toLight + vec3(rand()-0.5, rand()-0.5, rand()-0.5) * 0.02);
    rayOrigin    = x + nl * uEPS_intersect;
    return lColor * uNumPTLights; // compensate for 1/N selection
}


// ── Path integrator ───────────────────────────────────────────────────────────
vec3 CalculateRadiance(out vec3 objectNormal, out vec3 objectColor,
                       out float objectID,    out float pixelSharpness)
{
    vec3  accumCol = vec3(0.0);
    vec3  mask     = vec3(1.0);
    vec3  n, nl, x;
    float ratioIoR, Re, Tr;

    // NEE shadow-ray state (resolved on the next bounce)
    bool  nee_active     = false;
    bool  nee_isInfinite = true;
    float nee_lightDist  = INFINITY;
    vec3  nee_lightColor = vec3(0.0); // pure light radiance, NO mask baked in

    // Track whether last bounce was diffuse-like (for sky GI contribution)
    bool lastWasDiffuse = false;

    int diffuseCount     = 0;
    hitType = -100;
    int bounceIsSpecular = TRUE;

    for (int bounce = 0; bounce < 8; bounce++)
    {
        float t = SceneIntersect();

        // ── Resolve shadow ray ────────────────────────────────────────────────
        if (nee_active) {
            bool reached = nee_isInfinite ? (t == INFINITY)
                                          : (t > nee_lightDist - uEPS_intersect * 20.0);
            if (reached) accumCol += mask * nee_lightColor;
            break;
        }

        // ── Miss — sky / environment ──────────────────────────────────────────
        if (t == INFINITY) {
            if (bounce == 0) { pixelSharpness = 1.0; accumCol += GetSkyColor(rayDirection); break; }
            if (lastWasDiffuse) {
                // GI diffuse ray escaped — indirect sky (mask already ×2 from GI path, so ×0.5 here)
                accumCol += mask * GetSkyColor(rayDirection) * 0.5;
            } else {
                // Specular / mirror / glass ray escaped — full sky reflection/transmission
                // (mirrors reflect sky, glass transmits it — both get full contribution)
                accumCol += mask * GetSkyColor(rayDirection);
            }
            break;
        }

        // ── Emissive area light ───────────────────────────────────────────────
        if (hitType == LIGHT) { accumCol += mask * hitColor; break; }

        n  = normalize(hitNormal);
        nl = dot(n, rayDirection) < 0.0 ? n : -n;
        x  = rayOrigin + rayDirection * t;

        // Surface albedo from texture or material base color
        vec3 albedo = hitColor;
        if (hitAlbedoTextureID >= 0 && hitUV.x > -0.5)
            albedo *= sampleAlbedo(hitAlbedoTextureID, hitUV);

        if (bounce == 0) { objectNormal += n; objectColor += albedo; objectID += hitObjectID; }

        // ── REFR — glass / dielectric transmission ────────────────────────────
        if (hitType == REFR) {
            float nc = 1.0, nt = 1.5;
            Re = calcFresnelReflectance(rayDirection, n, nc, nt, ratioIoR);
            Tr = 1.0 - Re;

            if (rand() < Re) {
                // Fresnel reflection (also handles TIR when Re=1)
                rayDirection = reflect(rayDirection, nl);
                rayOrigin    = x + nl * uEPS_intersect;
            } else {
                // Refraction via Snell's law — GLSL built-in handles geometry
                // nl faces toward incoming ray; ratioIoR = etaI/etaT
                vec3 refractDir = refract(rayDirection, nl, ratioIoR);
                if (dot(refractDir, refractDir) < 0.5) {
                    // Safety: zero vector = TIR — reflect instead
                    rayDirection = reflect(rayDirection, nl);
                    rayOrigin    = x + nl * uEPS_intersect;
                } else {
                    rayDirection = normalize(refractDir);
                    rayOrigin    = x - nl * uEPS_intersect; // offset into glass
                    mask        *= albedo;                   // glass tint / attenuation
                }
            }
            if (diffuseCount < 2) bounceIsSpecular = TRUE;
            lastWasDiffuse = false;
            continue;
        }

        // ── PBR_MATERIAL — unified metal + dielectric ─────────────────────────
        // (handles ALL types from BVHSceneBuilder: PBR_MATERIAL=10 and old
        //  DIFF=1, SPEC=3, COAT=4, etc. as fallthrough — everything that is not
        //  LIGHT or REFR gets this PBR path)
        {
            // F0 at normal incidence:
            //   Metal     → F0 = base color (tinted Fresnel)
            //   Dielectric → F0 = 0.04 (generic plastic/concrete/wood)
            vec3 F0 = mix(vec3(0.04), albedo, hitMetalness);

            float cosV = max(dot(nl, -rayDirection), 0.0);
            vec3  F    = F_Schlick(cosV, F0);

            // Probability of specular bounce proportional to max Fresnel component.
            // Clamped to ensure both paths are always possible (no division by zero).
            float pSpec = clamp(max(F.r, max(F.g, F.b)), 0.04, 0.96);

            if (rand() < pSpec) {
                // ── Specular / reflection path ────────────────────────────────
                vec3 reflDir = reflect(rayDirection, nl);

                if (hitRoughness < 0.001) {
                    rayDirection = reflDir; // perfect mirror
                } else {
                    // GGX-like rough specular: mix reflection direction with
                    // random sphere sample proportional to roughness²
                    // (randomDirectionInSpecularLobe is in pathtracing_random_functions)
                    rayDirection = randomDirectionInSpecularLobe(nl, reflDir, hitRoughness);
                }

                // Energy weight: F / pSpec.
                // For metals the tinted albedo is baked into F0 → reflection is colored.
                mask        *= F / pSpec;
                rayOrigin    = x + nl * uEPS_intersect;
                bounceIsSpecular = TRUE;
                lastWasDiffuse   = false;

            } else {
                // ── Diffuse / scattering path ─────────────────────────────────
                // kd: diffuse energy fraction — zero for pure metals.
                // (vec3(1) - F) accounts for energy already spent in specular lobe.
                float oneMinusP = max(1.0 - pSpec, 0.001);
                vec3  kd        = (vec3(1.0) - F) * (1.0 - hitMetalness);
                mask *= albedo * kd / oneMinusP;

                diffuseCount++;
                bounceIsSpecular = FALSE;
                lastWasDiffuse   = true;

                // NEE on every diffuse bounce — needed for indirect GI (color bleeding)
                if (uNumPTLights > 0.0 && rand() < 0.5) {
                    float nee_cosNL, nee_dist;
                    vec3 lightRad = SetupNEE(x, nl, nee_dist, nee_cosNL);
                    if (nee_cosNL > 0.0 && length(lightRad) > 0.0) {
                        nee_active     = true;
                        nee_isInfinite = (nee_dist == INFINITY);
                        nee_lightDist  = nee_dist;
                        // nee_lightColor: no mask here — mask applied at accumulation
                        nee_lightColor = lightRad * nee_cosNL * 2.0;
                        continue;
                    }
                }

                // GI cosine-weighted hemisphere sample
                // ×2 compensates for the 50% probability of choosing NEE vs GI
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
