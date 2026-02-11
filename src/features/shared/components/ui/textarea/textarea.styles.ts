// textarea styles

import { colors } from '@/tokens/colors';
import { errorStyles, getBorderColor } from '@/tokens/error';
import { radius, spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

export { errorStyles, getBorderColor };

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
  charCount: {
    fontSize: typography.caption.fontSize,
    color: typography.caption.color,
  },
});
