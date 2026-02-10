import { useHistory } from '@/features/history/hooks/use-history';
import { History } from '@/features/history/types/history';
import { FlashList } from '@shopify/flash-list';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
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
      <FlashList
        data={history}
        renderItem={({ item }: { item: History }) => (
          <Text>
            {item.name} - {item.amount}
          </Text>
        )}
        keyExtractor={(item: History) => item.id}
        onEndReached={() => hasNextPage && fetchNextPage()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? (
            <View style={{ padding: 16, alignItems: 'center' }}>
              <ActivityIndicator />
            </View>
          ) : null
        }
      />
    </>
  );
}
