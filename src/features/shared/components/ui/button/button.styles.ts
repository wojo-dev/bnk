// button styles

import { colors } from '@/features/shared/styles/tokens/colors';
import { radius, spacing } from '@/features/shared/styles/tokens/spacing';
import { typography } from '@/features/shared/styles/tokens/typography';
import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    gap: spacing.xs,
  },
  primary: {
    backgroundColor: colors.background.primary,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  disabled: {
    backgroundColor: colors.border.disabled,
  },
  label: {
    fontSize: typography.button.fontSize,
    fontWeight: typography.button.fontWeight,
    fontFamily: typography.button.fontFamily,
    lineHeight: typography.button.lineHeight,
  },
  primaryLabel: {
    color: '#FFFFFF',
  },
  secondaryLabel: {
    color: colors.label.text,
  },
  disabledLabel: {
    color: colors.label.placeholder,
  },
});
