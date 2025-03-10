'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, useEffect } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { useThemeStore } from '@/store/theme.store';

const client = new QueryClient();

export function Providers({ children }: PropsWithChildren) {
  const { setTheme } = useThemeStore();

  useEffect(() => {
    setTheme();
  }, []);

  return (
    <QueryClientProvider client={client}>
      <LazyMotion features={domAnimation}>
        {children}
        <Toaster />
      </LazyMotion>
    </QueryClientProvider>
  );
}
