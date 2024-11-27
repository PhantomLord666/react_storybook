import { useState } from 'react';

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    setToasts((prev) => {
      if (toast.preventDuplicates && prev.some((t) => t.message === toast.message)) {
        return prev;
      }
      return [...prev, { id: Date.now(), ...toast }];
    });
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return { toasts, addToast, removeToast };
};
