import { getFormatTime } from '@/utils/get-format-date';
import { getFormatPrice } from '@/utils/get-format-price';
import { Avatar } from '@/ui/avatar/avatar';
import { Badge } from '@/ui/badge/badge';
import { List } from '@/ui/list/list';
import React, { useCallback, useMemo } from 'react';
import { Text, View } from 'react-native';
import { getHistorySections } from '../../utils/get-history-sections';
import { History } from '../../types/history';
import { badgeLabel, badgeVariant, historyListStyles as styles } from './history-list.styles';

const SectionHeader = ({ title }: { title: string }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
  </View>
);

const TransactionRow = React.memo(function TransactionRow({ item }: { item: History }) {
  return (
    <View style={styles.row}>
      <Avatar name={item.name} />
      <View style={styles.rowContent}>
        <View style={styles.rowLeft}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.subtitle}>
            {getFormatTime(item.createdAt)} {'\u2022'} {item.bank}
          </Text>
        </View>
        <View style={styles.rowRight}>
          <View style={styles.amountRow}>
            <Text style={styles.amountMinus}>{'\u2013'}</Text>
            <Text style={styles.amount}>{getFormatPrice(item.currency, item.amount)}</Text>
          </View>
          <Badge
            title={badgeLabel(item.status)}
            variant={badgeVariant(item.status)}
            style={styles.badge}
          />
        </View>
      </View>
    </View>
  );
});

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
    return <TransactionRow item={item} />;
  }, []);

  return (
    <List<string | History>
      data={data}
      renderItem={renderItem}
      getItemType={(item) => (typeof item === 'string' ? 'sectionHeader' : 'row')}
      keyExtractor={(item) => (typeof item === 'string' ? item : item.id)}
      contentContainerStyle={styles.contentContainer}
      onEndReached={onEndReached}
      isFetchingNextPage={isFetchingNextPage}
      emptyTitle="No transactions yet"
      emptySubtitle="Your transfer history will appear here"
    />
  );
};
