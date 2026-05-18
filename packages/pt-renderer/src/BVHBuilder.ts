/**
 * BVHBuilder — TypeScript port of Eric Loftis's BVH_Quick_Builder.js
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
 * All state is function-local — re-entrant, no module-level mutable globals.
 */

const INF = Infinity;

// ── BVH node ────────────────────────────────────────────────────────────────

interface BVHNode {
  minX: number; minY: number; minZ: number;
  maxX: number; maxY: number; maxZ: number;
  triCount: number;
  leftFirst: number;
}

function makeNode(): BVHNode {
  return { minX: INF, minY: INF, minZ: INF, maxX: -INF, maxY: -INF, maxZ: -INF, triCount: 0, leftFirst: 0 };
}

// ── Bin ─────────────────────────────────────────────────────────────────────

interface Bin {
  minX: number; minY: number; minZ: number;
  maxX: number; maxY: number; maxZ: number;
  triCount: number;
}

function makeBin(): Bin {
  return { minX: INF, minY: INF, minZ: INF, maxX: -INF, maxY: -INF, maxZ: -INF, triCount: 0 };
}

function binReset(b: Bin): void {
  b.minX = INF; b.minY = INF; b.minZ = INF;
  b.maxX = -INF; b.maxY = -INF; b.maxZ = -INF;
  b.triCount = 0;
}

// ── Surface area of an AABB ──────────────────────────────────────────────────

function halfArea(mnX: number, mnY: number, mnZ: number, mxX: number, mxY: number, mxZ: number): number {
  const ex = mxX - mnX, ey = mxY - mnY, ez = mxZ - mnZ;
  return ex * ey + ey * ez + ez * ex;
}

// ── UpdateNodeBounds ─────────────────────────────────────────────────────────

function updateNodeBounds(
  node: BVHNode,
  triIdx: Uint32Array,
  aabbCopy: Float32Array,
): void {
  node.minX = INF; node.minY = INF; node.minZ = INF;
  node.maxX = -INF; node.maxY = -INF; node.maxZ = -INF;
  const first = node.leftFirst;
  for (let i = 0; i < node.triCount; i++) {
    const k9 = 9 * triIdx[first + i]!;
    const a0=aabbCopy[k9]!,a1=aabbCopy[k9+1]!,a2=aabbCopy[k9+2]!,a3=aabbCopy[k9+3]!,a4=aabbCopy[k9+4]!,a5=aabbCopy[k9+5]!;
    if (a0 < node.minX) node.minX = a0; if (a1 < node.minY) node.minY = a1; if (a2 < node.minZ) node.minZ = a2;
    if (a3 > node.maxX) node.maxX = a3; if (a4 > node.maxY) node.maxY = a4; if (a5 > node.maxZ) node.maxZ = a5;
  }
}

