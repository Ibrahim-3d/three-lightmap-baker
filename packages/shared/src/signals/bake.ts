import { computed, signal } from '@preact/signals';
import type { Texture } from 'three';

/**
 * Bake-progress signals. Technically baker-specific, but the shell's
 * `<StatusBar/>` and `<StaleBanner/>` read them — keeping them in shared
 * avoids the shell having to import from `baker-classic/`. Renderers that
 * don't bake (pure preview) leave the signals at their defaults.
 */

export type BakeStatus = 'idle' | 'baking' | 'done' | 'error';

/** Bake status finite state. */
export const bakeStatus = signal<BakeStatus>('idle');

/** Live progress while baking. Updated each library `onFrame`. */
export const bakeProgress = signal<{
  pct: number;
  samples: number;
  atlas: number;
  total: number;
  elapsedMs: number;
}>({ pct: 0, samples: 0, atlas: 0, total: 0, elapsedMs: 0 });

/** True after any scene mutation that invalidates the current lightmap. */
export const isStale = signal<boolean>(false);

/**
 * Active render-mode layer id (from `modes.ts` LAYERS in the playground app).
 * Default = 'albedo' so a fresh scene with no bake still shows lit geometry
 * via the visual disc-light (the 'combined' layer needs a bake to look
 * non-black). Orchestrator flips this to 'combined' on first bake complete.
 */
export const renderMode = signal<string>('albedo');

/** Compare ⇄ split-screen toggle. */
export const compareMode = signal<boolean>(false);

/** Convenience: are we mid-bake? */
export const isBaking = computed(() => bakeStatus.value === 'baking');

// ── PT renderer settings ─────────────────────────────────────────────────────

/**
 * Path tracer settings — shared with the baker's sky/env fill so one slider
 * drives both. Lives in shared/ so `WorldPage` (baker-classic/ui) and the
 * PT inspector page (pt-renderer/ui) read the same atom.
 */
export type PTSettings = {
  /** 0 = dark sky, 3 = bright sky (feeds baker GI miss-hit fill + PT sky). */
  skyIntensity: number;
  /** Global light-intensity multiplier (default 0.15 — normalises THREE.js scene lights). */
  lightScale: number;
  /** 0 = pinhole; > 0 = depth-of-field blur radius. */
  aperture: number;
  /** DOF focal-plane distance in world units. */
  focusDist: number;
};

export const ptSettings = signal<PTSettings>({
  skyIntensity: 1.0,
  lightScale: 0.15,
  aperture: 0.0,
  focusDist: 100.0,
});

/**
 * HDRI environment texture for the PT renderer.
 * Set by WorldPage's file picker when the user loads a .hdr / .exr file.
 * PTController reads this signal each frame and uploads to tHDRTexture uniform.
 *
 * null = use procedural sky gradient.
 */
export const hdriTexture = signal<Texture | null>(null);
