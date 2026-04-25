# Task 08 — WebGL Context Timeout Protection

## Objective
High sample counts or large lightmaps can cause GPU shader timeout (TDR on Windows, watchdog on macOS). The baker must prevent this.

## Approach

1. **Batch ray tracing work** — process N texels per draw call (keep each call under ~100ms), yield to browser between batches via requestAnimationFrame. Prevents TDR.

2. **GPU capability detection** — read WEBGL_debug_renderer_info, set conservative defaults for Intel iGPU / AMD APU, log warning if no discrete GPU.

3. **Context loss recovery** — listen for webglcontextlost event. If triggered during bake: cancel, dispose resources, show error. Do NOT auto-retry.

4. **Adaptive throttling** — measure wall-clock time per batch. If any batch takes >500ms, reduce batch size for subsequent batches. Log the adaptation.

5. **User controls** — "Safe mode" checkbox for smallest batch size (slow but safe). Estimated time remaining based on completed vs total batches.

## Success Criteria
- Bake at 2048px / 512 samples completes without context loss on mid-range laptop GPU
- Context loss during bake produces clean error, not frozen tab
- Batch size auto-adapts based on measured GPU speed

## Dependencies
- Task 04 (bounce lighting is the heaviest shader workload)
