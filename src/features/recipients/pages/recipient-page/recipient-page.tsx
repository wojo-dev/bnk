import { ContactsPermission } from '@/features/recipients/components/contacts-permission/contacts-permission';
import { RecipientList } from '@/features/recipients/components/recipient-list/recipient-list';
import { useContacts } from '@/features/recipients/hooks/use-contacts';
import { useRecipients } from '@/features/recipients/hooks/use-recipients';
import { Recipient } from '@/features/recipients/types/recipient.types';
import { Tabs } from '@/features/shared/components/ui/tabs/tabs';
import { Button } from '@/ui/button/button';
import { router, Stack } from 'expo-router';
import { useCallback, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useSharedValue } from 'react-native-reanimated';
import { styles } from './recipient-page.styles';

const TABS = [
  { key: 'recents', label: 'Recents' },
  { key: 'contacts', label: 'Contacts' },
];

export function RecipientPage() {
  const [search, setSearch] = useState('');
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useRecipients(search);
  const recipients = data?.pages.flatMap((p) => p.data) ?? [];
  const { contacts, hasPermissions, requestPermissions } = useContacts();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('recents');

  const pagerRef = useRef<PagerView>(null);
  const scrollOffset = useSharedValue(0);

  const contactRecipients = useMemo<Recipient[]>(
    () =>
      contacts.map((c) => ({
        id: c.id ?? '',
        name: `${c.firstName ?? ''} ${c.lastName ?? ''}`.trim(),
        initials: `${(c.firstName ?? '')[0] ?? ''}${(c.lastName ?? '')[0] ?? ''}`.toUpperCase(),
        bank: '',
        bankCode: '',
        accountNumber: '',
        maskedNumber: '',
        isFavourite: false,
        avatarColor: 'blue',
        addedAt: '',
      })),
    [contacts],
  );

  const handleTabChange = useCallback((key: string) => {
    const index = TABS.findIndex((t) => t.key === key);
    pagerRef.current?.setPage(index);
    setActiveTab(key);
  }, []);

  const handlePageSelected = useCallback((e: { nativeEvent: { position: number } }) => {
    setActiveTab(TABS[e.nativeEvent.position].key);
  }, []);

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
              selectedId={selectedId ?? undefined}
              onSelect={(recipient) => setSelectedId(recipient.id)}
              onEndReached={() => hasNextPage && fetchNextPage()}
              isFetchingNextPage={isFetchingNextPage}
            />
          </View>
          <View key="contacts" style={styles.page}>
            {hasPermissions ? (
              <RecipientList
                recipients={contactRecipients}
                selectedId={selectedId ?? undefined}
                onSelect={(recipient) => setSelectedId(recipient.id)}
              />
            ) : (
              <ContactsPermission onRequestPermission={requestPermissions} />
            )}
          </View>
        </PagerView>
        {selectedId ? (
          <View style={styles.buttonContainer}>
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
          </View>
        ) : null}
      </View>
    </>
  );
}
