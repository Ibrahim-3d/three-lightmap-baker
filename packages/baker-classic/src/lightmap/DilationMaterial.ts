import { GLSL3, NoBlending, ShaderMaterial, type Texture } from 'three';
/** Propagate one chart's color/owner into each empty texel, without mixing charts. */
export class DilationMaterial extends ShaderMaterial {
  constructor(
    opts: {
      map?: Texture;
      positions?: Texture;
      owners?: Texture;
      resolution?: number;
      fill?: boolean;
    } = {},
  ) {
    super({
      glslVersion: GLSL3,
      blending: NoBlending,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        map: { value: opts.map },
        positions: { value: opts.owners ?? opts.positions },
        resolution: { value: opts.resolution ?? 1024 },
        useSourceAlpha: { value: false },
        fill: { value: opts.fill ?? true },
      },
      vertexShader: `out vec2 vUv; void main() { vUv=uv; gl_Position=vec4(position,1.0); }`,
      fragmentShader: `
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
        }`,
    });
  }
}
