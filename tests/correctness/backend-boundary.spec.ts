import { expect, test } from '@playwright/test';
import type { WebGLRenderer } from 'three';
import {
  createRendererAdapter,
  drainRendererAdapter,
  getRendererBackend,
  getRendererBakeSupportIssue,
  getRendererHardwareInfo,
  installRendererLossGuard,
} from '../../packages/baker-classic/src/rendererAdapter';
import { getLightmapRuntimeCapabilities } from '../../packages/baker-classic/src/runtimeCapabilities';
import { detectGPUCapabilities } from '../../packages/baker-classic/src/gpu/Capabilities';

function fakeWebGLRenderer() {
  let finishCalls = 0;
  let lost = false;
  const domElement = new EventTarget();
  const debugInfo = {
    UNMASKED_VENDOR_WEBGL: 1,
    UNMASKED_RENDERER_WEBGL: 2,
  };
  const gl = {
    getExtension(name: string) {
      if (name === 'EXT_color_buffer_float') return {};
      if (name === 'WEBGL_debug_renderer_info') return debugInfo;
      return null;
    },
    getParameter(key: number) {
      if (key === debugInfo.UNMASKED_VENDOR_WEBGL) return 'Test Vendor';
      if (key === debugInfo.UNMASKED_RENDERER_WEBGL) return 'NVIDIA GeForce RTX Test';
      return null;
    },
    isContextLost() {
      return lost;
    },
    finish() {
      finishCalls++;
    },
  };

  const renderer = {
    isWebGLRenderer: true,
    domElement,
    capabilities: { maxTextureSize: 16384 },
    getContext: () => gl,
  } as unknown as WebGLRenderer;

  return {
    renderer,
    domElement,
    lose: () => {
      lost = true;
      domElement.dispatchEvent(new Event('webglcontextlost', { cancelable: true }));
    },
    finishCalls: () => finishCalls,
  };
}

test('renderer adapter owns WebGL capability, loss and drain behavior', async () => {
  const fake = fakeWebGLRenderer();
  const adapter = createRendererAdapter(fake.renderer);

  expect(getRendererBackend(adapter)).toBe('webgl');
  expect(getRendererBakeSupportIssue(adapter)).toBeNull();
  expect(getRendererHardwareInfo(adapter)).toEqual({
    vendor: 'Test Vendor',
    renderer: 'NVIDIA GeForce RTX Test',
    maxTextureSize: 16384,
  });
  expect(detectGPUCapabilities(adapter).backend).toBe('webgl');
  expect(detectGPUCapabilities(adapter).tier).toBe('discrete');

  let lossCount = 0;
  const release = installRendererLossGuard(adapter, () => lossCount++);
  fake.lose();
  expect(lossCount).toBe(1);
  release();
  fake.domElement.dispatchEvent(new Event('webglcontextlost', { cancelable: true }));
  expect(lossCount).toBe(1);

  await drainRendererAdapter(adapter);
  expect(fake.finishCalls()).toBe(1);
});

test('legacy adapters without backend remain WebGL', () => {
  const fake = fakeWebGLRenderer();
  expect(getRendererBackend({ renderer: fake.renderer })).toBe('webgl');
});

test('runtime reports WebGPU availability without selecting unsupported WebGPU baking', () => {
  const caps = getLightmapRuntimeCapabilities({
    window: {},
    document: {
      createElement: () => ({
        getContext: (id: string) => (id === 'webgl2' ? {} : null),
      }),
    },
    navigator: { gpu: {} },
    WebGL2RenderingContext: function WebGL2RenderingContext() {},
    requestAnimationFrame: () => 1,
  } as never);

  expect(caps.canBake).toBe(true);
  expect(caps.selectedBackend).toBe('webgl');
  expect(caps.backends).toEqual({
    webgl: 'available',
    webgpu: 'available',
  });
  expect(caps.features.webgpu).toBe('available');
  expect(caps.limitations.some((line) => line.includes('WebGPU baking is not implemented'))).toBe(
    true,
  );
});
