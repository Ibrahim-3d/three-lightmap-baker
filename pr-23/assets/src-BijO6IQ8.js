import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{B as t,Bn as n,Et as r,Ft as i,L as a,Mt as o,T as s,U as c,Vn as l,br as u,gt as d,ir as f,l as p,m,mr as h,or as g,ot as _,qt as v,vt as y}from"./three.core-DCTFLKPF.js";var b=class extends Error{phase;meshName;constructor(e,t,n){super(`[baker:${t}] ${e}${n?` (mesh: ${n})`:``}`),this.name=`BakeError`,this.phase=t,this.meshName=n}};function x(){let e=new b(`aborted by signal`,`bake`);return e.name=`AbortError`,e}function S(e,t){return new Promise((n,r)=>{let i=0,a=!1,o=()=>{a=!0,cancelAnimationFrame(i),t?.removeEventListener(`abort`,s)},s=()=>{a||(o(),r(t?.reason??x()))},c=()=>{if(!a)try{if(t?.aborted){s();return}let r=e();if(a)return;r?(o(),n()):i=requestAnimationFrame(c)}catch(e){o(),r(e)}};t?.addEventListener(`abort`,s,{once:!0}),t?.aborted?s():i=requestAnimationFrame(c)})}function C(e,t=1){let n=e.getAttribute(`uv2`),r=e.getAttribute(`position`),i=e.index,a=i?.count??r.count,o=Array.from({length:a/3},(e,t)=>t),s=e=>{for(;o[e]!==e;)e=o[e];return e},c=e=>i?i.getX(e):e,l=e=>`${n.getX(e)},${n.getY(e)}:${r.getX(e)},${r.getY(e)},${r.getZ(e)}`,u=new Map;for(let e=0;e<a;e+=3)for(let t=0;t<3;t++){let n=l(c(e+t)),r=l(c(e+(t+1)%3)),i=n<r?`${n}|${r}`:`${r}|${n}`,a=u.get(i);a===void 0?u.set(i,e/3):o[s(e/3)]=s(a)}let d=new Map,f=new Float32Array(r.count),m=t;for(let e=0;e<a;e++){let t=s(Math.floor(e/3));d.has(t)||d.set(t,m++),f[c(e)]=d.get(t)}return{attribute:new p(f,1),nextId:m}}var w=new l({glslVersion:t,vertexShader:`
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
`,side:2,fog:!1,uniforms:{offset:new f(new h(0,0)),meshId:new f(1)}}),T=new l({glslVersion:t,vertexShader:`
    in vec2 uv2;
    in float bakeChart;
    uniform vec2 offset;
    out vec4 vNormal;
    void main() {
        // Use world-space normal matrix (inverse-transpose of modelMatrix) 
        // to correctly handle non-uniform scaling.
        mat3 worldNormalMatrix = transpose(inverse(mat3(modelMatrix)));
        vec3 worldNormal = normalize(worldNormalMatrix * normal);
        // Positive alpha identifies the UV chart; zero is atlas background.
        vNormal = vec4(worldNormal, bakeChart);
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
`,side:2,fog:!1,uniforms:{offset:new f(new h(0,0))}}),E=new s(new Uint8Array([255,255,255,255]),1,1,v);E.needsUpdate=!0;var D=new m(1,1,1),O=new l({glslVersion:t,vertexShader:`
    in vec2 uv2;
    in vec2 uv1;
    uniform vec2 offset;
    uniform float baseColorUvChannel;
    uniform mat3 baseColorMapTransform;
    out vec2 vBaseColorUv;
    void main() {
      vec2 sourceUv = baseColorUvChannel > 0.5 ? uv1 : uv;
      vBaseColorUv = (baseColorMapTransform * vec3(sourceUv, 1.0)).xy;
      gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
  `,fragmentShader:`
    uniform vec3 baseColor;
    uniform sampler2D baseColorMap;
    in vec2 vBaseColorUv;
    out vec4 fragColor;
    void main() {
      fragColor = vec4(baseColor * texture(baseColorMap, vBaseColorUv).rgb, 1.0);
    }
  `,side:2,fog:!1,uniforms:{offset:new f(new h(0,0)),baseColor:new f(new m(1,1,1)),baseColorMap:new f(E),baseColorUvChannel:new f(0),baseColorMapTransform:new f(new d)}}),k=new n,A=new o(-1,1,1,-1,0,1),j=[{x:-2,y:-2},{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:2,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:2,y:-1},{x:-2,y:0},{x:-1,y:0},{x:1,y:0},{x:2,y:0},{x:-2,y:1},{x:-1,y:1},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:-2,y:2},{x:-1,y:2},{x:0,y:2},{x:1,y:2},{x:2,y:2},{x:0,y:0}],M=1;function N(e,t){let n=e.geometry.clone(),r=C(n,M);M=r.nextId,n.setAttribute(`bakeChart`,r.attribute);let i=new y(n,e.material);return i.matrixAutoUpdate=!1,i.matrixWorldAutoUpdate=!1,i.matrix.copy(e.matrixWorld),i.matrixWorld.copy(e.matrixWorld),i.normalMatrix.getNormalMatrix(e.matrixWorld),i.frustumCulled=!1,i.onBeforeRender=(n,r,i,a,o,s)=>{let c=s?.materialIndex??0,l=w.uniforms.meshId;l&&(l.value=t+1);let u=Array.isArray(e.material)?e.material[c]??e.material[0]:e.material,d=O.uniforms.baseColor,f=O.uniforms.baseColorMap,p=O.uniforms.baseColorUvChannel,m=O.uniforms.baseColorMapTransform;if(!d||!f||!p||!m)throw Error(`[baker] surface-albedo material uniforms are incomplete`);d.value.copy(u?.color??D);let h=u?.map??null,g=+(h?.channel===1),_=g===1?`uv1`:`uv`,v=h&&e.geometry.hasAttribute(_)?h:E;v.matrixAutoUpdate&&v.updateMatrix(),f.value=v,p.value=g,m.value.copy(v.matrix)},i}function P(e,t,n){let r=e.uniforms.offset?.value;if(!r)throw Error(`[baker] atlas material missing offset uniform`);r.set(t,n)}function F(e,t,n,i=!0){let o={format:v,type:e.capabilities.isWebGL2?a:c,minFilter:r,magFilter:r,generateMipmaps:!1,depthBuffer:!1,stencilBuffer:!1,blending:0},s=new u(n,n,o),l=new u(n,n,o),d=new u(n,n,{...o,type:g});d.texture.name=`Baker compact surface albedo`;let f=e.getRenderTarget(),p=e.autoClear,h=new m;e.getClearColor(h);let _=e.getClearAlpha();try{e.autoClear=!1,e.setClearColor(0,0),i&&(e.setRenderTarget(s),e.clear(),e.setRenderTarget(l),e.clear(),e.setRenderTarget(d),e.clear()),k.clear(),M=1;for(let e=0;e<t.length;e++){let n=t[e];n&&k.add(N(n,e))}let r=(t,r)=>{k.overrideMaterial=t,e.setRenderTarget(r);for(let r of j)P(t,r.x/n,r.y/n),e.render(k,A);P(t,0,0)};r(w,s),r(T,l),r(O,d)}catch(e){throw s.dispose(),l.dispose(),d.dispose(),e}finally{e.setRenderTarget(f),e.autoClear=p,e.setClearColor(h,_),k.overrideMaterial=null;for(let e of k.children)e.geometry.dispose();k.clear()}return{positionTexture:s.texture,normalTexture:l.texture,surfaceAlbedoTexture:d.texture,dispose:()=>{s.dispose(),l.dispose(),d.dispose()}}}var I=class extends l{constructor(e={}){super({glslVersion:t,blending:0,depthTest:!1,depthWrite:!1,uniforms:{map:{value:e.map},positions:{value:e.owners??e.positions},resolution:{value:e.resolution??1024},useSourceAlpha:{value:!1},fill:{value:e.fill??!0}},vertexShader:`out vec2 vUv; void main() { vUv=uv; gl_Position=vec4(position,1.0); }`,fragmentShader:`
        uniform sampler2D map, positions;
        uniform bool useSourceAlpha, fill;
        uniform float resolution;
        in vec2 vUv; out vec4 fragColor;
        float owner(ivec2 p) { return useSourceAlpha ? texelFetch(map,p,0).a : texelFetch(positions,p,0).a; }
        void main() {
          ivec2 size=textureSize(map,0), p=ivec2(gl_FragCoord.xy);
          float id=owner(p); vec3 color=texelFetch(map,p,0).rgb;
          if(id>0.0) { fragColor=vec4(color,id); return; }
          fragColor=vec4(0.0); if(!fill) return;
          float best=10.0;
          for(int y=-1;y<=1;y++) for(int x=-1;x<=1;x++) {
            ivec2 q=p+ivec2(x,y);
            if(any(lessThan(q,ivec2(0))) || any(greaterThanEqual(q,size))) continue;
            float candidate=owner(q), distance=float(x*x+y*y);
            if(candidate>0.0 && distance<best) { best=distance; fragColor=vec4(texelFetch(map,q,0).rgb,candidate); }
          }
        }`})}},L=class extends l{constructor(e){super({glslVersion:t,blending:0,depthTest:!1,depthWrite:!1,uniforms:{map:{value:e.map},normals:{value:e.normals??e.map},useNormals:{value:!!e.normals},sigma:{value:e.sigma??2.5},threshold:{value:e.threshold??.18},kSigma:{value:e.kSigma??1}},vertexShader:`out vec2 vUv; void main() { vUv=uv; gl_Position=vec4(position,1.0); }`,fragmentShader:`
        uniform sampler2D map, normals; uniform bool useNormals;
        uniform float sigma, threshold, kSigma; in vec2 vUv; out vec4 fragColor;
        void main() {
          ivec2 size=textureSize(map,0), p=ivec2(gl_FragCoord.xy);
          vec4 center=texelFetch(map,p,0); if(center.a<=0.0) {fragColor=vec4(0.0);return;}
          vec3 n=texelFetch(normals,p,0).xyz;
          int radius=int(clamp(ceil(kSigma*sigma),0.0,32.0));
          vec3 sum=vec3(0.0); float weights=0.0;
          for(int y=-radius;y<=radius;y++) for(int x=-radius;x<=radius;x++) {
            ivec2 q=p+ivec2(x,y); if(any(lessThan(q,ivec2(0))) || any(greaterThanEqual(q,size))) continue;
            vec4 value=texelFetch(map,q,0); if(abs(value.a-center.a)>.1) continue;
            vec3 nn=texelFetch(normals,q,0).xyz;
            if(useNormals && dot(n,n)>0.1 && dot(nn,nn)>0.1 && dot(normalize(n),normalize(nn))<.8) continue;
            vec3 delta=value.rgb-center.rgb;
            float weight=exp(-float(x*x+y*y)/max(2.0*sigma*sigma,1e-6)-dot(delta,delta)/max(2.0*threshold*threshold,1e-6));
            sum+=value.rgb*weight; weights+=weight;
          }
          fragColor=vec4(sum/max(weights,1e-6),center.a);
        }`})}},R=async(e,t,n,r,s,c,l={})=>{if(l.signal?.aborted)throw l.signal.reason??x();if(!s.dilationIterations&&!s.denoiseEnabled)return{texture:t,dispose:()=>{}};let d=new u(r,r,{type:a,minFilter:_,magFilter:_,depthBuffer:!1,generateMipmaps:!1}),f=d.clone(),p=new y(new i(2,2)),m=new o,h=new I({positions:n,owners:l.normals,resolution:r,fill:s.dilationIterations>0}),g,v=t,b=d,C=!1;try{let t=Math.max(1,s.dilationIterations),n=t+Number(s.denoiseEnabled),r=0;return await S(()=>{if(e.getContext().isContextLost())throw Error(`WebGL context lost during refinement`);let i;if(r<t){let e=h.uniforms.map,t=h.uniforms.useSourceAlpha;if(!e||!t)throw Error(`Missing dilation uniforms`);e.value=v,t.value=r>0,i=h}else g=new L({map:v,normals:l.normals,sigma:s.denoiseSigma,threshold:s.denoiseThreshold,kSigma:s.denoiseKSigma}),i=g;let a=e.getRenderTarget();try{p.material=i,e.setRenderTarget(b),e.render(p,m)}finally{e.setRenderTarget(a)}return v=b.texture,b=b===d?f:d,r++,c?.(r/n),r===n},l.signal),C=!0,{texture:v,dispose:()=>{d.dispose(),f.dispose()}}}finally{h.dispose(),g?.dispose(),p.geometry.dispose(),C||(d.dispose(),f.dispose())}},z=e({renderAtlas:()=>F,runRefinement:()=>R});export{S as a,x as i,R as n,b as o,F as r,z as t};