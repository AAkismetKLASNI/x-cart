'use client';

import type { IProduct } from '@/types/product.types';
import { ProductItem } from './components/product.item';
// import Image from 'next/image';

interface Props {
  products: IProduct[];
}

export function Home({ products }: Props) {
  return (
    <main className='space-y-6'>
      {/* <Image
        className='rounded-md object-cover h-40 w-full'
        src='/banner.jpg'
        alt='banner'
        sizes='100vw'
        height='0'
        width='0'
      /> */}

      <ul className='grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:gap-6 lg:grid-cols-4'>
        {products.map((product, index) => (
          <ProductItem
            index={index}
            key={product.id}
            product={product}
          />
        ))}
      </ul>
    </main>
  );
}
