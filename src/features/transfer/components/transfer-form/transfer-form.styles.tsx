import { colors } from '@/tokens/colors';
import { radius, spacing } from '@/features/shared/styles/tokens/spacing';
import { scale } from '@/features/shared/styles/tokens/scale';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

export const transferFormStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: spacing.xs + spacing.sm,
    gap: spacing.sm + spacing.xs,
  },
  spacer: {
    flex: 1,
  },
  chipGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  amountContainer: {
    gap: spacing.xs,
  },
  amountLabel: {
    fontSize: typography.medium.fontSize,
    color: colors.primary,
    fontWeight: '600',
  },
  amountInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: radius.lg,
    borderColor: colors.border.input,
    backgroundColor: colors.background.neutral,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  amountInputWrapperFocused: {
    borderColor: colors.border.focus,
  },
  amountInputWrapperError: {
    borderWidth: 2,
    borderColor: colors.border.error,
    backgroundColor: colors.background.error,
  },
  amountCurrency: {
    fontSize: scale(20),
    fontWeight: '600',
    color: colors.label.neutral,
    marginRight: spacing.sm,
  },
  amountInput: {
    flex: 1,
    fontSize: scale(30),
    fontWeight: '700',
    color: colors.label.neutral,
    paddingVertical: spacing.xs,
  },
  amountError: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  amountErrorText: {
    fontSize: typography.error.fontSize,
    color: colors.label.error,
  },
});
