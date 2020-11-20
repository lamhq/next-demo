import { User } from '../types/user';
import httpService from './http';

export async function getProfile(): Promise<User> {
  const resp = await httpService.get<User>('/user/accounts/mine');
  return resp.data;
}

export async function updateProfile(): Promise<void> {
  return httpService.patch('/user/accounts/mine');
}
