/**
 * BVHBuilder - TypeScript port of Eric Loftis's BVH_Quick_Builder.js
 *
 * SAH binning BVH builder. Input: per-triangle AABB array (9 floats/tri).
 * Output: BVH nodes written IN PLACE into the same array (8 floats/node).
 *
 * Node layout in aabb_array[8*i]:
 *   [0..2] minCorner.xyz
 *   [3]    maxCorner.x
 *   [4..5] maxCorner.yz
 *   [6]    triCount  (0 = inner node, >0 = leaf)
 *   [7]    leftFirst (inner: left child index; leaf: first triangle index)
 *
 * Triangle AABB input (9 floats/tri, offset 9*i):
 *   [0..2] min.xyz
 *   [3..5] max.xyz
 *   [6..8] centroid.xyz
 *
 * All state is function-local - re-entrant, no module-level mutable globals.
 */

const INF = Infinity;

interface BVHNode {
  minX: number;
  minY: number;
  minZ: number;
  maxX: number;
  maxY: number;
  maxZ: number;
  triCount: number;
  leftFirst: number;
}

function makeNode(): BVHNode {
  return {
    minX: INF,
    minY: INF,
    minZ: INF,
    maxX: -INF,
    maxY: -INF,
    maxZ: -INF,
    triCount: 0,
    leftFirst: 0,
  };
}

interface Bin {
  minX: number;
  minY: number;
  minZ: number;
  maxX: number;
  maxY: number;
  maxZ: number;
  triCount: number;
}

function makeBin(): Bin {
  return { minX: INF, minY: INF, minZ: INF, maxX: -INF, maxY: -INF, maxZ: -INF, triCount: 0 };
}

function binReset(b: Bin): void {
  b.minX = INF;
  b.minY = INF;
  b.minZ = INF;
  b.maxX = -INF;
  b.maxY = -INF;
  b.maxZ = -INF;
  b.triCount = 0;
}

function nodeAt(nodes: BVHNode[], index: number): BVHNode {
  const node = nodes[index];
  if (!node) throw new Error(`[pt-bvh] missing node ${index}`);
  return node;
}

function binAt(bins: Bin[], index: number): Bin {
  const bin = bins[index];
  if (!bin) throw new Error(`[pt-bvh] missing SAH bin ${index}`);
  return bin;
}

function triAt(indices: Uint32Array, index: number): number {
  const value = indices[index];
  if (value === undefined) throw new Error(`[pt-bvh] triangle index ${index} is out of range`);
  return value;
}

function scalarAt(values: Float32Array | Uint32Array, index: number, label: string): number {
  const value = values[index];
  if (value === undefined) throw new Error(`[pt-bvh] ${label} index ${index} is out of range`);
  return value;
}

function halfArea(
  mnX: number,
  mnY: number,
  mnZ: number,
  mxX: number,
  mxY: number,
  mxZ: number,
): number {
  const ex = mxX - mnX;
  const ey = mxY - mnY;
  const ez = mxZ - mnZ;
  return ex * ey + ey * ez + ez * ex;
}

function updateNodeBounds(node: BVHNode, triIdx: Uint32Array, aabbCopy: Float32Array): void {
  node.minX = INF;
  node.minY = INF;
  node.minZ = INF;
  node.maxX = -INF;
  node.maxY = -INF;
  node.maxZ = -INF;
  const first = node.leftFirst;
  for (let i = 0; i < node.triCount; i++) {
    const k9 = 9 * triAt(triIdx, first + i);
    const a0 = scalarAt(aabbCopy, k9, 'aabb');
    const a1 = scalarAt(aabbCopy, k9 + 1, 'aabb');
    const a2 = scalarAt(aabbCopy, k9 + 2, 'aabb');
    const a3 = scalarAt(aabbCopy, k9 + 3, 'aabb');
    const a4 = scalarAt(aabbCopy, k9 + 4, 'aabb');
    const a5 = scalarAt(aabbCopy, k9 + 5, 'aabb');
    if (a0 < node.minX) node.minX = a0;
    if (a1 < node.minY) node.minY = a1;
    if (a2 < node.minZ) node.minZ = a2;
    if (a3 > node.maxX) node.maxX = a3;
    if (a4 > node.maxY) node.maxY = a4;
    if (a5 > node.maxZ) node.maxZ = a5;
  }
}

