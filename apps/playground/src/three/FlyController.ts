import { MathUtils, MOUSE, type PerspectiveCamera, Vector3, type WebGLRenderer } from 'three';
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { flyActive, flySpeed } from 'shared';

const FORWARD = new Vector3();
const RIGHT = new Vector3();
const UP = new Vector3(0, 1, 0);
const MOVE = new Vector3();
const TMP_DIR = new Vector3();

const MOUSE_SENS = 0.0025;
const BOOST = 3;
const SPEED_MIN = 0.1;
const SPEED_MAX = 50;
const WHEEL_STEP = 1.1;
const DT_CLAMP = 0.1;

/**
 * Unreal/Unity-style scene-viewport fly controls. Activates while the user
 * holds the right mouse button on the renderer canvas:
 *   - WASD     — strafe along camera forward/right
 *   - Q / E    — move down / up (world-Y)
 *   - Shift    — speed boost (×3)
 *   - Mouse    — yaw + pitch (clamped to avoid gimbal flip)
 *   - Wheel    — multiplies `flySpeed` signal so the slider stays in sync
 *
 * RMB-held activation avoids stealing the W/E/R gizmo hotkeys. While fly is
 * active, OrbitControls is disabled; on release we re-seat the orbit target
 * in front of the camera so subsequent orbit feels natural.
 *
 * We use `setPointerCapture` instead of Pointer Lock — cursor stays visible
 * but pointer-move events keep firing even if the cursor leaves the canvas.
 */
export class FlyController {
  private active = false;
  private keys = new Set<string>();
  private yaw = 0;
  private pitch = 0;
  private lastT = 0;
  private capturedPointer: number | null = null;

  constructor(
    private readonly camera: PerspectiveCamera,
    private readonly renderer: WebGLRenderer,
    private readonly controls: OrbitControls,
  ) {
    // Industry-standard editor viewport mapping (Unreal/Unity-style):
    //   LMB = orbit, MMB = pan, wheel = dolly, RMB = fly-look (handled here).
    // OrbitControls defaults pan to RMB and dolly to MMB; we swap so RMB is
    // free for fly mode and panning lives on MMB.
    this.controls.mouseButtons = {
      LEFT: MOUSE.ROTATE,
      MIDDLE: MOUSE.PAN,
      RIGHT: null,
    } as typeof this.controls.mouseButtons;

    const dom = renderer.domElement;
    dom.addEventListener('pointerdown', this.onPointerDown);
    dom.addEventListener('pointerup', this.onPointerUp);
    dom.addEventListener('pointermove', this.onPointerMove);
    dom.addEventListener('contextmenu', this.onContextMenu);
    dom.addEventListener('wheel', this.onWheel, { passive: false });
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('blur', this.onBlur);
  }

  isActive(): boolean {
    return this.active;
  }

  private onPointerDown = (e: PointerEvent): void => {
    if (e.button !== 2 || this.active) return;
    e.preventDefault();
    this.active = true;
    flyActive.value = true;
    this.controls.enabled = false;
    this.capturedPointer = e.pointerId;
    try {
      this.renderer.domElement.setPointerCapture(e.pointerId);
    } catch {
      // Capture is best-effort; pointermove still fires without it.
    }
    // Seed yaw/pitch from current camera look so first mouse move doesn't snap.
    this.camera.getWorldDirection(TMP_DIR);
    this.yaw = Math.atan2(TMP_DIR.x, TMP_DIR.z);
    this.pitch = Math.asin(MathUtils.clamp(TMP_DIR.y, -1, 1));
    this.lastT = performance.now();
    this.renderer.domElement.style.cursor = 'grabbing';
  };

