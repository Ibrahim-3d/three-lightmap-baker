import {
  GLSL3,
  Mesh,
  NoBlending,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Texture,
  Vector4,
  WebGLRenderer,
} from 'three';

export type AtlasViewerCorner = 'tl' | 'tr' | 'bl' | 'br';

export type AtlasViewerOptions = {
  /** On-canvas square size in CSS px. Default 256. */
  size?: number;
  /** Margin from canvas edges in CSS px. Default 20. */
  margin?: number;
  /** Which corner. Default 'br'. */
  corner?: AtlasViewerCorner;
  /** Apply 1/2.2 gamma encode for display. Default true (most layers are linear float). */
  sRGB?: boolean;
};

/**
 * 2D corner-overlay atlas viewer.
 *
 * Renders a single Texture as a square viewport on top of the main canvas using
 * scissor+viewport - no second WebGL context, no readback, real-time follow as
 * the bake progresses. Vertex shader is NDC pass-through (matches Composite/
 * Refinement) so it bypasses the camera entirely.
 *
 * Usage:
 *   const viewer = new AtlasViewer({ size: 256, corner: 'br' });
 *   // ... in render loop, AFTER renderer.render(scene, cam):
 *   viewer.setTexture(currentLayerTexture);
 *   viewer.render(renderer);
 */
/** CSS px height of the header bar when attached. */
const HEADER_HEIGHT = 22;

export class AtlasViewer {
  public visible = true;
  public collapsed = false;
  public size: number;
  public margin: number;
  public corner: AtlasViewerCorner;

  private scene: Scene;
  private cam: OrthographicCamera;
  private quad: Mesh;
  private mat: ShaderMaterial;
  private headerEl: HTMLDivElement | null = null;
  /** Layer label shown in the header. Updated by the host each frame. */
  private layerLabel = '';
  /**
   * Multi-atlas mode. When set, render() lays them out in a grid filling the
   * panel. When null, falls back to the single `mat.uniforms.map` texture.
   */
  private textures: Texture[] | null = null;
  private prevScissor = new Vector4();
  private prevViewport = new Vector4();

  constructor(opts: AtlasViewerOptions = {}) {
    this.size = opts.size ?? 256;
    this.margin = opts.margin ?? 20;
    this.corner = opts.corner ?? 'br';

    this.mat = new ShaderMaterial({
      glslVersion: GLSL3,
      blending: NoBlending,
      transparent: false,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        map: { value: null as Texture | null },
        sRGB: { value: opts.sRGB ?? true },
        border: { value: 0.006 },
      },
      vertexShader: /* glsl */ `
                out vec2 vUv;
                void main() {
                    vUv = uv;
                    // NDC pass-through - bypass camera matrices to dodge the
                    // default-near-plane clipping that bit DenoiseMaterial.
                    gl_Position = vec4(position, 1.0);
                }
            `,
      fragmentShader: /* glsl */ `
                uniform sampler2D map;
                uniform bool sRGB;
                uniform float border;
                in vec2 vUv;
                out vec4 fragColor;
                void main() {
                    // Thin light frame so the panel reads against any 3D background.
                    if (vUv.x < border || vUv.x > 1.0 - border ||
                        vUv.y < border || vUv.y > 1.0 - border) {
                        fragColor = vec4(0.85, 0.85, 0.85, 1.0);
                        return;
                    }
                    vec4 t = texture(map, vUv);
                    vec3 c = max(t.rgb, vec3(0.0));
                    if (sRGB) c = pow(c, vec3(1.0 / 2.2));
                    fragColor = vec4(c, 1.0);
                }
            `,
    });

