import React, { createContext, useContext, useState } from 'react';
import { cn } from '@/lib/utils';

const AlertDialogContext = createContext();

export function AlertDialog({ children, open: controlledOpen, onOpenChange }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;
  return (
    <AlertDialogContext.Provider value={{ open, setOpen }}>
      {children}
    </AlertDialogContext.Provider>
  );
}

export function AlertDialogTrigger({ asChild, children, className, ...props }) {
  const { setOpen } = useContext(AlertDialogContext);
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { onClick: () => setOpen(true), ...props });
  }
  return (
    <button type="button" className={cn(className)} onClick={() => setOpen(true)} {...props}>
      {children}
    </button>
  );
}

export function AlertDialogContent({ children, className, ...props }) {
  const { open, setOpen } = useContext(AlertDialogContext);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/80"
        aria-hidden
        onClick={() => setOpen(false)}
      />
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

export function AlertDialogHeader({ className, ...props }) {
  return <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />;
}

export function AlertDialogFooter({ className, ...props }) {
  return (
    <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
  );
}

export function AlertDialogTitle({ className, ...props }) {
  return <h2 className={cn('text-lg font-semibold text-white', className)} {...props} />;
}

export function AlertDialogDescription({ className, ...props }) {
  return <p className={cn('text-sm text-gray-400', className)} {...props} />;
}

export function AlertDialogAction({ className, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex h-9 items-center justify-center rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700',
        className
      )}
      {...props}
    />
  );
}

export function AlertDialogCancel({ className, ...props }) {
  const { setOpen } = useContext(AlertDialogContext);
  return (
    <button
      type="button"
      className={cn(
        'mt-2 inline-flex h-9 items-center justify-center rounded-md border border-white/10 bg-transparent px-4 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 sm:mt-0',
        className
      )}
      onClick={() => setOpen(false)}
      {...props}
    />
  );
}
