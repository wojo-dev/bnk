import { colors } from '@/tokens/colors';
import { spacing } from '@/tokens/spacing';
import { StyleSheet } from 'react-native';

export const processPageStyles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background.neutral,
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background.neutral,
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
  },
});
