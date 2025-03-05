import { Button } from '@/components/ui/button';
import type { IProduct } from '@/types/product.types';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { m } from 'framer-motion';
import { useAddToCart } from '@/hooks/use.add.to.cart';

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
      delay: i * 0.1,
    },
  }),
};

interface Props {
  product: IProduct;
  index: number;
}

export function ProductItem({ product, index }: Props) {
  const { mutateAddToCart } = useAddToCart();

  const handleAddToCart = () => {
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
        className='mx-auto rounded-md select-none'
        width={200}
        height={200}
        priority={true}
      />

      <div className='space-y-2 p-1'>
        <div className='flex justify-between items-center gap-2 text-black/85'>
          <p className='font-semibold text-xl'>${product.price}</p>
          <p className='line-clamp-1'>{product.name}</p>
        </div>
        <p className='line-clamp-2 text-black/60'>{product.description}</p>
        <Button
          className='w-full hover:scale-95'
          onClick={handleAddToCart}
        >
          <ShoppingCart
            size='20'
            className='mx-auto'
          />
        </Button>
      </div>
    </m.div>
  );
}
