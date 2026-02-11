import { spacing } from '@/features/shared/styles/tokens/spacing';
import { StyleSheet } from 'react-native';

export const transferFormStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.sm + spacing.xs,
  },
  chipGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  currencyLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
});
