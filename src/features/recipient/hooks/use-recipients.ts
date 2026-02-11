import { RecipientsPaginatedResponse } from '@/features/recipient/types/recipient.types';
import { apiClient } from '@/features/shared/lib/api-client';
import { queryKeys } from '@/features/shared/lib/query-keys';
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';

export function useRecipients(search?: string) {
  return useInfiniteQuery({
    queryKey: queryKeys.recipients(search),
    queryFn: ({ signal, pageParam }) =>
      apiClient
        .get<RecipientsPaginatedResponse>('/recipients', {
          signal,
          params: { page: pageParam, q: search || undefined },
        })
        .then((res) => res.data),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    placeholderData: keepPreviousData,
  });
}
