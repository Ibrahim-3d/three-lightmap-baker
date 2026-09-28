# Contributing to the original WebGL LightBaker

This repository maintains the MIT-licensed browser-local WebGL package. Contributions to the package, examples, and tests are welcome. The public product UI is maintained in `lightbaker-web`.

## Validate

```sh
pnpm install --frozen-lockfile
pnpm run typecheck
pnpm run typecheck:examples
pnpm run lint
pnpm run build
pnpm run test:api-import
pnpm run test:correctness
```

Browser correctness tests require Playwright Chromium. For GPU output quality, test with a hardware-accelerated WebGL 2 browser. Please add focused coverage for behavior changes and explain compatibility impact in the pull request.
