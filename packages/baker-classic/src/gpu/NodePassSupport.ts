import type { WebGLRenderer } from 'three';
import { WebGLNodesHandler } from 'three/addons/tsl/WebGLNodesHandler.js';

/**
 * Three r185 can render TSL/node materials through WebGLRenderer when its
 * compatibility node handler is installed. W2 uses this bridge so portable
 * node passes can be proven on the shipping WebGL backend before WebGPU
 * renderer execution is enabled.
 */
const configuredRenderers = new WeakSet<WebGLRenderer>();

export function ensureWebGLNodeMaterialSupport(renderer: WebGLRenderer): void {
  if (configuredRenderers.has(renderer)) return;

  renderer.setNodesHandler(new WebGLNodesHandler());
  configuredRenderers.add(renderer);
}
