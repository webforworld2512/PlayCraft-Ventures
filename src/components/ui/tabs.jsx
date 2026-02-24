import React, { createContext, useContext, useState } from 'react';
import { cn } from '@/lib/utils';

const TabsContext = createContext({});

export function Tabs({ defaultValue, value: controlledValue, onValueChange, children, className, ...props }) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const setValue = onValueChange || setInternalValue;
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={cn('w-full', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className, ...props }) {
  return (
    <div
      className={cn(
        'inline-flex h-9 items-center justify-center rounded-lg bg-white/5 p-1 text-gray-400',
        className
      )}
      {...props}
    />
  );
}

export function TabsTrigger({ value, className, ...props }) {
  const { value: selected, setValue } = useContext(TabsContext);
  const isSelected = selected === value;
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isSelected}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        isSelected ? 'bg-[#13131a] text-white shadow' : 'hover:bg-white/10 hover:text-white',
        className
      )}
      onClick={() => setValue(value)}
      {...props}
    />
  );
}

export function TabsContent({ value, className, ...props }) {
  const { value: selected } = useContext(TabsContext);
  if (selected !== value) return null;
  return (
    <div
      role="tabpanel"
      className={cn(
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2',
        className
      )}
      {...props}
    />
  );
}
