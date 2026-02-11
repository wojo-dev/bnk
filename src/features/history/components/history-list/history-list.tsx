import { List } from '@/ui/list/list';
import React, { useCallback, useMemo } from 'react';
import { Text, View } from 'react-native';
import { History } from '../../types/history.types';
import { getHistorySections } from '../../utils/get-history-sections';
import { TransactionCard } from '../transaction-card/transaction-card';
import { historyListStyles as styles } from './history-list.styles';

const SectionHeader = ({ title }: { title: string }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
  </View>
);

export const HistoryList = ({
  history,
  onEndReached,
  isFetchingNextPage,
}: {
  history: History[];
  onEndReached?: () => void;
  isFetchingNextPage?: boolean;
}) => {
  const data = useMemo(() => getHistorySections(history), [history]);

  const renderItem = useCallback(({ item }: { item: string | History }) => {
    if (typeof item === 'string') {
      return <SectionHeader title={item} />;
    }
    return <TransactionCard item={item} />;
  }, []);

  return (
    <List<string | History>
      data={data}
      renderItem={renderItem}
      getItemType={(item) => (typeof item === 'string' ? 'sectionHeader' : 'row')}
      keyExtractor={(item) => (typeof item === 'string' ? item : item.id)}
      onEndReached={onEndReached}
      isFetchingNextPage={isFetchingNextPage}
      emptyTitle="No transactions yet"
      emptySubtitle="Your transfer history will appear here"
    />
  );
};
