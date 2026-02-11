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
  historyCard: {
    width: dimensions.width - spacing.xl - spacing.sm,
    height: 900,
  },
  balanceCardContainer: {
    marginVertical: spacing.md,
  },
  sectionTitle: {
    marginTop: spacing.lg,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.xs,
  },
  container: {
    marginHorizontal: spacing.md,
    alignSelf: 'stretch',
  },
});
