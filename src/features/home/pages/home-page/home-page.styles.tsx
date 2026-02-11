import { colors } from '@/features/shared/styles/tokens/colors';
import { dimensions } from '@/features/shared/styles/tokens/dimensions';
import { spacing } from '@/features/shared/styles/tokens/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    backgroundColor: colors.background.background,
  },
  safeArea: {
    flex: 1,
    alignItems: 'stretch',
    gap: spacing.xs,
    paddingBottom: spacing.sm + spacing.xs,
  },
  transactionCard: {
    width: dimensions.width - spacing.xl,
    alignSelf: 'stretch',
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
