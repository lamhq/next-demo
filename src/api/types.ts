import { Identity } from '../common/identity/types';
import { User } from '../types/user';

export type LoginFn = (email: string, password: string) => Promise<Identity>;
export type LogOutFn = () => void;
export type GetProfileFn = () => Promise<User>;

export interface ApiContext {
  login: LoginFn;
  logout: LogOutFn;
  getProfile: GetProfileFn;
}
