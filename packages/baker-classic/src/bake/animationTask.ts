import { BakeError } from '../errors';
export function abortError(): BakeError {
  const error = new BakeError('aborted by signal', 'bake');
  error.name = 'AbortError';
  return error;
}
/** Frame callback exceptions and cancellation always settle the owning promise. */
export function runAnimationTask(step: () => boolean, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    let frame = 0,
      settled = false;
    const cleanup = (): void => {
      settled = true;
      cancelAnimationFrame(frame);
      signal?.removeEventListener('abort', abort);
    };
    const abort = (): void => {
      if (settled) return;
      cleanup();
      reject(signal?.reason ?? abortError());
    };
    const tick = (): void => {
      if (settled) return;
      try {
        if (signal?.aborted) {
          abort();
          return;
        }
        const done = step();
        if (settled) return;
        if (done) {
          cleanup();
          resolve();
        } else frame = requestAnimationFrame(tick);
      } catch (error) {
        cleanup();
        reject(error);
      }
    };
    signal?.addEventListener('abort', abort, { once: true });
    if (signal?.aborted) abort();
    else frame = requestAnimationFrame(tick);
  });
}
