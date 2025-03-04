import { instance } from '@/api/axios';
import type { ICart, ICartItem } from '@/types/cart.types';
import { AxiosPromise } from 'axios';

class CartService {
  private BASE_URL = '/cart';

  getCart() {
    return instance.get<ICart>(this.BASE_URL);
  }

  addToCart(productId: string, quantity: number, asSecondItem?: boolean) {
    return instance.post<ICartItem>(this.BASE_URL, { productId, quantity, asSecondItem });
  }

  removeFromCart(cartItemId: string): AxiosPromise<ICart> {
    return instance.delete(this.BASE_URL, { data: { cartItemId } });
  }
}

export const cartService = new CartService();
