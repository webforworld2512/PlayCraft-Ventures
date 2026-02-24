import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const SelectContext = createContext(null);

/** @param {any} props */
export function Select(props = {}) {
  const { value: controlledValue, defaultValue, onValueChange, children, ...rest } = props ?? {};
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [selectedLabel, setSelectedLabel] = useState(undefined);

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const api = useMemo(
    () => ({
      open,
      setOpen,
      value,
      selectedLabel,
      select: (nextValue, nextLabel) => {
        if (controlledValue === undefined) setInternalValue(nextValue);
        onValueChange?.(nextValue);
        if (nextLabel !== undefined) setSelectedLabel(nextLabel);
        setOpen(false);
      },
    }),
    [open, value, selectedLabel, controlledValue, onValueChange]
  );

  return (
    <SelectContext.Provider value={api}>
      <div className="relative" {...rest}>
        {children}
      </div>
    </SelectContext.Provider>
  );
}

/** @param {any} props */
export function SelectTrigger({ className, children, ...props } = {}) {
  const ctx = useContext(SelectContext);
  return (
    <button
      type="button"
      aria-haspopup="listbox"
      aria-expanded={ctx?.open ? 'true' : 'false'}
      className={cn(
        'flex h-9 w-full items-center justify-between rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      onClick={(e) => {
        props.onClick?.(e);
        if (e.defaultPrevented) return;
        ctx?.setOpen?.((p) => !p);
      }}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  );
}

/** @param {any} props */
export function SelectValue({ placeholder = 'Select...' } = {}) {
  const ctx = useContext(SelectContext);
  const text =
    ctx?.selectedLabel ??
    (ctx?.value !== undefined && ctx?.value !== null && ctx?.value !== '' ? String(ctx.value) : undefined) ??
    placeholder;
  return <span className="truncate">{text}</span>;
}

/** @param {any} props */
export function SelectContent({ children, className = '', ...props } = {}) {
  const ctx = useContext(SelectContext);
  const ref = useRef(null);

  useEffect(() => {
    if (!ctx?.open) return;
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) ctx?.setOpen?.(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ctx]);

  if (!ctx?.open) return null;
  return (
    <div
      ref={ref}
      className={cn(
        'absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-white/10 bg-[#13131a] py-1 shadow-lg',
        className
      )}
      role="listbox"
      {...props}
    >
      {children}
    </div>
  );
}

/** @param {any} props */
export function SelectItem({ value, children, className = '', ...props } = {}) {
  const ctx = useContext(SelectContext);
  const selected = ctx?.value === value;
  const label =
    typeof children === 'string'
      ? children
      : React.isValidElement(children) && typeof children.props?.children === 'string'
        ? children.props.children
        : undefined;

  return (
    <button
      type="button"
      role="option"
      aria-selected={selected ? 'true' : 'false'}
      className={cn(
        'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-white/10',
        className
      )}
      onClick={(e) => {
        props.onClick?.(e);
        if (e.defaultPrevented) return;
        ctx?.select?.(value, label);
      }}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <Check className={cn('h-4 w-4 transition-opacity', selected ? 'opacity-100' : 'opacity-0')} />
      </span>
      {children}
    </button>
  );
}

export function SelectGroup({ className, ...props }) {
  return <div className={cn('p-1', className)} {...props} />;
}

export function SelectLabel({ className, ...props }) {
  return <div className={cn('px-2 py-1.5 text-xs font-semibold text-gray-500', className)} {...props} />;
}

export function SelectSeparator({ className, ...props }) {
  return <div className={cn('-mx-1 my-1 h-px bg-white/10', className)} {...props} />;
}
