import { Icon } from '@/components/ui/icon';
import type { LucideIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Props {
  icon: LucideIcon;
  title: string;
  href: string;
}

export function LinkWidget({ href, icon, title }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(href)}
      className='bg-gradient-to-r from-red-100 to-blue-100 rounded-md p-4 flex flex-col gap-4 justify-center items-center cursor-pointer group'
    >
      <div className='p-2 bg-white rounded-full transition-transform group-hover:scale-105'>
        <Icon Icon={icon} />
      </div>
      <div className='px-4 py-1 bg-white inline-block rounded-full transition-transform group-hover:scale-105'>
        {title}
      </div>
    </div>
  );
}
