import { colors } from '@/tokens/colors';
import { radius, spacing } from '@/tokens/spacing';
import { scale } from '@/tokens/scale';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

const CELL_SIZE = scale(48);

export const pinInputStyles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderWidth: 1.5,
    borderRadius: radius.md,
    borderColor: colors.border.input,
    backgroundColor: colors.background.neutral,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellFocused: {
    borderColor: colors.border.focus,
    borderWidth: 2,
  },
  cellFilled: {
    borderColor: colors.border.primary,
  },
  cellError: {
    borderColor: colors.border.error,
  },
  cellDisabled: {
    borderColor: colors.border.disabled,
    backgroundColor: colors.background.background,
  },
  cellText: {
    fontSize: typography.heading.fontSize,
    fontWeight: '600',
    fontFamily: typography.heading.fontFamily,
    color: colors.label.text,
    textAlign: 'center',
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

export const getCellStyle = (
  isFocused: boolean,
  isFilled: boolean,
  error?: string,
  disabled?: boolean,
) => {
  if (disabled) return pinInputStyles.cellDisabled;
  if (error) return pinInputStyles.cellError;
  if (isFocused) return pinInputStyles.cellFocused;
  if (isFilled) return pinInputStyles.cellFilled;
  return undefined;
};
