import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{B as t,Bn as n,Et as r,Ft as i,L as a,Mt as o,U as s,Vn as c,br as l,ir as u,m as d,mr as f,ot as p,qt as m,vt as h}from"./three.core-DCTFLKPF.js";var g=new c({glslVersion:t,vertexShader:`
    in vec2 uv2;
    uniform vec2 offset;
    out vec4 vPosition;
    void main() {
        vPosition = modelMatrix * vec4(position, 1.0);
        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
`,fragmentShader:`
    uniform float meshId;
    in vec4 vPosition;
    out vec4 fragColor;
    void main() {
        // Alpha 0 is atlas background. Positive integer alpha stores the
        // one-based group-local mesh ID for probe surface-albedo lookup.
        fragColor = vec4(vPosition.xyz, meshId);
    }
`,side:2,fog:!1,uniforms:{offset:new u(new f(0,0)),meshId:new u(1)}}),_=new c({glslVersion:t,vertexShader:`
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
`,fragmentShader:`
    in vec4 vNormal;
    out vec4 fragColor;

    void main() {
        // Guard against zero-length normals (degenerate geometry) - produces (0,0,0,0)
        // so the bake shader can detect the miss instead of generating NaN.
        float len = length(vNormal.xyz);
        fragColor = len > 1.0e-6 ? vec4(vNormal.xyz / len, vNormal.w) : vec4(0.0);
    }
`,side:2,fog:!1,uniforms:{offset:new u(new f(0,0))}}),v=new n,y=new o(-1,1,1,-1,0,1),b=[{x:-2,y:-2},{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:2,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:2,y:-1},{x:-2,y:0},{x:-1,y:0},{x:1,y:0},{x:2,y:0},{x:-2,y:1},{x:-1,y:1},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:-2,y:2},{x:-1,y:2},{x:0,y:2},{x:1,y:2},{x:2,y:2},{x:0,y:0}];function x(e,t){let n=new h(e.geometry,e.material);return n.matrixAutoUpdate=!1,n.matrixWorldAutoUpdate=!1,n.matrix.copy(e.matrixWorld),n.matrixWorld.copy(e.matrixWorld),n.normalMatrix.getNormalMatrix(e.matrixWorld),n.frustumCulled=!1,n.onBeforeRender=()=>{let e=g.uniforms.meshId;e&&(e.value=t+1)},n}function S(e,t,n){let r=e.uniforms.offset?.value;if(!r)throw Error(`[baker] atlas material missing offset uniform`);r.set(t,n)}function C(e,t,n,i=!0){let o={format:m,type:e.capabilities.isWebGL2?a:s,minFilter:r,magFilter:r,generateMipmaps:!1,depthBuffer:!1,stencilBuffer:!1,blending:0},c=new l(n,n,o),u=new l(n,n,o),f=e.getRenderTarget(),p=e.autoClear,h=new d;e.getClearColor(h);let C=e.getClearAlpha();try{e.autoClear=!1,e.setClearColor(0,0),i&&(e.setRenderTarget(c),e.clear(),e.setRenderTarget(u),e.clear()),v.clear();for(let e=0;e<t.length;e++){let n=t[e];n&&v.add(x(n,e))}let r=(t,r)=>{v.overrideMaterial=t,e.setRenderTarget(r);for(let r of b)S(t,r.x/n,r.y/n),e.render(v,y);S(t,0,0)};r(g,c),r(_,u)}finally{e.setRenderTarget(f),e.autoClear=p,e.setClearColor(h,C),v.overrideMaterial=null,v.clear()}return{positionTexture:c.texture,normalTexture:u.texture,dispose:()=>{c.dispose(),u.dispose()}}}var w=class extends c{customProgramCacheKey(){return`DilationMaterial|glsl3|single-out`}constructor(e={}){super({glslVersion:t,blending:0,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{map:{value:e.map??null},positions:{value:e.positions??null},resolution:{value:e.resolution??1024},useSourceAlpha:{value:!1}},vertexShader:`
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
            `})}},T=class extends c{customProgramCacheKey(){return`DenoiseMaterial|glsl1|single-out`}constructor(e){super({blending:0,transparent:!1,depthWrite:!1,depthTest:!1,defines:{USE_SLIDER:0},uniforms:{sigma:{value:e.sigma??5},threshold:{value:e.threshold??.03},kSigma:{value:e.kSigma??1},map:{value:e.map}},vertexShader:`
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
			`})}},E=new h(new i(2,2)),D=new o,O=async(e,t,n,r,i,o)=>{let s=()=>new l(r,r,{type:a,minFilter:p,magFilter:p,generateMipmaps:!1}),c=s(),u=s(),d=(t,n)=>{let r=e.getRenderTarget();try{E.material=t,e.setRenderTarget(n),e.render(E,D)}finally{e.setRenderTarget(r)}},f=new w({positions:n,resolution:r}),m=c,h=u,g=t,_=Math.max(0,i.dilationIterations)+ +!!i.denoiseEnabled,v=0,y=f.uniforms.map;if(!y)throw Error("[baker] DilationMaterial missing `map` uniform");let b=f.uniforms.useSourceAlpha;if(!b)throw Error("[baker] DilationMaterial missing `useSourceAlpha` uniform");for(let e=0;e<Math.max(0,i.dilationIterations);e++){y.value=g,b.value=e>0,d(f,h),g=h.texture;let t=m;m=h,h=t,v++,o?.(v/_),await new Promise(e=>requestAnimationFrame(e))}if(i.denoiseEnabled){let e=new T({map:g,sigma:i.denoiseSigma,threshold:i.denoiseThreshold,kSigma:i.denoiseKSigma});d(e,h),g=h.texture,e.dispose();let t=m;m=h,h=t,v++,o?.(v/_),await new Promise(e=>requestAnimationFrame(e))}f.dispose();let x=i.dilationIterations>0||i.denoiseEnabled,S=x?m.texture:t;if(x){let t=Math.max(0,Math.floor(r/2)-2),n=new Float32Array(64);e.readRenderTargetPixels(m,t,t,4,4,n);let i=0,a=0,o=0;for(let e=0;e<16;e++)i+=n[e*4]??0,a+=n[e*4+1]??0,o+=n[e*4+2]??0}return{texture:S,dispose:()=>{c.dispose(),u.dispose()}}},k=e({renderAtlas:()=>C,runRefinement:()=>O});export{O as n,C as r,k as t};