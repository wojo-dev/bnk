// badge styles

import { colors } from '@/features/shared/styles/tokens/colors';
import { radius, spacing } from '@/features/shared/styles/tokens/spacing';
import { typography } from '@/features/shared/styles/tokens/typography';
import { StyleSheet } from 'react-native';

export const badgeStyles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: radius.xl,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  default: {
    backgroundColor: colors.background.neutral,
  },
  primary: {
    backgroundColor: colors.background.primary,
  },
  success: {
    backgroundColor: colors.background.success,
  },
  error: {
    backgroundColor: colors.background.error,
  },
  warning: {
    backgroundColor: colors.background.warning,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  label: {
    fontSize: typography.caption.fontSize,
    fontWeight: typography.caption.fontWeight,
    fontFamily: typography.caption.fontFamily,
    lineHeight: typography.caption.lineHeight,
  },
  defaultLabel: {
    color: colors.label.text,
  },
  primaryLabel: {
    color: colors.label.primary,
  },
  successLabel: {
    color: colors.label.success,
  },
  errorLabel: {
    color: colors.label.error,
  },
  warningLabel: {
    color: colors.label.warning,
  },
  outlineLabel: {
    color: colors.label.text,
  },
});
