import { TransactionPage } from '@/features/transaction/pages/transaction-page/transaction-page';
import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
export default function TransactionScreen() {
  const [search, setSearch] = useState('');
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
      <TransactionPage search={search} />
    </>
  );
}
