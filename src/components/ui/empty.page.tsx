import { PropsWithChildren } from 'react';

export function EmptyPage({ children }: PropsWithChildren) {
  return <div className='main-wrapper p-6 space-y-4 text-center'>{children}</div>;
}
