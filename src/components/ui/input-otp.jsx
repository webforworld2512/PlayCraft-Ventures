import React from 'react';
import { cn } from '@/lib/utils';

export function InputOTP({ value, onChange, maxLength = 6, className, ...props }) {
  const digits = Array.from({ length: maxLength }, (_, i) => value?.[i] ?? '');
  const refs = React.useRef([]);

  const handleChange = (index, char) => {
    if (!/^\d*$/.test(char)) return;
    const next = [...digits];
    next[index] = char.slice(-1);
    const str = next.join('');
    onChange?.(str);
    if (char && index < maxLength - 1) refs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, maxLength);
    if (pasted) {
      onChange?.(pasted);
      const next = pasted.length - 1;
      refs.current[next]?.focus();
    }
  };

  return (
    <div className={cn('flex gap-2', className)} onPaste={handlePaste} {...props}>
      {digits.map((d, i) => (
        <input
          key={i}
          ref={(el) => (refs.current[i] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={d}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          className={cn(
            'h-10 w-10 rounded-md border border-white/20 bg-transparent text-center text-lg text-white outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500'
          )}
        />
      ))}
    </div>
  );
}

export function InputOTPGroup({ className, ...props }) {
  return <div className={cn('flex items-center', className)} {...props} />;
}

export function InputOTPSlot({ index, className, ...props }) {
  return <div className={cn(className)} {...props} />;
}
