import { ICart } from './cart.types';
import { ITransaction } from './transaction.types';
import { IUser } from './user.types';

export interface IOrder {
  id: string;
  createdAt: string;
  updatedAt: string;

  total: number;
  status: OrderStatus;

  user?: IUser;
  cart: ICart;
  transaction: ITransaction;

  promoCode?: {
    code: string;
    discount: number;
  };
}

export interface CreateOrderDto {
  promoCode?: string | null;
}

export type OrderStatus = 'pending' | 'processing' | 'completed' | 'canceled';
