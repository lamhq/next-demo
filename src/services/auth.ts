import { Service } from 'typedi';
import { Identity } from '../common/identity/types';
import HttpService from './http';

@Service()
export default class AuthService {
  constructor(private readonly httpService: HttpService) {}

  async login(email: string, password: string): Promise<Identity> {
    const resp = await this.httpService.post<Identity>('/auth/user/tokens', {
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

  async logout(): Promise<void> {
    return this.httpService.delete('/auth/user/tokens/mine');
  }
}
