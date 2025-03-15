import { IOrder } from './order.types';

export interface ITransaction {
  id: number;
  createdAt: string;
  updatedAt: string;

  paymentId: string;
  paymentMethod: string;
  amount: string;
  status: TransactionStatus;
  order?: IOrder;
}

export type TransactionStatus =
  | 'pending'
  | 'waiting_for_capture'
  | 'succeeded'
  | 'canceled'
  | 'refunded';
