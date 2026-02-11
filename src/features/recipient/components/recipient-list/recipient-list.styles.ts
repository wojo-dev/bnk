import { colors } from '@/tokens/colors';
import { spacing } from '@/tokens/spacing';
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
  recipientRow: {
    margin: spacing.xs,
  },
});
