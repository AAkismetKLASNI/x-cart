import { Logo } from '../ui/logo';

export function Header() {
  return (
    <div className='py-4 sticky z-10 bg-black/10 backdrop-blur-md top-0 left-0 right-0'>
      <div className='container mx-auto px-2'>
        <Logo />
      </div>
    </div>
  );
}
