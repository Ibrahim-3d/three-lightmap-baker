import type { JSX } from 'preact';

/**
 * Inspector field primitives. Dense rows: 24px tall, label on left, control on
 * right, no animation. Style is hand-rolled (not Tailwind components) so the
 * theme stays in one place (`theme.css`).
 */

export function Row(props: {
  label: string;
  children: JSX.Element | JSX.Element[];
  hint?: string;
}) {
  return (
    <div class="flex items-center gap-2 px-2 h-6 hover:bg-bg-2">
      <label
        class="text-[11px] text-text-1 w-28 flex-shrink-0 truncate"
        title={props.hint ?? props.label}
      >
        {props.label}
      </label>
      <div class="flex-1 flex items-center gap-1">{props.children}</div>
    </div>
  );
}

export function Section(props: { title: string; children: JSX.Element | JSX.Element[] }) {
  return (
    <div class="mb-1">
      <div class="px-2 py-1 text-[10px] uppercase tracking-wider text-text-2 font-semibold bg-bg-2/40">
        {props.title}
      </div>
      {props.children}
    </div>
  );
}

export function TextField(props: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      type="text"
      class="flex-1 px-1.5 py-0.5 text-[12px] bg-bg-2 border border-border rounded text-text-0 focus:border-accent focus:outline-none"
      value={props.value}
      placeholder={props.placeholder}
      onInput={(e) => props.onChange((e.target as HTMLInputElement).value)}
    />
  );
}

export function NumberField(props: {
  value: number;
  onChange: (v: number) => void;
  step?: number;
  min?: number;
  max?: number;
}) {
  return (
    <input
      type="number"
      class="flex-1 w-0 min-w-0 px-1.5 py-0.5 text-[12px] bg-bg-2 border border-border rounded text-text-0 focus:border-accent focus:outline-none font-mono"
      value={Number.isFinite(props.value) ? props.value : 0}
      step={props.step ?? 0.1}
      min={props.min}
      max={props.max}
      onInput={(e) => {
        const v = parseFloat((e.target as HTMLInputElement).value);
        if (!Number.isNaN(v)) props.onChange(v);
      }}
    />
  );
}

export function RangeField(props: {
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
}) {
  return (
    <>
      <input
        type="range"
        class="flex-1 accent-accent"
        value={props.value}
        min={props.min}
        max={props.max}
        step={props.step ?? 0.01}
        onInput={(e) => props.onChange(parseFloat((e.target as HTMLInputElement).value))}
      />
      <span class="text-[10px] text-text-2 w-10 text-right font-mono">
        {props.value.toFixed(2)}
      </span>
    </>
  );
}

export function ColorField(props: { value: string; onChange: (v: string) => void }) {
  return (
    <input
      type="color"
      class="w-8 h-5 bg-bg-2 border border-border rounded cursor-pointer"
      value={props.value}
      onInput={(e) => props.onChange((e.target as HTMLInputElement).value)}
    />
  );
}

export function BoolField(props: {
  value: boolean;
  onChange: (v: boolean) => void;
  label?: string;
}) {
  return (
    <label class="flex items-center gap-1.5 cursor-pointer text-[11px] text-text-1">
      <input
        type="checkbox"
        class="accent-accent"
        checked={props.value}
        onChange={(e) => props.onChange((e.target as HTMLInputElement).checked)}
      />
      {props.label && <span>{props.label}</span>}
    </label>
  );
}

export function SelectField<T extends string>(props: {
  value: T;
  options: ReadonlyArray<{ value: T; label: string }>;
  onChange: (v: T) => void;
}) {
  return (
    <select
      class="flex-1 px-1.5 py-0.5 text-[12px] bg-bg-2 border border-border rounded text-text-0 focus:border-accent focus:outline-none"
      value={props.value}
      onChange={(e) => props.onChange((e.target as HTMLSelectElement).value as T)}
    >
      {props.options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
