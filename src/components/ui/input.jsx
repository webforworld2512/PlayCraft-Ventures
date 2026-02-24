import React from 'react';
import { cn } from '@/lib/utils';

/** @param {any} props */
export function Input({ className, type = 'text', ...props } = {}) {
  return (
    <input
      type={type}
      className={cn(
        'flex h-9 w-full rounded-md border border-white/20 bg-transparent px-3 py-1 text-sm text-white shadow-sm transition-colors placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}
