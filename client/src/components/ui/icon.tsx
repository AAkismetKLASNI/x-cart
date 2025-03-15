import type { LucideIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface Props {
  Icon: LucideIcon;
  className?: string;
  size?: string;
  onClick?: () => void;
  isGroup?: boolean;
}

export function Icon({ Icon, className, size, onClick, isGroup = false }: Props) {
  return (
    <Icon
      onClick={onClick}
      size={size}
      className={twMerge(
        `cursor-pointer text-gray-700 dark:text-gray-500 ${
          isGroup
            ? 'group-hover:dark:text-dark-text group-hover:text-text'
            : 'hover:dark:text-dark-text hover:text-text'
        }  transition-colors ${className}`
      )}
    />
  );
}
