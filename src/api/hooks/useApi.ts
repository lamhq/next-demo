import { useContext } from 'react';
import apiContext from '../contexts/api';
import { ApiContext } from '../types';

/**
 * Hook that provide helper functions to communicate with server
 */
export default function useApi(): ApiContext {
  const contextVal = useContext(apiContext);
  if (!contextVal) {
    throw new Error('ApiProvider was not defined.');
  }
  return contextVal;
}
