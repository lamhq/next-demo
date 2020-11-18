import React from 'react';
import { usePermanentState } from '../../hooks';
import Context from '../contexts/identity';
import { Identity } from '../types';

const IdentityProvider: React.FC = ({ children }) => {
  const contextVal = usePermanentState<Identity | undefined>('identity');
  return <Context.Provider value={contextVal}>{children}</Context.Provider>;
};

export default IdentityProvider;
