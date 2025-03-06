import { useRef } from 'react';

export function useDebounce(callback: () => void, time: number) {
  const timerId = useRef<NodeJS.Timeout>(null);

  return () => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => callback(), time);
  };
}
