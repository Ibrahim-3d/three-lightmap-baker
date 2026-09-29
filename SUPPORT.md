# Support

This repository supports the original browser-local WebGL `lightmap-baker` package. For the current public LightBaker product interface, see [lightbaker-web](https://github.com/Ibrahim-3d/lightbaker-web).

## Usage and integration questions

Use the **Usage question** issue form for questions about:

- integrating the package into a Three.js/WebGL application;
- supported browsers, GPUs or renderer capabilities;
- interpreting bake output or documented limitations;
- package/API usage that is not clearly answered by the docs.

The package requires `THREE.WebGLRenderer`. Requests about WebGPU, hosted/cloud baking, headless infrastructure, or the next-generation backend are outside this repository's maintenance scope.

## Bugs

Use the **Bug report** form for reproducible defects. For rendering or bake issues, include:

- `lightmap-baker` version or commit;
- Three.js version;
- browser and OS;
- GPU and reported WebGL renderer;
- relevant bake settings;
- smallest scene/reproduction you can provide;
- screenshots or logs when useful.

## Feature requests

Feature requests are accepted only when they fit the documented maintenance scope of this original WebGL package. See [MAINTENANCE.md](./docs/MAINTENANCE.md).

## Security

Do not report security vulnerabilities through a public issue. Follow [SECURITY.md](./SECURITY.md).

## Before opening an issue

Check:

- [Getting Started](./docs/GETTING_STARTED.md)
- [API Status](./docs/API_STATUS.md)
- [Maintenance scope](./docs/MAINTENANCE.md)
- [Light Probes](./docs/LIGHT_PROBES.md)
- [Changelog](./CHANGELOG.md)
