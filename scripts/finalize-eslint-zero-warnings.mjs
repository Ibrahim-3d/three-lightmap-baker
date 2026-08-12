import fs from 'node:fs';

function replaceExact(source, before, after, label) {
  if (!source.includes(before)) {
    throw new Error(`Missing expected pattern: ${label}`);
  }
  return source.replace(before, after);
}

function update(path, transform) {
  const before = fs.readFileSync(path, 'utf8');
  const after = transform(before);
  if (after === before) throw new Error(`No changes made to ${path}`);
  fs.writeFileSync(path, after);
}

update('apps/playground/src/three/SceneController.ts', (input) => {
  let s = input;
  s = replaceExact(
    s,
    `    const meshIds = new Set(this.meshes.map((m) => m.uuid));\n    let obj: Object3D | null = hits[0]!.object;`,
    `    const meshIds = new Set(this.meshes.map((m) => m.uuid));\n    const firstHit = hits[0];\n    if (!firstHit) return null;\n    let obj: Object3D | null = firstHit.object;`,
    'SceneController closest hit',
  );
  s = replaceExact(
    s,
    `    if (meshIdx !== -1) {\n      const mesh = this.meshes[meshIdx]!;`,
    `    if (meshIdx !== -1) {\n      const mesh = this.meshes[meshIdx];\n      if (!mesh) return null;`,
    'SceneController detached mesh',
  );
  return s;
});

update('apps/playground/src/CornellBoxExample.ts', (input) => {
  let s = input;

  s = replaceExact(
    s,
    `    const stage = groups[0]!.refinement ? 'refined' : 'composite';\n    for (let i = 0; i < groups.length; i++) {\n      const g = groups[i]!;`,
    `    const firstGroup = groups[0];\n    if (!firstGroup) return;\n    const stage = firstGroup.refinement ? 'refined' : 'composite';\n    for (let i = 0; i < groups.length; i++) {\n      const g = groups[i];\n      if (!g) continue;`,
    'Cornell export groups',
  );

  s = replaceExact(
    s,
    `    const { GLTFExporter } = await import('three/examples/jsm/exporters/GLTFExporter');\n    const exporter = new GLTFExporter();\n    const result = await new Promise<ArrayBuffer>((resolve, reject) => {\n      exporter.parse(\n        this.sceneController.cornellRoot!,`,
    `    const root = this.sceneController.cornellRoot;\n    if (!root) throw new Error('[baker] scene root is unavailable');\n    const { GLTFExporter } = await import('three/examples/jsm/exporters/GLTFExporter');\n    const exporter = new GLTFExporter();\n    const result = await new Promise<ArrayBuffer>((resolve, reject) => {\n      exporter.parse(\n        root,`,
    'Cornell GLB root',
  );

  s = replaceExact(
    s,
    `    const first = hist[0]!;\n    const last = hist[hist.length - 1]!;`,
    `    const first = hist[0];\n    const last = hist[hist.length - 1];\n    if (!first || !last) return 0;`,
    'Cornell ETA history',
  );

  s = replaceExact(
    s,
    `  private getAtlasPreviewTextures(\n    layer = LAYERS.find((candidate) => candidate.id === this.options.layer) ?? LAYERS[0]!,\n  ): Texture[] {`,
    `  private getActiveAtlasLayer(): (typeof LAYERS)[number] {\n    const fallback = LAYERS[0];\n    if (!fallback) throw new Error('[baker] no render layers are registered');\n    return LAYERS.find((candidate) => candidate.id === this.options.layer) ?? fallback;\n  }\n\n  private getAtlasPreviewTextures(layer = this.getActiveAtlasLayer()): Texture[] {`,
    'Cornell atlas layer helper',
  );

  s = replaceExact(
    s,
    `      textures.push(layer.getLightMap({ group: this.bakeController.bakeGroups[i]! }) ?? dummy);`,
    `      const group = this.bakeController.bakeGroups[i];\n      if (!group) continue;\n      textures.push(layer.getLightMap({ group }) ?? dummy);`,
    'Cornell atlas group texture',
  );

  s = replaceExact(
    s,
    `    const layer = LAYERS.find((candidate) => candidate.id === this.options.layer) ?? LAYERS[0]!;`,
    `    const layer = this.getActiveAtlasLayer();`,
    'Cornell atlas info layer',
  );
  s = replaceExact(
    s,
    `    const layer = LAYERS.find((candidate) => candidate.id === this.options.layer) ?? LAYERS[0]!;`,
    `    const layer = this.getActiveAtlasLayer();`,
    'Cornell atlas render layer',
  );

  s = replaceExact(
    s,
    `    const target = this.atlasPreviewTarget!;\n    const material = this.atlasPreviewMaterial!;\n    const scene = this.atlasPreviewScene!;\n    const camera = this.atlasPreviewCamera!;`,
    `    const target = this.atlasPreviewTarget;\n    const material = this.atlasPreviewMaterial;\n    const scene = this.atlasPreviewScene;\n    const camera = this.atlasPreviewCamera;\n    if (!target || !material || !scene || !camera) {\n      throw new Error('[baker] atlas preview resources failed to initialize');\n    }`,
    'Cornell atlas preview resources',
  );

  s = replaceExact(
    s,
    `        material.uniforms.map!.value = textures[i];`,
    `        const mapUniform = material.uniforms.map;\n        if (!mapUniform) throw new Error('[baker] atlas preview map uniform is missing');\n        mapUniform.value = textures[i];`,
    'Cornell atlas preview uniform',
  );

  s = replaceExact(
    s,
    `  get scene() {`,
    `  get scene(): Scene {`,
    'Cornell scene getter return type',
  );

  s = replaceExact(
    s,
    `  getScene() {`,
    `  getScene(): Scene {`,
    'Cornell getScene return type',
  );

  s = replaceExact(
    s,
    `    return { r: buf[0]!, g: buf[1]!, b: buf[2]!, a: buf[3]! };`,
    `    return {\n      r: buf[0] ?? 0,\n      g: buf[1] ?? 0,\n      b: buf[2] ?? 0,\n      a: buf[3] ?? 0,\n    };`,
    'Cornell sampled pixel',
  );

  return s;
});

console.info('[lint-codemod] final assertion/return-type fixes applied');