// ── Subdivide (recursive SAH binning split) ──────────────────────────────────

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
  const node = bvhNode[nodeIdx]!;

  // Leaf: single triangle (can't split further)
  if (node.triCount < 2) {
    node.leftFirst = triIdx[node.leftFirst]!;
    return;
  }

  // ── SAH binning over 3 axes ──────────────────────────────────────────────
  let bestCost = INF, bestAxis = 0, bestSplitPos = INF;

  for (let ax = 0; ax < 3; ax++) {
    let boundsMin = INF, boundsMax = -INF;
    const first = node.leftFirst;
    for (let i = 0; i < node.triCount; i++) {
      const c = aabbCopy[9 * triIdx[first + i]! + 6 + ax]!;
      if (c < boundsMin) boundsMin = c;
      if (c > boundsMax) boundsMax = c;
    }
    if (boundsMin === boundsMax) continue;

    for (let i = 0; i < N_BINS; i++) binReset(bins[i]!);

    const scale = N_BINS / (boundsMax - boundsMin);
    for (let i = 0; i < node.triCount; i++) {
      const k = triIdx[first + i]!;
      const k9 = 9 * k;
      const centroid = aabbCopy[k9 + 6 + ax]!;
      const bi = Math.min(N_BINS - 1, Math.floor((centroid - boundsMin) * scale));
      const bin = bins[bi]!;
      bin.triCount++;
      const b0=aabbCopy[k9]!,b1=aabbCopy[k9+1]!,b2=aabbCopy[k9+2]!,b3=aabbCopy[k9+3]!,b4=aabbCopy[k9+4]!,b5=aabbCopy[k9+5]!;
      if (b0 < bin.minX) bin.minX = b0; if (b1 < bin.minY) bin.minY = b1; if (b2 < bin.minZ) bin.minZ = b2;
      if (b3 > bin.maxX) bin.maxX = b3; if (b4 > bin.maxY) bin.maxY = b4; if (b5 > bin.maxZ) bin.maxZ = b5;
    }

    // Prefix scan: left areas and counts
    let lSum = 0;
    let lMnX = INF, lMnY = INF, lMnZ = INF, lMxX = -INF, lMxY = -INF, lMxZ = -INF;
    let rSum = 0;
    let rMnX = INF, rMnY = INF, rMnZ = INF, rMxX = -INF, rMxY = -INF, rMxZ = -INF;

    for (let i = 0; i < N_BINS - 1; i++) {
      const lb = bins[i]!;
      lSum += lb.triCount; leftCountSum[i] = lSum;
      if (lb.minX < lMnX) lMnX = lb.minX; if (lb.minY < lMnY) lMnY = lb.minY; if (lb.minZ < lMnZ) lMnZ = lb.minZ;
      if (lb.maxX > lMxX) lMxX = lb.maxX; if (lb.maxY > lMxY) lMxY = lb.maxY; if (lb.maxZ > lMxZ) lMxZ = lb.maxZ;
      leftArea[i] = halfArea(lMnX, lMnY, lMnZ, lMxX, lMxY, lMxZ);

      const rb = bins[N_BINS - 1 - i]!;
      rSum += rb.triCount; rightCountSum[N_BINS - 2 - i] = rSum;
      if (rb.minX < rMnX) rMnX = rb.minX; if (rb.minY < rMnY) rMnY = rb.minY; if (rb.minZ < rMnZ) rMnZ = rb.minZ;
      if (rb.maxX > rMxX) rMxX = rb.maxX; if (rb.maxY > rMxY) rMxY = rb.maxY; if (rb.maxZ > rMxZ) rMxZ = rb.maxZ;
      rightArea[N_BINS - 2 - i] = halfArea(rMnX, rMnY, rMnZ, rMxX, rMxY, rMxZ);
    }

    const binScale = (boundsMax - boundsMin) / N_BINS;
    for (let i = 0; i < N_BINS - 1; i++) {
      const cost = leftCountSum[i]! * leftArea[i]! + rightCountSum[i]! * rightArea[i]!;
      if (cost < bestCost) {
        bestCost = cost;
        bestAxis = ax;
        bestSplitPos = boundsMin + binScale * (i + 1);
      }
    }
  }

  // Reject split if it doesn't beat parent cost
  const parentArea = halfArea(node.minX, node.minY, node.minZ, node.maxX, node.maxY, node.maxZ);
  if (bestCost >= node.triCount * parentArea) bestSplitPos = INF;

  // ── Partition in-place ───────────────────────────────────────────────────
  let leftCount = doPartition(node, triIdx, aabbCopy, bestAxis, bestSplitPos);

  // Fallback 1: spatial median on longest axis
  if (leftCount === 0 || leftCount === node.triCount) {
    const ex = node.maxX - node.minX, ey = node.maxY - node.minY, ez = node.maxZ - node.minZ;
    let ax = 0;
    if (ey > ex) ax = 1;
    if (ez > (ax === 0 ? ex : ey)) ax = 2;
    const mn = ax === 0 ? node.minX : ax === 1 ? node.minY : node.minZ;
    const mx = ax === 0 ? node.maxX : ax === 1 ? node.maxY : node.maxZ;
    leftCount = doPartition(node, triIdx, aabbCopy, ax, mn + (mx - mn) * 0.5);
  }

  // Fallback 2: object median splits across all 3 axes
  for (let axTry = 0; (leftCount === 0 || leftCount === node.triCount) && axTry < 3; axTry++) {
    let sum = 0;
    const first = node.leftFirst;
    for (let i = 0; i < node.triCount; i++) sum += aabbCopy[9 * triIdx[first + i]! + 6 + axTry]!;
    leftCount = doPartition(node, triIdx, aabbCopy, axTry, sum / node.triCount);
  }

  if (leftCount === 0 || leftCount === node.triCount) {
    // All fallbacks failed — force leaf
    node.leftFirst = triIdx[node.leftFirst]!;
    return;
  }

  // ── Create child nodes ───────────────────────────────────────────────────
  const leftIdx  = nodesUsed.value++;
  const rightIdx = nodesUsed.value++;

  while (bvhNode.length <= rightIdx) bvhNode.push(makeNode());

  bvhNode[leftIdx]!.leftFirst = node.leftFirst;
  bvhNode[leftIdx]!.triCount  = leftCount;
  bvhNode[rightIdx]!.leftFirst = node.leftFirst + leftCount;
  bvhNode[rightIdx]!.triCount  = node.triCount - leftCount;

  node.leftFirst = leftIdx;
  node.triCount  = 0; // inner node

  updateNodeBounds(bvhNode[leftIdx]!, triIdx, aabbCopy);
  updateNodeBounds(bvhNode[rightIdx]!, triIdx, aabbCopy);

  subdivide(leftIdx,  bvhNode, triIdx, aabbCopy, bins, leftArea, rightArea, leftCountSum, rightCountSum, nodesUsed, N_BINS);
  subdivide(rightIdx, bvhNode, triIdx, aabbCopy, bins, leftArea, rightArea, leftCountSum, rightCountSum, nodesUsed, N_BINS);
}

