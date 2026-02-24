import React, { useState } from 'react';
import { GripVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ResizablePanelGroup({ direction = 'horizontal', className, children, ...props }) {
  return (
    <div
      className={cn(
        'flex',
        direction === 'horizontal' ? 'flex-row' : 'flex-col',
        direction === 'horizontal' ? 'w-full' : 'h-full',
        className
      )}
      data-direction={direction}
      {...props}
    >
      {children}
    </div>
  );
}

export function ResizablePanel({ defaultSize = 50, minSize, className, children, ...props }) {
  return (
    <div
      className={cn('flex flex-col', className)}
      style={{ flex: defaultSize, minWidth: minSize ? `${minSize}%` : undefined }}
      {...props}
    >
      {children}
    </div>
  );
}

export function ResizableHandle({ withHandle, className, ...props }) {
  return (
    <div
      className={cn(
        'relative flex w-px items-center justify-center bg-white/10 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2',
        '[&[data-panel-group-direction=vertical]]:h-px [&[data-panel-group-direction=vertical]]:w-full',
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="z-10 flex h-4 w-4 items-center justify-center rounded-sm border border-white/10 bg-[#13131a]">
          <GripVertical className="h-4 w-4 text-gray-500" />
        </div>
      )}
    </div>
  );
}
