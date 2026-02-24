import React from 'react';
import { cn } from '@/lib/utils';

export function ChartContainer({ className, children, ...props }) {
  return (
    <div className={cn('w-full', className)} {...props}>
      {children}
    </div>
  );
}

export function ChartTooltip({ className, ...props }) {
  return (
    <div
      className={cn(
        'rounded-md border border-white/10 bg-[#13131a] px-3 py-2 text-sm shadow-md',
        className
      )}
      {...props}
    />
  );
}

export function ChartTooltipContent({ className, ...props }) {
  return <div className={cn('', className)} {...props} />;
}

export function ChartLegend({ className, ...props }) {
  return <div className={cn('flex flex-wrap justify-center gap-4', className)} {...props} />;
}

export function ChartLegendContent({ className, ...props }) {
  return <div className={cn('flex items-center gap-2', className)} {...props} />;
}

export function ChartLegendItem({ className, ...props }) {
  return <div className={cn('flex items-center gap-2', className)} {...props} />;
}

export function ChartLegendIndicator({ className, ...props }) {
  return <div className={cn('h-2 w-2 rounded-full', className)} {...props} />;
}
