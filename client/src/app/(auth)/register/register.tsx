'use client';

import { Logo } from '@/components/ui/logo';
import { AuthForm } from '../components/auth.form';
import { AuthToggle } from '../components/auth.toggle';

export function Register() {
  return (
    <main className='h-screen flex justify-center items-center'>
      <div className='main-wrapper w-80 p-4 space-y-6'>
        <Logo />
        <AuthForm isLogin={false} />
        <AuthToggle isLogin={false} />
      </div>
    </main>
  );
}
