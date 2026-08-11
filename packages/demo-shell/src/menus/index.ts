/**
 * Side-effect entry point - registers the generic topbar menus (File/Edit/
 * View/Help). The Render menu is owned by the renderer package
 * (`demo-shell/baker/menus.ts`) and registers itself when the app calls
 * the package's UI registrar.
 */
import './file';
import './edit';
import './view';
import './help';
