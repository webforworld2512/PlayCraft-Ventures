import React from 'react';
import { cn } from '@/lib/utils';

export function ScrollArea({ className, children, ...props }) {
  return (
    <div
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      <div className="h-full w-full overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
        {children}
      </div>
    </div>
  );
}

export function ScrollBar({ className, orientation = 'vertical', ...props }) {
  return (
    <div
      className={cn(
        'flex touch-none select-none transition-colors',
        orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-px',
        orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent p-px',
        className
      )}
      data-orientation={orientation}
      {...props}
    >
      <div className="relative flex-1 rounded-full bg-white/20" />
    </div>
  );
}
