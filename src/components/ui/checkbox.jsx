import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Checkbox({ className, checked, onCheckedChange, ...props }) {
  const isChecked = checked === true || checked === 'indeterminate';
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={!!checked}
      className={cn(
        'peer h-4 w-4 shrink-0 rounded border border-white/20 bg-transparent ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 flex items-center justify-center',
        isChecked && 'bg-violet-600 border-violet-600',
        className
      )}
      onClick={() => onCheckedChange?.(!isChecked)}
      {...props}
    >
      {isChecked && <Check className="h-3 w-3 text-white" />}
    </button>
  );
}
