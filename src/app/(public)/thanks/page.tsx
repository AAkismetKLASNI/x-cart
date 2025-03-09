import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.const';

export const metadata: Metadata = {
  title: 'Thanks',
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <div>Thanks</div>;
}
