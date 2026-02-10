import { HistoryList } from '@/features/history/components/history-list/history-list';
import { useHistory } from '@/features/history/hooks/use-history';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
export default function HistoryScreen() {
  const [search, setSearch] = useState('');
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useHistory(search);
  const history = data?.pages.flatMap((p) => p.data) ?? [];
  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <>
      <Stack.Screen.Title>History</Stack.Screen.Title>
      <Stack.SearchBar
        placement="automatic"
        placeholder="Search"
        onChangeText={(e) => setSearch(e.nativeEvent.text)}
      />
      <HistoryList history={history} />
    </>
  );
}
