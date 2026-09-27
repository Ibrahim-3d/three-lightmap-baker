import { BoxGeometry, PlaneGeometry, Mesh, BufferAttribute } from 'three';
import {
  generateAtlas,
  loadXAtlasThree,
} from '../../packages/baker-classic/src/atlas/generateAtlas';
import { AtlasWorker } from '../../packages/baker-classic/src/atlas/AtlasWorker';
import { createChartIds } from '../../packages/baker-classic/src/atlas/chartIds';

export async function validateWorkers() {
  const NativeWorker = window.Worker;
  let live = 0;
  window.Worker = class extends NativeWorker {
    private ended = false;
    constructor(url: string | URL, options?: WorkerOptions) {
      super(url, options);
      live++;
    }
    override terminate() {
      if (!this.ended) {
        live--;
        this.ended = true;
      }
      super.terminate();
    }
  } as typeof Worker;
  const failure = async (script: string, timeout = 1000) => {
    const worker = new AtlasWorker(script, undefined, timeout);
    try {
      await worker.initialize('unused');
      return false;
    } catch {
      return true;
    } finally {
      worker.dispose();
    }
  };
  const mesh = new Mesh(new BoxGeometry());
  const original = Array.from(mesh.geometry.getAttribute('position').array);
  const nativePost = MessagePort.prototype.postMessage;
  let packedAbort = false;
  try {
    const error = await failure("throw new Error('injected worker failure')");
    const rejected = await failure("Promise.reject(new Error('injected startup rejection'))");
    const timeout = await failure('', 30);
    const badWasm = URL.createObjectURL(new Blob(['invalid wasm'], { type: 'application/wasm' }));
    let wasmFailure = false;
    try {
      await loadXAtlasThree({ wasmUrl: badWasm });
    } catch {
      wasmFailure = true;
    } finally {
      URL.revokeObjectURL(badWasm);
    }
    let fetchFailure = false;
    try {
      await loadXAtlasThree({ scriptUrl: '/missing-xatlas-loader.js' });
    } catch {
      fetchFailure = true;
    }

    const ac = new AbortController();
    const hangingUrl = URL.createObjectURL(
      new Blob(['/* no RPC endpoint */'], { type: 'text/javascript' }),
    );
    const loading = loadXAtlasThree({ scriptUrl: hangingUrl, signal: ac.signal });
    setTimeout(() => ac.abort(), 30);
    let loadAbort = false;
    try {
      await loading;
    } catch (e) {
      loadAbort = (e as Error).name === 'AbortError';
    }
    URL.revokeObjectURL(hangingUrl);
    const packController = new AbortController();
    MessagePort.prototype.postMessage = function (...args: any[]) {
      const result = (nativePost as any).apply(this, args);
      if (args[0]?.type === 'APPLY' && args[0]?.path?.[0] === 'generateAtlas') {
        packedAbort = true;
        queueMicrotask(() => packController.abort());
      }
      return result;
    };
    let packAbort = false;
    const start = performance.now();
    try {
      await generateAtlas([mesh], { resolution: 128, signal: packController.signal });
    } catch (e) {
      packAbort = (e as Error).name === 'AbortError';
    }
    const abortMs = performance.now() - start;
    MessagePort.prototype.postMessage = nativePost;
    const restored =
      !mesh.geometry.hasAttribute('uv2') &&
      original.every((v, i) => mesh.geometry.getAttribute('position').array[i] === v);
    await generateAtlas([mesh], { resolution: 128 });
    const recovered = mesh.geometry.hasAttribute('uv2');
    // Force an RPC method error and verify pending promises settle and the worker closes.
    const rpcWorker = new AtlasWorker(
      "self.onmessage = e => self.postMessage({id:e.data.id,type:'HANDLER',name:'throw',value:{isError:true,value:{message:'injected RPC failure'}}})",
    );
    let rpcFailure = false;
    try {
      await rpcWorker.call('bad');
    } catch {
      rpcFailure = true;
    } finally {
      rpcWorker.dispose();
    }
    return {
      error,
      rejected,
      timeout,
      loadAbort,
      packAbort,
      packedAbort,
      restored,
      recovered,
      rpcFailure,
      wasmFailure,
      fetchFailure,
      live,
      abortMs,
    };
  } finally {
    MessagePort.prototype.postMessage = nativePost;
    window.Worker = NativeWorker;
    mesh.geometry.dispose();
  }
}

export async function validateAtlasEdges() {
  const outcomes: Record<string, boolean | number> = {};
  for (const resolution of [16, 64, 128]) {
    const mesh = new Mesh(new BoxGeometry());
    try {
      await generateAtlas([mesh], { resolution });
      const uv = mesh.geometry.getAttribute('uv2');
      outcomes[`valid${resolution}`] = Array.from(uv.array).every(
        (v) => Number.isFinite(v) && v >= 0 && v <= 1,
      );
      outcomes[`charts${resolution}`] = createChartIds(mesh.geometry).nextId - 1;
    } catch {
      outcomes[`rejected${resolution}`] = !mesh.geometry.hasAttribute('uv2');
    } finally {
      mesh.geometry.dispose();
    }
  }
  const thin = new Mesh(new PlaneGeometry(100, 0.001));
  try {
    await generateAtlas([thin], { resolution: 128 });
    outcomes.thinFinite = Array.from(thin.geometry.getAttribute('uv2').array).every(
      Number.isFinite,
    );
  } finally {
    thin.geometry.dispose();
  }
  const huge = new Mesh(new PlaneGeometry());
  huge.geometry.setAttribute('position', new BufferAttribute(new Float32Array(65536 * 3), 3));
  try {
    await generateAtlas([huge], { resolution: 128 });
    outcomes.overflowRejected = false;
  } catch {
    outcomes.overflowRejected = !huge.geometry.hasAttribute('uv2');
  } finally {
    huge.geometry.dispose();
  }
  const dense = Array.from({ length: 12 }, () => new Mesh(new BoxGeometry()));
  try {
    await generateAtlas(dense, { resolution: 128, texelsPerUnit: 10000 });
    outcomes.denseFinite = dense.every((m) =>
      Array.from(m.geometry.getAttribute('uv2').array).every(Number.isFinite),
    );
  } catch {
    outcomes.denseRestored = dense.every((m) => !m.geometry.hasAttribute('uv2'));
  } finally {
    dense.forEach((m) => m.geometry.dispose());
  }
  return outcomes;
}
