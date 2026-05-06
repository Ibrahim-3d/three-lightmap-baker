/**
 * Diagnostics — graphics-engineer-grade instrumentation for the bake pipeline.
 *
 * Goal: when the bake crashes (CONTEXT_LOST) but the symptoms don't match
 * obvious causes (memory, mipmap, filter), surface enough numbers to pinpoint
 * the actual driver state at every boundary.
 *
 * NOT a feature. Pull the wires when the bug is gone.
 */

import { WebGLRenderer } from 'three';

const GL_ERR: Record<number, string> = {
  0: 'NO_ERROR',
  0x0500: 'INVALID_ENUM',
  0x0501: 'INVALID_VALUE',
  0x0502: 'INVALID_OPERATION',
  0x0503: 'STACK_OVERFLOW',
  0x0504: 'STACK_UNDERFLOW',
  0x0505: 'OUT_OF_MEMORY',
  0x0506: 'INVALID_FRAMEBUFFER_OPERATION',
  0x9242: 'CONTEXT_LOST_WEBGL',
};

export type DiagSnapshot = {
  label: string;
  t: number;
  glError: string;
  threejs: {
    geometries: number;
    textures: number;
    programs: number;
    calls: number;
    triangles: number;
  };
};

export class Diagnostics {
  private start = performance.now();
  private snapshots: DiagSnapshot[] = [];
  private lastCalls = 0;
  private lastTriangles = 0;

  constructor(public readonly renderer: WebGLRenderer) {}

  banner(): void {
    const gl = this.renderer.getContext() as WebGL2RenderingContext;
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    const vendor = debugInfo
      ? String(gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) ?? '')
      : '<masked>';
    const rendererStr = debugInfo
      ? String(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) ?? '')
      : '<masked>';
    const attrs = gl.getContextAttributes();

    const limits = {
      MAX_TEXTURE_SIZE: gl.getParameter(gl.MAX_TEXTURE_SIZE),
      MAX_RENDERBUFFER_SIZE: gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),
      MAX_DRAW_BUFFERS: gl.getParameter(gl.MAX_DRAW_BUFFERS),
      MAX_COLOR_ATTACHMENTS: gl.getParameter(gl.MAX_COLOR_ATTACHMENTS),
      MAX_TEXTURE_IMAGE_UNITS: gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),
      MAX_FRAGMENT_UNIFORM_VECTORS: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),
      MAX_VARYING_VECTORS: gl.getParameter(gl.MAX_VARYING_VECTORS),
      MAX_VIEWPORT_DIMS: gl.getParameter(gl.MAX_VIEWPORT_DIMS),
    };

    const exts = [
      'EXT_color_buffer_float',
      'EXT_color_buffer_half_float',
      'OES_texture_float_linear',
      'OES_texture_half_float_linear',
      'WEBGL_lose_context',
      'EXT_disjoint_timer_query_webgl2',
      'WEBGL_debug_renderer_info',
    ];
    const extReport: Record<string, boolean> = {};
    for (const e of exts) extReport[e] = !!gl.getExtension(e);

    const memInfo = (performance as unknown as { memory?: { totalJSHeapSize: number; usedJSHeapSize: number; jsHeapSizeLimit: number } }).memory;

    /* eslint-disable no-console */
    console.group('[diag] === GPU BANNER ===');
    console.log('vendor:', vendor);
    console.log('renderer:', rendererStr);
    console.log('webgl version:', gl.getParameter(gl.VERSION));
    console.log('GLSL:', gl.getParameter(gl.SHADING_LANGUAGE_VERSION));
    console.log('context attrs:', attrs);
    console.log('limits:', limits);
    console.log('extensions:', extReport);
    if (memInfo) {
      console.log(
        'JS heap (MB):',
        `used=${(memInfo.usedJSHeapSize / 1048576).toFixed(1)}`,
        `total=${(memInfo.totalJSHeapSize / 1048576).toFixed(1)}`,
        `limit=${(memInfo.jsHeapSizeLimit / 1048576).toFixed(1)}`,
      );
    }
    console.groupEnd();
    /* eslint-enable no-console */
  }

  /** Snapshot point. Call at every meaningful boundary. */
  snap(label: string): DiagSnapshot {
    const gl = this.renderer.getContext();
    let glErrCode = 0;
    // Drain all pending errors (gl.getError returns one at a time).
    let lastErr = 0;
    do {
      lastErr = gl.getError();
      if (lastErr !== 0) glErrCode = lastErr;
    } while (lastErr !== 0);

    const info = this.renderer.info;
    const programs = (info.programs?.length ?? 0) as number;
    const dCalls = info.render.calls - this.lastCalls;
    const dTris = info.render.triangles - this.lastTriangles;
    this.lastCalls = info.render.calls;
    this.lastTriangles = info.render.triangles;

    const snap: DiagSnapshot = {
      label,
      t: performance.now() - this.start,
      glError: GL_ERR[glErrCode] ?? `0x${glErrCode.toString(16)}`,
      threejs: {
        geometries: info.memory.geometries,
        textures: info.memory.textures,
        programs,
        calls: info.render.calls,
        triangles: info.render.triangles,
      },
    };
    this.snapshots.push(snap);

    /* eslint-disable no-console */
    console.log(
      `[diag] ${snap.t.toFixed(1).padStart(8)}ms ${label}`,
      `gl=${snap.glError}`,
      `geo=${snap.threejs.geometries} tex=${snap.threejs.textures} prog=${snap.threejs.programs}`,
      `Δcalls=${dCalls} Δtris=${dTris}`,
    );
    /* eslint-enable no-console */
    return snap;
  }

  /**
   * Wrap any GL operation, force a sync via gl.finish(), report duration and
   * any error. Slow — use only at boundaries, not hot loops.
   */
  measure<T>(label: string, fn: () => T): T {
    const gl = this.renderer.getContext();
    while (gl.getError() !== 0) {
      // drain
    }
    const t0 = performance.now();
    const r = fn();
    gl.finish();
    const dt = performance.now() - t0;
    let err = 0;
    let lastErr = 0;
    do {
      lastErr = gl.getError();
      if (lastErr !== 0) err = lastErr;
    } while (lastErr !== 0);
    /* eslint-disable no-console */
    console.log(
      `[diag] MEASURE ${label}: ${dt.toFixed(1)}ms gl=${GL_ERR[err] ?? `0x${err.toString(16)}`}`,
    );
    /* eslint-enable no-console */
    return r;
  }

  contextLossInfo(): void {
    const gl = this.renderer.getContext() as WebGL2RenderingContext;
    const ext = gl.getExtension('WEBGL_lose_context');
    /* eslint-disable no-console */
    console.group('[diag] === CONTEXT LOSS DUMP ===');
    console.log('isContextLost:', gl.isContextLost?.());
    console.log('snapshot history (last 10):', this.snapshots.slice(-10));
    console.log('threejs info at loss:', {
      geometries: this.renderer.info.memory.geometries,
      textures: this.renderer.info.memory.textures,
      programs: this.renderer.info.programs?.length,
      autoReset: this.renderer.info.autoReset,
    });
    if (ext) console.log('lose_context ext present');
    console.groupEnd();
    /* eslint-enable no-console */
  }

  dump(): DiagSnapshot[] {
    return this.snapshots.slice();
  }
}
