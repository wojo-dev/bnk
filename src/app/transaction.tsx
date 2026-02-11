import { Recipient } from '@/features/recipient/types/recipient.types';
import { useRecipientStore } from '@/features/recipient/store/use-recipient-store';
import { apiClient } from '@/features/shared/lib/api-client';
import { TransactionPage } from '@/features/transaction/pages/transaction-page/transaction-page';
import { Transaction } from '@/features/transaction/types/transaction.types';
import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
export default function TransactionScreen() {
  const [search, setSearch] = useState('');
  const setSelectedRecipient = useRecipientStore((s) => s.setSelectedRecipient);

  const handleTransactionPress = async (transaction: Transaction) => {
    const res = await apiClient.get<Recipient>('/recipient', {
      params: { id: transaction.recipientId },
    });
    setSelectedRecipient(res.data);
    router.push('/transfer');
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen.Title>Transactions</Stack.Screen.Title>
      <Stack.SearchBar
        placement="automatic"
        placeholder="Search"
        onChangeText={(e) => setSearch(e.nativeEvent.text)}
      />
      <TransactionPage search={search} onTransactionPress={handleTransactionPress} />
    </>
  );
}
