import React from 'react';

export interface AlertContext {
  alert?: {
    message: string;
    variant: 'success' | 'danger' | 'warning';
  };
  alertSuccess: (message: string) => void;
  alertError: (message: string) => void;
  alertWarning: (message: string) => void;
  closeAlert: () => void;
}

export default React.createContext<AlertContext | null>(null);
