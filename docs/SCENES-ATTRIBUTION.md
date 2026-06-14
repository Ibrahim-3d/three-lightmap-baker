# Scenes Attribution

Source, license, and author for scene presets registered via
`apps/playground/src/scenes/presets/*`. Ports recreate the lighting setup of an
existing demo with simplified geometry unless the preset explicitly loads local
demo assets from `apps/playground/public/`.

| Preset id                | Source                                          | URL                                                                  | License | Author               |
| ------------------------ | ----------------------------------------------- | -------------------------------------------------------------------- | ------- | -------------------- |
| `cornell.classic`        | three-lightmap-baker (built-in)                 | -                                                                    | CC0     | three-lightmap-baker |
| `cornell.advanced`       | three-lightmap-baker (built-in)                 | -                                                                    | CC0     | three-lightmap-baker |
| `cornell.glass-mirror`   | three-lightmap-baker (built-in)                 | -                                                                    | CC0     | three-lightmap-baker |
| `cornell.emissive-strip` | three-lightmap-baker (built-in)                 | -                                                                    | CC0     | three-lightmap-baker |
| `threejs.pointlights`    | three.js / `webgl_lights_pointlights`           | https://threejs.org/examples/?q=pointlights#webgl_lights_pointlights | MIT     | three.js authors     |
| `threejs.shadowmap`      | three.js / `webgl_shadowmap`                    | https://threejs.org/examples/?q=shadowmap#webgl_shadowmap            | MIT     | three.js authors     |
| `threejs.decals`         | three.js / `webgl_decals` (lighting setup only) | https://threejs.org/examples/?q=decals#webgl_decals                  | MIT     | three.js authors     |
| `isometric.room`         | three-lightmap-baker (built-in)                 | -                                                                    | CC0     | three-lightmap-baker |

## Notes

- Three.js examples are MIT-licensed (see https://github.com/mrdoob/three.js/blob/master/LICENSE).
  Our ports use only the _lighting setup_ (light positions, colors, intensities)
  paired with primitive substitutes for any model assets - we do not load any
  external `.glb`, `.gltf`, `.hdr`, or texture assets from those examples.
- The `webgl_decals` port substitutes a torus knot for the original Lee
  Perry-Smith head model. The head model itself is **not** included.
- All built-in scenes are CC0; you may use, modify, and redistribute them.