/** In-place partition: returns leftCount. */
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
    if (aabbCopy[9 * triIdx[i]! + 6 + axisNum]! < splitPos) {
      i++;
    } else {
      const tmp = triIdx[i]!; triIdx[i] = triIdx[j]!; triIdx[j] = tmp;
      j--;
    }
  }
  return i - node.leftFirst;
}

// ── Public API ───────────────────────────────────────────────────────────────

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
  const triIdx   = new Uint32Array(N);
  for (let i = 0; i < N; i++) triIdx[i] = i;

  const bins:          Bin[]        = Array.from({ length: N_BINS }, makeBin);
  const leftArea:      Float32Array = new Float32Array(N_BINS - 1);
  const rightArea:     Float32Array = new Float32Array(N_BINS - 1);
  const leftCountSum:  Uint32Array  = new Uint32Array(N_BINS - 1);
  const rightCountSum: Uint32Array  = new Uint32Array(N_BINS - 1);

  // Pre-allocate node pool (2*N is the upper bound for a binary tree over N leaves)
  const bvhNode: BVHNode[] = Array.from({ length: Math.max(4, N * 2) }, makeNode);
  const nodesUsed = { value: 2 }; // 0=root, 1=unused (keeps children at even/odd pairs)

  // Root: all triangles
  const root = bvhNode[0]!;
  root.leftFirst = 0;
  root.triCount  = N;
  updateNodeBounds(root, triIdx, aabbCopy);

  subdivide(0, bvhNode, triIdx, aabbCopy, bins, leftArea, rightArea, leftCountSum, rightCountSum, nodesUsed, N_BINS);

  // Write BVH node data into aabb_array (8 floats per node)
  const nodeCount = bvhNode.length;
  for (let i = 0; i < nodeCount; i++) {
    const n = bvhNode[i]!;
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
