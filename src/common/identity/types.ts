import { Dispatch, SetStateAction } from 'react';

export interface Identity {
  displayName: string;
  token: string;
  expireAt: Date;
}

export type IdentityContext = [
  Identity | undefined,
  Dispatch<SetStateAction<Identity | undefined>>,
];
