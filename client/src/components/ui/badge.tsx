import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
}

export function Badge({ children, className }: PropsWithChildren<Props>) {
  return (
    <div
      className={twMerge(
        `px-2.5 py-1.5 rounded-lg inline-block text-xs font-semibold bg-red-500 text-white ${className}`
      )}
    >
      {children}
    </div>
  );
}
