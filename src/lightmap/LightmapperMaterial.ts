import { Color, GLSL3, Matrix4, ShaderMaterial, Texture, Vector3 } from "three";
import { MeshBVH, MeshBVHUniformStruct, shaderIntersectFunction, shaderStructs } from 'three-mesh-bvh';


export type LightmapperMaterialOptions = {
    bvh: MeshBVH,
    invModelMatrix: Matrix4,

    positions: Texture,
    normals: Texture,

    /** Per-triangle albedo (RGBA float, square, indexed by faceIndices.w). Task 03. */
    albedoTex: Texture,
    /** Per-triangle emissive (RGBA float, same layout as albedoTex). Task 03. */
    emissiveTex: Texture,
    /** Side length of the material textures (both are W×W). */
    materialTextureSize: number,

    casts: number,

    lightPosition: Vector3;
    lightSize: number;
    /** Linear-space RGB tint of the point light (multiplied with lightIntensity). */
    lightColor: Color;
    /** Scalar HDR intensity. 1.0 = baseline (matches the pre-Task-04 hardcoded += 1.0). */
    lightIntensity: number;
    // giIntensity removed — Phase A.3 applies it at view time in CompositeMaterial.
    /** Linear-space environment/sky color added on hemisphere-ray miss + as gentle untinted fill. */
    skyColor: Color;
    /** Scalar multiplier on skyColor. 0 = closed-scene physical bake. */
    skyIntensity: number;

    opacity: number;
    sampleIndex: number;

    directLightEnabled: boolean;
    indirectLightEnabled: boolean;
    ambientLightEnabled: boolean;
    ambientDistance: number;
};

export class LightmapperMaterial extends ShaderMaterial {

