import { PropsWithChildren } from 'react';
import { Button } from './button';
import { useRouter } from 'next/navigation';
import { PUBLIC_PAGES } from '@/configs/public.config';
import { m } from 'framer-motion';

export function EmptyPage({ children }: PropsWithChildren) {
  const router = useRouter();

  return (
    <m.main
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
      }}
      className='main-wrapper p-6 space-y-4 text-center mx-auto group'
    >
      {children}
      <Button
        className='px-12'
        onClick={() => router.push(PUBLIC_PAGES.HOME)}
      >
        Home
      </Button>
    </m.main>
  );
}
