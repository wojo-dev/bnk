import { colors } from '@/features/shared/styles/tokens/colors';
import { radius, spacing } from '@/features/shared/styles/tokens/spacing';
import { typography } from '@/features/shared/styles/tokens/typography';
import { StyleSheet } from 'react-native';

export const transferDetailStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.background.neutral,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border.input,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border.input,
  },
  label: {
    fontSize: typography.body.fontSize,
    fontWeight: '400',
    fontFamily: typography.body.fontFamily,
    lineHeight: typography.body.lineHeight,
    color: colors.label.placeholder,
  },
  value: {
    fontSize: typography.body.fontSize,
    fontWeight: '600',
    fontFamily: typography.body.fontFamily,
    lineHeight: typography.body.lineHeight,
    color: colors.label.text,
    textAlign: 'right',
    flexShrink: 1,
    marginLeft: spacing.md,
  },
  amount: {
    fontSize: typography.heading.fontSize,
    fontWeight: '700',
    fontFamily: typography.heading.fontFamily,
    lineHeight: typography.heading.lineHeight,
    color: colors.label.success,
  },
});