    constructor(options: LightmapperMaterialOptions) {

        const bvhUniformStruct = new MeshBVHUniformStruct();
        bvhUniformStruct.updateFrom(options.bvh)

        super({
            transparent: true,
            glslVersion: GLSL3,
            depthTest: false,
            depthWrite: false,

            uniforms: {
                bvh: { value: bvhUniformStruct },
                positions: { value: options.positions },
                normals: { value: options.normals },
                albedoTex: { value: options.albedoTex },
                emissiveTex: { value: options.emissiveTex },
                materialTextureSize: { value: options.materialTextureSize },
                invModelMatrix: { value: options.invModelMatrix },
                casts: { value: options.casts },
                lightPosition: { value: options.lightPosition },
                lightSize: { value: options.lightSize },
                lightColor: { value: options.lightColor },
                lightIntensity: { value: options.lightIntensity },
                // giIntensity removed — Phase A.3 applies it in CompositeMaterial at view time.
                skyColor: { value: options.skyColor },
                skyIntensity: { value: options.skyIntensity },
                opacity: { value: 1 },
                sampleIndex: { value: 0 },
                directLightEnabled: { value: options.directLightEnabled },
                indirectLightEnabled: { value: options.indirectLightEnabled },
                ambientLightEnabled: { value: options.ambientLightEnabled },
                ambientDistance: { value: options.ambientDistance },
            },

            vertexShader: /* glsl */`
                out vec2 vUv;
                void main() {
                    gl_Position = vec4( position, 1.0 );
                    vUv = uv;
                }
            `,

            fragmentShader: /* glsl */`
                precision highp float;
                precision highp sampler2D;
                precision highp isampler2D;
                precision highp usampler2D;
                ${ shaderStructs }
                ${ shaderIntersectFunction }

                uniform mat4 invModelMatrix;
                uniform sampler2D positions;
                uniform sampler2D normals;

                // Per-triangle material lookup tables (Task 03).
                // Indexed by global triangle index (faceIndices.w from BVH hit).
                // Coordinate: triIdx -> (triIdx % W, triIdx / W) on a W×W square.
                uniform sampler2D albedoTex;
                uniform sampler2D emissiveTex;
                uniform float materialTextureSize;

                uniform int casts;

                uniform vec3 lightPosition;
                uniform float lightSize;
                uniform vec3 lightColor;
                uniform float lightIntensity;
                // giIntensity uniform removed — Phase A.3 applies it in CompositeMaterial.
                uniform vec3 skyColor;
                uniform float skyIntensity;
                uniform int sampleIndex;

                uniform bool directLightEnabled;
                uniform bool indirectLightEnabled;
                uniform bool ambientLightEnabled;
                uniform float ambientDistance;
                uniform float opacity;

                uniform BVH bvh;
                in vec2 vUv;

                layout(location = 0) out vec4 directOut;
                layout(location = 1) out vec4 indirectOut;
                layout(location = 2) out vec4 aoOut;

                /**
                 * Look up a triangle's material color from a square material texture.
                 * Will be called from the hit branch of the bounce loop in Task 04.
                 *
                 * triIdx == faceIndices.w returned by bvhIntersectFirstHit.
                 */
                vec3 readTriangleMaterial(sampler2D tex, uint triIdx) {
                    uint W = uint(materialTextureSize);
                    uint x = triIdx % W;
                    uint y = triIdx / W;
                    vec2 uv = (vec2(x, y) + 0.5) / materialTextureSize;
                    return texture(tex, uv).rgb;
                }

                uvec4 s0;
                void rng_initialize(vec2 p, int frame) {
                    // white noise seed
                    s0 = uvec4( uint(p.x), uint(p.y), uint( frame ), uint( p.x ) + uint( p.y ) );
                }

                void pcg4d( inout uvec4 v ) {
                    v = v * 1664525u + 1013904223u;
                    v.x += v.y * v.w;
                    v.y += v.z * v.x;
                    v.z += v.x * v.y;
                    v.w += v.y * v.z;
                    v = v ^ ( v >> 16u );
                    v.x += v.y*v.w;
                    v.y += v.z*v.x;
                    v.z += v.x*v.y;
                    v.w += v.y*v.z;
                }

                float rand() {
                    pcg4d(s0);
                    return float( s0.x ) / float( 0xffffffffu );
                }
                vec2 rand2() {
                    pcg4d( s0 );
                    return vec2( s0.xy ) / float(0xffffffffu);
                }
                vec3 rand3() {
                    pcg4d(s0);
                    return vec3( s0.xyz ) / float( 0xffffffffu );
                }
                vec4 rand4() {
                    pcg4d(s0);
                    return vec4(s0)/float(0xffffffffu);
                }

                vec3 randomSpherePoint(vec3 rand) {
                    float ang1 = (rand.x + 1.0) * 3.1415; // [-1..1) -> [0..2*PI)
                    float u = rand.y; // [-1..1), cos and acos(2v-1) cancel each other out, so we arrive at [-1..1)
                    float u2 = u * u;
                    float sqrt1MinusU2 = sqrt(1.0 - u2);
                    float x = sqrt1MinusU2 * cos(ang1);
                    float y = sqrt1MinusU2 * sin(ang1);
                    float z = u;
                    return vec3(x, y, z);
                  }

                  vec3 getHemisphereSample( vec3 n, vec2 uv ) {
                    // https://www.rorydriscoll.com/2009/01/07/better-sampling/
                    // https://graphics.pixar.com/library/OrthonormalB/paper.pdf
                    float s = n.z == 0.0 ? 1.0 : sign( n.z );
                    float a = - 1.0 / ( s + n.z );
                    float b = n.x * n.y * a;
                    vec3 b1 = vec3( 1.0 + s * n.x * n.x * a, s * b, - s * n.x );
                    vec3 b2 = vec3( b, s + n.y * n.y * a, - n.y );
                    float r = sqrt( uv.x );
                    float theta = 2.0 * 3.1415 * uv.y;
                    float x = r * cos( theta );
                    float y = r * sin( theta );
                    return x * b1 + y * b2 + sqrt( 1.0 - uv.x ) * n;
                }

                void main() {
                    vec4 position = texture(positions, vUv);
                    vec4 normal = texture(normals, vUv);

                    rng_initialize( gl_FragCoord.xy, sampleIndex );

                    vec3 rayOrigin = vec3(position.r, position.g, position.b);
                    vec3 rayDirection = vec3(normal.r, normal.g, normal.b);

                    rayOrigin += rayDirection * 0.001;

                    uvec4 faceIndices = uvec4( 0u );
                    vec3 faceNormal = vec3( 0.0, 0.0, 1.0 );
                    vec3 barycoord = vec3( 0.0 );
                    float side = 1.0;
                    float dist = 0.0;

                    vec3 totalIndirectLight = vec3(0.0);
                    float totalAO = 0.0;
                    vec3 totalDirectLight = vec3(0.0);

                    if(ambientLightEnabled || indirectLightEnabled) {
                        for ( int i = 0; i < casts; i++ ) {
                            vec3 newDirection = getHemisphereSample(normal.xyz, rand4().xy);

                            if(dot(rayDirection, newDirection) > 0.0) {
                                bool hit = bvhIntersectFirstHit( bvh, rayOrigin, newDirection, faceIndices, faceNormal, barycoord, side, dist );

                                // Task 04 — 1-bounce GI on the indirect channel.
                                //   miss: contribute skyColor*skyIntensity (0 by default = closed scene).
                                //   hit:  (a) emissive direct visibility, cosθ/PDF cancels, so += hitEmissive.
                                //         (b) NEE shadow ray to lightPosition for albedo-tinted color bleed.
                                if (indirectLightEnabled && !hit) {
                                    totalIndirectLight += skyColor * skyIntensity;
                                }
                                if (indirectLightEnabled && hit) {
                                    vec3 hitAlbedo   = readTriangleMaterial(albedoTex,   faceIndices.w);
                                    vec3 hitEmissive = readTriangleMaterial(emissiveTex, faceIndices.w);

                                    totalIndirectLight += hitEmissive;

                                    vec3 hitPos    = rayOrigin + newDirection * dist;
                                    // three-mesh-bvh internally does norm = side * normalize(norm)
                                    // so faceNormal is ALREADY flipped to face the ray origin.
                                    // Re-flipping here would push shadowOrigin INTO the surface
                                    // and kill backface NEE contributions (ceiling, sphere
                                    // interior, knot, ...).
                                    vec3 hitNormal = faceNormal;
                                    vec3 shadowOrigin = hitPos + hitNormal * 0.001;

                                    vec3  toLight     = lightPosition - shadowOrigin;
                                    float distToLight = length(toLight);
                                    vec3  L           = toLight / distToLight;
                                    float cosL        = max(0.0, dot(hitNormal, L));

                                    if (cosL > 0.0) {
                                        uvec4 sFaceIndices = uvec4(0u);
                                        vec3  sFaceNormal  = vec3(0.0, 0.0, 1.0);
                                        vec3  sBary        = vec3(0.0);
                                        float sSide        = 1.0;
                                        float sDist        = 0.0;
                                        bool shadowHit = bvhIntersectFirstHit(
                                            bvh, shadowOrigin, L,
                                            sFaceIndices, sFaceNormal, sBary, sSide, sDist );

                                        // Light visible if nothing blocks before the light position.
                                        if (!shadowHit || sDist >= distToLight - 0.001) {
                                            // Energy-balance hack: the direct loop adds
                                            //   lightColor*lightIntensity
                                            // per visible cast WITHOUT a matching cos/PI at the
                                            // receiver, so a strict Lambertian BRDF (albedo/PI * cos)
                                            // on the bounce is ~PI x dimmer than direct under the
                                            // 0.5 mix - colour bleed becomes invisible. Keeping
                                            // cos(N_hit . L) (geometrically meaningful) but
                                            // dropping 1/PI puts both channels on the same order
                                            // of magnitude. giIntensity then provides fine control.
                                            totalIndirectLight += hitAlbedo * cosL * lightColor * lightIntensity;
                                        }
                                    }
                                }

                                if (ambientLightEnabled) {
                                    if(!hit) {
                                        totalAO += 1.0;
                                    } else {
                                        // Smooth AO falloff: 0.0 at contact, 1.0 at ambientDistance
                                        totalAO += clamp(dist / ambientDistance, 0.0, 1.0);
                                    }
                                }
                            }
                        }
                    }

                    if(directLightEnabled) {
                        for ( int i = 0; i < casts; i++ ) {
                            vec3  toLight     = lightPosition - rayOrigin;
                            float distToLight = length(toLight);
                            // Jittered sampling for soft shadows
                            vec3  L           = normalize(toLight + randomSpherePoint(rand3()) * lightSize);
                            
                            float dotNL = dot(normal.xyz, L);
                            // L.y > 0 ensures the light only emits "downward" (one-sided plane logic)
                            if (dotNL > 0.0 && L.y > 0.0) {
                                bool hit = bvhIntersectFirstHit( bvh, rayOrigin, L, faceIndices, faceNormal, barycoord, side, dist );

                                if(!hit || dist >= distToLight - 0.01) {
                                    // Apply Lambertian N.L falloff for 3D depth
                                    totalDirectLight += lightColor * lightIntensity * dotNL;
                                }
                            }
                        }
                    }

                    vec4 adverageDirectLight = vec4(totalDirectLight / float(casts), 1.0);
                    vec4 adverageAO = vec4(vec3(totalAO / float(casts)), 1.0);
                    // Raw indirect — giIntensity moved to CompositeMaterial (Phase A.3 view-time composite).
                    vec4 adverageIndirectLight = vec4(totalIndirectLight / float(casts), 1.0);

                    // MRT outputs — each channel written independently.
                    // Compositing (multiplier, AO multiply) moves to Phase A.3 CompositeMaterial.
                    directOut   = directLightEnabled   ? vec4(adverageDirectLight.rgb,   opacity)
                                                       : vec4(0.0, 0.0, 0.0, opacity);
                    indirectOut = indirectLightEnabled  ? vec4(adverageIndirectLight.rgb, opacity)
                                                       : vec4(0.0, 0.0, 0.0, opacity);
                    aoOut       = ambientLightEnabled   ? vec4(adverageAO.rgb,            opacity)
                                                       : vec4(0.0, 0.0, 0.0, opacity);
                }
            `
        });
    }
}

