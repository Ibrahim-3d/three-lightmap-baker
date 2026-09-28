import { NoBlending, type Texture } from 'three';
import { NodeMaterial } from 'three/webgpu';
import {
  float,
  mix,
  positionGeometry,
  texture,
  uniform,
  vec3,
  vec4,
} from 'three/tsl';

export type CompositeMaterialOptions = {
  directTex: Texture;
  indirectTex: Texture;
  /** AO texture from AOMapper. Stores raw normalized visibility t ∈ [0,1]. */
  aoTex: Texture;
  directIntensity: number;
  giIntensity: number;
  aoEnabled: boolean;
  /** Darkness multiplier on AO. 1.0 = physical (default). Range 0..3. */
  aoIntensity: number;
  /**
   * Falloff curve exponent applied to stored visibility t.
   * 1.0 = linear. Higher = sharper contact darkening. Range 0.5..4.0.
   */
  aoExponent: number;
};

/**
 * Backend-portable TSL composite material.
 *
 * The same node graph can be compiled to GLSL by WebGLRenderer's r185
 * compatibility node handler today and to WGSL by WebGPURenderer later.
 */
export class CompositeMaterial extends NodeMaterial {
  readonly directTextureNode;
  readonly indirectTextureNode;
  readonly aoTextureNode;
  readonly directIntensityNode;
  readonly giIntensityNode;
  readonly aoEnabledNode;
  readonly aoIntensityNode;
  readonly aoExponentNode;

  constructor(opts: CompositeMaterialOptions) {
    super();

    this.blending = NoBlending;
    this.depthWrite = false;
    this.depthTest = false;
    this.fog = false;
    this.toneMapped = false;

    this.directTextureNode = texture(opts.directTex);
    this.indirectTextureNode = texture(opts.indirectTex);
    this.aoTextureNode = texture(opts.aoTex);
    this.directIntensityNode = uniform(opts.directIntensity);
    this.giIntensityNode = uniform(opts.giIntensity);
    this.aoEnabledNode = uniform(opts.aoEnabled ? 1 : 0);
    this.aoIntensityNode = uniform(opts.aoIntensity);
    this.aoExponentNode = uniform(opts.aoExponent);

    const directSample = this.directTextureNode;
    const indirectSample = this.indirectTextureNode;
    const aoSample = this.aoTextureNode.rgb.clamp(0, 1);

    const direct = directSample.rgb.mul(this.directIntensityNode);
    const indirect = indirectSample.rgb.mul(this.giIntensityNode);

    const one = vec3(1);
    const occlusion = one.sub(aoSample.pow(this.aoExponentNode));
    const remappedAO = one.sub(occlusion.mul(this.aoIntensityNode).clamp(0, 1));
    const ao = mix(one, remappedAO, this.aoEnabledNode);

    const lit = direct.add(indirect).mul(ao);
    const displayAdjusted = lit.max(0).pow(float(1 / 1.1));
    const lightmapMask = directSample.a.max(indirectSample.a);

    // Preserve the old full-screen NDC behavior and bypass camera transforms.
    this.vertexNode = vec4(positionGeometry.xy, 0, 1);
    this.fragmentNode = vec4(displayAdjusted, lightmapMask);
  }

  setAOTexture(source: Texture): void {
    this.aoTextureNode.value = source;
  }

  setDirectIntensity(value: number): void {
    this.directIntensityNode.value = value;
  }

  setGIIntensity(value: number): void {
    this.giIntensityNode.value = value;
  }

  setAOEnabled(value: boolean): void {
    this.aoEnabledNode.value = value ? 1 : 0;
  }

  setAOIntensity(value: number): void {
    this.aoIntensityNode.value = value;
  }

  setAOExponent(value: number): void {
    this.aoExponentNode.value = value;
  }

  getOptions(): {
    directIntensity: number;
    giIntensity: number;
    aoEnabled: boolean;
    aoIntensity: number;
    aoExponent: number;
  } {
    return {
      directIntensity: Number(this.directIntensityNode.value),
      giIntensity: Number(this.giIntensityNode.value),
      aoEnabled: Number(this.aoEnabledNode.value) > 0.5,
      aoIntensity: Number(this.aoIntensityNode.value),
      aoExponent: Number(this.aoExponentNode.value),
    };
  }
}
