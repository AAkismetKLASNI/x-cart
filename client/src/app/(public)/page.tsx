import { productService } from '@/services/product.service';
import { Home } from './home';

const fetchProducts = async () => {
  return await productService.findAll();
};

export default async function Page() {
  const { data: products } = await fetchProducts();

  return <Home products={products} />;
}
