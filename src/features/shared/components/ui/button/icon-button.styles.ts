import { colors } from '@/tokens/colors';
import { StyleSheet } from 'react-native';
import { IconButtonSize, IconButtonVariant } from './icon-button.types';

const sizeMap = {
  sm: 32,
  md: 40,
  lg: 48,
} as const;

export const iconSizeMap = {
  sm: 16,
  md: 20,
  lg: 24,
} as const;

export const iconButtonStyles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
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
    borderWidth: 0,
  },
});

export const iconColorMap: Record<IconButtonVariant, string> = {
  primary: '#FFFFFF',
  secondary: colors.border.icon,
};

export const disabledIconColor = colors.label.placeholder;

export const sizeStyle = (size: IconButtonSize) => ({
  width: sizeMap[size],
  height: sizeMap[size],
  borderRadius: sizeMap[size] / 2,
});

export const variantStyle = (variant: IconButtonVariant) => iconButtonStyles[variant];
