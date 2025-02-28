import { saveTokenStorage } from '@/services/auth/auth.helper';
import { authService } from '@/services/auth/auth.service';
import { userService } from '@/services/user.service';
import { userTransformer } from '@/transformers/user.transformer';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useProfile = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: () => userService.fetchProfile(),
    refetchInterval: 1800000,
  });

  const { data: dataTokens, isSuccess } = useQuery({
    queryKey: ['new tokens'],
    queryFn: () => authService.getNewTokens(),
    enabled: !data?.data,
  });

  useEffect(() => {
    if (!isSuccess) return;

    if (dataTokens.data.accessToken) saveTokenStorage(dataTokens.data.accessToken);
  }, [isSuccess]);

  const profile = data?.data;

  const userState = profile ? userTransformer(profile) : null;

  return { isLoading, user: { ...profile, ...userState } };
};
