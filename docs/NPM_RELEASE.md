# npm v1 Release Checklist

This is the repository-side publication checklist for `three-lightmap-baker`.

Publishing is always explicit. Do not tag, release, version-bump or run the real `npm publish` command as a side effect of normal development.

## 1. Release candidate state

Before publication:

- `master` contains the intended release changes;
- working tree is clean;
- package version is the intended version;
- README and public docs describe the code actually being published;
- Three.js peer range matches the tested line;
- no demo/editor runtime packages have leaked into public package dependencies.

Current v1 compatibility target:

```text
three >=0.185.1 <0.186.0
```

## 2. Hardware validation

Run hardware-sensitive rendering checks on a real supported GPU, not a software/headless CI renderer.

At minimum validate:

```bash
pnpm exec playwright test --headed --workers=1 tests/e2e/material-gi.spec.ts
pnpm exec playwright test --headed --workers=1 tests/e2e/scene-presets.spec.ts -g "bake-cornell-draft survives a preset switch"
```

Also manually confirm:

- Cornell produces visible non-black baked lighting;
- textured GI behaves correctly;
- Gym / Desert / Backrooms load;
- native probe workflow behaves normally;
- a new playground project starts with the intended probe intensity.

## 3. Full release check

Run on the actual release commit:

```bash
pnpm install --frozen-lockfile
pnpm run release:check
```

`release:check` covers:

- source TypeScript;
- example TypeScript;
- ESLint;
- Prettier;
- the full browser test suite, including hardware-marked tests when run locally;
- demo build;
- bundle budget;
- npm package build;
- TypeScript declarations;
- isolated ESM/CJS/tarball import checks;
- `npm publish --dry-run --access public`.

Do not continue if this command fails.

## 4. Inspect the dry-run package

Confirm the tarball contains only intended public material, especially:

- `dist/package`;
- `README.md`;
- `CHANGELOG.md`;
- `LICENSE`;
- `THIRD_PARTY_LICENSES.md`;
- `docs/GETTING_STARTED.md`;
- `docs/API_STATUS.md`;
- `docs/LIGHT_PROBES.md`;
- `docs/ROADMAP.md`.

Confirm the package does not ship playground/editor source or Preact UI runtime dependencies.

## 5. Registry/account checks

Before the real publish command:

```bash
npm whoami
npm view three-lightmap-baker
```

Verify:

- npm authentication is using the intended account;
- the package name is available or owned by the intended account;
- 2FA / provenance requirements are understood before publication.

## 6. Publish

Only after explicit approval:

```bash
npm publish --access public
```

Do not run the real publish command without Ibrahim's explicit release instruction.

## 7. Verify the registry artifact

After publication:

```bash
npm view three-lightmap-baker version
npm view three-lightmap-baker peerDependencies
npm view three-lightmap-baker dist
```

Then test from a clean consumer project:

```bash
mkdir baker-consumer-smoke
cd baker-consumer-smoke
npm init -y
npm install three three-lightmap-baker typescript
```

Compile/import a minimal TypeScript consumer and run a browser integration smoke.

## 8. GitHub release/tag

Create the corresponding Git tag/GitHub Release only after the npm artifact has been confirmed healthy.

Release notes should use `CHANGELOG.md` as the source of truth and call out:

- browser/WebGL requirement;
- Three r185 compatibility;
- textured/multi-material GI;
- native `LightProbeGrid` support;
- material-transport limitations;
- Node/WebGPU status.
