import React from 'react';
import { cn } from '@/lib/utils';

export function Progress({ value = 0, className, ...props }) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div
      className={cn('relative h-2 w-full overflow-hidden rounded-full bg-white/10', className)}
      {...props}
    >
      <div
        className="h-full bg-violet-600 transition-all duration-300 ease-in-out"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
