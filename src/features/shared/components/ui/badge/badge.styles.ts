// badge styles

import { colors } from '@/tokens/colors';
import { radius, spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
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
    fontSize: typography.badge.fontSize,
    fontWeight: typography.badge.fontWeight,
    fontFamily: typography.badge.fontFamily,
    lineHeight: typography.badge.lineHeight,
    marginHorizontal: spacing.xs,
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
