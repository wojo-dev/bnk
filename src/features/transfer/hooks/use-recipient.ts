// use recipient hook

import { Recipient } from '@/features/recipient/types/recipient.types';
import { apiClient } from '@/features/shared/lib/api-client';
import { useQuery } from '@tanstack/react-query';

export function useRecipient(recipientId: string) {
  return useQuery({
    queryKey: ['recipient', recipientId],
    queryFn: () => apiClient.get<Recipient>(`/recipient?id=${recipientId}`).then((res) => res.data),
  });
}
