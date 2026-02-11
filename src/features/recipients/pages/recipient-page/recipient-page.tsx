import { RecipientList } from '@/features/recipients/components/recipient-list/recipient-list';
import { useContacts } from '@/features/recipients/hooks/use-contacts';
import { useRecipients } from '@/features/recipients/hooks/use-recipients';
import { Tabs } from '@/features/shared/components/ui/tabs/tabs';
import { Button } from '@/ui/button/button';
import { router, Stack } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { styles } from './recipient-page.styles';

export function RecipientPage() {
  const [search, setSearch] = useState('');
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useRecipients(search);
  const recipients = data?.pages.flatMap((p) => p.data) ?? [];
  const { hasPermissions, requestPermissions } = useContacts();
  const [selectedId, setSelectedId] = useState<string | null>(null);
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
      <View style={styles.container}>
        <Button
          title={hasPermissions ? 'Contacts added' : 'Add Contacts'}
          onPress={() => requestPermissions()}
          disabled={hasPermissions}
        />
        {hasPermissions ? <Text>Contacts added</Text> : <Text>No contacts added</Text>}
        <Tabs
          tabs={[
            { key: 'all', label: 'All' },
            { key: 'contacts', label: 'Contacts' },
          ]}
          activeTab="all"
          onTabChange={() => {}}
        />
        <RecipientList
          recipients={recipients}
          selectedId={selectedId ?? undefined}
          onSelect={(recipient) => setSelectedId(recipient.id)}
          onEndReached={() => hasNextPage && fetchNextPage()}
          isFetchingNextPage={isFetchingNextPage}
        />
        {selectedId ? (
          <Button
            title="Continue"
            onPress={() =>
              router.push({
                pathname: '/transfer',
                params: {
                  recipientId: selectedId,
                },
              })
            }
          />
        ) : null}
      </View>
    </>
  );
}
