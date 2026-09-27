import { BufferAttribute, type BufferGeometry } from 'three';
/** Label UV-connected triangles. Match full edges, never isolated equal UV vertices. */
export function createChartIds(
  geometry: BufferGeometry,
  firstId = 1,
): { attribute: BufferAttribute; nextId: number } {
  const uv = geometry.getAttribute('uv2');
  const position = geometry.getAttribute('position');
  const index = geometry.index;
  const count = index?.count ?? position.count;
  const parents = Array.from({ length: count / 3 }, (_, i) => i);
  const root = (i: number): number => {
    while (parents[i] !== i) {
      i = parents[i] as number;
    }
    return i;
  };
  const vertex = (i: number): number => (index ? index.getX(i) : i);
  const key = (i: number): string =>
    `${uv.getX(i)},${uv.getY(i)}:${position.getX(i)},${position.getY(i)},${position.getZ(i)}`;
  const edges = new Map<string, number>();
  for (let i = 0; i < count; i += 3)
    for (let e = 0; e < 3; e++) {
      const a = key(vertex(i + e)),
        b = key(vertex(i + ((e + 1) % 3)));
      const edge = a < b ? `${a}|${b}` : `${b}|${a}`;
      const previous = edges.get(edge);
      if (previous !== undefined) parents[root(i / 3)] = root(previous);
      else edges.set(edge, i / 3);
    }
  const ids = new Map<number, number>();
  const data = new Float32Array(position.count);
  let nextId = firstId;
  for (let i = 0; i < count; i++) {
    const owner = root(Math.floor(i / 3));
    if (!ids.has(owner)) ids.set(owner, nextId++);
    data[vertex(i)] = ids.get(owner) as number;
  }
  return { attribute: new BufferAttribute(data, 1), nextId };
}
