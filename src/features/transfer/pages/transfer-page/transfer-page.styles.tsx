// transfer page styles

import { colors } from '@/tokens/colors';
import { spacing } from '@/tokens/spacing';
import { StyleSheet } from 'react-native';

export const transferPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.neutral,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    marginTop: spacing.md,
    gap: spacing.sm,
  },
  section: {
    paddingHorizontal: spacing.md,
  },
});
