import { PUBLIC_PAGES } from '@/configs/public.config';
import Link from 'next/link';

export function AuthToggle({ isLogin }: { isLogin: boolean }) {
  return (
    <div>
      {isLogin ? (
        <p>
          no account? <Link href={PUBLIC_PAGES.REGISTER}>register</Link>
        </p>
      ) : (
        <p>
          exist account? <Link href={PUBLIC_PAGES.LOGIN}>authorization</Link>
        </p>
      )}
    </div>
  );
}
