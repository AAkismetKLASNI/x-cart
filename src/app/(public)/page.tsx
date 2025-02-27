import { productService } from '@/services/product.service';
import { Home } from './home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Интернет магазин X-cart - лучший ассортимент',
};

const fetchProducts = async () => {
  return await productService.findAll();
};

export default async function Page() {
  const { data: products } = await fetchProducts();

  return <Home products={products} />;
}
