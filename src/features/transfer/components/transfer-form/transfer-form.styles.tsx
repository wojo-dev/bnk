import { colors } from '@/features/shared/styles/tokens/colors';
import { radius, spacing } from '@/features/shared/styles/tokens/spacing';
import { typography } from '@/features/shared/styles/tokens/typography';
import { StyleSheet } from 'react-native';

export const transferFormStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.sm + spacing.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border.input,
    borderRadius: radius.md,
    padding: spacing.sm + spacing.xs,
    fontSize: typography.input.fontSize,
  },
});
