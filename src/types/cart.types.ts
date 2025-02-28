import { TCartProduct } from './product.types';

export interface ICart {
  id: string;
  createdAt: string;
  updatedAt: string;

  userId: string;
  order: string;
  status: string;

  items: ICartItem[];
}

export interface ICartItem extends ISimpleCartItem {
  createdAt: string;
  updatedAt: string;
}

export interface ISimpleCartItem {
  id: string;
  product: TCartProduct;
  quantity: number;
  asSecondItem: boolean;
}

export interface IAddToCart {
  product: TCartProduct;
  quantity: number;
  asSecondItem?: boolean;
}
