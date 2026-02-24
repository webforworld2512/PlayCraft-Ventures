import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export function Menubar({ className, ...props }) {
  return (
    <div
      className={cn(
        'flex h-9 items-center space-x-1 rounded-md border border-white/10 bg-[#13131a] p-1',
        className
      )}
      {...props}
    />
  );
}

export function MenubarMenu({ children }) {
  return <div className="relative">{children}</div>;
}

export function MenubarTrigger({ className, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        'flex cursor-pointer select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none hover:bg-white/10 focus:bg-white/10',
        className
      )}
      {...props}
    />
  );
}

export function MenubarContent({ className, ...props }) {
  return (
    <div
      className={cn(
        'absolute left-0 top-full z-50 min-w-[12rem] overflow-hidden rounded-md border border-white/10 bg-[#13131a] p-1 shadow-lg',
        className
      )}
      {...props}
    />
  );
}

export function MenubarItem({ className, ...props }) {
  return (
    <div
      className={cn(
        'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-white/10',
        className
      )}
      {...props}
    />
  );
}

export function MenubarSeparator({ className, ...props }) {
  return <div className={cn('-mx-1 my-1 h-px bg-white/10', className)} {...props} />;
}

export function MenubarShortcut({ className, ...props }) {
  return <span className={cn('ml-auto text-xs text-gray-500', className)} {...props} />;
}
