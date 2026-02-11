import { HistoryPage } from '@/features/history/pages/history-page/history-page';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
export default function HistoryScreen() {
  const [search, setSearch] = useState('');
  return (
    <>
      <Stack.Screen.Title>Transactions</Stack.Screen.Title>
      <Stack.SearchBar
        placement="automatic"
        placeholder="Search"
        onChangeText={(e) => setSearch(e.nativeEvent.text)}
      />
      <HistoryPage search={search} />
    </>
  );
}
