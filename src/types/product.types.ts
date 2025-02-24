export interface IProduct {
  id: string;
  createdAt: string;
  updatedAt: string;

  name: string;
  image: string;

  price: number;
  discountPrice: number;

  description: string;
  category: string;

  isHasSecondDiscount: boolean;
}

export type TCartProduct = Pick<
  IProduct,
  'id' | 'name' | 'image' | 'price' | 'discountPrice' | 'isHasSecondDiscount'
>;
