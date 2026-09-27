## What changed

Describe the user-visible or engineering change.

## Why

What problem does this solve? Link the relevant issue when one exists.

## Validation

- [ ] `pnpm run check`
- [ ] `pnpm run build`
- [ ] Relevant focused tests passed
- [ ] Browser/GPU evidence included when the change is rendering-sensitive

Commands/results:

```text

```

## Visual / GPU evidence

For lighting, atlas, renderer or demo changes, include the browser, OS, GPU,
reported WebGL renderer, bake settings, and before/after captures when useful.

## Public API / compatibility

- [ ] No public API or compatibility change
- [ ] Public API/docs updated
- [ ] Breaking behavior and migration notes are explicit

## Release notes

- [ ] No user-visible release note needed
- [ ] `CHANGELOG.md#Unreleased` updated

## Contributor checklist

- [ ] Change is scoped; unrelated cleanup is excluded
- [ ] New GPU/resources have explicit ownership and disposal
- [ ] Existing bake/renderer invariants remain intact
- [ ] CLA requirements in `CONTRIBUTING.md` are satisfied
