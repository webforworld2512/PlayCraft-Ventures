import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const CommandContext = React.createContext({});

export function Command({ children, className, ...props }) {
  const [search, setSearch] = useState('');
  const [value, setValue] = useState('');
  return (
    <CommandContext.Provider value={{ search, setSearch, value, setValue }}>
      <div
        className={cn(
          'flex h-full w-full flex-col overflow-hidden rounded-md border border-white/10 bg-[#13131a]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </CommandContext.Provider>
  );
}

export function CommandInput({ className, placeholder = 'Search...', ...props }) {
  const { search, setSearch } = React.useContext(CommandContext);
  return (
    <div className="flex items-center border-b border-white/10 px-3">
      <Search className="mr-2 h-4 w-4 shrink-0 text-gray-500" />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    </div>
  );
}

export function CommandList({ className, ...props }) {
  return <div className={cn('max-h-64 overflow-y-auto overflow-x-hidden py-1', className)} {...props} />;
}

export function CommandEmpty({ className, ...props }) {
  return <div className={cn('py-6 text-center text-sm text-gray-500', className)} {...props} />;
}

export function CommandGroup({ className, ...props }) {
  return <div className={cn('overflow-hidden p-1', className)} {...props} />;
}

export function CommandGroupHeading({ className, ...props }) {
  return <div className={cn('px-2 py-1.5 text-xs font-medium text-gray-500', className)} {...props} />;
}

export function CommandItem({ className, onSelect, children, ...props }) {
  const { setValue } = React.useContext(CommandContext);
  return (
    <div
      role="option"
      className={cn(
        'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-white/10',
        className
      )}
      onClick={() => {
        setValue?.(typeof children === 'string' ? children : children?.props?.children);
        onSelect?.();
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export function CommandSeparator({ className, ...props }) {
  return <div className={cn('-mx-1 h-px bg-white/10', className)} {...props} />;
}
