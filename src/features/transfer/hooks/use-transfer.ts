// use transfer hook

import { apiClient } from '@/features/shared/lib/api-client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { router } from 'expo-router';
import { Alert } from 'react-native';
import { TransferRequest, TransferResponse } from '../types/transfer';

export function useTransfer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TransferRequest) => apiClient.post<TransferResponse>('/transfer', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['balance'] as const });
      router.push('/transfer/confirm');
    },
    onError: (error) => {
      Alert.alert('Error', error.message);
      router.back();
    },
  });
}
