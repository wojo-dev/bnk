import { Recipient } from '@/features/recipient/types/recipient.types';
import { apiClient } from '@/features/shared/lib/api-client';
import { queryKeys } from '@/features/shared/lib/query-keys';
import { useQuery } from '@tanstack/react-query';

type RecentRecipientsResponse = {
  data: Recipient[];
};

export function useRecentRecipients() {
  return useQuery({
    queryKey: queryKeys.recentRecipients,
    queryFn: () => apiClient.get<RecentRecipientsResponse>('/recent').then((res) => res.data),
  });
}
