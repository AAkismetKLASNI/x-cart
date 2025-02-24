import { instance } from '@/api/axios';
import { IUser } from '@/types/user.types';

class UserService {
  private BASE_URL = '/users';

  fetchProfile() {
    return instance.get<IUser>(`${this.BASE_URL}/profile`);
  }

  fetchPremium() {
    return instance.get<{ text: string }>(`${this.BASE_URL}/premium`);
  }

  fetchManagerContent() {
    return instance.get<{ text: string }>(`${this.BASE_URL}/manager`);
  }

  fetchList() {
    return instance.get<IUser[]>(`${this.BASE_URL}/list`);
  }
}

export const userService = new UserService();
