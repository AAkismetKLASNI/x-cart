import { Button } from '@/components/ui/button';
import type { IProduct } from '@/types/product.types';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { m } from 'framer-motion';
import { useAddToCart } from '@/app/(public)/lk/cart/hooks/use.add.to.cart';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PRIVATE_PAGES } from '@/configs/private.config';
import { Icon } from '@/components/ui/icon';

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
      delay: i * 0.08,
    },
  }),
};

interface Props {
  product: IProduct;
  index: number;
}

export function ProductItem({ product, index }: Props) {
  const [isAdded, setIsAdded] = useState(false);
  const { mutateAddToCart } = useAddToCart();

  const router = useRouter();

  const handleAddToCart = () => {
    if (isAdded) return router.push(PRIVATE_PAGES.BASKET);

    setIsAdded(true);
    mutateAddToCart({ product, quantity: 1 });
  };

  return (
    <m.div
      className='main-wrapper lg:p-2 relative space-y-4 cursor-pointer'
      initial='hidden'
      animate='visible'
      custom={index}
      variants={cardVariants}
    >
      <Image
        src={product.image}
        alt={product.name}
        className='mx-auto rounded-md'
        width={200}
        height={200}
        priority={true}
      />

      <div className='space-y-4 p-1'>
        <div className='flex justify-between items-center gap-2'>
          <p className='font-semibold text-xl text-black dark:text-green-600'>
            ${product.price}
          </p>
          <p className='line-clamp-1 font-semibold'>{product.name}</p>
        </div>
        <p className='line-clamp-1 text-sm text-text/80 dark:text-dark-text/80'>
          {product.description}
        </p>
        <Button
          className={`w-full h-10 ${
            isAdded && 'bg-black/15 text-text dark:text-dark-text'
          }`}
          onClick={handleAddToCart}
        >
          {isAdded ? (
            'In cart'
          ) : (
            <ShoppingCart
              size='20'
              className='mx-auto'
            />
          )}
        </Button>
      </div>
    </m.div>
  );
}
