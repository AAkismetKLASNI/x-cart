import { instance } from '@/api/axios';
import { IProduct } from '@/types/product.types';

class ProductService {
  private BASE_URL = '/products';

  findAll() {
    return instance.get<IProduct[]>(this.BASE_URL);
  }
}

export const productService = new ProductService();
