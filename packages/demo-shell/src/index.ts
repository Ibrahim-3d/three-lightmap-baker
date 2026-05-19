/**
 * Demo shell public API. The shell is a renderer-agnostic Preact UI;
 * renderer-specific panels plug in via `shared`'s `panelRegistry` /
 * `menuRegistry`, and the orchestrator implements `shared`'s `Orchestrator`
 * interface. Theme CSS is exported as a side-effect import — apps do
 * `import 'demo-shell/theme'`.
 */
export { App } from './App';
export { GalleryPage } from './components/GalleryPage';
export { Toast, showToast } from './components/Toast';
export { ViewportToggle } from './components/ViewportToggle';
