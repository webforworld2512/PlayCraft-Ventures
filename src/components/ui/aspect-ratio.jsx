import React from 'react';
import { cn } from '@/lib/utils';

export function AspectRatio({ ratio = 16 / 9, className, children, ...props }) {
  return (
    <div
      className={cn('relative w-full overflow-hidden', className)}
      style={{ aspectRatio: ratio }}
      {...props}
    >
      {children}
    </div>
  );
}
