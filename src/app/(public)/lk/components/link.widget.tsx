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
      className='bg-gradient-to-r from-red-100 to-blue-100 dark:from-dark-bg dark:to-dark-bg rounded-md p-4 flex flex-col gap-4 justify-center items-center cursor-pointer group'
    >
      <div className='p-2 rounded-full bg-white dark:bg-dark-secondary'>
        <Icon
          isGroup
          Icon={icon}
          className='group-hover:text-text'
        />
      </div>

      <div className='px-4 py-1 bg-white dark:bg-dark-accent inline-block rounded-full transition-transform group-hover:scale-105'>
        {title}
      </div>
    </div>
  );
}
