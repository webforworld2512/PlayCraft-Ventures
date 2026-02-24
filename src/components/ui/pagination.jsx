import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Pagination({ className, ...props }) {
  return (
    <nav role="navigation" className={cn('mx-auto flex w-full justify-center', className)} {...props} />
  );
}

export function PaginationContent({ className, ...props }) {
  return <ul className={cn('flex flex-row items-center gap-2', className)} {...props} />;
}

export function PaginationItem({ className, ...props }) {
  return <li className={cn(className)} {...props} />;
}

export function PaginationLink({ className, isActive, ...props }) {
  return (
    <a
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-white/10 hover:text-white',
        isActive && 'bg-violet-600 text-white',
        className
      )}
      aria-current={isActive ? 'page' : undefined}
      {...props}
    />
  );
}

export function PaginationPrevious({ className, ...props }) {
  return (
    <a
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-white/10 hover:text-white',
        className
      )}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
    </a>
  );
}

export function PaginationNext({ className, ...props }) {
  return (
    <a
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-white/10 hover:text-white',
        className
      )}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
    </a>
  );
}

export function PaginationEllipsis({ className, ...props }) {
  return (
    <span className={cn('flex h-9 w-9 items-center justify-center', className)} {...props}>
      <span className="text-gray-500">...</span>
    </span>
  );
}