function subdivide(
  nodeIdx: number,
  bvhNode: BVHNode[],
  triIdx: Uint32Array,
  aabbCopy: Float32Array,
  bins: Bin[],
  leftArea: Float32Array,
  rightArea: Float32Array,
  leftCountSum: Uint32Array,
  rightCountSum: Uint32Array,
  nodesUsed: { value: number },
  N_BINS: number,
): void {
  const node = nodeAt(bvhNode, nodeIdx);

  if (node.triCount < 2) {
    node.leftFirst = triAt(triIdx, node.leftFirst);
    return;
  }

  let bestCost = INF;
  let bestAxis = 0;
  let bestSplitPos = INF;

  for (let ax = 0; ax < 3; ax++) {
    let boundsMin = INF;
    let boundsMax = -INF;
    const first = node.leftFirst;
    for (let i = 0; i < node.triCount; i++) {
      const c = scalarAt(aabbCopy, 9 * triAt(triIdx, first + i) + 6 + ax, 'centroid');
      if (c < boundsMin) boundsMin = c;
      if (c > boundsMax) boundsMax = c;
    }
    if (boundsMin === boundsMax) continue;

    for (let i = 0; i < N_BINS; i++) binReset(binAt(bins, i));

    const scale = N_BINS / (boundsMax - boundsMin);
    for (let i = 0; i < node.triCount; i++) {
      const k = triAt(triIdx, first + i);
      const k9 = 9 * k;
      const centroid = scalarAt(aabbCopy, k9 + 6 + ax, 'centroid');
      const bi = Math.min(N_BINS - 1, Math.floor((centroid - boundsMin) * scale));
      const bin = binAt(bins, bi);
      bin.triCount++;
      const b0 = scalarAt(aabbCopy, k9, 'aabb');
      const b1 = scalarAt(aabbCopy, k9 + 1, 'aabb');
      const b2 = scalarAt(aabbCopy, k9 + 2, 'aabb');
      const b3 = scalarAt(aabbCopy, k9 + 3, 'aabb');
      const b4 = scalarAt(aabbCopy, k9 + 4, 'aabb');
      const b5 = scalarAt(aabbCopy, k9 + 5, 'aabb');
      if (b0 < bin.minX) bin.minX = b0;
      if (b1 < bin.minY) bin.minY = b1;
      if (b2 < bin.minZ) bin.minZ = b2;
      if (b3 > bin.maxX) bin.maxX = b3;
      if (b4 > bin.maxY) bin.maxY = b4;
      if (b5 > bin.maxZ) bin.maxZ = b5;
    }

    let lSum = 0;
    let lMnX = INF;
    let lMnY = INF;
    let lMnZ = INF;
    let lMxX = -INF;
    let lMxY = -INF;
    let lMxZ = -INF;
    let rSum = 0;
    let rMnX = INF;
    let rMnY = INF;
    let rMnZ = INF;
    let rMxX = -INF;
    let rMxY = -INF;
    let rMxZ = -INF;

    for (let i = 0; i < N_BINS - 1; i++) {
      const lb = binAt(bins, i);
      lSum += lb.triCount;
      leftCountSum[i] = lSum;
      if (lb.minX < lMnX) lMnX = lb.minX;
      if (lb.minY < lMnY) lMnY = lb.minY;
      if (lb.minZ < lMnZ) lMnZ = lb.minZ;
      if (lb.maxX > lMxX) lMxX = lb.maxX;
      if (lb.maxY > lMxY) lMxY = lb.maxY;
      if (lb.maxZ > lMxZ) lMxZ = lb.maxZ;
      leftArea[i] = halfArea(lMnX, lMnY, lMnZ, lMxX, lMxY, lMxZ);

      const rightIndex = N_BINS - 1 - i;
      const rb = binAt(bins, rightIndex);
      rSum += rb.triCount;
      rightCountSum[N_BINS - 2 - i] = rSum;
      if (rb.minX < rMnX) rMnX = rb.minX;
      if (rb.minY < rMnY) rMnY = rb.minY;
      if (rb.minZ < rMnZ) rMnZ = rb.minZ;
      if (rb.maxX > rMxX) rMxX = rb.maxX;
      if (rb.maxY > rMxY) rMxY = rb.maxY;
      if (rb.maxZ > rMxZ) rMxZ = rb.maxZ;
      rightArea[N_BINS - 2 - i] = halfArea(rMnX, rMnY, rMnZ, rMxX, rMxY, rMxZ);
    }

    const binScale = (boundsMax - boundsMin) / N_BINS;
    for (let i = 0; i < N_BINS - 1; i++) {
      const leftCount = scalarAt(leftCountSum, i, 'left count');
      const left = scalarAt(leftArea, i, 'left area');
      const rightCount = scalarAt(rightCountSum, i, 'right count');
      const right = scalarAt(rightArea, i, 'right area');
      const cost = leftCount * left + rightCount * right;
      if (cost < bestCost) {
        bestCost = cost;
        bestAxis = ax;
        bestSplitPos = boundsMin + binScale * (i + 1);
      }
    }
  }

  const parentArea = halfArea(node.minX, node.minY, node.minZ, node.maxX, node.maxY, node.maxZ);
  if (bestCost >= node.triCount * parentArea) bestSplitPos = INF;

  let leftCount = doPartition(node, triIdx, aabbCopy, bestAxis, bestSplitPos);

  if (leftCount === 0 || leftCount === node.triCount) {
    const ex = node.maxX - node.minX;
    const ey = node.maxY - node.minY;
    const ez = node.maxZ - node.minZ;
    let ax = 0;
    if (ey > ex) ax = 1;
    if (ez > (ax === 0 ? ex : ey)) ax = 2;
    const mn = ax === 0 ? node.minX : ax === 1 ? node.minY : node.minZ;
    const mx = ax === 0 ? node.maxX : ax === 1 ? node.maxY : node.maxZ;
    leftCount = doPartition(node, triIdx, aabbCopy, ax, mn + (mx - mn) * 0.5);
  }

  for (let axTry = 0; (leftCount === 0 || leftCount === node.triCount) && axTry < 3; axTry++) {
    let sum = 0;
    const first = node.leftFirst;
    for (let i = 0; i < node.triCount; i++) {
      sum += scalarAt(aabbCopy, 9 * triAt(triIdx, first + i) + 6 + axTry, 'centroid');
    }
    leftCount = doPartition(node, triIdx, aabbCopy, axTry, sum / node.triCount);
  }

  if (leftCount === 0 || leftCount === node.triCount) {
    node.leftFirst = triAt(triIdx, node.leftFirst);
    return;
  }

  const leftIdx = nodesUsed.value++;
  const rightIdx = nodesUsed.value++;
  while (bvhNode.length <= rightIdx) bvhNode.push(makeNode());

  const leftNode = nodeAt(bvhNode, leftIdx);
  const rightNode = nodeAt(bvhNode, rightIdx);
  leftNode.leftFirst = node.leftFirst;
  leftNode.triCount = leftCount;
  rightNode.leftFirst = node.leftFirst + leftCount;
  rightNode.triCount = node.triCount - leftCount;

  node.leftFirst = leftIdx;
  node.triCount = 0;

  updateNodeBounds(leftNode, triIdx, aabbCopy);
  updateNodeBounds(rightNode, triIdx, aabbCopy);

  subdivide(
    leftIdx,
    bvhNode,
    triIdx,
    aabbCopy,
    bins,
    leftArea,
    rightArea,
    leftCountSum,
    rightCountSum,
    nodesUsed,
    N_BINS,
  );
  subdivide(
    rightIdx,
    bvhNode,
    triIdx,
    aabbCopy,
    bins,
    leftArea,
    rightArea,
    leftCountSum,
    rightCountSum,
    nodesUsed,
    N_BINS,
  );
}

