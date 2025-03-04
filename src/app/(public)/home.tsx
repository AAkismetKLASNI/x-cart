'use client';

import type { IProduct } from '@/types/product.types';
import { ProductItem } from './components/product.item';
import { useCart } from '@/hooks/use.cart';

interface Props {
  products: IProduct[];
}

export function Home({ products }: Props) {
  return (
    <div className='grid grid-cols-2 gap-2 pb-4 md:grid-cols-3 md:gap-4 lg:gap-6 lg:grid-cols-4'>
      {products.map((product, index) => (
        <ProductItem
          index={index}
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
