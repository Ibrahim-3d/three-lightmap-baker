import { Color, LinearFilter, LinearMipMapLinearFilter, FloatType, Matrix4, Mesh, OrthographicCamera, PlaneGeometry, Texture, TextureFilter, Vector3, WebGLMultipleRenderTargets, WebGLRenderer } from "three";
import { MeshBVH, MeshBVHOptions } from 'three-mesh-bvh';
import { LightmapperMaterial } from "./LightmapperMaterial";

export type RaycastOptions = {
	resolution: number,
	casts: number,
	lightPosition: Vector3,
	lightSize: number;
	/** Linear-space tint of the point light. */
	lightColor: Color;
	/** Scalar HDR intensity (1.0 ≈ baseline brightness). */
	lightIntensity: number;
	// giIntensity removed — Phase A.3 applies it in CompositeMaterial at view time.
	/** Linear-space environment color used on hemisphere-miss. */
	skyColor: Color;
	/** 0 = closed-scene physical bake; >0 brightens corners and dim regions uniformly. */
	skyIntensity: number;
	filterMode: TextureFilter;

	directLightEnabled: boolean;
	indirectLightEnabled: boolean;
	ambientLightEnabled: boolean;
	ambientDistance: number;

	/** Per-triangle albedo lookup, indexed by global triangle index. Task 03. */
	albedoTexture: Texture;
	/** Per-triangle emissive lookup, same indexing as albedoTexture. Task 03. */
	emissiveTexture: Texture;
	/** Side length of the material textures (both are W×W). */
	materialTextureSize: number;

	/** Stop accumulating once this many frames have been rendered (frames × casts = samples/texel). 0 = unlimited. */
	targetSamples: number;
}

export type LightmapperRender = { samples: number; done: boolean };

export type Lightmapper = {
	renderTarget: WebGLMultipleRenderTargets,
	textures: { direct: Texture; indirect: Texture; ao: Texture },
	/** Returns running sample/frame count and whether the budget has been hit. */
	render: () => LightmapperRender,
	/** Reset accumulator (re-bake without rebuilding BVH/textures — currently unused, future-proof). */
	reset: () => void,
	/** Free GPU resources (RT, material, fullscreen quad geometry). Call before re-baking. */
	dispose: () => void,
	/** @deprecated Use renderTarget. Alias kept for pre-A.2 callers. */
	renderTexture: WebGLMultipleRenderTargets,
	/** @deprecated Use textures.direct. Alias kept for pre-A.2 callers. */
	texture: Texture,
}

export const generateLightmapper = (renderer: WebGLRenderer, positions: Texture, normals: Texture, bvh: MeshBVH, options: RaycastOptions): Lightmapper => {

	const raycastMaterial = new LightmapperMaterial({
		bvh,
		invModelMatrix: new Matrix4().identity(),
		positions,
		normals,
		albedoTex: options.albedoTexture,
		emissiveTex: options.emissiveTexture,
		materialTextureSize: options.materialTextureSize,
		casts: options.casts,
		lightPosition: options.lightPosition,
		lightSize: options.lightSize,
		lightColor: options.lightColor,
		lightIntensity: options.lightIntensity,
		// giIntensity removed — Phase A.3 applies it in CompositeMaterial.
		skyColor: options.skyColor,
		skyIntensity: options.skyIntensity,
		opacity: 1,
		sampleIndex: 0,
		directLightEnabled: options.directLightEnabled,
		indirectLightEnabled: options.indirectLightEnabled,
		ambientLightEnabled: options.ambientLightEnabled,
		ambientDistance: options.ambientDistance,
	});

	const renderTarget = new WebGLMultipleRenderTargets(options.resolution, options.resolution, 3, {
		type: FloatType,
		minFilter: LinearFilter, // Use Linear during bake to avoid heavy mipmap generation every frame
		magFilter: LinearFilter,
		generateMipmaps: false,
	});
	renderer.setRenderTarget(renderTarget);
	renderer.setClearColor(0x000000, 0)
	renderer.clear();

	const raycastMesh = new Mesh(new PlaneGeometry(2, 2), raycastMaterial);
	const orthographicCamera = new OrthographicCamera();

	let totalSamples = 0;
	const target = options.targetSamples | 0;

	const render = (): LightmapperRender => {
		if (target > 0 && totalSamples >= target) return { samples: totalSamples, done: true };

		const autoClear = renderer.autoClear;
		renderer.autoClear = false;
		renderer.setRenderTarget(renderTarget);
		raycastMaterial.uniforms.sampleIndex.value = totalSamples;
		// Correct progressive average math: Opacity = 1 / (n + 1)
		// Frame 0: 1/1 = 1.0
		// Frame 1: 1/2 = 0.5
		// Frame 2: 1/3 = 0.33...
		raycastMaterial.uniforms.opacity.value = 1 / (totalSamples + 1);
		renderer.render(raycastMesh, orthographicCamera);
		renderer.setRenderTarget(null);
		renderer.autoClear = autoClear;

		totalSamples++;
		return { samples: totalSamples, done: target > 0 && totalSamples >= target };
	};

	const reset = () => { totalSamples = 0; };

	const dispose = () => {
		renderTarget.dispose();
		raycastMaterial.dispose();
		raycastMesh.geometry.dispose();
	};

	renderer.setRenderTarget(null);

	const textures = {
		direct:   renderTarget.texture[0],
		indirect: renderTarget.texture[1],
		ao:       renderTarget.texture[2],
	};

	return {
		renderTarget,
		textures,
		render,
		reset,
		dispose,
		get renderTexture() { return renderTarget; },
		get texture() { return textures.direct; },
	};
}
