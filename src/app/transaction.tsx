import { TransactionPage } from '@/features/transaction/pages/transaction-page/transaction-page';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
export default function TransactionScreen() {
  const [search, setSearch] = useState('');
  return (
    <>
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
