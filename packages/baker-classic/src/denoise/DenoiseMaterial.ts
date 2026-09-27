import { GLSL3, NoBlending, ShaderMaterial, type Texture } from 'three';
export type DenoiseMaterialOptions = {
  map: Texture;
  normals?: Texture;
  sigma?: number;
  threshold?: number;
  kSigma?: number;
};
/** Chart- and normal-guided bilateral filter in linear irradiance space. */
export class DenoiseMaterial extends ShaderMaterial {
  constructor(options: DenoiseMaterialOptions) {
    super({
      glslVersion: GLSL3,
      blending: NoBlending,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        map: { value: options.map },
        normals: { value: options.normals ?? options.map },
        useNormals: { value: !!options.normals },
        sigma: { value: options.sigma ?? 2.5 },
        threshold: { value: options.threshold ?? 0.18 },
        kSigma: { value: options.kSigma ?? 1 },
      },
      vertexShader: `out vec2 vUv; void main() { vUv=uv; gl_Position=vec4(position,1.0); }`,
      fragmentShader: `
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
        }`,
    });
  }
}
