/**
 * Error class for everything thrown out of the bake pipeline.
 *
 * `phase` lets callers do typed dispatch (e.g. retry-on-bake but fail-fast on
 * validation) without parsing message strings.
 *
 * The constructor formats the message as `[baker:phase] message (mesh: name)`
 * so a single console.error of a BakeError is self-explaining.
 */
export type BakeErrorPhase = 'validation' | 'unwrap' | 'geometry' | 'bake' | 'flood' | 'denoise' | 'export' | 'context-loss' | 'capability';
export declare class BakeError extends Error {
    readonly phase: BakeErrorPhase;
    readonly meshName: string | undefined;
    constructor(message: string, phase: BakeErrorPhase, meshName?: string);
}
//# sourceMappingURL=errors.d.ts.map