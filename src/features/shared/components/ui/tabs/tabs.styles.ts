// tabs styles

import { colors } from '@/tokens/colors';
import { radius, spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

export const tabsStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.background,
    borderRadius: radius['2xl'],
    padding: spacing.xs,
  },
  tabRow: {
    flexDirection: 'row',
    position: 'relative',
  },
  pill: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: colors.background.primary,
    borderRadius: radius.xl,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.md,
  },
  label: {
    fontSize: typography.button.fontSize,
    fontWeight: typography.button.fontWeight,
    fontFamily: typography.button.fontFamily,
    lineHeight: typography.button.lineHeight,
    color: colors.label.placeholder,
  },
  activeLabel: {
    color: colors.background.neutral,
    fontWeight: '600',
  },
});
