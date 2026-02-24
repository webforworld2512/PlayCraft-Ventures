import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Carousel({ children, className, ...props }) {
  const [index, setIndex] = useState(0);
  const items = React.Children.toArray(children);
  const count = items.length;

  const go = (dir) => {
    setIndex((i) => (i + dir + count) % count);
  };

  return (
    <div className={cn('relative w-full', className)} {...props}>
      <div className="overflow-hidden">
        {items.map((item, i) => (
          <div
            key={i}
            className={cn('w-full transition-transform duration-300', i !== index && 'hidden')}
          >
            {item}
          </div>
        ))}
      </div>
      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 hover:bg-black/70"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 hover:bg-black/70"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="flex justify-center gap-1 mt-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  'h-2 rounded-full transition-all',
                  i === index ? 'w-4 bg-violet-500' : 'w-2 bg-white/30'
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function CarouselItem({ className, ...props }) {
  return <div className={cn('min-w-0 shrink-0', className)} {...props} />;
}

export function CarouselContent({ className, ...props }) {
  return <div className={cn('flex', className)} {...props} />;
}

export function CarouselPrevious({ className, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        'absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full border border-white/10 bg-[#13131a] flex items-center justify-center hover:bg-white/10',
        className
      )}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
    </button>
  );
}

export function CarouselNext({ className, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        'absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full border border-white/10 bg-[#13131a] flex items-center justify-center hover:bg-white/10',
        className
      )}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
    </button>
  );
}
