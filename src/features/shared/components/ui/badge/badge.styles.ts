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
    backgroundColor: colors.background,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  success: {
    backgroundColor: colors.success,
  },
  error: {
    backgroundColor: colors.error,
  },
  warning: {
    backgroundColor: colors.warning,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    fontSize: typography.caption.fontSize,
    fontWeight: typography.caption.fontWeight,
    fontFamily: typography.caption.fontFamily,
    lineHeight: typography.caption.lineHeight,
  },
  defaultLabel: {
    color: colors.text,
  },
  primaryLabel: {
    color: '#FFFFFF',
  },
  successLabel: {
    color: '#FFFFFF',
  },
  errorLabel: {
    color: '#FFFFFF',
  },
  warningLabel: {
    color: '#FFFFFF',
  },
  outlineLabel: {
    color: colors.text,
  },
});
