import React from 'react';
import { Variant } from 'react-bootstrap/esm/types';

export interface AlertContext {
  alert?: {
    message: string;
    variant: Variant;
  };
  alertSuccess: (message: string) => void;
  alertError: (message: string) => void;
  alertWarning: (message: string) => void;
  closeAlert: () => void;
}

export default React.createContext<AlertContext | null>(null);
