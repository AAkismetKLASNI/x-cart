import { instance } from '@/api/axios';
import { IOrder } from '@/types/order.types';

class OrderService {
  private BASE_URL = '/orders';

  getAll() {
    return instance.get<IOrder[]>(this.BASE_URL);
  }
}

export const orderService = new OrderService();
