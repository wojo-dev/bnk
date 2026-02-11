// use balance hook

import { BalanceResponse } from '@/features/balance/types/balance.types';
import { apiClient } from '@/features/shared/lib/api-client';
import { useQuery } from '@tanstack/react-query';

export function useBalance() {
  return useQuery({
    queryKey: ['balance'],
    queryFn: () => apiClient.get<BalanceResponse>('/balance').then((res) => res.data),
  });
}
