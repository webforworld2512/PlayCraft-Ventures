import React from 'react';
import { cn } from '@/lib/utils';

export function Slider({ value, defaultValue = [0], onValueChange, min = 0, max = 100, step = 1, className, ...props }) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const val = value !== undefined ? value : internalValue;
  const setVal = onValueChange || setInternalValue;
  const v = Array.isArray(val) ? val[0] : val;

  return (
    <div className={cn('relative flex w-full touch-none select-none items-center', className)} {...props}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={v}
        onChange={(e) => setVal([Number(e.target.value)])}
        className="h-2 w-full appearance-none rounded-full bg-white/10 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-600 [&::-webkit-slider-thumb]:cursor-pointer"
      />
    </div>
  );
}
