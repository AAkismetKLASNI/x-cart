'use client';

import { EmptyPage } from '@/components/ui/empty.page';
import { useGetOrders } from './hooks/use.get.orders';
import { Icon } from '@/components/ui/icon';
import { BoxesIcon } from 'lucide-react';
import { GlobalLoader } from '@/components/ui/loaders/global.loader';
import { OrderItem } from './components/order.item';
import { m } from 'framer-motion';

export function Orders() {
  const { orders, isLoading } = useGetOrders();

  return (
    <>
      {isLoading ? (
        <GlobalLoader />
      ) : (
        <>
          {orders?.length ? (
            <m.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <ul className='space-y-12'>
                {orders.map((order) => (
                  <OrderItem
                    key={order.id}
                    order={order}
                  />
                ))}
              </ul>
            </m.main>
          ) : (
            <EmptyPage>
              <Icon
                Icon={BoxesIcon}
                size='60'
                className='inline-block'
              />
              <p className='font-semibold'>The orders is empty</p>
              <p>go to the main page to select the products</p>
            </EmptyPage>
          )}
        </>
      )}
    </>
  );
}
