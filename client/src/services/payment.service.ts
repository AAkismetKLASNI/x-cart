import { instance } from '@/api/axios';
import { CreateOrderDto } from '@/types/order.types';

class PaymentService {
  checkout(createOrderDto: CreateOrderDto) {
    return instance.post<{ confirmationToken: string }>(
      `transactions/checkout`,
      createOrderDto
    );
  }
}

export const paymentService = new PaymentService();
