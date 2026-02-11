import { colors } from '@/tokens/colors';
import { radius, spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: radius['2xl'],
    backgroundColor: '#EBF0FB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  shieldBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.background.neutral,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.background.background,
  },
  title: {
    fontSize: typography.heading.fontSize,
    fontWeight: typography.heading.fontWeight,
    fontFamily: typography.heading.fontFamily,
    lineHeight: typography.heading.lineHeight,
    color: colors.label.text,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  description: {
    fontSize: typography.body.fontSize,
    fontWeight: typography.body.fontWeight,
    fontFamily: typography.body.fontFamily,
    lineHeight: typography.body.lineHeight,
    color: colors.label.placeholder,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  button: {
    backgroundColor: colors.background.primary,
    paddingVertical: spacing.sm + 4,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.xl,
  },
  buttonLabel: {
    fontSize: typography.button.fontSize,
    fontWeight: '600',
    fontFamily: typography.button.fontFamily,
    color: colors.background.neutral,
  },
});
