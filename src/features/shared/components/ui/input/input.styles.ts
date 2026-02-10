// input styles

import { colors } from '@/features/shared/styles/tokens/colors';
import { spacing } from '@/features/shared/styles/tokens/spacing';
import { typography } from '@/features/shared/styles/tokens/typography';
import { StyleSheet } from 'react-native';

export const inputStyles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  label: {
    fontSize: typography.label.fontSize,
    color: typography.label.color,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    borderColor: colors.border.input,
    backgroundColor: colors.background.neutral,
  },
  error: {
    fontSize: typography.error.fontSize,
    fontWeight: typography.error.fontWeight,
    fontFamily: typography.error.fontFamily,
    color: typography.error.color,
  },
});
