import { test, expect } from '@playwright/test';
import {
  Scene,
  Group,
  DirectionalLight,
  SpotLight,
  PointLight,
  RectAreaLight,
  Vector3,
  Color,
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  InstancedMesh,
  Matrix4,
} from 'three';
import {
  collectLightsFromScene,
  buildLightTexture,
} from '../../packages/baker-classic/src/lightmap/Lights';
import { preflightBakeScene } from '../../packages/baker-classic/src/bake/preflight';
import { prepareBakeScene } from '../../packages/baker-classic/src/bake/prepareScene';
import { toLinearColor, validateOptions } from '../../packages/baker-classic/src/bake/validation';
import { runAnimationTask } from '../../packages/baker-classic/src/bake/animationTask';
for (const Constructor of [DirectionalLight, SpotLight])
  test(`${Constructor.name} uses transformed target`, () => {
    const scene = new Scene(),
      parent = new Group(),
      light = new Constructor();
    parent.position.set(4, 2, 1);
    parent.add(light.target);
    light.position.set(1, 1, 1);
    light.rotation.set(0.8, 0.3, 0.1);
    scene.add(parent, light);
    scene.updateMatrixWorld(true);
    expect(
      collectLightsFromScene(scene)[0]!.direction.distanceTo(new Vector3(3, 1, 0).normalize()),
    ).toBeLessThan(1e-6);
  });
test('invisible and ignored ancestors suppress lights and receivers', () => {
  const scene = new Scene(),
    group = new Group();
  group.add(new PointLight(), new Mesh(new BoxGeometry(), new MeshStandardMaterial()));
  scene.add(group);
  for (const mode of ['hidden', 'ignored']) {
    group.visible = mode !== 'hidden';
    group.userData.lightmapIgnore = mode === 'ignored';
    expect(collectLightsFromScene(scene)).toHaveLength(0);
    const p = prepareBakeScene(scene, {});
    expect(p.meshes).toHaveLength(0);
    p.restore();
  }
});
test('rectangular orientation, range and decay survive packing', () => {
  const scene = new Scene(),
    area = new RectAreaLight(),
    point = new PointLight(0xffffff, 1, 7, 3);
  area.rotation.z = 0.7;
  scene.add(area, point);
  scene.updateMatrixWorld(true);
  const lights = collectLightsFromScene(scene);
  expect(lights[0]!.tangent!.distanceTo(new Vector3(Math.cos(0.7), Math.sin(0.7), 0))).toBeLessThan(
    1e-6,
  );
  expect(lights[1]!.params.slice(2)).toEqual([7, 3]);
  const packed = buildLightTexture(lights);
  expect(packed.texture.image.width).toBe(6);
  packed.texture.dispose();
});
test('instances expand independently and restore geometry/count', () => {
  const scene = new Scene(),
    geometry = new BoxGeometry(),
    source = new InstancedMesh(geometry, new MeshStandardMaterial(), 2);
  source.setMatrixAt(1, new Matrix4().makeTranslation(3, 0, 0));
  source.setColorAt(1, new Color(0.2, 0.3, 0.4));
  scene.add(source);
  const p = prepareBakeScene(scene, { [source.uuid]: { resolution: 128 } });
  expect(p.meshes).toHaveLength(2);
  expect(p.meshes[0]!.geometry).not.toBe(p.meshes[1]!.geometry);
  expect(p.meshes[1]!.getWorldPosition(new Vector3()).x).toBe(3);
  expect(p.perMesh[p.meshes[1]!.uuid]!.resolution).toBe(128);
  expect(source.count).toBe(0);
  p.restore();
  p.restore();
  expect(source.count).toBe(2);
  expect(source.children).toHaveLength(0);
  expect(source.geometry).toBe(geometry);
});
test('preflight rejects nonfinite attributes, singular transforms and partial geometry', () => {
  const scene = new Scene(),
    mesh = new Mesh(new BoxGeometry(), new MeshStandardMaterial());
  scene.add(mesh);
  mesh.geometry.getAttribute('position').setX(0, NaN);
  mesh.scale.x = 0;
  mesh.geometry.setDrawRange(3, 3);
  expect(
    preflightBakeScene(scene).filter((i) => i.severity === 'error').length,
  ).toBeGreaterThanOrEqual(3);
});
test('Color is not decoded twice and bounce depth is validated', () => {
  expect(toLinearColor(new Color(0.5, 0.2, 0.1), 0).r).toBe(0.5);
  expect(() => validateOptions({ bounces: 5 })).toThrow();
  expect(() => validateOptions({ bounces: 0 })).not.toThrow();
});
test('frame failures reject; cancellation settles without any animation frame', async () => {
  let tick: FrameRequestCallback | undefined;
  globalThis.requestAnimationFrame = (cb) => {
    tick = cb;
    return 1;
  };
  globalThis.cancelAnimationFrame = () => {};
  const failed = runAnimationTask(() => {
    throw new Error('injected');
  });
  tick!(0);
  await expect(failed).rejects.toThrow('injected');
  const c = new AbortController();
  const pending = runAnimationTask(() => false, c.signal);
  c.abort();
  await expect(pending).rejects.toHaveProperty('name', 'AbortError');
});
