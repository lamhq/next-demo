import { Service } from 'typedi';
import { User } from '../types/user';
import HttpService from './http';

@Service()
export default class ProfileService {
  constructor(private readonly httpService: HttpService) {}

  async getProfile(): Promise<User> {
    const resp = await this.httpService.get<User>('/user/accounts/mine');
    return resp.data;
  }

  async updateProfile(): Promise<void> {
    return this.httpService.patch('/user/accounts/mine');
  }
}
