import React from 'react';
import { cn } from '@/lib/utils';

const variantStyles = {
  default: 'bg-violet-600 text-white hover:bg-violet-700',
  destructive: 'bg-red-600 text-white hover:bg-red-700',
  outline: 'border border-white/20 bg-transparent hover:bg-white/5',
  secondary: 'bg-white/10 text-gray-300 hover:bg-white/15',
  ghost: 'hover:bg-white/5',
  link: 'text-violet-400 underline-offset-4 hover:underline',
};

const sizeStyles = {
  default: 'h-9 px-4 py-2',
  sm: 'h-8 rounded-md px-3 text-xs',
  lg: 'h-10 rounded-md px-8',
  icon: 'h-9 w-9',
};

export function Button({ className, variant = 'default', size = 'default', asChild = false, ...props }) {
  const Comp = asChild ? 'span' : 'button';
  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 disabled:pointer-events-none disabled:opacity-50',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
}
