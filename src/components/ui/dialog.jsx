import React, { createContext, useContext, useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const DialogContext = createContext();

export function Dialog({ children, open: controlledOpen, onOpenChange }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;
  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({ asChild, children, className, ...props }) {
  const { setOpen } = useContext(DialogContext);
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { onClick: () => setOpen(true), ...props });
  }
  return (
    <button type="button" className={cn(className)} onClick={() => setOpen(true)} {...props}>
      {children}
    </button>
  );
}

export function DialogContent({ children, className, ...props }) {
  const { open, setOpen } = useContext(DialogContext);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/80" aria-hidden onClick={() => setOpen(false)} />
      <div
        className={cn(
          'relative z-50 grid w-full max-w-lg gap-4 border border-white/10 bg-[#13131a] p-6 shadow-lg sm:rounded-lg',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ className, ...props }) {
  return <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />;
}

export function DialogFooter({ className, ...props }) {
  return (
    <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
  );
}

export function DialogTitle({ className, ...props }) {
  return <h2 className={cn('text-lg font-semibold leading-none tracking-tight text-white', className)} {...props} />;
}

export function DialogDescription({ className, ...props }) {
  return <p className={cn('text-sm text-gray-400', className)} {...props} />;
}

export function DialogClose({ className, ...props }) {
  const { setOpen } = useContext(DialogContext);
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
