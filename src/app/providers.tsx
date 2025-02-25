'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

const client = new QueryClient();

export function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={client}>
      <LazyMotion features={domAnimation}>
        {children}
        <Toaster />
      </LazyMotion>
    </QueryClientProvider>
  );
}
