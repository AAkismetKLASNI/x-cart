import Cookies from 'js-cookie';
import { AuthTokens } from './auth.service';

export const getAccessToken = () => {
  const accessToken = Cookies.get(AuthTokens.ACCESS_TOKEN);

  return accessToken || null;
};

export const saveTokenStorage = (accessToken: string) => {
  Cookies.set(AuthTokens.ACCESS_TOKEN, accessToken, {
    domain: 'localhost',
    sameSite: 'strict',
    expires: 1,
  });
};

export const removeToken = () => {
  Cookies.remove(AuthTokens.ACCESS_TOKEN);
};
