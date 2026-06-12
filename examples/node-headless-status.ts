import { getLightmapRuntimeCapabilities } from 'three-lightmap-baker';

const capabilities = getLightmapRuntimeCapabilities();

console.info('[baker] runtime:', capabilities.runtime);
console.info('[baker] canBake:', capabilities.canBake);
console.info('[baker] rendererStrategy:', capabilities.rendererStrategy);

if (!capabilities.canBake) {
  for (const limitation of capabilities.limitations) {
    console.info(`[baker] limitation: ${limitation}`);
  }
}
