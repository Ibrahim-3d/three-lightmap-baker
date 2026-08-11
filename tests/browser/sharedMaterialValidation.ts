import {
  BoxGeometry,
  DataTexture,
  Mesh,
  MeshStandardMaterial,
  RGBAFormat,
  Scene,
  type WebGLRenderer,
} from 'three';
import { captureLightmappedProbeGrid, LightmapBakeResult } from 'baker-classic';

export function validateSharedMaterialLightmaps(renderer: WebGLRenderer): {
  apply: {
    arraysPreserved: boolean;
    groupsPreserved: boolean;
    correctLightmaps: boolean;
    isolatedOnlyWhereNeeded: boolean;
  };
  capture: {
    renderedWithCorrectLightmaps: boolean;
    exactOwnershipRestored: boolean;
    stateRestored: boolean;
    exceptionSafe: boolean;
  };
} {
  const lightMapA = texture([255, 32, 16, 255]);
  const lightMapB = texture([16, 32, 255, 255]);
  const applyGeometryA = geometryWithUv2();
  const applyGeometryB = geometryWithUv2();
  const shared = new MeshStandardMaterial({ color: 0xffffff });
  const extraA = new MeshStandardMaterial({ color: 0x888888 });
  const extraB = new MeshStandardMaterial({ color: 0x444444 });
  const applyMaterialsA = [shared, extraA];
  const applyMaterialsB = [shared, extraB];
  const meshA = new Mesh(applyGeometryA, applyMaterialsA);
  const meshB = new Mesh(applyGeometryB, applyMaterialsB);
  const groupsA = JSON.stringify(applyGeometryA.groups);
  const groupsB = JSON.stringify(applyGeometryB.groups);
  const result = new LightmapBakeResult(
    renderer,
    new Map([
      [meshA, lightMapA],
      [meshB, lightMapB],
    ]),
    new Map([
      [meshA, 16],
      [meshB, 32],
    ]),
    {
      meshCount: 2,
      texelCount: 0,
      raysTraced: 0,
      duration: { uvUnwrap: 0, geometry: 0, bake: 0, refine: 0, total: 0 },
    },
    {
      groups: [],
      bvh: null as never,
      refinementOptions: { dilationIterations: 0 },
      denoise: false,
      matTexDispose: () => {},
    },
  );
  result.apply();
  const mountedA = meshA.material as MeshStandardMaterial[];
  const mountedB = meshB.material as MeshStandardMaterial[];
  const apply = {
    arraysPreserved: Array.isArray(meshA.material) && Array.isArray(meshB.material),
    groupsPreserved:
      JSON.stringify(applyGeometryA.groups) === groupsA &&
      JSON.stringify(applyGeometryB.groups) === groupsB,
    correctLightmaps:
      mountedA[0]?.lightMap === lightMapA &&
      mountedA[1]?.lightMap === lightMapA &&
      mountedB[0]?.lightMap === lightMapB &&
      mountedB[1]?.lightMap === lightMapB,
    isolatedOnlyWhereNeeded:
      mountedA[0] !== shared && mountedB[0] !== shared && mountedA[0] !== mountedB[0],
  };
  result.dispose();

  const scene = new Scene();
  const captureGeometryA = geometryWithUv2();
  const captureGeometryB = geometryWithUv2();
  const baseMap = texture([128, 160, 192, 255]);
  const previousLightMap = texture([64, 64, 64, 255]);
  const captureShared = new MeshStandardMaterial({ color: 0xffffff, map: baseMap });
  captureShared.lightMap = previousLightMap;
  captureShared.lightMapIntensity = 0.37;
  const captureMeshA = new Mesh(captureGeometryA, captureShared);
  const captureMeshB = new Mesh(captureGeometryB, captureShared);
  captureMeshA.position.x = -1;
  captureMeshB.position.x = 1;
  scene.add(captureMeshA, captureMeshB);
  scene.updateMatrixWorld(true);
  const originalAssignmentA = captureMeshA.material;
  const originalAssignmentB = captureMeshB.material;
  const originalChannelA = lightMapA.channel;
  const originalChannelB = lightMapB.channel;
  let renderedA = false;
  let renderedB = false;
  captureMeshA.onBeforeRender = (_renderer, _scene, _camera, _geometry, material) => {
    renderedA ||= (material as MeshStandardMaterial).lightMap === lightMapA;
  };
  captureMeshB.onBeforeRender = (_renderer, _scene, _camera, _geometry, material) => {
    renderedB ||= (material as MeshStandardMaterial).lightMap === lightMapB;
  };
  const captureResult = {
    lightmaps: new Map([
      [captureMeshA, lightMapA],
      [captureMeshB, lightMapB],
    ]),
  };
  const native = captureLightmappedProbeGrid(renderer, scene, captureResult as LightmapBakeResult, {
    counts: [2, 2, 2],
    maxProbes: 8,
    cubemapSize: 4,
    padding: 0.1,
  });
  scene.remove(native.grid);
  native.grid.dispose();

  const exactOwnershipRestored =
    captureMeshA.material === originalAssignmentA &&
    captureMeshB.material === originalAssignmentB &&
    captureMeshA.material === captureMeshB.material;
  const stateRestored =
    captureShared.map === baseMap &&
    captureShared.lightMap === previousLightMap &&
    captureShared.lightMapIntensity === 0.37 &&
    lightMapA.channel === originalChannelA &&
    lightMapB.channel === originalChannelB;

  let threw = false;
  try {
    captureLightmappedProbeGrid(renderer, scene, captureResult as LightmapBakeResult, {
      counts: [2, 2, 2],
      maxProbes: 8,
      cubemapSize: 4,
      resolveBaseColorMap: (mesh) => {
        if (mesh === captureMeshB) throw new Error('intentional capture setup failure');
        return undefined;
      },
    });
  } catch {
    threw = true;
  }
  const exceptionSafe =
    threw &&
    captureMeshA.material === originalAssignmentA &&
    captureMeshB.material === originalAssignmentB &&
    captureShared.map === baseMap &&
    captureShared.lightMap === previousLightMap &&
    captureMeshA.visible &&
    captureMeshB.visible;

  for (const material of [shared, extraA, extraB, captureShared]) material.dispose();
  for (const geometry of [applyGeometryA, applyGeometryB, captureGeometryA, captureGeometryB]) {
    geometry.dispose();
  }
  for (const textureToDispose of [lightMapA, lightMapB, baseMap, previousLightMap]) {
    textureToDispose.dispose();
  }

  return {
    apply,
    capture: {
      renderedWithCorrectLightmaps: renderedA && renderedB,
      exactOwnershipRestored,
      stateRestored,
      exceptionSafe,
    },
  };
}

