import React, { createContext, useContext, useState } from 'react';
import { cn } from '@/lib/utils';

const TooltipContext = createContext();

export function TooltipProvider({ children, delayDuration = 200 }) {
  return (
    <TooltipContext.Provider value={{ delayDuration }}>
      {children}
    </TooltipContext.Provider>
  );
}

export function Tooltip({ children, open: controlledOpen, onOpenChange }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;
  return (
    <TooltipContext.Provider value={{ open, setOpen }}>
      <div
        className="relative inline-block"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {children}
      </div>
    </TooltipContext.Provider>
  );
}

export function TooltipTrigger({ asChild, children, ...props }) {
  return <>{children}</>;
}

export function TooltipContent({ children, className, sideOffset = 4, ...props }) {
  const { open } = useContext(TooltipContext);
  if (!open) return null;
  return (
    <div
      className={cn(
        'absolute z-50 overflow-hidden rounded-md border border-white/10 bg-[#13131a] px-3 py-1.5 text-sm text-gray-300 shadow-md',
        'bottom-full left-1/2 -translate-x-1/2 mb-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
