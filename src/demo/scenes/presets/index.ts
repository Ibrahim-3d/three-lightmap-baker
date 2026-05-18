/**
 * Side-effect entry point: importing this file registers all 8 preset scenes
 * (Wave 1 Cornell variants + Wave 2 three.js example ports + isometric room).
 * Wired into `src/demo/main.tsx` so the registry is populated at boot.
 */
import './cornell-classic';
import './cornell-advanced';
import './cornell-glass-mirror';
import './cornell-emissive-strip';
import './threejs-pointlights';
import './threejs-shadowmap';
import './threejs-decals';
import './isometric-room';
