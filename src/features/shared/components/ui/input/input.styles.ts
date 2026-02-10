// input styles

import { colors } from '@/tokens/colors';
import { spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
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

export const getBorderColor = (isFocused: boolean, error?: string) => {
  if (error) {
    return colors.border.error;
  }

  return isFocused ? colors.border.focus : colors.border.input;
};
