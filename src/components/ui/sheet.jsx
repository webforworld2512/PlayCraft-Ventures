import React, { createContext, useContext, useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const SheetContext = createContext();

export function Sheet({ children, open: controlledOpen, onOpenChange, side = 'right' }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;
  return (
    <SheetContext.Provider value={{ open, setOpen, side }}>
      {children}
    </SheetContext.Provider>
  );
}

export function SheetTrigger({ asChild, children, className, ...props }) {
  const { setOpen } = useContext(SheetContext);
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { onClick: () => setOpen(true), ...props });
  }
  return (
    <button type="button" className={cn(className)} onClick={() => setOpen(true)} {...props}>
      {children}
    </button>
  );
}

export function SheetContent({ children, className, side = 'right', ...props }) {
  const { open, setOpen } = useContext(SheetContext);
  if (!open) return null;
  const sideClass = {
    right: 'inset-y-0 right-0 h-full w-3/4 max-w-sm border-l',
    left: 'inset-y-0 left-0 h-full w-3/4 max-w-sm border-r',
    top: 'inset-x-0 top-0 w-full border-b',
    bottom: 'inset-x-0 bottom-0 w-full border-t',
  }[side];
  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/80" aria-hidden onClick={() => setOpen(false)} />
      <div
        className={cn(
          'fixed z-50 gap-4 bg-[#13131a] p-6 shadow-lg transition-transform',
          sideClass,
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
}

export function SheetHeader({ className, ...props }) {
  return <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />;
}

export function SheetFooter({ className, ...props }) {
  return (
    <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
  );
}

export function SheetTitle({ className, ...props }) {
  return <h2 className={cn('text-lg font-semibold text-white', className)} {...props} />;
}

export function SheetDescription({ className, ...props }) {
  return <p className={cn('text-sm text-gray-400', className)} {...props} />;
}

export function SheetClose({ className, ...props }) {
  const { setOpen } = useContext(SheetContext);
  return (
    <button
      type="button"
      className={cn('absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100', className)}
      onClick={() => setOpen(false)}
      {...props}
    >
      <X className="h-4 w-4" />
    </button>
  );
}
