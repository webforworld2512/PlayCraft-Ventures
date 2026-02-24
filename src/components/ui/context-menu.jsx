import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function ContextMenu({ children, className, ...props }) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const childArray = React.Children.toArray(children);
  const trigger = childArray[0];
  const content = childArray[1];

  const onContextMenu = (e) => {
    e.preventDefault();
    setPos({ x: e.clientX, y: e.clientY });
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [open]);

  return (
    <>
      <div onContextMenu={onContextMenu} className={cn(className)} {...props}>
        {trigger}
      </div>
      {open && content && (
        <>
          <div className="fixed inset-0 z-40" aria-hidden />
          <div
            className="fixed z-50 min-w-[8rem] overflow-hidden rounded-md border border-white/10 bg-[#13131a] p-1 shadow-lg"
            style={{ left: pos.x, top: pos.y }}
          >
            {content}
          </div>
        </>
      )}
    </>
  );
}

export function ContextMenuTrigger({ asChild, children, ...props }) {
  return <>{children}</>;
}

export function ContextMenuContent({ className, children, ...props }) {
  return (
    <div className={cn('py-1', className)} {...props}>
      {children}
    </div>
  );
}

export function ContextMenuItem({ className, ...props }) {
  return (
    <div
      className={cn(
        'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-white/10',
        className
      )}
      {...props}
    />
  );
}

export function ContextMenuSeparator({ className, ...props }) {
  return <div className={cn('-mx-1 my-1 h-px bg-white/10', className)} {...props} />;
}
