import { colors } from '@/tokens/colors';
import { spacing } from '@/tokens/spacing';
import { scale } from '@/tokens/scale';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

const DOT_SIZE = scale(16);

export const pinInputStyles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.md,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 1.5,
    borderColor: colors.border.secondary,
    backgroundColor: 'transparent',
  },
  dotFilled: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  dotFocused: {
    borderColor: colors.primary,
  },
  dotError: {
    borderColor: colors.border.error,
  },
  dotErrorFilled: {
    backgroundColor: colors.border.error,
    borderColor: colors.border.error,
  },
  dotDisabled: {
    borderColor: colors.border.disabled,
    opacity: 0.5,
  },
  hiddenInput: {
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0,
  },
  error: {
    fontSize: typography.error.fontSize,
    fontWeight: typography.error.fontWeight,
    fontFamily: typography.error.fontFamily,
    color: typography.error.color,
    textAlign: 'center',
  },
});

export const getDotStyle = (
  isFocused: boolean,
  isFilled: boolean,
  error?: string,
  disabled?: boolean,
) => {
  if (disabled) return pinInputStyles.dotDisabled;
  if (error && isFilled) return pinInputStyles.dotErrorFilled;
  if (error) return pinInputStyles.dotError;
  if (isFilled) return pinInputStyles.dotFilled;
  if (isFocused) return pinInputStyles.dotFocused;
  return undefined;
};
