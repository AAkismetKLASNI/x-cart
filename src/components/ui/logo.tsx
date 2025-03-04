import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src='/logo.svg'
      alt='logo'
      width='50'
      height='50'
      priority={true}
      placeholder='blur'
      blurDataURL='/logo.svg'
    />
  );
}
