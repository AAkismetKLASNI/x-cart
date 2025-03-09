import { Field } from '@/components/ui/field';
import { usePromoCode } from '../hooks/use.promo.code';
import { useDebounce } from '@/hooks/use.debounce';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use.cart';
import { useProfile } from '@/hooks/use.profile';
import { useRouter } from 'next/navigation';
import { PUBLIC_PAGES } from '@/configs/public.config';
import { useCheckout } from '../hooks/use.checkout';
import { Loader } from '@/components/ui/loader';

export function PaySection() {
  const { cartItems } = useCart();
  const { user } = useProfile();

  const router = useRouter();

  const { mutatePromo, discountValue, promoCode } = usePromoCode();
  const { checkout, isPending } = useCheckout({ promoCode: promoCode.current });

  const subTotal = cartItems.reduce(
    (acc, item) =>
      acc +
      (item.asSecondItem ? item.product.discountPrice : item.product.price) *
        item.quantity,
    0
  );
  const finallyTotal = subTotal - subTotal * (discountValue / 100);

  const debounce = useDebounce(() => {
    if (promoCode.current) {
      mutatePromo(promoCode.current);
    }
  }, 1000);

  return (
    <div className='space-y-6 p-2 main-wrapper sticky top-24'>
      {user.isLoggedIn && (
        <Field
          placeholder='Promo'
          onChange={(e) => {
            promoCode.current = e.target.value;

            debounce();
          }}
        />
      )}

      <div className='flex justify-between gap-2 text-black/80 font-semibold text-xl'>
        <span>Total:</span>
        <span>${finallyTotal.toFixed(2)}</span>
      </div>
      <Button
        disabled={isPending}
        onClick={() => {
          if (!user.isLoggedIn) {
            router.push(PUBLIC_PAGES.LOGIN);
            return;
          }
          checkout();
        }}
        className='w-full min-h-10'
      >
        {isPending ? <Loader className='border-white mx-auto' /> : 'Buy this'}
      </Button>
    </div>
  );
}
