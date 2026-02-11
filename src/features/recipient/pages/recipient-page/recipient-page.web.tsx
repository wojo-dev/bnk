import { ContactsPermission } from '@/features/recipient/components/contacts-permission/contacts-permission';
import { RecipientList } from '@/features/recipient/components/recipient-list/recipient-list';
import { useContacts } from '@/features/recipient/hooks/use-contacts';
import { useRecipients } from '@/features/recipient/hooks/use-recipients';
import { useRecipientStore } from '@/features/recipient/store/use-recipient-store';
import { getRecipientFromContact } from '@/features/recipient/utils/get-recipient-from-contact';
import { Tabs } from '@/features/shared/components/ui/tabs/tabs';
import { Button } from '@/ui/button/button';
import { router, Stack } from 'expo-router';
import { useCallback, useMemo } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { styles } from './recipient-page.styles';

const TABS = [
  { key: 'recents', label: 'Recents' },
  { key: 'contacts', label: 'Contacts' },
];

export function RecipientPage() {
  const { search, selectedRecipient, activeTab, setSearch, setSelectedRecipient, setActiveTab } =
    useRecipientStore();
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useRecipients(search);
  const recipients = data?.pages.flatMap((p) => p.data) ?? [];
  const { contacts, hasPermissions, requestPermissions } = useContacts();

  const scrollOffset = useSharedValue(0);

  const contactRecipients = useMemo(() => contacts.map(getRecipientFromContact), [contacts]);

  const handleTabChange = useCallback(
    (key: string) => {
      setActiveTab(key);
    },
    [setActiveTab],
  );

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <Stack.Screen.Title>Recipients</Stack.Screen.Title>
      <Stack.SearchBar
        placement="automatic"
        placeholder="Search"
        onChangeText={(e) => setSearch(e.nativeEvent.text)}
      />
      <View style={styles.container}>
        <Tabs
          tabs={TABS}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          scrollOffset={scrollOffset}
        />
        <View style={styles.pager}>
          {activeTab === 'recents' ? (
            <View style={styles.page}>
              <RecipientList
                recipients={recipients}
                selectedId={selectedRecipient?.id}
                onSelect={(recipient) => setSelectedRecipient(recipient)}
                onEndReached={() => hasNextPage && fetchNextPage()}
                isFetchingNextPage={isFetchingNextPage}
              />
            </View>
          ) : (
            <View style={styles.page}>
              {hasPermissions ? (
                <RecipientList
                  recipients={contactRecipients}
                  selectedId={selectedRecipient?.id}
                  onSelect={(recipient) => setSelectedRecipient(recipient)}
                />
              ) : (
                <ContactsPermission onRequestPermission={requestPermissions} />
              )}
            </View>
          )}
        </View>
        {selectedRecipient ? (
          <View style={styles.buttonContainer}>
            <Button title="Continue" onPress={() => router.push('/transfer')} />
          </View>
        ) : null}
      </View>
    </>
  );
}
