import { Identity } from '../common/identity/types';
import httpService from './http';

export async function login(email: string, password: string): Promise<Identity> {
  const resp = await httpService.post<Identity>('/auth/user/tokens', {
    email,
    password,
  });
  const identity: Identity = {
    displayName: resp.data.displayName,
    expireAt: resp.data.expireAt,
    token: '', // token won't be saved in local storage
  };
  return identity;
}

export async function logout(): Promise<void> {
  return httpService.delete('/auth/user/tokens/mine');
}
