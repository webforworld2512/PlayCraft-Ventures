import React, { createContext, useContext, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const AccordionContext = createContext({ multiple: false });
const AccordionItemContext = createContext({ open: false, setOpen: () => {} });

export function Accordion({ children, type = 'single', className, ...props }) {
  return (
    <AccordionContext.Provider value={{ multiple: type === 'multiple' }}>
      <div className={cn('w-full', className)} data-accordion {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ value, children, className, ...props }) {
  const [open, setOpen] = useState(false);
  return (
    <AccordionItemContext.Provider value={{ open, setOpen }}>
      <div className={cn('border-b border-white/10', className)} data-accordion-item {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({ children, className, ...props }) {
  const { open, setOpen } = useContext(AccordionItemContext);
  return (
    <button
      type="button"
      className={cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        className
      )}
      data-state={open ? 'open' : 'closed'}
      onClick={() => setOpen((p) => !p)}
      {...props}
    >
      {children}
      <ChevronDown className={cn('h-4 w-4 shrink-0 transition-transform duration-200', open && 'rotate-180')} />
    </button>
  );
}

export function AccordionContent({ children, className, ...props }) {
  const { open } = useContext(AccordionItemContext);
  if (!open) return null;
  return (
    <div className={cn('overflow-hidden text-sm text-gray-400', className)} {...props}>
      <div className="pb-4 pt-0">{children}</div>
    </div>
  );
}
