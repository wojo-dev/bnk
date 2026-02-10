// history page styles

import { colors } from '@/features/shared/styles/tokens/colors';
import { spacing } from '@/features/shared/styles/tokens/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.neutral,
    paddingHorizontal: spacing.md,
  },
});
