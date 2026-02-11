// chip styles

import { colors } from '@/tokens/colors';
import { radius, spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

export const chipStyles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius['3xl'],
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderWidth: 1.5,
    backgroundColor: colors.background.neutral,
    borderColor: colors.border.input,
  },
  selected: {
    borderWidth: 2,
    borderColor: colors.border.primary,
    backgroundColor: colors.background.neutral,
  },
  label: {
    fontSize: typography.button.fontSize,
    fontWeight: '600',
    fontFamily: typography.button.fontFamily,
    lineHeight: typography.button.lineHeight,
    color: colors.label.text,
  },
  selectedLabel: {
    color: colors.primary,
  },
});
