'use client';

import { useCart } from '@/hooks/use.cart';
import { CartItem } from './cart.item';
import { Button } from '@/components/ui/button';
import { EmptyPage } from '@/components/ui/empty.page';
import { useRouter } from 'next/navigation';
import { PUBLIC_PAGES } from '@/configs/public.config';

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
          <div className='space-y-6 p-2 main-wrapper sticky top-24'>
            <div className='flex justify-between gap-2 text-black/80 font-semibold text-xl'>
              <span>Total:</span>
              <span>$1000</span>
            </div>
            <Button className='w-full'>Buy this</Button>
          </div>
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
