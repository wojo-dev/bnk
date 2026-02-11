// history page styles

import { colors } from '@/features/shared/styles/tokens/colors';
import { sizes } from '@/features/shared/styles/tokens/sizes';
import { spacing } from '@/features/shared/styles/tokens/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.neutral,
    paddingHorizontal: spacing.md,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.background.neutral,
    paddingTop: sizes['7xl'] + spacing.sm,
  },
});
