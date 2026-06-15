"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var m=require("three"),Ut=require("xatlas-three"),ae=require("three-mesh-bvh");const be=new m.Vector3,Ne=new m.Vector3,Ge=new m.Vector3,Be=new m.Vector3,We=new m.Vector3,Ve=new m.Vector3,ut=.95;function xe(t){const e=t.geometry,r=e.attributes.position;if(!r)return 0;const n=t.matrixWorld;let a=0;const i=(o,l,u)=>(be.fromBufferAttribute(r,o).applyMatrix4(n),Ne.fromBufferAttribute(r,l).applyMatrix4(n),Ge.fromBufferAttribute(r,u).applyMatrix4(n),Be.subVectors(Ne,be),We.subVectors(Ge,be),Ve.crossVectors(Be,We),Ve.length()*.5);if(e.index){const o=e.index.array;for(let l=0;l<o.length;l+=3)a+=i(o[l],o[l+1],o[l+2])}else for(let o=0;o<r.count;o+=3)a+=i(o,o+1,o+2);return a}function ct(t,e){var o,l,u;if(!Number.isFinite(e.densityMultiplier)||e.densityMultiplier<=0||!Number.isFinite(e.atlasResolution)||e.atlasResolution<=0)return 0;let r=0;for(const c of t){const s=(l=(o=e.perMeshScale)==null?void 0:o[c.uuid])!=null?l:1;r+=xe(c)*s*s}if(!Number.isFinite(r)||r<=0)return 0;const n=(u=e.fillRatio)!=null?u:ut,a=e.atlasResolution*e.atlasResolution;return Math.sqrt(a*n/r)*e.densityMultiplier}function mt(t,e){var c;const r=(c=e.fillRatio)!=null?c:ut,n=e.atlasResolution*e.atlasResolution,a=e.texelsPerMeter*e.texelsPerMeter,o=[...t.map((s,f)=>{var b,g;const d=xe(s),p=(g=(b=e.perMeshScale)==null?void 0:b[s.uuid])!=null?g:1,h=d*a*p*p,v=n>0?h/n:0;return{mesh:s,inputIdx:f,surfaceArea:d,uvFraction:v}})].sort((s,f)=>f.uvFraction-s.uvFraction),l=[],u=new Array(t.length);for(const s of o){let f=s.uvFraction;if(f>r){const p=s.mesh.name||`Mesh ${s.inputIdx+1} (${s.mesh.geometry.type.replace("Geometry","")})`;console.warn(`[baker] mesh "${p}" wants ${(f*100).toFixed(0)}% of one ${e.atlasResolution}\xB2 atlas at ${e.texelsPerMeter} texels/m - clamping to ${(r*100).toFixed(0)}% (effective density reduced)`),f=r}let d=-1;for(let p=0;p<l.length;p++)if(l[p]+f<=r){l[p]=l[p]+f,d=p;break}d<0&&(d=l.length,l.push(f)),u[s.inputIdx]={atlasIdx:d,mesh:s.mesh,uvFraction:f,surfaceArea:s.surfaceArea}}return u}const oe=new Ut.UVUnwrapper({BufferAttribute:m.BufferAttribute}),he=new m.Vector3,$e=1e-4,_t=6;function Ot(t){let e=1/0,r=-1/0;for(const n of t){const a=n.geometry.getAttribute("uv2");if(!a)return{min:0,max:0,valid:!1};for(let i=0;i<a.count;i++){const o=a.getX(i),l=a.getY(i);if(!Number.isFinite(o)||!Number.isFinite(l))return{min:0,max:0,valid:!1};e=Math.min(e,o,l),r=Math.max(r,o,l)}}return{min:e,max:r,valid:Number.isFinite(e)&&Number.isFinite(r)&&e>=-$e&&r<=1+$e}}function Nt(t){const e={};for(const[r,n]of Object.entries(t.attributes))e[r]=n.clone();return{attributes:e,index:t.index?t.index.clone():null,xAtlasSubMeshes:t.userData.xAtlasSubMeshes?structuredClone(t.userData.xAtlasSubMeshes):void 0,hadXAtlasSubMeshes:Object.prototype.hasOwnProperty.call(t.userData,"xAtlasSubMeshes")}}function Gt(t,e){for(const r of Object.keys(t.attributes))t.deleteAttribute(r);for(const[r,n]of Object.entries(e.attributes))t.setAttribute(r,n.clone());t.setIndex(e.index?e.index.clone():null),e.hadXAtlasSubMeshes?t.userData.xAtlasSubMeshes=e.xAtlasSubMeshes?structuredClone(e.xAtlasSubMeshes):e.xAtlasSubMeshes:delete t.userData.xAtlasSubMeshes}function He(t,e){t?oe.packOptions.texelsPerUnit=e:delete oe.packOptions.texelsPerUnit}const Bt=async()=>{const t=(e,r)=>{};await oe.loadLibrary(t,"https://cdn.jsdelivr.net/npm/xatlasjs@0.2.0/dist/xatlas.wasm","https://cdn.jsdelivr.net/npm/xatlasjs@0.2.0/dist/xatlas.js")},Re=async(t,e={})=>{var l,u,c,s,f,d;const r=t.map(p=>p.geometry),n=e.texelsPerUnit!==void 0&&e.texelsPerUnit>0,a=n?(l=e.resolution)!=null?l:1024:4096;let i=(u=e.texelsPerUnit)!=null?u:0;if(n){const p=a*a;let h=0;for(const b of t){const g=(s=(c=e.perMeshScale)==null?void 0:c[b.uuid])!=null?s:1;h+=xe(b)*i*i*g*g/p}const v=.95;h>v&&(i*=Math.sqrt(v/h))}oe.packOptions.padding=Math.max(4,Math.ceil(a/256)),oe.packOptions.resolution=a,He(n,i);const o=n?t.map(p=>p.geometry.userData.worldScale):[];try{if(n)for(const v of t){const b=(d=(f=e.perMeshScale)==null?void 0:f[v.uuid])!=null?d:1;v.getWorldScale(he),v.geometry.userData.worldScale=[he.x*b,he.y*b,he.z*b]}const p=n?_t:1,h=n?r.map(Nt):[];for(let v=0;v<p;v++){if(v>0)for(let S=0;S<r.length;S++){const w=h[S];w&&Gt(r[S],w)}He(n,i);const b=await oe.packAtlas(r,"uv2","uv"),g=Ot(t);if(!n||b.atlasCount<=1&&g.valid)break;const x=v+1<p,y=b.atlasCount>1?`${b.atlasCount} internal atlases`:`uv2 bounds ${g.min.toFixed(3)}..${g.max.toFixed(3)}`;x?(i*=.85,console.warn(`[baker] xatlas produced ${y} for one ${a}x${a} bake group; retrying at ${i.toFixed(2)} texels/m`)):console.warn(`[baker] xatlas still produced ${y}; this bake group may show unmapped black areas`)}}finally{if(n)for(let p=0;p<t.length;p++){const h=t[p];if(!h)continue;const v=o[p];v===void 0?delete h.geometry.userData.worldScale:h.geometry.userData.worldScale=v}}},dt=async(t,e={})=>{for(let r=0;r<t.length;r++){const n=t[r];!n||n.length===0||await Re(n,e)}},Wt=`
    in vec2 uv2;
    uniform vec2 offset;
    out vec4 vPosition;
    void main() {
        vPosition = modelMatrix * vec4(position, 1.0);
        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
`,Vt=`
    in vec4 vPosition;
    out vec4 fragColor;
    void main() {
        // Position w=1.0 marks "inside a chart". 0.0 background from clearColor.
        fragColor = vec4(vPosition.xyz, 1.0);
    }
`,$t=new m.ShaderMaterial({glslVersion:m.GLSL3,vertexShader:Wt,fragmentShader:Vt,side:m.DoubleSide,fog:!1,uniforms:{offset:new m.Uniform(new m.Vector2(0,0))}}),Ht=`
    in vec2 uv2;
    uniform vec2 offset;
    out vec4 vNormal;
    void main() {
        // Use world-space normal matrix (inverse-transpose of modelMatrix) 
        // to correctly handle non-uniform scaling.
        mat3 worldNormalMatrix = transpose(inverse(mat3(modelMatrix)));
        vec3 worldNormal = normalize(worldNormalMatrix * normal);
        // Alpha = 0.0 to match the prior modelMatrix * vec4(normal, 0.0) output.
        // The fragment shader emits length-checked xyz and forwards w as the
        // chart-mask convention; keeping it 0 matches the previous wire format.
        vNormal = vec4(worldNormal, 0.0);
        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
`,Xt=`
    in vec4 vNormal;
    out vec4 fragColor;

    void main() {
        // Guard against zero-length normals (degenerate geometry) - produces (0,0,0,0)
        // so the bake shader can detect the miss instead of generating NaN.
        float len = length(vNormal.xyz);
        fragColor = len > 1.0e-6 ? vec4(vNormal.xyz / len, vNormal.w) : vec4(0.0);
    }
`,qt=new m.ShaderMaterial({glslVersion:m.GLSL3,vertexShader:Ht,fragmentShader:Xt,side:m.DoubleSide,fog:!1,uniforms:{offset:new m.Uniform(new m.Vector2(0,0))}}),ie=new m.Scene,Kt=new m.OrthographicCamera(-1,1,1,-1,0,1),Yt=[{x:-2,y:-2},{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:2,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:2,y:-1},{x:-2,y:0},{x:-1,y:0},{x:1,y:0},{x:2,y:0},{x:-2,y:1},{x:-1,y:1},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:-2,y:2},{x:-1,y:2},{x:0,y:2},{x:1,y:2},{x:2,y:2},{x:0,y:0}];function jt(t){const e=new m.Mesh(t.geometry,t.material);return e.matrixAutoUpdate=!1,e.matrixWorldAutoUpdate=!1,e.matrix.copy(t.matrixWorld),e.matrixWorld.copy(t.matrixWorld),e.normalMatrix.getNormalMatrix(t.matrixWorld),e.frustumCulled=!1,e}function Xe(t,e,r){var a;const n=(a=t.uniforms.offset)==null?void 0:a.value;if(!n)throw new Error("[baker] atlas material missing offset uniform");n.set(e,r)}function ft(t,e,r,n=!0){const a={format:m.RGBAFormat,type:t.capabilities.isWebGL2?m.FloatType:m.HalfFloatType,minFilter:m.NearestFilter,magFilter:m.NearestFilter,generateMipmaps:!1,depthBuffer:!1,stencilBuffer:!1,blending:m.NoBlending},i=new m.WebGLRenderTarget(r,r,a),o=new m.WebGLRenderTarget(r,r,a),l=t.getRenderTarget(),u=t.autoClear,c=new m.Color;t.getClearColor(c);const s=t.getClearAlpha();try{t.autoClear=!1,t.setClearColor(0,0),n&&(t.setRenderTarget(i),t.clear(),t.setRenderTarget(o),t.clear()),ie.clear();for(const d of e)ie.add(jt(d));const f=(d,p)=>{ie.overrideMaterial=d,t.setRenderTarget(p);for(const h of Yt)Xe(d,h.x/r,h.y/r),t.render(ie,Kt);Xe(d,0,0)};f($t,i),f(qt,o)}finally{t.setRenderTarget(l),t.autoClear=u,t.setClearColor(c,s),ie.overrideMaterial=null,ie.clear()}return{positionTexture:i.texture,normalTexture:o.texture,dispose:()=>{i.dispose(),o.dispose()}}}class Zt extends m.ShaderMaterial{constructor(e){const r=new ae.MeshBVHUniformStruct;r.updateFrom(e.bvh);const n=Math.max(1,Math.min(256,e.casts|0));super({transparent:!0,glslVersion:m.GLSL3,depthTest:!1,depthWrite:!1,uniforms:{bvh:{value:r},positions:{value:e.positions},normals:{value:e.normals},albedoTex:{value:e.albedoTex},emissiveTex:{value:e.emissiveTex},materialTextureSize:{value:e.materialTextureSize},invModelMatrix:{value:e.invModelMatrix},bounces:{value:e.bounces},lightsTex:{value:e.lightsTex},lightCount:{value:e.lightCount},skyColor:{value:e.skyColor},skyIntensity:{value:e.skyIntensity},opacity:{value:1},sampleIndex:{value:0},directLightEnabled:{value:e.directLightEnabled},indirectLightEnabled:{value:e.indirectLightEnabled}},vertexShader:`
                out vec2 vUv;
                void main() {
                    gl_Position = vec4( position, 1.0 );
                    vUv = uv;
                }
            `,fragmentShader:`
                /*
                 * Lightmap Bake - Fragment Shader (GLSL3).
                 *
                 * Inputs:
                 *   positions / normals  : G-buffer textures keyed by lightmap UV
                 *   bvh                  : MeshBVH uniform struct of the merged scene
                 *   albedoTex/emissiveTex: per-triangle material lookup (W\xD7W float)
                 *   lightsTex            : 4-wide \xD7 lightCount-tall RGBA float texture
                 *                         texel(0,i)=pos+type, (1,i)=dir+p0,
                 *                         (2,i)=color+p1, (3,i)=p2,p3,0,0
                 *
                 * Outputs (MRT):
                 *   directOut   : raw direct irradiance (no surface albedo applied)
                 *   indirectOut : N-bounce GI + sky on miss
                 *
                 * AO has been split into a separate pass - see AOMaterial.ts.
                 *
                 * directOut convention: stores "incoming light per unit albedo".
                 * Material color is applied at composite/view time. This matches
                 * the pre-7C energy balance for the single-light case.
                 *
                 * Progressive accumulation: opacity = 1/(n+1), done by the caller.
                 */
                precision highp float;
                precision highp sampler2D;
                precision highp isampler2D;
                precision highp usampler2D;
                ${ae.shaderStructs}
                ${ae.shaderIntersectFunction}

                uniform mat4 invModelMatrix;
                uniform sampler2D positions;
                uniform sampler2D normals;

                // Per-triangle material lookup (Task 03). Indexed by faceIndices.w.
                uniform sampler2D albedoTex;
                uniform sampler2D emissiveTex;
                uniform float materialTextureSize;

                #define MAX_BOUNCES 4
                // Static upper cap on lights checked per shadow loop iteration.
                // Runtime count is controlled by the lightCount uniform.
                #define MAX_LIGHTS 16
                // Cast count is compile-time on purpose. A uniform-bound cast
                // loop produced NaNs on ANGLE when it wrapped texture/BVH calls.
                #define CASTS ${n}

                uniform int bounces;

                // Multi-light texture: 4 texels wide \xD7 lightCount tall, RGBA float.
                uniform sampler2D lightsTex;
                uniform int lightCount;

                uniform vec3 skyColor;
                uniform float skyIntensity;
                uniform int sampleIndex;

                uniform bool directLightEnabled;
                uniform bool indirectLightEnabled;
                uniform float opacity;

                uniform BVH bvh;
                in vec2 vUv;

                layout(location = 0) out vec4 directOut;
                layout(location = 1) out vec4 indirectOut;

                // \u2500\u2500 RNG \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                uvec4 s0;
                void rng_initialize(vec2 p, int frame) {
                    s0 = uvec4( uint(p.x), uint(p.y), uint( frame ), uint( p.x ) + uint( p.y ) );
                }
                void pcg4d( inout uvec4 v ) {
                    v = v * 1664525u + 1013904223u;
                    v.x += v.y * v.w; v.y += v.z * v.x;
                    v.z += v.x * v.y; v.w += v.y * v.z;
                    v = v ^ ( v >> 16u );
                    v.x += v.y*v.w; v.y += v.z*v.x;
                    v.z += v.x*v.y; v.w += v.y*v.z;
                }
                float rand()  { pcg4d(s0); return float(s0.x) / float(0xffffffffu); }
                vec2  rand2() { pcg4d(s0); return vec2(s0.xy) / float(0xffffffffu); }
                vec3  rand3() { pcg4d(s0); return vec3(s0.xyz) / float(0xffffffffu); }
                vec4  rand4() { pcg4d(s0); return vec4(s0) / float(0xffffffffu); }

                // \u2500\u2500 Geometry helpers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                vec3 randomSpherePoint(vec3 r) {
                    float ang1 = (r.x + 1.0) * 3.1415;
                    float u = r.y; float u2 = u * u;
                    float s = sqrt(max(0.0, 1.0 - u2));
                    return vec3(s * cos(ang1), s * sin(ang1), u);
                }

                vec3 safeNormalize(vec3 v, vec3 fallback) {
                    float len2 = dot(v, v);
                    return len2 > 1.0e-12 ? v * inversesqrt(len2) : fallback;
                }

                vec3 getHemisphereSample( vec3 n, vec2 uv ) {
                    float s = n.z == 0.0 ? 1.0 : sign(n.z);
                    float a = -1.0 / (s + n.z);
                    float b = n.x * n.y * a;
                    vec3 b1 = vec3(1.0 + s * n.x * n.x * a, s * b, -s * n.x);
                    vec3 b2 = vec3(b, s + n.y * n.y * a, -n.y);
                    float r = sqrt(uv.x);
                    float theta = 2.0 * 3.1415 * uv.y;
                    return r * cos(theta) * b1 + r * sin(theta) * b2 + sqrt(1.0 - uv.x) * n;
                }

                // \u2500\u2500 Material lookup \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                vec3 readTriangleMaterial(sampler2D tex, uint triIdx) {
                    uint W = uint(materialTextureSize);
                    vec2 uv = (vec2(triIdx % W, triIdx / W) + 0.5) / materialTextureSize;
                    return texture(tex, uv).rgb;
                }

                // \u2500\u2500 Light texture access \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                /**
                 * Read texel (slot, lightIdx) from the 4-wide light texture.
                 * slot \u2208 {0,1,2,3}. Guard: only call when lightCount > 0.
                 */
                vec4 readLight(int lightIdx, int slot) {
                    vec2 uv = (vec2(float(slot), float(lightIdx)) + 0.5)
                              / vec2(4.0, float(lightCount));
                    return texture(lightsTex, uv);
                }

                // \u2500\u2500 Light sampling \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                struct LightSample {
                    vec3  L;         // unit direction from hit toward light
                    float distance;  // distance to light (1e6 for directional)
                    vec3  emission;  // color * falloff (0 = skip shadow ray)
                };

                /**
                 * Sample light li at hitPos / hitNormal using 2D random input rnd.
                 * Directional jitter uses tan(angularSize) approximation - valid for
                 * small angles (sun disc \u2272 5\xB0). Larger values over-bias the direction.
                 */
                LightSample sampleLight(int li, vec3 hitPos, vec3 hitNormal, vec2 rnd) {
                    vec4 t0 = readLight(li, 0);
                    vec4 t1 = readLight(li, 1);
                    vec4 t2 = readLight(li, 2);
                    vec4 t3 = readLight(li, 3);
                    int  ltype  = int(t0.w + 0.5);
                    vec3 lpos   = t0.xyz;
                    vec3 ldir   = safeNormalize(t1.xyz, vec3(0.0, -1.0, 0.0));
                    vec3 lcolor = t2.xyz;
                    float p0 = t1.w, p1 = t2.w; // p2=t3.x, p3=t3.y available if needed

                    LightSample s;
                    s.emission = vec3(0.0);
                    s.distance = 1e6;

                    if (ltype == 0) {
                        // Point - sphere jitter for soft shadows (radius = p0).
                        vec3 jitter = (p0 > 0.0) ? randomSpherePoint(vec3(rnd, rand())) * p0
                                                  : vec3(0.0);
                        vec3 d = (lpos + jitter) - hitPos;
                        s.distance = max(length(d), 1.0e-5);
                        s.L        = d / s.distance;
                        s.emission = lcolor;
                    }
                    else if (ltype == 1) {
                        // Directional - effectively infinite distance.
                        vec3 baseL = -ldir;
                        vec3 jitter = (p0 > 0.0)
                            ? randomSpherePoint(vec3(rnd, rand())) * tan(p0)
                            : vec3(0.0);
                        s.L        = safeNormalize(baseL + jitter, baseL);
                        s.distance = 1e6;
                        s.emission = lcolor;
                    }
                    else if (ltype == 2) {
                        // Spot - point source with angular cone falloff.
                        // p0 = innerAngleCos, p1 = outerAngleCos.
                        vec3 d = lpos - hitPos;
                        s.distance = max(length(d), 1.0e-5);
                        s.L = d / s.distance;
                        float cosAngle = dot(-s.L, ldir);
                        float falloff  = clamp((cosAngle - p1) / max(p0 - p1, 1.0e-5), 0.0, 1.0);
                        s.emission = lcolor * falloff;
                    }
                    else {
                        // Area - rectangle centered at lpos, normal = ldir, width=p0, height=p1.
                        vec3 up = abs(ldir.y) < 0.999 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
                        vec3 tu = safeNormalize(cross(up, ldir), vec3(1.0, 0.0, 0.0));
                        vec3 tv = cross(ldir, tu);
                        vec2 luv = rnd - 0.5;
                        vec3 sample_pos = lpos + tu * (luv.x * p0) + tv * (luv.y * p1);
                        vec3 d = sample_pos - hitPos;
                        s.distance = max(length(d), 1.0e-5);
                        s.L = d / s.distance;
                        // One-sided emission: only emits in -ldir hemisphere.
                        s.emission = lcolor * max(0.0, dot(-s.L, ldir));
                    }
                    return s;
                }

                // \u2500\u2500 NEE (Next Event Estimation) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                /**
                 * Sum NEE contributions from ALL lights at a hit point.
                 * One shadow ray per light. hitAlbedo: pass vec3(1.0) for the
                 * direct channel (raw irradiance); pass surface albedo for GI bounces.
                 * NaN guard: bvhIntersectFirstHit out-param sd initialised to 0.
                 */
                vec3 sampleAllLightsNEE(vec3 hitPos, vec3 hitNormal, vec3 hitAlbedo) {
                    if (lightCount <= 0) return vec3(0.0);
                    vec3 sum = vec3(0.0);
                    vec3 bary = vec3(0.0); float sideVal = 1.0;
                    for (int li = 0; li < MAX_LIGHTS; li++) {
                        if (li >= lightCount) break;
                        LightSample ls = sampleLight(li, hitPos, hitNormal, rand4().xy);
                        if (dot(ls.emission, ls.emission) <= 1.0e-12) continue;
                        float cosL = max(0.0, dot(hitNormal, ls.L));
                        if (cosL <= 0.0) continue;
                        vec3 shadowOrigin = hitPos + hitNormal * 0.001;
                        uvec4 sfi = uvec4(0u); vec3 sfn = vec3(0.0,0.0,1.0); float sd = 0.0;
                        bool occ = bvhIntersectFirstHit(bvh, shadowOrigin, ls.L, sfi, sfn, bary, sideVal, sd);
                        if (occ && sd < ls.distance - 0.001) continue;
                        // 1/PI dropped - matches pre-7C energy balance convention.
                        sum += hitAlbedo * cosL * ls.emission;
                    }
                    return sum;
                }

                // \u2500\u2500 Path tracer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                /**
                 * N-bounce path tracer. Called once per hemisphere cast.
                 * faceNormal from three-mesh-bvh is already side-flipped.
                 * DO NOT re-flip - re-flipping pushes shadow origins into surfaces.
                 */
                vec3 tracePath(
                    vec3 ro, vec3 rd,
                    bool hit, uvec4 fi, vec3 fn, float fd
                ) {
                    vec3 throughput = vec3(1.0);
                    vec3 radiance   = vec3(0.0);
                    vec3 bary = vec3(0.0);
                    float sideVal = 1.0;

                    for (int b = 0; b < MAX_BOUNCES; b++) {
                        if (b >= bounces) break;
                        if (!hit) {
                            if (b == 0) radiance += throughput * skyColor * skyIntensity;
                            break;
                        }

                        vec3 hitAlbedo   = readTriangleMaterial(albedoTex,   fi.w);
                        vec3 hitEmissive = readTriangleMaterial(emissiveTex, fi.w);
                        vec3 hitPos      = ro + rd * fd;
                        vec3 hitNormal   = fn;
                        vec3 hitOrigin   = hitPos + hitNormal * 0.001;

                        // (a) Emissive surface contribution.
                        radiance += throughput * hitEmissive;

                        // (b) NEE - all lights, with surface albedo (GI bounce).
                        radiance += throughput * sampleAllLightsNEE(hitOrigin, hitNormal, hitAlbedo);

                        // (c) Throughput update - cosine/PDF cancel.
                        throughput *= hitAlbedo;

                        // (d) Russian Roulette from bounce 2 onward.
                        if (b >= 2) {
                            float p = clamp(max(throughput.r, max(throughput.g, throughput.b)), 0.0, 1.0);
                            if (rand() > p) break;
                            throughput /= max(p, 1.0e-4);
                        }

                        // (e) Next bounce - cosine-weighted hemisphere.
                        ro  = hitOrigin;
                        rd  = getHemisphereSample(hitNormal, rand4().xy);
                        fd  = 0.0;
                        hit = bvhIntersectFirstHit(bvh, ro, rd, fi, fn, bary, sideVal, fd);
                    }
                    return radiance;
                }

                // \u2500\u2500 Main \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                void main() {
                    vec4 position = texture(positions, vUv);
                    vec4 normal   = texture(normals,   vUv);

                    // Empty G-buffer pixels have no surface. Do not trace rays
                    // from origin with a zero normal into the accumulation RTs.
                    if (position.a <= 0.0 || dot(normal.xyz, normal.xyz) <= 1.0e-10) {
                        directOut = vec4(0.0);
                        indirectOut = vec4(0.0);
                        return;
                    }

                    rng_initialize(gl_FragCoord.xy, sampleIndex);

                    vec3 rayOrigin    = position.rgb;
                    vec3 rayDirection = normal.rgb;
                    rayOrigin += rayDirection * 0.001;

                    uvec4 faceIndices = uvec4(0u);
                    vec3  faceNormal  = vec3(0.0, 0.0, 1.0);
                    vec3  barycoord   = vec3(0.0);
                    float side        = 1.0;
                    float dist        = 0.0;

                    vec3  totalIndirectLight = vec3(0.0);
                    vec3  totalDirectLight   = vec3(0.0);
                    float castDivisor        = float(CASTS);

                    // Indirect bounce loop. AO has been moved to its own pass
                    // (AOMaterial / AOMapper) so AO sliders can be tweaked
                    // without a bounce re-bake.
                    if (indirectLightEnabled) {
                        for (int i = 0; i < CASTS; i++) {
                            vec3 newDir = getHemisphereSample(normal.xyz, rand4().xy);
                            if (dot(rayDirection, newDir) > 0.0) {
                                bool hit = bvhIntersectFirstHit(bvh, rayOrigin, newDir,
                                    faceIndices, faceNormal, barycoord, side, dist);
                                totalIndirectLight += tracePath(rayOrigin, newDir, hit,
                                                                faceIndices, faceNormal, dist);
                            }
                        }
                    }

                    if (directLightEnabled) {
                        // Direct lighting: NEE over all lights at the primary surface.
                        // hitAlbedo=vec3(1.0) keeps directOut as raw irradiance so the
                        // material color is applied at composite time (bake convention).
                        for (int i = 0; i < CASTS; i++) {
                            totalDirectLight += sampleAllLightsNEE(rayOrigin, normal.xyz, vec3(1.0));
                        }
                    }

                    vec4 avgDirect   = vec4(totalDirectLight   / castDivisor, 1.0);
                    vec4 avgIndirect = vec4(totalIndirectLight / castDivisor, 1.0);

                    directOut   = directLightEnabled   ? vec4(avgDirect.rgb,   opacity) : vec4(0.0, 0.0, 0.0, opacity);
                    indirectOut = indirectLightEnabled ? vec4(avgIndirect.rgb, opacity) : vec4(0.0, 0.0, 0.0, opacity);
                }
            `}),this.programKey="LightmapperMaterial|glsl3|mrt2",this.programKey=`LightmapperMaterial|glsl3|mrt2|casts=${n}`}customProgramCacheKey(){return this.programKey}}const Qt={point:0,directional:1,spot:2,area:3},ye=4;function pt(t){const e=[];return t.traverse(r=>{var n;if(!!r.visible&&!((n=r.userData)!=null&&n.lightmapIgnore)){if(r instanceof m.PointLight)e.push({type:"point",position:r.getWorldPosition(new m.Vector3),direction:new m.Vector3(0,-1,0),color:r.color.clone().multiplyScalar(r.intensity),params:[0,0,0,0]});else if(r instanceof m.DirectionalLight){const a=new m.Vector3(0,0,-1).transformDirection(r.matrixWorld).normalize();e.push({type:"directional",position:r.getWorldPosition(new m.Vector3),direction:a,color:r.color.clone().multiplyScalar(r.intensity),params:[0,0,0,0]})}else if(r instanceof m.SpotLight){const a=new m.Vector3(0,0,-1).transformDirection(r.matrixWorld).normalize();e.push({type:"spot",position:r.getWorldPosition(new m.Vector3),direction:a,color:r.color.clone().multiplyScalar(r.intensity),params:[Math.cos(r.angle*(1-r.penumbra)),Math.cos(r.angle),0,0]})}else if(r instanceof m.RectAreaLight){const a=new m.Vector3(0,0,-1).transformDirection(r.matrixWorld).normalize();e.push({type:"area",position:r.getWorldPosition(new m.Vector3),direction:a,color:r.color.clone().multiplyScalar(r.intensity),params:[r.width,r.height,0,0]})}}}),e}function ht(t){const e=Math.max(1,t.length),r=new Float32Array(ye*e*4);for(let a=0;a<t.length;a++){const i=t[a],o=a*ye*4;r[o+0]=i.position.x,r[o+1]=i.position.y,r[o+2]=i.position.z,r[o+3]=Qt[i.type],r[o+4]=i.direction.x,r[o+5]=i.direction.y,r[o+6]=i.direction.z,r[o+7]=i.params[0],r[o+8]=i.color.r,r[o+9]=i.color.g,r[o+10]=i.color.b,r[o+11]=i.params[1],r[o+12]=i.params[2],r[o+13]=i.params[3],r[o+14]=0,r[o+15]=0}const n=new m.DataTexture(r,ye,e,m.RGBAFormat,m.FloatType);return n.minFilter=m.NearestFilter,n.magFilter=m.NearestFilter,n.generateMipmaps=!1,n.wrapS=m.ClampToEdgeWrapping,n.wrapT=m.ClampToEdgeWrapping,n.needsUpdate=!0,{texture:n,count:t.length,capacity:e}}function vt(t){t.dispose()}const gt=(t,e,r,n,a)=>{var D,W;const i=ht(a.lights),o=i.texture,l=new Zt({bvh:n,invModelMatrix:new m.Matrix4().identity(),positions:e,normals:r,albedoTex:a.albedoTexture,emissiveTex:a.emissiveTexture,materialTextureSize:a.materialTextureSize,casts:a.casts,bounces:(D=a.bounces)!=null?D:1,lightsTex:o,lightCount:i.count,skyColor:a.skyColor,skyIntensity:a.skyIntensity,opacity:1,sampleIndex:0,directLightEnabled:a.directLightEnabled,indirectLightEnabled:a.indirectLightEnabled}),u=new m.WebGLMultipleRenderTargets(a.resolution,a.resolution,2,{type:m.FloatType,minFilter:m.LinearFilter,magFilter:m.LinearFilter,generateMipmaps:!1}),c=t.getRenderTarget(),s=new m.Color;t.getClearColor(s);const f=t.getClearAlpha();t.setRenderTarget(u),t.setClearColor(0,0),t.clear(),t.setRenderTarget(c),t.setClearColor(s,f);const d=new m.Mesh(new m.PlaneGeometry(2,2),l),p=new m.OrthographicCamera;let h=0;const v=a.targetSamples|0,b=a.resolution;let g=Math.max(1,Math.min(b,(W=a.tileSize)!=null?W:b)),x=null,y=0;const S=O=>{const _=Math.ceil(b/O);return{tilesX:_,tilesY:_,count:_*_}};let w=S(g);const M=l.uniforms.sampleIndex,E=l.uniforms.opacity;if(!M||!E)throw new Error("[baker] LightmapperMaterial missing required uniforms");const T=()=>{const O=performance.now(),_=t.autoClear,N=t.getRenderTarget(),K=t.getScissorTest();try{if(t.autoClear=!1,t.setRenderTarget(u),M.value=h,E.value=1/(h+1),g>=b)t.setScissorTest(!1),t.render(d,p);else{const X=y%w.tilesX,V=y/w.tilesX|0,re=X*g,J=V*g,ee=Math.min(g,b-re),H=Math.min(g,b-J);t.setScissor(re,J,ee,H),t.setScissorTest(!0),t.render(d,p)}}finally{t.setScissorTest(K),t.setRenderTarget(N),t.autoClear=_}y++;let $=!1;return y>=w.count&&(y=0,h++,$=!0,x!==null&&(g=x,w=S(g),x=null)),{ms:performance.now()-O,sampleCompleted:$}},I=()=>{if(v>0&&h>=v)return{samples:h,done:!0,sampleComplete:!0,lastDrawMs:0};let O=0;for(;;){const _=T();if(O=_.ms,_.sampleCompleted)break}return{samples:h,done:v>0&&h>=v,sampleComplete:!0,lastDrawMs:O}},F=O=>{if(v>0&&h>=v)return{samples:h,done:!0,sampleComplete:!0,lastDrawMs:0};const _=performance.now()+Math.max(0,O);let N=0,K=!1;do{const $=T();if(N=$.ms,$.sampleCompleted&&(K=!0,v>0&&h>=v))break}while(performance.now()<_);return{samples:h,done:v>0&&h>=v,sampleComplete:K,lastDrawMs:N}},B=O=>{const _=Math.max(1,Math.min(b,O|0));_===g&&x===null||(y===0?(g=_,w=S(g),x=null):x=_)},C=()=>{h=0,y=0},P=()=>{vt(o),u.dispose(),l.dispose(),d.geometry.dispose()},[A,z]=u.texture;if(!A||!z)throw new Error("[baker] WebGLMultipleRenderTargets did not allocate 2 textures");return{renderTarget:u,textures:{direct:A,indirect:z},render:I,renderTiled:F,setTileSize:B,reset:C,dispose:P}};class Jt extends m.ShaderMaterial{customProgramCacheKey(){return"AOMaterial|glsl3|single-out"}constructor(e){const r=new ae.MeshBVHUniformStruct;r.updateFrom(e.bvh),super({transparent:!0,glslVersion:m.GLSL3,depthTest:!1,depthWrite:!1,uniforms:{bvh:{value:r},positions:{value:e.positions},normals:{value:e.normals},invModelMatrix:{value:e.invModelMatrix},aoSamples:{value:e.aoSamples},ambientDistance:{value:e.ambientDistance},opacity:{value:e.opacity},sampleIndex:{value:e.sampleIndex}},vertexShader:`
                out vec2 vUv;
                void main() {
                    gl_Position = vec4( position, 1.0 );
                    vUv = uv;
                }
            `,fragmentShader:`
                /*
                 * Standalone AO bake (GLSL3, single output).
                 *
                 * Stored value: mean of  t = clamp(dist / ambientDistance, 0, 1)
                 * over aoSamples cosine-weighted hemisphere rays. 1.0 on miss
                 * (or hit beyond ambientDistance). 0.0 on hard contact.
                 *
                 * Composite shader applies the intensity/exponent remap. At
                 * intensity=1, exponent=1 the remap is identity so default
                 * output matches pre-separation behavior exactly.
                 */
                precision highp float;
                precision highp sampler2D;
                precision highp isampler2D;
                precision highp usampler2D;
                ${ae.shaderStructs}
                ${ae.shaderIntersectFunction}

                uniform mat4 invModelMatrix;
                uniform sampler2D positions;
                uniform sampler2D normals;
                uniform int aoSamples;
                uniform float ambientDistance;
                uniform int sampleIndex;
                uniform float opacity;
                uniform BVH bvh;
                in vec2 vUv;

                out vec4 aoOut;

                // \u2500\u2500 RNG (matches LightmapperMaterial) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                uvec4 s0;
                void rng_initialize(vec2 p, int frame) {
                    s0 = uvec4( uint(p.x), uint(p.y), uint( frame ), uint( p.x ) + uint( p.y ) );
                }
                void pcg4d( inout uvec4 v ) {
                    v = v * 1664525u + 1013904223u;
                    v.x += v.y * v.w; v.y += v.z * v.x;
                    v.z += v.x * v.y; v.w += v.y * v.z;
                    v = v ^ ( v >> 16u );
                    v.x += v.y*v.w; v.y += v.z*v.x;
                    v.z += v.x*v.y; v.w += v.y*v.z;
                }
                vec4 rand4() { pcg4d(s0); return vec4(s0) / float(0xffffffffu); }

                vec3 getHemisphereSample( vec3 n, vec2 uv ) {
                    float s = n.z == 0.0 ? 1.0 : sign(n.z);
                    float a = -1.0 / (s + n.z);
                    float b = n.x * n.y * a;
                    vec3 b1 = vec3(1.0 + s * n.x * n.x * a, s * b, -s * n.x);
                    vec3 b2 = vec3(b, s + n.y * n.y * a, -n.y);
                    float r = sqrt(uv.x);
                    float theta = 2.0 * 3.1415 * uv.y;
                    return r * cos(theta) * b1 + r * sin(theta) * b2 + sqrt(1.0 - uv.x) * n;
                }

                void main() {
                    vec4 position = texture(positions, vUv);
                    vec4 normal   = texture(normals,   vUv);

                    // Outside-chart pixels are neutral AO. Writing black here
                    // makes chart-cut filtering darken visible mesh surfaces.
                    if (position.a <= 0.0 || dot(normal.xyz, normal.xyz) <= 1.0e-10) {
                        aoOut = vec4(vec3(1.0), opacity);
                        return;
                    }

                    rng_initialize(gl_FragCoord.xy, sampleIndex);

                    vec3 rayOrigin    = position.rgb;
                    vec3 rayDirection = normal.rgb;
                    rayOrigin += rayDirection * 0.001;

                    uvec4 faceIndices = uvec4(0u);
                    vec3  faceNormal  = vec3(0.0, 0.0, 1.0);
                    vec3  barycoord   = vec3(0.0);
                    float side        = 1.0;
                    float dist        = 0.0;

                    float totalT = 0.0;
                    for (int i = 0; i < aoSamples; i++) {
                        vec3 newDir = getHemisphereSample(normal.xyz, rand4().xy);
                        if (dot(rayDirection, newDir) > 0.0) {
                            bool hit = bvhIntersectFirstHit(bvh, rayOrigin, newDir,
                                faceIndices, faceNormal, barycoord, side, dist);
                            float t = (hit && dist < ambientDistance)
                                ? clamp(dist / ambientDistance, 0.0, 1.0)
                                : 1.0;
                            totalT += t;
                        }
                    }

                    float divisor = max(float(aoSamples), 1.0);
                    float avg = aoSamples > 0 ? totalT / divisor : 1.0;
                    aoOut = vec4(vec3(avg), opacity);
                }
            `})}}const Le=(t,e,r,n,a)=>{var C;const i=new Jt({bvh:n,invModelMatrix:new m.Matrix4().identity(),positions:e,normals:r,aoSamples:a.aoSamples,ambientDistance:a.ambientDistance,opacity:1,sampleIndex:0}),o=new m.WebGLRenderTarget(a.resolution,a.resolution,{type:m.FloatType,minFilter:m.LinearFilter,magFilter:m.LinearFilter,generateMipmaps:!1}),l=t.getRenderTarget(),u=new m.Color;t.getClearColor(u);const c=t.getClearAlpha();t.setRenderTarget(o),t.setClearColor(0,0),t.clear(),t.setRenderTarget(l),t.setClearColor(u,c);const s=new m.Mesh(new m.PlaneGeometry(2,2),i),f=new m.OrthographicCamera;let d=0;const p=a.targetSamples|0,h=a.resolution;let v=Math.max(1,Math.min(h,(C=a.tileSize)!=null?C:h)),b=null,g=0;const x=P=>{const A=Math.ceil(h/P);return{tilesX:A,tilesY:A,count:A*A}};let y=x(v);const S=i.uniforms.sampleIndex,w=i.uniforms.opacity;if(!S||!w)throw new Error("[baker] AOMaterial missing required uniforms");const M=()=>{const P=performance.now(),A=t.autoClear,z=t.getRenderTarget(),k=t.getScissorTest();try{if(t.autoClear=!1,t.setRenderTarget(o),S.value=d,w.value=1/(d+1),v>=h)t.setScissorTest(!1),t.render(s,f);else{const W=g%y.tilesX,O=g/y.tilesX|0,_=W*v,N=O*v,K=Math.min(v,h-_),$=Math.min(v,h-N);t.setScissor(_,N,K,$),t.setScissorTest(!0),t.render(s,f)}}finally{t.setScissorTest(k),t.setRenderTarget(z),t.autoClear=A}g++;let D=!1;return g>=y.count&&(g=0,d++,D=!0,b!==null&&(v=b,y=x(v),b=null)),{ms:performance.now()-P,sampleCompleted:D}},E=()=>{if(p>0&&d>=p)return{samples:d,done:!0,sampleComplete:!0,lastDrawMs:0};let P=0;for(;;){const A=M();if(P=A.ms,A.sampleCompleted)break}return{samples:d,done:p>0&&d>=p,sampleComplete:!0,lastDrawMs:P}},T=P=>{if(p>0&&d>=p)return{samples:d,done:!0,sampleComplete:!0,lastDrawMs:0};const A=performance.now()+Math.max(0,P);let z=0,k=!1;do{const D=M();if(z=D.ms,D.sampleCompleted&&(k=!0,p>0&&d>=p))break}while(performance.now()<A);return{samples:d,done:p>0&&d>=p,sampleComplete:k,lastDrawMs:z}},I=P=>{const A=Math.max(1,Math.min(h,P|0));A===v&&b===null||(g===0?(v=A,y=x(v),b=null):b=A)},F=()=>{d=0,g=0},B=()=>{o.dispose(),i.dispose(),s.geometry.dispose()};return{texture:o.texture,render:E,renderTiled:T,setTileSize:I,reset:F,dispose:B}};class er extends m.ShaderMaterial{customProgramCacheKey(){return"CompositeMaterial|glsl3|single-out"}constructor(e){super({glslVersion:m.GLSL3,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{directTex:{value:e.directTex},indirectTex:{value:e.indirectTex},aoTex:{value:e.aoTex},directIntensity:{value:e.directIntensity},giIntensity:{value:e.giIntensity},aoEnabled:{value:e.aoEnabled},aoIntensity:{value:e.aoIntensity},aoExponent:{value:e.aoExponent}},vertexShader:`
                out vec2 vUv;
                void main() {
                    gl_Position = vec4(position, 1.0);
                    vUv = uv;
                }
            `,fragmentShader:`
                precision highp float;
                precision highp sampler2D;

                uniform sampler2D directTex;
                uniform sampler2D indirectTex;
                uniform sampler2D aoTex;
                uniform float directIntensity;
                uniform float giIntensity;
                uniform bool  aoEnabled;
                uniform float aoIntensity;
                uniform float aoExponent;

                in vec2 vUv;
                out vec4 outColor;

                void main() {
                    vec4 directSample = texture(directTex,   vUv);
                    vec4 indirectSample = texture(indirectTex, vUv);
                    vec3 d = directSample.rgb * directIntensity;
                    vec3 i = indirectSample.rgb * giIntensity;
                    float lightmapMask = max(directSample.a, indirectSample.a);

                    // AO remap (view-time): aoTex stores raw normalized visibility
                    // t \u2208 [0,1]. Apply exponent + intensity here so tweaking those
                    // sliders does not require re-baking AO.
                    // At intensity=1, exponent=1 the formula collapses to identity.
                    vec3 a = vec3(1.0);
                    if (aoEnabled) {
                        vec3 t = clamp(texture(aoTex, vUv).rgb, vec3(0.0), vec3(1.0));
                        vec3 occ = vec3(1.0) - pow(t, vec3(aoExponent));
                        a = vec3(1.0) - clamp(occ * aoIntensity, vec3(0.0), vec3(1.0));
                    }

                    vec3 lit = (d + i) * a;

                    // Subtle contrast boost / gamma correction
                    // This prevents the "washed out" look of pure linear float textures.
                    // Guard against negative inputs that would make pow() return NaN.
                    lit = pow(max(lit, vec3(0.0)), vec3(1.0 / 1.1));

                    outColor = vec4(lit, lightmapMask);
                }
            `})}}const xt=(t,e,r,n)=>{const a=new m.WebGLRenderTarget(r,r,{type:m.HalfFloatType,minFilter:m.LinearFilter,magFilter:m.LinearFilter,generateMipmaps:!1}),i=new er({directTex:e.direct,indirectTex:e.indirect,aoTex:e.ao,directIntensity:n.directIntensity,giIntensity:n.giIntensity,aoEnabled:n.aoEnabled,aoIntensity:n.aoIntensity,aoExponent:n.aoExponent}),o=new m.Mesh(new m.PlaneGeometry(2,2),i),l=new m.OrthographicCamera,u=i.uniforms,c=s=>{(s==null?void 0:s.directIntensity)!==void 0&&u.directIntensity&&(u.directIntensity.value=s.directIntensity),(s==null?void 0:s.giIntensity)!==void 0&&u.giIntensity&&(u.giIntensity.value=s.giIntensity),(s==null?void 0:s.aoEnabled)!==void 0&&u.aoEnabled&&(u.aoEnabled.value=s.aoEnabled),(s==null?void 0:s.aoIntensity)!==void 0&&u.aoIntensity&&(u.aoIntensity.value=s.aoIntensity),(s==null?void 0:s.aoExponent)!==void 0&&u.aoExponent&&(u.aoExponent.value=s.aoExponent),(s==null?void 0:s.aoTex)!==void 0&&u.aoTex&&(u.aoTex.value=s.aoTex);const f=t.getRenderTarget(),d=t.autoClear;try{t.autoClear=!0,t.setRenderTarget(a),t.render(o,l)}finally{t.setRenderTarget(f),t.autoClear=d}};return c(),{texture:a.texture,refresh:c,dispose:()=>{a.dispose(),i.dispose(),o.geometry.dispose()}}};class tr extends m.ShaderMaterial{customProgramCacheKey(){return"DilationMaterial|glsl3|single-out"}constructor(e={}){var r,n,a;super({glslVersion:m.GLSL3,blending:m.NoBlending,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{map:{value:(r=e.map)!=null?r:null},positions:{value:(n=e.positions)!=null?n:null},resolution:{value:(a=e.resolution)!=null?a:1024},useSourceAlpha:{value:!1}},vertexShader:`
                out vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4(position, 1.0);
                }
            `,fragmentShader:`
                #define DILATION_EMPTY_EPS 1.0e-6

                uniform sampler2D map;
                uniform sampler2D positions;
                uniform float resolution;
                uniform bool useSourceAlpha;
                in vec2 vUv;
                out vec4 fragColor;

                void main() {
                    vec4 here = texture(map, vUv);
                    float chart = texture(positions, vUv).a;

                    // Inside a chart - pass through.
                    if (chart > DILATION_EMPTY_EPS) {
                        fragColor = vec4(here.rgb, 1.0);
                        return;
                    }

                    // Outside chart: average non-empty 3x3 neighbours.
                    float texel = 1.0 / max(resolution, 1.0);
                    vec3 sum = vec3(0.0);
                    float n = 0.0;
                    for (int dy = -1; dy <= 1; dy++) {
                        for (int dx = -1; dx <= 1; dx++) {
                            if (dx == 0 && dy == 0) continue;
                            vec2 uv2 = vUv + vec2(float(dx), float(dy)) * texel;
                            vec4 s = texture(map, uv2);
                            float chartNeighbour = texture(positions, uv2).a;
                            // First pass ignores source alpha because legacy/raw inputs may
                            // be opaque in empty atlas space. Later passes use the alpha mask
                            // written by this shader so black valid texels keep propagating.
                            float priorFill = useSourceAlpha
                                ? step(DILATION_EMPTY_EPS, s.a)
                                : 0.0;
                            float brightFill = step(
                                DILATION_EMPTY_EPS,
                                dot(max(s.rgb, vec3(0.0)), vec3(1.0))
                            );
                            float w = max(
                                step(DILATION_EMPTY_EPS, chartNeighbour),
                                max(priorFill, brightFill)
                            );
                            sum += s.rgb * w;
                            n   += w;
                        }
                    }
                    fragColor = n > 0.0
                        ? vec4(sum / n, 1.0)
                        : vec4(0.0);
                }
            `})}}class rr extends m.ShaderMaterial{customProgramCacheKey(){return"DenoiseMaterial|glsl1|single-out"}constructor(e){var r,n,a;super({blending:m.NoBlending,transparent:!1,depthWrite:!1,depthTest:!1,defines:{USE_SLIDER:0},uniforms:{sigma:{value:(r=e.sigma)!=null?r:5},threshold:{value:(n=e.threshold)!=null?n:.03},kSigma:{value:(a=e.kSigma)!=null?a:1},map:{value:e.map}},vertexShader:`
				varying vec2 vUv;
				void main() {
					vUv = uv;
					// NDC pass-through - matches DilationMaterial/CompositeMaterial.
					// Using projectionMatrix * modelViewMatrix with the default
					// OrthographicCamera (near=0.1) clips the z=0 quad and produces
					// no output, silently bypassing denoise.
					gl_Position = vec4( position, 1.0 );
				}
			`,fragmentShader:`
				//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				//  Copyright (c) 2018-2019 Michele Morrone
				//  https://github.com/BrutPitt/glslSmartDeNoise/  (BSD 2-Clause)
				//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				uniform sampler2D map;
				uniform float sigma;
				uniform float threshold;
				uniform float kSigma;
				varying vec2 vUv;
				#define INV_SQRT_OF_2PI 0.39894228040143267793994605993439
				#define INV_PI 0.31830988618379067153776752674503
				vec4 smartDeNoise( sampler2D tex, vec2 uv, float sigma, float kSigma, float threshold ) {
					float radius = round( kSigma * sigma );
					float radQ = radius * radius;
					float invSigmaQx2 = 0.5 / ( sigma * sigma );
					float invSigmaQx2PI = INV_PI * invSigmaQx2;
					float invThresholdSqx2 = 0.5 / ( threshold * threshold );
					float invThresholdSqrt2PI = INV_SQRT_OF_2PI / threshold;
					vec4 centrPx = texture2D( tex, uv );
					centrPx.rgb *= centrPx.a;
					float zBuff = 0.0;
					vec4 aBuff = vec4( 0.0 );
					vec2 size = vec2( textureSize( tex, 0 ) );
					vec2 d;
					for ( d.x = - radius; d.x <= radius; d.x ++ ) {
						float pt = sqrt( max( 0.0, radQ - d.x * d.x ) );
						for ( d.y = - pt; d.y <= pt; d.y ++ ) {
							float blurFactor = exp( - dot( d, d ) * invSigmaQx2 ) * invSigmaQx2PI;
							vec4 walkPx = texture2D( tex, uv + d / size );
							walkPx.rgb *= walkPx.a;
							vec4 dC = walkPx - centrPx;
							float deltaFactor = exp( - dot( dC.rgba, dC.rgba ) * invThresholdSqx2 ) * invThresholdSqrt2PI * blurFactor;
							zBuff += deltaFactor;
							aBuff += deltaFactor * walkPx;
						}
					}
					return aBuff / max( zBuff, 1.0e-5 );
				}
				void main() {
					// Internal RT pass: stay in linear space. Downstream MeshStandardMaterial.lightMap
					// expects linear; tonemapping/encoding fragments would double-encode.
					gl_FragColor = smartDeNoise( map, vec2( vUv.x, vUv.y ), sigma, kSigma, threshold );
				}
			`})}}const qe=new m.Mesh(new m.PlaneGeometry(2,2)),ar=new m.OrthographicCamera,Ie=async(t,e,r,n,a,i)=>{var S,w,M;const o=()=>new m.WebGLRenderTarget(n,n,{type:m.FloatType,minFilter:m.LinearFilter,magFilter:m.LinearFilter,generateMipmaps:!1}),l=o(),u=o(),c=(E,T)=>{const I=t.getRenderTarget();try{qe.material=E,t.setRenderTarget(T),t.render(qe,ar)}finally{t.setRenderTarget(I)}},s=new tr({positions:r,resolution:n});let f=l,d=u,p=e;const h=Math.max(0,a.dilationIterations)+(a.denoiseEnabled?1:0);let v=0;const b=s.uniforms.map;if(!b)throw new Error("[baker] DilationMaterial missing `map` uniform");const g=s.uniforms.useSourceAlpha;if(!g)throw new Error("[baker] DilationMaterial missing `useSourceAlpha` uniform");for(let E=0;E<Math.max(0,a.dilationIterations);E++){b.value=p,g.value=E>0,c(s,d),p=d.texture;const T=f;f=d,d=T,v++,i==null||i(v/h),await new Promise(I=>requestAnimationFrame(I))}if(a.denoiseEnabled){const E=new rr({map:p,sigma:a.denoiseSigma,threshold:a.denoiseThreshold,kSigma:a.denoiseKSigma});c(E,d),p=d.texture,E.dispose();const T=f;f=d,d=T,v++,i==null||i(v/h),await new Promise(I=>requestAnimationFrame(I))}s.dispose();const x=a.dilationIterations>0||a.denoiseEnabled,y=x?f.texture:e;if(x){const E=Math.max(0,Math.floor(n/2)-2),T=new Float32Array(4*4*4);t.readRenderTargetPixels(f,E,E,4,4,T);let I=0,F=0,B=0;for(let C=0;C<16;C++)I+=(S=T[C*4])!=null?S:0,F+=(w=T[C*4+1])!=null?w:0,B+=(M=T[C*4+2])!=null?M:0}return{texture:y,dispose:()=>{l.dispose(),u.dispose()}}};function nr(t,e=!1){const r=t[0].index!==null,n=new Set(Object.keys(t[0].attributes)),a=new Set(Object.keys(t[0].morphAttributes)),i={},o={},l=t[0].morphTargetsRelative,u=new m.BufferGeometry;let c=0;for(let s=0;s<t.length;++s){const f=t[s];let d=0;if(r!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+s+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+s+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;i[p]===void 0&&(i[p]=[]),i[p].push(f.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+s+". Make sure all geometries have the same number of attributes."),null;if(l!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+s+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!a.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+s+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(e){let p;if(r)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+s+". The geometry must have either an index or a position attribute"),null;u.addGroup(c,p,s),c+=p}}if(r){let s=0;const f=[];for(let d=0;d<t.length;++d){const p=t[d].index;for(let h=0;h<p.count;++h)f.push(p.getX(h)+s);s+=t[d].attributes.position.count}u.setIndex(f)}for(const s in i){const f=Ke(i[s]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+s+" attribute."),null;u.setAttribute(s,f)}for(const s in o){const f=o[s][0].length;if(f===0)break;u.morphAttributes=u.morphAttributes||{},u.morphAttributes[s]=[];for(let d=0;d<f;++d){const p=[];for(let v=0;v<o[s].length;++v)p.push(o[s][v][d]);const h=Ke(p);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+s+" morphAttribute."),null;u.morphAttributes[s].push(h)}}return u}function Ke(t){let e,r,n,a=-1,i=0;for(let c=0;c<t.length;++c){const s=t[c];if(e===void 0&&(e=s.array.constructor),e!==s.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(r===void 0&&(r=s.itemSize),r!==s.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=s.normalized),n!==s.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=s.gpuType),a!==s.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;i+=s.count*r}const o=new e(i),l=new m.BufferAttribute(o,r,n);let u=0;for(let c=0;c<t.length;++c){const s=t[c];if(s.isInterleavedBufferAttribute){const f=u/r;for(let d=0,p=s.count;d<p;d++)for(let h=0;h<r;h++){const v=s.getComponent(d,h);l.setComponent(d+f,h,v)}}else o.set(s.array,u);u+=s.count*r}return a!==void 0&&(l.gpuType=a),l}function ir(t,e=1e-4){e=Math.max(e,Number.EPSILON);const r={},n=t.getIndex(),a=t.getAttribute("position"),i=n?n.count:a.count;let o=0;const l=Object.keys(t.attributes),u={},c={},s=[],f=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let x=0,y=l.length;x<y;x++){const S=l[x],w=t.attributes[S];u[S]=new m.BufferAttribute(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized);const M=t.morphAttributes[S];M&&(c[S]=new m.BufferAttribute(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized))}const p=e*.5,h=Math.log10(1/e),v=Math.pow(10,h),b=p*v;for(let x=0;x<i;x++){const y=n?n.getX(x):x;let S="";for(let w=0,M=l.length;w<M;w++){const E=l[w],T=t.getAttribute(E),I=T.itemSize;for(let F=0;F<I;F++)S+=`${~~(T[f[F]](y)*v+b)},`}if(S in r)s.push(r[S]);else{for(let w=0,M=l.length;w<M;w++){const E=l[w],T=t.getAttribute(E),I=t.morphAttributes[E],F=T.itemSize,B=u[E],C=c[E];for(let P=0;P<F;P++){const A=f[P],z=d[P];if(B[z](o,T[A](y)),I)for(let k=0,D=I.length;k<D;k++)C[k][z](o,I[k][A](y))}}r[S]=o,s.push(o),o++}}const g=t.clone();for(const x in t.attributes){const y=u[x];if(g.setAttribute(x,new m.BufferAttribute(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),x in c)for(let S=0;S<c[x].length;S++){const w=c[x][S];g.morphAttributes[x][S]=new m.BufferAttribute(w.array.slice(0,o*w.itemSize),w.itemSize,w.normalized)}}return g.setIndex(s),g}class R extends Error{constructor(e,r,n){super(`[baker:${r}] ${e}${n?` (mesh: ${n})`:""}`),this.name="BakeError",this.phase=r,this.meshName=n}}const sr=new Set(["position","normal","uv","uv2","meshIndex"]),bt=t=>{const e=t.map((n,a)=>{let i=n.geometry.clone();for(const c of Object.keys(i.attributes))sr.has(c)||i.deleteAttribute(c);i.applyMatrix4(n.matrixWorld),i.index||(i=ir(i));const o=i.attributes.position;if(!o)throw new R("mesh geometry has no position attribute","geometry",n.name);const l=o.count,u=new Float32Array(l);return u.fill(a),i.setAttribute("meshIndex",new m.BufferAttribute(u,1)),i}),r=nr(e);if(!r){const n=t.map((a,i)=>a.name||`<unnamed#${i}>`).join(", ");throw new R(`mergeGeometries returned null - incompatible attribute sets across meshes [${n}]`,"geometry")}return r},or=t=>{const e=t.geometry;if(e.index)return e.index.count/3;const r=e.attributes.position;if(!r)throw new R("mesh geometry missing position attribute","geometry",t.name);return r.count/3},Te={aR:1,aG:1,aB:1,eR:0,eG:0,eB:0},yt=t=>{var r;if(Array.isArray(t)){console.warn("[baker] material array detected; using slot 0 only - per-face material groups not yet supported");const n=t[0];return n?yt(n):Te}const e=t;if("emissive"in e&&e.emissive){const n=(r=e.emissiveIntensity)!=null?r:1;return{aR:e.color.r,aG:e.color.g,aB:e.color.b,eR:e.emissive.r*n,eG:e.emissive.g*n,eB:e.emissive.b*n}}return"color"in e&&e.color?{aR:e.color.r,aG:e.color.g,aB:e.color.b,eR:0,eG:0,eB:0}:(console.warn("[baker] material has no .color (likely ShaderMaterial); defaulting to white albedo"),Te)},wt=(t,e)=>{var f,d,p;const r=t.index;if(!r)throw new R("mergeGeometry must produce an indexed geometry; got non-indexed","geometry");const n=t.attributes.meshIndex;if(!n)throw new R("merged geometry is missing 'meshIndex' attribute - did mergeGeometry skip the per-vertex tag?","geometry");const a=e.map(or),i=r.count/3,o=new Float32Array(i*3),l=new Float32Array(i*3),u=e.map(h=>yt(h.material)),c=r.array,s=n.array;for(let h=0;h<i;h++){const v=(f=c[h*3])!=null?f:0,b=((d=s[v])!=null?d:0)|0,g=(p=u[b])!=null?p:Te,x=h*3;o[x]=g.aR,o[x+1]=g.aG,o[x+2]=g.aB,l[x]=g.eR,l[x+1]=g.eG,l[x+2]=g.eB}return{albedo:o,emissive:l,totalTriangles:i,perMeshTriangleCounts:a}},Ye=(t,e)=>{const r=new m.DataTexture(t,e,e,m.RGBAFormat,m.FloatType);return r.minFilter=m.NearestFilter,r.magFilter=m.NearestFilter,r.wrapS=m.ClampToEdgeWrapping,r.wrapT=m.ClampToEdgeWrapping,r.generateMipmaps=!1,r.needsUpdate=!0,r},Tt=t=>{var o,l,u,c,s,f;const e=t.totalTriangles,r=Math.max(1,Math.ceil(Math.sqrt(e))),n=r*r,a=new Float32Array(n*4),i=new Float32Array(n*4);for(let d=0;d<e;d++){const p=d*3,h=d*4;a[h]=(o=t.albedo[p])!=null?o:0,a[h+1]=(l=t.albedo[p+1])!=null?l:0,a[h+2]=(u=t.albedo[p+2])!=null?u:0,a[h+3]=1,i[h]=(c=t.emissive[p])!=null?c:0,i[h+1]=(s=t.emissive[p+1])!=null?s:0,i[h+2]=(f=t.emissive[p+2])!=null?f:0,i[h+3]=1}return{albedoTexture:Ye(a,r),emissiveTexture:Ye(i,r),side:r}};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var je=function(t){return URL.createObjectURL(new Blob([t],{type:"text/javascript"}))};try{URL.revokeObjectURL(je(""))}catch{je=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var j=Uint8Array,q=Uint16Array,fe=Uint32Array,Fe=new j([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Pe=new j([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ze=new j([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),St=function(t,e){for(var r=new q(31),n=0;n<31;++n)r[n]=e+=1<<t[n-1];for(var a=new fe(r[30]),n=1;n<30;++n)for(var i=r[n];i<r[n+1];++i)a[i]=i-r[n]<<5|n;return[r,a]},Mt=St(Fe,2),lr=Mt[0],Se=Mt[1];lr[28]=258,Se[258]=28;var ur=St(Pe,0),Qe=ur[1],Me=new q(32768);for(var U=0;U<32768;++U){var te=(U&43690)>>>1|(U&21845)<<1;te=(te&52428)>>>2|(te&13107)<<2,te=(te&61680)>>>4|(te&3855)<<4,Me[U]=((te&65280)>>>8|(te&255)<<8)>>>1}var de=function(t,e,r){for(var n=t.length,a=0,i=new q(e);a<n;++a)++i[t[a]-1];var o=new q(e);for(a=0;a<e;++a)o[a]=o[a-1]+i[a-1]<<1;var l;if(r){l=new q(1<<e);var u=15-e;for(a=0;a<n;++a)if(t[a])for(var c=a<<4|t[a],s=e-t[a],f=o[t[a]-1]++<<s,d=f|(1<<s)-1;f<=d;++f)l[Me[f]>>>u]=c}else for(l=new q(n),a=0;a<n;++a)t[a]&&(l[a]=Me[o[t[a]-1]++]>>>15-t[a]);return l},ne=new j(288);for(var U=0;U<144;++U)ne[U]=8;for(var U=144;U<256;++U)ne[U]=9;for(var U=256;U<280;++U)ne[U]=7;for(var U=280;U<288;++U)ne[U]=8;var ge=new j(32);for(var U=0;U<32;++U)ge[U]=5;var cr=de(ne,9,0),mr=de(ge,5,0),Et=function(t){return(t/8|0)+(t&7&&1)},dr=function(t,e,r){(e==null||e<0)&&(e=0),(r==null||r>t.length)&&(r=t.length);var n=new(t instanceof q?q:t instanceof fe?fe:j)(r-e);return n.set(t.subarray(e,r)),n},Q=function(t,e,r){r<<=e&7;var n=e/8|0;t[n]|=r,t[n+1]|=r>>>8},ue=function(t,e,r){r<<=e&7;var n=e/8|0;t[n]|=r,t[n+1]|=r>>>8,t[n+2]|=r>>>16},we=function(t,e){for(var r=[],n=0;n<t.length;++n)t[n]&&r.push({s:n,f:t[n]});var a=r.length,i=r.slice();if(!a)return[De,0];if(a==1){var o=new j(r[0].s+1);return o[r[0].s]=1,[o,1]}r.sort(function(w,M){return w.f-M.f}),r.push({s:-1,f:25001});var l=r[0],u=r[1],c=0,s=1,f=2;for(r[0]={s:-1,f:l.f+u.f,l,r:u};s!=a-1;)l=r[r[c].f<r[f].f?c++:f++],u=r[c!=s&&r[c].f<r[f].f?c++:f++],r[s++]={s:-1,f:l.f+u.f,l,r:u};for(var d=i[0].s,n=1;n<a;++n)i[n].s>d&&(d=i[n].s);var p=new q(d+1),h=Ee(r[s-1],p,0);if(h>e){var n=0,v=0,b=h-e,g=1<<b;for(i.sort(function(M,E){return p[E.s]-p[M.s]||M.f-E.f});n<a;++n){var x=i[n].s;if(p[x]>e)v+=g-(1<<h-p[x]),p[x]=e;else break}for(v>>>=b;v>0;){var y=i[n].s;p[y]<e?v-=1<<e-p[y]++-1:++n}for(;n>=0&&v;--n){var S=i[n].s;p[S]==e&&(--p[S],++v)}h=e}return[new j(p),h]},Ee=function(t,e,r){return t.s==-1?Math.max(Ee(t.l,e,r+1),Ee(t.r,e,r+1)):e[t.s]=r},Je=function(t){for(var e=t.length;e&&!t[--e];);for(var r=new q(++e),n=0,a=t[0],i=1,o=function(u){r[n++]=u},l=1;l<=e;++l)if(t[l]==a&&l!=e)++i;else{if(!a&&i>2){for(;i>138;i-=138)o(32754);i>2&&(o(i>10?i-11<<5|28690:i-3<<5|12305),i=0)}else if(i>3){for(o(a),--i;i>6;i-=6)o(8304);i>2&&(o(i-3<<5|8208),i=0)}for(;i--;)o(a);i=1,a=t[l]}return[r.subarray(0,n),e]},ce=function(t,e){for(var r=0,n=0;n<e.length;++n)r+=t[n]*e[n];return r},ve=function(t,e,r){var n=r.length,a=Et(e+2);t[a]=n&255,t[a+1]=n>>>8,t[a+2]=t[a]^255,t[a+3]=t[a+1]^255;for(var i=0;i<n;++i)t[a+i+4]=r[i];return(a+4+n)*8},et=function(t,e,r,n,a,i,o,l,u,c,s){Q(e,s++,r),++a[256];for(var f=we(a,15),d=f[0],p=f[1],h=we(i,15),v=h[0],b=h[1],g=Je(d),x=g[0],y=g[1],S=Je(v),w=S[0],M=S[1],E=new q(19),T=0;T<x.length;++T)E[x[T]&31]++;for(var T=0;T<w.length;++T)E[w[T]&31]++;for(var I=we(E,7),F=I[0],B=I[1],C=19;C>4&&!F[Ze[C-1]];--C);var P=c+5<<3,A=ce(a,ne)+ce(i,ge)+o,z=ce(a,d)+ce(i,v)+o+14+3*C+ce(E,F)+(2*E[16]+3*E[17]+7*E[18]);if(P<=A&&P<=z)return ve(e,s,t.subarray(u,u+c));var k,D,W,O;if(Q(e,s,1+(z<A)),s+=2,z<A){k=de(d,p,0),D=d,W=de(v,b,0),O=v;var _=de(F,B,0);Q(e,s,y-257),Q(e,s+5,M-1),Q(e,s+10,C-4),s+=14;for(var T=0;T<C;++T)Q(e,s+3*T,F[Ze[T]]);s+=3*C;for(var N=[x,w],K=0;K<2;++K)for(var $=N[K],T=0;T<$.length;++T){var X=$[T]&31;Q(e,s,_[X]),s+=F[X],X>15&&(Q(e,s,$[T]>>>5&127),s+=$[T]>>>12)}}else k=cr,D=ne,W=mr,O=ge;for(var T=0;T<l;++T)if(n[T]>255){var X=n[T]>>>18&31;ue(e,s,k[X+257]),s+=D[X+257],X>7&&(Q(e,s,n[T]>>>23&31),s+=Fe[X]);var V=n[T]&31;ue(e,s,W[V]),s+=O[V],V>3&&(ue(e,s,n[T]>>>5&8191),s+=Pe[V])}else ue(e,s,k[n[T]]),s+=D[n[T]];return ue(e,s,k[256]),s+D[256]},fr=new fe([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),De=new j(0),pr=function(t,e,r,n,a,i){var o=t.length,l=new j(n+o+5*(1+Math.ceil(o/7e3))+a),u=l.subarray(n,l.length-a),c=0;if(!e||o<8)for(var s=0;s<=o;s+=65535){var f=s+65535;f<o?c=ve(u,c,t.subarray(s,f)):(u[s]=i,c=ve(u,c,t.subarray(s,o)))}else{for(var d=fr[e-1],p=d>>>13,h=d&8191,v=(1<<r)-1,b=new q(32768),g=new q(v+1),x=Math.ceil(r/3),y=2*x,S=function(le){return(t[le]^t[le+1]<<x^t[le+2]<<y)&v},w=new fe(25e3),M=new q(288),E=new q(32),T=0,I=0,s=0,F=0,B=0,C=0;s<o;++s){var P=S(s),A=s&32767,z=g[P];if(b[A]=z,g[P]=A,B<=s){var k=o-s;if((T>7e3||F>24576)&&k>423){c=et(t,u,0,w,M,E,I,F,C,s-C,c),F=T=I=0,C=s;for(var D=0;D<286;++D)M[D]=0;for(var D=0;D<30;++D)E[D]=0}var W=2,O=0,_=h,N=A-z&32767;if(k>2&&P==S(s-N))for(var K=Math.min(p,k)-1,$=Math.min(32767,s),X=Math.min(258,k);N<=$&&--_&&A!=z;){if(t[s+W]==t[s+W-N]){for(var V=0;V<X&&t[s+V]==t[s+V-N];++V);if(V>W){if(W=V,O=N,V>K)break;for(var re=Math.min(N,V-2),J=0,D=0;D<re;++D){var ee=s-N+D+32768&32767,H=b[ee],Y=ee-H+32768&32767;Y>J&&(J=Y,z=ee)}}}A=z,z=b[A],N+=A-z+32768&32767}if(O){w[F++]=268435456|Se[W]<<18|Qe[O];var Z=Se[W]&31,pe=Qe[O]&31;I+=Fe[Z]+Pe[pe],++M[257+Z],++E[pe],B=s+W,++T}else w[F++]=t[s],++M[t[s]]}}c=et(t,u,i,w,M,E,I,F,C,s-C,c),!i&&c&7&&(c=ve(u,c+1,De))}return dr(l,0,n+Et(c)+a)},hr=function(){var t=1,e=0;return{p:function(r){for(var n=t,a=e,i=r.length,o=0;o!=i;){for(var l=Math.min(o+2655,i);o<l;++o)a+=n+=r[o];n=(n&65535)+15*(n>>16),a=(a&65535)+15*(a>>16)}t=n,e=a},d:function(){return t%=65521,e%=65521,(t&255)<<24|t>>>8<<16|(e&255)<<8|e>>>8}}},vr=function(t,e,r,n,a){return pr(t,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):12+e.mem,r,n,!a)},gr=function(t,e,r){for(;r;++e)t[e]=r,r>>>=8},xr=function(t,e){var r=e.level,n=r==0?0:r<6?1:r==9?3:2;t[0]=120,t[1]=n<<6|(n?32-2*n:1)};function br(t,e){e||(e={});var r=hr();r.p(t);var n=vr(t,e,2,4);return xr(n,e),gr(n,n.length-4,r.d()),n}var yr=typeof TextDecoder!="undefined"&&new TextDecoder,wr=0;try{yr.decode(De,{stream:!0}),wr=1}catch{}const Tr=new TextEncoder,At=3;class Sr{parse(e,r,n){if(!e||!(e.isWebGLRenderer||e.isDataTexture))throw Error("EXRExporter.parse: Unsupported first parameter, expected instance of WebGLRenderer or DataTexture.");if(e.isWebGLRenderer){const a=e,i=r,o=n;Mr(i);const l=Ar(i,o),u=Rr(a,i,l),c=tt(u,l),s=rt(c,l);return at(s,l)}else if(e.isDataTexture){const a=e,i=r;Er(a);const o=Cr(a,i),l=a.image.data,u=tt(l,o),c=rt(u,o);return at(c,o)}}}function Mr(t){if(!t||!t.isWebGLRenderTarget)throw Error("EXRExporter.parse: Unsupported second parameter, expected instance of WebGLRenderTarget.");if(t.isWebGLCubeRenderTarget||t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)throw Error("EXRExporter.parse: Unsupported render target type, expected instance of WebGLRenderTarget.");if(t.texture.type!==m.FloatType&&t.texture.type!==m.HalfFloatType)throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture type.");if(t.texture.format!==m.RGBAFormat)throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture format, expected RGBAFormat.")}function Er(t){if(t.type!==m.FloatType&&t.type!==m.HalfFloatType)throw Error("EXRExporter.parse: Unsupported DataTexture texture type.");if(t.format!==m.RGBAFormat)throw Error("EXRExporter.parse: Unsupported DataTexture texture format, expected RGBAFormat.");if(!t.image.data)throw Error("EXRExporter.parse: Invalid DataTexture image data.");if(t.type===m.FloatType&&t.image.data.constructor.name!=="Float32Array")throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Float32Array'.");if(t.type===m.HalfFloatType&&t.image.data.constructor.name!=="Uint16Array")throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Uint16Array'.")}function Ar(t,e={}){const r={0:1,2:1,3:16},n=t.width,a=t.height,i=t.texture.type,o=t.texture.format,l=e.compression!==void 0?e.compression:At,u=e.type!==void 0?e.type:m.HalfFloatType,c=u===m.FloatType?2:1,s=r[l],f=4;return{width:n,height:a,type:i,format:o,compression:l,blockLines:s,dataType:c,dataSize:2*c,numBlocks:Math.ceil(a/s),numInputChannels:4,numOutputChannels:f}}function Cr(t,e={}){const r={0:1,2:1,3:16},n=t.image.width,a=t.image.height,i=t.type,o=t.format,l=e.compression!==void 0?e.compression:At,u=e.type!==void 0?e.type:m.HalfFloatType,c=u===m.FloatType?2:1,s=r[l],f=4;return{width:n,height:a,type:i,format:o,compression:l,blockLines:s,dataType:c,dataSize:2*c,numBlocks:Math.ceil(a/s),numInputChannels:4,numOutputChannels:f}}function Rr(t,e,r){let n;return r.type===m.FloatType?n=new Float32Array(r.width*r.height*r.numInputChannels):n=new Uint16Array(r.width*r.height*r.numInputChannels),t.readRenderTargetPixels(e,0,0,r.width,r.height,n),n}function tt(t,e){const r=e.width,n=e.height,a={r:0,g:0,b:0,a:0},i={value:0},o=e.numOutputChannels==4?1:0,l=e.type==m.FloatType?_r:Ur,u=e.dataType==1?Dr:Ae,c=new Uint8Array(e.width*e.height*e.numOutputChannels*e.dataSize),s=new DataView(c.buffer);for(let f=0;f<n;++f)for(let d=0;d<r;++d){const p=f*r*4+d*4,h=l(t,p),v=l(t,p+1),b=l(t,p+2),g=l(t,p+3),x=(n-f-1)*r*(3+o)*e.dataSize;Pr(a,h,v,b,g),i.value=x+d*e.dataSize,u(s,a.a,i),i.value=x+o*r*e.dataSize+d*e.dataSize,u(s,a.b,i),i.value=x+(1+o)*r*e.dataSize+d*e.dataSize,u(s,a.g,i),i.value=x+(2+o)*r*e.dataSize+d*e.dataSize,u(s,a.r,i)}return c}function rt(t,e){let r,n,a=0;const i={data:new Array,totalSize:0},o=e.width*e.numOutputChannels*e.blockLines*e.dataSize;switch(e.compression){case 0:r=Lr;break;case 2:case 3:r=Ir;break}e.compression!==0&&(n=new Uint8Array(o));for(let l=0;l<e.numBlocks;++l){const u=t.subarray(o*l,o*(l+1)),c=r(u,n);a+=c.length,i.data.push({dataChunk:c,size:c.length})}return i.totalSize=a,i}function Lr(t){return t}function Ir(t,e){let r=0,n=Math.floor((t.length+1)/2),a=0;const i=t.length-1;for(;!(a>i||(e[r++]=t[a++],a>i));)e[n++]=t[a++];let o=e[0];for(let u=1;u<e.length;u++){const c=e[u]-o+384;o=e[u],e[u]=c}return br(e)}function Fr(t,e,r){const n={value:0},a=new DataView(t.buffer);L(a,20000630,n),L(a,2,n),G(a,"compression",n),G(a,"compression",n),L(a,1,n),me(a,r.compression,n),G(a,"screenWindowCenter",n),G(a,"v2f",n),L(a,8,n),L(a,0,n),L(a,0,n),G(a,"screenWindowWidth",n),G(a,"float",n),L(a,4,n),Ae(a,1,n),G(a,"pixelAspectRatio",n),G(a,"float",n),L(a,4,n),Ae(a,1,n),G(a,"lineOrder",n),G(a,"lineOrder",n),L(a,1,n),me(a,0,n),G(a,"dataWindow",n),G(a,"box2i",n),L(a,16,n),L(a,0,n),L(a,0,n),L(a,r.width-1,n),L(a,r.height-1,n),G(a,"displayWindow",n),G(a,"box2i",n),L(a,16,n),L(a,0,n),L(a,0,n),L(a,r.width-1,n),L(a,r.height-1,n),G(a,"channels",n),G(a,"chlist",n),L(a,r.numOutputChannels*18+1,n),G(a,"A",n),L(a,r.dataType,n),n.value+=4,L(a,1,n),L(a,1,n),G(a,"B",n),L(a,r.dataType,n),n.value+=4,L(a,1,n),L(a,1,n),G(a,"G",n),L(a,r.dataType,n),n.value+=4,L(a,1,n),L(a,1,n),G(a,"R",n),L(a,r.dataType,n),n.value+=4,L(a,1,n),L(a,1,n),me(a,0,n),me(a,0,n);let i=n.value+r.numBlocks*8;for(let o=0;o<e.data.length;++o)zr(a,i,n),i+=e.data[o].size+8}function at(t,e){const r=e.numBlocks*8,n=259+18*e.numOutputChannels,a={value:n+r},i=new Uint8Array(n+r+t.totalSize+e.numBlocks*8),o=new DataView(i.buffer);Fr(i,t,e);for(let l=0;l<t.data.length;++l){const u=t.data[l].dataChunk,c=t.data[l].size;L(o,l*e.blockLines,a),L(o,c,a),i.set(u,a.value),a.value+=c}return i}function Pr(t,e,r,n,a){t.r=e,t.g=r,t.b=n,t.a=a}function me(t,e,r){t.setUint8(r.value,e),r.value+=1}function L(t,e,r){t.setUint32(r.value,e,!0),r.value+=4}function Dr(t,e,r){t.setUint16(r.value,m.DataUtils.toHalfFloat(e),!0),r.value+=2}function Ae(t,e,r){t.setFloat32(r.value,e,!0),r.value+=4}function zr(t,e,r){t.setBigUint64(r.value,BigInt(e),!0),r.value+=8}function G(t,e,r){const n=Tr.encode(e+"\0");for(let a=0;a<n.length;++a)me(t,n[a],r)}function kr(t){const e=(t&31744)>>10,r=t&1023;return(t>>15?-1:1)*(e?e===31?r?NaN:1/0:Math.pow(2,e-15)*(1+r/1024):6103515625e-14*(r/1024))}function Ur(t,e){return kr(t[e])}function _r(t,e){return t[e]}const nt=new m.Mesh(new m.PlaneGeometry(2,2)),Or=new m.OrthographicCamera,it=new m.ShaderMaterial({glslVersion:m.GLSL3,blending:m.NoBlending,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{map:{value:null}},vertexShader:`
        out vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D map;
        in vec2 vUv;
        out vec4 fragColor;
        void main() {
            fragColor = texture(map, vUv);
        }
    `});function ze(t,e,r){const n=new m.WebGLRenderTarget(r,r,{type:m.FloatType,minFilter:m.LinearFilter,magFilter:m.LinearFilter}),a=it.uniforms.map;if(!a)throw new Error("[baker] export passthrough material missing `map` uniform");a.value=e,nt.material=it;const i=t.getRenderTarget(),o=t.autoClear;try{t.autoClear=!0,t.setRenderTarget(n),t.render(nt,Or)}finally{t.setRenderTarget(i),t.autoClear=o}return n}function ke(t,e){const r=URL.createObjectURL(t),n=document.createElement("a");n.href=r,n.download=e,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(r),0)}const Ue=(t,e)=>t.toLowerCase().endsWith(`.${e}`)?t:`${t}.${e}`;async function Ct(t,e,r,n){var c,s,f;const a=ze(t,e,r),i=new Float32Array(r*r*4);t.readRenderTargetPixels(a,0,0,r,r,i),a.dispose();const o=new Uint8ClampedArray(r*r*4);for(let d=0;d<r;d++){const p=(r-1-d)*r*4,h=d*r*4;for(let v=0;v<r;v++){const b=p+v*4,g=h+v*4,x=Math.max((c=i[b])!=null?c:0,0),y=Math.max((s=i[b+1])!=null?s:0,0),S=Math.max((f=i[b+2])!=null?f:0,0);o[g]=Math.pow(x/(1+x),1/2.2)*255,o[g+1]=Math.pow(y/(1+y),1/2.2)*255,o[g+2]=Math.pow(S/(1+S),1/2.2)*255,o[g+3]=255}}const l=document.createElement("canvas");l.width=r,l.height=r;const u=l.getContext("2d");if(!u)throw new Error("exportPNG: 2D context unavailable");u.putImageData(new ImageData(o,r,r),0,0),await new Promise((d,p)=>{l.toBlob(h=>{if(!h){p(new Error("exportPNG: toBlob returned null"));return}ke(h,Ue(n,"png")),d()},"image/png")})}function Rt(t,e,r,n){const a=ze(t,e,r),i=new Sr().parse(t,a);a.dispose(),ke(new Blob([i],{type:"image/x-exr"}),Ue(n,"exr"))}function Lt(t,e,r,n){const a=ze(t,e,r),i=new Float32Array(r*r*4);t.readRenderTargetPixels(a,0,0,r,r,i),a.dispose(),ke(new Blob([i.buffer],{type:"application/octet-stream"}),Ue(n,"bin"))}async function It(t,e,r,n,a){switch(a){case"png":await Ct(t,e,r,n);return;case"exr":Rt(t,e,r,n);return;case"bin":Lt(t,e,r,n);return}}const se=22;class Nr{constructor(e={}){var r,n,a,i;this.visible=!0,this.collapsed=!1,this.headerEl=null,this.layerLabel="",this.textures=null,this.prevScissor=new m.Vector4,this.prevViewport=new m.Vector4,this.size=(r=e.size)!=null?r:256,this.margin=(n=e.margin)!=null?n:20,this.corner=(a=e.corner)!=null?a:"br",this.mat=new m.ShaderMaterial({glslVersion:m.GLSL3,blending:m.NoBlending,transparent:!1,depthTest:!1,depthWrite:!1,uniforms:{map:{value:null},sRGB:{value:(i=e.sRGB)!=null?i:!0},border:{value:.006}},vertexShader:`
                out vec2 vUv;
                void main() {
                    vUv = uv;
                    // NDC pass-through - bypass camera matrices to dodge the
                    // default-near-plane clipping that bit DenoiseMaterial.
                    gl_Position = vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform sampler2D map;
                uniform bool sRGB;
                uniform float border;
                in vec2 vUv;
                out vec4 fragColor;
                void main() {
                    // Thin light frame so the panel reads against any 3D background.
                    if (vUv.x < border || vUv.x > 1.0 - border ||
                        vUv.y < border || vUv.y > 1.0 - border) {
                        fragColor = vec4(0.85, 0.85, 0.85, 1.0);
                        return;
                    }
                    vec4 t = texture(map, vUv);
                    vec3 c = max(t.rgb, vec3(0.0));
                    if (sRGB) c = pow(c, vec3(1.0 / 2.2));
                    fragColor = vec4(c, 1.0);
                }
            `}),this.scene=new m.Scene,this.cam=new m.OrthographicCamera,this.quad=new m.Mesh(new m.PlaneGeometry(2,2),this.mat),this.quad.frustumCulled=!1,this.scene.add(this.quad)}setTexture(e){this.mat.uniforms.map&&(this.mat.uniforms.map.value=e),this.textures=null}setTextures(e){this.textures=e&&e.length>0?e:null}setSRGB(e){this.mat.uniforms.sRGB&&(this.mat.uniforms.sRGB.value=e)}setSize(e){this.size=e}setMargin(e){this.margin=e}setCorner(e){this.corner=e}setCollapsed(e){this.collapsed=e,this.refreshHeaderText()}setLayerLabel(e){this.layerLabel=e,this.refreshHeaderText()}attachHeader(e=document.body){if(this.headerEl)return;const r=document.createElement("div");Object.assign(r.style,{position:"absolute",boxSizing:"border-box",fontFamily:"monospace",fontSize:"11px",color:"#ddd",backgroundColor:"rgba(0,0,0,0.78)",padding:"4px 8px",cursor:"pointer",userSelect:"none",border:"1px solid #444",borderRadius:"3px",zIndex:"50",display:"none",lineHeight:`${se-10}px`}),r.addEventListener("click",()=>this.setCollapsed(!this.collapsed)),e.appendChild(r),this.headerEl=r,this.refreshHeaderText()}detachHeader(){var e;(e=this.headerEl)==null||e.remove(),this.headerEl=null}refreshHeaderText(){if(!this.headerEl)return;const e=this.collapsed?"\u25B8":"\u25BE",r=this.layerLabel?` \xB7 ${this.layerLabel}`:"";this.headerEl.innerText=`${e} Atlas Viewer${r}`}positionHeader(e){if(!this.headerEl)return;if(!this.visible){this.headerEl.style.display="none";return}this.headerEl.style.display="block",this.headerEl.style.width=`${this.size}px`;let r=0,n=0;switch(this.corner){case"tl":r=this.margin,n=this.margin+se;break;case"tr":r=e.width-this.size-this.margin,n=this.margin+se;break;case"bl":r=this.margin,n=e.height-this.margin-this.size;break;case"br":r=e.width-this.size-this.margin,n=e.height-this.margin-this.size;break}const a=n-se;this.headerEl.style.left=`${e.left+r}px`,this.headerEl.style.top=`${e.top+a}px`}render(e){var p,h;if(!this.visible){this.positionHeader(e.domElement.getBoundingClientRect());return}if(this.positionHeader(e.domElement.getBoundingClientRect()),this.collapsed)return;const r=this.textures,n=(p=this.mat.uniforms.map)==null?void 0:p.value;if(!r&&!n)return;const a=e.getPixelRatio(),i=e.domElement.width,o=e.domElement.height,l=Math.max(1,Math.floor(this.size*a)),u=Math.max(0,Math.floor(this.margin*a));let c=0,s=0;switch(this.corner){case"tl":c=u,s=o-l-u-Math.floor(se*a);break;case"tr":c=i-l-u,s=o-l-u-Math.floor(se*a);break;case"bl":c=u,s=u;break;case"br":c=i-l-u,s=u;break}const f=e.autoClear,d=e.getScissorTest();e.getScissor(this.prevScissor),e.getViewport(this.prevViewport);try{if(e.setScissorTest(!0),e.autoClear=!1,r){const v=r.length,b=Math.ceil(Math.sqrt(v)),g=Math.ceil(v/b),x=Math.max(1,Math.floor(l/Math.max(b,g)));for(let y=0;y<v;y++){const S=y%b,w=Math.floor(y/b),M=c+S*x,E=s+l-(w+1)*x;this.mat.uniforms.map&&(this.mat.uniforms.map.value=(h=r[y])!=null?h:null),e.setScissor(M,E,x,x),e.setViewport(M,E,x,x),e.render(this.scene,this.cam)}}else n&&(e.setScissor(c,s,l,l),e.setViewport(c,s,l,l),e.render(this.scene,this.cam))}finally{e.setScissor(this.prevScissor.x,this.prevScissor.y,this.prevScissor.z,this.prevScissor.w),e.setViewport(this.prevViewport.x,this.prevViewport.y,this.prevViewport.z,this.prevViewport.w),e.setScissorTest(d),e.autoClear=f}}dispose(){this.detachHeader(),this.mat.dispose(),this.quad.geometry.dispose()}}class Gr extends m.ShaderMaterial{constructor(e){super({glslVersion:m.GLSL3,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,side:0,uniforms:{uTexelsPerMeter:{value:e.texelsPerMeter},uLightmapSize:{value:e.lightmapSize}},vertexShader:`
                in vec2 uv2;
                out vec2 vUv2;
                out vec3 vWorldPos;

                void main() {
                    vUv2 = uv2;
                    vec4 wp = modelMatrix * vec4(position, 1.0);
                    vWorldPos = wp.xyz;
                    gl_Position = projectionMatrix * viewMatrix * wp;
                }
            `,fragmentShader:`
                precision highp float;

                uniform float uTexelsPerMeter;
                uniform float uLightmapSize;

                in vec2 vUv2;
                in vec3 vWorldPos;
                out vec4 fragColor;

                void main() {
                    // dUV/dx in UV2 space, then \xD7 lightmapSize \u2192 texels covered per pixel-step in screen-x.
                    // dWorld/dx \u2192 world-units per pixel-step in screen-x.
                    // texelsPerWorld = (texels per pixel) / (world per pixel) = (dUV * res) / dWorld.
                    vec2 dUVdx = dFdx(vUv2) * uLightmapSize;
                    vec2 dUVdy = dFdy(vUv2) * uLightmapSize;
                    vec3 dWdx = dFdx(vWorldPos);
                    vec3 dWdy = dFdy(vWorldPos);

                    // Checker in WORLD space - one square = CHECKER_TEXELS target
                    // texels wide. Decoupled from the actual texel size so the
                    // pattern stays readable as density slides up. Triplanar
                    // XOR sum covers all axes - squares stay UNIFORMLY square
                    // across the scene if density is on-target.
                    const float CHECKER_TEXELS = 4.0;
                    float worldPerSquare = CHECKER_TEXELS / max(uTexelsPerMeter, 1.0e-6);

                    // Detect missing uv2 attribute (pre-bake state). xatlas
                    // writes uv2 only after the bake completes; before that,
                    // the attribute is absent \u2192 vUv2 reads as zero across the
                    // primitive \u2192 derivatives are zero. Without this guard the
                    // density viz is stuck on red and looks like an undersample
                    // bug rather than "atlas not built yet".
                    float uvLen = length(dUVdx) + length(dUVdy);
                    if (uvLen < 1.0e-6) {
                        // Magenta checker = "bake first to see real density".
                        vec3 wc = floor(vWorldPos / worldPerSquare);
                        float k = mod(wc.x + wc.y + wc.z, 2.0);
                        fragColor = vec4(vec3(1.0, 0.0, 1.0) * (k > 0.5 ? 1.0 : 0.55), 1.0);
                        return;
                    }

                    float texelsPerWorldX = length(dUVdx) / max(length(dWdx), 1.0e-6);
                    float texelsPerWorldY = length(dUVdy) / max(length(dWdy), 1.0e-6);
                    // Geometric mean is robust to anisotropic stretching.
                    float texelDensity = sqrt(texelsPerWorldX * texelsPerWorldY);

                    float ratio = texelDensity / max(uTexelsPerMeter, 1.0e-6);

                    // Color band selection.
                    vec3 c;
                    if      (ratio < 0.5) c = vec3(1.0, 0.0, 0.0);
                    else if (ratio < 0.8) c = vec3(1.0, 1.0, 0.0);
                    else if (ratio < 1.2) c = vec3(0.0, 1.0, 0.0);
                    else if (ratio < 1.5) c = vec3(0.0, 1.0, 1.0);
                    else                  c = vec3(0.0, 0.0, 1.0);

                    vec3 wcell = floor(vWorldPos / worldPerSquare);
                    float check = mod(wcell.x + wcell.y + wcell.z, 2.0);
                    float bright = check > 0.5 ? 1.0 : 0.6;

                    fragColor = vec4(c * bright, 1.0);
                }
            `})}setTexelsPerMeter(e){const r=this.uniforms.uTexelsPerMeter;r&&(r.value=e)}setLightmapSize(e){const r=this.uniforms.uLightmapSize;r&&(r.value=e)}}const Br={discrete:{initialTileSize:1024,maxBatchMs:500},integrated:{initialTileSize:256,maxBatchMs:250},unknown:{initialTileSize:256,maxBatchMs:250}};function Ft(t){const e=t.toLowerCase();return["intel hd","intel uhd","iris","vega","mali","adreno","powervr"].some(a=>e.includes(a))?"integrated":["geforce","rtx","gtx","quadro","radeon rx","radeon pro","apple m"].some(a=>e.includes(a))?"discrete":"unknown"}function Pt(t){var l,u;const e=t.getContext(),r=e.getExtension("WEBGL_debug_renderer_info"),n=r?String((l=e.getParameter(r.UNMASKED_VENDOR_WEBGL))!=null?l:""):"",a=r?String((u=e.getParameter(r.UNMASKED_RENDERER_WEBGL))!=null?u:""):"",i=Ft(a),o=Br[i];return{tier:i,vendor:n,renderer:a,initialTileSize:o.initialTileSize,maxBatchMs:o.maxBatchMs,maxFrameMs:16}}const Wr=(t,e)=>new m.Color(t!=null?t:e).convertSRGBToLinear(),st=t=>t>0&&(t&t-1)===0,ot={dilationIterations:4,denoiseEnabled:!0,denoiseSigma:2.5,denoiseThreshold:.18,denoiseKSigma:1};function Vr(t){var s,f,d,p,h,v,b,g;const e=(s=t.samples)!=null?s:96;if(!Number.isFinite(e)||e<1||e>4096)throw new R(`samples must be 1-4096, got ${e}`,"validation");const r=(f=t.castsPerFrame)!=null?f:5;if(!Number.isFinite(r)||r<1||r>256)throw new R(`castsPerFrame must be 1-256, got ${r}`,"validation");const n=typeof t.ao=="boolean"?void 0:t.ao,a=typeof t.gi=="boolean"?void 0:t.gi,i=n==null?void 0:n.samples;if(i!==void 0&&(!Number.isFinite(i)||i<0||i>64))throw new R(`ao.samples must be 0-64, got ${i}`,"validation");const o=(d=t.bounces)!=null?d:1;if(!Number.isInteger(o)||o<0||o>8)throw new R(`bounces must be integer 0-8, got ${o}`,"validation");const l=(p=t.resolution)!=null?p:1024;if(!Number.isFinite(l)||l<16||l>4096)throw new R(`resolution must be 16-4096, got ${l}`,"validation");if(!st(l))throw new R(`resolution must be a power of two, got ${l}`,"validation");const u=(h=t.superSample)!=null?h:1;if(!Number.isInteger(u)||u<1||u>4)throw new R(`superSample must be integer 1-4, got ${u}`,"validation");if(l*u>4096)throw new R(`resolution \xD7 superSample must be \u2264 4096, got ${l*u}`,"validation");if(((v=t.light)==null?void 0:v.intensity)!==void 0&&t.light.intensity<0)throw new R(`light.intensity must be >= 0, got ${t.light.intensity}`,"validation");if(((b=t.light)==null?void 0:b.size)!==void 0&&t.light.size<0)throw new R(`light.size must be >= 0, got ${t.light.size}`,"validation");if((a==null?void 0:a.intensity)!==void 0&&a.intensity<0)throw new R(`gi.intensity must be >= 0, got ${a.intensity}`,"validation");if((a==null?void 0:a.skyIntensity)!==void 0&&a.skyIntensity<0)throw new R(`gi.skyIntensity must be >= 0, got ${a.skyIntensity}`,"validation");if((n==null?void 0:n.distance)!==void 0&&n.distance<0)throw new R(`ao.distance must be >= 0, got ${n.distance}`,"validation");if(t.texelsPerMeter!==void 0){const y=t.texelsPerMeter;if(!Number.isFinite(y)||y<=0||y>64)throw new R(`texelsPerMeter density multiplier must be in (0, 64], got ${y}`,"validation")}for(const[y,S]of Object.entries((g=t.perMesh)!=null?g:{})){const w=S.resolution;if(w!==void 0){if(!Number.isFinite(w)||w<128||w>4096)throw new R(`perMesh[${y}].resolution must be 128-4096, got ${w}`,"validation");if(!st(w))throw new R(`perMesh[${y}].resolution must be a power of two, got ${w}`,"validation")}const M=S.density;if(M!==void 0&&(!Number.isFinite(M)||M<.1||M>10))throw new R(`perMesh[${y}].density must be in [0.1, 10], got ${M}`,"validation")}t.texelsPerMeter;const c=t.timeoutProtection;if((c==null?void 0:c.initialTileSize)!==void 0){const y=c.initialTileSize;if(!Number.isFinite(y)||y<16||y>4096)throw new R(`timeoutProtection.initialTileSize must be 16-4096, got ${y}`,"validation")}if((c==null?void 0:c.maxBatchMs)!==void 0&&(!Number.isFinite(c.maxBatchMs)||c.maxBatchMs<=0))throw new R(`timeoutProtection.maxBatchMs must be > 0, got ${c.maxBatchMs}`,"validation");if((c==null?void 0:c.maxFrameMs)!==void 0&&(!Number.isFinite(c.maxFrameMs)||c.maxFrameMs<=0))throw new R(`timeoutProtection.maxFrameMs must be > 0, got ${c.maxFrameMs}`,"validation")}function $r(t,e){var n,a,i,o,l;const r=(n=t==null?void 0:t.safeMode)!=null?n:!1;return{safeMode:r,initialTileSize:(a=t==null?void 0:t.initialTileSize)!=null?a:r?64:e.initialTileSize,maxBatchMs:(i=t==null?void 0:t.maxBatchMs)!=null?i:r?100:e.maxBatchMs,maxFrameMs:(o=t==null?void 0:t.maxFrameMs)!=null?o:e.maxFrameMs,autoAdapt:(l=t==null?void 0:t.autoAdapt)!=null?l:!0}}class Hr extends m.ShaderMaterial{constructor(e){super({glslVersion:m.GLSL3,uniforms:{tSource:{value:e}},vertexShader:`
        out vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        in vec2 vUv;
        uniform sampler2D tSource;
        out vec4 fragColor;
        void main() {
          fragColor = texture(tSource, vUv);
        }
      `})}customProgramCacheKey(){return"DownscaleMaterial|glsl3|single-out"}}const Xr=new m.OrthographicCamera;function qr(t,e,r){const n=new m.WebGLRenderTarget(r,r,{type:m.HalfFloatType,minFilter:m.LinearFilter,magFilter:m.LinearFilter,generateMipmaps:!1}),a=new Hr(e),i=new m.Mesh(new m.PlaneGeometry(2,2),a),o=()=>{const u=t.getRenderTarget();try{t.setRenderTarget(n),t.render(i,Xr)}finally{t.setRenderTarget(u)}},l=u=>{const c=a.uniforms.tSource;if(!c)throw new Error("[baker] DownscaleMaterial missing tSource uniform");c.value=u};return o(),{texture:n.texture,refresh:o,setSource:l,dispose:()=>{n.dispose(),a.dispose(),i.geometry.dispose()}}}function Kr(t,e,r){var i,o;const n=[],a=new Map;for(const l of t){const u=(i=e[l.uuid])!=null?i:{};if(u.exclude===!0){n.push(l);continue}const c=(o=u.resolution)!=null?o:r;a.has(c)||a.set(c,[]),a.get(c).push(l)}return a.size===0&&n.length<t.length&&a.set(r,t.filter(l=>{var u;return!((u=e[l.uuid])!=null&&u.exclude)})),{excluded:n,groups:a,resolution:r}}function Yr(t,e,r,n){var c,s;const a=[],i=[];for(const f of t)((c=e[f.uuid])==null?void 0:c.exclude)===!0?a.push(f):i.push(f);const o={};for(const f of i){const d=(s=e[f.uuid])==null?void 0:s.density;d!==void 0&&d!==1&&(o[f.uuid]=d)}const l=new Map;if(i.length===0)return{excluded:a,groups:l,resolution:r};const u=mt(i,{atlasResolution:r,texelsPerMeter:n,perMeshScale:o});for(let f=0;f<i.length;f++){const d=u[f];l.has(d.atlasIdx)||l.set(d.atlasIdx,[]),l.get(d.atlasIdx).push(d.mesh)}return{excluded:a,groups:l,resolution:r}}class Dt{constructor(e,r,n,a,i){this.renderer=e,this.meshLightmaps=r,this.meshResolutions=n,this.stats=a,this.internals=i}get lightmaps(){return new Map(this.meshLightmaps)}get bvh(){return this.internals.bvh}get groups(){return this.internals.groups.map(e=>{var r,n;return{meshes:e.meshes,resolution:e.resolution,internalResolution:e.internalResolution,lightmapper:e.lightmapper,aoMapper:e.aoMapper,textures:{direct:e.lightmapper.textures.direct,indirect:e.lightmapper.textures.indirect,ao:e.aoMapper.texture,composite:e.composite.texture,refinement:(n=(r=e.refinement)==null?void 0:r.texture)!=null?n:null,position:e.positionTex,normal:e.normalTex}}})}getGroupForMesh(e){var r,n;for(const a of this.internals.groups)if(a.meshes.includes(e))return{meshes:a.meshes,resolution:a.resolution,internalResolution:a.internalResolution,lightmapper:a.lightmapper,aoMapper:a.aoMapper,textures:{direct:a.lightmapper.textures.direct,indirect:a.lightmapper.textures.indirect,ao:a.aoMapper.texture,composite:a.composite.texture,refinement:(n=(r=a.refinement)==null?void 0:r.texture)!=null?n:null,position:a.positionTex,normal:a.normalTex}};return null}apply(){for(const[e,r]of this.meshLightmaps){const n=e.material;!n||(n.lightMap=r,r.channel=2,n.lightMapIntensity=1,n.needsUpdate=!0)}}async export(e="lightmap",r={}){var o,l,u,c,s;const n=(o=r.format)!=null?o:"png",a=e.replace(/[\/\\]+$/,"").split(/[\/\\]/).pop()||"lightmap",i=this.internals.groups;for(let f=0;f<i.length;f++){const d=i[f],p=(s=(c=(l=d.downscale)==null?void 0:l.texture)!=null?c:(u=d.refinement)==null?void 0:u.texture)!=null?s:d.composite.texture,h=i.length>1?`${a}_group${f}`:a;await It(this.renderer,p,d.resolution,h,n)}}dispose(){var e,r;for(const n of this.internals.groups)(e=n.downscale)==null||e.dispose(),(r=n.refinement)==null||r.dispose(),n.composite.dispose(),n.aoMapper.dispose(),n.lightmapper.dispose(),n.atlasDispose();this.internals.matTexDispose()}refreshAO(e){for(const r of this.internals.groups)r.composite.refresh({aoIntensity:e.intensity,aoExponent:e.exponent,aoEnabled:e.enabled})}async rebakeAO(e,r={}){const n=this.internals.groups;for(let a=0;a<n.length;a++){const i=n[a],o={resolution:i.internalResolution,aoSamples:e.samples,ambientDistance:e.distance,targetSamples:e.targetSamples};if(await jr(this.renderer,this.internals.bvh,i,o,r,a,n.length,l=>{var u;return(u=r.onProgress)==null?void 0:u.call(r,"bake",(a+l)/n.length)}),i.refinement)if(i.refinement.dispose(),i.refinement=await Ie(this.renderer,i.composite.texture,i.positionTex,i.internalResolution,this.internals.refinementOptions),i.downscale)i.downscale.setSource(i.refinement.texture),i.downscale.refresh();else{const l=i.refinement.texture;for(const[u,c]of this.meshResolutions)c===i.resolution&&this.meshLightmaps.set(u,l)}else i.downscale&&i.downscale.refresh()}}}function jr(t,e,r,n,a,i,o,l){const u=Le(t,r.positionTex,r.normalTex,e,n);return r.aoMapper.dispose(),r.aoMapper=u,r.composite.refresh({aoTex:u.texture}),new Promise((c,s)=>{const f=()=>{var p,h;if((p=a.signal)!=null&&p.aborted){const v=new R("aborted by signal","bake");v.name="AbortError",s(v);return}const d=u.render();if(l(n.targetSamples>0?d.samples/n.targetSamples:1),r.composite.refresh(),(h=a.onFrame)==null||h.call(a,{groupIndex:i,totalGroups:o,bounceSamples:0,aoSamples:d.samples,targetSamples:n.targetSamples,done:d.done,compositeTexture:r.composite.texture,directTexture:r.lightmapper.textures.direct,indirectTexture:r.lightmapper.textures.indirect,aoTexture:u.texture}),d.done){c();return}requestAnimationFrame(f)};requestAnimationFrame(f)})}const Zr=64;function Qr(t,e,r,n,a,i){return{resolution:e,casts:t.castsPerFrame,filterMode:t.filtering==="linear"?m.LinearFilter:m.NearestFilter,lights:r,skyColor:n,skyIntensity:t.gi.skyIntensity,directLightEnabled:t.light.enabled,indirectLightEnabled:t.gi.enabled,albedoTexture:a.albedoTexture,emissiveTexture:a.emissiveTexture,materialTextureSize:a.side,targetSamples:t.samples,bounces:t.bounces,tileSize:i.initialTileSize}}function Jr(t,e,r){return{resolution:e,aoSamples:t.ao.samples,ambientDistance:t.ao.distance,targetSamples:t.samples,tileSize:r.initialTileSize}}async function ea(t,e,r,n,a,i,o,l){var E,T,I;const{renderer:u,opts:c,bvh:s,sceneLights:f,skyColor:d,matTex:p,tp:h,ctxState:v}=t;(E=o.onProgress)==null||E.call(o,"bake",e/r),l("bake");let b=null,g=null,x=null,y=null,S=null,w=null,M=!1;try{b=ft(u,n,i,!0);const F=Qr(c,i,f,d,p,h),B=Jr(c,i,h);g=gt(u,b.positionTexture,b.normalTexture,s,F),x=Le(u,b.positionTexture,b.normalTexture,s,B),y=xt(u,{direct:g.textures.direct,indirect:g.textures.indirect,ao:x.texture},i,{directIntensity:1,giIntensity:c.gi.intensity,aoEnabled:c.ao.enabled,aoIntensity:c.ao.intensity,aoExponent:c.ao.exponent}),await ra(g,x,y,c.samples,o,v,h,e,r,z=>{var k;return(k=o.onProgress)==null?void 0:k.call(o,"bake",(e+z)/r)}),(c.denoise||c.refinementOptions.dilationIterations>0)&&(S=await Ie(u,y.texture,b.positionTexture,i,c.refinementOptions));const C=(T=S==null?void 0:S.texture)!=null?T:y.texture;w=c.superSample>1?qr(u,C,a):null;const P=(I=w==null?void 0:w.texture)!=null?I:C,A=b;if(!A)throw new R("atlas render did not complete","bake");return M=!0,{group:{lightmapper:g,aoMapper:x,composite:y,refinement:S,atlasDispose:()=>A.dispose(),resolution:a,internalResolution:i,downscale:w,meshes:n,positionTex:A.positionTexture,normalTex:A.normalTexture},finalTex:P}}finally{M||(w==null||w.dispose(),S==null||S.dispose(),y==null||y.dispose(),x==null||x.dispose(),g==null||g.dispose(),b==null||b.dispose())}}function ta(t,e,r){return t.length<4?e:t.slice(-4).filter(i=>i>r.maxFrameMs*1.5).length>=3?Math.max(Zr,e>>1):e}function ra(t,e,r,n,a,i,o,l,u,c){return new Promise((s,f)=>{const d=[];let p=performance.now(),h=o.initialTileSize;const v=()=>{var M,E;if((M=a.signal)!=null&&M.aborted){const T=new R("aborted by signal","bake");T.name="AbortError",f(T);return}if(i.lost){f(new R("webgl context lost during bake","context-loss"));return}const b=performance.now();if(d.push(b-p),d.length>8&&d.shift(),p=b,o.autoAdapt){const T=ta(d,h,o);T!==h&&(console.warn(`[baker] adaptive throttle: tileSize ${h} \u2192 ${T}`),h=T,t.setTileSize(h),e.setTileSize(h),d.length=0)}const g=t.renderTiled(o.maxFrameMs),x=e.renderTiled(o.maxFrameMs),y=Math.min(g.samples,x.samples);c(n>0?y/n:1);const S=g.done&&x.done;(g.sampleComplete||x.sampleComplete)&&r.refresh();const w={groupIndex:l,totalGroups:u,bounceSamples:g.samples,aoSamples:x.samples,targetSamples:n,done:S,compositeTexture:r.texture,directTexture:t.textures.direct,indirectTexture:t.textures.indirect,aoTexture:e.texture};if((E=a.onFrame)==null||E.call(a,w),S){s();return}requestAnimationFrame(v)};requestAnimationFrame(v)})}function aa(t){const e=[];return t.traverse(r=>{var i;if(!r.isMesh||!r.visible||(i=r.userData)!=null&&i.lightmapIgnore)return;const n=r;(Array.isArray(n.material)?n.material:[n.material]).some(o=>o&&o.isMeshStandardMaterial)&&e.push(n)}),e}async function na(t){var $,X,V,re,J,ee;const{renderer:e,opts:r,scene:n,allMeshes:a,hooks:i,t0:o,tp:l,ctxState:u,checkAbort:c}=t,s=r.texelsPerMeter,f={};for(const[H,Y]of Object.entries(r.perMesh))Y.density!==void 0&&(f[H]=Y.density);const d=s>0?ct(a.filter(H=>{var Y;return((Y=r.perMesh[H.uuid])==null?void 0:Y.exclude)!==!0}),{atlasResolution:r.resolution,densityMultiplier:s,perMeshScale:f}):0,p=d>0?Yr(a,r.perMesh,r.resolution,d):Kr(a,r.perMesh,r.resolution),{excluded:h,groups:v}=p,b=H=>d>0?p.resolution:H,g=performance.now();($=i.onProgress)==null||$.call(i,"uv-unwrap",0);const x=[...v.values()];d>0?await dt(x,{resolution:r.resolution,texelsPerUnit:d,perMeshScale:f}):await Re(x.flat()),(X=i.onProgress)==null||X.call(i,"uv-unwrap",1),c("unwrap");const y=performance.now(),S=performance.now();(V=i.onProgress)==null||V.call(i,"geometry",0);const w=bt(a),M=new ae.MeshBVH(w);(re=i.onProgress)==null||re.call(i,"geometry",.5);const E=wt(w,a),T=Tt(E);(J=i.onProgress)==null||J.call(i,"geometry",1),c("geometry");const I=performance.now(),F=Wr(r.gi.skyColor,16777215),B=pt(n),C=performance.now(),P=[...v.keys()],A=[],z=new Map,k=new Map,D={renderer:e,opts:r,bvh:M,sceneLights:B,skyColor:F,matTex:T,tp:l,ctxState:u};for(let H=0;H<P.length;H++){const Y=P[H],Z=b(Y),pe=Z*r.superSample,_e=v.get(Y),{group:le,finalTex:kt}=await ea(D,H,P.length,_e,Z,pe,i,c);A.push(le);for(const Oe of _e)z.set(Oe,kt),k.set(Oe,Z)}const W=performance.now(),O=performance.now();(ee=i.onProgress)==null||ee.call(i,"refine",1);const _=performance.now();performance.now(),e.getContext().finish(),performance.now();const N=P.reduce((H,Y)=>{const Z=b(Y);return H+Z*Z},0),K={meshCount:x.flat().length,texelCount:N,raysTraced:r.samples*r.castsPerFrame*N,duration:{uvUnwrap:y-g,geometry:I-S,bake:W-C,refine:_-O,total:performance.now()-o}};return new Dt(e,z,k,K,{groups:A,bvh:M,refinementOptions:r.refinementOptions,denoise:r.denoise,matTexDispose:()=>{T.albedoTexture.dispose(),T.emissiveTexture.dispose()}})}function Ce(t,e={}){var r;return{renderer:t,contextLossTarget:(r=e.contextLossTarget)!=null?r:t.domElement,label:e.label}}function zt(t){var e;return!!t&&typeof t=="object"&&"renderer"in t&&t.renderer!==null&&typeof((e=t.renderer)==null?void 0:e.isWebGLRenderer)=="boolean"}function ia(t){var e,r,n,a;return typeof t=="boolean"?{enabled:t,intensity:1,skyColor:16777215,skyIntensity:0}:{enabled:(e=t==null?void 0:t.enabled)!=null?e:!0,intensity:(r=t==null?void 0:t.intensity)!=null?r:1,skyColor:(n=t==null?void 0:t.skyColor)!=null?n:16777215,skyIntensity:(a=t==null?void 0:t.skyIntensity)!=null?a:0}}function sa(t,e){var r,n,a,i,o,l;return typeof t=="boolean"?{enabled:t,distance:.5,intensity:1,exponent:1.5,samples:e!=null?e:5}:{enabled:(r=t==null?void 0:t.enabled)!=null?r:!0,distance:(n=t==null?void 0:t.distance)!=null?n:.5,intensity:(a=t==null?void 0:t.intensity)!=null?a:1,exponent:(i=t==null?void 0:t.exponent)!=null?i:1.5,samples:(l=(o=t==null?void 0:t.samples)!=null?o:e)!=null?l:5}}class oa{constructor(e={},r={}){var i,o,l,u,c,s,f,d,p,h,v,b,g,x,y,S,w,M,E,T,I,F,B;this._rendererAdapter=null;const n=C=>!!C&&typeof C=="object"&&("isWebGLRenderer"in C&&C.isWebGLRenderer===!0||"getContext"in C&&"domElement"in C),a=zt(e)?{...r,rendererAdapter:e}:n(e)?{...r,renderer:e}:{...e,...r};Vr(a),this._rendererAdapter=(i=a.rendererAdapter)!=null?i:a.renderer?Ce(a.renderer):null,this.opts={samples:(o=a.samples)!=null?o:96,castsPerFrame:(l=a.castsPerFrame)!=null?l:5,bounces:Math.min(4,Math.max(1,(u=a.bounces)!=null?u:1)),resolution:(c=a.resolution)!=null?c:1024,superSample:(s=a.superSample)!=null?s:1,denoise:(f=a.denoise)!=null?f:!0,filtering:(d=a.filtering)!=null?d:"linear",texelsPerMeter:(p=a.texelsPerMeter)!=null?p:0,perMesh:(h=a.perMesh)!=null?h:{},light:{position:Array.isArray((v=a.light)==null?void 0:v.position)?new m.Vector3(...a.light.position):(g=(b=a.light)==null?void 0:b.position)!=null?g:new m.Vector3(0,10,0),color:(y=(x=a.light)==null?void 0:x.color)!=null?y:16777215,intensity:(w=(S=a.light)==null?void 0:S.intensity)!=null?w:2,size:(E=(M=a.light)==null?void 0:M.size)!=null?E:1,enabled:(I=(T=a.light)==null?void 0:T.enabled)!=null?I:!0},gi:ia(a.gi),ao:sa(a.ao,a.castsPerFrame),refinementOptions:{...ot,...(F=a.refinementOptions)!=null?F:{},denoiseEnabled:(B=a.denoise)!=null?B:ot.denoiseEnabled},timeoutProtection:a.timeoutProtection}}get renderer(){var e,r;return(r=(e=this._rendererAdapter)==null?void 0:e.renderer)!=null?r:null}get rendererAdapter(){return this._rendererAdapter}setRenderer(e){return this._rendererAdapter=Ce(e),this}setRendererAdapter(e){return this._rendererAdapter=e,this}async bake(e,r={}){var v,b;const n=this._rendererAdapter,a=(v=n==null?void 0:n.renderer)!=null?v:null;if(!a)throw new R("renderer is required: use `new LightmapBaker(renderer, opts)`, `new LightmapBaker({ renderer, ...opts })`, `new LightmapBaker({ rendererAdapter, ...opts })`, `baker.setRenderer(renderer)`, or `baker.setRendererAdapter(adapter)`","validation");const i=performance.now(),o=aa(e);if(!o.length)throw new R("no bake-eligible meshes in scene (need Mesh + MeshStandardMaterial-like)","validation");if(!a.getContext().getExtension("EXT_color_buffer_float"))throw new R("EXT_color_buffer_float WebGL2 extension is unavailable; FloatType RTs cannot be allocated","validation");const u=Pt(a),c=$r(this.opts.timeoutProtection,u),s={lost:!1},f=(b=n==null?void 0:n.contextLossTarget)!=null?b:a.domElement,d=g=>{g.preventDefault(),s.lost=!0,console.error("[baker] webglcontextlost during bake - cancelling")};f.addEventListener("webglcontextlost",d,!1);const p=()=>{f.removeEventListener("webglcontextlost",d,!1)};e.updateMatrixWorld(!0);const h=g=>{var x;if((x=r.signal)!=null&&x.aborted){const y=new R("aborted by signal",g);throw y.name="AbortError",y}if(s.lost)throw new R("webgl context lost","context-loss")};try{return await na({renderer:a,opts:this.opts,scene:e,allMeshes:o,hooks:r,t0:i,tp:c,ctxState:s,checkAbort:h})}finally{p()}}}function la(){return globalThis}function ua(t){var e,r;return typeof((r=(e=t.process)==null?void 0:e.versions)==null?void 0:r.node)=="string"}function ca(t){return typeof t.window!="undefined"&&typeof t.document!="undefined"}function ma(t){return ca(t)?"browser":typeof t.OffscreenCanvas=="function"?"offscreen-browser":ua(t)?"node":"unknown"}function da(t){var e,r;if(typeof t.WebGL2RenderingContext!="function")return"unavailable";if(typeof((e=t.document)==null?void 0:e.createElement)!="function")return"available";try{const n=t.document.createElement("canvas");return(r=n.getContext)!=null&&r.call(n,"webgl2")?"available":"unavailable"}catch{return"unavailable"}}function fa(t){var e;if(typeof t.OffscreenCanvas!="function")return"unavailable";try{const r=new t.OffscreenCanvas(1,1);return(e=r.getContext)!=null&&e.call(r,"webgl2")?"available":"unavailable"}catch{return"unavailable"}}function pa(t=la()){const e=ma(t),r=typeof t.OffscreenCanvas=="function"?"available":"unavailable",n=typeof t.requestAnimationFrame=="function"?"available":"unavailable",a=e==="offscreen-browser"?fa(t):da(t),i=(e==="browser"||e==="offscreen-browser")&&a!=="unavailable"&&n==="available";return{runtime:e,canBake:i,rendererStrategy:i?"webgl-browser":"node-headless-unavailable",features:{webgl2:a,"float-color-buffer":a==="unavailable"?"unavailable":"unknown","offscreen-canvas":r,raf:n,"texture-download-export":e==="browser"?"available":"unavailable","filesystem-export":"unavailable","node-headless-bake":"unavailable"},limitations:e==="node"?["True Node.js headless baking is not implemented yet.","The current bake pipeline still requires a browser WebGL2 renderer and RAF-driven progressive passes."]:[]}}const lt={0:"NO_ERROR",1280:"INVALID_ENUM",1281:"INVALID_VALUE",1282:"INVALID_OPERATION",1283:"STACK_OVERFLOW",1284:"STACK_UNDERFLOW",1285:"OUT_OF_MEMORY",1286:"INVALID_FRAMEBUFFER_OPERATION",37442:"CONTEXT_LOST_WEBGL"};class ha{constructor(e){this.renderer=e,this.start=performance.now(),this.snapshots=[],this.lastCalls=0,this.lastTriangles=0}banner(){var s,f;const e=this.renderer.getContext(),r=e.getExtension("WEBGL_debug_renderer_info"),n=r?String((s=e.getParameter(r.UNMASKED_VENDOR_WEBGL))!=null?s:""):"<masked>",a=r?String((f=e.getParameter(r.UNMASKED_RENDERER_WEBGL))!=null?f:""):"<masked>",i=e.getContextAttributes(),o={MAX_TEXTURE_SIZE:e.getParameter(e.MAX_TEXTURE_SIZE),MAX_RENDERBUFFER_SIZE:e.getParameter(e.MAX_RENDERBUFFER_SIZE),MAX_DRAW_BUFFERS:e.getParameter(e.MAX_DRAW_BUFFERS),MAX_COLOR_ATTACHMENTS:e.getParameter(e.MAX_COLOR_ATTACHMENTS),MAX_TEXTURE_IMAGE_UNITS:e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),MAX_FRAGMENT_UNIFORM_VECTORS:e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),MAX_VARYING_VECTORS:e.getParameter(e.MAX_VARYING_VECTORS),MAX_VIEWPORT_DIMS:e.getParameter(e.MAX_VIEWPORT_DIMS)},l=["EXT_color_buffer_float","EXT_color_buffer_half_float","OES_texture_float_linear","OES_texture_half_float_linear","WEBGL_lose_context","EXT_disjoint_timer_query_webgl2","WEBGL_debug_renderer_info"],u={};for(const d of l)u[d]=!!e.getExtension(d);const c=performance.memory;console.group("[diag] === GPU BANNER ==="),console.log("vendor:",n),console.log("renderer:",a),console.log("webgl version:",e.getParameter(e.VERSION)),console.log("GLSL:",e.getParameter(e.SHADING_LANGUAGE_VERSION)),console.log("context attrs:",i),console.log("limits:",o),console.log("extensions:",u),c&&console.log("JS heap (MB):",`used=${(c.usedJSHeapSize/1048576).toFixed(1)}`,`total=${(c.totalJSHeapSize/1048576).toFixed(1)}`,`limit=${(c.jsHeapSizeLimit/1048576).toFixed(1)}`),console.groupEnd()}snap(e){var s,f,d;const r=this.renderer.getContext();let n=0,a=0;do a=r.getError(),a!==0&&(n=a);while(a!==0);const i=this.renderer.info,o=(f=(s=i.programs)==null?void 0:s.length)!=null?f:0,l=i.render.calls-this.lastCalls,u=i.render.triangles-this.lastTriangles;this.lastCalls=i.render.calls,this.lastTriangles=i.render.triangles;const c={label:e,t:performance.now()-this.start,glError:(d=lt[n])!=null?d:`0x${n.toString(16)}`,threejs:{geometries:i.memory.geometries,textures:i.memory.textures,programs:o,calls:i.render.calls,triangles:i.render.triangles}};return this.snapshots.push(c),console.log(`[diag] ${c.t.toFixed(1).padStart(8)}ms ${e}`,`gl=${c.glError}`,`geo=${c.threejs.geometries} tex=${c.threejs.textures} prog=${c.threejs.programs}`,`\u0394calls=${l} \u0394tris=${u}`),c}measure(e,r){var c;const n=this.renderer.getContext();for(;n.getError()!==0;);const a=performance.now(),i=r();n.finish();const o=performance.now()-a;let l=0,u=0;do u=n.getError(),u!==0&&(l=u);while(u!==0);return console.log(`[diag] MEASURE ${e}: ${o.toFixed(1)}ms gl=${(c=lt[l])!=null?c:`0x${l.toString(16)}`}`),i}contextLossInfo(){var n,a;const e=this.renderer.getContext(),r=e.getExtension("WEBGL_lose_context");console.group("[diag] === CONTEXT LOSS DUMP ==="),console.log("isContextLost:",(n=e.isContextLost)==null?void 0:n.call(e)),console.log("snapshot history (last 10):",this.snapshots.slice(-10)),console.log("threejs info at loss:",{geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,programs:(a=this.renderer.info.programs)==null?void 0:a.length,autoReset:this.renderer.info.autoReset}),r&&console.log("lose_context ext present"),console.groupEnd()}dump(){return this.snapshots.slice()}}exports.AtlasViewer=Nr;exports.BakeError=R;exports.Diagnostics=ha;exports.LightmapBakeResult=Dt;exports.LightmapBaker=oa;exports.TexelDensityMaterial=Gr;exports.binPackMeshes=mt;exports.buildLightTexture=ht;exports.buildMaterialTextures=Tt;exports.classifyRenderer=Ft;exports.collectLightsFromScene=pt;exports.computeMeshSurfaceArea=xe;exports.createRendererAdapter=Ce;exports.detectGPUCapabilities=Pt;exports.disposeLightTexture=vt;exports.exportEXR=Rt;exports.exportLightmap=It;exports.exportPNG=Ct;exports.exportRaw=Lt;exports.extractPerTriangleMaterials=wt;exports.generateAOMapper=Le;exports.generateAtlas=Re;exports.generateAtlases=dt;exports.generateLightmapper=gt;exports.getLightmapRuntimeCapabilities=pa;exports.isLightmapRendererAdapter=zt;exports.loadXAtlasThree=Bt;exports.mergeGeometry=bt;exports.renderAtlas=ft;exports.resolveDensityTexelsPerMeter=ct;exports.runComposite=xt;exports.runRefinement=Ie;
