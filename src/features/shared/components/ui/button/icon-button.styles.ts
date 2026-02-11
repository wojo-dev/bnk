import { colors } from '@/tokens/colors';
import { radius } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';
import { IconButtonColor, IconButtonSize } from './icon-button.types';

const containerSizeMap = {
  sm: 48,
  md: 64,
  lg: 80,
} as const;

export const iconSizeMap = {
  sm: 20,
  md: 28,
  lg: 32,
} as const;

const colorScheme: Record<IconButtonColor, { background: string; border: string; icon: string }> = {
  blue: {
    background: '#E8F0FE',
    border: '#C5D8F8',
    icon: '#1B4FD8',
  },
  green: {
    background: '#DCFCE7',
    border: '#B3F0C7',
    icon: '#16A34A',
  },
  orange: {
    background: '#FFF3E0',
    border: '#FDDCAB',
    icon: '#EA580C',
  },
  purple: {
    background: '#F3E8FF',
    border: '#DCC8F5',
    icon: '#7C3AED',
  },
};

export const iconButtonStyles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    gap: 8,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
  },
  disabled: {
    opacity: 0.4,
  },
  label: {
    ...typography.caption,
    fontWeight: '500',
    color: colors.label.text,
  },
});

export const containerStyle = (size: IconButtonSize, color: IconButtonColor) => ({
  width: containerSizeMap[size],
  height: containerSizeMap[size],
  borderRadius: radius.lg,
  backgroundColor: colorScheme[color].background,
  borderColor: colorScheme[color].border,
});

export const getIconColor = (color: IconButtonColor, disabled: boolean) =>
  disabled ? colors.label.placeholder : colorScheme[color].icon;
