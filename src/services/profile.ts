import { Service } from 'typedi';
import { User } from '../types/user';
import HttpService from './http';

export interface UpdateProfileData {
  name: string;
  phone: string;
  // avarta: string;
  currentPassword: string;
  newPassword: string;
}

@Service()
export default class ProfileService {
  constructor(private readonly httpService: HttpService) {}

  async getProfile(): Promise<User> {
    const resp = await this.httpService.get<User>('/user/accounts/mine');
    return resp.data;
  }

  async updateProfile(data: UpdateProfileData): Promise<void> {
    return this.httpService.patch('/user/accounts/mine', data);
  }
}
