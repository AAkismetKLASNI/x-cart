import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
}

export function Loader({ className }: Props) {
  return (
    <div
      className={twMerge(
        `w-4 h-4 border-2 border-accent border-r-0 rounded-full animate-spin ${className}`
      )}
    ></div>
  );
}
