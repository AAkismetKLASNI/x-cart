'use client';

import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/auth/auth.service';
import { IFormData } from '@/types/user.types';
import { PUBLIC_PAGES } from '@/configs/public.config';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export function useAuthForm(isLogin: boolean) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>();

  const clientError = errors.email?.message || errors.password?.message;

  useEffect(() => {
    if (clientError) toast.error(clientError);
  }, [clientError]);

  const { mutate: mutateRegister, isPending: isPendingRegister } = useMutation({
    mutationKey: ['register'],
    mutationFn: (data: IFormData) => authService.main('register', data),
    onSuccess: () => {
      reset();
      router.push(PUBLIC_PAGES.HOME);
    },
    onError: async (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });

  // feat: add cart

  const { mutate: mutateLogin, isPending: isPendingLogin } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: IFormData) => authService.main('login', data, []),
    onSuccess: () => {
      reset();
      router.push(PUBLIC_PAGES.HOME);
    },
    onError: async (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });

  const onSubmit = (data: IFormData) => {
    if (isLogin) {
      mutateLogin(data);
    } else {
      mutateRegister(data);
    }
  };

  const isLoading = isPendingLogin || isPendingRegister;

  return { register, onSubmit, handleSubmit, isLoading };
}
