import type { Object3D } from 'three';
import type { Command } from 'shared';
import type { SceneController, TransformSnap } from './SceneController';

/**
 * Concrete undo/redo commands for the playground. Commands are pushed to the
 * shared `commandHistory` AFTER the effect has been applied — they describe
 * how to revert (`undo`) and re-apply (`redo`) it.
 *
 * Add/Remove commands retain their Object3D across undo cycles. Dispose is
 * deferred to the command's `dispose()` callback, fired by the history when
 * the command is evicted (depth cap reached, redo branch cleared, or the
 * history is cleared on a full scene rebuild).
 */

/** Gizmo drag-end: object already at `after`, undo restores `before`. */
export class TransformCommand implements Command {
  label = 'Transform';
  constructor(
    private readonly obj: Object3D,
    private readonly before: TransformSnap,
    private readonly after: TransformSnap,
    private readonly onStale: () => void,
  ) {}

  private apply(snap: TransformSnap): void {
    this.obj.position.copy(snap.pos);
    this.obj.rotation.copy(snap.rot);
    this.obj.scale.copy(snap.scale);
    this.obj.updateMatrixWorld(true);
    this.onStale();
  }

  undo(): void {
    this.apply(this.before);
  }
  redo(): void {
    this.apply(this.after);
  }
}

/** Asset-library add: undo detaches, redo re-attaches. Disposes on eviction. */
export class AddCommand implements Command {
  label = 'Add';
  constructor(
    private readonly scene: SceneController,
    private readonly node: Object3D,
    private readonly parent: Object3D,
  ) {}

  undo(): void {
    this.scene.detachNode(this.node.uuid);
  }
  redo(): void {
    this.scene.attachNode(this.node, this.parent);
  }
  dispose(): void {
    // Only dispose if still detached. If the node is live in the scene we
    // must leave it alone — eviction can happen mid-edit.
    if (!this.node.parent) this.scene.disposeDetachedNode(this.node);
  }
}

/** Delete: caller has already detached the node. Undo re-attaches. */
export class RemoveCommand implements Command {
  label = 'Remove';
  constructor(
    private readonly scene: SceneController,
    private readonly node: Object3D,
    private readonly parent: Object3D,
  ) {}

  undo(): void {
    this.scene.attachNode(this.node, this.parent);
  }
  redo(): void {
    this.scene.detachNode(this.node.uuid);
  }
  dispose(): void {
    if (!this.node.parent) this.scene.disposeDetachedNode(this.node);
  }
}
