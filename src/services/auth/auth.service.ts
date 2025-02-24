import { axiosClassic } from '@/api/axios';
import { IFormData, IUser } from '@/types/user.types';
import { removeToken, saveTokenStorage } from './auth.helper';
import { ISimpleCartItem } from '@/types/cart.types';

export const AuthTokens = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
  REFRESH_TOKEN: 'REFRESH_TOKEN',
} as const;

export type AuthTokens = (typeof AuthTokens)[keyof typeof AuthTokens];

interface IAuthRes {
  acessToken: string;
  user: IUser;
}

class AuthService {
  async main(type: 'login' | 'register', data: IFormData, cartItems?: ISimpleCartItem[]) {
    const response = await axiosClassic.post<IAuthRes>(
      `/auth/${type}`,
      cartItems?.length ? { ...data, cartItems } : data
    );

    if (response.data.acessToken) saveTokenStorage(response.data.acessToken);

    return response;
  }

  async getNewTokens() {
    const response = await axiosClassic.post<IAuthRes>('/auth/access-token');

    if (response.data.acessToken) saveTokenStorage(response.data.acessToken);

    return response;
  }

  async getNewTokensByRefresh(refreshToken: string) {
    const response = await axiosClassic.post<IAuthRes>(
      '/auth/access-token',
      {},
      { headers: { Cookie: `refreshToken=${refreshToken}` } }
    );

    return response.data;
  }

  async logout() {
    const response = await axiosClassic.post<boolean>('/auth/logout');

    if (response.data) removeToken();

    return response;
  }
}

export const authService = new AuthService();
