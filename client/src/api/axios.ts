import axios, { CreateAxiosDefaults } from 'axios';
import { getAccessToken, removeToken } from '../services/auth/auth.helper';
import { errorCatch } from './api.helper';
import { authService } from '@/services/auth/auth.service';

const options: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_SERVER_API,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
};

export const axiosClassic = axios.create(options);

export const instance = axios.create(options);

instance.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      error?.response?.status === 401 ||
      errorCatch(error) === 'jwt expired' ||
      (errorCatch(error) === 'jwt must be provided' &&
        error.config &&
        !error.config._isReady)
    ) {
      originalRequest._isReady = true;
      try {
        await authService.getNewTokens();
        return instance.request(originalRequest);
      } catch (error) {
        if (
          errorCatch(error) === 'jwt expired' ||
          errorCatch(error) === 'Refresh token not passed'
        )
          removeToken();
      }
    }
  }
);
