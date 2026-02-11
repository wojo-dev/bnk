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
    color: typography.label.color,
    fontSize: typography.medium.fontSize,
    fontWeight: '600',
    paddingBottom: spacing.xs,
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
    fontSize: typography.textarea.fontSize,
    lineHeight: typography.textarea.lineHeight,
    fontFamily: typography.textarea.fontFamily,
    color: typography.textarea.color,
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
