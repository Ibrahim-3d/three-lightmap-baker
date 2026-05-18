import { useEffect, useRef, useState } from 'preact/hooks';
import { menuRegistry, menuTick, type MenuId, type MenuItem } from '../../state/menuRegistry';

const POPOVER_W = 224; // w-56

export function MenuButton(props: { menuId: MenuId }) {
    const [open, setOpen] = useState(false);
    const [flipRight, setFlipRight] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);

    void menuTick.value;
    const items = menuRegistry.items_for(props.menuId);

    useEffect(() => {
        if (!open) return;
        const onDown = (e: MouseEvent) => {
            if (anchorRef.current && !anchorRef.current.contains(e.target as Node)) setOpen(false);
        };
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
        window.addEventListener('mousedown', onDown);
        window.addEventListener('keydown', onKey);
        return () => {
            window.removeEventListener('mousedown', onDown);
            window.removeEventListener('keydown', onKey);
        };
    }, [open]);

    const handleToggle = () => {
        if (!open && anchorRef.current) {
            const { left } = anchorRef.current.getBoundingClientRect();
            setFlipRight(left + POPOVER_W > window.innerWidth - 8);
        }
        setOpen((v) => !v);
    };

    const onItemClick = (item: MenuItem) => {
        const isDisabled = item.disabledFn ? item.disabledFn() : item.disabled;
        if (isDisabled) return;
        try { item.action(); } catch (err) {
            console.error(`[demo] menu item ${item.id} failed`, err);
        }
        setOpen(false);
    };

    return (
        <div ref={anchorRef} class="relative">
            <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={open}
                data-menu-id={props.menuId}
                class={`px-2.5 py-1 text-[12px] rounded ${
                    open ? 'bg-bg-3 text-text-0' : 'text-text-1 hover:bg-bg-3 hover:text-text-0'
                }`}
                onClick={handleToggle}
            >
                {props.menuId}
            </button>

            {open && (
                <div
                    role="menu"
                    data-menu-popover={props.menuId}
                    class={`absolute top-full mt-0.5 w-56 bg-bg-1/95 backdrop-blur border border-border rounded shadow-xl z-50 ${
                        flipRight ? 'right-0' : 'left-0'
                    }`}
                >
                    {items.length === 0 ? (
                        <div class="px-3 h-6 flex items-center text-[12px] text-text-2 italic">(empty)</div>
                    ) : (
                        items.map((item) => <Row key={item.id} item={item} onClick={onItemClick} />)
                    )}
                </div>
            )}
        </div>
    );
}

function Row(props: { item: MenuItem; onClick: (i: MenuItem) => void }) {
    const i = props.item;
    if (i.when && !i.when()) return null;
    const disabled = i.disabledFn ? i.disabledFn() : (i.disabled ?? false);
    const label = i.labelFn ? i.labelFn() : i.label;
    return (
        <>
            {i.separatorBefore && <div class="border-t border-border/40 my-0.5" />}
            <div
                role="menuitem"
                data-menu-item-id={i.id}
                aria-disabled={disabled ? true : undefined}
                class={`flex items-center justify-between px-3 h-6 text-[12px] text-text-1 ${
                    disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-bg-3 cursor-pointer'
                }`}
                onClick={() => props.onClick(i)}
            >
                <span class="truncate">{label}</span>
                {i.hotkey && <span class="text-text-2 text-[10px] ml-2 shrink-0">{i.hotkey}</span>}
            </div>
        </>
    );
}
