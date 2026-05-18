/**
 * Side-effect entry point: importing this file registers all preset scenes.
 * Wired into `src/demo/main.tsx` so the registry is populated at boot.
 *
 * Wave 1 — Cornell variants
 * Wave 2 — three.js example ports + isometric room
 * Wave 3 — enhance-shader-lighting GLB imports (Gym, Backrooms, Desert)
 * Wave 4 — three-gpu-pathtracer geometry ports + CDN GLTF scenes
 */

// Wave 1 — Cornell
import './cornell-classic';
import './cornell-advanced';
import './cornell-glass-mirror';
import './cornell-emissive-strip';

// Wave 2 — three.js ports
import './threejs-pointlights';
import './threejs-shadowmap';
import './threejs-decals';
import './isometric-room';

// Wave 3 — enhance-shader-lighting (0beqz / Eric Wojtaś) — local GLBs
import './gltf-gym';
import './gltf-backrooms';
import './gltf-desert';

// Wave 4a — three-gpu-pathtracer geometry (no CDN required)
import './pt-slat-room';
import './pt-three-balls';

// Wave 4b — three-gpu-pathtracer CDN GLTF (requires internet)
import './pt-modern-bathroom';
import './pt-robot-spotlight';
import './pt-mercury-statue';
