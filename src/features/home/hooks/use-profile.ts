import { apiClient } from '@/features/shared/lib/api-client';
import { useQuery } from '@tanstack/react-query';

type ProfileResponse = {
  profile: { name: string };
  success: boolean;
};

export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => apiClient.get<ProfileResponse>('/profile').then((res) => res.data),
  });
}
