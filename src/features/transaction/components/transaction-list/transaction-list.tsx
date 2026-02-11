import { List } from '@/ui/list/list';
import React, { useCallback, useMemo } from 'react';
import { Text, View } from 'react-native';
import { Transaction } from '../../types/transaction.types';
import { getTransactionSections } from '../../utils/get-transaction-sections';
import { TransactionCard } from '../transaction-card/transaction-card';
import { transactionListStyles as styles } from './transaction-list.styles';

const SectionHeader = ({ title }: { title: string }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
  </View>
);

export const TransactionList = ({
  transactions,
  onEndReached,
  isFetchingNextPage,
  isHome = false,
  onTransactionPress,
}: {
  transactions: Transaction[];
  onEndReached?: () => void;
  isFetchingNextPage?: boolean;
  isHome?: boolean;
  onTransactionPress?: (item: Transaction) => void;
}) => {
  const data = useMemo(() => getTransactionSections(transactions), [transactions]);

  const renderItem = useCallback(
    ({ item }: { item: string | Transaction }) => {
      if (typeof item === 'string') {
        return <SectionHeader title={item} />;
      }
      return <TransactionCard item={item} onPress={onTransactionPress} />;
    },
    [onTransactionPress],
  );

  return (
    <List<string | Transaction>
      data={data}
      renderItem={renderItem}
      getItemType={(item) => (typeof item === 'string' ? 'sectionHeader' : 'row')}
      keyExtractor={(item) => (typeof item === 'string' ? item : item.id)}
      onEndReached={onEndReached}
      isFetchingNextPage={isFetchingNextPage}
      emptyTitle="No transactions yet"
      emptySubtitle="Your transactions will appear here"
      contentContainerStyle={isHome ? undefined : styles.contentContainer}
    />
  );
};
