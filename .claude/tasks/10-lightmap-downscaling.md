# Task 10 — Lightmap Downscaling

## Objective
Bake at high resolution, downscale to lower resolution for delivery. Produces better quality than baking at low res directly because high-res captures finer detail that gets anti-aliased during downscale.

## Approach

1. Bake at resolution * superSample (e.g., 2048 if target is 1024 with 2x)
2. After bake + denoise, render lightmap into smaller render target via bilinear filtering
3. Dispose high-res intermediate

BakeOptions gains:
  superSample?: number  // default 1 (no supersampling)

Implementation: fullscreen quad, source = high-res lightmap with LINEAR filter, target = low-res render target. Passthrough shader — bilinear handles the downscale.

## Success Criteria
- Bake at 1024 with superSample=2 visibly smoother than direct 1024 bake
- Output texture is at requested resolution, not internal resolution
- High-res intermediate memory cleaned up after downscale

## Dependencies
- Task 05 (runs after denoising, before export)
