import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Field({ className, ...props }: Props) {
  return (
    <input
      className={twMerge(`${className} outline-none p-2 rounded-md bg-bg block w-full`)}
      {...props}
    />
  );
}
