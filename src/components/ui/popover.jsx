import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

const PopoverContext = createContext();

export function Popover({ children, open: controlledOpen, onOpenChange }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;
  return (
    <PopoverContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-block">{children}</div>
    </PopoverContext.Provider>
  );
}

export function PopoverTrigger({ asChild, children, className, ...props }) {
  const { setOpen } = useContext(PopoverContext);
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { onClick: () => setOpen((p) => !p), ...props });
  }
  return (
    <button type="button" className={cn(className)} onClick={() => setOpen((p) => !p)} {...props}>
      {children}
    </button>
  );
}

export function PopoverContent({ children, className, align = 'center', ...props }) {
  const { open, setOpen } = useContext(PopoverContext);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, setOpen]);

  if (!open) return null;
  return (
    <div
      ref={ref}
      className={cn(
        'absolute z-50 w-72 rounded-md border border-white/10 bg-[#13131a] p-4 shadow-md',
        align === 'end' && 'right-0',
        align === 'center' && 'left-1/2 -translate-x-1/2',
        'mt-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function PopoverAnchor({ className, ...props }) {
  return <div className={cn(className)} {...props} />;
}
