import { useEffect, useRef } from 'preact/hooks';

/**
 * Vertical resize handle. Drag horizontally to adjust the panel width signal.
 *
 * `side="left"` means the handle controls the left-adjacent panel: dragging
 * right grows it. `side="right"` controls the right-adjacent panel: dragging
 * left grows it.
 */
export function Splitter(props: {
    width: number;
    onResize: (w: number) => void;
    side: 'left' | 'right';
    min?: number;
    max?: number;
}) {
    const startX = useRef(0);
    const startW = useRef(0);
    const dragging = useRef(false);

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            if (!dragging.current) return;
            const dx = e.clientX - startX.current;
            const delta = props.side === 'left' ? dx : -dx;
            const next = Math.max(props.min ?? 180, Math.min(props.max ?? 500, startW.current + delta));
            props.onResize(next);
        };
        const onUp = () => {
            dragging.current = false;
            document.body.style.cursor = '';
        };
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
        };
    }, [props.side, props.min, props.max, props.onResize]);

    return (
        <div
            class="absolute top-0 bottom-0 w-1 cursor-col-resize bg-border hover:bg-accent/40 transition-colors pointer-events-auto z-10"
            style={props.side === 'left' ? { right: '-2px' } : { left: '-2px' }}
            onMouseDown={(e) => {
                e.preventDefault();
                startX.current = e.clientX;
                startW.current = props.width;
                dragging.current = true;
                document.body.style.cursor = 'col-resize';
            }}
        />
    );
}