    this.scene = new Scene();
    this.cam = new OrthographicCamera();
    this.quad = new Mesh(new PlaneGeometry(2, 2), this.mat);
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);
  }

  setTexture(tex: Texture | null): void {
    // SAFETY: `map` and `sRGB` uniforms are constructed in the ShaderMaterial above.
    if (this.mat.uniforms.map) this.mat.uniforms.map.value = tex;
    this.textures = null; // single-texture path overrides multi
  }

  /**
   * Render N textures in a grid (cols = ceil(sqrt(N)), rows = ceil(N/cols))
   * filling the same `size`-px panel. Each cell is a square. Pass `[]` or null
   * to revert to the single-texture `setTexture` path.
   */
  setTextures(texs: Texture[] | null): void {
    this.textures = texs && texs.length > 0 ? texs : null;
  }
  setSRGB(v: boolean): void {
    if (this.mat.uniforms.sRGB) this.mat.uniforms.sRGB.value = v;
  }
  setSize(px: number): void {
    this.size = px;
  }
  setMargin(px: number): void {
    this.margin = px;
  }
  setCorner(c: AtlasViewerCorner): void {
    this.corner = c;
  }
  setCollapsed(v: boolean): void {
    this.collapsed = v;
    this.refreshHeaderText();
  }
  /** Updates the active-layer label shown in the header. */
  setLayerLabel(label: string): void {
    this.layerLabel = label;
    this.refreshHeaderText();
  }

  /**
   * Opt-in: attach an HTML header bar with click-to-collapse.
   * Library users running headless can skip this.
   */
  attachHeader(parent: HTMLElement = document.body): void {
    if (this.headerEl) return;
    const el = document.createElement('div');
    Object.assign(el.style, {
      position: 'absolute',
      boxSizing: 'border-box',
      fontFamily: 'monospace',
      fontSize: '11px',
      color: '#ddd',
      backgroundColor: 'rgba(0,0,0,0.78)',
      padding: '4px 8px',
      cursor: 'pointer',
      userSelect: 'none',
      border: '1px solid #444',
      borderRadius: '3px',
      zIndex: '50',
      display: 'none',
      lineHeight: `${HEADER_HEIGHT - 10}px`,
    } as CSSStyleDeclaration);
    el.addEventListener('click', () => this.setCollapsed(!this.collapsed));
    parent.appendChild(el);
    this.headerEl = el;
    this.refreshHeaderText();
  }

  detachHeader(): void {
    this.headerEl?.remove();
    this.headerEl = null;
  }

  private refreshHeaderText(): void {
    if (!this.headerEl) return;
    const arrow = this.collapsed ? '▸' : '▾';
    const label = this.layerLabel ? ` · ${this.layerLabel}` : '';
    this.headerEl.innerText = `${arrow} Atlas Viewer${label}`;
  }

  /**
   * Position the HTML header bar to sit just above the WebGL viewer rect.
   * Coordinates are CSS px (matching `getBoundingClientRect`).
   */
  private positionHeader(canvasRect: DOMRect): void {
    if (!this.headerEl) return;
    if (!this.visible) {
      this.headerEl.style.display = 'none';
      return;
    }
    this.headerEl.style.display = 'block';
    this.headerEl.style.width = `${this.size}px`;

    let left = 0,
      topBody = 0;
    switch (this.corner) {
      case 'tl':
        left = this.margin;
        topBody = this.margin + HEADER_HEIGHT;
        break;
      case 'tr':
        left = canvasRect.width - this.size - this.margin;
        topBody = this.margin + HEADER_HEIGHT;
        break;
      case 'bl':
        left = this.margin;
        topBody = canvasRect.height - this.margin - this.size;
        break;
      case 'br':
        left = canvasRect.width - this.size - this.margin;
        topBody = canvasRect.height - this.margin - this.size;
        break;
    }
    // Header sits directly above the body for tl/tr, directly above the body for bl/br
    // (so collapsing leaves the header where the user expects).
    const headerTop = topBody - HEADER_HEIGHT;
    this.headerEl.style.left = `${canvasRect.left + left}px`;
    this.headerEl.style.top = `${canvasRect.top + headerTop}px`;
  }

  /** Render the overlay. MUST be called after the main scene render in the same frame. */
  render(renderer: WebGLRenderer): void {
    if (!this.visible) {
      this.positionHeader(renderer.domElement.getBoundingClientRect());
      return;
    }
    this.positionHeader(renderer.domElement.getBoundingClientRect());
    if (this.collapsed) return;

    // Multi-texture path takes precedence; otherwise fall back to single map uniform.
    const multi = this.textures;
    const single = this.mat.uniforms.map?.value as Texture | null | undefined;
    if (!multi && !single) return;

    const dpr = renderer.getPixelRatio();
    const w = renderer.domElement.width;
    const h = renderer.domElement.height;
    const sz = Math.max(1, Math.floor(this.size * dpr));
    const m = Math.max(0, Math.floor(this.margin * dpr));

    let panelX = 0,
      panelY = 0;
    switch (this.corner) {
      case 'tl':
        panelX = m;
        panelY = h - sz - m - Math.floor(HEADER_HEIGHT * dpr);
        break;
      case 'tr':
        panelX = w - sz - m;
        panelY = h - sz - m - Math.floor(HEADER_HEIGHT * dpr);
        break;
      case 'bl':
        panelX = m;
        panelY = m;
        break;
      case 'br':
        panelX = w - sz - m;
        panelY = m;
        break;
    }

    const prevAutoClear = renderer.autoClear;
    const prevScissorTest = renderer.getScissorTest();
    renderer.getScissor(this.prevScissor);
    renderer.getViewport(this.prevViewport);

    try {
      renderer.setScissorTest(true);
      renderer.autoClear = false;

      if (multi) {
        // Grid: cols × rows fitting all N. Each cell is square = floor(sz/cols).
        const n = multi.length;
        const cols = Math.ceil(Math.sqrt(n));
        const rows = Math.ceil(n / cols);
        const cell = Math.max(1, Math.floor(sz / Math.max(cols, rows)));
        // Top-down rows (atlas 0 in top-left): in GL coords y grows up, so row 0
        // sits at the top of the panel (panelY + sz - cell).
        for (let i = 0; i < n; i++) {
          const c = i % cols;
          const r = Math.floor(i / cols);
          const cx = panelX + c * cell;
          const cy = panelY + sz - (r + 1) * cell;
          if (this.mat.uniforms.map) this.mat.uniforms.map.value = multi[i] ?? null;
          renderer.setScissor(cx, cy, cell, cell);
          renderer.setViewport(cx, cy, cell, cell);
          renderer.render(this.scene, this.cam);
        }
      } else if (single) {
        renderer.setScissor(panelX, panelY, sz, sz);
        renderer.setViewport(panelX, panelY, sz, sz);
        renderer.render(this.scene, this.cam);
      }
    } finally {
      renderer.setScissor(
        this.prevScissor.x,
        this.prevScissor.y,
        this.prevScissor.z,
        this.prevScissor.w,
      );
      renderer.setViewport(
        this.prevViewport.x,
        this.prevViewport.y,
        this.prevViewport.z,
        this.prevViewport.w,
      );
      renderer.setScissorTest(prevScissorTest);
      renderer.autoClear = prevAutoClear;
    }
  }

  dispose(): void {
    this.detachHeader();
    this.mat.dispose();
    this.quad.geometry.dispose();
  }
}
