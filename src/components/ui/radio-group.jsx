import React, { createContext, useContext } from 'react';
import { cn } from '@/lib/utils';

const RadioGroupContext = createContext({});

export function RadioGroup({ value, onValueChange, children, className, ...props }) {
  return (
    <RadioGroupContext.Provider value={{ value, onValueChange }}>
      <div role="radiogroup" className={cn('grid gap-2', className)} {...props}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}

export function RadioGroupItem({ value: itemValue, id, className, ...props }) {
  const { value, onValueChange } = useContext(RadioGroupContext);
  const checked = value === itemValue;
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <button
        type="button"
        role="radio"
        aria-checked={checked}
        id={id}
        className={cn(
          'h-4 w-4 rounded-full border border-white/20 bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500',
          checked && 'border-violet-600 border-[4px] border-violet-600 bg-violet-600'
        )}
        onClick={() => onValueChange?.(itemValue)}
        {...props}
      />
    </div>
  );
}
