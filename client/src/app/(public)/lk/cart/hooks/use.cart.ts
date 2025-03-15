import { useGuestCartStore } from '@/store/guest.store';
import { useProfile } from '../../../../../hooks/use.profile';
import { useQuery } from '@tanstack/react-query';
import { ICartItem } from '@/types/cart.types';
import { cartService } from '@/services/cart.service';

export function useCart() {
  const { user } = useProfile();

  const guestItems = useGuestCartStore((store) => store.items);

  const fetchCartItems = async (): Promise<ICartItem[]> => {
    try {
      if (!user.isLoggedIn) return [];

      const { data } = await cartService.getCart();
      return data.items || [];
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return [];
    }
  };

  const { data = [], isLoading } = useQuery({
    queryKey: ['cart', user.isLoggedIn],
    queryFn: fetchCartItems,
  });

  const cartItems = user.isLoggedIn ? data : guestItems;

  return { cartItems, isLoading };
}
