import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function NavigationMenu({ className, ...props }) {
  return (
    <nav className={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)} {...props} />
  );
}

export function NavigationMenuList({ className, ...props }) {
  return (
    <ul className={cn('group flex flex-1 list-none items-center justify-center space-x-1', className)} {...props} />
  );
}

export function NavigationMenuItem({ className, ...props }) {
  return <li className={cn(className)} {...props} />;
}

export function NavigationMenuTrigger({ className, children, ...props }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      className={cn(
        'group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      {children}
      <ChevronDown className="relative top-[1px] ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
    </button>
  );
}

export function NavigationMenuContent({ className, ...props }) {
  return (
    <div
      className={cn(
        'absolute left-0 top-full w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-out data-[motion^=to-]:fade-in data-[motion^=from-]:zoom-out-95 data-[motion^=to-]:zoom-in-95',
        className
      )}
      {...props}
    />
  );
}

export function NavigationMenuLink({ className, ...props }) {
  return (
    <a
      className={cn(
        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white',
        className
      )}
      {...props}
    />
  );
}

export function NavigationMenuViewport({ className, ...props }) {
  return (
    <div
      className={cn(
        'absolute left-0 top-full flex justify-center perspective-[2000px]',
        className
      )}
      {...props}
    >
      <div className="mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-white/10 bg-[#13131a] shadow-lg" />
    </div>
  );
}
