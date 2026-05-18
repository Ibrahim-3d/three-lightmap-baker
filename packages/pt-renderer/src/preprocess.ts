import { ShaderChunk } from 'three';

const chunks = ShaderChunk as unknown as Record<string, string>;

/**
 * Resolve `#include <chunk_name>` directives in a GLSL string.
 * Mirrors erichlof's InitCommon.js preprocessor, runs in TypeScript.
 * Recurses so chunks that #include other chunks are fully resolved.
 */
export function resolveIncludes(src: string): string {
  return src.replace(/#include\s+<([\w_]+)>/g, (_match, name: string) => {
    const chunk = chunks[name];
    if (chunk == null)
      throw new Error(`[pathtracer] missing ShaderChunk: "${name}"`);
    return resolveIncludes(chunk);
  });
}
