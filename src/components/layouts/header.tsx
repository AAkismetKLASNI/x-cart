'use client';

import { useCart } from '@/hooks/use.cart';
import { Logo } from '../ui/logo';
import { ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { privatePages } from '@/configs/private.config';
import { Icon } from '../ui/icon';

export function Header() {
  const { cartItems } = useCart();
  const countItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className='py-4 sticky z-10 bg-secondary/60 backdrop-blur-md top-0 left-0 right-0'>
      <div className='container mx-auto px-2'>
        <div className='flex justify-between items-center'>
          <Logo />

          <div className='flex space-x-6 bg-secondary p-2 rounded-full px-6'>
            <Link href={privatePages.LK}>
              <Icon Icon={User} />
            </Link>

            <Link
              href={privatePages.BASKET}
              className='relative'
            >
              <Icon Icon={ShoppingCart} />
              {!!countItems && (
                <span className='absolute inline-flex px-1 text-xs text-white bg-red-500 rounded-full top-1 -translate-y-1/2 translate-x-full'>
                  {countItems < 10 ? countItems : '+9'}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
