// button styles

import { colors } from '@/tokens/colors';
import { blueShadow } from '@/tokens/shadows';
import { radius, spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';
import { ButtonProps } from './button.types';

export const buttonStyles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.xl,
    paddingVertical: spacing.sm + spacing.sm,
    paddingHorizontal: spacing.md,
    gap: spacing.xs,
  },
  primary: {
    backgroundColor: colors.accent.primary,
    ...blueShadow,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border.secondary,
  },
  link: {
    backgroundColor: 'transparent',
    paddingVertical: 0,
    paddingHorizontal: 0,
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
  linkLabel: {
    color: colors.primary,
    textDecorationLine: 'underline' as const,
  },
  disabledLabel: {
    color: colors.label.placeholder,
  },
});

const variantStyles = {
  primary: buttonStyles.primary,
  secondary: buttonStyles.secondary,
  link: buttonStyles.link,
};
export const variantStyle = (variant: ButtonProps['variant']) =>
  variantStyles[variant ?? 'primary'];

const labelVariantStyles = {
  primary: buttonStyles.primaryLabel,
  secondary: buttonStyles.secondaryLabel,
  link: buttonStyles.linkLabel,
};
export const labelVariantStyle = (variant: ButtonProps['variant']) =>
  labelVariantStyles[variant ?? 'primary'];
