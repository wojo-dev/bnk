import { apiClient } from '@/features/shared/lib/api-client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { HistoryPaginatedResponse } from '../types/history.types';

export function useHistory(search?: string) {
  return useInfiniteQuery({
    queryKey: ['history', search],
    queryFn: ({ signal, pageParam }) =>
      apiClient
        .get<HistoryPaginatedResponse>('/history', {
          signal,
          params: { page: pageParam, q: search || undefined },
        })
        .then((res) => res.data),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
}
