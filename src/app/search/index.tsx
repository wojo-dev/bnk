import { useRecipients } from '@/features/recipients/hooks/use-recipients';
import { Recipient } from '@/features/recipients/types/recipient';
import { FlashList } from '@shopify/flash-list';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

export default function SearchIndex() {
  const [search, setSearch] = useState('');
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useRecipients(search);
  const recipients = data?.pages.flatMap((p) => p.data) ?? [];

  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <>
      <Stack.Screen.Title>Search</Stack.Screen.Title>
      <Stack.SearchBar
        placement="automatic"
        placeholder="Search"
        onChangeText={(e) => setSearch(e.nativeEvent.text)}
      />
      <View style={{ flex: 1, marginTop: 100 }}>
        <FlashList
          data={recipients}
          renderItem={({ item }: { item: Recipient }) => <Text>{item.name}</Text>}
          keyExtractor={(item: Recipient) => item.id}
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
      </View>
    </>
  );
}
