# Task 05 — Quality Improvements and Denoising

## Objective
Clean up the bake output: reduce noise at low sample counts, improve edge quality, add sample count presets.

## Steps

1. **Gap flood / edge dilation** — After bake, dilate lightmap texels outward by 4px to prevent black seams at UV island edges. Simple 3x3 neighborhood sampling, 4 iterations.

2. **Bilateral filter denoiser** — Optional post-process that smooths noisy areas while preserving edges. Use world-position and normal textures as edge-detection guides (same textures from Pass 1). This is what Shapespark calls their "default denoiser."

3. **Bake presets:**
   - Draft: 16 samples, 1 bounce, 256px lightmap → ~2-5s
   - Preview: 64 samples, 2 bounces, 512px → ~10-30s  
   - Production: 256 samples, 3 bounces, 1024px → ~1-5min
   - Final: 512+ samples, 4 bounces, 2048px → ~5-15min

4. **Progressive bake display** — Show the lightmap updating in real-time as samples accumulate (the scene gets cleaner over time). User can stop early if quality is acceptable.

5. **Sample accumulation visualization** — Show current sample count and estimated time remaining.

## Success Criteria
- Draft preset produces a recognizable (noisy but correct) bake in <5s
- Production preset produces a clean bake with minimal noise
- Gap flood eliminates black seams at UV borders
- Denoiser smooths noise without destroying shadow edges

## Dependencies
- Task 04 (bounce lighting works — denoising a direct-only bake is less meaningful)
