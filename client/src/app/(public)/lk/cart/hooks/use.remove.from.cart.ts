import { useGuestCartStore } from '@/store/guest.store';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useProfile } from '../../../../../hooks/use.profile';
import { cartService } from '@/services/cart.service';
import toast from 'react-hot-toast';

export function useRemoveFromCart() {
  const { user } = useProfile();
  const queryClient = useQueryClient();

  const { removeItem, items } = useGuestCartStore();

  const { mutate: mutateRemoveItem } = useMutation({
    mutationFn: async (cartItemId: string) => {
      if (!user.isLoggedIn) {
        removeItem(cartItemId);

        return items;
      } else {
        const { data } = await cartService.removeFromCart(cartItemId);

        return data.items;
      }
    },
    onSuccess: (updatedCart) => {
      if (!user.isLoggedIn) {
        queryClient.setQueryData(['cart', false], updatedCart);
      } else {
        queryClient.invalidateQueries({ queryKey: ['cart', true] });
      }
      toast.success('The product has been deleted');
    },
  });

  return { mutateRemoveItem };
}
