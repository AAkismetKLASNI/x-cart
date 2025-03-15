import { orderService } from '@/services/order.service';
import { useQuery } from '@tanstack/react-query';

export function useGetOrders() {
  const { data, isLoading } = useQuery({
    queryKey: ['orders'],
    queryFn: () => {
      return orderService.getAll();
    },
  });

  const orders = data?.data;

  return { orders, isLoading };
}
