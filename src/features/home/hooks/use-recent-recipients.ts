import { Recipient } from '@/features/recipient/types/recipient.types';
import { apiClient } from '@/features/shared/lib/api-client';
import { useQuery } from '@tanstack/react-query';

type RecentRecipientsResponse = {
  data: Recipient[];
};

export function useRecentRecipients() {
  return useQuery({
    queryKey: ['recent-recipients'],
    queryFn: () => apiClient.get<RecentRecipientsResponse>('/recent'),
  });
}
