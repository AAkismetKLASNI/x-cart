'use client';

import { useCart } from '@/app/(public)/lk/cart/hooks/use.cart';
import { Logo } from '../ui/logo';
import { ShoppingCart, User, Box, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { PRIVATE_PAGES } from '@/configs/private.config';
import { Icon } from '../ui/icon';
import { useProfile } from '@/hooks/use.profile';
import { m } from 'framer-motion';
import { useThemeStore } from '@/store/theme.store';

export function Header() {
  const { cartItems } = useCart();
  const { user } = useProfile();
  const countItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const { toggleTheme, theme } = useThemeStore();

  return (
    <header className='py-4 sticky z-10 bg-secondary/60 dark:bg-dark-secondary/60 backdrop-blur-md top-0 left-0 right-0'>
      <div className='container mx-auto px-2'>
        <div className='flex justify-between items-center'>
          <Logo />

          <div className='flex gap-6'>
            <div className='flex gap-6 bg-secondary dark:bg-dark-secondary p-2 rounded-full px-6'>
              {user.isLoggedIn && (
                <Link href={PRIVATE_PAGES.ORDERS}>
                  <Icon Icon={Box} />
                </Link>
              )}

              <Link href={PRIVATE_PAGES.LK}>
                <Icon Icon={User} />
              </Link>

              <Link
                href={PRIVATE_PAGES.BASKET}
                className='relative'
              >
                <Icon Icon={ShoppingCart} />
                {!!countItems && (
                  <m.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 20,
                    }}
                    className='absolute inline-flex px-1 text-xs text-white bg-red-500 rounded-full top-1 -translate-y-1/2 translate-x-full'
                  >
                    {countItems < 10 ? countItems : '+9'}
                  </m.span>
                )}
              </Link>
            </div>

            <m.div
              className='bg-secondary dark:bg-dark-secondary p-2 rounded-full transition-transform hover:scale-105 active:scale-95 cursor-pointer group'
              onClick={() => toggleTheme()}
            >
              <m.div
                animate={{
                  rotate: theme === 'light' ? 180 : 360,
                  transition: { duration: 0.5 },
                }}
              >
                <Icon
                  Icon={theme === 'light' ? Sun : Moon}
                  isGroup
                />
              </m.div>
            </m.div>
          </div>
        </div>
      </div>
    </header>
  );
}