export function validateUnboundSharedMaterialOwner(renderer: WebGLRenderer): {
  bakedReceivesLightmap: boolean;
  unboundRemainsOriginal: boolean;
  unboundHasNoLightmap: boolean;
  repeatedApplyReusesClone: boolean;
  packageOwnershipMarked: boolean;
  disposeRestoresBoundOwner: boolean;
  ownedCloneDisposedOnce: boolean;
  groupsPreserved: boolean;
} {
  const lightMap = texture([192, 160, 128, 255]);
  const shared = new MeshStandardMaterial({ color: 0xffffff });
  const bakedGeometry = geometryWithUv2();
  const dynamicGeometry = geometryWithUv2();
  const groupsBefore = JSON.stringify(bakedGeometry.groups);
  const baked = new Mesh(bakedGeometry, shared);
  const dynamic = new Mesh(dynamicGeometry, shared);
  dynamic.userData.lightmapIgnore = true;
  const result = new LightmapBakeResult(
    renderer,
    new Map([[baked, lightMap]]),
    new Map([[baked, 16]]),
    {
      meshCount: 1,
      texelCount: 0,
      raysTraced: 0,
      duration: { uvUnwrap: 0, geometry: 0, bake: 0, refine: 0, total: 0 },
    },
    {
      groups: [],
      bvh: null as never,
      refinementOptions: { dilationIterations: 0 },
      denoise: false,
      matTexDispose: () => {},
    },
  );

  result.apply();
  const firstClone = baked.material as MeshStandardMaterial;
  let disposeCount = 0;
  firstClone.addEventListener('dispose', () => disposeCount++);
  const bakedReceivesLightmap = firstClone !== shared && firstClone.lightMap === lightMap;
  const unboundRemainsOriginal = dynamic.material === shared;
  const unboundHasNoLightmap = shared.lightMap === null;
  const packageOwnershipMarked = firstClone.userData.bakerOwnedLightmapMaterial === true;
  result.apply();
  const repeatedApplyReusesClone = baked.material === firstClone && disposeCount === 0;
  const groupsPreserved = JSON.stringify(bakedGeometry.groups) === groupsBefore;

  result.dispose();
  const disposeRestoresBoundOwner = baked.material === shared && dynamic.material === shared;
  const ownedCloneDisposedOnce = disposeCount === 1;

  shared.dispose();
  bakedGeometry.dispose();
  dynamicGeometry.dispose();
  lightMap.dispose();

  return {
    bakedReceivesLightmap,
    unboundRemainsOriginal,
    unboundHasNoLightmap,
    repeatedApplyReusesClone,
    packageOwnershipMarked,
    disposeRestoresBoundOwner,
    ownedCloneDisposedOnce,
    groupsPreserved,
  };
}

function geometryWithUv2(): BoxGeometry {
  const geometry = new BoxGeometry(1, 1, 1);
  geometry.setAttribute('uv2', geometry.getAttribute('uv').clone());
  return geometry;
}

function texture(rgba: readonly [number, number, number, number]): DataTexture {
  const result = new DataTexture(new Uint8Array(rgba), 1, 1, RGBAFormat);
  result.needsUpdate = true;
  return result;
}
