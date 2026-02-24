import React from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle, Info, CheckCircle, AlertTriangle } from 'lucide-react';

const variantStyles = {
  default: 'border-white/10 bg-white/5 text-gray-300',
  destructive: 'border-red-500/50 bg-red-500/10 text-red-400',
  success: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400',
  warning: 'border-amber-500/50 bg-amber-500/10 text-amber-400',
};

const iconMap = {
  default: AlertCircle,
  destructive: AlertTriangle,
  success: CheckCircle,
  warning: Info,
};

export function Alert({ className, variant = 'default', children, ...props }) {
  const Icon = iconMap[variant];
  return (
    <div
      role="alert"
      className={cn(
        'relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:pl-8',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <Icon className="h-4 w-4" />
      <div>{children}</div>
    </div>
  );
}

export function AlertTitle({ className, ...props }) {
  return <h5 className={cn('mb-1 font-medium leading-none tracking-tight', className)} {...props} />;
}

export function AlertDescription({ className, ...props }) {
  return <div className={cn('text-sm [&_p]:leading-relaxed', className)} {...props} />;
}
