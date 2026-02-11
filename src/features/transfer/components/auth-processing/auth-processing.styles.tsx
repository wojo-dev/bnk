import { colors } from '@/tokens/colors';
import { spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { StyleSheet } from 'react-native';

const DOT_SIZE = 12;

export const authProcessingStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: spacing.lg,
  },
  dotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: colors.accent.primary,
  },
  statusText: {
    ...typography.body,
    textAlign: 'center',
    color: colors.label.placeholder,
  },
});
