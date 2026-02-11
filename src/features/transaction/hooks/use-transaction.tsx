import { apiClient } from '@/features/shared/lib/api-client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { TransactionPaginatedResponse } from '../types/transaction.types';

export function useTransaction(search?: string) {
  return useInfiniteQuery({
    queryKey: ['transaction', search],
    queryFn: ({ signal, pageParam }) =>
      apiClient
        .get<TransactionPaginatedResponse>('/transaction', {
          signal,
          params: { page: pageParam, q: search || undefined },
        })
        .then((res) => res.data),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
}
