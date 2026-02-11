import { colors } from '@/tokens/colors';
import { sizes } from '@/tokens/sizes';
import { radius, spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

export const errorBoundaryStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
    backgroundColor: colors.background.neutral,
  },
  iconContainer: {
    width: sizes['4xl'],
    height: sizes['4xl'],
    borderRadius: radius['2xl'],
    backgroundColor: colors.background.error,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  heading: {
    fontSize: typography.heading.fontSize,
    fontWeight: typography.heading.fontWeight,
    fontFamily: typography.heading.fontFamily,
    lineHeight: typography.heading.lineHeight,
    color: colors.label.text,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  message: {
    fontSize: typography.body.fontSize,
    fontWeight: typography.body.fontWeight,
    fontFamily: typography.body.fontFamily,
    lineHeight: typography.body.lineHeight,
    color: colors.label.placeholder,
    marginBottom: spacing.xl,
    textAlign: 'center',
  },
});
