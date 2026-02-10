import { RecipientsPaginatedResponse } from '@/features/recipients/types/recipient';
import { apiClient } from '@/features/shared/lib/api-client';
import { useInfiniteQuery } from '@tanstack/react-query';

export function useRecipients(search?: string) {
  return useInfiniteQuery({
    queryKey: ['recipients', search],
    queryFn: ({ signal, pageParam }) =>
      apiClient
        .get<RecipientsPaginatedResponse>('/recipients', {
          signal,
          params: { page: pageParam, q: search || undefined },
        })
        .then((res) => res.data),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
}
