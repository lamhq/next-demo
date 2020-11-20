import React from 'react';
import context, { AlertContext } from '../contexts/alert';

export default function useAlert(): AlertContext {
  const contextVal = React.useContext(context);
  if (!contextVal) {
    throw new Error('AlertProvider was not defined.');
  }
  return contextVal;
}
