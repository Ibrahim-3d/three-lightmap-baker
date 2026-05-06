# Task 06 — Export and Clean API

## Objective
Make the baker usable as a library, not just a demo.

## Steps

1. **Clean API surface:**

```typescript
import { LightmapBaker } from 'three-lightmap-baker';

const baker = new LightmapBaker({
  samples: 64,
  bounces: 2,
  resolution: 512,
  denoise: true,
});

// Bake a scene
const result = await baker.bake(scene, {
  onProgress: (phase, percent) => console.log(phase, percent),
});

// result.lightmaps: Map<THREE.Mesh, THREE.Texture>
// result.duration: number (ms)
// result.stats: { meshCount, texelCount, raysTraced }

// Apply lightmaps to scene
result.apply();  // sets mesh.material.lightMap for each mesh

// Export lightmaps as PNG/EXR
await result.export('lightmaps/', { format: 'png' });

// Dispose GPU resources
result.dispose();
```

2. **Export formats:**
   - PNG (LDR, tone-mapped) — for preview
   - EXR (HDR, linear) — for production
   - Raw Float32Array — for programmatic use

3. **Separate the Cornell Box demo from the library code:**
   - src/lib/ — the baker library (importable)
   - src/demo/ — the Cornell Box demo app (uses the library)

4. **package.json entry points:**
   - main: dist/index.js
   - types: dist/index.d.ts
   - The demo is NOT part of the package

## Success Criteria
- `import { LightmapBaker } from 'three-lightmap-baker'` works
- API matches the interface above
- Demo still runs via `yarn dev`
- Library is tree-shakeable (no side effects at import)

## Dependencies
- Task 05 (quality features included in the API)
