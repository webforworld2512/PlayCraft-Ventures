import React, { createContext, useContext, useState } from 'react';
import { cn } from '@/lib/utils';

const DrawerContext = createContext();

export function Drawer({ children, open: controlledOpen, onOpenChange, direction = 'right' }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;
  return (
    <DrawerContext.Provider value={{ open, setOpen, direction }}>
      {children}
    </DrawerContext.Provider>
  );
}

export function DrawerTrigger({ asChild, children, className, ...props }) {
  const { setOpen } = useContext(DrawerContext);
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { onClick: () => setOpen(true), ...props });
  }
  return (
    <button type="button" className={cn(className)} onClick={() => setOpen(true)} {...props}>
      {children}
    </button>
  );
}

export function DrawerContent({ children, className, ...props }) {
  const { open, setOpen, direction } = useContext(DrawerContext);
  if (!open) return null;
  const dirClass =
    direction === 'right'
      ? 'inset-y-0 right-0 h-full w-3/4 max-w-sm'
      : direction === 'left'
      ? 'inset-y-0 left-0 h-full w-3/4 max-w-sm'
      : 'inset-x-0 bottom-0';
  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/80" aria-hidden onClick={() => setOpen(false)} />
      <div
        className={cn(
          'fixed z-50 border border-white/10 bg-[#13131a] shadow-lg',
          dirClass,
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
}

export function DrawerHeader({ className, ...props }) {
  return <div className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)} {...props} />;
}

export function DrawerFooter({ className, ...props }) {
  return <div className={cn('flex flex-col gap-2 p-4', className)} {...props} />;
}

export function DrawerTitle({ className, ...props }) {
  return <h2 className={cn('text-lg font-semibold leading-none tracking-tight text-white', className)} {...props} />;
}

export function DrawerDescription({ className, ...props }) {
  return <p className={cn('text-sm text-gray-400', className)} {...props} />;
}
