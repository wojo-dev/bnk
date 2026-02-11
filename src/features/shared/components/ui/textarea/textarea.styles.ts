// textarea styles

import { colors } from '@/tokens/colors';
import { radius, spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

export const textareaStyles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  label: {
    fontSize: typography.label.fontSize,
    color: typography.label.color,
  },
  inputWrapper: {
    borderWidth: 1,
    borderRadius: radius.md,
    borderColor: colors.border.input,
    backgroundColor: colors.background.neutral,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
  input: {
    minHeight: 100,
    textAlignVertical: 'top',
    fontSize: typography.input.fontSize,
    lineHeight: typography.input.lineHeight,
    fontFamily: typography.input.fontFamily,
    color: typography.input.color,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  error: {
    fontSize: typography.error.fontSize,
    fontWeight: typography.error.fontWeight,
    fontFamily: typography.error.fontFamily,
    color: typography.error.color,
    flex: 1,
  },
  charCount: {
    fontSize: typography.caption.fontSize,
    color: typography.caption.color,
  },
});

export const getBorderColor = (isFocused: boolean, error?: string) => {
  if (error) {
    return colors.border.error;
  }

  return isFocused ? colors.border.focus : colors.border.input;
};
