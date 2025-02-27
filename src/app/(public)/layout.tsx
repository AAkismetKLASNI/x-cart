import { Header } from '@/components/layouts/header';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='space-y-10'>
      <Header />
      <main className='container mx-auto px-2'>{children}</main>
    </div>
  );
}
