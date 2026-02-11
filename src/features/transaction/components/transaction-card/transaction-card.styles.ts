import { colors } from '@/tokens/colors';
import { spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';
import { TransactionStatus } from '../../types/transaction.types';

export const badgeVariant = (status: TransactionStatus) =>
  status === 'completed' ? 'success' : 'warning';
export const badgeLabel = (status: TransactionStatus) =>
  status === 'completed' ? 'Completed' : 'Pending';

export const transactionCardStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    gap: spacing.sm + spacing.xs,
  },
  rowContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowLeft: {
    flex: 1,
    gap: 2,
  },
  name: {
    fontSize: typography.medium.fontSize,
    fontWeight: typography.medium.fontWeight,
    fontFamily: typography.medium.fontFamily,
    color: colors.label.text,
  },
  subtitle: {
    fontSize: typography.small.fontSize,
    fontWeight: typography.small.fontWeight,
    fontFamily: typography.small.fontFamily,
    color: colors.border.icon,
  },
  rowRight: {
    alignItems: 'flex-end',
    gap: spacing.xs,
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountMinus: {
    fontSize: typography.small.fontSize,
    fontWeight: typography.medium.fontWeight,
    fontFamily: typography.medium.fontFamily,
    marginRight: 4,
  },
  amount: {
    fontSize: typography.medium.fontSize,
    fontWeight: typography.medium.fontWeight,
    fontFamily: typography.medium.fontFamily,
    color: colors.label.primary,
  },
  badge: {
    alignSelf: 'flex-end',
  },
});
