import { haptic } from '@/features/shared/lib/haptics';
import { Avatar } from '@/ui/avatar/avatar';
import { Badge } from '@/ui/badge/badge';
import { getFormatTime } from '@/utils/get-format-date';
import { getFormatPrice } from '@/utils/get-format-price';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Transaction } from '../../types/transaction.types';
import {
  badgeLabel,
  badgeVariant,
  transactionCardStyles as styles,
} from './transaction-card.styles';

export const TransactionCard = React.memo(function TransactionCard({
  item,
  onPress,
}: {
  item: Transaction;
  onPress?: (item: Transaction) => void;
}) {
  const Container = onPress ? Pressable : View;
  return (
    <Container
      style={styles.row}
      onPressIn={onPress ? () => haptic.light() : undefined}
      onPress={onPress ? () => onPress(item) : undefined}>
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
    </Container>
  );
});
