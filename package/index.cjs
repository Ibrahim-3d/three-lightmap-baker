"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var d=require("three"),Wr=require("xatlas-three"),me=require("three-mesh-bvh");const Xe=new d.Vector3,It=new d.Vector3,Lt=new d.Vector3,Pt=new d.Vector3,Ft=new d.Vector3,zt=new d.Vector3,nr=.95;function Ge(t){const e=t.geometry,r=e.attributes.position;if(!r)return 0;const n=t.matrixWorld;let i=0;const a=(s,l,u)=>(Xe.fromBufferAttribute(r,s).applyMatrix4(n),It.fromBufferAttribute(r,l).applyMatrix4(n),Lt.fromBufferAttribute(r,u).applyMatrix4(n),Pt.subVectors(It,Xe),Ft.subVectors(Lt,Xe),zt.crossVectors(Pt,Ft),zt.length()*.5);if(e.index){const s=e.index.array;for(let l=0;l<s.length;l+=3)i+=a(s[l],s[l+1],s[l+2])}else for(let s=0;s<r.count;s+=3)i+=a(s,s+1,s+2);return i}function ir(t,e){var s,l,u;if(!Number.isFinite(e.densityMultiplier)||e.densityMultiplier<=0||!Number.isFinite(e.atlasResolution)||e.atlasResolution<=0)return 0;let r=0;for(const c of t){const o=(l=(s=e.perMeshScale)==null?void 0:s[c.uuid])!=null?l:1;r+=Ge(c)*o*o}if(!Number.isFinite(r)||r<=0)return 0;const n=(u=e.fillRatio)!=null?u:nr,i=e.atlasResolution*e.atlasResolution;return Math.sqrt(i*n/r)*e.densityMultiplier}function ar(t,e){var c;const r=(c=e.fillRatio)!=null?c:nr,n=e.atlasResolution*e.atlasResolution,i=e.texelsPerMeter*e.texelsPerMeter,s=[...t.map((o,f)=>{var b,v;const m=Ge(o),h=(v=(b=e.perMeshScale)==null?void 0:b[o.uuid])!=null?v:1,p=m*i*h*h,g=n>0?p/n:0;return{mesh:o,inputIdx:f,surfaceArea:m,uvFraction:g}})].sort((o,f)=>f.uvFraction-o.uvFraction),l=[],u=new Array(t.length);for(const o of s){let f=o.uvFraction;if(f>r){const h=o.mesh.name||`Mesh ${o.inputIdx+1} (${o.mesh.geometry.type.replace("Geometry","")})`;console.warn(`[baker] mesh "${h}" wants ${(f*100).toFixed(0)}% of one ${e.atlasResolution}\xB2 atlas at ${e.texelsPerMeter} texels/m - clamping to ${(r*100).toFixed(0)}% (effective density reduced)`),f=r}let m=-1;for(let h=0;h<l.length;h++)if(l[h]+f<=r){l[h]=l[h]+f,m=h;break}m<0&&(m=l.length,l.push(f)),u[o.inputIdx]={atlasIdx:m,mesh:o.mesh,uvFraction:f,surfaceArea:o.surfaceArea}}return u}const Qe=!1,xe=new Wr.UVUnwrapper({BufferAttribute:d.BufferAttribute}),Oe=new d.Vector3,kt=1e-4,$r=6;var sr=(t=>(t[t.AddMesh=0]="AddMesh",t[t.ComputeCharts=1]="ComputeCharts",t[t.PackCharts=2]="PackCharts",t[t.BuildOutputMeshes=3]="BuildOutputMeshes",t))(sr||{});function Hr(t){let e=1/0,r=-1/0;for(const n of t){const i=n.geometry.getAttribute("uv2");if(!i)return{min:0,max:0,valid:!1};for(let a=0;a<i.count;a++){const s=i.getX(a),l=i.getY(a);if(!Number.isFinite(s)||!Number.isFinite(l))return{min:0,max:0,valid:!1};e=Math.min(e,s,l),r=Math.max(r,s,l)}}return{min:e,max:r,valid:Number.isFinite(e)&&Number.isFinite(r)&&e>=-kt&&r<=1+kt}}function Xr(t){const e={};for(const[r,n]of Object.entries(t.attributes))e[r]=n.clone();return{attributes:e,index:t.index?t.index.clone():null,xAtlasSubMeshes:t.userData.xAtlasSubMeshes?structuredClone(t.userData.xAtlasSubMeshes):void 0,hadXAtlasSubMeshes:Object.prototype.hasOwnProperty.call(t.userData,"xAtlasSubMeshes")}}function qr(t,e){for(const r of Object.keys(t.attributes))t.deleteAttribute(r);for(const[r,n]of Object.entries(e.attributes))t.setAttribute(r,n.clone());t.setIndex(e.index?e.index.clone():null),e.hadXAtlasSubMeshes?t.userData.xAtlasSubMeshes=e.xAtlasSubMeshes?structuredClone(e.xAtlasSubMeshes):e.xAtlasSubMeshes:delete t.userData.xAtlasSubMeshes}function Dt(t,e){t?xe.packOptions.texelsPerUnit=e:delete xe.packOptions.texelsPerUnit}const Kr=async()=>{const t={},e=(r,n)=>{if(!!Qe){if(n<100){t[r]=n;return}t[r]!==100&&(t[r]=100,console.info(`[baker] xatlas ${sr[r]} done`))}};await xe.loadLibrary(e,"https://cdn.jsdelivr.net/npm/xatlasjs@0.2.0/dist/xatlas.wasm","https://cdn.jsdelivr.net/npm/xatlasjs@0.2.0/dist/xatlas.js"),Qe&&console.info("[baker] xatlas loaded")},ot=async(t,e={})=>{var l,u,c,o,f,m;const r=t.map(h=>h.geometry),n=e.texelsPerUnit!==void 0&&e.texelsPerUnit>0,i=n?(l=e.resolution)!=null?l:1024:4096;let a=(u=e.texelsPerUnit)!=null?u:0;if(n){const h=i*i;let p=0;for(const b of t){const v=(o=(c=e.perMeshScale)==null?void 0:c[b.uuid])!=null?o:1;p+=Ge(b)*a*a*v*v/h}const g=.95;p>g&&(a*=Math.sqrt(g/p))}xe.packOptions.padding=Math.max(4,Math.ceil(i/256)),xe.packOptions.resolution=i,Dt(n,a);const s=n?t.map(h=>h.geometry.userData.worldScale):[];try{if(n)for(const g of t){const b=(m=(f=e.perMeshScale)==null?void 0:f[g.uuid])!=null?m:1;g.getWorldScale(Oe),g.geometry.userData.worldScale=[Oe.x*b,Oe.y*b,Oe.z*b]}const h=n?$r:1,p=n?r.map(Xr):[];for(let g=0;g<h;g++){if(g>0)for(let T=0;T<r.length;T++){const w=p[T];w&&qr(r[T],w)}Dt(n,a);const b=await xe.packAtlas(r,"uv2","uv"),v=Hr(t);if(!n||b.atlasCount<=1&&v.valid)break;const x=g+1<h,y=b.atlasCount>1?`${b.atlasCount} internal atlases`:`uv2 bounds ${v.min.toFixed(3)}..${v.max.toFixed(3)}`;x?(a*=.85,console.warn(`[baker] xatlas produced ${y} for one ${i}x${i} bake group; retrying at ${a.toFixed(2)} texels/m`)):console.warn(`[baker] xatlas still produced ${y}; this bake group may show unmapped black areas`)}}finally{if(n)for(let h=0;h<t.length;h++){const p=t[h];if(!p)continue;const g=s[h];g===void 0?delete p.geometry.userData.worldScale:p.geometry.userData.worldScale=g}}},or=async(t,e={})=>{for(let r=0;r<t.length;r++){const n=t[r];!n||n.length===0||(Qe&&console.info(`[baker] xatlas bin ${r+1}/${t.length}: ${n.length} meshes`),await ot(n,e))}},Yr=`
    in vec2 uv2;
    uniform vec2 offset;
    out vec4 vPosition;
    void main() {
        vPosition = modelMatrix * vec4(position, 1.0);
        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
`,jr=`
    in vec4 vPosition;
    out vec4 fragColor;
    void main() {
        // Position w=1.0 marks "inside a chart". 0.0 background from clearColor.
        fragColor = vec4(vPosition.xyz, 1.0);
    }
`,Zr=new d.ShaderMaterial({glslVersion:d.GLSL3,vertexShader:Yr,fragmentShader:jr,side:d.DoubleSide,fog:!1,uniforms:{offset:new d.Uniform(new d.Vector2(0,0))}}),Qr=`
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
`,Jr=`
    in vec4 vNormal;
    out vec4 fragColor;

    void main() {
        // Guard against zero-length normals (degenerate geometry) - produces (0,0,0,0)
        // so the bake shader can detect the miss instead of generating NaN.
        float len = length(vNormal.xyz);
        fragColor = len > 1.0e-6 ? vec4(vNormal.xyz / len, vNormal.w) : vec4(0.0);
    }
`,en=new d.ShaderMaterial({glslVersion:d.GLSL3,vertexShader:Qr,fragmentShader:Jr,side:d.DoubleSide,fog:!1,uniforms:{offset:new d.Uniform(new d.Vector2(0,0))}}),ge=new d.Scene,tn=new d.OrthographicCamera(-1,1,1,-1,0,1),rn=[{x:-2,y:-2},{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:2,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:2,y:-1},{x:-2,y:0},{x:-1,y:0},{x:1,y:0},{x:2,y:0},{x:-2,y:1},{x:-1,y:1},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:-2,y:2},{x:-1,y:2},{x:0,y:2},{x:1,y:2},{x:2,y:2},{x:0,y:0}];function nn(t){const e=new d.Mesh(t.geometry,t.material);return e.matrixAutoUpdate=!1,e.matrixWorldAutoUpdate=!1,e.matrix.copy(t.matrixWorld),e.matrixWorld.copy(t.matrixWorld),e.normalMatrix.getNormalMatrix(t.matrixWorld),e.frustumCulled=!1,e}function Nt(t,e,r){var i;const n=(i=t.uniforms.offset)==null?void 0:i.value;if(!n)throw new Error("[baker] atlas material missing offset uniform");n.set(e,r)}function lr(t,e,r,n=!0){const i={format:d.RGBAFormat,type:t.capabilities.isWebGL2?d.FloatType:d.HalfFloatType,minFilter:d.NearestFilter,magFilter:d.NearestFilter,generateMipmaps:!1,depthBuffer:!1,stencilBuffer:!1,blending:d.NoBlending},a=new d.WebGLRenderTarget(r,r,i),s=new d.WebGLRenderTarget(r,r,i),l=t.getRenderTarget(),u=t.autoClear,c=new d.Color;t.getClearColor(c);const o=t.getClearAlpha();try{t.autoClear=!1,t.setClearColor(0,0),n&&(t.setRenderTarget(a),t.clear(),t.setRenderTarget(s),t.clear()),ge.clear();for(const m of e)ge.add(nn(m));const f=(m,h)=>{ge.overrideMaterial=m,t.setRenderTarget(h);for(const p of rn)Nt(m,p.x/r,p.y/r),t.render(ge,tn);Nt(m,0,0)};f(Zr,a),f(en,s)}finally{t.setRenderTarget(l),t.autoClear=u,t.setClearColor(c,o),ge.overrideMaterial=null,ge.clear()}return{positionTexture:a.texture,normalTexture:s.texture,dispose:()=>{a.dispose(),s.dispose()}}}class an extends d.ShaderMaterial{constructor(e){const r=new me.MeshBVHUniformStruct;r.updateFrom(e.bvh);const n=Math.max(1,Math.min(256,e.casts|0));super({transparent:!0,glslVersion:d.GLSL3,depthTest:!1,depthWrite:!1,uniforms:{bvh:{value:r},positions:{value:e.positions},normals:{value:e.normals},albedoTex:{value:e.albedoTex},emissiveTex:{value:e.emissiveTex},materialTextureSize:{value:e.materialTextureSize},invModelMatrix:{value:e.invModelMatrix},bounces:{value:e.bounces},lightsTex:{value:e.lightsTex},lightCount:{value:e.lightCount},skyColor:{value:e.skyColor},skyIntensity:{value:e.skyIntensity},opacity:{value:1},sampleIndex:{value:0},directLightEnabled:{value:e.directLightEnabled},indirectLightEnabled:{value:e.indirectLightEnabled}},vertexShader:`
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
                ${me.shaderStructs}
                ${me.shaderIntersectFunction}

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
            `}),this.programKey="LightmapperMaterial|glsl3|mrt2",this.programKey=`LightmapperMaterial|glsl3|mrt2|casts=${n}`}customProgramCacheKey(){return this.programKey}}const sn={point:0,directional:1,spot:2,area:3},qe=4;function ur(t){const e=[];return t.traverse(r=>{var n;if(!!r.visible&&!((n=r.userData)!=null&&n.lightmapIgnore)){if(r instanceof d.PointLight)e.push({type:"point",position:r.getWorldPosition(new d.Vector3),direction:new d.Vector3(0,-1,0),color:r.color.clone().multiplyScalar(r.intensity),params:[0,0,0,0]});else if(r instanceof d.DirectionalLight){const i=new d.Vector3(0,0,-1).transformDirection(r.matrixWorld).normalize();e.push({type:"directional",position:r.getWorldPosition(new d.Vector3),direction:i,color:r.color.clone().multiplyScalar(r.intensity),params:[0,0,0,0]})}else if(r instanceof d.SpotLight){const i=new d.Vector3(0,0,-1).transformDirection(r.matrixWorld).normalize();e.push({type:"spot",position:r.getWorldPosition(new d.Vector3),direction:i,color:r.color.clone().multiplyScalar(r.intensity),params:[Math.cos(r.angle*(1-r.penumbra)),Math.cos(r.angle),0,0]})}else if(r instanceof d.RectAreaLight){const i=new d.Vector3(0,0,-1).transformDirection(r.matrixWorld).normalize();e.push({type:"area",position:r.getWorldPosition(new d.Vector3),direction:i,color:r.color.clone().multiplyScalar(r.intensity),params:[r.width,r.height,0,0]})}}}),e}function cr(t){const e=Math.max(1,t.length),r=new Float32Array(qe*e*4);for(let i=0;i<t.length;i++){const a=t[i],s=i*qe*4;r[s+0]=a.position.x,r[s+1]=a.position.y,r[s+2]=a.position.z,r[s+3]=sn[a.type],r[s+4]=a.direction.x,r[s+5]=a.direction.y,r[s+6]=a.direction.z,r[s+7]=a.params[0],r[s+8]=a.color.r,r[s+9]=a.color.g,r[s+10]=a.color.b,r[s+11]=a.params[1],r[s+12]=a.params[2],r[s+13]=a.params[3],r[s+14]=0,r[s+15]=0}const n=new d.DataTexture(r,qe,e,d.RGBAFormat,d.FloatType);return n.minFilter=d.NearestFilter,n.magFilter=d.NearestFilter,n.generateMipmaps=!1,n.wrapS=d.ClampToEdgeWrapping,n.wrapT=d.ClampToEdgeWrapping,n.needsUpdate=!0,{texture:n,count:t.length,capacity:e}}function dr(t){t.dispose()}const mr=(t,e,r,n,i)=>{var k,V;const a=cr(i.lights),s=a.texture,l=new an({bvh:n,invModelMatrix:new d.Matrix4().identity(),positions:e,normals:r,albedoTex:i.albedoTexture,emissiveTex:i.emissiveTexture,materialTextureSize:i.materialTextureSize,casts:i.casts,bounces:(k=i.bounces)!=null?k:1,lightsTex:s,lightCount:a.count,skyColor:i.skyColor,skyIntensity:i.skyIntensity,opacity:1,sampleIndex:0,directLightEnabled:i.directLightEnabled,indirectLightEnabled:i.indirectLightEnabled}),u=new d.WebGLMultipleRenderTargets(i.resolution,i.resolution,2,{type:d.FloatType,minFilter:d.LinearFilter,magFilter:d.LinearFilter,generateMipmaps:!1}),c=t.getRenderTarget(),o=new d.Color;t.getClearColor(o);const f=t.getClearAlpha();t.setRenderTarget(u),t.setClearColor(0,0),t.clear(),t.setRenderTarget(c),t.setClearColor(o,f);const m=new d.Mesh(new d.PlaneGeometry(2,2),l),h=new d.OrthographicCamera;let p=0;const g=i.targetSamples|0,b=i.resolution;let v=Math.max(1,Math.min(b,(V=i.tileSize)!=null?V:b)),x=null,y=0;const T=O=>{const N=Math.ceil(b/O);return{tilesX:N,tilesY:N,count:N*N}};let w=T(v);const E=l.uniforms.sampleIndex,S=l.uniforms.opacity;if(!E||!S)throw new Error("[baker] LightmapperMaterial missing required uniforms");const M=()=>{const O=performance.now(),N=t.autoClear,_=t.getRenderTarget(),K=t.getScissorTest();try{if(t.autoClear=!1,t.setRenderTarget(u),E.value=p,S.value=1/(p+1),v>=b)t.setScissorTest(!1),t.render(m,h);else{const q=y%w.tilesX,W=y/w.tilesX|0,re=q*v,ee=W*v,te=Math.min(v,b-re),X=Math.min(v,b-ee);t.setScissor(re,ee,te,X),t.setScissorTest(!0),t.render(m,h)}}finally{t.setScissorTest(K),t.setRenderTarget(_),t.autoClear=N}y++;let $=!1;return y>=w.count&&(y=0,p++,$=!0,x!==null&&(v=x,w=T(v),x=null)),{ms:performance.now()-O,sampleCompleted:$}},R=()=>{if(g>0&&p>=g)return{samples:p,done:!0,sampleComplete:!0,lastDrawMs:0};let O=0;for(;;){const N=M();if(O=N.ms,N.sampleCompleted)break}return{samples:p,done:g>0&&p>=g,sampleComplete:!0,lastDrawMs:O}},L=O=>{if(g>0&&p>=g)return{samples:p,done:!0,sampleComplete:!0,lastDrawMs:0};const N=performance.now()+Math.max(0,O);let _=0,K=!1;do{const $=M();if(_=$.ms,$.sampleCompleted&&(K=!0,g>0&&p>=g))break}while(performance.now()<N);return{samples:p,done:g>0&&p>=g,sampleComplete:K,lastDrawMs:_}},U=O=>{const N=Math.max(1,Math.min(b,O|0));N===v&&x===null||(y===0?(v=N,w=T(v),x=null):x=N)},A=()=>{p=0,y=0},I=()=>{dr(s),u.dispose(),l.dispose(),m.geometry.dispose()},[C,F]=u.texture;if(!C||!F)throw new Error("[baker] WebGLMultipleRenderTargets did not allocate 2 textures");return{renderTarget:u,textures:{direct:C,indirect:F},render:R,renderTiled:L,setTileSize:U,reset:A,dispose:I}};class on extends d.ShaderMaterial{customProgramCacheKey(){return"AOMaterial|glsl3|single-out"}constructor(e){const r=new me.MeshBVHUniformStruct;r.updateFrom(e.bvh),super({transparent:!0,glslVersion:d.GLSL3,depthTest:!1,depthWrite:!1,uniforms:{bvh:{value:r},positions:{value:e.positions},normals:{value:e.normals},invModelMatrix:{value:e.invModelMatrix},aoSamples:{value:e.aoSamples},ambientDistance:{value:e.ambientDistance},opacity:{value:e.opacity},sampleIndex:{value:e.sampleIndex}},vertexShader:`
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
                ${me.shaderStructs}
                ${me.shaderIntersectFunction}

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
            `})}}const lt=(t,e,r,n,i)=>{var A;const a=new on({bvh:n,invModelMatrix:new d.Matrix4().identity(),positions:e,normals:r,aoSamples:i.aoSamples,ambientDistance:i.ambientDistance,opacity:1,sampleIndex:0}),s=new d.WebGLRenderTarget(i.resolution,i.resolution,{type:d.FloatType,minFilter:d.LinearFilter,magFilter:d.LinearFilter,generateMipmaps:!1}),l=t.getRenderTarget(),u=new d.Color;t.getClearColor(u);const c=t.getClearAlpha();t.setRenderTarget(s),t.setClearColor(0,0),t.clear(),t.setRenderTarget(l),t.setClearColor(u,c);const o=new d.Mesh(new d.PlaneGeometry(2,2),a),f=new d.OrthographicCamera;let m=0;const h=i.targetSamples|0,p=i.resolution;let g=Math.max(1,Math.min(p,(A=i.tileSize)!=null?A:p)),b=null,v=0;const x=I=>{const C=Math.ceil(p/I);return{tilesX:C,tilesY:C,count:C*C}};let y=x(g);const T=a.uniforms.sampleIndex,w=a.uniforms.opacity;if(!T||!w)throw new Error("[baker] AOMaterial missing required uniforms");const E=()=>{const I=performance.now(),C=t.autoClear,F=t.getRenderTarget(),D=t.getScissorTest();try{if(t.autoClear=!1,t.setRenderTarget(s),T.value=m,w.value=1/(m+1),g>=p)t.setScissorTest(!1),t.render(o,f);else{const V=v%y.tilesX,O=v/y.tilesX|0,N=V*g,_=O*g,K=Math.min(g,p-N),$=Math.min(g,p-_);t.setScissor(N,_,K,$),t.setScissorTest(!0),t.render(o,f)}}finally{t.setScissorTest(D),t.setRenderTarget(F),t.autoClear=C}v++;let k=!1;return v>=y.count&&(v=0,m++,k=!0,b!==null&&(g=b,y=x(g),b=null)),{ms:performance.now()-I,sampleCompleted:k}},S=()=>{if(h>0&&m>=h)return{samples:m,done:!0,sampleComplete:!0,lastDrawMs:0};let I=0;for(;;){const C=E();if(I=C.ms,C.sampleCompleted)break}return{samples:m,done:h>0&&m>=h,sampleComplete:!0,lastDrawMs:I}},M=I=>{if(h>0&&m>=h)return{samples:m,done:!0,sampleComplete:!0,lastDrawMs:0};const C=performance.now()+Math.max(0,I);let F=0,D=!1;do{const k=E();if(F=k.ms,k.sampleCompleted&&(D=!0,h>0&&m>=h))break}while(performance.now()<C);return{samples:m,done:h>0&&m>=h,sampleComplete:D,lastDrawMs:F}},R=I=>{const C=Math.max(1,Math.min(p,I|0));C===g&&b===null||(v===0?(g=C,y=x(g),b=null):b=C)},L=()=>{m=0,v=0},U=()=>{s.dispose(),a.dispose(),o.geometry.dispose()};return{texture:s.texture,render:S,renderTiled:M,setTileSize:R,reset:L,dispose:U}};class ln extends d.ShaderMaterial{customProgramCacheKey(){return"CompositeMaterial|glsl3|single-out"}constructor(e){super({glslVersion:d.GLSL3,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{directTex:{value:e.directTex},indirectTex:{value:e.indirectTex},aoTex:{value:e.aoTex},directIntensity:{value:e.directIntensity},giIntensity:{value:e.giIntensity},aoEnabled:{value:e.aoEnabled},aoIntensity:{value:e.aoIntensity},aoExponent:{value:e.aoExponent}},vertexShader:`
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
            `})}}const fr=(t,e,r,n)=>{const i=new d.WebGLRenderTarget(r,r,{type:d.HalfFloatType,minFilter:d.LinearFilter,magFilter:d.LinearFilter,generateMipmaps:!1}),a=new ln({directTex:e.direct,indirectTex:e.indirect,aoTex:e.ao,directIntensity:n.directIntensity,giIntensity:n.giIntensity,aoEnabled:n.aoEnabled,aoIntensity:n.aoIntensity,aoExponent:n.aoExponent}),s=new d.Mesh(new d.PlaneGeometry(2,2),a),l=new d.OrthographicCamera,u=a.uniforms,c=o=>{(o==null?void 0:o.directIntensity)!==void 0&&u.directIntensity&&(u.directIntensity.value=o.directIntensity),(o==null?void 0:o.giIntensity)!==void 0&&u.giIntensity&&(u.giIntensity.value=o.giIntensity),(o==null?void 0:o.aoEnabled)!==void 0&&u.aoEnabled&&(u.aoEnabled.value=o.aoEnabled),(o==null?void 0:o.aoIntensity)!==void 0&&u.aoIntensity&&(u.aoIntensity.value=o.aoIntensity),(o==null?void 0:o.aoExponent)!==void 0&&u.aoExponent&&(u.aoExponent.value=o.aoExponent),(o==null?void 0:o.aoTex)!==void 0&&u.aoTex&&(u.aoTex.value=o.aoTex);const f=t.getRenderTarget(),m=t.autoClear;try{t.autoClear=!0,t.setRenderTarget(i),t.render(s,l)}finally{t.setRenderTarget(f),t.autoClear=m}};return c(),{texture:i.texture,refresh:c,dispose:()=>{i.dispose(),a.dispose(),s.geometry.dispose()}}};class un extends d.ShaderMaterial{customProgramCacheKey(){return"DilationMaterial|glsl3|single-out"}constructor(e={}){var r,n,i;super({glslVersion:d.GLSL3,blending:d.NoBlending,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{map:{value:(r=e.map)!=null?r:null},positions:{value:(n=e.positions)!=null?n:null},resolution:{value:(i=e.resolution)!=null?i:1024},useSourceAlpha:{value:!1}},vertexShader:`
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
            `})}}class cn extends d.ShaderMaterial{customProgramCacheKey(){return"DenoiseMaterial|glsl1|single-out"}constructor(e){var r,n,i;super({blending:d.NoBlending,transparent:!1,depthWrite:!1,depthTest:!1,defines:{USE_SLIDER:0},uniforms:{sigma:{value:(r=e.sigma)!=null?r:5},threshold:{value:(n=e.threshold)!=null?n:.03},kSigma:{value:(i=e.kSigma)!=null?i:1},map:{value:e.map}},vertexShader:`
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
			`})}}const Ut=new d.Mesh(new d.PlaneGeometry(2,2)),dn=new d.OrthographicCamera,ut=async(t,e,r,n,i,a)=>{var T,w,E;const s=()=>new d.WebGLRenderTarget(n,n,{type:d.FloatType,minFilter:d.LinearFilter,magFilter:d.LinearFilter,generateMipmaps:!1}),l=s(),u=s(),c=(S,M)=>{const R=t.getRenderTarget();try{Ut.material=S,t.setRenderTarget(M),t.render(Ut,dn)}finally{t.setRenderTarget(R)}},o=new un({positions:r,resolution:n});let f=l,m=u,h=e;const p=Math.max(0,i.dilationIterations)+(i.denoiseEnabled?1:0);let g=0;const b=o.uniforms.map;if(!b)throw new Error("[baker] DilationMaterial missing `map` uniform");const v=o.uniforms.useSourceAlpha;if(!v)throw new Error("[baker] DilationMaterial missing `useSourceAlpha` uniform");for(let S=0;S<Math.max(0,i.dilationIterations);S++){b.value=h,v.value=S>0,c(o,m),h=m.texture;const M=f;f=m,m=M,g++,a==null||a(g/p),await new Promise(R=>requestAnimationFrame(R))}if(i.denoiseEnabled){const S=new cn({map:h,sigma:i.denoiseSigma,threshold:i.denoiseThreshold,kSigma:i.denoiseKSigma});c(S,m),h=m.texture,S.dispose();const M=f;f=m,m=M,g++,a==null||a(g/p),await new Promise(R=>requestAnimationFrame(R))}o.dispose();const x=i.dilationIterations>0||i.denoiseEnabled,y=x?f.texture:e;if(x){const S=Math.max(0,Math.floor(n/2)-2),M=new Float32Array(4*4*4);t.readRenderTargetPixels(f,S,S,4,4,M);let R=0,L=0,U=0;for(let A=0;A<16;A++)R+=(T=M[A*4])!=null?T:0,L+=(w=M[A*4+1])!=null?w:0,U+=(E=M[A*4+2])!=null?E:0}return{texture:y,dispose:()=>{l.dispose(),u.dispose()}}};function mn(t,e=!1){const r=t[0].index!==null,n=new Set(Object.keys(t[0].attributes)),i=new Set(Object.keys(t[0].morphAttributes)),a={},s={},l=t[0].morphTargetsRelative,u=new d.BufferGeometry;let c=0;for(let o=0;o<t.length;++o){const f=t[o];let m=0;if(r!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+o+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in f.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+o+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;a[h]===void 0&&(a[h]=[]),a[h].push(f.attributes[h]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+o+". Make sure all geometries have the same number of attributes."),null;if(l!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+o+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in f.morphAttributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+o+".  .morphAttributes must be consistent throughout all geometries."),null;s[h]===void 0&&(s[h]=[]),s[h].push(f.morphAttributes[h])}if(e){let h;if(r)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+o+". The geometry must have either an index or a position attribute"),null;u.addGroup(c,h,o),c+=h}}if(r){let o=0;const f=[];for(let m=0;m<t.length;++m){const h=t[m].index;for(let p=0;p<h.count;++p)f.push(h.getX(p)+o);o+=t[m].attributes.position.count}u.setIndex(f)}for(const o in a){const f=Ot(a[o]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+o+" attribute."),null;u.setAttribute(o,f)}for(const o in s){const f=s[o][0].length;if(f===0)break;u.morphAttributes=u.morphAttributes||{},u.morphAttributes[o]=[];for(let m=0;m<f;++m){const h=[];for(let g=0;g<s[o].length;++g)h.push(s[o][g][m]);const p=Ot(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+o+" morphAttribute."),null;u.morphAttributes[o].push(p)}}return u}function Ot(t){let e,r,n,i=-1,a=0;for(let c=0;c<t.length;++c){const o=t[c];if(e===void 0&&(e=o.array.constructor),e!==o.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(r===void 0&&(r=o.itemSize),r!==o.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=o.normalized),n!==o.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=o.gpuType),i!==o.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=o.count*r}const s=new e(a),l=new d.BufferAttribute(s,r,n);let u=0;for(let c=0;c<t.length;++c){const o=t[c];if(o.isInterleavedBufferAttribute){const f=u/r;for(let m=0,h=o.count;m<h;m++)for(let p=0;p<r;p++){const g=o.getComponent(m,p);l.setComponent(m+f,p,g)}}else s.set(o.array,u);u+=o.count*r}return i!==void 0&&(l.gpuType=i),l}function fn(t,e=1e-4){e=Math.max(e,Number.EPSILON);const r={},n=t.getIndex(),i=t.getAttribute("position"),a=n?n.count:i.count;let s=0;const l=Object.keys(t.attributes),u={},c={},o=[],f=["getX","getY","getZ","getW"],m=["setX","setY","setZ","setW"];for(let x=0,y=l.length;x<y;x++){const T=l[x],w=t.attributes[T];u[T]=new d.BufferAttribute(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized);const E=t.morphAttributes[T];E&&(c[T]=new d.BufferAttribute(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized))}const h=e*.5,p=Math.log10(1/e),g=Math.pow(10,p),b=h*g;for(let x=0;x<a;x++){const y=n?n.getX(x):x;let T="";for(let w=0,E=l.length;w<E;w++){const S=l[w],M=t.getAttribute(S),R=M.itemSize;for(let L=0;L<R;L++)T+=`${~~(M[f[L]](y)*g+b)},`}if(T in r)o.push(r[T]);else{for(let w=0,E=l.length;w<E;w++){const S=l[w],M=t.getAttribute(S),R=t.morphAttributes[S],L=M.itemSize,U=u[S],A=c[S];for(let I=0;I<L;I++){const C=f[I],F=m[I];if(U[F](s,M[C](y)),R)for(let D=0,k=R.length;D<k;D++)A[D][F](s,R[D][C](y))}}r[T]=s,o.push(s),s++}}const v=t.clone();for(const x in t.attributes){const y=u[x];if(v.setAttribute(x,new d.BufferAttribute(y.array.slice(0,s*y.itemSize),y.itemSize,y.normalized)),x in c)for(let T=0;T<c[x].length;T++){const w=c[x][T];v.morphAttributes[x][T]=new d.BufferAttribute(w.array.slice(0,s*w.itemSize),w.itemSize,w.normalized)}}return v.setIndex(o),v}class P extends Error{constructor(e,r,n){super(`[baker:${r}] ${e}${n?` (mesh: ${n})`:""}`),this.name="BakeError",this.phase=r,this.meshName=n}}const hn=new Set(["position","normal","uv","uv2","meshIndex"]),hr=t=>{const e=t.map((n,i)=>{let a=n.geometry.clone();for(const c of Object.keys(a.attributes))hn.has(c)||a.deleteAttribute(c);a.applyMatrix4(n.matrixWorld),a.index||(a=fn(a));const s=a.attributes.position;if(!s)throw new P("mesh geometry has no position attribute","geometry",n.name);const l=s.count,u=new Float32Array(l);return u.fill(i),a.setAttribute("meshIndex",new d.BufferAttribute(u,1)),a}),r=mn(e);if(!r){const n=t.map((i,a)=>i.name||`<unnamed#${a}>`).join(", ");throw new P(`mergeGeometries returned null - incompatible attribute sets across meshes [${n}]`,"geometry")}return r},pn=t=>{const e=t.geometry;if(e.index)return e.index.count/3;const r=e.attributes.position;if(!r)throw new P("mesh geometry missing position attribute","geometry",t.name);return r.count/3},Je={aR:1,aG:1,aB:1,eR:0,eG:0,eB:0},pr=t=>{var r;if(Array.isArray(t)){console.warn("[baker] material array detected; using slot 0 only - per-face material groups not yet supported");const n=t[0];return n?pr(n):Je}const e=t;if("emissive"in e&&e.emissive){const n=(r=e.emissiveIntensity)!=null?r:1;return{aR:e.color.r,aG:e.color.g,aB:e.color.b,eR:e.emissive.r*n,eG:e.emissive.g*n,eB:e.emissive.b*n}}return"color"in e&&e.color?{aR:e.color.r,aG:e.color.g,aB:e.color.b,eR:0,eG:0,eB:0}:(console.warn("[baker] material has no .color (likely ShaderMaterial); defaulting to white albedo"),Je)},gr=(t,e)=>{var f,m,h;const r=t.index;if(!r)throw new P("mergeGeometry must produce an indexed geometry; got non-indexed","geometry");const n=t.attributes.meshIndex;if(!n)throw new P("merged geometry is missing 'meshIndex' attribute - did mergeGeometry skip the per-vertex tag?","geometry");const i=e.map(pn),a=r.count/3,s=new Float32Array(a*3),l=new Float32Array(a*3),u=e.map(p=>pr(p.material)),c=r.array,o=n.array;for(let p=0;p<a;p++){const g=(f=c[p*3])!=null?f:0,b=((m=o[g])!=null?m:0)|0,v=(h=u[b])!=null?h:Je,x=p*3;s[x]=v.aR,s[x+1]=v.aG,s[x+2]=v.aB,l[x]=v.eR,l[x+1]=v.eG,l[x+2]=v.eB}return{albedo:s,emissive:l,totalTriangles:a,perMeshTriangleCounts:i}},Bt=(t,e)=>{const r=new d.DataTexture(t,e,e,d.RGBAFormat,d.FloatType);return r.minFilter=d.NearestFilter,r.magFilter=d.NearestFilter,r.wrapS=d.ClampToEdgeWrapping,r.wrapT=d.ClampToEdgeWrapping,r.generateMipmaps=!1,r.needsUpdate=!0,r},vr=t=>{var s,l,u,c,o,f;const e=t.totalTriangles,r=Math.max(1,Math.ceil(Math.sqrt(e))),n=r*r,i=new Float32Array(n*4),a=new Float32Array(n*4);for(let m=0;m<e;m++){const h=m*3,p=m*4;i[p]=(s=t.albedo[h])!=null?s:0,i[p+1]=(l=t.albedo[h+1])!=null?l:0,i[p+2]=(u=t.albedo[h+2])!=null?u:0,i[p+3]=1,a[p]=(c=t.emissive[h])!=null?c:0,a[p+1]=(o=t.emissive[h+1])!=null?o:0,a[p+2]=(f=t.emissive[h+2])!=null?f:0,a[p+3]=1}return{albedoTexture:Bt(i,r),emissiveTexture:Bt(a,r),side:r}};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var _t=function(t){return URL.createObjectURL(new Blob([t],{type:"text/javascript"}))};try{URL.revokeObjectURL(_t(""))}catch{_t=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var ie=Uint8Array,Z=Uint16Array,Ae=Uint32Array,ct=new ie([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),dt=new ie([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Gt=new ie([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),xr=function(t,e){for(var r=new Z(31),n=0;n<31;++n)r[n]=e+=1<<t[n-1];for(var i=new Ae(r[30]),n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)i[a]=a-r[n]<<5|n;return[r,i]},br=xr(ct,2),gn=br[0],et=br[1];gn[28]=258,et[258]=28;var vn=xr(dt,0),Vt=vn[1],tt=new Z(32768);for(var B=0;B<32768;++B){var oe=(B&43690)>>>1|(B&21845)<<1;oe=(oe&52428)>>>2|(oe&13107)<<2,oe=(oe&61680)>>>4|(oe&3855)<<4,tt[B]=((oe&65280)>>>8|(oe&255)<<8)>>>1}var Ce=function(t,e,r){for(var n=t.length,i=0,a=new Z(e);i<n;++i)++a[t[i]-1];var s=new Z(e);for(i=0;i<e;++i)s[i]=s[i-1]+a[i-1]<<1;var l;if(r){l=new Z(1<<e);var u=15-e;for(i=0;i<n;++i)if(t[i])for(var c=i<<4|t[i],o=e-t[i],f=s[t[i]-1]++<<o,m=f|(1<<o)-1;f<=m;++f)l[tt[f]>>>u]=c}else for(l=new Z(n),i=0;i<n;++i)t[i]&&(l[i]=tt[s[t[i]-1]++]>>>15-t[i]);return l},fe=new ie(288);for(var B=0;B<144;++B)fe[B]=8;for(var B=144;B<256;++B)fe[B]=9;for(var B=256;B<280;++B)fe[B]=7;for(var B=280;B<288;++B)fe[B]=8;var _e=new ie(32);for(var B=0;B<32;++B)_e[B]=5;var xn=Ce(fe,9,0),bn=Ce(_e,5,0),yr=function(t){return(t/8|0)+(t&7&&1)},yn=function(t,e,r){(e==null||e<0)&&(e=0),(r==null||r>t.length)&&(r=t.length);var n=new(t instanceof Z?Z:t instanceof Ae?Ae:ie)(r-e);return n.set(t.subarray(e,r)),n},ae=function(t,e,r){r<<=e&7;var n=e/8|0;t[n]|=r,t[n+1]|=r>>>8},Te=function(t,e,r){r<<=e&7;var n=e/8|0;t[n]|=r,t[n+1]|=r>>>8,t[n+2]|=r>>>16},Ke=function(t,e){for(var r=[],n=0;n<t.length;++n)t[n]&&r.push({s:n,f:t[n]});var i=r.length,a=r.slice();if(!i)return[mt,0];if(i==1){var s=new ie(r[0].s+1);return s[r[0].s]=1,[s,1]}r.sort(function(w,E){return w.f-E.f}),r.push({s:-1,f:25001});var l=r[0],u=r[1],c=0,o=1,f=2;for(r[0]={s:-1,f:l.f+u.f,l,r:u};o!=i-1;)l=r[r[c].f<r[f].f?c++:f++],u=r[c!=o&&r[c].f<r[f].f?c++:f++],r[o++]={s:-1,f:l.f+u.f,l,r:u};for(var m=a[0].s,n=1;n<i;++n)a[n].s>m&&(m=a[n].s);var h=new Z(m+1),p=rt(r[o-1],h,0);if(p>e){var n=0,g=0,b=p-e,v=1<<b;for(a.sort(function(E,S){return h[S.s]-h[E.s]||E.f-S.f});n<i;++n){var x=a[n].s;if(h[x]>e)g+=v-(1<<p-h[x]),h[x]=e;else break}for(g>>>=b;g>0;){var y=a[n].s;h[y]<e?g-=1<<e-h[y]++-1:++n}for(;n>=0&&g;--n){var T=a[n].s;h[T]==e&&(--h[T],++g)}p=e}return[new ie(h),p]},rt=function(t,e,r){return t.s==-1?Math.max(rt(t.l,e,r+1),rt(t.r,e,r+1)):e[t.s]=r},Wt=function(t){for(var e=t.length;e&&!t[--e];);for(var r=new Z(++e),n=0,i=t[0],a=1,s=function(u){r[n++]=u},l=1;l<=e;++l)if(t[l]==i&&l!=e)++a;else{if(!i&&a>2){for(;a>138;a-=138)s(32754);a>2&&(s(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(s(i),--a;a>6;a-=6)s(8304);a>2&&(s(a-3<<5|8208),a=0)}for(;a--;)s(i);a=1,i=t[l]}return[r.subarray(0,n),e]},Se=function(t,e){for(var r=0,n=0;n<e.length;++n)r+=t[n]*e[n];return r},Be=function(t,e,r){var n=r.length,i=yr(e+2);t[i]=n&255,t[i+1]=n>>>8,t[i+2]=t[i]^255,t[i+3]=t[i+1]^255;for(var a=0;a<n;++a)t[i+a+4]=r[a];return(i+4+n)*8},$t=function(t,e,r,n,i,a,s,l,u,c,o){ae(e,o++,r),++i[256];for(var f=Ke(i,15),m=f[0],h=f[1],p=Ke(a,15),g=p[0],b=p[1],v=Wt(m),x=v[0],y=v[1],T=Wt(g),w=T[0],E=T[1],S=new Z(19),M=0;M<x.length;++M)S[x[M]&31]++;for(var M=0;M<w.length;++M)S[w[M]&31]++;for(var R=Ke(S,7),L=R[0],U=R[1],A=19;A>4&&!L[Gt[A-1]];--A);var I=c+5<<3,C=Se(i,fe)+Se(a,_e)+s,F=Se(i,m)+Se(a,g)+s+14+3*A+Se(S,L)+(2*S[16]+3*S[17]+7*S[18]);if(I<=C&&I<=F)return Be(e,o,t.subarray(u,u+c));var D,k,V,O;if(ae(e,o,1+(F<C)),o+=2,F<C){D=Ce(m,h,0),k=m,V=Ce(g,b,0),O=g;var N=Ce(L,U,0);ae(e,o,y-257),ae(e,o+5,E-1),ae(e,o+10,A-4),o+=14;for(var M=0;M<A;++M)ae(e,o+3*M,L[Gt[M]]);o+=3*A;for(var _=[x,w],K=0;K<2;++K)for(var $=_[K],M=0;M<$.length;++M){var q=$[M]&31;ae(e,o,N[q]),o+=L[q],q>15&&(ae(e,o,$[M]>>>5&127),o+=$[M]>>>12)}}else D=xn,k=fe,V=bn,O=_e;for(var M=0;M<l;++M)if(n[M]>255){var q=n[M]>>>18&31;Te(e,o,D[q+257]),o+=k[q+257],q>7&&(ae(e,o,n[M]>>>23&31),o+=ct[q]);var W=n[M]&31;Te(e,o,V[W]),o+=O[W],W>3&&(Te(e,o,n[M]>>>5&8191),o+=dt[W])}else Te(e,o,D[n[M]]),o+=k[n[M]];return Te(e,o,D[256]),o+k[256]},wn=new Ae([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),mt=new ie(0),Mn=function(t,e,r,n,i,a){var s=t.length,l=new ie(n+s+5*(1+Math.ceil(s/7e3))+i),u=l.subarray(n,l.length-i),c=0;if(!e||s<8)for(var o=0;o<=s;o+=65535){var f=o+65535;f<s?c=Be(u,c,t.subarray(o,f)):(u[o]=a,c=Be(u,c,t.subarray(o,s)))}else{for(var m=wn[e-1],h=m>>>13,p=m&8191,g=(1<<r)-1,b=new Z(32768),v=new Z(g+1),x=Math.ceil(r/3),y=2*x,T=function(se){return(t[se]^t[se+1]<<x^t[se+2]<<y)&g},w=new Ae(25e3),E=new Z(288),S=new Z(32),M=0,R=0,o=0,L=0,U=0,A=0;o<s;++o){var I=T(o),C=o&32767,F=v[I];if(b[C]=F,v[I]=C,U<=o){var D=s-o;if((M>7e3||L>24576)&&D>423){c=$t(t,u,0,w,E,S,R,L,A,o-A,c),L=M=R=0,A=o;for(var k=0;k<286;++k)E[k]=0;for(var k=0;k<30;++k)S[k]=0}var V=2,O=0,N=p,_=C-F&32767;if(D>2&&I==T(o-_))for(var K=Math.min(h,D)-1,$=Math.min(32767,o),q=Math.min(258,D);_<=$&&--N&&C!=F;){if(t[o+V]==t[o+V-_]){for(var W=0;W<q&&t[o+W]==t[o+W-_];++W);if(W>V){if(V=W,O=_,W>K)break;for(var re=Math.min(_,W-2),ee=0,k=0;k<re;++k){var te=o-_+k+32768&32767,X=b[te],j=te-X+32768&32767;j>ee&&(ee=j,F=te)}}}C=F,F=b[C],_+=C-F+32768&32767}if(O){w[L++]=268435456|et[V]<<18|Vt[O];var J=et[V]&31,ue=Vt[O]&31;R+=ct[J]+dt[ue],++E[257+J],++S[ue],U=o+V,++M}else w[L++]=t[o],++E[t[o]]}}c=$t(t,u,a,w,E,S,R,L,A,o-A,c),!a&&c&7&&(c=Be(u,c+1,mt))}return yn(l,0,n+yr(c)+i)},Tn=function(){var t=1,e=0;return{p:function(r){for(var n=t,i=e,a=r.length,s=0;s!=a;){for(var l=Math.min(s+2655,a);s<l;++s)i+=n+=r[s];n=(n&65535)+15*(n>>16),i=(i&65535)+15*(i>>16)}t=n,e=i},d:function(){return t%=65521,e%=65521,(t&255)<<24|t>>>8<<16|(e&255)<<8|e>>>8}}},Sn=function(t,e,r,n,i){return Mn(t,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):12+e.mem,r,n,!i)},En=function(t,e,r){for(;r;++e)t[e]=r,r>>>=8},Cn=function(t,e){var r=e.level,n=r==0?0:r<6?1:r==9?3:2;t[0]=120,t[1]=n<<6|(n?32-2*n:1)};function An(t,e){e||(e={});var r=Tn();r.p(t);var n=Sn(t,e,2,4);return Cn(n,e),En(n,n.length-4,r.d()),n}var Rn=typeof TextDecoder!="undefined"&&new TextDecoder,In=0;try{Rn.decode(mt,{stream:!0}),In=1}catch{}const Ln=new TextEncoder,wr=3;class Pn{parse(e,r,n){if(!e||!(e.isWebGLRenderer||e.isDataTexture))throw Error("EXRExporter.parse: Unsupported first parameter, expected instance of WebGLRenderer or DataTexture.");if(e.isWebGLRenderer){const i=e,a=r,s=n;Fn(a);const l=kn(a,s),u=Nn(i,a,l),c=Ht(u,l),o=Xt(c,l);return qt(o,l)}else if(e.isDataTexture){const i=e,a=r;zn(i);const s=Dn(i,a),l=i.image.data,u=Ht(l,s),c=Xt(u,s);return qt(c,s)}}}function Fn(t){if(!t||!t.isWebGLRenderTarget)throw Error("EXRExporter.parse: Unsupported second parameter, expected instance of WebGLRenderTarget.");if(t.isWebGLCubeRenderTarget||t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)throw Error("EXRExporter.parse: Unsupported render target type, expected instance of WebGLRenderTarget.");if(t.texture.type!==d.FloatType&&t.texture.type!==d.HalfFloatType)throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture type.");if(t.texture.format!==d.RGBAFormat)throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture format, expected RGBAFormat.")}function zn(t){if(t.type!==d.FloatType&&t.type!==d.HalfFloatType)throw Error("EXRExporter.parse: Unsupported DataTexture texture type.");if(t.format!==d.RGBAFormat)throw Error("EXRExporter.parse: Unsupported DataTexture texture format, expected RGBAFormat.");if(!t.image.data)throw Error("EXRExporter.parse: Invalid DataTexture image data.");if(t.type===d.FloatType&&t.image.data.constructor.name!=="Float32Array")throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Float32Array'.");if(t.type===d.HalfFloatType&&t.image.data.constructor.name!=="Uint16Array")throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Uint16Array'.")}function kn(t,e={}){const r={0:1,2:1,3:16},n=t.width,i=t.height,a=t.texture.type,s=t.texture.format,l=e.compression!==void 0?e.compression:wr,u=e.type!==void 0?e.type:d.HalfFloatType,c=u===d.FloatType?2:1,o=r[l],f=4;return{width:n,height:i,type:a,format:s,compression:l,blockLines:o,dataType:c,dataSize:2*c,numBlocks:Math.ceil(i/o),numInputChannels:4,numOutputChannels:f}}function Dn(t,e={}){const r={0:1,2:1,3:16},n=t.image.width,i=t.image.height,a=t.type,s=t.format,l=e.compression!==void 0?e.compression:wr,u=e.type!==void 0?e.type:d.HalfFloatType,c=u===d.FloatType?2:1,o=r[l],f=4;return{width:n,height:i,type:a,format:s,compression:l,blockLines:o,dataType:c,dataSize:2*c,numBlocks:Math.ceil(i/o),numInputChannels:4,numOutputChannels:f}}function Nn(t,e,r){let n;return r.type===d.FloatType?n=new Float32Array(r.width*r.height*r.numInputChannels):n=new Uint16Array(r.width*r.height*r.numInputChannels),t.readRenderTargetPixels(e,0,0,r.width,r.height,n),n}function Ht(t,e){const r=e.width,n=e.height,i={r:0,g:0,b:0,a:0},a={value:0},s=e.numOutputChannels==4?1:0,l=e.type==d.FloatType?Hn:$n,u=e.dataType==1?Gn:nt,c=new Uint8Array(e.width*e.height*e.numOutputChannels*e.dataSize),o=new DataView(c.buffer);for(let f=0;f<n;++f)for(let m=0;m<r;++m){const h=f*r*4+m*4,p=l(t,h),g=l(t,h+1),b=l(t,h+2),v=l(t,h+3),x=(n-f-1)*r*(3+s)*e.dataSize;_n(i,p,g,b,v),a.value=x+m*e.dataSize,u(o,i.a,a),a.value=x+s*r*e.dataSize+m*e.dataSize,u(o,i.b,a),a.value=x+(1+s)*r*e.dataSize+m*e.dataSize,u(o,i.g,a),a.value=x+(2+s)*r*e.dataSize+m*e.dataSize,u(o,i.r,a)}return c}function Xt(t,e){let r,n,i=0;const a={data:new Array,totalSize:0},s=e.width*e.numOutputChannels*e.blockLines*e.dataSize;switch(e.compression){case 0:r=Un;break;case 2:case 3:r=On;break}e.compression!==0&&(n=new Uint8Array(s));for(let l=0;l<e.numBlocks;++l){const u=t.subarray(s*l,s*(l+1)),c=r(u,n);i+=c.length,a.data.push({dataChunk:c,size:c.length})}return a.totalSize=i,a}function Un(t){return t}function On(t,e){let r=0,n=Math.floor((t.length+1)/2),i=0;const a=t.length-1;for(;!(i>a||(e[r++]=t[i++],i>a));)e[n++]=t[i++];let s=e[0];for(let u=1;u<e.length;u++){const c=e[u]-s+384;s=e[u],e[u]=c}return An(e)}function Bn(t,e,r){const n={value:0},i=new DataView(t.buffer);z(i,20000630,n),z(i,2,n),H(i,"compression",n),H(i,"compression",n),z(i,1,n),Ee(i,r.compression,n),H(i,"screenWindowCenter",n),H(i,"v2f",n),z(i,8,n),z(i,0,n),z(i,0,n),H(i,"screenWindowWidth",n),H(i,"float",n),z(i,4,n),nt(i,1,n),H(i,"pixelAspectRatio",n),H(i,"float",n),z(i,4,n),nt(i,1,n),H(i,"lineOrder",n),H(i,"lineOrder",n),z(i,1,n),Ee(i,0,n),H(i,"dataWindow",n),H(i,"box2i",n),z(i,16,n),z(i,0,n),z(i,0,n),z(i,r.width-1,n),z(i,r.height-1,n),H(i,"displayWindow",n),H(i,"box2i",n),z(i,16,n),z(i,0,n),z(i,0,n),z(i,r.width-1,n),z(i,r.height-1,n),H(i,"channels",n),H(i,"chlist",n),z(i,r.numOutputChannels*18+1,n),H(i,"A",n),z(i,r.dataType,n),n.value+=4,z(i,1,n),z(i,1,n),H(i,"B",n),z(i,r.dataType,n),n.value+=4,z(i,1,n),z(i,1,n),H(i,"G",n),z(i,r.dataType,n),n.value+=4,z(i,1,n),z(i,1,n),H(i,"R",n),z(i,r.dataType,n),n.value+=4,z(i,1,n),z(i,1,n),Ee(i,0,n),Ee(i,0,n);let a=n.value+r.numBlocks*8;for(let s=0;s<e.data.length;++s)Vn(i,a,n),a+=e.data[s].size+8}function qt(t,e){const r=e.numBlocks*8,n=259+18*e.numOutputChannels,i={value:n+r},a=new Uint8Array(n+r+t.totalSize+e.numBlocks*8),s=new DataView(a.buffer);Bn(a,t,e);for(let l=0;l<t.data.length;++l){const u=t.data[l].dataChunk,c=t.data[l].size;z(s,l*e.blockLines,i),z(s,c,i),a.set(u,i.value),i.value+=c}return a}function _n(t,e,r,n,i){t.r=e,t.g=r,t.b=n,t.a=i}function Ee(t,e,r){t.setUint8(r.value,e),r.value+=1}function z(t,e,r){t.setUint32(r.value,e,!0),r.value+=4}function Gn(t,e,r){t.setUint16(r.value,d.DataUtils.toHalfFloat(e),!0),r.value+=2}function nt(t,e,r){t.setFloat32(r.value,e,!0),r.value+=4}function Vn(t,e,r){t.setBigUint64(r.value,BigInt(e),!0),r.value+=8}function H(t,e,r){const n=Ln.encode(e+"\0");for(let i=0;i<n.length;++i)Ee(t,n[i],r)}function Wn(t){const e=(t&31744)>>10,r=t&1023;return(t>>15?-1:1)*(e?e===31?r?NaN:1/0:Math.pow(2,e-15)*(1+r/1024):6103515625e-14*(r/1024))}function $n(t,e){return Wn(t[e])}function Hn(t,e){return t[e]}const Kt=new d.Mesh(new d.PlaneGeometry(2,2)),Xn=new d.OrthographicCamera,Yt=new d.ShaderMaterial({glslVersion:d.GLSL3,blending:d.NoBlending,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{map:{value:null}},vertexShader:`
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
    `});function ft(t,e,r){const n=new d.WebGLRenderTarget(r,r,{type:d.FloatType,minFilter:d.LinearFilter,magFilter:d.LinearFilter}),i=Yt.uniforms.map;if(!i)throw new Error("[baker] export passthrough material missing `map` uniform");i.value=e,Kt.material=Yt;const a=t.getRenderTarget(),s=t.autoClear;try{t.autoClear=!0,t.setRenderTarget(n),t.render(Kt,Xn)}finally{t.setRenderTarget(a),t.autoClear=s}return n}function ht(t,e){const r=URL.createObjectURL(t),n=document.createElement("a");n.href=r,n.download=e,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(r),0)}const pt=(t,e)=>t.toLowerCase().endsWith(`.${e}`)?t:`${t}.${e}`;async function Mr(t,e,r,n){var c,o,f;const i=ft(t,e,r),a=new Float32Array(r*r*4);t.readRenderTargetPixels(i,0,0,r,r,a),i.dispose();const s=new Uint8ClampedArray(r*r*4);for(let m=0;m<r;m++){const h=(r-1-m)*r*4,p=m*r*4;for(let g=0;g<r;g++){const b=h+g*4,v=p+g*4,x=Math.max((c=a[b])!=null?c:0,0),y=Math.max((o=a[b+1])!=null?o:0,0),T=Math.max((f=a[b+2])!=null?f:0,0);s[v]=Math.pow(x/(1+x),1/2.2)*255,s[v+1]=Math.pow(y/(1+y),1/2.2)*255,s[v+2]=Math.pow(T/(1+T),1/2.2)*255,s[v+3]=255}}const l=document.createElement("canvas");l.width=r,l.height=r;const u=l.getContext("2d");if(!u)throw new Error("exportPNG: 2D context unavailable");u.putImageData(new ImageData(s,r,r),0,0),await new Promise((m,h)=>{l.toBlob(p=>{if(!p){h(new Error("exportPNG: toBlob returned null"));return}ht(p,pt(n,"png")),m()},"image/png")})}function Tr(t,e,r,n){const i=ft(t,e,r),a=new Pn().parse(t,i);i.dispose(),ht(new Blob([a],{type:"image/x-exr"}),pt(n,"exr"))}function Sr(t,e,r,n){const i=ft(t,e,r),a=new Float32Array(r*r*4);t.readRenderTargetPixels(i,0,0,r,r,a),i.dispose(),ht(new Blob([a.buffer],{type:"application/octet-stream"}),pt(n,"bin"))}async function Er(t,e,r,n,i){switch(i){case"png":await Mr(t,e,r,n);return;case"exr":Tr(t,e,r,n);return;case"bin":Sr(t,e,r,n);return}}const ve=22;class qn{constructor(e={}){var r,n,i,a;this.visible=!0,this.collapsed=!1,this.headerEl=null,this.layerLabel="",this.textures=null,this.prevScissor=new d.Vector4,this.prevViewport=new d.Vector4,this.size=(r=e.size)!=null?r:256,this.margin=(n=e.margin)!=null?n:20,this.corner=(i=e.corner)!=null?i:"br",this.mat=new d.ShaderMaterial({glslVersion:d.GLSL3,blending:d.NoBlending,transparent:!1,depthTest:!1,depthWrite:!1,uniforms:{map:{value:null},sRGB:{value:(a=e.sRGB)!=null?a:!0},border:{value:.006}},vertexShader:`
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
            `}),this.scene=new d.Scene,this.cam=new d.OrthographicCamera,this.quad=new d.Mesh(new d.PlaneGeometry(2,2),this.mat),this.quad.frustumCulled=!1,this.scene.add(this.quad)}setTexture(e){this.mat.uniforms.map&&(this.mat.uniforms.map.value=e),this.textures=null}setTextures(e){this.textures=e&&e.length>0?e:null}setSRGB(e){this.mat.uniforms.sRGB&&(this.mat.uniforms.sRGB.value=e)}setSize(e){this.size=e}setMargin(e){this.margin=e}setCorner(e){this.corner=e}setCollapsed(e){this.collapsed=e,this.refreshHeaderText()}setLayerLabel(e){this.layerLabel=e,this.refreshHeaderText()}attachHeader(e=document.body){if(this.headerEl)return;const r=document.createElement("div");Object.assign(r.style,{position:"absolute",boxSizing:"border-box",fontFamily:"monospace",fontSize:"11px",color:"#ddd",backgroundColor:"rgba(0,0,0,0.78)",padding:"4px 8px",cursor:"pointer",userSelect:"none",border:"1px solid #444",borderRadius:"3px",zIndex:"50",display:"none",lineHeight:`${ve-10}px`}),r.addEventListener("click",()=>this.setCollapsed(!this.collapsed)),e.appendChild(r),this.headerEl=r,this.refreshHeaderText()}detachHeader(){var e;(e=this.headerEl)==null||e.remove(),this.headerEl=null}refreshHeaderText(){if(!this.headerEl)return;const e=this.collapsed?"\u25B8":"\u25BE",r=this.layerLabel?` \xB7 ${this.layerLabel}`:"";this.headerEl.innerText=`${e} Atlas Viewer${r}`}positionHeader(e){if(!this.headerEl)return;if(!this.visible){this.headerEl.style.display="none";return}this.headerEl.style.display="block",this.headerEl.style.width=`${this.size}px`;let r=0,n=0;switch(this.corner){case"tl":r=this.margin,n=this.margin+ve;break;case"tr":r=e.width-this.size-this.margin,n=this.margin+ve;break;case"bl":r=this.margin,n=e.height-this.margin-this.size;break;case"br":r=e.width-this.size-this.margin,n=e.height-this.margin-this.size;break}const i=n-ve;this.headerEl.style.left=`${e.left+r}px`,this.headerEl.style.top=`${e.top+i}px`}render(e){var h,p;if(!this.visible){this.positionHeader(e.domElement.getBoundingClientRect());return}if(this.positionHeader(e.domElement.getBoundingClientRect()),this.collapsed)return;const r=this.textures,n=(h=this.mat.uniforms.map)==null?void 0:h.value;if(!r&&!n)return;const i=e.getPixelRatio(),a=e.domElement.width,s=e.domElement.height,l=Math.max(1,Math.floor(this.size*i)),u=Math.max(0,Math.floor(this.margin*i));let c=0,o=0;switch(this.corner){case"tl":c=u,o=s-l-u-Math.floor(ve*i);break;case"tr":c=a-l-u,o=s-l-u-Math.floor(ve*i);break;case"bl":c=u,o=u;break;case"br":c=a-l-u,o=u;break}const f=e.autoClear,m=e.getScissorTest();e.getScissor(this.prevScissor),e.getViewport(this.prevViewport);try{if(e.setScissorTest(!0),e.autoClear=!1,r){const g=r.length,b=Math.ceil(Math.sqrt(g)),v=Math.ceil(g/b),x=Math.max(1,Math.floor(l/Math.max(b,v)));for(let y=0;y<g;y++){const T=y%b,w=Math.floor(y/b),E=c+T*x,S=o+l-(w+1)*x;this.mat.uniforms.map&&(this.mat.uniforms.map.value=(p=r[y])!=null?p:null),e.setScissor(E,S,x,x),e.setViewport(E,S,x,x),e.render(this.scene,this.cam)}}else n&&(e.setScissor(c,o,l,l),e.setViewport(c,o,l,l),e.render(this.scene,this.cam))}finally{e.setScissor(this.prevScissor.x,this.prevScissor.y,this.prevScissor.z,this.prevScissor.w),e.setViewport(this.prevViewport.x,this.prevViewport.y,this.prevViewport.z,this.prevViewport.w),e.setScissorTest(m),e.autoClear=f}}dispose(){this.detachHeader(),this.mat.dispose(),this.quad.geometry.dispose()}}class Kn extends d.ShaderMaterial{constructor(e){super({glslVersion:d.GLSL3,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,side:0,uniforms:{uTexelsPerMeter:{value:e.texelsPerMeter},uLightmapSize:{value:e.lightmapSize}},vertexShader:`
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
            `})}setTexelsPerMeter(e){const r=this.uniforms.uTexelsPerMeter;r&&(r.value=e)}setLightmapSize(e){const r=this.uniforms.uLightmapSize;r&&(r.value=e)}}const Yn=1e-8;class le{constructor(e,r,n){if(e.isEmpty())throw new Error("[baker:probes] probe bounds cannot be empty");const i=[le.validateCount(r[0],"x"),le.validateCount(r[1],"y"),le.validateCount(r[2],"z")],s=i[0]*i[1]*i[2]*3;if(n&&n.length!==s)throw new Error(`[baker:probes] irradiance length ${n.length} does not match ${s}`);this.bounds=e.clone(),this.counts=i;const l=this.bounds.getSize(new d.Vector3);this.spacing=new d.Vector3(i[0]>1?l.x/(i[0]-1):0,i[1]>1?l.y/(i[1]-1):0,i[2]>1?l.z/(i[2]-1):0),this.irradiance=n?n.slice():new Float32Array(s)}get probeCount(){return this.counts[0]*this.counts[1]*this.counts[2]}index(e,r,n){const[i,a,s]=this.counts;if(!Number.isInteger(e)||!Number.isInteger(r)||!Number.isInteger(n)||e<0||r<0||n<0||e>=i||r>=a||n>=s)throw new RangeError(`[baker:probes] probe coordinate out of range: ${e}, ${r}, ${n}`);return e+i*(r+a*n)}getPosition(e,r=new d.Vector3){this.validateIndex(e);const[n,i]=this.counts,a=e%n,s=Math.floor(e/n),l=s%i,u=Math.floor(s/i);return r.set(this.bounds.min.x+this.spacing.x*a,this.bounds.min.y+this.spacing.y*l,this.bounds.min.z+this.spacing.z*u)}getIrradiance(e,r=new d.Color){var i,a,s;this.validateIndex(e);const n=e*3;return r.setRGB((i=this.irradiance[n])!=null?i:0,(a=this.irradiance[n+1])!=null?a:0,(s=this.irradiance[n+2])!=null?s:0)}setIrradiance(e,r){this.validateIndex(e);const n=e*3;return this.irradiance[n]=r.r,this.irradiance[n+1]=r.g,this.irradiance[n+2]=r.b,this}sample(e,r=new d.Color){var c,o,f;const n=this.axisSample(e.x,this.bounds.min.x,this.bounds.max.x,this.counts[0]),i=this.axisSample(e.y,this.bounds.min.y,this.bounds.max.y,this.counts[1]),a=this.axisSample(e.z,this.bounds.min.z,this.bounds.max.z,this.counts[2]);let s=0,l=0,u=0;for(let m=0;m<=1;m++){const h=m===0?a.low:a.high,p=m===0?1-a.t:a.t;for(let g=0;g<=1;g++){const b=g===0?i.low:i.high,v=g===0?1-i.t:i.t;for(let x=0;x<=1;x++){const y=x===0?n.low:n.high,w=(x===0?1-n.t:n.t)*v*p;if(w<=0)continue;const E=this.index(y,b,h)*3;s+=((c=this.irradiance[E])!=null?c:0)*w,l+=((o=this.irradiance[E+1])!=null?o:0)*w,u+=((f=this.irradiance[E+2])!=null?f:0)*w}}}return r.setRGB(s,l,u)}clone(){return new le(this.bounds,this.counts,this.irradiance)}toJSON(){return{version:1,bounds:{min:[this.bounds.min.x,this.bounds.min.y,this.bounds.min.z],max:[this.bounds.max.x,this.bounds.max.y,this.bounds.max.z]},counts:[...this.counts],irradiance:Array.from(this.irradiance)}}static fromJSON(e){if(e.version!==1)throw new Error(`[baker:probes] unsupported probe volume version: ${String(e.version)}`);const r=new d.Box3(new d.Vector3(...e.bounds.min),new d.Vector3(...e.bounds.max));return new le(r,e.counts,new Float32Array(e.irradiance))}axisSample(e,r,n,i){if(i<=1||Math.abs(n-r)<=Yn)return{low:0,high:0,t:0};const a=Math.min(1,Math.max(0,(e-r)/(n-r)))*(i-1),s=Math.floor(a),l=Math.min(i-1,s+1);return{low:s,high:l,t:a-s}}validateIndex(e){if(!Number.isInteger(e)||e<0||e>=this.probeCount)throw new RangeError(`[baker:probes] probe index out of range: ${e}`)}static validateCount(e,r){if(!Number.isInteger(e)||e<1)throw new Error(`[baker:probes] ${r} probe count must be a positive integer`);return e}}const it=1e-4;function Cr(t,e={}){var s,l;const r=jn(t,e),n=e.counts?Zn(e.counts):Jn(r,Qn((s=e.spacing)!=null?s:1)),i=n[0]*n[1]*n[2],a=Math.max(1,Math.floor((l=e.maxProbes)!=null?l:4096));if(i>a)throw new Error(`[baker:probes] grid requires ${i} probes, exceeding maxProbes=${a}`);return new le(r,n)}function jn(t,e){var i;const r=e.bounds?e.bounds.clone():t instanceof d.Box3?t.clone():new d.Box3().setFromObject(t,!0);if(r.isEmpty())throw new Error("[baker:probes] cannot derive probe bounds from an empty object");const n=(i=e.padding)!=null?i:0;if(!Number.isFinite(n)||n<0)throw new Error("[baker:probes] padding must be a finite non-negative number");return n>0&&r.expandByScalar(n),r}function Zn(t){const e=t.map(r=>Math.floor(r));if(e.some((r,n)=>!Number.isFinite(r)||r<1||r!==t[n]))throw new Error("[baker:probes] counts must contain positive integers");return e}function Qn(t){if(typeof t=="number")return de(t),new d.Vector3(t,t,t);if(t instanceof d.Vector3)return de(t.x),de(t.y),de(t.z),t.clone();const e=new d.Vector3(t[0],t[1],t[2]);return de(e.x),de(e.y),de(e.z),e}function Jn(t,e){const r=t.getSize(new d.Vector3);return[Ye(r.x,e.x),Ye(r.y,e.y),Ye(r.z,e.z)]}function Ye(t,e){return t<=it?1:Math.max(2,Math.ceil(t/e)+1)}function de(t){if(!Number.isFinite(t)||t<it)throw new Error(`[baker:probes] spacing must be at least ${it}`)}const ei=`
  out vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,ti=`
  uniform sampler2D sourceTexture;
  in vec2 vUv;
  out vec4 fragColor;
  void main() {
    fragColor = texture(sourceTexture, vUv);
  }
`;function je(t,e,r){if(!Number.isInteger(r)||r<1)throw new Error("[baker:probes] texture readback resolution must be a positive integer");const n=new d.WebGLRenderTarget(r,r,{type:d.FloatType,minFilter:d.NearestFilter,magFilter:d.NearestFilter,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}),i=new d.ShaderMaterial({glslVersion:d.GLSL3,vertexShader:ei,fragmentShader:ti,uniforms:{sourceTexture:{value:e}},blending:d.NoBlending,depthTest:!1,depthWrite:!1,transparent:!1}),a=new d.PlaneGeometry(2,2),s=new d.Mesh(a,i),l=new d.OrthographicCamera,u=new Float32Array(r*r*4),c=t.getRenderTarget(),o=t.autoClear;try{t.autoClear=!0,t.setRenderTarget(n),t.render(s,l),t.readRenderTargetPixels(n,0,0,r,r,u)}finally{t.setRenderTarget(c),t.autoClear=o,n.dispose(),i.dispose(),a.dispose()}return u}async function Ar(t,e,r,n={},i={}){var L,U,A,I,C,F,D,k,V,O,N,_,K,$,q,W,re,ee,te,X,j,J,ue,be,se;const a=Qt(),s=jt((L=n.sampleStride)!=null?L:2,"sampleStride"),l=jt((U=n.rowsPerYield)!=null?U:24,"rowsPerYield"),u=ii((A=n.fillIterations)!=null?A:4,"fillIterations"),c=Zt((I=n.intensity)!=null?I:1,"intensity"),o=ni(r)*.2,f=Zt((C=n.surfaceOffset)!=null?C:o,"surfaceOffset"),m=new Float64Array(r.probeCount*3),h=new Float64Array(r.probeCount);let p=0,g=0;at(i.signal);const b=e.groups;for(let Y=0;Y<b.length;Y++){const G=b[Y],Q=G.internalResolution,ce=je(t,G.textures.position,Q),he=je(t,G.textures.normal,Q),pe=je(t,(F=G.textures.refinement)!=null?F:G.textures.composite,Q);for(let ye=0;ye<Q;ye+=s){for(let we=0;we<Q;we+=s){const ne=(ye*Q+we)*4;if(((D=ce[ne+3])!=null?D:0)<.5)continue;p++;const Ve=(k=ce[ne])!=null?k:0,We=(V=ce[ne+1])!=null?V:0,$e=(O=ce[ne+2])!=null?O:0;let Re=(N=he[ne])!=null?N:0,Ie=(_=he[ne+1])!=null?_:0,Le=(K=he[ne+2])!=null?K:0;const Pe=Math.hypot(Re,Ie,Le);if(Pe<1e-6)continue;Re/=Pe,Ie/=Pe,Le/=Pe;const gt=Math.max(0,($=pe[ne])!=null?$:0),vt=Math.max(0,(q=pe[ne+1])!=null?q:0),xt=Math.max(0,(W=pe[ne+2])!=null?W:0);if(![Ve,We,$e,gt,vt,xt].every(Number.isFinite))continue;const kr=Ve+Re*f,Dr=We+Ie*f,Nr=$e+Le*f,Fe=Ze(kr,r.bounds.min.x,r.bounds.max.x,r.counts[0]),ze=Ze(Dr,r.bounds.min.y,r.bounds.max.y,r.counts[1]),ke=Ze(Nr,r.bounds.min.z,r.bounds.max.z,r.counts[2]);let bt=!1;for(let De=0;De<=1;De++){const yt=De===0?ke.low:ke.high,Ur=De===0?1-ke.t:ke.t;for(let Ne=0;Ne<=1;Ne++){const wt=Ne===0?ze.low:ze.high,Or=Ne===0?1-ze.t:ze.t;for(let Ue=0;Ue<=1;Ue++){const Mt=Ue===0?Fe.low:Fe.high,Tt=(Ue===0?1-Fe.t:Fe.t)*Or*Ur;if(Tt<=0)continue;const Br=r.bounds.min.x+r.spacing.x*Mt,_r=r.bounds.min.y+r.spacing.y*wt,Gr=r.bounds.min.z+r.spacing.z*yt,St=Br-Ve,Et=_r-We,Ct=Gr-$e,At=Math.hypot(St,Et,Ct),Vr=At>1e-6?Math.max(0,(Re*St+Ie*Et+Le*Ct)/At):1,Me=Tt*Math.max(.05,Vr);if(Me<=0)continue;const Rt=Mt+r.counts[0]*(wt+r.counts[1]*yt),He=Rt*3;m[He]+=gt*Me,m[He+1]+=vt*Me,m[He+2]+=xt*Me,h[Rt]+=Me,bt=!0}}}bt&&g++}if(Math.floor(ye/s)%l===0){at(i.signal);const we=Math.min(1,(ye+s)/Q);(re=i.onProgress)==null||re.call(i,(Y+we)/Math.max(1,b.length)*.9),await ai()}}}const v=new Float32Array(r.probeCount*3),x=new Uint8Array(r.probeCount);let y=0,T=0,w=0,E=0,S=0;for(let Y=0;Y<r.probeCount;Y++){const G=(ee=h[Y])!=null?ee:0,Q=Y*3;if(G>1e-8){const ce=((te=m[Q])!=null?te:0)/G,he=((X=m[Q+1])!=null?X:0)/G,pe=((j=m[Q+2])!=null?j:0)/G;v[Q]=ce,v[Q+1]=he,v[Q+2]=pe,x[Y]=1,T+=ce,w+=he,E+=pe,S++}else y++}ri(v,x,r.counts,u,i);const M=n.fallbackColor?new d.Color(n.fallbackColor):S>0?new d.Color(T/S,w/S,E/S):new d.Color(0,0,0);let R=0;for(let Y=0;Y<r.probeCount;Y++){const G=Y*3;x[Y]||(v[G]=M.r,v[G+1]=M.g,v[G+2]=M.b,R++),v[G]=((J=v[G])!=null?J:0)*c,v[G+1]=((ue=v[G+1])!=null?ue:0)*c,v[G+2]=((be=v[G+2])!=null?be:0)*c}return r.irradiance.set(v),(se=i.onProgress)==null||se.call(i,1),{probeCount:r.probeCount,sampledTexels:p,contributingTexels:g,emptyBeforeFill:y,emptyAfterFill:R,durationMs:Qt()-a}}function ri(t,e,r,n,i){var c,o,f,m;const[a,s,l]=r,u=[[-1,0,0],[1,0,0],[0,-1,0],[0,1,0],[0,0,-1],[0,0,1]];for(let h=0;h<n;h++){at(i.signal);const p=t.slice(),g=e.slice();for(let b=0;b<l;b++)for(let v=0;v<s;v++)for(let x=0;x<a;x++){const y=x+a*(v+s*b);if(e[y])continue;let T=0,w=0,E=0,S=0;for(const[M,R,L]of u){const U=x+M,A=v+R,I=b+L;if(U<0||A<0||I<0||U>=a||A>=s||I>=l)continue;const C=U+a*(A+s*I);if(!e[C])continue;const F=C*3;T+=(c=t[F])!=null?c:0,w+=(o=t[F+1])!=null?o:0,E+=(f=t[F+2])!=null?f:0,S++}if(S>0){const M=y*3;p[M]=T/S,p[M+1]=w/S,p[M+2]=E/S,g[y]=1}}t.set(p),e.set(g),(m=i.onProgress)==null||m.call(i,.9+(h+1)/Math.max(1,n)*.1)}}function Ze(t,e,r,n){if(n<=1||Math.abs(r-e)<=1e-8)return{low:0,high:0,t:0};const i=Math.min(1,Math.max(0,(t-e)/(r-e)))*(n-1),a=Math.floor(i);return{low:a,high:Math.min(n-1,a+1),t:i-a}}function ni(t){const e=[t.spacing.x,t.spacing.y,t.spacing.z].filter(r=>r>0);return e.length?Math.min(...e):.5}function jt(t,e){if(!Number.isInteger(t)||t<1)throw new Error(`[baker:probes] ${e} must be >= 1`);return t}function ii(t,e){if(!Number.isInteger(t)||t<0)throw new Error(`[baker:probes] ${e} must be >= 0`);return t}function Zt(t,e){if(!Number.isFinite(t)||t<0)throw new Error(`[baker:probes] ${e} must be finite and >= 0`);return t}function at(t){if(!(t!=null&&t.aborted))return;const e=new Error("[baker:probes] probe generation aborted");throw e.name="AbortError",e}function ai(){return typeof requestAnimationFrame=="function"?new Promise(t=>requestAnimationFrame(()=>t())):Promise.resolve()}function Qt(){return typeof performance!="undefined"?performance.now():Date.now()}async function si(t,e,r,n={},i={}){const{bake:a,...s}=n,l=Cr(e,s),u=await Ar(t,r,l,a,i);return{volume:l,stats:u}}class Rr extends d.Group{constructor(e,r={}){var a,s,l,u,c;super(),this.volume=e,this.probePosition=new d.Vector3,this.probeMatrix=new d.Matrix4,this.color=new d.Color,this.name="ProbeDebugView",this.exposure=Math.max(0,(a=r.exposure)!=null?a:1);const n=Math.max(1e-4,(s=r.radius)!=null?s:li(e)),i=Math.min(1,Math.max(0,(l=r.opacity)!=null?l:.9));this.geometry=new d.SphereGeometry(n,Math.max(4,Math.floor((u=r.widthSegments)!=null?u:8)),Math.max(3,Math.floor((c=r.heightSegments)!=null?c:6))),this.material=new d.MeshBasicMaterial({vertexColors:!0,toneMapped:!1,transparent:i<1,opacity:i,depthWrite:i>=1}),this.mesh=new d.InstancedMesh(this.geometry,this.material,e.probeCount),this.mesh.name="ProbeDebugSpheres",this.mesh.frustumCulled=!1,this.add(this.mesh),this.refresh()}setExposure(e){this.exposure=Math.max(0,e),this.refreshColors()}refresh(){for(let e=0;e<this.volume.probeCount;e++)this.volume.getPosition(e,this.probePosition),this.probeMatrix.makeTranslation(this.probePosition.x,this.probePosition.y,this.probePosition.z),this.mesh.setMatrixAt(e,this.probeMatrix);this.mesh.instanceMatrix.needsUpdate=!0,this.refreshColors()}refreshColors(){for(let e=0;e<this.volume.probeCount;e++)this.volume.getIrradiance(e,this.color),this.color.multiplyScalar(this.exposure),this.color.setRGB(this.color.r/(1+this.color.r),this.color.g/(1+this.color.g),this.color.b/(1+this.color.b)),this.mesh.setColorAt(e,this.color);this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}dispose(){this.remove(this.mesh),this.geometry.dispose(),this.material.dispose()}}function oi(t,e={}){return new Rr(t,e)}function li(t){const e=[t.spacing.x,t.spacing.y,t.spacing.z].filter(r=>r>0);return(e.length?Math.min(...e):1)*.08}class Ir{constructor(e,r,n={}){var a,s,l,u,c;this.mesh=e,this.volume=r,this.worldPosition=new d.Vector3,this.sampled=new d.Color,this.contribution=new d.Color,this.disposed=!1,this.intensity=Jt((a=n.intensity)!=null?a:1,"intensity"),this.multiplyByAlbedo=(s=n.multiplyByAlbedo)!=null?s:!0,this.maxIrradiance=Jt((l=n.maxIrradiance)!=null?l:4,"maxIrradiance"),this.sampleOffset=(c=(u=n.sampleOffset)==null?void 0:u.clone())!=null?c:new d.Vector3;const i=Array.isArray(e.material)?e.material:[e.material];if(this.states=i.filter(o=>"isMeshStandardMaterial"in o&&o.isMeshStandardMaterial===!0).map(o=>this.installMaterialHook(o)),!this.states.length)throw new Error("[baker:probes] probe lighting requires MeshStandardMaterial");this.update()}update(){if(!this.disposed){this.mesh.updateWorldMatrix(!0,!1),this.mesh.getWorldPosition(this.worldPosition).add(this.sampleOffset),this.volume.sample(this.worldPosition,this.sampled),this.contribution.copy(this.sampled),this.contribution.setRGB(Math.min(this.maxIrradiance,Math.max(0,this.contribution.r)),Math.min(this.maxIrradiance,Math.max(0,this.contribution.g)),Math.min(this.maxIrradiance,Math.max(0,this.contribution.b))),this.contribution.multiplyScalar(this.intensity);for(const e of this.states)e.uniform.value.copy(this.contribution)}}getLastIrradiance(e=new d.Color){return e.copy(this.sampled)}dispose(){if(!this.disposed){this.disposed=!0;for(const e of this.states)e.material.onBeforeCompile=e.originalOnBeforeCompile,e.material.customProgramCacheKey=e.originalCustomProgramCacheKey,e.material.needsUpdate=!0}}installMaterialHook(e){const r={value:new d.Color},n=e.onBeforeCompile,i=e.customProgramCacheKey,a=this.multiplyByAlbedo?"diffuse-brdf":"raw",s=this.multiplyByAlbedo?"bakerProbeIrradiance * material.diffuseColor * RECIPROCAL_PI":"bakerProbeIrradiance";return e.onBeforeCompile=(l,u)=>{n.call(e,l,u),l.uniforms.bakerProbeIrradiance=r,l.fragmentShader=`uniform vec3 bakerProbeIrradiance;
${l.fragmentShader}`;const c="#include <lights_fragment_begin>";if(!l.fragmentShader.includes(c))throw new Error("[baker:probes] MeshStandardMaterial lights fragment hook was not found");l.fragmentShader=l.fragmentShader.replace(c,`${c}
reflectedLight.indirectDiffuse += ${s};`)},e.customProgramCacheKey=()=>`${i.call(e)}|baker-probe-pbr-v1|${a}`,e.needsUpdate=!0,{material:e,uniform:r,originalOnBeforeCompile:n,originalCustomProgramCacheKey:i}}}function ui(t,e,r={}){return new Ir(t,e,r)}function Jt(t,e){if(!Number.isFinite(t)||t<0)throw new Error(`[baker:probes] ${e} must be finite and >= 0`);return t}const ci={discrete:{initialTileSize:1024,maxBatchMs:500},integrated:{initialTileSize:256,maxBatchMs:250},unknown:{initialTileSize:256,maxBatchMs:250}};function Lr(t){const e=t.toLowerCase();return["intel hd","intel uhd","iris","vega","mali","adreno","powervr"].some(i=>e.includes(i))?"integrated":["geforce","rtx","gtx","quadro","radeon rx","radeon pro","apple m"].some(i=>e.includes(i))?"discrete":"unknown"}function Pr(t){var l,u;const e=t.getContext(),r=e.getExtension("WEBGL_debug_renderer_info"),n=r?String((l=e.getParameter(r.UNMASKED_VENDOR_WEBGL))!=null?l:""):"",i=r?String((u=e.getParameter(r.UNMASKED_RENDERER_WEBGL))!=null?u:""):"",a=Lr(i),s=ci[a];return{tier:a,vendor:n,renderer:i,initialTileSize:s.initialTileSize,maxBatchMs:s.maxBatchMs,maxFrameMs:16}}const di=(t,e)=>new d.Color(t!=null?t:e).convertSRGBToLinear(),er=t=>t>0&&(t&t-1)===0,tr={dilationIterations:4,denoiseEnabled:!0,denoiseSigma:2.5,denoiseThreshold:.18,denoiseKSigma:1};function mi(t){var o,f,m,h,p,g,b,v;const e=(o=t.samples)!=null?o:96;if(!Number.isFinite(e)||e<1||e>4096)throw new P(`samples must be 1-4096, got ${e}`,"validation");const r=(f=t.castsPerFrame)!=null?f:5;if(!Number.isFinite(r)||r<1||r>256)throw new P(`castsPerFrame must be 1-256, got ${r}`,"validation");const n=typeof t.ao=="boolean"?void 0:t.ao,i=typeof t.gi=="boolean"?void 0:t.gi,a=n==null?void 0:n.samples;if(a!==void 0&&(!Number.isFinite(a)||a<0||a>64))throw new P(`ao.samples must be 0-64, got ${a}`,"validation");const s=(m=t.bounces)!=null?m:1;if(!Number.isInteger(s)||s<0||s>8)throw new P(`bounces must be integer 0-8, got ${s}`,"validation");const l=(h=t.resolution)!=null?h:1024;if(!Number.isFinite(l)||l<16||l>4096)throw new P(`resolution must be 16-4096, got ${l}`,"validation");if(!er(l))throw new P(`resolution must be a power of two, got ${l}`,"validation");const u=(p=t.superSample)!=null?p:1;if(!Number.isInteger(u)||u<1||u>4)throw new P(`superSample must be integer 1-4, got ${u}`,"validation");if(l*u>4096)throw new P(`resolution \xD7 superSample must be \u2264 4096, got ${l*u}`,"validation");if(((g=t.light)==null?void 0:g.intensity)!==void 0&&t.light.intensity<0)throw new P(`light.intensity must be >= 0, got ${t.light.intensity}`,"validation");if(((b=t.light)==null?void 0:b.size)!==void 0&&t.light.size<0)throw new P(`light.size must be >= 0, got ${t.light.size}`,"validation");if((i==null?void 0:i.intensity)!==void 0&&i.intensity<0)throw new P(`gi.intensity must be >= 0, got ${i.intensity}`,"validation");if((i==null?void 0:i.skyIntensity)!==void 0&&i.skyIntensity<0)throw new P(`gi.skyIntensity must be >= 0, got ${i.skyIntensity}`,"validation");if((n==null?void 0:n.distance)!==void 0&&n.distance<0)throw new P(`ao.distance must be >= 0, got ${n.distance}`,"validation");if(t.texelsPerMeter!==void 0){const y=t.texelsPerMeter;if(!Number.isFinite(y)||y<=0||y>64)throw new P(`texelsPerMeter density multiplier must be in (0, 64], got ${y}`,"validation")}for(const[y,T]of Object.entries((v=t.perMesh)!=null?v:{})){const w=T.resolution;if(w!==void 0){if(!Number.isFinite(w)||w<128||w>4096)throw new P(`perMesh[${y}].resolution must be 128-4096, got ${w}`,"validation");if(!er(w))throw new P(`perMesh[${y}].resolution must be a power of two, got ${w}`,"validation")}const E=T.density;if(E!==void 0&&(!Number.isFinite(E)||E<.1||E>10))throw new P(`perMesh[${y}].density must be in [0.1, 10], got ${E}`,"validation")}t.texelsPerMeter;const c=t.timeoutProtection;if((c==null?void 0:c.initialTileSize)!==void 0){const y=c.initialTileSize;if(!Number.isFinite(y)||y<16||y>4096)throw new P(`timeoutProtection.initialTileSize must be 16-4096, got ${y}`,"validation")}if((c==null?void 0:c.maxBatchMs)!==void 0&&(!Number.isFinite(c.maxBatchMs)||c.maxBatchMs<=0))throw new P(`timeoutProtection.maxBatchMs must be > 0, got ${c.maxBatchMs}`,"validation");if((c==null?void 0:c.maxFrameMs)!==void 0&&(!Number.isFinite(c.maxFrameMs)||c.maxFrameMs<=0))throw new P(`timeoutProtection.maxFrameMs must be > 0, got ${c.maxFrameMs}`,"validation")}function fi(t,e){var n,i,a,s,l;const r=(n=t==null?void 0:t.safeMode)!=null?n:!1;return{safeMode:r,initialTileSize:(i=t==null?void 0:t.initialTileSize)!=null?i:r?64:e.initialTileSize,maxBatchMs:(a=t==null?void 0:t.maxBatchMs)!=null?a:r?100:e.maxBatchMs,maxFrameMs:(s=t==null?void 0:t.maxFrameMs)!=null?s:e.maxFrameMs,autoAdapt:(l=t==null?void 0:t.autoAdapt)!=null?l:!0}}class hi extends d.ShaderMaterial{constructor(e){super({glslVersion:d.GLSL3,uniforms:{tSource:{value:e}},vertexShader:`
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
      `})}customProgramCacheKey(){return"DownscaleMaterial|glsl3|single-out"}}const pi=new d.OrthographicCamera;function gi(t,e,r){const n=new d.WebGLRenderTarget(r,r,{type:d.HalfFloatType,minFilter:d.LinearFilter,magFilter:d.LinearFilter,generateMipmaps:!1}),i=new hi(e),a=new d.Mesh(new d.PlaneGeometry(2,2),i),s=()=>{const u=t.getRenderTarget();try{t.setRenderTarget(n),t.render(a,pi)}finally{t.setRenderTarget(u)}},l=u=>{const c=i.uniforms.tSource;if(!c)throw new Error("[baker] DownscaleMaterial missing tSource uniform");c.value=u};return s(),{texture:n.texture,refresh:s,setSource:l,dispose:()=>{n.dispose(),i.dispose(),a.geometry.dispose()}}}function vi(t,e,r){var a,s;const n=[],i=new Map;for(const l of t){const u=(a=e[l.uuid])!=null?a:{};if(u.exclude===!0){n.push(l);continue}const c=(s=u.resolution)!=null?s:r;i.has(c)||i.set(c,[]),i.get(c).push(l)}return i.size===0&&n.length<t.length&&i.set(r,t.filter(l=>{var u;return!((u=e[l.uuid])!=null&&u.exclude)})),{excluded:n,groups:i,resolution:r}}function xi(t,e,r,n){var c,o;const i=[],a=[];for(const f of t)((c=e[f.uuid])==null?void 0:c.exclude)===!0?i.push(f):a.push(f);const s={};for(const f of a){const m=(o=e[f.uuid])==null?void 0:o.density;m!==void 0&&m!==1&&(s[f.uuid]=m)}const l=new Map;if(a.length===0)return{excluded:i,groups:l,resolution:r};const u=ar(a,{atlasResolution:r,texelsPerMeter:n,perMeshScale:s});for(let f=0;f<a.length;f++){const m=u[f];l.has(m.atlasIdx)||l.set(m.atlasIdx,[]),l.get(m.atlasIdx).push(m.mesh)}return{excluded:i,groups:l,resolution:r}}class Fr{constructor(e,r,n,i,a){this.renderer=e,this.meshLightmaps=r,this.meshResolutions=n,this.stats=i,this.internals=a}get lightmaps(){return new Map(this.meshLightmaps)}get bvh(){return this.internals.bvh}get groups(){return this.internals.groups.map(e=>{var r,n;return{meshes:e.meshes,resolution:e.resolution,internalResolution:e.internalResolution,lightmapper:e.lightmapper,aoMapper:e.aoMapper,textures:{direct:e.lightmapper.textures.direct,indirect:e.lightmapper.textures.indirect,ao:e.aoMapper.texture,composite:e.composite.texture,refinement:(n=(r=e.refinement)==null?void 0:r.texture)!=null?n:null,position:e.positionTex,normal:e.normalTex}}})}getGroupForMesh(e){var r,n;for(const i of this.internals.groups)if(i.meshes.includes(e))return{meshes:i.meshes,resolution:i.resolution,internalResolution:i.internalResolution,lightmapper:i.lightmapper,aoMapper:i.aoMapper,textures:{direct:i.lightmapper.textures.direct,indirect:i.lightmapper.textures.indirect,ao:i.aoMapper.texture,composite:i.composite.texture,refinement:(n=(r=i.refinement)==null?void 0:r.texture)!=null?n:null,position:i.positionTex,normal:i.normalTex}};return null}apply(){for(const[e,r]of this.meshLightmaps){const n=e.material;!n||(n.lightMap=r,r.channel=2,n.lightMapIntensity=1,n.needsUpdate=!0)}}async export(e="lightmap",r={}){var s,l,u,c,o;const n=(s=r.format)!=null?s:"png",i=e.replace(/[\/\\]+$/,"").split(/[\/\\]/).pop()||"lightmap",a=this.internals.groups;for(let f=0;f<a.length;f++){const m=a[f],h=(o=(c=(l=m.downscale)==null?void 0:l.texture)!=null?c:(u=m.refinement)==null?void 0:u.texture)!=null?o:m.composite.texture,p=a.length>1?`${i}_group${f}`:i;await Er(this.renderer,h,m.resolution,p,n)}}dispose(){var e,r;for(const n of this.internals.groups)(e=n.downscale)==null||e.dispose(),(r=n.refinement)==null||r.dispose(),n.composite.dispose(),n.aoMapper.dispose(),n.lightmapper.dispose(),n.atlasDispose();this.internals.matTexDispose()}refreshAO(e){for(const r of this.internals.groups)r.composite.refresh({aoIntensity:e.intensity,aoExponent:e.exponent,aoEnabled:e.enabled})}async rebakeAO(e,r={}){const n=this.internals.groups;for(let i=0;i<n.length;i++){const a=n[i],s={resolution:a.internalResolution,aoSamples:e.samples,ambientDistance:e.distance,targetSamples:e.targetSamples};if(await bi(this.renderer,this.internals.bvh,a,s,r,i,n.length,l=>{var u;return(u=r.onProgress)==null?void 0:u.call(r,"bake",(i+l)/n.length)}),a.refinement)if(a.refinement.dispose(),a.refinement=await ut(this.renderer,a.composite.texture,a.positionTex,a.internalResolution,this.internals.refinementOptions),a.downscale)a.downscale.setSource(a.refinement.texture),a.downscale.refresh();else{const l=a.refinement.texture;for(const[u,c]of this.meshResolutions)c===a.resolution&&this.meshLightmaps.set(u,l)}else a.downscale&&a.downscale.refresh()}}}function bi(t,e,r,n,i,a,s,l){const u=lt(t,r.positionTex,r.normalTex,e,n);return r.aoMapper.dispose(),r.aoMapper=u,r.composite.refresh({aoTex:u.texture}),new Promise((c,o)=>{const f=()=>{var h,p;if((h=i.signal)!=null&&h.aborted){const g=new P("aborted by signal","bake");g.name="AbortError",o(g);return}const m=u.render();if(l(n.targetSamples>0?m.samples/n.targetSamples:1),r.composite.refresh(),(p=i.onFrame)==null||p.call(i,{groupIndex:a,totalGroups:s,bounceSamples:0,aoSamples:m.samples,targetSamples:n.targetSamples,done:m.done,compositeTexture:r.composite.texture,directTexture:r.lightmapper.textures.direct,indirectTexture:r.lightmapper.textures.indirect,aoTexture:u.texture}),m.done){c();return}requestAnimationFrame(f)};requestAnimationFrame(f)})}const yi=64;function wi(t,e,r,n,i,a){return{resolution:e,casts:t.castsPerFrame,filterMode:t.filtering==="linear"?d.LinearFilter:d.NearestFilter,lights:r,skyColor:n,skyIntensity:t.gi.skyIntensity,directLightEnabled:t.light.enabled,indirectLightEnabled:t.gi.enabled,albedoTexture:i.albedoTexture,emissiveTexture:i.emissiveTexture,materialTextureSize:i.side,targetSamples:t.samples,bounces:t.bounces,tileSize:a.initialTileSize}}function Mi(t,e,r){return{resolution:e,aoSamples:t.ao.samples,ambientDistance:t.ao.distance,targetSamples:t.samples,tileSize:r.initialTileSize}}async function Ti(t,e,r,n,i,a,s,l){var S,M,R;const{renderer:u,opts:c,bvh:o,sceneLights:f,skyColor:m,matTex:h,tp:p,ctxState:g}=t;(S=s.onProgress)==null||S.call(s,"bake",e/r),l("bake");let b=null,v=null,x=null,y=null,T=null,w=null,E=!1;try{b=lr(u,n,a,!0);const L=wi(c,a,f,m,h,p),U=Mi(c,a,p);v=mr(u,b.positionTexture,b.normalTexture,o,L),x=lt(u,b.positionTexture,b.normalTexture,o,U),y=fr(u,{direct:v.textures.direct,indirect:v.textures.indirect,ao:x.texture},a,{directIntensity:1,giIntensity:c.gi.intensity,aoEnabled:c.ao.enabled,aoIntensity:c.ao.intensity,aoExponent:c.ao.exponent}),await Ei(v,x,y,c.samples,s,g,p,e,r,F=>{var D;return(D=s.onProgress)==null?void 0:D.call(s,"bake",(e+F)/r)}),(c.denoise||c.refinementOptions.dilationIterations>0)&&(T=await ut(u,y.texture,b.positionTexture,a,c.refinementOptions));const A=(M=T==null?void 0:T.texture)!=null?M:y.texture;w=c.superSample>1?gi(u,A,i):null;const I=(R=w==null?void 0:w.texture)!=null?R:A,C=b;if(!C)throw new P("atlas render did not complete","bake");return E=!0,{group:{lightmapper:v,aoMapper:x,composite:y,refinement:T,atlasDispose:()=>C.dispose(),resolution:i,internalResolution:a,downscale:w,meshes:n,positionTex:C.positionTexture,normalTex:C.normalTexture},finalTex:I}}finally{E||(w==null||w.dispose(),T==null||T.dispose(),y==null||y.dispose(),x==null||x.dispose(),v==null||v.dispose(),b==null||b.dispose())}}function Si(t,e,r){return t.length<4?e:t.slice(-4).filter(a=>a>r.maxFrameMs*1.5).length>=3?Math.max(yi,e>>1):e}function Ei(t,e,r,n,i,a,s,l,u,c){return new Promise((o,f)=>{const m=[];let h=performance.now(),p=s.initialTileSize;const g=()=>{var E,S;if((E=i.signal)!=null&&E.aborted){const M=new P("aborted by signal","bake");M.name="AbortError",f(M);return}if(a.lost){f(new P("webgl context lost during bake","context-loss"));return}const b=performance.now();if(m.push(b-h),m.length>8&&m.shift(),h=b,s.autoAdapt){const M=Si(m,p,s);M!==p&&(console.warn(`[baker] adaptive throttle: tileSize ${p} \u2192 ${M}`),p=M,t.setTileSize(p),e.setTileSize(p),m.length=0)}const v=t.renderTiled(s.maxFrameMs),x=e.renderTiled(s.maxFrameMs),y=Math.min(v.samples,x.samples);c(n>0?y/n:1);const T=v.done&&x.done;(v.sampleComplete||x.sampleComplete)&&r.refresh();const w={groupIndex:l,totalGroups:u,bounceSamples:v.samples,aoSamples:x.samples,targetSamples:n,done:T,compositeTexture:r.texture,directTexture:t.textures.direct,indirectTexture:t.textures.indirect,aoTexture:e.texture};if((S=i.onFrame)==null||S.call(i,w),T){o();return}requestAnimationFrame(g)};requestAnimationFrame(g)})}function Ci(t){const e=[];return t.traverse(r=>{var a;if(!r.isMesh||!r.visible||(a=r.userData)!=null&&a.lightmapIgnore)return;const n=r;(Array.isArray(n.material)?n.material:[n.material]).some(s=>s&&s.isMeshStandardMaterial)&&e.push(n)}),e}async function Ai(t){var $,q,W,re,ee,te;const{renderer:e,opts:r,scene:n,allMeshes:i,hooks:a,t0:s,tp:l,ctxState:u,checkAbort:c}=t,o=r.texelsPerMeter,f={};for(const[X,j]of Object.entries(r.perMesh))j.density!==void 0&&(f[X]=j.density);const m=o>0?ir(i.filter(X=>{var j;return((j=r.perMesh[X.uuid])==null?void 0:j.exclude)!==!0}),{atlasResolution:r.resolution,densityMultiplier:o,perMeshScale:f}):0,h=m>0?xi(i,r.perMesh,r.resolution,m):vi(i,r.perMesh,r.resolution),{excluded:p,groups:g}=h,b=X=>m>0?h.resolution:X,v=performance.now();($=a.onProgress)==null||$.call(a,"uv-unwrap",0);const x=[...g.values()];m>0?await or(x,{resolution:r.resolution,texelsPerUnit:m,perMeshScale:f}):await ot(x.flat()),(q=a.onProgress)==null||q.call(a,"uv-unwrap",1),c("unwrap");const y=performance.now(),T=performance.now();(W=a.onProgress)==null||W.call(a,"geometry",0);const w=hr(i),E=new me.MeshBVH(w);(re=a.onProgress)==null||re.call(a,"geometry",.5);const S=gr(w,i),M=vr(S);(ee=a.onProgress)==null||ee.call(a,"geometry",1),c("geometry");const R=performance.now(),L=di(r.gi.skyColor,16777215),U=ur(n),A=performance.now(),I=[...g.keys()],C=[],F=new Map,D=new Map,k={renderer:e,opts:r,bvh:E,sceneLights:U,skyColor:L,matTex:M,tp:l,ctxState:u};for(let X=0;X<I.length;X++){const j=I[X],J=b(j),ue=J*r.superSample,be=g.get(j),{group:se,finalTex:Y}=await Ti(k,X,I.length,be,J,ue,a,c);C.push(se);for(const G of be)F.set(G,Y),D.set(G,J)}const V=performance.now(),O=performance.now();(te=a.onProgress)==null||te.call(a,"refine",1);const N=performance.now();performance.now(),e.getContext().finish(),performance.now();const _=I.reduce((X,j)=>{const J=b(j);return X+J*J},0),K={meshCount:x.flat().length,texelCount:_,raysTraced:r.samples*r.castsPerFrame*_,duration:{uvUnwrap:y-v,geometry:R-T,bake:V-A,refine:N-O,total:performance.now()-s}};return new Fr(e,F,D,K,{groups:C,bvh:E,refinementOptions:r.refinementOptions,denoise:r.denoise,matTexDispose:()=>{M.albedoTexture.dispose(),M.emissiveTexture.dispose()}})}function st(t,e={}){var r;return{renderer:t,contextLossTarget:(r=e.contextLossTarget)!=null?r:t.domElement,label:e.label}}function zr(t){var e;return!!t&&typeof t=="object"&&"renderer"in t&&t.renderer!==null&&typeof((e=t.renderer)==null?void 0:e.isWebGLRenderer)=="boolean"}function Ri(t){var e,r,n,i;return typeof t=="boolean"?{enabled:t,intensity:1,skyColor:16777215,skyIntensity:0}:{enabled:(e=t==null?void 0:t.enabled)!=null?e:!0,intensity:(r=t==null?void 0:t.intensity)!=null?r:1,skyColor:(n=t==null?void 0:t.skyColor)!=null?n:16777215,skyIntensity:(i=t==null?void 0:t.skyIntensity)!=null?i:0}}function Ii(t,e){var r,n,i,a,s,l;return typeof t=="boolean"?{enabled:t,distance:.5,intensity:1,exponent:1.5,samples:e!=null?e:5}:{enabled:(r=t==null?void 0:t.enabled)!=null?r:!0,distance:(n=t==null?void 0:t.distance)!=null?n:.5,intensity:(i=t==null?void 0:t.intensity)!=null?i:1,exponent:(a=t==null?void 0:t.exponent)!=null?a:1.5,samples:(l=(s=t==null?void 0:t.samples)!=null?s:e)!=null?l:5}}class Li{constructor(e={},r={}){var a,s,l,u,c,o,f,m,h,p,g,b,v,x,y,T,w,E,S,M,R,L,U;this._rendererAdapter=null;const n=A=>!!A&&typeof A=="object"&&("isWebGLRenderer"in A&&A.isWebGLRenderer===!0||"getContext"in A&&"domElement"in A),i=zr(e)?{...r,rendererAdapter:e}:n(e)?{...r,renderer:e}:{...e,...r};mi(i),this._rendererAdapter=(a=i.rendererAdapter)!=null?a:i.renderer?st(i.renderer):null,this.opts={samples:(s=i.samples)!=null?s:96,castsPerFrame:(l=i.castsPerFrame)!=null?l:5,bounces:Math.min(4,Math.max(1,(u=i.bounces)!=null?u:1)),resolution:(c=i.resolution)!=null?c:1024,superSample:(o=i.superSample)!=null?o:1,denoise:(f=i.denoise)!=null?f:!0,filtering:(m=i.filtering)!=null?m:"linear",texelsPerMeter:(h=i.texelsPerMeter)!=null?h:0,perMesh:(p=i.perMesh)!=null?p:{},light:{position:Array.isArray((g=i.light)==null?void 0:g.position)?new d.Vector3(...i.light.position):(v=(b=i.light)==null?void 0:b.position)!=null?v:new d.Vector3(0,10,0),color:(y=(x=i.light)==null?void 0:x.color)!=null?y:16777215,intensity:(w=(T=i.light)==null?void 0:T.intensity)!=null?w:2,size:(S=(E=i.light)==null?void 0:E.size)!=null?S:1,enabled:(R=(M=i.light)==null?void 0:M.enabled)!=null?R:!0},gi:Ri(i.gi),ao:Ii(i.ao,i.castsPerFrame),refinementOptions:{...tr,...(L=i.refinementOptions)!=null?L:{},denoiseEnabled:(U=i.denoise)!=null?U:tr.denoiseEnabled},timeoutProtection:i.timeoutProtection}}get renderer(){var e,r;return(r=(e=this._rendererAdapter)==null?void 0:e.renderer)!=null?r:null}get rendererAdapter(){return this._rendererAdapter}setRenderer(e){return this._rendererAdapter=st(e),this}setRendererAdapter(e){return this._rendererAdapter=e,this}async bake(e,r={}){var g,b;const n=this._rendererAdapter,i=(g=n==null?void 0:n.renderer)!=null?g:null;if(!i)throw new P("renderer is required: use `new LightmapBaker(renderer, opts)`, `new LightmapBaker({ renderer, ...opts })`, `new LightmapBaker({ rendererAdapter, ...opts })`, `baker.setRenderer(renderer)`, or `baker.setRendererAdapter(adapter)`","validation");const a=performance.now(),s=Ci(e);if(!s.length)throw new P("no bake-eligible meshes in scene (need Mesh + MeshStandardMaterial-like)","validation");if(!i.getContext().getExtension("EXT_color_buffer_float"))throw new P("EXT_color_buffer_float WebGL2 extension is unavailable; FloatType RTs cannot be allocated","validation");const u=Pr(i),c=fi(this.opts.timeoutProtection,u),o={lost:!1},f=(b=n==null?void 0:n.contextLossTarget)!=null?b:i.domElement,m=v=>{v.preventDefault(),o.lost=!0,console.error("[baker] webglcontextlost during bake - cancelling")};f.addEventListener("webglcontextlost",m,!1);const h=()=>{f.removeEventListener("webglcontextlost",m,!1)};e.updateMatrixWorld(!0);const p=v=>{var x;if((x=r.signal)!=null&&x.aborted){const y=new P("aborted by signal",v);throw y.name="AbortError",y}if(o.lost)throw new P("webgl context lost","context-loss")};try{return await Ai({renderer:i,opts:this.opts,scene:e,allMeshes:s,hooks:r,t0:a,tp:c,ctxState:o,checkAbort:p})}finally{h()}}}function Pi(){return globalThis}function Fi(t){var e,r;return typeof((r=(e=t.process)==null?void 0:e.versions)==null?void 0:r.node)=="string"}function zi(t){return typeof t.window!="undefined"&&typeof t.document!="undefined"}function ki(t){return zi(t)?"browser":typeof t.OffscreenCanvas=="function"?"offscreen-browser":Fi(t)?"node":"unknown"}function Di(t){var e,r;if(typeof t.WebGL2RenderingContext!="function")return"unavailable";if(typeof((e=t.document)==null?void 0:e.createElement)!="function")return"available";try{const n=t.document.createElement("canvas");return(r=n.getContext)!=null&&r.call(n,"webgl2")?"available":"unavailable"}catch{return"unavailable"}}function Ni(t){var e;if(typeof t.OffscreenCanvas!="function")return"unavailable";try{const r=new t.OffscreenCanvas(1,1);return(e=r.getContext)!=null&&e.call(r,"webgl2")?"available":"unavailable"}catch{return"unavailable"}}function Ui(t=Pi()){const e=ki(t),r=typeof t.OffscreenCanvas=="function"?"available":"unavailable",n=typeof t.requestAnimationFrame=="function"?"available":"unavailable",i=e==="offscreen-browser"?Ni(t):Di(t),a=(e==="browser"||e==="offscreen-browser")&&i!=="unavailable"&&n==="available";return{runtime:e,canBake:a,rendererStrategy:a?"webgl-browser":"node-headless-unavailable",features:{webgl2:i,"float-color-buffer":i==="unavailable"?"unavailable":"unknown","offscreen-canvas":r,raf:n,"texture-download-export":e==="browser"?"available":"unavailable","filesystem-export":"unavailable","node-headless-bake":"unavailable"},limitations:e==="node"?["True Node.js headless baking is not implemented yet.","The current bake pipeline still requires a browser WebGL2 renderer and RAF-driven progressive passes."]:[]}}const rr={0:"NO_ERROR",1280:"INVALID_ENUM",1281:"INVALID_VALUE",1282:"INVALID_OPERATION",1283:"STACK_OVERFLOW",1284:"STACK_UNDERFLOW",1285:"OUT_OF_MEMORY",1286:"INVALID_FRAMEBUFFER_OPERATION",37442:"CONTEXT_LOST_WEBGL"};class Oi{constructor(e){this.renderer=e,this.start=performance.now(),this.snapshots=[],this.lastCalls=0,this.lastTriangles=0}banner(){var o,f;const e=this.renderer.getContext(),r=e.getExtension("WEBGL_debug_renderer_info"),n=r?String((o=e.getParameter(r.UNMASKED_VENDOR_WEBGL))!=null?o:""):"<masked>",i=r?String((f=e.getParameter(r.UNMASKED_RENDERER_WEBGL))!=null?f:""):"<masked>",a=e.getContextAttributes(),s={MAX_TEXTURE_SIZE:e.getParameter(e.MAX_TEXTURE_SIZE),MAX_RENDERBUFFER_SIZE:e.getParameter(e.MAX_RENDERBUFFER_SIZE),MAX_DRAW_BUFFERS:e.getParameter(e.MAX_DRAW_BUFFERS),MAX_COLOR_ATTACHMENTS:e.getParameter(e.MAX_COLOR_ATTACHMENTS),MAX_TEXTURE_IMAGE_UNITS:e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),MAX_FRAGMENT_UNIFORM_VECTORS:e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),MAX_VARYING_VECTORS:e.getParameter(e.MAX_VARYING_VECTORS),MAX_VIEWPORT_DIMS:e.getParameter(e.MAX_VIEWPORT_DIMS)},l=["EXT_color_buffer_float","EXT_color_buffer_half_float","OES_texture_float_linear","OES_texture_half_float_linear","WEBGL_lose_context","EXT_disjoint_timer_query_webgl2","WEBGL_debug_renderer_info"],u={};for(const m of l)u[m]=!!e.getExtension(m);const c=performance.memory;console.group("[diag] === GPU BANNER ==="),console.log("vendor:",n),console.log("renderer:",i),console.log("webgl version:",e.getParameter(e.VERSION)),console.log("GLSL:",e.getParameter(e.SHADING_LANGUAGE_VERSION)),console.log("context attrs:",a),console.log("limits:",s),console.log("extensions:",u),c&&console.log("JS heap (MB):",`used=${(c.usedJSHeapSize/1048576).toFixed(1)}`,`total=${(c.totalJSHeapSize/1048576).toFixed(1)}`,`limit=${(c.jsHeapSizeLimit/1048576).toFixed(1)}`),console.groupEnd()}snap(e){var o,f,m;const r=this.renderer.getContext();let n=0,i=0;do i=r.getError(),i!==0&&(n=i);while(i!==0);const a=this.renderer.info,s=(f=(o=a.programs)==null?void 0:o.length)!=null?f:0,l=a.render.calls-this.lastCalls,u=a.render.triangles-this.lastTriangles;this.lastCalls=a.render.calls,this.lastTriangles=a.render.triangles;const c={label:e,t:performance.now()-this.start,glError:(m=rr[n])!=null?m:`0x${n.toString(16)}`,threejs:{geometries:a.memory.geometries,textures:a.memory.textures,programs:s,calls:a.render.calls,triangles:a.render.triangles}};return this.snapshots.push(c),console.log(`[diag] ${c.t.toFixed(1).padStart(8)}ms ${e}`,`gl=${c.glError}`,`geo=${c.threejs.geometries} tex=${c.threejs.textures} prog=${c.threejs.programs}`,`\u0394calls=${l} \u0394tris=${u}`),c}measure(e,r){var c;const n=this.renderer.getContext();for(;n.getError()!==0;);const i=performance.now(),a=r();n.finish();const s=performance.now()-i;let l=0,u=0;do u=n.getError(),u!==0&&(l=u);while(u!==0);return console.log(`[diag] MEASURE ${e}: ${s.toFixed(1)}ms gl=${(c=rr[l])!=null?c:`0x${l.toString(16)}`}`),a}contextLossInfo(){var n,i;const e=this.renderer.getContext(),r=e.getExtension("WEBGL_lose_context");console.group("[diag] === CONTEXT LOSS DUMP ==="),console.log("isContextLost:",(n=e.isContextLost)==null?void 0:n.call(e)),console.log("snapshot history (last 10):",this.snapshots.slice(-10)),console.log("threejs info at loss:",{geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,programs:(i=this.renderer.info.programs)==null?void 0:i.length,autoReset:this.renderer.info.autoReset}),r&&console.log("lose_context ext present"),console.groupEnd()}dump(){return this.snapshots.slice()}}exports.AtlasViewer=qn;exports.BakeError=P;exports.Diagnostics=Oi;exports.LightmapBakeResult=Fr;exports.LightmapBaker=Li;exports.ProbeDebugView=Rr;exports.ProbeLightingBinding=Ir;exports.ProbeVolume=le;exports.TexelDensityMaterial=Kn;exports.bakeProbeIrradianceFromLightmaps=Ar;exports.binPackMeshes=ar;exports.bindProbeLighting=ui;exports.buildLightTexture=cr;exports.buildMaterialTextures=vr;exports.classifyRenderer=Lr;exports.collectLightsFromScene=ur;exports.computeMeshSurfaceArea=Ge;exports.createProbeDebugView=oi;exports.createRendererAdapter=st;exports.detectGPUCapabilities=Pr;exports.disposeLightTexture=dr;exports.exportEXR=Tr;exports.exportLightmap=Er;exports.exportPNG=Mr;exports.exportRaw=Sr;exports.extractPerTriangleMaterials=gr;exports.generateAOMapper=lt;exports.generateAtlas=ot;exports.generateAtlases=or;exports.generateLightmapper=mr;exports.generateProbeGrid=Cr;exports.generateProbeVolume=si;exports.getLightmapRuntimeCapabilities=Ui;exports.isLightmapRendererAdapter=zr;exports.loadXAtlasThree=Kr;exports.mergeGeometry=hr;exports.renderAtlas=lr;exports.resolveDensityTexelsPerMeter=ir;exports.runComposite=fr;exports.runRefinement=ut;
