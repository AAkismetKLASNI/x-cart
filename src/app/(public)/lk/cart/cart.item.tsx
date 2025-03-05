import { Icon } from '@/components/ui/icon';
import { useRemoveFromCart } from '@/hooks/use.remove.from.cart';
import type { ISimpleCartItem } from '@/types/cart.types';
import { Minus, Plus, Trash } from 'lucide-react';
import Image from 'next/image';

interface Props {
  item: ISimpleCartItem;
}

export function CartItem({ item }: Props) {
  const { mutateRemoveItem } = useRemoveFromCart();

  return (
    <div className='grid gap-2 grid-cols-[.15fr_1fr_.20fr_1fr] main-wrapper items-center'>
      <Image
        src={item.product.image}
        alt={item.product.name}
        width='80'
        height='80'
        className='rounded-md select-none'
      />

      <div className='space-y-2 text-black/80'>
        <p className='font-semibold'>{item.product.name}</p>
        <p>${item.product.price}</p>
      </div>

      <div className='grid grid-cols-3 gap-4 items-center justify-items-center'>
        <div>
          <Icon
            Icon={Minus}
            size='18'
          />
        </div>
        <div>{item.quantity}</div>
        <div>
          <Icon
            Icon={Plus}
            size='18'
          />
        </div>
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
