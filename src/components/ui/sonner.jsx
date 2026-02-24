import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Sonner-style toast container. For full toast behavior, use with a toast
 * library (e.g. sonner, react-hot-toast) or the project's use-toast + Toaster.
 * This component provides the container styling.
 */
export function Toaster({ position = 'bottom-right', className, ...props }) {
  return (
    <div
      className={cn(
        'fixed z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4',
        position === 'bottom-right' && 'bottom-0 right-0',
        position === 'bottom-left' && 'bottom-0 left-0',
        position === 'top-right' && 'top-0 right-0',
        position === 'top-left' && 'top-0 left-0',
        position === 'top-center' && 'top-0 left-1/2 -translate-x-1/2',
        position === 'bottom-center' && 'bottom-0 left-1/2 -translate-x-1/2',
        className
      )}
      {...props}
    />
  );
}

export function Sonner({ className, ...props }) {
  return <Toaster className={cn(className)} {...props} />;
}
