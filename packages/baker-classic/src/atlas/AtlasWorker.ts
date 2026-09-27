import { BakeError } from '../errors';

/** Owned endpoint for the Comlink wire protocol used by the packaged xatlas worker. */
export class AtlasWorker {
  private worker: Worker;
  private endpoint: Worker | MessagePort;
  private ports: MessagePort[] = [];
  private pending = new Map<
    string,
    { resolve: (value: unknown) => void; reject: (error: Error) => void }
  >();
  private sequence = 0;
  private failure: Error | null = null;
  private timer: ReturnType<typeof setTimeout>;
  private readyResolve!: () => void;
  private readyReject!: (error: Error) => void;
  private ready: Promise<void>;
  private onAbort = (): void =>
    this.dispose(new DOMException('Atlas operation aborted', 'AbortError'));

  constructor(
    script: string,
    private signal?: AbortSignal,
    timeoutMs = 120000,
  ) {
    // Emscripten initialization can reject asynchronously, outside the RPC request.
    const bootstrap = `self.addEventListener('unhandledrejection', e => {
      self.postMessage({ atlasWorkerError: String(e.reason?.message || e.reason) });
      e.preventDefault();
    });\n`;
    const url = URL.createObjectURL(new Blob([bootstrap, script], { type: 'text/javascript' }));
    try {
      this.worker = new Worker(url, { type: 'module' });
    } finally {
      URL.revokeObjectURL(url);
    }
    this.endpoint = this.worker;
    this.ready = new Promise((resolve, reject) => {
      this.readyResolve = resolve;
      this.readyReject = reject;
    });
    // A failure may precede initialize() subscribing to readiness.
    void this.ready.catch(() => undefined);
    this.worker.addEventListener('message', this.onMessage);
    this.worker.addEventListener('error', this.onError);
    this.worker.addEventListener('messageerror', this.onMessageError);
    this.timer = setTimeout(
      () => this.dispose(new BakeError('Atlas worker timed out', 'unwrap')),
      timeoutMs,
    );
    signal?.addEventListener('abort', this.onAbort, { once: true });
    if (signal?.aborted) this.onAbort();
  }

  private onError = (event: ErrorEvent): void => {
    event.preventDefault();
    this.dispose(new BakeError(`Atlas worker failed: ${event.message}`, 'unwrap'));
  };
  private onMessageError = (): void =>
    this.dispose(new BakeError('Atlas worker message could not be decoded', 'unwrap'));
  private onMessage = (event: MessageEvent): void => {
    const data = event.data;
    if (data?.atlasWorkerError) {
      this.dispose(new BakeError(`Atlas worker failed: ${data.atlasWorkerError}`, 'unwrap'));
      return;
    }
    const request = this.pending.get(data?.id);
    if (!request) return;
    this.pending.delete(data.id);
    if (data.type === 'HANDLER' && data.name === 'throw') {
      const value = data.value?.value;
      const error = new BakeError(`Atlas worker: ${value?.message ?? String(value)}`, 'unwrap');
      request.reject(error);
      this.dispose(error);
    } else if (data.type === 'HANDLER' && data.name === 'proxy') {
      const port = data.value as MessagePort;
      this.ports.push(port);
      request.resolve(port);
    } else request.resolve(data.value);
  };

  private callback(fn: (...args: unknown[]) => unknown): MessagePort {
    const channel = new MessageChannel();
    this.ports.push(channel.port1);
    channel.port1.onmessage = (event): void => {
      try {
        const value = fn(
          ...(event.data.argumentList ?? []).map((arg: { value: unknown }) => arg.value),
        );
        channel.port1.postMessage({ id: event.data.id, type: 'RAW', value });
      } catch (error) {
        this.dispose(error instanceof Error ? error : new Error(String(error)));
      }
    };
    return channel.port2;
  }

  private request(
    type: string,
    path: string[],
    args: unknown[],
    transfer: Transferable[] = [],
  ): Promise<unknown> {
    if (this.failure) return Promise.reject(this.failure);
    const id = String(++this.sequence);
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      try {
        this.endpoint.postMessage({ id, type, path, argumentList: args }, transfer);
      } catch (error) {
        this.dispose(error instanceof Error ? error : new Error(String(error)));
      }
    });
  }

  async initialize(wasmUrl: string): Promise<void> {
    if (this.failure) throw this.failure;
    const ports = [
      this.callback(() => this.readyResolve()),
      this.callback(() => wasmUrl),
      this.callback(() => undefined),
    ];
    const endpoint = await this.request(
      'CONSTRUCT',
      [],
      ports.map((value) => ({ type: 'HANDLER', name: 'proxy', value })),
      ports,
    );
    if (this.failure) throw this.failure;
    this.endpoint = endpoint as MessagePort;
    this.endpoint.addEventListener('message', this.onMessage);
    this.endpoint.addEventListener('messageerror', this.onMessageError);
    this.endpoint.start();
    await this.ready;
  }

  async call<T>(method: string, ...args: unknown[]): Promise<T> {
    return (await this.request(
      'APPLY',
      [method],
      args.map((value) => ({ type: 'RAW', value })),
    )) as T;
  }

  dispose(error: Error = new BakeError('Atlas worker closed', 'unwrap')): void {
    if (this.failure) return;
    this.failure = error;
    clearTimeout(this.timer);
    this.signal?.removeEventListener('abort', this.onAbort);
    this.worker.removeEventListener('message', this.onMessage);
    this.worker.removeEventListener('error', this.onError);
    this.worker.removeEventListener('messageerror', this.onMessageError);
    this.worker.terminate();
    for (const port of this.ports) {
      port.onmessage = null;
      port.close();
    }
    this.ports.length = 0;
    this.readyReject(error);
    for (const request of this.pending.values()) request.reject(error);
    this.pending.clear();
  }
}
