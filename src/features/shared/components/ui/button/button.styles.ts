// button styles

import { colors } from '@/tokens/colors';
import { radius, spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';
import { ButtonProps } from './button.types';

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

const variantStyles = {
  primary: buttonStyles.primary,
  secondary: buttonStyles.secondary,
};
export const variantStyle = (variant: ButtonProps['variant']) =>
  variantStyles[variant ?? 'primary'];

const labelVariantStyles = {
  primary: buttonStyles.primaryLabel,
  secondary: buttonStyles.secondaryLabel,
};
export const labelVariantStyle = (variant: ButtonProps['variant']) =>
  labelVariantStyles[variant ?? 'primary'];
