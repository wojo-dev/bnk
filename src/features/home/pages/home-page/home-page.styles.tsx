import { dimensions } from '@/features/shared/styles/tokens/dimensions';
import { spacing } from '@/features/shared/styles/tokens/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'stretch',
    gap: spacing.xs,
    paddingBottom: spacing.sm + spacing.xs,
  },
  transactionCard: {
    width: dimensions.width - spacing.xl - spacing.sm,
  },
  balanceCardContainer: {
    marginVertical: spacing.md,
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    marginTop: spacing.lg,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.sm,
  },
  container: {
    marginHorizontal: spacing.md,
    alignSelf: 'stretch',
  },
});
