// transfer page styles

import { colors } from '@/tokens/colors';
import { spacing } from '@/tokens/spacing';
import { StyleSheet } from 'react-native';

export const transferPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.neutral,
    paddingHorizontal: spacing.sm,
  },
  content: {
    marginTop: spacing.md,
    gap: spacing.sm,
  },
});
