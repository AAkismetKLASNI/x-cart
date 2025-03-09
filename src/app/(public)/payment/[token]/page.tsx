import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.const';
import { Payment } from './payment';

export const metadata: Metadata = {
  title: 'Payment',
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <Payment />;
}
