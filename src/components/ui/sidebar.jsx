import React from 'react';
import { cn } from '@/lib/utils';

export function Sidebar({ className, ...props }) {
  return (
    <aside
      className={cn(
        'flex h-full w-64 flex-col border-r border-white/10 bg-[#13131a]',
        className
      )}
      {...props}
    />
  );
}

export function SidebarHeader({ className, ...props }) {
  return <div className={cn('flex h-14 items-center border-b border-white/10 px-4', className)} {...props} />;
}

export function SidebarContent({ className, ...props }) {
  return <div className={cn('flex-1 overflow-auto p-4', className)} {...props} />;
}

export function SidebarFooter({ className, ...props }) {
  return <div className={cn('border-t border-white/10 p-4', className)} {...props} />;
}

export function SidebarGroup({ className, ...props }) {
  return <div className={cn('space-y-2', className)} {...props} />;
}

export function SidebarGroupLabel({ className, ...props }) {
  return <div className={cn('px-2 py-1.5 text-xs font-semibold text-gray-500', className)} {...props} />;
}

export function SidebarGroupContent({ className, ...props }) {
  return <div className={cn('space-y-1', className)} {...props} />;
}

export function SidebarMenu({ className, ...props }) {
  return <ul className={cn('space-y-1', className)} {...props} />;
}

export function SidebarMenuItem({ className, ...props }) {
  return <li className={cn(className)} {...props} />;
}

export function SidebarMenuButton({ className, isActive, ...props }) {
  return (
    <a
      className={cn(
        'flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-white/10',
        isActive && 'bg-white/10 text-white',
        className
      )}
      {...props}
    />
  );
}
