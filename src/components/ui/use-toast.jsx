import { useState, useCallback } from 'react';

let toastCount = 0;
const listeners = new Set();

function genId() {
  return (toastCount++).toString();
}

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback(
    (options = {}) => {
      const id = options.id ?? genId();
      const toastEntry = {
        id,
        title: options.title,
        description: options.description,
        variant: options.variant ?? 'default',
        duration: options.duration ?? 5000,
      };
      setToasts((prev) => [...prev, toastEntry]);
      if (toastEntry.duration > 0) {
        setTimeout(() => {
          setToasts((prev) => prev.filter((t) => t.id !== id));
        }, toastEntry.duration);
      }
      return { id, dismiss: () => setToasts((prev) => prev.filter((t) => t.id !== id)) };
    },
    []
  );

  const dismiss = useCallback((id) => {
    setToasts((prev) => (id ? prev.filter((t) => t.id !== id) : []));
  }, []);

  return { toasts, toast, dismiss };
}
