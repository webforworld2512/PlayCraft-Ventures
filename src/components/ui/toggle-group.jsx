import React, { createContext, useContext } from 'react';
import { cn } from '@/lib/utils';

const ToggleGroupContext = createContext({ type: 'single' });

export function ToggleGroup({ type = 'single', value, onValueChange, children, className, ...props }) {
  return (
    <ToggleGroupContext.Provider value={{ type, value, onValueChange }}>
      <div
        className={cn('flex items-center justify-center gap-1', className)}
        data-toggle-group
        {...props}
      >
        {children}
      </div>
    </ToggleGroupContext.Provider>
  );
}

export function ToggleGroupItem({ value: itemValue, className, children, ...props }) {
  const { type, value, onValueChange } = useContext(ToggleGroupContext);
  const isSelected = type === 'single' ? value === itemValue : (value ?? []).includes(itemValue);

  const handleClick = () => {
    if (type === 'single') {
      onValueChange?.(isSelected ? '' : itemValue);
    } else {
      const arr = value ?? [];
      onValueChange?.(isSelected ? arr.filter((v) => v !== itemValue) : [...arr, itemValue]);
    }
  };

  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 disabled:pointer-events-none disabled:opacity-50',
        isSelected && 'bg-white/10 text-white',
        'px-3 py-1.5',
        className
      )}
      data-state={isSelected ? 'on' : 'off'}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
