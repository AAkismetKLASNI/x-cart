'use client';

import { GlobalLoader } from '@/components/ui/loaders/global.loader';
import { useProfile } from '@/hooks/use.profile';
import { Boxes, CarrotIcon, CreditCard, LayoutGrid } from 'lucide-react';
import Image from 'next/image';
import { LinkWidget } from './components/link.widget';
import { PRIVATE_PAGES } from '@/configs/private.config';
import { m } from 'framer-motion';
import { PUBLIC_PAGES } from '@/configs/public.config';
import { Icon } from '@/components/ui/icon';

export function Lk() {
  const { user, isLoading } = useProfile();

  return (
    <>
      {isLoading ? (
        <GlobalLoader />
      ) : (
        <m.main className='grid grid-cols-[1.5fr_8fr] gap-6'>
          <m.div
            // TODO: мэйби потом вынести в константу эту анимацию
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
            className='grid grid-rows-2 gap-4'
          >
            <div className='main-wrapper cursor-pointer flex gap-4 items-center'>
              {user.avatarPath ? (
                <Image
                  src={user.avatarPath}
                  alt='avatar'
                  width='56'
                  height='56'
                  className='rounded-full'
                />
              ) : (
                <div className='h-14 w-14 rounded-full bg-black/10 flex justify-center items-center font-semibold text-1xl'>
                  {user?.email && user.email[0].toUpperCase()}
                </div>
              )}
              <p>{user.name ? user.name : 'User'}</p>
            </div>
            <div className='main-wrapper cursor-pointer flex gap-4 items-center justify-center group'>
              <Icon
                Icon={CreditCard}
                isGroup
              />
              <span>- 354 (bonuses)</span>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
            className='main-wrapper grid grid-cols-3 gap-4'
          >
            <LinkWidget
              title='Home'
              href={PUBLIC_PAGES.HOME}
              icon={LayoutGrid}
            />

            <LinkWidget
              title='Orders'
              href={PRIVATE_PAGES.ORDERS}
              icon={Boxes}
            />

            <LinkWidget
              title='Cart'
              href={PRIVATE_PAGES.BASKET}
              icon={CarrotIcon}
            />
          </m.div>
        </m.main>
      )}
    </>
  );
}
