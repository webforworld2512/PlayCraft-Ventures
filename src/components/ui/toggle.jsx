import React from 'react';
import { cn } from '@/lib/utils';

const toggleVariants = {
  default: 'bg-transparent hover:bg-white/10',
  outline: 'border border-white/20 bg-transparent hover:bg-white/10',
};

export function Toggle({ pressed, onPressedChange, variant = 'default', size = 'default', className, ...props }) {
  const sizeClass = size === 'default' ? 'h-9 px-3' : size === 'sm' ? 'h-8 px-2' : 'h-10 px-4';
  return (
    <button
      type="button"
      role="switch"
      aria-pressed={!!pressed}
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 disabled:pointer-events-none disabled:opacity-50',
        pressed && 'bg-white/10',
        toggleVariants[variant],
        sizeClass,
        className
      )}
      onClick={() => onPressedChange?.(!pressed)}
      data-state={pressed ? 'on' : 'off'}
      {...props}
    />
  );
}
