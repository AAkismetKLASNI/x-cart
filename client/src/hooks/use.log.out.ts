import { PUBLIC_PAGES } from '@/configs/public.config';
import { authService } from '@/services/auth/auth.service';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export function useLogOut() {
  const router = useRouter();

  const { mutate: mutateLogOut } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => authService.logout(),
    onSuccess: () => router.push(PUBLIC_PAGES.HOME),
  });

  return { mutateLogOut };
}
