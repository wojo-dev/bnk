import { colors } from '@/tokens/colors';
import { spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';
import { TransactionStatus } from '../../types/history';

export const badgeVariant = (status: TransactionStatus) =>
  status === 'completed' ? 'success' : 'warning';
export const badgeLabel = (status: TransactionStatus) =>
  status === 'completed' ? 'Completed' : 'Pending';

export const historyListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.neutral,
  },
  contentContainer: {
    paddingBottom: spacing['2xl'],
  },
  sectionHeader: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
  },
  sectionTitle: {
    fontSize: typography.caption.fontSize,
    fontWeight: '600',
    fontFamily: typography.caption.fontFamily,
    letterSpacing: 1,
    color: colors.label.primary,
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.md,
    gap: spacing.md,
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
    fontSize: typography.body.fontSize,
    fontWeight: '600',
    fontFamily: typography.body.fontFamily,
    color: colors.label.text,
  },
  subtitle: {
    fontSize: typography.caption.fontSize,
    fontWeight: typography.caption.fontWeight,
    fontFamily: typography.caption.fontFamily,
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
    fontSize: typography.body.fontSize,
    fontWeight: '700',
    color: colors.label.error,
    marginRight: 2,
  },
  amount: {
    fontSize: typography.body.fontSize,
    fontWeight: '700',
    fontFamily: typography.body.fontFamily,
    color: colors.label.primary,
  },
  badge: {
    alignSelf: 'flex-end',
  },
});
