import { promoService } from '@/services/promo.service';
import { useMutation } from '@tanstack/react-query';
import { useState, useRef } from 'react';
import toast from 'react-hot-toast';

export function usePromoCode() {
  const [discountValue, setDiscountValue] = useState<number>(0);
  const promoCode = useRef<string>(null);

  const { mutate: mutatePromo } = useMutation({
    mutationKey: ['promo-code'],
    mutationFn: (promo: string) => promoService.checkPromo(promo),
    onSuccess: (data) => {
      const discount = data?.data;

      if (discount) {
        setDiscountValue(discount);
      } else {
        toast.error('Promo code is not valid');
        setDiscountValue(0);
      }
    },
    onError: () => {
      toast.error('Promo code was used');
    },
  });

  return { mutatePromo, discountValue, promoCode };
}
