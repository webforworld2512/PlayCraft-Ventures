import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Breadcrumb({ className, ...props }) {
  return (
    <nav aria-label="breadcrumb" className={cn('flex', className)} {...props} />
  );
}

export function BreadcrumbList({ className, ...props }) {
  return (
    <ol className={cn('flex flex-wrap items-center gap-1.5 text-sm text-gray-400', className)} {...props} />
  );
}

export function BreadcrumbItem({ className, ...props }) {
  return <li className={cn('inline-flex items-center gap-1.5', className)} {...props} />;
}

export function BreadcrumbLink({ className, href, ...props }) {
  return (
    <a
      href={href}
      className={cn('transition-colors hover:text-white', className)}
      {...props}
    />
  );
}

export function BreadcrumbPage({ className, ...props }) {
  return <span className={cn('font-normal text-white', className)} {...props} />;
}

export function BreadcrumbSeparator({ className, children, ...props }) {
  return (
    <li role="presentation" className={cn('flex items-center', className)} {...props}>
      {children ?? <ChevronRight className="h-4 w-4" />}
    </li>
  );
}

export function BreadcrumbEllipsis({ className, ...props }) {
  return (
    <span className={cn('flex h-9 w-9 items-center justify-center', className)} {...props}>
      <span className="text-gray-500">...</span>
    </span>
  );
}
