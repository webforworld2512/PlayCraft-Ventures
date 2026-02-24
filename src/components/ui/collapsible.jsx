import React, { createContext, useContext, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const CollapsibleContext = createContext();

export function Collapsible({ children, open: controlledOpen, onOpenChange, defaultOpen = false, ...props }) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;
  return (
    <CollapsibleContext.Provider value={{ open, setOpen }}>
      <div data-state={open ? 'open' : 'closed'} {...props}>
        {children}
      </div>
    </CollapsibleContext.Provider>
  );
}

export function CollapsibleTrigger({ children, className, ...props }) {
  const { open, setOpen } = useContext(CollapsibleContext);
  return (
    <button
      type="button"
      className={cn('flex items-center gap-2', className)}
      onClick={() => setOpen(!open)}
      data-state={open ? 'open' : 'closed'}
      {...props}
    >
      {children}
      <ChevronDown className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} />
    </button>
  );
}

export function CollapsibleContent({ children, className, ...props }) {
  const { open } = useContext(CollapsibleContext);
  if (!open) return null;
  return <div className={cn(className)} {...props}>{children}</div>;
}
