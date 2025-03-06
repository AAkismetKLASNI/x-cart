import { Icon } from '@/components/ui/icon';
import { useChangeQuantityCartItem } from '@/hooks/use.change.quantity.cart.item';
import { useRemoveFromCart } from '@/hooks/use.remove.from.cart';
import type { ISimpleCartItem } from '@/types/cart.types';
import { Minus, Plus, Trash } from 'lucide-react';
import Image from 'next/image';

interface Props {
  item: ISimpleCartItem;
}

export function CartItem({ item }: Props) {
  const { mutateRemoveItem } = useRemoveFromCart();
  const { mutateChangeQuantity } = useChangeQuantityCartItem();

  return (
    <div
      className={`grid gap-2 grid-cols-[.15fr_1fr_.20fr_1fr] main-wrapper items-center ${
        item.asSecondItem && 'bg-gradient-to-r from-red-200 to-amber-100 '
      }`}
    >
      <Image
        src={item.product.image}
        alt={item.product.name}
        width='80'
        height='80'
        className='rounded-md '
      />

      <div className='space-y-2 text-black/80'>
        <div className='font-semibold flex items-center gap-4'>
          <p>{item.product.name}</p>
          {item.product.isHasSecondDiscount && (
            <span className='text-white bg-accent py-0.5 px-2 rounded-md text-sm'>
              2nd discount
            </span>
          )}
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

      <div className='justify-self-end'>
        <Icon
          onClick={() => mutateRemoveItem(item.id)}
          Icon={Trash}
          size='18'
        />
      </div>
    </div>
  );
}
