/**
 * Side-effect entry point - registers the generic topbar menus (File/Edit/
 * View/Help). The Render menu is owned by the renderer package
 * (`baker-classic/ui/menus.ts`) and registers itself when the app calls
 * the package's UI registrar.
 */
import './file';
import './edit';
import './view';
import './help';
