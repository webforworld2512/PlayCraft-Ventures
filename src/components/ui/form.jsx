import React, { createContext, useContext } from 'react';
import { cn } from '@/lib/utils';

const FormContext = createContext({});

export function Form({ children, onSubmit, className, ...props }) {
  return (
    <form className={cn(className)} onSubmit={onSubmit} {...props}>
      <FormContext.Provider value={{}}>{children}</FormContext.Provider>
    </form>
  );
}

export function FormField({ name, children }) {
  return (
    <FormContext.Provider value={{ name }}>{children}</FormContext.Provider>
  );
}

export function FormItem({ className, ...props }) {
  return <div className={cn('space-y-2', className)} {...props} />;
}

export function FormLabel({ className, ...props }) {
  return (
    <label
      className={cn(
        'text-sm font-medium leading-none text-gray-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className
      )}
      {...props}
    />
  );
}

export function FormControl({ className, ...props }) {
  return <div className={cn(className)} {...props} />;
}

export function FormDescription({ className, ...props }) {
  return <p className={cn('text-sm text-gray-500', className)} {...props} />;
}

export function FormMessage({ className, children, ...props }) {
  return (
    <p className={cn('text-sm font-medium text-red-400', className)} {...props}>
      {children}
    </p>
  );
}
