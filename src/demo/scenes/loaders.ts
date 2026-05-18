/**
 * Shared GLTF/DRACO/Meshopt loader for scene presets.
 * Single loader instance reused across all presets (decoder warmup amortised).
 *
 * Supports:
 *  - DRACO compressed geometry (local decoder at /draco/)
 *  - Meshopt compressed geometry (EXT_meshopt_compression / KHR_mesh_quantization)
 *    Required by mercury-statue, modern-bathroom and similar online models.
 */
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

let _loader: GLTFLoader | null = null;

function getLoader(): GLTFLoader {
    if (_loader) return _loader;

    const draco = new DRACOLoader();
    draco.setDecoderPath('/draco/');

    _loader = new GLTFLoader();
    _loader.setDRACOLoader(draco);
    // MeshoptDecoder is used by models with EXT_meshopt_compression / KHR_mesh_quantization.
    // It may be a Promise<decoder> or the decoder object directly — GLTFLoader handles both.
    _loader.setMeshoptDecoder(MeshoptDecoder as unknown as typeof MeshoptDecoder);

    return _loader;
}

export function loadGLTF(url: string): Promise<GLTF> {
    return getLoader().loadAsync(url);
}
