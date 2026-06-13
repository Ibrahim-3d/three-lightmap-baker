import { useEffect, useRef } from 'preact/hooks';
import { bakeProgress, optionsTick, Section } from 'shared';
import { getBakerOrchestrator } from './orchestrator';

export function AtlasPage() {
  void optionsTick.value;
  void bakeProgress.value;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const app = getBakerOrchestrator();
  const info = app?.getAtlasPreviewInfo();

  useEffect(() => {
    let raf = 0;
    const paint = () => {
      const canvas = canvasRef.current;
      const current = getBakerOrchestrator();
      if (canvas && current) current.renderAtlasPreview(canvas);
      raf = requestAnimationFrame(paint);
    };
    paint();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div class="text-[12px]">
      <Section title="Atlas Viewer">
        <div class="px-2 py-2">
          <canvas
            ref={canvasRef}
            width={512}
            height={512}
            data-testid="atlas-inspector-canvas"
            class="block w-full aspect-square bg-bg-0 border border-border"
          />
          <div class="mt-2 flex items-center justify-between text-[11px] text-text-2">
            <span>{info?.layer ?? 'No layer'}</span>
            <span>
              {info && info.count > 0
                ? `${info.count} atlas · ${info.resolution}px`
                : 'No bake yet'}
            </span>
          </div>
        </div>
      </Section>
    </div>
  );
}
