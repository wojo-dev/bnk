import { colors } from '@/tokens/colors';
import { radius, spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

export const recipientListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.neutral,
  },
  contentContainer: {
    paddingVertical: spacing.sm,
    gap: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    marginHorizontal: spacing.sm,
    gap: spacing.md,
    borderWidth: 1.5,
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
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.border.input,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
});
