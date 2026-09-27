/** Owned endpoint for the Comlink wire protocol used by the packaged xatlas worker. */
export declare class AtlasWorker {
    private signal?;
    private worker;
    private endpoint;
    private ports;
    private pending;
    private sequence;
    private failure;
    private timer;
    private readyResolve;
    private readyReject;
    private ready;
    private onAbort;
    constructor(script: string, signal?: AbortSignal | undefined, timeoutMs?: number);
    private onError;
    private onMessageError;
    private onMessage;
    private callback;
    private request;
    initialize(wasmUrl: string): Promise<void>;
    call<T>(method: string, ...args: unknown[]): Promise<T>;
    dispose(error?: Error): void;
}
//# sourceMappingURL=AtlasWorker.d.ts.map