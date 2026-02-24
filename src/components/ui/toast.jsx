import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const toastVariants = {
  default: 'border-white/10 bg-[#13131a] text-gray-300',
  destructive: 'border-red-500/50 bg-red-500/10 text-red-400',
  success: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400',
};

export function Toast({ id, title, description, variant = 'default', onClose, className, ...props }) {
  return (
    <div
      className={cn(
        'pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 shadow-lg transition-all',
        toastVariants[variant],
        className
      )}
      {...props}
    >
      <div className="grid gap-1">
        {title && <div className="text-sm font-semibold">{title}</div>}
        {description && <div className="text-sm opacity-90">{description}</div>}
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 rounded-md p-1 opacity-70 hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

export function ToastTitle({ className, ...props }) {
  return <div className={cn('text-sm font-semibold', className)} {...props} />;
}

export function ToastDescription({ className, ...props }) {
  return <div className={cn('text-sm opacity-90', className)} {...props} />;
}

export function ToastAction({ className, ...props }) {
  return <button className={cn('inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-white/10 bg-transparent px-3 text-sm font-medium hover:bg-white/10', className)} {...props} />;
}

export function ToastClose({ className, ...props }) {
  return (
    <button
      className={cn('absolute right-2 top-2 rounded-md p-1 opacity-70 hover:opacity-100', className)}
      {...props}
    >
      <X className="h-4 w-4" />
    </button>
  );
}
