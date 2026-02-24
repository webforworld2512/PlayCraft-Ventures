import React from 'react';
import { cn } from '@/lib/utils';

const variantStyles = {
  default: 'border-transparent bg-violet-600 text-white',
  secondary: 'border-transparent bg-white/10 text-gray-300',
  destructive: 'border-transparent bg-red-500/20 text-red-400',
  outline: 'border-white/20 text-gray-300',
  success: 'border-transparent bg-emerald-500/20 text-emerald-400',
};

export function Badge({ className, variant = 'default', ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors',
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
