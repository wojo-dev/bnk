import { apiClient } from '@/features/shared/lib/api-client';
import { queryKeys } from '@/features/shared/lib/query-keys';
import { useQuery } from '@tanstack/react-query';

type ProfileResponse = {
  profile: { name: string };
  success: boolean;
};

export function useProfile() {
  return useQuery({
    queryKey: queryKeys.profile,
    queryFn: () => apiClient.get<ProfileResponse>('/profile').then((res) => res.data),
  });
}
