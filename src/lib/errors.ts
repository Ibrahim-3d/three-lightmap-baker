/**
 * Error class for everything thrown out of the bake pipeline.
 *
 * `phase` lets callers do typed dispatch (e.g. retry-on-bake but fail-fast on
 * validation) without parsing message strings.
 *
 * The constructor formats the message as `[baker:phase] message (mesh: name)`
 * so a single console.error of a BakeError is self-explaining.
 */
export type BakeErrorPhase =
  | 'validation'
  | 'unwrap'
  | 'geometry'
  | 'bake'
  | 'flood'
  | 'denoise'
  | 'export';

export class BakeError extends Error {
  public readonly phase: BakeErrorPhase;
  public readonly meshName: string | undefined;

  constructor(message: string, phase: BakeErrorPhase, meshName?: string) {
    super(`[baker:${phase}] ${message}${meshName ? ` (mesh: ${meshName})` : ''}`);
    this.name = 'BakeError';
    this.phase = phase;
    this.meshName = meshName;
  }
}
