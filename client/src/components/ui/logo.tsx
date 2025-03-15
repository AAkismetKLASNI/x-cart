import { PUBLIC_PAGES } from '@/configs/public.config';
import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link
      href={PUBLIC_PAGES.HOME}
      className='inline-block '
    >
      <Image
        src='/logo.svg'
        alt='logo'
        width='50'
        height='50'
        placeholder='blur'
        blurDataURL='/logo.svg'
      />
    </Link>
  );
}
