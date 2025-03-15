import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useProfile } from '../../../../../hooks/use.profile';
import { IAddToCart } from '@/types/cart.types';
import { useGuestCartStore } from '@/store/guest.store';
import { cartService } from '@/services/cart.service';

export function useAddToCart() {
  const { user } = useProfile();
  const queryClient = useQueryClient();

  const { addItem } = useGuestCartStore();

  const { mutate: mutateAddToCart } = useMutation({
    mutationFn: async (cartData: IAddToCart) => {
      if (!user.isLoggedIn) {
        addItem(cartData);

        return { status: 'guest-added' };
      } else {
        const { data } = await cartService.addToCart(
          cartData.product.id,
          cartData.quantity,
          cartData.asSecondItem
        );

        return data;
      }
    },
    onSuccess: () => {
      if (user.isLoggedIn) {
        queryClient.invalidateQueries({ queryKey: ['cart', user.isLoggedIn] });
      }
    },
  });

  return { mutateAddToCart };
}
