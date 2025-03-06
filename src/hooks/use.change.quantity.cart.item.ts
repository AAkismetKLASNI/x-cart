import { cartService } from '@/services/cart.service';
import type { IChangeQuantityItem } from '@/types/cart.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useProfile } from './use.profile';
import { useGuestCartStore } from '@/store/guest.store';

export function useChangeQuantityCartItem() {
  const { user } = useProfile();
  const { changeQuantityItem } = useGuestCartStore();
  const queryClient = useQueryClient();

  const { mutate: mutateChangeQuantity } = useMutation({
    mutationFn: async (cartItem: IChangeQuantityItem) => {
      if (!user.isLoggedIn) {
        if (cartItem.quantity <= 1 && cartItem.type === 'decrement') {
          return { status: 'stop' };
        }

        changeQuantityItem(cartItem);

        return { status: 'success' };
      } else {
        if (cartItem.quantity <= 1 && cartItem.type === 'decrement') {
          return { status: 'stop' };
        }

        return cartService.changeQuantityCartItem(cartItem);
      }
    },
    onSuccess: () => {
      if (user.isLoggedIn) {
        queryClient.invalidateQueries({ queryKey: ['cart'] });
      }
    },
  });

  return { mutateChangeQuantity };
}
