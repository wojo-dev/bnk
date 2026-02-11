import { colors } from '@/tokens/colors';
import { sizes } from '@/tokens/sizes';
import { spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';
export const transactionListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.neutral,
  },
  sectionHeader: {
    paddingBottom: spacing.sm,
  },
  sectionTitle: {
    fontSize: typography.caption.fontSize,
    fontWeight: '600',
    fontFamily: typography.caption.fontFamily,
    letterSpacing: 1,
    color: colors.label.primary,
    textTransform: 'uppercase',
    paddingTop: spacing.sm,
  },

  contentContainer: {
    paddingBottom: sizes['7xl'] + spacing.sm,
  },
});
