import { useEffect } from 'preact/hooks';
import { signal } from '@preact/signals';
import { AlertTriangle, Info } from './icons';

export type ToastKind = 'info' | 'error';
export type ToastMsg = { id: number; kind: ToastKind; text: string };

export const toastMsg = signal<ToastMsg | null>(null);

let nextId = 1;

/** Public API: push a toast. Auto-dismisses after 4s. */
export function showToast(kind: ToastKind, text: string): void {
    toastMsg.value = { id: nextId++, kind, text };
}

/**
 * Top-center floating chip. One at a time — newer pushes replace older.
 * Auto-dismisses after 4s. Renders nothing when toastMsg is null.
 */
export function Toast() {
    const msg = toastMsg.value;

    useEffect(() => {
        if (!msg) return;
        const handle = setTimeout(() => {
            if (toastMsg.value?.id === msg.id) toastMsg.value = null;
        }, 4000);
        return () => clearTimeout(handle);
    }, [msg?.id]);

    if (!msg) return null;
    const isErr = msg.kind === 'error';
    const Icon = isErr ? AlertTriangle : Info;
    return (
        <div
            class={`fixed top-12 left-1/2 -translate-x-1/2 z-[90] px-4 py-2 rounded-lg shadow-xl flex items-center gap-2 text-[12px] font-medium pointer-events-auto cursor-pointer ${
                isErr
                    ? 'bg-red-900/95 text-red-100 border border-red-700'
                    : 'bg-bg-1/95 backdrop-blur text-text-0 border border-border'
            }`}
            onClick={() => (toastMsg.value = null)}
            role="status"
        >
            <Icon size={14} />
            <span>{msg.text}</span>
        </div>
    );
}
