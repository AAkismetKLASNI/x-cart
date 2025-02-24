import { instance } from '@/api/axios';
import { ICart, ICartItem } from '@/types/cart.types';

class CartService {
  private BASE_URL = '/cart';

  getCart() {
    return instance.get<ICart>(this.BASE_URL);
  }

  addToCart(productId: string, quatity: number, asSecondItem?: boolean) {
    return instance.post<ICartItem>(this.BASE_URL, { productId, quatity, asSecondItem });
  }

  removeFromCart(cartItemId: string) {
    return instance.delete(this.BASE_URL, { data: { cartItemId } });
  }
}

export const cartService = new CartService();
