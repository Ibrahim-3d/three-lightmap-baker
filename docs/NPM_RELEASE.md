# npm Release Checklist

This is the release checklist for the public `lightmap-baker` WebGL package.

Publishing is always explicit. Normal development and cleanup must not create tags, GitHub Releases, version bumps, or run a real `npm publish`.

## Release state

The repository currently targets `lightmap-baker@1.1.0`.

That version is **not released** until all three agree:

1. npm contains the intended artifact;
2. Git tag `v1.1.0` exists;
3. the matching GitHub Release exists.

## 1. Candidate validation

Before publication:

- `master` contains only the intended package changes;
- working tree is clean;
- `package.json` has the intended version;
- README and shipped docs match the package;
- Three.js peer range matches the tested line;
- no editor/Studio dependencies are owned by this library repository.

Current compatibility target:

```text
three >=0.185.1 <0.186.0
THREE.WebGLRenderer
WebGL 2
EXT_color_buffer_float
```

## 2. Automated release check

Run on the actual candidate commit:

```bash
pnpm install --frozen-lockfile
pnpm run release:check
```

The release check covers:

- source TypeScript;
- example TypeScript;
- ESLint;
- Prettier;
- browser correctness tests;
- npm package build;
- TypeScript declarations;
- ESM/CJS/tarball import checks;
- `npm publish --dry-run --access public`.

Do not continue if it fails.

## 3. Hardware validation

If a change affects lighting, GPU resource behavior, atlas generation, filters, probes or renderer lifecycle, validate it on a real supported WebGL2 GPU/browser path.

Record:

- browser / OS;
- GPU and reported WebGL renderer;
- representative bake settings;
- focused numerical/correctness results;
- representative visual result.

Do not treat software/headless WebGL CI as evidence of production GPU output quality.

## 4. Inspect the package

Inspect `npm pack` / dry-run output.

Expected public material includes:

- `dist/package`;
- `README.md`;
- `CHANGELOG.md`;
- `LICENSE`;
- `THIRD_PARTY_LICENSES.md`;
- `docs/GETTING_STARTED.md`;
- `docs/API_STATUS.md`;
- `docs/LIGHT_PROBES.md`;
- `docs/MAINTENANCE.md`;
- `docs/architecture.md`.

Confirm no editor/Studio source or UI runtime dependencies are shipped.

## 5. Publish

Only after explicit approval:

```bash
npm publish --access public
```

Then verify:

```bash
npm view lightmap-baker version
npm view lightmap-baker peerDependencies
npm view lightmap-baker dist
```

Test a clean consumer install with the supported Three.js version.

## 6. Tag and GitHub Release

Only after the npm artifact is confirmed healthy:

- create the matching Git tag;
- create the GitHub Release from the same commit;
- use `CHANGELOG.md` as the release-note source.

Release notes must call out:

- browser/WebGL requirement;
- supported Three.js range;
- material/shader transport limits;
- probe support;
- that WebGPU/headless/cloud work is outside this repository.
