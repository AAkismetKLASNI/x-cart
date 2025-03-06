'use client';

import { useCart } from '@/hooks/use.cart';
import { CartItem } from './components/cart.item';
import { Button } from '@/components/ui/button';
import { EmptyPage } from '@/components/ui/empty.page';
import { useRouter } from 'next/navigation';
import { PUBLIC_PAGES } from '@/configs/public.config';
import { PaySection } from './components/pay.section';

export function Cart() {
  const { cartItems } = useCart();

  const router = useRouter();

  return (
    <>
      {!!cartItems.length ? (
        <div className='grid gap-6 items-start grid-cols-[1fr_0.2fr] relative'>
          <ul className='space-y-4'>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}
          </ul>

          <PaySection />
        </div>
      ) : (
        <EmptyPage>
          <p className='font-semibold'>The basket is empty</p>
          <p>go to the main page to select the products</p>
          <Button
            className='px-12'
            onClick={() => router.push(PUBLIC_PAGES.HOME)}
          >
            Home
          </Button>
        </EmptyPage>
      )}
    </>
  );
}
