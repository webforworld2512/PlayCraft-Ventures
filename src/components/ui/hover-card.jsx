import React, { createContext, useContext, useState } from 'react';
import { cn } from '@/lib/utils';

const HoverCardContext = createContext();

export function HoverCard({ children, open: controlledOpen, onOpenChange }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;
  return (
    <HoverCardContext.Provider value={{ open, setOpen }}>
      <div
        className="relative inline-block"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {children}
      </div>
    </HoverCardContext.Provider>
  );
}

export function HoverCardTrigger({ asChild, children, ...props }) {
  return <>{children}</>;
}

export function HoverCardContent({ children, className, align = 'center', sideOffset = 4, ...props }) {
  const { open } = useContext(HoverCardContext);
  if (!open) return null;
  return (
    <div
      className={cn(
        'absolute z-50 w-64 rounded-md border border-white/10 bg-[#13131a] p-4 shadow-md',
        align === 'end' && 'right-0',
        align === 'center' && 'left-1/2 -translate-x-1/2',
        className
      )}
      style={{ marginTop: sideOffset }}
      {...props}
    >
      {children}
    </div>
  );
}