  private endFly(): void {
    if (!this.active) return;
    this.active = false;
    flyActive.value = false;
    this.keys.clear();
    if (this.capturedPointer !== null) {
      try {
        this.renderer.domElement.releasePointerCapture(this.capturedPointer);
      } catch {
        // Already released — ignore.
      }
      this.capturedPointer = null;
    }
    // Re-seat orbit target in front of the camera so OrbitControls feels right
    // when the user resumes left-drag orbit.
    this.camera.getWorldDirection(TMP_DIR);
    const dist = this.controls.target.distanceTo(this.camera.position) || 5;
    this.controls.target.copy(this.camera.position).addScaledVector(TMP_DIR, dist);
    this.controls.enabled = true;
    this.controls.update();
    this.renderer.domElement.style.cursor = '';
  }

  private onPointerUp = (e: PointerEvent): void => {
    if (e.button !== 2) return;
    this.endFly();
  };

  private onBlur = (): void => {
    this.endFly();
  };

  private onContextMenu = (e: MouseEvent): void => {
    e.preventDefault();
  };

  private onPointerMove = (e: PointerEvent): void => {
    if (!this.active) return;
    this.yaw -= e.movementX * MOUSE_SENS;
    this.pitch -= e.movementY * MOUSE_SENS;
    const limit = Math.PI / 2 - 0.01;
    this.pitch = MathUtils.clamp(this.pitch, -limit, limit);
    const cp = Math.cos(this.pitch);
    TMP_DIR.set(cp * Math.sin(this.yaw), Math.sin(this.pitch), cp * Math.cos(this.yaw));
    this.camera.lookAt(
      this.camera.position.x + TMP_DIR.x,
      this.camera.position.y + TMP_DIR.y,
      this.camera.position.z + TMP_DIR.z,
    );
  };

  private onWheel = (e: WheelEvent): void => {
    if (!this.active) return;
    e.preventDefault();
    const factor = e.deltaY > 0 ? 1 / WHEEL_STEP : WHEEL_STEP;
    flySpeed.value = MathUtils.clamp(flySpeed.value * factor, SPEED_MIN, SPEED_MAX);
  };

  private onKeyDown = (e: KeyboardEvent): void => {
    if (!this.active) return;
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
    this.keys.add(e.code);
  };

  private onKeyUp = (e: KeyboardEvent): void => {
    this.keys.delete(e.code);
  };

  /** Per-RAF camera integration. Cheap no-op when fly is inactive. */
  tick(): void {
    if (!this.active) return;
    const now = performance.now();
    const dt = Math.min(DT_CLAMP, (now - this.lastT) / 1000);
    this.lastT = now;
    if (dt <= 0) return;

    const boost = this.keys.has('ShiftLeft') || this.keys.has('ShiftRight') ? BOOST : 1;
    const speed = flySpeed.value * boost;

    this.camera.getWorldDirection(FORWARD);
    RIGHT.crossVectors(FORWARD, UP).normalize();
    MOVE.set(0, 0, 0);
    if (this.keys.has('KeyW')) MOVE.addScaledVector(FORWARD, 1);
    if (this.keys.has('KeyS')) MOVE.addScaledVector(FORWARD, -1);
    if (this.keys.has('KeyD')) MOVE.addScaledVector(RIGHT, 1);
    if (this.keys.has('KeyA')) MOVE.addScaledVector(RIGHT, -1);
    if (this.keys.has('KeyE') || this.keys.has('Space')) MOVE.addScaledVector(UP, 1);
    if (this.keys.has('KeyQ')) MOVE.addScaledVector(UP, -1);
    if (MOVE.lengthSq() === 0) return;

    MOVE.normalize().multiplyScalar(speed * dt);
    this.camera.position.add(MOVE);
    // Drag the orbit target along so post-fly orbit doesn't whip around.
    this.controls.target.add(MOVE);
  }

  dispose(): void {
    const dom = this.renderer.domElement;
    dom.removeEventListener('pointerdown', this.onPointerDown);
    dom.removeEventListener('pointerup', this.onPointerUp);
    dom.removeEventListener('pointermove', this.onPointerMove);
    dom.removeEventListener('contextmenu', this.onContextMenu);
    dom.removeEventListener('wheel', this.onWheel);
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('blur', this.onBlur);
    this.endFly();
  }
}
