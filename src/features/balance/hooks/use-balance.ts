// use balance hook

import { BalanceResponse } from '@/features/balance/types/balance.types';
import { apiClient } from '@/features/shared/lib/api-client';
import { queryKeys } from '@/features/shared/lib/query-keys';
import { useQuery } from '@tanstack/react-query';

export function useBalance() {
  return useQuery({
    queryKey: queryKeys.balance,
    queryFn: () => apiClient.get<BalanceResponse>('/balance').then((res) => res.data),
  });
}
