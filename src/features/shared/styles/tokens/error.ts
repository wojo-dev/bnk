import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';

export const errorStyles = StyleSheet.create({
  inputWrapperError: {
    borderWidth: 2,
    borderColor: colors.border.error,
    backgroundColor: colors.background.error,
  },
  inputError: {
    color: colors.label.error,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  errorText: {
    fontSize: typography.error.fontSize,
    fontWeight: typography.error.fontWeight,
    fontFamily: typography.error.fontFamily,
    color: typography.error.color,
  },
});

export const getBorderColor = (isFocused: boolean, error?: string) => {
  if (error) {
    return colors.border.error;
  }

  return isFocused ? colors.border.focus : colors.border.input;
};
