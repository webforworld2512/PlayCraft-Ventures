import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export function Calendar({ className, selected, onSelect, ...props }) {
  const [viewDate, setViewDate] = useState(selected ? new Date(selected) : new Date());
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const pad = Array(firstDay).fill(null);

  const isSelected = (d) => {
    if (!selected) return false;
    const s = new Date(selected);
    return s.getDate() === d && s.getMonth() === month && s.getFullYear() === year;
  };

  const handlePrev = () => setViewDate(new Date(year, month - 1));
  const handleNext = () => setViewDate(new Date(year, month + 1));

  return (
    <div className={cn('p-3', className)} {...props}>
      <div className="flex items-center justify-between mb-4">
        <button type="button" onClick={handlePrev} className="p-2 hover:bg-white/10 rounded">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-sm font-medium text-white">
          {MONTHS[month]} {year}
        </span>
        <button type="button" onClick={handleNext} className="p-2 hover:bg-white/10 rounded">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {DAYS.map((d) => (
          <div key={d} className="text-gray-500 font-medium py-1">
            {d}
          </div>
        ))}
        {pad.map((_, i) => (
          <div key={`pad-${i}`} />
        ))}
        {days.map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => onSelect?.(new Date(year, month, d))}
            className={cn(
              'h-8 w-8 rounded-md hover:bg-white/10',
              isSelected(d) && 'bg-violet-600 text-white'
            )}
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  );
}
