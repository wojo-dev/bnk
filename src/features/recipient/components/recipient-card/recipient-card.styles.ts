import { colors } from '@/tokens/colors';
import { sizes } from '@/tokens/sizes';
import { radius, spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

export const recipientCardStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.xs + spacing.sm,
    paddingVertical: spacing.xs + spacing.sm,
    paddingRight: spacing.xs + spacing.md,
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.border.input,
    borderRadius: radius.xl,
    backgroundColor: colors.background.neutral,
  },
  rowSelected: {
    borderColor: colors.primary,
    backgroundColor: '#EEF2FF',
  },
  rowContent: {
    flex: 1,
    gap: 2,
  },
  name: {
    fontSize: typography.body.fontSize,
    fontWeight: '600',
    fontFamily: typography.body.fontFamily,
    color: colors.label.text,
  },
  subtitle: {
    fontSize: typography.caption.fontSize,
    fontWeight: typography.caption.fontWeight,
    fontFamily: typography.caption.fontFamily,
    color: colors.border.icon,
  },
  radio: {
    width: sizes.xl,
    height: sizes.xl,
    borderRadius: radius.lg,
    borderWidth: 2,
    borderColor: colors.border.input,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
  changeText: {
    fontSize: typography.caption.fontSize,
    fontWeight: '600',
    fontFamily: typography.caption.fontFamily,
    color: colors.primary,
  },
});
