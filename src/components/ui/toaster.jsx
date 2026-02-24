import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Toaster container for toast notifications. Use with the useToast hook
 * to add/remove toasts. Renders toasts in a fixed position.
 */
export function Toaster({ toasts = [], position = 'bottom-right', className, ...props }) {
  return (
    <div
      className={cn(
        'fixed z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4',
        position === 'bottom-right' && 'bottom-0 right-0',
        position === 'bottom-left' && 'bottom-0 left-0',
        position === 'top-right' && 'top-0 right-0',
        position === 'top-left' && 'top-0 left-0',
        className
      )}
      {...props}
    >
      {toasts.map((t) => (
        <div key={t.id} className="flex w-full flex-col-reverse">
          {t.content}
        </div>
      ))}
    </div>
  );
}
