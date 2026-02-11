// transfer page styles

import { colors } from '@/tokens/colors';
import { spacing } from '@/tokens/spacing';
import { StyleSheet } from 'react-native';

export const transferPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.neutral,
    paddingTop: spacing.md,
    paddingHorizontal: spacing.sm,
  },
  content: {
    marginTop: spacing.md,
    flex: 1,
    gap: spacing.sm,
  },
});
