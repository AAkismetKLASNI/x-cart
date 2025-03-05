import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.const';
import { Cart } from './cart';

export const metadata: Metadata = {
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <Cart />;
}