function doPartition(
  node: BVHNode,
  triIdx: Uint32Array,
  aabbCopy: Float32Array,
  axisNum: number,
  splitPos: number,
): number {
  let i = node.leftFirst;
  let j = i + node.triCount - 1;
  while (i <= j) {
    const iTri = triAt(triIdx, i);
    if (scalarAt(aabbCopy, 9 * iTri + 6 + axisNum, 'centroid') < splitPos) {
      i++;
    } else {
      const jTri = triAt(triIdx, j);
      triIdx[i] = jTri;
      triIdx[j] = iTri;
      j--;
    }
  }
  return i - node.leftFirst;
}

/**
 * Build a BVH over N triangles and write the node data back into aabb_array.
 *
 * @param aabb_array  Float32Array with N*9 floats (min.xyz, max.xyz, centroid.xyz per tri).
 *                    After the call, BVH nodes are written starting at offset 0
 *                    (node i occupies aabb_array[8*i .. 8*i+7]).
 * @param N           Number of triangles.
 * @param N_BINS      SAH bin count. Higher = better quality, slower build. Default 32.
 */
export function buildBVH(aabb_array: Float32Array, N: number, N_BINS = 32): void {
  if (N === 0) return;

  const aabbCopy = new Float32Array(aabb_array.buffer.slice(0, N * 9 * 4));
  const triIdx = new Uint32Array(N);
  for (let i = 0; i < N; i++) triIdx[i] = i;

  const bins: Bin[] = Array.from({ length: N_BINS }, makeBin);
  const leftArea = new Float32Array(N_BINS - 1);
  const rightArea = new Float32Array(N_BINS - 1);
  const leftCountSum = new Uint32Array(N_BINS - 1);
  const rightCountSum = new Uint32Array(N_BINS - 1);

  const bvhNode: BVHNode[] = Array.from({ length: Math.max(4, N * 2) }, makeNode);
  const nodesUsed = { value: 2 };

  const root = nodeAt(bvhNode, 0);
  root.leftFirst = 0;
  root.triCount = N;
  updateNodeBounds(root, triIdx, aabbCopy);

  subdivide(
    0,
    bvhNode,
    triIdx,
    aabbCopy,
    bins,
    leftArea,
    rightArea,
    leftCountSum,
    rightCountSum,
    nodesUsed,
    N_BINS,
  );

  const nodeCount = bvhNode.length;
  for (let i = 0; i < nodeCount; i++) {
    const n = nodeAt(bvhNode, i);
    const base = 8 * i;
    aabb_array[base + 0] = n.minX;
    aabb_array[base + 1] = n.minY;
    aabb_array[base + 2] = n.minZ;
    aabb_array[base + 3] = n.maxX;
    aabb_array[base + 4] = n.maxY;
    aabb_array[base + 5] = n.maxZ;
    aabb_array[base + 6] = n.triCount;
    aabb_array[base + 7] = n.leftFirst;
  }
}
