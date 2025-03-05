import type { LucideIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface Props {
  Icon: LucideIcon;
  className?: string;
  size?: string;
  onClick?: () => void;
}

export function Icon({ Icon, className, size, onClick }: Props) {
  return (
    <Icon
      onClick={onClick}
      size={size}
      className={twMerge(
        `cursor-pointer text-gray-700 hover:text-text transition-colors ${className}`
      )}
    />
  );
}
