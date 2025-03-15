import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function Button({ className, children, ...props }: Props) {
  return (
    <button
      className={twMerge(
        `py-2 px-4 bg-gradient-to-r cursor-pointer font-semibold text-white from-accent/40 to-accent dark:from-dark-accent dark:to-dark-accent rounded-md transition-transform hover:scale-95 ${className}`
      )}
      {...props}
    >
      {children}
    </button>
  );
}
