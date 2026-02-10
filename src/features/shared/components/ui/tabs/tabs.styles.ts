// tabs styles

import { colors } from '@/tokens/colors';
import { radius, spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

export const tabsStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    backgroundColor: colors.background.background,
    borderRadius: radius.lg,
    padding: spacing.xs,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.md,
  },
  tabActive: {
    backgroundColor: colors.background.neutral,
  },
  label: {
    fontSize: typography.button.fontSize,
    fontWeight: typography.button.fontWeight,
    fontFamily: typography.button.fontFamily,
    lineHeight: typography.button.lineHeight,
    color: colors.label.placeholder,
  },
  activeLabel: {
    color: colors.label.text,
    fontWeight: '600',
  },
});
