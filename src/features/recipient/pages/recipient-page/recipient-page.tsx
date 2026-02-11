import { ContactsPermission } from '@/features/recipient/components/contacts-permission/contacts-permission';
import { RecipientList } from '@/features/recipient/components/recipient-list/recipient-list';
import { useContacts } from '@/features/recipient/hooks/use-contacts';
import { useRecipients } from '@/features/recipient/hooks/use-recipients';
import { useRecipientStore } from '@/features/recipient/store/use-recipient-store';
import { getRecipientFromContact } from '@/features/recipient/utils/get-recipient-from-contact';
import { haptic } from '@/lib/haptics';
import { Button } from '@/ui/button/button';
import { Tabs } from '@/ui/tabs/tabs';
import { router, Stack } from 'expo-router';
import { useCallback, useMemo, useRef } from 'react';
import { ActivityIndicator, View } from 'react-native';
import PagerView from 'react-native-pager-view';
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

  const pagerRef = useRef<PagerView>(null);
  const scrollOffset = useSharedValue(0);

  const contactRecipients = useMemo(() => {
    const all = contacts.map(getRecipientFromContact);
    if (!search) return all;
    const term = search.toLowerCase();
    return all.filter((r) => r.name.toLowerCase().includes(term) || r.accountNumber.includes(term));
  }, [contacts, search]);

  const handleTabChange = useCallback(
    (key: string) => {
      const index = TABS.findIndex((t) => t.key === key);
      pagerRef.current?.setPage(index);
      setActiveTab(key);
      setSelectedRecipient(null);
      haptic.light();
    },
    [setActiveTab, setSelectedRecipient],
  );

  const handlePageSelected = useCallback(
    (e: { nativeEvent: { position: number } }) => {
      setActiveTab(TABS[e.nativeEvent.position].key);
      setSelectedRecipient(null);
    },
    [setActiveTab, setSelectedRecipient],
  );

  const handlePageScroll = useCallback(
    (e: { nativeEvent: { position: number; offset: number } }) => {
      scrollOffset.value = e.nativeEvent.position + e.nativeEvent.offset;
    },
    [scrollOffset],
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
        <PagerView
          ref={pagerRef}
          style={styles.pager}
          initialPage={0}
          onPageSelected={handlePageSelected}
          onPageScroll={handlePageScroll}>
          <View key="recents" style={styles.page}>
            <RecipientList
              recipients={recipients}
              selectedId={selectedRecipient?.id}
              onSelect={(recipient) => {
                setSelectedRecipient(recipient);
                haptic.light();
              }}
              onEndReached={() => hasNextPage && fetchNextPage()}
              isFetchingNextPage={isFetchingNextPage}
            />
          </View>
          <View key="contacts" style={styles.page}>
            {hasPermissions ? (
              <RecipientList
                recipients={contactRecipients}
                selectedId={selectedRecipient?.id}
                extraData={search}
                onSelect={(recipient) => {
                  setSelectedRecipient(recipient);
                  haptic.light();
                }}
              />
            ) : (
              <ContactsPermission onRequestPermission={requestPermissions} />
            )}
          </View>
        </PagerView>
        {selectedRecipient ? (
          <View style={styles.buttonContainer}>
            <Button title="Continue" onPress={() => router.push('/transfer')} />
          </View>
        ) : null}
      </View>
    </>
  );
}
