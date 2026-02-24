import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const DropdownMenuContext = createContext();

export function DropdownMenu({ children, open: controlledOpen, onOpenChange }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;
  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-block text-left">{children}</div>
    </DropdownMenuContext.Provider>
  );
}

export function DropdownMenuTrigger({ asChild, children, className, ...props }) {
  const { setOpen } = useContext(DropdownMenuContext);
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { onClick: () => setOpen((p) => !p), ...props });
  }
  return (
    <button type="button" className={cn(className)} onClick={() => setOpen((p) => !p)} {...props}>
      {children}
    </button>
  );
}

export function DropdownMenuContent({ children, className, align = 'start', ...props }) {
  const { open, setOpen } = useContext(DropdownMenuContext);
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
        'absolute z-50 min-w-[8rem] overflow-hidden rounded-md border border-white/10 bg-[#13131a] p-1 shadow-lg',
        align === 'end' && 'right-0',
        align === 'center' && 'left-1/2 -translate-x-1/2',
        'mt-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function DropdownMenuItem({ className, inset, ...props }) {
  return (
    <div
      className={cn(
        'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-white/10',
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  );
}

export function DropdownMenuCheckboxItem({ className, checked, ...props }) {
  return (
    <div
      className={cn(
        'relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-white/10',
        className
      )}
      {...props}
    />
  );
}

export function DropdownMenuRadioItem({ className, ...props }) {
  return (
    <div
      className={cn(
        'relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-white/10',
        className
      )}
      {...props}
    />
  );
}

export function DropdownMenuLabel({ className, inset, ...props }) {
  return (
    <div
      className={cn('px-2 py-1.5 text-sm font-semibold text-white', inset && 'pl-8', className)}
      {...props}
    />
  );
}

export function DropdownMenuSeparator({ className, ...props }) {
  return <div className={cn('-mx-1 my-1 h-px bg-white/10', className)} {...props} />;
}

export function DropdownMenuShortcut({ className, ...props }) {
  return <span className={cn('ml-auto text-xs text-gray-500', className)} {...props} />;
}

export function DropdownMenuGroup({ className, ...props }) {
  return <div className={cn('p-1', className)} {...props} />;
}

export function DropdownMenuSub({ children }) {
  return <>{children}</>;
}

export function DropdownMenuSubTrigger({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-white/10',
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </div>
  );
}

export function DropdownMenuSubContent({ className, ...props }) {
  return (
    <div
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border border-white/10 bg-[#13131a] p-1 shadow-lg',
        className
      )}
      {...props}
    />
  );
}
