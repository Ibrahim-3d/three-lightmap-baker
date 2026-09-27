import { BakeError } from '../errors';
export declare function abortError(): BakeError;
/** Frame callback exceptions and cancellation always settle the owning promise. */
export declare function runAnimationTask(step: () => boolean, signal?: AbortSignal): Promise<void>;
//# sourceMappingURL=animationTask.d.ts.map