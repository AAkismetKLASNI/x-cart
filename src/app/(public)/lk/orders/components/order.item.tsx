import { Badge } from '@/components/ui/badge';
import { IOrder } from '@/types/order.types';
import Image from 'next/image';

interface Props {
  order: IOrder;
}

export function OrderItem({ order }: Props) {
  return (
    <li className='space-y-4'>
      <div className='space-x-4'>
        <Badge>total: ${order.total}</Badge>
        <Badge className='bg-green-700'>status: {order.status}</Badge>
        <Badge className='bg-lime-700'>
          date: {new Date(order.createdAt).toLocaleDateString('ru-RU')}
        </Badge>
        <Badge className='bg-cyan-700'>id: {order.transactionId}</Badge>
      </div>

      <ul className='grid grid-cols-1 gap-4'>
        {order.cart.items.map((item) => (
          <div
            key={item.id}
            className='main-wrapper flex items-center gap-2'
          >
            <Image
              className='rounded-lg'
              src={item.product.image}
              alt={item.product.name}
              width='90'
              height='90'
            />

            <div className='space-y-2'>
              <p>{item.product.name}</p>
              <p>${item.product.price}</p>
              <p>qty: {item.quantity}</p>
            </div>
          </div>
        ))}
      </ul>
    </li>
  );
}
