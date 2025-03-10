import { Icon } from '@/components/ui/icon';
import { useChangeQuantityCartItem } from '@/hooks/use.change.quantity.cart.item';
import { useRemoveFromCart } from '@/app/(public)/lk/cart/hooks/use.remove.from.cart';
import type { ISimpleCartItem } from '@/types/cart.types';
import { Minus, Plus, Trash } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const cartVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
      delay: i * 0.05,
    },
  }),
};

interface Props {
  item: ISimpleCartItem;
  index: number;
}

export function CartItem({ item, index }: Props) {
  const { mutateRemoveItem } = useRemoveFromCart();
  const { mutateChangeQuantity } = useChangeQuantityCartItem();

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      custom={index}
      variants={cartVariants}
      layout
      className={`grid gap-2 grid-cols-[.18fr_1fr_.20fr_1fr] main-wrapper items-center`}
    >
      <Image
        src={item.product.image}
        alt={item.product.name}
        width='90'
        height='90'
        className='rounded-md'
      />

      <div className='space-y-2'>
        <div className='font-semibold flex items-center gap-4'>
          <p>{item.product.name}</p>
          {item.product.isHasSecondDiscount && <Badge>2nd discount</Badge>}
        </div>
        <div className='space-x-2'>
          {item.asSecondItem ? (
            <>
              <span className='text-amber-800 font-semibold'>
                ${item.product.discountPrice}
              </span>
              <span className='line-through'>${item.product.price}</span>
            </>
          ) : (
            <span>${item.product.price}</span>
          )}
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4 items-center justify-items-center'>
        <Icon
          onClick={() =>
            mutateChangeQuantity({
              id: item.id,
              quantity: item.quantity,
              type: 'decrement',
            })
          }
          Icon={Minus}
          size='18'
        />
        <div>{item.quantity}</div>
        <Icon
          onClick={() =>
            mutateChangeQuantity({
              id: item.id,
              quantity: item.quantity,
              type: 'increment',
            })
          }
          Icon={Plus}
          size='18'
        />
      </div>

      <Icon
        className='justify-self-end'
        onClick={() => mutateRemoveItem(item.id)}
        Icon={Trash}
        size='18'
      />
    </motion.div>
  );
}
