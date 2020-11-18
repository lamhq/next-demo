import React from 'react';

import context from '../contexts/identity';
import { IdentityContext } from '../types';

export default function useIdentity(): IdentityContext {
  const contextVal = React.useContext(context);
  if (!contextVal) {
    throw new Error('IdentityProvider was not defined.');
  }
  return contextVal;
}
