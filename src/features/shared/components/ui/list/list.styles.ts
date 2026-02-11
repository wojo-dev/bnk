import { colors } from '@/tokens/colors';
import { spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

export const listStyles = StyleSheet.create({
  loader: {
    paddingVertical: spacing.md,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing['3xl'],
  },
  emptyTitle: {
    fontSize: typography.body.fontSize,
    fontWeight: '600',
    fontFamily: typography.body.fontFamily,
    color: colors.label.text,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: typography.caption.fontSize,
    fontWeight: typography.caption.fontWeight,
    fontFamily: typography.caption.fontFamily,
    color: colors.border.icon,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
});
