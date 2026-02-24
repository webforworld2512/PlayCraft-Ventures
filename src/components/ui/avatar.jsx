import React from 'react';
import { cn } from '@/lib/utils';

export function Avatar({ className, ...props }) {
  return (
    <span
      className={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white/10',
        className
      )}
      {...props}
    />
  );
}

export function AvatarImage({ className, src, alt, ...props }) {
  return (
    <img
      src={src}
      alt={alt ?? ''}
      className={cn('aspect-square h-full w-full object-cover', className)}
      {...props}
    />
  );
}

export function AvatarFallback({ className, children, ...props }) {
  return (
    <span
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-violet-600 text-sm font-medium text-white',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
