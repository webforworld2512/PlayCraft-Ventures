import React from 'react';
import { cn } from '@/lib/utils';

/** @param {any} props */
export function Textarea({ className, ...props } = {}) {
  return (
    <textarea
      className={cn(
        'flex min-h-[60px] w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}
