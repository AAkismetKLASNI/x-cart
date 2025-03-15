'use client';

import { useCart } from '@/app/(public)/lk/cart/hooks/use.cart';
import { CartItem } from './components/cart.item';
import { EmptyPage } from '@/components/ui/empty.page';
import { PaySection } from './components/pay.section';
import { Icon } from '@/components/ui/icon';
import { CarrotIcon } from 'lucide-react';
import { GlobalLoader } from '@/components/ui/loaders/global.loader';
import { AnimatePresence } from 'framer-motion';

export function Cart() {
  const { cartItems, isLoading } = useCart();

  return (
    <>
      {isLoading ? (
        <GlobalLoader />
      ) : (
        <>
          {!!cartItems.length ? (
            <main className='grid gap-6 items-start grid-cols-[1fr_0.2fr] relative'>
              <ul className='space-y-4'>
                <AnimatePresence>
                  {cartItems.map((item, index) => (
                    <CartItem
                      index={index}
                      key={item.id}
                      item={item}
                    />
                  ))}
                </AnimatePresence>
              </ul>

              <PaySection />
            </main>
          ) : (
            <EmptyPage>
              <Icon
                Icon={CarrotIcon}
                size='60'
                className='inline-block'
              />
              <p className='font-semibold'>The basket is empty</p>
              <p>go to the main page to select the products</p>
            </EmptyPage>
          )}
        </>
      )}
    </>
  );
}
