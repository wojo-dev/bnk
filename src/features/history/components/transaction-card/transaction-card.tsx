import { Avatar } from '@/ui/avatar/avatar';
import { Badge } from '@/ui/badge/badge';
import { getFormatTime } from '@/utils/get-format-date';
import { getFormatPrice } from '@/utils/get-format-price';
import React from 'react';
import { Text, View } from 'react-native';
import { History } from '../../types/history.types';
import {
  badgeLabel,
  badgeVariant,
  transactionCardStyles as styles,
} from './transaction-card.styles';

export const TransactionCard = React.memo(function TransactionCard({ item }: { item: History }) {
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
